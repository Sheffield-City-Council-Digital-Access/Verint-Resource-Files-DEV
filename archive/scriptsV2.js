
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
const normalizeSpaces = text => text.trim().replace(/\s+/g, ' ');

// Function to convert a sentence to title case
const toTitleCase = sentence => sentence.replace(/\b\w/g, match => match.toUpperCase());

// Function to remove non-numeric characters from a string
const removeNonNumeric = str => str.replace(/\D/g, '');

// Array of symbols commonly used in scripts
const scriptSymbols = ['<', '>', '&', '"', "'", '`', '=', '/', '(', ')', ';', '+', '-', '*', '%', '!', '[', ']', '{', '}', '|', '\\'];

// Function to remove script symbols from a string
const removeScriptSymbols = str => {
    // Create a regular expression with all the script symbols and replace any occurrence of script symbols with an empty string
    return str.replace(new RegExp(`[${scriptSymbols.join('\\')}]`, 'g'), '').trim();
};

// Function to count and display the remaining characters in a field
const characterCounter = (name) => {
  const string = getValue(name);
  const stringLength = string.length;
  const idConcat = `characterCounter${name}`;

  // Get the maximum character length from the field element
  const maxLength = document.getElementById(`dform_widget_${name}`).maxLength;

  // Calculate the remaining characters
  const remainingCharacters = maxLength - stringLength;

  // Update the character count element with the remaining characters
  document.getElementById(`${idConcat}`).innerHTML = `${remainingCharacters} characters remaining`;
};

// Function to append a character count element to a field
const characterCountAppender = (name) => {
    const parentElement = $(`#dform_widget_${name}`).parent();
    const characterCountElement = $(`<div class="character-count" aria-live="polite" id="characterCounter${name}"></div>`);
    parentElement.append(characterCountElement);

    // Call the characterCounter function to update the character count
    characterCounter(name);
};


// Function to get element by name
const getElementByName = name => {
  const element = document.getElementById(`dform_widget_${name}`);
  if (!element) {
    logElementNotFound(name);
  }
  return element;
};

// Log element not found
const logElementNotFound = name => {
  console.log(`Element with name "${name}" not found.`);
};

// Function to get value by widget name
const getValue = name => {
  const element = getElementByName(name);
  return element ? element.value : '';
};

// Function to set value by widget(s) name
const setValue = nameValuePairs => {
  nameValuePairs.map(([name, value]) => {
    const element = getElementByName(name);
    if (element) {
      element.value = value || '';
    }
    return null; // Returning null to maintain the same array length
  });
};

// Function to toggle element visibility by name
const toggleElementVisibility = (names, showFn, hideFn) => {
  names.map(name => {
    const element = getElementByName(name);
    if (element) {
      name.startsWith('page_') ? showFn(name) : hideFn(name);
    }
    return null; // Returning null to maintain the same array length
  });
};


// Function to show element by name
const showElement = names => {
  toggleElementVisibility(names, KDF.showPage, KDF.showWidget);
};

// Function to hide element by name
const hideElement = names => {
  toggleElementVisibility(names, KDF.hidePage, KDF.hideWidget);
};

// function to got back in the form jurney
const goToPreviousPage = pageID => {
    // Go to the specified page if pageID is provided, otherwise go to the previous page
    if (pageID) {
        KDF.gotoPage(pageID, false, true, true);
    } else {
        KDF.gotoPrevPage();
    }
};

// function to got forward in the form jurney
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
        return false;
    }
    // Enable action buttons if form progress is incomplete
    actionButtons.forEach(button => {
        button.classList.remove('disabled');
        button.disabled = false;
    });
    return true;
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

