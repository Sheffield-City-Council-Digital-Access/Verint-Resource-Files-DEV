// Create and inject a header to the form
(() => {
  if (KDF.kdf().access === 'citizen') {
    // Create the header element
    const header = document.createElement("header");
    header.setAttribute("role", "banner");
    header.classList.add("header");

    // Create the logo container
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");

    // Create the logo link
    const logoLink = document.createElement("a");
    logoLink.href = "https://www.sheffield.gov.uk";
    logoLink.title = "Back to homepage";
    logoLink.classList.add("header-logo-link");

    // Create the logo image
    const logoImg = document.createElement("img");
    logoImg.classList.add("header-logo");
    logoImg.src = "../../images/logo.png";
    logoImg.alt = "Sheffield City Council Logo";

    // Append the logo image to the logo link
    logoLink.appendChild(logoImg);

    // Append the logo link to the logo container
    logoContainer.appendChild(logoLink);

    // Append the logo container to the header
    header.appendChild(logoContainer);

    // Insert the header at the beginning of the body
    document.body.insertBefore(header, document.body.firstChild);
  }
})();
