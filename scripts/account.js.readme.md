# account.js

`account.js` is a client-side JavaScript file dedicated to enhancing and customizing the user account interface within a web application. It focuses on improving the user experience by dynamically modifying layout, navigation, content display, and adding new features, particularly for "My Account" and "My Requests" sections.

## Purpose

The script aims to standardize the look and feel, improve usability, and introduce specific functionalities for user-centric pages, ensuring a cohesive and intuitive experience. It adapts the UI based on the specific page context, such as displaying a list of requests versus a single request's details.

## Key Features

-   **Favicon Management**: Ensures a consistent favicon for the application.
-   **Header Customization**: Dynamically injects a branded service header with the council logo and a "My Account" label.
-   **Enhanced Navigation**:
    -   Modifies the "Home" navigation link to include a custom SVG icon and repositions it for better prominence.
    -   Updates the display text for "Sign in / Register", "Sign out", and "My profile" links.
    -   Adds a personalized link showing the logged-in username, directing to the user's profile.
-   **Dynamic Footer**: Creates and appends essential footer links (Privacy notice, Use of cookies, Accessibility statement) along with a dynamic copyright notice.
-   **Feedback Banner**: Integrates a prominent feedback banner on all pages, encouraging user contributions to improve the service.
-   **Requests Page Specific Logic (`/requests`)**:
    -   **Request Details View**: When viewing a single request (identified by a valid `srid` URL parameter), it
        -   Adjusts page background colors.
        -   Hides extraneous navigation elements and tabs.
        -   Customizes "Back" button text and introduces a "Reference" display for the request ID.
        -   Renames "Your request summary" and "Request details" headings.
        -   Normalizes request status (e.g., "open" to "In progress").
        -   Restructures and re-labels the "Notes" section to "Request updates."
        -   Adds a "Back to My Requests" link.
        -   Formats date/time stamps for better readability.
    -   **Requests List View**: When viewing the list of requests, it
        -   Standardizes status labels.
        -   Cleans up request titles by removing parenthetical information.
        -   Reformats relative date/time descriptions (e.g., "7 days ago" to "7 days ago. 8th August 2025 at 9:29am.").
        -   **Client-Side Pagination**: Implements pagination for "Submitted" and "Drafts" request lists, showing 5 items per page with navigation controls.
        -   **Tab Switching**: Manages the interactive switching between "Submitted" and "Drafts" tabs, with initial tab activation based on URL parameters.

## How it Works

The script primarily executes its modifications after the DOM is fully loaded (`DOMContentLoaded`). It uses a series of Immediately Invoked Function Expressions (IIFEs) to encapsulate different functionalities and prevent global scope pollution.

-   It directly manipulates the DOM using standard JavaScript methods (`document.createElement`, `appendChild`, `querySelector`, `classList`, etc.) to inject, modify, or remove HTML elements.
-   It queries URL parameters (`KDF.getParams().srid`) to determine the current page context and apply specific logic.
-   It leverages `window.location.pathname` to identify the current page (e.g., `/requests`).
-   For pagination, it dynamically calculates pages, displays items, and generates navigation buttons.

## Dependencies

-   **KDF (Knowledge Domain Framework)**: The script relies on the `KDF` global object, primarily for `KDF.getParams()` to retrieve URL parameters. While it doesn't extensively use other `KDF` functions, its presence implies an environment where `KDF` is active.
-   **Implicit HTML Structure**: The script expects a predefined HTML structure with specific class names and IDs for its selectors to function correctly.
-   **jQuery**: While not explicitly used in all parts, some snippets like `$("#search-button").on("click", ...)` from other files suggest jQuery might be available in the environment. `account.js` itself doesn't use jQuery directly in the provided snippet, but it's a common dependency in such front-end projects.

## Usage

This script is intended to be included in web pages that constitute the "My Account" area of an application. It should be executed once the DOM is ready.

```javascript
// Example of how to integrate
document.addEventListener("DOMContentLoaded", function () {
    // All the IIFEs and event listeners within account.js run here
});

// If KDF has its own ready event, ensure account.js logic that depends on KDF
// or specific KDF-rendered elements is called after KDF is fully ready.
// (Based on knowledge.js, KDF.onReady is a possibility, though not explicitly used here)
// KDF.onReady(function() {
//     // ... any account.js logic that needs KDF fully initialized
// });
```
