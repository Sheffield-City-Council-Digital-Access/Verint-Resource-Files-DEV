function initiateStartUp() {
  // Function designed to run before the form is ready

  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-PBGBFQVW');

  if (!portal) {
    setPageHeaderAndFooter(KDF.getVal("txt_formtitle"));
    setHtmlHead(KDF.getVal("txt_formtitle"));
  }

  // default screen to top
  window.scrollTo(0, 0);
}

function initiateReady(event, kdf, progressBar) {
  // Function designed to run when the form is ready.

  // default screen to top
  window.scrollTo(0, 0);

  if (portal && portalPage === '/request') document.getElementById("form-title").innerHTML = KDF.getVal("txt_formtitle");

  // Use to enable and disable the maps during downtime
  const mapAvailable = true;
  if (mapAvailable === false) {
    $("#dform_widget_button_but_use_map_location").attr(
      "aria-disabled",
      "true"
    );
    $("#dform_widget_button_but_use_map_location").attr("disabled", "disabled");
    KDF.showWidget("ahtm_map_unavailable_error");
  }

  $("input,textarea,select").removeAttr("title");
  disabledButtons();
  addPrivacyNoticeAccordionFuntionality();
  handleAddressSearchFunctionality(event, kdf);

  if (arguments[2]) {
    if (progressBar === true || progressBar.toLowerCase() === "progress bar") {
      addProgressBarHtml();
      setProgressBarWidthAndLabel();
    }
  }

  $("#dform_widget_txt_dob").change(function () {
    convertDateToField("txt_dob", "txt_dobconverted");
  });

  $("#dform_widget_txt_dob_another").change(function () {
    convertDateToField("txt_dob_another", "txt_dob_another_1");
  });

  $("#dform_widget_num_date_dd, #dform_widget_num_date_dd_another").on(
    "keyup focusout",
    function (e) {
      const main = "dform_widget_num_date_dd";
      const another = "dform_widget_num_date_dd_another";
      if (e.type === "keyup") {
        inputDate(
          this.id,
          `${this.id === "dform_widget_num_date_dd_another"
            ? "dform_widget_num_date_mm_another"
            : "dform_widget_num_date_mm"
          }`,
          e.which
        );
      } else {
        if (this.value) {
          $(this).val($(this).val().padStart(2, "0"));
        }
      }
    }
  );

  $("#dform_widget_num_date_mm, #dform_widget_num_date_mm_another").on(
    "keyup focusout",
    function (e) {
      const another = `${this.id === "dform_widget_num_date_mm_another" ? "_another" : ""
        }`;
      const dd = $(`#dform_widget_num_date_dd${another}`).val();
      const yy = $(`#dform_widget_num_date_yy${another}`).val();
      if (e.type === "keyup") {
        inputDate(
          this.id,
          `${this.id === "dform_widget_num_date_mm_another"
            ? "dform_widget_num_date_yy_another"
            : "dform_widget_num_date_yy"
          }`,
          e.which
        );
      } else {
        if (this.value) {
          $(this).val($(this).val().padStart(2, "0"));
        } else {
          if (dd === "")
            $(`#dform_widget_num_date_dd${another}`).addClass(
              "dform_fielderror"
            );
          if (yy === "")
            $(`#dform_widget_num_date_yy${another}`).addClass(
              "dform_fielderror"
            );
          $(`#dform_widget_date_field${another}`)
            .find(".dform_validationMessage")
            .text(
              `Enter ${another === "_another" ? "their" : "your"} date of birth`
            )
            .show();
        }
      }
    }
  );

  $("#dform_widget_num_date_yy, #dform_widget_num_date_yy_another")
    .attr("min", new Date().getFullYear() - 120)
    .attr("max", new Date().getFullYear())
    .on("keyup focusout", function (e) {
      const another = `${this.id === "dform_widget_num_date_yy_another" ? "_another" : ""
        }`;
      const dd =
        $(`#dform_widget_num_date_dd${another}`).val() !== "" ? true : false;
      const mm =
        $(`#dform_widget_num_date_mm${another}`).val() !== "" ? true : false;
      $(`#dform_widget_date_field${another}`)
        .find(".dform_validationMessage")
        .text(
          `Enter ${another === "_another" ? "their" : "your"} date of birth`
        )
        .hide();
      if (e.type === "keyup") {
        inputDate(this.id, "", e.which);
      }
    });

  $("#dform_widget_date_field, #dform_widget_date_field_another").on(
    "change focusout",
    function () {
      const another = `${this.id === "dform_widget_date_field_another" ? "_another" : ""
        }`;
      const dd = $(`#dform_widget_num_date_dd${another}`).val();
      const mm = $(`#dform_widget_num_date_mm${another}`).val();
      const yy = $(`#dform_widget_num_date_yy${another}`).val();
      checkDate(this.id, another, dd, mm, yy);
      checkMaxDay(this.id, dd, mm, yy);
    }
  );

  if (kdf.name !== "cwca_process") {
    if (kdf.form.caseid !== "") {
      KDF.showPage("page_review_request");
      KDF.gotoPage("page_review_request");
    }
  }
}

let pageID = "";
function initiatePageChange(event, kdf, currentpageid, targetpageid) {
  // Function designed to run when the page is changed.

  // default screen to top
  window.scrollTo(0, 0);

  $(`div[data-type="page"][data-pos="${targetpageid}"]`).each(function () {
    pageID = this.id.slice(11);
  });

  setTimeout(setHtmlHead(KDF.getVal("txt_formtitle")), 0);
  setProgressBarWidthAndLabel();
  getAndSetReviewPageData();
}

