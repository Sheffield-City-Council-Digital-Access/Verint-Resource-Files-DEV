
// ----- VARIABLES ---------------------------------------------------------- //

// Determine the server environment based on the current URL
const serverEnvironment = window.location.href.includes("forms-dev-sheffield")
  ? "https://forms-dev-sheffield.squiz.cloud" // If URL includes "forms-dev-sheffield", set server environment to development
  : window.location.href.includes("forms-qa-sheffield")
    ? "https://forms-qa-sheffield.squiz.cloud" // If URL includes "forms-qa-sheffield", set server environment to quality assurance
    : "https://forms-sheffield.squiz.cloud"; // Otherwise, set server environment to production

// Set and store the anonymous ID
const anonymousID = "101001971935";

// Used to define routing in the save and actions sections
let process = "";

// ----- FUNCTIONS ---------------------------------------------------------- //

// Function to normalize spaces in a given text
const normalizeSpaces = text => text.replace(/\s+/g, ' ');

// Function to convert a sentence to title case
const toTitleCase = sentence => sentence.replace(/\b\w/g, match => match.toUpperCase());

// Function to remove non-numeric characters from a string
const removeNonNumeric = str => str.replace(/\D/g, '');

// Function to remove spaces and symbols from a string
const removeSpacesAndSymbols = str => str.replace(/[\s\W]/g, '');

// Array of symbols commonly used in scripts
const removeScriptSymbols = str => {
    // Array of symbols commonly used in scripts
    const scriptSymbols = ['<', '>', '&', '"', "'", '`', '=', '/', '(', ')', ';', '+', '-', '*', '%', '!', '[', ']', '{', '}', '|', '\\'];
  
    // Create a regular expression with all the script symbols and replace any occurrence of script symbols with an empty string
    return str.replace(new RegExp(`[${scriptSymbols.join('\\')}]`, 'g'), '');
};

// Function to append a character count element to a field
const characterCountAppender = (name) => {
    const parentElement = $(`#dform_widget_${name}`).parent();
    const characterCountElement = $(`<div class="character-count" aria-live="polite" id="characterCounter${name}"></div>`);
    parentElement.append(characterCountElement);

    // Call the characterCounter function to update the character count
    characterCounter(name);
};
  
// Function to count and display the remaining characters in a field
const characterCounter = (name) => {
    const string = getValue(name);
    const stringLength = string.length;
    const idConcat = `characterCounter${name}`;

    // Get the maximum character length from the field element
    const maxLength = document.querySelector(`#dform_widget_${name}`).maxLength;

    // Calculate the remaining characters
    const remainingCharacters = maxLength - stringLength;

    // Update the character count element with the remaining characters
    document.querySelector(`#${idConcat}`).innerHTML = `${remainingCharacters} characters remaining`;
};

// Function to get value by widget name
const getValue = name => document.getElementById(`dform_widget_${name}`).value;

// Function to set value by widget name
const setValue = (name, value) => document.getElementById(`dform_widget_${name}`).value = value || '';
// const setValue = (name, value) => {
//   const element = document.getElementById(`dform_widget_${name}`);
//   if (element) {
//     element.value = value || '';
//   } else {
//     console.log(`Element with ID "dform_widget_${name}" not found.`);
//   }
// };

// Function to show element by name
const showElement = (names) => {
    names.forEach((name) => {
        if (name.includes(page_)) {
            KDF.showPage(name);
        } else if (name.includes(area_) || name.includes(box_)) {
            KDF.showSection(name);
        } else {
            KDF.showWidget(name);
        }
    });
};

// Function to hide element by name
const hideElement = (names) => {
    names.forEach((name) => {
        if (name.includes(page_)) {
            KDF.hidePage(name);
        } else if (name.includes(area_) || name.includes(box_)) {
            KDF.hideSection(name);
        } else {
            KDF.hideWidget(name);
        }
    });
};

const goToPreviousPage = pageID => {
    // Go to the specified page if pageID is provided, otherwise go to the previous page
    if (pageID) {
        KDF.gotoPage(pageID, false, true, true);
    } else {
        KDF.gotoPrevPage();
    }
};

const goToNextPage = pageID => {
    // Go to the specified page if pageID is provided, otherwise go to the next page
    if (pageID) {
        KDF.showPage(pageID);
        KDF.gotoPage(pageID, true, true, true);
    } else {
        KDF.gotoNextPage();
    }
};

const checkFormProgress = () => {
    // Get action buttons
    const actionButtons = document.querySelectorAll('.next-button, .submit-button');
    
    // Check form progress using KDF library
    if (KDF.checkProgress()) {
        // Disable action buttons if form progress is complete
        actionButtons.forEach(button => {
            button.classList.add('disabled');
            button.disabled = true;
        });
    } else {
        // Enable action buttons if form progress is incomplete
        actionButtons.forEach(button => {
            button.classList.remove('disabled');
            button.disabled = false;
        });
    }
};

// Function to set agent details based on the provided values
const setAgentDetails = values => {
    const {
        agentID = "",
        agentName = "",
        agentEmail = "",
        agentMobile = "",
        agentLocation = "",
        agentMenu = "",
    } = values;

    setValue('txt_agent_id', agentID);
    setValue('txt_agent_name', toTitleCase(agentName));
    setValue('eml_agent_email', normalizeSpaces(toTitleCase(agentEmail)).toLowerCase());
    setValue('tel_agent_mobile', removeNonNumeric(agentMobile));
    setValue('txt_agent_location', agentLocation);
    setValue('txt_agent_menu', agentMenu);
};

