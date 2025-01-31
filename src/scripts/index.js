function logArguments(event, kdf, ...args) {
  console.group(event.type ? event.type : "event");
  console.log("event", event);
  console.log("kdf", kdf);
  args.forEach((arg, index) => {
    console.log(`arg${index + 1}`, arg);
  });
  console.groupEnd();
}

// --- GLOBAL CONSTS AND VARIABLES ----------------------------------------- \\

let customerState = false;

let pageName = "";

let addressSearchType = {};
let acceptGMSites = true;

const defaultDateMessage = "Enter the date in the correct format";

const datePairs = [];

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

  // --- ADD TAB TITLE AND ICON  ------------------------------------------- \\

  (() => {
    // Set form title
    const formTitle = document.getElementById("dform_widget_le_title").value;

    // Set document title
    document.title = formTitle;

    // Update document title after a short delay to ensure it's set properly
    setTimeout(() => {
      document.title = formTitle;
    }, 10);

    // Update favicon
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href =
        "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
    } else {
      // If favicon element doesn't exist, create it and append to head
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href =
        "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
      document.head.appendChild(newFavicon);
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

  // --- ADD FORM TITLE ---------------------------------------------------- \\

  (() => {
    // Find the element with id "dform_controls"
    const dformControls = document.getElementById("dform_controls");

    // Create the new title container element
    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";

    // Create the title element
    const title = document.createElement("h1");
    title.className = "form-title";
    title.id = "form-title";
    title.textContent = document.getElementById("dform_widget_le_title").value;

    // Append the title element to the title container
    titleContainer.appendChild(title);

    // Insert the title container before the dformControls element
    if (dformControls && dformControls.parentNode) {
      dformControls.parentNode.insertBefore(titleContainer, dformControls);
    }
  })();

  if (KDF.kdf().access === "citizen") {
    // --- ADD FORM HEADER ------------------------------------------------- \\
    (() => {
      // Create the header element
      const header = document.createElement("header");
      header.setAttribute("role", "banner");
      header.classList.add("header");

      // Create the logo container
      const logoContainer = document.createElement("div");
      logoContainer.classList.add("logo-container");

      // Create the logo link
      const logoLink = document.createElement("a");
      logoLink.href = "https://www.sheffield.gov.uk";
      logoLink.title = "Back to homepage";
      logoLink.classList.add("header-logo-link");

      // Create the logo image
      const logoImg = document.createElement("img");
      logoImg.classList.add("header-logo");
      logoImg.src = "https://www.sheffield.gov.uk/verint-files/logo.png";
      logoImg.alt = "Sheffield City Council Logo";

      // Append the logo image to the logo link
      logoLink.appendChild(logoImg);

      // Append the logo link to the logo container
      logoContainer.appendChild(logoLink);

      // Append the logo container to the header
      header.appendChild(logoContainer);

      // Insert the header at the beginning of the body
      document.body.insertBefore(header, document.body.firstChild);
    })();

    // --- ADD FORM FOOTER ------------------------------------------------- \\
    (() => {
      // Create the footer HTML string
      const footerHTML = `
              <footer class="footer" role="contentinfo">
                  <div class="az-links-container">
                      <nav role="navigation" class="az-links">
                          <a href="https://www.sheffield.gov.uk/utilities/a-z">A-Z of services</a>
                          <p class="skip">
                              <a href="#footer-content" class="button hide-screen focusable">
                                  Skip the A to Z services
                              </a>
                          </p>
                          <ul class="az-menu">
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#a">
                                      <span>Services</span> A
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#b">
                                      <span>Services</span> B
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#c">
                                      <span>Services</span> C
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#d">
                                      <span>Services</span> D
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#e">
                                      <span>Services</span> E
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#f">
                                      <span>Services</span> F
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#g">
                                      <span>Services</span> G
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#h">
                                      <span>Services</span> H
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#i">
                                      <span>Services</span> I
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#j">
                                      <span>Services</span> J
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#k">
                                      <span>Services</span> K
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#l">
                                      <span>Services</span> L
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#m">
                                      <span>Services</span> M
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#n">
                                      <span>Services</span> N
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#o">
                                      <span>Services</span> O
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#p">
                                      <span>Services</span> P
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#q">
                                      <span>Services</span> Q
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#r">
                                      <span>Services</span> R
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#s">
                                      <span>Services</span> S
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#t">
                                      <span>Services</span> T
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#u">
                                      <span>Services</span> U
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#v">
                                      <span>Services</span> V
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#w">
                                      <span>Services</span> W
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#x">
                                      <span>Services</span> X
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#y">
                                      <span>Services</span> Y
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#z">
                                      <span>Services</span> Z
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#123">
                                      <span>Services</span> 123
                                  </a>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div class="footer-links-container" id="footer-content">
                      <ul id="legal-links">
                          <li>
                              <a href="https://www.sheffield.gov.uk/">
                                  Site Home Page
                              </a>
                          </li>
                          <li>
                              <a href="https://www.sheffield.gov.uk/utilities/footer-links/privacy-notice">
                                  Privacy notice
                              </a>
                          </li>
                          <li>
                              <a href="https://www.sheffield.gov.uk/utilities/footer-links/cookie-policy">
                                  Use of cookies
                              </a>
                          </li>
                          <li>
                              <a href="https://www.sheffield.gov.uk/utilities/footer-links/accessibility-statement">
                                  Accessibility statement
                              </a>
                          </li>
                          <li>
                              <a href="https://www.sheffield.gov.uk/utilities/footer-links/legal-notices">
                                  Legal notices
                              </a>
                          </li>
                      </ul>
                      <ul id="other-links">
                          <li>
                              <a href="https://www.sheffield.gov.uk/job-vacancies">
                                  Jobs and volunteering with Sheffield City Council
                              </a>
                          </li>
                          <li>
                              <a href="https://www.sheffield.gov.uk/your-city-council/access-to-information">
                                  Get access to information
                              </a>
                          </li>
                          <li>
                              <a href="http://www.welcometosheffield.co.uk/visit/events">
                                  Sheffield events
                              </a>
                          </li>
                          <li>
                              <a href="https://haveyoursay.sheffield.gov.uk/">
                                  Have your say - consultations
                              </a>
                          </li>
                          <li>
                              <a href="http://www.sheffieldnewsroom.co.uk">
                                  News and press
                              </a>
                          </li>
                          <li>
                              <a href="https://www.sheffield.gov.uk/utilities/footer-links/advertising">
                                  Advertising
                              </a>
                          </li>
                          <li>
                              <a href="https://www.sheffield.gov.uk/business">
                                  Business
                              </a>
                          </li>
                      </ul>
                      <ul id="social-links">
                          <li>
                              <a href="https://twitter.com/sheffcouncil?lang=en" class="icon-twitter-after">
                                  <span>Twitter</span>
                              </a>
                          </li>
                          <li>
                              <a href="https://www.facebook.com/SheffCityCouncil/" class="icon-facebook-after">
                                  <span>Facebook</span>
                              </a>
                          </li>
                          <li>
                              <a href="https://www.youtube.com/user/SheffieldCCouncil" class="icon-youtube-after">
                                  <span>YouTube</span>
                              </a>
                          </li>
                          <li>
                              <a href="https://www.instagram.com/sheffieldcitycouncil/" class="icon-instagram-after">
                                  <span>Instagram</span>
                              </a>
                          </li>
                          <li>
                              <a href="https://public.govdelivery.com/accounts/UKSHEFFIELD/subscriber/new" class="icon-mail-after">
                                  <span>Email alerts</span>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div class="info">
                      <p class="modified"></p>
                      <p class="copyright">${new Date().getFullYear()} &copy; Copyright Sheffield City Council</p>
                  </div>
                  <div class="logo-container">
                      <a href="https://www.sheffield.gov.uk" title="Back to homepage" class="footer-logo-link">
                          <img class="footer-logo" src="https://www.sheffield.gov.uk/verint-files/logo.png" alt="Sheffield City Council Logo">
                      </a>
                  </div>
                  <div class="jump-container">
                      <a href="#top" id="jump-to-top">Top</a>
                  </div>
              </footer>
          `;

      // Find the body element
      const body = document.getElementsByTagName("body")[0];

      // Insert the footer HTML at the end of the body
      body.insertAdjacentHTML("beforeend", footerHTML);
    })();
  }

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
              ? `${remainingChars} character remaining`
              : `${remainingChars} characters remaining`;
        });

        // Initial character count display
        const initialChars = maxLength - textarea.value.length;
        characterCountDiv.textContent = `${initialChars} characters remaining`;
      }
    });
  })();

  // --- HANDLE FILE UPLOAD ------------------------------------------------ \\

  $(document).ajaxComplete(function (event, xhr, settings) {
    if (settings.url.startsWith(KDF.kdf().rest.attachFiles)) {
      const { field, token, filename, mimetype } = xhr.responseJSON[0];
      const deleteButton = getFileDeleteByInputId(field);
      const fileNameField = field.replace("file_", "txt_file_name_");

      $(`#${field}`).prop("disabled", true).css({
        color: "var(--color-background)",
      });
      $(`#${fileNameField}`).val(filename).trigger("change");

      if (deleteButton) {
        deleteButton.addEventListener("click", () => {
          setTimeout(() => {
            if (!KDF.kdf().form.filetokens.includes(token)) {
              $(`#${field}`).prop("disabled", false).css({
                color: "var(--color-black)",
              });
              $(`#${fileNameField}`).val("").trigger("change");
            }
          }, 0);
        });
      }
      checkPageProgress();
    }
  });

  // Function to find file_delete element by input ID
  function getFileDeleteByInputId(fileUploadId) {
    const fileUploadElement = document.getElementById(fileUploadId);
    if (fileUploadElement) {
      const fileDeleteElement = fileUploadElement
        .closest(".container")
        .querySelector(".file_delete");
      if (fileDeleteElement) {
        return fileDeleteElement;
      }
    }
    return null;
  }
}

