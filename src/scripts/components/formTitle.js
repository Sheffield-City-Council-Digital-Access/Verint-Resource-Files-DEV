// Create and inject a title to the form
(() => {
  // Find the element with id "dform_controls"
  const dformControls = document.getElementById("dform_controls");

  // Create the new title container element
  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  // Create the title element
  const title = document.createElement("h1");
  title.className = "form-title";
  title.id = "form-title";
  title.textContent = document.getElementById("dform_widget_le_title").value;

  // Append the title element to the title container
  titleContainer.appendChild(title);

  // Insert the title container before the dformControls element
  if (dformControls && dformControls.parentNode) {
    dformControls.parentNode.insertBefore(titleContainer, dformControls);
  }
})();