// Function to retrieve agent details from cookies
const retrieveAgentDetails = () => {
    const cookies = document.cookie;
    const cookieArray = cookies.split(";");

    cookieArray.forEach(cookie => {
        const parts = cookie.split("=");
        const name = parts[0].trim();
        
        if (name === "agentDetails") {
            const value = decodeURIComponent(parts[1]);
            setAgentDetails(JSON.parse(value));
        }
    });

    // Define an array of the required cookie names
    const requiredCookies = ["agentDetails"];

    // Check if each required cookie is present
    let cookiesMissing = false;
    requiredCookies.forEach(cookieName => {
        if (!getCookie(cookieName)) {
            cookiesMissing = true;
        }
    });

    if (cookiesMissing) {
        // Handle missing cookies
        KDF.customdata('look-up-agent-details', 'function_retrieveAgentDetails', true, true, {});
    }

    // Helper function to get the value of a cookie by name
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const parts = cookies[i].split("=");
            const cookieName = decodeURIComponent(parts[0]);
            const cookieValue = decodeURIComponent(parts[1]);
            if (cookieName === name) return cookieValue;
        }
        return null;
    }
};

const setCaseDetails = values => {
    // Set default values for various case details if not provided
    const {
        caseID = "",
        formID = "",
        caseTitle = "Default Case Title",
        caseDescription = "Defailt Case Description",
        caseQueue = "Admin Work Queue",
        caseEventCode = "",
        associatedType = "C1",
        associatedID = anonymousID
    } = values;

    // Assign the provided or default values to the caseDetails object
    setValue('txt_reference', caseID);
    setValue('txt_form_reference', formID);
    setValue('le_title', normalizeSpaces(toTitleCase(caseTitle)));
    setValue('le_description', normalizeSpaces(caseDescription));
    setValue('le_queue', caseQueue);
    setValue('le_eventcode', caseEventCode);
    setValue('le_associated_obj_type', associatedType);
    setValue('le_associated_obj_id', associatedID);
};

const setObjectDetails = values => {
    // Set default values for various object details if not provided
    const {
        objectID = kdf.form.caseid,
        ohmsPin = kdf.form.ref,
        title = "",
        forename = "",
        surname = "Admin Work Queue",
        organisation = "",
        dateOfBirth = "C1",
        nationalInsurance = "",
        phoneNumber = "",
        emailAddress = "",
        property = "",
        street = "",
        locality = "",
        town = "",
        postcode = "",
        usrn = "",
        uprn = "",
        ohmsUPRN = "",
        code = "",
    } = values;

    // Assign the provided or default values to the objectDetails object
    setValue('txt_customerid', objectID);
    setValue('txt_personpin', ohmsPin);
    setValue('txt_title', normalizeSpaces(toTitleCase(title)));
    setValue('txt_firstname', normalizeSpaces(toTitleCase(forename)));
    setValue('txt_surname', normalizeSpaces(toTitleCase(surname)));
    setValue('txt_fullname', normalizeSpaces(`${title} ${forename} ${surname}`));
    setValue('txt_organisation', normalizeSpaces(toTitleCase(organisation)));
    setValue('txt_dob', dateOfBirth);
    setValue('txt_ni', removeSpacesAndSymbols(nationalInsurance).toUpperCase());
    setValue('txt_phone', removeNonNumeric(phoneNumber));
    setValue('txt_email', normalizeSpaces(emailAddress).toLowerCase());
    setValue('txt_cusaddressnumber', normalizeSpaces(toTitleCase(property)));
    setValue('txt_cusaddressline1', normalizeSpaces(toTitleCase(street)));
    setValue('txt_cusaddressline2', normalizeSpaces(toTitleCase(locality)));
    setValue('txt_custown', normalizeSpaces(town).toUpperCase());
    setValue('txt_cuspostcode', normalizeSpaces(postcode).toUpperCase());
    setValue('txt_cusfulladdress', normalizeSpaces(`${property} ${street}, ${town}, ${postcode}`));
    setValue('txt_cususrn', usrn);
    setValue('txt_cusuprn', uprn);
    setValue('txt_ohmsuprn', ohmsUPRN);
    setValue('txt_customercode', code);
};

const setLocationDetails = values => {
    // Set default values for location details if not provided
    const {
        propertyID = "",
        property = "",
        street = "",
        locality = "",
        town = "",
        postcode = "",
        usrn = "",
        uprn = "",
        ohmsUPRN = "",
        officer = "",
        officerContact = "",
        areaCode = "",
        propertyClass = ""
    } = values;

    // Assign the provided or default values to the locationDetails object
    setValue('txt_propertyid', propertyID);
    setValue('txt_addressnumber', normalizeSpaces(toTitleCase(property)));
    setValue('txt_addressline1', normalizeSpaces(toTitleCase(street)));
    setValue('txt_addressline2', normalizeSpaces(toTitleCase(locality)));
    setValue('txt_town', normalizeSpaces(town).toUpperCase());
    setValue('txt_postcode', normalizeSpaces(postcode).toUpperCase());
    setValue('txt_fulladdress', normalizeSpaces(`${property} ${street}, ${town}, ${postcode}`));
    setValue('txt_postcodearea', normalizeSpaces(postcode.slice(0, 3)).toUpperCase());
    setValue('txt_usrn', usrn);
    setValue('txt_uprn', uprn);
    setValue('txt_ohmsuprn', ohmsUPRN);
    setValue('txt_nbo', officer);
    setValue('txt_nbocontact', officerContact);
    setValue('txt_mgntareacode', areaCode);
    setValue('txt_propertyclass', propertyClass);
};

// // Create an object to store agent details
// const agentDetails = {
//     txt_agent_id: getValue('txt_agent_id'),
//     txt_agent_name: getValue('txt_agent_name'),
//     txt_agent_email: getValue('txt_agent_email'),
//     txt_agent_mobile: getValue('txt_agent_mobile'),
//     txt_agent_location: getValue('txt_agent_location'),
//     txt_agent_menu: getValue('txt_agent_menu'),
// };
// // Convert the agent details object to a JSON string
// const jsonStringAD = JSON.stringify(agentDetails);
// // Encode the JSON string to make it safe for URLs
// const encodedAD = encodeURIComponent(jsonStringAD);

// // Create an object to store interaction details
// const interactionDetails = {
//     // Interaction details
//     txt_interactionid: getValue('txt_interactionid'),
  
//     // Case details
//     le_channel: getValue('le_channel'),
//     le_associated_obj_type: getValue('le_associated_obj_type'),
//     le_associated_obj_id: getValue('le_associated_obj_id'),
//     le_title: getValue('le_title'),
//     le_eventcode: getValue('le_eventcode'),
//     le_queue: getValue('le_queue'),
//     txt_associatewith: getValue('txt_associatewith'),
  
