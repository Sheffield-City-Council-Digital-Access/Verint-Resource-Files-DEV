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
    <p>
      You must be 18 years old before taking a plot. If you reach the top of 
      the waiting list before 18, you must wait until your 18th birthday.
    </p>

    <h3>Ready to apply?</h3>
    <p>
      You can apply for an allotment online using the Sheffield City Council 
      Allotment Application Service:
      <br />
      <a href="https://sheffield.colonycloud.co.uk/" target="_blank" rel="noopener noreferrer">
        https://sheffield.colonycloud.co.uk/
      </a>
    </p>

    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to apply for an allotment"
      onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20an%20Allotment\`
      "
    >
      Send link to apply for an allotment
    </button>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Eligibility", "Application", "Plots", "Sheffield"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const allotmentsApply = new ContentPSaR(
  "allotmentsApply",
  "How to Apply for an Allotment",
  "Information and link to apply for an allotment plot in Sheffield",
  `
    <p>
      To apply for an allotment in Sheffield, you’ll need to complete the online 
      application form using the link below. Applications are open to Sheffield 
      residents and those living within 1 mile of the city boundary.
    </p>

    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Apply for an allotment"
      onclick="
        window.location.href = 'https://sheffield.colonycloud.co.uk/';
      "
    >
      Apply for an allotment
    </button>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Apply", "Plots", "Sheffield"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
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
    <a href="https://sheffield.colonycloud.co.uk/" 
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
    <p>
      If you would like to ask about your place on the waiting list or discuss a plot offer, 
      use the <strong>Request allotment information</strong> button below.
    </p>
  `,
  { buttonLabel: "Request allotment information", formName: "request_allotment_parks" },
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
    <p>
      If you need to ask about your acceptance documents or the signing-up process, 
      use the <strong>Request allotment information</strong> button below.
    </p>
  `,
  { buttonLabel: "Request allotment information", formName: "request_allotment_parks" },
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
    <p>
      If you have received a Notice to Quit or wish to discuss your situation, 
      use the <strong>Request allotment information</strong> button below.
    </p>
  `,
  { buttonLabel: "Request allotment information", formName: "request_allotment_parks" },
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
  { buttonLabel: "Report tree", formName: "report_tree" },
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
  <p>
      To request key replacement or refund details, use the 
      <strong>Request allotment information</strong> button below.
  </p>
  `,
  { buttonLabel: "Request allotment information", formName: "request_allotment_parks" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Keys", "Deposit"],
    categories: ["Parks and Countryside"]
  },
  { date: "04/11/2025", name: "Andy Walker" }
);

const allotmentsEnquiries = new ContentPSaR(
  "allotmentsEnquiries",
  "Allotment Enquiries",
  "Frequently asked questions about allotments in Sheffield, including waiting lists, plot availability, co-workers, and livestock rules.",
  `
  <p>
    Below are answers to the most common allotment enquiries. If you need to contact us,
    please log a case using the <strong>Allotment Enquiries</strong> form.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Where am I on the allotment waiting list?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you would like to know your position on the waiting list, please log a case using the
        <strong>Allotment Enquiries</strong> form. Include your name, home address and the allotment site you have applied for.
      </p>
      <p>
      To request an update or more detailed information about your place on the waiting list,
      use the <strong>Request allotment information</strong> button below.
    </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>There are empty plots on my site — why can’t I have one?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Empty plots may already be on offer to other applicants who are higher up the waiting list.  
        If you have questions about empty plots, please log a case using the <strong>Allotment Enquiries</strong> form and include the allotment site name.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How long will it take to get a plot?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We are unable to provide exact waiting times, as there are many factors that can affect this.  
        However, we can tell you how long the next person on the list has been waiting.  
        Please log a case using the <strong>Allotment Enquiries</strong> form if you would like this information.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>If I change to a different site, will I keep my place?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        No. If you change to a different allotment site, you will go to the back of that site’s waiting list.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How many people are on the waiting list for my site?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can visit the <a href="https://www.sheffield.gov.uk/leisure/parks-woodlands/allotments" target="_blank">Allotments</a>
        page to see how many plots and applicants there are at each site.  
        For specific information, please log a case using the <strong>Allotment Enquiries</strong> form.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>I applied for two sites — where am I on both lists?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Applicants can only be on one waiting list at a time. If you have applied for two sites, 
        you will need to decide which one you prefer to remain on.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How big are the plots and how much do they cost?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Details about plot sizes and annual costs (rent and water) can be found on the 
        <a href="https://www.sheffield.gov.uk/leisure/parks-woodlands/allotments" target="_blank">Allotments</a> 
        page under <strong>Charges and payments</strong>.  
        When a plot is offered, this information is also included in the acceptance form.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How do I add a co-worker to my plot?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can have one registered co-worker per plot.  
        To add one, please log a case using the <strong>Allotment Enquiries</strong> form and include:
      </p>
      <ul>
        <li>Your name and plot details</li>
        <li>The co-worker’s name, address, contact number, and email address</li>
      </ul>
      <p>
      If you need further guidance or confirmation about co-worker eligibility,
      use the <strong>Request allotment information</strong> button below.
    </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How do I order a replacement key?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you need a replacement site key, please log a case using the <strong>Allotment Enquiries</strong> form and include your site and plot number.  
        You will then receive payment details. The current replacement key cost is £30.00 (subject to confirmation).
      </p>
      <p>
      To request a key or ask about the replacement process, use the
      <strong>Request allotment information</strong> button below.
    </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How do I quit my plot?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you wish to give up your plot, please log a case using the <strong>Allotment Enquiries</strong> form and include:
      </p>
      <ul>
        <li>Your site and plot number</li>
        <li>Confirmation that you would like to end your tenancy</li>
      </ul>
      <p>
      If you have received a "card to quit" letter, you can return this instead.
      </p>
      <p>
      To formally submit your notice or ask about the process for ending your tenancy,
      use the <strong>Request allotment information</strong> button below.
    </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Can I keep animals or pigeons on my plot?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You are not allowed to keep livestock such as cockerels, ducks, pigs, or horses.  
        You may, subject to permission, keep bees, up to 6 hens, 2 rabbits, or pigeons (on selected sites).  
        All birds must be registered with DEFRA:
        <a href="https://www.gov.uk/guidance/register-as-a-keeper-of-less-than-50-poultry-or-other-captive-birds" target="_blank">
          Register as a keeper of less than 50 poultry or other captive birds
        </a>.
      </p>
      <p>
      To request permission or ask about livestock guidelines, use the 
      <strong>Request allotment information</strong> button below.
    </p>
    </div>
  </details>
  `,
  { buttonLabel: "Request allotment information", formName: "request_allotment_parks" },
  { typeKey: "allotment_information_requested" },
  { typeKey: "allotment_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Enquiries", "Waiting List", "Plots", "Sheffield"],
    categories: ["Parks and Countryside"]
  },
  { date: "05/11/2025", name: "Andy Walker" }
);

