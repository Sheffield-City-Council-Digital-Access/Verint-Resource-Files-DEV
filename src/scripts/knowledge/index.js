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

// --- FUNCTIONS ------------------------------------------------------------ \\

/**
 * Determines the type of children within a parent object.
 * @param {Object} parent - The parent object containing children.
 * @returns {string} - The type of children ("Menu", "Content", or "Unknown").
 */
function getChildType(parent) {
  if (!parent.subjects && !parent.topics) {
    return "Unknown";
  }

  const firstChild = parent.subjects?.[0] || parent.topics?.[0];

  if (!firstChild || !firstChild.constructor || !firstChild.constructor.name) {
    return "Unknown";
  }

  const className = firstChild.constructor.name;

  if (className.startsWith("Menu")) {
    return "Menu";
  } else if (className.startsWith("Content")) {
    return "Content";
  } else {
    return "Unknown";
  }
}

/**
 * Determines the filter function based on the current parent object.
 * @param {Object} parent - The current parent object.
 * @returns {Function} - The filter function to apply.
 */
function determineFilter(parent) {
  const childType = getChildType(parent);

  switch (childType) {
    case "Menu":
      return (item) =>
        item.constructor && item.constructor.name.startsWith("Menu");

    case "Content":
      return (item) =>
        item.constructor && item.constructor.name.startsWith("Content");

    default:
      return () => true; // No filtering or unknown type
  }
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
            : topicsMenuContainer;

          createCards(nextLevelData, nextContainer, item);

          // **Update Breadcrumbs**
          const breadcrumbElements = document.querySelectorAll(
            hasSubjects ? ".subject-menu-btn" : ".topic-menu-btn"
          );

          if (breadcrumbElements.length > 0) {
            breadcrumbElements.forEach((breadcrumbElement) => {
              breadcrumbElement.textContent = item.name;
            });
          }

          // **Toggle Visibility of Topic Menu Buttons**
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
            hasSubjects ? "page_subject_menu" : "page_topic_menu",
            true,
            true,
            true
          );
        } else {
          redirectToContentPage(item);
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

  const subjectMenuButtons = document.querySelectorAll(".subject-menu-btn");
  const topicMenuButtons = document.querySelectorAll(".topic-menu-btn");

  subjectMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.textContent;
      const service = knowledge.find((service) => service.name === label);

      if (service) {
        createCards(
          service.subjects,
          subjectMenuContainer,
          determineFilter("sub") // **Apply MenuH Filter**
        );
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
        createCards(
          service.subjects,
          subjectMenuContainer,
          determineFilter("sub") // **Apply MenuH Filter**
        );
        const label = button.textContent;

        const subject = service.subjects.find(
          (subject) => subject.name === label
        );

        if (subject) {
          if (subject.topics) {
            createCards(
              subject.topics,
              topicsMenuContainer,
              determineFilter("topics") // **Apply Content Class Filter**
            );
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
    newsArray.forEach((newsItem) => {
      if (filterFunction(newsItem.publishDate, newsItem.archiveDate)) {
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
      }
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

  function searchKnowledge(knowledge, latestNews, searchQuery) {
    if (!Array.isArray(knowledge) || !Array.isArray(latestNews)) {
      return [];
    }

    const searchTerms = searchQuery.toLowerCase().split(" ");

    const calculateRelevance = (textToSearch) => {
      let relevance = 0;
      searchTerms.forEach((term) => {
        const regex = new RegExp(term, "gi");
        const matches = textToSearch.match(regex);
        relevance += matches ? matches.length : 0;
      });
      return relevance;
    };

    const searchableItems = knowledge.flatMap((service) =>
      service.subjects
        .filter(
          (subject) =>
            subject.constructor &&
            subject.constructor.name.startsWith("Content")
        )
        .map((contentSubject) => {
          const keywords =
            (contentSubject.meta && contentSubject.meta.keywords) || [];
          const categories =
            (contentSubject.meta && contentSubject.meta.categories) || [];
          const description = contentSubject.description || "";
          const content = contentSubject.content || "";

          const textToSearch = `
          ${keywords.join(" ")}
          ${categories.join(" ")}
          ${description}
          ${content}
        `.toLowerCase();

          return {
            ...contentSubject,
            serviceName: service.name,
            type: "knowledge",
            relevance: calculateRelevance(textToSearch),
          };
        })
    );

    const newsItems = latestNews.map((news) => {
      const textToSearch = `
      ${news.title}
      ${news.content}
    `.toLowerCase();

      return {
        title: news.title,
        description: news.content,
        content: news.content,
        type: "news",
        relevance: calculateRelevance(textToSearch),
      };
    });

    const combinedItems = [...searchableItems, ...newsItems];

    const results = combinedItems
      .filter((item) => {
        const keywords = (item.meta && item.meta.keywords) || [];
        const categories = (item.meta && item.meta.categories) || [];
        const title = item.title || "";
        const description = item.description || "";
        const content = item.content || "";

        const textToSearch = `
        ${keywords.join(" ")}
        ${categories.join(" ")}
        ${title}
        ${description}
        ${content}
      `.toLowerCase();

        return searchTerms.some((term) => textToSearch.includes(term));
      })
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

  function handleCardClick(result) {
    if (result.type === "knowledge") {
      redirectToForm = result.process.formName ? result.process.formName : "";
      tranferTypeKey = result.transfer.typeKey ? result.transfer.typeKey : "";
      finishTypeKey = result.finish.typeKey ? result.finish.typeKey : "";
      enquiryType = result.title || result.name;

      const subjectBCElement = document.querySelectorAll(".subject-menu-btn");
      if (subjectBCElement.length > 0) {
        subjectBCElement.forEach((subjectBCElement) => {
          subjectBCElement.textContent = result.serviceName;
        });
      }

      const topicBCElement = document.querySelectorAll(".topic-menu-btn");
      if (result.subjectName) {
        if (topicBCElement.length > 0) {
          topicBCElement.forEach((btn) => {
            btn.textContent = result.subjectName;
            btn.style.display = "block";
          });
        }
      } else {
        topicBCElement.forEach((btn) => {
          btn.style.display = "none";
        });
      }

      const breadcrumbElement = document.querySelector(".content-btn");
      breadcrumbElement.textContent = enquiryType;

      const titleElement = document.getElementById(
        "dform_widget_header_hrd_page_title_content"
      );
      titleElement.textContent = enquiryType;

      const contentContainer = document.getElementById(
        "dform_widget_html_ahtm_content_container"
      );
      contentContainer.innerHTML = result.content;

      const lastModifiedInfo = document.createElement("small");
      lastModifiedInfo.textContent = `Last modified on: ${result.lastModified.date} by ${result.lastModified.name}`;
      contentContainer.appendChild(lastModifiedInfo);

      const button = document.getElementById(
        "dform_widget_button_but_launch_process"
      );
      button.textContent = result.process.buttonLabel;

      hideShowMultipleElements([
        {
          name: "but_launch_process",
          display: result.process?.formName ? "show" : "hide",
        },
        {
          name: "but_transfer_enquiry",
          display: result.transfer?.typeKey ? "show" : "hide",
        },
        {
          name: "but_finish_enquiry",
          display: result.finish?.typeKey ? "show" : "hide",
        },
      ]);

      KDF.gotoPage("page_content", true, true, true);
    } else if (result.type === "news") {
      KDF.gotoPage("page_latest_news", true, true, true);
    }
  }

  const searchInput = document.getElementById("search-input");

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

    window.location.href = `${url}${redirectToForm}?${customerid}${interactionid}`;
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
                type: "knowledge",
              });

              options.push(card);

              if (subject.name) {
                visibleLetters.add(subject.name[0].toUpperCase());
              }
            }

            if (Array.isArray(subject.topics)) {
              subject.topics.forEach((topic) => {
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
            }))
            .filter(
              (subject) =>
                subject.name.toUpperCase().startsWith(letter) ||
                subject.topics.length > 0
            ),
        };
      });

      createOptions(refinedFilteredServices, false);

      clearActiveFilters(".categories li");

      const activeLetterButton = document.querySelector(
        `.a-z-filter button:nth-of-type(${letter.charCodeAt(0) - 64})`
      );
      highlightActiveFilter(activeLetterButton, ".a-z-filter button");
    }

    function filterByCategory(category) {
      const filteredServices = services.filter((service) =>
        service.subjects.some(
          (subject) =>
            (subject.meta && subject.meta.type === category) ||
            (Array.isArray(subject.topics) &&
              subject.topics.some(
                (topic) => topic.meta && topic.meta.type === category
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
            }))
            .filter(
              (subject) =>
                (subject.meta && subject.meta.type === category) ||
                subject.topics.length > 0
            ),
        };
      });

      createOptions(refinedFilteredServices, false);

      clearActiveFilters(".a-z-filter button");

      const activeCategoryButton = Array.from(
        document.querySelectorAll(".categories li")
      ).find((li) => li.textContent.trim() === category);
      highlightActiveFilter(activeCategoryButton, ".categories li");
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