const disableNavButtons = values => {
  // Destructure values object with default values
  const {
    enableHome = true,
    enableNavi = true,
    enableInfo = true
  } = values;
  
  // Define button classes and their corresponding enable values
  const buttonClasses = {
    'nav-button__home': enableHome,
    'nav-button__navi': enableNavi,
    'nav-button__info': enableInfo
  };

  // Iterate over button classes and enable values
  for (const [buttonClass, enabled] of Object.entries(buttonClasses)) {
    // Select all elements with the specified class
    const buttons = document.querySelectorAll(`.${buttonClass}`);

    // Check if the buttons should be disabled or enabled
    if (!enabled) {
      // Disable buttons
      buttons.forEach(button => {
        button.disabled = true;
      });
    } else {
      // Enable buttons
      buttons.forEach(button => {
        button.disabled = false;
      });
    }
  }
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

// -- CONTACT PROFILE ------------------------------------------------------- //

const resetSearchRecord = () => {
    $(".dform_widget_but_individual_search, .dform_widget_search_organisation_name, .dform_widget_update_organisation_name, .search-profile-container__results, .dform_widget_object_search_results, #no_profile_found, .update-profile-container__results, .dform_widget_address_search_results, #no_address_found").hide();
    $('#dform_widget_object_search_results').find('option').not(':first').remove();
    $("#dform_widget_button_but_create_record, #dform_widget_button_but_record_found").prop("disabled", true);
    $('#dform_widget_le_object_type').val('individual');
};

// ----- ON FORM READY ------------------------------------------------------ //

const onFormReady = (event, kdf) => {
// -- HEADER BUTTONS -------------------------------------------------------- //
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

// -- MODAL ----------------------------------------------------------------- //

    // Listen for the keydown event on the document
    document.addEventListener("keydown", (event) => {
        // Check if the pressed key is Escape (keyCode 27)
        if (event.keyCode === 27) {
            // Prevent the default behavior
            event.preventDefault();
            // Prevent the event propagation
            event.stopPropagation();
            hideModal();
        }
    });

    // Function to hide multiple containers
    const hideContainers = () => {
        $('.search-profile-container, .update-profile-container, .create-profile-container, .contact-history-container, .search-property-container').hide();
    };
    
    // Get the reference to the close button element with the ID "close-modal"
    const closeModalButton = document.getElementById("close-modal");
    
    // Get the reference to the modal element with the ID "modal"
    const modal = document.getElementById("modal");
    
    // Get the reference to the overlay element with the ID "overlay"
    const overlay = document.getElementById("overlay");
    
    // Function to show the modal
    const showModal = () => {
        hideContainers(); // Hide any existing containers
        resetNavMenu(); // Reset the navigation menu
        modal.showModal(); // Show the modal
        overlay.style.display = "block"; // Display the overlay
        document.body.style.overflow = "hidden"; // Prevent scrolling on the body
    };
    
    // Function to hide the modal
    const hideModal = () => {
        modal.close(); // Close the modal
        overlay.style.display = "none"; // Hide the overlay
        document.body.style.overflow = "auto"; // Allow scrolling on the body
        
        if (!getValue('txt_customerid')) {
            // reset search
        } else if (getValue('txt_customerid') === anonymousID) {
            // check against process to see if Anon is allowed
        } else {
            // continue with enquiry
        }
    };
    
    // Close modal
    closeModalButton.addEventListener("click", () => {
        hideModal();
    });
    
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

// -- ACTIONS --------------------------------------------------------------- //

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

// ----- Map -------------------------------------------------------------------

const clearMapData = () => {
  const values = {
    object_id: "",
    longitude_x: "",
    latitude_y: "",
    asset_type: "",
    asset_type_id: "",
    central_asset_id: "",
    asset_responsibility: "",
    site_name: "",
    txt_streetdescription: "",
    site_code: "",
    txt_usrn: "",
    txt_prestige: "",
    grass_category: ""
  };

  Object.entries(values).forEach(([key, value]) => {
    KDF.setVal(key, value);
  });

  showElement("but_next_page_about_the_location");
  showElement("but_submit_anonymously_page_about_the_location");
  hideElement("but_resolve_enquiry_page_about_the_location");
};

const checkReportType = () => {
  if (getValue("level_1_data") === "Fly-Tipping" ||
    getValue("level_1_data") === "Dead Animal" ||
    getValue("level_1_data") === "Dog Fouling" ||
    getValue("level_1_data") === "Needles / Syringes" ||
    getValue("level_1_data") === "Giant Hogweed" ||
    getValue("level_1_data") === "Japanese Knotweed" ||
    ((getValue("level_1_data") === "Hedge" ||
      getValue("level_1_data") === "Tree or Branch") &&
      getValue("level_2_data") === "Overgrown")) {
    KDF.setVal("asset_responsibility", "Environmental");
  } else {
    hideElement("but_next_page_about_the_location");
    hideElement("but_submit_anonymously_page_about_the_location");
    showElement("but_resolve_enquiry_page_about_the_location");
  }
};

const mapParams = {
  WKID: 27700,
  assetMaxDrawZoom: 17,
  assetClick: {
    radius: 3,
    radiusUnit: "esriMeters",
  },
  hostUrl: `https://${$(location).attr("hostname")}`,
};

const PFR = "/usrsvcs/servers/25557d31a8ba43408a6ad3a0495aa290/rest/services/AGOL/Verint_PublicFaultReporting/MapServer";
const CFI = "/usrsvcs/servers/3aca7e85a5834db39e0a41cb833ac8db/rest/services/Portal/Customer_First_Internal/MapServer";

const featureLayers = {
  boundary: {
    id: 0,
    url: "/usrsvcs/servers/97cfdc3a164c48219826b907c0a5064f/rest/services/AGOL/Boundaries/MapServer",
  },

  LLPG: {
    id:0, 
    url:"/usrsvcs/servers/af62c54a431540369ce04b70ea3cf51a/rest/services/LLPGCascade/CASCADE/GeocodeServer"
  },

  signs: {
    id: 0,
    url: `${PFR}`,
  },
  trafficsignals: {
    id: 41,
    url: `${PFR}`,
  },
  drains: {
    id: 2,
    url: `${PFR}`,
  },
  gritbins: {
    id: 3,
    url: `${PFR}`,
  },
  litterbins: {
    id: 4,
    url: `${PFR}`,
  },
  streetfurniture: {
    id: 5,
    url: `${PFR}`,
  },
  streetlights: {
    id: 6,
    url: `${PFR}`,
  },
  structures: {
    id: 7,
    url: `${PFR}`,
  },
  fences: {
    id: 8,
    url: `${PFR}`,
  },
  vegetation: {
    id: 24,
    url: `${PFR}`,
  },
  trees: {
    id: 27,
    url: `${PFR}`,
  },
  pavements: {
    id: 57,
    url: `${PFR}`,
  },
  roads: {
    id: 55,
    url: `${PFR}`,
  },
  usrn: {
    id: 55,
    url: `${PFR}`,
  },
  citycentre: {
    id: 14,
    url: `${PFR}`,
  },
  hotspotasspss: {
    id: 15,
    url: `${PFR}`,
  },
  hotspotschools: {
    id: 16,
    url: `${PFR}`,
  },
  principalshopsite: {
    id: 17,
    url: `${PFR}`,
  },
  neighbourhoodshopsite: {
    id: 18,
    url: `${PFR}`,
  },
  gateway: {
    id: 19,
    url: `${PFR}`,
  },
  prowflytipping: {
    id: 23,
    url: `${PFR}`,
  },
  adoptedhighways: {
    id: 4,
    url: "/usrsvcs/servers/f5c0484e329e41188ea83b3f7076f75f/rest/services/Portal/Highways_Internal/MapServer",
  },
  parks: {
    id: 49,
    url: `${PFR}`,
  },
  openfaults: {
    id: 11,
    url: `${CFI}`,
  },
  otherdesignatedland: {
    id: 21,
    url: `${CFI}`,
  },
  nonadoptedgm: {
    id: 22,
    url: `${CFI}`,
  },
  gmsites: {
    id: 29,
    url: `${CFI}`,
  },
  shmisc: {
    id: 30,
    url: `${CFI}`,
  },
  ptleases: {
    id: 43,
    url: `${CFI}`,
  },
  ptholdings: {
    id: 34,
    url: `${CFI}`,
  },

  url(layer) {
    return layer.url;
  },
  getQueryLayer(layer) {
    return { url: this.url(layer) + "/" + layer.id, wkid: layer.wkid };
  },
};

let queriesComplete = 0;
let queryCount = 0;
let retrievedFeatures = [];

const extentChanged = (evt) => {
  vmap.zoomLevelChanged(evt, zoomChanged);
};

const zoomChanged = (evt) => {
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
};

const setClickRadius = (zoomLevel) => {
  const assetClick = vmap.getMapParams().assetClick;

  switch (zoomLevel) {
    case 14:
      assetClick.radius = 34;
      break;
    case 15:
      assetClick.radius = 21;
      break;
    case 16:
      assetClick.radius = 13;
      break;
    case 17:
      assetClick.radius = 8;
      break;
    case 18:
      assetClick.radius = 5;
      break;
    case 19:
      assetClick.radius = 3;
      break;
    default:
      assetClick.radius = 50;
      break;
  }
};

// ----- Map Error Handling ----------------------------------------------------

const genericErrorHandler = (e) => {
  vmap.setInfoWindow({
    xcoord: marker.geometry.x,
    ycoord: marker.geometry.y,
    title: "Error",
    content: "</strong>Please click on the map again.</strong>",
  });
};

const multiErrorHandler = (error) => {
  queriesComplete++;
  $(`#dform_${window.location.href.split("/").pop().split("?")[0]}`).trigger("_GIS_queryComplete");
};

// ----- Query Map Layer -------------------------------------------------------

const queryMapLayer = (marker, id) => {
  console.log(id);
  const queryLayerObj = featureLayers.getQueryLayer(featureLayers[id]);
  
  const mapLayerNames = ['signs', 'trafficsignals', 'drains', 'gritbins', 'litterbins', 'streetfurniture', 'streetlights', 'structures', 'fences', 'vegetation', 'trees'];

  let featureSetHandler;
  if (mapLayerNames.includes(id)) {
    featureSetHandler = eval('assetFeatureSetHandler');
  } else {
    featureSetHandler = eval(`${id}FeatureSetHandler`);
  }
  
  vmap.findFeaturesNear(marker, queryLayerObj, featureSetHandler, genericErrorHandler);
};

// ----- Draw Map Layer -------------------------------------------------------

const drawMapLayer = (id) => {
  const layerConfig = {
    url: featureLayers.url(featureLayers[id]),
    codes: [featureLayers[id].id],
    id: `${id}Layer`,
  };
  vmap.drawDynamicLayer(layerConfig);
};

const drawAssetLayer = (marker) => {
  const latitude = getValue("latitude_y");
  const longitude = getValue("longitude_x");
  
  if (latitude !== "" && longitude !== "") {
    vmap.getMapParams().assetClick.radius = 21;
    queryLayer(marker);
  } else {
    vmap.getMapParams().assetClick.radius = 3;
  }
  drawLayer();
};

const drawLayer = () => {
  const level1Data = getValue("level_1_data");
  const assetLayer = '';
  if (level1Data === "Gulley") {
    assetLayer = 'drains';
  } else if (["Fence", "Handrail", "Pedestrian Barrier", "Vehicle Barrier/Safety Fence"].includes(level1Data)) {
    assetLayer = 'fences';
  } else if (level1Data === "Grit Bin") {
    assetLayer = 'gritbins';
  } else if (level1Data === "Litter Bin") {
    assetLayer = 'litterbins';
  } else if (["Cameras / Electronic Signs", "Illuminated Road Signs", "Lit Bollard", "Non-Illuminated Road Signs", "Street Name Plates"].includes(level1Data)) {
    assetLayer = 'signs';
  } else if (["Art or Sculpture", "Bollard", "Cycle Barrier", "Cycle Stand", "Seat or Bench", "Tree or Branch"].includes(level1Data)) {
    assetLayer = 'streetfurniture';
  } else if (level1Data === "Street Light") {
    assetLayer = 'streetlights';
  } else if (["Bridge", "Culvert", "Earth Bank / Cutting", "Gantry", "Retaining Wall", "Subway"].includes(level1Data)) {
    assetLayer = 'structures';
  } else if (level1Data === "Traffic Signals") {
    assetLayer = 'trafficsignals';
  } else if (["Tree or Branch", "Tree Grille"].includes(level1Data)) {
    assetLayer = 'trees';
  } else if (["Box Planter", "Grass Verge", "Hedge", "Plants or Planted Area"].includes(level1Data)) {
    assetLayer = 'vegetation';
  }
  
  const layerIds = ['boundary', 'prowflytipping', assetLayer];
  layerIds.forEach((id) => {
    if (id) drawMapLayer(id);
  });
};

// ----- Remove Map Layer -------------------------------------------------------

const removeMapLayer = (id) => {
  const layerConfig = { id: `${id}Layer` };
  vmap.removeLayer(layerConfig);
};

// ----- Set Data to Fields ----------------------------------------------------

const setValues = (marker, featureSet, nextLayer, responsibility) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    console.log(featureSet.features[0]._layer._name)

    KDF.setVal("object_id", attributes.objectid || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.objectid"] || "");
    KDF.setVal("longitude_x", marker.geometry.x);
    KDF.setVal("latitude_y", marker.geometry.y);
    KDF.setVal("asset_type", attributes.featuretypename || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.featuretypename"] || attributes.type || "");
    KDF.setVal("asset_type_id", attributes.featureid || "");
    KDF.setVal("central_asset_id", attributes.centralassetid || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.centralassetid"] || "");
    if (responsibility) {
      KDF.setVal("asset_responsibility", responsibility);
    } else {
      KDF.setVal("asset_responsibility", attributes.responsibility || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.responsibility"] || attributes.customer || "");
    }
    KDF.setVal("site_name", attributes.sitename || attributes.site_name || attributes.streetname || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitename"] || attributes.description || "");
    KDF.setVal("txt_streetdescription", attributes.sitename || attributes.site_name || attributes.streetname || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitename"] || attributes.description || "");
    KDF.setVal("site_code", attributes.sitecode || attributes.site_code || attributes.usrn || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitecode"] || "");
    KDF.setVal("txt_usrn", attributes.sitecode || attributes.site_code || attributes.usrn || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitecode"] || "");
    KDF.setVal("grass_category", attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.grass_category"] || "");
    KDF.setVal("txt_prestige", attributes.locality || "");

    const siteName = `${attributes.sitename || attributes.site_name || attributes.streetname || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.sitename"] || attributes.description}`;
    let assetType = `${attributes.featuretypename || attributes["sheffield.corpmap.HCFP_Assets_GrassPlantArea.featuretypename"]}`;
    if (assetType.includes('DR ') || assetType.includes('SL: ')) assetType = assetType.replace('DR ', '').replace('SL: ', '');
    if (assetType.includes('TS: SCN Site')) assetType = assetType.replace('TS: SCN Site', 'Traffic Signal');
    if (assetType === "undefined") assetType = "Site";

    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content: `<strong>${assetType}:</strong> ${siteName}`,
    });
    
    vmap.centerAtLonLat({
      lon: marker.geometry.x,
      lat: marker.geometry.y,
    });
    
    if (!getValue("site_code")) queryMapLayer(marker, 'usrn');
    if (!getValue("asset_responsibility")) queryMapLayer(marker, 'adoptedhighways');
    if (!getValue("txt_prestige")) queryMapLayer(marker, 'citycentre');
  } else {
    queryMapLayer(marker, nextLayer);
  }
};

// ----- Prestige Feature Set Handler ------------------------------------------

const gatewayFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    KDF.setVal("txt_prestige", attributes.status);
  }
};

const neighbourhoodshopsiteFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    KDF.setVal("txt_prestige", attributes.status);
  } else {
    queryMapLayer(marker, 'gateway');
  }
};

const principalshopsiteFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    KDF.setVal("txt_prestige", attributes.status);
  } else {
    queryMapLayer(marker, 'neighbourhoodshopsite');
  }
};

const hotspotschoolsFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    KDF.setVal("txt_prestige", attributes.status);
  } else {
    queryMapLayer(marker, 'principalshopsite');
  }
};

const hotspotasspssFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    KDF.setVal("txt_prestige", attributes.status);
  } else {
    queryMapLayer(marker, 'hotspotschools');
  }
};

const citycentreFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    const status = attributes["status"];
    const prestige = status.startsWith("Co")
      ? "Copper"
      : status.startsWith("B")
      ? "Bronze"
      : status.startsWith("S")
      ? "Silver"
      : status.startsWith("G")
      ? "Gold"
      : status.startsWith("P")
      ? "Platinum"
      : attributes["status"];
    KDF.setVal("txt_prestige", prestige);
  } else {
    queryMapLayer(marker, 'hotspotasspss');
  }
};

// ----- PT Holdings Feature Set Handler ---------------------------------------

const holdingsSetHandlerHousing = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const asset = featureSet.features[0];
    const attributes = asset.attributes;

    setValues(marker, featureSet, {
      asset_responsibility: "",
      site_content: "Housing"
    });

    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content: "<strong>Site:</strong> Council Land",
    });
  } else {
    queryLayer(marker);
  }
};

const queryPTHoldingsHousing = (marker) => {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.ptholdings);
  vmap.findFeaturesNear(marker, queryLayer, holdingsSetHandlerHousing, genericErrorHandler);
};

const ptholdingsFeatureSetHandler = (marker, featureSet) => {
  KDF.setVal("longitude_x", marker.geometry.x);
  KDF.setVal("latitude_y", marker.geometry.y);
  if (featureSet.features.length >= 1) {
    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content: "<strong>Site:</strong> Unidentified Council Land",
    });
  } else {
    KDF.setVal("asset_responsibility", "Private Land");
    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content: "<strong>Site:</strong> Private Land",
    });
  }
  vmap.centerAtLonLat({
    lon: marker.geometry.x,
    lat: marker.geometry.y,
  });
  checkReportType();
};

