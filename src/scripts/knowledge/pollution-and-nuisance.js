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
  "Information about fleas",
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
      will be reduced to <strong>£69.50</strong>.
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
    <p>All prices contain a call out fee of <strong>£39</strong>.</p>
    <p>
      If we attend the property and the officer is unable to complete the treatment,
      the call out charge will be applied.
    </p>
    <details class="details-accordion">
      <summary>Do I need to provide a sample?</summary>
      <div class="details-accordion-content">
        <p>
          Normally, we don't require a sample of fleas before scheduling a
          treatment, as they are small, elusive, and difficult to catch.
        </p>
        <p>
          However, some individuals may mistakenly believe they have a flea
          infestation due to skin conditions or psychological issues.
        </p>
        <p>
          Find out if the customer has pets like cats or dogs, as fleas are commonly
          associated with pets. Ask if they've noticed bites, especially on their
          lower legs or ankles. Also, check if they’ve recently moved into a vacant
          property, as fleas can linger in unoccupied homes, and the customer may
          have seen small, dark insects jumping around.
        </p>
        <p>Sometimes people can believe they have fleas because:</p>
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
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: ["Flea"],
    categories: ["Pollution and Nuisance", "Environmental", "Pest Constrol"],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const badgerProtection = new ContentPaN(
  "badgerProtectionAct1992",
  "Badgers Protection",
  "Information about protecting badgers in Britain",
  `
    <p>
      The Protection of Badgers Act 1992 makes it illegal for any person to kill,
      injure or take a Badger. It is also an offence to cruelly ill-treat a badger,
      to dig for or to snare a badger.
    </p>
    <p>
      Under the 1992 Act it is now illegal to damage a badger sett or cause a dog to
      enter a set. It is also an offence to attempt any of these actions or
      recklessly allow a dog to enter a set. 
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
  For more information, please visit <a href="http://www.syorksbadgergroup.org.uk" target="_blank">http://www.syorksbadgergroup.org.uk</a>.
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
  { date: "11/11/2024", name: "Andy Walker" }
);

const batProtectionBritain = new ContentPaN(
  "batProtectionBritain",
  "Bat Protection",
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
  { date: "07/10/2024", name: "Elliott Griffiths" }
);

const bedBugTreatment = new ContentPaN(
  "bedBugTreatment",
  "Bed Bug Treatment",
  "Information about Bed Bug treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for bed bugs in your domestic property, we
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Bed Bugs is £330.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £97.00:
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
      All prices include a call-out fee of £39. This fee applies if our officer
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
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk"
            >EnvironmentalServicesAdmin@sheffield.gov.uk</a
          >. We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="notice-panel" role="region" aria-label="Notice panel">
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
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Bed Bug", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "07/10/2024", name: "Elliott Griffiths" }
);

const birdsandPigeonsTreatment = new ContentPaN(
  "birdsandPigeonsTreatment",
  "Birds and Pigeons Treatment",
  "Information about birds and Pigeon's Treatment",
  `
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial, Health Authority, Industrial and University</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For bird and pigeons treatment enquiries related to Commercial, Health
          Authority, Industrial, and University properties, please email your
          request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk"
            >EnvironmentalServicesAdmin@sheffield.gov.uk</a
          >. We will assess your request and provide you with a quote for the
          treatment.
        </p>
      </div>
    </details>
    <section class="notice-panel" role="region" aria-label="Notice panel">
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
    buttonLabel: "Book treatment for Birds and Pegions",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Birds and Pegions", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const biscuitBeetlesTreatment = new ContentPaN(
  "biscuitBeetlesTreatment",
  "Biscuit Beetles Treatment",
  "Information about Biscuit Beetles treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The cost for Biscuit Beetle treatment is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial and Multiple Occupation House,</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For Biscuit Beetles treatment enquiries related to Commercial and House in Multiple Occuption, 
          please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk"
            >EnvironmentalServicesAdmin@sheffield.gov.uk</a
          >. We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="notice-panel" role="region" aria-label="Notice panel">
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
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Biscuit Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const bumbleBeesTreatment = new ContentPaN(
  "bumbleBeesTreatment",
  "Bumble Bees Treatment",
  "Information about Bumble Bees treatment and services",
  `
    <h3>Cost for Treatment</h3>
    <p>
      If the pests located in a communal area (The area that is shared by multiple Council Housing properties) or 
      required treatment for a domestic properties such as Council Housing, Housing Association, Privately Owned, Private Rented,
      then the treatment cost for Bumble Bees is £75.50.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £58.00.
    </p>
    <ul>
      <li>Pension Credits</li>
      <li>Universal Credits</li>
      <li>Housing Benefits</li>
      <li>Income Support Allowance</li>
      <li>Income Related Job Seekers Allowance</li>
      <li>Income Related Employment Support Allowance</li>
    </ul>
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
    <p>
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial and Multiple Occupation House,</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For Bumble Bees treatment enquiries related to Commercial and Houses in Multiple Occuption, 
          please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk"
            >EnvironmentalServicesAdmin@sheffield.gov.uk</a
          >. We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="notice-panel" role="region" aria-label="Notice panel">
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
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Bumble Bees", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const carpetBeetlesTreatment = new ContentPaN(
  "carpetBeetlesTreatment",
  "Carpet Beetles Treatment",
  "Information about Carpet Beetles treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      If the pests are located in a communal area (The area that is shared by multiple Council Housing properties) or 
      required treatment for a domestic properties such as Council Housing, Housing Association, Private Owned, Private Rented,
      then the treatment cost for Carpet Beetles is £132.00.
      This charge is based on a standard size of a 3-bed semi-detached property. 
      If the property is bigger than this, please escalate the enquiry so a quote can be provided.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £58.00.
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Commercial and Multiple Occupation House,</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          For Carpet Beetles treatment enquiries related to Commercial and House in Multiple Occuption, 
          please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk"
            >EnvironmentalServicesAdmin@sheffield.gov.uk</a
          >. We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="notice-panel" role="region" aria-label="Notice panel">
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
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Carpet Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const ratTreatment = new ContentPaN(
  "ratTreatment",
  "Rat Treatment",
  "Information about Rat treatment and services",
  `
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Rats is £118.00. This covers you for up to 3 visits.
      If you require further treatments, each additional treatment will cost £39.00.
    </p>
    <p>
      If you receive one of the following benefits, the treatment will be free:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
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
          For bed bug treatment enquiries related to Commercial, Health Authority, Industrial, and
          University properties, please email your request to
          <a href="mailto:EnvironmentalServicesAdmin@sheffield.gov.uk"
            >EnvironmentalServicesAdmin@sheffield.gov.uk</a
          >. We will assess your request and provide you with a quote for the treatment.
        </p>
      </div>
    </details>
    <section class="notice-panel" role="region" aria-label="Notice panel">
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
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Rats", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const clusterFilesTreatment = new ContentPaN(
  "clusterFilesTreatment",
  "Cluster Files Treatment",
  "Information about Cluster Flies treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Cluster Files is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Cluster Files",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Cluster Files", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const cockroachesProtection = new ContentPaN(
  "cockroachesProtection",
  "Cockroaches Protection",
  "Information about Cockroaches Protection and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Cockroaches is £330.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £97.00:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Cockroaches",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Cockroaches", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const cricketsTreatment = new ContentPaN(
  "cricketsTreatment",
  "Crickets Treatment",
  "Information about Crickets Treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for crickets is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Crickets",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Crickets", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const dermestesBeetlesTreatment = new ContentPaN(
  "dermestesBeetlesTreatment",
  "Dermestes Beetles Treatment",
  "Information about Dermestes Beetles Treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Dermestes Beetles is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Dermestes Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Dermestes Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "10/10/2024", name: "Shahzad Athar" }
);

const filesTreatment = new ContentPaN(
  "filesTreatment",
  "Files Treatment",
  "Information about Files Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Sample Required</h3>
      <p>
        Before we can provide treatment for Files in your domestic property, we
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Files is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Files",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Files", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "10/10/2024", name: "Shahzad Athar" }
);

