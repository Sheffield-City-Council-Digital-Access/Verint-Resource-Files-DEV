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
    "Apply for a New Hackney Carriage Licence",
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
    "Apply for a New Private Hire Licence",
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
        If the applicant does not currently hold a taxi driver licence with SCC, then they must provide a basic Disclosure and Barring Service (DBS) certificate.<br>
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
    "Renew a Hackney Carriage Vehicle Licence",
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
        </ul>
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
    "Renew a Private Hire Vehicle Licence",
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
        To carry wheelchair passengers, then you will also need public liability insurance with a minimum cover of £2,000,000. As a minimum, this should cover personal injury claims and any damage to property.
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
        </ul>
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

 const vechicleInspections = new ContentBusiness(
    "vechicleInspections",
    "Vehicle inspections and testing",
    "Information Regarding Taxi Licensing",
    `
    <h3>Keeping your private hire or hackney carriage vehicle safe</h3>
    <p>
        Your vehicle needs to be checked regularly to make sure that it is safe to be used as a licensed private hire or hackney carriage vehicle. Because of high workloads and mileage, it will be tested according to it's age. If your vehicle is older, then it will need to be tested more regularly.<br>
        <br>
        Your vehicle must pass a compliance test at our testing station before we can issue a licence.
    </p>
    <h3>New vehicles</h3>
    <p>
        If your vehicle is new, then it needs to have passed a compliance test before we can issue a licence. This needs to happen even where it would not normally need an MOT test (if it is less than 3 years of age).<br>
        Before we can issue you with a test date you will need to make either a:
        <ul>
            <li>new private hire vehicle licence application</li>
            <li>new hackney carriage vehicle licence application</li>
        </ul>
        Once your vehicle has passed the test, you must licence the vehicle within either 10 days (for private hire vehicles) or 14 days (for hackney carriage vehicles) of the vehicle passing it's test.
    </p>
     <h3>Vehicles already licenced</h3>
    <p>
        Your vehicle needs to go through a compliance test no more than 4 weeks before it's licence is due to be renewed. <br>
        <br>
        When your vehicle is due to go for a test, we will usually email you about 6 weeks in advance with a date and time of the test.<br>
        <br>
        It is your responsibility to ensure you licence your vehicle on time and email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> or telephone <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2734264')">0114 2734264</a> for a test date if you do not hear from us.   
</p>
    <h3>Changing your test date</h3>
    <p>
        If you need to change the test date, you should give us plenty of warning. We will accept nothing less than 24 hours' notice. If you do not give us enough notice to change the test, you will have to pay a missed test fee before you can rebook the test.<br>
        <br>
        You need to attend your vehicle's test. If you can't, then you may be asked to bring your plate back to us for safe keeping.
    </p>
    <h3>How often your vehicle needs to be testedV</h3>
    <p>
        The number of tests depends on how old your vehicle is.<br>
        <h4>Private hire vehicle testing</h4>
        You will need to test your private hire vehicle at the following intervals: <br>
        Under 5 years of age – every 12 months.<br>
        Over 6 years of age – every 6 months.<br>
        <h4>Hackney carriage vehicle testing</h4>
        You will need to test your hackney carriage vehicle at the following intervals:<br>
        under 9 years of age – every 12 months.<br>
        over 9 years of age – every 6 months.<br><br>
        The age of the vehicle and how often it will be tested is made clear by the V5C document that is presented when you apply for a vehicle licence.
    </p>
    <h3>Vehicles that fail</h3>
    <p>
       If your vehicle fails several tests in a row, you may be required to have your vehicle tested on a more regular basis.<br>
       If this is the case, we will tell you the reasons why we are doing this. You will have to pay for up to a maximum of 3 of these tests in any 12-month period.
    </p>
    <h3>Fees</h3>
    <h4>Compliance test</h4>
    <p>
        Private hire - £54 <br>
        Hackney carriage - £59 (includes meter check)
    </p>
    <h4>Compliance test</h4>
    <p>
        ********************************No information provided****************************** Jchere
    </p>
    <h3>How we test</h3>
    <p>
        Our vehicle inspection and testing go beyond that of the Ministry of Transport (MOT) test.<br>
        Because of the nature of taxi work done by hackney carriage vehicles, it is important that all areas of the vehicle are tested. <br>
        <br>
        We will check for:
        <ul>
            <li>how it works.</li>
            <li>how it looks.</li>
            <li>how safe it is.</li>
        </ul>
        Find out more about MOT testing standards and procedures. 
        SEND LINK - https://www.sheffield.gov.uk/taxi-licensing/private-hire-and-hackney-carriage-vehicles/private-hire-vehicle-licence/inspections-and-testing
    </p>
    <h3>What happens if it fails</h3>
    <p>
       If your vehicle fails several tests in a row, we may need to do more tests on it. If this is the case, we will tell you the reasons why we are doing this. 
       You will have to pay for up to a maximum of 3 of these tests.
    </p>
    <h3>Where we test</h3>
    <p>
        Our testing station follows best practice and guidelines developed by ourselves and the following organisations:
        <ul>
        <li>Department of Transport (DFT)</li>
        <li>Drivers and Vehicles Standards Agency (DVSA)</li>
        <li>The Technical Officer Group of the Public Authority Network</li>
        <li>Vehicle testing customer charter</li>
        </ul>
        Find out about the service we promise to offer when you book a vehicle inspection and test with us. - JCHere should this be a send link or reworded etc.
    </p>
    <h3>View customer charter</h3>
    <p>
        JCHERE No information provided.
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


  const vechicleCustomerCharter = new ContentBusiness(
    "vechicleCustomerCharter",
    "Vehicle Testing Customer Charter",
    "Information Regarding Taxi Licensing",
    `
    <h3>Keeping your vehicle on the road</h3>
    <p>
        Whether private hire or hackney carriage, our vehicle testing charter describes what we expect from you and what you can expect from our service.
    </p>
    <h3>Our promise to you</h3>
    <h4>Thorough testing</h4>
    <p>
         We ensure every vehicle examination is detailed, of high quality and completely independent.
    </p>
    <h4>Service</h4>
    <p>
        We provide a prompt and polite service to all users
    </p>
     <h3>Re-tests</h3>
    <p>
        You can visit the test centre for general re-tests between 9am and 15:30pm without the need to pre book.<br>
        Vehicles that fail with 8 faults or more must pre book a 15:30pm appointment.<br>
    </p>
    <h3>We will always be responsive</h3>
    <h4>Complaints</h4>
    <p>
        If you want to make a complaint, we will clearly display and explain the steps you need to follow.
    </p>
    <h4>Your feedback</h4>
    <p>
        We value your comments, complaints and ideas about our service. We will aim to acknowledge your feedback within seven days of receipt (or within 3 days for emails).
    </p>
    <h4>Our responses</h4>
    <p>
        We will aim to respond fully to your questions or complaints within 28 days. If we can’t meet this timeframe, we will let you know of the progress and give you a date when we will reply.
    </p>
     <h4>Appointments</h4>
    <p>
        If you contact us without an appointment, we will try to see you as quickly as possible.
    </p>
    <h4>Keeping you informed</h4>
    <p>
        We will keep you updated if there are any delays to your vehicle testing.
    </p>

    <h3>Your commitment to us</h3>
    <h4>Keep us updated</h4>
    <p>
        Tell us of us of any changes in your personal life that may affect the services we provide to you. 
    </p>
    <h4>Your appointment</h4>
    <p>
       Attend your scheduled appointment times or let us know in advance if you cannot make it. 
    </p>
    <h4>Your behaviour</h4>
    <p>
        Please behave politely and considerately, so that we can provide you and other customers with a high-quality service. 
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
    vechicleInspections,
    vechicleCustomerCharter
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


  
