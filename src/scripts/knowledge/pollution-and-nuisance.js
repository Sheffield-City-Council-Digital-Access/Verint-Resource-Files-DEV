class CorePaN {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServicePaN extends CorePaN {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuPaN extends CorePaN {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentPaN extends CorePaN {
  constructor(id, name, description, content, process, transfer, finish, meta, lastModified) {
    super(id, name, description);
    this.content = content;
    this.process = process;
    this.transfer = transfer;
    this.finish = finish;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\



const abandonedVehicles = new ContentPaN(
  'abandonedVehicles',
  'Abandoned vehicles',
  'Report an abandoned vehicle',
  `
    <p> We have a duty to remove abandoned vehicles.The decision as to whether
      a vehicle is abandoned is taken by an authorised Council Officer.Abandoning
      a vehicle is an offence under the Refuse disposal(Amenity) Act 1978 and 
      carries a maximum fine of £2, 500 and / or 3 months imprisonment.</p >
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
  `,
  { buttonLabel: 'Report an abandoned vehicle', formName: 'report_abandoned_vehicle' },
  { typeKey: 'abandoned_vehicle_transfered_to_service' },
  { typeKey: 'abandoned_vehicle_information_provided' },
  {
    type: 'Report',
    keywords: [
      'Abandoned vehicles',
      'abandned', 'abondened', 'abandonded', 'abondoned',
      'vechicle', 'vehcile', 'vehical', 'vehilce'
    ],
    categories: ['Pollution and Nuisance', 'Waste Management'],
  },
  { date: '05/09/2024', name: 'Elliott Griffiths' }
);


const cleanAirZone = new ContentPaN(
  'cleanAirZone',
  'Clean Air Zone',
  'Report an abandoned vehicle',
  `
   <h2>Clean Air Zone</h2>

<p>From April 2024, eligible working parents of 2-year-olds can access 15 hours childcare support. By September 2025, eligible working families with children aged between 9 months and 5 years old will be entitled to 30 hours of childcare support. </p>
<p>The changes are being introduced gradually to make sure that providers can meet the needs of more families. This means that: </p>
<p>From September 2025, eligible working parents of children from 9 months to school age will be entitled to 30 hours of childcare a week. </p>
<p>Like the existing offer, depending on your provider, these hours can be used over 38 weeks of the year, or up to 52 weeks if you use fewer than your total hours per week. </p>

<p>All eligible children are entitled to at least 570 hours of funded childcare each year. </p>
<p>FEL helps children learn through play activities. Some benefits that parents have seen; </p>
 <ul>
<li> children making friends their own age </li>
<li>children behaving better with grown-ups</li>
<li>children improving their speech and language</li>
<li> children settle down and concentrate for longer</li>
 <li>children are more willing to try new foods which improves their nutrition</li>
 <li>younger children improving their sleeping patterns and toilet training</li>

 </ul>
<p>The funded hours also help parents and carers access employment and training, spend time with their younger children or just find time to get things done. </p>

<p>The hours must be taken over a minimum of 38 weeks (15 hours a week, or 30 if entitled to additional hours) but can be taken over more weeks: for example, your child could take 12 hours a week for 47½ weeks. Talk to your childcare provider about what options are available. For Funded Early Learning enquiries and more information on the Family Hubs for Families, please contact the Family Hubs - 0114 273 5665. </p>
<p>
For information about the new 2-year-old extended working entitlement (15 hours offer starts April 2024, from 9 months old from September 2024) please visit the childcare choices page, there is an assessment tool offering families details of childcare support they might be eligible for and a link to apply to HMRC. <a href="www.childcarechoices.gov.uk”> HMRC </a> From September 2025 </p>
<p>Eligible working parents of children from 9 months to school age will be entitled to 30 hours of childcare a week. </p>


  `,
  { buttonLabel: 'Apply Clean Air Zone', formName: 'caz_process'},
  { typeKey: 'caz_process_transfered_to_service' },
  { typeKey: 'caz_process_information_provided' },
  {
    type: 'Application',
    keywords: [
      'clean air zone',
      'Clean Aire Zone', 'Clean Air Zon', 'Clen Air Zone', 'Clean Aier Zone', 'Cleen Air Zone','cleen', 'clan', 'clen', 'claen', 'cleaan',
      'ar', 'are', 'airr', 'ayr', 'eir','zome', 'zon', 'zoon', 'zonee', 'zoan',
    ],
    categories: ['Pollution and Nuisance',],
  },
  { date: '18/09/2024', name: 'Dinah WIlliams' }
);


// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const pollutionAndNuisance = new ServicePaN(
  'pollutionAndNuisance',
  'Pollution and Nuisance',
  `Air pollution, noise, dangerous trees, animals and pests, abandoned vehicles, littering, graffiti, anti-social behaviour…`,
  [
    abandonedVehicles,
    cleanAirZone,
  ]
);
