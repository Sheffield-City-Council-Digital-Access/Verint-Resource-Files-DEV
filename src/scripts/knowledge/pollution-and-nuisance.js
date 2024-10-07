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
  constructor(
    id,
    name,
    description,
    content,
    process,
    transfer,
    finish,
    meta,
    lastModified
  ) {
    super(id, name, description);
    this.content = content;
    this.process = process;
    this.transfer = transfer;
    this.finish = finish;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

class FormPaN extends CorePaN {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const fleasTreatment = new ContentPaN(
  "fleasTreatment",
  "Flea Treatment",
  "Information about fleas and treatment options",
  `
    <p>
      It is true to say that normally we wouldn’t ask for evidence of Fleas before a treatment is booked.
      This is due to the fact that they are difficult to catch and hard to see.
    </p>
    <p>
      However sometimes people have skin conditions, or some sort of Psychological problems which makes them believe that they have a biting insect infestation.
    </p>
    <p>
      Usually by talking to the customer you can decide whether a treatment for fleas should be booked at the point of contact for eg. If they have a cat or a dog, and have bites on their legs (usually lower legs, and around the ankles)
      They may have just moved into a property that has been vacant, and have got bites and seen small dark brown/black insects “ jumping” around the place.
    </p>
    <h3>Complaints to Be Wary Of</h3>
    <ul>
      <li>Customers who phone saying they have fleas because:</li>
      <ul>
        <li>They feel like something is crawling on them!</li>
        <li>They are itching!</li>
        <li>They are covered all over their body in bites.</li>
        <li>They have no pets.</li>
      </ul>
    </ul>
    <p>
      These are the cases where we may ask for a sample, or picture to be provided for ID.
      Also we could suggest that we can monitor their property to determine if there is a flea problem, then offer a treatment if fleas are found on the traps.
    </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Booking",
    keywords: ["Flea"],
    categories: ["Pollution and Nuisance", "Environmental", "Pest Constrol"],
  },
  { date: "10/10/2024", name: "Elliott Griffiths" }
);

const badgerProtection = new ContentPaN(
  "badgerProtectionAct1992",
  "The Protection of Badgers Act 1992",
  "Information about protecting badgers",
  `
    <p>
      The Protection of Badgers Act 1992 makes it illegal for any person to kill, injure or take a Badger. It is also an offence to cruelly ill-treat a Badger, to dig for or to snare a Badger.
    </p>
    <p>
      Under the 1992 Act it is now illegal to damage a badger sett or cause a dog to enter a set. It is also an offence to attempt any of these actions or recklessly allow a dog to enter a set. 
    </p>
    <p>
      It is also an offence to possess a dead Badger, which has been acquired illegally, and to sell or try to sell or keep a live Badger.
    </p>
    <p>
      A fine of up to £5000 can be imposed for each animal. The courts can also confiscate any dogs used in offences against Badgers and disqualify the offender from owning a dog.
    </p>
    <p>
      For more information, please visit <a href="www.syorksbadgergroup.org.uk">www.syorksbadgergroup.org.uk</a>. 
    </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: ["Badger", "Protection", "Act", "Illegal"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Wildlife",
      "Conservation",
      "Law",
    ],
  },
  { date: "07/10/2024", name: "Elliott Griffiths" }
);

const batProtectionBritain = new ContentPaN(
  "batProtectionBritain",
  "Bat Protection in Britain",
  "Information about protecting bats in Britain",
  `
    <p>
      In Britain, all bat species and their roosts are legally protected, by both domestic and international legislation. 
    </p>
    <p>
      This means you will be committing a criminal offence if you: 
    </p>
    <ul>
      <li>Deliberately capture, injure, or kill a bat </li>
      <li>Intentionally or recklessly disturb a bat in its roost or deliberately disturb a group of bats </li>
      <li>Damage or destroy a bat roosting place (even if bats are not occupying the roost at the time) </li>
      <li>Possess or advertise/sell/exchange a bat (dead or alive) or any part of a bat </li>
      <li>Intentionally or recklessly obstruct access to a bat roost </li>
    </ul>
    <p>
      For more information, please visit <a href="http://www.bats.org.uk">http://www.bats.org.uk</a>. 
    </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: ["Bat", "Protection", "Britain", "Illegal"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Wildlife",
      "Conservation",
      "Law",
    ],
  },
  { date: "07/10/2024", name: "Elliott Griffiths" }
);

const bedBugTreatment = new ContentPaN(
  "bedBugTreatment",
  "Bed Bug Treatment",
  "Information about Bed Bug treatment options in Sheffield",
  `
  <h3>Commercial</h3>
  <p>
    For commercial enquiries about bed bug treatment, you will need to email your request to <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">EnvironmentalServicesAdmin@sheffield.gov.uk</a>. We will assess your request and provide you with a quote for the treatment.
  </p>
  <h3>Bed Bugs Domestic</h3>
  <p>We offer different treatment options based on your housing type:</p>
  <h3>Council Housing</h3>
  <p>If you live in council housing, please transfer to the back office for treatment.</p>
  <h3>Yes: Sample Required</h3>
  <p>
    Before we can provide treatment for bed bugs in your domestic property, we will need a sample of the pest. 
  </p>
  <p>You can either bring your sample to:</p>
  <ul>
    <li>First Point, Howden House, 1 Union Street, Sheffield, S1 2SH</li>
  </ul>
  <p>Or you can post your sample to:</p>
  <ul>
    <li>Environmental Services, Block B, Staniforth Road Depot, Staniforth Road, Sheffield, S9 3HD</li>
  </ul>
  <p>Please ensure your sample is in a secure, crush-proof container, alive or dead. Attach information detailing:</p>
  <ul>
    <li>Your name</li>
    <li>Your address</li>
    <li>Your contact number and/or email</li>
    <li>How long the insects have been present</li>
    <li>Where in the property the insects have been found</li>
  </ul>
  <h3>No: Cost of Treatment</h3>
  <p>
    The treatment cost for Bed Bugs is £330.00. This is based on a standard size of a 3-bed semi-detached property. If your property is larger, please escalate your enquiry to receive a quote.
  </p>
  <p>
    If you receive one of the following benefits, the treatment cost will be reduced to £97.00:
  </p>
  <ul>
    <li>Pension Credits</li>
    <li>Universal Credits</li>
    <li>Housing Benefits</li>
    <li>Income Support Allowance</li>
    <li>Income Related Job Seekers Allowance</li>
    <li>Income Related Employment Support Allowance</li>
  </ul>
  <p>
    All prices include a call-out fee of £39. This fee applies if our officer attends the property but is unable to complete the treatment.
  </p>
  <p>
    Whether you require a sample or not, please refer to the information above for sample submission details.
  </p>
  <h3>Bed Bugs: Health Authority, Industrial and University</h3>
  <p>
    For bed bug treatment enquiries related to Health Authority, Industrial, and University properties, please email your request to <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">EnvironmentalServicesAdmin@sheffield.gov.uk</a>. We will assess your request and provide you with a quote for the treatment.
  </p>
  <h3>Bed Bugs: None of the Above</h3>
  <p>
    If your enquiry doesn't fall into any of the above categories, we will need to refer your report to a technician for further investigation.
  </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: ["Bed Bug", "Treatment", "Sheffield", "Council"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Pests",
      "Vermin",
      "Environmental Health",
    ],
  },
  { date: "07/10/2024", name: "Elliott Griffiths" }
);

