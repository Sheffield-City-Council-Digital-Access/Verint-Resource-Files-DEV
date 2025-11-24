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
        <li>Determine</li>
      </ol>
    </p>
    <h3>Test appointments</h3>
    <p>
        Once the applicant make an application for a Hackney Carriage Licence, the vehicle will be issued with a date to attend the compliance test.<br>
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
    <h3>Hackney carriage vehicle insurance</h3>
    <p>
        This is a valid insurance certificate or cover note that tells applicant or a licensed driver, are insured to drive the vehicle and the purposes to carry passengers for hire and reward.
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
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );


  const applyPrivateHire = new ContentBusiness(
    "applyPrivateHire",
    "Apply for a new private hire licence",
    "Information regarding taxi licensing",
    `
    <p>
      Application process has 3 stages.
      <ol>
        <li>Apply</li> 
        <li>Process</li>
        <li>Determine</li>
      </ol>
    </p>
    <h3>Test appointments</h3>
    <p>
        Once the applicant make an application for a PHV Licence, the vehicle will be issued with a date to attend the compliance test.<br>
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
     <h3>PHV insurance</h3>
    <p>
       This is a valid insurance certificate or cover note that tells applicant or a licensed driver, are insured to drive the vehicle and the purposes to carry passengers for hire and reward.
    </p>
    <h3>Apply for a new PHV licence</h3>
    <p>
        Online form via Big Change portal
        Must licence a vehicle to use it as a PHV in Sheffield.
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
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );


  const renewHackneyCarriage = new ContentBusiness(
    "renewHackneyCarriage",
    "Renew a hackney carriage vehicle licence",
    "Information regarding taxi licensing",
    `
    <p>
      Hackney carriage vehicle licence will be valid for a maximum of 12 months.
    </p>
    <h3>Pre requirement:</h3>
    <p>
        Hackney carriage vehicle needs to go through a compliance test no more than 4 weeks before its licence is due to be renewed.  
    </p>
    <h3>Compliance test</h3>
    <p>
        Once the applicant make an renew application for a Hackney Carriage Licence, the vehicle will be issued with a date to attend the compliance test.<br>
        Vehicle compliance test certificate is valid for 14 days.
    </p>
     <h3>Hackney carriage disclosure and barring checks</h3>
    <p>
         If the applicant does not currently hold a taxi driver licence with SCC, then they must provide a  basic Disclosure and Barring Service (DBS) certificate.<br>
        <br>
        If a vehicle licence is in the name of a company or a partnership, all named directors and partners within the company will need to provide us with a Basic Disclosure from the DBS.<br>
        <br>
        The cost for a basic DBS check is <strong>£21.50</strong>.  
</p>
    <h3>Hackney carriage vehicle insurance</h3>
    <p>
        This is a valid insurance certificate or cover note that tells applicant or a licensed driver, are insured to drive the vehicle and the purposes to carry passengers for hire and reward.<br>
        a copy of the insurance certificate must be provided when  making application. Service will check the insurance every month to make sure hackney carriage is insured.
    </p>
    <h3>Right to work in the UK for hackney carriage vehicles</h3>
    <p>
       Need to see original right to work documents in person and take copies of them.
    </p>
    <h3>Right to work documents that are accept</h3>
    <p>
        <ul>
            <li>British passport
            <li>Irish passport
            <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man
            <li>Oassport from immigration control
            <li>Immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name
            <li>UK birth certificate, together with an official document giving your permanent NI number and name
            <li>Channel Islands, Isle of Man or Ireland birth certificate, presented with an official document giving your permanent NI number and name
            <li>Certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name.</li>
        </ul>
    </p>
    <h3>If the applicant is under immigration controls</h3>
    <p>
        <ul>
            <li>Current passport.</li>
            <li>Socument from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
            <li>Current immigration status document containing a photograph issued by the Home Office.</li>
        </ul>
    </p>
    <h3>If the right to work in the UK is a time-limited period</h3>
    <p>
        <ul>
            <li>document or certificate of application (non-digital) issued by the Home Office.</li>
            <li>document from the Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
            <li>application Registration Card issued by the Home Office that says you can take employment.</li>
            <li>positive Verification Notice issued by the Home Office Employer Checking Service.</li>
    </p>
    <h3>Apply for a new hackney carriage vehicle licence</h3>
    <p>
        Web form<br>
        Paper application
    </p>
    <h3>Cost</h3>
    <p>
        Renewing a hackney carriage hire vehicle licence costs <strong>£212</strong>.<br>
        Must pay this online when complete the application form.
    </p>
    <h3>Information needed</h3>
    <p>
        <ul>
            <li>Basic DBS disclosure or your DBS certificate number.</li>
            <li>Valid insurance certificate or cover note that tells the applicant or a licensed driver, are insured to drive the vehicle and the purposes that it can be used for (to carry passengers for hire and reward).</li>
            <li>Original V5C registration certificate (logbook) or the keepers supplement of the V5C for recently bought vehicle.</li>
            <li>Right to work documents.</li>
            <li>Compliance certificate.</li>
            <li>Hackney Carriage vehicle registration number.</li>
            <li>Hackney Carriage licence number.</li>
            <li>Hackney Carriage licence expiry date.</li>
        </ul>
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
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

   const renewPriviateHire = new ContentBusiness(
    "renewPriviateHire",
    "Renew a private hire vehicle licence",
    "Information regarding taxi licensing",
    `
    <p>
      Hackney carriage vehicle licence will be valid for a maximum of 12 months.
    </p>
    <h3>Pre requirement:</h3>
    <p>
        PHV needs to go through a compliance test no more than 4 weeks before its licence is due to be renewed.  
    </p>
    <h3>Compliance test</h3>
    <p>
        Once the applicant make an renew application for a PHV Licence, the vehicle will be issued with a date to attend the compliance test.<br>
        Vehicle compliance test certificate is valid for 14 days.
    </p>
     <h3>PHV disclosure and barring check</h3>
    <p>
        If the applicant does not currently hold a taxi driver licence with SCC, then they must provide a  basic Disclosure and Barring Service (DBS) certificate.<br>
        <br>
        If a vehicle licence is in the name of a company or a partnership, all named directors and partners within the company will need to provide us with a Basic Disclosure from the DBS.<br>
        <br>
        The cost for a basic DBS check is <strong>£21.50</strong>.    
</p>
    <h3>PHV insurance</h3>
    <p>
        This is a valid insurance certificate or cover note that tells applicant or a licensed driver, are insured to drive the vehicle and the purposes to carry passengers for hire and reward.<br>
        a copy of the insurance certificate must be provided when  making application. Service will check the insurance every month to make sure hackney carriage is insured. <br>
        To carry wheelchair passengers, then you will also need public liability insurance with a minimum cover of £2,000,000. As a minimum, this should cover personal injury claims and any damage to property.<br>
    </p>
    <h3>Right to work in the UK for PHV</h3>
    <p>
       Need to see original right to work documents in person and take copies of them.
    </p>
    <h3>Right to work documents that are accept</h3>
    <p>
        <ul>
            <li>British passport
            <li>Irish passport
            <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man
            <li>Oassport from immigration control
            <li>Immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name
            <li>UK birth certificate, together with an official document giving your permanent NI number and name
            <li>Channel Islands, Isle of Man or Ireland birth certificate, presented with an official document giving your permanent NI number and name
            <li>Certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name.</li>
        </ul>
    </p>
    <h3>If the applicant is under immigration controls</h3>
    <p>
        <ul>
            <li>Current passport.</li>
            <li>Socument from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
            <li>Current immigration status document containing a photograph issued by the Home Office.</li>
        </ul>
    </p>
    <h3>If the right to work in the UK is a time-limited period</h3>
    <p>
        <ul>
            <li>document or certificate of application (non-digital) issued by the Home Office.</li>
            <li>document from the Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
            <li>application Registration Card issued by the Home Office that says you can take employment.</li>
            <li>positive Verification Notice issued by the Home Office Employer Checking Service.</li>
    </p>
    <h3>Apply for a new PHV licence</h3>
    <p>
        Web form<br>
        Paper application
    </p>
    <h3>Cost</h3>
    <p>
        Renewing a PHV licence costs <strong>£212</strong>.<br>
        Must pay this online when complete the application form.
    </p>
    <h3>Information needed</h3>
    <p>
        <ul>
            <li>Basic DBS disclosure or your DBS certificate number.</li>
            <li>Valid insurance certificate or cover note that tells the applicant or a licensed driver, are insured to drive the vehicle and the purposes that it can be used for (to carry passengers for hire and reward).</li>
            <li>Original V5C registration certificate (logbook) or the keepers supplement of the V5C for recently bought vehicle.</li>
            <li>Right to work documents.</li>
            <li>Private hire vehicle registration number.</li>
            <li>Private hire vehicle licence number.</li>
            <li>Vehicle expiry date.</li>
            <li>Compliance certificate.</li>
        </ul>
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
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );


  const taxiLicensing = new MenuBusiness(
  "taxiLicensing",
  "Taxi Licensing",
  "Information regarding taxi licensing",
  [
    applyHackneyCarriage,
    applyPrivateHire,
    renewHackneyCarriage,
    renewPriviateHire,
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


  
