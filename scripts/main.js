function logArguments(event, kdf, ...args) {
  console.group(event.type ? event.type : "event");
  console.log("event", event);
  console.log("kdf", kdf);
  args.forEach((arg, index) => {
    console.log(`arg${index + 1}`, arg);
  });
  console.groupEnd();
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

// --- GLOBAL CONSTS AND VARIABLES ----------------------------------------- \\

const { protocol, hostname } = window.location;
const PORTAL_URL = `${protocol}//${hostname}/site/sheffield_dev`;

let formattedTitle = "";

let enableSave = false;
let saveProgress = false;
let customerState = false;

let pageName = "";

let initialProfileAddressLoad = false;
let addressSearchType = {};
let acceptGMSites = true;
let defaultSelectedAddressMessage = "Choose a location on the map";

const datePairs = [];

const relatedServices = [];

let fieldsToCheckBeforeClose = [];

// Initialize an array to store the user's form page history
const formUserPath = [];

// --- HANDLE INITIALISING EVENT ------------------------------------------- \\

function handleInitialisingEvent() {
  // --- GOOGLE ANALITICS  ------------------------------------------------- \\

  if (KDF.kdf().access === "citizen") {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-PBGBFQVW");
  }

  // --- HANDLE SIGN IN PAGE ----------------------------------------------- \\
 
  if (KDF.kdf().access === "citizen"
    && KDF.kdf().customerset === "citizen_true") {
    KDF.hidePage("page_sign_in");
    KDF.setVal("rad_sign_in", "true");
    if (enableSave) {
      const buttons = document.querySelectorAll('button.success-btn');
      const nextButtons = Array.from(buttons).filter(button => button.textContent.trim() === 'Next');
      nextButtons.forEach(button => {
        button.textContent = 'Save and continue';
      });
    }
  }

  // --- ADD TAB TITLE AND ICON  ------------------------------------------- \\

  (() => {
    const defaultServiceTitle = "My Account";

    let finalServiceTitle = defaultServiceTitle;

    const formTitle = document.getElementById("dform_widget_le_title");
    if (formTitle && formTitle.value) {
      finalServiceTitle = formTitle.value;
    }

    const serviceLabel = document.getElementById("service-label");
    if (serviceLabel) {
      serviceLabel.textContent = finalServiceTitle;
    }

    document.title = finalServiceTitle;

    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
  })();

  // --- APPLY CLASS WHEN SKIP IF FOCUSED  --------------------------------- \\

  (() => {
    const skipLink = document.getElementById("skip");
    const header = document.querySelector("header.header");

    if (skipLink) {
      const link = skipLink.querySelector("a");
      if (link) {
        link.textContent = "Skip to main >";
      }
    }

    if (skipLink && header) {
      skipLink.addEventListener("focusin", () => {
        header.classList.add("skip-focused");
      });

      skipLink.addEventListener("focusout", () => {
        header.classList.remove("skip-focused");
      });
    }
  })();

  // --- ADD LOADING SPINNER  ---------------------------------------------- \\

  (() => {
    // Select the target element
    const targetDiv = document.getElementById("dform_lockMsg");

    // Create the spinner element
    const spinnerDiv = document.createElement("div");
    spinnerDiv.classList.add("lds-spinner");

    // Add child elements to the spinner
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement("div");
      spinnerDiv.appendChild(dot);
    }

    // Insert the spinner element inside the target div
    targetDiv.appendChild(spinnerDiv);
  })();

  // --- ADD BACK BUTTON TO FORM CONTROLS ---------------------------------- \\

  (() => {
    const coreCaseFields = document.querySelector(
      ".dform_section_box_core_case_fields"
    );
    if (coreCaseFields) {
      const hiddenBackButtonHTML = `
      <button
        type="button"
        tabindex="0"
        id="dform_widget_button_but_previous_page"
        data-active="false"
        data-type="prev"
        data-desktopaction=""
        class="dform_widget dform_widget_type_button dform_widget_button_but_previous_page dform_hidden"
      >
        Previous page
      </button>
    `;
      coreCaseFields.insertAdjacentHTML("beforeend", hiddenBackButtonHTML);
    } else {
      console.error(".dform_section_box_core_case_fields element not found.");
    }

    const targetElement = KDF.kdf().form.name === "cpe_my_profile" ? "NavigationAreaInSingleColumnTemplate" : "dform_control_buttons";
    const controlButtons = document.getElementById(targetElement);
    if (controlButtons) {
      const visibleBackButtonHTML = `
      <button
        type="button"
        tabindex="0"
        id="dform_widget_button_but_back"
        data-active="true"
        class="dform_widget dform_widget_type_button back-btn dform_widget_button_but_back"
        onclick="document.getElementById('dform_widget_button_but_previous_page').click()"
        style="display: none;"
      >
        <span class="back-btn--text">Back</span>
      </button>
    `;
      controlButtons.insertAdjacentHTML("afterbegin", visibleBackButtonHTML);
    } else {
      console.error("#dform_control_buttons element not found.");
    }
  })();

  // --- AUPDATE PRNT BUTTON LABEL ----------------------------------------- \\

  (() => {
    const printButton = document.getElementById("dform_print");
    if (printButton) {
      printButton.textContent = "Print this page"
    }
  })();

  // --- REPOSITIONING THE PAGE NAV ---------------------------------------- \\

  (() => {
    const pagenav = document.getElementById("dform_pagenav");
    const controlButtons = document.getElementById("dform_control_buttons");
    const backButton = document.getElementById("dform_widget_button_but_back");

    if (pagenav && controlButtons && backButton) {
      const spans = pagenav.querySelectorAll("li > span");
      spans.forEach(span => {
        span.textContent = '>';
      });
      backButton.insertAdjacentElement("afterend", pagenav);
    }
  })();

  // --- ADD CHARACTER COUNT ----------------------------------------------- \\

  (() => {
    const textareas = document.querySelectorAll('div[data-type="textarea"]');

    textareas.forEach((textareaContainer) => {
      const textarea = textareaContainer.querySelector("textarea");
      const maxLength = textarea.getAttribute("maxlength");
      const name = textarea.name;
      if (maxLength > 0) {
        // Remove existing span elements
        const spans = textareaContainer.querySelectorAll("span");
        spans.forEach((span) => span.remove());

        // Create and append the character count div
        const characterCountDiv = document.createElement("div");
        characterCountDiv.classList.add("character-count");
        characterCountDiv.setAttribute("aria-live", "polite");
        characterCountDiv.id = `characterCounter_${name}`;
        textareaContainer.appendChild(characterCountDiv);

        textarea.addEventListener("input", () => {
          const remainingChars = maxLength - textarea.value.length;
          characterCountDiv.textContent =
            remainingChars === 1
              ? `You have ${remainingChars} character remaining`
              : `You have ${remainingChars} characters remaining`;
        });

        // Initial character count display
        const initialChars = maxLength - textarea.value.length;
        characterCountDiv.textContent = `You have ${initialChars} characters remaining`;
      }
    });
  })();

  // --- UPDATE ACCEPTED EMAIL PATTERN ------------------------------------- \\

  (() => {
    $('input[type="email"]').attr(
      "pattern",
      "(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])"
    );
  })();

  // --- ADD CURRECY SYMBOL ------------------------------------------------ \\

  (() => {
    const currencyWidgets = document.querySelectorAll('.dform_widget.currency');

    currencyWidgets.forEach(widget => {
      const inputElement = widget.querySelector('input[type="number"]');

      if (inputElement) {
        const inputParent = inputElement.parentElement;

        if (inputParent) {
          const computedStyles = getComputedStyle(inputElement);
          const originalGridRow = computedStyles.gridRow;
          const originalGridColumn = computedStyles.gridColumn;

          const inputGroup = document.createElement('div');
          inputGroup.classList.add('currency-input-group');

          if (originalGridRow && originalGridRow !== 'auto' && originalGridRow !== 'initial' && originalGridRow !== 'unset') {
            inputGroup.style.gridRow = originalGridRow;
          }
          if (originalGridColumn && originalGridColumn !== 'auto' && originalGridColumn !== 'initial' && originalGridColumn !== 'unset') {
            inputGroup.style.gridColumn = originalGridColumn;
          }

          const currencySymbol = document.createElement('span');
          currencySymbol.classList.add('currency-symbol');
          currencySymbol.textContent = '£';

          inputParent.insertBefore(inputGroup, inputElement);
          inputGroup.appendChild(currencySymbol);
          inputGroup.appendChild(inputElement);
        }
      }
    });
  })();

  // --- OVERRIDE PRINT FUNCTION ------------------------------------------- \\

  (() => {
    const printButton = document.getElementById('dform_print');
    const confirmationPage = document.getElementById('dform_page_complete');

    if (printButton && confirmationPage) {
      // Override the default action by removing the href attribute
      printButton.removeAttribute('href');

      // Add a custom event listener
      printButton.addEventListener('click', function (event) {
        // Prevent the default browser action for the link
        event.preventDefault();

        // Store the original body content
        const originalBody = document.body.innerHTML;

        // Set the body's HTML to only the confirmation page content
        document.body.innerHTML = confirmationPage.outerHTML;

        // Trigger the print dialog
        window.print();

        // Restore the original body content after printing
        setTimeout(() => {
          document.body.innerHTML = originalBody;
        }, 0);
      });
    }
  })();

  scrollToTop();
}

// --- HANDLE ON READY EVENT ----------------------------------------------- \\