//     // Profile details
//     txt_customerid: getValue('txt_customerid'),
//     txt_personpin: getValue('txt_personpin'),
//     txt_title: getValue('txt_title'),
//     txt_firstname: getValue('txt_firstname'),
//     txt_surname: getValue('txt_surname'),
//     txt_fullname: getValue('txt_fullname'),
//     txt_organisation: getValue('txt_organisation'),
//     txt_dob: getValue('txt_dob'),
//     txt_ni: getValue('txt_ni'),
//     txt_phone: getValue('txt_phone'),
//     txt_email: getValue('txt_email'),
//     txt_anonymous: getValue('txt_anonymous'),
//     txt_cusaddressnumber: getValue('txt_cusaddressnumber'),
//     txt_cusaddressline1: getValue('txt_cusaddressline1'),
//     txt_cusaddressline2: getValue('txt_cusaddressline2'),
//     txt_custown: getValue('txt_custown'),
//     txt_cuspostcode: getValue('txt_cuspostcode'),
//     txt_cusfulladdress: getValue('txt_cusfulladdress'),
//     txt_cususrn: getValue('txt_cususrn'),
//     txt_cusuprn: getValue('txt_cusuprn'),
//     txt_ohmsuprn: getValue('txt_ohmsuprn'),
//     txt_customercode: getValue('txt_customercode'),
  
//     // Location details
//     txt_addressnumber: getValue('txt_addressnumber'),
//     txt_addressline1: getValue('txt_addressline1'),
//     txt_addressline2: getValue('txt_addressline2'),
//     txt_town: getValue('txt_town'),
//     txt_postcode: getValue('txt_postcode'),
//     txt_fulladdress: getValue('txt_fulladdress'),
//     txt_postcodearea: getValue('txt_postcodearea'),
//     txt_usrn: getValue('txt_usrn'),
//     txt_uprn: getValue('txt_uprn'),
//     // txt_ohmsuprn: getValue('txt_ohmsuprn'),
//     txt_nbo: getValue('txt_nbo'),
//     txt_nbocontact: getValue('txt_nbocontact'),
//     txt_mgntareacode: getValue('txt_mgntareacode'),
//     txt_propertyclass: getValue('txt_propertyclass')
// };
// // Convert the interaction details object to a JSON string
// const jsonStringID = JSON.stringify(interactionDetails);
// // Encode the JSON string to make it safe for URLs
// const encodedID = encodeURIComponent(jsonStringID);

// const allParamsFormJump = (formjump, branch) => {
//     // Go to specified form and branch to specified page, passing over the agen and inteaction details
//     const url = `${serverEnvironment}/form/launch/${formjump}?branch=${branch}&agentParams=${encodedAD}&interactionParams=${encodedID}`;
//     location.href = url;
// };

// // Function to get the current time and day
// const getCurrentTimeAndDay = (() => {
//     const currentDate = new Date();

//     // Get the current date
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth() + 1; // Adding 1 because month is zero-based
//     const day = currentDate.getDate();
    
//     // Get the current time
//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();
    
//     // Get the day of the week
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const dayOfWeek = currentDate.getDay();
//     const dayName = daysOfWeek[dayOfWeek];

//     // Get the month name
//     const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const monthName = monthsOfYear[currentDate.getMonth()];
    
//     // Output the values
//     setValue('txt_time', `${hours}:${minutes}:${seconds}`);
//     setValue('txt_date').value(`${day}/${month}/${year}`);
//     setValue('txt_day').value(`${dayName}`);
//     setValue('txt_month').value(`${monthName}`);
// })();

// Function to set up the accordion functionality
const accordion = (() => {
    // Array of class names for the accordions
    const classNames = [
        "accordion",
        "accordion2",
        "accordion3",
        "accordion4",
        "accordion5",
        "accordion6",
        "accordion7",
        "accordion8",
        "accordion9",
        "accordion10",
        "searchaccordion",
        "searchaccordion2",
        "searchaccordion3",
        "searchaccordion4",
        "searchaccordion5"
    ];
  
    // Loop through each class name
    classNames.forEach(className => {
        // Get all elements with the class name
        const elements = Array.from(document.getElementsByClassName(className));
        // Add a click event listener to each element
        elements.forEach(element => {
            element.addEventListener("click", () => {
                // Toggle the "active" class on the clicked element
                element.classList.toggle("active");
                // Get the next sibling element, which is the panel
                const panel = element.nextElementSibling;
                // Toggle the display of the panel between "block" and "none"
                panel.style.display = panel.style.display === "block" ? "none" : "block";
            });
        });
    });
})();

// Function to hide multiple containers
const hideContainers = () => {
    $('.search-profile-container, .update-profile-container, .create-profile-container, .contact-history-container, .search-property-container').hide();
};

// -- GREETING -------------------------------------------------------------- //

// Define greeting masages
const greetings = {
    morning: ['Good morning,', 'Top of the morning to you,', 'Rise and shine,', 'Hello,'],
    afternoon: ['Good afternoon,', 'Hello there,', 'Hey, how are you?', 'Greetings,'],
    evening: ['Good evening,', 'How was your day?', 'Nice to see you,', 'Hello,']
};

// Identify the time of day
const getTimeOfDay = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    } else {
        return 'evening';
    }
};

// Select greeting message at random
const getRandomGreeting = () => {
    const timeOfDay = getTimeOfDay();
    const greetingArray = greetings[timeOfDay];
    const randomIndex = Math.floor(Math.random() * greetingArray.length);
    return greetingArray[randomIndex];
};

// -- MODAL ----------------------------------------------------------------- //

// Get the reference to the close button element with the ID "close-modal"
const closeModalButton = document.getElementById("close-modal");

// Get the reference to the modal element with the ID "modal"
const modal = document.getElementById("modal");

// Get the reference to the overlay element with the ID "overlay"
const overlay = document.getElementById("overlay");

