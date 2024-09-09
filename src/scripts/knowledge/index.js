// --- VARIABLES ------------------------------------------------------------ \\

let knowledge = [];
let latestNews = [];

// --- FUNCTIONS ------------------------------------------------------------ \\

function handleInitialisingKnowledge() {
  (() => {
    const titleContainer = document.querySelector('.title-container');
    const title = titleContainer.querySelector('h1');

    const headerTop = document.createElement('div');
    headerTop.classList.add('header-top');

    const searchContainer = document.createElement('div');
    searchContainer.id = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="search-input" placeholder="Search">
        <button type="button" id="search-button">Search</button>
      `;

    headerTop.appendChild(title);
    headerTop.appendChild(searchContainer);

    titleContainer.insertBefore(headerTop, titleContainer.firstChild);

    const nav = document.createElement('nav');
    nav.id = 'main-nav';

    titleContainer.appendChild(nav);

    const navItems = [
      { label: 'Main menu', page: 'page_service_menu' },
      { label: 'Services A-Z', page: 'page_service_a_z' },
      { label: 'Latest News', page: 'page_latest_news' }
    ];

    function toCamelCase(label) {
      return label
        .replace(/\s(.)/g, (match) => match.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, (match) => match.toLowerCase());
    }

    navItems.forEach(item => {
      const button = document.createElement('button');
      button.textContent = item.label;
      button.id = toCamelCase(item.label);
      button.classList.add('link-button');

      button.addEventListener('click', () => {
        logUserJourney('Navigate', `Navigated to ${item.label}`);

        if (item.label === 'Home') {
          hideShowMultipleElements([
            { name: 'page_subject_menu', display: 'hide' },
            { name: 'page_topic_menu', display: 'hide' },
            { name: 'page_content', display: 'hide' },
            { name: 'page_search_results', display: 'hide' },
            { name: 'page_latest_news', display: 'hide' },
            { name: 'page_service_a_z', display: 'hide' }
          ]);
        }
        hideShowElement(item.page, 'show');
        KDF.gotoPage(item.page, true, true, true);
      });

      const li = document.createElement('li');
      li.appendChild(button);
      nav.appendChild(li);
    });

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        searchButton.click();
      }
    });
  })();

  (() => {
    // Create the footer HTML string
    const footerHTML = `
    <footer class="footer" role="contentinfo">
      <div class="footer-links">
        <a href="https://sheffieldcc-it.uk.4me.com/self-service/requests/new" target="_blank">Request a change</a>
        <a href="https://sheffieldcc-it.uk.4me.com/self-service/requests/new/provide_description?template_id=681" target="_blank">Report a problem</a>
      </div>
    </footer>
  `;

    // Find the body element
    const body = document.getElementsByTagName("body")[0];

    // Insert the footer HTML at the end of the body
    body.insertAdjacentHTML("beforeend", footerHTML);
  })();
}

function handleOnReadyKnowledge() {

  let redirectToForm = '';

  // --- BACK BUTTON HANDLER ------------------------------------------------ \\

  $('.back-btn').on('click', function () {
    hideShowElement(this.name, 'hide');
    if (this.name === 'but_back_subject_menu') {
      hideShowElement('page_subject_menu', 'hide');
    }
    if (this.name === 'but_back_topic_menu') {
      hideShowElement('page_topic_menu', 'hide');
    }
    if (this.name === 'but_back_search_results') {
      hideShowElement('page_search_results', 'hide');
    }
    if (this.name === 'but_back_content') {
      hideShowElement('page_content', 'hide');
    }
    if (this.name === 'but_back_latest_news') {
      hideShowElement('page_latest_news', 'hide');
    }
    if (this.name === 'but_back_service_a_z') {
      hideShowElement('page_service_a_z', 'hide');
    }
  });

  // --- MENU CREATOR AND HANDLER ------------------------------------------- \\

  const serviceMenuContainer = document.getElementById('service-menu');
  const subjectMenuContainer = document.getElementById('subject-menu');
  const topicsMenuContainer = document.getElementById('topics-menu');

  let currentLevel = 'main';
  let previousData = [];

  function createCards(data, container) {
    if (!container) {
      return;
    }

    container.innerHTML = '';

    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-id', item.id);
      card.setAttribute('tabindex', '0');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h3');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = item.name;

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = item.description;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
      container.appendChild(card);

      card.addEventListener('click', () => {
        const nextLevelData = item.subjects || item.topics;
        if (nextLevelData) {
          previousData = nextLevelData;
          currentLevel = item.subjects ? 'sub' : 'topics';
          createCards(nextLevelData, item.subjects ? subjectMenuContainer : topicsMenuContainer);

          const titleElement = document.getElementById(item.subjects ? 'dform_widget_header_hrd_page_title_subject_menu' : 'dform_widget_header_hrd_page_title_topic_menu');
          if (titleElement) {
            titleElement.textContent = item.name;
          } else {
            console.error('Title element not found');
          }

          hideShowElement(item.subjects ? 'page_subject_menu' : 'page_topic_menu', 'show');
          KDF.gotoPage(item.subjects ? 'page_subject_menu' : 'page_topic_menu', true, true, true);
        } else {
          redirectToContentPage(item);
        }
      });

      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          card.click();
        }
      });

      card.addEventListener('focus', () => {
        card.classList.add('focus');
      });

      card.addEventListener('blur', () => {
        card.classList.remove('focus');
      });
    });
  }

  function redirectToContentPage(item) {
    logUserJourney('View Content', `Viewed content: ${item.name}`);

    redirectToForm = item.process.formName ? item.process.formName : '';

    const titleElement = document.getElementById('dform_widget_header_hrd_page_title_content');
    titleElement.textContent = item.name;

    const contentContainer = document.getElementById('dform_widget_html_ahtm_content_container');
    contentContainer.innerHTML = item.content;

    const lastModifiedInfo = document.createElement('small');
    lastModifiedInfo.textContent = `Last modified on: ${item.lastModified.date} by ${item.lastModified.name}`;
    contentContainer.appendChild(lastModifiedInfo);

    const button = document.getElementById('dform_widget_button_but_launch_process');
    button.textContent = item.process.buttonLabel;

    hideShowElement('but_launch_process', item.process.formName ? 'show' : 'hide');

    hideShowElement('page_content', 'show');
    hideShowMultipleElements([
      { name: 'page_search_results', display: 'hide' },
      { name: 'page_content', display: 'show' }
    ]);
    KDF.gotoPage('page_content', true, true, true);
  }

  serviceMenuContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      const card = target.closest('.card');
      const serviceId = card.dataset.id;

      const service = knowledge.find(service => service.id === serviceId);
      if (service) {
        createCards(service.subjects, subjectMenuContainer);
        const titleElement = document.getElementById('dform_widget_header_hrd_page_title_subject_menu');
        titleElement.textContent = service.name;
        hideShowElement('page_subject_menu', 'show');
        KDF.gotoPage('page_subject_menu', true, true, true);
      } else {
        KDF.showError('Service not found');
      }
    }
  });

  subjectMenuContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      const card = target.closest('.card');
      const subjectId = card.dataset.id;

      const subject = previousData.find(subject => subject.id === subjectId);
      if (subject) {
        if (subject.topics) {
          createCards(subject.topics, topicsMenuContainer);
          const titleElement = document.getElementById('dform_widget_header_hrd_page_title_topic_menu');
          titleElement.textContent = subject.name;
          hideShowElement('page_topic_menu', 'show');
          KDF.gotoPage('page_topic_menu', true, true, true);
        } else {
          redirectToContentPage(subject);
        }
      } else {
        KDF.showError('Subject not found');
      }
    }
  });

  topicsMenuContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      const card = target.closest('.card');
      const topicId = card.dataset.id;

      const topic = previousData.find(topic => topic.id === topicId);
      if (topic) {
        redirectToContentPage(topic);
      } else {
        KDF.showError('Topic not found');
      }
    }
  });

  createCards(knowledge, serviceMenuContainer);

  // --- LATEST NEWS -------------------------------------------------------- \\

  const newsContainer = document.getElementById('news-container');
  const archivedNewsContainer = document.getElementById('archived-news-container');

  const sortedNews = latestNews.slice().sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  renderArticles(sortedNews, newsContainer, isWithinDisplayDate);

  renderArticles(sortedNews, archivedNewsContainer, (publishDate, archiveDate) => {
    const currentDate = new Date();
    return new Date(archiveDate) <= currentDate;
  });

  function isWithinDisplayDate(publishDate, archiveDate) {
    const currentDate = new Date();
    const publish = new Date(publishDate);
    const archive = new Date(archiveDate);
    return currentDate >= publish && currentDate < archive;
  }

  function renderArticles(newsArray, container, filterFunction) {
    newsArray.forEach((newsItem) => {
      if (filterFunction(newsItem.publishDate, newsItem.archiveDate)) {
        const article = document.createElement('article');
        article.classList.add('news-article');
        article.tabIndex = 0;

        const title = document.createElement('h2');
        title.textContent = newsItem.title;
        article.appendChild(title);

        const content = document.createElement('div');
        content.innerHTML = newsItem.content;
        article.appendChild(content);

        const publishDate = new Date(newsItem.publishDate);
        const formattedDate = publishDate.toLocaleDateString();

        const metadata = document.createElement('p');
        metadata.classList.add('metadata');
        metadata.textContent = `Published by ${newsItem.createdBy} on ${formattedDate}`;
        article.appendChild(metadata);

        container.appendChild(article);
      }
    });
  }

  function checkLatestNews() {
    const button = document.getElementById('latestNews');
    const currentDate = new Date();

    for (const news of latestNews) {
      const publishDate = new Date(news.publishDate);

      if ((currentDate - publishDate) / (1000 * 60 * 60 * 24) <= 3) {
        button.classList.add('new-badge');
        break;
      }
    }
  }

  checkLatestNews();

  // --- SEARCH ------------------------------------------------------------- \\

  function searchKnowledge(knowledge, latestNews, searchQuery) {
    if (!Array.isArray(knowledge) || !Array.isArray(latestNews)) {
      console.error('Knowledge and latestNews must be arrays');
      return [];
    }

    const searchTerms = searchQuery.toLowerCase().split(' ');

    const calculateRelevance = (textToSearch) => {
      let relevance = 0;
      searchTerms.forEach(term => {
        const regex = new RegExp(term, 'gi');
        const matches = textToSearch.match(regex);
        relevance += matches ? matches.length : 0;
      });
      return relevance;
    };

    const searchableItems = knowledge.flatMap(service =>
      service.subjects.map(subject => {
        const keywords = (subject.meta && subject.meta.keywords) || [];
        const categories = (subject.meta && subject.meta.categories) || [];
        const description = subject.description || '';
        const content = subject.content || '';

        const textToSearch = `
                ${keywords.join(' ')}
                ${categories.join(' ')}
                ${description}
                ${content}
            `.toLowerCase();

        return {
          ...subject,
          serviceName: service.name,
          type: 'knowledge',
          relevance: calculateRelevance(textToSearch),
        };
      })
    );

    const newsItems = latestNews.map(news => {
      const textToSearch = `
            ${news.title}
            ${news.content}
        `.toLowerCase();

      return {
        title: news.title,
        description: news.content,
        content: news.content,
        type: 'news',
        relevance: calculateRelevance(textToSearch),
      };
    });

    const combinedItems = [...searchableItems, ...newsItems];

    const results = combinedItems
      .filter(item => {
        const keywords = (item.meta && item.meta.keywords) || [];
        const categories = (item.meta && item.meta.categories) || [];
        const title = item.title || '';
        const description = item.description || '';
        const content = item.content || '';

        const textToSearch = `
                ${keywords.join(' ')}
                ${categories.join(' ')}
                ${title}
                ${description}
                ${content}
            `.toLowerCase();

        return searchTerms.some(term => textToSearch.includes(term));
      })
      .sort((a, b) => b.relevance - a.relevance);

    return results;
  }

  function renderSearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    results.forEach((result, index) => {
      const card = document.createElement('div');
      card.classList.add('search-card');
      card.setAttribute('tabindex', '0');

      if (result.type === 'news') {
        card.classList.add('highlight-news');
      }

      const title = document.createElement('h3');
      title.textContent = result.title || result.name;
      const description = document.createElement('div');
      description.innerHTML = result.description;

      card.appendChild(title);
      card.appendChild(description);
      resultsContainer.appendChild(card);

      card.addEventListener('click', () => {
        handleCardClick(result);
      });

      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleCardClick(result);
        }
      });

      card.addEventListener('focus', () => {
        card.classList.add('focus');
      });

      card.addEventListener('blur', () => {
        card.classList.remove('focus');
      });
    });
  }

  function handleCardClick(result) {
    if (result.type === 'knowledge') {
      const titleElement = document.getElementById('dform_widget_header_hrd_page_title_content');
      titleElement.textContent = result.title;

      const contentContainer = document.getElementById('dform_widget_html_ahtm_content_container');
      contentContainer.innerHTML = result.content;

      const button = document.getElementById('dform_widget_button_but_launch_process');
      button.textContent = result.process.buttonLabel;

      hideShowMultipleElements([
        { name: 'page_content', display: 'show' },
        { name: 'but_launch_process', display: result.process.formName ? 'show' : 'hide' }
      ]);

      KDF.showPage('page_content');
      KDF.gotoPage('page_content', true, true, true);
    } else if (result.type === 'news') {
      KDF.showPage('page_latest_news');
      KDF.gotoPage('page_latest_news', true, true, true);
    }
  }

  const searchInput = document.getElementById('search-input');

  $('#search-button').on('click', () => {
    const results = searchKnowledge(knowledge, latestNews, searchInput.value.toLowerCase());
    logUserJourney('Search', `Search performed for query: ${searchQuery}`);

    renderSearchResults(results);
    hideShowElement('page_search_results', 'show');
    KDF.gotoPage('page_search_results', true, true, true);
  });

  $('#dform_widget_button_but_launch_process').on('click', () => {
    const { protocol, hostname } = window.location;
    const url = `${protocol}//${hostname}/form/launch/`;

    const customerid = KDF.getParams().customerid ? `customerid=${KDF.getParams().customerid}&` : '';
    const interactionid = `interactionid=${KDF.getParams().interactionid}`;

    window.location.href = `${url}${redirectToForm}?${customerid}${interactionid}`;
  });
}

