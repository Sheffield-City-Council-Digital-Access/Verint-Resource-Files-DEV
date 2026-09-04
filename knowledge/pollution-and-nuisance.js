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

//#region Pest Control

const badgerProtection = new ContentPaN(
  "badgerProtectionAct1992",
  "Badgers Protection",
  "Learn about the legal protections for badgers under the Protection of Badgers Act 1992 and the penalties for violating these laws.",
  `
    <p>
      Sheffield City Council do not provide services for badgers. Badgers are protected wildlife. 
    </p>
    <p>
      The Protection of Badgers Act 1992 makes it illegal for any person to kill,
      injure or take a Badger. It is also an offence to cruelly ill-treat a badger,
      to dig for or to snare a badger.
    </p>
    <p>
      Under the 1992 Act it is now illegal to damage a badger sett or cause a dog to
      enter a sett. It is also an offence to attempt any of these actions or
      recklessly allow a dog to enter a sett. 
    </p>
    <p>
      It is also an offence to possess a dead Badger, which has been acquired
      illegally, and to sell or try to sell or keep a live Badger.
    </p>
    <p>
      A fine of up to £5000 can be imposed for each animal. The courts can also
      confiscate any dogs used in offences against Badgers and disqualify the
      offender from owning a dog.
    </p>
    <p>
      For more information, please visit: <a href="https://www.badgertrust.org.uk/" target="_blank"rel="noopener noreferrer">http://https://www.badgertrust.org.uk/</a>.
      <br>
 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information about South Yorkshire badger group"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Badger%20Trust\`
            "
      >
        Send link to review further information
      </button>
    </p>
    <p>
      You can also visit the government website at: <a href="https://www.gov.uk/guidance/badgers-protection-surveys-and-licences" target="_blank"rel="noopener noreferrer">https://www.gov.uk/guidance/badgers-protection-surveys-and-licences</a>.
      <br>
 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information about badgers protection and licences"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Badgers%20Protection%20Surveys%20and%20Licences\`
            "
      >
        Send link to review further information
      </button>
      <br>
      or
      <br>
      <br>
      RPSCA information site at: <a href="https://www.rspca.org.uk/adviceandwelfare/wildlife/badgers/law" target="_blank"rel="noopener noreferrer">https://www.rspca.org.uk/adviceandwelfare/wildlife/badgers/law</a>.
      <br>
 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information about Badgers and the law"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Badgers%20and%20the%20law\`
            "
      >
        Send link to review further information
      </button>

    </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
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
  { date: "27/11/2024", name: "Nathan Smith" }
);

const batProtectionBritain = new ContentPaN(
  "batProtectionBritain",
  "Bat Protection",
  "Understand the legal protections for bats in Britain, including prohibited actions and penalties for disturbing, harming, or selling bats.",
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
      For more information, please visit <a href="https://www.bats.org.uk" target="_blank" rel="noopener noreferrer">https://www.bats.org.uk</a>. 
      <br>

       <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information bats"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Bats\`
            "
      >
        Send link to review further information
      </button>

    </p>

    </br>
    <p>
      If a caller is concerned about a bat roost, advise them to contact the national bat helpline in the first instance for advice 
      <strong><a href="#" class="telephoneNumber" onclick="copyToClipboard('0345 1300 228')">0345 1300 228</a></strong>. 
      They may be able to offer advice if a caller needs to carry out works, are considering pest control, or are in any way concerned about the bats.
    </p> 
    </br>
    <p>
      Additional information regarding bats and contruction and development work can be found at <a href="https://www.gov.uk/guidance/bats-protection-surveys-and-licences" target="_blank" rel="noopener noreferrer">
      Bats: protection and licences - GOV.UK</a> 
    </p>

    	<button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Bat%20Surveys%20and%20Licences\`
            "
        >
            Send link to review further information
    </button>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
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
  { date: "26/08/2026", name: "Liz Taster" }
);

const bedBugTreatment = new ContentPaN(
  "bedBugTreatment",
  "Bed Bug Treatment",
  "Find out how to report and submit a bed bug sample for treatment, including treatment costs, eligibility for reduced fees, and the process for larger properties.",
  `
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Background Information</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <h4>Initial enquiry</h4>
          <p>
            Before a treatment can be booked in, the insects need to be identified by a Sheffield City Council Pest technician - either a sample or digital image(s). 
          </p>
          <p>
            If tenants are finding it difficult to collect a sample or find bugs to photograph, advise that the bugs are usually clear in colour however 
            turn red in the morning, recommend looking under the corner of mattresses, under cushions, suitcase or corners. 
          </p>
          <p>
            We cannot identify from images of the bites on humans.
          </p>  
        <h4>Once Identified</h4>
          <p>
            Once confirmed to be bed bugs, we will email the tenant/landlord with the appointment details (3 visits – 2 weeks apart)  and attach the bed bug advice leaflet. 
            Advise to read carefully and to follow the instructions, failure to do so may result in our team not being able to treat and a call out fee could apply. 
          </p>
        <h4>How did I get them in my home?</h4>
          <p>
            Bed bugs can enter the home by several means:
          </p>
            <ul>
              <li>In suitcases after a recent trip to hotel, bed and breakfast, or friend's house.</li> 
              <li>Recent visitors to your property.</li>
              <li>Eggs on second-hand furniture, clothing or mats.</li>
              <li>Neighbouring flats or houses.</li>
            </ul>
        <h4>Will they return? </h4>
          <p>
            Bed bugs can lay eggs around the home; we spray the property twice and spaced at least two weeks apart.
          </p>   
    </div>
  </details>


    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for bed bugs in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>
        You can either bring your sample to:
      </p>
      <address>
        First Point,<br>
        Howden House,<br>
        1 Union Street,<br>
        Sheffield,<br>
        S1 2SH
      </address>
      <p>
        Or you can post your sample to:
      </p>
      <address>
        Environmental Services<br>
        Block B, Staniforth Road Depot<br>
        Staniforth Road<br>
        Sheffield,<br>
        S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Bed Bugs is <strong>£348.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£102:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial, Health Authority, Industrial and University</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For bed bug treatment enquiries related to Commercial, Health Authority, Industrial, and
          University properties, please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">EnvironmentalServicesAdmin@sheffield.gov.uk</a>. 
          We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        If your enquiry doesn't fall into any of the above categories, we will need to
        refer your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">report to a technician</a>
        for further investigation.
      </p>
    </section>
  `,
  {
    buttonLabel: "Book treatment for Bed Bugs",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Bed Bug", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const birdsandPigeonsTreatment = new ContentPaN(
  "birdsandPigeonsTreatment",
  "Birds and Pigeons Treatment",
  "Learn how to request bird and pigeon treatment for commercial, health authority, industrial, and university properties, including how to receive a quote.",
  `
  <p>
    If a caller request a birds nest removing, we need to consider the season. If birds are occupying the nest and there could be eggs or chicks Sheffield City Council will not disturb/remove the nest. 
    Ask the caller to get back in touch in the Autumn out of the birds nesting season. 
  </p>

  <h3>Commercial, Health Authority, Industrial and University</h3>
    <p>
        For bird and pigeons treatment enquiries related to Commercial, Health
        Authority, Industrial, and University properties, please email your
        request to
        <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">EnvironmentalServicesAdmin@sheffield.gov.uk</a>. 
        We will assess your request and provide you with a quote for the
        treatment.  
    </p>
   <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        If your enquiry doesn't fall into any of the above categories, we will need
        to refer your         <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">report to a technician</a>
      for further investigation.
      </p>
    </section>
  

  
    `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Birds and Pigeons", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const biscuitBeetlesTreatment = new ContentPaN(
  "biscuitBeetlesTreatment",
  "Biscuit Beetles Treatment",
  "Find out how to submit a sample for Biscuit Beetle treatment, including treatment costs, eligibility for reduced fees, and the process for larger properties or commercial enquiries.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Biscuit Beetles in your domestic property
        such as Council House, Housing Association or Private Rented, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The cost for Biscuit Beetle treatment is <strong>£110.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£70:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.800 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial and Houses in Multiple Occupation (HMO)</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For Biscuit Beetles treatment enquiries related to Commercial and House of Multiple Occuption, 
          please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">EnvironmentalServicesAdmin@sheffield.gov.uk</a>. 
          We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        If your enquiry doesn't fall into any of the above categories, we will need to
        refer your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">report to a technician</a>
        for further investigation.
      </p>
    </section>
  `,
  {
    buttonLabel: "Book treatment for Biscuit Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Biscuit Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
      "HMO"
    ],
  },
  { date: "16/06/2025", name: "Gee Whitehouse" }
);

const bumbleBeesTreatment = new ContentPaN(
  "bumbleBeesTreatment",
  "Bumble Bees Treatment",
  "Find out the cost for Bumble Bee treatment in domestic properties and communal areas, including reduced fees for eligible benefits and the process for commercial or HMO inquiries.",
  `
    <h3>About Bees</h3>
    <p>
     Bees are the main pollinators of many of our wildflowers, crops and vegetables.
    </p>
    <p>Many plants would struggle to reproduce if it were not for the bees.
       Bees are on the decline, since the 1950’s many have had their populations halved.
       They are endangered and generally not aggressive. They appear spring and will leave the nest around end of June.
    </p>
    <p>
    Sheffield City Council will only undertake a treatment if the bees are a danger to human health. Under certain circumstances we can relocate nests, 
    for example in a cupboard for electric/gas. 
    </p>
    <h3>Cost for Treatment</h3>
    <p>
      If the pests are located in a communal area (The area that is shared by multiple Council Housing properties) or 
      required treatment for a domestic properties such as Council Housing, Housing Association, Privately Owned, Private Rented,
      then the treatment cost for Bumble Bees is <strong>£79.20.</strong>
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£61.20.</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
        <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <h3>Nests Up High</h3>
    <p>
    Officers carry equipment that enables them to treat a nest located at height.
    In most cases the officer will be able to carry out a successful treatment using such equipment.
    </p>
    <p>
    If any further access equipment is required to treat the nest, our officer will inform you of this at the time of the visit. 
    If further access equipment is required, then it would possibly mean an added cost.
    </p>
    <p>
    If your customer is unsure about the possible additional cost, 
    escalate pest control enquiry and an officer will contact the customer about it.
    </p>
    
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial and Houses in Multiple Occupation (HMO)</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For Bumble Bees treatment enquiries related to Commercial and Houses in Multiple Occuption, 
          please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">EnvironmentalServicesAdmin@sheffield.gov.uk</a>. 
          We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        If your enquiry doesn't fall into any of the above categories, we will need to
        refer your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">report to a technician</a>
        for further investigation.
      </p>
    </section>
  `,
  {
    buttonLabel: "Book treatment for Bumble Bees",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Bumble Bees", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
      "HMO"
    ],
  },
  { date: "28/03/2025", name: "Dinah Williams" }
);

