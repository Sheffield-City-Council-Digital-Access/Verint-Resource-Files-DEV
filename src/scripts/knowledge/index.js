// --- VARIABLES ------------------------------------------------------------ \\

// Global variables to store knowledge base and latest news data
let knowledge = [];
let latestNews = [];

// Current navigation state
let currentLevel = "main"; // "main", "sub", "topics"
let previousData = [];

// DOM Containers
let serviceMenuContainer;
let subjectMenuContainer;
let topicsMenuContainer;
let searchInput;
let subjectMenuButtons;
let topicMenuButtons;

// --- FUNCTIONS ------------------------------------------------------------ \\

/**
 * Determines the types of children within a parent object.
 * Supports both 'subjects' and 'topics'.
 * @param {Object} parent - The parent object containing children.
 * @returns {Set<string>} - A set of child types ("Menu", "Content", "Form").
 */
function getChildTypes(parent) {
  const childTypes = new Set();

  ["subjects", "topics"].forEach((key) => {
    if (parent[key]) {
      parent[key].forEach((item) => {
        if (item.constructor && item.constructor.name.startsWith("Menu")) {
          childTypes.add("Menu");
        }
        if (item.constructor && item.constructor.name.startsWith("Content")) {
          childTypes.add("Content");
        }
        if (item.constructor && item.constructor.name.startsWith("Form")) {
          childTypes.add("Form");
        }
      });
    }
  });

  return childTypes;
}

/**
 * Determines the filter function based on the current parent object.
 * Supports multiple child types (Menu, Content, Form).
 * @param {Object} parent - The current parent object.
 * @returns {Function} - The combined filter function to apply.
 */
function determineFilter(parent) {
  const childTypes = getChildTypes(parent);
  const filterFunctions = [];

  childTypes.forEach((type) => {
    switch (type) {
      case "Menu":
        filterFunctions.push(
          (item) => item.constructor && item.constructor.name.startsWith("Menu")
        );
        break;

      case "Content":
        filterFunctions.push(
          (item) =>
            item.constructor &&
            (item.constructor.name.startsWith("Content") ||
              item.constructor.name.startsWith("Form"))
        );
        break;

      case "Form":
        filterFunctions.push(
          (item) =>
            item.constructor &&
            (item.constructor.name.startsWith("Form") ||
              item.constructor.name.startsWith("Content"))
        );
        break;

      default:
        // No filtering for unknown types
        filterFunctions.push(() => true);
        break;
    }
  });

  // Combine all filter functions using OR logic
  return (item) => filterFunctions.some((fn) => fn(item));
}

/**
 * Creates card elements based on the provided data and container.
 * @param {Array} data - The data array containing objects to create cards for.
 * @param {HTMLElement} container - The DOM element to append the cards to.
 * @param {Object} parent - The parent object containing the current data.
 */
function createCards(data, container, parent = null) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  // Determine filter based on parent
  const filterFn = parent ? determineFilter(parent) : () => true;

  data
    .filter(filterFn) // **Apply the Dynamic Filter**
    .forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-id", item.id);
      card.setAttribute("tabindex", "0");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h3");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = item.name;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = item.description;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
      container.appendChild(card);

      // **Event Listeners**
      card.addEventListener("click", () => {
        const childType = getChildTypes(item);

        const hasSubjects = item.subjects && item.subjects.length > 0;
        const hasTopics = item.topics && item.topics.length > 0;
        let nextLevelData = null;

        if (hasSubjects) {
          nextLevelData = item.subjects;
          currentLevel = "sub";
        } else if (hasTopics) {
          nextLevelData = item.topics;
          currentLevel = "topics";
        }

        if (nextLevelData) {
          previousData = nextLevelData;
          const nextContainer = hasSubjects
            ? subjectMenuContainer
            : hasTopics
            ? topicsMenuContainer
            : null;

          createCards(nextLevelData, nextContainer, item);

          // **Update Breadcrumbs**
          const breadcrumbElements = document.querySelectorAll(
            hasSubjects
              ? ".subject-menu-btn"
              : hasTopics
              ? ".topic-menu-btn"
              : null
          );

          if (breadcrumbElements.length > 0) {
            breadcrumbElements.forEach((breadcrumbElement) => {
              breadcrumbElement.textContent = item.name;
            });
          }

          // **Toggle Visibility of Menu Buttons**
          const topicMenuButtons = document.querySelectorAll(".topic-menu-btn");

          if (hasSubjects) {
            topicMenuButtons.forEach((btn) => {
              btn.style.display = "none";
            });
          }
          if (hasTopics) {
            topicMenuButtons.forEach((btn) => {
              btn.style.display = "block";
            });
          }

          // **Navigate to the Appropriate Page**
          KDF.gotoPage(
            hasSubjects
              ? "page_subject_menu"
              : hasTopics
              ? "page_topic_menu"
              : null,
            true,
            true,
            true
          );
        } else {
          // No further navigation, handle content
          if (item.formName) {
            redirectToFormPage(item);
          } else {
            redirectToContentPage(item);
          }
        }
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          card.click();
        }
      });

      card.addEventListener("focus", () => {
        card.classList.add("focus");
      });

      card.addEventListener("blur", () => {
        card.classList.remove("focus");
      });
    });
}

