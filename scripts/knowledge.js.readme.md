# knowledge.js

`knowledge.js` is a core JavaScript file responsible for managing and displaying a dynamic knowledge base and latest news within a web application. It handles navigation, search, and content rendering, providing an interactive experience for users to browse and find information.

## Purpose

This script centralizes the logic for a knowledge management system, enabling users to explore hierarchical information (services, subjects, topics, content) and search for specific articles or news. It integrates with an external `KDF` (Knowledge Domain Framework) for page navigation and form redirection.

## Key Features

-   **Dynamic Content Display**: Renders knowledge items, services, subjects, and topics as interactive "cards."
-   **Hierarchical Navigation**: Supports multi-level navigation through services, subjects, and topics with dynamic breadcrumb updates.
-   **Comprehensive Search**: Implements a search engine with relevance scoring for both knowledge base articles and news items, supporting exact phrase matching and keyword search.
-   **"Services A-Z" Filtering**: Provides an alphabetical filter and category-based filtering for services and knowledge content.
-   **Latest News Integration**: Displays recent news articles and highlights new content.
-   **Form Redirection**: Seamlessly redirects users to external forms based on knowledge item configurations.
-   **User Journey Logging**: Tracks user interactions for analytics and debugging purposes.
-   **Dynamic Header and Footer**: Sets up common UI elements like search bar, main navigation, and footer links.

## How it Works

The script operates on a global `knowledge` array (representing the hierarchical knowledge base) and `latestNews` array. It initializes by setting up the UI elements on `DOMContentLoaded` and `KDF.onReady`.

1.  **Initialization**: On page load, `handleInitialisingKnowledge()` sets up the header, main navigation, and footer. `handleOnReadyKnowledge()` initializes DOM element references and sets up event listeners.
2.  **Card Creation (`createCards`)**: Dynamically generates `div.card` elements for services, subjects, and topics, attaching click and keyboard event listeners for navigation.
3.  **Navigation**:
    *   Clicking a card either navigates to a deeper level (e.g., from service to subject menu) or redirects to a content page/form.
    *   Breadcrumbs are dynamically updated to reflect the user's current position within the knowledge hierarchy.
    *   `KDF.gotoPage()` is used for client-side page transitions.
4.  **Content/Form Redirection**: `redirectToContentPage()` renders the content of a knowledge article, updating various UI elements (title, content, action buttons). `redirectToFormPage()` constructs a URL and redirects the user to an external form.
5.  **Search (`searchKnowledge`)**:
    *   Parses user queries into individual terms and exact phrases.
    *   Iterates through the `knowledge` base and `latestNews`, calculating a relevance score for each item based on term and phrase matches in titles, descriptions, content, and metadata (keywords, categories).
    *   Results are sorted by relevance and displayed in a dedicated search results page (`renderSearchResults`).
6.  **Services A-Z (`handleServicesAtoZ`)**: Creates an alphabetical filter and category filter based on the available knowledge items. It dynamically shows/hides letters and categories based on existing content.
7.  **User Journey Logging (`logUserJourney`)**: Records user actions and details into a hidden form field, potentially for later submission or analytics.

## Dependencies

-   **jQuery**: Used for DOM manipulation and event handling (e.g., `$(...).on('click')`).
-   **KDF (Knowledge Domain Framework)**: An external framework providing functions for page navigation (`KDF.gotoPage`), parameter retrieval (`KDF.getParams`), error display (`KDF.showError`), and potentially custom UI element management.

## Usage

This script is typically included in a web page that provides knowledge base functionality. It expects:

-   Global `knowledge` and `latestNews` arrays to be populated with data structures representing the knowledge base and news articles, respectively.
-   Specific HTML elements with IDs like `service-menu`, `subject-menu`, `topics-menu`, `search-input`, `search-results`, `news-container`, `archived-news-container`, and various breadcrumb/button elements (e.g., `dform_widget_button_but_subject_menu_content`) for the script to attach functionality and render content.

The `handleInitialisingKnowledge` function should be called on `DOMContentLoaded`, and `handleOnReadyKnowledge` should be called when the `KDF` framework is ready (e.g., `KDF.onReady`).

```javascript
// Example of how to integrate
document.addEventListener("DOMContentLoaded", handleInitialisingKnowledge);

// Assuming KDF provides a mechanism to run code when its ready state is met
KDF.onReady(function () {
    handleOnReadyKnowledge();
});
```
