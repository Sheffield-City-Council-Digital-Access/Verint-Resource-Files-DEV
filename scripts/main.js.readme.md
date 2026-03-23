# main.js

`main.js` is a comprehensive client-side JavaScript file that acts as the primary controller for custom frontend logic within a Verint KDF (Knowledge Domain Framework) application. It orchestrates a wide array of UI enhancements, form processing, data formatting, and integrations with external services to deliver a highly tailored and dynamic user experience across various forms and account-related portals.

## Purpose

The main goal of this script is to customize, extend, and manage the behavior of Verint KDF forms and associated "My Account" features. It addresses limitations of the out-of-the-box KDF functionality by implementing custom UI elements, complex validation rules, data display dashboards, and seamless integration with mapping and customer data systems.

## Key Features

### Core Application Logic
-   **KDF Event Handling**: Intercepts and processes various KDF lifecycle events (Initialising, OnReady, PageChange, FieldChange, OptionSelected, MapReady, MapClick, SelectedMapLayer, ClearMapFields, ObjectIdSet/Loaded, SuccessfulAction, FailedAction, FormSave, FailedSave, FormComplete).
-   **Application Flow Control**: Manages page navigation, form saving, completion, and redirects based on user actions and data states.

### UI Enhancements & Accessibility
-   **Dynamic Header & Footer**: Injects custom header with logo and service label, and a custom footer with privacy/cookie links and copyright.
-   **Favicon & Page Title**: Sets a consistent favicon and dynamically updates the HTML document title.
-   **Loading & Feedback**: Implements a loading spinner for asynchronous operations and displays various notification banners (info, success, warning, error).
-   **Input Field Enhancements**: Adds character counters for textareas, currency symbols for number inputs, and custom date/time pickers with specialized validation.
-   **Back Button & Print Functionality**: Provides a custom back button and overrides the default print behavior for confirmation pages.
-   **Accessibility**: Includes a "Skip to main" link and manages focus for better keyboard navigation.
-   **Multi-File Upload**: Enhances the multi-file upload UI with counters and empty state messages.
-   **Type-Ahead Search**: Implements custom type-ahead dropdowns with validation against predefined lists.

### Form Processing & Validation
-   **Dynamic Field Management**: Sets/gets values, shows/hides, and sets required states for input fields using custom aliases.
-   **Address Search & Manual Entry**: Integrates postcode lookup with a map, allows manual address entry, and validates address selection.
-   **Vehicle Lookup**: Provides functionality to retrieve and display vehicle details.
-   **Custom Date & Time Validation**: Ensures entered dates are real, within min/max ranges, and times adhere to specified intervals and future constraints.
-   **Form Progress & Button States**: `checkPageProgress()` dynamically enables/disables form submission buttons based on the validity and completeness of required fields.
-   **Anonymous Submission**: Allows users to submit forms anonymously by clearing personal data fields.
-   **Case Management**: Includes functionality for agent location checks, setting reporter details, checking for existing case management forms, and a "Close Case" process with completeness validation.

### Data Manipulation & Formatting
-   **Text Formatting**: Functions for title casing, removing excess whitespace, and formatting UK phone numbers to GDS best practice.
-   **Date & Time Formatting**: `formatDateTime()` provides versatile date/time formatting (UK, readable, ISO, UTC) and `calculateAgeFromDob()` computes age from a date of birth.
-   **Address Formatting**: `buildAddressMarkup()` generates structured HTML for address display.

### External System Integrations

-   **ESRI ArcGIS Mapping**:
    -   Initializes an ESRI ArcGIS map for location selection.
    -   Handles map clicks for setting precise locations.
    -   Performs geocoding (address to coordinates) and reverse geocoding (coordinates to address) using an OS map API.
    -   Manages map layers, such as SCC boundary checks and displaying feature layers.
-   **NEC (National Electronic Custody) Integration**:
    -   **Person Dashboard**: Renders a detailed customer profile dashboard (`renderProfileDetails`) with tabs for additional details, property details, and address history, complete with client-side pagination for tabular data.
    -   **Rent Account Dashboard**: Displays comprehensive rent account information (`renderAccountDetails`), including summary, stage, payment, charges, transactions, arrangements, and notes, featuring interactive tabs and paginated tables.

### Utility Functions
-   **Cookies**: Basic `setCookie()` and `getCookie()` functions.
-   **Session Storage**: Stores default validation messages for consistent error display.
-   **Dynamic UI Updates**: `hideShowMultipleElements()`, `updateMultipleWidgetsText()`, `updateMultipleLabels()`, `updateMultipleHelpTexts()`, `updateMultipleValidationMessages()`, `updateRequiredState()` for programmatic control over form elements.
-   **Bank Holidays**: `fetchUKBankHolidays()` and related functions to determine non-working days for date calculations.

## Dependencies

-   **Verint KDF (Knowledge Domain Framework)**: The primary environment this script operates within, relying on its global `KDF` object and event system.
-   **jQuery**: Widely used for DOM manipulation, event handling, and AJAX calls (e.g., `$.ajax`, `$(...).on()`).
-   **ESRI ArcGIS API for JavaScript**: For map initialization, rendering, and interaction.
-   **Proj4js**: A JavaScript library for coordinate transformations, particularly for map data.
-   **HTML Structure**: Requires specific HTML elements with predefined IDs and classes for the script's selectors to function correctly.

## Usage

`main.js` is intended to be included in Verint KDF forms, typically executing its initialization logic on `document.DOMContentLoaded` and integrating with KDF's `onReady`, `onPageChange`, `onFieldChange`, etc., events. It expects the presence of a global `KDF` object and a structured HTML form environment.

```javascript
// Example of how main.js integrates with KDF
document.addEventListener("DOMContentLoaded", handleInitialisingEvent);

KDF.onReady(function () {
    handleOnReadyEvent();
});

KDF.onPageChange(function (event, kdf, currentpageid, targetpageid) {
    handlePageChangeEvent(event, kdf, currentpageid, targetpageid);
});

// ... and other KDF event handlers
```