let nationalAddress = false;
let nationalAddressArray = [];
function handleCustomActions(action, response) {
  // Function designed to run when a custom action has run successfully.
  KDF.hideMessages();

  checkCurrentPageFields();

  let val = response.data;

  if (action === 'search-national-address') {
    nationalAddress = true;
    nationalAddressArray = [];

    const toTitleCase = (str) => {
      return str.toLowerCase().replace(/(?:^|\s|-)\S/g, (match) => {
        return match.toUpperCase();
      }).replace(/\s+/g, ' ').trim();
    };

    const selectList = document.getElementById(`dform_widget_sel_property_search_result_${pageID}`);
    [...selectList.options].forEach(option => option.remove());

    if (val.searchResults.length > 0) {
      for (const result of val.searchResults) {

        result.addressNumber = toTitleCase(result.addressNumber);
        result.addressLine1 = toTitleCase(result.addressLine1);
        result.addressLine2 = toTitleCase(result.addressLine2);
        result.label = [
          result.addressNumber + ' ' + result.addressLine1,
          result.townCity,
          result.postcode
        ].join(', ');

        nationalAddressArray = response.data.searchResults;

        const option = document.createElement('option');

        option.textContent = [
          result.addressNumber + ' ' + result.addressLine1,
          result.townCity,
          result.postcode
        ].join(', ');

        option.value = result.value;

        selectList.appendChild(option);
      }
      KDF.showWidget(`sel_property_search_result_${pageID}`);
      KDF.showSection(`area_address_selected_${pageID}`);
      $(`#dform_widget_sel_property_search_result_${pageID}`).focus();
    } else {
      displayErrorMessage(
        `txt_search_property_${pageID}`,
        "Enter a valid postcode",
        "block"
      );
      if (KDF.getVal(`txt_manual_address_${pageID}`) === "false") {
        // do nothing
      } else {
        enterAddressManually();
      }
    }
  }

  if (action === "search-address-web") {
    nationalAddress = false;
    if (val.property_search_result.length > 0) {
      let property_search_results = val.property_search_result;
      let updated_results = [];
      $.each(property_search_results, function (index, result) {
        let label_parts = result.label.split(",");
        let updated_label = label_parts[0]
          .trim()
          .replace(/\b\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
        if (updated_label !== "") {
          result.label = `${updated_label}, ${label_parts
            .slice(1)
            .join(",")
            .trim()}`;
          updated_results.push(result);
        }
      });
      const data = updated_results;
      data.sort(function (a, b) {
        let aLabel = parseInt(a.label.split(" ")[0]);
        let bLabel = parseInt(b.label.split(" ")[0]);
        return aLabel - bLabel;
      });
      property_search_results = data;
      KDF.setVal(
        `sel_property_search_result_${pageID}`,
        property_search_results
      );
      $(
        `#dform_widget_sel_property_search_result_${pageID} option:eq(0)`
      ).remove();
      KDF.showWidget(`sel_property_search_result_${pageID}`);
      KDF.showSection(`area_address_selected_${pageID}`);
      $(`#dform_widget_sel_property_search_result_${pageID}`).focus();
    } else {
      displayErrorMessage(
        `txt_search_property_${pageID}`,
        "Enter a valid postcode",
        "block"
      );
      if (KDF.getVal(`txt_manual_address_${pageID}`) === "false") {
        // do nothing
      } else {
        enterAddressManually();
      }
    }
  }

  if (action === "retrieve-address-web") {
    if (pageID === "page_about_you") {
      KDF.setVal("txt_cusaddressnumber", capitalizeString(val.address_number));
      KDF.setVal("txt_cusaddressnumber", val.address_number);
      KDF.setVal("txt_cusaddressline1", capitalizeString(val.address_line_1));
      KDF.setVal("txt_cusaddressline1", val.address_line_1);
      KDF.setVal("txt_custown", val.town);
      KDF.setVal("txt_cuspostcode", val.postcode);
      KDF.setVal(
        `txt_cusfulladdress`,
        `${capitalizeString(val.address_number)} ${capitalizeString(
          val.address_line_1
        )}, ${val.town}, ${val.postcode}`
      );
      KDF.setVal("txt_cusuprn", val.uprn);
    } else if (pageID === "page_about_another") {
      KDF.setVal(
        "txt_cusaddressnumber_another",
        capitalizeString(val.address_number)
      );
      KDF.setVal("txt_cusaddressnumber_another", val.address_number);
      KDF.setVal(
        "txt_cusaddressline1_another",
        capitalizeString(val.address_line_1)
      );
      KDF.setVal("txt_cusaddressline1_another", val.address_line_1);
      KDF.setVal("txt_custown_another", val.town);
      KDF.setVal("txt_cuspostcode_another", val.postcode);
      KDF.setVal(
        `txt_cusfulladdress_another`,
        `${capitalizeString(val.address_number)} ${capitalizeString(
          val.address_line_1
        )}, ${val.town}, ${val.postcode}`
      );
      KDF.setVal("txt_cusuprn_another", val.uprn);
    } else {
      KDF.setVal(
        `txt_addressnumber_${pageID}`,
        capitalizeString(val.address_number)
      );
      KDF.setVal(
        `txt_addressline1_${pageID}`,
        capitalizeString(val.address_line_1)
      );
      KDF.setVal(`txt_addressline1_${pageID}`, val.address_line_1);
      KDF.setVal(`txt_town_${pageID}`, val.town);
      KDF.setVal(`txt_postcode_${pageID}`, val.postcode);
      KDF.setVal(
        `txt_fulladdress_${pageID}`,
        `${capitalizeString(val.address_number)} ${capitalizeString(
          val.address_line_1
        )}, ${val.town}, ${val.postcode}`
      );
      KDF.setVal(`txt_postcodearea_${pageID}`, val.postcode_area);
      KDF.setVal(`txt_uprn_${pageID}`, val.uprn);
      KDF.setVal(`txt_propertyid_${pageID}`, val.property_id);
      KDF.setVal(`txt_usrn_${pageID}`, val.usrn);
      KDF.setVal(`txt_streetid_${pageID}`, val.street_id);
      if (pageID === "page_about_the_location") {
        KDF.setVal(
          `txt_fulladdress`,
          `${capitalizeString(val.address_number)} ${capitalizeString(
            val.address_line_1
          )}, ${val.town}, ${val.postcode}`
        );
        KDF.setVal(
          "txt_streetdescription",
          capitalizeString(val.address_line_1)
        );
        KDF.setVal("txt_streetdescription", val.address_line_1);
        KDF.setVal("txt_uprn", val.uprn);
        KDF.setVal("txt_propertyid", val.property_id);
        KDF.setVal("txt_postcodearea", val.postcode_area);
        KDF.setVal("txt_usrn", val.usrn);
        KDF.setVal("txt_streetid", val.street_id);
        KDF.setVal("longitude_x", val.longitude_x_cords);
        KDF.setVal("latitude_y", val.latitude_y_cords);
        KDF.setVal("site_name", capitalizeString(val.address_line_1));
        KDF.setVal("site_name", val.address_line_1);
        KDF.setVal("site_code", val.usrn);
      }
    }
    KDF.showWidget(`ahtm_fulladdress_${pageID}`);
    KDF.hideWidget(`sel_property_search_result_${pageID}`);
    KDF.showSection(`area_address_selected_${pageID}`);
    KDF.showSection(`area_lacation_description_${pageID}`);
    $(`#dform_widget_html_ahtm_fulladdress_${pageID}`).focus();
  }

  if (action === "retrieve-current-location-web") {
    if (val.result === "Location not found") {
      KDF.showWidget("ahtm_current_location_error");
      // $("#current-location-error").val("Your location is outside of the Sheffield City Council area");
    } else {
      KDF.setWidgetNotRequired(`txt_search_property_${pageID}`);
      KDF.setVal(`txt_addressnumber_${pageID}`, val.number);
      KDF.setVal(`txt_addressline1_${pageID}`, val.streetName);
      KDF.setVal(`txt_town_${pageID}`, val.city);
      KDF.setVal(`txt_postcode_${pageID}`, val.postcode);
      KDF.setVal(
        `txt_fulladdress_${pageID}`,
        val.number +
        " " +
        val.streetName +
        ", " +
        val.city +
        ", " +
        val.postcode
      );
      KDF.setVal(
        "txt_fulladdress",
        val.number +
        " " +
        val.streetName +
        ", " +
        val.city +
        ", " +
        val.postcode
      );
      KDF.setVal(`txt_streetdescription${pageID}`, val.streetName);
      KDF.setVal(`txt_usrn_${pageID}`, val.usrn);
      KDF.setVal("txt_usrn", val.usrn);
      KDF.setVal(`txt_streetid_${pageID}`, val.streetID);
      KDF.setVal("txt_streetid", val.streetID);
      KDF.setVal("site_name", val.streetName);
      KDF.setVal("site_code", val.usrn);
      KDF.setVal("longitude_x", val.xLongitude);
      KDF.setVal("latitude_y", val.yLatitude);
      KDF.showWidget(`ahtm_fulladdress_${pageID}`);
      KDF.hideWidget(`sel_property_search_result_${pageID}`);
      KDF.showSection(`area_address_selected_${pageID}`);
      KDF.showSection(`area_lacation_description_${pageID}`);
    }
  }

  if (action === "kdf-save-web") {
    KDF.save();
  } else if (action === "kdf-save-custom") {
    //Do nothing
  } else {
    checkCurrentPageFields();
  }
}

function setPageHeaderAndFooter(formTitle) {
  var body = document.getElementsByTagName("body")[0];

  body.insertAdjacentHTML(
    "afterbegin",
    `<header role="banner">
        <div class="scc_wrap" id="top">
          <div class="scc_logo">
            <a href="https://www.sheffield.gov.uk" title="Back to homepage">
              <img src="https://www.sheffield.gov.uk/verint-files/logo.png" alt="Sheffield City Council Logo">
            </a>
          </div>
        </div>
        <div id="form-title-outer">
          <div id="form-title-inner">
            <h1 id="form-title"></h1>
          </div>
        </div>
      </header>`
  );

  body.insertAdjacentHTML(
    "beforeend",
    `<footer class="scc_footer" role="contentinfo">
      <nav role="navigation" class="scc_az-links">
        <div class="scc_wrap">
          <h2><a href="https://www.sheffield.gov.uk/utilities/a-z">A-Z of services</a></h2>
          <p class="scc_skip"><a href="#scc_footer-content" class="scc_button scc_hide-screen scc_focusable">Skip the A to Z services</a></p>
          <ul class="scc_h2">
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#a"><span>Services</span> A</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#b"><span>Services</span> B</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#c"><span>Services</span> C</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#d"><span>Services</span> D</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#e"><span>Services</span> E</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#f"><span>Services</span> F</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#g"><span>Services</span> G</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#h"><span>Services</span> H</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#i"><span>Services</span> I</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#j"><span>Services</span> J</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#k"><span>Services</span> K</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#l"><span>Services</span> L</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#m"><span>Services</span> M</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#n"><span>Services</span> N</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#o"><span>Services</span> O</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#p"><span>Services</span> P</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#q"><span>Services</span> Q</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#r"><span>Services</span> R</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#s"><span>Services</span> S</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#t"><span>Services</span> T</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#u"><span>Services</span> U</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#v"><span>Services</span> V</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#w"><span>Services</span> W</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#x"><span>Services</span> X</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#y"><span>Services</span> Y</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#z"><span>Services</span> Z</a></li>
            <li><a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#123"><span>Services</span> 123</a></li>
          </ul>
        </div>
      </nav>
      <div class="scc_wrap" id="scc_footer-content">
        <div class="scc_row">
          <div class="scc_col" id="legal-links">
            <ul>
              <li><a href="https://www.sheffield.gov.uk/">Site Home Page</a></li>
              <li><a href="https://www.sheffield.gov.uk/utilities/footer-links/privacy-notice">Privacy notice</a></li>
              <li><a href="https://www.sheffield.gov.uk/utilities/footer-links/cookie-policy">Use of cookies</a></li>
              <li><a href="https://www.sheffield.gov.uk/utilities/footer-links/accessibility-statement">Accessibility statement</a></li>
              <li><a href="https://www.sheffield.gov.uk/utilities/footer-links/legal-notices">Legal notices</a></li>
            </ul>
          </div>
          <div class="scc_col" id="other-links">
            <ul>
              <li><a href="https://www.sheffield.gov.uk/job-vacancies">Jobs and volunteering with Sheffield City Council</a></li>
              <li><a href="https://www.sheffield.gov.uk/your-city-council/access-to-information">Get access to information</a></li>
              <li><a href="http://www.welcometosheffield.co.uk/visit/events">Sheffield events</a></li>
              <li><a href="https://haveyoursay.sheffield.gov.uk/">Have your say - consultations</a></li>
              <li><a href="http://www.sheffieldnewsroom.co.uk">News and press</a></li>
              <li><a href="https://www.sheffield.gov.uk/utilities/footer-links/advertising">Advertising</a></li>
              <li><a href="https://www.sheffield.gov.uk/business">Business</a></li>
            </ul> 
          </div>
          <div class="scc_col" id="social-links">
            <ul>
              <li><a href="https://twitter.com/sheffcouncil?lang=en" class="scc_icon-twitter-after"><span>Twitter</span></a></li>
              <li><a href="https://www.facebook.com/SheffCityCouncil/" class="scc_icon-facebook-after"><span>Facebook</span></a></li>
              <li><a href="https://www.youtube.com/user/SheffieldCCouncil" class="scc_icon-youtube-after"><span>YouTube</span></a></li>
              <li><a href="https://www.instagram.com/sheffieldcitycouncil/" class="scc_icon-instagram-after"><span>Instagram</span></a></li>
              <li><a href="https://public.govdelivery.com/accounts/UKSHEFFIELD/subscriber/new" class="scc_icon-mail-after"><span>Email alerts</span></a></li>
            </ul>
          </div>
        </div>
        <div class="scc_info">
          <p class="scc_modified"></p>
          <p class="scc_copyright">&copy; Copyright Sheffield City Council</p>
        </div>
        <a href="#top" id="jump-to-top">Top</a>
      </div>
    </footer>`
  );

  document.getElementById("form-title").innerHTML = formTitle;
}

function setHtmlHead(formTitle) {
  // Function designed to set title and favicon to display in browser tab

  document.title = formTitle;

  // overwrite Verint's reset of document.title
  setTimeout(function () {
    document.title = formTitle;
  }, 10);
  var favicon = document.querySelector("link[rel~='icon']");
  favicon.href = "https://www.sheffield.gov.uk/verint-files/SCC%20Favicon.png";
}

function addProgressBarHtml() {
  // Function designed to produce the progress bar.

  // var header = document.getElementsByTagName("header")[0];
  var form = document.getElementById("dform_holder");

  // header.insertAdjacentHTML('afterend', "<div id='progress-bar-outer-box'><div id='progress-bar-inner-box'><div role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' id='progress-bar-dynamic-box'><p id='progress-bar-text'>0%</p></div></div></div>")

  form.insertAdjacentHTML(
    "afterbegin",
    "<div id='progress-bar-outer-box'><div id='progress-bar-inner-box'><div role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' id='progress-bar-dynamic-box' aria-label='Progress bar'><p id='progress-bar-text'>0%</p></div></div></div>"
  );
}

function setProgressBarWidthAndLabel() {
  // Function designed to update the progress bar.

  // progress bar calculations
  var activePagesCount = $('.dform_page[data-active="true"]').length,
    currentPosition = $('.dform_page[data-active="true"]:visible').index(
      '.dform_page[data-active="true"]'
    ),
    progressPercentage = Math.round((currentPosition / activePagesCount) * 100);

  // set width of green progress bar and label
  $("#progress-bar-dynamic-box").css({
    width: progressPercentage + "%",
  });
  $("#progress-bar-dynamic-box").html(
    "<p id='progress-bar-text'>" + progressPercentage.toString() + "%</p>"
  );

  // set aria-valuenow for accessability
  $("#progress-bar-dynamic-box").attr("aria-valuenow", progressPercentage);
  if (progressPercentage > 0) {
    $("#progress-bar-text").css({
      color: "#FFFFFF",
    });
  }
}

function addPrivacyNoticeAccordionFuntionality() {
  // Function designed for for privacy notice accordion
  if (document.getElementsByClassName("privacy-accordion")[0]) {
    var accordion = document.getElementsByClassName("privacy-accordion")[0];
    var panel = document.getElementsByClassName("privacy-panel")[0];
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

// Display empty textboxes when 'enter address manually' button pressed
function enterAddressManually() {
  KDF.setVal(`locator_${pageID}`, "Manual");
  KDF.hideWidget("ahtm_current_location_error");
  KDF.hideSection("area_gis_map");
  KDF.setWidgetNotRequired(`txt_search_property_${pageID}`);
  KDF.hideWidget(`ahtm_address_search_result_error_${pageID}`);
  KDF.hideWidget(`sel_property_search_result_${pageID}`);
  KDF.hideWidget(`ahtm_fulladdress_${pageID}`);
  KDF.showSection(`area_address_selected_${pageID}`);
  if (pageID === "page_about_you") {
    KDF.showWidget("txt_cusaddressnumber");
    KDF.setVal("txt_cusaddressnumber", "");
    KDF.showWidget("txt_cusaddressline1");
    KDF.setVal("txt_cusaddressline1", "");
    KDF.showWidget("txt_custown");
    KDF.setVal("txt_custown", "");
    KDF.showWidget("txt_cuspostcode");
    KDF.setVal("txt_cuspostcode", "");
    KDF.hideWidget("txt_cusfulladdress");
    KDF.setVal("txt_cusfulladdress", "");
    KDF.hideWidget("txt_cusuprn");
    KDF.setVal("txt_cusuprn", "");
  } else if (pageID === "page_about_another") {
    KDF.showWidget("txt_cusaddressnumber_another");
    KDF.setVal("txt_cusaddressnumber_another", "");
    KDF.showWidget("txt_cusaddressline1_another");
    KDF.setVal("txt_cusaddressline1_another", "");
    KDF.showWidget("txt_custown_another");
    KDF.setVal("txt_custown_another", "");
    KDF.showWidget("txt_cuspostcode_another");
    KDF.setVal("txt_cuspostcode_another", "");
    KDF.hideWidget("txt_cusfulladdress_another");
    KDF.setVal("txt_cusfulladdress_another", "");
    KDF.hideWidget("txt_cusuprn_another");
    KDF.setVal("txt_cusuprn_another", "");
  } else {
    KDF.showWidget(`txt_addressnumber_${pageID}`);
    KDF.setVal(`txt_addressnumber_${pageID}`, "");
    KDF.showWidget(`txt_addressline1_${pageID}`);
    KDF.setVal(`txt_addressline1_${pageID}`, "");
    KDF.showWidget(`txt_town_${pageID}`);
    KDF.setVal(`txt_town_${pageID}`, "");
    KDF.showWidget(`txt_postcode_${pageID}`);
    KDF.setVal(`txt_postcode_${pageID}`, "");
    KDF.hideWidget(`txt_postcodearea_page_${pageID}`, "");
    KDF.setVal(`txt_postcodearea_page_${pageID}`, "");
    KDF.hideWidget(`txt_fulladdress_${pageID}`, "");
    KDF.setVal(`txt_fulladdress_${pageID}`, "");
    KDF.hideWidget(`txt_addressid_${pageID}`, "");
    KDF.setVal(`txt_addressid_${pageID}`, "");
    KDF.hideWidget(`txt_uprn_${pageID}`, "");
    KDF.setVal(`txt_uprn_${pageID}`, "");
    KDF.hideWidget(`txt_streetid_${pageID}`, "");
    KDF.setVal(`txt_streetid_${pageID}`, "");
    KDF.hideWidget(`txt_usrn_${pageID}`, "");
    KDF.setVal(`txt_usrn_${pageID}`, "");
  }
}

function disableButton(id) {
  var button = $("#" + id);
  button.text("Submitting... please wait");

  var nextOrSubmitButtons =
    ".dform_widget_type_button[data-type='next'], .property-search-page-button, .secondary-cta-property-search, .secondary-cta-property-search-custom, .location-search-page-button--highways, .secondary-cta-location-search--highways, .location-search-page-button--map, .secondary-cta-location-search--custom, .secondary-cta-location-search--map, .address-search-page-button--next, .address-search-page-button--submit, .address-search-page-button--submit-custom, .address-search-page-button--submit-highways, .address-search-page-button--submit-no-address, .address-search-page-button--submit-custom-no-address, .address-search-page-button--next-another, .address-search-page-button--submit-another, .address-search-page-button--submit-another-no-address, .address-search-page-button--submit-another-custom, .address-search-page-button--submit-another-custom-no-address, .secondary-cta-mandatory";

  $(nextOrSubmitButtons).attr("aria-disabled", "true");
  $(nextOrSubmitButtons).attr("disabled", "disabled");
}

function disabledButtons() {
  // get the buttons to disable = only next or submit buttons

  var nextOrSubmitButtons =
    ".dform_widget_type_button[data-type='next'], .next-button, submit-button, .property-search-page-button, .secondary-cta-property-search, .secondary-cta-property-search-custom, .location-search-page-button--highways, .secondary-cta-location-search--highways, .location-search-page-button--map, .secondary-cta-location-search--custom, .secondary-cta-location-search--map, .address-search-page-button--next, .address-search-page-button--submit, .address-search-page-button--submit-custom, .address-search-page-button--submit-highways, .address-search-page-button--submit-no-address, .address-search-page-button--submit-custom-no-address, .address-search-page-button--next-another, .address-search-page-button--submit-another, .address-search-page-button--submit-another-no-address, .address-search-page-button--submit-another-custom, .address-search-page-button--submit-another-custom-no-address, .secondary-cta-mandatory, .web-black";
  // set those buttons to disabled by default
  $(nextOrSubmitButtons).attr("aria-disabled", "true");
  // get all required input types to check
  var requiredInputTypes = "input:required, textarea:required, select:required";

  // run checker on page load

  checkCurrentPageFields();
  // run checker when any required field is changed
  $(requiredInputTypes).on("change keyup blur", function () {
    checkCurrentPageFields();
  });
  // run checker when buttons clicked
  $("button").on("click", function () {
    checkCurrentPageFields();
  });
}

function checkCurrentPageFields() {
  var requiredInputTypes = "input:required, textarea:required, select:required";
  // setTimeout required because if fields are conditionally displayed
  // e.g. hidden then displayed after radio button selection
  // the code needs to run *after* the new element displays
  // and therefore *after* the Verint code has run
  setTimeout(function () {
    // get current page (which includes next/previous pages when next/back buttons pressed)
    var currentPage = $('.dform_page[data-active="true"]:visible');
    // get only visible fields on current page

    var filesUploads = $(currentPage)
      .find("input[type='file']:required")
      .filter(":visible");

    var radiosAndCheckboxes = $(currentPage)
      .find("input[type='radio']:required, input[type='checkbox']:required")
      .filter(":visible");

    var otherFields = $(currentPage)
      .find(requiredInputTypes)
      .not("input[type='radio'], input[type='checkbox'], input[type='file']")
      .filter(":visible");

    // pass fields to toggle function for validation
    disabledButtonToggle(radiosAndCheckboxes, otherFields, filesUploads);
  }, 0);
}

function disabledButtonToggle(radiosAndCheckboxes, otherFields, filesUploads) {
  // set all fields to filled by default
  let allRadiosAndCheckboxesFilled = true;
  //   let allOtherFieldsFilled = true;
  const allOtherFieldsFilled = Array.from(otherFields).every(
    (field) => field.value.trim() !== ""
  );

  const filesUploaded = Array.from(filesUploads).every(
    (field) => {
      return field.disabled;
    }
  );

  // check radio/checkboxes
  // 1 - get HTML names of radio/checbox groups
  let radioAndCheckboxNames = [];
  for (let i = 0; i < radiosAndCheckboxes.length; i++) {
    if (radioAndCheckboxNames.indexOf(radiosAndCheckboxes[i].name) === -1) {
      radioAndCheckboxNames.push(radiosAndCheckboxes[i].name);
    }
  }

  // 2 - check that each of the radio/checkbox groups are checked
  for (let j = 0; j < radioAndCheckboxNames.length; j++) {
    if (
      $("input[name='" + radioAndCheckboxNames[j] + "']:checked").length === 0
    ) {
      // if a radio/checkbox group is not checked
      // set checker variable to false
      allRadiosAndCheckboxesFilled = false;
    }
  }

  // check all fields other than radio/checkboxes
  //   otherFields.each(function () {
  //     if (!$(this).val()) {
  //       // if no value, button disabled
  //       allOtherFieldsFilled = false;
  //     } else {
  //       // if value exists, remove whitespace and check other characters are entered
  //       if (this.value) {
  //         let whitespaceRemoved = $(this).val().replace(/\s/g, "");
  //         let fieldValueLength = whitespaceRemoved.length;
  //         if (fieldValueLength === 0) {
  //           allOtherFieldsFilled = false;
  //         }
  //       }
  //     }
  //   });

  var currentPage = $('.dform_page[data-active="true"]:visible');
  var errorMessagesVisible = currentPage.has(
    ".dform_validationMessage:visible"
  ).length;
  var ineligibleAlertPanelVisible = currentPage.has(
    ".alert-panel--ineligible:visible"
  ).length;
  // get the buttons to enable/disable = only next or submit buttons
  var nextOrSubmitButtons =
    ".dform_widget_type_button[data-type='next'], .next-button, submit-button, .property-search-page-button, .secondary-cta-property-search, .secondary-cta-property-search-custom, .location-search-page-button--highways, .secondary-cta-location-search--highways, .location-search-page-button--map, .secondary-cta-location-search--map, .secondary-cta-location-search--custom, .address-search-page-button--next, .address-search-page-button--submit, .address-search-page-button--submit-custom, .address-search-page-button--submit-highways, .address-search-page-button--submit-no-address, .address-search-page-button--submit-custom-no-address, .address-search-page-button--next-another, .address-search-page-button--submit-another, .address-search-page-button--submit-another-no-address, .address-search-page-button--submit-another-custom, .address-search-page-button--submit-another-custom-no-address, .secondary-cta-mandatory, .web-black";
  // check that all radio/checkbox and other fields are all still set to filled
  if (
    allOtherFieldsFilled &&
    allRadiosAndCheckboxesFilled &&
    filesUploaded &&
    errorMessagesVisible === 0 &&
    ineligibleAlertPanelVisible === 0
  ) {
    $(nextOrSubmitButtons).attr("aria-disabled", "false");
  } else {
    $(nextOrSubmitButtons).attr("aria-disabled", "true");
  }
}

// async function checkCurrentPageFields() {
//   const requiredInputTypes = "input:required:not([type='hidden']), textarea:required:not([type='hidden']), select:required:not([type='hidden'])";

//   const currentPage = document.querySelector('.dform_page[data-active="true"]');
//   const visibleFields = currentPage.querySelectorAll(`${requiredInputTypes}:not(:disabled):not([readonly]):not([style*='display: none'])`);

//   const radiosAndCheckboxes = currentPage.querySelectorAll("input[type='radio']:required:not(:disabled):not([readonly]):not([style*='display: none']) , input[type='checkbox']:required:not(:disabled):not([readonly]):not([style*='display: none'])");
//   await disabledButtonToggle(Array.from(radiosAndCheckboxes), Array.from(visibleFields));
// }

// function disabledButtonToggle(radiosAndCheckboxes, otherFields) {
//   const allRadiosAndCheckboxesFilled = radiosAndCheckboxes.every(input => input.checked);
//   const allOtherFieldsFilled = Array.from(otherFields).every(field => field.value.trim() !== "");

//   const currentPage = document.querySelector('.dform_page[data-active="true"]');
//   const errorMessagesVisible = currentPage.querySelectorAll(".dform_validationMessage:not([style*='display: none'])").length > 0;
//   const ineligibleAlertPanelVisible = currentPage.querySelectorAll(".alert-panel--ineligible:not([style*='display: none'])").length > 0;

//   const nextOrSubmitButtons = document.querySelectorAll(".dform_widget_type_button[data-type='next'], .next-button, [type='submit'], .property-search-page-button, .secondary-cta-property-search, .secondary-cta-property-search-custom, .location-search-page-button--highways, .secondary-cta-location-search--highways, .location-search-page-button--map, .secondary-cta-location-search--map, .secondary-cta-location-search--custom, .address-search-page-button--next, .address-search-page-button--submit, .address-search-page-button--submit-custom, .address-search-page-button--submit-highways, .address-search-page-button--submit-no-address, .address-search-page-button--submit-custom-no-address, .address-search-page-button--next-another, .address-search-page-button--submit-another, .address-search-page-button--submit-another-no-address, .address-search-page-button--submit-another-custom, .address-search-page-button--submit-another-custom-no-address, .secondary-cta-mandatory, .web-black");

//   nextOrSubmitButtons.forEach(button => button.disabled = !(allRadiosAndCheckboxesFilled && allOtherFieldsFilled && !errorMessagesVisible && !ineligibleAlertPanelVisible));

//   console.log(allRadiosAndCheckboxesFilled, allOtherFieldsFilled, !errorMessagesVisible, ineligibleAlertPanelVisible);
// }

function confirmationURL(
  kdf,
  urlString,
  referenceNeeded,
  emailNeeded,
  additionalParameters
) {
  //set Variable of URL
  var confirmationPageUrlSlugAndQueries = urlString;

  //check if URL ends in a '?' if not, add one
  if (!confirmationPageUrlSlugAndQueries.endsWith("?")) {
    confirmationPageUrlSlugAndQueries += "?";
  }

  //check if referenceNeeded is set to 'reference', if so pass reference number to confirmation page
  if (referenceNeeded.toLowerCase() === "reference") {
    ampCheck();
    if (kdf.form.caseid) {
      confirmationPageUrlSlugAndQueries += "caseID=" + kdf.form.caseid;
    } else {
      confirmationPageUrlSlugAndQueries +=
        "caseID=" + KDF.getVal("txt_reference");
    }
  }

  if (KDF.getVal("txt_email") !== "") {
    //check if emailNeeded is set to 'email', if so pass email address to confirmation page
    if (emailNeeded.toLowerCase() === "email") {
      ampCheck();
      confirmationPageUrlSlugAndQueries += "email=" + KDF.getVal("txt_email");
    }
  }

  //check if additionalParameters has been provided, if so pass to confirmation page
  if (additionalParameters !== undefined) {
    if (!additionalParameters.startsWith("&")) {
      confirmationPageUrlSlugAndQueries += "&";
    }
    confirmationPageUrlSlugAndQueries += additionalParameters;
  }

  //Redirect to Confirmation page
  redirectOnSubmission(confirmationPageUrlSlugAndQueries);

  function ampCheck() {
    //check if URL currently ends with a '?'' or a '&'' if not add a '&' before moving on

    if (
      !confirmationPageUrlSlugAndQueries.endsWith("?") &&
      !confirmationPageUrlSlugAndQueries.endsWith("&")
    ) {
      confirmationPageUrlSlugAndQueries += "&";
    }
  }
}

// Redirect to form-specific confirmation screen on submission
// urlSlug is set from the form scripting tab by the form builder
function redirectOnSubmission(confirmationPageUrlSlugAndQueries) {
  var confirmationPageUrl =
    "https://www.sheffield.gov.uk/utilities/" +
    confirmationPageUrlSlugAndQueries;

  window.location = confirmationPageUrl;
}

function handleAddressSearchFunctionality(event, kdf) {
  $("#dform_widget_button_but_enter_address_manually").click(function () {
    // Need to chnage this to work on class and look up and show the fields on that page
    enterAddressManually();
  });

  $("#dform_widget_button_but_enter_address_manually_another").click(
    function () {
      // Achive enter_address_manually and this can be removed
      enterAddressManuallyAnother();
    }
  );

  $(".address-selector select").on("change click keypress", function (e) {
    if (e.keyCode !== 13 && e.keyCode >= 37 && e.keyCode <= 40) {
      // Ignore arrow keys
      return;
    } else {
      resetErrorMessage(
        this.name.substring(0, this.name.length - 2),
        (pageID === "page_about_you") ? 'Enter your postcode in the correct format' : 'Enter the postcode in the correct format'
      );
      if (this.value)
        if (nationalAddress) {
          const selectedValue = this.value;
          const selectedAddress = nationalAddressArray.find(result => result.value === selectedValue);

          if (selectedAddress) {
            if (pageID === "page_about_you") {
              KDF.setVal('txt_cusaddressnumber', selectedAddress.addressNumber);
              KDF.setVal('txt_cusaddressline1', selectedAddress.addressLine1);
              KDF.setVal('txt_custown', selectedAddress.townCity);
              KDF.setVal('txt_cuspostcode', selectedAddress.postcode);
              KDF.setVal('txt_cusfulladdress', `${selectedAddress.addressNumber} ${selectedAddress.addressLine1}, ${selectedAddress.townCity}, ${selectedAddress.postcode}`);
              KDF.hideWidget(`sel_property_search_result_${pageID}`);
              KDF.showWidget(`ahtm_fulladdress_${pageID}`);
              $(`#ahtm_fulladdress_page_${pageID}`).focus();
            } else if (pageID === "page_about_another") {
              KDF.setVal('txt_cusaddressnumber_another', selectedAddress.addressNumber);
              KDF.setVal('txt_cusaddressline1_another', selectedAddress.addressLine1);
              KDF.setVal('txt_custown_another', selectedAddress.townCity);
              KDF.setVal('txt_cuspostcode_another', selectedAddress.postcode);
              KDF.setVal('txt_cusfulladdress_another', `${selectedAddress.addressNumber} ${selectedAddress.addressLine1}, ${selectedAddress.townCity}, ${selectedAddress.postcode}`);
              KDF.hideWidget(`sel_property_search_result_${pageID}`);
              KDF.showWidget(`ahtm_fulladdress_${pageID}`);
              $(`#ahtm_fulladdress_page_${pageID}`).focus();
            } else {
              KDF.setVal(`txt_addressnumber_${pageID}`, selectedAddress.addressNumber);
              KDF.setVal(`txt_addressline1_${pageID}`, selectedAddress.addressLine1);
              KDF.setVal(`txt_town_${pageID}`, selectedAddress.townCity);
              KDF.setVal(`txt_postcode_${pageID}`, selectedAddress.postcode);
              KDF.setVal(`txt_fulladdress_${pageID}`, `${selectedAddress.addressNumber} ${selectedAddress.addressLine1}, ${selectedAddress.townCity}, ${selectedAddress.postcode}`);
              KDF.showWidget(`ahtm_fulladdress_${pageID}`);
              KDF.hideWidget(`sel_property_search_result_${pageID}`);
              KDF.showSection(`area_address_selected_${pageID}`);
              KDF.showSection(`area_lacation_description_${pageID}`);
              $(`#dform_widget_html_ahtm_fulladdress_${pageID}`).focus();
            }
          }
        } else {
          KDF.customdata("retrieve-address-web", this.id, true, true, { search_property: this.value });
        }
    }
  });

  $(".search-postcode").keydown(function (e) {
    resetErrorMessage(
      e.target.name,
      (pageID === "page_about_you") ? 'Enter your postcode in the correct format' : 'Enter the postcode in the correct format'
    );
    if (e.keyCode == 13) {
      $(`#dform_widget_button_but_find_property_${pageID}`).click();
    }
  });

  $(".search-address").keydown(function (e) {
    resetErrorMessage(
      e.target.name,
      "Enter the postcode or streetname in the correct format"
    );
    if (e.keyCode == 13) {
      $(`#dform_widget_button_but_find_property_${pageID}`).click();
    }
  });

  $(".find-address").click(function () {
    $(`#sel_property_search_result_${pageID}`).empty();
    KDF.hideWidget(`ahtm_address_search_result_error_${pageID}`);
    KDF.hideWidget("ahtm_current_location_error");
    KDF.hideSection("area_gis_map");
    KDF.setWidgetRequired(`txt_search_property_${pageID}`);
    KDF.setVal(`locator_${pageID}`, "Address");
    if (pageID === "page_about_you") {
      KDF.hideWidget("txt_cusaddressnumber");
      KDF.setVal("txt_cusaddressnumber", "");
      KDF.hideWidget("txt_cusaddressline1");
      KDF.setVal("txt_cusaddressline1", "");
      KDF.hideWidget("txt_custown");
      KDF.setVal("txt_custown", "");
      KDF.hideWidget("txt_cuspostcode");
      KDF.setVal("txt_cuspostcode", "");
      KDF.setVal("txt_cusfulladdress", "");
      KDF.hideWidget("txt_cusuprn");
      KDF.setVal("txt_cusuprn", "");
    } else if (pageID === "page_about_another") {
      KDF.hideWidget("txt_cusaddressnumber_another");
      KDF.setVal("txt_cusaddressnumber_another", "");
      KDF.hideWidget("txt_cusaddressline1_another");
      KDF.setVal("txt_cusaddressline1_another", "");
      KDF.hideWidget("txt_custown_another");
      KDF.setVal("txt_custown_another", "");
      KDF.hideWidget("txt_cuspostcode_another");
      KDF.setVal("txt_cuspostcode_another", "");
      KDF.hideWidget("txt_cusfulladdress_another");
      KDF.setVal("txt_cusfulladdress_another", "");
      KDF.hideWidget("txt_cusuprn_another");
      KDF.setVal("txt_cusuprn_another", "");
    } else {
      KDF.hideWidget(`txt_addressnumber_${pageID}`);
      KDF.setVal(`txt_addressnumber_${pageID}`, "");
      KDF.hideWidget(`txt_addressline1_${pageID}`);
      KDF.setVal(`txt_addressline1_${pageID}`, "");
      KDF.hideWidget(`txt_town_${pageID}`);
      KDF.setVal(`txt_town_${pageID}`, "");
      KDF.hideWidget(`txt_postcode_${pageID}`);
      KDF.setVal(`txt_postcode_${pageID}`, "");
      KDF.setVal(`txt_fulladdress_${pageID}`, "");
      KDF.setVal(`txt_postcodearea_${pageID}`, "");
      KDF.setVal(`txt_uprn_${pageID}`, "");
      KDF.setVal(`txt_propertyid_${pageID}`, "");
      KDF.setVal(`txt_usrn_${pageID}`, "");
      KDF.setVal(`txt_streetid_${pageID}`, "");
      if (pageID === "page_about_the_location") {
        KDF.setVal("lnglat", "");
        KDF.setVal("txt_fulladdress", "");
        KDF.setVal("txt_streetdescription", "");
        KDF.setVal("txt_uprn", "");
        KDF.setVal("txt_propertyid", "");
        KDF.setVal("txt_postcodearea", "");
        KDF.setVal("txt_usrn", "");
        KDF.setVal("txt_streetid", "");
        KDF.setVal("object_id", "");
        KDF.setVal("longitude_x", "");
        KDF.setVal("latitude_y", "");
        KDF.setVal("asset_type", "");
        KDF.setVal("asset_type_id", "");
        KDF.setVal("central_asset_id", "");
        KDF.setVal("asset_responsibility", "");
        KDF.setVal("site_name", "");
        KDF.setVal("site_code", "");
        KDF.setVal("txt_prestige", "");
      }
    }
    KDF.hideWidget(`ahtm_address_search_result_error_${pageID}`);
    KDF.hideWidget(`ahtm_address_table_${pageID}`);
    KDF.hideSection(`area_address_selected_${pageID}`);
    KDF.hideWidget(`ahtm_fulladdress_${pageID}`);
    KDF.hideSection(`area_lacation_description_${pageID}`);
    const fieldID = `txt_search_property_${pageID}`;
    const fieldValue = KDF.getVal(fieldID);
    resetErrorMessage(fieldID, "Enter your postcode in the correct format");
    const tableOfResults = document.getElementById(
      `dform_table_tab_property_search_result_${pageID}`
    );
    $(tableOfResults).remove();
    if (fieldValue) {
      if (KDF.getVal(`search_type_${pageID}`) === 'national') {
        KDF.customdata('search-national-address', '_KDF_ready', true, true, { postcode: fieldValue });
      } else {
        KDF.customdata("search-address-web", this.id, true, true, { search_property: fieldValue });
      }
    } else {
      resetErrorMessage(fieldID, (pageID === "page_about_you") ? 'Enter your postcode in the correct format' : 'Enter the postcode in the correct format');
      KDF.checkProgress();
    }
  });

  $(".manual-address").click(function () {
    resetErrorMessage(
      `txt_search_property_${pageID}`,
      (pageID === "page_about_you") ? 'Enter your postcode in the correct format' : 'Enter the postcode in the correct format'
    );
    enterAddressManually();
  });

  $(".addressNumber, .addressLine1").change(function (e) {
    //  field = e.target.id.substring(13);
    //  KDF.setVal(field, capitalisation(KDF.getVal(field)));
    capitalisation(e.target.id, e.target.value);
  });

  $("#dform_widget_button_but_use_current_location").click(function () {
    getLocation();
    KDF.hideWidget("ahtm_current_location_error");
    KDF.hideSection("area_gis_map");
    KDF.hideWidget(`ahtm_label_for_tab_property_search_result_${pageID}`);
    KDF.hideWidget(`tab_property_search_result_${pageID}`);

    KDF.hideWidget(`ahtm_fulladdress_${pageID}`);
    resetErrorMessage(
      `txt_search_property_${pageID}`,
      "Enter a postcode or street name in the correct format"
    );
  });

  $("#dform_widget_button_but_use_map_location").click(function () {
    setLocator("Map");

    KDF.hideWidget("ahtm_current_location_error");
    KDF.hideWidget(`ahtm_label_for_tab_property_search_result_${pageID}`);
    KDF.hideWidget(`tab_property_search_result_${pageID}`);

    KDF.hideWidget(`ahtm_fulladdress_${pageID}`);
    resetErrorMessage(
      `txt_search_property_${pageID}`,
      "Enter a postcode or street name in the correct format"
    );
  });

  $(
    "#dform_widget_txt_firstname, #dform_widget_txt_surname, #dform_widget_txt_firstname_another, #dform_widget_txt_surname_another"
  ).change(function () {
    capitalisation(this.id, this.value);
  });

  $(
    "#dform_widget_txt_phone, #dform_widget_txt_email, #dform_widget_txt_phone_another, #dform_widget_txt_email_another"
  ).keyup(function () {
    KDF.setVal(this.id.substring(13), this.value.replace(/ /g, ""));
  });

  $(".manual-address").click(function () {
    resetErrorMessage(
      `txt_search_property_${pageID}`,
      (pageID === "page_about_you") ? 'Enter your postcode in the correct format' : 'Enter the postcode in the correct format'
    );
    enterAddressManually();
  });

  $(".property-search-page-button").click(function () {
    locationValidation("Next");
  });
  $(".secondary-cta-property-search").click(function () {
    locationValidation("Submit");
  });
  $(".secondary-cta-property-search-custom").click(function () {
    locationValidation("Submit-Custom");
  });
  $(".location-search-page-button--highways").click(function () {
    locationValidation("Next");
  });
  $(".secondary-cta-location-search--highways").click(function () {
    locationValidation("Submit-Anonymous");
  });
  $(".location-search-page-button--map").click(function () {
    locationValidation("Next");
  });
  $(".secondary-cta-location-search--map").click(function () {
    locationValidation("Submit-Anon");
  });

  $(".address-search-page-button--submit").on("click", function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    locationValidation("Submit");
  });
  $(
    ".address-search-page-button--submit-no-address, .secondary-cta, .secondary-cta-mandatory"
  ).click(function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    submitForm();
  });
  $(".address-search-page-button--submit-custom").click(function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    locationValidation("Submit-Custom");
  });
  $(
    ".address-search-page-button--submit-custom-no-address, .secondary-cta-custom, .secondary-cta-location-search--custom, .address-search-page-button--submit-another-custom-no-address, .secondary-cta-another-custom"
  ).click(function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    submitFormCustom();
  });
  $(".address-search-page-button--next").click(function () {
    locationValidation("Next");
  });
  $(".address-search-page-button--submit-highways").click(function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    submitFormHighways();
  });
  $(".address-search-page-button--submit-another").click(function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    locationValidation("Submit");
  });
  $(
    ".address-search-page-button--submit-another-no-address, .secondary-cta-another"
  ).click(function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    submitForm();
  });
  $(".address-search-page-button--submit-another-custom").click(function () {
    var id = $(this).attr("id");
    setTimeout(disableButton, 0, id);
    locationValidation("Submit-Custom");
  });
  $(".address-search-page-button--next-another").click(function () {
    locationValidation("Next");
  });
  $(".secondary-cta--highways").click(function () {
    KDF.setVal("txt_title", "");
    KDF.setVal("txt_firstname", "");
    KDF.setVal("txt_surname", "");
    KDF.setVal("txt_phone", "");
    KDF.setVal("txt_email", "");
    KDF.setVal("txt_dob", "");
    submitFormHighways();
  });

  function locationValidation(action) {
    function displayErrorMessage(errorMessage, display) {
      $(`#dform_widget_txt_search_property_${pageID}`)
        .parents(`.dform_widget_txt_search_property_${pageID}`)
        .find(".dform_validationMessage")
        .html(errorMessage);
      $(`#dform_widget_txt_search_property_${pageID}`)
        .parents(`.dform_widget_txt_search_property_${pageID}`)
        .find(".dform_validationMessage")
        .css({
          display: display,
        });
      displayError("txt_property_search");
    }

    function hideFieldError(errorMessage, display) {
      $(`#dform_widget_txt_search_property_${pageID}`)
        .parent()
        .find(".dform_validationMessage")
        .html(errorMessage);

      $(`#dform_widget_txt_search_property_${pageID}`)
        .parent()
        .find(".dform_validationMessage")
        .css({
          display: display,
        });
    }

    function displayErrorMessageMap(errorMessage, display) {
      $("#dform_widget_gis_map")
        .find(".dform_validationMessage")
        .html(errorMessage);
      $("#dform_widget_gis_map").find(".dform_validationMessage").css({
        display: display,
      });
      displayError("gis_map");
    }

    function hideFieldErrorMap(errorMessage, display) {
      $("#dform_widget_gis_map")
        .find(".dform_validationMessage")
        .html(errorMessage);
      $("#dform_widget_gis_map").find(".dform_validationMessage").css({
        display: display,
      });
    }

    var defaultErrorMessage = (pageID === "page_about_you") ? 'Enter your postcode in the correct format' : 'Enter the postcode in the correct format';
    hideFieldError(defaultErrorMessage, "none");

    var postcodeSearchValue = $(
      `#dform_widget_txt_search_property_${pageID}`
    ).val();

    var postcodeSearchPattern = $(
      `#dform_widget_txt_search_property_${pageID}`
    ).attr("pattern");

    var postcodeSearchRegex = new RegExp(postcodeSearchPattern);
    var isPostcodeValid = postcodeSearchRegex.test(postcodeSearchValue);

    var isAddressListVisible = $(
      `#dform_table_tab_property_search_result_${pageID}`
    ).is(":visible");

    if (KDF.getVal("locator_page_about_the_location") === "Map") {
      if (KDF.getVal("longitude_x") === "" || KDF.getVal("latitude_y") === "") {
        displayErrorMessageMap(
          "Select a location on the public highway",
          "block"
        );
      } else {
        progressAction(action);
      }
    } else if (
      KDF.getVal("locator_page_about_the_location") === "Current Location"
    ) {
      var defaultErrorMessage =
        "Enter a postcode or street name in the correct format";
      if (
        KDF.getVal("longitude_x") === "" &&
        KDF.getVal("latitude_y") === "" &&
        KDF.getVal("site_name") === ""
      ) {
        displayErrorMessage(defaultErrorMessage, "block");
        $("#dform_widget_txt_search_property_" + pageID).removeClass(
          "dform_fielderror"
        );
      } else {
        progressAction(action);
      }
    } else if (KDF.getVal("locator_" + pageID) === "Manual") {
      if (pageID === "page_about_you") {
        KDF.setWidgetNotRequired("txt_search_property_page_about_you");
        KDF.setVal(
          "txt_cusfulladdress",
          KDF.getVal("txt_cusaddressnumber") +
          " " +
          KDF.getVal("txt_cusaddressline1") +
          ", " +
          KDF.getVal("txt_custown") +
          ", " +
          KDF.getVal("txt_cuspostcode")
        );
      } else if (pageID === "page_about_another") {
        KDF.setWidgetNotRequired("txt_search_property_page_about_another");
        KDF.setVal(
          "txt_cusfulladdress_another",
          KDF.getVal("txt_cusaddressnumber_another") +
          " " +
          KDF.getVal("txt_cusaddressline1_another") +
          ", " +
          KDF.getVal("txt_custown_another") +
          ", " +
          KDF.getVal("txt_cuspostcode_another")
        );
      } else {
        KDF.setWidgetNotRequired(`txt_search_property_${pageID}`);
        KDF.setVal(
          `txt_fulladdress_${pageID}`,
          KDF.getVal(`txt_addressnumber_${pageID}`) +
          " " +
          KDF.getVal(`txt_addressline1_${pageID}`) +
          ", " +
          KDF.getVal(`txt_town_${pageID}`) +
          ", " +
          KDF.getVal(`txt_postcode_${pageID}`)
        );
      }
      progressAction(action);
    } else {
      if (pageID === "page_about_you") {
        if (KDF.getVal("txt_cusfulladdress") === "") {
          if (KDF.getVal(`txt_search_property_${pageID}`) === "") {
            displayErrorMessage(defaultErrorMessage, "block");
          } else {
            if (!isAddressListVisible) {
              displayErrorMessage("Click find address", "block");
            } else {
              displayErrorMessage("Select an address from the list", "block");
            }
          }
        } else {
          progressAction(action);
        }
      } else if (pageID === "page_about_another") {
        if (KDF.getVal("txt_cusfulladdress_another") === "") {
          if (KDF.getVal(`txt_search_property_${pageID}`) === "") {
            displayErrorMessage(defaultErrorMessage, "block");
          } else {
            if (!isAddressListVisible) {
              displayErrorMessage("Click find address", "block");
            } else {
              displayErrorMessage("Select an address from the list", "block");
            }
          }
        } else {
          progressAction(action);
        }
      } else {
        if (KDF.getVal(`txt_fulladdress_${pageID}`) === "") {
          if (KDF.getVal(`txt_search_property_${pageID}`) === "") {
            displayErrorMessage(defaultErrorMessage, "block");
          } else {
            if (!isAddressListVisible) {
              displayErrorMessage("Click find address", "block");
            } else {
              displayErrorMessage("Select an address from the list", "block");
            }
          }
        } else {
          progressAction(action);
        }
      }
    }

    function progressAction(action) {
      if (action === "Submit") {
        submitForm();
      } else if (action === "Submit-Custom") {
        submitFormCustom();
      } else if (action === "Submit-Anonymous") {
        KDF.setVal("txt_title", "");
        KDF.setVal("txt_firstname", "");
        KDF.setVal("txt_surname", "");
        KDF.setVal("txt_phone", "");
        KDF.setVal("txt_email", "");
        KDF.setVal("txt_dob", "");
        submitFormHighways();
      } else if (action === "Submit-Anon") {
        KDF.setVal("txt_title", "");
        KDF.setVal("txt_firstname", "");
        KDF.setVal("txt_surname", "");
        KDF.setVal("txt_phone", "");
        KDF.setVal("txt_email", "");
        KDF.setVal("txt_dob", "");
        submitForm();
      } else {
        KDF.gotoNextPage();
      }
    }
  }
}