// Function to show the modal
const showModal = () => {
    hideContainers(); // Hide any existing containers
    // resetNavMenu(); // Reset the navigation menu
    modal.showModal(); // Show the modal
    overlay.style.display = "block"; // Display the overlay
    document.body.style.overflow = "hidden"; // Prevent scrolling on the body
};

// Function to hide the modal
const hideModal = () => {
    modal.close(); // Close the modal
    overlay.style.display = "none"; // Hide the overlay
    document.body.style.overflow = "auto"; // Allow scrolling on the body
};

// Function to launch the customer modal
const launchCustomerModal = () => {
    showModal(); // Show the modal
    
    const customerId = getValue('txt_customerid'); // Get the customer ID from the input field
    if (customerId && customerId !== '101000159871') {
        $('.update-profile-container').show(); // Show the update profile container if the customer ID is not empty and not equal to a specific value
    } else {
        resetSearchRecord(); // Reset the search record
        $('.search-profile-container').show(); // Show the search profile container
    }
};

// Function to launch the contact history modal
const launchContactHistoryModal = () => {
    showModal(); // Show the modal
    $('.contact-history-container').show(); // Show the contact history container
};

// Function to launch the property modal
const launchPropertyModal = () => {
    showModal(); // Show the modal
    $('.search-property-container').show(); // Show the search property container
};

// ----- ON FORM READY ------------------------------------------------------ //

const onFormReady = (event, kdf) => {
    // Inport parameters 

// -- HEADER BUTTONS -------------------------------------------------------- //
    // Define an array of navigation buttons
    const navButtons = [
        { label: "Corporate - Contact Centre", value: "menu_corporate" },  // Button for corporate contact center
        { label: "Clean Air Zone", value: "menu_clean_air" },  // Button for clean air zone
        { label: "Feedback and Complaints", value: "menu_feedback" },  // Button for feedback and complaints
        { label: "First Point", value: "menu_first_point" },  // Button for first point
        { label: "Fullfilment", value: "menu_back_office" },  // Button for fulfillment
        { label: "Housing - Contact Centre", value: "menu_housing_cc" },  // Button for housing contact center
        { label: "Housing - In Person", value: "menu_housing_ip" },  // Button for housing in person
        { label: "Out of Hours", value: "menu_out_of_hours" },  // Button for out of hours
        { label: "Repairs", value: "menu_repairs" },  // Button for repairs
        { label: "Revenue and Benefits", value: "menu_revenue_benefits" },  // Button for revenue and benefits
    ];

    // Define an array of info buttons
    const infoButtons = [
        { label: "Customer Search", value: "customer_search" },  // Button for customer search
        { label: "Contact History", value: "contact_history" },  // Button for contact history
        { label: "Property Search", value: "property_search" },  // Button for property search
        { label: "Report a Bug", value: "https://sheffieldcc-it.uk.4me.com/self-service" },  // Button to report a bug
        { label: "Request a Change", value: "https://sheffieldcc-it.uk.4me.com/self-service" },  // Button to request a change
    ];

    // Function to render buttons based on an array and a class name
    const renderButtons = (array, className) => {
        array.forEach(({ label, value }) => {
            const button = document.createElement("button");
            button.className = className;
            button.innerText = label;
            button.value = value;
            button.addEventListener("click", () => {
                if (value.includes("page_")) {
                    // Show and go to a page
                    KDF.showPage(value);
                    KDF.gotoPage(value, false, true, true);
                    resetNavMenu();
                    navButtonContainer.innerHTML = "";
                    navButtonContainer.classList.add("hidden");
                } else if (value.includes("http")) {
                    // Open a URL in a new tab
                    window.open(value, '_blank');
                } else if (value === "customer_search") {
                    launchCustomerModal();
                } else if (value === "contact_history") {
                    launchContactHistoryModal();
                } else if (value === "property_search") {
                    launchPropertyModal();
                } else {
                    allParamsFormJump = (value, false);
                }
            });
            navButtonContainer.appendChild(button);  // Add the button to the button container
        });
    };

    // Get the button container element
    const navButtonContainer = document.getElementById("nav-container");

    // Get the home, nav, and info buttons
    const homeButton = document.querySelectorAll(".nav-button")[0];
    const navButton = document.querySelectorAll(".nav-button")[1];
    const infoButton = document.querySelectorAll(".nav-button")[2];

    let navVisible = false;  // Track the visibility of the nav buttons
    let infoVisible = false;  // Track the visibility of the info buttons

    // Add click event listener for the nav button
    navButton.addEventListener("click", () => {
        infoVisible = false;
        navButtonContainer.innerHTML = "";
        navButtonContainer.classList.toggle('show');
        if (navVisible) {
            navVisible = false;
        } else {
            renderButtons(navButtons, "nav-buttons");  // Render nav buttons
            navButtonContainer.classList.add("show");
            navVisible = true;
        }
    });

    // Add click event listener for the info button
    infoButton.addEventListener("click", () => {
        navVisible = false;
        navButtonContainer.innerHTML = "";
        navButtonContainer.classList.toggle('show');
        if (infoVisible) {
            infoVisible = false;
        } else {
            renderButtons(infoButtons, "info-buttons");  // Render info buttons
            navButtonContainer.classList.add("show");
            infoVisible = true;
        }
    });

    // Reset nav and info menus
    const resetNavMenu = () => {
        navVisible = false;
        infoVisible = false;
        navButtonContainer.classList.remove("show");
    };

    // Add click event listener for the home button
    homeButton.addEventListener("click", () => {
        resetNavMenu();
    });

    const header = document.querySelector("header");
    header.insertAdjacentElement("afterend", navButtonContainer);  // Insert the button container after the header

    // Create Object
    // Switch Search Type
    // Search Object
    // Retrieve Object
    // Update Object

    // Search Address
    // Retrieve Address
    // Update Address
    // Add Address Manually

    // Show Contact History
    // Filter Contact History

    // // Submit
    // const submitButton = document.getElementsByClassName('submit-button')
    // submitButton.addEventListener('click', () => {
    //     KDF.save();
    // });

    // const additionalInteractionButton = document.getElementsByClassName('additional-interaction')
    // additionalInteractionButton.addEventListener('click', () => {
    //     const url = `${serverEnvironment}/form/launch/${getValue('txt_agent_menu')}?agentParams=${encodedAD}&interactionParams=${encodedID}`;
    // 	location.href = url;
    // });

    // const finishInteractionButton = document.getElementsByClassName('finish-interaction')
    // finishInteractionButton.addEventListener('click', () => {
    //     const url = `${serverEnvironment}/form/launch/${getValue('txt_agent_menu')}?agentParams=${encodedAD}`;
    //     location.href = url;
    // });

    // const clearObjectButton = document.getElementsByClassName('clear-object')
    // clearObjectButton.addEventListener('click', () => {
    //     // tbc
    // });

    // const clearLocationButton = document.getElementsByClassName('clear-location')
    // clearLocationButton.addEventListener('click', () => {
    //     // tbc
    // });

    // const exitCaseButton = document.getElementsByClassName('exit-case')
    // exitCaseButton.addEventListener('click', () => {
    //     window.close;
    // });

    // const updateCaseButton = document.getElementsByClassName('update-case')
    // updateCaseButton.addEventListener('click', () => {
    //     process = "update case";
    //     KDF.save();
    // });

    // const closeCaseButton = document.getElementsByClassName('close-case')
    // closeCaseButton.addEventListener('click', () => {
    //     process = "close case";
    //     KDF.save();
    // });

};