// --- HANDLE ON READY EVENT ----------------------------------------------- \\

function handleOnReadyEvent(event, kdf) {
  customerState = kdf.customerset;

  // --- ADD CONTENT TO WHY WE NEED DATE OF BIRTH --------------------------- \\

  $(".dob-reason").text(
    "Your date of birth is a helpful way to confirm your identity and protect your information."
  );
  $(".their-dob-reason").text(
    "Their date of birth is a helpful way to confirm their identity and protect their information."
  );

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

    // --- APPLY INTERNAL SYLE CHANGES ------------------------------------- \\

    root.style.setProperty("--color-empty-pb", "#e0e0e0");
    root.style.setProperty("--color-primary", "#007aff");

    $("form.dform").css({
      margin: "0 auto",
      "min-height": "88vh",
    });

    $("#dform_page_complete").css({
      "margin-inline": "0 40%",
    });

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

  // --- SET EQUALITIES LINK ----------------------------------------------- \\

  const formattedTitle = KDF.getVal("le_title").replace(/\s+/g, "-");
  $("#equality-btn").attr(
    "href",
    `https://forms.sheffield.gov.uk/form/auto/equalities_monitoring?formTitle=${formattedTitle}&channel=web`
  );

  storeDefaultValidationMessages();

  // --- MAP --------------------------------------------------------------- \\

  if (document.getElementById("map_container")) {
    do_KDF_Ready_esriMap();
  }

  // --- HANDLE LOAD COMPLETED FORM ---------------------------------------- \\

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
      const currentPageId = getCurrentPageId();
      const container = document.querySelector(
        `#${currentPageId} .map-container`
      );

      if (container) {
        container.classList.add("dform_hidden");
      }
      if ($(".geo-btn-container").find(".dform_validationMessage").length) {
        $(".geo-btn-container")
          .find(".dform_validationMessage")
          .css("display", "none");
      }
      resetAddressSearch();
      setRequiredStateByAlias("postcode", "required");
    }
    if ($(this).text() === "Find vehicle") {
      resetVehicleSearch();
    }
  });

  // --- HANDLE ADDRESS LOOKUP --------------------------------------------- \\

  $(".search-results").on("change", (event) => {
    if (event.target.value) {
      const action =
        addressSearchType[getCurrentPageId()] === "local"
          ? "retrieve-local-address"
          : "retrieve-national-address";
      KDF.customdata(action, event.target.id, true, true, {
        propertyId: event.target.value,
      });
    }
  });

  $(".address-details").on("click", (event) => {
    resetAddressSearch(false);
    showAddressFields();
    setRequiredStateByAlias("postcode", "not required");
  });

  // --- HANDLE MANUAL ADDRESS ENTRY --------------------------------------- \\

  $(`.property, .street-name, .city, .postcode`).on("change", function () {
    const fieldsArray = getValuesOfInputFields([
      { alias: "property" },
      { alias: "streetName" },
      { alias: "city" },
      { alias: "postCode" },
    ]);

    const fields = fieldsArray.reduce((field, item) => {
      field[item.alias] = item.value;
      return field;
    }, {});

    if (
      !fields.property ||
      !fields.streetName ||
      !fields.city ||
      !fields.postCode
    ) {
      return;
    }

    const fullAddress = `${formatTitleCase(fields.property)} ${formatTitleCase(
      fields.streetName
    )}, ${fields.city.toUpperCase()}, ${fields.postCode.toUpperCase()}`;

    setValuesToInputFields([{ alias: "fullAddress", value: fullAddress }]);
  });

  // --- HANDLE VEHICLE LOOKUP --------------------------------------------- \\

  $(".vehicle-details").on("click", (event) => {
    resetVehicleSearch(false);
    showVehicleFields();
  });

  // --- HANDLE FIND CURRENT LOCATION CLICK -------------------------------- \\

  $(".geo-btn").on("click", function () {
    $(`.address-search`).find(".dform_validationMessage").hide();

    const currentPageId = getCurrentPageId();
    const container = document.querySelector(
      `#${currentPageId} .map-container`
    );

    if (container) {
      container.classList.add("dform_hidden");
    }
    resetAddressSearch();

    const $button = $(this);
    const $container = $button.closest(".geo-btn-container");
    const $validationMessage = $container.find(".dform_validationMessage");

    // Hide the validation message if it's visible
    if ($validationMessage.is(":visible")) {
      $validationMessage.hide();
    }

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

  function checkAddressHasBeenSet(action = "next page") {
    const currentPageId = getCurrentPageId();
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
            ? "Select a location inside the Sheffield area"
            : "Slecte a public highway inside the Sheffield area";
          $("#map_container").addClass("map_container_error");
          if ($("#map_error").length == "0") {
            $("#dform_widget_html_ahtm_map_container").prepend(
              `<div id="map_error" class="dform_validationMessage" style="display: block;">${errorMessage}</div>`
            );
          }
          KDF.setVal("ahtm_map_location_error", errorMessage);
          KDF.showWidget("ahtm_map_location_error");
        }
      } else {
        if (action === "submit") {
          KDF.gotoPage("complete", true, true, false);
        } else {
          KDF.gotoNextPage();
        }
      }
    } else {
      const isMapContainerVisible = $("#map_container").is(":visible");
      if (isMapContainerVisible) {
        const errorMessage = acceptGMSites
          ? "Select a location inside the Sheffield area"
          : "Slecte a public highway inside the Sheffield area";
        $("#map_container").addClass("map_container_error");
        if ($("#map_error").length == "0") {
          $("#dform_widget_html_ahtm_map_container").prepend(
            `<div id="map_error" class="dform_validationMessage" style="display: block;">${errorMessage}</div>`
          );
        }
        KDF.setVal("ahtm_map_location_error", errorMessage);
        KDF.showWidget("ahtm_map_location_error");
      } else {
        const searchResult = document.querySelector(
          `#${currentPageId} select[data-customalias="searchResult"]`
        );
        const isSearchResultVisible = $(`#${searchResult.id}`).is(":visible");
        if (isSearchResultVisible) {
          document.querySelector(
            `div[data-name="${searchResult.name}"] .dform_validationMessage`
          ).style.display = "block";
        } else {
          const postcode = document.querySelector(
            `#${currentPageId} input[data-customalias="postcode"]`
          );
          const postcodeHasValue = KDF.getVal(postcode.name) ? true : false;
          if (postcodeHasValue) {
            const findButton = document.querySelector(
              `#${currentPageId} .find-btn`
            );
            if (findButton) {
              findButton.click();
            } else {
              document.querySelector(
                `div[data-name="${postcode.name}"] .dform_validationMessage`
              ).style.display = "block";
            }
            findButton.click();
          } else {
            document.querySelector(
              `div[data-name="${postcode.name}"] .dform_validationMessage`
            ).style.display = "block";
          }
        }
      }
    }
  }

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
    const dateMessage = getValidationMessageFromSession(parentId);
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
      const dateMessage = getValidationMessageFromSession(parentId);
      const dd = $(`#${this.id.slice(0, -2)}dd`).val() !== "" ? true : false;
      const mm = $(`#${this.id.slice(0, -2)}mm`).val() !== "" ? true : false;
      $(`#${parentId}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .hide();
      if (e.type === "input") inputDate(this.id, null, e.which);
      if (e.type === "focusout") handleDateValidation(parentId, this);
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
  if (kdf.access === "agent" && kdf.profileData["profile-FullName"]) {
    property = formatTitleCase(kdf.profileData["profile-AddressNumber"]);
    streetName = formatTitleCase(kdf.profileData["profile-AddressLine1"]);
    fullAddress = `${formatTitleCase(property)} ${formatTitleCase(
      streetName
    )}, ${kdf.profileData["profile-AddressLine4"]}, ${
      kdf.profileData["profile-Postcode"]
    }`;
    handleSetReporter(
      new Date(kdf.profileData["profile-DateOfBirth"]),
      fullAddress
    );
  } else if (
    kdf.access === "agent" &&
    KDF.getVal("txt_full_address_about_you")
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

  $(".close-case-btn").on("click", () => {
    if (checkIsFormComplete(fieldsToCheckBeforeClose)) {
      KDF.markComplete();
      KDF.gotoPage("complete", false, false, false);
    } else {
      KDF.showError("Please ensure all fields have been completed.");
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
}

// --- HANDLE ON PAGE CHANGE EVENT ----------------------------------------- \\

function handlePageChangeEvent(event, kdf, currentpageid, targetpageid) {
  KDF.hideMessages();

  // Get the name for the current page
  $(`div[data-type="page"][data-pos="${currentpageid}"]`).each(function () {
    pageName = this.id.slice(11);
  });

  // Get the name for the current page
  $(`div[data-type="page"][data-pos="${targetpageid}"]`).each(function () {
    pageName = this.id.slice(11);
  });

  updateProgressBar(targetpageid);

  if (pageName === "page_about_you") {
    if (kdf.access === "agent" && kdf.customerset === "agent_false") {
      KDF.sendDesktopAction("raised_by");
      // createModal("setReporterModal", "system_search_record");
    }
  }

  if (pageName === "save") {
    KDF.setVal("txt_resume_form", "true");
    $("#dform_page_complete").css({
      "margin-inline": "0 40%",
    });
    $("form.dform").css({
      margin: "8px",
      padding: "16px",
      background: "var(--color-white)",
    });
    getAndSetReviewPageData();
    showContactTeamPanel();
    KDF.save();
  }

  if (pageName === "complete") {
    if (!KDF.getVal("eml_address")) {
      KDF.hideWidget("ahtm_confirmation_email_send");
    } else {
      KDF.showWidget("ahtm_confirmation_email_send");
    }

    $("form.dform").css({
      margin: "8px",
      padding: "16px",
      background: "var(--color-white)",
    });
    showContactTeamPanel();
    KDF.setVal("txt_finish_date_and_time", formatDateTime().utc);
  }

  getAndSetReviewPageData();

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
    field.type === "tel" ||
    field.type === "textarea"
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
  fullAddress = `${formatTitleCase(property)} ${formatTitleCase(streetName)}, ${
    response["profile-AddressLine4"]
  }, ${response["profile-Postcode"]}`;

  handleSetReporter(new Date(response["profile-DateOfBirth"]), fullAddress);

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

  // Check if the action is to check the map status
  if (action === "check-map-status") {
    // Spread the data object
    const { isMapAvailable } = response.data;

    // Select all elements with the class "map-icon"
    const mapIcon = $(".map-icon");

    // Check if the response data indicates unavailable maps
    if (isMapAvailable === "false") {
      // (Optional) Disable elements using native method (comment out if not used)
      mapIcon.prop("disabled", true);

      // Set aria-disabled to true for accessibility
      mapIcon.attr("aria-disabled", "true");

      // Add the "disabled" class for styling
      mapIcon.addClass("disabled");

      // Show the "maps-unavailable-notice" element
      $(".maps-unavailable-notice").show();
    } else {
      // (Optional) Enable elements using native method (comment out if not used)
      mapIcon.prop("disabled", false);

      // Set aria-disabled to false for accessibility
      mapIcon.attr("aria-disabled", "false");

      // Remove the "disabled" class
      mapIcon.removeClass("disabled");

      // Hide the "maps-unavailable-notice" element
      $(".maps-unavailable-notice").hide();

      if (KDF.kdf().access === "agent") {
        $(
          "#map_container > div.esri-view-root > div.esri-ui.calcite-theme-light > div.esri-ui-inner-container.esri-ui-corner-container > div.esri-ui-top-right.esri-ui-corner > div"
        ).css("display", "inline-flex");
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
    if (action === "search-local-address")
      addressSearchType[getCurrentPageId()] = "local";
    if (action === "search-national-address")
      addressSearchType[getCurrentPageId()] = "national";

    const { propertySearchResult } = response.data;
    if (propertySearchResult.length > 0) {
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
      showHideInputFields([{ alias: "searchResult", display: true }]);
    } else {
      const currentPageId = getCurrentPageId();
      const postcodeInput = document.querySelector(
        `#${currentPageId} input[data-customalias="postcode"]`
      );

      if (postcodeInput) {
        const validationMessageElement = document.querySelector(
          `div[data-name="${postcodeInput.name}"] .dform_validationMessage`
        );

        if (validationMessageElement) {
          validationMessageElement.textContent = "Enter a valid postcode";
          validationMessageElement.style.display = "block";
        }
      }
      showAddressFields();
    }
  }

  if (
    action === "retrieve-local-address" ||
    action === "retrieve-national-address" ||
    action === "retrieve-location-from-coordinates"
  ) {
    let {
      property,
      streetName,
      city,
      postcode,
      fullAddress,
      propertyId,
      uprn,
      streetId,
      usrn,
      status,
      message,
    } = response.data;
    if (status == 400 && action === "retrieve-location-from-coordinates") {
      const $button = $(".geo-btn");
      const $container = $button.closest(".geo-btn-container");
      const $validationMessage = $container.find(".dform_validationMessage");
      const errorMessageHtml = `
          <div class="dform_validationMessage" style="display: block; width: 100%; transform: translateY(12px);">
            ${message}
          </div>
        `;

      if (!$validationMessage.length) {
        $button.before(errorMessageHtml);
      } else {
        $validationMessage.html(message).show();
      }
      return;
    }

    property = formatTitleCase(property);
    streetName = formatTitleCase(streetName);
    fullAddress = `${formatTitleCase(property)} ${formatTitleCase(
      streetName
    )}, ${city}, ${postcode}`;
    showHideInputFields([{ alias: "searchResult", display: false }]);
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
    ]);
    setSelectedAddress(fullAddress, "show");
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

    const url = `https://sccvmtholi01.sheffield.gov.uk/CRMHousing/default.asp?screenId=${screen}&crmAgentId=${agentId}&hmsPersonId=${ohmsId}&refreshParam=<xref1>&dummy=<!2!/CurrentTime/Time!>`;
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
    }
  }

  // keep at the bottom
  checkPageProgress();
}

