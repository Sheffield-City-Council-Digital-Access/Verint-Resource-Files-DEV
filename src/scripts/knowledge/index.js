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
  console.log(item, formName);
  // window.location.href = `${url}${formName}?${customerid}${interactionid}`;
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

/**
 * Handles actions when the document is ready.
 */
function handleOnReadyKnowledge() {
  serviceMenuContainer = document.getElementById("service-menu");
  subjectMenuContainer = document.getElementById("subject-menu");
  topicsMenuContainer = document.getElementById("topics-menu");

  let redirectToForm = "";
  let tranferTypeKey = "";
  let finishTypeKey = "";
  let enquiryType = "";

  // --- MENU CREATOR AND HANDLER ------------------------------------------- \\

  // Event Listeners for Service Menu
  serviceMenuContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const card = target.closest(".card");
      const serviceId = card.dataset.id;

      const service = knowledge.find((service) => service.id === serviceId);
      if (service) {
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      } else {
        KDF.showError("Service not found");
      }
    }
  });

  // Event Listeners for Subject Menu
  subjectMenuContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const card = target.closest(".card");
      const parent = previousData.find(
        (parent) => parent.id === card.dataset.id
      );

      if (parent) {
        createCards(
          parent.topics || parent.subjects,
          topicsMenuContainer,
          parent
        );
        KDF.gotoPage("page_topic_menu", true, true, true);
      } else {
        KDF.showError("Parent not found");
      }
    }
  });

  // Event Listeners for Topics Menu
  topicsMenuContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const card = target.closest(".card");
      const contentId = card.dataset.id;

      const contentItem = previousData.find((item) => item.id === contentId);
      if (contentItem) {
        redirectToContentPage(contentItem);
      } else {
        KDF.showError("Content not found");
      }
    }
  });

  createCards(knowledge, serviceMenuContainer);

  subjectMenuButtons = document.querySelectorAll(".subject-menu-btn");
  topicMenuButtons = document.querySelectorAll(".topic-menu-btn");

  subjectMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.textContent;
      const service = knowledge.find((service) => service.name === label);

      if (service) {
        console.log("subjectMenuButtons", service);
        createCards(service.subjects, subjectMenuContainer, service);
        KDF.gotoPage("page_subject_menu", true, true, true);
      }
    });
  });

  topicMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let service;

      subjectMenuButtons.forEach((subjectButton) => {
        const subjectLabel = subjectButton.textContent;
        service = knowledge.find((service) => service.name === subjectLabel);
      });

      if (service) {
        console.log("topicMenuButtons", service);
        createCards(service.subjects, subjectMenuContainer, service);
        const label = button.textContent;

        const subject = service.subjects.find(
          (subject) => subject.name === label
        );

        if (subject) {
          if (subject.topics) {
            createCards(subject.topics, topicsMenuContainer, subject);
            KDF.gotoPage("page_topic_menu", true, true, true);
          }
        }
      }
    });
  });

  // --- LATEST NEWS -------------------------------------------------------- \\

  const newsContainer = document.getElementById("news-container");
  const archivedNewsContainer = document.getElementById(
    "archived-news-container"
  );

  const sortedNews = latestNews
    .slice()
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  renderArticles(sortedNews, newsContainer, isWithinDisplayDate);

  renderArticles(
    sortedNews,
    archivedNewsContainer,
    (publishDate, archiveDate) => {
      const currentDate = new Date();
      return new Date(archiveDate) <= currentDate;
    }
  );

  function isWithinDisplayDate(publishDate, archiveDate) {
    const currentDate = new Date();
    const publish = new Date(publishDate);
    const archive = new Date(archiveDate);
    return currentDate >= publish && currentDate < archive;
  }

  function renderArticles(newsArray, container, filterFunction) {
    container.innerHTML = ""; // Clear previous content

    // Check if there are any articles to render
    const filteredNews = newsArray.filter((newsItem) =>
      filterFunction(newsItem.publishDate, newsItem.archiveDate)
    );

    if (filteredNews.length === 0) {
      const noArticlesMessage = document.createElement("div");
      noArticlesMessage.classList.add("no-results-message");
      noArticlesMessage.textContent = "No articles available"; // Message for no articles
      container.appendChild(noArticlesMessage);
      return;
    }

    filteredNews.forEach((newsItem) => {
      const article = document.createElement("article");
      article.classList.add("news-article");
      article.tabIndex = 0;

      const title = document.createElement("h2");
      title.textContent = newsItem.title;
      article.appendChild(title);

      const content = document.createElement("div");
      content.innerHTML = newsItem.content;
      article.appendChild(content);

      const publishDate = new Date(newsItem.publishDate);
      const formattedDate = publishDate.toLocaleDateString();

      const metadata = document.createElement("p");
      metadata.classList.add("metadata");
      metadata.textContent = `Published by ${newsItem.createdBy} on ${formattedDate}`;
      article.appendChild(metadata);

      container.appendChild(article);
    });
  }

  function checkLatestNews() {
    const button = document.getElementById("latestNews");
    const currentDate = new Date();

    for (const news of latestNews) {
      const publishDate = new Date(news.publishDate);

      if ((currentDate - publishDate) / (1000 * 60 * 60 * 24) <= 3) {
        button.classList.add("new-badge");
        break;
      }
    }
  }

  checkLatestNews();

  // --- SEARCH ------------------------------------------------------------- \\

  /**
   * Escapes special characters in a string for use in a regex.
   * @param {string} string - The string to escape.
   * @returns {string} - The escaped string.
   */
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /**
   * Enhances relevance scoring based on term co-occurrence.
   * @param {number} relevance - Current relevance score.
   * @param {Object} item - The item being scored.
   * @param {Array} searchTerms - Array of search terms.
   * @returns {number} - Enhanced relevance score.
   */
  const enhanceRelevanceForCoOccurrence = (relevance, item, searchTerms) => {
    const allTermsPresent = searchTerms.every((term) => {
      const regex = new RegExp(`\\b${escapeRegExp(term)}\\b`, "i");
      return (
        (item.title && regex.test(item.title)) ||
        (item.description && regex.test(item.description)) ||
        (item.content && regex.test(item.content))
      );
    });

    if (allTermsPresent) {
      relevance += 10; // Boost for all terms found
    }

    return relevance;
  };

  /**
   * Calculates the relevance score for an item based on search terms and phrases.
   * @param {Object} item - The item to calculate relevance for.
   * @param {Array} searchTerms - The array of search terms.
   * @param {Array} searchPhrases - The array of search phrases.
   * @returns {number} - The relevance score.
   */
  const calculateRelevance = (item, searchTerms, searchPhrases) => {
    let relevance = 0;

    // Handle phrases first
    searchPhrases.forEach((phrase) => {
      if (phrase.length < 2) return; // Skip very short phrases

      const escapedPhrase = escapeRegExp(phrase);
      const regexPhrase = new RegExp(`\\b${escapedPhrase}\\b`, "gi");

      if (item.title && regexPhrase.test(item.title)) {
        relevance += 50; // High weight for exact phrase in title
      }

      if (item.description && regexPhrase.test(item.description)) {
        relevance += 30; // Medium weight for exact phrase in description
      }

      if (item.content && regexPhrase.test(item.content)) {
        relevance += 10; // Lower weight for exact phrase in content
      }

      // Enhance relevance if all terms are present
      relevance = enhanceRelevanceForCoOccurrence(relevance, item, searchTerms);
    });

    // Handle individual terms
    searchTerms.forEach((term) => {
      if (term.length < 2) return; // Skip very short terms

      const escapedTerm = escapeRegExp(term);
      const regexTerm = new RegExp(`\\b${escapedTerm}\\b`, "gi");

      // Title matches carry more weight
      if (item.title && regexTerm.test(item.title)) {
        relevance += 5; // Weight for title matches
      }

      // Description matches have medium weight
      if (item.description && regexTerm.test(item.description)) {
        relevance += 3; // Weight for description matches
      }

      // Content matches have lower weight
      if (item.content && regexTerm.test(item.content)) {
        relevance += 1; // Weight for content matches
      }
    });

    return relevance;
  };

  /**
   * Searches the knowledge base and latest news for a given query.
   * @param {Array} knowledge - The knowledge base array.
   * @param {Array} latestNews - The latest news array.
   * @param {string} searchQuery - The user's search query.
   * @returns {Array} - The sorted array of search results.
   */
  function searchKnowledge(knowledge, latestNews, searchQuery) {
    if (!Array.isArray(knowledge) || !Array.isArray(latestNews)) {
      return [];
    }

    // Split searchQuery into terms and phrases
    const phrasePattern = /"([^"]+)"/g;
    let match;
    const searchPhrases = [];
    let tempQuery = searchQuery;

    while ((match = phrasePattern.exec(searchQuery)) !== null) {
      searchPhrases.push(match[1].toLowerCase());
      tempQuery = tempQuery.replace(match[0], "");
    }

    const searchTerms = tempQuery
      .toLowerCase()
      .split(" ")
      .filter((term) => term.length >= 2);

    const searchableItems = knowledge.flatMap((service) =>
      service.subjects
        .filter(
          (subject) =>
            subject.constructor &&
            (subject.constructor.name.startsWith("Content") ||
              subject.constructor.name.startsWith("Form")) // Include Form
        )
        .map((contentSubject) => {
          const relevance = calculateRelevance(
            contentSubject,
            searchTerms,
            searchPhrases
          );

          return {
            ...contentSubject,
            serviceName: service.name,
            type: contentSubject.constructor.name.startsWith("Form")
              ? "form" // Set type to form
              : "knowledge",
            relevance,
          };
        })
    );

    const newsItems = latestNews.map((news) => {
      const relevance = calculateRelevance(news, searchTerms, searchPhrases);

      return {
        title: news.title,
        description: news.content,
        content: news.content,
        type: "news",
        relevance,
      };
    });

    const combinedItems = [...searchableItems, ...newsItems];

    const results = combinedItems
      .filter((item) => item.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);

    return results;
  }

  function renderSearchResults(results) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    if (!results || results.length === 0) {
      const noResultsMessage = document.createElement("div");
      noResultsMessage.classList.add("no-results-message");
      noResultsMessage.textContent = "No results found";
      resultsContainer.appendChild(noResultsMessage);
      return;
    }

    results.forEach((result, index) => {
      const card = document.createElement("div");
      card.classList.add("search-card");
      card.setAttribute("tabindex", "0");

      if (result.type === "news") {
        card.classList.add("highlight-news");
      }

      const title = document.createElement("h3");
      title.textContent = result.title || result.name;
      const description = document.createElement("div");
      description.innerHTML = result.description;

      card.appendChild(title);
      card.appendChild(description);
      resultsContainer.appendChild(card);

      card.addEventListener("click", () => {
        handleCardClick(result);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleCardClick(result);
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

  /**
   * Handles the click event on a search result or option card.
   * @param {Object} result - The search result or option item.
   */
  function handleCardClick(result) {
    switch (result.type) {
      case "knowledge":
        // Redirect to the content page for knowledge items
        redirectToContentPage(result);
        break;

      case "news":
        // Navigate to the latest news page
        KDF.gotoPage("page_latest_news", true, true, true);
        break;

      case "form":
        // Redirect directly to the external form URL
        redirectToFormPage(result);
        break;

      default:
        console.warn("Unknown result type:", result.type);
        break;
    }
  }

  /**
   * Logs the user's journey for analytics or tracking purposes.
   * @param {string} eventType - The type of event (e.g., "View Content", "View Form").
   * @param {string} description - A description of the event.
   */
  function logUserJourney(eventType, description) {
    // Implement your logging or analytics tracking here
    // Example:
    if (window.analytics) {
      window.analytics.track(eventType, {
        description: description,
        timestamp: new Date().toISOString(),
      });
    } else {
      console.log(`${eventType}: ${description}`);
    }
  }

  searchInput = document.getElementById("search-input");

  $("#search-button").on("click", () => {
    const results = searchKnowledge(
      knowledge,
      latestNews,
      searchInput.value.toLowerCase()
    );
    logUserJourney("Search", `Search performed for query: ${searchInput}`);

    renderSearchResults(results);
    KDF.gotoPage("page_search_results", true, true, true);
  });

  $("#dform_widget_button_but_launch_process").on("click", () => {
    const { protocol, hostname } = window.location;
    const url = `${protocol}//${hostname}/form/launch/`;

    const customerid = KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : "";
    const interactionid = `interactionid=${KDF.getParams().interactionid}`;
    console.log(item, result, enquiryType, tranferTypeKey);
    // window.location.href = `${url}${redirectToForm}?${customerid}${interactionid}`;
  });

  $("#dform_widget_button_but_transfer_enquiry").on("click", () => {
    const { protocol, hostname } = window.location;
    const url = `${protocol}//${hostname}/form/launch/`;

    const customerid = KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : "";
    const interactionid = `interactionid=${KDF.getParams().interactionid}`;

    window.location.href = `${url}transfered_enquiry?${customerid}${interactionid}&enquiry=${enquiryType}&typekey=${tranferTypeKey}`;
  });

  $("#dform_widget_button_but_finish_enquiry").on("click", () => {
    const { protocol, hostname } = window.location;
    const url = `${protocol}//${hostname}/form/launch/`;

    const customerid = KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : "";
    const interactionid = `interactionid=${KDF.getParams().interactionid}`;

    window.location.href = `${url}general_enquiry?${customerid}${interactionid}&enquiry=${enquiryType}&typekey=${finishTypeKey}`;
  });

  // --- SERVICES A-Z ------------------------------------------------------- \\

  function handleServicesAtoZ(services) {
    const resetFilter = document.querySelector(".reset-filter");
    const aToZFilter = document.querySelector(".a-z-filter");
    const categoriesList = document.querySelector(".categories ul");
    const optionsContainer = document.querySelector(".options");

    function createResetButton() {
      resetFilter.innerHTML = "";
      const showAllButton = document.createElement("button");
      const span = document.createElement("span");
      span.textContent = "↺";
      showAllButton.appendChild(span);

      showAllButton.addEventListener("click", () => {
        createOptions(services);
        clearActiveFilters();
      });

      resetFilter.appendChild(showAllButton);
    }

    function createAtoZFilter(visibleLetters) {
      aToZFilter.innerHTML = "";

      for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.textContent = letter;
        button.disabled = !visibleLetters.has(letter);

        button.addEventListener("click", () => {
          filterOptionsByLetter(letter);
          highlightActiveFilter(button, ".a-z-filter button");
        });

        button.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            button.click();
          }
        });

        aToZFilter.appendChild(button);
      }

      createResetButton();
    }

    function createCategories() {
      const categories = new Set();

      services.forEach((service) => {
        service.subjects.forEach((subject) => {
          if (subject.meta && subject.meta.type) {
            categories.add(subject.meta.type);
          }
          if (Array.isArray(subject.topics)) {
            subject.topics.forEach((topic) => {
              if (topic.meta && topic.meta.type) {
                categories.add(topic.meta.type);
              }
            });
          }
          if (Array.isArray(subject.forms)) {
            // Include forms
            subject.forms.forEach((form) => {
              if (form.meta && form.meta.type) {
                categories.add(form.meta.type);
              }
            });
          }
        });
      });

      const sortedCategories = Array.from(categories).sort();

      sortedCategories.forEach((category) => {
        const li = document.createElement("li");
        li.textContent = category;
        li.tabIndex = 0;

        li.addEventListener("click", () => {
          filterByCategory(category);
          highlightActiveFilter(li, ".categories li");
        });

        li.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            li.click();
          }
        });

        categoriesList.appendChild(li);
      });
    }

    function createOptions(filteredServices, updateAtoZ = true) {
      const resultsContainer = document.querySelector(".options");
      resultsContainer.innerHTML = "";

      const visibleLetters = new Set();

      let options = [];

      filteredServices.forEach((service) => {
        if (Array.isArray(service.subjects)) {
          service.subjects.forEach((subject) => {
            // Handle Content subjects
            if (subject.content) {
              const card = document.createElement("div");
              card.classList.add("search-card");
              card.setAttribute("tabindex", "0");

              const title = document.createElement("h3");
              title.textContent = subject.name;

              const description = document.createElement("div");
              description.innerHTML = subject.description;

              card.appendChild(title);
              card.appendChild(description);

              card.dataset.option = JSON.stringify({
                id: subject.id,
                name: subject.name,
                description: subject.description,
                content: subject.content,
                process: subject.process,
                transfer: subject.transfer,
                finish: subject.finish,
                meta: subject.meta,
                lastModified: subject.lastModified,
                serviceName: service.name,
                type: subject.constructor.name.startsWith("Form")
                  ? "form"
                  : "knowledge", // Set type
              });

              options.push(card);

              if (subject.name) {
                visibleLetters.add(subject.name[0].toUpperCase());
              }
            }

            // Handle Forms
            if (subject.forms) {
              const card = document.createElement("div");
              card.classList.add("search-card");
              card.setAttribute("tabindex", "0");

              const title = document.createElement("h3");
              title.textContent = subject.name;

              const description = document.createElement("div");
              description.innerHTML = subject.description;

              card.appendChild(title);
              card.appendChild(description);

              card.dataset.option = JSON.stringify({
                id: subject.id,
                name: subject.name,
                description: subject.description,
                formName: subject.formName,
                meta: subject.meta,
                lastModified: subject.lastModified,
                serviceName: service.name,
                type: "form", // Explicit type
              });

              options.push(card);

              if (subject.name) {
                visibleLetters.add(subject.name[0].toUpperCase());
              }
            }

            // Handle Topics
            if (Array.isArray(subject.topics)) {
              const topicFilterFn = determineFilter(subject);
              subject.topics
                .filter(topicFilterFn) // Apply Content Class Filtering
                .forEach((topic) => {
                  if (topic.content) {
                    const card = document.createElement("div");
                    card.classList.add("search-card");
                    card.setAttribute("tabindex", "0");

                    const title = document.createElement("h3");
                    title.textContent = topic.name;

                    const description = document.createElement("div");
                    description.innerHTML = topic.description;

                    card.appendChild(title);
                    card.appendChild(description);

                    card.dataset.option = JSON.stringify({
                      id: topic.id,
                      name: topic.name,
                      description: topic.description,
                      content: topic.content,
                      process: topic.process,
                      transfer: topic.transfer,
                      finish: topic.finish,
                      meta: topic.meta,
                      lastModified: topic.lastModified,
                      serviceName: service.name,
                      subjectName: subject.name,
                      type: "knowledge",
                    });

                    options.push(card);

                    if (topic.name) {
                      visibleLetters.add(topic.name[0].toUpperCase());
                    }
                  }
                });
            }
          });
        }
      });

      options.sort((a, b) => {
        const nameA = JSON.parse(a.dataset.option).name.toUpperCase();
        const nameB = JSON.parse(b.dataset.option).name.toUpperCase();
        return nameA.localeCompare(nameB);
      });

      options.forEach((card) => {
        resultsContainer.appendChild(card);

        card.addEventListener("click", () => {
          const optionData = JSON.parse(card.dataset.option);
          handleCardClick(optionData);
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

      if (updateAtoZ) {
        createAtoZFilter(visibleLetters);
      }
    }

    function filterOptionsByLetter(letter) {
      const filteredServices = services.filter((service) =>
        service.subjects.some(
          (subject) =>
            subject.name.toUpperCase().startsWith(letter) ||
            (Array.isArray(subject.topics) &&
              subject.topics.some((topic) =>
                topic.name.toUpperCase().startsWith(letter)
              )) ||
            (Array.isArray(subject.forms) &&
              subject.forms.some((form) =>
                form.name.toUpperCase().startsWith(letter)
              ))
        )
      );

      const refinedFilteredServices = filteredServices.map((service) => {
        return {
          ...service,
          subjects: service.subjects
            .map((subject) => ({
              ...subject,
              topics: Array.isArray(subject.topics)
                ? subject.topics.filter((topic) =>
                    topic.name.toUpperCase().startsWith(letter)
                  )
                : [],
              forms: Array.isArray(subject.forms)
                ? subject.forms.filter((form) =>
                    form.name.toUpperCase().startsWith(letter)
                  )
                : [],
            }))
            .filter(
              (subject) =>
                subject.name.toUpperCase().startsWith(letter) ||
                subject.topics.length > 0 ||
                subject.forms.length > 0
            ),
        };
      });

      createOptions(refinedFilteredServices, false);

      clearActiveFilters(".categories li");

      const activeLetterButton = Array.from(aToZFilter.children).find(
        (btn) => btn.textContent === letter
      );
      if (activeLetterButton) {
        highlightActiveFilter(activeLetterButton, ".a-z-filter button");
      }
    }

    function filterByCategory(category) {
      const filteredServices = services.filter((service) =>
        service.subjects.some(
          (subject) =>
            (subject.meta && subject.meta.type === category) ||
            (Array.isArray(subject.topics) &&
              subject.topics.some(
                (topic) => topic.meta && topic.meta.type === category
              )) ||
            (Array.isArray(subject.forms) &&
              subject.forms.some(
                (form) => form.meta && form.meta.type === category
              ))
        )
      );

      const refinedFilteredServices = filteredServices.map((service) => {
        return {
          ...service,
          subjects: service.subjects
            .map((subject) => ({
              ...subject,
              topics: Array.isArray(subject.topics)
                ? subject.topics.filter(
                    (topic) => topic.meta && topic.meta.type === category
                  )
                : [],
              forms: Array.isArray(subject.forms)
                ? subject.forms.filter(
                    (form) => form.meta && form.meta.type === category
                  )
                : [],
            }))
            .filter(
              (subject) =>
                (subject.meta && subject.meta.type === category) ||
                subject.topics.length > 0 ||
                subject.forms.length > 0 // Include forms
            ),
        };
      });

      createOptions(refinedFilteredServices, false);

      clearActiveFilters(".a-z-filter button");

      const activeCategoryButton = Array.from(
        document.querySelectorAll(".categories li")
      ).find((li) => li.textContent.trim() === category);
      if (activeCategoryButton) {
        highlightActiveFilter(activeCategoryButton, ".categories li");
      }
    }

    function highlightActiveFilter(element, selector) {
      clearActiveFilters(selector);
      element.classList.add("active");
    }

    function clearActiveFilters(
      selector = ".a-z-filter button, .categories li"
    ) {
      const activeElements = document.querySelectorAll(selector);
      activeElements.forEach((el) => el.classList.remove("active"));
    }

    if (Array.isArray(services)) {
      createCategories();
      createOptions(services);
    }
  }

  handleServicesAtoZ(knowledge);
}

function logUserJourney(action, details) {
  const journeyField = document.getElementById(
    "dform_widget_txt_knowledge_path"
  );
  const journey = journeyField.value ? JSON.parse(journeyField.value) : [];
  const timestamp = new Date().toISOString();

  journey.push({
    action,
    details,
    timestamp,
  });

  journeyField.value = JSON.stringify(journey);
}

document.addEventListener("DOMContentLoaded", function () {
  const resetFilterButton = document.querySelector(
    "#dform_container .reset-filter button"
  );
  if (resetFilterButton) {
    resetFilterButton.addEventListener("click", function () {
      const span = this.querySelector("span");
      // Remove the class if it's already there
      span.classList.remove("spinning");
      // Force a reflow
      void span.offsetWidth;
      // Add the class to trigger the animation
      span.classList.add("spinning");

      // Remove the class after the animation completes
      setTimeout(() => {
        span.classList.remove("spinning");
      }, 500);
    });
  }
});
