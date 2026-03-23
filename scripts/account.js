let userName;

/**
 * Executes code after the DOM is fully loaded.
 * This ensures that all HTML elements are available for manipulation.
 */
document.addEventListener("DOMContentLoaded", function () {
  (() => {
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href =
      "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
  })();

  (() => {
    /**
     * Creates and inserts a service header bar with the council logo and service label.
     */
    const headerElement = document.querySelector(".header");
    const areaElement = document.querySelector(".header > .area");

    const serviceHeaderBar = document.createElement("div");
    serviceHeaderBar.classList.add("service-header-bar");

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");

    const logoLink = document.createElement("a");
    logoLink.href = "https://www.sheffield.gov.uk";
    logoLink.title = "Back to homepage";
    logoLink.classList.add("header-logo-link");

    const logoImg = document.createElement("img");
    logoImg.classList.add("header-logo");
    logoImg.src =
      "https://cdn.uk.empro.verintcloudservices.com/tenants/sheffield/Images/logo.png";
    logoImg.alt = "Sheffield City Council Logo";

    logoLink.appendChild(logoImg);
    logoContainer.appendChild(logoLink);

    const serviceLabel = document.createElement("span");
    serviceLabel.id = "service-label";
    serviceLabel.classList.add("service-label");
    serviceLabel.textContent = "My Account";

    serviceHeaderBar.appendChild(logoContainer);
    serviceHeaderBar.appendChild(serviceLabel);

    if (headerElement && areaElement) {
      headerElement.insertBefore(serviceHeaderBar, areaElement);
    }
  })();

  (() => {
    /**
     * Modifies the existing 'Home' navigation link to include a custom icon
     * and repositions it within the navigation menu.
     */
    const menuDiv = document.querySelector('.menu[role="navigation"]');
    const originalAccountHomeLi = document
      .getElementById("nav_home")
      .closest("li");
    const accountHomeLink = document.getElementById("nav_home");
    const menuButtonContainer = document.querySelector(".menuButton");

    if (
      menuDiv &&
      originalAccountHomeLi &&
      accountHomeLink &&
      menuButtonContainer
    ) {
      accountHomeLink.classList.add("account-home-global-link");

      let iconSpan = accountHomeLink.querySelector(".icon-home");
      if (!iconSpan) {
        iconSpan = document.createElement("span");
        iconSpan.classList.add("icon-home");
        accountHomeLink.prepend(iconSpan);
      }

      iconSpan.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M298.2 72.6C310.5 61.2 329.5 61.2 341.7 72.6L432 156.3L432 144C432 126.3 446.3 112 464 112L496 112C513.7 112 528 126.3 528 144L528 245.5L565.8 280.6C575.4 289.6 578.6 303.5 573.8 315.7C569 327.9 557.2 336 544 336L528 336L528 512C528 547.3 499.3 576 464 576L176 576C140.7 576 112 547.3 112 512L112 336L96 336C82.8 336 71 327.9 66.2 315.7C61.4 303.5 64.6 289.5 74.2 280.6L298.2 72.6zM304 384C277.5 384 256 405.5 256 432L256 528L384 528L384 432C384 405.5 362.5 384 336 384L304 384z"/>
      </svg>
    `;

      menuDiv.insertBefore(accountHomeLink, menuButtonContainer);
      originalAccountHomeLi.remove();
    }
  })();

  (() => {
    /**
     * Updates the text content of the Login/Register, Logout, and My Profile navigation links.
     */
    const loginRegisterLink = document.getElementById("nav_login");
    if (loginRegisterLink) {
      loginRegisterLink.textContent = "Sign in / Register";
    }

    const logoutButton = document.querySelector("#nav_logout button");
    if (logoutButton) {
      logoutButton.textContent = "Sign out";
    }

    const myProfileLink = document.getElementById("nav_username");
    if (myProfileLink) {
      userName = formatTitleCase(myProfileLink.textContent);
      myProfileLink.textContent = "My profile";
    }
  })();

  (() => {
    /**
     * Creates a new link in the navigation that displays the user's username and links to their profile.
     */
    const navigationDiv = document.querySelector(".navigation");
    const usernameLink = document.createElement("a");

    usernameLink.href = "/site/portal/profile";
    usernameLink.tabIndex = 0;

    usernameLink.textContent = userName;

    if (navigationDiv) {
      navigationDiv.prepend(usernameLink);
    }
  })();

  (() => {
    /**
     * Creates and appends footer links and a copyright notice to the designated footer area.
     */
    const footerArea = document.getElementById(
      "FooterAreaInSingleColumnNoNavigationTemplate"
    );

    if (footerArea) {
      const footerLinksUl = document.createElement("ul");
      footerLinksUl.classList.add("footer-links");

      const privacyStatementLi = document.createElement("li");
      const privacyAnchor = document.createElement("a");
      privacyAnchor.href = "https://www.sheffield.gov.uk/myaccountprivacy";
      privacyAnchor.classList.add("footer-link");
      privacyAnchor.textContent = "Privacy notice";
      privacyStatementLi.appendChild(privacyAnchor);
      footerLinksUl.appendChild(privacyStatementLi);

      const cookiePolicyLi = document.createElement("li");
      const cookieAnchor = document.createElement("a");
      cookieAnchor.href = "https://www.sheffield.gov.uk/myaccountcookies";
      cookieAnchor.classList.add("footer-link");
      cookieAnchor.textContent = "Use of cookies";
      cookiePolicyLi.appendChild(cookieAnchor);
      footerLinksUl.appendChild(cookiePolicyLi);

      const accessibilityStatementLi = document.createElement("li");
      const accessibilityAnchor = document.createElement("a");
      accessibilityAnchor.href = "https://www.sheffield.gov.uk/myaccountaccessibility";
      accessibilityAnchor.classList.add("footer-link");
      accessibilityAnchor.textContent = "Accessibility statement";
      accessibilityStatementLi.appendChild(accessibilityAnchor);
      footerLinksUl.appendChild(accessibilityStatementLi);

      const footerCopyright = document.createElement("div");
      footerCopyright.classList.add("footer-copyright");
      footerCopyright.textContent = `© Sheffield City Council ${new Date().getFullYear()}`;

      footerArea.appendChild(footerLinksUl);
      footerArea.appendChild(footerCopyright);
    
      // --- FEEDBACK ---

      const currentFullPath = window.location.pathname;
      const sitePath = currentFullPath.substring(currentFullPath.indexOf('/site'));
      const newElement = document.createElement('aside');
      newElement.className = 'feedback-banner';
      newElement.setAttribute('aria-labelledby', 'feedback-heading');

      newElement.innerHTML = `
        <div class="feedback-container">
          <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <g fill="#00757f">
              <path d="M96.489 10.39c38.01-12.94 79.97-13.76 118.53-2.64 32.72 9.5 63.14 28.9 83.17 56.76 13.14 18.05 20.83 39.99 21.59 62.32.55 22.89-6.31 45.84-19.12 64.79-15.44 23.23-38.3 40.93-63.61 52.29-23.23 10.42-48.71 15.2-74.08 15.85-23.25.07-46.38-4.03-68.45-11.26-8.03 5.01-15.67 10.7-24.28 14.74-18.37 10.34-39.36 15.56-60.34 16.54-5.91.31-11.21-5.85-9.61-11.64 1.28-4.5 5.07-7.62 7.78-11.27 11.28-14.84 19.59-32.28 21.75-50.95-15.15-17.03-25.09-38.56-28.37-61.11-4.35-25.38 2.22-51.96 15.74-73.66 18.11-28.88 47.35-49.68 79.3-60.76m6.08 19.03c-29.44 10.22-56.16 30.32-71.38 57.83-7.02 13.07-10.82 27.81-11.18 42.64.51 21.13 8.37 41.89 21.6 58.33 2.85 3.52 5.96 7.13 7.02 11.66 1.56 5.64-.02 11.41-.78 17.05-2.51 14.11-7.86 27.67-15.46 39.81 10.39-3.17 20.56-7.08 30.13-12.24 8.79-3.87 16.15-10.28 24.85-14.27 6.7-2.87 13.97-.7 20.5 1.5 34.16 11.1 71.66 10.24 105.86-.27 27.27-8.59 52.13-25.63 68.76-49.03 11-15.56 17.19-34.49 17.31-53.55-.55-14.99-4.53-29.89-11.92-42.96-6.26-11.26-14.76-21.19-24.42-29.67-19.06-17.08-43.18-27.97-68.23-32.65-30.7-6.27-62.98-4.1-92.66 5.82Z"></path>
              <path d="M79.319 115.05c5.43 0 11.18 2.7 13.59 7.78 3.34 5.99 1.75 14.12-3.51 18.45-5.17 4.19-12.95 4.43-18.31.46-5.13-3.66-7.33-11.04-5-16.92 1.71-5.77 7.44-9.34 13.23-9.77ZM159.349 115.04c4.04.03 8.14 1.51 11.1 4.3 3.77 4.08 5.43 10.29 3.3 15.56-1.83 6.15-8.25 9.86-14.43 9.77-3.82-.44-7.69-1.85-10.34-4.73-3.47-4.09-4.93-10.04-2.89-15.12 1.71-5.78 7.46-9.35 13.26-9.78ZM239.349 115.04c5.18.05 10.74 2.46 13.24 7.22 3.72 6.02 2.27 14.51-3.15 18.99-5.18 4.22-13 4.49-18.38.48-5.11-3.68-7.3-11.05-4.96-16.93 1.71-5.76 7.45-9.33 13.25-9.76Z"></path>
            </g>
          </svg>
          <div class="feedback-content">
            <p id="feedback-heading">
              This is a new service. Help us improve it and 
              <a href="/site/portal/form/my_feedback_suggestion?path=${encodeURIComponent(sitePath)}" 
                id="feedback-link" 
                class="btn-feedback" 
                aria-label="Provide feedback on this page"
              >
                give your feedback.
              </a>
            </p>
          </div>
        </div>
      `;

      footerArea.parentNode.insertBefore(newElement, footerArea);
    }
  })();

  (() => {
    /**
     * Contains logic specific to the '/requests' page, handling
     * the display and formatting of request lists and details.
     */
    if (window.location.pathname.endsWith("/requests")) {
      /**
       * Checks if the 'srid' URL parameter exists and starts with '101000',
       * indicating a request details page.
       */
      const sridValue = KDF.getParams().srid;
      const isSridValid = KDF.getParams()?.srid?.startsWith("1010") ?? false;

      /**
       * Executes if the current page is a request details page (determined by checkSridParam).
       * Modifies the layout and content specifically for the details view, hiding
       * certain elements and reformatting others.
       */
      if (isSridValid) {
        // --- HANDLE LOAD COMPLETED FORM ---------------------------------------- \\
        const page = document.getElementById("requests");
        const content = document.getElementById("content");
        const navigation = document.querySelector(".navigation");
        const tabButtons = document.getElementById("widget_ahtm_request_tabs");
        const requestInfo = document.getElementById(
          "widget_ahtm_view_reuests_into"
        );

        if (page && content) {
          // Check if the custom CSS variable is available
          if (
            getComputedStyle(document.documentElement).getPropertyValue(
              "--c-greys-white"
            )
          ) {
            page.style.backgroundColor = "var(--c-greys-white)";
            content.style.backgroundColor = "var(--c-greys-white)";
          } else {
            // Fallback to a standard color if the variable is not found
            page.style.backgroundColor = "white";
            content.style.backgroundColor = "white";
          }
        }

        if (navigation) {
          navigation.style.display = "none";
        }
        if (tabButtons) {
          tabButtons.style.display = "none";
        }
        if (requestInfo) {
          requestInfo.style.display = "none";
        }

        const linkContainer = document.querySelector(".le-request-list-link");
        const backButton = linkContainer.querySelector("a");

        if (backButton) {
          backButton.innerHTML = "<span>Back</span>";

          const newDiv = document.createElement("div");
          newDiv.className = "le-request-label-value";

          const spanLabel = document.createElement("span");
          spanLabel.className = "le-request-label";
          spanLabel.textContent = "Reference";

          const spanValue = document.createElement("span");
          spanValue.className = "le-request-value";
          spanValue.textContent = sridValue;

          newDiv.appendChild(spanLabel);
          newDiv.appendChild(spanValue);

          backButton.parentNode.insertBefore(newDiv, backButton.nextSibling);
        }

        const detailsDiv = document.querySelector(".le-request-details-full");
        if (detailsDiv) {
          const typeDiv = detailsDiv.querySelector(
            ".le-request-label-value:nth-child(3)"
          );
          const headerElement = detailsDiv.querySelector(".le-request-header");

          if (typeDiv && headerElement) {
            const lastRequestValue = typeDiv.querySelector(".le-request-value");

            if (lastRequestValue) {
              const getDynamicValue = (lowercase = false) => {
                const textContent = lastRequestValue.textContent.trim();
                const parts = textContent.split(">").map((part) => part.trim());
                const value = parts[parts.length - 1];
                return lowercase ? value.toLowerCase() : value;
              };

              const h1 = document.createElement("h1");
              // h1.textContent = `Your ${getDynamicValue(true)} summary`;
              h1.textContent = `Your request summary`;
              detailsDiv.prepend(h1);

              // headerElement.textContent = `${getDynamicValue()} details`;
              headerElement.textContent = `Request details`;
            }
          }
        }
        const statusSpan = document.querySelector(".le-request-status-text");

        if (statusSpan) {
          const statusText = statusSpan.textContent.trim().toLowerCase();

          if (statusText === "open") {
            statusSpan.textContent = "In progress";
          } else if (statusText === "closed") {
            statusSpan.textContent = "Resolved";
          }
        }

        const notesHeader = Array.from(
          document.querySelectorAll(".le-request-header")
        ).find((header) => header.textContent.trim() === "Notes");

        if (notesHeader) {
          notesHeader.textContent = "Request updates";
        }

        const notesDetails = document.querySelector(".le-request-note-details");

        if (notesHeader && notesDetails) {
          const container = document.createElement("div");
          container.classList.add("notes-container");
          notesHeader.parentNode.insertBefore(container, notesHeader);
          container.appendChild(notesHeader);
          container.appendChild(notesDetails);
        }

        const formDetailsDiv = document.querySelector(
          ".le-request-form-details"
        );

        if (formDetailsDiv) {
          const backLink = document.createElement("a");
          backLink.href = "/site/portal/requests";
          backLink.textContent = "Back to My Requests";
          backLink.id = "back-to-requests-link";
          formDetailsDiv.after(backLink);
        }

        const datetimeElements = document.querySelectorAll(
          ".le-request-note-created time"
        );

        // if (datetimeElements.length > 0) {
        //   datetimeElements.forEach((element) => {
        //     const dateTime = element.getAttribute("datetime");
        //     const timezone = element.getAttribute("data-timezone");
        //     /**
        //      * Formats the date and time for request notes, adding ordinal suffixes to the day.
        //      */

        //     if (dateTime && timezone) {
        //       const date = new Date(dateTime);

        //       const options = {
        //         day: "numeric",
        //         month: "long",
        //         year: "numeric",
        //         hour: "numeric",
        //         minute: "numeric",
        //         hour12: true, // Use AM/PM format
        //         timeZone: timezone,
        //       };

        //       const formattedDate = new Intl.DateTimeFormat(
        //         "en-GB",
        //         options
        //       ).format(date);

        //       // Add ordinal suffix (e.g., "st", "nd", "rd", "th")
        //       const day = date.getDate();
        //       const suffix =
        //         day % 10 === 1 && day !== 11
        //           ? "st"
        //           : day % 10 === 2 && day !== 12
        //           ? "nd"
        //           : day % 10 === 3 && day !== 13
        //           ? "rd"
        //           : "th";

        //       const dayWithSuffix = formattedDate.replace(
        //         /(\d+)/,
        //         `$1${suffix}`
        //       );

        //       element.textContent = dayWithSuffix;
        //     }
        //   });
        // }
        if (datetimeElements.length > 0) {
          datetimeElements.forEach((element) => {
            const dateTime = element.getAttribute("datetime");
            const timezone = element.getAttribute("data-timezone");

            if (dateTime && timezone) {
              const date = new Date(dateTime);

              // Options for date part: dd/month/yyyy
              const dateOptions = {
                day: "2-digit",   // dd
                month: "2-digit", // MM
                year: "numeric",  // yyyy
                timeZone: timezone,
              };

              // Options for time part: hh:mm am/pm
              const timeOptions = {
                hour: "numeric",  // hh
                minute: "2-digit",// mm
                hour12: true,     // am/pm
                timeZone: timezone,
              };

              // Get formatted date (e.g., "05 December 2025")
              const formattedDate = date.toLocaleDateString("en-GB", dateOptions);

              // Get formatted time (e.g., "04:52 pm")
              const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

              // Combine into the required format: dd/month/yyyy at hh:mm am/pm
              const finalFormattedString = `${formattedDate.replace(/ /g, "/").replace(",", "")} at ${formattedTime}`;

              element.textContent = finalFormattedString;
            }
          });
        }
      } else {
        document.querySelectorAll("li.le-request-status-text").forEach((el) => {
          el.textContent = "Status:";
        });

        document.querySelectorAll(".le-request-title a").forEach((el) => {
          el.textContent = el.textContent.replace(/\s*\(.*?\)/g, "");
        });

        document.querySelectorAll("time").forEach((el) => {
          const text = el.textContent.trim();

          const match = text.match(
            /^(.*?)\s*\((.*?)\s+([A-Za-z]+,\s+)?(.+?)\)$/
          );

          if (match) {
            let relative = match[1]; // "7 days ago"
            const timePart = match[2]; // "9:29am"
            const datePart = match[4]; // "8th August 2025"

            // Capitalize first character letter
            if (relative.length > 0 && /[a-zA-Z]/.test(relative[0])) {
              relative = relative[0].toUpperCase() + relative.slice(1);
            }

            el.textContent = `${relative}. ${datePart} at ${timePart}.`;
          }
        });

        /**
         * Initializes and manages pagination for the list of requests.
         */

        // Select buttons and widgets
        const submittedBtn = document.getElementById("submitted-tab");
        const draftsBtn = document.getElementById("drafts-tab");
        const widgetSubmitted = document.getElementById(
          "widget_MySubmittedRequests"
        );
        const widgetDrafts = document.getElementById("widget_MyDraftRequests");
        const paginationContainer = document.getElementById(
          "pagination-container"
        );

        /**
         * Initializes the pagination for a given widget.
         * @param {string} activeWidgetId - The ID of the widget to apply pagination to.
         */
        function initPagination(activeWidgetId) {
          const activeWidget = document.getElementById(activeWidgetId);
          if (!activeWidget) return;

          const itemsContainer = activeWidget.querySelector(
            ".le-request-list ul"
          );
          const items = Array.from(
            itemsContainer.querySelectorAll(".le-request-item")
          );
          const itemsPerPage = 5;
          let currentPage = 1;

          // Calculate the total number of pages. If there are 0 items, default to 1 page.
          const totalPages =
            items.length === 0 ? 1 : Math.ceil(items.length / itemsPerPage);

          /**
           * Displays the items for a specific page.
           * @param {number} page - The page number to display.
           */
          function displayPage(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            items.forEach((item, index) => {
              item.style.display =
                index >= startIndex && index < endIndex ? "list-item" : "none";
            });
          }

          /**
           * Creates the pagination buttons and appends them to the pagination container.
           */
          function createPagination() {
            paginationContainer.innerHTML = "";

            const createButton = (text, page, className = "") => {
              const li = document.createElement("li");
              const a = document.createElement("a");
              a.href = "#";
              a.textContent = text;
              li.appendChild(a);

              if (className) {
                li.classList.add(className);
              }

              if (page) {
                a.setAttribute("data-page", page);
              }

              return li;
            };

            const prevButton = createButton(
              "← Previous",
              null,
              "le-pagination-nav"
            );
            paginationContainer.appendChild(prevButton);
            if (currentPage === 1) prevButton.classList.add("disabled");
            prevButton.addEventListener("click", (e) => {
              e.preventDefault();
              if (currentPage > 1) {
                currentPage--;
                updatePagination();
              }
            });

            for (let i = 1; i <= totalPages; i++) {
              const pageButton = createButton(i, i);
              if (i === currentPage) {
                pageButton.classList.add("active");
              }
              pageButton.addEventListener("click", (e) => {
                e.preventDefault();
                currentPage = i;
                updatePagination();
              });
              paginationContainer.appendChild(pageButton);
            }

            const nextButton = createButton(
              "Next →",
              null,
              "le-pagination-nav"
            );
            paginationContainer.appendChild(nextButton);
            if (currentPage === totalPages)
              nextButton.classList.add("disabled");
            nextButton.addEventListener("click", (e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
              }
            });
          }

          /**
           * Updates the displayed page and recreates the pagination buttons.
           */
          function updatePagination() {
            displayPage(currentPage);
            createPagination();
          }

          // Initial call for the active widget
          updatePagination();
        }

        /**
         * Activates a specific tab and initializes pagination for its content.
         * @param {HTMLElement} activeBtn - The button to activate.
         * @param {HTMLElement} inactiveBtn - The button to deactivate.
         * @param {HTMLElement} showWidget - The widget to display.
         * @param {HTMLElement} hideWidget - The widget to hide.
         */
        function activateTab(activeBtn, inactiveBtn, showWidget, hideWidget) {
          activeBtn.classList.add("active");
          inactiveBtn.classList.remove("active");

          showWidget.style.display = "block";
          hideWidget.style.display = "none";

          initPagination(showWidget.id);
        }

        submittedBtn.addEventListener("click", () => {
          activateTab(submittedBtn, draftsBtn, widgetSubmitted, widgetDrafts);
        });

        draftsBtn.addEventListener("click", () => {
          activateTab(draftsBtn, submittedBtn, widgetDrafts, widgetSubmitted);
        });

        if (KDF.getParams().a === "drafts") {
          setTimeout(() => {
            activateTab(draftsBtn, submittedBtn, widgetDrafts, widgetSubmitted);
          }, 0);
        }

        if (submittedBtn.classList.contains("active")) {
          widgetSubmitted.style.display = "block";
          widgetDrafts.style.display = "none";
          initPagination("widget_MySubmittedRequests");
        } else {
          widgetSubmitted.style.display = "none";
          widgetDrafts.style.display = "block";
          initPagination("widget_MyDraftRequests");
        }
      }
    }
  })();
});