// ----- PT Lease Feature Set Handler ------------------------------------------

const ptleasesFeatureSetHandler = (marker, featureSet) => {
  setValues(marker, featureSet, 'ptholdings', 'Leased Site');
};

// ----- GM Sites Feature Set Handler ------------------------------------------

const gmsitesSetHandlerHousing = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const asset = featureSet.features[0];
    const attributes = asset.attributes;

    setValues(attributes, marker, {
      asset_type: "type",
      asset_type_id: "",
      central_asset_id: "",
      asset_responsibility: "customer",
      site_name: "sitename",
      txt_streetdescription: "site_name",
      site_code: "",
      txt_usrn: ""
    });

    vmap.setInfoWindow({
      xcoord: marker.geometry.x,
      ycoord: marker.geometry.y,
      title: "Details",
      content: attributes.sitename,
    });
  } else {
    queryMapLayer(marker, 'ptholdings');
  }
};

const queryGMSitesHousing = (marker) => {
  const queryLayer = featureLayers.getQueryLayer(featureLayers.gmsites);
  vmap.findFeaturesNear(
    marker,
    queryLayer,
    gmsitesSetHandlerHousing,
    genericErrorHandler
  );
};

const gmsitesFeatureSetHandler = (marker, featureSet) => {
  setValues(marker, featureSet, 'ptleases');
};

