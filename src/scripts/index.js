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
  console.group(event.type ? event.type : 'event');
  console.log('event', event);
  console.log('kdf', kdf);
  args.forEach((arg, index) => {
    console.log(`arg${index + 1}`, arg);
  });
  console.groupEnd();
}

// --- GLOBAL CONSTA AND VARIABLES ----------------------------------------- \\

let customerSetState = false;

let pageName = '';

const defaultDateMessage = "Enter the date in the correct format";

const dateMessages = {};

// --- HANDLE INITIALISING EVENT ------------------------------------------- \\
function handleInitialisingEvent(addDateMessages) {

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
      favicon.href = "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
    } else {
      // If favicon element doesn't exist, create it and append to head
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
      document.head.appendChild(newFavicon);
    }
  })();

  if (KDF.kdf().access === 'citizen') {
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

    // --- ADD FORM TITLE -------------------------------------------------- \\
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

  // --- ADD CUSTOM DATE MASSAGES ------------------------------------------ \\

  if (addDateMessages) {
    Object.assign(dateMessages, addDateMessages);
  }
}

// --- HANDLE ON READY EVENT ----------------------------------------------- \\

function handleOnReadyEvent(event, kdf) {

  customerSetState = kdf.customerset;

  // --- APPLY INTERNAL SYLE CHANGES --------------------------------------- \\

  if (KDF.kdf().access === 'agent') {
    const root = document.documentElement;

    root.style.setProperty('--color-background', '#eeeeee');
    root.style.setProperty('--color-empty-pb', '#e0e0e0');
    root.style.setProperty('--color-primary', '#007aff');

    $("form.dform").css({
      "margin": "0 auto",
      "min-height": "88vh"
    });
  }

  // --- HANDLE LOAD COMPLETED FORM ---------------------------------------- \\

  if (kdf.form.caseid) {
    KDF.gotoPage('page_review');
    $(".review-page-edit-button").remove();
    $('.dform_section_box_review div[data-type="buttonset"]').remove();
  }

  // --- HANDLE ACCORDION -------------------------------------------------- \\

  addPrivacyNoticeAccordionFuntionality();

  // --- HANDLE FORMAT TITLE CASE ------------------------------------------ \\

  $(".format-title-case").change(event => {
    $(`#${event.target.id}`).val(formatTitleCase(event.target.value));
  });

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

  $(`.date-field`).find('.dform_validationMessage').hide();

  $(`.date-dd`)
    .on("input focusout", function (e) {
      const parentId = $(this).attr('id').replace("_num_", "_date_").slice(0, -3);
      if (e.type === "input") {
        inputDate(this.id, `${this.id.slice(0, -2)}mm`, e.which);
        return;
      }
      if (this.value) $(this).val($(this).val().padStart(2, "0"));
      handleDateValidation(parentId);
    });

  $(`.date-mm`)
    .on("input focusout", function (e) {
      const parentId = $(this).attr('id').replace("_num_", "_date_").slice(0, -3);
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val();
      const yy = $(`#${this.id.slice(0, -2)}yy`).val();
      if (e.type === "input") {
        inputDate(this.id, `${this.id.slice(0, -2)}yy`, e.which);
        return;
      }
      if (this.value) {
        $(this).val($(this).val().padStart(2, "0"));
        return;
      }
      if (dd === "") $(`#${this.id.slice(0, -2)}dd`).addClass("dform_fielderror");
      if (yy === "") $(`#${this.id.slice(0, -2)}yy`).addClass("dform_fielderror");
      $(`#${parentId}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .show();
      handleDateValidation(parentId);
    });

  $(`.date-yy`)
    .attr("min", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() : new Date().getFullYear() - 120;
    })
    .attr("max", function () {
      const hasFutureClass = $(this).closest('.date-field').hasClass('future');
      return hasFutureClass ? new Date().getFullYear() + 5 : new Date().getFullYear();
    })
    .on("input focusout", function (e) {
      const parentId = $(this).attr('id').replace("_num_", "_date_").slice(0, -3);
      const dateMessage = dateMessages[parentId] || defaultDateMessage;
      const dd = $(`#${this.id.slice(0, -2)}dd`).val() !== "" ? true : false;
      const mm = $(`#${this.id.slice(0, -2)}mm`).val() !== "" ? true : false;
      $(`#${parentId}`)
        .find(".dform_validationMessage")
        .text(dateMessage)
        .hide();
      if (e.type === "input") inputDate(this.id, null, e.which);
      handleDateValidation(parentId);
    });

}

// --- HANDLE ON PAGE CHANGE EVENT ----------------------------------------- \\

function handlePageChangeEvent(event, kdf, currentpageid, targetpageid) {
  KDF.hideMessages();

  // Get the name for the current page
  $(`div[data-type="page"][data-pos="${currentpageid}"]`).each(function () {
    pageName = this.id.slice(11);
    console.log('currentpageid', currentpageid);
  });

  // Get the name for the current page
  $(`div[data-type="page"][data-pos="${targetpageid}"]`).each(function () {
    pageName = this.id.slice(11);
    console.log('targetpageid', targetpageid);
  });

  checkPageProgress();

  updateProgressBar(targetpageid);

  if (pageName === 'page_about_you') {
    if (kdf.access === 'agent' && kdf.customerset === 'agent_false') {
      KDF.sendDesktopAction('raised_by');
    }
  }

  getAndSetReviewPageData();

}

// --- HANDLE ON FIELD CHANGE EVENT ---------------------------------------- \\

function handleFieldChangeEvent(event, kdf, field) {

  checkPageProgress();

  // --- HANDLE FORMAT REMOVE ECCESS WHITE SPACES -------------------------- \\

  if (
    field.type === 'text'
    || field.type === 'number'
    || field.type === 'email'
    || field.type === 'tel'
    || field.type === 'textarea'
  ) {
    $(`#${field.id}`).val(formatRemoveEccessWhiteSpace(KDF.getVal(field.name)));
  }
}

// --- HANDLE ON OPTION SELECTED EVENT ------------------------------------ \\

function handleOptionSelectedEvent(event, kdf, field, label, val) {

  checkPageProgress();

  // --- HANDLE SET MULTI CHECK VALUE TO TEXT FIELD ------------------------ \\

  if (field.startsWith('mchk_')) {
    const mchkField = field.replace('[]', '');
    const textField = mchkField.replace('mchk_', 'txt_');
    const stringValue = KDF.getVal(mchkField).toString().replace(/,/gi, ', ');
    KDF.setVal(textField, stringValue);
  }
}

// --- HANDLE ON MAP READY EVENT ------------------------------------------ \\

function handleMapReadyEvent(event, kdf, type, name, map, positionLayer, markerLayer, marker, projection) {
  logArguments(event, kdf, type, name, map, positionLayer, markerLayer, marker, projection);
}

// --- HANDLE ON MAP CLICK EVENT ------------------------------------------ \\

function handleMapClickEvent(event, kdf, type, name, map, positionLayer, markerLayer, marker, lat, lon, plat, plon) {
  logArguments(event, kdf, type, name, map, positionLayer, markerLayer, marker, lat, lon, plat, plon);
}

// --- HANDLE ON OBJECT EVENT --------------------------------------------- \\

function handleObjectIdSet(event, kdf, type, id) {

  KDF.setVal('le_reporter_obj_type', type);
  KDF.setVal('le_reporter_obj_id', id);

  // Update customer set state
  customerSetState = 'agent_true';

  // Hide submit anonymously option and info
  $('.anonymous').hide();

}

function handleObjectIdLoaded(event, kdf, response, type, id) {

  // Set date to input fields and trigger change
  const date = new Date(response['profile-DateOfBirth']);
  $('#dform_widget_num_date_of_birth_about_you_dd').val(date.getDate()).blur().prop('readolny');
  $('#dform_widget_num_date_of_birth_about_you_mm').val(date.getMonth() + 1).blur();
  $('#dform_widget_num_date_of_birth_about_you_yy').val(date.getFullYear()).blur();

  // 
  KDF.hideSection('area_address_lookup_about_you');

  // Set and show address
  setSelectedAddress(response['profile-Address'], 'show');

  if (pageName === 'page_about_you') {
    KDF.gotoNextPage();
  }

}

// --- HANDLE ON SUCCESSFUL ACTION EVENT ---------------------------------- \\

function handleSuccessfulAction(event, kdf, response, action, actionedby) {

  // Check if the action is to check the map status
  if (action === 'check-map-status') {
    // Spread the data object
    const { isMapAvailable } = response.data;

    // Select all elements with the class "map-icon"
    const mapIcon = $(".map-icon");

    // Check if the response data indicates unavailable maps
    if (isMapAvailable === 'false') {
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
    }
  }

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
    const { property, streetName, city, postcode, fullAddress } = response.data;
    showHideInputFields([
      { alias: "searchResult", display: false },
    ]);
    setValuesToInputFields([
      { alias: "property", value: property },
      { alias: "streetName", value: streetName },
      { alias: "city", value: city },
      { alias: "postCode", value: postcode },
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
  KDF.hideMessages();

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
  KDF.hideMessages();

}

// --- HANDLE ON FAILED SAVE EVENT ---------------------------------------- \\

function handleFailedSave(event, kdf) {
  KDF.hideMessages();

}

// --- HANDLE ON COMPLETE EVENT ------------------------------------------- \\

function handleFomComplate(event, kdf) {
  KDF.hideMessages();

  $("#dform_progressbar_sheffield, #dform_ref_display").hide();

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
    #${currentPageId} input:not(.dform_hidden input):not([disabled]), :not([type='radio']), :not([type='checkbox'])
    #${currentPageId} select:not(.dform_hidden select):not([disabled]),
    #${currentPageId} textarea:not(.dform_hidden textarea):not([disabled]),
    #${currentPageId} select[required]:not([disabled])
 `);

  // Use to check if any required field is empty
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

function handleDateValidation(parentId) {
  const dd = $(`#${parentId.replace("_date_", "_num_")}_dd`).val();
  const mm = $(`#${parentId.replace("_date_", "_num_")}_mm`).val();
  const yy = $(`#${parentId.replace("_date_", "_num_")}_yy`).val();
  checkDate(parentId, dd, mm, yy);
  checkMaxDay(parentId, dd, mm, yy);
}

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
  $(`#${id.replace("_date_", "_txt_")}`).val("");
  $(`#${id.replace("_date_", "_dt_")}`).val("");
  $(`#${id}`)
    .find(".dform_validationMessage")
    .text(dateMessage)
    .hide();

  if (!dd && mm && yy) {
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day")
      .show();
  }
  if (dd && !mm && yy) {
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a month")
      .show();
  }
  if (dd && mm && !yy) {
    $(`#${id} .date-yy`).removeClass("dform_fielderror");
  }
  if (!dd && !mm && yy) {
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day and month")
      .show();
  }
  if (!dd && mm && !yy) {
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text("Date must include a day and year")
      .show();
  }
  if (dd && !mm && !yy) {
    $(`#${id} .date-mm`).removeClass("dform_fielderror");
    $(`#${id} .date-yy`).removeClass("dform_fielderror");
  }
  if (!dd && !mm && !yy) {
    $(`#${id}`)
      .find(".dform_validationMessage")
      .text(dateMessage)
      .show();
  }
  if (dd && mm && yy) {
    if (validDate(id, dd, mm, yy)) {
      const date = `${yy.substr(0, 4)}-${mm.toString().padStart(2, '0')}-${dd.toString().padStart(2, '0')}`;
      const localFormat = new Date(date).toLocaleDateString('en-GB');
      $(`#${id.replace("_date_", "_txt_")}`).val(localFormat);
      $(`#${id.replace("_date_", "_dt_")}`).val(date);
    } else {
      $(`#${id}`)
        .parents(`#${id}`)
        .find(".dform_validationMessage")
        .text(defaultDateMessage)
        .show()
        .css({ display: "block" });
    }
  } else {
    $(`#${id}`)
      .parents(`#${id}`)
      .find(".dform_validationMessage")
      .text(defaultDateMessage)
      .show()
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
      $(`#${nextID}`).focus();
    } else {
      $(`#${id}`).blur();
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
  const now = new Date().setHours(0, 0, 0, 0);

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
    const childDiv = parentDiv.querySelector("div");

    if (parentDiv && childDiv && pageHolderDiv) {
      // Get all pages
      const pages = pageHolderDiv.querySelectorAll('.dform_page');

      // Count visible pages
      const visiblePages = Array.from(pages).filter(page => !page.classList.contains('dform_hidden')).length;

      // Check if the last visible page is the last page in the array
      const lastVisiblePage = visiblePages[visiblePages.length - 1];
      const isLastVisiblePage = lastVisiblePage === visiblePages[visiblePages.length - 1];

      // Calculate percentage
      let percentage = 0;
      if (isLastVisiblePage) {
        percentage = Math.round(((currentPageIndex - 1) / visiblePages) * 100);
      } else {
        percentage = Math.round((currentPageIndex / visiblePages) * 100);
      }

      // Set width, text content, colour
      if (percentage === 0) {
        childDiv.style.width = `max-content`;
        childDiv.style.color = "var(--color-black)";
        childDiv.style.background = "var(--color-empty-pb)";
      } else {
        childDiv.style.width = `${percentage}%`;
        childDiv.style.color = "var(--color-white)";
        childDiv.style.background = "var(--color-primary)";
      }
      childDiv.textContent = `${percentage}%`;
    }
  }
};

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

// Initialize an array to store the user's form page history
const formUserPath = [];

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

  if (reviewPageIsVisible) {
    // Clear the review content HTML
    $("#review-page-content-container").html("");

    // Reverse the user's path to look back at the visited pages
    const formUserPathReversed = [...formUserPath].reverse();
    const relevantPagesReversed = [];

    // Determine relevant pages by looking back from the review page
    for (let i = 0; i < formUserPathReversed.length - 1; i++) {
      if (parseInt(formUserPathReversed[i]) > parseInt(formUserPathReversed[i + 1])) {
        relevantPagesReversed.push(formUserPathReversed[i + 1]);
      } else {
        formUserPathReversed.splice(i + 1, 1);
        i--;
      }
    }

    // Reverse the relevant pages to the correct order
    let relevantPages = [];
    if (KDF.getVal('txt_pages')) {
      relevantPages = KDF.getVal('txt_pages').split(",");
    } else {
      relevantPages = [...relevantPagesReversed].reverse();
      KDF.setVal('txt_pages', relevantPages.join(','));
    }

    // Find all form pages except the review page
    const formPages = $('.dform_page[data-active="true"]').not("#dform_page_page_review");

    formPages.each(function (i) {
      // Get the page number of the current form page
      const pageNumber = $(this).attr("data-pos");

      // Check if the page is relevant and should be added to the review page
      if (relevantPages.indexOf(pageNumber) > -1) {
        // Extract the page name from the element's ID
        const pageId = $(formPages[i]).attr("id");
        const pageName = pageId.split("dform_page_")[1];
        const contentDivId = "review-page-content--" + pageName;

        // Create a container for the review page content
        $("#review-page-content-container").append(
          `<div class="review-page-content-section" id="${contentDivId}"></div>`
        );

        // Create a button to allow editing of the page
        const buttonHtml = `<button class="review-page-edit-button">Edit</button>`;
        const contentDiv = $("#" + contentDivId);
        contentDiv.append(buttonHtml);

        // Attach a click event handler to the button
        const button = contentDiv.find('.review-page-edit-button');
        button.on('click', function () {
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

          if (fieldClass.indexOf('address-search') !== -1) {
            fieldLabel = 'Address';
            fieldValue = getValueFromAlias(pageId, 'fullAddress');
            return;
          }

          function getLegendText(classSelector) {
            const parentElement = $(`.container[data-name="${fieldName}"]`).length
              ? $(`.container[data-name="${fieldName}"]`)
              : $(`.container.dform_widget_${fieldName}`);

            if (parentElement.length) {
              return parentElement.find(`.${classSelector} legend`).text();
            }
          }

          if (fieldType === "radio") {
            fieldLabel = getLegendText('radiogroup');
            fieldValue = KDF.getVal(fieldName);
          } else if (fieldType === "multicheckbox") {
            fieldLabel = getLegendText('checkboxgroup');
            fieldValue = KDF.getVal(fieldName);
          } else {
            fieldLabel = $(`#dform_widget_label_${fieldName}`).text();
            fieldValue = KDF.getVal(fieldName);
          }

          // Check if the field has a label
          if (fieldLabel) {
            // Set a default value for optional fields that are visible but not answered
            if (fieldValue === "") {
              fieldValue = "Not answered";
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

// --- FORMATING FUNCTIONS -------------------------------------------------- \\

// --- FORMATING TO TITLE CASE ---------------------------------------------- \\

function formatTitleCase(value) {
  const string = value.toLowerCase();
  const formatedString = string.replace(/\b\w/g, (match) => match.toUpperCase());
  return formatedString;
}

// --- FORMATING REMOVE ECCESS WHITE SPACES --------------------------------- \\

function formatRemoveEccessWhiteSpace(value) {
  const formattedString = value.replace(/\s+/g, ' ').trim();
  return formattedString;
}



