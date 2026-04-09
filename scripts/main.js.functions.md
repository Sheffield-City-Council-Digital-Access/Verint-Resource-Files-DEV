# `main.js` Function Reference

This document provides a reference for key functions found in `scripts/main.js`, categorized by their purpose. Each entry includes a description and an example of its use within the KDF (Knowledge Domain Framework) environment.

---

## 1. KDF Event Handlers

These are the main functions that hook into the KDF lifecycle to orchestrate the application's behavior.

### `handleInitialisingEvent()`
-   **Description**: Fired once when the form is first loading. It's used for one-time setup tasks like injecting the header/footer, setting the favicon, adding character counters, and preparing UI elements that don't depend on form data.
-   **Example**: This function is registered to run when the DOM is ready.
    ```javascript
    document.addEventListener("DOMContentLoaded", handleInitialisingEvent);
    ```

### `handleOnReadyEvent(_, kdf)`
-   **Description**: Fired when the KDF framework and all form data are fully loaded and ready. This is the main entry point for data-dependent initializations, such as setting up address lookups with profile data, building surveys, and handling completed form views.
-   **Example**: Registered via the KDF's `onReady` method.
    ```javascript
    KDF.onReady(function (event, kdf) {
        handleOnReadyEvent(event, kdf);
    });
    ```

### `handlePageChangeEvent(event, kdf, currentpageid, targetpageid)`
-   **Description**: Fired every time the user navigates between pages. It's used to update the progress bar, manage back button visibility, and run page-specific logic (e.g., triggering an agent action on the 'about_you' page).
-   **Example**: Registered via the KDF's `onPageChange` method.
    ```javascript
    KDF.onPageChange(function (event, kdf, currentpageid, targetpageid) {
        handlePageChangeEvent(event, kdf, currentpageid, targetpageid);
    });
    ```

### `handleSuccessfulAction(event, kdf, response, action, actionedby)`
-   **Description**: Fired after a KDF custom action (e.g., an API call) completes successfully. It processes the returned `response` data, such as populating an address dropdown from a postcode search or displaying retrieved vehicle details.
-   **Example**:
    ```javascript
    // Inside the function, handling an address search response
    if (action === "search-local-address") {
        const { propertySearchResult } = response.data;
        // Code to populate a <select> element with the search results...
    }
    ```

---

## 2. UI & DOM Manipulation Functions

These functions are used to dynamically create, modify, or interact with HTML elements.

### `hideShowMultipleElements(fields)`
-   **Description**: A utility function to show or hide multiple KDF pages, sections, or widgets in a single call.
-   **Example**:
    ```javascript
    // Hiding the search input and showing the results list
    hideShowMultipleElements([
        { name: "txt_postcode_search", display: "hide" },
        { name: "but_find_address", display: "hide" },
        { name: "sel_address_results", display: "show" },
        { name: "but_set_address", display: "show" },
    ]);
    ```

### `createNotification(content, type)`
-   **Description**: Creates and displays a site-wide notification banner at the top of the page.
-   **Parameters**:
    -   `content`: An object `{ message: '...', linkText: '...', linkHref: '...' }`.
    -   `type`: A string: `'info'`, `'success'`, `'warning'`, or `'error'`.
-   **Example**:
    ```javascript
    // Display a success banner
    showSuccessBanner({
        message: "Your application has been submitted successfully."
    });

    // Display an error banner
    showErrorBanner("Could not connect to the server. Please try again later.");
    ```

### `buildRelatedServiceCards(servicesData, containerId)`
-   **Description**: Dynamically creates and inserts a list of "related service" cards into a specified container.
-   **Example**:
    ```javascript
    const relatedServices = [
        {
            headline: "Apply for a parking permit",
            description: "Find out how to apply for a resident or business parking permit.",
            url: "/form/launch/parking_permit"
        },
        {
            headline: "Report a pothole",
            description: "Let us know about a pothole on a public road.",
            url: "/form/launch/report_pothole"
        }
    ];

    buildRelatedServiceCards(relatedServices, "related-services-panel");
    ```

### `buildTypeAhead(inputName, listItems, listItemsOnly)`
-   **Description**: Enhances a standard text input into a type-ahead search field with a datalist and optional validation to ensure the final value is from the list.
-   **Example**:
    ```javascript
    const permittedReasons = ["Medical appointment", "Court appearance", "Jury duty"];
    buildTypeAhead("txt_reason_for_absence", permittedReasons, true);
    ```

