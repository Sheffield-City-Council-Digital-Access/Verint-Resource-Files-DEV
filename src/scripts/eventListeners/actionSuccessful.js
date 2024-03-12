import { setValuesToInputFields } from "../utilities/setValuesToInputFields";
import { showHideInputFields } from "../utilities/showHideInputFields";

function handleSuccessfulAction(event, kdf, response, action, actionedby) {
  if (action === 'set-raised-by') {
    const { customerid } = response.data;
    if (!customerid) {
      KDF.showError('Customer ID Not Set');
      return;
    }
    KDF.setCustomerID(customerid, false, KDF.gotoNextPage()); // < don't think this works for citizen access
    // KDF.setVal('num_customer_id', customerid);
    // KDF.gotoNextPage();
  }

  if (action === 'search-property') {
    const { propertySearchResult } = response.data;
    if (propertySearchResult.length > 0) {
      setValuesToInputFields([
        { alias: "searchResult", value: propertySearchResult },
      ]);
      showHideInputFields([
        { alias: "searchResult", display: true },
      ]);
    } else {
      showAddressFields();
    }
  }

  if (action === 'retrieve-property') {
    const { property, streetName, city, postCode, fullAddress } = response.data;
    KDF.hideWidget('sel_search_results');
    setValuesToInputFields([
      { alias: "property", value: property },
      { alias: "streetName", value: streetName },
      { alias: "city", value: city },
      { alias: "postCode", value: postCode },
      { alias: "fullAddress", value: fullAddress },
    ]);
    setSelectedAddress(fullAddress, 'show');
  }

  if (action === 'retrieve-vehicle-details') {
    const {
      co2Emissions,
      colour,
      dateOfLastV5CIssued,
      engineCapacity,
      fuelType,
      make,
      markedForExport,
      monthOfFirstRegistration,
      motExpiryDate,
      motStatus,
      registrationNumber,
      taxDueDate,
      taxStatus,
      typeApproval,
      wheelplan,
      yearOfManufacture
    } = response.data;
    setValuesToInputFields([
      { alias: "co2Emissions", value: co2Emissions },
      { alias: "colour", value: colour },
      { alias: "dateOfLastV5CIssued", value: dateOfLastV5CIssued },
      { alias: "engineCapacity", value: engineCapacity },
      { alias: "fuelType", value: fuelType },
      { alias: "make", value: make },
      { alias: "markedForExport", value: markedForExport },
      { alias: "model", value: '' },
      { alias: "monthOfFirstRegistration", value: monthOfFirstRegistration },
      { alias: "motExpiryDate", value: motExpiryDate },
      { alias: "motStatus", value: motStatus },
      { alias: "registrationNumber", value: registrationNumber },
      { alias: "taxDueDate", value: taxDueDate },
      { alias: "taxStatus", value: taxStatus },
      { alias: "typeApproval", value: typeApproval },
      { alias: "wheelplan", value: wheelplan },
      { alias: "yearOfManufacture", value: yearOfManufacture },
    ]);
    showHideInputFields([
      { alias: "registrationNumber", display: false },
      { alias: "make", display: false },
      { alias: "model", display: true },
      { alias: "colour", display: false },
    ]);
  }
}

export { handleSuccessfulAction };