// function handleServicesAtoZ(forms) {
//   const resetFilter = document.querySelector('.reset-filter');
//   const aToZFilter = document.querySelector('.a-z-filter');
//   const categoriesList = document.querySelector('.categories ul');
//   const optionsContainer = document.querySelector('.options');

//   function createAtoZFilter() {
//     // Loop through letters A-Z to create buttons
//     for (let i = 65; i <= 90; i++) {
//       const letter = String.fromCharCode(i);
//       const button = document.createElement('button');
//       button.textContent = letter;
//       button.disabled = true;

//       // Enable the button if form label starts with the letter
//       forms.forEach(form => {
//         if (form.label.toUpperCase().startsWith(letter)) {
//           button.disabled = false;
//         }
//       });

//       // Filter options and highlight active filter on click
//       button.addEventListener('click', () => {
//         filterOptions(letter);
//         highlightActiveFilter(button, '.a-z-filter button');
//       });

//       aToZFilter.appendChild(button);
//     }

//     // Create the "Show All" button with spinning text
//     const showAllButton = document.createElement('button');
//     const span = document.createElement('span');
//     span.textContent = '↺'; // Rotating text
//     showAllButton.appendChild(span);

//     // Add hover effect for spinning text
//     const style = document.createElement('style');
//     style.innerHTML = `
//       @keyframes spinOnce {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }

//       .reset-filter button span:hover {
//         display: inline-block;
//         animation: spinOnce 0.5s ease-in-out 1;
//       }
//     `;
//     document.head.appendChild(style);

//     // Reset filters when the "Show All" button is clicked
//     showAllButton.addEventListener('click', () => {
//       createOptions();
//       clearActiveFilters();
//     });

//     resetFilter.appendChild(showAllButton);
//   }

//   function createCategories() {
//     const categories = new Set(forms.map(form => form.category));
//     categories.forEach(category => {
//       const li = document.createElement('li');
//       li.textContent = category;
//       li.addEventListener('click', () => {
//         filterByCategory(category);
//         highlightActiveFilter(li, '.categories li');
//       });
//       categoriesList.appendChild(li);
//     });
//     // const showAllCategories = document.createElement('li');
//     // showAllCategories.textContent = 'Reset';
//     // showAllCategories.addEventListener('click', () => {
//     //   createOptions();
//     //   clearActiveFilters();
//     // });
//     // categoriesList.appendChild(showAllCategories);
//   }

//   function createOptions(formsToDisplay = forms) {
//     optionsContainer.innerHTML = '';
//     formsToDisplay.sort((a, b) => a.label.localeCompare(b.label))
//       .forEach(form => {
//         const optionDiv = document.createElement('div');
//         optionDiv.classList.add('option');
//         optionDiv.innerHTML = `<h4>${form.label}</h4><p>${form.description}</p>`;
//         optionDiv.addEventListener('click', () => {
//           const { protocol, hostname } = window.location;
//           const url = `${protocol}//${hostname}/form/launch/`;
//           const customerid = KDF.getParams().customerid ? `customerid=${KDF.getParams().customerid}&` : '';
//           const interactionid = `interactionid=${KDF.getParams().interactionid}`;
//           window.location.href = `${url}${form.name}?${customerid}${interactionid}`;
//         });
//         optionsContainer.appendChild(optionDiv);
//       });
//   }