// ----- Parks Feature Set Handler ---------------------------------------------

const parksFeatureSetHandler = (marker, featureSet) => {
  setValues(marker, featureSet, 'gmsites', 'Parks and Public Realms');
};

// ----- Adopted Highways Feature Set Handler ----------------------------------

const adoptedhighwaysFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;

    KDF.setVal("asset_responsibility", attributes["status"].startsWith("A") ? "AMEY (PFI)" : "Unadopted Highway");
    
    if (attributes["status"].startsWith("U")) {
      vmap.setInfoWindow({
        xcoord: marker.geometry.x,
        ycoord: marker.geometry.y,
        title: "Details",
        content: `<strong>Site:</strong> ${attributes.name}
        <br>${getValue("asset_responsibility")}`,
      });
      checkReportType();
    }
  }
};

// ----- Roads Feature Set Handler ---------------------------------------------

const usrnFeatureSetHandler = (marker, featureSet) => {
  if (featureSet.features.length >= 1) {
    const attributes = featureSet.features[0].attributes;
    KDF.setVal("site_code", attributes.usrn || "");
    KDF.setVal("txt_usrn", attributes.usrn || "");
  }
};

// ----- Pavements Feature Set Handler -----------------------------------------

const pavementsFeatureSetHandler = (marker, featureSet) => {
  setValues(marker, featureSet, 'parks');
};