// --- HANDLE ON SUCCESSFUL SAVE EVENT ------------------------------------ \\

function handleFormSave(event, kdf) {
  KDF.hideMessages();
}

// --- HANDLE ON FAILED SAVE EVENT ---------------------------------------- \\

function handleFailedSave(event, kdf) {
  KDF.hideMessages();
}

// --- HANDLE ON COMPLETE EVENT ------------------------------------------- \\

function handleFomComplate(event, kdf) {
  document.getElementById("form-title").textContent = "Confirmation";

  setTimeout(function () {
    KDF.hideMessages();
  }, 0);

  $("#dform_progressbar_sheffield, #dform_ref_display").hide();
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
    let isEmpty = el.value.trim() === "";
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
  disabledButtonToggle(!shouldDisableButton);
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

// --- SET SELECTED ADDRESS ------------------------------------------------- \\

function setSelectedAddress(selectedAddress, action, targetPageId) {
  targetPageId = targetPageId ? targetPageId : getCurrentPageId();

  // Get the selected-address-container element on the current page
  const addressContainer = document.querySelector(
    `#${targetPageId} .selected-address-container`
  );

  if (addressContainer) {
    // Obtain the data-name attribute of the addressContainer
    const name = addressContainer.getAttribute("data-name");

    // Get the output element within the selected-address-container
    const outputElement = addressContainer.querySelector(".selected-address");

    // Set the selected address as the content of the output element
    outputElement.textContent = selectedAddress;

    // Show or hides the data-name attribute of the addressContainer
    if (action) {
      KDF.showWidget(name);
    } else {
      KDF.hideWidget(name);
    }
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
    showHideInputFields([
      { alias: "searchResult", display: false },
      { alias: "property", display: false },
      { alias: "streetName", display: false },
      { alias: "city", display: false },
      { alias: "postCode", display: false },
      { alias: "fullAddress", display: false },
    ]);
  }
  setSelectedAddress("", false);
}

// --- SHOW ADDRESS FIELDS ------------------------------------------------- \\

function showAddressFields() {
  showHideInputFields([
    { alias: "searchResult", display: false },
    { alias: "property", display: true },
    { alias: "streetName", display: true },
    { alias: "city", display: true },
    { alias: "postCode", display: true },
  ]);
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
  const dateMessage = getValidationMessageFromSession(id);

  // Clear previous errors
  $(`#${id} .date-dd, #${id} .date-mm, #${id} .date-yy`).removeClass(
    "dform_fielderror"
  );
  $(`#${id}`).find(".dform_validationMessage").text(dateMessage).hide();

  const activeField = element.name.slice(-2);
  let hasError = false;
  let errorMsg = "";
  const errorFields = [];
  const dateFields = ["date-dd", "date-mm", "date-yy"];
  const errorConditions = [
    {
      condition: !dd && !mm && !yy,
      message: dateMessage,
      fields: dateFields,
    },
    {
      condition: !dd && !mm,
      message: "Date must include a day and month",
      fields: ["date-dd", "date-mm"],
    },
    {
      condition: !dd && !yy,
      message: "Date must include a day and year",
      fields: ["date-dd", "date-yy"],
    },
    {
      condition: activeField !== "dd" && !mm && !yy,
      message: "Date must include a month and year",
      fields: ["date-mm", "date-yy"],
    },
    { condition: !dd, message: "Date must include a day", fields: ["date-dd"] },
    {
      condition: activeField !== "dd" && !mm,
      message: "Date must include a month",
      fields: ["date-mm"],
    },
    {
      condition: activeField !== "dd" && activeField !== "mm" && !yy,
      message: "Date must include a year",
      fields: ["date-yy"],
    },
  ];

  for (const condition of errorConditions) {
    if (condition.condition) {
      hasError = true;
      errorMsg = condition.message;
      errorFields.push(...condition.fields);
      break; // Break out of the loop after the first match
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

  // If all components are valid, proceed to validate the full date
  if (dd && mm && yy) {
    if (validDate(id, dd, mm, yy, activeField)) {
      const date = `${yy.toString().padStart(4, "0")}-${mm
        .toString()
        .padStart(2, "0")}-${dd.toString().padStart(2, "0")}`;
      const localFormat = new Date(date).toLocaleDateString("en-GB");
      $(`#${id.replace("_date_", "_txt_")}`).val(localFormat);
      $(`#${id.replace("_date_", "_dt_")}`).val(date);
    } else {
      $(`#${id.replace("_date_", "_txt_")}`).val("");
      $(`#${id.replace("_date_", "_dt_")}`).val("");
      $(`#${id} .date-dd, #${id} .date-mm, #${id} .date-yy`).addClass(
        "dform_fielderror"
      );
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

function validDate(id, day, month, year, activeField) {
  const dateMessage = getValidationMessageFromSession(id);
  const validationMsg = $(`#${id}`)
    .find(".dform_validationMessage")
    .text(dateMessage)
    .hide();

  // Construct the date from the provided values
  const date = new Date(year, month - 1, day); // month is zero-indexed

  // Check if the constructed date is valid
  if (activeField !== "yy") {
    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      validationMsg.text(`Must be a real date`).show();
      return false;
    }
  }

  const dateElementId = id.replace("_date_", "_dt_");
  const { minDate, maxDate } = getMinMaxDates(dateElementId);

  // Validate against min and max dates
  if (date < minDate) {
    const yearsPast = new Date().getFullYear() - minDate.getFullYear();
    if (yearsPast > 0) {
      validationMsg
        .text(
          `Date cannot be more than ${yearsPast} ${getYearLabel(
            yearsPast
          )} in the past`
        )
        .show();
    } else {
      validationMsg.text(`Date can't be before today`).show();
    }
    return false;
  }

  if (date > maxDate) {
    const yearsFuture = maxDate.getFullYear() - new Date().getFullYear();
    if (yearsFuture > 0) {
      validationMsg
        .text(
          `Date cannot be more than ${yearsFuture} ${getYearLabel(
            yearsFuture
          )} in the future`
        )
        .show();
    } else {
      validationMsg.text(`Date can't be after today`).show();
    }
    return false;
  }

  // Check date relationships
  if (datePairs && Array.isArray(datePairs) && datePairs.length > 0) {
    for (const pair of datePairs) {
      const [dateAId, dateBId] = pair.dateFields;
      if (id === dateAId) {
        const dateBValue = $(`#${dateBId.replace("_date_", "_dt_")}`).val();
        if (
          dateBValue &&
          !checkDateRelationship(date, new Date(dateBValue), pair.rule)
        ) {
          validationMsg.text(pair.validationMessages[0]).show();
          return false;
        }
      } else if (id === dateBId) {
        const dateAValue = $(`#${dateAId.replace("_date_", "_dt_")}`).val();
        if (
          dateAValue &&
          !checkDateRelationship(new Date(dateAValue), date, pair.rule)
        ) {
          validationMsg.text(pair.validationMessages[1]).show();
          return false;
        }
      }
    }
  }

  return true; // If all validations pass
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
        childDiv.style.color = "var(--color-black)";
        childDiv.style.background = "var(--color-empty-pb)";
        parentDiv.style.background = "var(--color-background)";
      } else if (percentage >= 100) {
        percentage = 100;
        childDiv.style.width = `${percentage}%`;
        childDiv.style.color = "var(--color-white)";
        childDiv.style.background = "var(--color-white)";
        parentDiv.style.background = "var(--color-white)";
      } else {
        childDiv.style.width = `${percentage}%`;
        childDiv.style.color = "var(--color-white)";
        childDiv.style.background = "var(--color-primary)";
        parentDiv.style.background = "var(--color-background)";
      }
      childDiv.textContent = `${percentage}%`;
      childSpan.style.width = `${100 - percentage}%`;
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

  // Set and show address
  if (!address.includes("undefined")) {
    setSelectedAddress(address, "show", "dform_page_page_about_you");
  }

  // Hide submit anonymously option and info
  $(".anonymous").hide();
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
  // Find the currently active form page
  const activeFormPage = $('.dform_page[data-active="true"]:visible');
  // Get the page number of the current form page
  const thisPageNumber = activeFormPage.attr("data-pos");

  // Add the current page number to the user's history
  formUserPath.push(thisPageNumber);

  // Check if the review page is currently visible
  const reviewPageIsVisible = $("#dform_page_page_review:visible").length > 0;

  // Reverse the user's path to look back at the visited pages
  const formUserPathReversed = [...formUserPath].reverse();
  const relevantPagesReversed = [];

  // Determine relevant pages by looking back from the review page
  for (let i = 0; i < formUserPathReversed.length - 1; i++) {
    if (
      parseInt(formUserPathReversed[i]) > parseInt(formUserPathReversed[i + 1])
    ) {
      relevantPagesReversed.push(formUserPathReversed[i + 1]);
    } else {
      formUserPathReversed.splice(i + 1, 1);
      i--;
    }
  }

  // Reverse the relevant pages to the correct order
  let relevantPages = [];

  if (KDF.kdf().form.complete === "Y") {
    // use stored page array when complete
    relevantPages = KDF.getVal("txt_pages").split(",");
  } else {
    if (
      KDF.kdf().form.name.startsWith("cm_") ||
      KDF.kdf().form.name.endsWith("_cm")
    ) {
      // use stored page array when case management
      relevantPages = KDF.getVal("txt_pages").split(",");
    } else if (
      KDF.kdf().form.caseid &&
      KDF.getVal("txt_resume_form") === "true"
    ) {
      // use stored page array when resumed
      relevantPages = KDF.getVal("txt_pages").split(",");
      if (reviewPageIsVisible) {
        // check for review page due to page changes
        KDF.setVal("txt_resume_form", "false"); // to prevent coming back down the resume path and construct page array
      }
    } else {
      // construct page array
      relevantPages = [...relevantPagesReversed].reverse();
      KDF.setVal("txt_pages", relevantPages.join(","));
    }
  }

  if (reviewPageIsVisible) {
    // Clear the review content HTML
    $("#review-page-content-container").html("");

    // Find all form pages except the review page
    let formPages = $('.dform_page[data-active="true"]').not(
      "#dform_page_page_review"
    );
    // Picking up all pages encase form rules rehide them on reload
    if (KDF.kdf().form.complete === "Y") {
      formPages = $(".dform_page").not("#dform_page_page_review");
    }

    formPages.each(function (i) {
      // Get the page number of the current form page
      const pageNumber = $(this).attr("data-pos");

      // Check if the page is relevant and should be added to the review page
      if (relevantPages.indexOf(pageNumber) > -1) {
        // Extract the page name from the element's ID
        const pageId = $(formPages[i]).attr("id");
        const pageName = pageId.split("dform_page_")[1];
        console.log(pageName);
        KDF.showPage(pageName);
        const contentDivId = `review-page-content--${pageName}`;

        // Create a container for the review page content
        $("#review-page-content-container").append(
          `<div class="review-page-content-section" id="${contentDivId}"></div>`
        );

        // Create a button to allow editing of the page
        const buttonHtml = `<button type="button" id="edit_button_${pageName}" class="review-page-edit-button">Edit</button>`;
        const contentDiv = $("#" + contentDivId);
        contentDiv.append(buttonHtml);

        // Attach a click event handler to the button
        const button = contentDiv.find(".review-page-edit-button");
        button.on("click", function () {
          const buttonSet = $(
            '.dform_section_box_review div[data-type="buttonset"]'
          );
          if (buttonSet.is(":hidden")) {
            buttonSet.show();
          }
          KDF.gotoPage(pageName, true, true, true);
        });

        // Get the page header text
        const pageHeader = $(formPages[i]).find(".page-title").text();
        $("#" + contentDivId).append(`<h3>${pageHeader}</h3`);

        // Find all visible fields on the page
        const pageFields = $(formPages[i])
          .find(".dform_widget_field")
          .filter(function () {
            return $(this).css("display") === "block";
          });

        pageFields.each(function (field) {
          const fieldType = $(pageFields[field]).attr("data-type");
          const fieldName = $(pageFields[field]).attr("data-name");
          const fieldClass = $(pageFields[field]).attr("class");
          let fieldLabel = "";
          let fieldValue = "";

          function getLegendText(classSelector) {
            const parentElement = $(`.container[data-name="${fieldName}"]`)
              .length
              ? $(`.container[data-name="${fieldName}"]`)
              : $(`.container.dform_widget_${fieldName}`);

            if (parentElement.length) {
              return parentElement.find(`.${classSelector} legend`).text();
            }
          }
          if (fieldType === "select") {
            fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
            fieldValue =
              KDF.kdf()?.form?.data?.[fieldName] ?? KDF.getVal(fieldName);
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
            fieldValue = KDF.getVal(
              fieldName.replace("file_", "txt_file_name_")
            );
            const filePath = KDF.getVal(
              fieldName.replace("file_", "txt_file_path_")
            );
            if (KDF.kdf().access === "agent" && filePath) {
              fieldValue = `<a href="${filePath}" target="_blank">${fieldValue}</a>`;
            }
          } else {
            if (fieldClass.indexOf("currency") !== -1) {
              fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
              fieldValue = `£${KDF.getVal(fieldName)}`;
            } else if (fieldClass.indexOf("address-search") !== -1) {
              fieldLabel = "Address";
              fieldValue = getValueFromAlias(pageId, "fullAddress");
            } else if (
              /\b(property|street-name|city|postcode)\b/.test(fieldClass)
            ) {
              fieldLabel = false;
              fieldValue = "";
            } else {
              fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
              fieldValue = KDF.getVal(fieldName);
            }
          }

          // Check if the field has a label
          if (fieldLabel) {
            // Set a default value for optional fields that are visible but not answered
            if (
              fieldValue === "" ||
              fieldValue === null ||
              fieldValue === undefined
            ) {
              if (fieldType === "file") {
                fieldValue = "Not uploaded";
              } else {
                fieldValue = "Not answered";
              }
            }

            // Append the field information to the review page content
            $(`#${contentDivId}`).append(
              `<p class="review-page-item"><span class="review-page-question-text">${fieldLabel}:</span> ${fieldValue}</p>`
            );
          }
        });
      }
    });
  }
}

function refreshReviewPage() {
  getAndSetReviewPageData();
}

// --- CONTACT TEAM PANEL --------------------------------------------------- \\

function showContactTeamPanel() {
  const contactInfo = document.createElement("aside");
  contactInfo.classList.add("contact-information");

  const header = document.createElement("header");
  const headerTitle = document.createElement("h2");
  headerTitle.textContent = KDF.getVal("txt_contact_title");
  header.appendChild(headerTitle);

  const main = document.createElement("main");
  main.classList.add("contact-details");

  const emailIcon = document.createElement("i");
  emailIcon.classList.add("icon");
  const emailIconSpan = document.createElement("span");
  emailIconSpan.classList.add("icon-email");
  emailIcon.appendChild(emailIconSpan);

  const emailLink = document.createElement("a");
  emailLink.href = KDF.getVal("txt_contact_link");
  emailLink.textContent = "Ask us a question";

  main.appendChild(emailIcon);
  main.appendChild(emailLink);

  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("icon");
  const phoneIconSpan = document.createElement("span");
  phoneIconSpan.classList.add("icon-phone");
  phoneIcon.appendChild(phoneIconSpan);

  const phoneLink = document.createElement("a");
  phoneLink.href = `tel:${KDF.getVal("tel_contact_number")}`;
  phoneLink.textContent = `${KDF.getVal("tel_contact_number").slice(
    0,
    4
  )} ${KDF.getVal("tel_contact_number").slice(4, 7)} ${KDF.getVal(
    "tel_contact_number"
  ).slice(7, 11)}`;
  main.appendChild(phoneIcon);
  main.appendChild(phoneLink);

  if (KDF.getVal("txt_contact_address")) {
    const locationIcon = document.createElement("i");
    locationIcon.classList.add("icon");
    locationIcon.classList.add("align-self");
    const locationIconSpan = document.createElement("span");
    locationIconSpan.classList.add("icon-location");
    locationIcon.appendChild(locationIconSpan);

    const address = document.createElement("p");
    const addressString = KDF.getVal("txt_contact_address").replace(
      /, /g,
      "<br/>"
    );
    address.innerHTML = addressString;
    main.appendChild(address);
    main.appendChild(locationIcon);
    main.appendChild(address);
  }

  const footer = document.createElement("footer");
  const footerImg = document.createElement("img");
  footerImg.src =
    "https://www.sheffield.gov.uk/themes/custom/bbd_localgov/images/council-tax.jpeg";
  footerImg.alt = "Footer Image";

  footer.appendChild(footerImg);

  contactInfo.appendChild(header);
  contactInfo.appendChild(main);
  contactInfo.appendChild(footer);

  const target = document.querySelector(".title-container");
  if (target) {
    target.after(contactInfo);
  } else {
    console.error("Element with class title-container not found");
  }
}

// --- CHECK CASE PROGRESS -------------------------------------------------- \\

function checkIsFormComplete(fields) {
  let isComplete = true;
  fields.map((field) => {
    if (
      KDF.getVal(field) === "" ||
      KDF.getVal(field) === null ||
      KDF.getVal(field) === undefined ||
      KDF.getVal(field) === "Pending" ||
      KDF.getVal(field) === "In progress"
    ) {
      isComplete = false;
    }
  });
  return isComplete;
}

function closeCase() {
  const noteDetails = KDF.getVal("txta_closure_details")
    ? `${KDF.getVal("txta_closure_details")}`
    : "";
  KDF.customdata("close-case", "_KDF_complete", true, true, {
    caseNote: `${KDF.getVal("sel_closure_reason")}: ${noteDetails}`,
  });
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
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "1",
      name: "vegetation",
      title: "Vegetation",
      layer_type: "Display",
      layerid: "24",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/24",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "2",
      name: "Signs",
      title: "Signs",
      layer_type: "Display",
      layerid: "0",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/0",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "3",
      name: "Traffic Signs",
      title: "Traffic Signs",
      layer_type: "Display",
      layerid: "41",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/41",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "4",
      name: "Drains",
      title: "Drains",
      layer_type: "Display",
      layerid: "2",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/2",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "5",
      name: "Grit Bins",
      title: "Grit Bins",
      layer_type: "Display",
      layerid: "3",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/3",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "6",
      name: "Litter Bins",
      title: "Litter Bins",
      layer_type: "Display",
      layerid: "4",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/4",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "7",
      name: "Street Furniture",
      title: "Street Furniture",
      layer_type: "Display",
      layerid: "5",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/5",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "8",
      name: "Structure",
      title: "Structure",
      layer_type: "Display",
      layerid: "7",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/7",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "9",
      name: "Fences",
      title: "Fences",
      layer_type: "Display",
      layerid: "8",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/8",
      popup: {
        title: "",
        content: popupContent,
      },
    },
    {
      number: "10",
      name: "Trees",
      title: "Trees",
      layer_type: "Display",
      layerid: "27",
      url: "https://utility.arcgis.com/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer/27",
      popup: {
        title: "",
        content: popupContent,
      },
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
          placeholder: "Search within Sheffield",
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

      setSelectedAddress(KDF.getVal("txt_site_name"), "show");
      $(".popup").text(KDF.getVal("txt_site_name"));
      setRequiredStateByAlias("postcode", "not required");
    }
  }
}

function mapClick(evt) {
  console.log("click", evt);
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
  setSelectedAddress("", "hide");

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
      var convertPointP4 = new proj4.Point(
        selectedLocation.x,
        selectedLocation.y
      );
      var convertPoint4326 = new proj4.Point(
        selectedLocation.x,
        selectedLocation.y
      );

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
        $("#map_container").addClass("map_container_error");
        if ($("#map_error").length == "0") {
          $("#dform_widget_html_ahtm_map_container").prepend(
            '<div id="map_error" class="dform_validationMessage" style="display: block;">Select a location inside Sheffield area</div>'
          );
        }
        KDF.setVal(
          "ahtm_map_location_error",
          "Select a location inside the Sheffield area"
        );
        KDF.showWidget("ahtm_map_location_error");
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
        $("#map_error").remove();
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

        $("#map_container").removeClass("map_container_error");
        if (graphic[0].layer.id === "scc_boundary") {
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
        } else {
          streetMapPositionLayer.removeAll();
          var layerAttributes;
          var layerName;
          graphic.forEach(function (arrayItem) {
            if (arrayItem.layer.id !== "scc_boundary") {
              layerAttributes = arrayItem.graphic.attributes;
              layerName = arrayItem.layer.id.toString();
            }
          });

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
          setSelectedAddress(
            store_layer_attr.background_attribute.sitename,
            "show"
          );
          $(".popup").text(store_layer_attr.background_attribute.sitename);
          setRequiredStateByAlias("postcode", "not required");
          return;
        } else {
          setSelectedAddress("", "hide");
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
      setSelectedAddress(parseFeature["streetname"], "show");
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
      setSelectedAddress(fullAddress, "show");
      $(".popup").text(streetName);
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
    // remove txt_selected_x
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

    setSelectedAddress(response.data.address, "show");
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

// --- UPDATE LABEL TEXT ---------------------------------------------------- \\

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
    "dform_widget_type_time",
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
