class CorePSaR {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServicePSaR extends CorePSaR {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuPSaR extends CorePSaR {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentPSaR extends CorePSaR {
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

class FormPSaR extends CorePSaR {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

//#region Allotments

const allotmentsEligibility = new ContentPSaR(
  "allotmentsEligibility",
  "Eligibility",
  "Who can apply for an allotment plot",
  `
    <p>
    You must live within the Sheffield City Council boundary 
    (or not more than 1 mile outside of it) to be eligible for a plot. 
    If you plan to move to Sheffield, you may join the waiting list beforehand, 
    but cannot sign up until you meet residency criteria. Moving more than 
    1 mile outside Sheffield requires giving up your plot.
    </p>
    <p>You must be 18 years old before taking a plot. If you reach the top of 
    the waiting list before 18, you must wait until your 18th birthday.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Eligibility", "Plots", "Sheffield"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsContact = new ContentPSaR(
  "allotmentsContact",
  "Contact",
  "How to contact the Allotment Office",
  `
    <p>
    Every October, applicants are asked to confirm they wish to remain on the list. 
    Failure to respond may result in removal, though appeals are possible.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Contact", "Email", "Sheffield"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsApplying = new ContentPSaR(
  "allotmentsApplying",
  "Applying for a Plot",
  "How to apply for an allotment plot",
  `
    <p>
    Applications can be made online at 
    <a href="https://www.sheffield.gov.uk/parks-sport-recreation/allotments" 
    target="_blank">Sheffield Allotments</a>, by email to <a 
    href="mailto:pwc.allotments@sheffield.gov.uk">pwc.allotments@sheffield.gov.uk</a>, 
    or by post to Allotment Office, The Centre in the Park, Guildford Avenue, 
    Sheffield, S2 2PL.
    </p>
    <ul>
      <li>You can only be on one waiting list at a time and only once per list (exceptions at discretion of the office).</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Application", "Plots", "Sheffield"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsPlotOffers = new ContentPSaR(
  "allotmentsPlotOffers",
  "Plot Offers",
  "How plots are offered from the waiting list",
  `
    <p>
    Applicants are selected from the waiting list on a first-come, 
    first-served basis. Offers are made via email (or post if no email).
    </p>
    <ul>
      <li>Contact the office within 10 working days (14 for post) to accept, or the offer may be withdrawn.</li>
      <li>If no response within 28 days, you will be removed from the list; appeals are possible.</li>
      <li>Appeals must be in writing to <a href="mailto:pwc.allotments@sheffield.gov.uk">pwc.allotments@sheffield.gov.uk</a> for the attention of the Allotment Manager.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Plot Offers", "Waiting List"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsSigningUp = new ContentPSaR(
  "allotmentsSigningUp",
  "Signing Up",
  "Process after accepting a plot offer",
  `
    <p>
    Return your acceptance form immediately after viewing the plot along with:
    </p>
    <ul>
      <li>Photo ID and proof of address</li>
      <li>Proof of concession eligibility, if applicable</li>
    </ul>
    <p>
    Failure to submit within 5 working days triggers a reminder; 
    after 10 working days, the offer may be withdrawn.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Signing Up", "Acceptance"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsPayingFees = new ContentPSaR(
  "allotmentsPayingFees",
  "Paying Annual Fees",
  "Details about rent and water charges",
  `
    <p>
    The rental year runs 1st April to 31st March. Rent is reviewed annually 
    with notice. All rent is invested in service, amenities, and site maintenance.
    </p>
    <ul>
      <li>Water charges apply if the site has water supply.</li>
      <li>Pay promptly upon receiving your invoice.</li>
      <li>If unable to pay in full, contact the Council to discuss options.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Rent", "Payment", "Water Charges"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsNoticeToQuit = new ContentPSaR(
  "allotmentsNoticeToQuit",
  "Notice to Quit Policy",
  "What happens if rent is not paid",
  `
    <p>
    Failure to pay within 40 days triggers a Rent Notice to Quit. 
    Appeals must be made within 14 days.
    </p>
    <ul>
      <li>Successful appeals require clearing arrears within 1 month.</li>
      <li>Three Notices to Quit during a tenancy: the third stands. Appeals for exceptional circumstances are possible.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Notice to Quit", "Rent"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsFires = new ContentPSaR(
  "allotmentsFires",
  "Burning / Fires",
  "Rules for burning and using fires on plots",
  `
    <ul>
      <li>Allowed only 1st October to 30th April.</li>
      <li>Burn only organic material from previous growing seasons.</li>
      <li>No bonfires on open ground; use an incinerator.</li>
      <li>Do not cause nuisance (Environmental Protection Act 1990).</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Fires", "Burning", "Rules"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsDogs = new ContentPSaR(
  "allotmentsDogs",
  "Dogs",
  "Rules for dogs on allotment sites",
  `
    <ul>
      <li>Must be on leads in communal areas.</li>
      <li>Must not foul paths or plots.</li>
      <li>Cannot be left unattended on plots.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Dogs", "Rules"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsWater = new ContentPSaR(
  "allotmentsWater",
  "Use of Water",
  "Rules for using water on allotment plots",
  `
    <ul>
      <li>Must be present when using water supply.</li>
      <li>Hosepipes can only fill water butts; no sprinklers or automated devices.</li>
      <li>Water only for produce and livestock; not for paddling pools or washing vehicles.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Water", "Rules"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsKeys = new ContentPSaR(
  "allotmentsKeys",
  "Site Keys",
  "Rules for access and key responsibility",
  `
    <ul>
      <li>Only tenants or authorised persons may access the site.</li>
      <li>Responsible for your key and co-worker's key; do not allow non-key holders on site.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Keys", "Access"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsDrones = new ContentPSaR(
  "allotmentsDrones",
  "Drones",
  "Drone use policy on allotment sites",
  `<p>
  Drones are not permitted on any Sheffield City Council estate, 
  including allotments, without prior written permission. 
  Permission is only granted in exceptional circumstances.
  </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Drones", "Rules"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsTrees = new ContentPSaR(
  "allotmentsTrees",
  "Dangerous Trees",
  "Reporting dangerous trees on allotment sites",
  `<p>
  If you notice a large tree that is diseased or at risk of failure and 
  poses immediate danger, report to 
  <a href="mailto:parksandcountryside@sheffield.gov.uk">
  parksandcountryside@sheffield.gov.uk</a> or call 0114 250 0500.
  </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Trees", "Safety"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsAsbestos = new ContentPSaR(
  "allotmentsAsbestos",
  "Asbestos",
  "Asbestos policy on plots",
  `<p>
  Do not bring asbestos onto your plot. Contact the office for advice 
  if you suspect asbestos; removal will be arranged if confirmed.
  </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Asbestos", "Safety"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsVermin = new ContentPSaR(
  "allotmentsVermin",
  "Rats and Vermin",
  "Policy for vermin control on allotment sites",
  `<p>
  Environmental Services will investigate rat issues and take action 
  when appropriate to reduce numbers.
  </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Vermin", "Rats"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsKeyDeposit = new ContentPSaR(
  "allotmentsKeyDeposits",
  "Allotment Key Deposits",
  "Costs and refunds for keys",
  `<ul>
    <li>Squire keys: £5 deposit</li>
    <li>Mul-T-Lock keys: £30 deposit, £25 refundable</li>
    <li>Lost or stolen keys: £30 replacement charge</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Keys", "Deposit"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsParks = new MenuPSaR(
  "allotments",
  "Allotments",
  "Comprehensive FAQs for Sheffield City Council allotments",
  [
    allotmentsEligibility,
    allotmentsContact,
    allotmentsApplying,
    allotmentsPlotOffers,
    allotmentsSigningUp,
    allotmentsPayingFees,
    allotmentsNoticeToQuit,
    allotmentsFires,
    allotmentsDogs,
    allotmentsWater,
    allotmentsKeys,
    allotmentsDrones,
    allotmentsTrees,
    allotmentsAsbestos,
    allotmentsVermin,
    allotmentsKeyDeposit
  ]
);

//#endregion Allotments

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const parksSportAndRecreation = new ServicePSaR(
  "parksSportAndRecreation",
  "Parks, Sport and Recreation",
  `Parks, gardens, trees and woodlands, allotments, leisure and sports facilities, what's on, tourist information…`,
  [allotmentsParks]
);