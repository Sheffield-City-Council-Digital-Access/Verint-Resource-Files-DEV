class CoreR {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  class ServiceR extends CoreR {
    constructor(id, name, description, subjects = []) {
      super(id, name, description);
      this.subjects = subjects;
    }
  }
  
  class MenuR extends CoreR {
    constructor(id, name, description, topics = []) {
      super(id, name, description);
      this.topics = topics;
    }
  }
  
  class ContentR extends CoreR {
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
  
  class FormR extends CoreR {
    constructor(id, name, description, formName, meta, lastModified) {
      super(id, name, description);
      this.formName = formName;
      this.meta = meta;
      this.lastModified = lastModified;
    }
  }
  
  // --------- KEEP THIS AT THE TOP ------------------------------------------- \\
  // --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\
  
  const multiplepcns2 = new ContentR(
    "multiplePcns2",
    "Multiple PCN's",
    "Find out how to challenge multiple PCNs online, including how to submit evidence and use the interactive portal for your appeal.",
    `
      <p>
        Challenges can be made online within 28 days of receiving the original
        ticket. It can take up to 24 hours to appear on the online portal.
        <br>
        <br>
        Documentation can be uploaded to support the challenge, the online link also
        enables the motorist to use an interactive portal to guide them through their
        appeal and the evidence can be viewed (e.g photos of the contravention)
        <br>
        <br>
        Do not discuss any possible outcomes or give your opinions. Parking services
        will contact the customer following the decision.
      </p>
    `,
    { buttonLabel: "Parking Permit", formName: "" },
    { typeKey: "parking_permit_transferred_to_service" },
    { typeKey: "parking_permit_information_provided" },
    {
      type: "Information",
      keywords: [
        "parking permit",
        "parking pass",
        "parking permitt",
        "parking permt",
        "parking pemit",
        "parkin permit",
        "parking permitt",
        "parknig",
        "parkingg",
        "paking",
        "parrking",
        "parkng",
        "permt",
        "permmit",
        "permitt",
        "pemit",
        "premit",
        "TEC",
        "Fine",
        "Taxi PCN",
        "Bailiff",
      ],
      categories: ["Parking"],
    },
    { date: "06/12/2024", name: "Nathan Smith" }
  );
  
  const universalClubs2 = new ContentR(
    "universalClubs2",
    "Universal Clubs",
    "Learn about Universal Clubs for children, including affordability, payment options, and support availability.",
    `
      <p>
        Warm transfer the call to: <a href="tel:0114 2735068">0114 2735068</a>. If the
        call is not answered raise a case.
      </p>
      <h3>Affordability</h3>
      <p>
        If you are in receipt of means tested benefits or your household income is
        below £21,000.00 you will not have to pay for the activity cost. Please
        complete the household income assessment.
      </p>
      <p>
        If families receive other financial support, some of these might be able to be
        used to help with these costs.
      </p>
      <p>
        If your child attends a club that you find too expensive to pay on an ongoing
        basis you may be able to find a lower cost alternative.
      </p>
      <h3>If your child cannot attend a session</h3>
      <p>
        You will still need to pay because the staff are employed for each session to
        support your child, and so the club still has to pay these costs.
      </p>
      <h3>Ways of Paying</h3>
      <p>You will pay the club directly.</p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "short_breaks_information_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Request",
      keywords: [],
      categories: ["Disability and Mental Health"],
    },
    { date: "27/09/2024", name: "Dinah Williams" }
  );
  
  
  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const repairs = new ServiceR(
    "repairs",
    "Repairs",
    "TBD.",
      [
        multiplepcns2,
        universalClubs2
      ]
  );