// ----- ON FIELD CHANGE ---------------------------------------------------- //

const onFieldChange = (field) => {
    console.log(KDF.check(field.name));
    checkFormProgress();
};

// ----- ON MAP LOAD -------------------------------------------------------- //

const mapReady = (map, marker) => {
    mapParams.map = map;
    vmap = new VMap(mapParams);
    const mapExtentChange = map.on("extent-change", extentChanged);
    drawAssetLayer(marker);
};

// ----- ON MAP CLICK ------------------------------------------------------- //

const mapClicked = (map, marker) => {
    mapParams.map = map;
    clearMapData();
    if (getValue("txt_agentteam") === "07000000004") {
        queryGMSitesHousing(marker);
    } else {
        queryLayer(marker);
    }
};

// ----- ON PAGE CHANGE ----------------------------------------------------- //

const onPageChange = (currentpageid, targetpageid) => {
    checkFormProgress();

    // Check agent details
    
    // Previouse Page
    // $('div[data-type="page"][data-pos="' + currentpageid + '"]').each(function () {
    //     document.getElementById('dform_widget_txt_previous_page').value(this.id.slice(11));
    // });
    
    // Current Page
    // $('div[data-type="page"][data-pos="' + targetpageid + '"]').each(function () {
    //     document.getElementById('dform_widget_txt_current_page').value(this.id.slice(11));
    // });
};

// ----- ON SUCESSEFULL ACTION ---------------------------------------------- //
const onSucessefullAction = (action, response) => {
    KDF.hideMessages();
    const rd = response.data;
    
    if (action === 'look-up-agent-details') {
        // Define the values to store in the cookie
        const agentDetails = {
            agentID: rd.txt_agent_id,
            agentName: rd.txt_agent_name,
            agentEmail: rd.eml_agent_email,
            agentMobile: rd.tel_agent_mobile
        };

        // Set agent details and retrieve the values
        setAgentDetails(agentDetails);

        // Add agent details to footer
        document.getElementById('agent').textContent = `Agent: ${rd.txt_agent_name} (${rd.txt_agent_id})`;

        // Add greeting to page
        const greeting = document.getElementById("dform_widget_header_hrd_agent_greetin");
        greeting.textContent = '';
        const name = `${getRandomGreeting()} ${rd.txt_agent_name.split(' ')[0]}`;
        const chars = [...name];
        
        // Animate Greeting
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i === chars.length) {
            clearInterval(typeInterval);
          } else {
            greeting.textContent += chars[i];
            i++;
          }
        }, 50);

        // Set the expiration time for the cookie
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + (12 * 60 * 60 * 1000)); // Sets expiration to 12 hours
        
        // Encode the agent data as JSON and store it in a cookie
        document.cookie = `agentDetails=${JSON.stringify(agentDetails)};expires=${expirationTime.toUTCString()};path=/`;
    }

    if (action === "search-object") {
        $("#dform_widget_button_but_create_record").prop("disabled", false);
        if (response.data.object_search_results.length === 0) {
            $('.search-profile-container__results, #no_profile_found').show();
        } else {
             $.each(response.data.object_search_results.sort((a, b) => a.label.localeCompare(b.label)), (i, result) => {
                const optionLabel = result.label.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
                $('#dform_widget_object_search_results').append($('<option>').val(result.value).text(optionLabel));
            });
            $(".search-profile-container__results, .dform_widget_object_search_results").show();
        }
    }

    if (action === "retrieve-individual" || action === "retrieve-organisation") {
        Object.entries(rd).forEach(([key, value]) => {
            setValue(key, value);
        });
        $('.search-profile-container').hide();
        $('.update-profile-container').show();
    }

    if (action === "create-individual" || action === "create-organisation") {
        
    }

    if (action === "update-individual" || action === "update-organisation") {
        
    }

    if (action === "search-address") {

    }

    if (action === "retrieve-address") {

    }

    if (action === "kdf-save-crm" || action === "kdf-save-general-enquiry") {
        setValue('txt_interaction', rd.interactionid);
        setValue('txt_reference', rd.caseid);
        setValue('txt_form_reference', rd.ref);
        goToNextPage(page_confirmation);
    }
};

// ----- ON UNSUCESSEFULL ACTION -------------------------------------------- //

const onUnsucessefullAction = action => {
    KDF.showError(`Error: ${action} has failed to run. Try it again. If this error persists, report it via the ServiceNow portal.`);
    
    if (action === "kdf-save-crm" || action === "kdf-save-general-enquiry") {
        console.log(caseDetails);
    }
};

// ----- ON SUCESSEFULL SAVE ------------------------------------------------ //