function handleOnReadyEvent(_, kdf) {
  customerState = kdf.customerset;
  formattedTitle = KDF.getVal("le_title").replace(/\s+/g, "-");

  if (document.getElementById('selected-address')) {
    defaultSelectedAddressMessage = document.getElementById('selected-address').textContent.trim();
  }

  // --- SET ADDRESS IF ACCOUNT IUDENTIFIED ---------------------------------- \\

  if (kdf.profileData['customerid'] && kdf.profileData['customerid'] !== ""
    && kdf.profileData['profile-Postcode'] && kdf.profileData['profile-Postcode'] !== "") {
    initialProfileAddressLoad = true;
    $('#dform_widget_button_but_find_address_about_you').click();
  }

  // --- ADD CONTENT TO WHY WE NEED DATE OF BIRTH -------------------------- \\

  $(".dob-reason").text(
    "Your date of birth is a helpful way to confirm your identity and protect your information."
  );
  $(".their-dob-reason").text(
    "Their date of birth is a helpful way to confirm their identity and protect their information."
  );

  // --- BUILD RELATED SERVICES -------------------------------------------- \\

  buildRelatedServiceCards(relatedServices, 'related-services-panel');

  // --- REMOVE TAB INDEX FROM SELECT ELEMENTS ----------------------------- \\

  $(".remove-tab").each(function () {
    $(this).attr("tabindex", "-1");
  });

  // --- SET FORM START DATE AND TIME -------------------------------------- \\

  if (!kdf.form.ref) {
    KDF.setVal("txt_start_date_and_time", formatDateTime().utc);
  }

  // --- APPLY INTERNAL SYLE CHANGES --------------------------------------- \\

  if (KDF.kdf().access === "agent") {
    const root = document.documentElement;

    // --- CHECK AGENT LOCATION -------------------------------------------- \\

    if (
      kdf.access === "agent" &&
      kdf.form.name !== "set_agent_location" &&
      !kdf.form.caseid
    ) {
      checkAndRefreshAgentLocation();
      // Event listener for closeModal event
      window.addEventListener("closeModal", function (event) {
        const modalId = event.detail.id;
        if (modalId === "setAgentLocationModal") {
          KDF.setVal("txt_agent_location", event.detail.location);
        }
        if (modalId === "setReporterModal" && event.detail.reporter) {
          KDF.setCustomerID(event.detail.reporter, true, "page_about_you");
        }
        const modal = document.getElementById(modalId);
        if (modal) {
          destroyModal(modal);
        }
      });
    }

    if (kdf.form.name.startsWith("cm_") && kdf.form.caseid && !kdf.form.ref) {
      KDF.customdata(
        "check-for-existing-case-management-form",
        "_KDF_ready",
        true,
        true,
        {}
      );
    }
  }

  // --- SET FEEDBACK LINK ------------------------------------------------- \\

  buildFormLink("give-feedback", "give_feedback_suggestion", true);

  // --- SET EQUALITIES LINK ----------------------------------------------- \\

  //   buildFormLink("equalities-information", "equalities_monitoring", true);

  storeDefaultValidationMessages();

  // --- MAP --------------------------------------------------------------- \\

  if (document.getElementById("map_container")) {
    do_KDF_Ready_esriMap();
  }

  // --- HANDLE LOAD COMPLETED FORM ---------------------------------------- \\

    if (kdf.params.ref && kdf.params.token) {
      KDF.showPage("page_review");
      KDF.gotoPage("page_review");

      KDF.makeReadonly();
      $(".review-page-edit-button").remove();
      $('.dform_section_box_review div[data-type="buttonset"]').remove();
      return;
    }
    
    if (kdf.form.complete === "Y") {
      KDF.showPage("page_review");
      KDF.gotoPage("page_review");
      if (kdf.params.viewmode === "R") {
        KDF.makeReadonly();
        $(".review-page-edit-button").remove();
        $('.dform_section_box_review div[data-type="buttonset"]').remove();
      } else {
        // use stored page array when case management
        if (
          !KDF.kdf().form.name.startsWith("cm_") &&
          !KDF.kdf().form.name.endsWith("_cm")
        ) {
          KDF.makeReadonly();
          $(".review-page-edit-button").remove();
          $('.dform_section_box_review div[data-type="buttonset"]').remove();
        }
      }
    } else {
      if (kdf.form.caseid && kdf.form.ref) {
        KDF.showPage("page_review");
        KDF.gotoPage("page_review");
        if (kdf.params.viewmode === "R") {
          KDF.makeReadonly();
          $(".review-page-edit-button").remove();
          $('.dform_section_box_review div[data-type="buttonset"]').remove();
        }
      }
    }

  // --- HANDLE FORMAT TITLE CASE ------------------------------------------ \\

  $(".format-title-case").on("change", (event) => {
    $(`#${event.target.id}`).val(formatTitleCase(event.target.value));
  });

  // --- HANDLE FIND BUTTON CLICK ------------------------------------------ \\

  $(".find-btn").on("click", function () {
    if ($(this).text() === "Find address") {
      resetAddressSearch();
      setRequiredStateByAlias("postcode", "required");
    }
    if ($(this).text() === "Find vehicle") {
      resetVehicleSearch();
    }
  });

  // --- HANDLE RE-SEARCH ADDRESS ------------------------------------------ \\

  $(document).on("click", ".search-again-btn", function () {
    const currentPageId = getCurrentPageId();
    const searchInput = document.querySelector(`#${currentPageId} input[data-customalias="postcode"]`);
    let searchButton = document.querySelector(`#${currentPageId} .address-search-btn`);
    const resultsList = document.querySelector(`#${currentPageId} .address-search-results`);
    if (resultsList) {
      resultsList.value = '';
      KDF.setWidgetRequired(resultsList.id.replace('dform_widget_', ''));
    }

    let manualAddressElement = document.querySelector(`#${currentPageId} .manual-address-container`);
    if (manualAddressElement) {
      const detailsElement = manualAddressElement.querySelector('.details-accordion');
      if (detailsElement && detailsElement.hasAttribute('open')) {
        detailsElement.removeAttribute('open');
      }
    }

    let setAddressButton = document.querySelector(`#${currentPageId} .set-address-btn`);

    const buttonContainer = document.querySelector(`#${getCurrentPageId()} .address-search-btn-container`);
    if (buttonContainer) {
      buttonContainer.style.display = 'flex'; // Shows the element
    }

    searchButton = searchButton.id.replace('dform_widget_button_', '');
    if (manualAddressElement) {
      manualAddressElement = manualAddressElement.id.replace('dform_widget_html_', '');
    }
    setAddressButton = setAddressButton.id.replace('dform_widget_button_', '');

    let selectedAddressContainer = document.querySelector(`#${getCurrentPageId()} .selected-address-container`);
    if (selectedAddressContainer) {
      selectedAddressContainer = selectedAddressContainer.id.replace('dform_widget_html_', '');
    }

    const selectedAddressSpan = document.querySelector(`#${currentPageId} #selected-address`);
    if (selectedAddressSpan) {
      selectedAddressSpan.textContent = defaultSelectedAddressMessage;
    }

    let mapCntainer = document.querySelector(`#${currentPageId} .map-container`);
    if (mapCntainer) {
      mapCntainer = mapCntainer.id.replace('dform_widget_html_', '');
    }

    if (resultsList && searchInput && searchButton && selectedAddressContainer) {
      hideShowMultipleElements([
        { name: searchInput.name, display: "show" },
        { name: searchButton, display: "show" },
        { name: resultsList.dataset.name, display: "hide" },
        { name: manualAddressElement, display: "hide" },
        { name: setAddressButton, display: "hide" },
        { name: selectedAddressContainer, display: "hide" },
        { name: mapCntainer, display: "show" },
      ]);

      searchInput.focus();
    }

    resetAddressSearch();
  });

  // --- HANDLE RE-SEARCH ADDRESS ------------------------------------------ \\

  // The main click event handler
  $(document).on("click", ".set-address-btn", function () {
    const handleSearchResults = (currentPageId, buttonId) => {
      const searchResultsContainer = document.querySelector(`#${currentPageId} .address-search-results`);
      const searchResultsSelect = searchResultsContainer?.querySelector('select');

      if (searchResultsSelect && searchResultsSelect.value) {
        // A valid address was selected.
        const action = addressSearchType === "national" ? "retrieve-national-address" : "retrieve-local-address";
        KDF.customdata(action, buttonId, true, true, { propertyId: searchResultsSelect.value });
        return true; // Return true to indicate success
      } else if (searchResultsContainer) {
        // No address was selected, so show the validation error.
        const validationMessage = searchResultsContainer.querySelector('.dform_validationMessage');
        if (validationMessage) {
          validationMessage.style.display = 'block';
        }
        if (searchResultsSelect) {
          searchResultsSelect.classList.add('dform_fielderror');
        }
        return false; // Return false to indicate failure
      }
      return false; // No search results container found
    };

    const currentPageId = getCurrentPageId();
    const manualAddressElement = document.querySelector(`#${currentPageId} .manual-address-container`);

    // Check if the manual address form exists on the page
    if (manualAddressElement) {
      const detailsElement = manualAddressElement.querySelector('.details-accordion');

      // Check if the manual address accordion is open
      if (detailsElement && detailsElement.hasAttribute('open')) {
        // Scenario 1: Manual form is open; validate its fields.
        const searchResultsSelect = document.querySelector(`#${currentPageId} .address-search-results select`);
        if (searchResultsSelect) {
          searchResultsSelect.value = ''; // Clear selected value from search results
          KDF.setWidgetNotRequired(searchResultsSelect.id.replace('dform_widget_', ''));
        }

        const addressFields = getValuesOfInputFields([
          { alias: "property" },
          { alias: "streetName" },
          { alias: "city" },
          { alias: "postCode" },
        ]);

        let allFieldsValid = true;
        addressFields.forEach(field => {
          const fieldContainer = document.querySelector(`[data-customalias="${field.alias}"]`)?.closest('.dform_widget_field');
          const validationMessage = fieldContainer?.querySelector('.dform_validationMessage');
          const inputElement = fieldContainer?.querySelector('input');

          if (!field.value) {
            allFieldsValid = false;
            if (validationMessage) validationMessage.style.display = 'block';
            if (inputElement) inputElement.classList.add('dform_fielderror');
          } else {
            if (validationMessage) validationMessage.style.display = 'none';
            if (inputElement) inputElement.classList.remove('dform_fielderror');
          }
        });

        if (allFieldsValid) {
          const addressearchResults = document.querySelector(`#${currentPageId} .address-search-results`);
          let setAddressButton = document.querySelector(`#${currentPageId} .set-address-btn`);
          if (setAddressButton) {
            setAddressButton = setAddressButton.id.replace('dform_widget_button_', '');
          }

          const buttonContainer = document.querySelector(`#${currentPageId} .address-search-btn-container`);
          let manualAddressElement = document.querySelector(`#${currentPageId} .manual-address-container`);
          if (manualAddressElement) {
            manualAddressElement = manualAddressElement.id.replace('dform_widget_html_', '');
          }

          const addressDataForDisplay = {
            property: addressFields.find(field => field.alias === 'property')?.value || '',
            streetName: addressFields.find(field => field.alias === 'streetName')?.value || '',
            city: addressFields.find(field => field.alias === 'city')?.value || '',
            postcode: addressFields.find(field => field.alias === 'postCode')?.value || '',
          };

          const fullAddressDisplay = buildAddressMarkup(addressDataForDisplay);
          let selectedAddressContainer = document.querySelector(`#${currentPageId} .selected-address-container`);
          if (selectedAddressContainer) {
            selectedAddressContainer.innerHTML = fullAddressDisplay;
            selectedAddressContainer = selectedAddressContainer.id.replace('dform_widget_html_', '');
          }

          let fullAddress = '';
          addressFields.forEach(field => {
            if (field.value) {
              if (field.alias === 'streetName' || field.alias === 'city') {
                fullAddress += `${field.value}, `;
              } else {
                fullAddress += `${field.value} `;
              }
            }
          });
          fullAddress = fullAddress.trim();

          setValuesToInputFields([
            { alias: "fullAddress", value: fullAddress },
          ]);

          if (addressearchResults) {
            const selectElement = addressearchResults.querySelector('select');
            if (selectElement) {
              selectElement.style.display = 'none'; // Hides the element
            }
          }

          if (buttonContainer) {
            buttonContainer.style.display = 'none'; // Hides the element
          }

          hideShowMultipleElements([
            { name: setAddressButton, display: "hide" },
            { name: selectedAddressContainer, display: "show" },
            { name: manualAddressElement, display: "hide" },
          ]);
        }

      } else {
        // Scenario 2: Manual form is not open; validate the search results dropdown.
        handleSearchResults(currentPageId, this.id);
      }
    } else {
      // Scenario 3: The manual address container doesn't exist at all; validate search results.
      handleSearchResults(currentPageId, this.id);
    }
  });

  // --- HANDLE VEHICLE LOOKUP --------------------------------------------- \\

  $(".vehicle-details").on("click", (event) => {
    resetVehicleSearch(false);
    showVehicleFields();
  });

  // --- HANDLE FIND CURRENT LOCATION CLICK -------------------------------- \\

  $(".geo-btn").on("click", function () {
    const $button = $(this);

    // Proceed with geolocation retrieval
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          KDF.customdata(
            "retrieve-location-from-coordinates",
            $button.attr("id"),
            true,
            true,
            {
              longitude: longitude.toString(),
              latitude: latitude.toString(),
            }
          );
        },
        function (error) {
          const errorMessage =
            error.code === error.PERMISSION_DENIED
              ? "User denied the request for Geolocation"
              : error.code === error.POSITION_UNAVAILABLE
                ? "Location information is unavailable"
                : error.code === error.TIMEOUT
                  ? "The request to get user location timed out"
                  : "An unknown error occurred";

          const errorMessageHtml = `
            <div class="dform_validationMessage" style="display: block; width: 100%; transform: translateY(12px);">
              ${errorMessage}
            </div>
          `;

          if (!$validationMessage.length) {
            $button.before(errorMessageHtml);
          } else {
            $validationMessage.html(errorMessage).show();
          }
        }
      );
    } else {
      const errorMessage = "Geolocation is not supported by this browser";

      const errorMessageHtml = `
        <div class="dform_validationMessage" style="display: block; width: 100%; transform: translateY(12px);">
          ${errorMessage}
        </div>
      `;

      if (!$validationMessage.length) {
        $button.before(errorMessageHtml);
      } else {
        $validationMessage.html(errorMessage).show();
      }
    }
  });

  // --- HANDLE FIND ON MAP CLICK ------------------------------------------ \\

  $(".link-btn.map-icon").on("click", function () {
    $(`.address-search`).find(".dform_validationMessage").hide();
    if ($(".geo-btn-container").find(".dform_validationMessage").length) {
      $(".geo-btn-container")
        .find(".dform_validationMessage")
        .css("display", "none");
    }
    const currentPageId = getCurrentPageId();
    const container = document.querySelector(
      `#${currentPageId} .map-container`
    );
    const elementId = container.id;
    const element = document.getElementById(elementId);

    if (element) {
      const isHidden = element.classList.contains("dform_hidden");

      if (isHidden) {
        element.classList.remove("dform_hidden");
      } else {
        element.classList.add("dform_hidden");
      }
    } else {
      setRequiredStateByAlias("postcode", "required");
    }
    resetAddressSearch();
  });

  // --- HANDLE LOCATOR BUTTON CLICK --------------------------------------- \\

  $(".locator-btn, .address-btn").click(function () {
    checkAddressHasBeenSet();
  });

  // --- HANDLE CUSTOM DATE ------------------------------------------------ \\

  $(`.date-field`).find(".dform_validationMessage").hide();

  $(`.date-dd`).on("input focusout", function (e) {
    const parentId = $(this).attr("id").replace("_num_", "_date_").slice(0, -3);
    if (e.type === "input") {
      inputDate(this.id, `${this.id.slice(0, -2)}mm`, e.which);
      return;
    }
    if (this.value) $(this).val($(this).val().padStart(2, "0"));
    handleDateValidation(parentId, this);
  });

  $(`.date-mm`).on("input focusout", function (e) {
    const parentId = $(this).attr("id").replace("_num_", "_date_").slice(0, -3);
    const txtFieldId = $(this)
      .attr("id")
      .replace("_num_", "_txt_")
      .slice(0, -3);
    const dateMessage = getValidationMessageFromSession(txtFieldId);
    const dd = $(`#${this.id.slice(0, -2)}dd`).val();
    const yy = $(`#${this.id.slice(0, -2)}yy`).val();
    if (e.type === "input") {
      inputDate(this.id, `${this.id.slice(0, -2)}yy`, e.which);
      return;
    }
    if (this.value) {
      $(this).val($(this).val().padStart(2, "0"));
    }
    if (dd === "") $(`#${this.id.slice(0, -2)}dd`).addClass("dform_fielderror");
    if (yy === "") $(`#${this.id.slice(0, -2)}yy`).addClass("dform_fielderror");
    $(`#${parentId}`).find(".dform_validationMessage").text(dateMessage).show();
    handleDateValidation(parentId, this);
  });

  $(`.date-yy`)
    .attr("min", function () {
      const minDate = $(this)
        .closest(".container")
        .find("input[type='date']")
        .data("mindate");

      // Calculate the minimum year based on the minDate
      const minYear = new Date().getFullYear() + parseInt(minDate);
      return minYear;
    })
    .attr("max", function () {
      const maxDate = $(this)
        .closest(".container")
        .find("input[type='date']")
        .data("maxdate");

      // Calculate the maximum year based on the maxDate
      const maxYear = new Date().getFullYear() + parseInt(maxDate);
      return maxYear;
    })
    .on("input focusout", function (e) {
      const parentId = $(this)
        .attr("id")
        .replace("_num_", "_date_")
        .slice(0, -3);
      const txtFieldId = $(this)
        .attr("id")
        .replace("_num_", "_txt_")
        .slice(0, -3);
      const dateMessage = getValidationMessageFromSession(txtFieldId);
      const dd = $(`#${this.id.slice(0, -2)}dd`).val() !== "" ? true : false;
      const mm = $(`#${this.id.slice(0, -2)}mm`).val() !== "" ? true : false;
      $(`#${parentId}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .hide();
      if (e.type === "input") inputDate(this.id, null, e.which);
      if (e.type === "focusout") handleDateValidation(parentId, this);
    });

  // --- HANDLE CUSTOM TIME ------------------------------------------------ \\

  $('.time-hour, .time-minute').on('input', function (e) {
    const $parentTimeField = $(this).closest('.time-field');
    const baseId = $parentTimeField.attr('id').replace('dform_widget_time_', '');

    let nextFieldId = null;
    if ($(this).hasClass('time-hour')) {
      nextFieldId = `dform_widget_num_${baseId}_minute`;
    } else if ($(this).hasClass('time-minute')) {
      nextFieldId = `dform_widget_sel_${baseId}_ampm`;
    }
    inputTime(this.id, nextFieldId);
  });

  $('.time-ampm').on('change blur', function () {
    const $parentTimeField = $(this).closest('.time-field');
    const baseId = $parentTimeField.attr('id').replace('dform_widget_time_', '');

    const hourVal = $(`#dform_widget_num_${baseId}_hour`).val();
    const minuteVal = $(`#dform_widget_num_${baseId}_minute`).val();
    const ampm = $(this).val();

    const hour = (hourVal !== '' && hourVal !== null && hourVal !== undefined) ? parseInt(hourVal, 10) : NaN;
    const minute = (minuteVal !== '' && minuteVal !== null && minuteVal !== undefined) ? parseInt(minuteVal, 10) : NaN;

    handleTimeValidation($parentTimeField.attr('id'), hour, minute, ampm, baseId);
  });

  $('.time-field').on('focusout', function (e) {
    if (!$(this).has(e.relatedTarget).length && e.relatedTarget !== this) {
      const $parentTimeField = $(this);
      const baseId = $parentTimeField.attr('id').replace('dform_widget_time_', '');

      const hourVal = $(`#dform_widget_num_${baseId}_hour`).val();
      const minuteVal = $(`#dform_widget_num_${baseId}_minute`).val();
      const ampm = $(`#dform_widget_sel_${baseId}_ampm`).val();

      const hour = (hourVal !== '' && hourVal !== null && hourVal !== undefined) ? parseInt(hourVal, 10) : NaN;
      const minute = (minuteVal !== '' && minuteVal !== null && minuteVal !== undefined) ? parseInt(minuteVal, 10) : NaN;

      handleTimeValidation($parentTimeField.attr('id'), hour, minute, ampm, baseId);
    }
  });

  // --- HANDLE KEYUP EVENTLISTENER FOR CHECK PROGRESS --------------------- \\

  $("input, textarea").keyup(function () {
    checkPageProgress();
  });

  // --- HANDLE CURRENCY INPUT --------------------------------------------- \\

  $(".currency").on("change", function () {
    const currencyField = $(this).data("name");

    // Remove anything that's not a digit or decimal point
    let rawValue = $(`#dform_widget_${currencyField}`)
      .val()
      .replace(/[^0-9.]/g, "");

    let value = parseFloat(rawValue); // Convert the cleaned value to a float

    if (!isNaN(value)) {
      $(`#dform_widget_${currencyField}`).val(value.toFixed(2));
    } else {
      $(`#dform_widget_${currencyField}`).val("");
    }
  });

  // --- HANDLE SET REPORTER ----------------------------------------------- \\

  // Check if customer set state is true
  if (kdf.profileData["customerid"]) {
    property = formatTitleCase(kdf.profileData["profile-AddressNumber"]);
    streetName = formatTitleCase(kdf.profileData["profile-AddressLine1"]);
    fullAddress = `${formatTitleCase(property)} ${formatTitleCase(
      streetName
    )}, ${kdf.profileData["profile-AddressLine4"]}, ${kdf.profileData["profile-Postcode"]
      }`;
    handleSetReporter(
      new Date(kdf.profileData["profile-DateOfBirth"]),
      fullAddress
    );
  } else if (KDF.getVal("txt_full_address_about_you")
  ) {
    property = formatTitleCase(KDF.getVal("txt_property_about_you"));
    streetName = formatTitleCase(KDF.getVal("txt_street_name_about_you"));
    fullAddress = `${formatTitleCase(property)} ${formatTitleCase(
      streetName
    )}, ${KDF.getVal("txt_city_about_you")}, ${KDF.getVal(
      "txt_postcode_about_you"
    )}`;
    handleSetReporter(new Date(KDF.getVal("dt_date_of_birth")), fullAddress);
  }

  // --- HANDLE CHECK AGENT SET CUSTOMER ----------------------------------- \\

  $(".submit-btn").on("click", () => {
    const currentPageId = getCurrentPageId();
    function elementExists(selector) {
      return document.querySelector(selector) !== null;
    }

    // Check if the postcode element exists
    if (elementExists(`#${currentPageId} input[data-customalias="postcode"]`)) {
      checkAddressHasBeenSet("submit");
    } else {
      KDF.gotoPage("complete", true, true, false);
    }
  });

  // --- HANDLE AONYMOUS SUBMITION ----------------------------------------- \\

  $(".anonymous-btn").on("click", () => {
    KDF.hidePage("page_about_you");

    // Clear any entered customer data
    KDF.setVal("sel_title", "");
    KDF.setVal("txt_forename", "Remained");
    KDF.setVal("txt_surname", "Anonymous");
    KDF.setVal("dform_widget_num_date_of_birth_about_you_dd", "");
    KDF.setVal("dform_widget_num_date_of_birth_about_you_mm", "");
    KDF.setVal("dform_widget_num_date_of_birth_about_you_yy", "");
    KDF.setVal("txt_date_of_birth_about_you", "");
    KDF.setVal("dt_date_of_birth_about_you", "");
    KDF.setVal("eml_address", "");
    KDF.setVal("tel_phone_number", "");
    KDF.setVal("txt_find_postcode_about_you", "");
    KDF.setVal("sel_search_results_about_you", "");
    KDF.setVal("txt_property_about_you", "");
    KDF.setVal("txt_street_name_about_you", "");
    KDF.setVal("txt_city_about_you", "");
    KDF.setVal("txt_postcode_about_you", "");
    KDF.setVal("txt_full_address_about_you", "");

    KDF.gotoPage("complete", true, true, false);
  });

  // --- HANDLE SAVE AND EXIT CLICK ---------------------------------------- \\

  $(".save-exit-btn").on("click", () => {
    KDF.save();
  });

  // --- HANDLE CLOSE CASE CLICK ------------------------------------------- \\

  function createReviewSection(pageId, pageTitle, fields) {
    let statusCardHtml = `
      <div class="review-section">
        <div class="review-content">
          <div class="review-content-header">
            <h3>${pageTitle}</h3>
            <button type="button" class="go-to-page-btn" id="go-to-${pageId}">Edit</button>
          </div>
      ${fields
        .map(
          (field) => `
            <p>${field.fieldlabel}: ${field.fieldValue}</p>
          `
        )
        .join("")}
          </div>
      </div>
  `;

    document
      .getElementById("review-case-content-container")
      .insertAdjacentHTML("beforeend", statusCardHtml);

    const button = document.getElementById(`go-to-${pageId}`);
    if (button) {
      button.addEventListener("click", function () {
        const modal = document.getElementById("case-review-modal");
        modal.close();
        modal.remove();
        KDF.gotoPage(pageId, false, false, true);
      });
    }
  }

  function checkIsFormComplete(fields) {
    let isComplete = true;
    let incompleteFields = [];
    let pages = [];

    fields.forEach((field) => {
      let value = KDF.getVal(field);
      if (
        !value ||
        value.length < 1 ||
        value === "Pending" ||
        value === "In progress"
      ) {
        isComplete = false;
        incompleteFields.push(field);
      }
    });

    if (isComplete) {
      return isComplete;
    }

    const modal = document.createElement("dialog");
    modal.id = "case-review-modal";
    modal.innerHTML = `
      <div class="modal-header">
        <h1>Incomplete process</h1>
      </div>
      <div class="modal-main">
        <p>The following fields need completing before the case can be closed.</p>
        <div id="review-case-content-container"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="close-modal-btn" id="closeModal">Close</button>
      </div>
    `;

    document.body.appendChild(modal);
    modal.showModal();

    incompleteFields.forEach((field) => {
      let id = `dform_widget_${field}`;
      let element = document.getElementById(id);
      let label, labelText, fieldValue;

      if (!element) {
        let radioContainer = document.querySelector(
          `[data-name="${field}"][data-type="radio"]`
        );
        let checkboxContainer = document.querySelector(
          `[data-name="${field}"][data-type="multicheckbox"]`
        );

        if (radioContainer) {
          let selectedRadio = radioContainer.querySelector(
            "input[type='radio']:checked"
          );
          fieldValue = selectedRadio ? selectedRadio.value : "Not Answered";
          labelText =
            radioContainer.querySelector("legend")?.textContent || field;
          element = radioContainer;
        } else if (checkboxContainer) {
          let selectedCheckboxes = [
            ...checkboxContainer.querySelectorAll(
              "input[type='checkbox']:checked"
            ),
          ];
          fieldValue = selectedCheckboxes.length
            ? selectedCheckboxes.map((cb) => cb.value).join(", ")
            : "Not Answered";
          labelText =
            checkboxContainer.querySelector("legend")?.textContent || field;
          element = checkboxContainer;
        } else {
          fieldValue = KDF.getVal(field) || "Not Answered";
          label = document.querySelector(`label[for='${id}']`);
          labelText = label ? label.textContent : field;
        }
      } else {
        label = document.querySelector(`label[for='${id}']`);
        labelText = label ? label.textContent : field;
        fieldValue = KDF.getVal(field) || "Not Answered";
      }

      let pageTitleText = "Unknown Section";
      if (element) {
        let page = element.closest('[data-type="page"]');
        if (page) {
          let pageTitleElement = page.querySelector(".header2");
          pageTitleText = pageTitleElement ? pageTitleElement.textContent : "Unknown Section";
          let pageId = page.id
            ? page.id.replace(/^dform_page_/, "")
            : `page-${Math.random().toString(36).substr(2, 9)}`;
          let pageData = pages.find((page) => page.pageId === pageId);
          if (!pageData) {
            pageData = { pageId, pageTitle: pageTitleText, fields: [] };
            pages.push(pageData);
          }
          pageData.fields.push({
            fieldlabel: labelText,
            fieldValue: fieldValue,
          });
        }
      }
    });

    pages.forEach((page) => {
      createReviewSection(page.pageId, page.pageTitle, page.fields);
    });

    document
      .getElementById("closeModal")
      .addEventListener("click", function () {
        modal.close();
        modal.remove();
      });

    return isComplete;
  }

  $(".close-case-btn").on("click", () => {
    if (checkIsFormComplete(fieldsToCheckBeforeClose)) {
      KDF.markComplete();
      KDF.gotoPage("complete", false, false, false);
    }
  });

  // --- OHMS -------------------------------------------------------------- \\

  if (kdf.params.customerid) {
    KDF.customdata("retrieve-social-ids", "_KDF_objectdataLoaded", true, true, {
      customerid: kdf.params.customerid,
    });
  }

  $("#dform_widget_button_but_view_rent_account").on("click", function () {
    const customerid =
      kdf.params.customerid ?? KDF.getVal("num_reporter_obj_id");
    if (customerid) {
      createModal("hubScreenRentSummary", "hub_rent_summary", customerid);
    } else {
      KDF.showWarning("A customer has not been set.");
    }
  });

  // --- HANDLE SIGN IN BUTTTON CLICK -------------------------------------- \\

  $('#dform_widget_button_but_next_sign_in').on('click', function () {
    if (KDF.getVal("rad_sign_in") === "true") {
      window.location.href = `${PORTAL_URL}/account/${kdf.form.name}`;
    } else {
      KDF.gotoNextPage();
    }
  });

  $('#dform_widget_button_but_view_my_requests').on('click', function () {
    window.location.href = `${PORTAL_URL}/requests`;
  });

  scrollToTop();
}

// --- HANDLE ON PAGE CHANGE EVENT ----------------------------------------- \\

