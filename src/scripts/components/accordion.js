// --- PRIVACY NOTICE ------------------------------------------------------- \\

function addPrivacyNoticeAccordionFuntionality() {
  // Function designed for for privacy notice accordion
  if (document.getElementsByClassName("privacy-accordion")[0]) {
    const accordion = document.getElementsByClassName("privacy-accordion")[0];
    const panel = document.getElementsByClassName("privacy-panel")[0];
    accordion.addEventListener("click", function () {
      // Toggle active class
      this.classList.toggle("active");
      // Toggle show/hide
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

export { addPrivacyNoticeAccordionFuntionality };