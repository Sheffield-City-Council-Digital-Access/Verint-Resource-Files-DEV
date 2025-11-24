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
        <p>We will usually contact you by email about 6 weeks before your vehicle licence is due to expire. This will tell you of your vehicle’s compliance test date and time. If you do not hear from us, please email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> or telephone <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2734264')">0114 2734264</a> to make enquires.</p>

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


  const renewVechicleLicence = new ContentBusiness(
    "renewVechicleLicence",
    "Renewing a hackney carriage vehicle licence",
    "Renewing a hackney carriage vehicle licence",
    `
    <h3>Before you renew</h3>
    <h4>About insurance</h4>
    <p>You will need to have insurance in place to use your hackney carriage as a taxi.</p>

    <h4>Hackney carriage vehicle insurance</h4>

    <h4>About right to work</h4>
    <p>To renew your hackney carriage vehicle licence, you must prove to us that you are legally allowed to work in the UK.</p>

    <h4>Right to work in the UK for hackney carriage vehicles</h4>

    <h4>Renew your licence</h4>
    <p>Use our online form to renew your hackney carriage vehicle licence.</p>

    <h4>Renew your hackney carriage vehicle licence</h4>
    <p>
        JCHERE no information
    </p>
    <h3>Hackney carriage vehicle insurance</h3>
    <p>
        Your hackney carriage must have in place the correct insurance to carry passengers for hire and reward.<br>
        This is a valid insurance certificate or cover note that tells us that you or a licensed driver, are insured to drive the vehicle and the purposes that it can be used for.<br>
        We will need to see a copy of the insurance certificate when you make your application. We will check every month to make sure your hackney carriage is insured.
    </p>
    <h3>Right to work in the UK for hackney carriage vehicles</h3>
    <p>You will need to provide us with evidence that you are legally allowed to work in the UK if you are:</p>
    <ul>
    <li>applying to become a licensed driver</li>
    <li>applying to become an operator</li>
    <li>a hackney carriage or private hire vehicle licence holder</li>
    </ul>

    <p>To prove this, we will need to see your original right to work documents in person and take copies of them.
    This information can be provided when you make your in-person Disclosure and Barring Service application to us.
    Once we have seen you in person, we will not need to see you again unless you have right to work restrictions.</p>

    <h4>Documents that we accept</h4>
    <p>You will need to provide one of the documents listed below.</p>
    <ul>
    <li>British passport</li>
    <li>Irish passport</li>
    <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>passport from immigration control</li>
    <li>immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name</li>
    <li>UK birth certificate, together with an official document giving your permanent NI number and name</li>
    <li>Channel Islands, Isle of Man or Ireland birth certificate, presented with an official document giving your permanent NI number and name</li>
    <li>certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name</li>
    </ul>

    <h4>Under immigration controls</h4>
    <p>If you are under immigration controls, then we will only issue a licence for the period that you are entitled to work in the UK.
    We will need to see one of the documents listed below before we can issue your licence:</p>
    <ul>
    <li>current passport</li>
    <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>current immigration status document containing a photograph issued by the Home Office</li>
    </ul>

    <h4>Right to work is time-limited</h4>
    <p>Where your right to work in the UK is a time-limited period, we will need to see a:</p>
    <ul>
    <li>document or certificate of application (non-digital) issued by the Home Office</li>
    <li>document from the Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>application Registration Card issued by the Home Office that says you can take employment</li>
    <li>positive Verification Notice issued by the Home Office Employer Checking Service</li>
    </ul>

    <h3>Renew your hackney carriage vehicle licence</h3>
    <h4>About this licence</h4>
    <p>We will usually contact you when your hackney carriage vehicle licence needs to be renewed. If we do not, please contact us immediately to notify us that your licence is due to expire and requires a test.
    You should renew your licence in the month that it is due to end. If you miss this deadline, you will have up to one month to renew it.
    After that date, you will have to apply for a new hackney carriage vehicle licence which will need to meet the vehicle age specification.</p>

    <h4>Cost</h4>
    <p>Renewing your hackney carriage hire vehicle licence costs £212.
    You will need to pay this online when you complete your application form.</p>

    <h4>Information you will need</h4>
    <p>You will need to upload the following information when you renew your licence:</p>
    <ul>
    <li>valid insurance certificate</li>
    <li>compliance certificate</li>
    </ul>

    <h4>Issuing the licence</h4>
    <p>We will process your application within 5 working days of receipt if it is complete.
    We will email you a PDF version of your licence and send your plate and a paper version of the licence by post.
    If your vehicle has been for a test within the last week of the month, we will give you the option to collect it so that you have the plate in time for the end of the month.
    If you are not available to collect your plate, you can send someone to collect it on your behalf.</p>

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


const medicalNeeds = new ContentBusiness(
    "medicalNeeds",
    "Medical exemptions",
    "Transfer a vehicle licence",
    `
    <h3>Medical exemptions</h3>
    <p>Under the Equality Act 2010, the law says that you should carry passengers with assistance dogs and passengers in wheelchairs in your taxi. You should provide these passengers with the help they need, and not charge them extra for doing so.</p>
    <p>You might have a medical reason why you cannot do these things, and this is known as a medical exemption. There are two types of medical exemption:</p>
    <ul>
    <li>Section 166 exemption certificate (passengers in wheelchairs)</li>
    <li>Section 169 exemption certificate (assistance dogs in taxis)</li>
    </ul>

    <h4>About certificates</h4>

    <h4>Section 166 exemption certificate</h4>
    <p>You can apply for this certificate if your physical health makes it impossible or very difficult to help passengers in wheelchairs. If you have been successful, you will be given a certificate which you must display in your taxi and present on request.</p>

    <h4>Section 169 exemption certificate</h4>
    <p>You can apply for this certificate if you have a medical condition caused by being near dogs. If you have been successful, you will be given a certificate. You must display this in your taxi or present it if you are asked to.</p>

    <h4>How to apply</h4>
    <p>To apply for these certificates, you will need to complete a medical assessment. This will provide us with evidence from your doctor, or a doctor that has been approved by us, that you cannot carry passengers with:</p>
    <ul>
    <li>wheelchairs</li>
    <li>assistance dogs</li>
    </ul>

    <h3>Sheffield City Council Taxi Driver Medicals</h3>
    <p>The City Council deals with two types of applicants:</p>
    <ul>
    <li>those already licensed who are applying to renew their licence. Under current policy they will be asked to complete and pass a medical at 45, then every 5 years until they reach 65 then annually whilst they continue to be licensed. There is currently no age restriction on Hackney Carriage and Private Hire drivers.</li>
    <li>new applicants who are applying for their first licence in Sheffield. These applicants may have licences with other Authorities, but the current policy of Sheffield City Council is that an applicant has to undertake all tests required by The Licensing Sub Committee, whether they are licensed elsewhere or not, and this includes the medical examination.</li>
    </ul>

    <h4>Procedures for booking medicals</h4>
    <p>A medical assessment may be carried out by the individual’s own GP, or a GP approved by the Licensing Authority. A list of approved practitioners will be provided by the Authority. Contact details of the GPs and costs of the medicals are made available on the list.</p>

    <h4>On arrival at the medical examination</h4>

    <p><strong>Existing License Holders</strong></p>
    <ul>
    <li>will have been provided with a medical pack, including a DVLA Group 2 medical form and guidance, and a Certificate of Medical Fitness.</li>
    <li>Identification – They must supply you with their Photo Card DVLA drivers’ licence, or if not, photo ID such as a passport. They will also present their current Private Hire and Hackney Carriage drivers identification badge. The number on the Badge should match the number on the medical (D4) form.</li>
    </ul>

    <p><strong>New Applicants</strong></p>
    <ul>
    <li>Again, the applicant will have been supplied with their Sheffield City Council medical pack.</li>
    <li>Identification – They must provide a Photo Card drivers licence, a second form of identification which must be either a passport or other form of photo id, and a bank statement or utility bill.</li>
    </ul>

    <p>If there are any doubts about the identification of ANY attendee – either an existing licence holder or new applicant - then the medical should be aborted until those matters are resolved.</p>

    <h4>If the driver passes the medical - new or renewal</h4>
    <p>If the driver passes the medical, you must, upon completion, inform him/her of this and (in the case of existing license holders) return to him/her the copies of previous medicals. You should then supply them with the completed passed medical form and Certificate of Medical Fitness. If this is not at the point or time of the medical, you must make the appropriate arrangements with the applicant to supply that information.</p>
    <p>Please be aware that any renewal applicant cannot receive their licence until they have presented the Certificate of Medical Fitness to the Licensing Service and must allow 3 working days for the administration process.</p>

    <h4>If the driver fails the medical - new or renewal</h4>
    <p>If the driver fails the medical, you are required to explain the reason for failure to the applicant. You must retain the medical notes and failure certificate, and these must then be returned securely to the Licensing Service, within 7 working days of the date of the medical.</p>

    <h4>If you need further information</h4>
    <p>In some circumstances you may require information from other sources such as consultants or the drivers own GP. In such cases, you should retain the notes of the applicant, and inform him/her of the reasons for this. You must then inform the applicant of what is required and what he/she or you will have to do next.</p>
    <p>We have informed applicants that in these cases, the doctor who undertook the medical and retained the papers will be the doctor that has to deal with their particular case, and that they will have to return to you to be passed medically fit.</p>

    <h4>Recommendations as to term of licence</h4>
    <p>The current Council Policy is to issue drivers with a licence for either 1, 2 or 3 years. You can make recommendations to the Council on the length of the Licence granted, up to the maximum of 3 years. You may see some underlying health issues that you believe require monitoring, and you may wish to inform the Council that, in your opinion, the applicant should be granted a shorter than normal term licence and that at the end of that licence he/she should be medically examined again.</p>
    <p>If a doctor makes a recommendation that a driver should be medically examined again within a period of time that is outside the current policies, the licence issued will reflect that, e.g. the doctor may state that the driver should be seen in 12 months, thus a licence would be issued only for a 12 month period.</p>
    <p>Doctors may also recommend that the applicant or driver be medically examined again outside of the normal referral policy, e.g., that a driver is seen prior to the birthday trigger points as set out by the policy or every three years rather than five years periods etc. This would be recorded by the Licensing Service and would not alter unless a doctor, after a full medical examination, determined that the driver could be placed back on the normal referrals’ procedure and timescales.</p>

    <h4>Rights to appeal decisions</h4>
    <p>As with all legislative matters, with any judgement made on an application to the Council there are some avenues for applicants to appeal the Decision of the Council. Your decision as a doctor becomes the Council decision as the reasons for refusal.</p>
    <p>The applicant may challenge your findings, and if they wish to do so they may firstly ask for their application to be referred to the Licensing Sub Committee for consideration. If the Sub Committee decide to revoke or refuse to grant or renew their licence the applicant has a right of appeal to a Magistrates Court.</p>
    <p>If an applicant asks for a Sub Committee Referral, or appeals a decision of the Council taken as recommended by you as the doctor, then you will be required to supply the Council with written statements explaining the decision. This is at no extra cost to Sheffield City Council.</p>
    <p>Please be aware that on very rare occasions doctors have been summoned to Court or the Licensing Sub Committee to give evidence in person. This is usually at the request of the appellant or their legal representatives. In winning cases at the Magistrates Court, costs can be applied for. Invariably, full costs are never awarded to the Council and appellants usually only have to pay a contribution to the costs. Any attendance cost you incur for such instances will have to be recovered through the legal system and not from Sheffield City Council.</p>

    <h4>On completion of the medical examination</h4>
    <p>You are required to inform the Licensing Service of the attendance of the applicant, and the outcome of the medical within 48 hours of the date of the medical. Email communication will be accepted.</p>
    <p>This does not override the need to supply the full written details of a failed medical within 7 working days of the date of the test.</p>

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


const applyTaxiDriver = new ContentBusiness(
    "applyTaxiDriver",
    "Apply for a new taxi driver licence",
    "Apply for a new taxi driver licence",
    `
    <h3>Fit and Proper Test : Stage 1</h3>
    <h4>Obtaining the "Certificate in Introduction to the Role of Professional Taxi and Private Hire Driver"</h4>
    <p>Sheffield City College or other providers from Gov. UK</p>

    <h4>Proof of right to work document?</h4>
    <ul>
    <li>British passport</li>
    <li>Irish passport</li>
    <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>passport from immigration control</li>
    <li>immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name</li>
    <li>UK birth certificate, together with an official document giving your permanent NI number and name</li>
    <li>Channel Islands, Isle of Man or Ireland birth certificate, presented with an official document giving your permanent NI number and name</li>
    <li>certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name</li>
    </ul>

    <h4>If you are under immigration controls</h4>
    <ul>
    <li>current passport</li>
    <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>current immigration status document containing a photograph issued by the Home Office</li>
    </ul>

    <h4>If the applicant is under immigration controls - applicable limitations</h4>
    <p>only issue a licence for the period that you are entitled to work in the UK.</p>

    <h4>If the right to work in the UK is a time-limited period</h4>
    <ul>
    <li>document or certificate of application (non-digital) issued by the Home Office</li>
    <li>document from the Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>application Registration Card issued by the Home Office that says you can take employment</li>
    <li>positive Verification Notice issued by the Home Office Employer Checking Service</li>
    </ul>

    <h3>Fit and Proper Test : Stage 2</h3>
    <h4>Age & experience</h4>
    <p>Must be above 21 years old & have held a Driver and Vehicle Licensing Agency (DVLA) driver licence for more than 12 months.</p>

    <h4>Knowledge test pass mark</h4>
    <p>score at least 80% in each section to pass the Knowledge Test</p>

    <h4>Driving standards test</h4>
    <p>Pass a driving standards test carried out by a driving standards examiner at our Transport Department. The test will include any 3 of the following:</p>
    <ul>
    <li>emergency stop</li>
    <li>left-hand reverse</li>
    <li>right-hand reverse</li>
    <li>turn in the road</li>
    <li>reverse parking</li>
    </ul>

    <h4>Requirements for Driving standards test</h4>
    <ul>
    <li>must be 21 years of age</li>
    <li>Valid for one year</li>
    <li>Make a boking</li>
    <li>DVLA driving licence number in full</li>
    </ul>

    <h4>Cost for Driving standards test</h4>
    <p>£ 70</p>

    <h4>Vehicles that can use for the Driving standards test</h4>
    <p>With the right insurance:</p>
    <ul>
    <li>driving instructor’s vehicle</li>
    <li>rental vehicle</li>
    <li>your vehicle</li>
    <li>licenced vehicle that is registered in applicant's name and which applicant has a licence to drive (all licensing livery, including the licence plate should be removed before arriving at Staniforth Road)</li>
    </ul>

    <h4>Disclosure and barring checks</h4>
    <p>An Enhanced Disclosure Certificate with Barred Check Lists from the Disclosure and Barring Service (DBS)</p>
    <p>It will look at all convictions and particular attention will be given to the following:</p>
    <ul>
    <li>crimes resulting in death</li>
    <li>exploitation</li>
    <li>offences resulting in violence</li>
    <li>possession of a weapon</li>
    <li>sex and indecency offences</li>
    <li>dishonesty</li>
    <li>drugs</li>
    <li>discrimination</li>
    <li>motoring convictions (drink driving, driving under the influence of drugs, using a hand-held device or telephone whilst driving)</li>
    </ul>
    <p>If you have had one or more conviction recorded for any of the above offences, your application may be referred to the Licensing Sub-Committee.</p>

    <h4>To apply for an Enhanced Disclosure Certificate with Barred Check Lists</h4>
    <ul>
    <li>Driver needs to email taxilicensing@sheffield.gov.uk to get a DBS pack</li>
    <li>complete the DBS form and set up an appointment to have documents checked face-to-face at the reception</li>
    <li>Service will send the complete application to DBS, they will make the necessary checks and return the certificate to the driver/applicant.</li>
    <li>Applicant can apply for DBS certificate when taking knowledge test or driving standards test.</li>
    </ul>
    <p>Cost: The DBS certificate costs £49.50.</p>

    <h4>DBS Update Service</h4>
    <p>To check whether applicant's DBS is current when granting the licence, applicant must send a copy of the full certificate to us by email and sign-up to the DBS Update Service within 30 days of receiving the certificate.</p>
    <p>Applicant must maintain subscription with the DBS service by paying an annual fee of £16 per year to DBS.</p>

    <h4>DVLA checks</h4>
    <p>Must supply the applicant's Driving and Vehicle Licensing Agency (DVLA) driving licence number.
    The applicant might receive an email from a company called TaxiPlus to give consent to allow the service to carry out these checks.</p>

    <h4>Taxi driver medical assessments</h4>
    <p>Must pass a DVLA Group 2 Medical Fitness examination when an applicant first apply to be a licenced driver.</p>

    <h4>Group 2 Medical Fitness examinations will focus on:</h4>
    <ul>
    <li>neurological (brain and nerves) disorders</li>
    <li>cardiovascular (heart and blood vessels) disorders</li>
    <li>diabetes</li>
    <li>mental health</li>
    <li>drug or alcohol misuse</li>
    <li>visual (eyesight) disorders</li>
    <li>renal (kidney, ureters and urethra) disorders</li>
    <li>respiratory (breathing) disorders</li>
    <li>any other conditions</li>
    </ul>

    <h4>Medical assessments by age</h4>
    <ul>
    <li>45 years of age or older need to take a medical examination every 5 years.</li>
    <li>65 years of age or older need to take a medical examination every year.</li>
    <li>Where recommended by the GP may be required to a take medical examination, or other medical tests, on a more frequent basis.</li>
    </ul>

    <h4>Apply for the medical assessments</h4>
    <p>Get a medical assessment form from service (email, post, download), and it needs to be completed either by applicant's doctor or one recommended by us. A driver can apply for the medical exemptions if applicable.</p>

    <h4>Returning medical assessment</h4>
    <ul>
    <li>Email - Take clear photos of all pages and email them to taxilicensing@sheffield.gov.uk.</li>
    <li>Post - by recorded delivery to Licensing Service Block C, Staniforth Road Depot, Staniforth Road Sheffield S9 3HD</li>
    <li>In-person - drop the medical pack off in the post box on site</li>
</ul>

    <h3>Fit and Proper Test : Stage 3</h3>
    <h4>Apply for a new taxi driver licence</h4>
    <p>Applicants who completed stages 1 & 2 can apply for the new combined ph/hc driver licence.</p>

    <h4>New applications are defined as follows</h4>
    <ol>
    <li>Applicant has never held a licence with us.</li>
    <li>Applicant has held a licence previously but the expiry of that licence is over 12 months since the date they make the application and</li>
    <li>An applicant who applies after 1 calendar month since the expiry of his last licence.</li>
    </ol>

    <h4>The fee for a new taxi driver licence depends on how many years the applicant wants it to last</h4>
    <ul>
    <li>one year - £223</li>
    <li>2 years - £245</li>
    <li>3 years - £268</li>
    </ul>


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

  const applyPrivateLicence = new ContentBusiness(
    "applyPrivateLicence",
    "Transfer a vehicle licence",
    "Transfer a vehicle licence",
    `
    <h3>Fit and Proper Test : Stage 1</h3>
    <h4>Obtaining the "Certificate in Introduction to the Role of Professional Taxi and Private Hire Driver"</h4>
    <p>Sheffield City College or other providers from Gov. UK</p>

    <h4>Proof of right to work document?</h4>
    <ul>
    <li>British passport</li>
    <li>Irish passport</li>
    <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>passport from immigration control</li>
    <li>immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name</li>
    <li>UK birth certificate, together with an official document giving your permanent NI number and name</li>
    <li>Channel Islands, Isle of Man or Ireland birth certificate, presented with an official document giving your permanent NI number and name</li>
    <li>certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name</li>
    </ul>

    <h4>If you are under immigration controls</h4>
    <ul>
    <li>current passport</li>
    <li>document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>current immigration status document containing a photograph issued by the Home Office</li>
    </ul>

    <h4>If the applicant is under immigration controls - applicable limitations</h4>
    <p>Only issue a licence for the period that you are entitled to work in the UK.</p>

    <h4>If the right to work in the UK is a time-limited period</h4>
    <ul>
    <li>document or certificate of application (non-digital) issued by the Home Office</li>
    <li>document from the Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man</li>
    <li>application Registration Card issued by the Home Office that says you can take employment</li>
    <li>positive Verification Notice issued by the Home Office Employer Checking Service</li>
    </ul>
    <h3>Fit and Proper Test : Stage 2</h3>
    <h4>Age & experience</h4>
    <p>Must be above 21 years old & have held a Driver and Vehicle Licensing Agency (DVLA) driver licence for more than 12 months.</p>

    <h4>Knowledge test pass mark</h4>
    <p>Score at least 80% in each section to pass the Knowledge Test</p>

    <h4>Driving standards test</h4>
    <p>Pass a driving standards test carried out by a driving standards examiner at our Transport Department. The test will include any 3 of the following:</p>
    <ul>
    <li>emergency stop</li>
    <li>left-hand reverse</li>
    <li>right-hand reverse</li>
    <li>turn in the road</li>
    <li>reverse parking</li>
    </ul>

    <h4>Requirements for Driving standards test</h4>
    <ul>
    <li>Must be over 21 years of age</li>
    <li>Have held a Driver and Vehicle Licensing Agency (DVLA) driver licence for more than 12 months</li>
    <li>DVLA driving licence number in full</li>
    </ul>

    <h4>Qualifications needed before doing the Driving standards test</h4>
    <ul>
    <li>Level two certificate in the Introduction to the Role of the Professional Taxi and Private Hire Driver</li>
    <li>Safeguarding training</li>
    </ul>

    <h4>Cost for Driving standards test</h4>
    <p>£ 70</p>

    <h4>Vehicles that can be used for the Driving standards test</h4>
    <p>With the right insurance:</p>
    <ul>
    <li>driving instructor’s vehicle</li>
    <li>rental vehicle</li>
    <li>your vehicle</li>
    <li>licenced vehicle that is registered in applicant's name and which applicant has a licence to drive (all licensing livery, including the licence plate should be removed before arriving at Staniforth Road)</li>
    </ul>

    <h4>Disclosure and barring checks</h4>
    <p>An Enhanced Disclosure Certificate with Barred Check Lists from the Disclosure and Barring Service (DBS)</p>
    <p>It will look at all convictions and particular attention will be given to the following:</p>
    <ul>
    <li>crimes resulting in death</li>
    <li>exploitation</li>
    <li>offences resulting in violence</li>
    <li>possession of a weapon</li>
    <li>sex and indecency offences</li>
    <li>dishonesty</li>
    <li>drugs</li>
    <li>discrimination</li>
    <li>motoring convictions (drink driving, driving under the influence of drugs, using a hand-held device or telephone whilst driving)</li>
    </ul>
    <p>If you have had one or more conviction recorded for any of the above offences, your application may be referred to the Licensing Sub-Committee.</p>

    <h4>To apply for an Enhanced Disclosure Certificate with Barred Check Lists</h4>
    <ul>
    <li>Driver needs to email taxilicensing@sheffield.gov.uk to get a DBS pack</li>
    <li>Complete the DBS form and set up an appointment to have driver's documents checked face-to-face at our reception</li>
    <li>Taxi licensing service will send the driver's complete application to DBS, they will make the necessary checks and return the certificate to driver</li>
    <li>Applicant can apply for DBS certificate when taking knowledge test and driving standards test</li>
    </ul>
    <p>Cost: The DBS certificate costs £49.50.</p>

    <h4>DBS Update Service</h4>
    <p>To check whether applicant's DBS is current when granting the licence, applicant must send a copy of the full certificate to us by email and sign-up to the DBS Update Service within 30 days of receiving the certificate.</p>
    <p>Applicant must maintain subscription with the DBS service by paying an annual fee of £16 per year to DBS.</p>

    <h4>DVLA checks</h4>
    <p>Must supply the applicant's Driving and Vehicle Licensing Agency (DVLA) driving licence number. The applicant might receive an email from a company called TaxiPlus to give consent to allow the service to carry out these checks.</p>

    <h4>Taxi driver medical assessments</h4>
    <p>Must pass a DVLA Group 2 Medical Fitness examination when an applicant first applies to be a licenced driver.</p>

    <h4>Group 2 Medical Fitness examinations will focus on:</h4>
    <ul>
    <li>neurological (brain and nerves) disorders</li>
    <li>cardiovascular (heart and blood vessels) disorders</li>
    <li>diabetes</li>
    <li>mental health</li>
    <li>drug or alcohol misuse</li>
    <li>visual (eyesight) disorders</li>
    <li>renal (kidney, ureters and urethra) disorders</li>
    <li>respiratory (breathing) disorders</li>
    <li>any other conditions</li>
    </ul>

    <h4>Medical assessments by age</h4>
    <ul>
    <li>45 years of age or older need to take a medical examination every 5 years</li>
    <li>65 years of age or older need to take a medical examination every year</li>
    <li>Where recommended by the GP, a more frequent medical examination or other medical tests may be required</li>
    </ul>

    <h4>Apply for the medical assessments</h4>
    <p>Get a medical assessment form from us, and it needs to be completed either by applicant's doctor or one recommended by us.</p>

    <h4>Returning medical assessment</h4>
    <ul>
    <li>Email - Take clear photos of all pages and email them to taxilicensing@sheffield.gov.uk</li>
    <li>Post - by recorded delivery to Licensing Service Block C, Staniforth Road Depot, Staniforth Road Sheffield S9 3HD</li>
    <li>In-person - drop the medical pack off in the post box on site</li>
    </ul>


    <h3>Fit and Proper Test : Stage 3</h3>
    <h4>Apply for a new taxi driver licence</h4>
    <p>Applicants who completed stages 1 & 2 can apply for the new combined ph/hc driver licence.</p>

    <h4>New applications are defined as follows</h4>
    <ol>
    <li>Applicant has never held a licence with us.</li>
    <li>Applicant has held a licence previously but the expiry of that licence is over 12 months since the date they make the application</li>
    <li>An applicant who applies after 1 calendar month since the expiry of his last licence</li>
    </ol>

    <h4>The fee for a new taxi driver licence depends on how many years the applicant wants it to last</h4>
    <ul>
    <li>one year - £223</li>
    <li>2 years - £245</li>
    <li>3 years - £268</li>
    </ul>

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
    renewPriviateLicence,
    renewVechicleLicence,
    medicalNeeds,
    applyTaxiDriver,
    applyPrivateLicence
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


  
