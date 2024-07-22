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

let customerState = false;

let pageName = '';

let addressSearchType = {};

const defaultDateMessage = "Enter the date in the correct format";

const dateMessages = {};

let fieldsToCheckBeforeClose = [];

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

  customerState = kdf.customerset;

  // --- REMOVE TAB INDEX FROM SELECT ELEMENTS ----------------------------- \\

  $('.remove-tab').each(function () {
    $(this).attr('tabindex', '-1');
  });

  // --- SET FORM START DATE AND TIME -------------------------------------- \\

  if (!kdf.form.ref) {
    KDF.setVal('txt_start_date_and_time', formatDateTime().utc);
  }

  // --- APPLY INTERNAL SYLE CHANGES --------------------------------------- \\

  if (KDF.kdf().access === 'agent') {
    const root = document.documentElement;

    // --- APPLY INTERNAL SYLE CHANGES ------------------------------------- \\

    root.style.setProperty('--color-background', '#eeeeee');
    root.style.setProperty('--color-empty-pb', '#e0e0e0');
    root.style.setProperty('--color-primary', '#007aff');

    $("form.dform").css({
      "margin": "0 auto",
      "min-height": "88vh"
    });

    $("#dform_page_complete").css({
      "margin-inline": "0 40%"
    });

    // --- CHECK AGENT LOCATION -------------------------------------------- \\

    if (kdf.access === 'agent' && kdf.form.name !== 'set_agent_location' && !kdf.form.caseid) {
      checkAndRefreshAgentLocation();
      // Event listener for closeModal event
      window.addEventListener('closeModal', function (event) {
        KDF.setVal('txt_agent_location', event.detail);
        const modalId = 'setAgentLocationModal';
        const modal = document.getElementById(modalId);
        if (modal) {
          destroyModal(modal);
        }
      });
    }
  }

  // --- HANDLE LOAD COMPLETED FORM ---------------------------------------- \\

  // if (kdf.form.caseid && kdf.form.ref) {
  //   KDF.showPage('page_review');
  //   KDF.gotoPage('page_review');
  if (kdf.form.complete === 'Y') {
    KDF.showPage('page_review');
    KDF.gotoPage('page_review');
    if (kdf.params.viewmode === 'r') {
      $('.review-page-edit-button').remove();
      $('.dform_section_box_review div[data-type="buttonset"]').remove();
    }
  } else {
    if (kdf.params.viewmode === 'r') {
      KDF.showPage('page_review');
      KDF.gotoPage('page_review');
      $('.review-page-edit-button').remove();
      $('.dform_section_box_review div[data-type="buttonset"]').remove();
    } else {
      $(`div[data-type="page"][data-pos="${kdf.form.currentpage}"]`).each(function () {
        console.log(kdf.form.currentpage, this.id.slice(11))
        KDF.gotoPage(this.id.slice(11));
      });
    }
  }
  //     if (kdf.form.complete === 'Y') {

  //   if (!kdf.form.name.startsWith('cm_') && !kdf.form.name.endsWith('_cm')) {
  //     $('.dform_section_box_review div[data-type="buttonset"]').hide();
  //   }
  //   KDF.customdata('retrieve-process-status', '_KDF_ready', true, true, {});
  // } else {
  //   $('.review-page-edit-button').remove();
  //   $('.dform_section_box_review div[data-type="buttonset"]').remove();
  // }

  // --- HANDLE FORMAT TITLE CASE ------------------------------------------ \\

  $('.format-title-case').on('change', event => {
    $(`#${event.target.id}`).val(formatTitleCase(event.target.value));
  });

  // --- HANDLE ADDRESS LOOKUP --------------------------------------------- \\

  $('.search-results').on('change', event => {
    if (event.target.value) {
      const action = addressSearchType[getCurrentPageId()] === 'local' ? 'retrieve-local-address' : 'retrieve-national-address';
      KDF.customdata(action, event.target.id, true, true, { propertyId: event.target.value });
    }
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

  // --- HANDLE SET REPORTER ----------------------------------------------- \\
  // erroring
  // Check if customer set state is true
  // if (KDF.kdf().customerset === 'agent_true' || KDF.kdf().customerset === 'citizen_true') {
  // property = formatTitleCase(kdf.profileData['profile-AddressNumber']);
  // streetName = formatTitleCase(kdf.profileData['profile-AddressLine1']);
  // fullAddress = `${formatTitleCase(property)} ${formatTitleCase(streetName)}, ${kdf.profileData['profile-AddressLine4']}, ${kdf.profileData['profile-Postcode']}`;
  //   handleSetReporter(new Date(kdf.profileData['profile-DateOfBirth']), fullAddress);
  // }

  // --- HANDLE CHECK AGENT SET CUSTOMER ----------------------------------- \\

  $('#dform_widget_button_but_next_about_you').on('click', () => {
    if (KDF.kdf().access === 'agent' && KDF.getVal('le_customer_set') === 'agent_false') {
      KDF.sendDesktopAction('raised_by');
    } else {
      KDF.gotoNextPage();
    }
  });

  $('#dform_widget_button_but_submit_about_you').on('click', () => {
    if (KDF.kdf().access === 'agent' && KDF.getVal('le_customer_set') === 'agent_false') {
      KDF.sendDesktopAction('raised_by');
    } else {
      KDF.gotoPage('complete', true, true, false);
    }
  });

  // --- HANDLE AONYMOUS SUBMITION ----------------------------------------- \\

  $('.anonymous-btn').on('click', () => {
    KDF.hidePage('page_about_you');

    // Clear any entered customer data
    KDF.setVal('sel_title', '');
    KDF.setVal('txt_forename', 'Remained');
    KDF.setVal('txt_surname', 'Anonymous');
    KDF.setVal('dform_widget_num_date_of_birth_about_you_dd', '');
    KDF.setVal('dform_widget_num_date_of_birth_about_you_mm', '');
    KDF.setVal('dform_widget_num_date_of_birth_about_you_yy', '');
    KDF.setVal('txt_date_of_birth_about_you', '');
    KDF.setVal('dt_date_of_birth_about_you', '');
    KDF.setVal('eml_address', '');
    KDF.setVal('tel_phone_number', '');
    KDF.setVal('txt_find_postcode_about_you', '');
    KDF.setVal('sel_search_results_about_you', '');
    KDF.setVal('txt_property_about_you', '');
    KDF.setVal('txt_street_name_about_you', '');
    KDF.setVal('txt_city_about_you', '');
    KDF.setVal('txt_postcode_about_you', '');
    KDF.setVal('txt_full_address_about_you', '');

    KDF.gotoPage('complete', true, true, false);
  });

  // --- HANDLE SAVE AND EXIT CLICK ---------------------------------------- \\

  $('.save-exit-btn').on('click', () => {
    KDF.save();
  });

  // --- HANDLE CLOSE CASE CLICK ------------------------------------------- \\

  $('.close-case-btn').on('click', () => {
    if (checkIsFormComplete(fieldsToCheckBeforeClose)) {
      KDF.gotoPage('complete', false, false, false);
    } else {
      KDF.showError('Please ensure all fields have been completed.');
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

  checkPageProgress();

  updateProgressBar(targetpageid);

  if (pageName === 'page_about_you') {
    if (kdf.access === 'agent' && customerState !== 'agent_true') {
      KDF.sendDesktopAction('raised_by');
    }
    console.log(KDF.getVal('eml_address'));
    if (!KDF.getVal('eml_address') || KDF.getVal('eml_address') === '' || KDF.getVal('eml_address') === undefined || KDF.getVal('eml_address') === null) {
      KDF.hideWidget('ahtm_confirmation_email_send');
    } else {
      KDF.showWidget('ahtm_confirmation_email_send');
    }
  }

  if (pageName === 'complete') {
    KDF.unlock();
    KDF.makeWritable();
    $("form.dform").css({
      "margin": "8px",
      "padding": "16px",
      "background": "var(--color-white)"
    });
    // if (KDF.kdf().access === 'citizen') {
    showContactTeamPanel();
    // }
    KDF.setVal('txt_finish_date_and_time', formatDateTime().utc);
  }

  getAndSetReviewPageData();

}

// --- HANDLE ON FIELD CHANGE EVENT ---------------------------------------- \\

function handleFieldChangeEvent(event, kdf, field) {

  // --- HANDLE IF NI OR NASS IS REQUIREMENT ------------------------------- \\

  if (field.name === 'txt_national_insurance') {
    if ($(`#${field.id}`).is(':valid')) {
      KDF.setWidgetNotRequired('txt_national_asylum_support');
    } else {
      KDF.setWidgetRequired('txt_national_asylum_support');
    }
  }

  if (field.name === 'txt_national_asylum_support') {
    if ($(`#${field.id}`).is(':valid')) {
      KDF.setWidgetNotRequired('txt_national_insurance');
    } else {
      KDF.setWidgetRequired('txt_national_insurance');
    }
  }

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

  KDF.setVal('txt_reporter_obj_type', type);
  KDF.setVal('num_reporter_obj_id', id);

  // Update customer set state
  customerState = 'agent_true';

  // Hide submit anonymously option and info
  $('.anonymous').hide();

}

function handleObjectIdLoaded(event, kdf, response, type, id) {

  property = formatTitleCase(response['profile-AddressNumber']);
  streetName = formatTitleCase(response['profile-AddressLine1']);
  fullAddress = `${formatTitleCase(property)} ${formatTitleCase(streetName)}, ${response['profile-AddressLine4']}, ${response['profile-Postcode']}`;
  handleSetReporter(new Date(response['profile-DateOfBirth']), fullAddress);

  // if (pageName === 'page_about_you') {
  //   KDF.gotoNextPage();
  // }

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
    KDF.setCustomerID(customerid, false, KDF.gotoNextPage());
    // KDF.setVal('num_customer_id', customerid);
    // KDF.gotoNextPage();
  }

  if (action === 'search-local-address' || action === 'search-national-address') {
    if (action === 'search-local-address') addressSearchType[getCurrentPageId()] = 'local';
    if (action === 'search-national-address') addressSearchType[getCurrentPageId()] = 'national';

    const { propertySearchResult } = response.data;
    if (propertySearchResult.length > 0) {
      const formattedSearchResult = propertySearchResult.map((addressLine) => {
        // Create a copy to avoid mutating the original object
        const newAddressLine = { ...addressLine };
        const parts = newAddressLine.label.split(",");
        newAddressLine.label = formatTitleCase(parts[0]) + "," + parts.slice(1).join(",");
        return newAddressLine;
      });
      setValuesToInputFields([
        { alias: "searchResult", value: formattedSearchResult },
      ]);
      showHideInputFields([
        { alias: "searchResult", display: true },
      ]);
    } else {
      showAddressFields();
    }
  }

  if (action === 'retrieve-local-address' || action === 'retrieve-national-address') {
    let { property, streetName, city, postcode, fullAddress, propertyId, uprn, streetId, usrn } = response.data;
    property = formatTitleCase(property);
    streetName = formatTitleCase(streetName);
    fullAddress = `${formatTitleCase(property)} ${formatTitleCase(streetName)}, ${city}, ${postcode}`;
    showHideInputFields([
      { alias: "searchResult", display: false },
    ]);
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

  if (action === 'retrieve-process-status') {
    const { caseStatus, formStatus } = response.data;
    if (formStatus === 'Y') {
      $('.review-page-edit-button').remove();
    }
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
  document.getElementById("form-title").textContent = 'Confirmation';

  setTimeout(function () {
    KDF.hideMessages();
  }, 0);

  $("#dform_progressbar_sheffield, #dform_ref_display").hide();

}

// --- GET CURRENT PAGE ----------------------------------------------------- \\

// Function to get the current page ID
const getCurrentPageId = () => {
  return document.querySelector('[data-type="page"]:not([style*="display: none"])').id;
};

// --- HANDLE SET AGENT LOCATION -------------------------------------------- \\

function checkAndRefreshAgentLocation() {
  const data = JSON.parse(localStorage.getItem('agentLocation'));
  if (data) {
    const currentTime = new Date().getTime();
    if (currentTime < data.expiry) {
      // Refresh expiry time for another hour
      data.expiry = currentTime + 25 * 60 * 1000; // 25 minutes in milliseconds
      localStorage.setItem('agentLocation', JSON.stringify(data));
    } else {
      // Data has expired
      localStorage.removeItem('agentLocation');
    }
  } else {
    checkAndDisplayModal();
  }
}

// Function to create and display the modal
function createModal() {
  // Create modal elements
  const modal = document.createElement('div');
  modal.id = 'setAgentLocationModal';
  modal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const iframe = document.createElement('iframe');
  iframe.src = 'https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/set_agent_location?channel=voice_in';
  iframe.frameBorder = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  modalContent.appendChild(iframe);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Optionally, add a close button
  const closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;';
  closeButton.onclick = function () {
    destroyModal(modal);
  };
  modalContent.appendChild(closeButton);

  // Display the modal
  modal.style.display = 'block';
}

// Function to destroy the modal
function destroyModal(modal) {
  // Remove modal from the DOM
  if (modal && modal.parentNode) {
    modal.parentNode.removeChild(modal);
  }
}

// Function to check and display modal if needed
function checkAndDisplayModal() {
  const data = JSON.parse(localStorage.getItem('agentLocation'));
  if (!data || new Date().getTime() > data.expiry) {
    // Data is not present or has expired
    createModal();
  }
}

// --- DISABLE BUTTONS ------------------------------------------------------ \\

function checkPageProgress() {
  // const requiredInputTypes = "input:required, textarea:required, select:required";
  // const currentPage = $(`#${getCurrentPageId()}`);

  // const addressField = $(`#${getCurrentPageId()}`).find(".full-address-field");
  // const AddressFieldName = addressField.length ? addressField[0].attributes[1].nodeValue : null;

  // const radiosAndCheckboxes = $(currentPage)
  //   .find("input[type='radio']:required, input[type='checkbox']:required")
  //   .filter(":visible");

  // const otherFields = $(currentPage)
  //   .find(requiredInputTypes)
  //   .not("input[type='radio'], input[type='checkbox']")
  //   .filter(":visible");

  // const allFields = [...radiosAndCheckboxes, ...otherFields];

  // // Loop through non-empty other fields and collect names
  // let isPageComplete = true;
  // for (let i = 0; i < allFields.length; i++) {
  //   const field = allFields[i];
  //   const fieldName = field.name.replace("[]", "");
  //   if (fieldName.startsWith("mchk_")) {
  //     const multiCheckbox = $(`[data-name="${fieldName}"]`);
  //     const checkboxes = multiCheckbox.find('input[type="checkbox"]');
  //     const anyCheckboxChecked = checkboxes.is(':checked');
  //     if (!anyCheckboxChecked) {
  //       isPageComplete = false;
  //     }
  //   } else {
  //     if (!KDF.getVal(fieldName)) {
  //       isPageComplete = false;
  //     }
  //   }
  // }
  // if (!KDF.getVal(AddressFieldName)) {
  //   isPageComplete = false;
  // }
  // disabledButtonToggle(isPageComplete);
}

function disabledButtonToggle(disable) {
  // Check conditions and set button disabled state
  if (disable) {
    $('.primary-btn, .anonymous-btn').removeClass('disabled').prop("disabled", false).attr("aria-disabled", "false");  // Enable buttons and remove disabled class
  } else {
    if (getCurrentPageId() !== 'dform_page_page_about_you') {
      $('.anonymous-btn').addClass('disabled').prop("disabled", true).attr("aria-disabled", "true");   // Disable buttons and add disabled class
    }
    $('.primary-btn').addClass('disabled').prop("disabled", true).attr("aria-disabled", "true");   // Disable buttons and add disabled class
  }
}

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
      const pages = pageHolderDiv.querySelectorAll('.dform_page');

      // Count visible pages
      const visiblePages = Array.from(pages).filter(page => !page.classList.contains('dform_hidden'));
      // -1 from currentPageIndex for the active page
      // -1 from visiblePages for the confirmation page
      let percentage = Math.round(((currentPageIndex - 1) / (visiblePages.length - 1)) * 100);
      // Set width, text content, colour
      if (percentage <= 0) {
        percentage = 0;
        childDiv.style.width = `max-content`;
        childDiv.style.color = "var(--color-black)";
        childDiv.style.background = "var(--color-empty-pb)";
      } else {
        childDiv.style.width = `${percentage}%`;
        childDiv.style.color = "var(--color-white)";
        childDiv.style.background = "var(--color-primary)";
      }
      childDiv.textContent = `${percentage}%`;
      childSpan.style.width = `${100 - percentage}%`;
    }
  }
};

// --- SET REPORTER --------------------------------------------------------- \\

function handleSetReporter(date, address) {
  // Set date to input fields and trigger change
  $('#dform_widget_num_date_of_birth_dd').val(date.getDate()).blur();
  $('#dform_widget_num_date_of_birth_mm').val(date.getMonth() + 1).blur();
  $('#dform_widget_num_date_of_birth_yy').val(date.getFullYear()).blur();

  // 
  KDF.hideSection('area_address_lookup_about_you');

  // Set and show address
  setSelectedAddress(address, 'show');

  // Hide submit anonymously option and info
  $('.anonymous').hide();
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

// --- CONTACT TEAM PANEL --------------------------------------------------- \\

function showContactTeamPanel() {
  const contactInfo = document.createElement('aside');
  contactInfo.classList.add('contact-information');

  const header = document.createElement('header');
  const headerTitle = document.createElement('h2');
  headerTitle.textContent = KDF.getVal('txt_contact_title');
  header.appendChild(headerTitle);

  const main = document.createElement('main');
  main.classList.add('contact-details');

  const emailIcon = document.createElement('i');
  emailIcon.classList.add('icon');
  const emailIconSpan = document.createElement('span');
  emailIconSpan.classList.add('icon-email');
  emailIcon.appendChild(emailIconSpan);

  const emailLink = document.createElement('a');
  emailLink.href = KDF.getVal('txt_contact_link');
  emailLink.textContent = 'Ask us a question';

  main.appendChild(emailIcon);
  main.appendChild(emailLink);

  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add('icon');
  const phoneIconSpan = document.createElement('span');
  phoneIconSpan.classList.add('icon-phone');
  phoneIcon.appendChild(phoneIconSpan);

  const phoneLink = document.createElement('a');
  phoneLink.href = `tel:${KDF.getVal('tel_contact_number')}`;
  phoneLink.textContent = `${KDF.getVal('tel_contact_number').slice(0, 4)} ${KDF.getVal('tel_contact_number').slice(4, 7)} ${KDF.getVal('tel_contact_number').slice(7, 11)}`;
  main.appendChild(phoneIcon);
  main.appendChild(phoneLink);

  const locationIcon = document.createElement('i');
  locationIcon.classList.add('icon');
  locationIcon.classList.add('align-self');
  const locationIconSpan = document.createElement('span');
  locationIconSpan.classList.add('icon-location');
  locationIcon.appendChild(locationIconSpan);

  const address = document.createElement('p');
  const addressString = KDF.getVal('txt_contact_address').replace(/, /g, "<br/>");
  address.innerHTML = addressString;
  main.appendChild(address);
  main.appendChild(locationIcon);
  main.appendChild(address);

  const footer = document.createElement('footer');
  const footerImg = document.createElement('img');
  footerImg.src = 'https://www.sheffield.gov.uk/themes/custom/bbd_localgov/images/council-tax.jpeg';
  footerImg.alt = 'Footer Image';

  footer.appendChild(footerImg);

  contactInfo.appendChild(header);
  contactInfo.appendChild(main);
  contactInfo.appendChild(footer);

  const target = document.querySelector('.title-container');
  if (target) {
    target.after(contactInfo);
  } else {
    console.error('Element with class title-container not found');
  }
}

// --- CHECK CASE PROGRESS -------------------------------------------------- \\

function checkIsFormComplete(fields) {
  let isComplete = true;
  fields.map(field => {
    if (
      KDF.getVal(field) === ''
      || KDF.getVal(field) === null
      || KDF.getVal(field) === undefined
      || KDF.getVal(field) === 'Pending'
      || KDF.getVal(field) === 'In progress'
    ) {
      isComplete = false;
    }
  });
  return isComplete;
}

function closeCase() {
  const noteDetails = KDF.getVal('txta_closure_details') ? `${KDF.getVal('txta_closure_details')}` : '';
  KDF.customdata('close-case', '_KDF_complete', true, true, {
    caseNote: `${KDF.getVal('sel_closure_reason')}: ${noteDetails}`
  });
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

// --- FORMATING DATE AND TIME ---------------------------------------------- \\

function formatDateTime(dateTime) {
  let date;
  if (!dateTime) {
    date = new Date(); // Use current time if no argument

  } else if (typeof dateTime === 'number') {
    date = new Date(dateTime); // Assume dateTime is already a timestamp
  } else {
    date = new Date(dateTime); // Try to parse dateTime as a date string
  }

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

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
        short: date.toLocaleDateString('en-GB', { weekday: 'short' }),
        long: date.toLocaleDateString('en-GB', { weekday: 'long' })
      },
    },
    uk: {
      date: date.toLocaleString('en-GB', { timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit' }),
      time: date.toLocaleString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', millisecond: '3-digit' }),
      dateTime: date.toLocaleString('en-GB', { timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', millisecond: '3-digit' })
    },
    readable: {
      date: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      dayDate: date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }),
      time: formatReadableTime(date)
    },
    iso: date.toISOString().replace(/\.\d{3}Z/, 'Z'),
    utc: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`,
    inputField: `${year}-${month}-${day}`,
  };
}

function formatReadableTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const isAmPm = date.getHours() >= 12 ? 'PM' : 'AM';
  const hours12 = date.getHours() % 12 || 12; // Convert to 12-hour format

  return `${hours12}:${minutes} ${isAmPm}`;
}

// --- HELPER FUNCTIONS ----------------------------------------------------- \\

// --- SHOW / HIDE ELEMENTS ------------------------------------------------- \\

function hideShowMultipleElements(fields) {
  fields.map((field) => {
    hideShowElement(field.name, field.display)
  });
}

function hideShowElement(name, display) {
  if (name.startsWith('page_')) {
    if (display === true || display === 'true' || display === 'show') {
      KDF.showPage(name);
    } else {
      KDF.hidePage(name);
    }
  } else if (name.startsWith('area_')) {
    if (display === true || display === 'true' || display === 'show') {
      KDF.showSection(name);
    } else {
      KDF.hideSection(name);
    }
  } else {
    if (display === true || display === 'true' || display === 'show') {
      KDF.showWidget(name);
    } else {
      KDF.hideWidget(name);
    }
  }
}

// --- UPDATE LABEL TEXT ---------------------------------------------------- \\

function updateMultipleLabels(fields) {
  fields.map((field) => {
    updateLabel(field.name, field.value)
  });
}

function updateLabel(name, value) {
  if (name.startsWith('but_')) {
    $(`#dform_widget_button_${name}`).html(value);
  } else {
    $(`#dform_widget_label_${name}`).html(value);
  }
}

// --- UPDATE VALUDATION TEXT ----------------------------------------------- \\

function updateMultipleValidationMessages(fields) {
  fields.map((field) => {
    updateValidationMessage(field.name, field.value)
  });
}

function updateValidationMessage(name, value) {
  if (name.startsWith('rad_')) {

  } else {
    $(`#dform_widget_${name}`)
      .siblings(".dform_validationMessage")
      .text(value);
  }
}

// --- CHECK DATE FUNCTIONS ------------------------------------------------- \\

async function fetchUKBankHolidays() {
  try {
    const response = await fetch('https://www.gov.uk/bank-holidays.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const bankHolidaysEW = data?.['england-and-wales'].events || [];
    const bankHolidaysSL = data?.scotland.events || [];
    const bankHolidaysNI = data?.['northern-ireland'].events || [];
    const allBankHolidays = [...new Set([...bankHolidaysEW, ...bankHolidaysSL, ...bankHolidaysNI])];
    // Return the array of bank holidays
    return allBankHolidays.map(holiday => new Date(holiday.date));
  } catch (error) {
    console.error('Error fetching bank holidays:', error);
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

// --- COOKIE FUNCTIONS ----------------------------------------------------- \\

function setCookie(name, value, minutes) {
  let expires = "";
  if (minutes) {
    const d = new Date();
    d.setTime(d.getTime() + (minutes * 60 * 1000));
    expires = `; expires=${d.toUTCString()}`;
  }
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');

  const cookies = ca.map(c => c.trim()); // Trim leading spaces
  const foundCookie = cookies.find(c => c.startsWith(nameEQ));

  return foundCookie ? decodeURIComponent(foundCookie.substring(nameEQ.length)) : null;
}