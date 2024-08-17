const abandonedVehicles = {
  id: `abandonedVehicles`,
  name: `Abandoned vehicles`,
  description: `Report an abandoned vehicle`,
  content: `
        <p>We have a duty to remove abandoned vehicles. The decision as to whether
        a vehicle is abandoned is taken by an authorised Council Officer. Abandoning
        a vehicle is an offence under the Refuse disposal (Amenity) Act 1978 and 
        carries a maximum fine of £2,500 and/or 3 months imprisonment.</p>
        <h3>Who is responsible for removing the abandoned vehicle</h3>
        <p>Removing an abandoned vehicle is a matter for us or the police.</p>
        <h4>Police responsibility</h4>
        <p>
          The police will be responsible for removing the vehicle if:
          <ul>
            <li>it's causing an obstruction on the highway</li>
            <li>it's suspicious and may have been stolen</li>
            <li>the vehicle has been burnt out</li>
          </ul>
        </p>
        <p>If this fits the description of the vehicle you think has been abandoned
        then please call the police on 101 to report it.</p>
        <h4>Our responsibility</h4>
        <p>If the vehicle does not fall into any of the categories above and you
        suspect it to be abandoned, please report it to us.</p>
        <p>
          Signs that a vehicle has been abandoned include:
          <ul>
            <li>broken windows</li>
            <li>missing number plates</li>
            <li>flat or missing tyres</li>
            <li>doesn't look roadworthy</li>
            <li>looks damaged or run-down</li>
          </ul>
        </p>
        <p>Please give as much useful information as possible, including the make,
        model, licence plate, colour and location. You can upload a photo of the 
        vehicle if you have one.</p>
    `,
  process: {
    buttonLabel: `Report an abandoned vehicle`,
    formName: `report_abandoned_vehicle`
  },
  transfer: {
    typeKey: `abandoned_vehicle_transfered_to_service`
  },
  finish: {
    typeKey: `abandoned_vehicle_information_provided`
  },
  meta: {
    keywords: [
      'Abandoned vehicles',
      'abandned', 'abondened', 'abandonded', 'abondoned',
      'vechicle', 'vehcile', 'vehical', 'vehilce'
    ],
    categories: ['Pollution and Nuisance', 'Waste Management', 'report']
  },
};

// --- ^ - ADD SCRIPT ABOVE THIS  LINE - ^ ---------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const pollutionAndNuisance = {
  id: `pollutionAndNuisance`,
  name: `Pollution and Nuisance`,
  description: `Air pollution, noise, dangerous trees, animals and pests, abandoned vehicles, littering, graffiti, anti-social behaviour…`,
  subjects: [
    abandonedVehicles
  ]
};
