import { handleDateInput } from './components/customDate.js';
import { addPrivacyNoticeAccordionFuntionality } from '../components/accordion.js';
import { handleSearchResultsChange, handleEnterAddressDetailsClick } from '../components/locator/addressLookup.js';
import { handleEnterVehicleDetailsClick } from '../components/vehicleLookUp.js';


function handleOnReadyEvent(event, kdf) {

  // need to move the event listners over.
  handleDateInput();

  // need to change to a reusable accordion
  addPrivacyNoticeAccordionFuntionality();

  // Address Lookup Event Listners
  handleSearchResultsChange();
  handleEnterAddressDetailsClick();

  // Vehicle Lookup Event Listners
  handleEnterVehicleDetailsClick();

  // in development
  $(`#dform_widget_button_but_submit_about_you`).on('click', event => {
    if (kdf.customerset === 'agent_false' || kdf.customerset === 'citizen_false') {
      if (kdf.access === 'agent') {
        KDF.sendDesktopAction('raised_by');
      } else {
        KDF.customdata('set-raised-by', event.target.id, true, true, {
          title: KDF.getVal('sel_title'),
          furename: KDF.getVal('txt_forename'),
          surname: KDF.getVal('txt_surname'),
          dateOfBirth: KDF.getVal('dt_of_birth'),
          phoneNumber: KDF.getVal('tel_phone_number'),
          emailAddress: KDF.getVal('eml_address'),
          property: KDF.getVal('txt_property'),
          StreetName: KDF.getVal('txt_street_name'),
          city: KDF.getVal('txt_city'),
          postCode: KDF.getVal('txt_postcode')
        });
      }
      return;
    }
    KDF.setVal('txt_finish_date_and_time', getCurrentTimeAndDate());
    KDF.gotoNextPage();
  });
}

export { handleOnReadyEvent };