// src/scripts/knowledge/index.js

// src/scripts/knowledge/index.js

/**
 * Redirects the user to the content page and updates breadcrumbs based on the item's hierarchy.
 * @param {Object} item - The content item being displayed.
 */
function redirectToContentPage(item) {
  // Find the parent hierarchy for the clicked item
  const hierarchy = findParentHierarchy(knowledge, item.id);

  if (!hierarchy) {
    console.warn("Parent hierarchy not found for item:", item);
    return;
  }

  const { service, subject, topic } = hierarchy;
  console.log("hierarchy", hierarchy);

  // Select breadcrumb elements by their unique IDs
  const serviceBreadcrumbContent = document.getElementById(
    "dform_widget_button_but_subject_menu_content"
  );
  const serviceBreadcrumbTopicMenu = document.getElementById(
    "dform_widget_button_but_subject_menu_topic_menu"
  );
  const serviceBreadcrumbSubjectMenu = document.getElementById(
    "dform_widget_button_but_subject_menu_subject_menu"
  );

  const subjectBreadcrumbContent = document.getElementById(
    "dform_widget_button_but_topic_menu_content"
  );
  const subjectBreadcrumbTopicMenu = document.getElementById(
    "dform_widget_button_but_topic_menu_topic_menu"
  );

  const topicBreadcrumbContent = document.getElementById(
    "dform_widget_button_but_content_content"
  );

  const activeBreadcrumb = document.querySelector(".breadcrumb .active");

  if (topic) {
    // **Route 1:** topic is not null

    // Update Service Breadcrumbs
    if (serviceBreadcrumbContent) {
      serviceBreadcrumbContent.textContent = service.name;
      serviceBreadcrumbContent.setAttribute("data-id", service.id);
      // Add click event to navigate back to the service
      serviceBreadcrumbContent.onclick = () => {
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_subject_menu_content' not found."
      );
    }

    if (serviceBreadcrumbTopicMenu) {
      serviceBreadcrumbTopicMenu.textContent = service.name;
      serviceBreadcrumbTopicMenu.setAttribute("data-id", service.id);
      // Add click event to navigate back to the service topic menu
      serviceBreadcrumbTopicMenu.onclick = () => {
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_subject_menu_topic_menu' not found."
      );
    }

    if (serviceBreadcrumbSubjectMenu) {
      serviceBreadcrumbSubjectMenu.textContent = service.name;
      serviceBreadcrumbSubjectMenu.setAttribute("data-id", service.id);
      // Add click event to navigate back to the service subject menu
      serviceBreadcrumbSubjectMenu.onclick = () => {
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_subject_menu_subject_menu' not found."
      );
    }

    // Update Subject Breadcrumbs
    if (subjectBreadcrumbContent) {
      subjectBreadcrumbContent.textContent = subject.name;
      subjectBreadcrumbContent.setAttribute("data-id", subject.id);
      subjectBreadcrumbContent.style.display = "block"; // Ensure it's visible
      // Add click event to navigate back to the subject
      subjectBreadcrumbContent.onclick = () => {
        createCards(
          subject.topics || subject.subjects,
          topicsMenuContainer,
          subject
        );
        KDF.gotoPage("page_topic_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_topic_menu_content' not found."
      );
    }

    if (subjectBreadcrumbTopicMenu) {
      subjectBreadcrumbTopicMenu.textContent = subject.name;
      subjectBreadcrumbTopicMenu.setAttribute("data-id", subject.id);
      // Add click event to navigate back to the subject's topic menu
      subjectBreadcrumbTopicMenu.onclick = () => {
        createCards(
          subject.topics || subject.subjects,
          topicsMenuContainer,
          subject
        );
        KDF.gotoPage("page_topic_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_topic_menu_topic_menu' not found."
      );
    }

    // Update Topic Breadcrumb
    if (topicBreadcrumbContent) {
      topicBreadcrumbContent.textContent = topic.name;
      topicBreadcrumbContent.setAttribute("data-id", topic.id);
      topicBreadcrumbContent.style.display = "block"; // Ensure it's visible
      subjectBreadcrumbContent.classList.remove("last-visible");
      // Add click event to navigate back to the topic
      topicBreadcrumbContent.onclick = () => {
        createCards(topic.content, contentContainer, topic);
        KDF.gotoPage("page_specific_topic", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_content_content' not found."
      );
    }

    // Ensure all breadcrumbs related to Route 1 are visible
    if (serviceBreadcrumbContent)
      serviceBreadcrumbContent.style.display = "block";
    if (serviceBreadcrumbTopicMenu)
      serviceBreadcrumbTopicMenu.style.display = "block";
    if (serviceBreadcrumbSubjectMenu)
      serviceBreadcrumbSubjectMenu.style.display = "block";
    if (subjectBreadcrumbTopicMenu)
      subjectBreadcrumbTopicMenu.style.display = "block";
  } else {
    // **Route 2:** topic is null

    // Update Service Breadcrumbs
    if (serviceBreadcrumbContent) {
      serviceBreadcrumbContent.textContent = service.name;
      serviceBreadcrumbContent.setAttribute("data-id", service.id);
      // Add click event to navigate back to the service
      serviceBreadcrumbContent.onclick = () => {
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_subject_menu_content' not found."
      );
    }

    if (serviceBreadcrumbSubjectMenu) {
      serviceBreadcrumbSubjectMenu.textContent = service.name;
      serviceBreadcrumbSubjectMenu.setAttribute("data-id", service.id);
      // Add click event to navigate back to the service subject menu
      serviceBreadcrumbSubjectMenu.onclick = () => {
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_subject_menu_subject_menu' not found."
      );
    }

    if (serviceBreadcrumbTopicMenu) {
      serviceBreadcrumbTopicMenu.textContent = service.name;
      serviceBreadcrumbTopicMenu.setAttribute("data-id", service.id);
      // Add click event to navigate back to the service topic menu
      serviceBreadcrumbTopicMenu.onclick = () => {
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_subject_menu_topic_menu' not found."
      );
    }

    // Update Subject Breadcrumb
    if (subjectBreadcrumbContent) {
      subjectBreadcrumbContent.textContent = subject.name;
      subjectBreadcrumbContent.setAttribute("data-id", subject.id);
      subjectBreadcrumbContent.style.display = "block"; // Ensure it's visible
      // Add click event to navigate back to the subject
      subjectBreadcrumbContent.onclick = () => {
        createCards(subject.subjects, subjectMenuContainer, subject);
        KDF.gotoPage("page_subject_menu", true, true, true);
      };
    } else {
      console.warn(
        "Breadcrumb element '#dform_widget_button_but_content_content' not found."
      );
    }

    // Hide Topic Breadcrumb since topic is null
    if (subjectBreadcrumbTopicMenu) {
      subjectBreadcrumbTopicMenu.textContent = "";
      subjectBreadcrumbTopicMenu.style.display = "none"; // Hide the breadcrumb
      // Update the last visible breadcrumb
      subjectBreadcrumbContent.classList.add("last-visible");
    }

    if (topicBreadcrumbContent) {
      topicBreadcrumbContent.textContent = "";
      topicBreadcrumbContent.style.display = "none"; // Hide the breadcrumb
      // Update the last visible breadcrumb
      subjectBreadcrumbContent.classList.add("last-visible");
    }

    // Ensure serviceBreadcrumbTopicMenu related to Route 2 is handled as Route 1 does
    // If there are any Route 2 specific elements, handle them here
  }

  // Update Active Breadcrumb (Content)
  if (activeBreadcrumb) {
    activeBreadcrumb.textContent = item.name;
  } else {
    console.warn("Breadcrumb element '.breadcrumb .active' not found.");
  }

  // Update Other Elements as Necessary
  const titleElement = document.getElementById(
    "dform_widget_header_hrd_page_title_content"
  );
  if (titleElement) {
    titleElement.textContent = item.name;
  } else {
    console.warn(
      "Title element 'dform_widget_header_hrd_page_title_content' not found."
    );
  }

  // Update the Content Container
  const contentContainer = document.getElementById(
    "dform_widget_html_ahtm_content_container"
  );
  if (contentContainer) {
    contentContainer.innerHTML = item.content || "";

    if (item.lastModified) {
      const lastModifiedInfo = document.createElement("small");
      lastModifiedInfo.textContent = `Last modified on: ${item.lastModified.date} by ${item.lastModified.name}`;
      contentContainer.appendChild(lastModifiedInfo);
    }
  } else {
    console.warn(
      "Content container 'dform_widget_html_ahtm_content_container' not found."
    );
  }

  // Update the Button Label
  const button = document.getElementById(
    "dform_widget_button_but_launch_process"
  );
  if (button) {
    button.textContent = item.process?.buttonLabel || "Launch Process";
  } else {
    console.warn(
      "Button element 'dform_widget_button_but_launch_process' not found."
    );
  }

  // Show or Hide Multiple Elements Based on the Item Properties
  hideShowMultipleElements([
    {
      name: "but_launch_process",
      display: item.process?.formName ? "show" : "hide",
    },
    {
      name: "but_transfer_enquiry",
      display: item.transfer?.typeKey ? "show" : "hide",
    },
    {
      name: "but_finish_enquiry",
      display: item.finish?.typeKey ? "show" : "hide",
    },
  ]);

  // Navigate to the Content Page
  KDF.gotoPage("page_content", true, true, true);
}

/**
 * Redirects the user to the specified form URL.
 * @param {Object} item - The form item containing the form URL details.
 */
function redirectToFormPage(item) {
  const formName = item.formName; // Ensure that each Form item has a 'formURL' property

  if (!formName) {
    console.warn("Form name not specified for item:", item);
    return;
  }

  logUserJourney("View Form", `Viewed form: ${formName}`);

  const { protocol, hostname } = window.location;
  const url = `${protocol}//${hostname}/form/launch/`;

  const customerid = KDF.getParams().customerid
    ? `customerid=${KDF.getParams().customerid}&`
    : "";
  const interactionid = `interactionid=${KDF.getParams().interactionid}`;

  window.location.href = `${url}${formName}?${customerid}${interactionid}`;
}

/**
 * Recursively searches the knowledge base to find the parent hierarchy of a given item ID.
 * @param {Array} knowledgeData - The knowledge base array.
 * @param {string} itemId - The ID of the item to find.
 * @returns {Object|null} - An object containing service, subject, and topic, or null if not found.
 */
function findParentHierarchy(knowledgeData, itemId) {
  for (const service of knowledgeData) {
    for (const subject of service.subjects) {
      // Check if the subject is the item
      if (subject.id === itemId) {
        return { service, subject, topic: null };
      }

      // Check if the subject has topics
      if (Array.isArray(subject.topics)) {
        for (const topic of subject.topics) {
          if (topic.id === itemId) {
            return { service, subject, topic };
          }
        }
      }

      // If the subject has forms, check them as well
      if (Array.isArray(subject.forms)) {
        for (const form of subject.forms) {
          if (form.id === itemId) {
            return { service, subject, topic: null };
          }
        }
      }
    }
  }

  // Item not found
  return null;
}

/**
 * Initializes the knowledge base interface
 * This function sets up the header, navigation, and footer
 */
function handleInitialisingKnowledge() {
  // IIFE for header and navigation setup
  // Using an IIFE to encapsulate the setup logic and avoid polluting the global scope
  (() => {
    // DOM element selection
    const titleContainer = document.querySelector(".title-container");
    const title = titleContainer.querySelector("h1");

    // Create header top section
    // This creates a new container for the title and search functionality
    const headerTop = document.createElement("div");
    headerTop.classList.add("header-top");

    // Create search container
    // The search functionality is added here for easy access
    const searchContainer = document.createElement("div");
    searchContainer.id = "search-container";
    searchContainer.innerHTML = `
        <input type="text" id="search-input" placeholder="Search">
        <button type="button" id="search-button">Search</button>
      `;

    // Assemble header top section
    headerTop.appendChild(title);
    headerTop.appendChild(searchContainer);

    // Insert header top at the beginning of title container
    // This ensures the new header structure is at the top of the page
    titleContainer.insertBefore(headerTop, titleContainer.firstChild);

    // Create main navigation
    const nav = document.createElement("nav");
    nav.id = "main-nav";

    titleContainer.appendChild(nav);

    // Define navigation items
    // This array allows for easy addition or modification of navigation items
    const navItems = [
      { label: "Main menu", page: "page_service_menu" },
      { label: "Services A-Z", page: "page_service_a_z" },
      { label: "Latest News", page: "page_latest_news" },
    ];

    /**
     * Helper function to convert labels to camelCase
     * This is used for creating consistent IDs for navigation buttons
     */
    function toCamelCase(label) {
      return label
        .replace(/\s(.)/g, (match) => match.toUpperCase())
        .replace(/\s/g, "")
        .replace(/^(.)/, (match) => match.toLowerCase());
    }

    // Create navigation buttons
    navItems.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item.label;
      button.id = toCamelCase(item.label);
      button.classList.add("link-button");

      // Add click event listener for navigation
      // This logs the user journey and navigates to the appropriate page
      button.addEventListener("click", () => {
        logUserJourney("Navigate", `Navigated to ${item.label}`);
        KDF.gotoPage(item.page, true, true, true);
      });

      const li = document.createElement("li");
      li.appendChild(button);
      nav.appendChild(li);
    });

    // Set up search functionality
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    // Enable search on Enter key press
    // This improves user experience by allowing search via Enter key
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        searchButton.click();
      }
    });
  })();

  // IIFE for footer setup
  // Using an IIFE to encapsulate the footer setup logic
  (() => {
    const footerHTML = `
    <footer class="footer" role="contentinfo">
      <div class="footer-links">
        <a href="https://sheffieldcc-it.uk.4me.com/self-service/requests/new" target="_blank">Request a change</a>
        <a href="https://sheffieldcc-it.uk.4me.com/self-service/requests/new/provide_description?template_id=681" target="_blank">Report a problem</a>
      </div>
    </footer>
  `;
    // Append footer to the end of the body
    // This ensures the footer is always at the bottom of the page
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML("beforeend", footerHTML);
  })();
}

