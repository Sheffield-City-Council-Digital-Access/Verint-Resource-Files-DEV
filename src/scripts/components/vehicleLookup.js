import { setValuesToInputFields } from "../utilities/setValuesToInputFields.js";
import { showHideInputFields } from "../utilities/showHideInputFields.js";

export function handleEnterVehicleDetailsClick() {
  $('.vehicle-details').on('click', event => {
    resetVehicleSearch(false);
    showVehicleFields();
  });
}

// --- RESER VEHICLE FIELDS ------------------------------------------------- \\

const resetVehicleSearch = (hideFields = true) => {
  setValuesToInputFields([
    { alias: "co2Emissions", value: '' },
    { alias: "colour", value: '' },
    { alias: "dateOfLastV5CIssued", value: '' },
    { alias: "engineCapacity", value: '' },
    { alias: "fuelType", value: '' },
    { alias: "make", value: '' },
    { alias: "markedForExport", value: '' },
    { alias: "model", value: '' },
    { alias: "monthOfFirstRegistration", value: '' },
    { alias: "motExpiryDate", value: '' },
    { alias: "motStatus", value: '' },
    { alias: "registrationNumber", value: '' },
    { alias: "taxDueDate", value: '' },
    { alias: "taxStatus", value: '' },
    { alias: "typeApproval", value: '' },
    { alias: "wheelplan", value: '' },
    { alias: "yearOfManufacture", value: '' },
  ]);
  if (hideFields) {
    showHideInputFields([
      { alias: "registrationNumber", display: false },
      { alias: "make", display: false },
      { alias: "model", display: false },
      { alias: "colour", display: false },
    ]);
  }
};

// --- SHOW VEHICLE FIELDS ------------------------------------------------- \\

const showVehicleFields = () => {
  showHideInputFields([
    { alias: "registrationNumber", display: true },
    { alias: "make", display: true },
    { alias: "model", display: true },
    { alias: "colour", display: true },
  ]);
}

export {
  handleEnterVehicleDetailsClick,
  resetVehicleSearch,
  showVehicleFields
};