import { resetVehicleSearch, showVehicleFields } from "../components/vehicleLookup.js";

function handleFailedAction(event, action, xhr, settings, thrownError) {
  // KDF.hideMessages();

  if (action === 'retrieve-vehicle-details') {
    resetVehicleSearch(false);
    showVehicleFields();
  } else {
    // temp
    KDF.showError(`${action} failed: ${thrownError}`);
  }
}

export { handleFailedAction };