function displayErrorMessage(field, errorMessage, display) {
  $(`#dform_widget_${field}`)
    .parents(`.dform_widget_${field}`)
    .find(".dform_validationMessage")
    .html(errorMessage);
  $(`#dform_widget_${field}`)
    .parents(`.dform_widget_${field}`)
    .find(".dform_validationMessage")
    .css({
      display: display,
    });
  displayError(field);
}

function resetErrorMessage(field, defaultErrorMessage) {
  $(`#dform_widget_${field}`)
    .parents(`.dform_widget_${field}`)
    .find(".dform_validationMessage")
    .html(defaultErrorMessage);
  $(`#dform_widget_${field}`)
    .parents(`.dform_widget_${field}`)
    .find(".dform_validationMessage")
    .css({
      display: "none",
    });
  $(`#dform_widget_${field}`).removeClass("dform_fielderror");
}

// Required for KDF.custom submission function/forms adapter field validation
function submitForm() {
  var textFields = $('.dform_page[data-active="true"]').find(
    'input[type="text"], textarea, select[name="txt_"]'
  );
  var textFieldNames = "";
  $(textFields).each(function () {
    textFieldNames += $(this).prop("name") + ",";
  });
  var numberFields = $('.dform_page[data-active="true"]').find(
    'input[type="number"], number, select[name="num_"]'
  );
  var numberFieldNames = "";
  $(numberFields).each(function () {
    numberFieldNames += $(this).prop("name") + ",";
  });
  var numberFields = $('.dform_page[data-active="true"]').find(
    'input[type="number"], number, select[name="cur_"]'
  );
  var numberFieldNames = "";
  $(numberFields).each(function () {
    numberFieldNames += $(this).prop("name") + ",";
  });
  var selectFields = $('.dform_page[data-active="true"]').find(
    'select[name^="sel_"]:not([name^="sel_property_search_result_"]), select[name^="txt_"]'
  );
  var selectFieldNames = "";
  $(selectFields).each(function () {
    selectFieldNames += $(this).prop("name") + ",";
  });
  var checkFields = $('.dform_page[data-active="true"]').find(
    'input[type="checkField"], checkField, select[name="chk_"]'
  );
  var checkFieldNames = "";
  $(checkFields).each(function () {
    checkFieldNames += $(this).prop("name") + ",";
  });
  var checkFields = $('.dform_page[data-active="true"]').find(
    'input[type="checkField"], checkField, select[name="mchk_"]'
  );
  var checkFieldNames = "";
  $(checkFields).each(function () {
    checkFieldNames += $(this).prop("name") + ",";
  });
  var radioFields = $('.dform_page[data-active="true"]').find(
    'input[type="radio"], radio, select[name="rad_"]'
  );
  var radioFieldNames = "";
  $(radioFields).each(function () {
    radioFieldNames += $(this).prop("name") + ",";
  });
  var emailFields = $('.dform_page[data-active="true"]').find(
    'input[type="email"], email, select[name="eml_"]'
  );
  var emailFieldNames = "";
  $(emailFields).each(function () {
    emailFieldNames += $(this).prop("name") + ",";
  });
  var telFields = $('.dform_page[data-active="true"]').find(
    'input[type="tel"], tel, select[name="tel_"]'
  );
  var telFieldNames = "";
  $(telFields).each(function () {
    telFieldNames += $(this).prop("name") + ",";
  });
  var dateFields = $('.dform_page[data-active="true"]').find(
    'input[type="date"], date, select[name="dt_"]'
  );
  var dateFieldNames = "";
  $(dateFields).each(function () {
    dateFieldNames += $(this).prop("name") + ",";
  });
  var timeFields = $('.dform_page[data-active="true"]').find(
    'input[type="time"], time, select[name="time_"]'
  );
  var timeFieldNames = "";
  $(timeFields).each(function () {
    timeFieldNames += $(this).prop("name") + ",";
  });

  if (KDF.getVal('le_associated_obj_id')) {
    // KDF.save();
    KDF.markComplete();
    KDF.gotoPage('page_complete', true, true, true);
  } else {
    KDF.custom(
      "kdf-save-web",
      "_submit_function",
      textFieldNames +
      numberFieldNames +
      selectFieldNames +
      checkFieldNames +
      radioFieldNames +
      emailFieldNames +
      telFieldNames +
      dateFieldNames +
      timeFieldNames +
      "le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type",
      "le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type",
      true,
      true,
      true
    );
  }
}