//   function filterOptions(letter) {
//     const filteredForms = forms.filter(form => form.label.toUpperCase().startsWith(letter));
//     createOptions(filteredForms);
//   }

//   function filterByCategory(category) {
//     const filteredForms = forms.filter(form => form.category === category);
//     createOptions(filteredForms);
//   }

//   function highlightActiveFilter(element, selector) {
//     clearActiveFilters(selector);
//     element.classList.add('active');
//   }

//   function clearActiveFilters(selector = '.a-z-filter button, .categories li') {
//     const activeElements = document.querySelectorAll(selector);
//     activeElements.forEach(el => el.classList.remove('active'));
//   }

//   createAtoZFilter();
//   createCategories();
//   createOptions();
// }

function handleServicesAtoZ(forms) {
  const resetFilter = document.querySelector('.reset-filter');
  const aToZFilter = document.querySelector('.a-z-filter');
  const categoriesList = document.querySelector('.categories ul');
  const optionsContainer = document.querySelector('.options');

  // Filter forms to only include those with content (i.e., formName exists)
  const formsWithContent = forms.filter(form => form.name && form.name.trim() !== '');

  function createAtoZFilter() {
    // Loop through letters A-Z to create buttons
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      const button = document.createElement('button');
      button.textContent = letter;
      button.disabled = true;

      // Enable the button if form label starts with the letter and has content
      formsWithContent.forEach(form => {
        if (form.label.toUpperCase().startsWith(letter)) {
          button.disabled = false;
        }
      });

      // Filter options and highlight active filter on click
      button.addEventListener('click', () => {
        filterOptions(letter);
        highlightActiveFilter(button, '.a-z-filter button');
      });

      aToZFilter.appendChild(button);
    }

    // Create the "Show All" button with spinning text
    const showAllButton = document.createElement('button');
    const span = document.createElement('span');
    span.textContent = '↺'; // Rotating text
    showAllButton.appendChild(span);

    // Add hover effect for spinning text
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spinOnce {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .reset-filter button span:hover {
        display: inline-block;
        animation: spinOnce 0.5s ease-in-out 1;
      }
    `;
    document.head.appendChild(style);

    // Reset filters when the "Show All" button is clicked
    showAllButton.addEventListener('click', () => {
      createOptions();
      clearActiveFilters();
    });

    resetFilter.appendChild(showAllButton);
  }

  function createCategories() {
    // Only create categories for forms with content
    const categories = new Set(formsWithContent.map(form => form.category));
    categories.forEach(category => {
      const li = document.createElement('li');
      li.textContent = category;
      li.addEventListener('click', () => {
        filterByCategory(category);
        highlightActiveFilter(li, '.categories li');
      });
      categoriesList.appendChild(li);
    });
  }

  function createOptions(formsToDisplay = formsWithContent) {
    optionsContainer.innerHTML = '';
    formsToDisplay.sort((a, b) => a.label.localeCompare(b.label))
      .forEach(form => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = `<h4>${form.label}</h4><p>${form.description}</p>`;
        optionDiv.addEventListener('click', () => {
          const { protocol, hostname } = window.location;
          const url = `${protocol}//${hostname}/form/launch/`;
          const customerid = KDF.getParams().customerid ? `customerid=${KDF.getParams().customerid}&` : '';
          const interactionid = `interactionid=${KDF.getParams().interactionid}`;
          window.location.href = `${url}${form.name}?${customerid}${interactionid}`;
        });
        optionsContainer.appendChild(optionDiv);
      });
  }

  function filterOptions(letter) {
    const filteredForms = formsWithContent.filter(form => form.label.toUpperCase().startsWith(letter));
    createOptions(filteredForms);
  }

  function filterByCategory(category) {
    const filteredForms = formsWithContent.filter(form => form.category === category);
    createOptions(filteredForms);
  }

  function highlightActiveFilter(element, selector) {
    clearActiveFilters(selector);
    element.classList.add('active');
  }

  function clearActiveFilters(selector = '.a-z-filter button, .categories li') {
    const activeElements = document.querySelectorAll(selector);
    activeElements.forEach(el => el.classList.remove('active'));
  }

  createAtoZFilter();
  createCategories();
  createOptions();
}

function logUserJourney(action, details) {
  const journeyField = document.getElementById('dform_widget_txt_knowledge_path');
  const journey = journeyField.value ? JSON.parse(journeyField.value) : [];
  const timestamp = new Date().toISOString();

  journey.push({
    action,
    details,
    timestamp
  });

  // Update the field value
  journeyField.value = JSON.stringify(journey);
}