const carpetBeetlesTreatment = new ContentPaN(
  "carpetBeetlesTreatment",
  "Carpet Beetles Treatment",
  "Learn how to submit a sample for Carpet Beetles treatment, the cost of treatment for domestic properties, including reductions for eligible benefits, and how to request a quote for commercial or HMO properties.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Carpet Beetles in your domestic property
        such as Council House, Housing Association or Private Rented, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br>
        Howden House,<br>
        1 Union Street,<br>
        Sheffield,<br> 
        S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br>
        Block B, Staniforth Road Depot<br>
        Staniforth Road<br>
        Sheffield,<br>
        S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      If the pests are located in a communal area (The area that is shared by multiple Council Housing properties) or 
      required treatment for a domestic properties such as Council Housing, Housing Association, Private Owned, Private Rented,
      then the treatment cost for Carpet Beetles is <strong>£132.00.</strong>
      This charge is based on a standard size of a 3-bed semi-detached property. 
      If the property is bigger than this, please escalate the enquiry so a quote can be provided.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£70.00.</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial and Houses in Multiple Occupation (HMO)</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For Carpet Beetles treatment enquiries related to Commercial and House of Multiple Occuption, 
          please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">EnvironmentalServicesAdmin@sheffield.gov.uk</a>. 
          We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        If your enquiry doesn't fall into any of the above categories, we will need to
        refer your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">report to a technician</a>
        for further investigation.
      </p>
    </section>
  `,
  {
    buttonLabel: "Book treatment for Carpet Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Carpet Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
      "HMO"
    ],
  },
  { date: "28/02/2025", name: "Dinah Williams" }
);

const clusterFliesTreatment = new ContentPaN(
  "clusterFliesTreatment",
  "Cluster Flies Treatment",
  "Learn how to submit a sample for Cluster Flies treatment, the treatment cost for domestic properties, including discounts for eligible benefits, and the associated call-out fee for treatment.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Cluster Flies in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Cluster Flies is <strong>£110.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £70:
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Cluster Flies",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Cluster Flies", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const cockroachesTreatment = new ContentPaN(
  "cockroachesTreatment",
  "Cockroaches Treatment",
  "Find out how to submit a sample for Cockroach treatment, the treatment cost, discounted rates for eligible benefits, and the call-out fee if the treatment is not completed during the visit.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Cockroaches in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Cockroaches is <strong>£348.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£102:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Cockroaches",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Cockroaches", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const cricketsTreatment = new ContentPaN(
  "cricketsTreatment",
  "Crickets Treatment",
  "Learn how to submit a sample for Cricket treatment, the treatment cost, discounted rates for those on eligible benefits, and the call-out fee for incomplete treatments.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for crickets in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>

    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost for crickets will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survery and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Crickets",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Crickets", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const dermestesBeetlesTreatment = new ContentPaN(
  "dermestesBeetlesTreatment",
  "Dermestes Beetles Treatment",
  "Find out how to submit a sample for Dermestes Beetles treatment, treatment costs, discounted rates for those on eligible benefits, and the call-out fee for incomplete treatments.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Dermestes Beetles in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Dermestes Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Dermestes Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/11/2024", name: "Nathan Smith" }
);

const fleasTreatment = new ContentPaN(
  "fleasTreatment",
  "Flea Treatment",
  "Learn about the costs, eligibility for discounted treatment for fleas, the call-out fee, and the process for submitting samples or identifying potential flea infestations.",
  `
    <h3>Cost for Flea Treatment</h3>
    <p>The treatment cost for Fleas is <strong>£132.00</strong>.</p>
    <p>
      This charge is based on a standard size of a 3 bed semi-detached property. If
      the property is bigger than this, please escalate the enquiry so a quote can
      be provided.
    </p>
    <p>
      If you are in receipt of one of the benefits listed below, the treatment cost
      will be reduced to <strong>£70:00</strong>.
    </p>
    <ul>
      <li>Housing Benefit</li>
      <li>Income Support</li>
      <li>Pension Credit</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income related Employment Allowance</li>
    </ul>
    <p>
      In all cases proof should be provided to the officer who attends your
      property.
    </p>
    <h3>Call Out Charges</h3>
    <p>All prices contain a call out fee of £40.80.</p>
    <p>
      If we attend the property and the officer is unable to complete the treatment,
      the call out charge will be applied.
    </p>
    <details class="accordion">
  <summary class="accordion-header">
    <h3>Do I need to provide a sample?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      Normally, we don't require a sample of fleas before scheduling a
      treatment, as they are small, elusive, and difficult to catch. <br>
      <br>
      However, some individuals may mistakenly believe they have a flea
      infestation due to skin conditions or psychological issues.<br>
    <br>
      Find out if the customer has pets like cats or dogs, as fleas are commonly
      associated with pets. Ask if they've noticed bites, especially on their
      lower legs or ankles. Also, check if they’ve recently moved into a vacant
      property, as fleas can linger in unoccupied homes, and the customer may
      have seen small, dark insects jumping around.
    </p>
    <p>
      Sometimes people can believe they have fleas because:
    </p>
    <ul>
      <li>They feel something crawling on them</li>
      <li>They are itching</li>
      <li>They are covered in bites all over their body</li>
      <li>They do not have pets</li>
    </ul>
    <p>
      In these cases, we may request a sample or photo for identification.
      Alternatively, we can monitor the property using traps and proceed with
      treatment if fleas are confirmed.
    </p>
    <p>You can either bring your sample to:</p>
    <address>
      First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1
      2SH
    </address>
    <p>Or you can post your sample to:</p>
    <address>
      Environmental Services<br />
      Block B, Staniforth Road Depot<br />
      Staniforth Road<br />
      Sheffield, S9 3HD
    </address>
    <p>
      Please ensure your sample is in a secure, crush-proof container, alive or
      dead. Attach information detailing:
    </p>
    <ul>
      <li>Your name</li>
      <li>Your address</li>
      <li>Your contact number and/or email</li>
      <li>How long the insects have been present</li>
      <li>Where in the property the insects have been found</li>
    </ul>
  </div>
</details>

<h3>Additional Information</h3>
<p>
  If booking a treatment, advise the customer to have their pets treated at the vets just before Sheffield City Council attend to spray.  
</p>
  `,
  {
    buttonLabel: "Book treatment for Fleas",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Flea"],
    categories: ["Pollution and Nuisance", "Environmental", "Pest Constrol"],
  },
  { date: "28/02/2025", name: "Dinah Williams" }
);

const fliesTreatment = new ContentPaN(
  "fliesTreatment",
  "Flies Treatment",
  "Find out about the process for providing a sample of flies for treatment, the costs involved, eligibility for discounted treatment, and the call-out fee for pest control services.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Flies in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Flies is <strong>£110.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£70.00:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>

    <h3>Additional Information</h3>
    <p>
      <strong>Drain flies</strong> - once identified Sheffield City Council can treat drain flies, their presence indicate a plumbing issue and this needs resolving 
      <em>before</em> booking the treatment.
    </p>

    <p>
      <strong>Fruit flies</strong> - we do not usually treat for fruit flies, if confirmed that’s what they are. 
      Advise the customer to dispose old of fruit and food from the area. 
    </p>
  `,
  {
    buttonLabel: "Book treatment for Flies",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Flies", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const foulSmell = new ContentPaN(
  "foulSmell",
  "Foul Smell",
  "Information to support if a caller is reporting a foul smell.",
  `
  <p>
    If the caller is reporting a foul smell in the property this could be caused by decaying rodents/animals. Enquire if they are having a pest treatment or have seen activity.
  </p>
  <p>
     If the caller requests a visit explain that we can investigate and lay traps if there are still live rodents, however we cannot start removing skirting boards,
     floorboards or kitchen units. We do not carry the equipment to do this. 
  </p>
  <p>
    Advise callers that the smell will often last about seven days and then subside, once the body decomposes.  Air fresheners like Neutradol can help cover the odour. 
  </p>

  `,
  { buttonLabel: "Book Pest Treatment", formName: "pest_control_treatment", },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Information",
    keywords: 
    [
      "foul",
      "smell",
      "rodent",
      "rodents",
      "dead",
      "decay",
      "decaying", 
      "Treatment", 
      "Pests", 
      "Vermin"
    ],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const foxesInformation = new ContentPaN(
  "foxesInformation",
  "Foxes Information",
  "Information on how to handle fox-related issues in Sheffield and where to get advice, including the Fox Project website.",
  `
   <p>Sheffield City Council doesn't offer a service for foxes.</p>
    <p>For advice/information on foxes, please visit 
    <a href="http://foxproject.org.uk" target="_blank" rel="noopener noreferrer">http://foxproject.org.uk</a>.
    <br>
 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information about the fox project"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=The%20Fox%20Project\`
            "
      >
        Send link to review further information
      </button>

    </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "",
    keywords: ["Foxes", "", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "27/11/2024", name: "Nathan Smith" }
);

const frogsorFrogspawn = new ContentPaN(
  "frogsorFrogspawn",
  "Frogs or Frogspawn",
  "Guidance on handling frog or frogspawn issues, including contact information for DEFRA for removal and additional resources.",
  `
    <p>
      Sheffield City Council doesn't offer a service for Frogs or Frogspawn.
      <br>
      <br>
      For advice/information on Frogs or Frogspawn, please call DEFRA who are licenced to remove 
      frogs or frog spawn on <a href="tel:0113 2613333">0113 2613333</a> or visit:
      <a href="https://www.gov.uk/browse/environment-countryside" target="_blank" rel="noopener noreferrer">https://www.gov.uk/browse/environment-countryside</a>.
      <br>

 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information environment and countryside"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Environment%20and%20countryside\`
            "
      >
        Send link to review further information
      </button>

    </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "",
    keywords: ["Frogs or Frogspwan", "", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/11/2024", name: "Nathan Smith" }
);

const furBeetlesTreatment = new ContentPaN(
  "furBeetlesTreatment",
  "Fur Beetles Treatment",
  "Details on the treatment process for fur beetles, including how to submit a sample, associated costs, and available reductions for those receiving certain benefits.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Fur Beetles in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>

     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Fur Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Fur Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const gardenAntsTreatment = new ContentPaN(
  "gardenAntsTreatment",
  "Garden Ants Treatment",
  "Information on the treatment cost for garden ants, with details on available discounts for those receiving certain benefits.",
  `
    <p>
      We treat around entry points, doors, windows and vents. We do not treat further than one flag away from the property and we treat internally.
    </p>

    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Garden Ants is <strong>£79.20.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>

    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£61.20:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Garden Ants",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Garden Ants", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const honeyBeeTreatment = new ContentPaN(
  "honeyBeeTreatment",
  "Honey Bee Treatment",
  "Guidance on honey bee treatment, including swarm information and contact details for local beekeepers willing to collect bees for free or at a charge.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        Bee keepers may be able to collect Honey Bees, although they are under no obligation to collect the swarm
        You can access information on the Sheffield Beekeepers Association at: <a href="https://sheffieldbeekeepers.org.uk/swarm-of-bees-in-your-garden-or-house/" target="_blank" rel="noopener noreferrer">https://sheffieldbeekeepers.org.uk/swarm-of-bees-in-your-garden-or-house/</a>
        <br>
        
    <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Environment%20and%20Countryside\`
    "
>
        Send link to review further information
    </button>
 
      </p>
    </section>
    <p>
      We will only treat Honey Bees as a last resort and where there is a threat to health.
      <br>
      <br>
      Honey Bees will swarm when the queen lands to rest, with a lot of bees around the queen. Swarming only lasts 
      for a couple of weeks a year and when the bees begin to swarm they will usually disperse within a few hours.
      <br>
      <br>
      If the bees are swarming then we are unable to treat. A swarm would contain hundreds if not thousands of bees.
      <br>
      <br>
      If the bees are definitely Honey Bees and treatment is required for health reasons or the bees are 
      trapped and there is no alternative but to have a treatment, the officer will provide you with 
      a quote for the treatment.
      <br>
      <br>
      Alternatively, can contact a Bee Keeper to see if they will collect the bees for you. 
      However, Bee keepers will only collect where they have access to the whole swarm, it is unlikely that they 
      will remove bees, which are nesting in a cavity, chimney etc.
      <br>
      <br>
      You can call through to Environmental Services on <strong>30353</strong>
    </p>
    <details class="accordion">
    <summary class="accordion-header">
      <h3>Beekeepers List</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <div class="panel" style="display: block;">
      <br>
      <p>
      </p><table border="1" cellpadding="0" cellspacing="0" style="width:90%">
        <tbody>
          <tr>
            <td style="height:20px; width:20%"><h5><strong>Contact</strong></h5></td>
            <td style="height:20px; width:20%"><h5><strong>Telephone Number</strong></h5></td>
            <td style="height:20px; width:50%"><h5><strong>Conditions</strong></h5></td>
          </tr>
          <tr>
            <td>
              <strong>Paul Hudson</strong>
              <address>
              Laneside<br>
              Saltergate Lane<br>
              Bamford<br>
              S33 OBE
            </td>
            <td>
              <a href="tel:0794 6375387">0794 6375387</a>
            <br>
              Please send pictures via WhatsApp.
            </td>
            <td>
              Dore, Totley, Netheredge, Crookes, Crosspool, Hillsborough <br>
              Will do swarm removal for free but colony removal eg inside a property charges involved.
            </td>
          </tr>
          <tr>
            <td>
            <strong>Robert Butters </strong>
            <br>
            <address>
              13 The Oaks <br>
              Oaks Park <br>
              Norton 
            </address>
            </td>
            <td>
              <a href="tel:0777 4862962">0777 4862962</a>
            </td>
            <td>
              South Side of Sheffield
            <br>
              No Charge
            </td>
          </tr>
          <tr>
            <td>
            <strong>Mr Wilson</strong>
            <br>
            <address>
              7 Middle Lane <br>
              Grenoside
            </address>
            </td>
            <td>
              <a href="tel:0777 9327579">0777 9327579</a>
            </td>
            <td>
              North Side of Sheffield - Grenoside, Chapeltown, Hillsborough
            <br>
              No Charge
            </td>
          </tr>
          <tr>
            <td>
            <strong>Mr Steve Wyatt</strong>
            <br>
            <address>
              38 Totley Hall Croft <br>
              S17 4BE
            </address>
            </td>
            <td>
              <a href="tel:0114 2353025">0114 2353025</a>
            <br>
            </td>
            <td>
              South Side of Sheffield
            <br>
              No Charge
            <br>
              No ladder jobs
            </td>
          </tr>
          <tr>
            <td>
            <strong>Paul Faulkner</strong>
            <br>
            <address>
              32 Manvers Road <br>
              Beighton <br>
              Sheffield <br>
              S20
            </address>
            </td>
            <td>
              <a href="tel:0797 4410025">0797 4410025</a>
            <br>
              Please send pictures to <a href="mailto:beightonbees@gmail.com">beightonbees@gmail.com</a>.
            </td>
            <td>
              All Sheffield Areas
            <br>
              No Charge for Standard Collections
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      </div>
    </div>
    </details>
  `,
  {
    buttonLabel: "Request technician for Honey Bees",
    formName: "pest_control_technician",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Request",
    keywords: ["Honey", "Bee", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "08/05/2025", name: "Dinah Williams" }
);

const insectIdentification = new ContentPaN(
  "insectIdentification",
  "Insect Identification",
  "Instructions on providing a sample of insects for identification.",
  `
  <p>
    In order to provide the most appropriate treatment, it is important to ensure any insects are identified correctly.
  </p>
  <p>
    Once a sample has been provided and the pests have been confirmed, the cost will be provided and the customer can request a treatment.
  </p>

<details class="accordion">
    <summary class="accordion-header">
      <h3>Providing a Physical Sample</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Providing Photos</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A photo sample can be emailed directly to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
      <p>
        Images must be clear digital photo(s) of the <strong>actual insect(s) present</strong> - not from the internet.
      </p>
      <p>
        We cannot identify insects from bite marks on humans.
      </p>
    </div>
  </details>

  `,
  { buttonLabel: "Book Pest Treatment", formName: "pest_control_treatment", },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Information",
    keywords: 
    [
      "insect",
      "insects",
      "identification",
      "ID",
      "sample", 
      "Treatment", 
      "Pests", 
      "Vermin"
    ],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const ladyBirdsTreatment = new ContentPaN(
  "ladyBirdsTreatment",
  "Ladybirds Treatment",
  "Details about ladybird treatment, including costs and available discounts for individuals receiving specific benefits.",
  `
    <h3>Cost for Treatment</h3>
    
     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>

    <p>
      Recommend to the customer that once the ladybirds have been removed to thoroughly clean the area. 
      This removes pheromones that attract the ladybirds in large numbers, preventing their return. 
    </p>
  `,
  {
    buttonLabel: "Book treatment for Ladybirds",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Ladybirds", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const masonryBeesTreatment = new ContentPaN(
  "masonryBeesTreatment",
  "Masonry Bees Treatment",
  "Details about masonry bee treatment, including costs, benefits-related discounts, and charges for additional nests or treatment of nests located at height.",
  `
  <h3>Masonry Bees</h3>
  <p>
    Bees are not treated as pests in the traditional sense and should be relocated, not exterminated.
    Sheffield City Council pest control service promotes this through legal adherence, professional partnerships, 
    and prioritizing ethical environmental practices.
  </p> 

  <p>
    The masonry bee is often the first to appear in early spring. The queen looks for damaged brickwork/pointing or other gaps and lays approx. 400 eggs. 
    <br> When the warm sunlight falls on the wall the bees start to hatch. This can take around a month for them to disperse. They do not return. 
  </p>
  <p>
    Where a customer has had masonry bees that cannot/will not be treated, advise them to wait until bees have dispersed and then have repairs done to brickwork to prevent this recuring.
  </p>
  
    
     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        <stong>All Bees</strong> - Only treated as a last resort & when there is a threat to health 
        or are in a highly sensitive location. Send your
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        or a team leader if unsure.
      </p>
    </section>

    <h3> Treatment Cost</h3>

    <p>
      The treatment cost is <strong>£79.20</strong>.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£61.20:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>

    <p>
      All services include a £40.80 call-out fee which would be payable if the customer has made an appointment
      and decides not to proceed with a treatment or the Pest officer recommends not to treat at the time of visit. 
      If the customer has paid in advance then a partial refund maybe issued i.e. Full fee minus call-out charge.
    </p>

    
    <h3>Nests Up High</h3>
    <p>
      Officers carry equipment that enables them to treat a nest located at height.<br>
      In most cases the officer will be able to carry out a successful treatment using such equipment.<br>
      If any further access equipment is required to treat the nest our officer will inform you of this at the time of the visit. 
      If further access equipment is required, then it would possibly mean an added cost.<br>
      If your customer is unsure about the possible additional cost, escalate the pest control enquiry and an officer will contact the customer about it.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Masonry Bees",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Masonry Bees", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const miceTreatment = new ContentPaN(
  "miceTreatment",
  "Mice Treatment",
  "Information on mice treatment, including costs, free treatment for certain benefits, communal area handling, and commercial property inquiries.",
  `
    <h3>Cost for Treatment</h3>
    <p>
      We will only provide treatment for Mice inside the property. 
      The cost for the treatment is <strong>£124.80.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£61.20:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      This covers you for up to 3 visits. If you require further treatments, 
      each additional treatment will cost <strong>£58.00.</strong>
    </p>
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>Should bookings be made 2 weeks apart?</summary>
          <div class="details-accordion-content">
            <p>
              After the first appointment, book the second as close to after two weeks later as possible. If no ideal dates are available after two weeks, you may book before, but booking after two weeks is preferred.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>Do the Contact Centre complete SharePoint, or the fulfilment Team?</summary>
          <div class="details-accordion-content">
            <p>
                   Contact Centre should update SharePoint, and complete the 1st appointment & 2nd appointment fields on the CRM form.<br>
                   Fulfilment Team will transfer the same dates into the Confirm record attributes.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>What if the 1st booking was made prior to us changing the process?</summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team to book the follow up appointment at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What if no appointments showing on SharePoint for the advisors to book?</summary>
          <div class="details-accordion-content">
            <p>
              We will endeavour to allocate a set amount of appointments per day for these bookings but if none are available, please contact the Hub Team via <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What do we do if a customer calls to rearrange an appointment?</summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What if a customer can only set a date for the 1st appointment and has to call us back once they can check their availability for a 2nd appointment? </summary>
          <div class="details-accordion-content">
            <p>
              The 2nd appointment field is not mandatory; the booking can be made and the customer advised to contact the Hub to make the follow up appointment.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>Is there a set amount of time between calling us back to book that 2nd appointment so for example they booked the 1st treatment with us and said they would have to call us back to book the 2nd appointment and then we get a call 2 months later? </summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>, this process should only be used when booking the initial visit and making the first 2 appointment.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What do we do if a customer was told to call us to book a 3rd appointment?</summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What if Environmental Services are unavailable when we call?</summary>
          <div class="details-accordion-content">
            <p>
              Please email the query to <a href="mailto:environmentalservicessadmin@sheffield.gov.uk ">environmentalservicessadmin@sheffield.gov.uk</a> and they will call the customer back
            </p>
          </div>
        </details>

      </div>
    </details>
  `,
  {
    buttonLabel: "Book treatment for Mice",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transferred_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Mice", "Treatment", "Pests", "Vermin", "mouse", "mouses", "mouce", "mouies"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "11/07/2025", name: "Joseph Coupland" }
);

const mitesTreatment = new ContentPaN(
  "mitesTreatment",
  "Mites Treatment",
  "Details about mite treatment costs, benefit-related discounts, and the call-out fee.",
  `
    <h3>Cost for Treatment</h3>
    
     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>
    
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Mites",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Mites", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const mothsTreatment = new ContentPaN(
  "mothsTreatment",
  "Moths Treatment",
  "Information on moth treatment, including sample submission, cost, and available benefit-related discounts.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Moths in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Moths is <strong>£132.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£70.00:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Moths",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Moths", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const otherPests = new ContentPaN(
  "otherPests",
  "Other Pests",
  "Brief details about treatments for other pests not listed in their own tiles.",
  `
<details class="accordion">
    <summary class="accordion-header">
      <h3>Asian Hornets</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Asian hornets do not come this far north; it is very unlikely that a caller has Asian hornets.
      </p>
      <p>
        If the caller is persistent then request a photo(s) is sent to <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Bird Mites</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Once identified Sheffield City Council can treat for bird mites. 
      </p>
      <p>
        Please refer to the <strong>Insect Identification</strong> tile.
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Earwigs</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Request a sample. See <strong>Insect Identification</strong> tile.
      </p>
      <p>
        Once identified it will be insect price for a treatment. 
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Fire Brat</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Firebrats are stout-bodied, quick-moving, wingless insects.
        They are commonly found indoors, typically lingering in warm locations, such as near fireplaces, furnaces, and water heaters.
        They feed on starches and thus can cause damage to books, fabrics, and stored foods.
      </p>
      <p>
        Request a sample (see <strong>Insect Identification</strong> tile), then can book an internal insect treatment. 
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Maggots</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Report of a maggot infestation would require a visit. 
        This will be the standard call out fee payable by the tenant, Housing or business requesting.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Moles</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Sheffield City Council treat moles – request information on if domestic or commercial, the size of area to be treated and number of mole hills. 
        Email the information over to the Pest Technician Team Leader for a quote. 
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Spiders</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We require a sample to determine the species; spider enquiries need escalating to the Pest Supervisor for sample ID in case it is a False Widow infestation. 
      </p>
      <p>
        Other types of spiders we do not ordinarily treat, however if customer insists then please refer to a team leader in Service for technical advice.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Wood Worm</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Sheffield City Council do not treat for wood worm, it requires a specialist provider.
      </p>
    </div>
  </details>

  `,
  {
    buttonLabel: "Book Pest Treatment",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: 
    [
      "Asian",
      "hornets",
      "hornet",
      "bird",
      "mites",
      "mite",
      "earwig",
      "earwigs",
      "ear",
      "wig",
      "wigs",
      "fire",
      "brat",
      "brats",
      "firebrat",
      "firebrats",
      "maggot",
      "maggots",
      "mole",
      "moles",
      "spider",
      "spiders",
      "wood",
      "worm",
      "worms",
      "woodworm",
      "woodworms",
      "Treatment", 
      "Pests", 
      "Vermin"
    ],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "27/08/2026", name: "Liz Taster" }
);

const pharoahAntsTreatment = new ContentPaN(
  "pharoahAntsTreatment",
  "Pharoah Ants Treatment",
  "Details on Pharoah Ant treatment costs and available discounts for benefit recipients.",
  `
    <h3>Cost for Treatment</h3>
    
     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Pharoah Ants",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Pharoah Ants", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const psocidsTreatment = new ContentPaN(
  "psocidsTreatment",
  "Psocids Treatment",
  "Information on Psocids treatment, including costs, sample requirements, and available discounts for benefit recipients.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Psocids in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    
     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £40.80 This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Psocids",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Psocids", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const ratTreatment = new ContentPaN(
  "ratTreatment",
  "Rat Treatment",
  "Information on rat treatment, including costs, free treatment for certain benefits, communal area handling, and commercial property inquiries.",
  `
    <p>
      Please note - If the tenant is hearing noises in loft ask if this is just in the daytime or at night. 
      Rats tend to explore at night, noises in the loft only in the day could mean a squirrel issue. 
    </p>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Rats is <strong>£124.80.</strong> This covers you for up to 3 visits.
      If you require further treatments, each additional treatment will cost <strong>£58.00.</strong>
    </p>
    <p>
      All prices include a call-out fee of <strong>£40.00.</strong> This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <p>
      If you receive one of the following benefits, the treatment will be free: 
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      Free treatments - there is no call out charge if the Technician is unable to gain access.
    </p>

        
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Communal Areas</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          If the rats are in a communal area (an area shared by multiple Council
          Housing tenants), 
          <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/hou_estates_enquiry?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }">raise this with the estates team</a>.
        </p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial, Health Authority, Industrial, and University</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For rat treatment enquiries related to Commercial, Health Authority, Industrial, and
          University properties, please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk">
           EnvironmentalServicesAdmin@sheffield.gov.uk</a>.
            We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>Should bookings be made 2 weeks apart?</summary>
          <div class="details-accordion-content">
            <p>
              After the first appointment, book the second as close to after two weeks later as possible. If no ideal dates are available after two weeks, you may book before, but booking after two weeks is preferred.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>Do the Contact Centre complete SharePoint, or the fulfilment Team?</summary>
          <div class="details-accordion-content">
            <p>
                   Contact Centre should update SharePoint, and complete the 1st appointment & 2nd appointment fields on the CRM form.<br>
                   Fulfilment Team will transfer the same dates into the Confirm record attributes.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>What if the 1st booking was made prior to us changing the process?</summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team to book the follow up appointment at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What if no appointments showing on SharePoint for the advisors to book?</summary>
          <div class="details-accordion-content">
            <p>
              We will endeavour to allocate a set amount of appointments per day for these bookings but if none are available, please contact the Hub Team via <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What do we do if a customer calls to rearrange an appointment?</summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What if a customer can only set a date for the 1st appointment and has to call us back once they can check their availability for a 2nd appointment? </summary>
          <div class="details-accordion-content">
            <p>
              The 2nd appointment field is not mandatory; the booking can be made and the customer advised to contact the Hub to make the follow up appointment.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>Is there a set amount of time between calling us back to book that 2nd appointment so for example they booked the 1st treatment with us and said they would have to call us back to book the 2nd appointment and then we get a call 2 months later? </summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>, this process should only be used when booking the initial visit and making the first 2 appointment.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What do we do if a customer was told to call us to book a 3rd appointment?</summary>
          <div class="details-accordion-content">
            <p>
              Please transfer to Hub Team at <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930356')">0114 2930356</a> or <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2930353')">0114 2930353</a>.
            </p>
          </div>
        </details>

        <details class="details-accordion">
          <summary>What if Environmental Services are unavailable when we call?</summary>
          <div class="details-accordion-content">
            <p>
              Please email the query to <a href="mailto:environmentalservicessadmin@sheffield.gov.uk ">environmentalservicessadmin@sheffield.gov.uk</a> and they will call the customer back
            </p>
          </div>
        </details>

      </div>
    </details>

  <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        If your enquiry doesn't fall into any of the above categories, we will need to
        refer your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">report to a technician</a>
        for further investigation.
      </p>
    </section>

  `,
  {
    buttonLabel: "Book treatment for Rats",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transferred_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Rats", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "11/07/2025", name: "Joseph Coupland" }
);

const redSpiderMitesTreatment = new ContentPaN(
  "redSpiderMitesTreatment",
  "Red Spider Mites Treatment",
  "Information about Red Spider Mites treatment, including sample requirements, treatment costs, reduced prices for benefits recipients, and call-out fees.",
  `
  <p>
    Red spider mites do not bite humans and carry no known diseases, however, they can cause skin irritation. 
    We can offer a treatment for these where we would spray around the windows and doors with insecticide.
  </p>
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Red Spider Mites in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
   
     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Red Spider Mites",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Red Spider Mites", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
{ date: "27/08/2026", name: "Liz Taster" }
);

const sewageFliesTreatment = new ContentPaN(
  "sewageFliesTreatment",
  "Sewage Flies Treatment",
  "Information on Sewage Flies treatment, including sample requirements, treatment costs, discounted prices for benefits recipients, and associated call-out fees.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Sewage Flies in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>

     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Sewage Flies",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Sewage Flies", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const silverFishTreatment = new ContentPaN(
  "silverFishTreatment",
  "Silver Fish Treatment",
  "Information on Silver Fish treatment, including treatment costs, discounted prices for benefits recipients, and associated call-out fees.",
  `
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Silver Fish is <strong>£110.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£70.00:</strong>
      <br>
      
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
      <br>
      
    </ul>
        <p>
      All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>

  `,
  {
    buttonLabel: "Book treatment for Silver Fish",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Silver Fish", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const spiderBeetlesTreatment = new ContentPaN(
  "spiderBeetlesTreatment",
  "Spider Beetles Treatment",
  "Details on Spider Beetles treatment, including sample submission instructions, treatment cost, discounted prices for benefits recipients, and call-out fees.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Cluster Flies in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Spider Beetles is <strong>£110.00.</strong> This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£70.00:</strong>
    
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
        <br>
   
    </ul>
        <p>
      All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>

  `,
  {
    buttonLabel: "Book treatment for Spider Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Spider Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const squirrelsTreatment = new ContentPaN(
  "squirrelsTreatment",
  "Squirrels Treatment",
  "Details on Squirrel treatment, including costs, discounted rates for benefits recipients, and the included call-out fee.",
  `
  <p>
    If the tenant can hear noises in the loft, ask if this is in the daytime or nighttime. Squirrels tend to sleep at night so noises at night are more likely to be a rat issue.
  </p>
  <p>
    For advice on squirrel treatments, please contact the pest control back office at:
    <a href="tel:01142930356">0114 293 0356</a> 
    or email: <a href="mailto:environmentalservicesadmin@sheffield.gov.uk">environmentalservicesadmin@sheffield.gov.uk</a>
  </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Squirrels", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
{ date: "27/08/2026", name: "Liz Taster" }
);

const waspsTreatment = new ContentPaN(
  "waspsTreatment",
  "Wasps Treatment",
  "Information on Wasps treatment, including costs, discount for benefits recipients, and details on potential additional charges for high nests.",
  `
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Wasps is <strong>£79.20.</strong>
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to <strong>£61.20:</strong>
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
    <p>
      If you require further treatments, each additional treatment will cost <strong>£58.00</strong>.
      <br>
       All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
      <br>
      <br>
      Officers carry equipment that enables them to treat a nest located at height.
      In most cases the officer will be able to carry out a successful treatment using such equipment. 
      If any further access equipment is required to treat the nest our officer will inform you of this 
      at the time of the visit and we may need to rearrange the appointment. 
      <br>
    </p>

    <h3>Terms and Conditions</h3>

  <ul>
    <li>Treatment of wasps is subject to weather conditions; in adverse conditions we may contact you to rearrange the appointment.</li>
    <li>We are only able to provide treatments to active wasps' nests.</li>
    <li>If no active nest is found, no treatment will be provided (in this instance no refund of the call-out fee will be made).</li>
    <li>If we are unable to locate or access the nest, we cannot treat it (in this instance no refund of the call-out fee will be made).</li>
    <li>Once the nest is dead no wasps will use the nest again; we do not remove dead nests.</li>
    <li>If the treatment on the original nest is unsuccessful, we can arrange a re-visit at no additional cost. The original treatment must have taken place within 2 weeks.</li>
  </ul>

  <h3>Wasps on other land</h3>
  <p>
    If a member of public complains about a wasp nest on private land, there is no enforcement action that can be taken to force them to resolve and get treated. 
  </p>
  <p>
    If the wasp nest is on Council land then it needs reporting to the relevant service, Housing, Schools, PFM etc. 
  </p>

  `,
  {
    buttonLabel: "Book treatment for Wasps",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Wasps", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
{ date: "27/08/2026", name: "Liz Taster" }
);

const weevilsTreatment = new ContentPaN(
  "weevilsTreatment",
  "Weevils Treatment",
  "Instructions on providing a sample of Weevils for treatment, along with the contact details and required information, and information on the cost including the call-out fee.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Weevils in your domestic property, we
        will need a sample of the pest.
      </p>
      <p>You can either bring your sample to:</p>
      <address>
        First Point,<br />Howden House,<br />1 Union Street,<br />Sheffield, S1 2SH
      </address>
      <p>Or you can post your sample to:</p>
      <address>
        Environmental Services<br />
        Block B, Staniforth Road Depot<br />
        Staniforth Road<br />
        Sheffield, S9 3HD
      </address>
      <p>
        Please ensure your sample is in a secure, crush-proof container, alive or
        dead. Attach information detailing:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your contact number and/or email</li>
        <li>How long the insects have been present</li>
        <li>Where in the property the insects have been found</li>
      </ul>
      <p>
        If a sample has been provided and the pests have been confirmed, you can request a treatment.
      </p>
      <p>
        A photo sample can be emailed in to: <a href="mailto:admin.envserv@sheffield.gov.uk">admin.envserv@sheffield.gov.uk</a>.
      </p>
          <h3>Cost for Treatment</h3>
    <p>
            All prices include a call-out fee of £40.80. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    </section>

  `,
  {
    buttonLabel: "Book treatment for Weevils",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Weevils", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const woodliceTreatment = new ContentPaN(
  "woodliceTreatment",
  "Woodlice Treatment",
  "Information on the cost of treatment for woodlice, including benefits-related discounts, and the call-out fee.",
  `
    <h3>Cost for Treatment</h3>
    
     <section class="info-panel" role="region" aria-label="Information panel">
      <p>
       The treatment cost will be on request. We will send your 
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/pest_control_technician?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">request to a technician</a>
        for survey and provide a quote. 
      </p>
    </section>

    <p>
      All prices include a call-out fee of £39.00. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>

  `,
  {
    buttonLabel: "Book treatment for Woodlice",
    formName: "pest_control_treatment",
  },
  { typeKey: "" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Woodlice", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health"
    ],
  },
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const pestControl = new MenuPaN(
  "pestControl",
  "Pest Control",
  "Pest control treatments, services and pricing",
  [
    badgerProtection,
    batProtectionBritain,
    bedBugTreatment,
    birdsandPigeonsTreatment,
    biscuitBeetlesTreatment,
    bumbleBeesTreatment,
    carpetBeetlesTreatment,
    clusterFliesTreatment,
    cockroachesTreatment,
    cricketsTreatment,
    dermestesBeetlesTreatment,
    fliesTreatment,
    fleasTreatment,
    foulSmell,
    foxesInformation,
    frogsorFrogspawn,
    furBeetlesTreatment,
    gardenAntsTreatment,
    honeyBeeTreatment,
    insectIdentification,
    ladyBirdsTreatment,
    masonryBeesTreatment,
    miceTreatment,
    mitesTreatment,
    mothsTreatment,
    otherPests,
    pharoahAntsTreatment,
    psocidsTreatment,
    ratTreatment,
    redSpiderMitesTreatment,
    sewageFliesTreatment,
    silverFishTreatment,
    spiderBeetlesTreatment,
    squirrelsTreatment,
    waspsTreatment,
    weevilsTreatment,
    woodliceTreatment,    
  ]
);

//#endregion Pest Control

const reportFilthyPremises = new FormPaN(
  "reportFilthyPremises",
  "Report Filthy Premises",
  "Report a Filthy Premise",
  "report_filthy_premises",
  {
    type: "Report",
    keywords: ["Filthy Premises", "Filthy Premise", "Filthy", "Premise"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Environmental Health"
    ],
  },
  { date: "30/05/2025", name: "Gee Whitehouse" }
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

const handoverDogtoCouncil = new FormPaN(
  "handoverDogtoCouncil",
  "Handover Dog to Council",
  "Hand over a dog to the council",
  "report_dog_handover",
  {
    type: "Report",
    keywords: ["Handover Dog to Council", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Animal Control",
      "Environmental Health"
    ],
  },
  { date: "05/03/2025", name: "Sam Coupland" }
);

const reportDangerousDog = new FormPaN(
  "reportDangerousDog",
  "Dangerous dog",
  "Report a dog as dangerous",
  "report_dangerous_dog",
  {
    type: "Report",
    keywords: ["Dog", "dangerous", "dangerous dog", "dog as dangerous"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "05/03/2025", name: "Sam Coupland" }
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

const reportStrayingDog = new FormPaN(
  "reportStrayingDog",
  "Straying dog",
  "Report straying dog on the highway",
  "report_straying_dog",
  {
    type: "Report",
    keywords: ["Dog", "straying", "stray", "stray dog"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "05/03/2025", name: "Sam Coupland" }
);

const reportDogAsLost = new FormPaN(
  "reportDogAsLost",
  "Lost dog",
  "Report a lost dog",
  "report_dog_as_lost",
  {
    type: "Report",
    keywords: [
      "Dog",
      "missing",
      "lost",
      "missing dog",
      "lost dog",
      "dog as missing",
      "dog as lost"
    ],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "05/03/2025", name: "Sam Coupland" }
);

const reportNoise = new FormPaN(
  "reportNoise",
  "Noise",
  "Report noise",
  "report_noise",
  {
    type: "Report",
    keywords: ["Report", "noise"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "05/03/2025", name: "Sam Coupland" }
);

const reportSmoke = new ContentPaN(
  "reportSmoke",
  "Report Smoke",
  "Report Smoke",
  `
  <h3>Commercial</h3>
    <p>
      As this is regarding a commercial premises, I will need to transfer you through to one of my colleagues in Environmental 
      protection services.
      <br>
      <br>

      Telephone:<a> href="tel: 0114 273 4651">0114 273 465</a>
       <a> href="#" class="telephoneNumber" onclick="copyToClipboard('0114 273 4651')">0114 273 465</a>
      <br>
      Email: <a> href="mailto:epsadmin@sheffield.gov.uk">epsadmin@sheffield.gov.uk</a>
    </p>
    

  <h3>Domestic</h3>
    <p>
      Bonfires can be lit at any time of day. <br>
      Bonfires are only considered a nuisance if they are being constantly lit, depending on what is being burned and the way it is burned.
      <br>The thicker and darker the smoke, the more toxic it is.
      <br>
      <br>
More information can be found at  <a href="https://www.gov.uk/garden-bonfires-rules" target="_blank">https://www.gov.uk/garden-bonfires-rules</a>
    </p>

        <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Garden%20bonfire%20rules\`
    "
>
        Send link to review further information
    </button>
   
  `,
  {
    buttonLabel: "Report Smoke",
    formName: "report_smoke",
  },
  { typeKey: "smoke_nuisance_information_requested" },
  { typeKey: "smoke_nuisance_information_provided" },
  {
    type: "Report",
    keywords: ["Report", "noise"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "13/06/2025", name: "Gee Whitehouse" }
);

const animalControl = new ContentPaN(
  "animalControl",
  "Animal Control",
  "Animal control treatments, services and pricing",
  `<p>Animal control deals with the following issues. To report these issue, use the from attached</p>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Abandoned Pets</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Reports of this nature need to go to the RSPCA.</p>
        <p>Please contact the RSPCA on 
        <a href="#" class="telephoneNumber" onclick="copyToClipboard('0300 1234999')">0300 1234999</a> or visit
    <a href="https://www.rspca.org.uk" target="_blank" rel="noopener noreferrer">www.rspca.org.uk </a></p>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Animal Boarding Establishment</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Animal Noise</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Animal welfare on Farms</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Dangerous Wild Animal License</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
</div>
</details>
<details class="accordion">
  <summary class="accordion-header">
    <h3>Dog</h3>
    <div class="accordion-icon"></div>
  </summary>

  <div class="accordion-content">
    <details class="details-accordion">
      <summary>
        Dog - Adoption
      </summary>
      <div class="details-accordion-content">
        <p>
          Our kennel staff are experienced in matching unwanted dogs with new owners. 
          If you feel that you could give a home to a new pet they would like to hear from you. 
          The staff will listen to your preferences and suggest the sort of pet that would suit you best.
           If we have suitable dogs the staff can arrange for you to seem them. 
           Please note that if you are visiting to adopt, you must make an appointment before you visit.
        </p>
        <p>
          If you would like to make an enquiry, please call them on
          
        <a href="#" class="telephoneNumber" onclick="copyToClipboard('0781 7497995')">0781 7497995</a>
        </p>
        <address>
          <strong>Address:</strong><br>
          RSPCA Animal Shelter <br>
          2, Stadium Way <br> 
          S9 3HN
        </address>
        <p>
          <strong><i>Opening hours:</strong>10am to 3pm on Monday, Tuesday, Thursday, Friday and Saturday.</i>
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>
        Dog - Micro-chipping
      </summary>
      <div class="details-accordion-content">
        <p>
          Our kennel staff are experienced in matching unwanted dogs with new owners. 
          If you feel that you could give a home to a new pet they would like to hear from you. 
          The staff will listen to your preferences and suggest the sort of pet that would suit you best.
          If we have suitable dogs the staff can arrange for you to seem them. 
          Please note that if you are visiting to adopt, you must make an appointment before you visit.
        </p>
        <p>
          If you would like to take up this service, please call them on 
          
          <a href="#" class="telephoneNumber" onclick="copyToClipboard('0781 7497995')">0781 7497995</a>.
        </p>
        <address>
          <strong>Address:</strong><br>
          RSPCA Animal Shelter <br>
          2, Stadium Way <br> 
          S9 3HN
        </address>
        <p>
          <strong><i>Opening hours:</strong>10am to 3pm on Monday, Tuesday, Thursday, Friday and Saturday.</i>
        </p>
      </div>
    </details>    

    <details class="details-accordion">
      <summary>
        Dog - Breeding Information
      </summary>
      <div class="details-accordion-content">
        <a href="${window.location.protocol}//${
          window.location.hostname
        }/form/launch/report_animal_control?${
          KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : ""
        }interactionid=${KDF.getParams().interactionid}">
          Raise Animal Control report for Dog Breeding Information
        </a>
      </div>
    </details>       

    <details class="details-accordion">
      <summary>
        Deceased Dog
      </summary>
      <div class="details-accordion-content">
        <a href="${window.location.protocol}//${
          window.location.hostname
        }/form/launch/report_animal_control?${
          KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : ""
        }interactionid=${KDF.getParams().interactionid}">
          Raise Animal Control report and provide us details
        </a>
      </div>
    </details>     

    <details class="details-accordion">
      <summary>
        Dangerous Dog
      </summary>
      <div class="details-accordion-content">
        <a href="${window.location.protocol}//${
          window.location.hostname
        }/form/launch/report_dangerous_dog?${
          KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : ""
        }interactionid=${KDF.getParams().interactionid}">
          Report a dangerous dog
        </a>
      </div>
    </details>

    <details class="details-accordion">
      <summary>
        Dog Fouling
      </summary>
      <div class="details-accordion-content">
        <a href="${window.location.protocol}//${
          window.location.hostname
        }/form/launch/report_dog_fouling?${
          KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : ""
        }interactionid=${KDF.getParams().interactionid}">
          Report a dog fouling
        </a>
      </div>
    </details>     

    <details class="details-accordion">
      <summary>
        Handover Dog to Council
      </summary>
      <div class="details-accordion-content">
        <a href="${window.location.protocol}//${
          window.location.hostname
        }/form/launch/report_dog_handover?${
          KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : ""
        }interactionid=${KDF.getParams().interactionid}">
          Handover Dog to Council
        </a>
      </div>
    </details>       

    <details class="details-accordion">
      <summary>
        Missing or Lost Dog
      </summary>
      <div class="details-accordion-content">
        <a href="${window.location.protocol}//${
          window.location.hostname
        }/form/launch/report_dog_as_lost?${
          KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : ""
        }interactionid=${KDF.getParams().interactionid}">
          Report a Lost or Missing Dog
        </a>
      </div>
    </details>

    <details class="details-accordion">
      <summary>
        Dog Straying
      </summary>
      <div class="details-accordion-content">
        <a href="${window.location.protocol}//${
          window.location.hostname
        }/form/launch/report_straying_dog?${
          KDF.getParams().customerid
          ? `customerid=${KDF.getParams().customerid}&`
          : ""
        }interactionid=${KDF.getParams().interactionid}">
          Report a Straying Dog
        </a>
      </div>
    </details>
  </div>
</details>


<details class="accordion">
    <summary class="accordion-header">
        <h3>Deceased Pet</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <details class="details-accordion">
            <summary>
                Birds
            </summary>
            <div class="details-accordion-content">
                <p>
                    We do not provide a collection service for this animal. We recommend you put the animal inside 2 black bin bags and dispose of it with your general waste.
                </p>
            </div>
        </details>
<details class="details-accordion">
            <summary>
                Mice
            </summary>
            <div class="details-accordion-content">
                <p>
                     We do not provide a collection service for this animal. We recommend you put the animal inside 2 black bin bags and dispose of it with your general waste.
                </p>
            </div>
        </details>
<details class="details-accordion">
            <summary>
                Rats
            </summary>
            <div class="details-accordion-content">
                <p>
                    We do not provide a collection service for this animal. We recommend you put the animal inside 2 black bin bags and dispose of it with your general waste.
                </p>
            </div>
        </details>
<details class="details-accordion">
            <summary>
                Cat
            </summary>
            <div class="details-accordion-content">
                <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
            </div>
        </details>
<details class="details-accordion">
            <summary>
                None of above
            </summary>
            <div class="details-accordion-content">
               <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
            </div>
        </details>
    </div>
</details>    
<details class="accordion">
    <summary class="accordion-header">
        <h3>Dumped Animal Bodies</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Keeping of Animals Advice</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Riding Establishments</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
  <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Performing Animal Licence</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
     <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>
<details class="accordion">
    <summary class="accordion-header">
        <h3>Pet Shops</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <a href="${window.location.protocol}//${
                    window.location.hostname
                    }/form/launch/report_animal_control?${
                    KDF.getParams().customerid
                    ? `customerid=${KDF.getParams().customerid}&`
                     : ""
                    }interactionid=${
                    KDF.getParams().interactionid
                    }">Raise Animal Control report and provide us details</a>
    </div>
</details>

  `,
  {
    buttonLabel: "Raise a Report",
    formName: "report_animal_control",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Treatment","services and prices"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Animal Control",
      "Environmental Health",
    ],
  },
  { date: "21/10/2025", name: "Motolani Akinola" }
);

const abandonedVehicles = new ContentPaN(
  "abandonedVehicles",
  "Abandoned vehicles",
  "Learn how to report an abandoned vehicle and understand the responsibilities of the Council and police in its removal.",
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
    <h3>Police responsibility</h3>
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
    <h3>Our responsibility</h3>
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
  { typeKey: "" },
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
      "vehilce"
    ],
    categories: ["Pollution and Nuisance", "Waste Management"],
  },
  { date: "05/09/2024", name: "Elliott Griffiths" }
);

const reportWaterAndDrainage = new ContentPaN(
  "ReportWaterAndDrainage",
  "Report water and drainage issue",
  "Who to contact for water and drainage issues, depending on the type of property",
  `
  <h4>Commercial Properties</h4>
   <p>
    It is the responsibility of the property owner or tenant to resolve it.
    We advise you to contact a qualified plumber or appropriate contractor to investigate and carry out any necessary repairs.
  </p>
   <h4>Council Housing</h4>
  <p>
    If the issue is taking place within a Council Housing property, call: <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2735555')">0114 2735555</a>
  </p>
   <h4>Housing Association Properties</h4>
   <p>
    If the issue is within a property rented from a housing association, the landlord or housing provider is responsible for resolving the problem.
    We advise you to contact your landlord or housing association directly for further assistance.
  </p>
   <h4>Privately Owned Properties</h4>
  <p>
    If the issue involves any of the following:
  </p>
  <ul>
    <li>Burst pipe</li>
    <li>Blocked drain or sewer</li>
    <li>Sewage affecting multiple properties</li>
    <li>Water in cellar</li>
  </ul>
  <p>
   Contact Yorkshire Water for investigation and support: <a href="#" class="telephoneNumber" onclick="copyToClipboard('0345 1242424')">0345 1242424</a>
  </p>
  <p>
    For other issues related to water or drainage, use the form below to submit the enquiry.
  </p>
  `,
  {
    buttonLabel: "Report water and drainage issue",
    formName: "report_water_drainage",
  },
  { typeKey: "" },
  { typeKey: "water_and_drainage_information_provided" },
  {
    type: "Report",
    keywords: ["Water", "Watr", "Drainage", "Drain", "Drian", "Sewage", "Sewer", "Sewege", "Pipe", "Pipes", "Pip", "Flood", "Flooded", "Fllood", "Cellar", "Basement", "Basment"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "05/08/2025", name: "Andy Walker" }
);

const reportAccumulations = new FormPaN(
  "reportAccumulations",
  "Accumulations",
  "Report an accumulation of dog faeces, domestic waste, non domestic waste, or smoking waste.",
  "report_accumulations",
  {
    type: "Report",
    keywords: [
      "accumulation",
      "accumulations",
      "acumulation",
      "acumulations",
      "dog faeces",
      "dog poo",
      "faeces",
      "waste",
      "smoking"
    ],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "11/11/2025", name: "Liz Taster" }
);

//#region Clean Air Zone

const howAreChargesPaid = new ContentPaN(
  "howAreChargesPaid",
  "How are charges paid",
  "Learn how to pay charges for entering the Clean Air Zone, including payment deadlines and responsibilities for drivers",
  `
<p>Charges will need to be paid online via central government’s online Clean Air Zone payment portal. Payment can be made ahead of entering the zone. Charges must be paid within 7 days of entering the Clean Air Zone. If payments are not made within 7 days additional penalty charges may apply. The link to the payment portal will not be live until the Clean Air Zone is launched.</p>
<p>It will be the responsibility of drivers to go online and make payment. No notifications are issued to drivers.</p>
`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const howLongWillTheCleanAirZoneBeInPlace = new ContentPaN(
  "howLongWillTheCleanAirZoneBeInPlace",
  "How long will the Clean Air Zone be in place",
  "Find out how long the Clean Air Zone will be in place and the available financial support for businesses and residents to upgrade to cleaner vehicles.",
  `
<p>The Clean Air Zone will be in place in Sheffield until the city can provide evidence to the Department for Environment, Food & Rural Affairs (Defra) that it has met and can maintain for a minimum of two years the reduced legal levels of Nitrogen Dioxide (NO2) required. There will be significant monitoring and evaluation of the CAZ to determine this.</p>
<h3>What support will there be for those affected</h3>
<p>Eligible businesses and residents may be able to apply for financial support to upgrade to cleaner vehicles. Financial support will be paid in the form of a grant, an interest-subsidized loan, or a mix of the two. You can apply for financial support to upgrade your non-compliant vehicle at <a href="https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle" target="_blank">https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle</a>.
<br>
 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information environment and countryside"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Environment%20and%20countryside\`
            "
      >
        Send link to review further information
      </button>

</p>
`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const howMuchWillDriversBeCharged = new ContentPaN(
  "howMuchWillDriversBeCharged",
  "How much will drivers be charged",
  "Learn about the daily charges for vehicles entering the Clean Air Zone that do not meet the required environmental standards.",

  `
<p>If your vehicle does not meet the minimum standard, you will have to pay the charge for every day you enter the zone. This would be:</p>
  <ul>
  <li>£10 per day for polluting vans/LGVs and Taxis</li>
  <li>£50 per day for coaches, buses, and lorries/HGVs</li>
  </ul>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const howWillDriversBeCharged = new ContentPaN(
  "howWillDriversBeCharged",
  "How will drivers be charged",
  "Find out how drivers will be charged for entering the Clean Air Zone using ANPR cameras, with charges applied once per day regardless of exits and re-entries.",
  `
<p>Automatic Number Plate Recognition (ANPR) cameras installed across the city centre will detect non-compliant vehicles entering the Clean Air Zone boundary. Charges apply 24 hours a day, seven days a week. The Clean Air Zone charges at a daily rate, meaning drivers will only need to make one payment a day, regardless of how many times they exit and re-enter.</p>
`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const whatIsACleanAirZone = new ContentPaN(
  "whatIsACleanAirZone",
  "What Is A Clean Air Zone",
  "Learn what a Clean Air Zone is, its purpose in reducing air pollution, and which vehicles will be charged for entry in Sheffield.",
  `
<p>
  A Clean Air Zone is a defined area of a town or city within which certain
  vehicles with more polluting engine standards are charged for entering.
</p>
<p>
  It is not a congestion charging zone and, unlike some other cities, privately
  owned cars, motorbikes, and mopeds will not be charged.
</p>
<p>
  The introduction of a Clean Air Zone aims to reduce exposure to nitrogen
  dioxide produced by road traffic to protect public health in areas where
  pollution levels exceed the maximum legal level. In Sheffield, this area
  includes the inner ring road and everything inside it.
</p>
<p>
  See the Clean Air Zone map which may help when explaining the scheme to
  customers:
</p>
<iframe
  src="https://sheffieldcc.maps.arcgis.com/apps/webappviewer/index.html?id=209bfe53e5b34c06878e0f0d6c39ee88"
  style="height: 400px; width: 100%"
>
</iframe>
`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const whatSupportWillThereBeForThoseAffected = new ContentPaN(
  "whatSupportWillThereBeForThoseAffected",
  "What support will there be for those affected",
  "Discover the financial support available for businesses and residents to upgrade to cleaner vehicles, including grants and interest-subsidized loans.",
  `
<p>Eligible businesses and residents may be able to apply for financial support to upgrade to cleaner vehicles. Financial support will be paid in the form of a grant, an interest-subsidized loan, or a mix of the two. You can apply for financial support to upgrade your non-compliant vehicle at <a href="https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle" target="_blank">https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle</a>.
<br>
 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to Apply for financial support to upgrade or replace a polluting vehicle"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20financial%20support%20to%20upgrade%20or%20replace%20a%20polluting%20vehicle\`
            "
      >
        Send link to review further information
      </button>

</p>
`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const whatVehiclesWillBeCharged = new ContentPaN(
  "whatVehiclesWillBeCharged",
  "What vehicles will be charged",
  "Find out which vehicle types will be charged in Sheffield's Clean Air Zone, based on their engine standards, and how to check your vehicle’s eligibility.",

  `
<p>Only specific vehicle types with the most polluting engine standards will be charged for entering the Clean Air Zone. Private cars, motorbikes, or mopeds will not be charged for traveling in Sheffield.</p>
<p>Charges apply to the following vehicle types that do not meet the minimum standards when entering the Clean Air Zone boundary:</p>
  <ul>
  <li>Taxis, including both hackney carriages and private hire vehicles, which are below Euro 6 Diesel or Euro 4 Petrol standards</li>
  <li>Light goods vehicles (LGVs) such as vans, campervans, pickup trucks, and minibuses which are below Euro 6 Diesel or Euro 4 Petrol standards</li>
  <li>Buses and coaches which are below Euro 6 Diesel standards</li>
  <li>Heavy goods vehicles (HGVs) which are below Euro 6 Diesel standards</li>
  </ul>
  <p>
    Vehicle owners can check whether they will be charged in Sheffield, and for other Clean Air Zones elsewhere, via the government’s online vehicle checker: Clean Air Zones.
  </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const whyIsACleanAirZoneBeingIntroduced = new ContentPaN(
  "whyIsACleanAirZoneBeingIntroduced",
  "Why Is A Clean Air Zone Being Introduced",
  "Learn about the legal directive behind Sheffield's Category C Clean Air Zone, its aim to reduce Nitrogen Dioxide levels, and the health impacts of air pollution.",

  `
<p>The implementation of the Category C Clean Air Zone in Sheffield is the result of a legal directive from national government requiring Nitrogen Dioxide (NO2) levels to be reduced to legal levels at locations across Sheffield and Rotherham within the shortest possible time.</p>
<p>The primary aim of Clean Air Zones is to protect the public from exposure to Nitrogen Dioxide (NO2) emissions from road traffic. Air pollution can permanently damage children's lungs, can cause strokes, lung cancer and cardiovascular disease. Find out the health impacts from air pollution at <a href="https://www.gov.uk/government/publications/health-matters-air-pollution" target="_blank">https://www.gov.uk/government/publications/health-matters-air-pollution</a>.
<br>

 <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information about Health matters: air pollution"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Health%20matters%20air%20pollution\`
            "
      >
        Send link to review further information
      </button>


</p>
<p>A number of other local authorities across the UK have also been legally directed to introduce Clean Air Zones - not only Sheffield.</p>
<p>We have worked with DEFRA’s Joint Air Quality Unit (JAQU) to form a plan to reduce annual average concentrations of Nitrogen Dioxide (NO2) in Sheffield. The Clean Air Zone is focused around the city center where some of the most polluted locations are, but it will deliver air quality below the legal limit of 40µg/m<sup>3</sup> across the whole of the city.</p>
`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "caz_information_requested" },
  { typeKey: "caz_information_provided" },
  {
    type: "Information",
    keywords: ["Clean Air Zone", "caz", "cean air zone", "zon", "cza"],
    categories: ["Parking", "Pollution and Nuisance"],
  },
  { date: "06/11/2024", name: "Dinah Williams" }
);

const cleanAirZone = new MenuPaN(
  "cleanAirZone",
  "Clean Air Zone",
  "Information about the Clean Air Zone Scheme",
  [
    whatIsACleanAirZone,
    whyIsACleanAirZoneBeingIntroduced,
    whatVehiclesWillBeCharged,
    howMuchWillDriversBeCharged,
    howWillDriversBeCharged,
    howAreChargesPaid,
    howLongWillTheCleanAirZoneBeInPlace,
    whatSupportWillThereBeForThoseAffected
  ]
);

//#endregion Clean Air Zone

//#region Environmental Services

const contaminatedLand = new ContentPaD(
  "contaminatedLand",
  "Contaminated Land",
  "Information about contaminated land, developing affected sites, planning application requirements, environmental searches and the contaminated land register.",
  `
  <p>
    The Environmental Protection Service helps manage risks from contaminated land in Sheffield. Contamination can affect people, property and the environment, particularly when land is developed, bought or sold.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Causes and Risks of Contamination</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Land may be contaminated because of:
      </p>
      <ul>
        <li>Previous industrial use, including factories, mines and quarries</li>
        <li>Demolition waste or contaminated materials used as infill</li>
        <li>Former landfill sites</li>
        <li>Naturally occurring substances at high levels</li>
      </ul>
      <p>
        Many potentially contaminated sites can still be developed safely if the risks are properly assessed and the land is cleaned up or protected.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Developing a Site</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you are developing a site, you are responsible for identifying and managing any contamination risks.
      </p>
      <p>
        Depending on the proposed development and the site's previous use, you may need to provide:
      </p>
      <ul>
        <li>A contaminated land risk assessment</li>
        <li>Details of any necessary remediation work</li>
        <li>Evidence confirming that remediation has been completed</li>
        <li>Details of gas protection or cover systems</li>
      </ul>
      <p>
        The developer is responsible for ensuring that the land is safe and suitable for its intended use.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Submitting a Planning Application</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        When applying to develop potentially contaminated land, you must:
      </p>
      <ul>
        <li>Correctly complete the question about the site's existing use</li>
        <li>Submit the required remediation and verification information</li>
        <li>Raise potential contamination issues as early as possible</li>
        <li>Provide evidence that the site will be safe for its proposed use</li>
      </ul>
      <p>
        Information about remediation measures should also be retained with the property records, particularly where gas protection or cover systems have been installed.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Environmental Searches and Enquiries</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Environmental searches are often completed when residential or commercial property is bought or sold. Charges normally apply for searches and enquiries.
      </p>
      <p>
        To submit an environmental search or enquiry, contact:
      </p>
      <p>
        <strong>Email:</strong><br>
        <a href="mailto:epsadmin@sheffield.gov.uk">
          epsadmin@sheffield.gov.uk
        </a>
      </p>
      <p>
        You should include a plan clearly showing the boundary of the site.
      </p>
      <p>
        The Council cannot guarantee that land will never be classified as contaminated, as new information may become available or environmental legislation may change.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Site Inspections and the Contaminated Land Register</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The Council investigates land where historical contamination may present a significant risk to people or the environment.
      </p>
      <p>
        The contaminated land register records sites where formal remediation action has been taken. It does not contain details of every potentially contaminated site in Sheffield.
      </p>
      <p>
        A property not appearing on the contaminated land register does not confirm that the land is free from contamination.
      </p>
    </div>
  </details>

  <h3>Further Information</h3>
  <p>
    For further information about contaminated land, environmental searches and developing potentially contaminated sites, visit:
    <a href="https://www.sheffield.gov.uk/pollution-nuisance/contaminated-land" target="_blank" rel="noopener noreferrer">
      Contaminated Land | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Contaminated%20land\`
    "
  >
    Send link to review further information
  </button>

  <h3>Key Information for Call Centre Staff</h3>
    <ul>
    <li>Developers are responsible for identifying and managing contamination risks</li>
    <li>Planning applications may require a risk assessment and evidence that the site is safe</li>
    <li>Environmental search requests must include a site boundary plan and be emailed to <strong>epsadmin@sheffield.gov.uk</strong></li>
    <li>The contaminated land register does not include every potentially contaminated site in Sheffield</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Information",
    keywords: [
      "contaminated land",
      "land contamination",
      "contaminated site",
      "environmental search",
      "contamination risk assessment",
      "land remediation",
      "contaminated land register",
      "gas protection system",
      "former landfill",
      "industrial land",
      "property contamination",
      "contaminated lad"
    ],
    categories: ["Environmental Regulations", "Contaminated Land"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const statutoryNuisanceFromCommercialPremises = new ContentPaD(
  "statutoryNuisanceFromCommercialPremises",
  "Statutory Nuisance from Commercial Premises",
  "Information about statutory nuisance complaints involving businesses and commercial premises, including how complaints are assessed and investigated.",
  `
  <p>
    The Environmental Protection Service investigates complaints about businesses and commercial premises that may cause a statutory nuisance.
  </p>
  <p>
    A statutory nuisance is more than a minor inconvenience or everyday annoyance. The issue must unreasonably and substantially interfere with the use or enjoyment of a home or be likely to affect someone's health.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Issues That May Be Investigated</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The Council may investigate:</p>
      <ul>
        <li>Noise from commercial or industrial premises</li>
        <li>Smoke, fumes, gases, dust, steam or strong smells</li>
        <li>Artificial light affecting nearby properties</li>
        <li>Accumulations of waste or other deposits</li>
        <li>Animals or insects associated with commercial premises</li>
        <li>Noise from machinery, equipment or vehicles being used in the street, excluding normal traffic noise</li>
      </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How a Complaint Is Assessed</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Each complaint is assessed individually. Officers may consider:</p>
      <ul>
        <li>How severely the issue affects the use or enjoyment of a home</li>
        <li>How often it happens and how long it lasts</li>
        <li>The time of day or night</li>
        <li>The character of the surrounding area</li>
        <li>Whether the activity provides an essential public benefit</li>
        <li>Whether the business is taking reasonable steps to prevent or reduce the impact</li>
      </ul>
      <p>
        Something being noticeable or annoying does not automatically make it a statutory nuisance.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Examples of Statutory Nuisance</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Issues that may be a statutory nuisance include:</p>
      <ul>
        <li>Repeated loud music or disturbance from licensed premises</li>
        <li>Intrusive noise from faulty or poorly installed business equipment</li>
        <li>Strong smells caused by inadequate extraction or ventilation</li>
        <li>Commercial smoke entering nearby homes</li>
        <li>Artificial light shining into a home and disrupting sleep</li>
      </ul>
      <p>Issues that may not be a statutory nuisance include:</p>
      <ul>
        <li>Normal traffic noise</li>
        <li>Emergency work to essential services</li>
        <li>Occasional events that finish at a reasonable time</li>
        <li>Construction or demolition during accepted working hours where reasonable controls are used</li>
        <li>Minor smells, smoke, dust or noise where suitable control measures are in place</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Construction and Demolition Hours</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The usual working hours for commercial construction and demolition are:
      </p>
      <ul>
        <li>Monday to Friday: 7:30am to 6pm</li>
        <li>Saturday: 8am to 1pm</li>
        <li>Sunday and public holidays: no working</li>
      </ul>
      <p>
        Different hours may sometimes be agreed in advance, and emergency work may need to take place outside these times.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>How Complaints Are Investigated</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Officers may:</p>
      <ul>
        <li>Contact the person reporting the issue and the business involved</li>
        <li>Ask for diary sheets or records of when the problem occurs</li>
        <li>Visit the affected property or commercial premises</li>
        <li>Check planning conditions, licences or environmental permits</li>
        <li>Use noise recording or other measuring equipment</li>
        <li>Consider evidence from other organisations</li>
      </ul>
      <p>
        The Council must gather enough evidence before it can decide whether a statutory nuisance exists. Not every reported issue will meet the legal threshold for formal action.
      </p>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>A statutory nuisance must substantially interfere with the use of a home or be likely to affect someone's health</li>
    <li>Complaints are assessed based on their impact, frequency, duration and the time they occur</li>
    <li>Customers may be asked to complete diary sheets or provide other evidence</li>
    <li>Not every reported issue will meet the legal threshold for formal action</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Information",
    keywords: [
      "statutory nuisance",
      "commercial nuisance",
      "business noise",
      "commercial noise",
      "smoke nuisance",
      "smell nuisance",
      "artificial light nuisance",
      "construction noise",
      "demolition noise",
      "commercial premises complaint",
      "noise diary",
      "statutory nuissance"
    ],
    categories: ["Environmental Regulations", "Statutory Nuisance"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const highHedges = new ContentPaD(
  "highHedges",
  "High Hedges",
  "Information about resolving high hedge disputes, making a complaint, fees, Council action and appealing a decision.",
  `
  <p>
    The Anti-Social Behaviour Act 2003 allows the Council to investigate complaints about excessively high evergreen or semi-evergreen hedges.
  </p>
  <p>
    Before making a complaint, you must first take reasonable steps to resolve the issue directly with the hedge owner. Making a complaint to the Council should be a last resort.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before Making a Complaint</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You should try to resolve the issue by:</p>
      <ul>
        <li>Speaking to the hedge owner about the problem</li>
        <li>Sending at least two letters within a six-month period</li>
        <li>Considering mediation</li>
        <li>Keeping copies of letters, replies and details of other attempts to resolve the dispute</li>
      </ul>
      <p>
        You will need to provide evidence that you have taken reasonable steps to resolve the issue before the Council can accept your complaint.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Making a Complaint</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If your attempts to resolve the issue have been unsuccessful, you can submit a complaint to the Council.
      </p>
      <p>You will need to provide:</p>
      <ul>
        <li>The appropriate fee</li>
        <li>Photographs of the hedge</li>
        <li>Copies of property deed plans showing boundary lines</li>
        <li>Evidence of your attempts to resolve the issue</li>
        <li>A location plan showing the hedge and affected properties, with measurements in metres</li>
      </ul>
      <p>
        You must also send a copy of the completed complaint form to the hedge owner.
      </p>
      <p>
        For guidance, fees and details of how to make a complaint, visit:
        <a href="https://www.sheffield.gov.uk/pollution-nuisance/high-hedges" target="_blank" rel="noopener noreferrer">
          High Hedges | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=High%20hedges\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Happens After a Complaint</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The Council does not mediate or negotiate between neighbours. Its role is to assess whether the hedge is adversely affecting the reasonable enjoyment of the complainant's property.
      </p>
      <p>
        Accepting a complaint does not guarantee that action will be taken. The Council will assess the hedge and may carry out a detailed calculation of its effect on light.
      </p>
      <p>Following the assessment, the Council may:</p>
      <ul>
        <li>Dismiss the complaint</li>
        <li>Issue a Remedial Notice requiring the hedge owner to reduce and maintain the hedge at a specified height</li>
      </ul>
      <p>
        Failure to comply with a Remedial Notice is an offence and may result in prosecution and a fine.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Fees</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The current fees are:</p>
      <ul>
        <li>£450 full fee</li>
        <li>£75 discounted fee for eligible customers receiving Housing Benefit or means-tested Jobseeker's Allowance</li>
      </ul>
      <p>
        Evidence of benefit entitlement must be provided to receive the discounted fee.
      </p>
      <p>
        The fee covers administration and assessment of the hedge. It may not be refunded if the hedge is not considered actionable.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Appealing a Decision</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The complainant, hedge owner or occupier may have a right to appeal certain decisions, including the issue, withdrawal or amendment of a Remedial Notice.
      </p>
      <p>
        An appeal must be submitted to the Planning Inspectorate, with a copy sent to the Council, within 28 days of the relevant decision or notice.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Grounds for a Complaint</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A complaint can only be accepted if the hedge meets the legal definition of a high hedge and you have taken sufficient steps to resolve the matter with the hedge owner.
      </p>
      <p>
        The Council's guidance includes a checklist to help you determine whether your complaint is likely to meet the required criteria.
      </p>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>You must try to resolve the dispute with the hedge owner before contacting the Council</li>
    <li>A fee and evidence of your attempts to resolve the issue must accompany the complaint</li>
    <li>Accepting a complaint does not guarantee that the Council will take action</li>
    <li>Appeals must normally be submitted within 28 days of the decision or notice</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Information",
    keywords: [
      "high hedges",
      "high hedge complaint",
      "hedge dispute",
      "neighbour hedge",
      "evergreen hedge",
      "semi-evergreen hedge",
      "Remedial Notice",
      "high hedge fee",
      "hedge mediation",
      "appeal hedge decision",
      "overgrown hedge",
      "high hedge complant"
    ],
    categories: ["Environmental Regulations", "High Hedges"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const statutoryNuisanceFromDomesticProperties = new ContentPaD(
  "statutoryNuisanceFromDomesticProperties",
  "Statutory Nuisance from Domestic Properties",
  "Information about reporting a statutory nuisance from a domestic property, how complaints are investigated and the action the Council may take.",
  `
  <p>
    A statutory nuisance from a domestic property is an issue that unreasonably and substantially interferes with the use or enjoyment of another home, or which could harm someone's health.
  </p>
  <p>
    Something that is annoying or inconvenient will not always meet the legal definition of a statutory nuisance.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before You Report</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Where possible and safe to do so, you should speak to the neighbour or property owner first to try to resolve the problem.
      </p>
      <p>
        If the issue cannot be resolved, or contacting them is not appropriate, you can report it to the Private Housing Standards team.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Information You Will Need</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>When reporting a nuisance, you will be asked for:</p>
      <ul>
        <li>The address of the property causing the problem</li>
        <li>Details of the issue and how it affects you</li>
      </ul>
      <p>
        You will not be identified as the complainant, although the nature of the complaint may make it apparent who reported the issue.
      </p>
      <p>
        You must also be prepared to attend court if this is required.
      </p>
      <p>
        <strong>Report a nuisance from a neighbouring property:</strong><br>
        <a href="https://www.sheffield.gov.uk/housing/private-housing-issues/report-nuisance-disrepair-neighbouring-properties" target="_blank" rel="noopener noreferrer">
          Report Nuisance or Disrepair from a Neighbouring Property | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20nuisance%20or%20disrepair%20from%20a%20neighbouring%20property\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>How Complaints Are Investigated</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The Council will assess the information provided and investigate where appropriate.
      </p>
      <p>
        Officers must obtain enough evidence to establish that a statutory nuisance exists. This may require them to witness and experience the issue being reported.
      </p>
      <p>
        Not every complaint will meet the legal threshold for formal action.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>If a Statutory Nuisance Is Found</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If a statutory nuisance exists, or is likely to occur or happen again, the Council may serve an abatement notice. This will explain what must be done to stop or restrict the nuisance.
      </p>
      <p>
        Failing to comply with an abatement notice without a reasonable excuse is a criminal offence and may result in prosecution and a fine.
      </p>
      <p>
        The Council may also carry out work to address the nuisance and recover the costs from the person responsible.
      </p>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Customers should try to resolve the issue directly where it is safe and appropriate to do so</li>
    <li>The Council needs evidence before it can confirm that a statutory nuisance exists</li>
    <li>Not every annoyance or inconvenience will meet the legal threshold for action</li>
    <li>An abatement notice may be served where a statutory nuisance is established</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Report",
    keywords: [
      "statutory nuisance",
      "domestic nuisance",
      "neighbour nuisance",
      "private housing nuisance",
      "report a nuisance",
      "neighbouring property",
      "abatement notice",
      "nuisance complaint",
      "property nuisance",
      "domestic property complaint",
      "statutory nuissance",
      "neighbour complaint"
    ],
    categories: ["Environmental Regulations", "Statutory Nuisance"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const landAndPropertySearches = new ContentPaD(
  "landAndPropertySearches",
  "Land and Property Searches",
  "Information about Local Land Charges and Local Authority Searches, including what searches contain, how to request a search and applicable fees.",
  `
  <p>
    A Local Land Charge is a restriction or legal obligation affecting a particular piece of land or property. Local Authority Searches are commonly required when buying or selling property as part of the conveyancing process.
  </p>
  <p>
    For further information about Land and Property Searches, visit:
    <a href="https://www.sheffield.gov.uk/your-city-council/legal-services/local-land-charges" target="_blank" rel="noopener noreferrer">
      Land and Property Searches | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Land%20and%20property%20searches\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What a Local Authority Search Includes</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A search can identify matters affecting a property or piece of land, including:
      </p>
      <ul>
        <li>Charges relating to services such as roads</li>
        <li>Tree Preservation Orders</li>
        <li>Planning permissions and conditions</li>
        <li>Conservation area restrictions</li>
        <li>Legal agreements</li>
        <li>Listed building status</li>
      </ul>
      <p>
        This information helps buyers and their solicitors understand any restrictions, responsibilities or financial obligations before completing a purchase.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Requesting a Search</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A Local Authority Search can be requested:
      </p>
      <ul>
        <li>By email</li>
        <li>By post</li>
        <li>Through a solicitor or another search provider</li>
      </ul>
      <p>
        You can also carry out your own enquiries using the questions on the standard CON29 form.
      </p>
      <p>
        For information about carrying out your own enquiries, contact:
      </p>
      <p>
        <strong>Email:</strong><br>
        <a href="mailto:foi@sheffield.gov.uk">
          foi@sheffield.gov.uk
        </a>
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Fees</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The current fees are:
      </p>
      <ul>
        <li>LLC1: £45.10, plus £1.40 for each additional parcel</li>
        <li>Personal search: free</li>
        <li>CON29R component data: minimum administration charge of £16.62, plus the cost of individual questions and VAT</li>
        <li>CON29O: £11.75 plus VAT, £14.10 in total</li>
        <li>Full CON29R: £78.10, plus £14.25 for each additional parcel and VAT</li>
      </ul>
      <p>
        Annual information about Local Land Charges fees and finances is published by the Council.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Other Search Providers</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Property searches can also be obtained through third-party providers.
      </p>
      <p>
        <strong>National Land Information Service:</strong><br>
        <a href="https://www.nlis.org.uk/buying-nlis-searches" target="_blank" rel="noopener noreferrer">
          Buy an NLIS Search | National Land Information Service
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=National%20Land%20Information%20Service\`
        "
      >
        Send link to review further information
      </button>

      <p>
        <strong>Commercial land and estate searches:</strong><br>
        <a href="https://www.tmgroup.co.uk/commercial/searches-property-data/commercial-land-and-estate-searches/" target="_blank" rel="noopener noreferrer">
          Commercial Land and Estate Searches | TM Group
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Commercial%20land%20and%20estate%20searches\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Local Authority Searches are commonly required when <strong>buying or selling a property</strong>.</li>
    <li>Searches can identify <strong>restrictions, responsibilities and financial obligations</strong> affecting land or property.</li>
    <li>Customers can request a search directly or through a <strong>solicitor or search provider</strong>.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Information",
    keywords: [
      "land and property searches",
      "Local Land Charges",
      "Local Authority Search",
      "property search",
      "land search",
      "conveyancing search",
      "LLC1",
      "CON29R",
      "CON29O",
      "personal search",
      "property purchase",
      "land serch"
    ],
    categories: ["Environmental Regulations", "Land and Property Searches"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const burglarAlarmsAndCarAlarms = new ContentPaD(
  "burglarAlarmsAndCarAlarms",
  "Burglar Alarms and Car Alarms",
  "Information about reporting noisy burglar and car alarms, registering a key-holder and what to do if a fire alarm is sounding.",
  `
  <p>
    If a car or burglar alarm is sounding and the owner is unavailable, you can report it to the Council. The Council has legal powers to silence an alarm if it continues to cause a noise nuisance.
  </p>
  <p>
    <strong>Report noise nuisance:</strong><br>
    https://forms.sheffield.gov.uk/site/portal/form/report_noise
      Report Noise Nuisance | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20noise%20nuisance\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>If the Council Silences an Alarm</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If the Council needs to change a lock to silence an alarm, the owner will be told how to collect the new keys.
      </p>
      <p>
        Valid identification and proof of property ownership or tenancy will be required.
      </p>
      <p>
        The Council may recover the costs of silencing the alarm from the owner.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Register a Key-holder</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can register a key-holder with the Alarm Registration Service. The Council can then contact them if a complaint is received about your alarm.
      </p>
      <p>
        <strong>Register a key-holder:</strong><br>
        <a href="https://www.sheffield.gov.uk/pollution-nuisance/alarms" target="_blank" rel="noopener noreferrer">
          Burglar Alarms and Car Alarms | Sheffield City Council
        </a>
      </p>

      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Burglar%20alarms%20and%20car%20alarms\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <section class="alert-panel" role="alert" aria-label="Emergency information">
    <h3>Fire Alarms</h3>
    <p>
      If a fire alarm is sounding, call <strong>999</strong>.
    </p>
  </section>

  <h3>Key Information</h3>
  <ul>
    <li>A sounding car or burglar alarm can be reported if the owner is unavailable</li>
    <li>The Council may silence an alarm that continues to cause a noise nuisance</li>
    <li>The alarm owner may be charged for the cost of silencing it</li>
    <li>If a fire alarm is sounding, call <strong>999</strong></li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Report",
    keywords: [
      "burglar alarm",
      "car alarm",
      "sounding alarm",
      "noisy alarm",
      "report alarm",
      "noise nuisance",
      "silence an alarm",
      "alarm key-holder",
      "alarm registration",
      "fire alarm",
      "burgler alarm",
      "car alerm"
    ],
    categories: ["Environmental Regulations", "Noise Nuisance"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const animalWelfareLicences = new ContentPaD(
  "animalWelfareLicences",
  "Animal Welfare Licences",
  "Information about animal welfare licensing requirements, applications, inspections, licence ratings, fees and relevant guidance.",
  `
  <p>
    You need an animal welfare licence if you operate any of the following activities as a business in Sheffield:
  </p>
  <ul>
    <li>Boarding or providing day care for cats or dogs</li>
    <li>Breeding dogs</li>
    <li>Hiring out horses or other animals for riding</li>
    <li>Keeping or training animals for exhibition</li>
    <li>Selling animals as pets</li>
  </ul>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Applying for a Licence</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        After you apply, the Environmental Protection Service will arrange an inspection of the premises to check that the relevant licence conditions and animal welfare standards are met.
      </p>
      <p>
        Operating without the required licence or failing to meet licence conditions may result in enforcement action.
      </p>
      <p>
        <strong>Apply for an animal welfare licence:</strong><br>
        <a href="https://www.sheffield.gov.uk/licences-permits-registrations/animal-welfare-licencing/animal-welfare-licences" target="_blank" rel="noopener noreferrer">
          Animal Welfare Licences | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Animal%20Welfare%20Licences\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Licence Ratings</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Most licensed premises receive a star rating from 1 to 5 following inspection. The rating reflects welfare standards and risk and may affect the length of the licence and how frequently inspections are carried out.
      </p>
      <p>
        Licences for keeping or training animals for exhibition are normally issued for three years.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Fees</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Application fees vary depending on the type and scale of the activity.
      </p>
      <p>
        The relevant fee will be confirmed when you apply and covers application processing, inspections, issuing the licence and enforcement.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Further Guidance</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You should review the licensing guidance and regulations before applying to ensure your business can meet the required standards.
      </p>
      <p>
        <strong>Animal activities licensing guidance:</strong><br>
        https://www.gov.uk/government/publications/animal-activities-licensing-guidance-for-local-authorities
          Animal Activities Licensing Guidance | GOV.UK
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Animal%20activities%20licensing%20guidance\`
        "
      >
        Send link to review further information
      </button>

      <p>
        <strong>Animal Welfare Regulations:</strong><br>
        https://www.legislation.gov.uk/ukdsi/2018/9780111165485
          Animal Welfare Regulations | Legislation.gov.uk
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Animal%20Welfare%20Regulations\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Both the business activity and premises must meet the relevant animal welfare standards</li>
    <li>An inspection will be arranged after an application is submitted</li>
    <li>Fees vary depending on the type and scale of the activity</li>
    <li>Operating without the required licence may result in enforcement action</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Application",
    keywords: [
      "animal welfare licence",
      "animal boarding licence",
      "dog day care licence",
      "dog breeding licence",
      "selling animals as pets",
      "hiring out horses",
      "animals for exhibition",
      "animal licence inspection",
      "animal licence rating",
      "animal licensing fees",
      "animal welfare regulations",
      "animal welfare license"
    ],
    categories: ["Environmental Regulations", "Animal Welfare"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const dogFoulEnviroReg = new ContentPaD(
  "dogFoulEnviroReg",
  "Dog Fouling",
  "Information about reporting dog fouling, the details required, possible penalties and helping to keep Sheffield clean.",
  `
  <p>
    You can report dog fouling on roads, pavements, housing estates and in parks. Reports help the Council identify problem areas and take action where offenders can be identified.
  </p>
  <p>
    <strong>Report dog fouling:</strong><br>
    <a href="https://forms.sheffield.gov.uk/site/portal/form/report_dog_fouling" target="_blank" rel="noopener noreferrer">
      Report Dog Fouling | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20dog%20fouling\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Reporting an Incident</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        When reporting dog fouling you have witnessed, provide as much information as possible, including:
      </p>
      <ul>
        <li>The date, time and location</li>
        <li>A description of the person responsible</li>
        <li>A description of the dog</li>
        <li>Vehicle details, if relevant</li>
        <li>How clearly you witnessed the incident</li>
      </ul>
      <p>
        You may be asked to provide a statement if formal action is considered.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Penalties</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Dog owners must clean up immediately after their dog in public places. Failure to do so could result in:
      </p>
      <ul>
        <li>A £50 fixed penalty</li>
        <li>Prosecution and a fine of up to £1,000</li>
      </ul>
      <p>
        Further information about dog fouling and the responsibilities of dog owners is available here:
        <a href="https://www.sheffield.gov.uk/pollution-nuisance/animals/dog-fouling" target="_blank" rel="noopener noreferrer">
          Dog Fouling | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Dog%20fouling\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Helping Keep Sheffield Clean</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can also help keep your local area clean by joining or organising a community litter pick or supporting a local Friends Of group.
      </p>
      <p>
        <strong>Organise a litter pick:</strong><br>
        https://www.sheffield.gov.uk/pollution-nuisance/organise-litter-picks
          Organise a Litter Pick | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Organise%20a%20litter%20pick\`
        "
      >
        Send link to review further information
      </button>

      <p>
        <strong>Find a Friends Of group:</strong><br>
        https://www.sheffield.gov.uk/parks-sport-recreation/friends-of-groups
          Friends Of Groups | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Friends%20Of%20groups\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Dog fouling can be reported on roads, pavements, housing estates and in parks</li>
    <li>Reports should include the location, date, time and descriptions of those involved</li>
    <li>Customers may be asked to provide a statement if formal action is considered</li>
    <li>Failing to clean up after a dog may result in a fixed penalty or prosecution</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Report",
    keywords: [
      "dog fouling",
      "report dog fouling",
      "dog mess",
      "dog waste",
      "dog fouling complaint",
      "dog fouling penalty",
      "fixed penalty",
      "public place",
      "litter pick",
      "Friends Of group",
      "dog fowling",
      "dog foaling"
    ],
    categories: ["Environmental Regulations", "Animals"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const lostOrFoundDogs = new ContentPaD(
  "lostOrFoundDogs",
  "Lost or Found Dogs",
  "Information about reporting a lost or found dog, contacting the Council kennels and reclaiming an impounded dog.",
  `
  <p>
    If you have lost or found a dog in Sheffield, contact the Council so the details can be added to the lost and found dog register.
  </p>
  <p>
    <strong>Report a lost dog:</strong><br>
    <a href="https://forms.sheffield.gov.uk/site/portal/form/report_dog_as_lost" target="_blank" rel="noopener noreferrer">
      Report a Lost Dog | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20a%20lost%20dog\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>If You Find a Stray Dog</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You should:</p>
      <ul>
        <li>Return the dog to its owner, if possible</li>
        <li>Contact the Council to arrange collection</li>
        <li>Take the dog to the Council kennels during opening hours</li>
      </ul>
      <p>
        If you want to look after the dog temporarily, you must contact the Council for advice.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>If You Have Lost Your Dog</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Contact the Council to check whether your dog has been found, seen or taken to the kennels.
      </p>
      <p>
        <strong>Kennels telephone:</strong><br>
        tel:07817497995
          07817 497 995
        </a>
      </p>
      <p>
        Further information about lost and found dogs is available here:
        <a href="https://www.sheffield.gov.uk/pollution-nuisance/animals/lost-or-found-dogs" target="_blank" rel="noopener noreferrer">
          Lost or Found Dogs | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Lost%20or%20found%20dogs\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Council Kennels</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <strong>Address:</strong><br>
        RSPCA Animal Shelter<br>
        2 Stadium Way<br>
        Sheffield<br>
        S9 3HN
      </p>
      <p>
        <strong>Opening hours:</strong><br>
        Monday to Friday, 8:30am to 4:30pm
      </p>
      <p>
        Appointments for reclaiming or adopting dogs are normally available between 10am and 3pm.
      </p>
      <p>
        If reception is closed, call 07817 497 995 between 8am and 5pm.
      </p>
      <p>
        Only card payments are accepted.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Reclaiming a Dog</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>If your dog has been impounded, you will need to pay:</p>
      <ul>
        <li>£69.55 for the first two days</li>
        <li>£17.65 for each additional day</li>
        <li>Any veterinary treatment costs</li>
      </ul>
      <p>
        If the dog is not reclaimed within seven days, it becomes the Council's property and may be made available for adoption.
      </p>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Lost and found dogs should be reported to the Council</li>
    <li>Call the kennels on <strong>07817 497 995</strong> to check whether a dog has been found or impounded</li>
    <li>Charges and veterinary costs may apply when reclaiming a dog</li>
    <li>An unclaimed dog becomes the Council's property after seven days</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Report",
    keywords: [
      "lost dog",
      "found dog",
      "stray dog",
      "report lost dog",
      "report found dog",
      "Council kennels",
      "reclaim a dog",
      "impounded dog",
      "dog warden",
      "RSPCA Animal Shelter",
      "missing dog",
      "lost or found dogs"
    ],
    categories: ["Environmental Regulations", "Animals"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const temporaryCareOfAnimals = new ContentPaD(
  "temporaryCareOfAnimals",
  "Temporary Care of Animals",
  "Information about temporary care for pets when their owner is admitted to hospital or moves into residential care and cannot make other suitable arrangements.",
  `
  <p>
    Sheffield City Council may arrange temporary care for pets when their owner is admitted to hospital or moves into residential care and cannot make other suitable arrangements.
  </p>

  <h3>Support Available</h3>
  <p>
    Temporary support may include:
  </p>
  <ul>
    <li>Caring for a pet while its owner is in hospital or residential care</li>
    <li>Arranging temporary accommodation until the pet can safely return home</li>
    <li>Managing stray animals and providing dog warden services</li>
  </ul>
  <p>
    Care may be provided through the RSPCA Sheffield Animal Shelter.
  </p>

  <h3>Location</h3>
  <p>
    <strong>RSPCA Sheffield Animal Shelter</strong><br>
    2 Stadium Way<br>
    Attercliffe<br>
    Sheffield
  </p>

  <h3>Request Support</h3>
  <p>
    Contact Sheffield City Council if you need temporary care for a pet or advice about animal welfare services.
  </p>
  <p>
    <strong>Animal services:</strong><br>
    <a href="https://www.sheffield.gov.uk/pollution-nuisance/animals" target="_blank" rel="noopener noreferrer">
      Animal Services | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Animal%20services\`
    "
  >
    Send link to review further information
  </button>

  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Temporary care may be available when a pet owner is <strong>admitted to hospital or moves into residential care</strong>.</li>
    <li>Support applies when the owner <strong>cannot make other suitable arrangements</strong> for their pet.</li>
    <li>Customers should contact <strong>Animal Services</strong> to request support or advice.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Information",
    keywords: [
      "temporary care of animals",
      "temporary pet care",
      "pet owner in hospital",
      "residential care",
      "animal welfare",
      "stray animals",
      "dog warden",
      "RSPCA Sheffield",
      "animal shelter",
      "animal services",
      "care for pets",
      "temporary animal care"
    ],
    categories: ["Environmental Regulations", "Animals"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const flyTippingAndWasteDisposal = new ContentPaD(
  "flyTippingAndWasteDisposal",
  "Fly-Tipping and Waste Disposal",
  "Information about disposing of household waste legally, using registered waste carriers, reporting fly-tipping and clearing waste from private land.",
  `
  <p>
    You are responsible for ensuring that your household waste is disposed of legally. If waste from your property is fly-tipped, you could be investigated if you did not take reasonable steps to check who collected it.
  </p>
  <p>
    For further information about fly-tipping and disposing of waste legally, visit:
    <a href="https://www.sheffield.gov.uk/pollution-nuisance/fly-tipping-and-litter" target="_blank" rel="noopener noreferrer">
      Fly-Tipping and Litter | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Fly-tipping%20and%20litter\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Bulky Waste Collections</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you need to dispose of bulky household items, such as furniture or appliances, you can arrange a collection through Sheffield City Council.
      </p>
      <p>
        <strong>Arrange a bulky waste collection:</strong><br>
        <a href="https://wasteservices.sheffield.gov.uk/?_dl=t&l=bulky&p=/" target="_blank" rel="noopener noreferrer">
          Arrange a Bulky Waste Collection
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Arrange%20a%20bulky%20waste%20collection\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Using a Private Waste Collector</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Before paying someone to remove your waste, you should:
      </p>
      <ul>
        <li>Check that they are registered as a waste carrier</li>
        <li>Ask for their waste carrier registration number</li>
        <li>Record the collector's name and vehicle registration</li>
        <li>Ask for a waste transfer note or receipt</li>
        <li>Keep the receipt and registration details</li>
      </ul>
      <p>
        <strong>Check a waste carrier:</strong><br>
        <a href="https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers" target="_blank" rel="noopener noreferrer">
          Search the Waste Carriers, Brokers and Dealers Register
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Check%20a%20waste%20carrier\`
        "
      >
        Send link to review further information
      </button>

      <p>
        Do not leave waste or scrap metal on the street, pavement, verge or edge of your property for an unknown collector. Make sure it is collected directly from your property by an authorised carrier or licensed scrap metal dealer.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Reporting Fly-Tipping</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>If you witness fly-tipping or find fly-tipped waste:</p>
      <ul>
        <li>Do not touch or move it, as it may be dangerous or contain evidence</li>
        <li>Record the location, date and time</li>
        <li>Provide a description and approximate quantity of the waste</li>
        <li>Include details of any person or vehicle involved, if it is safe to do so</li>
      </ul>
      <p>
        <strong>Report fly-tipping:</strong><br>
        <a href="https://forms.sheffield.gov.uk/site/portal/form/report_fly_tipping" target="_blank" rel="noopener noreferrer">
          Report Fly-Tipping | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20fly-tipping\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Fly-Tipping on Private Land</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Landowners are responsible for removing fly-tipped waste from their land. The Council can provide a chargeable clearance service.
      </p>
      <p>
        <strong>Email:</strong><br>
        <a href="mailto:environmentalservicesadmin@sheffield.gov.uk">
          environmentalservicesadmin@sheffield.gov.uk
        </a>
      </p>
      <p>
        <strong>Telephone:</strong><br>
        tel:01142037411
          0114 203 7411
        </a>
      </p>
      <p>
        Where evidence is available, the Council may investigate and take enforcement action against those responsible.
      </p>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Householders must take reasonable steps to ensure their waste is collected by an authorised person</li>
    <li>Customers should keep the waste carrier's details and a waste transfer note or receipt</li>
    <li>Fly-tipped waste should not be touched or moved</li>
    <li>Landowners are responsible for removing waste fly-tipped on private land</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Report",
    keywords: [
      "fly-tipping",
      "report fly-tipping",
      "fly-tipped waste",
      "illegal waste disposal",
      "waste carrier",
      "private waste collector",
      "bulky waste collection",
      "waste transfer note",
      "scrap metal collection",
      "private land clearance",
      "fly tipping",
      "waste carier"
    ],
    categories: ["Environmental Regulations", "Fly-Tipping and Waste"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const bulkyWasteCollection = new ContentPaD(
  "bulkyWasteCollection",
  "Bulky Waste Collection",
  "Information about booking a bulky waste collection, charges, free collections for eligible tenants and other disposal options.",
  `
  <p>
    You can use the bulky waste collection service to dispose of large household items, such as furniture and electrical goods. You can also take bulky items to a household waste recycling centre.
  </p>
  <p>
    For further information about the service, visit:
    <a href="https://www.sheffield.gov.uk/bins-waste-recycling/other-services/bulky-waste-collection" target="_blank" rel="noopener noreferrer">
      Bulky Waste Collection | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Bulky%20waste%20collection\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Bulky Waste Collections</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The Council can collect up to 12 bulky items from your home. Collections are normally completed within 7 working days after payment has been received.
      </p>
      <p>
        The current charges, including VAT, are:
      </p>
      <ul>
        <li>1 to 3 items: £40.25</li>
        <li>4 to 6 items: £55.01</li>
        <li>7 to 9 items: £75.59</li>
        <li>10 to 12 items: £95.48</li>
      </ul>
      <p>
        <strong>Book a bulky waste collection:</strong><br>
        https://wasteservices.sheffield.gov.uk/?_dl=t&amp;l=bulky&amp;p=/
          Book a Bulky Waste Collection
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Book%20a%20bulky%20waste%20collection\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Free Collections for Eligible Tenants</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You may qualify for one free collection of up to 12 items in any rolling 12-month period if you are:
      </p>
      <ul>
        <li>A Sheffield City Council tenant</li>
        <li>An Acis tenant</li>
        <li>An eligible Together Housing, Great Places or Sanctuary tenant living in a property transferred from Sheffield City Council</li>
      </ul>
      <p>
        The 12-month period runs from the date of your previous free collection. Contact your landlord if you are unsure whether you qualify.
      </p>
      <p>
        Additional collections can be booked and paid for using the bulky waste collection service.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>More Than 12 Items</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A separate chargeable service is available for collections of more than 12 items or non-domestic items, such as fixtures, fittings and baths.
      </p>
      <p>
        The minimum charge is £129.70. A visit may be required before the full cost can be confirmed. Contact the Council to discuss this type of collection.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Other Disposal Options</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can take bulky household waste to a household waste recycling centre.
      </p>
      <p>
        <strong>Household waste recycling centres:</strong><br>
        <a href="https://www.sheffield.gov.uk/bins-recycling-services/household-waste-recycling-centres" target="_blank" rel="noopener noreferrer">
          Household Waste Recycling Centres | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Household%20waste%20recycling%20centres\`
        "
      >
        Send link to review further information
      </button>

      <p>
        If your unwanted furniture or electrical items are in good condition, consider donating them to a charity so they can be reused.
      </p>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>The standard service can collect up to <strong>12 bulky household items</strong></li>
    <li>Collections are normally completed within <strong>7 working days after payment</strong></li>
    <li>Eligible tenants may receive <strong>one free collection in a rolling 12-month period</strong></li>
    <li>A separate chargeable service is available for more than 12 items or non-domestic items</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Application",
    keywords: [
      "bulky waste collection",
      "book bulky waste",
      "bulky household items",
      "furniture collection",
      "electrical goods collection",
      "free bulky collection",
      "Council tenant collection",
      "large waste collection",
      "recycling centre",
      "bulky waste charges",
      "bulky rubbish",
      "bulk waste collection"
    ],
    categories: ["Environmental Regulations", "Waste and Recycling"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);


const foodLawInspectionsAndHygieneRatings = new ContentPaD(
  "foodLawInspectionsAndHygieneRatings",
  "Food Law Inspections and Hygiene Ratings",
  "Information about food business inspections, food safety management, hygiene ratings, follow-up visits and requesting a re-rating.",
  `
  <p>
    The Council carries out inspections of registered food businesses to check that food is being handled safely and food law requirements are being followed.
  </p>
  <p>
    Inspections are normally unannounced. How often a business is inspected depends on the level of risk associated with the business.
  </p>
  <p>
    For further information about food inspections and hygiene ratings, visit:
    <a href="https://www.sheffield.gov.uk/public-health/food-safety/food-inspection-hygiene-rating-scheme" target="_blank" rel="noopener noreferrer">
      Food Law Inspections and Hygiene Ratings | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Food%20law%20inspections%20and%20hygiene%20ratings\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Is Checked</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>During an inspection, the officer will check:</p>
      <ul>
        <li>How food is handled and stored</li>
        <li>The cleanliness and condition of the premises</li>
        <li>Facilities and pest control arrangements</li>
        <li>Food safety management procedures</li>
        <li>Staff food hygiene knowledge and training</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Food Safety Management</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You must have a written food safety management system explaining how your business produces safe food.
      </p>
      <p>
        You should also keep records of routine opening, closing and food safety checks.
      </p>
      <p>
        The Food Standards Agency provides Safer Food Better Business packs to help businesses meet these requirements.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Inspection Results and Hygiene Ratings</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Following an inspection, you will receive a report explaining:</p>
      <ul>
        <li>Any legal requirements that must be addressed</li>
        <li>Recommended improvements</li>
        <li>The timescale for completing any required work</li>
      </ul>
      <p>
        Businesses included in the Food Hygiene Rating Scheme will also receive a hygiene rating.
      </p>
      <p>
        The latest rating sticker must be displayed unless the business intends to appeal against the rating.
      </p>
      <p>
        The rating will be published on the Food Standards Agency website once the inspection has been processed. You can give permission for the rating to be published before the appeal period ends.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Low Hygiene Ratings</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Businesses receiving a rating of 2 or below will be revisited in line with the Council's enforcement policy.
      </p>
      <p>
        Officers will work with the business to help it meet the required standards. Formal enforcement action may be taken if serious problems remain or the business continues to break food safety law.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Request a Re-rating</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Once the required improvements have been completed, you can apply for another inspection and a new food hygiene rating.
      </p>
      <p>
        The re-rating service costs £150. If the request is accepted, an unannounced inspection will normally take place within 3 months of receiving the request and payment.
      </p>
      <p>
        The new rating will reflect the conditions found during the inspection. This means the rating could increase, remain the same or decrease.
      </p>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Food business inspections are normally unannounced</li>
    <li>Businesses must have a written food safety management system</li>
    <li>A rating of 2 or below will result in a follow-up visit</li>
    <li>Businesses can request a re-rating after completing the required improvements</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Information",
    keywords: [
      "food hygiene inspection",
      "food hygiene rating",
      "food business inspection",
      "food safety management",
      "food hygiene sticker",
      "low hygiene rating",
      "request a re-rating",
      "food safety inspection",
      "Safer Food Better Business",
      "food law",
      "hygiene rerating",
      "food hygene rating"
    ],
    categories: ["Environmental Regulations", "Food Safety"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const registerAFoodBusiness = new ContentPaD(
  "registerAFoodBusiness",
  "Register a Food Business",
  "Information about registering a food business, who needs to register, inspections and reporting changes to a business.",
  `
  <p>
    You must register a food business with Sheffield City Council at least <strong>28 days before opening</strong>.
  </p>
  <p>
    Registration is free. Operating an unregistered food business is a criminal offence.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Who Needs to Register?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You must register if you regularly prepare, store, handle, cook, distribute, sell or provide food or drink.
      </p>
      <p>This includes:</p>
      <ul>
        <li>Restaurants, cafés, takeaways and pubs</li>
        <li>Home-based catering businesses</li>
        <li>Mobile food units and market stalls</li>
        <li>Charities, lunch clubs and non-profit organisations</li>
        <li>Seasonal businesses and food provided at events</li>
      </ul>
      <p>
        Childminders who provide food are normally registered automatically if they registered with Ofsted on or after 1 January 2014.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>After Registration</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Your business will be assessed according to the food safety risk it presents.
      </p>
      <p>
        Higher-risk businesses are inspected regularly. Lower-risk businesses may be inspected less often or asked to complete a self-assessment.
      </p>
      <p>
        You can begin trading from the opening date entered on your registration form, provided you applied at least 28 days beforehand.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Changes to Your Business</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You must tell the Council if there is a change to:</p>
      <ul>
        <li>The business owner</li>
        <li>The business name or address</li>
        <li>The type of food business</li>
        <li>Whether the business has stopped trading</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Apply Online</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can register your food business online.
      </p>
      <p>
        <strong>Register a food business:</strong><br>
        <a href="https://register.food.gov.uk/new/sheffield" target="_blank" rel="noopener noreferrer">
          Register a Food Business
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Register%20a%20food%20business\`
        "
      >
        Send link to review further information
      </button>

      <p>
        <strong>Further information:</strong><br>
        <a href="https://www.sheffield.gov.uk/business/licences-permits-registrations/food-and-cafe-licences/food-businesses" target="_blank" rel="noopener noreferrer">
          Food Businesses | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Food%20businesses\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Food businesses must be registered at least <strong>28 days before opening</strong></li>
    <li>Registration is free and applies to commercial, home-based, mobile and non-profit food businesses</li>
    <li>The Council must be told about significant changes to the business or if it stops trading</li>
    <li>Operating an unregistered food business is a criminal offence</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Application",
    keywords: [
      "register a food business",
      "food business registration",
      "food business",
      "home catering business",
      "mobile food business",
      "market food stall",
      "food business inspection",
      "register before opening",
      "food business changes",
      "food business owner",
      "food buisness",
      "food registration"
    ],
    categories: ["Environmental Regulations", "Food Safety"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const skinPiercingRegistration = new ContentPaD(
  "skinPiercingRegistration",
  "Skin Piercing Registration",
  "Information about registering skin piercing premises and operators, registration fees, inspections and hygiene requirements.",
  `
  <p>
    You must register with Sheffield City Council if you operate a skin piercing business or carry out skin piercing treatments.
  </p>
  <p>
    Both the premises and each person carrying out treatments must be registered. Acupuncture must be registered separately from other skin piercing activities.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Activities That Require Registration</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Registration is required for:</p>
      <ul>
        <li>Tattooing</li>
        <li>Electrolysis</li>
        <li>Acupuncture</li>
        <li>Semi-permanent skin colouring</li>
        <li>Ear piercing</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Registration Fees</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>Premises registration: £322</li>
        <li>Individual operator registration: £61</li>
        <li>Adding or removing an operator from registered premises: £15</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>What You Need to Provide</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You will need to provide:</p>
      <ul>
        <li>A completed application</li>
        <li>The required fee or payment reference</li>
        <li>A privacy statement if applying by post</li>
      </ul>
      <p>
        You can apply online to register premises or an operator.
      </p>
      <p>
        <strong>Apply for skin piercing registration:</strong><br>
        <a href="https://www.gov.uk/apply-for-a-licence/tattooists-piercing-and-electrolysis-licence/sheffield/apply-1" target="_blank" rel="noopener noreferrer">
          Apply for Skin Piercing Registration
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20skin%20piercing%20registration\`
        "
      >
        Send link to review further information
      </button>

      <p>
        You can also apply to change an existing registration, including adding or removing an operator.
      </p>
      <p>
        <strong>Change a skin piercing registration:</strong><br>
        <a href="https://www.gov.uk/apply-for-a-licence/tattooists-piercing-and-electrolysis-licence/sheffield/change-1" target="_blank" rel="noopener noreferrer">
          Change a Skin Piercing Registration
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Change%20a%20skin%20piercing%20registration\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Happens Next</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The premises will normally be inspected within 28 days to check compliance with skin piercing byelaws and health and safety requirements.
      </p>
      <p>
        If the premises meet the required standards, a registration certificate will be issued. If any issues are found, you will be contacted and asked to resolve them.
      </p>
      <p>
        You must not assume that registration has been granted if you have not received a decision. Contact the Council if you have not received an update within 28 days.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Hygiene and Safety</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You must comply with the Council's skin piercing byelaws and follow appropriate infection prevention and hygiene procedures when providing treatments.
      </p>
      <p>
        <strong>Further information:</strong><br>
        <a href="https://www.sheffield.gov.uk/business/licences-permits-registrations/other-business-licences-and-certificates/skin-piercing-registration" target="_blank" rel="noopener noreferrer">
          Skin Piercing Registration | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Skin%20piercing%20registration\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Both the premises and each person carrying out treatments must be registered</li>
    <li>Acupuncture must be registered separately from other skin piercing activities</li>
    <li>The premises will normally be inspected within 28 days</li>
    <li>Registration must be confirmed before treatments are provided</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Application",
    keywords: [
      "skin piercing registration",
      "tattoo registration",
      "tattoo licence",
      "piercing licence",
      "ear piercing",
      "acupuncture registration",
      "electrolysis registration",
      "skin piercing premises",
      "skin piercing operator",
      "registration fees",
      "piercing inspection",
      "skin peircing"
    ],
    categories: ["Environmental Regulations", "Business Registrations"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const coolingTowerRegistration = new ContentPaD(
  "coolingTowerRegistration",
  "Cooling Tower Registration",
  "Information about registering a cooling tower or evaporative condenser, updating an existing registration and registration requirements.",
  `
  <p>
    Commercial premises in Sheffield must register any cooling tower or evaporative condenser with the Council.
  </p>
  <p>
    Registration helps public health organisations respond quickly to possible outbreaks of Legionnaires' disease.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Who Needs to Register?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You must register if your commercial premises uses a cooling tower or evaporative condenser.
      </p>
      <p>You do not need to register equipment where:</p>
      <ul>
        <li>No water is exposed to the air</li>
        <li>The water supply is disconnected</li>
        <li>The electrical supply is disconnected</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Register</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Registration is free. If available, you should provide a site plan showing the location of the cooling tower or evaporative condenser.
      </p>
      <p>
        The Council aims to process and acknowledge registrations within 21 days.
      </p>
      <p>
        <strong>Register a cooling tower:</strong><br>
        <a href="https://www.gov.uk/apply-for-a-licence/cooling-tower-notification/sheffield/apply-1" target="_blank" rel="noopener noreferrer">
          Register a Cooling Tower or Evaporative Condenser
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Register%20a%20cooling%20tower\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Update a Registration</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You must update the Council if the details of an existing cooling tower or evaporative condenser registration change.
      </p>
      <p>
        <strong>Update a cooling tower registration:</strong><br>
        <a href="https://www.gov.uk/apply-for-a-licence/cooling-tower-notification/sheffield/change-1" target="_blank" rel="noopener noreferrer">
          Update a Cooling Tower Registration
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Update%20a%20cooling%20tower%20registration\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Further Information</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Further information about cooling tower registration requirements is available on the Council's website.
      </p>
      <p>
        <strong>Cooling tower registration:</strong><br>
        <a href="https://www.sheffield.gov.uk/business/cooling-tower-registration" target="_blank" rel="noopener noreferrer">
          Cooling Tower Registration | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Cooling%20tower%20registration\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>Commercial premises must register cooling towers and evaporative condensers with the Council</li>
    <li>Registration is free and a site plan should be provided if available</li>
    <li>The Council aims to acknowledge registrations within 21 days</li>
    <li>Existing registrations must be updated when details change</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Application",
    keywords: [
      "cooling tower registration",
      "register cooling tower",
      "evaporative condenser",
      "commercial cooling tower",
      "cooling tower notification",
      "update cooling tower",
      "Legionnaires disease",
      "cooling tower site plan",
      "cooling tower application",
      "cooling tower register",
      "cooling tower licence",
      "cooling tower regstration"
    ],
    categories: ["Environmental Regulations", "Business Registrations"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const infectiousDiseasesAndFoodPoisoningPrivacyNotice = new ContentPaD(
  "infectiousDiseasesAndFoodPoisoningPrivacyNotice",
  "Infectious Diseases and Food Poisoning Investigations Privacy Notice",
  "Information about how personal and medical information is collected, used, retained and shared during infectious disease and food poisoning investigations.",
  `
  <p>
    The Council collects and uses personal and medical information when investigating infectious diseases and food poisoning. This helps identify the possible source of an illness, prevent it from spreading and protect public health.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Information We May Collect</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Information collected during an investigation may include:
      </p>
      <ul>
        <li>Your name, address and contact details</li>
        <li>Your date of birth and NHS number</li>
        <li>Your occupation or school details</li>
        <li>Health and medical information</li>
        <li>Information about recent food, shopping, travel or food-handling activities</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Why We Use Your Information</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The Council uses this information to investigate and control infectious diseases and food poisoning as part of its legal public health duties.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>How Long We Keep Your Information</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Information relating to an infectious disease or food poisoning investigation is normally kept for 6 years after the case is closed.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Who We May Share Your Information With</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Where necessary, information may be shared with organisations involved in investigating and controlling illness, including:
      </p>
      <ul>
        <li>General Practitioners</li>
        <li>Public health organisations</li>
        <li>Laboratories processing test results</li>
      </ul>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Your Data Protection Rights</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Depending on the legal basis used to process your information, you may have the right to:
      </p>
      <ul>
        <li>Ask for a copy of your personal information</li>
        <li>Ask for inaccurate or incomplete information to be corrected</li>
        <li>Ask for the use of your information to be restricted</li>
        <li>Make a complaint about how your information has been handled</li>
      </ul>
      <p>
        Some rights may not apply where the Council is legally required to collect and use the information.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Contact the Data Protection Officer</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you have a question or complaint about how your personal information has been handled, contact:
      </p>
      <p>
        <strong>Email:</strong><br>
        <a href="mailto:dataprotectionofficer@sheffield.gov.uk">
          dataprotectionofficer@sheffield.gov.uk
        </a>
      </p>
      <p>
        <strong>Telephone:</strong><br>
        tel:01142052315
          0114 205 2315
        </a>
      </p>
      <p>
        <strong>Address:</strong><br>
        Data Protection Officer<br>
        Sheffield City Council<br>
        Town Hall<br>
        Pinstone Street<br>
        Sheffield<br>
        S1 2HH
      </p>
      <p>
        You can also raise concerns with the Information Commissioner's Office.
      </p>
      <p>
        <strong>Information Commissioner's Office:</strong><br>
        <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">
          Information Commissioner's Office
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Information%20Commissioner%27s%20Office\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Personal and medical information is used to <strong>investigate illness, prevent it from spreading and protect public health</strong>.</li>
    <li>Investigation records are normally kept for <strong>6 years after the case is closed</strong>.</li>
    <li>Questions or complaints about personal information should be directed to the <strong>Data Protection Officer</strong>.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Information",
    keywords: [
      "infectious diseases privacy notice",
      "food poisoning privacy notice",
      "personal information",
      "medical information",
      "public health investigation",
      "infectious disease investigation",
      "food poisoning investigation",
      "data protection rights",
      "Data Protection Officer",
      "Information Commissioner",
      "ICO",
      "privacy notise"
    ],
    categories: ["Environmental Regulations", "Privacy Notices"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const environmentalPermitsPartB = new ContentPaD(
  "environmentalPermitsPartB",
  "Environmental Permits (Part B)",
  "Information about applying for a Part B environmental permit, application requirements, decision timescales and annual charges.",
  `
  <p>
    Part B environmental permits control business activities that release emissions into the air. The permit required depends on the type of process being carried out and the emissions it produces.
  </p>
  <p>
    Local authorities regulate Part B installations and mobile plants. Waste operations are regulated separately by the Environment Agency.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before You Apply</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The operator of the regulated facility must make the application.
      </p>
      <p>
        Businesses are encouraged to contact the Council for a pre-application discussion before applying.
      </p>
      <p>
        Any required planning permission should be in place before an environmental permit is granted.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Application Requirements</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You will need to provide:</p>
      <ul>
        <li>A completed application form</li>
        <li>Information about the activities and processes being carried out</li>
        <li>Details of the emissions produced</li>
        <li>Any supporting documents required for the operation</li>
        <li>The relevant application fee</li>
      </ul>
      <p>
        Contact the Council for details of current fees.
      </p>
      <p>
        <strong>Apply for a Part B environmental permit:</strong><br>
        <a href="https://www.gov.uk/apply-for-a-licence/environmental-permitting/sheffield/apply-2" target="_blank" rel="noopener noreferrer">
          Apply for an Environmental Permit
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20a%20Part%20B%20environmental%20permit\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Happens Next</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The Council will review the application and may request further information. An incomplete or incorrectly submitted application may be returned.
      </p>
      <p>A decision will normally be made within:</p>
      <ul>
        <li>4 months for most applications</li>
        <li>3 months for dry-cleaning operations</li>
      </ul>
      <p>
        The application may be made public, and comments received may be considered before a decision is made.
      </p>
      <p>
        You must not assume that a permit has been granted if you have not received a decision. Contact the Council if you have not received an update within the expected timescale.
      </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Existing Permits and Annual Charges</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Businesses must pay an annual subsistence charge to maintain their permit. The amount depends on the regulated activity and the work required to monitor compliance.
      </p>
      <p>The online service can be used to:</p>
      <ul>
        <li>Apply for a new Part B permit</li>
        <li>Apply to change an existing permit</li>
        <li>Pay the annual subsistence charge</li>
      </ul>
    </div>
  </details>

  <h3>Key Information</h3>
  <ul>
    <li>The operator of the regulated facility must submit the application</li>
    <li>Any required planning permission should be in place before a permit is granted</li>
    <li>A decision normally takes up to 4 months, or 3 months for dry-cleaning operations</li>
    <li>An annual subsistence charge must be paid to maintain the permit</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "environmental_regulations_information_provided" },
  {
    type: "Application",
    keywords: [
      "Part B environmental permit",
      "environmental permit",
      "apply for Part B permit",
      "air emissions permit",
      "regulated facility",
      "mobile plant permit",
      "dry cleaning permit",
      "environmental permit fee",
      "annual subsistence charge",
      "change environmental permit",
      "Part B application",
      "enviromental permit"
    ],
    categories: ["Environmental Regulations", "Environmental Permits"]
  },
  { date: "03/09/2026", name: "Andy Walker" }
);

const environmentalRegulations = new MenuPaD(
  "environmentalRegulations",
  "Environmental Regulations",
  "Information regarding environmental regulations",
  [
    contaminatedLand,
    statutoryNuisanceFromCommercialPremises,
    highHedges,
    statutoryNuisanceFromDomesticProperties,
    landAndPropertySearches,
    burglarAlarmsAndCarAlarms,
    animalWelfareLicences,
    dogFoulEnviroReg,
    lostOrFoundDogs,
    temporaryCareOfAnimals,
    flyTippingAndWasteDisposal,
    bulkyWasteCollection,
    foodLawInspectionsAndHygieneRatings,
    registerAFoodBusiness,
    skinPiercingRegistration,
    coolingTowerRegistration,
    infectiousDiseasesAndFoodPoisoningPrivacyNotice,
    environmentalPermitsPartB

  ]
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const pollutionAndNuisance = new ServicePaN(
  "pollutionAndNuisance",
  "Pollution and Nuisance",
  `Air pollution, noise, dangerous trees, animals and pests, abandoned vehicles, littering, graffiti, anti-social behaviour, Clean Air Zone, Enviro, Eps, Env`,
  [
    abandonedVehicles,
    animalControl,
    cleanAirZone,
    handoverDogtoCouncil,
    pestControl,
    reportAccumulations,
    reportDangerousDog,
    reportDogFouling,
    reportFilthyPremises,
    reportStrayingDog,
    reportDogAsLost,
    reportLitter,
    reportGraffiti,
    reportFlyPosting,
    reportFlyTipping,
    reportNeedlesGlass,
    reportSmoke,
    reportNoise,
    reportWaterAndDrainage,
    environmentalRegulations
   
  ]
);
