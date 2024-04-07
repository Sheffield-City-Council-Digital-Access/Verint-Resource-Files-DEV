// import './components/tabIconAndTitle.js';
// import './components/formHeader.js';
// import './components/formTitle.js';
// import './components/formFooter.js';

// import { handleOnReadyEvent } from './eventListeners/formReady.js';
// import { handlePageChangeEvent } from './eventListeners/pageChange.js';
// import { handleFieldChangeEvent } from './eventListeners/fieldChange.js';
// import { } from './eventListeners/optionSelected.js';
// import { } from './eventListeners/mapReady.js';
// import { } from './eventListeners/mapClicked.js';
// import { handleSuccessfulAction } from './eventListeners/actionSuccessful.js';
// import { handleFailedAction } from './eventListeners/actionFailed.js';
// import { handleObjectIdSet } from './eventListeners/objectIdSet.js';
// import { } from './eventListeners/saveSuccessful.js';
// import { } from './eventListeners/saveFailed.js';
// import { } from './eventListeners/formComplete.js';

function logArguments(event, kdf, ...args) {
  console.group(event.type);
  console.log('event', event);
  console.log('kdf', kdf);
  args.forEach((arg, index) => {
    console.log(`arg${index + 1}`, arg);
  });
  console.groupEnd();
}

// --- HANDLE INITIALISING EVENT ------------------------------------------- \\
function handleInitialisingEvent() {
  // Update the browser tab title and icon
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
      favicon.href = "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
    } else {
      // If favicon element doesn't exist, create it and append to head
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
      document.head.appendChild(newFavicon);
    }
  })();

  // Create and inject a header to the form
  (() => {
    if (KDF.kdf().access === 'citizen') {
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
    }
  })();

  // Create and inject a title to the form
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

  // Create and inject a footer to the form
  (() => {
    if (KDF.kdf().access === 'citizen') {
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
    }
  })();
}

// --- HANDLE ON READY EVENT ----------------------------------------------- \\

