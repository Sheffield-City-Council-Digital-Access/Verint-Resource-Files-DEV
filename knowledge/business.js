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

  
const drivingStandardsTestGuide = new ContentBusiness(
  "drivingStandardsTestGuide",
  "Driving Standards Test Guide",
  "**unsure if this is needed** - Apply for the Driving Standards Test as part of a taxi driver licence application with Sheffield City Council.",
  `<h3>Overview</h3>
  <p>The Driving Standards Test is part of the process for applying for a new taxi driver licence with Sheffield City Council. It is designed to assess whether an applicant can drive safely, competently, and to a standard above that expected of an average driver.</p>
  <p>Applicants must pass this test as part of Stage 2 of the “fit and proper” assessment required before submitting a taxi driver licence application.</p>

  <h3>Eligibility Criteria</h3>
  <ul>
    <li>Be at least 21 years old</li>
    <li>Have held a DVLA driving licence for at least 12 months</li>
    <li>Have already completed:</li>
    <ul>
      <li>A Level 2 Certificate in the Introduction to the Role of the Professional Taxi and Private Hire Driver</li>
      <li>Safeguarding training</li>
    </ul>
  </ul>

  <h3>Test Details</h3>
  <p>The test is carried out by a driving standards examiner at the Council’s Transport Department.</p>
  <p>During the assessment, applicants will be tested on practical driving ability and knowledge of road safety. The test will include any three of the following manoeuvres:</p>
  <ul>
    <li>Emergency stop</li>
    <li>Left-hand reverse</li>
    <li>Right-hand reverse</li>
    <li>Turn in the road</li>
    <li>Reverse parking</li>
  </ul>
  <p>Applicants are also assessed on their knowledge of the Highway Code.</p>
  <p>To prepare, the Council recommends studying the Driving and Vehicle Standards Agency (DVSA) Official Guide to Driving.</p>

  <h3>Assessment Outcome</h3>
  <p>To pass the test, applicants must demonstrate a high standard of driving and road safety awareness.</p>
  <p>If an applicant fails:</p>
  <ul>
    <li>They will need to take additional lessons with a qualified instructor</li>
    <li>They must complete this before booking another test</li>
    <li>The test fee is not refundable and must be paid again for a re-test</li>
  </ul>

  <h3>Validity Period</h3>
  <p>A passed Driving Standards Test is valid for one year from the date of passing.</p>

  <h3>Application Process</h3>
  <p>Applications for the Driving Standards Test must be completed online.</p>
  <p>Applicants are required to provide:</p>
  <ul>
    <li>Full DVLA driving licence number (held for at least 12 months)</li>
  </ul>
  <p>A fee is required at the point of application.</p>

  <h3>Fees and Charges</h3>
  <ul>
    <li>Driving Standards Test fee: £75</li>
  </ul>
  <p>Fees are not refunded if:</p>
  <ul>
    <li>The applicant fails the test</li>
    <li>The applicant arrives late and the test cannot be carried out</li>
  </ul>

  <h3>Vehicle Requirements</h3>
  <p>Applicants may use one of the following vehicles for the test:</p>
  <ul>
    <li>Driving instructor’s vehicle</li>
    <li>Rental vehicle</li>
    <li>Personal vehicle</li>
    <li>Licensed vehicle registered in their name (with licence markings removed before attending)</li>
  </ul>
  <p>Applicants must ensure the vehicle used is appropriately insured.</p>

  <h3>Next Steps</h3>
  <p>Once the Driving Standards Test is passed, applicants can proceed with the remaining requirements in Stage 2 of the taxi licensing process before applying for their taxi driver licence.</p>`,
  { buttonLabel: "Apply Online", formName: "drivingStandardsTestForm" },
  { typeKey: "Application" },
  { typeKey: "Apply" },
  {
    type: "Application",
    keywords: [
      "driving standards test",
      "driving",
      "standards",
      "test",
      "taxi driver licence",
      "DVLA",
      "DVSA",
      "driver test",
      "taxi licensing",
      "private hire driver",
      "application",
      "apply driving test",
      "driving assessment",
      "road safety test",
      "drivers licence test",
      "taxi test",
      "drivng standards test",
      "drving",
      "standrds",
      "driving tests",
      "taxi driver tests",
      "standards test"
    ],
    categories: ["Business", "Taxi Licensing"],
  },
  { date: "03/06/2026", name: "Liz Taster" }
);

  const renewHackneyCarriage = new ContentBusiness(
    "renewHackneyCarriage",
    "Renew a Hackney Carriage Vehicle Licence",
    "**To Review** - Information regarding taxi licensing",
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
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

const vechicleInspections = new ContentBusiness(
    "vechicleInspections",
    "Vehicle Inspections and Testing",
    "**To Review** - Information Regarding Taxi Licensing",
    `
        <details class="accordion">
        <summary class="accordion-header">
            <h3>Keeping Your Private Hire or Hackney Carriage Vehicle Safe</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Your vehicle needs to be checked regularly to make sure that it is safe to be used as a licensed private hire or hackney carriage vehicle. Because of high workloads and mileage, it will be tested according to it's age. If your vehicle is older, then it will need to be tested more regularly.<br>
                <br>
                Your vehicle must pass a compliance test at our testing station before we can issue a licence.
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>New Vehicles</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                If your vehicle is new, then it needs to have passed a compliance test before we can issue a licence. This needs to happen even where it would not normally need an MOT test (if it is less than 3 years of age).<br>
                Before we can issue you with a test date you will need to make either a:
                <ul>
                    <li>new private hire vehicle licence application</li>
                    <li>new hackney carriage vehicle licence application</li>
                </ul>
                Once your vehicle has passed the test, you must licence the vehicle within either 10 days (for private hire vehicles) or 14 days (for hackney carriage vehicles) of the vehicle passing it's test.
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Vehicles Already Licenced</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Your vehicle needs to go through a compliance test no more than 4 weeks before it's licence is due to be renewed. <br>
                <br>
                When your vehicle is due to go for a test, we will usually email you about 6 weeks in advance with a date and time of the test.<br>
                <br>
                It is your responsibility to ensure you licence your vehicle on time and email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> or telephone <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2734264')">0114 2734264</a> for a test date if you do not hear from us.   
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Changing Your Test Date</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                If you need to change the test date, you should give us plenty of warning. We will accept nothing less than 24 hours' notice. If you do not give us enough notice to change the test, you will have to pay a missed test fee before you can rebook the test.<br>
                <br>
                You need to attend your vehicle's test. If you can't, then you may be asked to bring your plate back to us for safe keeping.
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>How Often Your Vehicle Needs to be Tested</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                The number of tests depends on how old your vehicle is.<br>
            </p>

            <details class="details-accordion">
            <summary>Private Hire Vehicle Testing</summary>
            <div class="details-accordion-content">
                <p>
                    You will need to test your private hire vehicle at the following intervals: <br>
                    <ul>
                        <li>Under 5 years of age – every 12 months.</li>
                        <li>Over 6 years of age – every 6 months.</li>
                    </ul>
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Hackney Carriage Vehicle Testing</summary>
            <div class="details-accordion-content">
                <p>
                    You will need to test your hackney carriage vehicle at the following intervals:<br>
                    <ul>
                        <li>under 9 years of age – every 12 months.</li>
                        <li>over 9 years of age – every 6 months.</li>
                    </ul>
                    The age of the vehicle and how often it will be tested is made clear by the V5C document that is presented when you apply for a vehicle licence.
                </p>
            </div>
            </details>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Vehicles That Fail</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                If your vehicle fails several tests in a row, you may be required to have your vehicle tested on a more regular basis.<br>
                If this is the case, we will tell you the reasons why we are doing this. You will have to pay for up to a maximum of 3 of these tests in any 12-month period.
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Fees</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <details class="details-accordion">
            <summary>Compliance Test</summary>
            <div class="details-accordion-content">
                <p>
                    Private hire - £54 <br>
                    Hackney carriage - £59 (includes meter check)
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Compliance Test</summary>
            <div class="details-accordion-content">
                <p>
                ********************************No information provided****************************** Jchere
                </p>
            </div>
            </details>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>How We Test</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
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
            JCHERE SEND LINK - https://www.sheffield.gov.uk/taxi-licensing/private-hire-and-hackney-carriage-vehicles/private-hire-vehicle-licence/inspections-and-testing
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>What Happens if it Fails?</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                If your vehicle fails several tests in a row, we may need to do more tests on it. If this is the case, we will tell you the reasons why we are doing this. 
                You will have to pay for up to a maximum of 3 of these tests.
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Where We Test</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
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
        </div>
        </details>
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
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );


  const vechicleCustomerCharter = new ContentBusiness(
    "vechicleCustomerCharter",
    "Vehicle Testing Customer Charter",
    "**To Review** - Information Regarding Taxi Licensing",
    `    
        <details class="accordion">
        <summary class="accordion-header">
            <h3>Keeping Your Vehicle on the Road</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Whether private hire or hackney carriage, our vehicle testing charter describes what we expect from you and what you can expect from our service.
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Our Promise to You</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <details class="details-accordion">
            <summary>Thorough Testing</summary>
            <div class="details-accordion-content">
                <p>
                    We ensure every vehicle examination is detailed, of high quality and completely independent.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Service</summary>
            <div class="details-accordion-content">
                <p>
                    We provide a prompt and polite service to all users
                </p>
            </div>
            </details>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Re-Tests</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                You can visit the test centre for general re-tests between 9am and 15:30pm without the need to pre book.<br>
                Vehicles that fail with 8 faults or more must pre book a 15:30pm appointment.<br>
            </p>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>We Will Always Be Responsive</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <details class="details-accordion">
            <summary>Complaints</summary>
            <div class="details-accordion-content">
                <p>
                    If you want to make a complaint, we will clearly display and explain the steps you need to follow.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Your Feedback</summary>
            <div class="details-accordion-content">
                <p>
                    We value your comments, complaints and ideas about our service. We will aim to acknowledge your feedback within seven days of receipt (or within 3 days for emails).
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Our Responses</summary>
            <div class="details-accordion-content">
                <p>
                    We will aim to respond fully to your questions or complaints within 28 days. If we can’t meet this timeframe, we will let you know of the progress and give you a date when we will reply.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Appointments</summary>
            <div class="details-accordion-content">
                <p>
                    If you contact us without an appointment, we will try to see you as quickly as possible.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Keeping you Informed</summary>
            <div class="details-accordion-content">
                <p>
                    We will keep you updated if there are any delays to your vehicle testing.
                </p>
            </div>
            </details>
        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Your Commitment to us</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <details class="details-accordion">
            <summary>Keep us Updated</summary>
            <div class="details-accordion-content">
                <p>
                    Tell us of us of any changes in your personal life that may affect the services we provide to you. 
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Your Appointment</summary>
            <div class="details-accordion-content">
                <p>
                    Attend your scheduled appointment times or let us know in advance if you cannot make it. 
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Your Behaviour</summary>
            <div class="details-accordion-content">
                <p>
                    Please behave politely and considerately, so that we can provide you and other customers with a high-quality service. 
                </p>
            </div>
            </details>
        </div>
        </details>
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
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

const surrenderLicence = new ContentBusiness(
    "surrenderLicence",
    "Surrender a Vehicle Licence",
    "What to do if you decide to stop using your vehicle as a licenced vehicle.",
    `
    <p>
        To surrender a vehicle licence customers need to complete an online form.        
    </p>

    <p>
        For <strong>private hire</strong> vehicles, customers need to click on <strong>Surrender your vehicle licence</strong> at this link:
        <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/surrender"target="_blank">
        Surrender a private hire vehicle licence | Sheffield City Council</a></p>
    </p>

    <p>
        [insert send link]
    </p>

    <p>
        For <strong>hackney carriage</strong> vehicles, customers need to click on <strong>Surrender your vehicle licence</strong> at this link:
        <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/Surrender-vehicle-licence"target="_blank">
        Surrender a hackney carriage vehicle licence | Sheffield City Council</a></p>
    </p>

    <p>
        [insert send link]
    </p>
    
    <p>Where possible, the customer needs to return their plate to us.</p>

    <h3>Re-licencing a vehicle</h3>
    <p>
       If the customer wants to licence their vehicle again, they need to apply for a new licence.<br>
       This means the customer must go through the new application process again.
    </p>
    `,
    { buttonLabel: "", formName: ""},
    { typeKey: "" },
    { typeKey: ""},
    {
      type: "Request",
      keywords: [
        "taxi",
        "licence",
        "license",
        "surrender",
        "surender",
        "surrendar",
        "de-licence",
        "delicence",
        "de-license",
        "delicense",
        "vehicle",
        "vehcle",
        "private hire",
        "hackney",
        "carriage",
        "hckney",
        "hackny",
      ],
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "11/06/2026", name: "Liz Taster"} 
  );

const transferLicence = new ContentBusiness(
    "transferLicence",
    "Transfer a Vehicle Licence",
    "Guidance on the process to transfer a vehicle licence",
    `
        <h3>Overview</h3>
            <p>
                If you transfer your vehicle licence to another person or company, <strong>you must contact us within 14 days</strong>.<br> 
                It is an offence if you to fail to notify us that your vehicle licence has been transferred to another person or company.<br>
            </p>
            <p>
                Only the previous vehicle owner can request to transfer a vehicle licence.<br>
                The customer must complete the online form to request to transfer a vehicle licence.<br> 
                The same form can be used for both private hire and hackney carriage vehicles.<br>
            </p>

        <h3>How to Transfer a Vehicle Licence</h3>
            <p>
                The previous licence holder must complete the online form to request to transfer a vehicle licence. The form can be found here:
                <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/transfer"target="_blank">
                Transfer a vehicle licence | Sheffield City Council</a>
            </p>

            <p> [Insert send link] </p>

            <p>
                The customer will need to tell us the following things:
            </p>
                <ul>
                    <li>details of the vehicle licence</li>
                    <li>details of the person, business or partnership </li>
                    <li>details of the person, business or partnership the licence is being transferred to</li>
                    <li>where this is a parnership, details of all partners need to be submitted</li>
                </ul>
            <p>
               The information provided will be used to contact the new licence holder(s) to complete a declaration form.
            </p>

        <h3>Cost</h3>
            <p>
                The fee to transfer a taxi licence is <strong>£33</strong>. The fee is payable by the previous licence holder.
            </p>
        
        <h3>After Applying</h3>
            <p>
                <strong>[***Information from service is needed here to explain what happens next in the process and timeframes***]</strong>
            </p>

    `,
    { buttonLabel: "", formName: ""},
    { typeKey: "" },
    { typeKey: ""},
    {
      type: "Request",
      keywords: [
        "transfer",
        "vehicle",
        "licence",
        "tranfer",
        "trasnfer",
        "vehcle",
        "license",
        "taxi",        
      ],
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "11/06/2026", name: "Liz Taster"} 
  );

    const renewPriviateLicence = new ContentBusiness(
    "renewPriviateLicence",
    "Renewing a Private Hire Vehicle Licence",
    "**To Review** - Renewing a private hire vehicle licence",
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
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );


const medicalNeeds = new ContentBusiness(
    "medicalNeeds",
    "Medical Exemptions",
    "**To Review** - Medical Needs",
    `
    <p>
        Under the Equality Act 2010, the law says that you should carry passengers with assistance dogs and passengers in wheelchairs in your taxi.<br>
        You should provide these passengers with the help they need, and not charge them extra for doing so.<br>
        You might have a medical reason why you cannot do these things, and this is known as a medical exemption. There are two types of medical exemption:
        <ul>
            <li>Section 166 exemption certificate (passengers in wheelchairs)</li>
            <li>Section 169 exemption certificate (assistance dogs in taxis)</li>
        </ul>
    </p>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>About Certificates</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">

            <details class="details-accordion">
            <summary>Section 166 exemption certificate</summary>
            <div class="details-accordion-content">
                <p>
                    You can apply for this certificate if your physical health makes it impossible or very difficult to help passengers in wheelchairs.<br>
                    If you have been successful, you will be given a certificate which you must display in your taxi and present on request.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Section 169 exemption certificate</summary>
            <div class="details-accordion-content">
                <p>
                    You can apply for this certificate if you have a medical condition caused by being near dogs.<br>
                    If you have been successful, you will be given a certificate. You must display this in your taxi or present it if you are asked to.
                </p>
            </div>
            </details>

        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>How to apply</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                To apply for these certificates, you will need to complete a medical assessment.<br> 
                This will provide us with evidence from your doctor, or a doctor that has been approved by us, that you cannot carry passengers with:
                <ul>
                    <li>Wheelchairs</li>
                    <li>assistance dogs</li>
                </ul>
            </p>
        </div>
        </details>


        <details class="accordion">
        <summary class="accordion-header">
            <h3>Sheffield City Council Taxi Driver Medicals</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
        <p>
            The City Council deals with two types of applicants:
        </p>
        <details class="details-accordion">
            <summary>Those already licensed who are applying to renew their licence</summary>
            <div class="details-accordion-content">
                <p>
                     Under current policy they will be asked to complete and pass a medical at 45, then every 5 years until they reach 65 then annually whilst they continue to be licensed.<br>
                    There is currently no age restriction on Hackney Carriage and Private Hire drivers.
           
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>New applicants who are applying for their first licence in Sheffield</summary>
            <div class="details-accordion-content">
                <p>
                    These applicants may have licences with other Authorities, but the current policy of Sheffield City Council is that an applicant has to undertake all tests required by The Licensing Sub Committee, whether they are licensed elsewhere or not, and this includes the medical examination.
                </p>
            </div>
            </details>

            <br>

            <h4>Procedures for booking medicals<h4>
            <p>
                A medical assessment may be carried out by the individual’s own GP, or a GP approved by the Licensing Authority. <br>
                A list of approved practitioners will be provided by the Authority. Contact details of the GPs and costs of the medicals are made available on the list.
            </p>
            <h4>On arrival at the medical examination</h4>

            <details class="details-accordion">
            <summary>Existing License Holders</summary>
            <div class="details-accordion-content">
                <p>
                    <ul>
                        <li>Will have been provided with a medical pack, including a DVLA Group 2 medical form and guidance, and a Certificate of Medical Fitness.</li>
                        <li>Identification – They must supply you with their Photo Card DVLA drivers’ licence, or if not, photo ID such as a passport. They will also present their current Private Hire and Hackney Carriage drivers identification badge. The number on the Badge should match the number on the medical (D4) form.</li>
                    </ul>
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>New Applicants</summary>
            <div class="details-accordion-content">
                <p>
                    <ul>
                        <li>Will have been provided with a medical pack, including a DVLA Group 2 medical form and guidance, and a Certificate of Medical Fitness.</li>
                        <li>Identification – They must supply you with their Photo Card DVLA drivers’ licence, or if not, photo ID such as a passport. They will also present their current Private Hire and Hackney Carriage drivers identification badge. The number on the Badge should match the number on the medical (D4) form.</li>
                    </ul>
                </p>
            </div>
            </details>

            <p>
                If there are any doubts about the identification of ANY attendee – either an existing licence holder or new applicant - then the medical should be aborted until those matters are resolved.
            </p>


            <details class="details-accordion">
            <summary>If the driver passes the medical - new or renewal</summary>
            <div class="details-accordion-content">
                <p>
                   If the driver passes the medical, you must, upon completion, inform them of this and (in the case of existing license holders) return to them the copies of previous medicals. You should then supply them with the completed passed medical form and Certificate of Medical Fitness.<br> 
                   If this is not at the point or time of the medical, you must make the appropriate arrangements with the applicant to supply that information.<br>
                    Please be aware that any renewal applicant cannot receive their licence until they have presented the Certificate of Medical Fitness to the Licensing Service and must allow 3 working days for the administration process.
                </p>
            </div>
            </details>


            <details class="details-accordion">
            <summary>If the driver fails the medical - new or renewal</summary>
            <div class="details-accordion-content">
                <p>
                    If the driver fails the medical, you are required to explain the reason for failure to the applicant.<br>
                    You must retain the medical notes and failure certificate, and these must then be returned securely to the Licensing Service, within 7 working days of the date of the medical.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>If you need further information</summary>
            <div class="details-accordion-content">
                <p>
                    In some circumstances you may require information from other sources such as consultants or the drivers own GP.<br> 
                    In such cases, you should retain the notes of the applicant, and inform him/her of the reasons for this. <br>
                    You must then inform the applicant of what is required and what he/she or you will have to do next.
                    <br>
                    We have informed applicants that in these cases, the doctor who undertook the medical and retained the papers will be the doctor that has to deal with their particular case, and that they will have to return to you to be passed medically fit.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Recommendations as to term of licence</summary>
            <div class="details-accordion-content">
                <p>
                    The current Council Policy is to issue drivers with a licence for either 1, 2 or 3 years.<br>
                    You can make recommendations to the Council on the length of the Licence granted, up to the maximum of 3 years.<br>
                    You may see some underlying health issues that you believe require monitoring, and you may wish to inform the Council that, in your opinion, the applicant should be granted a shorter than normal term licence and that at the end of that licence they should be medically examined again.<br>
                    <br>
                    If a doctor makes a recommendation that a driver should be medically examined again within a period of time that is outside the current policies, the licence issued will reflect that, e.g. the doctor may state that the driver should be seen in 12 months, thus a licence would be issued only for a 12 month period.<br>
                    <br>
                    Doctors may also recommend that the applicant or driver be medically examined again outside of the normal referral policy, e.g., that a driver is seen prior to the birthday trigger points as set out by the policy or every three years rather than five years periods etc. This would be recorded by the Licensing Service and would not alter unless a doctor, after a full medical examination, determined that the driver could be placed back on the normal referrals’ procedure and timescales.
                </p>
            </div>
            </details>


            <details class="details-accordion">
            <summary>Rights to appeal decisions</summary>
            <div class="details-accordion-content">
                <p>
                    As with all legislative matters, with any judgement made on an application to the Council there are some avenues for applicants to appeal the Decision of the Council.<br>
                    Your decision as a doctor becomes the Council decision as the reasons for refusal.<br>
                    <br>
                    The applicant may challenge your findings, and if they wish to do so they may firstly ask for their application to be referred to the Licensing Sub Committee for consideration.<br> 
                    If the Sub Committee decide to revoke or refuse to grant or renew their licence the applicant has a right of appeal to a Magistrates Court.
                    <br>
                    If an applicant asks for a Sub Committee Referral, or appeals a decision of the Council taken as recommended by you as the doctor, then you will be required to supply the Council with written statements explaining the decision.<br> 
                    This is at no extra cost to Sheffield City Council.<br>
                    <br>
                    Please be aware that on very rare occasions doctors have been summoned to Court or the Licensing Sub Committee to give evidence in person.<br> 
                    This is usually at the request of the appellant or their legal representatives.<br> 
                    In winning cases at the Magistrates Court, costs can be applied for. Invariably, full costs are never awarded to the Council and appellants usually only have to pay a contribution to the costs.<br>
                    Any attendance cost you incur for such instances will have to be recovered through the legal system and not from Sheffield City Council.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>On completion of the medical examination</summary>
            <div class="details-accordion-content">
                <p>
                    You are required to inform the Licensing Service of the attendance of the applicant, and the outcome of the medical within 48 hours of the date of the medical. Email communication will be accepted.<br>
                    <br>
                    This does not override the need to supply the full written details of a failed medical within 7 working days of the date of the test.
                </p>
            </div>
            </details>

        </div>
        </details>
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
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );


const renewDriverLicence = new ContentBusiness(
    "renewDriverLicence",
    "Renew a Driver Licence",
    "**To Review** - Renew a Private Hire or Hackney Carriage Drivers Licence",
    `
    <p>
    We will usually contact you by email when your taxi driver’s licence needs to be renewed,
    but it is your responsibility to renew your licence on time.
    </p>
    <p>
    You can renew your badge up to 2 months before the date it expires.
    </p>

    <details class="accordion">
    <summary class="accordion-header">
        <h3>What is required to renew your badge</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <details class="details-accordion">
        <summary>DVLA driving licence</summary>
        <div class="details-accordion-content">
            <p>
                You will need to supply us with your Driving and Vehicle Licensing Agency (DVLA)
                driving licence number. When you make your application, we will check your driving
            licence with the DVLA.
            </p>
            <p>
                You will receive an email from a company called TaxiPlus. This will ask you to give
                consent to allow us to carry out these checks.
            </p>
            <p>
                Make sure that you do not share your email address with another driver so we can
                carry out the check.
            </p>
        </div>
        </details>

        <details class="details-accordion">
        <summary>DBS check</summary>
        <div class="details-accordion-content">
            <p>
                You need to provide us with a current Enhanced Disclosure Certificate with Barred
                Check Lists from the Disclosure and Barring Service (DBS).
            </p>
            <p>
            We will look at all convictions that are listed in the certificate.
            </p>
            <p>
                If you have had one or more convictions recorded for any of the above offences,
                your application may be referred to the Licensing Sub-Committee.
            </p>
        </div>
        </details>
    </div>
    </details>

    <details class="accordion">
    <summary class="accordion-header">
        <h3>Routine checks</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Once you are licensed as a taxi driver, we will carry out a routine check every
            6 months.
        </p>
        <p>
            To do this, you need to register with the DBS Update Service. If you do not use
            this service, you will need to provide a valid DBS certificate that has been issued
            within one month of the check.
        </p>
        <p>
            Your licence will be suspended if we are not able to carry out routine checks on
            your DBS and you are unable to supply a certificate dated within one month.
        </p>
    </div>
    </details>

    <details class="accordion">
    <summary class="accordion-header">
        <h3>How to apply</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            To apply for an Enhanced Disclosure Certificate with Barred Check Lists, you need
            to do the following:
        </p>
        <ul>
            <li>Email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> to request a DBS pack</li>
            <li>Ensure your DBS application form is completed in black ink</li>
            <li>Do not sign the back of the form</li>
            <li>
                Complete the DBS form and attend Howden House First Point to have your documents
                checked and verified face-to-face (open 10am to 4pm, Monday to Friday)
            </li>
            <li>
                Make a £49.50 payment for your application before attending Howden House
                (the payment link is provided below)
            </li>
            <li>
                We will send your completed application to the DBS, who will carry out the
                necessary checks and return the certificate to you
            </li>
        </ul>
        <p>
            You can apply for your DBS certificate when you take your knowledge test and
            driving standards test.
        </p>
    </div>
    </details>
  
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
      categories: ["Business", "Taxi Licensing"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

  
const applyPrivateHireVehicleLicence = new ContentBusiness(
  "applyPrivateHireVehicleLicence",
  "Apply for a Private Hire Vehicle Licence",
  "Guidance on applying for a private hire vehicle licence in Sheffield, including requirements, stages, costs, and collection.",
  `<h3>Overview</h3>
    <p>
      Customers must apply for a private hire vehicle licence if they want to use a vehicle for private hire services in Sheffield. 
      Once granted, the licence is valid for a maximum of <strong>12 months</strong>. 
      The application is completed online via the Sheffield City Council website.
    </p>
    <p>Detailed information about all stages of applying for a Private Hire Vehicle Licence can be found at:
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/private" target="_blank">
    Private hire vehicle licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>
    <p>A link to the online form to be completed can be found here:
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/applying-private-hire/apply-new-licence" target="_blank">
    Apply for a private hire vehicle licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>

  <h3>Key Points for Agents</h3>
    <p>The licence is for the <strong>vehicle only</strong> - separate licences are required for <strong>drivers</strong> and <strong>operators</strong>.</p>
    <p>As part of the process, the vehicle <strong>must pass a compliance test</strong> before a licence can be issued.</p>
    <p>Applications follow a <strong>3-stage process</strong>:<p>
      <ul>
        <li><strong>Apply</strong> - online form submitted</li>
        <li><strong>Process</strong> - council checks application, vehicle undergoes compliance test</li>
        <li><strong>Determine</strong> - decision made after test, after which a licence may be issued</li>
      </ul>

  <h3>Cost</h3>
    <p>The fee is <strong>£212</strong>. Payment is made online when submitting the application.</p>
    <br>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before Applying</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Vehicles must meet specific standards (for example, safety and design requirements).</p>
        <p>Customers are advised to check vehicle suitability before applying. Full details can be found here:
        <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/choosing-private-hire" target="_blank">
        Choosing a private hire vehicle | Sheffield City Council</a></p>
        <p>[insert send link]</p>
    </div>
    </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Customers Need to Apply</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Customers must provide: </p>
          <ul>
            <li><strong>V5C registration certificate (log book)</strong>, or keeper’s supplement if the vehicle is recently purchased </li>
            <li><strong>Basic DBS certificate</strong> (only if they do not already hold a taxi driver licence with the council)</li>
          </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>After Applying</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The council will contact the customer <strong>within 5 working days</strong> with a <strong>vehicle compliance test appointment</strong>.</p>
      <p>Vehicles must attend and <strong>pass the compliance test</strong>.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Issuing the Licence</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Once the vehicle passes the compliance test, the customer must provide:</p>
        <ul>
          <li><strong>Insurance certificate or insurance cover note</strong></li>
          <li><strong>Compliance certificate</strong></li>
        </ul>
      <p>The compliance test certificate is valid for <strong>14 days</strong>.</p>
      <p>The council will then issue the vehicle licence.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Collecting the Licence</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Customers will be contacted by email to <strong>arrange collection</strong>.</p>
      <p>The licence includes a <strong>plate, bracket, clips, and signage</strong>, so it <strong>must be collected in person</strong>, it cannot be posted.</p>
      <p>Someone else can collect it on their behalf if arranged in advance.</p>
    </div>
  </details>

  <h3>Related Information</h3>
    <p>Customers should ensure they also have: </p>
      <ul>
        <li>A <strong>valid taxi driver licence</strong></li>
        <li>A <strong>licensed operator</strong> (if working through a company)</li>
      </ul>`,

  { buttonLabel: "Apply Now", formName: "apply_private_hire" },
  { typeKey: "LicenceApplication" },
  { typeKey: "VehicleLicensing" },
  {
    type: "Application",
    keywords: [
      "private hire",
      "PHV licence",
      "taxi vehicle licence",
      "taxi licensing",
      "private hire application",
      "vehicle compliance test",
      "licence",
      "taxi",
      "taxi licence",
      "apply PHV",
      "vehicle licensing process",
      "taxi vehicle permit",
      "PHV application",
      "vehcle",
      "licnce",
      "license",
      "prvate hire",
      "licens",
      "vehicle compliance",
    ],
    categories: ["Business", "Taxi Licensing"],
  },
  { date: "04/06/2026", name: "Liz Taster" }
);


const applyHackneyCarriageVehicleLicence = new ContentBusiness(
  "applyHackneyCarriageVehicleLicence",
  "Apply for a Hackney Carriage Vehicle Licence",
  "Guidance on applying for a Hackney Carriage vehicle licence in Sheffield, including requirements, stages, costs, and collection.",
  `<h3>Overview</h3>
    <p>
      Customers must apply for a vehicle licence if they want to use a vehicle as a Hackney carriage (taxi) in Sheffield. 
      Once granted, the licence is valid for a maximum of <strong>12 months</strong>. 
      The application is completed online via the Sheffield City Council website.
    </p>
    <p>Detailed information about all stages of applying for a Hackney carriage Vehicle Licence can be found at:
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/hackney" target="_blank">
    Hackney carriage vehicle licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>
    <p>A link to the online form to be completed can be found here:
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/applying-hackney-carriage/apply-new-licence" target="_blank">
    Apply for a new hackney carriage vehicle licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>

  <h3>Key Points for Agents</h3>
    <p>The licence is for the <strong>vehicle only</strong> - separate licences are required for <strong>drivers</strong> and <strong>operators</strong>.</p>
    <p>As part of the process, the vehicle <strong>must pass a compliance test</strong> before a licence can be issued.</p>
    <p>Applications follow a <strong>3-stage process</strong>:<p>
      <ul>
        <li><strong>Apply</strong> - online form submitted</li>
        <li><strong>Process</strong> - council checks application, vehicle undergoes compliance test</li>
        <li><strong>Determine</strong> - decision made after test, after which a licence may be issued</li>
      </ul>

  <h3>Cost</h3>
    <p>The fee is <strong>£212</strong>. Payment is made online when submitting the application.</p>
    <br>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before Applying</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Vehicles must meet specific standards (for example, safety and design requirements).</p>
        <p>Customers are advised to check vehicle suitability before applying. Full details can be found here:
        <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/choosing-hackney-carriage"target="_blank">
        Choosing a Hackney carriage | Sheffield City Council</a></p>
        <p>[insert send link]</p>
    </div>
    </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Customers Need to Apply</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Customers must provide: </p>
          <ul>
            <li><strong>V5C registration certificate (log book)</strong>, or keeper’s supplement if the vehicle is recently purchased </li>
            <li><strong>Basic DBS certificate</strong> (only if they do not already hold a taxi driver licence with the council)</li>
          </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>After Applying</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The council will contact the customer <strong>within 5 working days</strong> with a <strong>vehicle compliance test appointment</strong>.</p>
      <p>Vehicles must attend and <strong>pass the compliance test</strong>.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Issuing the Licence</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Once the vehicle passes the compliance test, the customer must provide:</p>
        <ul>
          <li><strong>Insurance certificate or insurance cover note</strong></li>
          <li><strong>Compliance certificate</strong></li>
        </ul>
      <p>The compliance test certificate is valid for <strong>14 days</strong>.</p>
      <p>The council will then issue the vehicle licence.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Collecting the Licence</h3>
     <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Customers will be contacted by email to <strong>arrange collection</strong>.</p>
      <p>The licence includes a <strong>plate, bracket, clips, and signage</strong>, so it <strong>must be collected in person</strong>, it cannot be posted.</p>
      <p>Someone else can collect it on their behalf if arranged in advance.</p>
    </div>
  </details>

  <h3>Related Information</h3>
    <p>Customers should ensure they also have a <strong>valid taxi driver licence</strong>.</p>`
,

  { buttonLabel: "Apply Now", formName: "apply_hackney_carriage" },
  { typeKey: "LicenceApplication" },
  { typeKey: "VehicleLicensing" },
  {
    type: "Application",
    keywords: [
      "hackney carriage",
      "hackney",
      "taxi vehicle licence",
      "taxi licensing",
      "hackney carriage application",
      "vehicle compliance test",
      "licence",
      "taxi licence",
      "apply HC",
      "vehicle licensing process",
      "taxi vehicle permit",
      "HC application",
      "taxi",
      "vehcle",
      "licnce",
      "license",
      "hckney",
      "hackny",
      "licens",
      "vehicle compliance",
    ],
    categories: ["Business", "Taxi Licensing"],
  },
  { date: "05/06/2026", name: "Liz Taster" }
);


const applyTaxiDriverLicence = new ContentBusiness(
  "applyTaxiDriverLicence",
  "Apply for a Taxi Driver Licence",
  "Guidance for applying for a taxi driver licence to drive a private hire vehicle or hackney carriage in Sheffield.",
  `
  <h3>Overview</h3>
    <p>Customers must apply for a taxi driver licence to drive a private hire vehicle or hackney carriage in Sheffield. 
    A licence will only be granted once the applicant has passed all stages of the “fit and proper test”. 
    <strong>Applicants cannot drive a taxi while their application is being processed.</strong></p>

  <h3>Eligibility and Pre‑Application Requirements</h3>
    <p>Applicants must be <strong>over 21 years old</strong> and have held a DVLA driving licence for <strong>more than 12 months</strong>.</p>
    <p>Before applying, customers must complete stages 1 and 2 of the process, which include the following checks, tests, and qualifications:</p>
      <ul>
        <li>Taxi driver qualification:</li>
          <ul>
            <li>Certificate in Introduction to the Role of the Professional Taxi and Private Hire Driver (includes safeguarding and disability awareness)</li>
          </ul>
        <li>Proof of right to work in the UK</li>
        <li>Knowledge Test (local area knowledge, licensing conditions, highway code, safeguarding)</li>
        <li>Driving standards test</li>
        <li>Disclosure and Barring Service (DBS) check</li>
        <li>Criminal and motoring convictions check</li>
        <li>DVLA check</li>
        <li>Medical assessment confirming fitness to drive</li>
        <li>Provide a passport-sized photograph.</li>
      </ul>
    <p>Applicants must complete all required stages before they are eligible to submit an application.</p>

  <h3>Application Process</h3>
    <p>Once all pre‑application requirements are completed, customers can submit an online application form for a new taxi driver licence.</p>
    <p>As part of the application, customers ust provide all required documents, including:</p>
      <ul>
        <li>Proof of right to work (if not already verified)</li>
        <li>Current DVLA driving licence</li>
      </ul>
    <p>After submitting the application, an email link will be sent to pay the licence fee.</p>

  <h3>Costs</h3>
    <p>The fee depends on the licence duration chosen. Licences can be granted for 1, 2 or 3 years:</p>
      <ul>
        <li>1 year: £223</li>
        <li>2 years: £245</li>
        <li>3 years: £268</li>
      </ul>
    <p>Once an online application is completed, the customer will receive a separate email with a link to pay the relevant fee.</p>

  <h3>Key Information for Call Handling</h3>
    <ul>
      <li>Customers must complete all tests and checks before applying - the application cannot proceed without these.</li>
      <li>The process is structured in three stages, with the application only submitted their application at the final stage.</li>
      <li>Customers are not permitted to work as taxi drivers until their licence is approved.</li>
      <li>Payment is made after submitting the online form via a separate email link.</li>
    </ul>

  <h3>Useful Links</h3>
    <p>Detailed information about all stages of applying for a taxi driver licence can be found at:
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/applying-new-taxi-driver-licence">Applying for a new taxi driver licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>

    <p>A link to the licensing policy and the online form that needs to be completed can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/applying-new-taxi-driver-licence/apply">Apply for a new taxi driver licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>
    `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Application",
    keywords: [
      "taxi driver",
      "driver",
      "taxi",
      "license",
      "licence",
      "private hire",
      "hackney carriage",
      "Sheffield taxi",
      "DVLA",
      "fit and proper test",
      "taxi application",
      "driver application",
      "knowledge test",
      "driving standards",
      "medical assessment",
      "right to work",
      "licensing policy",
      "apply taxi licence",
      "apply taxi license",
      "liscence",
      "lisence",
      "licnese",
      "taksi",
      "DBS",
    ],
    categories: ["Business", "Taxi Licensing"],
  },
  { date: "05/06/2026", name: "Liz Taster" }
);


const applyPrivateHireOperatorLicence = new ContentBusiness(
  "applyPrivateHireOperatorLicence",
  "Apply for a Private Hire Operator Licence",
  "Details of how to apply to Sheffield City Council for a private hire operator licence.",
  `<h3>Overview</h3>
    <p>Customers must apply to Sheffield City Council for a private hire operator licence if they want to <strong>take bookings or supply drivers 
    for private hire vehicles</strong>. The council will assess whether the applicant is a “fit and proper” person to hold the licence, ensuring 
    they are suitable and do not pose a risk to public safety.</p>
    <p>Full details about the process and requirements can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-operator/applying-new-private-hire-operator" target="_blank">
    Applying for a new private hire operator licence | Sheffield City Council</a> </p>
    <p>[insert send link]</p>

  <h3>Eligibility Criteria</h3>
    <p>When applying, customers must demonstrate that they are suitable to operate a private hire business. This includes:</p>
      <ul>
        <li>Being considered a <strong>fit and proper person</strong> (safe and suitable, with no links to serious criminal activity)</li>
        <li>Declaring any <strong>criminal convictions</strong> for all applicants, directors or partners</li>
        <li>Having the <strong>legal right to work in the UK</strong></li>
        <li>Having appropriate <strong>tax registration</strong> (or being aware of requirements if they do not yet have a tax check code)</li>
        <li>Using a <strong>business name</strong> that is not the same as, or too similar to, one already used in Sheffield</li>
      </ul>

  <h3>How to Apply</h3>
    <p>Customers need to:</p>
      <ol>
        <li>Complete the <strong>private hire operator licence application form</strong> online.</li>
        <li>Once they submit an application, they will receive a questionnaire by email.</li>
        <li>Complete and submit the questionnaire and any additional supporting documents.</li>
        <li>Ensure all required information is provided, as the council will not process incomplete applications.</li>
      </ol>
    <p>The application is completed online via the council’s website - this can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-operator/applying-new-private-hire-operator/apply" target="_blank">
    Apply for a new private hire operator licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>

    <p>As part of the application, the customer will need to provide business and applicant details, including: </p>
      <ul>
        <li>Company and contact information </li>
        <li>Details of directors/partners</li>
        <li>Operating address and trading name</li>
        <li>Number of vehicles to be operated </li>
      </ul>
 

  <h3>Supporting Documents Required</h3>
    <p>Applicants must provide the following (where applicable):</p>
      <ul>
        <li><strong>Basic DBS certificate</strong> for all directors (or DBS certificate number)</li>
        <li><strong>Right to work documentation</strong> for all business owners (this may need to be seen in person)</li>
        <li><strong>Tax check information</strong> or a 9-digit tax check code</li>
        <li><strong>Public liability insurance certificate</strong></li>
        <li><strong>Employers’ liability insurance</strong></li>
        <li><strong>Planning permission</strong> for operator premises, or confirmation it is not needed</li>
        <li>Proof of <strong>registration with the Information Commissioner’s Office (ICO)</strong></li>
      </ul>
    <p>Additional documents may be requested during the process.</p>

  <h3>Fees</h3>
    <p>The cost of the licence depends on:</p>
      <ul>
        <li>The <strong>duration of the licence</strong> (1 to 5 years)</li>
        <li>The <strong>number of vehicles operated</strong></li>
      </ul>
    <p>The longer the duration of the licence, and the more vehicles the license is for, the higher the fee.</p>
    <p> A full breakdown of fees can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-operator/applying-new-private-hire-operator/apply" target="_blank">
    Apply for a new private hire operator licence | Sheffield City Council</a></p>
    <p>Examples:</p>
      <ul>
        <li>1 year licenses range from £531 (1-10 vehicles) to £6,643 (over 250 vehicles)</li>
        <li>5 year licences range from £2,510 (1-10 vehicles) to £12,548 (over 250 vehicles)</li>
      </ul>

  <h3>Processing the Application</h3>
    <p> The council will <strong>not process the application until all required documents are received</strong>. 
    Further information or documents may be requested during the assessment.</p>
    <p>The council will assess whether the applicant meets the <strong>fit and proper person standard</strong> before making a decision.</p>

  <h3>Key Information for Call Handling</h3>
    <ul>
      <li>Customers must apply <strong>before operating</strong> - it is illegal to accept bookings without a licence.</li>
      <li>Direct customers to the <strong>online application form</strong> for submission.</li>
      <li>Emphasise the importance of <strong>submitting all documents correctly</strong> to avoid delays.</li>
      <li>Remind customers that <strong>additional checks and documents may be required</strong>.</li>
      <li>Where applying as a company or partnership, <strong>all relevant individuals must meet the requirements</strong> (e.g. DBS and tax checks) </li>
      <li>Advise that fees vary based on <strong>fleet size and licence length</strong>.</li>
    </ul>

  <h3>Related Guidance</h3>
    <p>Customers can read the council’s <strong>Private Hire Operator and Vehicle Licence Policy</strong> for full details of requirements and standards. </p>
    <p>This can be found here: <a href="https://www.sheffield.gov.uk/sites/default/files/2025-02/private_hire_operator_and_private_hire_vehicle_licence_policy_0_2.pdf" target="_blank">
    Private Hire Operator and Vehicle Licence Policy</a></p>
    
    <p>[insert send link]</p>`,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Application",
    keywords: [
      "private hire operator licence",
      "apply private hire operator",
      "taxi licence",
      "PHO licence",
      "taxi",
      "operator",
      "licence",
      "private hire",
      "operator licence",
      "fleet size",
      "licence fees",
      "private hire operator",
      "ph operator",
      "taxi licensing",
      "apply taxi operator",
      "licence application form taxi",
      "operater",
      "privte",
      "liscence",
      "license",
    ],
    categories: ["Business", "Taxi Licensing"],
  },
  { date: "10/06/2026", name: "Liz Taster" }
);

const renewPrivateHireOperatorLicence = new ContentBusiness(
  "renewPrivateHireOperatorLicence",
  "Renew a Private Hire Operator Licence",
  "Details of how to renew a private hire operator licence.",
  `<h3>Overview</h3>
    <p>Customers must renew <strong>before their current licence expires</strong> to continue operating legally. 
    A renewal application should be made <strong>within a month of the current licence expiry date</strong>. 
    A company cannot continue to operate if their operator licence has expired.</p>

    <p>The renewal process is similar to the original application process and requires the same or similar documentation.
    The operator does not need to complete the long questionnaire needed for a new application.
    As part of the renewal application, the council will assess whether the applicant is a “fit and proper” person to hold the licence, ensuring 
    they are suitable and do not pose a risk to public safety.</p>

    <p>Full details about the process and requirements can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-operator/renewing-private-hire-operator" target="_blank">
    Renewing a private hire operator licence | Sheffield City Council</a> </p>
    <p>[insert send link]</p>

    <p>Customers can renew a Private Hire Operator Licence through Sheffield City Council using an online form available here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-operator/renewing-private-hire-operator/renew" target="_blank">
    Renew a private hire operator licence | Sheffield City Council</a> </p>
    <p>[insert send link]</p>

  <h3>Eligibility Criteria</h3>
    <p>Only existing operator's can use the renewal process. If a customer does not have an existing private hire operator licence 
    they should be directed to the information to apply for a <strong>new</strong> private hire operator licence.<p>  
    <p>When applying, customers must demonstrate that they continue to be suitable to operate a private hire business. This includes:</p>
      <ul>
        <li>Being considered a <strong>fit and proper person</strong> (safe and suitable, with no links to serious criminal activity)</li>
        <li>Declaring any <strong>criminal convictions</strong> for all applicants, directors or partners</li>
        <li>Having the <strong>legal right to work in the UK</strong></li>
        <li>Having appropriate <strong>tax registration</strong> (or being aware of requirements if they do not yet have a tax check code)</li>
        <li>Having appropriate insurance in place</li>
        <li>Having appropriate premises in place</li>
      </ul>

  <h3>How to Apply</h3>
    <p>Customers need to:</p>
      <ol>
        <li>Complete the <strong>renew private hire operator licence form</strong> online.</li>
        <li>Submit any supporting documents.</li>
        <li>Ensure all required information is provided, as the council will not process incomplete applications.</li>
      </ol>
    <p>The application is completed online via the council’s website - this can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-operator/renewing-private-hire-operator/renew" target="_blank">
    Renew a private hire operator licence | Sheffield City Council</a></p>
    <p>[insert send link]</p>

    <p>As part of the application, the customer will need to provide business and applicant details, including: </p>
      <ul>
        <li>Company and contact information </li>
        <li>Details of directors/partners</li>
        <li>Operating address and trading name</li>
        <li>Number of vehicles to be operated </li>
      </ul>

  <h3>Supporting Documents Required</h3>
    <p>Applicants must provide the following (where applicable):</p>
      <ul>
        <li><strong>Basic DBS certificate</strong> for all directors (or DBS certificate number)</li>
        <li><strong>Right to work documentation</strong> for all business owners (this may need to be seen in person)</li>
        <li><strong>Tax check information</strong> or a 9-digit tax check code</li>
        <li><strong>Public liability insurance certificate</strong></li>
        <li><strong>Employers’ liability insurance</strong></li>
        <li>Proof of <strong>registration with the Information Commissioner’s Office (ICO)</strong></li>
      </ul>
    <p>Additional documents may be requested during the process.</p>

  <h3>Fees</h3>
    <p>The cost of the licence depends on:</p>
      <ul>
        <li>The <strong>duration of the licence</strong> (1 to 5 years)</li>
        <li>The <strong>number of vehicles operated</strong></li>
      </ul>
    <p>The longer the duration of the licence, and the more vehicles the license is for, the higher the fee.</p>
    <p> A full breakdown of fees can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-operator/renewing-private-hire-operator/renew" target="_blank">
    Renew a private hire operator licence | Sheffield City Council</a> </p>
    <p>Examples:</p>
      <ul>
        <li>1 year licenses range from £531 (1-10 vehicles) to £6,643 (over 250 vehicles)</li>
        <li>5 year licences range from £2,510 (1-10 vehicles) to £12,548 (over 250 vehicles)</li>
      </ul>

  <h3>Processing the Application</h3>
    <p> The council will <strong>not process the application until all required documents are received</strong>. 
    Further information or documents may be requested during the assessment.</p>
    <p>The council will assess whether the applicant meets the <strong>fit and proper person standard</strong> before making a decision.</p>

  <h3>Key Information for Call Handling</h3>
    <ul>
      <li>Customers must renew <strong>before their current licence expires</strong> - it is illegal to accept bookings without a licence.</li>
      <li>Emphasise the importance of <strong>submitting all documents correctly</strong> to avoid delays.</li>
      <li>Where applying as a company or partnership, <strong>all relevant individuals must meet the requirements</strong> (e.g. DBS and tax checks) </li>
      <li>Remind customers that <strong>additional checks and documents may be required</strong>.</li>
      <li>Advise that fees vary based on <strong>fleet size and licence length</strong>.</li>
    </ul>

  <h3>Related Guidance</h3>
    <p>Customers can read the council’s <strong>Private Hire Operator and Vehicle Licence Policy</strong> for full details of requirements and standards. </p>
    <p>This can be found here: <a href="https://www.sheffield.gov.uk/sites/default/files/2025-02/private_hire_operator_and_private_hire_vehicle_licence_policy_0_2.pdf" target="_blank">
    Private Hire Operator and Vehicle Licence Policy</a></p>
    
    <p>[insert send link]</p>`,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Application",
    keywords: [
      "private hire operator licence",
      "renew private hire operator",
      "renew",
      "taxi licence",
      "PHO licence",
      "taxi",
      "operator",
      "licence",
      "private hire",
      "operator licence",
      "fleet size",
      "licence fees",
      "private hire operator",
      "ph operator",
      "taxi licensing",
      "renew taxi operator",
      "licence application form taxi",
      "operater",
      "privte",
      "liscence",
      "license",
      "renw",
      "rnew",
    ],
    categories: ["Business", "Taxi Licensing"],
  },
  { date: "10/06/2026", name: "Liz Taster" }
);



const changeOfNameOrAddress = new ContentBusiness(
  "changeOfNameOrAddress",
  "Change of Name or Address",
  "Details of how taxi drivers inform the council if they change their name or address so that their licensing records can be updated.",
  
  `
  <h3>Overview</h3>
    <p>Customers (taxi drivers) must inform the council <strong>using an online form</strong> if they change their name or address so that their licensing records can be updated.</p>
    <p>The customer must contact the council straight away after changing their name or address.</p>
    <p>There is <strong>no charge</strong> unless licence documents need to be reissued.</p>

  <h3>How to Notify the Council</h3>
    <p>To update their name or address, the customer must:</p>
        <ul>
            <li>Complete the <strong>online form</strong>.</li>
            <li>Provide their <strong>DVLA driving licence</strong> showing the new name or address.</li>
        </ul>
    <p>The update form can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/change-name-or-address" target="_blank">
    Change of name or address | Sheffield City Council</a></p>

    <p> [Insert send link] </p>

  <h3>Impact on DBS certificates</h3>
    <p>If the customer has changed their <strong>name</strong> they must apply for a <strong>new Enhanced Disclosure and Barring Service (DBS) 
    certificate</strong> in their new name.
    <br>This must be completed in time for badge renewal applications and routine DBS checks (every 6 months).</p>
    <p>If the customer has changed their <strong>address</strong>, the existing DBS certificate remains valid. 
    The customer can update their address in their DBS account. The DBS certificate itself will still show the old address.</p>

  <h3>Fees</h3>
    <ul>
        <li>Updating licence <strong>records</strong> is free.</li>
        <li>If updated paper or digital licence documents are required, the cost is <strong>£15</strong>.</li>
    </ul>

  <h3>Additional Notes</h3>
    <ul>
        <li>The same process and fee apply if changes are needed for a taxi vehicle licence.</li>
        <li>Customers should ensure all supporting documents (such as DVLA licence details) are up to date before submitting their request.</li>
        <li>The customer may also need to notify their taxi operator.</li>
    </ul>
    
    `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: [
      "change of name",
      "change of address",
      "taxi drivers",
      "taxi licensing",
      "taxi",
      "change",
      "name",
      "address",
      "licence records",
      "update details",
      "driver details",
      "address change",
      "name change",
      "licence reissue",
      "taxi vehicle licence",
      "adress",
      "addres",
      "chagne",
      "chage",
      "updat",
      "licesnce",
      "licence",
      "license",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "11/06/2026", name: "Liz Taster" }
);



  const taxiLicensing = new MenuBusiness(
  "taxiLicensing",
  "Taxi Licensing",
  "Information regarding taxi licensing",
  [
    renewHackneyCarriage,
    vechicleInspections,
    vechicleCustomerCharter,
    transferLicence,
    surrenderLicence,
    renewPriviateLicence,
    medicalNeeds,
    renewDriverLicence,
    drivingStandardsTestGuide,
    applyPrivateHireVehicleLicence,
    applyHackneyCarriageVehicleLicence,
    applyTaxiDriverLicence,
    applyPrivateHireOperatorLicence,
    renewPrivateHireOperatorLicence,
    changeOfNameOrAddress
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


  