const pestControl = new MenuPaN(
  "pestControl",
  "Pest Control",
  "Pest control treatments, services and pricing",
  [fleasTreatment, badgerProtection, batProtectionBritain, bedBugTreatment]
);

const reportNeedlesGlass = new FormPaN(
  "reportNeedlesGlass",
  "Needles or broken glass",
  "Report problems with hazardous items",
  "report_needles_glass",
  {
    type: "Report",
    keywords: ["Needles", "glass"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportLitter = new FormPaN(
  "reportLitter",
  "Litter",
  "Report problems such as litter or waste on the highway",
  "report_litter",
  {
    type: "Report",
    keywords: ["Litter"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportGraffiti = new FormPaN(
  "reportGraffiti",
  "Graffiti",
  "Report problems such as offensive or non-offensive graffiti",
  "report_graffiti",
  {
    type: "Report",
    keywords: ["Graffiti"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFlyPosting = new FormPaN(
  "reportFlyPosting",
  "Fly-posting",
  "Report fly-posting on the highway",
  "report_fly_posting",
  {
    type: "Report",
    keywords: ["Fly", "posting"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFlyTipping = new FormPaN(
  "reportFlyTipping",
  "Fly-tipping",
  "Report issues of illegal dumping",
  "report_fly_tipping",
  {
    type: "Report",
    keywords: ["Fly", "tipping"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportDogFouling = new FormPaN(
  "reportDogFouling",
  "Dog fouling",
  "Report dog fouling on the highway",
  "report_dog_fouling",
  {
    type: "Report",
    keywords: ["Dog", "fouling"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const abandonedVehicles = new ContentPaN(
  "abandonedVehicles",
  "Abandoned vehicles",
  "Report an abandoned vehicle",
  `
    <p>
      We have a duty to remove abandoned vehicles.The decision as to whether
      a vehicle is abandoned is taken by an authorised Council Officer. Abandoning
      a vehicle is an offence under the Refuse disposal (Amenity) Act 1978 and 
      carries a maximum fine of £2,500 and / or 3 months imprisonment.
    </p>
    <h3>Who is responsible for removing the abandoned vehicle</h3>
    <p>
      Removing an abandoned vehicle is a matter for us or the police.
    </p>
    <h4>Police responsibility</h4>
    <p>
      The police will be responsible for removing the vehicle if:
      <ul>
        <li>it's causing an obstruction on the highway</li>
        <li>it's suspicious and may have been stolen</li>
        <li>the vehicle has been burnt out</li>
      </ul>
    </p>
    <p>
      If this fits the description of the vehicle you think has been abandoned
      then please call the police on 101 to report it.
    </p>
    <h4>Our responsibility</h4>
    <p>
      If the vehicle does not fall into any of the categories above and you
      suspect it to be abandoned, please report it to us.
    </p>
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
  {
    buttonLabel: "Report an abandoned vehicle",
    formName: "report_abandoned_vehicle",
  },
  { typeKey: "abandoned_vehicle_transferred_to_service" },
  { typeKey: "abandoned_vehicle_information_provided" },
  {
    type: "Report",
    keywords: [
      "Abandoned vehicles",
      "abandned",
      "abondened",
      "abandonded",
      "abondoned",
      "vechicle",
      "vehcile",
      "vehical",
      "vehilce",
    ],
    categories: ["Pollution and Nuisance", "Waste Management"],
  },
  { date: "05/09/2024", name: "Elliott Griffiths" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const pollutionAndNuisance = new ServicePaN(
  "pollutionAndNuisance",
  "Pollution and Nuisance",
  `Air pollution, noise, dangerous trees, animals and pests, abandoned vehicles, littering, graffiti, anti-social behaviour…`,
  [
    abandonedVehicles,
    reportLitter,
    reportGraffiti,
    reportFlyPosting,
    reportFlyTipping,
    reportDogFouling,
    pestControl,
  ]
);