const onSucessefullSave = kdf => {
    KDF.hideMessages();
    
    if (process === "update case") {
        window.close;
    } else if (process === "close case") {
        
    } else {
        setvalue('txt_interactionid', kdf.form.interactionid);
        setvalue('txt_reference', kdf.form.caseid);
        setvalue('txt_form_reference', kdf.form.ref);
        goToNextPage(page_confirmation);
        KDF.gotoPage('page_confirmation', false, false, false);
    }
};

// ----- ON UNSUCESSEFULL SAVE ---------------------------------------------- //

const onUnsucessefullSave = () => {
    KDF.showError(`Error: This form has failed to save. Try it again. If this error persists, report it via the ServiceNow portal.`);

    console.log(caseDetails);
};

// ----- HTML CONTENT ------------------------------------------------------- //

// -- SEARCH PROFILE FORM --------------------------------------------------- //

const searchProfileHTML = `
  <form class="search-profile-container">
    <div class="search-profile-container__header">
      <div style="clear: both;" data-type="header" data-name="hrd_search" id="dform_widget_header_hrd_search"
        data-active="true" class="dform_widget modal-header-title dform_widget_type_header dform_widget_hrd_search">
        Individual Search
      </div>
      <button type="button" id="dform_widget_button_but_individual_search" data-active="false"
        class="dform_widget modal-header-button dform_widget_type_button dform_widget_but_individual_search">
        Individual search
      </button>
      <button type="button" id="dform_widget_button_but_organisation_search" data-active="true"
        class="dform_widget modal-header-button dform_widget_type_button dform_widget_but_organisation_search">
        Organisation search
      </button>
      <button type="button" id="dform_widget_button_but_reset_search" data-active="true"
        class="dform_widget modal-header-button dform_widget_type_button dform_widget_but_reset_search">
        ↺ Reset
      </button>
    </div>
    <div class="search-profile-container__input">
      <div data-type="text" data-name="search_organisation_name" data-active="false" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_organisation_name dform_widget_">
        <label for="dform_widget_search_organisation_name">Organisation Name</label>
        <input id="dform_widget_search_organisation_name" type="text" name="search_organisation_name"
          class="dform_nopersist" size="50">
      </div>
      <div data-type="text" data-name="search_forename" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_forename dform_widget_">
        <label for="dform_widget_search_forename">Forename</label>
        <input id="dform_widget_search_forename" type="text" name="search_forename" class="dform_nopersist" size="50">
      </div>
      <div data-type="text" data-name="search_surname" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_surname dform_widget_">
        <label for="dform_widget_search_surname">Surname</label>
        <input id="dform_widget_search_surname" type="text" name="search_surname" class="dform_persist" size="50">
      </div>
      <div data-type="date" data-name="search_dob" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_date dform_widget_search_dob dform_widget_">
        <label for="dform_widget_search_dob">Date of Birth</label>
        <input id="dform_widget_search_dob" type="date" name="search_dob" class="dform_nopersist"
          data-mindate="-0D -0M -120Y" data-maxdate="0D"
          title="Date can't be in the future or more than 120 years in the past" min="1900-01-01" max="2024-12-31">
      </div>
      <div data-type="text" data-name="search_number" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_number dform_widget_">
        <label for="dform_widget_search_number">Property Number</label>
        <input id="dform_widget_search_number" type="text" name="search_number" class="dform_nopersist" size="50">
      </div>
      <div data-type="text" data-name="search_street_name" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_street_name dform_widget_">
        <label for="dform_widget_search_street_name">Street Name</label>
        <input id="dform_widget_search_street_name" type="text" name="search_street_name" class="dform_nopersist"
          size="50">
      </div>
      <div data-type="text" data-name="search_postcode" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_postcode dform_widget_">
        <label for="dform_widget_search_postcode">Postcode</label>
        <input id="dform_widget_search_postcode" type="text" name="search_postcode" class="dform_nopersist" size="50"
          pattern="[A-Z]{1,2}[0-9]{1,2}[A-Z]?(\\s*[0-9][A-Z]{1,2})?" title="Enter the postcode in the correct format"
          data-forcecase="upper">
      </div>
      <div data-type="text" data-name="search_phone" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_phone dform_widget_">
        <label for="dform_widget_search_phone">Phone Number</label>
        <input id="dform_widget_search_phone" type="text" name="search_phone" size="50" pattern="[0-9]">
      </div>
      <div data-type="text" data-name="search_email" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_search_email dform_widget_">
        <label for="dform_widget_search_email">Email Address</label>
        <input id="dform_widget_search_email" type="text" name="search_email" class="dform_nopersist" size="50"
          data-forcecase="lower">
      </div>
      <button type="button" id="dform_widget_button_but_search_object" data-active="true"
        class="dform_widget dform_widget_type_button dform_widget_but_search_object">
        Search records
      </button>
    </div>
    <div class="search-profile-container__results">
      <h3 id="no_profile_found">No records found</h3>
      <div data-type="select" data-name="object_search_results" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_select dform_widget_object_search_results dform_widget_">
        <label for="dform_widget_object_search_results">Select a record</label>
        <select id="dform_widget_object_search_results" name="object_search_results" class="dform_nopersist">
          <option value="" selected="">Please select...</option>
        </select>
      </div>
    </div>
    <div class="search-profile-container__buttons">
      <button type="button" id="dform_widget_button_but_record_found" data-active="true"
        class="dform_widget dform_widget_type_button dform_widget_but_record_found">
        Record found
      </button>
      <button type="button" id="dform_widget_button_but_create_record" data-active="false"
        class="dform_widget dform_widget_type_button dform_widget_but_create_record">
        Create record
      </button>
      <button type="button" id="dform_widget_button_but_continue_anonymous" data-active="false"
        class="dform_widget dform_widget_type_button dform_widget_but_continue_anonymous">
        Continue anonymously
      </button>
    </div>
  </form>`;

// -- UPDATE PROFILE FORM --------------------------------------------------- //