function submitFormCustom() {
  var textFields = $('.dform_page[data-active="true"]').find(
    'input[type="text"], textarea, select[name="txt_"]'
  );
  var textFieldNames = "";
  $(textFields).each(function () {
    textFieldNames += $(this).prop("name") + ",";
  });
  var numberFields = $('.dform_page[data-active="true"]').find(
    'input[type="number"], number, select[name="num_"]'
  );
  var numberFieldNames = "";
  $(numberFields).each(function () {
    numberFieldNames += $(this).prop("name") + ",";
  });
  var numberFields = $('.dform_page[data-active="true"]').find(
    'input[type="number"], number, select[name="cur_"]'
  );
  var numberFieldNames = "";
  $(numberFields).each(function () {
    numberFieldNames += $(this).prop("name") + ",";
  });
  var selectFields = $('.dform_page[data-active="true"]').find(
    'select[name^="sel_"]:not([name^="sel_property_search_result_"]), select[name^="txt_"]'
  );
  var selectFieldNames = "";
  $(selectFields).each(function () {
    selectFieldNames += $(this).prop("name") + ",";
  });
  var checkFields = $('.dform_page[data-active="true"]').find(
    'input[type="checkField"], checkField, select[name="chk_"]'
  );
  var checkFieldNames = "";
  $(checkFields).each(function () {
    checkFieldNames += $(this).prop("name") + ",";
  });
  var checkFields = $('.dform_page[data-active="true"]').find(
    'input[type="checkField"], checkField, select[name="mchk_"]'
  );
  var checkFieldNames = "";
  $(checkFields).each(function () {
    checkFieldNames += $(this).prop("name") + ",";
  });
  var radioFields = $('.dform_page[data-active="true"]').find(
    'input[type="radio"], radio, select[name="rad_"]'
  );
  var radioFieldNames = "";
  $(radioFields).each(function () {
    radioFieldNames += $(this).prop("name") + ",";
  });
  var emailFields = $('.dform_page[data-active="true"]').find(
    'input[type="email"], email, select[name="eml_"]'
  );
  var emailFieldNames = "";
  $(emailFields).each(function () {
    emailFieldNames += $(this).prop("name") + ",";
  });
  var telFields = $('.dform_page[data-active="true"]').find(
    'input[type="tel"], tel, select[name="tel_"]'
  );
  var telFieldNames = "";
  $(telFields).each(function () {
    telFieldNames += $(this).prop("name") + ",";
  });
  var dateFields = $('.dform_page[data-active="true"]').find(
    'input[type="date"], date, select[name="dt_"]'
  );
  var dateFieldNames = "";
  $(dateFields).each(function () {
    dateFieldNames += $(this).prop("name") + ",";
  });
  var timeFields = $('.dform_page[data-active="true"]').find(
    'input[type="time"], time, select[name="time_"]'
  );
  var timeFieldNames = "";
  $(timeFields).each(function () {
    timeFieldNames += $(this).prop("name") + ",";
  });

  KDF.custom(
    "kdf-save-custom",
    "_submit_function",
    textFieldNames +
    numberFieldNames +
    selectFieldNames +
    checkFieldNames +
    radioFieldNames +
    emailFieldNames +
    telFieldNames +
    dateFieldNames +
    timeFieldNames +
    "le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type,le_form_name,interactionid",
    "le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type,le_form_name,interactionid",
    true,
    true,
    true
  );

  // saveForm("false");
}

