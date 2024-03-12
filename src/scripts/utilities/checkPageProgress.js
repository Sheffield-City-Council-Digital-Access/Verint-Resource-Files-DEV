import { getCurrentPageId } from "./getCurrentPageId.js";

// Function to check page progress
const checkPageProgress = () => {
  const currentPageId = getCurrentPageId(); // Get the current page ID
  let allFieldsCompleted = true;
  let hasVisibleRequiredField = false;

  // Get all visible inputs, selects, and textareas on the current page, including those with the required attribute
  const visibleFields = document.querySelectorAll(`
    #${currentPageId} input:not(.dform_hidden input):not([disabled]),
    #${currentPageId} select:not(.dform_hidden select):not([disabled]),
    #${currentPageId} textarea:not(.dform_hidden textarea):not([disabled]),
    #${currentPageId} select[required]:not([disabled])
  `);

  // Use map to check if any required field is empty
  const fieldChecks = Array.from(visibleFields).map(field => {
    if (field.tagName.toLowerCase() === 'select') {
      // If the field is a select element
      if (field.selectedIndex === -1) {
        // If no option is selected
        if (field.hasAttribute('required')) {
          allFieldsCompleted = false;
          hasVisibleRequiredField = true;
          return false;
        }
      } else {
        // If an option is selected
        const selectedOption = field.options[field.selectedIndex];
        if (selectedOption.disabled || selectedOption.value === '') {
          allFieldsCompleted = false;
          hasVisibleRequiredField = true;
          return false;
        }
      }
    } else {
      // For other field types, check if the value is empty
      if ((field.hasAttribute('required') || field.parentNode.hasAttribute('required')) && !field.value.trim()) {
        allFieldsCompleted = false;
        hasVisibleRequiredField = true;
        return false;
      }
    }
    return true;
  });

  // If any of the field checks returned false, set allFieldsCompleted to false
  if (fieldChecks.includes(false)) {
    allFieldsCompleted = false;
  }

  // Disable next and move buttons if there's a visible required field on the page
  const nextAndMoveButtons = document.querySelectorAll(`#${currentPageId} button[data-type="next"], #${currentPageId} button[data-type="move"]`);
  nextAndMoveButtons.forEach(button => {
    if (hasVisibleRequiredField) {
      button.disabled = true;
      button.setAttribute('disabled', 'disabled');
      button.classList.add('disabled');
    } else {
      button.disabled = false;
      button.removeAttribute('disabled');
      button.classList.remove('disabled');
    }
  });
};

export { checkPageProgress };