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