function submitFormHighways() {
  if (KDF.getVal("level_3_data") !== "") {
    KDF.setVal(
      "le_title",
      "Report about " +
      KDF.getVal("level_1_data") +
      " - " +
      KDF.getVal("level_2_data") +
      " - " +
      KDF.getVal("level_3_data")
    );
  } else {
    if (KDF.getVal("level_2_data") !== "") {
      KDF.setVal(
        "le_title",
        "Report about " +
        KDF.getVal("level_1_data") +
        " - " +
        KDF.getVal("level_2_data")
      );
    } else {
      KDF.setVal("le_title", "Report about " + KDF.getVal("level_1_data"));
    }
  }

  KDF.setVal(
    "faultinfo",
    KDF.getVal("le_title") + " - " + KDF.getVal("txta_report_details")
  );

  KDF.setVal("locinfo", KDF.getVal("txt_fulladdress"));

  KDF.setVal(
    "le_description",
    KDF.getVal("faultinfo") + " || " + KDF.getVal("locinfo")
  );

  KDF.custom(
    "kdf-save-custom",
    "_submit_function",
    "le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type,le_form_name,service_code,subject_code,txt_formtitle,txt_title,txt_firstname,txt_surname,txt_dob,txt_phone,txt_email,level_1_data,level_2_data,level_3_data,txt_streetdescription,txt_usrn,txt_streetid,txt_fulladdress,txt_uprn,txt_propertyid,txt_postcodearea,txta_report_details,txta_location_details,txt_channel,locinfo,faultinfo,txt_receivedby,doctitle,docpath,txt_customertype,secondcustomer,linkedcaseid,asset_type,asset_type_id,central_asset_id,asset_responsibility,object_id,txt_prestige,longitude_x,latitude_y,site_name,site_code,empref,confirmenq,confirmjobid,gis_map,gis_map_lat,gis_map_lon,locator_page_about_the_location,file_upload",
    "le_channel,le_eventcode,le_title,le_description,le_queue,le_associated_obj_type,le_form_name,service_code,subject_code,txt_formtitle",
    true,
    true,
    true
  );

  // saveForm("false", "highways_report");
}

function saveForm(le_upload_file, le_form_name) {
  KDF.setVal("le_upload_file", le_upload_file);
  KDF.setVal("le_form_name", le_form_name);

  // Get a reference to the form
  const form = document.querySelector("#dform_container");

  // Filter on input types
  const inputs = form.querySelectorAll(
    "input, multicheckbox, select, textarea"
  );

  // Create an object to store the IDs and values
  const formData = {};

  // Loop through each field in the form
  inputs.forEach((input) => {
    // Add the ID and value to the object if they exist
    if (input.value !== "" && input.value !== "Please select...")
      formData[input.name] = input.value;
  });

  if (KDF.getVal("txt_reference")) {
    KDF.customdata("kdf-update-web-dev", "saveForm", true, true, formData);
  } else {
    KDF.customdata("kdf-save-web-dev", "saveForm", true, true, formData);
  }
}

// Produce Submission Review Page
//Start: Review Page scripting
var formUserPath = [];

function getAndSetReviewPageData() {
  // build up a history of all page visited by the user in the order visited
  var thisPageNumber = $('.dform_page[data-active="true"]:visible').attr(
    "data-pos"
  );

  formUserPath.push(thisPageNumber);
  // console.log("formUserPath", formUserPath);
  // function runs on each page change, but most of the functionality only required when landing on the review page
  var reviewPageIsVisible = $("#dform_page_page_review:visible").length;
  if (reviewPageIsVisible) {
    // reset the review content HTML
    $("#review-page-content-container").html("");
    // take the user's progress history and reverse it to be able to look backwards over the pages visited
    var formUserPathReversed = formUserPath.slice().reverse();
    // build up a history of *relevant* pages visited
    // i.e. if a page is viewed on the first pass but the user goes back from the review page and skips a page, it is not relevant
    // e.g. if a user's journey is pages: 1, 2, 3, 4, 5, 2, 4, 5... [skipping 3]
    // ... the user's relevant journey is: 1, 2, 4, 5
    // it's only possible to know this by looking back from the reivew page
    var relevantPagesReversed = [];
    for (var i = 0; i < formUserPathReversed.length - 1; i++) {
      // if the page being checked is greater than the previous page (i+1)...
      // it is part of a user's regular path
      // if it is not greater, it is part of a previous path that the user has since overwritten
      // e.g. from above, the correct backwards path is 5, 4, 2, 1 [skipping 5, 4, 3, 2]
      //  console.log(formUserPathReversed[i], ">", formUserPathReversed[i+1], "?");

      if (
        parseInt(formUserPathReversed[i]) >
        parseInt(formUserPathReversed[i + 1])
      ) {
        // console.log(formUserPathReversed[i]);
        // console.log(formUserPathReversed[i+1]);
        //add relevant page to array
        relevantPagesReversed.push(formUserPathReversed[i + 1]);
        // console.log(relevantPagesReversed);
      } else {
        // console.log(relevantPagesReversed);
        // remove irrelevant page from array
        formUserPathReversed.splice(i + 1, 1);
        // reset i to start checking again from same place
        i--;
      }
    }
    var relevantPages = relevantPagesReversed.slice().reverse();
    // console.log("relevantPagesReversed", relevantPagesReversed);
    // console.log("relevantPages", relevantPages);
    var formPages = $('.dform_page[data-active="true"]').not(
      "#dform_page_page_review"
    );
    // loop through form pages
    formPages.each(function (i) {
      var pageNumber = $(this).attr("data-pos");
      // check that the page being added to review page is a relevant one
      if (relevantPages.indexOf(pageNumber) > -1) {
        var pageId = $(formPages[i]).attr("id");
        var pageName = pageId.split("dform_page_")[1];
        var contentDivId = "review-page-content--" + pageName;
        $("#review-page-content-container").append(
          '<div class="review-page-content-section" id=' +
          contentDivId +
          "></div>"
        );
        var onclickFunction =
          'KDF.gotoPage("' + pageName + '", true, true, true)';
        var buttonHtml =
          "<button class='review-page-edit-button' onclick='" +
          onclickFunction +
          "'>Edit</button>";
        $("#" + contentDivId).append(buttonHtml);
        var pageHeader = $(formPages[i]).find("h2").first().text();
        $("#" + contentDivId).append("<h3>" + pageHeader + "</h3>");
        var pageFields = $(formPages[i])
          .find(".dform_widget_field")
          // filter for outer div visible (question not hidden to user)
          .filter(function () {
            return $(this).css("display") === "block";
          });
        // loop through fields on each page
        pageFields.each(function (j) {
          //console.log($(pageFields[j]));

          var pageFieldType = $(pageFields[j]).attr("data-type");
          var fieldName = $(pageFields[j]).attr("data-name");
          var fieldClass = $(pageFields[j]).attr("class");
          //console.log(fieldClass);
          // console.log(fieldClass.indexOf('search-address-web'));
          // initialise field label and value, to be reassigned further down
          var fieldLabel = "";
          var fieldValue = "";
          // get questions/answers for fields that have basic HTML "label" and "input"
          if (
            pageFieldType !== "textarea" &&
            pageFieldType !== "select" &&
            pageFieldType !== "radio" &&
            pageFieldType !== "checkbox" &&
            pageFieldType !== "multicheckbox" &&
            // pageFieldType !== "number" &&
            pageFieldType !== "date"
          ) {
            // filter out postcode search fields
            // postcode value is visible further down the page as part of the address textbox fields
            if (fieldClass.indexOf("search-postcode") >= 0) {
            } else if (fieldClass.indexOf("search-address-web") >= 0) {
            } else {
              fieldLabel = $(
                "div[data-name=" + fieldName + "] > div > label"
              ).text();
              if (pageFieldType === "number" && fieldName.startsWith("cur_")) {
                fieldLabel = $(
                  "div[data-name=" + fieldName + "] > div > label"
                ).text();
                fieldValue =
                  "Â£" +
                  $(
                    "div[data-name=" + fieldName + "] > div > div > input"
                  ).val();
              } else {
                fieldValue = $(
                  "div[data-name=" + fieldName + "] > div > input"
                ).val();
              }
            }
          }
          if (pageFieldType === "textarea") {
            fieldLabel = $(
              "div[data-name=" + fieldName + "] > div > label"
            ).text();
            fieldValue = $(
              "div[data-name=" + fieldName + "] > div > textarea"
            ).val();
          }
          if (pageFieldType === "select") {
            fieldLabel = $(
              "div[data-name=" + fieldName + "] > div > label"
            ).text();

            fieldValue = $(
              "div[data-name=" +
              fieldName +
              "] > div > select > option:selected"
            ).text();
          }
          if (pageFieldType === "radio") {
            var radioFieldset = $(
              "div[data-name=" + fieldName + "] > div > fieldset"
            );

            fieldLabel = $(radioFieldset).find("legend").text();
            $(radioFieldset)
              .find("span")
              .each(function () {
                if ($(this).find("input").prop("checked")) {
                  fieldValue = $(this).find("label").text();
                }
              });
          }
          if (pageFieldType === "checkbox") {
            if ($(`div[data-name=${fieldName}] input[type='checkbox']`).prop("checked")) {
              fieldLabel = $(`div[data-name=${fieldName}] > div > label`).text();
              fieldValue = $(`div[data-name=${fieldName}] > div > input`).val();
            }
          }
          if (pageFieldType === "multicheckbox") {
            var checkboxFieldset = $(
              "div[data-name=" + fieldName + "] > div > fieldset"
            );

            fieldLabel = $(checkboxFieldset).find("legend").text();
            var checkboxValueArr = [];
            $(checkboxFieldset)
              .find("span")
              .each(function () {
                if ($(this).find("input").prop("checked")) {
                  checkboxValueArr.push("</br>" + $(this).find("label").text());
                }
              });
            fieldValue = checkboxValueArr.join(", ");
          }
          if (pageFieldType === "date") {
            fieldLabel = $(
              "div[data-name=" + fieldName + "] > div > label"
            ).text();

            var dateFieldValue = $(
              "div[data-name=" + fieldName + "] > div > input"
            ).val();

            if (dateFieldValue) {
              // parse date from yyyy-mm-dd to dd/mm/yyyy
              var dateFieldItems = dateFieldValue.split("-");
              fieldValue =
                dateFieldItems[2] +
                "/" +
                dateFieldItems[1] +
                "/" +
                dateFieldItems[0];
            }
          }
          // check fieldLabel to make sure field has not been filtered out (e.g. postcode search field)
          if (fieldLabel) {
            // set value for optional fields that are visible to the user but not answered
            if (fieldValue === "") {
              fieldValue = "Not answered";
            }
            $("#" + contentDivId).append(
              '<p class="review-page-item"><span class="review-page-question-text">' +
              fieldLabel +
              ":</span> " +
              fieldValue +
              "</p>"
            );
          }
        });
      }
    });
  }
}

function assignStepSize(fieldname, step) {
  var deformWidget = $("#dform_widget_" + fieldname);
  deformWidget.attr("step", step);
}

const fixCurrency = field => {
  const inputValue = $(`#dform_widget_${field}`).val().replace(/[^\d]/g, ''); // Remove non-numeric characters

  // Remove leading zeros
  const nonZeroIndex = inputValue.search(/[^0]/);
  const formattedValue = inputValue.slice(nonZeroIndex);

  let value;
  if (formattedValue.length > 2) {
    // Format the input value
    const integerPart = formattedValue.slice(0, -2);
    const decimalPart = formattedValue.slice(-2);
    value = integerPart + '.' + decimalPart;
  } else {
    value = '0.' + formattedValue.padStart(2, '0');
  }

  // Update the input value
  $(`#dform_widget_${field}`).val(value);
};

function timeCheck(fieldname, datefield) {
  if (KDF.getVal(fieldname) !== "" && KDF.getVal(datefield) !== "") {
    var timeField = KDF.getVal(fieldname);
    var dateField = KDF.getVal(datefield);
    var now = new Date();
    var dd = now.getDate();
    var mm = now.getMonth() + 1;
    var yyyy = now.getFullYear();
    var hh = now.getHours();
    var min = now.getMinutes();
    //Start: Correct <10's
    {
      //Start: Month
      {
        if (mm < 10) {
          mm = "0" + mm;
        }
      }
      //Finish: Month
      //Start: Date
      {
        if (dd < 10) {
          dd = "0" + dd;
        }
      }
      //Finish: Date
      //Start: Hour
      {
        if (hh < 10) {
          hh = "0" + hh;
        }
      }
      //Finish: Hour
      //Start: Minute
      {
        if (min < 10) {
          min = "0" + min;
        }
      }
      //Finish: Minute
    }

    //Finish: Correct <10's
    var date = yyyy + "-" + mm + "-" + dd;
    var time = hh + ":" + min;
    var deformWidget = $("#dform_widget_" + fieldname),
      status;
    if (dateField === date) {
      if (timeField <= time) {
        status = false;
        errorTimeout(fieldname);
        return status;
      } else {
        if (
          KDF.getVal(fieldname) >= deformWidget.attr("min") &&
          KDF.getVal(fieldname) <= deformWidget.attr("max")
        ) {
          status = true;
        } else {
          status = false;
          errorTimeout(fieldname);
        }
        return status;
      }
    } else {
      if (
        KDF.getVal(fieldname) >= deformWidget.attr("min") &&
        KDF.getVal(fieldname) <= deformWidget.attr("max")
      ) {
        status = true;
      } else {
        status = false;
        errorTimeout(fieldname);
      }
      return status;
    }
  }
}

function errorTimeout(fieldname) {
  setTimeout(function () {
    displayError(fieldname);
  }, 0);
}

function displayError(fieldname) {
  $("#dform_widget_" + fieldname).addClass("dform_fielderror");
  KDF.showFieldError("#dform_widget_" + fieldname);
}