function filterOptionsByLetter(letter) {
  const filteredServices = services.map(service => ({
    ...service,
    subjects: service.subjects.filter(subject => 
      subject.name.toUpperCase().startsWith(letter) ||
      (Array.isArray(subject.topics) && subject.topics.some(topic => topic.name.toUpperCase().startsWith(letter))) ||
      (Array.isArray(subject.forms) && subject.forms.some(form => form.name.toUpperCase().startsWith(letter)))
    ).map(subject => ({
      ...subject,
      topics: Array.isArray(subject.topics) 
        ? subject.topics.filter(topic => topic.name.toUpperCase().startsWith(letter))
        : [],
      forms: Array.isArray(subject.forms)
        ? subject.forms.filter(form => form.name.toUpperCase().startsWith(letter))
        : []
    }))
  })).filter(service => service.subjects.length > 0);

  createOptions(filteredServices, false);

  clearActiveFilters(".categories li");

  const activeLetterButton = Array.from(aToZFilter.children).find(
    (btn) => btn.textContent === letter
  );
  if (activeLetterButton) {
    highlightActiveFilter(activeLetterButton, ".a-z-filter button");
  }
}

function filterByCategory(category) {
  const filteredServices = services.map(service => ({
    ...service,
    subjects: service.subjects.filter(subject =>
      (subject.meta && subject.meta.type === category) ||
      (Array.isArray(subject.topics) && subject.topics.some(topic => topic.meta && topic.meta.type === category)) ||
      (Array.isArray(subject.forms) && subject.forms.some(form => form.meta && form.meta.type === category))
    ).map(subject => ({
      ...subject,
      topics: Array.isArray(subject.topics)
        ? subject.topics.filter(topic => topic.meta && topic.meta.type === category)
        : [],
      forms: Array.isArray(subject.forms)
        ? subject.forms.filter(form => form.meta && form.meta.type === category)
        : []
    }))
  })).filter(service => service.subjects.length > 0);

  createOptions(filteredServices, true);

  clearActiveFilters(".a-z-filter button");

  const activeCategoryButton = Array.from(
    document.querySelectorAll(".categories li")
  ).find((li) => li.textContent.trim() === category);
  if (activeCategoryButton) {
    highlightActiveFilter(activeCategoryButton, ".categories li");
  }
}
```
</rewritten_file>