import { getCurrentPageId } from '../../utilities/getCurrentPageId.js'
import { showHideInputFields } from '../../utilities/showHideInputFields.js'
import { setValuesToInputFields } from '../../utilities/setValuesToInputFields.js'

export function handleSearchResultsChange() {
  $('.search-results').on('change', event => {
    KDF.customdata('retrieve-property', event.target.id, true, true, { propertyId: event.target.value });
    showAddressFields();
  });
}

export function handleEnterAddressDetailsClick() {
  $('.address-details').on('click', event => {
    resetAddressSearch(false);
    showAddressFields();
  });
}

// --- SET SELECTED ADDRESS ------------------------------------------------- \\

// Function to update the output on the current page
function setSelectedAddress(selectedAddress, action) {
  const currentPageId = getCurrentPageId(); // Get the current page ID

  // Get the selected-address-container element on the current page
  const addressContainer = document.querySelector(`#${currentPageId} .selected-address-container`);

  // Obtain the data-name attribute of the addressContainer
  const name = addressContainer.getAttribute('data-name');

  // Get the output element within the selected-address-container
  const outputElement = addressContainer.querySelector('.selected-address');

  // Set the selected address as the content of the output element
  outputElement.textContent = selectedAddress;

  // Show or hides the data-name attribute of the addressContainer
  if (action) {
    KDF.showWidget(name);
  } else {
    KDF.hideWidget(name);
  }
};

// --- RESER ADDRESS FIELDS ------------------------------------------------- \\

function resetAddressSearch(hideFields = true) {
  setValuesToInputFields([
    { alias: "searchResult", value: '' },
    { alias: "property", value: '' },
    { alias: "streetName", value: '' },
    { alias: "city", value: '' },
    { alias: "postCode", value: '' },
    { alias: "fullAddress", value: '' },
  ]);
  if (hideFields) {
    showHideInputFields([
      { alias: "searchResult", display: false },
      { alias: "property", display: false },
      { alias: "streetName", display: false },
      { alias: "city", display: false },
      { alias: "postCode", display: false },
      { alias: "fullAddress", display: false },
    ]);
  }
  setSelectedAddress('', false);
};

// --- SHOW ADDRESS FIELDS ------------------------------------------------- \\

function showAddressFields() {
  showHideInputFields([
    { alias: "searchResult", display: false },
    { alias: "property", display: true },
    { alias: "streetName", display: true },
    { alias: "city", display: true },
    { alias: "postCode", display: true },
  ]);
}

export {
  handleSearchResultsChange,
  handleEnterAddressDetailsClick,
  setSelectedAddress,
  resetAddressSearch,
  showAddressFields
};