function assignTimeframe(fieldname, min, max) {
  var deformWidget = $("#dform_widget_" + fieldname);
  deformWidget.attr("min", min);
  deformWidget.attr("max", max);
}

function validateFields(input) {
  var errors = 0;
  if ($(input).val() != "") {
    if ($(input).val() < $(input).prop("min")) {
      errors++;
    }
    if ($(input).val() > $(input).prop("max")) {
      errors++;
    }
  }
  if (errors > 0) {
    KDF.showFieldError(input);
  }

  return errors;
}

// Reorder the date so it appears in the format dd/mm/yyyy
function dateString(field) {
  yearString = KDF.getVal(field).slice(0, 4);
  monthString = KDF.getVal(field).slice(5, 7);
  dayString = KDF.getVal(field).slice(8, 10);
  correctString = dayString + "/" + monthString + "/" + yearString;
  return correctString;
}
function convertDateToField(dateField, textField) {
  yearString = KDF.getVal(dateField).slice(0, 4);
  monthString = KDF.getVal(dateField).slice(5, 7);
  dayString = KDF.getVal(dateField).slice(8, 10);
  correctString = dayString + "/" + monthString + "/" + yearString;
  KDF.setVal(textField, correctString);
}

// Character Count Functions
function characterCounter(field) {
  var string = KDF.getVal(field);
  var stringLength = string.length;
  var idConcat = "characterCounter" + field;

  document.getElementById(idConcat).innerHTML =
    document.getElementById("dform_widget_" + field).maxLength -
    stringLength +
    " characters remaining";
}

function characterCountAppender(field) {
  $("#dform_widget_" + field)
    .parent()
    .append(
      "<div class=character-count aria-live=polite id=characterCounter" +
      field +
      "></div>"
    );

  characterCounter(field);
}

// Set String to Title Case
function capitalisation(id, value) {
  const string = capitalizeString(value);
  const inputField = document.querySelector("#" + id);
  inputField.value = string;
}