function handlePageChangeEvent(event, kdf, currentpageid, targetpageid) {
  KDF.hideMessages();

  // Get the name for the current page
  $(`div[data-type="page"][data-pos="${targetpageid}"]`).each(function () {
    pageName = this.id.slice(11);
  });

  updateProgressBar(targetpageid);

  if (enableSave && kdf.customerset === "citizen_true") {
    if (targetpageid > 2 && pageName !== "complete" && kdf.form.complete !== "Y") {
      KDF.saveQuiet();
    }
  }

  if (pageName === "page_about_you") {
    if (kdf.access === "agent" && !kdf.form.data?.num_reporter_obj_id) {
      KDF.sendDesktopAction("raised_by");
    }
  }

  if (
    pageName === "page_review" ||
    pageName === "page_declaration" ||
    pageName === "save" ||
    pageName === "complete"
  ) {
    if ($("#dform_progressbar_sheffield").length) {
      $("#dform_progressbar_sheffield, #dform_ref_display").hide();
    }
  } else {
    if ($("#dform_progressbar_sheffield").length) {
      $("#dform_progressbar_sheffield, #dform_ref_display").show();
    }
  }

  if (pageName === "save") {
    KDF.setVal("txt_resume_form", "true");
    getAndSetReviewPageData();
    KDF.save();
  }

  if (pageName === "complete") {
    if (!KDF.getVal("eml_address")) {
      KDF.hideWidget("ahtm_confirmation_email_send");
    } else {
      KDF.showWidget("ahtm_confirmation_email_send");
    }
    KDF.setVal("txt_finish_date_and_time", formatDateTime().utc);
  }

  let skipPages = 1;
  if (document.getElementById('dform_page_page_sign_in')) {
    skipPages++;
  }
  displayBackButton(targetpageid > skipPages && pageName !== "complete" && kdf.form.complete !== "Y");

  const controlElement = document.getElementById('dform_controls');
  if (controlElement) {
    const signInPage = document.getElementById('dform_page_page_sign_in');
    const progressBar = document.getElementById('dform_progressbar_sheffield');
    let showControls = false;

    if (progressBar) {
      if (signInPage) {
        showControls = targetpageid >= 2;
      } else {
        showControls = targetpageid >= 1;
      }
    }

    if (!progressBar && targetpageid > skipPages) {
      showControls = true;
    }

    controlElement.style.display = showControls ? "flex" : "none";
  }

  getAndSetReviewPageData();

  scrollToTop();

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON FIELD CHANGE EVENT ---------------------------------------- \\

function handleFieldChangeEvent(event, kdf, field) {
  // --- HANDLE FORMAT REMOVE ECCESS WHITE SPACES -------------------------- \\

  if (
    field.type === "text" ||
    field.type === "number" ||
    field.type === "email" ||
    field.type === "tel"
    // || field.type === "textarea"
  ) {
    $(`#${field.id}`).val(formatRemoveEccessWhiteSpace(KDF.getVal(field.name)));
  }

  if (field.name.startsWith("txt_find_address_")) {
    const defaultMessage = getValidationMessageFromSession(field.id);
    if (defaultMessage) {
      updateValidationMessage(field.name, defaultMessage);
    }
  }

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON OPTION SELECTED EVENT ------------------------------------ \\

function handleOptionSelectedEvent(event, kdf, field, label, val) {
  // --- HANDLE SET MULTI CHECK VALUE TO TEXT FIELD ------------------------ \\

  if (field.startsWith("mchk_")) {
    const mchkField = field.replace("[]", "");
    const textField = mchkField.replace("mchk_", "txt_");
    const stringValue = KDF.getVal(mchkField).toString().replace(/,/gi, ", ");
    KDF.setVal(textField, stringValue);
  }

  // --- HANDLE TOGGLE NI NASS --------------------------------------------- \\

  if (field === "chk_no_national_insurance_number") {
    const showNass = $("#dform_widget_chk_no_national_insurance_number").is(
      ":checked"
    );
    hideShowMultipleElements([
      { name: "txt_national_asylum_support", display: showNass },
      { name: "txt_national_insurance", display: !showNass },
    ]);
  }

  // --- MAP --------------------------------------------------------------- \\

  do_KDF_optionSelected_esriMap(field, label, val);

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON MAP READY EVENT ------------------------------------------ \\

function handleMapReadyEvent(
  event,
  kdf,
  type,
  name,
  map,
  positionLayer,
  markerLayer,
  marker,
  projection
) {
  do_KDF_mapReady_esriMap(map, positionLayer);

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON MAP CLICK EVENT ------------------------------------------ \\

function handleMapClickEvent(
  event,
  kdf,
  type,
  name,
  map,
  positionLayer,
  markerLayer,
  marker,
  lat,
  lon,
  plat,
  plon
) {
  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON MAP LAYRE SELECTED EVENT --------------------------------- \\

function handleSelectedMapLayerEvent(event, kdf, layerName, layerAttributes) {
  const { main_attribute: main, background_attribute: bg } = layerAttributes;

  const siteCode = bg.sitecode || "";
  const featureTypeName =
    main.featuretypename ||
    main["sheffield.corpmap.HCFP_Assets_GrassPlantArea.feature_type_name"] ||
    main?.["sheffield.corpmap.HCFP_Assets_GrassPlantArea.feature_type_name"] ||
    "";
  const featureType =
    main.featuregroupcode ||
    main.site_type ||
    main["sheffield.corpmap.HCFP_Assets_GrassPlantArea.feature_type_code"] ||
    main?.["sheffield.corpmap.HCFP_Assets_GrassPlantArea.feature_type_code"] ||
    "";
  const responsibility =
    main.responsibility ||
      main["sheffield.corpmap.HCFP_Assets_GrassPlantArea.responsibility"] ||
      main?.["sheffield.corpmap.HCFP_Assets_GrassPlantArea.responsibility"] ||
      bg.sitecode
      ? "CHS"
      : "";
  const prestige =
    main["sheffield.corpmap.HCFP_Assets_GrassPlantArea.grass_category"] ||
    main?.["sheffield.corpmap.HCFP_Assets_GrassPlantArea.grass_category"] ||
    bg.status ||
    bg?.status ||
    "";

  setValuesToInputFields([
    { alias: "siteCode", value: siteCode },
    { alias: "featureName", value: featureTypeName },
    { alias: "featureType", value: featureType },
    { alias: "responsibility", value: responsibility },
    { alias: "prestige", value: prestige },
  ]);

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE CLEAR MAP FIELDS EVENT -------------------------------------- \\

function handleClearMapFieldsEvent() {
  setValuesToInputFields([
    { alias: "featureName", value: "" },
    { alias: "featureType", value: "" },
    { alias: "responsibility", value: "" },
    { alias: "prestige", value: "" },
  ]);

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON OBJECT EVENT --------------------------------------------- \\

function handleObjectIdSet(event, kdf, type, id) {
  KDF.setVal("txt_reporter_obj_type", type);
  KDF.setVal("num_reporter_obj_id", id);

  // Update customer set state
  customerState = "agent_true";

  // Hide submit anonymously option and info
  $(".anonymous").hide();

  // keep at the bottom
  checkPageProgress();
}

function handleObjectIdLoaded(event, kdf, response, type, id) {
  KDF.customdata("retrieve-social-ids", "_KDF_objectdataLoaded", true, true, {
    customerid: id,
  });

  property = formatTitleCase(response["profile-AddressNumber"]);
  streetName = formatTitleCase(response["profile-AddressLine1"]);
  fullAddress = `${formatTitleCase(property)} ${formatTitleCase(streetName)}, ${response["profile-AddressLine4"]
    }, ${response["profile-Postcode"]}`;

  handleSetReporter(new Date(response["profile-DateOfBirth"]), fullAddress);

  KDF.setVal("eml_address", "");
  KDF.setVal("eml_address", response["profile-Email"].toLowerCase());

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON SUCCESSFUL ACTION EVENT ---------------------------------- \\

function handleSuccessfulAction(event, kdf, response, action, actionedby) {
  if (action === "check-for-existing-case-management-form") {
    if (response.data.existingForm === "true") {
      KDF.showInfo("This case manamgement form already exists");
      const dformHolder = document.getElementById("dform_holder");
      if (dformHolder) {
        dformHolder.remove();
      }
    }
  }

  if (action === "set-raised-by") {
    const { customerid } = response.data;
    if (!customerid) {
      KDF.showError("Customer ID Not Set");
      return;
    }
    KDF.setCustomerID(customerid, false, KDF.gotoNextPage());
    // KDF.setVal('num_customer_id', customerid);
    // KDF.gotoNextPage();
  }

  if (
    action === "search-local-address" ||
    action === "search-national-address"
  ) {
    let targetPageId = getCurrentPageId();
    if (targetPageId === 'dform_page_page_about_you') {
      KDF.setWidgetRequired('sel_search_results_about_you');
    }
    if (initialProfileAddressLoad === true) {
      initialProfileAddressLoad = false;
      targetPageId = "dform_page_page_about_you";
      setTimeout(function () {
        setProfileAddressDetails(targetPageId, kdf);
        KDF.setWidgetNotRequired('sel_search_results_about_you');
      }, 0);
    }

    if (action === "search-local-address") {
      addressSearchType[targetPageId] = "local";
    }
    if (action === "search-national-address") {
      addressSearchType[targetPageId] = "national";
    }

    const { propertySearchResult } = response.data;
    // if (propertySearchResult.length > 0) {
    const formattedSearchResult = propertySearchResult.map((addressLine) => {
      // Create a copy to avoid mutating the original object
      const newAddressLine = { ...addressLine };
      const parts = newAddressLine.label.split(",");
      newAddressLine.label =
        formatTitleCase(parts[0]) + "," + parts.slice(1).join(",");
      return newAddressLine;
    });
    setValuesToInputFields([
      { alias: "searchResult", value: formattedSearchResult },
    ]);

    const numberOfResults = propertySearchResult ? propertySearchResult.length : 0;

    const searchInput = document.querySelector(`#${targetPageId} input[data-customalias="postcode"]`);
    let searchButton = document.querySelector(`#${targetPageId} .address-search-btn`);

    const resultsList = document.querySelector(`#${targetPageId} .address-search-results`);
    let resultsLabelId = null;
    if (resultsList) {
      const labelElement = resultsList.querySelector('label');
      if (labelElement) {
        resultsLabelId = labelElement.id;
      }
    }

    let manualAddressElement = document.querySelector(`#${targetPageId} .manual-address-container`);
    let setAddressButton = document.querySelector(`#${targetPageId} .set-address-btn`);
    const searchedPostcode = searchInput ? searchInput.value : '';

    const resultsContent = `
        ${numberOfResults} addresses found for <strong>${searchedPostcode}</strong>.
        <button type="button" class="search-again-btn link-btn">Search again</button>
      `;

    if (resultsList && searchInput && searchButton) {
      let searchStatusMessageElement = document.getElementById(resultsLabelId);
      if (searchStatusMessageElement) {
        searchStatusMessageElement.innerHTML = resultsContent;
      }

      let selectElement = resultsList.querySelector('select');
      if (selectElement) {
        selectElement.style.display = 'block'; // Shows the element
      }

      searchButton = searchButton.id.replace('dform_widget_button_', '');

      if (manualAddressElement) {
        manualAddressElement = manualAddressElement.id.replace('dform_widget_html_', '');
      }
      if (setAddressButton) {
        setAddressButton = setAddressButton.id.replace('dform_widget_button_', '');
      }

      hideShowMultipleElements([
        { name: searchInput.name, display: "hide" },
        { name: searchButton, display: "hide" },
        { name: resultsList.dataset.name, display: "show" },
        { name: manualAddressElement, display: "show" },
        { name: setAddressButton, display: "show" },
      ]);
    }
  }

  if (
    action === "retrieve-local-address" ||
    action === "retrieve-national-address" ||
    action === "retrieve-location-from-coordinates"
  ) {
    let {
      subProperty,
      buildingName,
      buildingNumber,
      property,
      streetName,
      locality,
      city,
      postcode,
      fullAddress,
      propertyId,
      uprn,
      easting,
      northing,
      streetId,
      usrn,
      status,
      message,
      ohmsUprn,
      propertyClass,
      managementCode,
      area,
      ward,
      officer,
      areaContact,
      officerContact,
    } = response.data;

    const currentPageId = getCurrentPageId();
    const addressSelectionSection = document.querySelector(`#${currentPageId} .address-selection-section`);
    const selectedAddressSpan = document.querySelector(`#${currentPageId} #selected-address`);

    if (status == 400 && action === "retrieve-location-from-coordinates") {
      if (addressSelectionSection) {
        addressSelectionSection.classList.add('dform_fielderror');
      }

      if (selectedAddressSpan) {
        selectedAddressSpan.textContent = message;
        selectedAddressSpan.classList.add('dform_validationMessage');
        selectedAddressSpan.style.display = 'block';
      }
      return;
    }

    const addressDataForDisplay = {
      subProperty: subProperty ? formatTitleCase(subProperty) : '',
      buildingName: buildingName ? formatTitleCase(buildingName) : '',
      buildingNumber: buildingNumber ? formatTitleCase(buildingNumber) : '',
      property: property ? formatTitleCase(property) : '',
      streetName: streetName ? formatTitleCase(streetName) : '',
      locality: locality ? formatTitleCase(locality) : '',
      city: city ? formatTitleCase(city) : '',
      postcode: postcode ? postcode.toUpperCase() : ''
    };

    const fullAddressDisplay = buildAddressMarkup(addressDataForDisplay);
    let selectedAddressContainer = document.querySelector(`#${currentPageId} .selected-address-container`);
    if (selectedAddressContainer) {
      selectedAddressContainer.innerHTML = fullAddressDisplay;
      selectedAddressContainer = selectedAddressContainer.id.replace('dform_widget_html_', '');
    }

    if (addressSelectionSection) {
      addressSelectionSection.classList.add('dform_fieldsuccess');
    }

    if (selectedAddressSpan) {
      const addressParts = Object.values(addressDataForDisplay)
        .filter(Boolean)
        .join(', ');
      selectedAddressSpan.innerHTML = addressParts;
      selectedAddressSpan.classList.remove('dform_validationMessage');
    }

    const addressearchResults = document.querySelector(`#${currentPageId} .address-search-results`);
    let setAddressButton = document.querySelector(`#${currentPageId} .set-address-btn`);
    if (setAddressButton) {
      setAddressButton = setAddressButton.id.replace('dform_widget_button_', '');
    }
    const buttonContainer = document.querySelector(`#${currentPageId} .address-search-btn-container`);
    let manualAddressElement = document.querySelector(`#${currentPageId} .manual-address-container`);
    if (manualAddressElement) {
      manualAddressElement = manualAddressElement.id.replace('dform_widget_html_', '');
    }

    property = formatTitleCase(property);
    streetName = formatTitleCase(streetName);
    fullAddress = `${formatTitleCase(property)} ${formatTitleCase(
      streetName
    )}, ${city}, ${postcode}`;

    setValuesToInputFields([
      { alias: "property", value: property },
      { alias: "streetName", value: streetName },
      { alias: "city", value: city },
      { alias: "postCode", value: postcode },
      { alias: "fullAddress", value: fullAddress },
      { alias: "uprn", value: uprn },
      { alias: "usrn", value: usrn },
      { alias: "siteName", value: streetName },
      { alias: "siteCode", value: usrn },
      { alias: "propertyId", value: propertyId },
      { alias: "streetId", value: streetId },
      { alias: "easting", value: easting },
      { alias: "northing", value: northing },
      { alias: "ohmsUprn", value: ohmsUprn },
      { alias: "propertyClass", value: propertyClass },
      { alias: "managementCode", value: managementCode },
      { alias: "area", value: area },
      { alias: "ward", value: ward },
      { alias: "officer", value: officer },
      { alias: "areaContact", value: areaContact },
      { alias: "officerContact", value: officerContact },
    ]);

    if (addressearchResults) {
      const selectElement = addressearchResults.querySelector('select');
      if (selectElement) {
        selectElement.style.display = 'none'; // Hides the element
        selectElement.classList.remove('dform_fielderror');
      }
      const validationMessage = addressearchResults?.querySelector('.dform_validationMessage');
      if (validationMessage) {
        validationMessage.style.display = "none";
        validationMessage.textContent = "Select the address";
      }
    }

    if (buttonContainer) {
      buttonContainer.style.display = 'none'; // Hides the element
    }

    let findOnMapElement = document.querySelector(`#${currentPageId} .map-container`);
    if (findOnMapElement) {
      if (easting && northing) {
        plotLocationOnMap(easting, northing);
      }
      findOnMapElement = findOnMapElement.id.replace('dform_widget_html_', '');
    }

    hideShowMultipleElements([
      { name: setAddressButton, display: "hide" },
      { name: selectedAddressContainer, display: "show" },
      { name: manualAddressElement, display: "hide" },
      { name: findOnMapElement, display: "hide" },
    ]);
  }

  if (action === "retrieve-vehicle-details") {
    const {
      co2Emissions,
      colour,
      dateOfLastV5CIssued,
      engineCapacity,
      fuelType,
      make,
      markedForExport,
      monthOfFirstRegistration,
      motExpiryDate,
      motStatus,
      registrationNumber,
      taxDueDate,
      taxStatus,
      typeApproval,
      wheelplan,
      yearOfManufacture,
    } = response.data;
    setValuesToInputFields([
      { alias: "co2Emissions", value: co2Emissions },
      { alias: "colour", value: colour },
      { alias: "dateOfLastV5CIssued", value: dateOfLastV5CIssued },
      { alias: "engineCapacity", value: engineCapacity },
      { alias: "fuelType", value: fuelType },
      { alias: "make", value: make },
      { alias: "markedForExport", value: markedForExport },
      { alias: "model", value: "" },
      { alias: "monthOfFirstRegistration", value: monthOfFirstRegistration },
      { alias: "motExpiryDate", value: motExpiryDate },
      { alias: "motStatus", value: motStatus },
      { alias: "registrationNumber", value: registrationNumber },
      { alias: "taxDueDate", value: taxDueDate },
      { alias: "taxStatus", value: taxStatus },
      { alias: "typeApproval", value: typeApproval },
      { alias: "wheelplan", value: wheelplan },
      { alias: "yearOfManufacture", value: yearOfManufacture },
    ]);
    showHideInputFields([
      { alias: "registrationNumber", display: false },
      { alias: "make", display: false },
      { alias: "model", display: true },
      { alias: "colour", display: false },
    ]);
  }

  if (action === "retrieve-process-status") {
    const { caseStatus, formStatus } = response.data;
    if (formStatus === "Y") {
      $(".review-page-edit-button").remove();
    }
  }

  // --- OHMS -------------------------------------------------------------- \\

  if (
    action === "retrieve-social-ids" &&
    response.data["profile-socialId-ohms"]
  ) {
    const screen =
      kdf.form.name === "hub_rent_summary" ? "RNT1" : "personDetails";
    const agentId = response.data.agendId;
    const ohmsId = response.data["profile-socialId-ohms"];

    const url = `${response.data.url}?screenId=${screen}&crmAgentId=${agentId}&hmsPersonId=${ohmsId}&refreshParam=<xref1>&dummy=<!2!/CurrentTime/Time!>`;
    const iframe = document.createElement("iframe");

    iframe.id = "ifrm1";
    iframe.width = "100%";
    iframe.height = screen === "RNT1" ? "521" : "725";
    iframe.src = url;

    const container = document.getElementById("hub-screen-container");

    if (container) {
      container.innerHTML = "";
      container.appendChild(iframe);

      hideShowMultipleElements([
        { name: "ahtm_hub_screen", display: "show" },
        { name: "area_about_you", display: "hide" },
        { name: "area_address_lookup_about_you", display: "hide" },
        { name: "area_address_details_about_you", display: "hide" },
        { name: "but_view_rent_account", display: ohmsId ? "show" : "hide" },
      ]);
    }

    if (kdf.access === "agent") {
      setTimeout(() => {
        KDF.customdata(
          "retrieve-council-housing-property-details",
          "_KDF_custom",
          true,
          true,
          {
            propertId: KDF.getVal("txt_uprn_about_you"),
            property: KDF.getVal("txt_property_about_you"),
            postcode: KDF.getVal("txt_postcode_about_you"),
          }
        );
      }, 500);
    }
  }

  // --- MAP --------------------------------------------------------------- \\

  do_KDF_Custom_esriMap(action, response);

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON FAILED ACTION EVENT -------------------------------------- \\

function handleFailedAction(event, action, xhr, settings, thrownError) {
  KDF.hideMessages();

  if (action === "retrieve-vehicle-details") {
    resetVehicleSearch(false);
    showVehicleFields();
  } else {
    if (KDF.kdf().access === "agent") {
      KDF.showError(`${action} failed: ${thrownError}`);
      window.scrollTo(0, 0);
    }
  }

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON SUCCESSFUL SAVE EVENT ------------------------------------ \\

function handleFormSave(event, kdf) {
  KDF.hideMessages();

  createAndInsertReferenceDisplay(kdf.form.caseid);
}

// --- HANDLE ON FAILED SAVE EVENT ---------------------------------------- \\

function handleFailedSave(event, kdf) {
  KDF.hideMessages();
}

// --- HANDLE ON COMPLETE EVENT ------------------------------------------- \\

function handleFomComplate(event, kdf) {
  setTimeout(function () {
    KDF.hideMessages();
  }, 0);

  displayBackButton(false);

  // createAndInsertReferenceDisplay(kdf.form.caseid);

  setTimeout(function () {
    const pagenav = document.getElementById("dform_pagenav");
    if (pagenav) {
      pagenav.style.setProperty('display', 'none', 'important');
      const ul = pagenav.querySelector("#dform_navigation");
      if (ul) {
        ul.style.setProperty('display', 'none', 'important');
      }
    }
  }, 0);

  const printButton = document.getElementById("dform_print");
  if (printButton) {
    const controlButtonsList = document.querySelector('#dform_control_buttons > ul');
    if (controlButtonsList) {
      controlButtonsList.style.setProperty('display', 'block', 'important');
    }
    printButton.style.setProperty('display', 'inline-flex', 'important');
  }

  if (kdf.form.data.eml_address && kdf.form.data.eml_address !== "") {
    KDF.showWidget("ahtm_confirmation_email");
  }

  if (kdf.access === "citizen" && kdf.customerset === "citizen_true") {
    buildMyAccountLink(kdf.form.caseid);
  }
}

// --- DISPLAY BACK BUTTON ------------------------------------------------ \\

function displayBackButton(show) {
  const controlContainer = document.getElementById("dform_control_buttons");
  const backButton = document.getElementById("dform_widget_button_but_back");
  if (backButton) {
    if (show) {
      controlContainer.style.display = "flex";
      backButton.style.display = "flex";
    } else {
      if (pageName === "complete" && KDF.kdf().form.complete === "Y") {
        controlContainer.style.display = "flex";
      } else {
        controlContainer.style.display = "none";
      }
      backButton.style.display = "none";
    }
  } else {
    console.error("Element with ID 'dform_widget_button_but_back' not found.");
  }
}

// --- GET CURRENT PAGE ----------------------------------------------------- \\

// Function to get the current page ID
function getCurrentPageId() {
  return document.querySelector(
    '[data-type="page"]:not([style*="display: none"])'
  ).id;
}

// --- HANDLE SET AGENT LOCATION -------------------------------------------- \\

function checkAndRefreshAgentLocation() {
  const data = JSON.parse(localStorage.getItem("agentLocation"));
  if (data) {
    const currentTime = new Date().getTime();
    if (currentTime < data.expiry) {
      // Refresh expiry time for another hour
      data.expiry = currentTime + 25 * 60 * 1000; // 25 minutes in milliseconds
      localStorage.setItem("agentLocation", JSON.stringify(data));
    } else {
      // Data has expired
      localStorage.removeItem("agentLocation");
      checkAndDisplayModal();
    }
  } else {
    checkAndDisplayModal();
  }
}

function createOptions(formsToDisplay = forms) {
  optionsContainer.innerHTML = "";
  formsToDisplay
    .sort((a, b) => a.label.localeCompare(b.label))
    .forEach((form) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.innerHTML = `<h4>${form.label}</h4><p>${form.description}</p>`;
      optionDiv.addEventListener("click", () => {
        const { protocol, hostname } = window.location;
        const url = `${protocol}//${hostname}/form/launch/`;
        const customerid = KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : "";
        const interactionid = `interactionid=${KDF.getParams().interactionid}`;
        window.location.href = `${url}${form.name}?${customerid}${interactionid}`;
      });
      optionsContainer.appendChild(optionDiv);
    });
}

// Function to create and display the modal
function createModal(modalId, form, ...args) {
  // Create modal elements
  const modal = document.createElement("div");
  modal.id = modalId;
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const iframe = document.createElement("iframe");
  const { protocol, hostname } = window.location;
  iframe.src = `${protocol}//${hostname}/form/launch/${form}?params=${args}`;
  iframe.frameBorder = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  modal.style.zIndex = "9999";

  modalContent.appendChild(iframe);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Optionally, add a close button
  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function () {
    destroyModal(modal);
  };
  modalContent.appendChild(closeButton);

  // Display the modal
  modal.style.display = "block";

  // Disable focusable elements outside the modal
  const focusableElements = $("*:focusable");
  focusableElements.attr("tabindex", "-1");
}

// Function to destroy the modal
function destroyModal(modal) {
  // Remove modal from the DOM
  if (modal && modal.parentNode) {
    modal.parentNode.removeChild(modal);

    // Re-enable focusable elements
    const focusableElements = $("*:focusable");
    focusableElements.attr("tabindex", "");
  }
}

// Function to check and display modal if needed
function checkAndDisplayModal() {
  const data = JSON.parse(localStorage.getItem("agentLocation"));
  if (!data || new Date().getTime() > data.expiry) {
    // Data is not present or has expired
    createModal("setAgentLocationModal", "set_agent_location");
  }
}

// --- DISABLE BUTTONS ------------------------------------------------------ \\

function checkPageProgress() {
  const currentPageId = getCurrentPageId();
  const currentPageElement = document.getElementById(currentPageId);

  // Check if the alert panel with class 'alert-panel--ineligible' is visible
  const alertPanels = currentPageElement.querySelectorAll(
    ".alert-panel--ineligible"
  );
  const isAlertPanelVisible = Array.from(alertPanels).some(isVisible);

  // Check if a validation message is visible
  const validationMessages = currentPageElement.querySelectorAll(
    ".dform_validationMessage"
  );

  const isValidationMessageVisible =
    Array.from(validationMessages).some(isVisible);

  // Handle file inputs separately
  const fileUploads = Array.from(
    currentPageElement.querySelectorAll("input[type='file']:required")
  ).filter((el) => isVisible(el));

  // Handle radio buttons and checkboxes separately
  const radiosAndCheckboxes = Array.from(
    currentPageElement.querySelectorAll(
      "input[type='radio']:required, input[type='checkbox']:required"
    )
  ).filter((el) => isVisible(el));

  // Handle all other required input types (excluding radio, checkbox, and file)
  const otherFields = Array.from(
    currentPageElement.querySelectorAll(
      "input[required], select[required], textarea[required]"
    )
  ).filter(
    (el) => isVisible(el) && !["radio", "checkbox", "file"].includes(el.type)
  );

  function isVisible(element) {
    return !!(
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    );
  }

  // Check if any of the file inputs are empty based on the filenames in the associated div
  const hasEmptyFileUploads = fileUploads.some((el) => {
    const filenamesContainer = el
      .closest(".dform_widget")
      .querySelector(".dform_filenames");
    const hasFiles =
      filenamesContainer && filenamesContainer.children.length > 0;

    return !hasFiles;
  });

  // Check if any radio or checkbox groups are unchecked
  const hasEmptyRadiosAndCheckboxes = radiosAndCheckboxes.some((el) => {
    const name = el.name;
    const isUnchecked = !currentPageElement.querySelector(
      `input[name='${name}']:checked`
    );

    return isUnchecked;
  });

  // Check if any other required fields are empty or invalid
  const hasEmptyOrInvalidOtherFields = otherFields.some((el) => {
    let isEmpty = el.value.trim() === "" || el.value === "Please select...";
    let isValid = el.checkValidity();
    const name = el.name;
    if (
      el.name.startsWith("num_") &&
      (el.name.endsWith("_dd") ||
        el.name.endsWith("_mm") ||
        el.name.endsWith("_yy"))
    ) {
      const dateElement = document.getElementById(
        el.id.replace("_num_", "_dt_").slice(0, -3)
      );
      isEmpty = dateElement.value.trim() === "";
      isValid = dateElement.checkValidity();
    }

    return isEmpty || !isValid;
  });

  // Combine all the checks
  const hasEmptyRequiredElement =
    hasEmptyFileUploads ||
    hasEmptyRadiosAndCheckboxes ||
    hasEmptyOrInvalidOtherFields;

  // If any alert panel is visible, force disabling the buttons
  const shouldDisableButton =
    hasEmptyRequiredElement ||
    isAlertPanelVisible ||
    isValidationMessageVisible;

  // Call the disabledButtonToggle function based on the check
  //   disabledButtonToggle(!shouldDisableButton);
}

function disabledButtonToggle(enable) {
  const buttons = document.querySelectorAll(".primary-btn, .anonymous-btn");

  buttons.forEach((button) => {
    if (enable) {
      // Enable buttons and remove disabled class
      button.classList.remove("disabled");
      button.disabled = false;
      button.setAttribute("aria-disabled", "false");
    } else {
      if (getCurrentPageId() !== "dform_page_page_about_you") {
        // Disable anonymous buttons and add disabled class
        if (button.classList.contains("anonymous-btn")) {
          button.classList.add("disabled");
          button.disabled = true;
          button.setAttribute("aria-disabled", "true");
        }
      }
      // Disable primary buttons and add disabled class
      if (button.classList.contains("primary-btn")) {
        button.classList.add("disabled");
        button.disabled = true;
        button.setAttribute("aria-disabled", "true");
      }
    }
  });
}

// --- SET VALUE TO FIELD ON CURRENT PAGE ----------------------------------- \\

// Function to set value to fields based on data-customalias attributes of inputs on the current page
function setValuesToInputFields(aliasesAndValues) {
  const currentPageId = getCurrentPageId(); // Get the current page ID

  // Iterate over each custom alias and value pair
  aliasesAndValues.forEach(({ alias, value }) => {
    // Get the element with the specified data-customalias attribute on the current page
    const element = document.querySelector(`
        #${currentPageId} input[data-customalias="${alias}"], 
        #${currentPageId} select[data-customalias="${alias}"],
        #${currentPageId} textarea[data-customalias="${alias}"]
      `);

    // If element is found, set its value using KDF.setVal();
    if (element) {
      //  Get the name of the element
      const name = element.name;

      KDF.setVal(name, value);
    }
  });
}

function getValuesOfInputFields(aliases) {
  const currentPageId = getCurrentPageId(); // Get the current page ID
  const results = [];

  // Iterate over each custom alias and value pair
  aliases.forEach(({ alias }) => {
    // Get the element with the specified data-customalias attribute
    const element = document.querySelector(`
        #${currentPageId} input[data-customalias="${alias}"], 
        #${currentPageId} select[data-customalias="${alias}"],
        #${currentPageId} textarea[data-customalias="${alias}"]
      `);

    // If element is found, add an object with alias and value to results
    if (element) {
      const name = element.name;
      const processedValue = KDF.getVal(name);

      results.push({
        alias,
        value: processedValue,
      });
    }
  });

  return results;
}

// --- SHOW / HIDE FIELD ON CURRENT PAGE ------------------------------------ \\

// Function to show or hide select fields based on data-customalias attributes of selects on the current page
function showHideInputFields(aliasesAndDisplay) {
  const currentPageId = getCurrentPageId(); // Get the current page ID

  // Iterate over each custom alias and action pair
  aliasesAndDisplay.forEach(({ alias, display }) => {
    // Get the select element with the specified data-customalias attribute on the current page
    const element = document.querySelector(`
          #${currentPageId} input[data-customalias="${alias}"], 
          #${currentPageId} select[data-customalias="${alias}"],
          #${currentPageId} textarea[data-customalias="${alias}"]
      `);

    // Ensure selectElement exists before accessing its properties
    if (element) {
      // Get the name of the select element
      const name = element.name;

      // Determine whether to show or hide based on the action
      if (display) {
        KDF.showWidget(name);
      } else {
        KDF.hideWidget(name);
      }
    }
  });
}

function setRequiredStateByAlias(alias, requiredState) {
  const currentPageId = getCurrentPageId(); // Get the current page ID

  // Construct the selector string with the provided alias
  const selector = `
      #${currentPageId} input[data-customalias="${alias}"], 
      #${currentPageId} select[data-customalias="${alias}"],
      #${currentPageId} textarea[data-customalias="${alias}"]
    `;

  // Find the element matching the selector
  const element = document.querySelector(selector);

  if (element) {
    updateRequiredState(element.name, requiredState);
  }
}

// --- RESER ADDRESS FIELDS ------------------------------------------------- \\

function resetAddressSearch(hideFields = true) {
  setValuesToInputFields([
    { alias: "searchResult", value: "" },
    { alias: "property", value: "" },
    { alias: "streetName", value: "" },
    { alias: "city", value: "" },
    { alias: "postCode", value: "" },
    { alias: "fullAddress", value: "" },
    { alias: "uprn", value: "" },
    { alias: "usrn", value: "" },
    { alias: "siteName", value: "" },
    { alias: "siteCode", value: "" },
    { alias: "featureName", value: "" },
    { alias: "featureType", value: "" },
    { alias: "responsibility", value: "" },
    { alias: "prestige", value: "" },
    { alias: "easting", value: "" },
    { alias: "northing", value: "" },
  ]);
  if (hideFields) {
  }
}

// --- RESER VEHICLE FIELDS ------------------------------------------------- \\

function resetVehicleSearch(hideFields = true) {
  setValuesToInputFields([
    { alias: "co2Emissions", value: "" },
    { alias: "colour", value: "" },
    { alias: "dateOfLastV5CIssued", value: "" },
    { alias: "engineCapacity", value: "" },
    { alias: "fuelType", value: "" },
    { alias: "make", value: "" },
    { alias: "markedForExport", value: "" },
    { alias: "model", value: "" },
    { alias: "monthOfFirstRegistration", value: "" },
    { alias: "motExpiryDate", value: "" },
    { alias: "motStatus", value: "" },
    { alias: "registrationNumber", value: "" },
    { alias: "taxDueDate", value: "" },
    { alias: "taxStatus", value: "" },
    { alias: "typeApproval", value: "" },
    { alias: "wheelplan", value: "" },
    { alias: "yearOfManufacture", value: "" },
  ]);
  if (hideFields) {
    showHideInputFields([
      { alias: "registrationNumber", display: false },
      { alias: "make", display: false },
      { alias: "model", display: false },
      { alias: "colour", display: false },
    ]);
  }
}

// --- SHOW VEHICLE FIELDS ------------------------------------------------- \\

function showVehicleFields() {
  showHideInputFields([
    { alias: "registrationNumber", display: true },
    { alias: "make", display: true },
    { alias: "model", display: true },
    { alias: "colour", display: true },
  ]);
}

// --- CUSTOM DATE FUNCTIONS ------------------------------------------------ \\

function handleDateValidation(parentId, element) {
  const dd = parseInt(
    $(`#${parentId.replace("_date_", "_num_")}_dd`).val(),
    10
  );
  const mm = parseInt(
    $(`#${parentId.replace("_date_", "_num_")}_mm`).val(),
    10
  );
  const yy = parseInt(
    $(`#${parentId.replace("_date_", "_num_")}_yy`).val(),
    10
  );

  checkDate(parentId, dd, mm, yy, element);
  checkMaxDay(parentId, dd, mm, yy);
  checkPageProgress();
}

function checkMaxDay(id, dd, mm, yy) {
  const ddMax = new Date(yy, mm, 0).getDate();
  $(`#${id} .date-dd`).attr("max", ddMax);
  if (dd > ddMax) {
    $(`#${id} .date-dd`).addClass("dform_fielderror");
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text(`Must be a real date`)
      .show();
  } else if (dd) {
    $(`#${id} .date-dd`).removeClass("dform_fielderror");
  }

  if (mm > 12) {
    $(`#${id} .date-mm`).addClass("dform_fielderror");
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text(`Must be a real date`)
      .show();
  } else if (mm) {
    $(`#${id} .date-mm`).removeClass("dform_fielderror");
  }
}

function calculateRelativeDate(relativeDate, now) {
  const match = relativeDate.match(/(-?\d+)([YMD])/);
  if (!match) {
    return new Date(relativeDate); // Try to parse as a normal date
  }
  const value = parseInt(match[1], 10);
  const unit = match[2];
  const newDate = new Date(now);
  switch (unit) {
    case "Y":
      newDate.setFullYear(now.getFullYear() + value);
      break;
    case "M":
      newDate.setMonth(now.getMonth() + value);
      break;
    case "D":
      newDate.setDate(now.getDate() + value);
      break;
  }
  return newDate;
}

function getMinMaxDates(dateElementId) {
  const $dateElement = $(`#${dateElementId}`);
  if ($dateElement.length === 0) {
    return null;
  }
  let minDate = $dateElement.attr("data-mindate");
  let maxDate = $dateElement.attr("data-maxdate");

  const now = new Date();
  minDate = minDate ? calculateRelativeDate(minDate, now) : null;
  maxDate = maxDate ? calculateRelativeDate(maxDate, now) : null;
  minDate.setHours(0, 0, 0, 0);
  maxDate.setHours(0, 0, 0, 0);

  return { minDate, maxDate };
}

function checkDate(id, dd, mm, yy, element) {
  let txtFieldId = id;
  if (id.includes("_num_")) {
    txtFieldId = id.replace("_num_", "_txt_").slice(0, -3);
  }
  if (id.includes("_date_")) {
    txtFieldId = id.replace("_date_", "_txt_");
  }

  const baseMessage = getValidationMessageFromSession(txtFieldId);
  let updatedMessage = baseMessage.replace("Enter ", "");
  updatedMessage = updatedMessage.charAt(0).toUpperCase() + updatedMessage.slice(1);

  $(`#${id} .date-dd, #${id} .date-mm, #${id} .date-yy`).removeClass("dform_fielderror");
  $(`#${id}`).find(".dform_validationMessage").text(baseMessage).hide();

  const activeField = element.name.slice(-2);
  let hasError = false;
  let errorMsg = "";
  const errorFields = [];
  const dateFields = ["date-dd", "date-mm", "date-yy"];

  const errorConditions = [
    {
      condition: !dd && !mm && !yy,
      message: baseMessage,
      fields: dateFields,
    },
    {
      condition: !dd && !mm,
      message: `${updatedMessage} must include a day and month`,
      fields: ["date-dd", "date-mm"],
    },
    {
      condition: !dd && !yy,
      message: `${updatedMessage} must include a day and year`,
      fields: ["date-dd", "date-yy"],
    },
    {
      condition: activeField !== "dd" && !mm && !yy,
      message: `${updatedMessage} must include a month and year`,
      fields: ["date-mm", "date-yy"],
    },
    { condition: !dd, message: `${updatedMessage} must include a day`, fields: ["date-dd"] },
    {
      condition: activeField !== "dd" && !mm,
      message: `${updatedMessage} must include a month`,
      fields: ["date-mm"],
    },
    {
      condition: activeField !== "dd" && activeField !== "mm" && !yy,
      message: `${updatedMessage} must include a year`,
      fields: ["date-yy"],
    },
  ];

  for (const condition of errorConditions) {
    if (condition.condition) {
      hasError = true;
      errorMsg = condition.message;
      errorFields.push(...condition.fields);
      break;
    }
  }

  if (hasError) {
    errorFields.forEach((field) => {
      $(`#${id} .${field}`).addClass("dform_fielderror");
    });
    $(`#${id}`).find(".dform_validationMessage").text(errorMsg).show();
    $(`#${id.replace("_date_", "_txt_")}`).val("");
    $(`#${id.replace("_date_", "_dt_")}`).val("");
    return;
  }

  if (dd && mm && yy) {
    if (validDate(id, dd, mm, yy, activeField, baseMessage, updatedMessage)) {
      const date = `${yy.toString().padStart(4, "0")}-${mm
        .toString()
        .padStart(2, "0")}-${dd.toString().padStart(2, "0")}`;
      const localFormat = new Date(date).toLocaleDateString("en-GB");
      $(`#${id.replace("_date_", "_txt_")}`).val(localFormat).change();
      $(`#${id.replace("_date_", "_dt_")}`).val(date).change();
    } else {
      $(`#${id.replace("_date_", "_txt_")}`).val("");
      $(`#${id.replace("_date_", "_dt_")}`).val("");
      setTimeout(function () {
        $(`#${id}`).find('.date-dd, .date-mm, .date-yy').addClass("dform_fielderror");
      }, 0);
    }
  }
}

function inputDate(id, nextID, key) {
  const ignoredKeys = [9, 16, 37, 38, 39, 40];
  if (ignoredKeys.indexOf(key) !== -1) return;
  const maxLength = $(`#${id}`).attr("maxlength");
  let value = $(`#${id}`).val();
  if (value.length >= maxLength) {
    $(`#${id}`).val(value.substring(0, maxLength));
    $(`#${id}`).val(value.substring(0, maxLength));
    if ((nextID && key) || key === 0) {
      $(`#${nextID}`).focus();
    } else {
      if (key || key === 0) {
        $(`#${id}`).blur();
      }
    }
  }
}

function checkDateRelationship(date1, date2, rule) {
  if (rule === "before") {
    return date1 < date2;
  } else if (rule === "after") {
    return date1 > date2;
  }
  return true;
}

function getYearLabel(years) {
  return years === 1 ? "year" : "years";
}

function validDate(id, day, month, year, activeField, baseMessage, updatedMessage) {
  const validationMsg = $(`#${id}`).find(".dform_validationMessage").text("").hide();
  const inputDate = new Date(year, month - 1, day);

  if (activeField !== "yy") {
    if (
      inputDate.getFullYear() !== year ||
      inputDate.getMonth() + 1 !== month ||
      inputDate.getDate() !== day
    ) {
      validationMsg.text(`${updatedMessage} must be a real date`).show();
      $(`#${id} .${activeField}`).addClass("dform_fielderror");
      return false;
    }
  }

  const dateElementId = id.replace("_date_", "_dt_");
  const { minDate, maxDate } = getMinMaxDates(dateElementId);

  if (inputDate < minDate) {
    const today = new Date();
    const yearsPast = today.getFullYear() - minDate.getFullYear();
    validationMsg.text(
      yearsPast > 0
        ? `${updatedMessage} cannot be more than ${yearsPast} ${getYearLabel(yearsPast)} in the past`
        : `${updatedMessage} must be today or in the future`
    ).show();
    return false;
  }

  if (inputDate > maxDate) {
    const today = new Date();
    const yearsFuture = maxDate.getFullYear() - today.getFullYear();
    validationMsg.text(
      yearsFuture > 0
        ? `${updatedMessage} cannot be more than ${yearsFuture} ${getYearLabel(yearsFuture)} in the future`
        : `${updatedMessage} must be today or in the past`
    ).show();
    return false;
  }

  if (datePairs && Array.isArray(datePairs)) {
    for (const pair of datePairs) {
      const [dateAId, dateBId] = pair.dateFields;
      if (id === dateAId) {
        const dateBValue = $(`#${dateBId.replace("_date_", "_dt_")}`).val();
        if (dateBValue && !checkDateRelationship(inputDate, new Date(dateBValue), pair.rule)) {
          validationMsg.text(`${baseMessage} ${pair.validationMessages[0]}`).show();
          return false;
        }
      } else if (id === dateBId) {
        const dateAValue = $(`#${dateAId.replace("_date_", "_dt_")}`).val();
        if (dateAValue && !checkDateRelationship(new Date(dateAValue), inputDate, pair.rule)) {
          validationMsg.text(`${baseMessage} ${pair.validationMessages[1]}`).show();
          return false;
        }
      }
    }
  }

  return true;
}

// --- CUSTOM TIME FUNCTIONS ------------------------------------------------ \\

/**
 * Handles the validation logic for the time input fields.
 * @param {string} parentId - The ID of the parent time-field container.
 * @param {number} hour - The hour value.
 * @param {number} minute - The minute value.
 * @param {string} ampm - The AM/PM value.
 * @param {string} baseId - The base identifier for the current time block (e.g., 'incident_occured', 'now').
 */
function handleTimeValidation(parentId, hour, minute, ampm, baseId) {
  const txtFieldId = parentId.replace("_time_", "_txt_");
  const timeMessage = getValidationMessageFromSession(txtFieldId);

  $(`#${parentId} .time-hour, #${parentId} .time-minute, #${parentId} .time-ampm`).removeClass('dform_fielderror');
  $(`#${parentId}`).find('.dform_validationMessage').text(timeMessage).hide();

  let hasError = false;
  let errorMsg = "";
  const errorFields = [];
  const timeFields = ['time-hour', 'time-minute', 'time-ampm'];

  const errorConditions = [
    {
      condition: isNaN(hour) && isNaN(minute) && !ampm,
      message: timeMessage,
      fields: timeFields
    },
    {
      condition: !isNaN(hour) && !isNaN(minute) && !ampm,
      message: "The time you entered must include am or pm",
      fields: ['time-ampm']
    },
    {
      condition: !isNaN(hour) && isNaN(minute) && ampm,
      message: "The time you entered must include the minute",
      fields: ['time-minute']
    },
    {
      condition: isNaN(hour) && !isNaN(minute) && ampm,
      message: "The time you entered must include the hour",
      fields: ['time-hour']
    },
    {
      condition: !isNaN(hour) && isNaN(minute) && !ampm,
      message: "The time you entered must include the minute and am or pm",
      fields: ['time-minute', 'time-ampm']
    },
    {
      condition: isNaN(hour) && !isNaN(minute) && !ampm,
      message: "The time you entered must include am or pm",
      fields: ['time-hour', 'time-ampm']
    },
    {
      condition: isNaN(hour) && isNaN(minute) && ampm,
      message: "The time you entered must include the hour and minute",
      fields: ['time-hour', 'time-minute']
    },
    {
      condition: hour > 12 || hour < 1,
      message: "Hour must be between 1 and 12.",
      fields: ['time-hour']
    },
    {
      condition: minute > 59 || minute < 0,
      message: "Minute must be between 00 and 59.",
      fields: ['time-minute']
    },
    {
      condition: (isNaN(hour) || isNaN(minute) || !ampm),
      message: timeMessage,
      fields: timeFields
    }
  ];

  for (const condition of errorConditions) {
    if (condition.condition) {
      hasError = true;
      errorMsg = condition.message;
      errorFields.push(...condition.fields);
      break;
    }
  }

  if (hasError) {
    errorFields.forEach(field => {
      $(`#${parentId} .${field}`).addClass('dform_fielderror');
    });
    $(`#${parentId}`).find('.dform_validationMessage').text(errorMsg).show();
    $(`#dform_widget_txt_${baseId}`).val('');
    $(`#dform_widget_time_${baseId}[type="time"]`).val('');

    $(`#display_formatted_ampm_${baseId}`).text('N/A');
    $(`#display_formatted_24hr_${baseId}`).text('N/A');
    return;
  }

  if (hour !== null && !isNaN(hour) && minute !== null && !isNaN(minute) && ampm) {
    const formattedAmpm = formatTimeInput(hour, minute, ampm);
    const formatted24hr = formatTimeForSubmission(hour, minute, ampm);

    $(`#dform_widget_txt_${baseId}`).val(formattedAmpm);
    $(`#dform_widget_time_${baseId}[type="time"]`).val(formatted24hr);

    $(`#display_formatted_ampm_${baseId}`).text(formattedAmpm);
    $(`#display_formatted_24hr_${baseId}`).text(formatted24hr);
  }
  $(`#dform_widget_txt_${baseId}`).change();
  $(`#dform_widget_time_${baseId}[type="time"]`).change();
}

/**
 * Handles auto-tabbing to the next input field when max length is reached.
 * @param {string} id - The ID of the current input field.
 * @param {string} nextID - The ID of the next input field to focus on.
 */
function inputTime(id, nextID) {
  const maxLength = $(`#${id}`).attr('maxlength');
  let value = $(`#${id}`).val();

  if (value.length >= maxLength) {
    $(`#${id}`).val(value.substring(0, maxLength));
    if (nextID) {
      $(`#${nextID}`).focus();
    } else {
      $(`#${id}`).blur();
    }
  }
}

/**
 * Formats the time for display in the hidden text input (e.g., "9:15am").
 * @param {number} hour - The hour (1-12).
 * @param {number} minute - The minute (0-59).
 * @param {string} ampm - "AM" or "PM".
 * @returns {string} The formatted time string.
 */
function formatTimeInput(hour, minute, ampm) {
  const paddedMinute = minute.toString().padStart(2, '0');
  return `${hour}:${paddedMinute}${ampm.toLowerCase()}`;
}

/**
 * Formats the time for submission (24-hour format, e.g., "09:15" or "15:25").
 * @param {number} hour - The hour (1-12).
 * @param {number} minute - The minute (0-59).
 * @param {string} ampm - "AM" or "PM".
 * @returns {string} The formatted time string in 24-hour format.
 */
function formatTimeForSubmission(hour, minute, ampm) {
  let hours24 = hour;
  if (ampm === 'PM' && hour !== 12) {
    hours24 += 12;
  } else if (ampm === 'AM' && hour === 12) {
    hours24 = 0; // 12 AM is 00 in 24-hour format
  }
  const paddedHour = hours24.toString().padStart(2, '0');
  const paddedMinute = minute.toString().padStart(2, '0');
  return `${paddedHour}:${paddedMinute}`;
}

// --- PROGRESS BAR --------------------------------------------------------- \\

function updateProgressBar(currentPageIndex) {
  // Check if the old ID exists
  if (document.getElementById("dform_progressbar")) {
    // Select the element by its current ID
    const element = document.getElementById("dform_progressbar");

    // Change the ID of the element to prevent system defaults
    element.id = "dform_progressbar_sheffield";
  }

  // Check if the new ID exists
  if (document.getElementById("dform_progressbar_sheffield")) {
    const pageHolderDiv = document.getElementById("dform_pageholder");
    const parentDiv = document.getElementById("dform_progressbar_sheffield");

    // Check for child div and create if it doesn't exist
    let childDiv = parentDiv.querySelector("div");
    if (!childDiv) {
      childDiv = document.createElement("div");
      parentDiv.appendChild(childDiv);
    }

    // Check for child childSpan and create if it doesn't exist
    let childSpan = parentDiv.querySelector("span");
    if (!childSpan) {
      childSpan = document.createElement("span");
      parentDiv.appendChild(childSpan);
    }

    if (parentDiv && childDiv && pageHolderDiv) {
      // Get all pages
      const pages = pageHolderDiv.querySelectorAll(".dform_page");
      const currentPageIndex = $(
        '.dform_page[data-active="true"]:visible'
      ).index('.dform_page[data-active="true"]');
      const visiblePages = $('.dform_page[data-active="true"]').length;

      let percentage = 0;
      if ($(`#dform_page_save`).length > 0) {
        // -1 from visiblePages for the save page
        // -1 from visiblePages for the confirmation page
        percentage = Math.round((currentPageIndex / (visiblePages - 2)) * 100);
      } else {
        // -1 from visiblePages for the confirmation page
        percentage = Math.round((currentPageIndex / (visiblePages - 1)) * 100);
      }
      // Set width, text content, colour
      if (percentage <= 0) {
        percentage = 0;
        childDiv.style.width = `max-content`;
      } else if (percentage >= 100) {
        percentage = 100;
        childDiv.style.width = `${percentage}% complete`;
      } else {
        childDiv.style.width = `${percentage}% complete`;
      }
      childDiv.textContent = `${percentage}% complete`;
      childSpan.style.width = `${100 - percentage}% complete`;
    }
  }
}

// --- SET REPORTER --------------------------------------------------------- \\

function handleSetReporter(date, address) {
  // Set date to input fields and trigger change
  if (date !== "Invalid Date") {
    $("#dform_widget_num_date_of_birth_dd").val(date.getDate()).blur();
    $("#dform_widget_num_date_of_birth_mm")
      .val(date.getMonth() + 1)
      .blur();
    $("#dform_widget_num_date_of_birth_yy").val(date.getFullYear()).blur();
  }

  // Hide submit anonymously option and info
  $(".anonymous").hide();
}

// --- FORMAT ADDRESS ------------------------------------------------------- \\

function removeDuplicateWords(address) {
  const words = address.split(/\s+/).filter(word => word.length > 0);
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join(' ');
}

// --- CREATE REVIEW PAGE --------------------------------------------------- \\

function getValueFromAlias(pageId, alias) {
  // Find the element with the matching data-customalias attribute
  const element = document.querySelector(`
      #${pageId} input[data-customalias="${alias}"], 
      #${pageId} select[data-customalias="${alias}"],
      #${pageId} textarea[data-customalias="${alias}"]
    `);

  // If the element is found, return its value
  if (element) {
    return element.value;
  }

  // If not found, return undefined
  return undefined;
}

// Function to get and set data for the review page
function getAndSetReviewPageData() {
  const reviewPageIsVisible = $("#dform_page_page_review:visible").length > 0;

  if (reviewPageIsVisible) {
    // showCurrentProgress();

    // Find all active form pages, excluding the review, declaration, and complete pages
    // Note: save and complete are ment to only have page_ listed once
    const excludedPages = `
      #dform_page_page_sign_in, 
      #dform_page_page_review, 
      #dform_page_page_declaration, 
      #dform_page_save,
      #dform_page_complete, 
      #dform_page_page_core_fields, 
      #dform_page_page_core_confirm_fields
    `;
    const activeFormPages = $('.dform_page[data-active="true"]').not(excludedPages);

    // Build an array of page numbers from the active pages
    let relevantPages = [];
    activeFormPages.each(function () {
      const pageNumber = $(this).attr("data-pos");
      if (pageNumber) {
        relevantPages.push(pageNumber);
      }
    });

    // Handle the case where the form is complete
    if (KDF.kdf().form.complete === "Y") {
      relevantPages = $(".dform_page").not(excludedPages).map(function () {
        return $(this).attr("data-pos");
      }).get();
    }

    // Store the constructed page array
    KDF.setVal("txt_pages", relevantPages.join(","));

    // Clear the review content HTML
    $("#review-page-content-container").html("");

    // Find all form pages based on completion status, excluding the same pages
    let formPages = $('.dform_page[data-active="true"]').not(excludedPages);
    if (KDF.kdf().form.complete === "Y") {
      formPages = $(".dform_page").not(excludedPages);
    }

    formPages.each(function (i) {
      const pageNumber = $(this).attr("data-pos");

      if (relevantPages.indexOf(pageNumber) > -1) {
        const pageId = $(this).attr("id");
        const pageName = pageId.split("dform_page_")[1];

        // Ensure the page is displayed so its contents can be processed
        KDF.showPage(pageName);

        const pageFields = $(this)
          .find(".dform_widget_field")
          .filter(function () {
            return $(this).css("display") === "block";
          });

        if (!pageFields.length) {
          return; // Skip to next page
        }

        const contentDivId = `review-page-content--${pageName}`;
        let contentDiv = $("#" + contentDivId);

        if (!contentDiv.length) {
          $("#review-page-content-container").append(
            `<section class="review-page-content-section" id="${contentDivId}" aria-labelledby="review-header-${pageName}"></section>`
          );
          contentDiv = $("#" + contentDivId);
        } else {
          contentDiv.empty();
        }

        const headerContainer = $('<div class="review-page-header-container"></div>');
        const pageHeader = $(this).find(".header2").text();
        headerContainer.append(`<h3 id="review-header-${pageName}">${pageHeader}</h3>`);
        contentDiv.append(headerContainer);

        const dl = $("<dl class='review-list'></dl>");
        let hasFields = false;

        pageFields.each(function (field) {
          const fieldType = $(this).attr("data-type");
          const fieldName = $(this).attr("data-name");
          const fieldClass = $(this).attr("class");
          let fieldLabel = "";
          let fieldValue = "Not answered";

          function getLegendText(classSelector) {
            const parentElement = $(`.container[data-name="${fieldName}"]`).length
              ? $(`.container[data-name="${fieldName}"]`)
              : $(`.container.dform_widget_${fieldName}`);
            if (parentElement.length) {
              return parentElement.find(`.${classSelector} legend`).text();
            }
          }

          if (fieldType === "select") {
            if (fieldName.startsWith("sel_search_results_")) {
              fieldLabel = "Address";
              fieldValue = removeDuplicateWords(getValueFromAlias(pageId, "fullAddress"));
            } else {
              fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
              fieldValue = KDF.kdf()?.form?.data?.[fieldName] ?? KDF.getVal(fieldName);
            }
          } else if (fieldType === "radio") {
            fieldLabel = getLegendText("radiogroup");
            fieldValue = KDF.getVal(fieldName);
          } else if (fieldType === "multicheckbox") {
            fieldLabel = getLegendText("checkboxgroup");
            fieldValue = `<br/>${KDF.getVal(fieldName).join("<br>")}`;
          } else if (fieldType === "date") {
            fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
            fieldValue = formatDateTime(KDF.getVal(fieldName)).uk.date;
          } else if (fieldType === "file") {
            fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
            fieldValue = KDF.getVal(fieldName.replace("file_", "txt_file_name_"));
            const filePath = KDF.getVal(fieldName.replace("file_", "txt_file_path_"));
            if (KDF.kdf().access === "agent" && filePath) {
              fieldValue = `<a href="${filePath}" target="_blank">${fieldValue}</a>`;
            }
          } else {
            if (fieldClass.indexOf("currency") !== -1) {
              fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
              fieldValue = `£${KDF.getVal(fieldName)}`;
            } else if (fieldClass.indexOf("address-search") !== -1) {
              fieldLabel = "Address";
              fieldValue = removeDuplicateWords(getValueFromAlias(pageId, "fullAddress"));
            } else if (/\b(property|street-name|city|postcode)\b/.test(fieldClass)) {
              fieldLabel = false;
              fieldValue = "";
            } else {
              fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
              fieldValue = KDF.getVal(fieldName);
            }
          }

          if (fieldLabel) {
            if (!fieldValue || fieldValue === "" || fieldValue === null || fieldValue === undefined) {
              fieldValue = fieldType === "file" ? "Not uploaded" : "Not answered";
            }

            const reviewItem = $("<div class='review-item'></div>")
              .append(`<dt class="question">${fieldLabel}</dt>`)
              .append(`<dd class="answer">${fieldValue}</dd>`);

            if (KDF.kdf().form.complete !== "Y") {
              const changeLink = $("<a href='#'>Change</a>").on("click", function (e) {
                e.preventDefault();
                const buttonSet = $('.dform_section_box_review div[data-type="buttonset"]');
                if (buttonSet.is(":hidden")) {
                  buttonSet.show();
                }
                KDF.gotoPage(pageName, true, true, true);
              });
              reviewItem.append($("<dd class='action'></dd>").append(changeLink));
            }

            dl.append(reviewItem);
            hasFields = true;
          }
        });

        if (hasFields) {
          contentDiv.append(dl);
        } else {
          contentDiv.remove();
        }
      }
    });
  }
}

function refreshReviewPage() {
  getAndSetReviewPageData();
}

function showCurrentProgress() {
  // Check if the URL contains the 'srid' parameter to identify a resumed session.
  const urlParams = new URLSearchParams(window.location.search);
  const srid = urlParams.get('srid');

  if (srid && KDF.kdf().form.complete !== "Y") {
    // Find all active pages, excluding the review page itself.
    const activePages = $('.dform_page[data-active="true"]').not('#dform_page_page_review');
    const totalPages = $('.dform_page').not('#dform_page_page_review, #dform_page_page_declaration, #dform_page_complete').length;

    // Calculate the completion percentage.
    const completedPages = activePages.length;
    const progressPercentage = (completedPages / totalPages) * 100;
    const formattedPercentage = Math.min(progressPercentage, 100).toFixed(0);

    // Define the HTML markup for the progress section.
    const progressMarkup = `
      <div class="current-progress-container" id="progress-header">
        <h2 class="current-progress-heading">Current progress</h2>
        <p>Your application is incomplete. Use this page to view your progress and answer the rest of the questions.</p>
        <p class="progress-percentage">${formattedPercentage}% complete</p>
      </div>
    `;

    // Prepend the new markup to the correct container.
    const reviewContentContainer = $('#dform_widget_html_ahtm_review_content');
    if (reviewContentContainer.length) {
      reviewContentContainer.prepend(progressMarkup);
    }

    // Add the "Continue application" button.
    const continueButton = `
      <button type="button" class="dform_button primary" id="btn_continue_application">Continue application</button>
    `;
    reviewContentContainer.after(continueButton);

    // Add a click handler to the button to navigate to the first incomplete page.
    $('#btn_continue_application').on('click', function () {
      // Find the first inactive page.
      const firstIncompletePage = $('.dform_page[data-active="false"]').not('#dform_page_page_review, #dform_page_page_declaration, #dform_page_complete').first();

      if (firstIncompletePage.length) {
        const pageName = firstIncompletePage.attr('id').split('dform_page_')[1];
        KDF.gotoPage(pageName);
      }
    });
  }
}

// --- CHECK CASE PROGRESS -------------------------------------------------- \\

function closeCase() {
  const noteDetails = KDF.getVal("txta_closure_details")
    ? `${KDF.getVal("txta_closure_details")}`
    : "";
  KDF.customdata("close-case", "_KDF_complete", true, true, {
    caseNote: `${KDF.getVal("sel_closure_reason")}: ${noteDetails}`,
  });
}

// --- ADDRESS FUNCTIONS ---------------------------------------------------- \\

function checkAddressHasBeenSet(action = "next page") {
  const currentPageId = getCurrentPageId();
  const selectedAddressSpan = document.querySelector(`#${currentPageId} #selected-address`);
  const fullAddress = document.querySelector(
    `#${currentPageId} input[data-customalias="fullAddress"]`
  );
  const fullAddressHasValue = KDF.getVal(fullAddress.name) ? true : false;
  const siteName = document.querySelector(
    `#${currentPageId} input[data-customalias="siteName"]`
  );
  const siteCode = document.querySelector(
    `#${currentPageId} input[data-customalias="siteCode"]`
  );
  if (fullAddressHasValue) {
    if (siteName && siteCode) {
      const siteNameHasValue = KDF.getVal(siteName.name) ? true : false;
      const siteCodeHasValue = KDF.getVal(siteCode.name) ? true : false;
      const validSiteCode = acceptGMSites
        ? true
        : KDF.getVal(siteCode.name).startsWith("344")
          ? true
          : false;
      if (siteNameHasValue && siteCodeHasValue && validSiteCode) {
        if (action === "submit") {
          KDF.gotoPage("complete", true, true, false);
        } else {
          KDF.gotoNextPage();
        }
      } else {
        const errorMessage = acceptGMSites
          ? defaultSelectedAddressMessage
          : "Choose a location on the public highway";
        if (selectedAddressSpan) {
          selectedAddressSpan.textContent = errorMessage;
          selectedAddressSpan.classList.add('dform_validationMessage');
          selectedAddressSpan.style.display = 'block';
        }
        $("#map_container").addClass("map_container_error");
      }
    } else {
      if (action === "submit") {
        KDF.gotoPage("complete", true, true, false);
      } else {
        KDF.gotoNextPage();
      }
    }
  } else {
    const mapElement = document.querySelector(`#${currentPageId} .map-container`);
    const detailsElement = mapElement.querySelector('.details-accordion');

    // Check if the map element exists on the page
    if (mapElement && detailsElement && detailsElement.hasAttribute('open')) {

      // Check if the map accordion is open
      // if (detailsElement && detailsElement.hasAttribute('open')) {

        const errorMessage = acceptGMSites
          ? defaultSelectedAddressMessage
          : "Choose a location on the public highway";
        if (selectedAddressSpan) {
          selectedAddressSpan.textContent = errorMessage;
          selectedAddressSpan.classList.add('dform_validationMessage');
          selectedAddressSpan.style.display = 'block';
        }
        $("#map_container").addClass("map_container_error");
      // }
    } else {
      const searchResult = document.querySelector(
        `#${currentPageId} select[data-customalias="searchResult"]`
      );

      const isSearchResultVisible = searchResult.offsetParent !== null;
      if (isSearchResultVisible) {
        const searchResultContainer = searchResult.closest('.dform_widget_field');
        const validationMessage = searchResultContainer?.querySelector('.dform_validationMessage');
        const selectedValue = searchResult.value;
        let message = "Select the address";

        if (selectedValue !== '' && selectedValue !== 'Please select...') {
          message = "Click use this address";
        }
        if (validationMessage) {
          validationMessage.style.display = "block";
          validationMessage.textContent = message;
        }
        searchResult.classList.add('dform_fielderror');
      } else {
        const postcode = document.querySelector(
          `#${currentPageId} input[data-customalias="postcode"]`
        );
        const postcodeContainer = postcode?.closest('.dform_widget_field');
        const validationMessage = postcodeContainer?.querySelector('.dform_validationMessage');
        const postcodeHasValue = postcode ? KDF.getVal(postcode.name) : false;
        let message = "Enter the postcode";
        if (postcodeHasValue) {
          message = "Click find address";
        }
        if (validationMessage) {
          validationMessage.style.display = "block";
          validationMessage.textContent = message;
        }
        postcode?.classList.add('dform_fielderror');
      }

    }
  }
}

function setProfileAddressDetails(targetPageId, kdf) {
  let {
    'profile-AddressNumber': property,
    'profile-AddressLine1': streetName,
    'profile-AddressLine2': locality,
    'profile-AddressLine4': city,
    'profile-Postcode': postcode,
  } = kdf.profileData;
  let subProperty, buildingName, buildingNumber, fullAddress;

  const addressSelectionSection = document.querySelector(`#${targetPageId} .address-selection-section`);
  const selectedAddressSpan = document.querySelector(`#${targetPageId} #selected-address`);

  const addressDataForDisplay = {
    subProperty: subProperty ? formatTitleCase(subProperty) : '',
    buildingName: buildingName ? formatTitleCase(buildingName) : '',
    buildingNumber: buildingNumber ? formatTitleCase(buildingNumber) : '',
    property: property ? formatTitleCase(property) : '',
    streetName: streetName ? formatTitleCase(streetName) : '',
    locality: locality ? formatTitleCase(locality) : '',
    city: city ? formatTitleCase(city) : '',
    postcode: postcode ? postcode.toUpperCase() : ''
  };

  const fullAddressDisplay = buildAddressMarkup(addressDataForDisplay);
  let selectedAddressContainer = document.querySelector(`#${targetPageId} .selected-address-container`);
  if (selectedAddressContainer) {
    selectedAddressContainer.innerHTML = fullAddressDisplay;
    selectedAddressContainer = selectedAddressContainer.id.replace('dform_widget_html_', '');
  }

  if (addressSelectionSection) {
    addressSelectionSection.classList.add('dform_fieldsuccess');
  }

  if (selectedAddressSpan) {
    const addressParts = Object.values(addressDataForDisplay)
      .filter(Boolean)
      .join(', ');
    selectedAddressSpan.innerHTML = addressParts;
    selectedAddressSpan.classList.remove('dform_validationMessage');
  }

  const addressearchResults = document.querySelector(`#${targetPageId} .address-search-results`);
  let setAddressButton = document.querySelector(`#${targetPageId} .set-address-btn`);
  if (setAddressButton) {
    setAddressButton = setAddressButton.id.replace('dform_widget_button_', '');
  }
  const buttonContainer = document.querySelector(`#${targetPageId} .address-search-btn-container`);
  let manualAddressElement = document.querySelector(`#${targetPageId} .manual-address-container`);
  if (manualAddressElement) {
    manualAddressElement = manualAddressElement.id.replace('dform_widget_html_', '');
  }

  property = formatTitleCase(property);
  streetName = formatTitleCase(streetName);
  fullAddress = `${formatTitleCase(property)} ${formatTitleCase(
    streetName
  )}, ${city}, ${postcode}`;

  setValuesToInputFields([
    { alias: "property", value: property },
    { alias: "streetName", value: streetName },
    { alias: "city", value: city },
    { alias: "postCode", value: postcode },
    { alias: "fullAddress", value: fullAddress },
  ]);

  if (addressearchResults) {
    const selectElement = addressearchResults.querySelector('select');
    if (selectElement) {
      selectElement.style.display = 'none'; // Hides the element
      selectElement.classList.remove('dform_fielderror');
    }
    const validationMessage = addressearchResults?.querySelector('.dform_validationMessage');
    if (validationMessage) {
      validationMessage.style.display = "none";
      validationMessage.textContent = "Select the address";
    }
  }

  if (buttonContainer) {
    buttonContainer.style.display = 'none'; // Hides the element
  }

  let findOnMapElement = document.querySelector(`#${targetPageId} .map-container`);
  if (findOnMapElement) {
    if (easting && northing) {
      plotLocationOnMap(easting, northing);
    }
    findOnMapElement = findOnMapElement.id.replace('dform_widget_html_', '');
  }

  hideShowMultipleElements([
    { name: setAddressButton, display: "hide" },
    { name: selectedAddressContainer, display: "show" },
    { name: manualAddressElement, display: "hide" },
    { name: findOnMapElement, display: "hide" },
  ]);
}

// --- MAP FUNCTIONS -------------------------------------------------------- \\

var streetMapView,
  streetMapPositionLayer,
  mapPoint,
  caseLayer,
  markerSymbol,
  assetSymbol,
  esriAssetUrl,
  groupLayer;
var xminE, xmaxE, yminE, ymaxE, streetLightLayer, esrimap, highlightSelect;
var viewPointX,
  viewPointY,
  assetWatch,
  scc_boundary_ring,
  mapZoomLevel,
  streetlight_unittype,
  BG_layer;
var assetWatchStatus = false;
var viewInitialLoad = false;
var asset_init = false;
var selectedLocation = "";

const popupContent = function (feature) {
  if (feature) {
    const div = document.createElement("div");
    div.innerHTML =
      "<div class='popup' style='font-weight: bold; font-size: medium;'></br>";
    return div;
  }
  return;
};

var vmap_config = {
  mapClickType: "Normal",
  consolidated_layer_url:
    "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/42",
  featureLayers: [
    {
      number: "0",
      name: "street_light",
      title: "Street Light",
      layer_type: "Display",
      layerid: "6",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/6",
      popup: {},
    },
    {
      number: "1",
      name: "vegetation",
      title: "Vegetation",
      layer_type: "Display",
      layerid: "24",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/24",
      popup: {},
    },
    {
      number: "2",
      name: "Signs",
      title: "Signs",
      layer_type: "Display",
      layerid: "0",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/0",
      popup: {},
    },
    {
      number: "3",
      name: "Traffic Signs",
      title: "Traffic Signs",
      layer_type: "Display",
      layerid: "41",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/41",
      popup: {},
    },
    {
      number: "4",
      name: "Drains",
      title: "Drains",
      layer_type: "Display",
      layerid: "2",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/2",
      popup: {},
    },
    {
      number: "5",
      name: "Grit Bins",
      title: "Grit Bins",
      layer_type: "Display",
      layerid: "3",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/3",
      popup: {},
    },
    {
      number: "6",
      name: "Litter Bins",
      title: "Litter Bins",
      layer_type: "Display",
      layerid: "4",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/4",
      popup: {},
    },
    {
      number: "7",
      name: "Street Furniture",
      title: "Street Furniture",
      layer_type: "Display",
      layerid: "5",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/5",
      popup: {},
    },
    {
      number: "8",
      name: "Structure",
      title: "Structure",
      layer_type: "Display",
      layerid: "7",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/7",
      popup: {},
    },
    {
      number: "9",
      name: "Fences",
      title: "Fences",
      layer_type: "Display",
      layerid: "8",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/8",
      popup: {},
    },
    {
      number: "10",
      name: "Trees",
      title: "Trees",
      layer_type: "Display",
      layerid: "27",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/27",
      popup: {},
    },
    {
      number: "11",
      name: "parks",
      title: "parks",
      layer_type: "Background",
      layerid: "49",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/49",
      popup: {},
    },
    {
      number: "12",
      name: "ground maintenance sites",
      title: "ground maintenance sites",
      layer_type: "Background",
      layerid: "42",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/42",
      popup: {},
    },
  ],
};

proj4.defs([
  [
    "EPSG:4326",
    "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs",
  ],
  [
    "SR-ORG:7483",
    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
  ],
  [
    "EPSG:27700",
    "+title=OSGB 1936 / British National Grid (UTM) +proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs",
  ],
]);

var store_layer_attr = { main_attribute: {}, background_attribute: {} };

function do_KDF_Ready_esriMap() {
  fetchSccRing();
  var symbol;
  require(["esri/symbols/PictureMarkerSymbol"], function (PictureMarkerSymbol) {
    symbol = {
      type: "picture-marker",
      url: "https://cdn.uk.empro.verintcloudservices.com/tenants/sheffield/Images/map-pin.png",
      width: 20,
      height: 35,
      yoffset: 10,
    };
  });

  markerSymbol = symbol;
  KDF.customdata("get_osmap_api_key", "do_KDF_Ready_esriMap", true, false, {});

  $("#map_container").html("");
}

function initialize_map(map_param) {
  let map, finalUrl;
  finalUrl = `https://api.os.uk/maps/raster/v1/zxy/Road_3857/{level}/{col}/{row}.png?key=${map_param}`;

  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/WebTileLayer",
    "esri/Graphic",
    "esri/layers/TileLayer",
    "esri/Basemap",
    "esri/geometry/Point",
    "esri/geometry/SpatialReference",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    "esri/layers/GroupLayer",
    "esri/widgets/Search",
    "esri/geometry/Extent",
  ], function (
    Map,
    MapView,
    WebTileLayer,
    Graphic,
    TileLayer,
    Basemap,
    Point,
    SpatialReference,
    GraphicsLayer,
    FeatureLayer,
    GroupLayer,
    Search,
    Extent
  ) {
    let positionLayer = new GraphicsLayer();
    $("#dform_widget_html_ahtm_map_container").append(
      '<div class="dform_gis_reversegeo"></div>'
    );

    const tileLayer = new WebTileLayer({ urlTemplate: finalUrl });

    let pt = new Point({
      x: 435219,
      y: 387419,
      spatialReference: {
        wkid: 27700,
      },
    });

    map = new Map({ layers: [tileLayer] });
    esrimap = map;
    map.add(positionLayer);
    streetMapView = new MapView({
      container: "map_container",
      map: map,
      zoom: 12,
      center: pt,
      constraints: {
        minZoom: 7,
        maxZoom: 20,
        rotationEnabled: false,
      },
    });

    // Define the extent for Sheffield, UK
    const sheffieldExtent = new Extent({
      xmin: -1.5311,
      ymin: 53.321,
      xmax: -1.3483,
      ymax: 53.456,
      spatialReference: { wkid: 27700 },
    });

    // Initialize the Search widget, constraining to Sheffield's extent
    const searchWidget = new Search({
      view: streetMapView,
      searchAllEnabled: false,
      popupEnabled: true,
      popupOpenOnSelect: true,
      sources: [
        {
          layer: new FeatureLayer({
            url: "https://utility.arcgis.com/usrsvcs/servers/97cfdc3a164c48219826b907c0a5064f/rest/services/AGOL/Boundaries/MapServer/0", // Sheffield boundary layer
          }),
          // searchFields: ["name"], // Replace with the field containing names if available
          displayField: "name",
          exactMatch: false,
          outFields: ["*"],
          name: "Sheffield Search",
          placeholder: "",
          filter: {
            geometry: sheffieldExtent,
          },
        },
      ],
    });

    // Add Search widget to the top-right corner of the map
    streetMapView.ui.add(searchWidget, {
      position: "top-right",
    });

    streetMapView.on("click", mapClick);

    mapZoomLevel = streetMapView.zoom;
    $(`#dform_${KDF.kdf().form.name}`).trigger("_KDF_mapReady", [
      null,
      "arcgis",
      "map_container",
      map,
      positionLayer,
      null,
      null,
      null,
    ]);

    districtLayer = new FeatureLayer({
      id: "scc_boundary",
      url: "https://utility.arcgis.com/usrsvcs/servers/97cfdc3a164c48219826b907c0a5064f/rest/services/AGOL/Boundaries/MapServer/0",
    });
    districtLayer.renderer = {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: {
          color: [0, 0, 0, 255],
          width: 4,
        },
      },
    };
    esrimap.add(districtLayer);

    if (KDF.kdf().form.complete !== "Y") {
      streetMapView.when(function () {
        map_extent_change();
      });
    }

    var layerGroup = new GroupLayer({
      title: "GIS Layers",
      visible: true,
    });

    groupLayer = layerGroup;
  });
}

function do_KDF_mapReady_esriMap(map, positionLayer) {
  streetMapPositionLayer = positionLayer;

  if (
    KDF.kdf().form.complete === "Y" ||
    KDF.kdf().viewmode === "U" ||
    KDF.kdf().viewmode === "R"
  ) {
    var lon = KDF.getVal("le_gis_lon");
    var lat = KDF.getVal("le_gis_lat");

    if (lon !== "" && lat !== "") {
      //showMapLocation(lon, lat, true);
      require([
        "esri/geometry/Point",
        "esri/geometry/SpatialReference",
      ], function (Point, SpatialReference) {
        centerpoint = new Point({
          x: KDF.getVal("le_gis_lon"),
          y: KDF.getVal("le_gis_lat"),
          spatialReference: new SpatialReference({ wkid: 4326 }),
        });

        streetMapView.when(function () {
          if (KDF.kdf().viewmode === "U" || KDF.kdf().viewmode === "R") {
            map_extent_change();

            if (
              typeof KDF.getVal("txt_layerid") !== "undefined" &&
              KDF.getVal("txt_layerid") != ""
            ) {
              if (!asset_init) {
                initializeAssetLayer(streetMapView.zoom);
              }
            }
          }
          streetMapView.goTo({
            center: centerpoint,
            zoom: 18,
          });
        });

        addPoint(streetMapView, centerpoint, markerSymbol);
      });

      // setSelectedAddress(KDF.getVal("txt_site_name"), "show");
      $(".popup").text(KDF.getVal("txt_site_name"));
      setRequiredStateByAlias("postcode", "not required");
    }
  }
}

function mapClick(evt) {
  KDF.setVal("txt_site_name", "");
  KDF.setVal("txt_site_code", "");
  KDF.setVal("txt_feature_name", "");
  KDF.setVal("txt_feature_type", "");
  KDF.setVal("txt_responsibility", "");
  KDF.setVal("txt_prestige", "");
  setValuesToInputFields([
    { alias: "property", value: "" },
    { alias: "streetName", value: "" },
    { alias: "city", value: "" },
    { alias: "postCode", value: "" },
    { alias: "fullAddress", value: "" },
    { alias: "uprn", value: "" },
    { alias: "usrn", value: "" },
    { alias: "siteName", value: "" },
    { alias: "siteCode", value: "" },
  ]);
  
  const selectedAddressSpan = document.querySelector(`#${getCurrentPageId()} #selected-address`);
  if (selectedAddressSpan) {
    selectedAddressSpan.textContent = defaultSelectedAddressMessage;
    selectedAddressSpan.classList.remove('dform_validationMessage');
  }

  $(".esriPopup").hide();
  if (KDF.kdf().form.complete !== "Y" || KDF.kdf().viewmode === "U") {
    selectedLocation = "";
    KDF.setVal("le_gis_lat", "");
    KDF.setVal("le_gis_lon", "");
    KDF.setVal("le_gis_latgeo", "");
    KDF.setVal("le_gis_longeo", "");
    KDF.setVal("txta_location_address", "");
    KDF.hideWidget("ahtm_map_location_error");
    var screenPoint = {
      x: evt.x,
      y: evt.y,
    };
    streetMapView.hitTest(screenPoint).then(function (response) {
      let graphic = response.results;
      selectedLocation = evt.mapPoint;
      var source = new proj4.Proj("SR-ORG:7483");
      var dest = new proj4.Proj("EPSG:27700");
      var dest4326 = new proj4.Proj("EPSG:4326");
      var convertPointP4 = proj4.toPoint([selectedLocation.x, selectedLocation.y]);
      var convertPoint4326 = proj4.toPoint([selectedLocation.x, selectedLocation.y]);

      proj4.transform(source, dest, convertPointP4);
      proj4.transform(source, dest4326, convertPoint4326);
      KDF.setVal("le_gis_lon", convertPoint4326.x.toString());
      KDF.setVal("le_gis_lat", convertPoint4326.y.toString());
      mapX = convertPointP4.x.toString();
      mapY = convertPointP4.y.toString();

      var mapX_4326 = convertPoint4326.x.toString();
      var mapY_4326 = convertPoint4326.y.toString();

      store_layer_attr.main_attribute = {};
      store_layer_attr.background_attribute = {};

      if (!withinSccCheck(convertPointP4)) {
        if (selectedAddressSpan) {
          selectedAddressSpan.textContent = "Choose a location inside the Sheffield area";
          selectedAddressSpan.classList.add('dform_validationMessage');
          selectedAddressSpan.style.display = 'block';
        }
        $("#map_container").addClass("map_container_error");

        //clear location information when out of our area
        selectedLocation = "";
        KDF.setVal("le_gis_lat", "");
        KDF.setVal("le_gis_lon", "");
        KDF.setVal("le_gis_latgeo", "");
        KDF.setVal("le_gis_longeo", "");
        KDF.setVal("txta_location", "");
        KDF.setVal("txt_site_name", "");
        KDF.setVal("txt_location_UPRN", "");
        KDF.setVal("txt_location_USRN", "");

        $(`#dform_${KDF.kdf().form.name}`).trigger("_KDF_mapOutsideBoundary", [
          null,
        ]);
      } else {
        $("#map_container").removeClass("map_container_error");

        if (streetMapView.zoom >= 18) {
          streetMapView.goTo({
            center: evt.mapPoint,
          });
        } else if (streetMapView.zoom < 18) {
          streetMapView.goTo({
            center: evt.mapPoint,
            zoom: 18,
          });
        }

        KDF.customdata("gis_background_layer", "mapClick", true, true, {
            url: vmap_config.consolidated_layer_url,
            longitude: mapX,
            latitude: mapY,
            distance: 20,
          });

        let foundFeatureGraphic = null;
        let sccBoundaryClicked = false;

        if (graphic && graphic.length > 0) {
          graphic.forEach(function (arrayItem) {
            if (arrayItem.layer && arrayItem.layer.id === "scc_boundary") {
              sccBoundaryClicked = true;
            } else if (arrayItem.layer && arrayItem.layer.id !== "scc_boundary" && !foundFeatureGraphic) {
              // Prioritize and save the first non-boundary graphic found
              foundFeatureGraphic = arrayItem;
            }
          });
        }

        if (foundFeatureGraphic) {
          // A specific feature (non-boundary) was clicked
          streetMapPositionLayer.removeAll();
          const layerAttributes = foundFeatureGraphic.graphic.attributes;
          const layerName = foundFeatureGraphic.layer.id.toString();

          mapX = convertPointP4.x.toString();
          mapY = convertPointP4.y.toString();
          KDF.setVal("le_gis_lon", mapX_4326);
          KDF.setVal("le_gis_lat", mapY_4326);

          store_layer_attr.main_attribute = {};
          store_layer_attr.main_attribute = layerAttributes;
          store_layer_attr.main_attribute.layername = layerName;
          
          setValuesToInputFields([
            { alias: "easting", value: mapX },
            { alias: "northing", value: mapY },
          ]);

          KDF.customdata("reverse_geocode_osmap", "asset_code", true, true, {
            longitude: mapX,
            latitude: mapY,
          });

          if (vmap_config.mapClickType == "Background") {
            KDF.customdata("feature_layer_request", "mapClick", true, true, {
              url: vmap_config.featureLayers[BG_layer].url,
              longitude: mapX,
              latitude: mapY,
              distance: "5",
            });
          }

          $(`#dform_${KDF.kdf().form.name}`).trigger("_KDF_clearAttribute", [
            null,
          ]);
        } else {
          // Only the boundary or no feature was clicked, handle as a general location click
          addPoint(streetMapView, evt.mapPoint, markerSymbol);
          $(".esriPopup").hide();
          mapPoint = evt.mapPoint;
          addPoint(streetMapView, mapPoint, markerSymbol);

          mapX = convertPointP4.x.toString();
          mapY = convertPointP4.y.toString();
          KDF.setVal("le_gis_lon", mapX_4326);
          KDF.setVal("le_gis_lat", mapY_4326);
          setValuesToInputFields([
            { alias: "easting", value: mapX },
            { alias: "northing", value: mapY },
          ]);
          KDF.customdata("reverse_geocode_osmap", "mapClick", true, true, {
            longitude: mapX,
            latitude: mapY,
          });

          if (vmap_config.mapClickType == "Background") {
            KDF.customdata("feature_layer_request", "mapClick", true, true, {
              url: vmap_config.featureLayers[BG_layer].url,
              longitude: mapX,
              latitude: mapY,
              distance: "5",
            });
          }

          $(`#dform_${KDF.kdf().form.name}`).trigger("_KDF_clearAttribute", [
            null,
          ]);
        }
      }
    });
  }
}

function retrieveAttribute() {
  $(`#dform_${KDF.kdf().form.name}`).trigger("_Selected_Layer", [
    null,
    "asset_layer",
    store_layer_attr,
  ]);
}

function map_extent_change() {
  if (
    typeof KDF.getVal("txt_layerid") !== "undefined" &&
    KDF.getVal("txt_layerid") !== ""
  ) {
    var arrayCount;
    var layerId = KDF.getVal("txt_layerid").split(",");
    for (var i = 0; i < layerId.length; i++) {
      arrayCount = layerId[i];
      if (vmap_config.featureLayers[arrayCount].layer_type == "Background") {
        BG_layer = vmap_config.featureLayers[arrayCount].number;
        vmap_config.mapClickType = "Background";
      }
    }
  }

  require([
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/core/reactiveUtils",
  ], function (MapView, FeatureLayer, ReactiveUtils) {
    if (KDF.kdf().viewmode !== "R") {
      assetWatch = ReactiveUtils.when(
        () => [streetMapView.stationary, streetMapView.interacting],
        (a, b) => {
          if (!viewInitialLoad) {
            xminE = streetMapView.extent.xmin;
            xmaxE = streetMapView.extent.xmax;
            yminE = streetMapView.extent.ymin;
            ymaxE = streetMapView.extent.ymax;

            viewInitialLoad = true;
          }
          if (a[0] && !b[0]) {
            if (
              xminE !== streetMapView.extent.xmin &&
              xmaxE != streetMapView.extent.xmax &&
              yminE !== streetMapView.extent.ymin &&
              ymaxE !== streetMapView.extent.ymax
            ) {
              KDF.hideWidget("ahtm_map_location_error");

              if (parseInt(streetMapView.zoom) >= 16) {
                mapZoomLevel = streetMapView.zoom;
                if (
                  typeof KDF.getVal("txt_layerid") !== "undefined" &&
                  KDF.getVal("txt_layerid") != ""
                ) {
                  if (!asset_init) {
                    initializeAssetLayer(streetMapView.zoom);
                  } else if (asset_init) {
                    var arrayCount;

                    var layerId = KDF.getVal("txt_layerid").split(",");
                    for (var i = 0; i < layerId.length; i++) {
                      arrayCount = layerId[i];
                      if (
                        vmap_config.featureLayers[arrayCount].layer_type ==
                        "Display"
                      ) {
                        esrimap.findLayerById(
                          vmap_config.featureLayers[arrayCount].name
                        ).visible = true;
                      }
                    }
                  }
                }
              }

              if (parseInt(streetMapView.zoom) < 16) {
                var arrayCount;
                if (asset_init) {
                  var layerId = KDF.getVal("txt_layerid").split(",");
                  for (var i = 0; i < layerId.length; i++) {
                    arrayCount = layerId[i];
                    if (
                      vmap_config.featureLayers[arrayCount].layer_type ==
                      "Display"
                    ) {
                      esrimap.findLayerById(
                        vmap_config.featureLayers[arrayCount].name
                      ).visible = false;
                    }
                  }
                }
              }
            }

            xminE = streetMapView.extent.xmin;
            xmaxE = streetMapView.extent.xmax;
            yminE = streetMapView.extent.ymin;
            ymaxE = streetMapView.extent.ymax;
          }
        }
      );
    }
  });
}

function do_KDF_optionSelected_esriMap(field, label, val) {
  if (field === "ps_property_search_map_id" && val !== null) {
    if (val !== "") {
      KDF.customdata(
        "retrieve-property",
        "do_KDF_optionSelected_esriMap",
        true,
        true,
        { object_id: val }
      );
    }
  }
}

function do_KDF_Custom_esriMap(action, response) {
  if (action === "reverse_geocode_osmap") {
    $("#map_container").removeClass("map_container_error");
    $("#map_error").remove();
    KDF.setVal("txt_location_UPRN", "");
    KDF.setVal("txt_location_USRN", "");

    if (response.actionedby == "propertySearch") {
      $("#dform_" + KDF.kdf().form.name).trigger("_KDF_clearAttribute", [null]);
    }

    if (response.data.outcome == "failed") {
      // check consolidated layer
      return;
    }

    if (response.data.return_type == "street_search") {
      var parseResult = JSON.parse(response.data.result.replace(/\\/g, ""));
      if (parseResult.features.length < 1) {
        if (!isObjEmpty(store_layer_attr.background_attribute)) {
          setValuesToInputFields([
            {
              alias: "fullAddress",
              value: store_layer_attr.background_attribute.sitename,
            },
            {
              alias: "siteName",
              value: store_layer_attr.background_attribute.sitename,
            },
            {
              alias: "siteCode",
              value: store_layer_attr.background_attribute.sitecode,
            },
            { alias: "responsibility", value: "PWC" },
          ]);
          
          $(".popup").text(store_layer_attr.background_attribute.sitename);
          setRequiredStateByAlias("postcode", "not required");
          return;
        } else {
          // setSelectedAddress("", "hide");
          $(".popup").text("");
          setRequiredStateByAlias("postcode", "required");
          return;
        }
      }

      var parseFeature = parseResult.features[0].attributes;

      setValuesToInputFields([
        { alias: "streetName", value: parseFeature["streetname"] },
        { alias: "fullAddress", value: parseFeature["streetname"] },
        { alias: "uprn", value: parseFeature["usrn"] },
        { alias: "siteName", value: parseFeature["streetname"] },
      ]);
      // setSelectedAddress(parseFeature["streetname"], "show");
      $(".popup").text(parseFeature["streetname"]);
      setRequiredStateByAlias("postcode", "not required");
    } else {
      setValuesToInputFields([
        { alias: "streetName", value: response.data.description },
        { alias: "fullAddress", value: response.data.description },
        { alias: "uprn", value: response.data.UPRN },
        { alias: "siteName", value: response.data.description },
        { alias: "siteCode", value: response.data.UPRN },
      ]);

      var source = new proj4.Proj("EPSG:27700");
      var dest4326 = new proj4.Proj("EPSG:4326");
      var convertPoint4326 = new proj4.Point(
        response.data.longitude,
        response.data.latitude
      );
      proj4.transform(source, dest4326, convertPoint4326);
      KDF.setVal("le_gis_lon", convertPoint4326.x.toString());
      KDF.setVal("le_gis_lat", convertPoint4326.y.toString());

      var originCoor = proj4("EPSG:27700", "EPSG:4326", [
        response.data.longitude,
        response.data.latitude,
      ]);
      var propertyCoor = proj4("EPSG:27700", "EPSG:4326", [
        response.data.easting,
        response.data.northing,
      ]);
      var p2 = { x: originCoor[0], y: originCoor[1] };
      var p1 = { x: propertyCoor[0], y: propertyCoor[1] };

      let {
        addressNumber,
        streetName,
        town,
        postcode,
        fullAddress,
        propertyId,
        UPRN,
        streetId,
        USRN,
        easting,
        northing,
      } = response.data;

      property = formatTitleCase(addressNumber);
      streetName = formatTitleCase(streetName);
      fullAddress = `${formatTitleCase(property)} ${formatTitleCase(
        streetName
      )}, ${town}, ${postcode}`;
      setValuesToInputFields([
        { alias: "property", value: property },
        { alias: "streetName", value: streetName },
        { alias: "city", value: town },
        { alias: "postCode", value: postcode },
        { alias: "fullAddress", value: fullAddress },
        { alias: "uprn", value: UPRN },
        { alias: "usrn", value: USRN },
        { alias: "siteName", value: streetName },
        { alias: "siteCode", value: USRN },
        // { alias: "easting", value: easting },
        // { alias: "northing", value: northing },
      ]);

      const selectedAddressSpan = document.querySelector(`#${getCurrentPageId()} #selected-address`);
      if (selectedAddressSpan) {
        selectedAddressSpan.textContent = fullAddress;
      }
      setRequiredStateByAlias("postcode", "not required");
    }
  }

  if (action === "feature_layer_request") {
    var parseResult = JSON.parse(response.data.result.replace(/\\/g, ""));
    var parseFeature = parseResult.features;
    var nearestFeature, nearestDistance;
    var initiateLoop = true;
    var current_radius = Number(response.data.distance);

    if (parseFeature.length < 1) {
      current_radius += 10;

      if (current_radius < 100) {
        KDF.customdata(
          "feature_layer_request",
          "do_KDF_Custom_esriMap",
          true,
          true,
          {
            url: vmap_config.featureLayers[BG_layer].url,
            longitude: response.data.longitude,
            latitude: response.data.latitude,
            distance: current_radius.toString(),
          }
        );
      }
    }
    store_layer_attr.main_attribute = {};
    store_layer_attr.main_attribute = parseFeature;
  } else if (action == "get_osmap_api_key") {
    initialize_map(response.data.map_param);
  } else if (action == "gis_background_layer") {
    var parseResult = JSON.parse(response.data.result.replace(/\\/g, ""));
    var parseFeature = parseResult.features;

    store_layer_attr.background_attribute = {};

    if (parseFeature.length > 0) {
      store_layer_attr.background_attribute = parseFeature[0].attributes;
    }

    retrieveAttribute();
  }

  if (action === "retrieve-property") {
    var coor = proj4("EPSG:27700", "EPSG:4326", [
      response.data.easting,
      response.data.northing,
    ]);
    var centerpoint;
    require([
      "esri/geometry/Point",
      "esri/geometry/SpatialReference",
    ], function (Point, SpatialReference) {
      centerpoint = new Point({
        x: response.data.easting,
        y: response.data.northing,
        spatialReference: new SpatialReference({ wkid: 27700 }),
      });
    });

    streetMapView.goTo({
      center: centerpoint,
      zoom: 20,
    });
    addPoint(streetMapView, centerpoint, markerSymbol);

    if (vmap_config.mapClickType == "Background") {
      KDF.customdata(
        "feature_layer_request",
        "do_KDF_Custom_esriMap",
        true,
        true,
        {
          url: vmap_config.featureLayers[KDF.getVal("txt_layerid")].url,
          longitude: response.data.easting,
          latitude: response.data.northing,
          distance: "5",
        }
      );
    }

    KDF.customdata(
      "reverse_geocode_osmap",
      "do_KDF_Custom_esriMap",
      true,
      true,
      {
        longitude: response.data.easting,
        latitude: response.data.northing,
      }
    );

    $(".esriPopup").hide();
    KDF.setVal("txt_selected_x", centerpoint.x);
    KDF.setVal("txt_selected_y", centerpoint.y);

    KDF.setVal("le_gis_lon", coor[0]);
    KDF.setVal("le_gis_lat", coor[1]);
    KDF.setVal("le_gis_lon_alloy", coor[0]);
    KDF.setVal("le_gis_lat_alloy", coor[1]);
    KDF.setVal("le_gis_longeo", centerpoint.longitude);
    KDF.setVal("le_gis_latgeo", centerpoint.latitude);
    KDF.setVal("le_title", response.data.description);
    KDF.setVal("txt_location_UPRN", response.data.UPRN);
    KDF.setVal("txt_location_ward_code", response.data.WardRef);
    KDF.setVal("txt_location_ward_name", response.data.WardName);

    $(".popup").text(response.data.address);
    setRequiredStateByAlias("postcode", "not required");
    KDF.hideWidget("ahtm_map_location_error");
    selectedLocation = centerpoint;

    KDF.customdata(
      "gis_background_layer",
      "do_KDF_Custom_esriMap",
      true,
      true,
      {
        url: vmap_config.consolidated_layer_url,
        longitude: response.data.easting,
        latitude: response.data.northing,
        distance: 20,
      }
    );
  }
}

function isObjEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

function initializeAssetLayer(zoomLevel) {
  var layerId = KDF.getVal("txt_layerid").split(",");
  var arrayCount;
  require(["esri/layers/FeatureLayer"], function (FeatureLayer) {
    for (var i = 0; i < layerId.length; i++) {
      arrayCount = layerId[i];
      if (
        typeof esrimap.findLayerById(
          vmap_config.featureLayers[arrayCount].name
        ) == "undefined" &&
        vmap_config.featureLayers[arrayCount].layer_type == "Display"
      ) {
        assetObj = new FeatureLayer({
          id: vmap_config.featureLayers[arrayCount].name,
          url: vmap_config.featureLayers[arrayCount].url,
          popupTemplate: vmap_config.featureLayers[arrayCount].popup,
          title: vmap_config.featureLayers[arrayCount].title,
          outFields: "*",
        });

        groupLayer.add(assetObj);
      }
    }
  });

  esrimap.add(groupLayer);
  asset_init = true;
  if (
    KDF.kdf().access == "agent" &&
    KDF.kdf().form.name === "asset_responsibility_map"
  ) {
    initLayerList();
  }
}

function initLayerList() {
  var allLayers = esrimap.allLayers.items;
  for (var i = 0; i < allLayers.length; i++) {
    arrayCount = allLayers[i];
    if (i == 0 || i == 1 || i == 2) {
      esrimap.findLayerById(arrayCount.id).listMode = "hide";
    }
  }

  require(["esri/widgets/LayerList"], (LayerList) => {
    let layerList = new LayerList({
      view: streetMapView,
      collapsed: true,
      label: "List of GIS layer",
    });

    layerList.visibleElements = {
      collapseButton: true,
    };
    layerList.collapsed = true;
    streetMapView.ui.add(layerList, {
      position: "top-right",
    });
  });
}

function addPoint(map, point, markerSymbol) {
  streetMapPositionLayer.removeAll();

  var pointGraphic;

  require(["esri/geometry/Point", "esri/Graphic"], function (Point, Graphic) {
    pointGraphic = new Graphic(new Point(point), markerSymbol);
    streetMapPositionLayer.add(pointGraphic);
  });

  return pointGraphic;
}

function withinSccCheck(geometry) {
  var result;
  require([
    "esri/geometry/Polygon",
    "esri/geometry/geometryEngine",
    "esri/geometry/Point",
    "esri/geometry/SpatialReference",
  ], function (Polygon, geometryEngine, Point, SpatialReference) {
    var clickedPoint = new Polygon({
      hasZ: false,
      hasM: false,
      rings: [[[geometry.x, geometry.y]]],
      spatialReference: { wkid: 27700 },
    });

    let new_point = new Point(
      geometry.x,
      geometry.y,
      new SpatialReference({ wkid: "27700" })
    );
    var isWithin = geometryEngine.within(new_point, scc_boundary_ring);
    if (isWithin) {
      result = true;
    } else {
      result = false;
    }
  });
  return result;
}

function fetchSccRing() {
  var apalah;
  $.ajax({
    url: "https://utility.arcgis.com/usrsvcs/servers/97cfdc3a164c48219826b907c0a5064f/rest/services/AGOL/Boundaries/MapServer/0/query?&where=1%3D1&geometryType=esriGeometryEnvelope&f=json",
    success: function (result) {
      require([
        "esri/geometry/Polygon",
        "esri/geometry/geometryEngine",
      ], function (Polygon, geometryEngine) {
        scc_boundary_ring = new Polygon({
          hasZ: false,
          hasM: false,
          rings: result.features[0].geometry.rings[0],
          spatialReference: { wkid: 27700 },
        });
      });
    },
  });
}

function plotLocationOnMap(easting, northing) {
  require([
    "esri/geometry/Point",
    "esri/geometry/projection"
  ], function (Point, projection) {

    // Create OSGB point
    const osgbPoint = new Point({
      x: parseFloat(easting),
      y: parseFloat(northing),
      spatialReference: { wkid: 27700 }
    });

    // Project to Web Mercator (map’s spatial reference)
    projection.load().then(function () {
      const wmPoint = projection.project(osgbPoint, streetMapView.spatialReference);

      // Zoom to location
      streetMapView.goTo({ center: wmPoint, zoom: 18 }).then(() => {

        // Convert to screen coordinates
        const screenPoint = streetMapView.toScreen(wmPoint);

        // Build a realistic fake event
        const fakeEvt = {
          type: "click",
          pointerType: "mouse",
          button: 0,
          buttons: 0,
          x: screenPoint.x,
          y: screenPoint.y,
          screenPoint: { x: screenPoint.x, y: screenPoint.y },
          mapPoint: wmPoint,
          native: { isTrusted: true },
          timestamp: performance.now(),
          cancelable: false
        };

        // Trigger mapClick like a real click
        mapClick(fakeEvt);
      });
    });
  });
}

// --- FORMATING FUNCTIONS -------------------------------------------------- \\

// --- FORMATING TO TITLE CASE ---------------------------------------------- \\

function formatTitleCase(value) {
  if (typeof value === "string") {
    const string = value.toLowerCase();
    const formatedString = string.replace(/\b\w/g, (match) =>
      match.toUpperCase()
    );
    return formatedString;
  }
  return value;
}

// --- FORMATING REMOVE ECCESS WHITE SPACES --------------------------------- \\

function formatRemoveEccessWhiteSpace(value) {
  if (value) {
    const formattedString = value.replace(/\s+/g, " ").trim();
    return formattedString;
  }
  return "";
}

// --- FORMATING DATE AND TIME ---------------------------------------------- \\

function formatDateTime(dateTime) {
  let date;
  if (!dateTime) {
    date = new Date(); // Use current time if no argument
  } else if (typeof dateTime === "number") {
    date = new Date(dateTime); // Assume dateTime is already a timestamp
  } else {
    date = new Date(dateTime); // Try to parse dateTime as a date string
  }

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const milliseconds = date.getMilliseconds().toString().padStart(3, "0");

  return {
    base: {
      year: year,
      month: month,
      day: day,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      weekday: {
        short: date.toLocaleDateString("en-GB", { weekday: "short" }),
        long: date.toLocaleDateString("en-GB", { weekday: "long" }),
      },
    },
    uk: {
      date: date.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      time: date.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        millisecond: "3-digit",
      }),
      dateTime: date.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        millisecond: "3-digit",
      }),
    },
    readable: {
      date: date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      dayDate: date.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: formatReadableTime(date),
    },
    iso: date.toISOString().replace(/\.\d{3}Z/, "Z"),
    utc: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`,
    inputField: `${year}-${month}-${day}`,
  };
}

function formatReadableTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const isAmPm = date.getHours() >= 12 ? "PM" : "AM";
  const hours12 = date.getHours() % 12 || 12; // Convert to 12-hour format

  return `${hours12}:${minutes} ${isAmPm}`;
}

// --- HELPER FUNCTIONS ----------------------------------------------------- \\

// --- RESTORE PLACE HOLDER TEXT -------------------------------------------- \\

function restorePlaceHolder(fieldName) {
  $(`#dform_widget_${fieldName} option:first`)
    .text("Please select...")
    .val("")
    .prop("selected", true)
    .prop("disabled", true);
}

// --- SHOW / HIDE ELEMENTS ------------------------------------------------- \\

function hideShowMultipleElements(fields) {
  fields.map((field) => {
    hideShowElement(field.name, field.display);
  });
}

function hideShowElement(name, display) {
  if (name && (typeof display === "string" || typeof display === "boolean")) {
    if (typeof display === "string") {
      display = display.toLowerCase();
    }
    if (name.startsWith("page_")) {
      if (display === true || display === "true" || display === "show") {
        KDF.showPage(name);
      } else {
        KDF.hidePage(name);
      }
    } else if (name.startsWith("area_") || name.startsWith("box_")) {
      if (display === true || display === "true" || display === "show") {
        KDF.showSection(name);
      } else {
        KDF.hideSection(name);
      }
    } else {
      if (display === true || display === "true" || display === "show") {
        KDF.showWidget(name);
      } else {
        KDF.hideWidget(name);
      }
    }
  }
}

// --- UPDATE ALL WIDGET TEXT ----------------------------------------------- \\

function updateMultipleWidgetsText(fields) {
  fields.map((field) => {
    updateWidgetText(
      field.name,
      field.label,
      field.helpMessage,
      field.validation
    );
  });
}

function updateWidgetText(name, label, helpMessage, validation) {
  if (label) {
    updateLabel(name, label);
  }
  if (helpMessage) {
    updateHelpText(name, helpMessage);
  }
  if (validation) {
    updateValidationMessage(name, validation);
  }
}

// --- UPDATE LABEL TEXT ---------------------------------------------------- \\update labe

function updateMultipleLabels(fields) {
  fields.map((field) => {
    updateLabel(field.name, field.value);
  });
}

function updateLabel(name, value) {
  if (name.startsWith("but_")) {
    $(`#dform_widget_button_${name}`).text(value);
  } else if (name.startsWith("rad_") || name.startsWith("mchk_")) {
    $(`.dform_widget_${name}  legend`).text(value);
  } else {
    $(`#dform_widget_label_${name}`).text(value);
  }
}

// --- UPDATE HELP TEXT ----------------------------------------------------- \\

function updateMultipleHelpTexts(fields) {
  fields.map((field) => {
    updateHelpText(field.name, field.value);
  });
}

function updateHelpText(name, value) {
  $(`.dform_widget_${name} .helptext`).text(value);
}

// --- UPDATE VALUDATION TEXT ----------------------------------------------- \\

function updateMultipleValidationMessages(fields) {
  fields.map((field) => {
    updateValidationMessage(field.name, field.value);
  });
}

function updateValidationMessage(name, value) {
  $(`.dform_widget_${name} .dform_validationMessage`).text(value);
  $(`.dform_widget_${name}`).attr("title", value);
}

// --- UPDATE REQUIRED STATE ------------------------------------------------ \\

function updateMultipleRequiredStates(fields) {
  fields.map((field) => {
    updateRequiredState(field.name, field.isRequired);
  });
}

function updateRequiredState(name, isRequired) {
  isRequired = isRequired.toLowerCase();
  if (
    isRequired === true ||
    isRequired === "true" ||
    isRequired === "required"
  ) {
    KDF.setWidgetRequired(name);
  } else {
    KDF.setWidgetNotRequired(name);
  }
  checkPageProgress();
}

// --- CHECK DATE FUNCTIONS ------------------------------------------------- \\

async function fetchUKBankHolidays() {
  try {
    const response = await fetch("https://www.gov.uk/bank-holidays.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const bankHolidaysEW = data?.["england-and-wales"].events || [];
    const bankHolidaysSL = data?.scotland.events || [];
    const bankHolidaysNI = data?.["northern-ireland"].events || [];
    const allBankHolidays = [
      ...new Set([...bankHolidaysEW, ...bankHolidaysSL, ...bankHolidaysNI]),
    ];
    // Return the array of bank holidays
    return bankHolidaysEW.map((holiday) => new Date(holiday.date));
  } catch (error) {
    return []; // Return an empty array in case of an error
  }
}

function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

async function isUKBankHoliday(date) {
  const bankHolidays = await fetchUKBankHolidays();
  return bankHolidays.some((holiday) => {
    return (
      holiday.getFullYear() === date.getFullYear() &&
      holiday.getMonth() === date.getMonth() &&
      holiday.getDate() === date.getDate()
    );
  });
}

async function isNonWorkingDay(date) {
  if (!isWeekend(date)) {
    return await isUKBankHoliday(date);
  }
  return true;
}

async function getNextWorkingDay(date) {
  while (await isNonWorkingDay(date)) {
    date.setDate(date.getDate() + 1);
  }
  return date;
}

async function addDaysToDate(date, daysToAdd, considerWorkingDays = false) {
  const newDate = new Date(date); // Create a copy to avoid modifying the original
  newDate.setDate(newDate.getDate() + daysToAdd);

  if (considerWorkingDays) {
    const nextWorkingDay = await getNextWorkingDay(new Date(newDate));
    return formatDateTime(nextWorkingDay).inputField;
  }

  return formatDateTime(newDate).inputField;
}

async function addWorkingDays(date, workingDaysToAdd) {
  const newDate = new Date(date);

  while (workingDaysToAdd > 0) {
    newDate.setDate(newDate.getDate() + 1);
    if (!(await isNonWorkingDay(newDate))) {
      workingDaysToAdd--;
    }
  }

  return formatDateTime(newDate).inputField;
}

async function updateMinMaxDates(dateElementId, attribute, value) {
  const $dateElement = $(`#${dateElementId}`);
  if ($dateElement.length === 0) {
    console.error(`Element with ID "${dateElementId}" not found.`);
    return;
  }
  const now = new Date();
  let newDate;
  if (attribute === "min") {
    if (typeof value === "number") {
      newDate = await addWorkingDays(now, value);
    } else {
      newDate = value ? calculateRelativeDate(value, now) : null;
    }
    if (newDate) {
      $dateElement.attr("min", newDate.toISOString().split("T")[0]);
    }
  } else if (attribute === "max") {
    if (typeof value === "number") {
      newDate = await addWorkingDays(now, value);
    } else {
      newDate = value ? calculateRelativeDate(value, now) : null;
    }
    if (newDate) {
      $dateElement.attr("max", newDate);
    }
  }
}

// --- VALIDATE TIME FUNCTION ----------------------------------------------- \\

function validateTime(inputDate, field, minTime, maxTime, interval) {
  // Get the date part from the inputDate and compare it to today's date
  const isToday = new Date(inputDate).getDate() === new Date().getDate();

  // Extract hours and minutes from the input field value
  const [inputHours, inputMinutes] = field.value.split(":").map(Number);

  // Calculate the input time in minutes since midnight
  const inputTimeInMinutes = inputHours * 60 + inputMinutes;

  // Calculate the current time in minutes since midnight if it's today
  const currentTimeInMinutes = isToday
    ? new Date().getHours() * 60 + new Date().getMinutes()
    : 0;

  defaultMessage = getValidationMessageFromSession(field.id);

  let validTime = true;
  let errorMessage = defaultMessage;

  if (isToday) {
    if (inputMinutes % interval !== 0) {
      validTime = false;
      errorMessage = `Must be a ${interval} minutes interval`;
    }
    if (inputHours < minTime || inputHours >= maxTime) {
      validTime = false;
      errorMessage = `Must be between ${minTime}:00 and ${maxTime}:00`;
    }
    if (inputTimeInMinutes <= currentTimeInMinutes) {
      validTime = false;
      errorMessage = "Appointments must be in the future";
    }
  } else {
    // If not today, only check for min/max time and interval
    if (inputMinutes % interval !== 0) {
      validTime = false;
      errorMessage = `Must be a ${interval} minutes interval`;
    }
    if (inputHours < minTime || inputHours >= maxTime) {
      validTime = false;
      errorMessage = `Must be between ${minTime}:00 and ${maxTime}:00`;
    }
  }

  if (!validTime) {
    updateValidationMessage(field.name, errorMessage);
    $(`.dform_widget_${field.name} .dform_validationMessage`).show();

    checkPageProgress();
  }

  return { valid: validTime, message: errorMessage };
}

// --- COOKIE FUNCTIONS ----------------------------------------------------- \\

function setCookie(name, value, minutes) {
  let expires = "";
  if (minutes) {
    const d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    expires = `; expires=${d.toUTCString()}`;
  }
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");

  const cookies = ca.map((c) => c.trim());
  const foundCookie = cookies.find((c) => c.startsWith(nameEQ));

  return foundCookie
    ? decodeURIComponent(foundCookie.substring(nameEQ.length))
    : null;
}

// --- STORE VALIDATION MESSAGES -------------------------------------------- \\

function storeDefaultValidationMessages() {
  const fieldClasses = [
    "address-search",
    "date-field",
    "time-field",
  ];

  fieldClasses.forEach((className) => addValidationMessageToSession(className));
}

function addValidationMessageToSession(className) {
  const dateFieldElements = document.querySelectorAll(`.${className}`);

  dateFieldElements.forEach((dateFieldElement) => {
    const inputField = dateFieldElement.querySelector(
      'input[type="date"], input[type="text"]'
    );
    const validationMessageElement = dateFieldElement.querySelector(
      ".dform_validationMessage"
    );

    const inputFieldId = inputField ? inputField.id : null;
    const validationMessage = validationMessageElement
      ? validationMessageElement.textContent
      : null;

    if (inputFieldId && validationMessage) {
      let validationMessages =
        JSON.parse(sessionStorage.getItem("validationMessages")) || {};
      validationMessages[inputFieldId] = validationMessage;
      sessionStorage.setItem(
        "validationMessages",
        JSON.stringify(validationMessages)
      );
    }
  });
}

function getValidationMessageFromSession(id) {
  const fieldElement = document.getElementById(id);
  if (fieldElement) {
    let validationMessages =
      JSON.parse(sessionStorage.getItem("validationMessages")) || {};
    return validationMessages[id] || "Validation message not found";
  }
}

// --- TYPE AHEAD SEARCH ------------------------------------------------- \\

function buildTypeAhead(inputName, listItems, listItemsOnly = true) {
  const inputId = `dform_widget_${inputName}`;
  const inputElement = document.getElementById(inputId);
  if (!inputElement) {
    console.error(`Input element with ID "${inputId}" not found.`);
    return;
  }

  // Create a new div to wrap the input, icon, and button
  const wrapper = document.createElement('div');
  wrapper.className = 'input-wrapper';

  // Insert the new wrapper before the input element
  inputElement.parentNode.insertBefore(wrapper, inputElement);

  // Move the input element into the new wrapper
  wrapper.appendChild(inputElement);

  // Create and add the magnifying glass SVG icon
  const searchIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  searchIconSvg.setAttribute('viewBox', '0 0 640 640');
  searchIconSvg.className = 'search-icon';

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill', 'currentColor');
  path.setAttribute('d', 'M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z');

  searchIconSvg.appendChild(path);
  wrapper.appendChild(searchIconSvg);

  // Add Clear Button functionality
  const clearButton = document.createElement('button');
  clearButton.type = 'button';
  clearButton.className = 'clear-btn';
  clearButton.textContent = 'Clear';

  clearButton.addEventListener('click', () => {
    inputElement.value = '';
    inputElement.focus();
    // Remove validation state on clear
    inputElement.classList.remove('dform_fielderror');
    const validationMessage = inputElement.parentNode.querySelector('.dform_validationMessage');
    if (validationMessage) {
      validationMessage.remove();
    }
  });

  wrapper.appendChild(clearButton);

  // Datalist functionality
  const datalistId = `${inputId}-datalist`;
  let datalistElement = document.getElementById(datalistId);

  if (!datalistElement) {
    datalistElement = document.createElement('datalist');
    datalistElement.id = datalistId;
    inputElement.parentNode.appendChild(datalistElement);
  }

  datalistElement.innerHTML = '';
  listItems.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    datalistElement.appendChild(option);
  });

  inputElement.setAttribute('list', datalistId);

  // Re-implement validation with a change event listener for robustness
  if (listItemsOnly) {
    inputElement.addEventListener('change', () => {
      const inputValue = inputElement.value;
      const normalizedInput = inputValue.trim().toLowerCase();
      const normalizedList = listItems.map(item => item.trim().toLowerCase());
      const isValid = normalizedList.includes(normalizedInput);

      const parentContainer = inputElement.closest('.dform_widget');

      if (!isValid && inputValue !== '') {
        inputElement.classList.add('dform_fielderror');
        let validationMessage = parentContainer.querySelector('.dform_validationMessage');
        if (!validationMessage) {
          validationMessage = document.createElement('div');
          validationMessage.classList.add('dform_validationMessage');
          validationMessage.textContent = 'Please select a value from the list.';
          parentContainer.appendChild(validationMessage);
        }
      } else {
        inputElement.classList.remove('dform_fielderror');
        const validationMessage = parentContainer.querySelector('.dform_validationMessage');
        if (validationMessage) {
          validationMessage.remove();
        }
      }
    });
  }
}

// --- RELATED SERVIES ------------------------------------------------------ \\

/**
 * Dynamically builds and inserts "related service" cards into a specified container.
 *
 * @param {Array<Object>} servicesData - An array of objects, where each object
 * represents a service card and should have the following properties:
 * - {string} headline: The main headline for the card.
 * - {string} description: The descriptive text for the card.
 * - {string} url: The URL the card links to.
 * @param {string} containerId - The ID of the HTML element where the cards will be inserted.
 */
function buildRelatedServiceCards(servicesData, containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID '${containerId}' not found.`);
    return;
  }

  if (servicesData && servicesData.length > 0) {

    let relatedServicesMenu = container.querySelector('.related-services-menu');
    if (!relatedServicesMenu) {
      const h2 = document.createElement('h2');
      h2.textContent = 'Related services';
      container.appendChild(h2);

      relatedServicesMenu = document.createElement('div');
      relatedServicesMenu.classList.add('related-services-menu');
      container.appendChild(relatedServicesMenu);
    } else {
      relatedServicesMenu.innerHTML = '';
    }


    if (servicesData.length === 0) {
      console.warn('No service data provided to build cards.');
      return; // Exit if no data
    }

    servicesData.forEach(service => {
      const cardLink = document.createElement('a');
      cardLink.href = service.url || '#';
      cardLink.classList.add('related-services-card');

      const headline = document.createElement('h3');
      headline.textContent = service.headline;

      const description = document.createElement('p');
      description.textContent = service.description;

      const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        `;

      cardLink.appendChild(headline);
      cardLink.appendChild(description);
      cardLink.insertAdjacentHTML('beforeend', svg);

      relatedServicesMenu.appendChild(cardLink);
    });
  }
}