const updateProfileHTML = `
<form class="update-profile-container">
  <div class="update-profile-container__header">
    <div style="clear: both;" data-type="header" data-name="hrd_update" id="dform_widget_header_hrd_update"
      data-active="true" class="dform_widget modal-header-title dform_widget_type_header dform_widget_hrd_update">
      Update record
    </div>
  </div>
  <div class="update-profile-container__input">
    <div data-type="text" data-name="update_organisation_name" data-active="false" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_update_organisation_name dform_widget_">
      <label for="dform_widget_update_organisation_name">Organisation Name</label>
      <input id="dform_widget_update_organisation_name" type="text" name="update_organisation_name"
        class="dform_nopersist" size="50">
    </div>
    <div data-type="select" data-name="update_title" data-active="true" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_select dform_widget_update_title"
      data-value="Mr">
      <label for="dform_widget_update_title">Title</label>
      <select id="dform_widget_update_title" name="update_title" data-mapfrom="update_title" title="Select a title"
        class="">
        <option value="" selected="">Please select...</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Ms">Ms</option>
        <option value="Mx">Mx</option>
        <option value="Doctor">Doctor</option>
        <option value="Reverend">Reverend</option>
      </select>
    </div>
    <div data-type="text" data-name="update_forename" data-active="true" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_update_forename dform_widget_">
      <label for="dform_widget_update_forename">Forename</label>
      <input id="dform_widget_update_forename" type="text" name="update_forename" class="dform_nopersist" size="50">
    </div>
    <div data-type="text" data-name="update_surname" data-active="true" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_update_surname dform_widget_">
      <label for="dform_widget_update_surname">Surname</label>
      <input id="dform_widget_update_surname" type="text" name="update_surname" class="dform_persist" size="50">
    </div>
    <div data-type="date" data-name="update_dob" data-active="true" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_date dform_widget_update_dob dform_widget_">
      <label for="dform_widget_update_dob">Date of Birth</label>
      <input id="dform_widget_update_dob" type="date" name="update_dob" class="dform_nopersist"
        data-mindate="-0D -0M -120Y" data-maxdate="0D"
        title="Date can't be in the future or more than 120 years in the past" min="1900-01-01" max="2024-12-31">
    </div>
    <div data-type="text" data-name="update_phone" data-active="true" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_update_phone dform_widget_">
      <label for="dform_widget_update_phone">Phone Number</label>
      <input id="dform_widget_update_phone" type="text" name="update_phone" size="50" pattern="[0-9]">
    </div>
    <div data-type="text" data-name="update_email" data-active="true" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_update_email dform_widget_">
      <label for="dform_widget_update_email">Email Address</label>
      <input id="dform_widget_update_email" type="text" name="update_email" class="dform_nopersist" size="50"
        data-forcecase="lower">
    </div>
    <div class="update_address_text">
      <label for="dform_widget_update_address">Address</label>
      <span id="dform_widget_update_address" style="display: block; margin-top: 2rem;"></span>
    </div>
    <div data-type="text" data-name="update_postcode" data-active="true" data-agentonly="false"
      class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_update_postcode dform_widget_">
      <label for="dform_widget_update_postcode">Postcode</label>
      <div class="postcode-search-field">
        <input id="dform_widget_update_postcode" type="text" name="update_postcode" class="dform_nopersist"
          size="50" pattern="[A-Z]{1,2}[0-9]{1,2}[A-Z]?(\\s*[0-9][A-Z]{1,2})?"
          title="Enter the postcode in the correct format" data-forcecase="upper">
        <button type="button" id="dform_widget_button_but_update_address" data-active="true"
          class="dform_widget dform_widget_type_button dform_widget_but_update_address">
          Search
        </button>
      </div>
    </div>
  </div>
  <div class="update-profile-container__results">
    <h3 id="no_address_found">No addresses found</h3>
    <div data-type="select" data-name="update_address_search_results" data-active="true" data-agentonly="false"
      class="container dform_widget  dform_widget_field dform_widget_type_select dform_widget_update_address_search_results dform_widget_">
      <label for="dform_widget_update_address_search_results" class="dform_hidden">Secect an address</label>
      <select id="dform_widget_update_address_search_results" name="update_address_search_results" aria-label="" class="">
        <option value="" selected="">Please select...</option>
      </select>
    </div>
  </div>
  <div class="update-profile-container__buttons">
    <button type="button" id="dform_widget_button_but_update_continue_with_enquiry" data-active="true"
      class="dform_widget dform_widget_type_button dform_widget_but_update_continue_with_enquiry">
      Continue with enquiry
    </button>
  </div>
</form>`;

// -- CREATE PROFILE FORM --------------------------------------------------- //