function capitalizeString(str) {
  str = str.toLowerCase();
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

// Redirect to review page when viewing a case in the back office.
function gotoReviewPage() {
  KDF.showPage("page_review_request");
  KDF.gotoPage("page_review_request");
}

// Write Multi Checkbox values to a text field
function writeMultiCheckboxToTextField(multiCheck, textField) {
  var re = /,/gi;
  var str = KDF.getVal(multiCheck).toString();
  var string = str.replace(re, ", ");
  KDF.setVal(textField, string);
}

function resetFieldValue() {
  for (var i = 0; i < arguments.length; i++) {
    KDF.setVal(arguments[i], "");
  }
}

function hideWidget() {
  for (var i = 0; i < arguments.length; i++) {
    KDF.hideWidget(arguments[i]);
  }
}

function showWidget() {
  for (var i = 0; i < arguments.length; i++) {
    KDF.showWidget(arguments[i]);
  }
}

function hideSection() {
  for (var i = 0; i < arguments.length; i++) {
    KDF.hideSection(arguments[i]);
  }
}

function showSection() {
  for (var i = 0; i < arguments.length; i++) {
    KDF.showSection(arguments[i]);
  }
}

function hidePage() {
  for (var i = 0; i < arguments.length; i++) {
    KDF.hidePage(arguments[i]);
  }
}

function showPage() {
  for (var i = 0; i < arguments.length; i++) {
    KDF.showPage(arguments[i]);
  }
}

//Highways Section (may potentially want partitioning into its own file)
function setLocator(locator) {
  KDF.setVal("locator_" + pageID, locator);
  if (locator === "Map") {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    KDF.hideSection("area_property_lookup_expanded");
    KDF.showSection("area_gis_map");
    KDF.hideSection("area_lacation_description");
  } else if (locator === "Current Location") {
    if (KDF.getVal("txt_fulladdress") !== "") {
      KDF.setWidgetNotRequired("txt_search_property_" + pageID);
      KDF.showSection("area_property_lookup_expanded");
      KDF.hideSection("area_gis_map");
      KDF.showSection("area_lacation_description");
    }
  } else {
    KDF.setWidgetRequired("txt_search_property_" + pageID);
    KDF.showSection("area_property_lookup_expanded");
    KDF.hideSection("area_gis_map");
    KDF.showSection("area_lacation_description");
  }

  checkCurrentPageFields();
}

function checkMaxDay(id, dd, mm, yy) {
  const dayID = `${id === "dform_widget_date_field_another"
      ? "dform_widget_num_date_dd_another"
      : "dform_widget_num_date_dd"
    }`;
  const ddMax = new Date(yy, mm, 0).getDate();
  $(`#${dayID}`).attr("max", ddMax);
  if (dd > ddMax) {
    $(`#${dayID}`).addClass("dform_fielderror");
  } else if (dd !== "") {
    $(`#${dayID}`).removeClass("dform_fielderror");
  }
}

function checkDate(id, another, dd, mm, yy) {
  if (!dd)
    $(`#dform_widget_num_date_dd${another}`).addClass("dform_fielderror");
  if (!mm)
    $(`#dform_widget_num_date_mm${another}`).addClass("dform_fielderror");
  if (!yy)
    $(`#dform_widget_num_date_yy${another}`).addClass("dform_fielderror");
  $(`#${id}`)
    .find(".dform_validationMessage")
    .text(
      `Enter ${id === "dform_widget_date_field_another" ? "their" : "your"
      } date of birth`
    )
    .hide();

  if (!dd && mm && yy)
    $(`#dform_widget_date_field${another}`)
      .find(".dform_validationMessage")
      .text("Date of birth must include a day")
      .show();
  if (dd && !mm && yy)
    $(`#dform_widget_date_field${another}`)
      .find(".dform_validationMessage")
      .text("Date of birth must include a month")
      .show();
  if (dd && mm && !yy)
    $(`#dform_widget_num_date_yy${another}`).removeClass("dform_fielderror");
  if (!dd && !mm && yy)
    $(`#dform_widget_date_field${another}`)
      .find(".dform_validationMessage")
      .text("Date of birth must include a day and month")
      .show();
  if (!dd && mm && !yy)
    $(`#dform_widget_date_field${another}`)
      .find(".dform_validationMessage")
      .text("Date of birth must include a day and year")
      .show();
  if (dd && !mm && !yy) {
    $(`#dform_widget_num_date_mm${another}`).removeClass("dform_fielderror");
    $(`#dform_widget_num_date_yy${another}`).removeClass("dform_fielderror");
  }
  if (!dd && !mm && !yy)
    $(`#dform_widget_date_field${another}`)
      .find(".dform_validationMessage")
      .text(`Enter ${another === "_another" ? "their" : "your"} date of birth`)
      .show();

  if (dd && mm && yy) {
    if (validDate(id, dd, mm, yy)) {
      const formattedDate = `${dd.toString().padStart(2, '0')}/${mm.toString().padStart(2, '0')}/${yy.substr(0, 4)}`;
      if (id === "dform_widget_date_field_another") {
        $("#dform_widget_txt_dob_another").val(formattedDate);
        $("#dform_widget_dt_dob_another").val(formattedDate);
      } else {
        $("#dform_widget_txt_dob").val(formattedDate);
        $("#dform_widget_dt_dob").val(formattedDate);
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
  const dateFields = $(".date-input-fields input");
  const parentContainer = $(`#${id}`);
  const validationMsg = parentContainer
    .find(".dform_validationMessage")
    .text(
      `Enter ${id === "dform_widget_date_field_another" ? "their" : "your"
      } date of birth`
    )
    .hide();
  const date = new Date(year, month - 1, day);
  const now = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);
  minDate.setHours(0, 0, 0, 0);
  if (
    date.getFullYear() != year ||
    date.getMonth() + 1 != month ||
    date.getDate() != day
  ) {
    validationMsg.text("Date of birth must be a real date").show();
    return false;
  }
  if (date > now) {
    validationMsg.text("Date of birth must be today or in the past").show();
    return false;
  }
  if (date < minDate) {
    validationMsg
      .text("Date of birth cannot be more that 120 years in the past")
      .show();
    return false;
  }
  return true;
}

var vmap;
var mapParams = {
  WKID: 27700,
  assetMaxDrawZoom: 17,
  assetClick: {
    radius: 3,
    radiusUnit: "esriMeters",
  },
  hostUrl: "https://utility.arcgis.com",
};
var featureLayers = {
  boundary: {
    id: 0,
    url: "/usrsvcs/servers/97cfdc3a164c48219826b907c0a5064f/rest/services/AGOL/Boundaries/MapServer",
  },
  signs: {
    id: 0,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  trafficsignals: {
    id: 41,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  drains: {
    id: 2,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  gritbins: {
    id: 3,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  litterbins: {
    id: 4,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  streetfurniture: {
    id: 5,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  streetlights: {
    id: 6,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  structures: {
    id: 7,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  fences: {
    id: 8,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  pavements: {
    id: 57,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  roads: {
    id: 55,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  citycentre: {
    id: 14,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  hotspotasspss: {
    id: 15,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  hotspotschools: {
    id: 16,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  principalshopsite: {
    id: 17,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  neighbourhoodshopsite: {
    id: 18,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  gateway: {
    id: 19,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  prowflytipping: {
    id: 23,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  vegetation: {
    id: 24,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  trees: {
    id: 27,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  parks: {
    id: 49,
    url: "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer",
  },
  url(layer) {
    return vmap.getMapParams().hostUrl + layer.url;
  },
  getQueryLayer(layer) {
    return {
      url: this.url(layer) + "/" + layer.id,
      wkid: layer.wkid,
    };
  },
};
var queriesComplete = 0;
var queryCount = 0;
var retrievedFeatures = [];

function clearMapData() {
  resetErrorMessage(
    "txt_search_property_" + pageID,
    (pageID === "page_about_you") ? 'Enter your postcode in the correct format' : 'Enter the postcode in the correct format'
  );

  KDF.setVal("lnglat", "");
  KDF.setVal("txt_fulladdress", "");
  KDF.setVal("txt_streetdescription", "");
  KDF.setVal("txt_uprn", "");
  KDF.setVal("txt_propertyid", "");
  KDF.setVal("txt_postcodearea", "");
  KDF.setVal("txt_usrn", "");
  KDF.setVal("txt_streetid", "");
  KDF.setVal("object_id", "");
  KDF.setVal("longitude_x", "");
  KDF.setVal("latitude_y", "");
  KDF.setVal("asset_type", "");
  KDF.setVal("asset_type_id", "");
  KDF.setVal("central_asset_id", "");
  KDF.setVal("asset_responsibility", "");
  KDF.setVal("site_name", "");
  KDF.setVal("site_code", "");
  KDF.setVal("txt_prestige", "");
  KDF.hideSection("area_lacation_description_" + pageID);
  checkCurrentPageFields();
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(reverseGEOCode, showError);
    KDF.hideMessages();
  } else {
    //console.log("Geolocation is not supported by this browser.");
  }
}

function reverseGEOCode(position) {
  const property_search_result = [];
  KDF.hideWidget("ahtm_address_search_result_error_" + pageID);
  KDF.hideWidget("ahtm_address_table_" + pageID);
  KDF.setVal("tab_property_search_result_" + pageID, property_search_result);
  KDF.hideWidget("txt_addressnumber_" + pageID);
  KDF.setVal("txt_addressnumber_" + pageID, "");
  KDF.hideWidget("txt_addressline1_" + pageID);
  KDF.setVal("txt_addressline1_" + pageID, "");
  KDF.hideWidget("txt_town_" + pageID);
  KDF.setVal("txt_town_" + pageID, "");
  KDF.hideWidget("txt_postcode_" + pageID);
  KDF.setVal("txt_postcode_" + pageID, "");
  KDF.setVal("txt_fulladdress_" + pageID, "");
  KDF.setVal("txt_postcodearea_" + pageID, "");
  KDF.setVal("txt_uprn_" + pageID, "");
  KDF.setVal("txt_propertyid_" + pageID, "");
  KDF.setVal("txt_usrn_" + pageID, "");
  KDF.setVal("txt_streetid_" + pageID, "");
  KDF.hideSection("area_address_selected_" + pageID);
  KDF.showWidget("ahtm_fulladdress_" + pageID);
  KDF.hideSection("area_lacation_description_" + pageID);

  clearMapData();

  KDF.setVal(
    "lnglat",
    position.coords.longitude + "," + position.coords.latitude
  );
  KDF.custom(
    "retrieve-current-location-web",
    "function_reverseGEOCode",
    "lnglat",
    "lnglat",
    true,
    true,
    true
  );
}

function showError(error) {
  KDF.showWidget("ahtm_current_location_error");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      // $("#current-location-error").val("Access has been denied to location services");
      break;
    case error.POSITION_UNAVAILABLE:
      // $("#current-location-error").val("We haven't been able to obtain your location");
      break;
    case error.TIMEOUT:
      // $("#current-location-error").val("We haven't been able to obtain your location");
      break;
    case error.UNKNOWN_ERROR:
      // $("#current-location-error").val("We have encountered an error retrieveing your location");
      break;
  }
}

function showPosition(position) {
  require([
    "esri/geometry/Point",
    "esri/tasks/GeometryService",
    "esri/tasks/ProjectParameters",
    "esri/SpatialReference",
    "dojo/domReady!",
  ], function (Point, GeometryService, ProjectParameters, SpatialReference) {
    var outSR = "27700";

    var geometryService = new GeometryService(
      "https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
    );

    var inputpoint = new Point({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
    var projectParams = new ProjectParameters();
    projectParams.geometries = [inputpoint];
    projectParams.outSR = new SpatialReference({
      wkid: outSR,
    });
    geometryService.project(projectParams, (result) => {
      let outputpoint = result[0];
      KDF.setVal("latitude_y", outputpoint.y);
      KDF.setVal("longitude_x", outputpoint.x);
      KDF.setVal("gis_map_lat", outputpoint.y);
      KDF.setVal("gis_map_lon", outputpoint.x);
      setLocator("Current Location");
    });
  });
}

function extentChanged(evt) {
  vmap.zoomLevelChanged(evt, zoomChanged);
}

function zoomChanged(evt) {
  setClickRadius(evt.lod.level);
  if (vmap.getMapParams().assetMaxDrawZoom) {
    if (evt.lod.level >= vmap.getMapParams().assetMaxDrawZoom) {
      drawLayer(evt);
    }
  } else {
    removeLayer(evt);
    if (evt.lod.level >= 6) {
      drawLayer(evt);
    }
  }
}

function drawLayer(evt) {
  if (KDF.getVal("level_1_data") === "Gulley") {
    drawDrains();
  }

  if (
    KDF.getVal("level_1_data") === "Fence" ||
    KDF.getVal("level_1_data") === "Handrail" ||
    KDF.getVal("level_1_data") === "Pedestrian Barrier" ||
    KDF.getVal("level_1_data") === "Vehicle Barrier/Safety Fence"
  ) {
    drawFences();
  }
  if (KDF.getVal("level_1_data") === "Grit Bin") {
    drawGritBins();
  }
  if (KDF.getVal("level_1_data") === "Litter Bin") {
    drawLitterBins();
  }

  if (
    KDF.getVal("level_1_data") === "Cameras / Electronic Signs" ||
    KDF.getVal("level_1_data") === "Illuminated Road Signs" ||
    KDF.getVal("level_1_data") === "Lit Bollard" ||
    KDF.getVal("level_1_data") === "Non-Illuminated Road Signs" ||
    KDF.getVal("level_1_data") === "Street Name Plates"
  ) {
    drawSigns();
  }

  if (
    KDF.getVal("level_1_data") === "Art or Sculpture" ||
    KDF.getVal("level_1_data") === "Bollard" ||
    KDF.getVal("level_1_data") === "Cycle Barrier" ||
    KDF.getVal("level_1_data") === "Cycle Stand" ||
    KDF.getVal("level_1_data") === "Seat or Bench"
  ) {
    drawStreetFurniture();
  }
  if (KDF.getVal("level_1_data") === "Street Light") {
    drawStreetLights();
  }

  if (
    KDF.getVal("level_1_data") === "Bridge" ||
    KDF.getVal("level_1_data") === "Culvert" ||
    KDF.getVal("level_1_data") === "Earth Bank / Cutting" ||
    KDF.getVal("level_1_data") === "Gantry" ||
    KDF.getVal("level_1_data") === "Retaining Wall" ||
    KDF.getVal("level_1_data") === "Subway"
  ) {
    drawStructures();
  }
  if (KDF.getVal("level_1_data") === "Traffic Signals") {
    drawTrafficSignals();
  }

  if (
    KDF.getVal("level_1_data") === "Tree or Branch" ||
    KDF.getVal("level_1_data") === "Tree Grille"
  ) {
    drawTrees();
  }

  if (
    KDF.getVal("level_1_data") === "Box Planter" ||
    KDF.getVal("level_1_data") === "Grass Verge" ||
    KDF.getVal("level_1_data") === "Hedge" ||
    KDF.getVal("level_1_data") === "Plants or Planted Area"
  ) {
    drawVegetation();
  }
}

function drawAssetLayer() {
  drawBoundary();
  if (KDF.getVal("level_1_data") === "Gulley") {
    drawDrains();
  }

  if (
    KDF.getVal("level_1_data") === "Fence" ||
    KDF.getVal("level_1_data") === "Handrail" ||
    KDF.getVal("level_1_data") === "Pedestrian Barrier" ||
    KDF.getVal("level_1_data") === "Vehicle Barrier/Safety Fence"
  ) {
    drawFences();
  }
  if (KDF.getVal("level_1_data") === "Grit Bin") {
    drawGritBins();
  }
  if (KDF.getVal("level_1_data") === "Litter Bin") {
    drawLitterBins();
  }

  if (
    KDF.getVal("level_1_data") === "Cameras / Electronic Signs" ||
    KDF.getVal("level_1_data") === "Illuminated Road Signs" ||
    KDF.getVal("level_1_data") === "Lit Bollard" ||
    KDF.getVal("level_1_data") === "Non-Illuminated Road Signs" ||
    KDF.getVal("level_1_data") === "Street Name Plates"
  ) {
    drawSigns();
  }

  if (
    KDF.getVal("level_1_data") === "Art or Sculpture" ||
    KDF.getVal("level_1_data") === "Bollard" ||
    KDF.getVal("level_1_data") === "Cycle Barrier" ||
    KDF.getVal("level_1_data") === "Cycle Stand" ||
    KDF.getVal("level_1_data") === "Seat or Bench"
  ) {
    drawStreetFurniture();
  }
  if (KDF.getVal("level_1_data") === "Street Light") {
    drawStreetLights();
  }

  if (
    KDF.getVal("level_1_data") === "Bridge" ||
    KDF.getVal("level_1_data") === "Culvert" ||
    KDF.getVal("level_1_data") === "Earth Bank / Cutting" ||
    KDF.getVal("level_1_data") === "Gantry" ||
    KDF.getVal("level_1_data") === "Retaining Wall" ||
    KDF.getVal("level_1_data") === "Subway"
  ) {
    drawStructures();
  }
  if (KDF.getVal("level_1_data") === "Traffic Signals") {
    drawTrafficSignals();
  }

  if (
    KDF.getVal("level_1_data") === "Tree or Branch" ||
    KDF.getVal("level_1_data") === "Tree Grille"
  ) {
    drawTrees();
  }

  if (
    KDF.getVal("level_1_data") === "Box Planter" ||
    KDF.getVal("level_1_data") === "Grass Verge" ||
    KDF.getVal("level_1_data") === "Hedge" ||
    KDF.getVal("level_1_data") === "Plants or Planted Area"
  ) {
    drawVegetation();
  }
}

function queryLayer(marker) {
  if (KDF.getVal("level_1_data") === "Gulley") {
    queryDrains(marker);
  } else if (
    KDF.getVal("level_1_data") === "Fence" ||
    KDF.getVal("level_1_data") === "Handrail" ||
    KDF.getVal("level_1_data") === "Pedestrian Barrier" ||
    KDF.getVal("level_1_data") === "Vehicle Barrier/Safety Fence"
  ) {
    queryFences(marker);
  } else if (KDF.getVal("level_1_data") === "Grit Bin") {
    queryGritBins(marker);
  } else if (KDF.getVal("level_1_data") === "Litter Bin") {
    queryLitterBins(marker);
  } else if (
    KDF.getVal("level_1_data") === "Cameras / Electronic Signs" ||
    KDF.getVal("level_1_data") === "Illuminated Road Signs" ||
    KDF.getVal("level_1_data") === "Lit Bollard" ||
    KDF.getVal("level_1_data") === "Non-Illuminated Road Signs" ||
    KDF.getVal("level_1_data") === "Street Name Plates"
  ) {
    querySigns(marker);
  } else if (
    KDF.getVal("level_1_data") === "Art or Sculpture" ||
    KDF.getVal("level_1_data") === "Bollard" ||
    KDF.getVal("level_1_data") === "Cycle Barrier" ||
    KDF.getVal("level_1_data") === "Cycle Stand" ||
    KDF.getVal("level_1_data") === "Seat or Bench"
  ) {
    queryStreetFurniture(marker);
  } else if (KDF.getVal("level_1_data") === "Street Light") {
    queryStreetLights(marker);
  } else if (
    KDF.getVal("level_1_data") === "Bridge" ||
    KDF.getVal("level_1_data") === "Culvert" ||
    KDF.getVal("level_1_data") === "Earth Bank / Cutting" ||
    KDF.getVal("level_1_data") === "Gantry" ||
    KDF.getVal("level_1_data") === "Retaining Wall" ||
    KDF.getVal("level_1_data") === "Subway"
  ) {
    queryStructures(marker);
  } else if (KDF.getVal("level_1_data") === "Traffic Signals") {
    queryTrafficSignals(marker);
  } else if (
    KDF.getVal("level_1_data") === "Tree or Branch" ||
    KDF.getVal("level_1_data") === "Tree Grille"
  ) {
    queryTrees(marker);
  } else if (
    KDF.getVal("level_1_data") === "Box Planter" ||
    KDF.getVal("level_1_data") === "Grass Verge" ||
    KDF.getVal("level_1_data") === "Hedge" ||
    KDF.getVal("level_1_data") === "Plants or Planted Area"
  ) {
    queryVegetation(marker);
  } else {
    queryRoads(marker);
  }
}

function setClickRadius(zoomLevel) {
  switch (zoomLevel) {
    case 14:
      vmap.getMapParams().assetClick.radius = 34;
      break;
    case 15:
      vmap.getMapParams().assetClick.radius = 21;
      break;
    case 16:
      vmap.getMapParams().assetClick.radius = 13;
      break;
    case 17:
      vmap.getMapParams().assetClick.radius = 8;
      break;
    case 18:
      vmap.getMapParams().assetClick.radius = 5;
      break;
    case 18:
      vmap.getMapParams().assetClick.radius = 3;
      break;
    default:
      vmap.getMapParams().assetClick.radius = 50;
  }
}

function drawBoundary() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.boundary),
    codes: [featureLayers.boundary.id],
    id: "boundaryLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function drawDrains() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.drains),
    codes: [featureLayers.drains.id],
    id: "drainsLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeDrains() {
  var layerConfig = {
    id: "drainsLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryDrains(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.drains);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function drawFences() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.fences),
    codes: [featureLayers.fences.id],
    id: "fencesLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeFences() {
  var layerConfig = {
    id: "fencesLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryFences(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.fences);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function drawGritBins() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.gritbins),
    codes: [featureLayers.gritbins.id],
    id: "gritbinsLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeGritBins() {
  var layerConfig = {
    id: "gritbinsLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryGritBins(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.gritbins);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function drawLitterBins() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.litterbins),
    codes: [featureLayers.litterbins.id],
    id: "litterbinsLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeLitterBins() {
  var layerConfig = {
    id: "litterbinsLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryLitterBins(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.litterbins);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function drawSigns() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.signs),
    codes: [featureLayers.signs.id],
    id: "signsLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeSigns() {
  var layerConfig = {
    id: "signsLayer",
  };
  vmap.removeLayer(layerConfig);
}

function querySigns(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.signs);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function drawStreetFurniture() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.streetfurniture),
    codes: [featureLayers.streetfurniture.id],
    id: "streetFurnitureLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeStreetFurniture() {
  var layerConfig = {
    id: "streetFurnitureLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryStreetFurniture(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.streetfurniture);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function drawStreetLights() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.streetlights),
    codes: [featureLayers.streetlights.id],
    id: "streetlightsLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeStreetLights() {
  var layerConfig = {
    id: "streetlightsLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryStreetLights(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.streetlights);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function drawStructures() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.structures),
    codes: [featureLayers.structures.id],
    id: "structuresLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeStructures() {
  var layerConfig = {
    id: "structuresLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryStructures(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.structures);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    genericFeatureSetHandler,
    genericErrorHandler
  );
}

function genericFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("object_id", attributes["objectid"]);
    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);
    KDF.setVal("asset_type", attributes["featuretypename"]);
    KDF.setVal("asset_type_id", attributes["featureid"]);
    KDF.setVal("central_asset_id", attributes["centralassetid"]);
    KDF.setVal("asset_responsibility", attributes["responsibility"]);
    KDF.setVal("site_name", attributes["sitename"]);
    KDF.setVal("txt_streetdescription", attributes["sitename"]);
    KDF.setVal("txt_fulladdress", attributes["sitename"]);
    KDF.setVal("site_code", attributes["sitecode"]);
    KDF.setVal("txt_usrn", attributes["sitecode"]);
    KDF.showSection("area_lacation_description_" + pageID);
    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content:
        "<strong>" +
        attributes["featuretypename"] +
        ":</strong> " +
        attributes["sitename"],
    });
    if (
      attributes["sitecode"].startsWith("PF") ||
      attributes["sitecode"].startsWith("0") ||
      attributes["sitecode"].valueOf("")
    ) {
      queryPavements2(marker);
    }
    queryCityCentre(marker);
  } else {
    queryRoads(marker);
  }
  vmap.centerAtLonLat({
    lon: marker.geometry.x,
    lat: marker.geometry.y,
  });
}

function queryRoads(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.roads);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    roadsFeatureSetHandler,
    genericErrorHandler
  );
}

function roadsFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);
    KDF.setVal("site_name", attributes["streetname"]);
    KDF.setVal("txt_streetdescription", attributes["streetname"]);
    KDF.setVal("txt_fulladdress", attributes["streetname"]);
    KDF.setVal("site_code", attributes["usrn"]);
    KDF.setVal("txt_usrn", attributes["usrn"]);
    KDF.showSection("area_lacation_description_" + pageID);

    if (KDF.getVal("site_code") == 0) {
      queryPavements2(marker);
    } else if (KDF.getVal("site_code").startsWith(34)) {
      vmap.setInfoWindow({
        xcoord: marker.geometry.x,
        ycoord: marker.geometry.y,
        title: "Details",
        content: attributes["streetname"],
      });
    } else {
      vmap.setInfoWindow({
        xcoord: KDF.getVal("longitude_x"),
        ycoord: KDF.getVal("latitude_y"),
        title: "Details",
        content: "</strong>Select a location on the public highway.</strong>",
      });
    }

    queryCityCentre(marker);
  } else {
    queryParks(marker);
  }

  vmap.centerAtLonLat({
    lon: marker.geometry.x,
    lat: marker.geometry.y,
  });
}

function queryPavements(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.pavements);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    pavementsFeatureSetHandler,
    genericErrorHandler
  );
}

function pavementsFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);
    KDF.setVal("site_name", attributes["streetname"]);
    KDF.setVal("txt_streetdescription", attributes["streetname"]);
    KDF.setVal("txt_fulladdress", attributes["streetname"]);
    KDF.setVal("site_code", attributes["usrn"]);
    KDF.setVal("txt_usrn", attributes["usrn"]);
    KDF.showSection("area_lacation_description_" + pageID);

    if (KDF.getVal("site_code") == 0) {
      queryPavements2(marker);
    } else if (KDF.getVal("site_code").startsWith(34)) {
      vmap.setInfoWindow({
        xcoord: marker.geometry.x,
        ycoord: marker.geometry.y,
        title: "Details",
        content: attributes["streetname"],
      });
    } else {
      vmap.setInfoWindow({
        xcoord: KDF.getVal("longitude_x"),
        ycoord: KDF.getVal("latitude_y"),
        title: "Details",
        content: "</strong>Select a location on the public highway.</strong>",
      });
    }

    queryCityCentre(marker);
  } else {
    if (
      KDF.getVal("level_1_data") === "Broken Glass" ||
      KDF.getVal("level_1_data") === "Chewing Gum" ||
      KDF.getVal("level_1_data") === "Community Litter Pick" ||
      KDF.getVal("level_1_data") === "Dead Animal" ||
      KDF.getVal("level_1_data") === "Dog Fouling" ||
      KDF.getVal("level_1_data") === "Fly-Posting" ||
      KDF.getVal("level_1_data") === "Fly-Tipping" ||
      KDF.getVal("level_1_data") === "General Litter" ||
      KDF.getVal("level_1_data") === "Graffiti" ||
      KDF.getVal("level_1_data") === "Items and Spillages" ||
      KDF.getVal("level_1_data") === "Freshly Fallen Fruit" ||
      KDF.getVal("level_1_data") === "Freshly Fallen Leaves" ||
      KDF.getVal("level_1_data") === "Rotten Leaves" ||
      KDF.getVal("level_1_data") === "Mud or Gravel" ||
      KDF.getVal("level_1_data") === "Needles / Syringes" ||
      KDF.getVal("level_1_data") === "Other Street Cleaning Issue"
    ) {
      queryParks(marker);
    } else {
      vmap.setInfoWindow({
        xcoord: marker.geometry.x,
        ycoord: marker.geometry.y,
        title: "Details",
        content: "</strong>Select a location on the public highway.</strong>",
      });
      KDF.hideSection("area_lacation_description");
      displayErrorMessage("", "block");
    }
  }

  vmap.centerAtLonLat({
    lon: marker.geometry.x,
    lat: marker.geometry.y,
  });
}

function queryPavements2(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.pavements);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    pavementsFeatureSetHandler2,
    genericErrorHandler
  );
}

function pavementsFeatureSetHandler2(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("site_name", attributes["sitename"]);
    KDF.setVal("txt_streetdescription", attributes["sitename"]);
    KDF.setVal("txt_fulladdress", attributes["sitename"]);
    KDF.setVal("txt_usrn", attributes["sitecode"]);
    KDF.setVal("site_code", attributes["sitecode"]);
  }
}

function drawTrafficSignals() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.trafficsignals),
    codes: [featureLayers.trafficsignals.id],
    id: "trafficsignalsLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeTrafficSignals() {
  var layerConfig = {
    id: "trafficsignalsLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryTrafficSignals(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.trafficsignals);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    signalsFeatureSetHandler,
    genericErrorHandler
  );
}

function signalsFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("object_id", attributes["objectid"]);
    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);
    KDF.setVal("asset_type", attributes["featuretypename"]);
    KDF.setVal("asset_type_id", attributes["featureid"]);
    KDF.setVal("central_asset_id", attributes["centralassetid"]);
    KDF.setVal("asset_responsibility", attributes["responsibility"]);
    KDF.setVal("site_name", attributes["sitename"]);
    KDF.setVal("txt_streetdescription", attributes["sitename"]);
    KDF.setVal("txt_fulladdress", attributes["sitename"]);
    KDF.showSection("area_lacation_description_" + pageID);
    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content: "<strong>Traffic Signal:</strong> " + attributes["sitename"],
    });
    queryCityCentre(marker);
    queryPavements2(marker);
  } else {
    queryRoads(marker);
  }
  vmap.centerAtLonLat({
    lon: marker.geometry.x,
    lat: marker.geometry.y,
  });
}