// --- BUILD SELECTED ADDRESS ELEMENT --------------------------------------- \\

/**
 * Builds an HTML <address> markup string with Schema.org PostalAddress microdata.
 * Lines are omitted if their corresponding address component is empty or null.
 *
 * @param {object} addressData - An object containing address components.
 * @param {string} [addressData.subProperty] - (Optional) Sub-building information (e.g., flat number).
 * @param {string} [addressData.buildingName] - (Optional) Name of the building (e.g., "Howden House").
 * @param {string} [addressData.buildingNumber] - (Optional) Building number (e.g., "1").
 * @param {string} [addressData.streetName] - (Optional) Street name (e.g., "Union St").
 * @param {string} [addressData.locality] - (Optional) Dependent locality (e.g., "Sheffield City Centre").
 * @param {string} [addressData.city] - (Optional) City or Post Town (e.g., "Sheffield").
 * @param {string} [addressData.postcode] - (Optional) Postcode (e.g., "S1 2SH").
 * @returns {string} The HTML string for the <address> element.
 */
function buildAddressMarkup(addressData) {
  // Ensure addressData is an object to prevent errors if undefined/null is passed
  addressData = addressData || {};

  const addressLines = [];

  // Process address components in a typical display order
  // Note: itemprop values align with Schema.org PostalAddress properties

  // Sub-property (e.g., Flat 1)
  if (addressData.subProperty) {
    addressLines.push(`<span itemprop="subProperty">${addressData.subProperty}</span>`);
  }

  // Building Name (often used for itemprop="name" for the overall property)
  if (addressData.buildingName) {
    addressLines.push(`<span itemprop="name">${addressData.buildingName}</span>`);
  }

  if (addressData.property && (!addressData.subProperty && !addressData.buildingName && !addressData.buildingNumber)) {
    addressLines.push(`<span itemprop="property">${addressData.property}</span>`);
  }

  // Street Address (Building Number and Street Name often go together)
  const streetAddressParts = [];
  if (addressData.buildingNumber) {
    streetAddressParts.push(addressData.buildingNumber);
  }
  if (addressData.streetName) {
    streetAddressParts.push(addressData.streetName);
  }
  if (streetAddressParts.length > 0) {
    addressLines.push(`<span itemprop="streetAddress">${streetAddressParts.join(' ')}</span>`);
  }

  // Locality (e.g., Sheffield City Centre - a more specific place within a city/town)
  // Check to avoid duplicating if locality is the same as the main city
  if (addressData.locality && addressData.locality !== addressData.city) {
    addressLines.push(`<span itemprop="addressLocality">${addressData.locality}</span>`);
  }

  // City (Post Town) - also uses addressLocality in Schema.org
  if (addressData.city) {
    addressLines.push(`<span itemprop="addressLocality">${addressData.city}</span>`);
  }

  // Postal Code
  if (addressData.postcode) {
    addressLines.push(`<span itemprop="postalCode">${addressData.postcode}</span>`);
  }

  // Country (Assuming GB for UK context, adjust if needed)
  // addressLines.push(`<span itemprop="addressCountry">GB</span>`);

  // Join lines with <br> and wrap in <address> tags
  return `
    <address itemscope itemtype="http://schema.org/PostalAddress">
      ${addressLines.join('\n')}
    </address>
  `;
}