// ----- Roads Feature Set Handler ---------------------------------------------

const roadsFeatureSetHandler = (marker, featureSet) => {
  console.log(featureSet)
  setValues(marker, featureSet, 'pavements');
};

// ----- Asset Feature Set Hanlder -------------------------------------------

const assetFeatureSetHandler = (marker, featureSet) => {
  setValues(marker, featureSet, 'roads');
};

// ----- Query Map Layers ------------------------------------------------------

const queryLayer = (marker) => {
  const level1Data = getValue("level_1_data");

  if (level1Data === "Gulley") {
    queryDrains(marker);
  } else if (["Fence", "Handrail", "Pedestrian Barrier", "Vehicle Barrier/Safety Fence"].includes(level1Data)) {
    queryMapLayer(marker, 'fences');
  } else if (level1Data === "Grit Bin") {
     queryMapLayer(marker, 'gritbins');
  } else if (level1Data === "Litter Bin") {
    queryMapLayer(marker, 'litterbins');
  } else if (["Cameras / Electronic Signs", "Illuminated Road Signs", "Lit Bollard", "Non-Illuminated Road Signs", "Street Name Plates"].includes(level1Data)) {
    queryMapLayer(marker, 'signs');
  } else if (["Art or Sculpture", "Bollard", "Cycle Barrier", "Cycle Stand", "Seat or Bench", "Tree or Branch"].includes(level1Data)) {
    queryMapLayer(marker, 'streetfurniture');
  } else if (level1Data === "Street Light") {
    queryMapLayer(marker, 'streetlights');
  } else if (["Bridge", "Culvert", "Earth Bank / Cutting", "Gantry", "Retaining Wall", "Subway"].includes(level1Data)) {
    queryMapLayer(marker, 'structures');
  } else if (level1Data === "Traffic Signals") {
    queryMapLayer(marker, 'trafficsignals');
  } else if (["Tree or Branch", "Tree Grille"].includes(level1Data)) {
    queryMapLayer(marker, 'trees');
  } else if (["Box Planter", "Grass Verge", "Hedge", "Plants or Planted Area"].includes(level1Data)) {
    queryMapLayer(marker, 'vegetation');
  } else {
    queryMapLayer(marker, 'roads');
  }
};

// ----- Core Map Functionality ------------------------------------------------

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
  var layer = new esri.layers.ArcGISDynamicMapServiceLayer(layerConfig.url, {
    id: layerConfig.id,
  });
  layer.setVisibleLayers(layerConfig.codes);
  layer.setOpacity(0.9);
  this.getMapParams().map.addLayer(layer);
};
VMap.prototype.removeLayer = function removeLayer(layerConfig) {
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
        class="dform_widget dform_widget_type_button dform_widget_but_create_continue_with_enquiry">
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
                        <button type="button" class="nav-button nav-button__home">Home</button>
                        <button type="button" class="nav-button nav-button__navi">Navigation</button>
                        <button type="button" class="nav-button nav-button__info">Information</button>
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
