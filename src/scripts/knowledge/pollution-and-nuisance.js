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
      For more information, please visit: <a href="https://www.badgertrust.org.uk/" target="_blank">http://https://www.badgertrust.org.uk/</a>.
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
      You can also visit the government website at: <a href="https://www.gov.uk/guidance/badgers-protection-surveys-and-licences" target="_blank">https://www.gov.uk/guidance/badgers-protection-surveys-and-licences</a>.
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
      <br>
      or
      <br>
      <br>
      RPSCA information site at: <a href="https://www.rspca.org.uk/adviceandwelfare/wildlife/badgers/law" target="_blank">https://www.rspca.org.uk/adviceandwelfare/wildlife/badgers/law</a>.
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
      For more information, please visit <a href="https://www.bats.org.uk">https://www.bats.org.uk</a>. 
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
  { date: "27/11/2024", name: "Nathan Smith" }
);

const bedBugTreatment = new ContentPaN(
  "bedBugTreatment",
  "Bed Bug Treatment",
  "Find out how to report and submit a bed bug sample for treatment, including treatment costs, eligibility for reduced fees, and the process for larger properties.",
  `
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
  { date: "27/11/2024", name: "Nathan Smith" }
);

const birdsandPigeonsTreatment = new ContentPaN(
  "birdsandPigeonsTreatment",
  "Birds and Pigeons Treatment",
  "Learn how to request bird and pigeon treatment for commercial, health authority, industrial, and university properties, including how to receive a quote.",
  `
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
  { date: "12/03/2025", name: "Dinah Williams" }
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
        <h3>Commercial and Houses in multiple occupation (HMO)</h3>
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
    </p>
    <p>
    Sheffield City Council will only undertake a treatment if the bees are a danger to human health.
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
        <h3>Commercial and Houses in multiple occupation (HMO)</h3>
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
        <h3>Commercial and Houses in multiple occupation (HMO)</h3>
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
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const foxesInformation = new ContentPaN(
  "foxesInformation",
  "Foxes Information",
  "Information on how to handle fox-related issues in Sheffield and where to get advice, including the Fox Project website.",
  `
   <p>Sheffield City Council doesn't offer a service for foxes.</p>
    <p>For advice/information on foxes, please visit 
    <a href="http://foxproject.org.uk" target="_blank">http://foxproject.org.uk</a>.
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
    formName: "pest_control_treatment",
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

const FrogsorFrogspawn = new ContentPaN(
  "FrogsorFrogspawn",
  "Frogs or Frogspawn",
  "Guidance on handling frog or frogspawn issues, including contact information for DEFRA for removal and additional resources.",
  `
    <p>
      Sheffield City Council doesn't offer a service for Frogs or Frogspawn.
      <br>
      <br>
      For advice/information on Frogs or Frogspawn, please call DEFRA who are licenced to remove 
      frogs or frog spawn on <a href="tel:0113 2613333">0113 2613333</a> or visit:
      <a href="https://www.gov.uk/browse/environment-countryside" target="_blank">https://www.gov.uk/browse/environment-countryside</a>.
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
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const honeyBeeTreatment = new ContentPaN(
  "honeyBeeTreatment",
  "Honey Bee Treatment",
  "Guidance on honey bee treatment, including swarm information and contact details for local beekeepers willing to collect bees for free or at a charge.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        Bee keepers may be able to collect Honey Bees, although they are under no obligation to collect the swarm
        You can access information on the Sheffield Beekeepers Association at: <a href="https://sheffieldbeekeepers.org.uk/swarm-of-bees-in-your-garden-or-house/" target="_blank">https://sheffieldbeekeepers.org.uk/swarm-of-bees-in-your-garden-or-house/</a>
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
              <a href="tel:0794 6375387">0794 6375387</a><
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
  `,
  {
    buttonLabel: "Book treatment for Lady Birds",
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
  { date: "26/02/2025", name: "Gee Whitehouse" }
);

const masonryBeesTreatment = new ContentPaN(
  "masonryBeesTreatment",
  "Masonry Bees Treatment",
  "Details about masonry bee treatment, including costs, benefits-related discounts, and charges for additional nests or treatment of nests located at height.",
  `
  <h3>Masonry Bees</h3>
  <p>Bees are not treated as pests in the traditional sense and should be relocated, not exterminated.
  Sheffield City Council pest control service promotes this through legal adherence, professional partnerships, 
  and prioritizing ethical environmental practices.</p> 
    
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

    <p>The treatment cost is £79.20.</p>
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
  { date: "18/09/2025", name: "Shaz Athar" }
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
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Rats is <strong>£124.80.</strong> This covers you for up to 3 visits.
      If you require further treatments, each additional treatment is <strong>Free.</strong>
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
      Free treatments, there is no call out charge if the Technician is unable to gain access.
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
        <h3>Commercial, Health Authority, Industrial and University</h3>
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
  { date: "26/02/2025", name: "Gee Whitehouse" }
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
    For advice on squirrel treatments, please contact the pest control back office at:
    <a href="tel:01142930356">0114 293 0356</a> 
    or email: <a href="mailto:environmentalservicesadmin@sheffield.gov.uk">environmentalservicesadmin@sheffield.gov.uk</a>
    </p>
  `,
  {
    buttonLabel: "",
    formName: "pest_control_treatment",
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
  { date: "26/02/2025", name: "Gee Whitehouse" }
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
      at the time of the visit. If further access to equipment is required, then it would possibly mean 
      an added cost. If your customer is unsure about the possible additional cost, escalate pest control 
      enquiry and an officer will contact the customer about it.
      <br>
      <br>
     
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
  { date: "28/02/2025", name: "Dinah Williams" }
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
    foxesInformation,
    FrogsorFrogspawn,
    furBeetlesTreatment,
    gardenAntsTreatment,
    honeyBeeTreatment,
    ladyBirdsTreatment,
    masonryBeesTreatment,
    miceTreatment,
    mitesTreatment,
    mothsTreatment,
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
    woodliceTreatment
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

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const pollutionAndNuisance = new ServicePaN(
  "pollutionAndNuisance",
  "Pollution and Nuisance",
  `Air pollution, noise, dangerous trees, animals and pests, abandoned vehicles, littering, graffiti, anti-social behaviour, Clean Air Zone, Enviro, Eps, Env`,
  [
    abandonedVehicles,
    pestControl,
    reportDangerousDog,
    reportDogFouling,
    reportFilthyPremises,
    reportStrayingDog,
    reportDogAsLost,
    handoverDogtoCouncil,
    reportLitter,
    reportGraffiti,
    reportFlyPosting,
    reportFlyTipping,
    reportNeedlesGlass,
    reportSmoke,
    reportNoise,
    reportWaterAndDrainage,
    cleanAirZone
  ]
);