// --- BUILD REFERENCE ELEMENT ---------------------------------------------- \\

/**
 * Creates and inserts a new dynamic reference display element.
 * It assumes the provided reference value is already in the desired format.
 * @param {string} referenceValue - The dynamic value to be displayed.
 */
function createAndInsertReferenceDisplay(referenceValue) {
  // Get the parent container and the target insertion point (the #skip div)
  const controlButtons = document.getElementById("dform_control_buttons");
  const skipElement = controlButtons ? controlButtons.querySelector("#skip") : null;

  // Safely proceed only if both elements exist and a value is provided
  if (!controlButtons || !skipElement || !referenceValue) {
    console.error("Could not find required DOM elements or the reference value is missing.");
    return;
  }

  // Check if the new wrapper element already exists to avoid duplicates
  const existingWrapper = document.getElementById("case-display-wrapper");
  if (existingWrapper) {
    // If it exists, just update the reference value inside it
    const referenceSpan = document.getElementById("case-reference-display");
    if (referenceSpan) {
      referenceSpan.textContent = referenceValue;
    }
    return;
  }

  // Create the new parent wrapper element
  const newWrapper = document.createElement("div");
  newWrapper.id = "case-display-wrapper";
  newWrapper.className = "case-display-wrapper";
  newWrapper.innerHTML = `
    Reference: <span id="case-reference-display" class="case-reference-display">${referenceValue}</span>
  `;

  // Insert the new wrapper element just after the #skip div
  skipElement.insertAdjacentElement("afterend", newWrapper);
}

