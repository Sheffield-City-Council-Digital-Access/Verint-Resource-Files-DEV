// Function to get the current page ID
function getCurrentPageId() {
  return document.querySelector('[data-type="page"]:not([style*="display: none"])').id;
};

export { getCurrentPageId };