const allotmentsParks = new MenuPSaR(
  "allotments",
  "Allotments",
  "Comprehensive FAQs for Sheffield City Council allotments",
  [
    allotmentsEligibility,
    allotmentsApply,
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
    allotmentsKeyDeposit,
    allotmentsEnquiries
  ]
);

//#endregion Allotments

//#region Parks Enquiries

const parksAnimals = new ContentPSaR(
  "parksAnimals",
  "Sick, Hurt, or Injured Animals",
  "What to do if you find a sick or injured animal in a park",
  `
    <h4>Animals inside park enclosures (e.g., Graves Park Animal Farm)</h4>
    <ul>
      <li>Report immediately and keep visitors away from the area if safe until staff arrive.</li>
    </ul>

    <h4>Loose or injured wild animals in public areas</h4>
    <ul>
      <li>If the animal poses a risk to people, traffic, or staff, call <strong>999</strong> immediately.</li>
      <li>Parks are not responsible for wild animals — contact appropriate organisations instead:</li>
      <ul>
        <li><strong>RSPB Helpline:</strong> 01767 693690</li>
        <li><strong>Local Wildlife Trusts:</strong> (add local options if available)</li>
      </ul>
    </ul>
    <p>
      To report a sick or injured animal in a park enclosure, use the
      <strong>Parks Enquiry</strong> button below.
    </p>
  `,
  { buttonLabel: "Parks Enquiry", formName: "parks_country_enquiry" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Animals", "Wildlife", "Injured", "Farm"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksEvents = new ContentPSaR(
  "parksEvents",
  "Events and Visits",
  "Information about holding or attending events in parks",
  `
    <p>All event or visit enquiries should be submitted using the Parks Enquiry form.</p>
    <ul>
      <li>Event permissions</li>
      <li>School or family visits</li>
      <li>Food vendors / ice cream vans</li>
      <li>Volunteering, donations, litter picking</li>
    </ul>
    <p>
      To submit an enquiry about events or visits, use the
      <strong>Parks Enquiry</strong> button below.
    </p>
  `,
  { buttonLabel: "Parks Enquiry", formName: "parks_country_enquiry" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Events", "Visits", "Permissions"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksDonations = new ContentPSaR(
  "parksDonations",
  "Donations to Animal Farm",
  "Information about donating to Graves Park Animal Farm",
  `
    <ul>
      <li>Offers of hay, food, sawdust, blankets, or other materials can be submitted using the Parks Enquiry form.</li>
      <li>Requests to donate animals: Graves Park does not rescue animals; suggest contacting <strong>Heeley City Farm</strong>.</li>
    </ul>
    <p>
      To submit a donation enquiry, use the <strong>Parks Enquiry</strong> button below.
    </p>
  `,
  { buttonLabel: "Parks Enquiry", formName: "parks_country_enquiry" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Donations", "Animal Farm", "Heeley City Farm"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksVolunteering = new ContentPSaR(
  "parksVolunteering",
  "Volunteering and Work Experience",
  "Opportunities for volunteering or work experience at parks and the Animal Farm",
  `
    <ul>
      <li>All volunteering requests should be submitted via the Parks Enquiry form.</li>
      <li>Customers can check the Graves Park Animal Farm Facebook page for updates.</li>
      <li><strong>Generic response (until August 2026):</strong><br>
      “We offer limited volunteer opportunities and hold trial mornings each September. Currently full for 2025/26; future openings will be posted on our Facebook page.”</li>
    </ul>
    <p>
      To submit a volunteering enquiry, use the <strong>Parks Enquiry</strong> button below.
    </p>
  `,
  { buttonLabel: "Parks Enquiry", formName: "parks_country_enquiry" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Volunteering", "Work Experience", "Animal Farm"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksVisitorInfo = new ContentPSaR(
  "parksVisitorInfo",
  "Animal Farm Visitor Information",
  "General visitor information for Graves Park Animal Farm",
  `
    <ul>
      <li><strong>Admission:</strong> Free; donations welcome.</li>
      <li><strong>Opening hours:</strong> 10am–3:30pm, 7 days a week.</li>
      <li><strong>Parking:</strong> Small pay-and-display available.</li>
      <li><strong>Feed:</strong> Available to purchase.</li>
      <li><strong>Café / Toilets:</strong> Coffee cart on site; Rose Garden Café nearby.</li>
      <li><strong>Animal sales/hire/sponsorship:</strong> Not available.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Visitor Info", "Animal Farm", "Opening Hours"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksBarnHire = new ContentPSaR(
  "parksBarnHire",
  "Barn Hire",
  "How to book the Animal Farm barn for private use",
  `
    <ul>
      <li><strong>Fee:</strong> £50 flat rate (10am–3:30pm).</li>
      <li>Provide name, contact info, date, duration, and number of attendees.</li>
    </ul>
    <p>
      To submit a barn hire enquiry, use the <strong>Parks Enquiry</strong> button below.
    </p>
  `,
  { buttonLabel: "Parks Enquiry", formName: "parks_country_enquiry" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Barn Hire", "Animal Farm", "Booking"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksEcology = new ContentPSaR(
  "parksEcology",
  "Ecology and Community Forestry",
  "Information about tree planting, wildlife, and forestry activities",
  `
    <ul>
      <li>Disturbance to nesting birds or wildlife crime</li>
      <li>Requests to plant personal trees (not permitted)</li>
      <li>Commemorative tree applications</li>
      <li>Trees requiring attention (include location)</li>
      <li>Forestry volunteering and events</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Forestry", "Ecology", "Wildlife", "Trees"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksWoodCollection = new ContentPSaR(
  "parksWoodCollection",
  "Wood Collection",
  "Policy on collecting or removing wood from parks or woodland",
  `
    <p>Wood collection is not permitted. Removal of any wood or natural materials from Sheffield City Council land is prohibited.</p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Wood Collection", "Forestry", "Rules"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksAdvertising = new ContentPSaR(
  "parksAdvertising",
  "Advertising and Room Bookings",
  "Information about advertising or booking rooms within parks venues",
  `
    <ul>
      <li>Venues include Dorothy Fox Centre and Ecclesall Woods.</li>
      <li>Bookings are handled through the Sheffield Council Booking System.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Advertising", "Room Bookings", "Venues"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksWeddings = new ContentPSaR(
  "parksWeddings",
  "Weddings",
  "How to apply for a wedding at Sheffield parks venues",
  `
    <p>
      Weddings are permitted at the following venues:
    </p>
    <ul>
      <li>Sheffield Botanical Gardens</li>
      <li>Ecclesall Woods</li>
      <li>Weston Park Bandstand</li>
    </ul>
    <p>
      To submit a wedding enquiry, use the <strong>Parks Enquiry</strong> button below.
    </p>
  `,
  { buttonLabel: "Parks Enquiry", formName: "parks_country_enquiry" },
  { typeKey: "parks_information_requested" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: ["Parks", "Weddings", "Ceremonies", "Booking"],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const parksEnquiries = new MenuPSaR(
  "parksEnquiries",
  "Parks Enquiries",
  "General enquiries and information related to Parks and Countryside services",
  [
    parksAnimals,
    parksEvents,
    parksDonations,
    parksVolunteering,
    parksVisitorInfo,
    parksBarnHire,
    parksEcology,
    parksWoodCollection,
    parksAdvertising,
    parksWeddings
  ]
);

//#endregion Parks Enquiries


// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const parksSportAndRecreation = new ServicePSaR(
  "parksSportAndRecreation",
  "Parks, Sport and Recreation",
  `Parks, gardens, trees and woodlands, allotments, leisure and sports facilities, what's on, tourist information…`,
  [allotmentsParks,
   parksEnquiries
  ]
);