const foxesInformation = new ContentPaN(
  "foxesInformation",
  "Foxes Information",
  "Information about Foxes",
  `
   <p>Sheffield City Council doesn't offer a service for foxes.</p>
    <p>For advice/information on foxes, please visit 
    <a href="http://foxproject.org.uk/" target="_blank">the Fox Project</a>.
    </p>
  `,
  {
    buttonLabel: "",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
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
  { date: "10/10/2024", name: "Shahzad Athar" }
);

const FrogsorFrogspawn = new ContentPaN(
  "FrogsorFrogspawn",
  "Frogs or Frogspawn",
  "Information about Frogs or Frogspawn",
  `
   <p>Sheffield City Council doesn't offer a service for Frogs or Frogspawn.</p>
    <p>For advice/information on Frogs or Frogspawn, please call DEFRA who are licenced to remove 
    frogs or frog spawn on <strong>0113 2613333</strong> or visit 
    <a href="https://www.gov.uk/browse/environment-countryside" target="_blank">Browse Environment and Countryside</a>.
    </p>
  `,
  {
    buttonLabel: "",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "",
    keywords: ["Frogs or Frogspwan", "", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "10/10/2024", name: "Shahzad Athar" }
);

const furBeetlesTreatment = new ContentPaN(
  "furBeetlesTreatment",
  "Fur Beetles Treatment",
  "Information about Fur Beetles Treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Fur Beetles is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Fur Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Fur Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "10/10/2024", name: "Shahzad Athar" }
);

const gardenAntsTreatment = new ContentPaN(
  "gardenAntsTreatment",
  "Garden Ants Treatment",
  "Information about Garden Ants Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Garden Ants is £75.50. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £58.00:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Garden Ants",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Garden Ants", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const ladyBirdsTreatment = new ContentPaN(
  "ladyBirdsTreatment",
  "Ladybirds Treatment",
  "Information about Ladybird Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Ladybirds is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Lady Birds",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Ladybirds", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const masonryBeesTreatment = new ContentPaN(
  "masonryBeesTreatment",
  "Masonry BeesTreatment",
  "Information about Masonry Bees Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Masonry Bees is £75.50. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £58.00:
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
    If there is more than one nest, a charge of £39.00 per additional nest will be applied.
    </p>
    <h3>Nests Up High</h3>
    <p>
    Officers carry equipment that enables them to treat a nest located at height.<br>
    In most cases the officer will be able to carry out a successful treatment using such equipment.<br>
    If any further access equipment is required to treat the nest our officer will inform you of this at the time of the visit. 
    If further access equipment is required, then it would possibly mean an added cost.<br>
    If your customer is unsure about the possible additional cost, escalate the pest control enquiry and an officer will contact the customer about it.
    </p>
    <p>
      <strong>All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.</strong>
    </p>
  `,
  {
    buttonLabel: "Book treatment for Masonry Bees",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Masonry Bees", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const miceTreatment = new ContentPaN(
  "miceTreatment",
  "Mice Treatment",
  "Information about Mice Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
    <h3>Cost for Treatment</h3>
    <p>
      We will only provide treatment for Mice inside the property. 
      The cost for the treatment is £118.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £58.00:
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
    This covers you for up to 3 visits. If you require further treatments, 
    each additional treatment will cost £39.00.
    </p>
    <p>
      <strong>All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.</strong>
    </p>
  `,
  {
    buttonLabel: "Book treatment for Mice",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Mice", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const mitesTreatment = new ContentPaN(
  "mitesTreatment",
  "Mites Treatment",
  "Information about Mites Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Mites is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      <strong>All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.</strong>
    </p>
  `,
  {
    buttonLabel: "Book treatment for Mites",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Mites", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const mothsTreatment = new ContentPaN(
  "mothsTreatment",
  "Moths Treatment",
  "Information about Moths Treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Moths is £132.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Moths",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Moths", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const pharoahAntsTreatment = new ContentPaN(
  "pharoahAntsTreatment",
  "Pharaoh Ants Treatment",
  "Information about Pharaoh Ants Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for the Pharaoh Ants is £330.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £97.00:
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
      <strong>All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.</strong>
    </p>
  `,
  {
    buttonLabel: "Book treatment for Pharaoh Ants",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Pharaoh Ants", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/11/2024", name: "Andy Walker" }
);

const psocidsTreatment = new ContentPaN(
  "psocidsTreatment",
  "Psocids Treatment",
  "Information about psocids Treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Psocids is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Psocids",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Psocids", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const redSpiderMitesTreatment = new ContentPaN(
  "redSpiderMitesTreatment",
  "Red Spider Mites Treatment",
  "Information about Red Spider Mites Treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Red Spider Mites is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Red Spider Mites",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Red Spider Mites", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const sewageFliesTreatment = new ContentPaN(
  "sewageFliesTreatment",
  "Sewage Flies Treatment",
  "Information about Sewage Flies Treatment and services",
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
    </section>
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Sewage Flies is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p>
  `,
  {
    buttonLabel: "Book treatment for Sewage Flies",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Sewage Flies", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const silverFishTreatment = new ContentPaN(
  "silverFishTreatment",
  "Silver Fish Treatment",
  "Information about Silver Fish Treatment and services",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
    <h3>Cost for Treatment</h3>
    <p>
      The treatment cost for Silver Fish is £110.00. This is based on a standard size
      of a 3-bed semi-detached property. If your property is larger, please escalate
      your enquiry to receive a quote.
    </p>
    <p>
      If you receive one of the following benefits, the treatment cost will be
      reduced to £69.50:
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
      All prices include a call-out fee of £39. This fee applies if our officer
      attends the property but is unable to complete the treatment.
    </p> 
    </section>
  `,
  {
    buttonLabel: "Book treatment for Silver Fish",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Silver Fish", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const spiderBeetlesTreatment = new ContentPaN(
  "spiderBeetlesTreatment",
  "Spider Beetles Treatment",
  "Information about Spider Beetles Treatment and services",
  `
    
  `,
  {
    buttonLabel: "Book treatment for Spider Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Spider Beetles", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const squirrelsTreatment = new ContentPaN(
  "squirrelsTreatment",
  "Squirrels Treatment",
  "Information about Squirrels Treatment and services",
  `
    
  `,
  {
    buttonLabel: "Book treatment for Squirrels Beetles",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Squirrels", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const waspsTreatment = new ContentPaN(
  "waspsTreatment",
  "Wasps Treatment",
  "Information about Wasps Treatment and services",
  `
    
  `,
  {
    buttonLabel: "Book treatment for Wasps",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Wasps", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const weevilsTreatment = new ContentPaN(
  "weevilsTreatment",
  "Weevils Treatment",
  "Information about Weevils Treatment and services",
  `
    
  `,
  {
    buttonLabel: "Book treatment for Weevils",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Weevils", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const woodliceTreatment = new ContentPaN(
  "woodliceTreatment",
  "Woodlice Treatment",
  "Information about Woodlice Treatment and services",
  `
    
  `,
  {
    buttonLabel: "Book treatment for Woodlice",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Woodlice", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const noneoftheAbove = new ContentPaN(
  "noneoftheAbove",
  "None of the Above",
  "",
  `
    
  `,
  {
    buttonLabel: "",
    formName: "pest_control_treatment",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const pestControl = new MenuPaN(
  "pestControl",
  "Pest Control",
  "Pest control treatments, services and pricing",
  [
    fleasTreatment,
    badgerProtection,
    batProtectionBritain,
    bedBugTreatment,
    birdsandPigeonsTreatment,
    biscuitBeetlesTreatment,
    bumbleBeesTreatment,
    carpetBeetlesTreatment,
    ratTreatment,
    clusterFilesTreatment,
    cockroachesProtection,
    cricketsTreatment,
    dermestesBeetlesTreatment,
    filesTreatment,
    foxesInformation,
    FrogsorFrogspawn,
    furBeetlesTreatment,
    gardenAntsTreatment,
    ladyBirdsTreatment,
    masonryBeesTreatment,
    miceTreatment,
    mitesTreatment,
    mothsTreatment,
    pharoahAntsTreatment,
    psocidsTreatment,
    redSpiderMitesTreatment,
    sewageFliesTreatment,
    silverFishTreatment,
    spiderBeetlesTreatment,
    squirrelsTreatment,
    waspsTreatment,
    weevilsTreatment,
    woodliceTreatment,
    noneoftheAbove,
  ]
);

const handoverDogtoCouncil = new ContentPaN(
  "handoverDogtoCouncil",
  "Handover Dog to Council",
  "",
  `
    
  `,
  {
    buttonLabel: "Handover Dog to Council",
    formName: "animal_control",
  },
  { typeKey: "pest_control_transfer_to_service" },
  { typeKey: "pest_control_information_provided" },
  {
    type: "Book",
    keywords: ["Handover Dog to Council", "Treatment", "Pests", "Vermin"],
    categories: [
      "Pollution and Nuisance",
      "Environmental",
      "Pest Control",
      "Animal Control",
      "Environmental Health",
    ],
  },
  { date: "11/10/2024", name: "Shahzad Athar" }
);

const animalControl = new MenuPaN(
  "animalControl",
  "Animal Control",
  "Animal control treatments, services and pricing",
  [handoverDogtoCouncil]
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

const whatIsACleanAirZone = new ContentPaN(
  "whatIsACleanAirZone",
  "What Is A Clean Air Zone",
  "Information relating to the Clean Air Zone Scheme",
`
<p>A Clean Air Zone is a defined area of a town or city within which certain vehicles with more polluting engine standards are charged for entering.
<p>It is not a congestion charging zone and, unlike some other cities, privately owned cars, motorbikes, and mopeds will not be charged.
<p>The introduction of a Clean Air Zone aims to reduce exposure to nitrogen dioxide produced by road traffic to protect public health in areas where pollution levels exceed the maximum legal level. In Sheffield, this area includes the inner ring road and everything inside it.
<p>See the Clean Air Zone map which may help when explaining the scheme to customers:</p>
`,
{
  buttonLabel: "",
  formName: "",
},
{ typeKey: "caz_information_requested" },
{ typeKey: "caz_information_provided" },
{
  type: "Information",
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance",],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const whyIsACleanAirZoneBeingIntroduced = new ContentPaN(
  "whyIsACleanAirZoneBeingIntroduced",
  "Why Is A Clean Air Zone Being Introduced",
  "Information relating to why the Clean Air Zone is being introduced",

`
<p>The implementation of the Category C Clean Air Zone in Sheffield is the result of a legal directive from national government requiring Nitrogen Dioxide (NO2) levels to be reduced to legal levels at locations across Sheffield and Rotherham within the shortest possible time.</p>
<p>The primary aim of Clean Air Zones is to protect the public from exposure to Nitrogen Dioxide (NO2) emissions from road traffic. Air pollution can permanently damage children's lungs, can cause strokes, lung cancer and cardiovascular disease. Find out the health impacts from air pollution at <a href="https://www.gov.uk/government/publications/health-matters-air-pollution" target="_blank">https://www.gov.uk/government/publications/health-matters-air-pollution</a>.</p>
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
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance",],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const whatVehiclesWillBeCharged = new ContentPaN(
  "whatVehiclesWillBeCharged",
  "What vehicles will be charged",
  "Information relating to which vehicles charged",

`
<p>Only specific vehicle types with the most polluting engine standards will be charged for entering the Clean Air Zone. Private cars, motorbikes, or mopeds will not be charged for traveling in Sheffield.</p>
<p>Charges apply to the following vehicle types that do not meet the minimum standards when entering the Clean Air Zone boundary:</p>
  <ul>
  <li>Taxis, including both hackney carriages and private hire vehicles, which are below Euro 6 Diesel or Euro 4 Petrol standards</li>
  <li>Light goods vehicles (LGVs) such as vans, campervans, pickup trucks, and minibuses which are below Euro 6 Diesel or Euro 4 Petrol standards</li>
  <li>Buses and coaches which are below Euro 6 Diesel standards</li>
  <li>Heavy goods vehicles (HGVs) which are below Euro 6 Diesel standards</li>
  </ul>
  <p>Vehicle owners can check whether they will be charged in Sheffield, and for other Clean Air Zones elsewhere, via the government’s online vehicle checker: Clean Air Zones."</p>
  `,
{
  buttonLabel: "",
  formName: "",
},
{ typeKey: "caz_information_requested" },
{ typeKey: "caz_information_provided" },
{
  type: "Information",
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance",],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const whenWillDriversBeCharged = new ContentPaN(
  "Whenwilldriversbecharged",
  "When Will Drivers Be Charged",
  "Information relating to when drivers will be charged",
`
<p>The Clean Air Zone charges in Sheffield will not start until spring 2023.</p>
`,
{
  buttonLabel: "",
  formName: "",
},
{ typeKey: "caz_information_requested" },
{ typeKey: "caz_information_provided" },
{
  type: "Information",
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance",],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const howMuchWillDriversBeCharged = new ContentPaN(
  "howMuchWillDriversBeCharged",
  "How much will drivers be charged",
  "Information relating to how much drivers will be charged",

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
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance",],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const howWillDriversBeCharged = new ContentPaN(
  "howWillDriversBeCharged",
  "How will drivers be charged",
  "Information relating to how drivers will be charged",
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
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance",],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const howAreChargesPaid = new ContentPaN(
  "howAreChargesPaid",
  "How are charges paid",
  "Information relating to how charges are paid",
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
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance"],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const howLongWillTheCleanAirZoneBeInPlace = new ContentPaN(
  "howLongWillTheCleanAirZoneBeInPlace",
  "How long will the Clean Air Zone be in place",
  "Information relating to how long the Clean Air Zone will be in place",
`
<p>The Clean Air Zone will be in place in Sheffield until the city can provide evidence to the Department for Environment, Food & Rural Affairs (Defra) that it has met and can maintain for a minimum of two years the reduced legal levels of Nitrogen Dioxide (NO2) required. There will be significant monitoring and evaluation of the CAZ to determine this.</p>
<h3>What support will there be for those affected</h3>
<p>Eligible businesses and residents may be able to apply for financial support to upgrade to cleaner vehicles. Financial support will be paid in the form of a grant, an interest-subsidized loan, or a mix of the two. You can apply for financial support to upgrade your non-compliant vehicle at <a href="https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle" target="_blank">https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle</a>.</p>
`,
{
  buttonLabel: "",
  formName: "",
},
{ typeKey: "caz_information_requested" },
{ typeKey: "caz_information_provided" },
{
  type: "Information",
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance"],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);

const whatSupportWillThereBeForThoseAffected = new ContentPaN(
  "whatSupportWillThereBeForThoseAffected",
  "What support will there be for those affected",
  "Information relating to support for those affected",
`
<p>Eligible businesses and residents may be able to apply for financial support to upgrade to cleaner vehicles. Financial support will be paid in the form of a grant, an interest-subsidized loan, or a mix of the two. You can apply for financial support to upgrade your non-compliant vehicle at <a href="https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle" target="_blank">https://www.sheffield.gov.uk/your-city-council/apply-for-financial-support-upgrade-replace-polluting-vehicle</a>.</p>
`,
{
  buttonLabel: "",
  formName: "",
},
{ typeKey: "caz_information_requested" },
{ typeKey: "caz_information_provided" },
{
  type: "Information",
  keywords: [
    "Clean Air Zone",
    "caz",
    "cean air zone",
    "zon",
    "cza"],
  categories: ["Parking", "Pollution and Nuisance"],
},
{ date: "06/11/2024", name: "Dinah Williams" }
);


const cleanAirZone = new MenuPaN(
  "cleanAirZone",
  "Clean Air Zone",
  "Information about the Clean Air Zone Scheme",
  [ whatIsACleanAirZone,
    whyIsACleanAirZoneBeingIntroduced,
    whatVehiclesWillBeCharged,
    whenWillDriversBeCharged,
    howMuchWillDriversBeCharged,
    howWillDriversBeCharged,
    howAreChargesPaid,
    howLongWillTheCleanAirZoneBeInPlace,
    whatSupportWillThereBeForThoseAffected
  ]
);



// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const pollutionAndNuisance = new ServicePaN(
  "pollutionAndNuisance",
  "Pollution and Nuisance",
  `Air pollution, noise, dangerous trees, animals and pests, abandoned vehicles, littering, graffiti, anti-social behaviour, Clean Air Zone`,
  [
    abandonedVehicles,
    pestControl,
    reportDogFouling,
    reportLitter,
    reportGraffiti,
    reportFlyPosting,
    reportFlyTipping,
    reportNeedlesGlass,
    cleanAirZone
  ]
);