---

## 3. Data Formatting & Utility Functions

These are helper functions for cleaning, formatting, and manipulating data.

### `formatPhoneNumber(telephone)`
-   **Description**: Formats a raw phone number string into the GDS-compliant UK format (e.g., `0114 273 4567` or `+44 (0)114 273 4567`).
-   **Example**:
    ```javascript
    $('input[type="tel"]').on('change', (event) => {
        // Automatically formats the phone number field on change
        $(event.target).val(formatPhoneNumber(event.target.value));
    });
    ```

### `formatDateTime(dateTime)`
-   **Description**: A comprehensive function that takes a date string or timestamp and returns an object with the date formatted in multiple ways (UK, ISO, UTC, readable, etc.).
-   **Example**:
    ```javascript
    const submissionTimestamp = "2023-10-27T10:30:00.000Z";
    const formatted = formatDateTime(submissionTimestamp);

    console.log(formatted.uk.date); // "27/10/2023"
    console.log(formatted.readable.date); // "27 October 2023"
    ```

### `setValuesToInputFields(aliasesAndValues, targetPageId)`
-   **Description**: Sets the values of multiple KDF input fields on the current (or a specified) page using their `data-customalias` attribute.
-   **Example**:
    ```javascript
    // After a vehicle lookup, populate the corresponding fields
    setValuesToInputFields([
        { alias: "make", value: "Ford" },
        { alias: "model", value: "Focus" },
        { alias: "colour", value: "Blue" },
    ]);
    ```

---

## 4. NEC Dashboard & Pagination Functions

Functions for rendering the complex, data-driven dashboards for NEC Person and Rent Account details.

### `initializeDashboard(customerData)`
-   **Description**: Initializes the Rent Account dashboard, displaying a list of a customer's rent accounts. It sorts the accounts and sets up click handlers to load detailed information for each.
-   **Example**:
    ```javascript
    // Called in a successful KDF action that retrieves a customer's rent accounts
    const customerData = response.data.accounts;
    initializeDashboard(customerData);
    ```

### `renderAccountDetails(...)`
-   **Description**: Renders the main details panel for a selected rent account, including summary information and tabs for charges, transactions, arrangements, and notes.
-   **Example**: This is typically called internally by `loadAccountDetails` after fetching data.

### `renderPaginatedTable(data, tableBodyId, paginationContainerId, rowMapper, sorter)`
-   **Description**: A generic function that renders a dataset into a table with client-side pagination controls. It's used by all the dashboard tabs.
-   **Example**:
    ```javascript
    // Inside populateChargesTable function
    const chargesRowMapper = (item) => `
        <td>${item.date}<br/><div class="note-text">${item.description}</div></td>
        <td>${item.amount}</td>
    `;
    renderPaginatedTable(chargesData, 'charges-table-body', 'charges-pagination', chargesRowMapper);
    ```

---

## 5. Validation & Progress Functions

Functions focused on form validation and tracking user progress.

### `checkPageProgress()`
-   **Description**: A crucial function called on many events (`keyup`, `change`, etc.) to check if all visible, required fields on the current page have valid values. It enables or disables primary action buttons accordingly.
-   **Example**:
    ```javascript
    $("input, textarea").keyup(function () {
        checkPageProgress();
    });

    handleOptionSelectedEvent(event, kdf, field, label, val) {
        // ... logic ...
        checkPageProgress();
    }
    ```

### `handleDateValidation(parentId, element)`
-   **Description**: A specific validation handler for the custom date input fields (day, month, year). It checks if the date is real, complete, and within the allowed min/max range.
-   **Example**:
    ```javascript
    // Fired when a user leaves a date input field
    $(`.date-dd`).on("focusout", function (e) {
        const parentId = $(this).attr("id").replace("_num_", "_date_").slice(0, -3);
        handleDateValidation(parentId, this);
    });
    ```

### `updateProgressBar(currentPageIndex)`
-   **Description**: Updates the visual progress bar at the top of the form to reflect the user's current position.
-   **Example**: Called within `handlePageChangeEvent`.
    ```javascript
    function handlePageChangeEvent(event, kdf, currentpageid, targetpageid) {
        updateProgressBar(targetpageid);
        // ... other logic
    }
    ```