const createProfileHTML = `
<form class="create-profile-container">
    <div class="create-profile-container__header">
      <div style="clear: both;" data-type="header" data-name="hrd_create" id="dform_widget_header_hrd_create"
        data-active="true" class="dform_widget modal-header-title dform_widget_type_header dform_widget_hrd_create">
        Create record
      </div>
    </div>
    <div class="create-profile-container__input">
      <div data-type="text" data-name="create_organisation_name" data-active="false" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_create_organisation_name dform_widget_">
        <label for="dform_widget_create_organisation_name">Organisation Name</label>
        <input id="dform_widget_create_organisation_name" type="text" name="create_organisation_name"
          class="dform_nopersist" size="50">
      </div>
      <div data-type="select" data-name="create_title" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_select dform_widget_create_title"
        data-value="Mr">
        <label for="dform_widget_create_title">Title</label>
        <select id="dform_widget_create_title" name="create_title" data-mapfrom="create_title" title="Select a title"
          class="">
          <option value="" selected="">Please select...</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Ms">Ms</option>
          <option value="Mx">Mx</option>
          <option value="Doctor">Doctor</option>
          <option value="Reverend">Reverend</option>
        </select>
      </div>
      <div data-type="text" data-name="create_forename" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_create_forename dform_widget_">
        <label for="dform_widget_create_forename">Forename</label>
        <input id="dform_widget_create_forename" type="text" name="create_forename" class="dform_nopersist" size="50">
      </div>
      <div data-type="text" data-name="create_surname" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_create_surname dform_widget_">
        <label for="dform_widget_create_surname">Surname</label>
        <input id="dform_widget_create_surname" type="text" name="create_surname" class="dform_persist" size="50">
      </div>
      <div data-type="date" data-name="create_dob" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_date dform_widget_create_dob dform_widget_">
        <label for="dform_widget_create_dob">Date of Birth</label>
        <input id="dform_widget_create_dob" type="date" name="create_dob" class="dform_nopersist"
          data-mindate="-0D -0M -120Y" data-maxdate="0D"
          title="Date can't be in the future or more than 120 years in the past" min="1900-01-01" max="2024-12-31">
      </div>
      <div data-type="text" data-name="create_phone" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_create_phone dform_widget_">
        <label for="dform_widget_create_phone">Phone Number</label>
        <input id="dform_widget_create_phone" type="text" name="create_phone" size="50" pattern="[0-9]">
      </div>
      <div data-type="text" data-name="create_email" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_create_email dform_widget_">
        <label for="dform_widget_create_email">Email Address</label>
        <input id="dform_widget_create_email" type="text" name="create_email" class="dform_nopersist" size="50"
          data-forcecase="lower">
      </div>
      <div class="create_address_text">
        <label for="dform_widget_create_address">Address</label>
        <span id="dform_widget_create_address" style="display: block; margin-top: 2rem;"></span>
      </div>
      <div data-type="text" data-name="create_postcode" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_text dform_widget_create_postcode dform_widget_">
        <label for="dform_widget_create_postcode">Postcode</label>
        <div class="postcode-search-field">
          <input id="dform_widget_create_postcode" type="text" name="create_postcode" class="dform_nopersist"
            size="50" pattern="[A-Z]{1,2}[0-9]{1,2}[A-Z]?(\\s*[0-9][A-Z]{1,2})?"
            title="Enter the postcode in the correct format" data-forcecase="upper">
          <button type="button" id="dform_widget_button_but_create_address" data-active="true"
            class="dform_widget dform_widget_type_button dform_widget_but_create_address">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="create-profile-container__results">
      <h3 id="no_address_found">No addresses found</h3>
      <div data-type="select" data-name="create_address_search_results" data-active="true" data-agentonly="false"
        class="container dform_widget dform_widget_field dform_widget_type_select dform_widget_create_address_search_results dform_widget_">
        <label for="dform_widget_create_address_search_results" class="dform_hidden">Secect an address</label>
        <select id="dform_widget_create_address_search_results" name="create_address_search_results" aria-label="" class="">
          <option value="" selected="">Please select...</option>
        </select>
      </div>
    </div>
    <div class="create-profile-container__buttons">
      <button type="button" id="dform_widget_button_but_create_continue_with_enquiry" data-active="true"
        class="dform_widget dform_widget_type_button dform_widget_but_ccreate_ontinue_with_enquiry">
        Continue with enquiry
      </button>
    </div>
  </div>
</form>`;

// -- CONTACT HISTORY FORM -------------------------------------------------- //

// -- SEARCH PROPERTIES FORM ------------------------------------------------ //

// -- HEADER FOOTER --------------------------------------------------------- //
const setPageHeaderAndFooter = (() => {
    const body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML(
        "afterbegin",
        `<header role="banner">
            <div class="scc_wrap" id="top">
                <div class="container-header">
                    <img class="scc-logo" src="https://www.sheffield.gov.uk/themes/custom/bbd_localgov/logo.png" alt="Sheffield City Council Logo">
                    <h1 class="header-title">${getValue('txt_form_title')}</h1>
                    <div class="header-nav">
                        <button type="button" class="nav-button">Home</button>
                        <button type="button" class="nav-button">Navigation</button>
                        <button type="button" class="nav-button">Information</button>
                    </div>
                </div>
            </div>
        </header>
        <nav id="nav-container" class="nav-container"></nav>
        <div id="overlay"></div>
        <dialog id="modal">
            <button id="close-modal">&times;</button>
            ${searchProfileHTML}
            ${updateProfileHTML}
            ${createProfileHTML}
        </dialog>`
    );
    body.insertAdjacentHTML(
        "beforeend",
        `<footer class="scc_footer" role="contentinfo">
            <div class="container-footer">
                <span id="agent" class="footer-details"></span>
                <span id="agentLocation"class="footer-details"></span>
                <span id="chanelType"class="footer-details"></span>
            </div>
        </footer>`
    );
    })();

// -- LOADER ---------------------------------------------------------------- //

const setLoadingGraphic = (() => {
    $('#dform_lockMsg').html(`
        <div class="loader-container">
            <div class="loader">
                <div class="spinner"></div>
                <div class="text">Loading...</div>
                <div class="commentary"></div>
            </div>
        </div>
    `);
})();

// An array of useful comments to display during page loading
const commentaries = [
    "Making the internet faster, one byte at a time...",
    "Do you like this loading screen? I designed it myself!",
    "Please wait while we summon the internet gods to speed things up...",
    "If only I had a pound for every second this page takes to load...",
    "Loading... and drinking coffee at the same time, multitasking!",
    "We apologize for the delay. Our hamster-powered servers are working as fast as they can.",
    "It's not you, it's us. We're just really slow.",
    "We're almost there... we promise!",
    "Please be patient, this page is worth the wait!",
    "Meanwhile, let's play a game of Tetris while we wait...",
    "Waiting for the page to load... This is a good time to stretch your legs.",
    `I'm sorry ${getValue('txt_agent_name')}, I'm afraid this is taking a while to load...`,
    "Please hold... our servers are currently experiencing an existential crisis.",
    "We're experiencing technical difficulties. Please stand by.",
    "The internet is a strange and unpredictable place...",
    "This page may take a while to load, but at least it's not as slow as a sloth...",
    "We'll be right back after these loading messages...",
    "Sorry for the wait. We'll make it up to you with some free virtual cookies."
];

const commentaryElement = document.querySelector(".commentary");

// Get a random commentary from the commentaries array
const getRandomCommentary = () => {
    const randomIndex = Math.floor(Math.random() * commentaries.length);
    return commentaries[randomIndex];
};

// Set an interval to update the commentary every 3 seconds
setInterval(() => {
    const commentary = getRandomCommentary();
    commentaryElement.textContent = commentary;
}, 3000);