// --- BUILD MY ACCOUNT LINK ------------------------------------------------ \\

/**
 * Builds and updates the href for the 'Check your application status' link.
 * @param {string} referenceNumber - The SRID to be inserted into the link.
 */
function buildMyAccountLink(referenceNumber) {
  // Find the existing link element by its ID.
  const linkElement = document.getElementById("my-account-request");

  if (!linkElement) {
    console.error("The link element with id 'my-account-request' could not be found.");
    return;
  }

  // Construct the new URL using the base URL and reference number.
  const newHref = `${PORTAL_URL}/requests?srid=${referenceNumber}`;

  // Update the href attribute of the existing link.
  linkElement.setAttribute('href', newHref);

  KDF.showWidget("ahtm_confirmation_account");
}

/**
 * Builds and updates the href for a given feedback link using the global formattedTitle.
 * @param {string} formName - The name of the form to build the URL for (e.g., 'equalities_monitoring').
 */
function buildFormLink(id, formName, includeFormTitle = false) {
  // Build the ID of the element to find based on the form name
  const linkElement = document.getElementById(id);

  if (!linkElement) {
    console.error(`The link element with id '${id}' could not be found.`);
    return;
  }

  // Conditionally add the formTitle part to the URL
  const titleParameter = includeFormTitle ? `?formTitle=${KDF.getVal("le_title").replace(/\s+/g, "-")}` : '';
  const newHref = `${PORTAL_URL}//${hostname}/form/${formName}${titleParameter}`;

  // Update the href attribute
  linkElement.setAttribute('href', newHref);
}