function drawTrees() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.trees),
    codes: [featureLayers.trees.id],
    id: "treesLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeTrees() {
  var layerConfig = {
    id: "treesLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryTrees(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.trees);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    treeFeatureSetHandler,
    genericErrorHandler
  );
}

function treeFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("object_id", attributes["objectid"]);
    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);
    KDF.setVal("asset_type", "Tree");
    KDF.setVal("asset_type_id", attributes["featureid"]);
    KDF.setVal("central_asset_id", attributes["centralassetid"]);
    KDF.setVal("asset_responsibility", "AMEY (PFI)");
    KDF.setVal(
      "site_name",
      attributes["featurelocation"] + " " + attributes["sitename"]
    );

    KDF.setVal("txt_streetdescription", attributes["sitename"]);
    KDF.setVal("txt_fulladdress", attributes["sitename"]);
    KDF.showSection("area_lacation_description_" + pageID);
    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content:
        "<strong>Tree:</strong> " +
        attributes["featurelocation"] +
        " " +
        attributes["sitename"],
    });
    queryCityCentre(marker);
    queryPavements2(marker);
  } else {
    queryRoads(marker);
  }
  vmap.centerAtLonLat({
    lon: marker.geometry.x,
    lat: marker.geometry.y,
  });
}

function drawVegetation() {
  var layerConfig = {
    url: featureLayers.url(featureLayers.vegetation),
    codes: [featureLayers.vegetation.id],
    id: "vegetationLayer",
  };
  vmap.drawDynamicLayer(layerConfig);
}

function removeVegetation() {
  var layerConfig = {
    id: "vegetationLayer",
  };
  vmap.removeLayer(layerConfig);
}

function queryVegetation(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.vegetation);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    vegetationFeatureSetHandler,
    genericErrorHandler
  );
}

function vegetationFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    var asset = featureSet.features[0];
    var attributes = asset.attributes;

    console.log(attributes);

    KDF.setVal(
      "object_id",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.objectid"]
    );

    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);

    KDF.setVal(
      "asset_type",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.featuretypename"]
    );

    KDF.setVal(
      "asset_type_id",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.featureid"]
    );

    KDF.setVal(
      "central_asset_id",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.centralassetid"]
    );

    KDF.setVal(
      "asset_responsibility",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.responsibility"]
    );

    KDF.setVal(
      "site_name",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitename"]
    );

    KDF.setVal(
      "txt_streetdescription",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitename"]
    );

    KDF.setVal(
      "txt_fulladdress",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitename"]
    );

    KDF.setVal(
      "site_code",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitecode"]
    );

    KDF.setVal(
      "txt_usrn",
      attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitecode"]
    );

    KDF.showSection("area_lacation_description_" + pageID);
    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",

      content:
        attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitename"],
    });
    queryCityCentre(marker);
  } else {
    queryRoads(marker);
  }
  vmap.centerAtLonLat({
    lon: marker.geometry.x,
    lat: marker.geometry.y,
  });
}

function queryParks(marker) {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.parks);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    parksFeatureSetHandler,
    genericErrorHandler
  );
}

function parksFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    KDF.setWidgetNotRequired("txt_search_property_" + pageID);
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("object_id", attributes["objectid"]);
    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);
    KDF.setVal("asset_type", attributes["site_type"]);
    KDF.setVal("asset_responsibility", "Parks and Public Realms");
    KDF.setVal("site_name", attributes["site_name"]);
    KDF.setVal("txt_streetdescription", attributes["site_name"]);
    KDF.setVal("txt_addressline1_" + pageID, attributes["site_name"]);
    KDF.setVal("txt_fulladdress_" + pageID, attributes["site_name"]);
    KDF.showSection("area_lacation_description_" + pageID);
    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content:
        "<strong>" +
        attributes["site_type"] +
        ":</strong> " +
        attributes["site_name"],
    });
  } else {
    if (KDF.getVal("le_form_name") === "highways_report") {
      vmap.setInfoWindow({
        xcoord: marker.geometry.x,
        ycoord: marker.geometry.y,
        title: "Details",
        content: "</strong>Select a location on the public highway.</strong>",
      });
      KDF.hideSection("area_lacation_description_" + pageID);
      //displayErrorMessage("", "block");
    } else {
      KDF.showSection("area_lacation_description_" + pageID);
      KDF.setVal("longitude_x", marker.geometry.x);
      KDF.setVal("latitude_y", marker.geometry.y);
      vmap.setInfoWindow({
        xcoord: marker.geometry.x,
        ycoord: marker.geometry.y,
        title: "Details",
        content: "</strong>Location selected</strong>",
      });
    }
  }
}

function queryCityCentre(marker) {
  var queryLayer = featureLayers.getQueryLayer(featureLayers.citycentre);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    citycentreFeatureSetHandler,
    genericErrorHandler
  );
}

function citycentreFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    if (attributes["status"].startsWith("Co")) {
      KDF.setVal("txt_prestige", "Copper");
    } else if (attributes["status"].startsWith("B")) {
      KDF.setVal("txt_prestige", "Bronze");
    } else if (attributes["status"].startsWith("S")) {
      KDF.setVal("txt_prestige", "Silver");
    } else if (attributes["status"].startsWith("G")) {
      KDF.setVal("txt_prestige", "Gold");
    } else if (attributes["status"].startsWith("P")) {
      KDF.setVal("txt_prestige", "Platinum");
    } else {
      KDF.setVal("txt_prestige", attributes["status"]);
    }
  } else {
    queryHotspotAssPSS(marker);
  }
}

function queryHotspotAssPSS(marker) {
  var queryLayer = featureLayers.getQueryLayer(featureLayers.hotspotasspss);

  vmap.findFeaturesNear(
    marker,
    queryLayer,
    hotspotasspssFeatureSetHandler,
    genericErrorHandler
  );
}

function hotspotasspssFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("txt_prestige", attributes["type"]);
    KDF.setVal("txt_prestige", "Cleansing Hotspot");
  } else {
    queryHotspotSchools(marker);
  }
}

function queryHotspotSchools(marker) {
  var queryLayer = featureLayers.getQueryLayer(featureLayers.hotspotschools);

  vmap.findFeaturesNear(
    marker,
    queryLayer,
    hotspotschoolsFeatureSetHandler,
    genericErrorHandler
  );
}

function hotspotschoolsFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("txt_prestige", attributes["type"]);
  } else {
    queryPrincipalShopsite(marker);
  }
}

function queryPrincipalShopsite(marker) {
  var queryLayer = featureLayers.getQueryLayer(featureLayers.principalshopsite);

  vmap.findFeaturesNear(
    marker,
    queryLayer,
    principalshopsiteFeatureSetHandler,
    genericErrorHandler
  );
}

function principalshopsiteFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("txt_prestige", attributes["type"]);
  } else {
    queryNeighbourhoodShopsite(marker);
  }
}

function queryNeighbourhoodShopsite(marker) {
  var queryLayer = featureLayers.getQueryLayer(
    featureLayers.neighbourhoodshopsite
  );

  vmap.findFeaturesNear(
    marker,
    queryLayer,
    neighbourhoodshopsiteFeatureSetHandler,
    genericErrorHandler
  );
}

function neighbourhoodshopsiteFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    var asset = featureSet.features[0];
    KDF.setVal("txt_prestige", attributes["type"]);
  } else {
    queryGateway(marker);
  }
}

function queryGateway(marker) {
  var queryLayer = featureLayers.getQueryLayer(featureLayers.gateway);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    gatewayFeatureSetHandler,
    genericErrorHandler
  );
}

function gatewayFeatureSetHandler(marker, featureSet) {
  if (featureSet.features.length >= 1) {
    var asset = featureSet.features[0];
    var attributes = asset.attributes;
    KDF.setVal("txt_prestige", attributes["type"]);
  }
}

function genericErrorHandler(e) {
  //KDF.showError("Error querying map features");
  //console.log(e);
  vmap.setInfoWindow({
    xcoord: marker.geometry.x,
    ycoord: marker.geometry.y,
    title: "Error",
    content: "</strong>Please click on the map again.</strong>",
  });
}

function multiErrorHandler(error) {
  //console.error("error performing query");
  //console.log(error);
  queriesComplete++;
  $("#dform_" + window.location.href.split("/").pop().split("?")[0]).trigger(
    "_GIS_queryComplete"
  );
}

class VMap {
  constructor(mapParams) {
    this.mapParams = mapParams;
  }
  getMapParams() {
    return this.mapParams;
  }
}
VMap.prototype.extentChanged = function extentChanged(evt, layerDrawingFunc) {
  if (evt["levelChange"] == true) {
    if (this.getMapParams().assetMaxDrawZoom) {
      if (evt.lod.level >= this.getMapParams().assetMaxDrawZoom) {
        layerDrawingFunc(evt);
      } else {
        this.getMapParams().map.graphics.clear();
      }
    } else {
      if (evt.lod.level >= 6) {
        layerDrawingFunc(evt);
      } else {
        this.getMapParams().map.graphics.clear();
      }
    }
  }
};
VMap.prototype.zoomLevelChanged = function zoomLevelChanged(evt, zoomChanged) {
  if (evt["levelChange"] == true) {
    zoomChanged(evt);
  }
};
VMap.prototype.drawDynamicLayer = function drawDynamicLayer(layerConfig) {
  //layerConfig{url, code, id}
  var layer = new esri.layers.ArcGISDynamicMapServiceLayer(layerConfig.url, {
    id: layerConfig.id,
  });
  layer.setVisibleLayers(layerConfig.codes);
  layer.setOpacity(0.9);
  this.getMapParams().map.addLayer(layer);
};
VMap.prototype.removeLayer = function removeLayer(layerConfig) {
  //layerConfig{id}
  var layer = this.getMapParams().map.getLayer(layerConfig.id);
  this.getMapParams().map.removeLayer(layer);
};
VMap.prototype.removeAllLayers = function removeAllLayers() {
  this.getMapParams().map.removeAllLayers();
};
VMap.prototype.loadCaseMarkers = function loadCaseMarkers(
  response,
  selectedCaseCallback
) {
  var map = this.getMapParams().map;
  var mapParams = this.getMapParams();
  map.graphics.clear();
  require([
    "esri/geometry/Point",
    "esri/symbols/PictureMarkerSymbol",
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "dojo/domReady!",
  ], function (Point, PictureMarkerSymbol, Graphic, GraphicsLayer) {
    var newlayer = new GraphicsLayer({
      id: "custom_marker_layer",
    });
    $.each(response.data, function () {
      var markerinfo = this;
      var point = new Point(
        Number(markerinfo.longitude),
        Number(markerinfo.latitude),
        new esri.SpatialReference(mapParams.WKID)
      );
      var markerSymbol = new PictureMarkerSymbol(markerinfo.icon, 20, 32);
      markerSymbol.setOffset(0, 0); //0,32
      var marker = new Graphic(point, markerSymbol);
      marker.setAttributes({
        title: "",
        description: '<img src="/dformresources/content/ajax-loader.gif" />',
        caseid: markerinfo.title,
      });
      newlayer.add(marker);
    });
    newlayer.on("click", function (event) {
      setTimeout(function () {
        selectedCaseCallback(event.graphic);
      }, 200);
    });
    map.addLayer(newlayer);
  });
};
VMap.prototype.centerAtLonLat = function centerAtLonLat(centerConfig) {
  var params = this.getMapParams();
  var config = centerConfig;
  require(["esri/geometry/Point", "esri/SpatialReference"], function (
    Point,
    SpatialReference
  ) {
    var point = new Point(
      Number(config.lon),
      Number(config.lat),
      new SpatialReference(params.WKID)
    );

    params.map.centerAt(point);
  });
};
VMap.prototype.geoLocate = function geoLocate(success, error) {
  if (navigator.geolocation) {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    //console.log("navigator.geolocation undefined");
  }
};
VMap.prototype.setInfoWindow = function setInfoWindow(infoWindowConfig) {
  var wkid = this.getMapParams().WKID;
  var map = this.getMapParams().map;
  require(["esri/geometry/Point", "esri/SpatialReference"], function (
    Point,
    SpatialReference
  ) {
    var point = new Point(
      infoWindowConfig.xcoord,
      infoWindowConfig.ycoord,
      new SpatialReference(wkid)
    );

    map.infoWindow.setTitle(infoWindowConfig.title);
    map.infoWindow.setContent(infoWindowConfig.content);
    map.infoWindow.show(point);
    // map.infoWindow.reposition();
  });
};
VMap.prototype.findFeaturesNear = function findFeaturesNear(
  marker,
  layerConfig,
  featureSetHandler,
  errorCallback
) {
  var assetClick = this.getMapParams().assetClick;
  var wkid = this.getMapParams().WKID;
  var map = this.getMapParams().map;
  var queryLayerConfig = layerConfig;
  require([
    "esri/InfoTemplate",
    "esri/layers/FeatureLayer",
    "esri/geometry/Circle",
    "esri/tasks/query",
    "esri/SpatialReference",
  ], function (InfoTemplate, FeatureLayer, Circle, Query, SpatialReference) {
    var infoTemplate = new InfoTemplate("Attributes", "${*}");
    var featureLayer = new FeatureLayer(queryLayerConfig.url, {
      mode: FeatureLayer.MODE_ONDEMAND,
      infoTemplate: infoTemplate,
      outFields: ["*"],
    });
    var circle = new Circle(marker.geometry, {
      radius: assetClick.radius,
      radiusUnit: assetClick.radiusUnit,
    });
    if (queryLayerConfig.wkid) {
      circle.spatialReference = new SpatialReference(queryLayerConfig.wkid);
    }
    var query = new Query();
    query.geometry = circle;
    query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS;
    query.returnGeometry = true;
    query.outFields = ["*"];
    featureLayer.queryFeatures(
      query,
      function (featureSet) {
        featureSetHandler(marker, featureSet);
      },
      function (error) {
        errorCallback(error);
      }
    );
  });
};
VMap.prototype.addPoint = function addPoint(pointConfig) {
  var config = pointConfig;
  var mapParams = this.getMapParams();
  require([
    "esri/geometry/Point",
    "esri/symbols/PictureMarkerSymbol",
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "dojo/domReady!",
  ], function (Point, PictureMarkerSymbol, Graphic, GraphicsLayer) {
    var point = new Point(
      Number(config.longitude),
      Number(config.latitude),
      new esri.SpatialReference({
        wkid: Number(mapParams.WKID),
      })
    );
    var markerSymbol = new PictureMarkerSymbol(
      config.marker.url,
      config.marker.width,
      config.marker.height
    );

    markerSymbol.setOffset(0, 20);
    var graphic = new Graphic(point, markerSymbol);
    var markerLayer = new GraphicsLayer(config.layer);
    mapParams.map.addLayer(markerLayer, 0);
    markerLayer.add(graphic);
  });
};
VMap.prototype.removePoints = function removePoints(layerId) {
  if (this.getMapParams().map.getLayer(layerId)) {
    this.getMapParams().map.getLayer(layerId).clear();
  }
};
VMap.prototype.convertLonLat = function convertLonLat(config) {
  var result = proj4(
    config.inputProjection.projection,
    config.outputProjection.projection,
    config.coordinates
  );

  config.successCallBack(result);
};
VMap.prototype.addSearch = function addSearch() {
  var mapParams = this.getMapParams();
  require(["esri/config", "esri/dijit/Search"], function (esriConfig, Search) {
    esriConfig.defaults.geometryService =
      mapParams.hostUrl + mapParams.geometryService;
    var search = new Search(
      {
        map: mapParams.map,
      },
      "search"
    );
    search.startup();
  });
};