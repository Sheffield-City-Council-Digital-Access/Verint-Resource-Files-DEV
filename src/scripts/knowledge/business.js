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

   const surrenderLicence = new ContentBusiness(
    "surrenderLicence",
    "Surrender a vehicle licence",
    "Surrender a vehicle licence",
    `
    <h3>Keeping your private hire or hackney carriage vehicle safe</h3>
    <p>
        You might want to de-licence your vehicle and surrender your plate. Where possible, you need to return your plate to us.<br>
        In the future, if you want to licence your vehicle again, you will need to apply for a new one. This will mean that you must go through the application process again.
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


  const transferLicence = new ContentBusiness(
    "transferLicence",
    "Transfer a vehicle licence",
    "Transfer a vehicle licence",
    `
    <h3>When to contact us</h3>
    <p>
        If you transfer your vehicle licence to another person or company, you must contact us within 14 days.<br> 
        It is an offence if you to fail to notify us that your vehicle licence has been transferred to another person or company.<br>
    </p>
    <h3>How to transfer a vehicle licence</h3>
    <p>
        You need to tell us the following things about the person you are transferring the licence to:
        <ul>
            <li>name(s)</li>
            <li>date of birth</li>
            <li>address</li>
        </ul>
        When you apply, we will need to see the following documents:
        <ul>
            <li>copy of the insurance certificate for the vehicle</li>
            <li>basic Disclosure and Barring Service certificate (if the new licence holder does not hold a taxi driver licence with us)</li>
            <li>The insurance certificate must cover a licensed driver to use the vehicle for its intended use.</li>
        </ul>
        We will transfer your vehicle licence once we have received all the information we need.
    </p>
    <h3>When we contact you</h3>
    <p>
        We will respond to your request within 5 working days.</br>
        You will receive your transferred paperwork licence from us by email. We will also post it out to your registered address.
    </p>
    <h3>Cost</h3>
    <p>
        The fee to transfer your taxi licence is <strong>£33</strong>.
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


    const renewPriviateLicence = new ContentBusiness(
    "renewPriviateLicence",
    "Renewing a private hire vehicle licence",
    "Renewing a private hire vehicle licencee",
    `
        <h3>Before you renew</h3>
        <p>
            Your vehicle needs to pass a compliance test no more than 4 weeks before it's licence is due to be renewed.  
        <p>
        <h4>Test appointments</h4>
        <p>
            When your vehicle is due for a test, we will usually email you about 6 weeks in advance with a date and time. If you do not hear from us, please email taxilicensing@sheffield.gov.uk or telephone 0114 273 4264 to arrange the test.
        </p>
        <h4>Private hire vehicle insurance</h4>
        <p>
            You will need to have insurance to carry passengers in your vehicle.
        </p>
        <h4>About insurance</h4>
        <p>
            JCHere no information
        </p>
        <h4>Right to work in the UK for private hire vehicles</h4>
        <p>
            To licence your private hire vehicle, you must prove to us that you are legally allowed to work in the UK.
        </p>

        <h4>About right to work</h4>
         <p>
            JCHere no information
        </p>
        <h4>Renew a private hire vehicle licence</h4>
        Use our online form to make your private hire vehicle renewal. ***JCHERE Add Send Link***

        <h4>Renew your licence</h4>
         <p>
            JCHere no information
        </p>

    <h3>Private hire vehicle insurance</h3>
    <p>
        You must have vehicle insurance to carry passengers. If you want to carry wheelchair passengers, then you will also need public liability insurance.<br>
        We will need to see copies of the relevant insurance certificates when you make your application.<br>
    </p>
        <h4>Vehicle insurance</h4>
        <p>
            You need to have a valid insurance certificate or cover note that tells us that you are insured to drive the vehicle. It should also state that the vehicle can be used to carry passengers for hire and reward.
        </p>
        <h4>Public liability insurance</h4>
        <p>
            To carry wheelchair passengers, you will have public liability insurance with a minimum cover of £2,000,000. As a minimum, this should cover personal injury claims and any damage to property.
        </p>

        <h3>Right to work in the UK for private hire vehicles</h3>
    <p>
        You will need to provide us with evidence that you are legally allowed to work in the UK if you are:
        <ul>
            <li>Applying to become a licensed driver</li>  
            <li>Applying to become an operator</li>
            <li>A hackney carriage or private hire vehicle licence holder</li>
        </ul>
        <p>
            To prove this, we will need to see your original right to work documents in person and take copies of them.<br>
            This information can be provided when you make your in-person Disclosure and Barring Service application to us.<br>  
            Once we have seen you in-person, we will not need to see you again unless you have right to work restrictions.<br>
        </p>
        <h4>Documents that we accept</h4>
        <p>
            You will need to provide one of the documents listed below.
            <ul>
                <li>British passport</li>
                <li>Irish passport</li>
                <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
                <li>passport from immigration control</li>
                <li>immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name</li>
                <li>UK birth certificate, together with an official document giving your permanent NI number and name</li>
                <li>Channel Islands, Isle of Man or Ireland birth certificate, presented with an official document giving your permanent NI number and name</li>
                <li>Certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name</li>
                <li>Under immigration controls</li>
                <li>If you are under immigration controls, then we will only issue a licence for the period that you are entitled to work in the UK</li>
            </ul>
        </p>
        <p>
            We will need to see one of the documents listed below before we can issue your licence.
        </p>
        <ul>
            <li>current passport</li>
            <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
            <li>current immigration status document containing a photograph issued by the Home Office</li>
            <li>Right to work is time-limited</li>
            <li>Where your right to work in the UK is a time-limited period, we will need to see a:</li>
            <li>document or certificate of application (non-digital) issued by the Home Office</li>
            <li>document from the Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
            <li>application Registration Card issued by the Home Office that says you can take employment</li>
            <li>positive Verification Notice issued by the Home Office Employer Checking Service</li>
        </ul>
    </p>
    <h3>Renew a private hire vehicle licence</h3>
        <h4>About this licence</h4>
        <p>
            Your private hire vehicle licence will be valid for a maximum of 12 months.
        /p>

        <h4>When to apply</h4>
        <p>We will usually contact you by email about 6 weeks before your vehicle licence is due to expire. This will tell you of your vehicle’s compliance test date and time. If you do not hear from us, please email INSERT CCP.</p>

        <p>Please check your expiry date to ensure that you can re-licence your vehicle on time.
        You should renew your licence in the month that it is due to end. If you miss this deadline, you will have up to one month to renew it. After that date, you will have to apply for a new private hire vehicle licence.
        If your licence does expire, you are not legally allowed to drive your vehicle for the purpose of hire and reward. You can only resume doing this when you receive confirmation that the licence has been renewed.</p>

        <h4>Cost</h4>
        <p>Renewing your private hire vehicle licence costs £212.
        You will need to pay this online when you complete your application form.</p>

        <h4>Information you will need</h4>
        <p>You will need to upload the following information when you renew your licence:</p>
        <ul>
        <li>private hire vehicle registration number</li>
        <li>private hire vehicle licence number</li>
        <li>vehicle expiry date</li>
        <li>valid insurance certificate</li>
        <li>compliance certificate</li>
        </ul>

        <h4>Issuing the licence</h4>
        <p>When your vehicle has passed the compliance test, we ask that you make your application straight away so that we can issue the licence to you on time.</p>

        <p>Once we receive your online application and payment, we will process your application within 5 working days.
        We will then email you a PDF version of your licence and send you a paper version by post along with your licence plate.
        If your vehicle has been for a test within the last week of the month, we will give you the option to collect your licence so that you have it in time for the end of the month.
        If you are not available to collect your licence, you can send someone to collect it on your behalf.</p>

        <h4>Exceptional vehicles</h4>
        <p>If you want us to licence your vehicle for longer than its licensable period, then you must be able to show us that it meets our exceptional vehicle standards. We will give your vehicle this status if:</p>
        <ul>
        <li>it has never failed a vehicle compliance test</li>
        <li>it has never missed a pre-arranged vehicle compliance test</li>
        <li>there is a complete service record, that shows us that is has been properly serviced to the manufacturer’s standards and all receipts and service book history are available</li>
        <li>the vehicle has not been suspended at any time due to its mechanical or physical condition</li>
        <li>the vehicle is Zero Emission Capable (ZEC)</li>
        </ul>

        <p>The following parts of the vehicle must be in A1 condition:</p>
        <ul>
        <li>bodywork has no signs of rust, dents, scratches, stone chips, or any other problems with its appearance</li>
        <li>paintwork must not be faded, discoloured or mismatched</li>
        <li>interior, including carpets, mats and seats</li>
        <li>all luggage compartments are clean and free from damage</li>
        </ul>
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
    vechicleCustomerCharter,
    transferLicence,
    surrenderLicence,
    renewPriviateLicence
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


  