// --- BUILD NOTIFICATION BANNERS ------------------------------------------- \\

/**
 * Creates and appends a notification bar to a specified parent element.
 * If a notification of the same type already exists, it is replaced.
 * @param {object} content The content of the notification.
 * @param {string} content.message The main text content.
 * @param {string} [content.linkText] The text for an optional link.
 * @param {string} [content.linkHref] The URL for an optional link.
 * @param {string} type The type of notification ('info', 'warning', 'error', 'success').
 */
const createNotification = (content, type) => {
  const parentElement = document.querySelector('.header');
  if (!parentElement) return;

  // Check for an existing notification of the same type and remove it
  const existingNotification = document.querySelector(`.site-notification-bar--${type}`);
  if (existingNotification) {
    existingNotification.remove();
  }

  const notificationBar = document.createElement('div');
  notificationBar.classList.add('site-notification-bar', `site-notification-bar--${type}`);

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('notification-content');

  const textContent = document.createElement('p');
  textContent.textContent = content.message;
  textContent.style.margin = '0';

  if (content.linkText && content.linkHref) {
    const link = document.createElement('a');
    link.textContent = content.linkText;
    link.href = content.linkHref;
    link.classList.add('notification-link');
    textContent.appendChild(link);
  }

  const closeLink = document.createElement('a');
  closeLink.href = '#';
  closeLink.textContent = 'Close all notifications';
  closeLink.classList.add('close-notification-link');
  closeLink.addEventListener('click', (event) => {
    event.preventDefault();
    notificationBar.remove();
  });

  contentWrapper.appendChild(textContent);
  contentWrapper.appendChild(closeLink);

  notificationBar.appendChild(contentWrapper);

  parentElement.appendChild(notificationBar);

  scrollToTop();
};

function showInformationBanner(content) {
  createNotification(content, 'info');
}

function showSuccessBanner(content) {
  createNotification(content, 'success');
}

function showWarningBanner(content) {
  createNotification(content, 'warning');
}

function showErrorBanner(content) {
  createNotification(content, 'error');
}

/**
 * Closes and removes all visible messages from the DOM.
 * It targets all elements with the class 'site-notification-bar'.
 */
const closeAllNotifications = () => {
  // Select all elements with the class 'site-notification-bar'
  const notifications = document.querySelectorAll('.site-notification-bar');

  // Iterate through the NodeList and remove each element
  notifications.forEach(notification => {
    notification.remove();
  });
};
