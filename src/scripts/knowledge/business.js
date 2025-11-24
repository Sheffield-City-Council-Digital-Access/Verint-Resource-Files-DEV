class CoreBusiness {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  class ServiceBusiness extends CoreBusiness {
    constructor(id, name, description, subjects = []) {
      super(id, name, description);
      this.subjects = subjects;
    }
  }
  
  class MenuBusiness extends CoreBusiness {
    constructor(id, name, description, topics = []) {
      super(id, name, description);
      this.topics = topics;
    }
  }
  
  class ContentBusiness extends CoreBusiness {
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
  
  class FormBusiness extends CoreBusiness {
    constructor(id, name, description, formName, meta, lastModified) {
      super(id, name, description);
      this.formName = formName;
      this.meta = meta;
      this.lastModified = lastModified;
    }
  }
  
  // --------- KEEP THIS AT THE TOP ------------------------------------------- \\
  // --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\
  
//#region Taxi Licensing

  const applyHackneyCarriage = new ContentBusiness(
    "applyHackneyCarriage",
    "Apply for a new hackney carriage licence",
    "Information regarding taxi licensing",
    `
    <p>
      Application process has 3 stages.
      <ol>
        <li>Apply</li> 
        <li>Process</li>
        <li>Determine</li>"
      </ol>
    </p>
    <h3>Test appointments</h3>
    <p>
        Once the applicant make an application for a Hackney Carriage Licence, the vehicle will be issued with a date to attend the compliance test. 
        Vehicle compliance test certificate is valid for 14 days
    </p>
    <h3>Hackney carriage disclosure and barring checks</h3>
    <p>
        If the applicant does not currently hold a taxi driver licence with SCC, then they must provide a  basic Disclosure and Barring Service (DBS) certificate.<br>
        <br>
        If a vehicle licence is in the name of a company or a partnership, all named directors and partners within the company will need to provide us with a Basic Disclosure from the DBS.<br>
        <br>
        The cost for a basic DBS check is <strong>£21.50</strong>.  
    </p>
     <h3>Cost</h3>
    <p>
        A hackney carriage vehicle licence costs <strong>£212</strong>.  
        Must pay online when complete the hackney carriage application form.
    </p>
    <h3>Information need</h3>
    <p>
        Basic DBS disclosure or your DBS certificate number if you are signed up to the online check service.<br>
        Original V5C registration certificate (logbook) or the keepers supplement of the V5C if you have recently bought the vehicle.<br>
        Original certificate of insurance or the insurance cover note.<br>
        Compliance certificate.
    </p>
    <h3>Collecting the licence</h3>
    <p>
        Service will contact the applicant by email to confirm that they have issued  hackney carriage licence and arrange a time for the applicant to collect  licence from the reception at depot.
        Arrange a time for pick by either by, email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> or telephone <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2734264')">0114 2734264</a>.
    </p>
    `,
  
    { buttonLabel: "", formName: ""},
    { typeKey: "switchboard_transferred_to_service" },
    { typeKey: "switchboard_information_provided"},
    {
      type: "Request",
      keywords: [
        "Switchboard",
        "Switch board",
        "Switch",
        "transfer",
        "redirect",
        "transfer call",
        "call"
      ],
      categories: ["Your City Council"],
    },
    { date: "18/11/2025", name: "Joseph Coupland"} 
  );

  const taxiLicensing = new MenuBusiness(
  "taxiLicensing",
  "Taxi Licensing",
  "Information regarding taxi licensing",
  [
    applyHackneyCarriage,
  ]
);
  

//#endregion Taxi Licensing

  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const business = new ServiceBusiness(
    "business",
    "Business",
    "Information regarding different buisnesses such as taxi licensing",
      [
        taxiLicensing
      ]
  );


  