function handleOnReadyEvent(event, kdf) {
  logArguments(event, kdf);

  addPrivacyNoticeAccordionFuntionality();

  // --- HANDLE ADDRESS LOOKUP --------------------------------------------- \\

  $('.search-results').on('change', event => {
    KDF.customdata('retrieve-property', event.target.id, true, true, { propertyId: event.target.value });
  });

  $('.address-details').on('click', event => {
    resetAddressSearch(false);
    showAddressFields();
  });

  // --- HANDLE VEHICLE LOOKUP --------------------------------------------- \\

  $('.vehicle-details').on('click', event => {
    resetVehicleSearch(false);
    showVehicleFields();
  });

  // --- HANDLE CUSTOM DATE ------------------------------------------------ \\

  $(`.date-field .date-dd`)
    .on("keyup focusout", function (e) {
      if (e.type === "keyup") {
        inputDate(this.id, `${this.id.slice(0, -2)}mm`, e.which);
        return;
      }
      if (this.value) $(this).val($(this).val().padStart(2, "0"));
    });

  $(`.date-field .date-mm`)
    .on("keyup focusout", function (e) {
      const parentId = $(this).parent().attr("id");
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val();
      const yy = $(`#${this.id.slice(0, -2)}yy`).val();
      if (e.type === "keyup") {
        inputDate(this.id, `${this.id.slice(0, -2)}yy`, e.which);
        return;
      }
      if (this.value) {
        $(this).val($(this).val().padStart(2, "0"));
        return;
      }
      if (dd === "") $(`#${this.id.slice(0, -2)}dd`).addClass("dform_fielderror");
      if (yy === "") $(`#${this.id.slice(0, -2)}yy`).addClass("dform_fielderror");
      $(`#${this.id.replace("num_", "").slice(0, -3)}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .show();
    });

  $(`.date-field .date-yy`)
    .attr("min", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() : new Date().getFullYear() - 120;
    })
    .attr("max", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() + 5 : new Date().getFullYear();
    })
    .on("keyup focusout", function (e) {
      const parentId = $(this).parent().attr("id");
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val() !== "" ? true : false;
      const mm = $(`#${this.id.slice(0, -2)}mm`).val() !== "" ? true : false;
      $(`${this.id.slice(0, -3)}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .hide();
      if (e.type === "keyup") inputDate(this.id, "", e.which);
    });

  $(`.date-field`).on("change focusout", function () {
    const dd = $(`#${this.id} .date-dd`).val();
    const mm = $(`#${this.id} .date-mm`).val();
    const yy = $(`#${this.id} .date-yy`).val();
    checkDate(this.id, dd, mm, yy);
    checkMaxDay(this.id, dd, mm, yy);
  });

}

// --- HANDLE ON PAGE CHANGE EVENT ----------------------------------------- \\

function handlePageChangeEvent(event, kdf, currentpageid, targetpageid) {
  logArguments(event, kdf, currentpageid, targetpageid);

  checkPageProgress();

  setTimeout(function () {
    updateProgressBar(targetpageid);
  }, 10);
}

// --- HANDLE ON FIELD CHANGE EVENT ---------------------------------------- \\

function handleFieldChangeEvent(event, kdf, field) {
  logArguments(event, kdf, field);
  checkPageProgress();
}

// --- HANDLE ON OPTION SELECTED EVENT ------------------------------------ \\

function handleOptionSelectedEvent(event, kdf, field, label, val) {
  logArguments(event, kdf, field, label, val);
}

// --- HANDLE ON MAP READY EVENT ------------------------------------------ \\

function handleMapReadyEvent(event, kdf, type, name, map, positionLayer, markerLayer, marker, projection) {
  logArguments(event, kdf, type, name, map, positionLayer, markerLayer, marker, projection);
}

// --- HANDLE ON MAP CLICK EVENT ------------------------------------------ \\

function handleMapClickEvent(event, kdf, type, name, map, positionLayer, markerLayer, marker, lat, lon, plat, plon) {
  logArguments(event, kdf, type, name, map, positionLayer, markerLayer, marker, lat, lon, plat, plon);
}

// --- HANDLE ON OBJECT SET EVENT ----------------------------------------- \\

function handleObjectIdSet(event, kdf, type, id) {
  logArguments(event, kdf, type, id);
  KDF.setVal('num_customer_id', id);
}

// --- HANDLE ON SUCCESSFUL ACTION EVENT ---------------------------------- \\

function handleSuccessfulAction(event, kdf, response, action, actionedby) {
  logArguments(event, kdf, response, action, actionedby);
  if (action === 'set-raised-by') {
    const { customerid } = response.data;
    if (!customerid) {
      KDF.showError('Customer ID Not Set');
      return;
    }
    KDF.setCustomerID(customerid, false, KDF.gotoNextPage()); // < don't think this works for citizen access
    // KDF.setVal('num_customer_id', customerid);
    // KDF.gotoNextPage();
  }

  if (action === 'search-property') {
    const { propertySearchResult } = response.data;
    if (propertySearchResult.length > 0) {
      setValuesToInputFields([
        { alias: "searchResult", value: propertySearchResult },
      ]);
      showHideInputFields([
        { alias: "searchResult", display: true },
      ]);
    } else {
      showAddressFields();
    }
  }

  if (action === 'retrieve-property') {
    const { property, streetName, city, postCode, fullAddress } = response.data;
    showHideInputFields([
      { alias: "searchResult", display: false },
    ]);
    setValuesToInputFields([
      { alias: "property", value: property },
      { alias: "streetName", value: streetName },
      { alias: "city", value: city },
      { alias: "postCode", value: postCode },
      { alias: "fullAddress", value: fullAddress },
    ]);
    setSelectedAddress(fullAddress, 'show');
  }

  if (action === 'retrieve-vehicle-details') {
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
      yearOfManufacture
    } = response.data;
    setValuesToInputFields([
      { alias: "co2Emissions", value: co2Emissions },
      { alias: "colour", value: colour },
      { alias: "dateOfLastV5CIssued", value: dateOfLastV5CIssued },
      { alias: "engineCapacity", value: engineCapacity },
      { alias: "fuelType", value: fuelType },
      { alias: "make", value: make },
      { alias: "markedForExport", value: markedForExport },
      { alias: "model", value: '' },
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
}

// --- HANDLE ON FAILED ACTION EVENT -------------------------------------- \\

function handleFailedAction(event, action, xhr, settings, thrownError) {
  logArguments(event, action, xhr, settings, thrownError);
  // KDF.hideMessages();

  if (action === 'retrieve-vehicle-details') {
    resetVehicleSearch(false);
    showVehicleFields();
  } else {
    // temp
    KDF.showError(`${action} failed: ${thrownError}`);
  }
}

// --- HANDLE ON SUCCESSFUL SAVE EVENT ------------------------------------ \\

function handleFormSave(event, kdf) {
  logArguments(event, kdf);
  KDF.setVal('num_case_reference', kdf.form.caseid);
  KDF.setVal('txt_form_reference', kdf.form.ref);
  KDF.markComplete();

}

// --- HANDLE ON FAILED SAVE EVENT ---------------------------------------- \\

function handleFailedSave(event, kdf) {
  logArguments(event, kdf);

}

// --- HANDLE ON COMPLETE EVENT ------------------------------------------- \\

function handleFomComplate(event, kdf) {
  logArguments(event, kdf);

}

// --- GET CURRENT PAGE ----------------------------------------------------- \\

// Function to get the current page ID
const getCurrentPageId = () => {
  return document.querySelector('[data-type="page"]:not([style*="display: none"])').id;
};

// --- DISABLE BUTTONS ------------------------------------------------------ \\

// Function to check page progress
const checkPageProgress = () => {
  const currentPageId = getCurrentPageId(); // Get the current page ID
  let allFieldsCompleted = true;
  let hasVisibleRequiredField = false;

  // Get all visible inputs, selects, and textareas on the current page, including those with the required attribute
  const visibleFields = document.querySelectorAll(`
    #${currentPageId} input:not(.dform_hidden input):not([disabled]),
    #${currentPageId} select:not(.dform_hidden select):not([disabled]),
    #${currentPageId} textarea:not(.dform_hidden textarea):not([disabled]),
    #${currentPageId} select[required]:not([disabled])
  `);

  // Use map to check if any required field is empty
  const fieldChecks = Array.from(visibleFields).map(field => {
    if (field.tagName.toLowerCase() === 'select') {
      // If the field is a select element
      if (field.selectedIndex === -1) {
        // If no option is selected
        if (field.hasAttribute('required')) {
          allFieldsCompleted = false;
          hasVisibleRequiredField = true;
          return false;
        }
      } else {
        // If an option is selected
        const selectedOption = field.options[field.selectedIndex];
        if (selectedOption.disabled || selectedOption.value === '') {
          allFieldsCompleted = false;
          hasVisibleRequiredField = true;
          return false;
        }
      }
    } else {
      // For other field types, check if the value is empty
      if ((field.hasAttribute('required') || field.parentNode.hasAttribute('required')) && !field.value.trim()) {
        allFieldsCompleted = false;
        hasVisibleRequiredField = true;
        return false;
      }
    }
    return true;
  });

  // If any of the field checks returned false, set allFieldsCompleted to false
  if (fieldChecks.includes(false)) {
    allFieldsCompleted = false;
  }

  // Disable next and move buttons if there's a visible required field on the page
  const nextAndMoveButtons = document.querySelectorAll(`#${currentPageId} button[data-type="next"], #${currentPageId} button[data-type="move"]`);
  nextAndMoveButtons.forEach(button => {
    if (hasVisibleRequiredField) {
      button.disabled = true;
      button.setAttribute('disabled', 'disabled');
      button.classList.add('disabled');
    } else {
      button.disabled = false;
      button.removeAttribute('disabled');
      button.classList.remove('disabled');
    }
  });
};

// --- SET VALUE TO FIELD ON CURRENT PAGE ----------------------------------- \\

// Function to set value to fields based on data-customalias attributes of inputs on the current page
const setValuesToInputFields = (aliasesAndValues) => {
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
};

// --- SHOW / HIDE FIELD ON CURRENT PAGE ------------------------------------ \\

// Function to show or hide select fields based on data-customalias attributes of selects on the current page
const showHideInputFields = (aliasesAndDisplay) => {

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
};

// --- SET SELECTED ADDRESS ------------------------------------------------- \\

// Function to update the output on the current page
const setSelectedAddress = (selectedAddress, action) => {
  const currentPageId = getCurrentPageId(); // Get the current page ID

  // Get the selected-address-container element on the current page
  const addressContainer = document.querySelector(`#${currentPageId} .selected-address-container`);

  // Obtain the data-name attribute of the addressContainer
  const name = addressContainer.getAttribute('data-name');

  // Get the output element within the selected-address-container
  const outputElement = addressContainer.querySelector('.selected-address');
  console.log(outputElement);
  // Set the selected address as the content of the output element
  outputElement.textContent = selectedAddress;

  // Show or hides the data-name attribute of the addressContainer
  if (action) {
    KDF.showWidget(name);
  } else {
    KDF.hideWidget(name);
  }
};

// --- RESER ADDRESS FIELDS ------------------------------------------------- \\

const resetAddressSearch = (hideFields = true) => {
  setValuesToInputFields([
    { alias: "searchResult", value: '' },
    { alias: "property", value: '' },
    { alias: "streetName", value: '' },
    { alias: "city", value: '' },
    { alias: "postCode", value: '' },
    { alias: "fullAddress", value: '' },
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
  setSelectedAddress('', false);
};

// --- SHOW ADDRESS FIELDS ------------------------------------------------- \\

const showAddressFields = () => {
  showHideInputFields([
    { alias: "searchResult", display: false },
    { alias: "property", display: true },
    { alias: "streetName", display: true },
    { alias: "city", display: true },
    { alias: "postCode", display: true },
  ]);
}

// --- RESER VEHICLE FIELDS ------------------------------------------------- \\

const resetVehicleSearch = (hideFields = true) => {
  setValuesToInputFields([
    { alias: "co2Emissions", value: '' },
    { alias: "colour", value: '' },
    { alias: "dateOfLastV5CIssued", value: '' },
    { alias: "engineCapacity", value: '' },
    { alias: "fuelType", value: '' },
    { alias: "make", value: '' },
    { alias: "markedForExport", value: '' },
    { alias: "model", value: '' },
    { alias: "monthOfFirstRegistration", value: '' },
    { alias: "motExpiryDate", value: '' },
    { alias: "motStatus", value: '' },
    { alias: "registrationNumber", value: '' },
    { alias: "taxDueDate", value: '' },
    { alias: "taxStatus", value: '' },
    { alias: "typeApproval", value: '' },
    { alias: "wheelplan", value: '' },
    { alias: "yearOfManufacture", value: '' },
  ]);
  if (hideFields) {
    showHideInputFields([
      { alias: "registrationNumber", display: false },
      { alias: "make", display: false },
      { alias: "model", display: false },
      { alias: "colour", display: false },
    ]);
  }
};

// --- SHOW VEHICLE FIELDS ------------------------------------------------- \\

const showVehicleFields = () => {
  showHideInputFields([
    { alias: "registrationNumber", display: true },
    { alias: "make", display: true },
    { alias: "model", display: true },
    { alias: "colour", display: true },
  ]);
}

// --- CUSTOM DATE FUNCTIONS ------------------------------------------------ \\

function checkMaxDay(id, dd, mm, yy) {
  const ddMax = new Date(yy, mm, 0).getDate();
  $(`#${id} .date-dd`).attr("max", ddMax);
  if (dd > ddMax) {
    $(`#${id} .date-dd`).addClass("dform_fielderror");
  } else if (dd !== "") {
    $(`#${id} .date-dd`).removeClass("dform_fielderror");
  }
}

function checkDate(id, dd, mm, yy) {
  if (!dd) $(`#${id} .date-dd`).addClass("dform_fielderror");
  if (!mm) $(`#${id} .date-mm`).addClass("dform_fielderror");
  if (!yy) $(`#${id} .date-yy`).addClass("dform_fielderror");

  const dateMessage = dateMessages[id] || defaultDateMessage;
  $(`#${id}`)
    .find(".dform_validationMessage")
    .text(dateMessage)
    .hide();

  if (!dd && mm && yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day")
      .show();
  if (dd && !mm && yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a month")
      .show();
  if (dd && mm && !yy)
    $(`#${id} .date-yy`).removeClass("dform_fielderror");
  if (!dd && !mm && yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day and month")
      .show();
  if (!dd && mm && !yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day and year")
      .show();
  if (dd && !mm && !yy) {
    $(`#${id} .date-mm`).removeClass("dform_fielderror");
    $(`#${id} .date-yy`).removeClass("dform_fielderror");
  }
  if (!dd && !mm && !yy)
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text(dateMessage)
      .show();

  if (dd && mm && yy) {
    if (validDate(id, dd, mm, yy)) {
      const formattedDate = `${dd.toString().padStart(2, '0')}/${mm.toString().padStart(2, '0')}/${yy.substr(0, 4)}`;
      if (id === "dform_widget_date_field") {
        $("#dform_widget_txt_dob, #dform_widget_dt_dob").val(formattedDate);
      } else if (id === "dform_widget_date_field_another") {
        $("#dform_widget_txt_dob_another, #dform_widget_dt_dob_another").val(formattedDate);
      } else {
        $(`#${id.replace("date_", "dt_")}`).val(formattedDate);
      }
    } else {
      $(`#${id}`)
        .parents(`#${id}`)
        .find(".dform_validationMessage")
        .css({ display: "block" });
    }
  } else {
    $(`#${id}`)
      .parents(`#${id}`)
      .find(".dform_validationMessage")
      .css({ display: "block" });
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
    if (nextID) {
      $(`#${id}`).blur().parent().next().children(`#${nextID}`).focus();
    } else {
      $(`#${id}`).blur().parent().next().focus();
    }
  }
}

function validDate(id, day, month, year) {
  const dateMessage = dateMessages[id] || defaultDateMessage;
  const validationMsg = $(`#${id}`)
    .find(".dform_validationMessage")
    .text(dateMessage)
    .hide();
  const date = new Date(year, month - 1, day);
  const now = new Date();

  const dobField = $(`#${id}`).hasClass("dob") ? true : false;

  if (date.getFullYear() != year ||
    date.getMonth() + 1 != month ||
    date.getDate() != day) {
    validationMsg
      .text(`${dobField
        ? "Date of birth must be a real date"
        : "Must be a real date"}`)
      .show();
    return false;
  }

  const dateRange = $(`#${id}`).hasClass("future") ? "future" : "past";

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);
  minDate.setHours(0, 0, 0, 0);

  if (dateRange === 'past') {
    if (date < minDate) {
      validationMsg.
        text("Date cannot be more that 120 years in the past")
        .show();
      return false;
    }
    if (date > now) {
      validationMsg
        .text(`${dobField
          ? "Date of birth must be today or in the past"
          : "Date must be today or in the past"}`)
        .show();
      return false;
    }
    return true;
  }

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);
  maxDate.setHours(0, 0, 0, 0);

  if (dateRange === 'future') {
    if (date > maxDate) {
      validationMsg
        .text("Date cannot be more that 5 years in the future")
        .show();
      return false;
    }
    if (date < now) {
      validationMsg
        .text("Date must be today or in the future")
        .show();
    }
    return true;
  }
}

function handleDateInput() {
  $(`.date-field .date-dd`)
    .on("keyup focusout", function (e) {
      if (e.type === "keyup") {
        inputDate(this.id, `${this.id.slice(0, -2)}mm`, e.which);
        return;
      }
      if (this.value) $(this).val($(this).val().padStart(2, "0"));
    });

  $(`.date-field .date-mm`)
    .on("keyup focusout", function (e) {
      const parentId = $(this).parent().attr("id");
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val();
      const yy = $(`#${this.id.slice(0, -2)}yy`).val();
      if (e.type === "keyup") {
        inputDate(this.id, `${this.id.slice(0, -2)}yy`, e.which);
        return;
      }
      if (this.value) {
        $(this).val($(this).val().padStart(2, "0"));
        return;
      }
      if (dd === "") $(`#${this.id.slice(0, -2)}dd`).addClass("dform_fielderror");
      if (yy === "") $(`#${this.id.slice(0, -2)}yy`).addClass("dform_fielderror");
      $(`#${this.id.replace("num_", "").slice(0, -3)}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .show();
    });

  $(`.date-field .date-yy`)
    .attr("min", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() : new Date().getFullYear() - 120;
    })
    .attr("max", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() + 5 : new Date().getFullYear();
    })
    .on("keyup focusout", function (e) {
      const parentId = $(this).parent().attr("id");
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val() !== "" ? true : false;
      const mm = $(`#${this.id.slice(0, -2)}mm`).val() !== "" ? true : false;
      $(`${this.id.slice(0, -3)}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .hide();
      if (e.type === "keyup") inputDate(this.id, "", e.which);
    });

  $(`.date-field`).on("change focusout", function () {
    const dd = $(`#${this.id} .date-dd`).val();
    const mm = $(`#${this.id} .date-mm`).val();
    const yy = $(`#${this.id} .date-yy`).val();
    checkDate(this.id, dd, mm, yy);
    checkMaxDay(this.id, dd, mm, yy);
  });
}

// --- PRIVACY NOTICE ------------------------------------------------------- \\

function addPrivacyNoticeAccordionFuntionality() {
  // Function designed for for privacy notice accordion
  if (document.getElementsByClassName("privacy-accordion")[0]) {
    const accordion = document.getElementsByClassName("privacy-accordion")[0];
    const panel = document.getElementsByClassName("privacy-panel")[0];
    accordion.addEventListener("click", function () {
      // Toggle active class
      this.classList.toggle("active");
      // Toggle show/hide
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

// --- PROGRESS BAR --------------------------------------------------------- \\

const updateProgressBar = currentPageIndex => {
  const pageHolderDiv = document.getElementById("dform_pageholder");
  const parentDiv = document.getElementById("dform_progressbar");
  const childDiv = parentDiv.querySelector("div");

  if (parentDiv && childDiv && pageHolderDiv) {
    // Get all pages
    const pages = pageHolderDiv.querySelectorAll('.dform_page');

    // Count visible pages
    const visiblePages = Array.from(pages).filter(page => !page.classList.contains('dform_hidden')).length;

    // Calculate percentage
    let percentage = 0;
    if (currentPageIndex > 1) {
      console.log("--update--percentage--", percentage);
      percentage = Math.round(((currentPageIndex - 1) / visiblePages) * 100 - ((1 / visiblePages) * 100));
    }
    console.log("--percentage--", percentage);

    // Set width, text content, colour
    if (percentage === 0) {
      childDiv.style.width = `max-content`;
      childDiv.style.color = "var(--color-black)";
      childDiv.style.background = "var(--color-grey-4)";
    } else {
      childDiv.style.width = `${percentage}%`;
      childDiv.style.color = "var(--color-white)";
      childDiv.style.background = "var(--color-primary)";
    }
    childDiv.textContent = `${percentage}%`;
  }
};