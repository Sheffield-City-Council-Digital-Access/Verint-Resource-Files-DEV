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


const applyPrivateHireVehicleLicence = new ContentBusiness(
  "applyPrivateHireVehicleLicence",
  "Apply - Private Hire Vehicle Licence",
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
  "Apply - Hackney Carriage Vehicle Licence",
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
  "Apply - Taxi Driver Licence",
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
  "Apply - Private Hire Operator Licence",
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
  "Renew - Private Hire Operator Licence",
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



const convictionsAndDrivingOffences = new ContentBusiness(
  "convictionsAndDrivingOffences",
  "Taxi Driver Convictions and Driving Offences",
  "Information for Sheffield taxi drivers on reporting arrests, charges, or convictions.",
  `
  <h3>Key message</h3>
    <p>If you’re a licensed taxi driver in Sheffield, you must tell the council about certain arrests, charges or convictions within 48 hours.</p>
  
  <h3>How to report</h3>
    <p>To report a conviction or offence, you should use the online form available here:.
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/convictions-and-driving-offences" target="_blank">
    Convictions and driving offences | Sheffield City Council</a>
    </p>

    <p>[Insert send link]</p>

  <h3>What must be reported</h3>
    <p>This includes serious matters such as:</p>
      <ul>
        <li>sexual offences</li>
        <li>offences involving violence</li>
        <li>offenses involving dishonesty</li>
        <li>using a hand-held mobile phone while driving</li>
        <li>crimes resulting in death</li>
        <li>drug-related offences</li>
        <li>possession of a weapon</li>
        <li>discrimination</li>
        <li>exploitation</li>
      </ul>

  <h3>Why must these be reported?</h3>
    <p>The council will review your licence to decide if you are still considered a ‘fit and proper’ person to hold a taxi licence.</p>

  <h3>Failure to report</h3>
    <p>If you don’t report an arrest or offence, it may be treated as dishonest behaviour and could affect your licence, even if no conviction is made.</p>

    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: [
      "taxi driver",
      "driving",
      "convictions",
      "driving offences",
      "taxi",
      "report conviction",
      "report arrest",
      "taxi licence rules",
      "mobile phone driving offence",
      "convictions reporting",
      "offence notification taxi",
      "convctions",
      "onvitions",
      "drving",
      "offences",
      "offence",
      "ofence",
      "arrest",
      "liscence",
      "licence",
      "license",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "11/06/2026", name: "Liz Taster" }
);


const renewTaxiDriverLicence = new ContentBusiness(
  "renewTaxiDriverLicence",
  "Renew - Taxi Driver Licence",
  "Guidance on how to renew a taxi driver licence, including requirements, costs, and process details.",
  `
<h3>Overview</h3>
  <p>Customers should renew their taxi driver licence online. Applications are assessed to confirm the driver is still a “fit and proper” person to hold a licence.</p>
  <p>Drivers can renew their licence <strong>up to 2 months before the expiry date</strong>.</p>
  <p>If the licence has expired, the driver <strong>must not drive a licensed vehicle</strong> until renewal is confirmed.</p>

<h3>Useful Links</h3>
  <p>Detailed information about all stages of renewing a taxi driver licence can be found here:
  <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/renewing-taxi-driver-licence" target="_blank">
  Renewing a taxi driver licence | Sheffield City Council</a></p>

  <p>[Insert send link]</p>

  <p>A link to the licensing policy and the online form that needs to be completed can be found here:
  <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/renewing-taxi-driver-licence/renew-taxi" target="_blank">
  Renew a taxi driver licence | Sheffield City Council</a></p>

  <p>[Insert send link]</p>
  
<h3>How to Apply</h3>
  <p>Applications are completed using the council’s <strong>online renewal form</strong>. Customers have to submit all relevant documents as part of the application (details below).</p>
  <p>Payment is made during the application process.</p>
  <p>After submission, the council will review the application either:</p>
  <ul>
    <li>Confirm the licence has been renewed, or</li>
    <li>Ask for further information, if required.</li>
  </ul>

<h3>Information and Documents Required</h3>
  <p>Applicants must provide:</p>
  <ul>
    <li>Current taxi licence number</li>
    <li>Licence expiry date (must be within 2 months of renewal)</li>
    <li>DVLA driving licence number</li>
    <li>HMRC tax check code (9 digits)</li>
    <li>DBS certificate number or DBS online service details (dated within the same month as licence expiry)</li>
    <li>Medical assessment certificate (if required based on age or medical condition)</li>
    <li>Right to work documentation (if applicable)</li>
  </ul>

<h3>Costs</h3>
  <p>The fee depends on the duration of the chosen. Licences can be granted for 1, 2 or 3 years:</p>
    <ul>
      <li>1 year: £223</li>
      <li>2 years: £245</li>
      <li>3 years: £268</li>
    </ul>
  <p>Once an online application is completed, the customer will receive a separate email with a link to pay.</p>

<h3>Late Renewals</h3>
  <ul>
    <li>A <strong>grace period of up to 1 month</strong> may be allowed after expiry where customers can still use the renewal process.</li>
    <li>After this period, the driver must <strong>apply for a new licence instead of renewing.</strong></li>
    <li>If the licence has expired, the driver <strong>must not drive a licensed vehicle</strong> until renewal is confirmed.</li>
  </ul>

<h3>Important Notes for Call Handling</h3>
  <ul>
    <li>Drivers must <strong>stop working immediately if their licence expires</strong> until renewal is confirmed.</li>
    <li>Payment <strong>does not guarantee automatic renewal</strong> — applications must be approved first.</li>
        <li>If the renewal window is missed by more than 1 month, direct the customer to <strong>apply for a new licence</strong> instead.</li>
    <li>Customers should ensure all required information is ready before starting the online application to avoid delays.</li>
    <li>It is the driver’s responsibility to renew on time, although reminder emails are usually sent.</li>
  </ul>



  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Application",
    keywords: [
      "taxi driver licence",
      "taxi licence renewal",
      "renew taxi licence",
      "driver licence renewal",
      "renew",
      "taxi",
      "driver",
      "licence",
      "renewal",
      "permit renewal",
      "cab",
      "hackney carriage",
      "private hire",
      "driver licence",
      "liscence",
      "license",
      "renwal",
      "licsense",
      "hckney",
      "hackny",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "12/06/2026", name: "Liz Taster" }
);


const renewPrivateHireVehicleLicence = new ContentBusiness(
  "renewPrivateHireVehicleLicence",
  "Renew - Private Hire Vehicle Licence",
  "Guidance on renewing a private hire vehicle licence - including requirements, costs, and process details.",

  `<h3>Overview</h3>
    <p>Customers should renew their private hire vehicle licence <strong>online</strong>. The licence allows a vehicle to 
    continue operating for private hire purposes and is valid for a maximum of 12 months.</p>
    <p>Renewal should be completed <strong>within the same month the licence is due to expire</strong>. 
    Customers are responsible for checking their licence expiry date and renewing on time.</p>
    <p>If the licence <strong>expires</strong>, the vehicle <strong>cannot legally be used for hire and reward</strong> 
    until renewal is confirmed.</p>

  <h3>Useful Links</h3>
    <p>Detailed information about all stages of renewing a private hire vehicle licence can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/renewing-private-hire" target="_blank">
    Renewing a private hire vehicle licence | Sheffield City Council</a></p>

    <p> [Insert send link] </p>

    <p>A link to the online renewal form can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/renewing-private-hire/renew-licence" target="_blank">
    Renew a private hire vehicle licence | Sheffield City Council</a></p>

    <p> [Insert send link] </p>

  <h3>Before Applying</h3>
    <p>The vehicle must pass a <strong>compliance test no more than 4 weeks before renewal</strong>.</p>
    <p>The council usually sends an email <strong>around 6 weeks before expiry</strong> with compliance test details.</p>
    <p>If the customer has not received a test appointment, they should contact Taxi Licensing:</p>
      <ul>
        <li>Email: <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a></li>
        <li>Telephone: 0114 273 4264</li>
      </ul>

  <h3>Cost</h3>
    <p>The renewal fee is <strong>£212</strong>, payable online at the time of application.</p>

  <h3>How to Apply</h3>
    <p>Customers must apply <strong>online</strong>.</p>
    <p>Payment is made during the application process.</p>
    <p>Applicants must provide:</p>
      <ul>
        <li>Private hire vehicle registration number</li>
        <li>Private hire vehicle licence number</li>
        <li>Licence expiry date</li>
        <li>Valid vehicle insurance certificate (document upload)</li>
        <li>Vehicle compliance/test certificate (document upload)</li>
      </ul>

  <h3>After Applying</h3>
    <p>Applications are processed within <strong>5 working days</strong> after submission and payment.</p>
    <p>The customer will receive:</p>
      <ul>
        <li>A <strong>PDF licence by email</strong></li>
        <li>A <strong>paper licence and plate by post</strong></li>
      </ul>

  <h3>Late Renewals</h3>
    <p>A <strong>grace period of up to 1 month</strong> may be allowed after expiry where customers can still 
    use the renewal process.</p>
    <p>After this period, the driver must <strong>apply for a new vehicle licence instead of renewing.</strong></p>
    <p>If the licence has expired, the vehicle <strong>cannot legally be used for hire and reward</strong> 
    until renewal is confirmed.</p>

  <h3>Important Notes for Call Handling</h3>
    <ul>
      <li>The renewal application should be made as soon as possible after the vehicle passes its compliance test.</li>
      <li>If a vehicle compliance test is in the last week of the final month the licence is valid, 
      the customer will be given the option to collect the licence.</li>
      <li>A valid insurance policy covering use as a taxi must be in place.</li>
      <li>If the licence expires, the vehicle <strong>cannot legally be used for hire and reward</strong> 
      until renewal is confirmed.</li>
    </ul>`,

  { buttonLabel: "Apply Now", formName: "renew_private_hire" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Application",
    keywords: [
      "private hire vehicle licence",
      "private hire",
      "taxi",
      "licence",
      "renew",
      "private",
      "hire",
      "compliance test",
      "renewal",
      "vehicle",
      "license",
      "licensing",
      "licencing",
      "privte",
      "vehcle",
      "renwal",
      "licsense",
      "renw",
      "rnew",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "17/06/2026", name: "Liz Taster" }
);


const renewHackneyCarriageVehicleLicence = new ContentBusiness(
  "renewHackneyCarriageVehicleLicence",
  "Renew - Hackney Carriage Vehicle Licence",
  "Guidance on renewing a hackney carriage vehicle licence - including requirements, costs, and process details.",

  `<h3>Overview</h3>
    <p>Customers should renew their hackney carriage vehicle licence <strong>online</strong>. The licence allows a vehicle to 
    continue operating legally as a hackney carriage and is valid for a maximum of 12 months.</p>
    <p>Renewal should be completed <strong>within the same month the licence is due to expire</strong>. 
    Customers are responsible for checking their licence expiry date and renewing on time.</p>
    <p>If the licence <strong>expires</strong>, the vehicle <strong>cannot legally be used as a taxi</strong> 
    until renewal is confirmed.</p>

  <h3>Useful Links</h3>
    <p>Detailed information about all stages of renewing a hackney carriage vehicle licence can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/renewing-hackney-carriage" target="_blank">
    Renewing a hackney carriage vehicle licence | Sheffield City Council</a></p>

    <p> [Insert send link] </p>

    <p>T Hackney Carriage Vehicle Licence Policy, and a link to the online renewal form can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/renewing-hackney-carriage/renew-licence" target="_blank">
    Renew your hackney carriage vehicle licence | Sheffield City Council</a></p>

    <p> [Insert send link] </p>

  <h3>Before Applying</h3>
    <p>The vehicle must pass a <strong>compliance test no more than 4 weeks before renewal</strong>.</p>
    <p>The council usually sends an email <strong>around 6 weeks before expiry</strong> with compliance test details.</p>
    <p>If the customer has not received a test appointment, they should contact Taxi Licensing:</p>
      <ul>
        <li>Email: <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a></li>
        <li>Telephone: 0114 273 4264</li>
      </ul>

  <h3>Cost</h3>
    <p>The renewal fee is <strong>£212</strong>, payable online at the time of application.</p>

  <h3>How to Apply</h3>
    <p>Customers must apply <strong>online</strong>.</p>
    <p>Payment is made during the application process.</p>
    <p>Applicants must provide:</p>
      <ul>
        <li>Hackney carriage vehicle registration number</li>
        <li>Hackney carriage vehicle licence number</li>
        <li>Licence expiry date</li>
        <li>Valid vehicle insurance certificate (document upload)</li>
        <li>Vehicle compliance/test certificate (document upload)</li>
      </ul>

  <h3>After Applying</h3>
    <p>Applications are processed within <strong>5 working days</strong> after submission and payment.</p>
    <p>The customer will receive:</p>
      <ul>
        <li>A <strong>PDF licence by email</strong></li>
        <li>A <strong>paper licence and plate by post</strong></li>
      </ul>

  <h3>Late Renewals</h3>
    <p>A <strong>grace period of up to 1 month</strong> may be allowed after expiry where customers can still 
    use the renewal process.</p>
    <p>After this period, the driver must <strong>apply for a new vehicle licence instead of renewing.</strong></p>
    <p>If the licence has expired, the vehicle <strong>cannot legally be used as a hackney carriage</strong> 
    until renewal is confirmed.</p>

  <h3>Important Notes for Call Handling</h3>
    <ul>
      <li>The renewal application should be made as soon as possible after the vehicle passes its compliance test.</li>
      <li>If a vehicle compliance test is in the last week of the final month the licence is valid, 
      the customer will be given the option to collect the licence.</li>
      <li>A valid insurance policy covering use as a taxi must be in place.</li>
      <li>If the licence expires, the vehicle <strong>cannot legally be used as a taxi</strong> 
      until renewal is confirmed.</li>
    </ul>`,

  { buttonLabel: "Apply Now", formName: "renew_hackney_carriage" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Application",
    keywords: [
      "hackney carriage vehicle licence",
      "hackney",
      "carriage",
      "taxi",
      "licence",
      "renew",
      "compliance test",
      "renewal",
      "vehicle",
      "license",
      "licensing",
      "licencing",
      "hckney",
      "hackny",
      "carrage",
      "carrige",
      "carridge",
      "carraige",
      "vehcle",
      "renwal",
      "licsense",
      "renw",
      "rnew",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "17/06/2026", name: "Liz Taster" }
);


const applyKnowledgeTest = new ContentBusiness(
  "applyKnowledgeTest",
  "Apply - Knowledge Test",
  "Information on applying for the taxi driver Knowledge Test, including requirements, cost, and process.",
  
  `<h3>Overview</h3>
    <p>The Knowledge Test is part of the process for applying for a new taxi driver licence. It is designed 
    to assess whether applicants have a good understanding of the local area and key responsibilities required 
    to work as a taxi or private hire driver.</p>
    <p>Applicants must pass the Knowledge Test as part of Stage Two of the taxi driver licensing process, 
    and forms part of assessing whether an applicant is “fit and proper” to hold a taxi driver licence.</p>
    <p>Additional information and a link to apply can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/applying-new-taxi-driver-licence/knowledge-test" target="_blank">
    Knowledge Test | Sheffield City Council</a></p>

    <p>[Insert send link]</p>

  <h3>What the Knowledge Test Covers</h3>
    <p>Applicants are expected to demonstrate knowledge of:</p>
      <ul>
        <li>Routes within Sheffield</li>
        <li>Places of interest</li>
        <li>Highway Code</li>
        <li>Road safety</li>
        <li>Safeguarding responsibilities</li>
      </ul>
    <p>Drivers should be able to navigate the city without relying on satnav or other electronic navigation devices.</p>

  <h3>Test Format and Requirements</h3>
    <p>The test is computer-based and taken at a council office.</p>
    <p>Applicants must score at least <strong>80% in each section</strong> to pass.</p>
    <p>The test result is valid for <strong>one year</strong> from the pass date.</p>

  <h3>Cost</h3>
    <p>The fee to take the Knowledge Test is <strong>£87</strong>.</p>
    <p>If the applicant fails, the fee is <strong>non-refundable</strong> and must be paid again to retake the test.</p>

  <h3>Eligibility and Requirements to Apply</h3>
    <p>Before applying for the Knowledge Test, applicants must:</p>
      <ul>
        <li>Be <strong>over 21 years of age</strong></li>
        <li>Have completed and passed:</li>
        <ul>
          <li>Level 2 Certificate in Introduction to the Role of the Professional Taxi and Private Hire Driver</li>
          <li>Safeguarding training</li>
          <li>Disability Awareness training</li>
        </ul>
      </ul>
    <p>Applicants must also provide:</p>
      <ul>
        <li>DVLA driving licence number (held for at least 12 months)</li>
        <li>A photo of their DVLA driving licence</li>
        <li>A passport-style photograph</li>
      </ul>

  <h3>How to Apply</h3>
    <p>The Knowledge Test must be booked <strong>online</strong>.</p>
    <p>Applicants need to <strong>make an appointment</strong> to take the test.</p>
    <p>Payment is made as part of the online application.</p>
    <p>If an applicant arrives late for their appointment, the test will not take place and the fee will not be refunded.</p>

  <h3>Outcome</h3>
    <ul>
      <li>Applicants who pass can continue with the taxi driver licence process.</li>
      <li>Applicants who fail must pay again to retake the test.</li>
    </ul>`,

  { buttonLabel: "Apply for Knowledge Test", formName: "knowledgeTestApplication" },
  { typeKey: "Application" },
  { typeKey: "Taxi Licensing" },
  {
    type: "Application",
    keywords: [
      "Knowledge Test",
      "Knowledge",
      "Test",
      "Taxi driver licence",
      "taxi",
      "driver",
      "licence",
      "Private hire",
      "hackney carriage",
      "licensing",
      "Taxi test",
      "application",
      "Book knowledge test",
      "Taxi exam",
      "Driver assessment",
      "Taxi licence test",
      "KnowledgeTest",
      "knowlege",
      "tst",
      "knowlegeTest",
      "knwledge",
      "liscence",
      "lisence",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "17/06/2026", name: "Liz Taster" }
);


const orderReplacementTaxiItems = new ContentBusiness(
  "orderReplacementTaxiItems",
  "Order Replacement Taxi Items",
  "Details of how to request replacement taxi licensing items if lost or stolen.",
  `
  <h3>Overview</h3>
    <p>Taxi drivers or vehicle licence holders can request replacement taxi licensing items if items have been lost or stolen. 
    The service allows users to order replacements online for a small fee per item.</p>
    <p>Full details, including a document showing pictures of the different items and a link to the form to order replacements 
    can be found here:</p>
    <p><a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/order-replacement-taxi-items"target="_blank">
    Order replacement taxi items | Sheffield City Council</a></p>

    <p>[insert send link]</p>

  <h3>Items Available</h3>

  <h4>Taxi Driver Items</h4>
    <p>The following replacement items can be ordered:</p>
      <ul>
        <li>Internal driver ID – £6</li>
        <li>Internal badge for windscreen – £6</li>
        <li>ID badge (card) – £20</li>
        <li>Paper licence (paper and digital copy issued) – £15</li>
        <li>Lanyard – £2</li>
      </ul>

  <h4>Taxi Vehicle Items</h4>
    <p>The following replacement vehicle items are available:</p>
      <ul>
        <li>Licence plate (private hire or hackney carriage) – £25</li>
        <li>Internal blue private hire sticker – £6</li>
        <li>Internal hackney carriage sticker – £6</li>
        <li>External advance booking door sign – £6</li>
        <li>Bracket – £15</li>
        <li>Wallet for private hire sticker – £6</li>
        <li>Paper licence (paper and digital copy issued) – £15</li>
        <li>Private hire advance booking door stickers - £6 for one sticker/£12 for two stickers</li>
      </ul>

  <h3>How to Request</h3>
    <p>Orders are made <strong>online</strong> using a form and payment links.</p>
    <p>Items can either be posted to the applicant, or collected in person. Some larger items are collection only.</p>
    <p>The council will confirm when items are ready for collection.</p>
  `,

  { buttonLabel: "Order Replacement Items", formName: "request_replacement_taxi" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "taxi",
      "replacement",
      "items",
      "order",
      "licence",
      "licensing",
      "badge replacement",
      "ID replacement",
      "plate replacement",
      "hackney carriage",
      "private hire",
      "taxi stickers",
      "lost taxi",
      "stolen taxi",
      "replcement",
      "replacment",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "18/06/2026", name: "Liz Taster" }
);



const taxiAdvertisingConsent = new ContentBusiness(
  "taxiAdvertisingConsent",
  "Taxi Advertising Consent",
  "Details of how to apply for consent to display advertising on private hire and hackney carriage vehicles.",
  `
  <h3>Overview</h3>
    <p>Advertising consent is required <strong>before</strong> any advert is added to a licensed taxi vehicle, and customers must apply 
    to the licensing service with full details of their proposal.</p>
    <p>All content must meet strict standards, and approval must be granted before any advertising is displayed on a 
    licensed vehicle.</p>
    <p>This applies to both private hire vehicles and Hackney carriage (taxi) vehicles.</p>
    <p>Full details and a link to apply online can be found here:</p>
      <ul>
        <li>for private hire vehicles: 
        <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/private-0" target="_blank">
        Private hire advertising consent | Sheffield City Council</a></li>
        <li>for hackney carriage vehicles: 
        <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/hackney-0" target="_blank">
        Hackney carriage advertising consent | Sheffield City Council</a></li>
      </ul>
    <p>[insert send link x 2]</p>

  <h3>Restrictions on Advertising Content</h3>
    <p>All advertisements are checked for suitability. The council <strong>will not approve adverts</strong> that:</p>
      <ul>
        <li>Promote smoking, tobacco, or vaping</li>
        <li>Promote alcohol or gambling</li>
        <li>Are sexual, religious, or political in nature</li>
        <li>Are likely to cause offence to members of the public</li>
      </ul>

  <h3>Where Advertising Can Be Displayed</h3>
    <p>Advertising may be placed:</p>
      <ul>
        <li>On the rear window - using contra vision or similar material</li>
        <li>As half or full vehicle livery* – this must not distract from required signage</li>
        <li>On a digital screen</li>
        <li>As illuminated exterior media</li>
        <li>As a door sign (<em>Hackney carriage only</em>)</li>
        <li>On tip seats (<em>Hackney carriage only</em>)</li>
      </ul>
    <p>* If a vehicle is fully wrapped (full livery) the DVLA V5C logbook must be updated, and vehicle colour must be recorded as “full livery”.</p>
    <p>Advertisements <strong>must not</strong> cover any required notices, signs, or licence plates and must not negatively affect the safety or appearance of the vehicle.</p>
    <p>If the council determines that advertising is unsafe or in poor condition, the vehicle licence may be suspended until the issue is resolved.</p>

  <h3>Fees</h3>
    <ul>
      <li>Advertising consent application - £15</li>
      <li>Full livery advertising application - £55</li>
    </ul>

  <h3>Key Requirements and How to Apply</h3>
    <p>Applications are <strong>submitted online</strong>.</p>
    <p>The application must be submitted by the <strong>vehicle owner</strong>.</p>
    <p><strong>Full details</strong> of the proposed advertisement must be provided as part of the application.</p>
    <p>A <strong>contract for the advertisement</strong> must be included with the application. The contract must:</p>
      <ul>
        <li>State the vehicle details</li>
        <li>Include the end date of the contract</li>
        <li>Confirm the advertisement will be removed at the end of the contract period</li>
      </ul>
    <p>The customer <strong>must wait for approval</strong> before adding the advertisement to the vehicle.</p>

  <h3>Key Advice for Call Handling</h3>
    <ul>
      <li>Customers must not apply or display advertising before receiving approval.</li>
      <li>Remind customers that not all advert types are allowed.</li>
      <li>Check whether the enquiry relates to a <strong>private hire vehicle</strong> or a <strong>hackney carriage</strong>, as permitted advertising locations differ.</li>
      <li>If customers ask about costs, confirm the standard fee of £15, or £55 if full livery.</li>
    </ul>
  `,
  {},
  {},
  {},
  {
    type: "Application",
    keywords: [
      "taxi advertising consent",
      "advert",
      "advertising",
      "taxi",
      "consent",
      "approval",
      "vehicle",
      "hackney carriage",
      "private hire",
      "taxi livery",
      "livery",
      "adverts",
      "application",
      "apply",
      "contra vision",
      "taxi ad",
      "vehcle",
      "advertisng",
      "advertisin",
      "addvertising",
      "hackney cab",
      "ads",
      "taxi marketing"
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "18/06/2026", name: "Liz Taster" }
);



const reportTaxiAccident = new ContentBusiness(
  "reportTaxiAccident",
  "Reporting Taxi Accidents",
  "Guidance on reporting taxi accidents, required actions, and compliance with licensing requirements.",
  `
  <h3>Overview</h3>
    <p>If a taxi has been involved in an accident, this <strong>must be reported within 72 hours</strong>.</p>
    <p>This applies to both <strong>private hire vehicles</strong> and <strong>hackney carriage vehicles</strong> 
    licensed by Sheffield City Council.</p>
    <p>Drivers must complete the <strong>Accident Damage Report form online</strong>, 
    then await vehicle inspection and Licensing instructions before returning to work. This ensures compliance with 
    taxi licensing requirements and maintains passenger safety.</p>
    <p>Further details and a link to the form can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/private-hire-and-hackney-carriage-vehicles/road"target="_blank">
    Road traffic accident or damage | Sheffield City Council</a></p>
    <p>[insert send link]</p>

  <h3>How and What to Report</h3>
    <p>Drivers (or vehicle proprietors) must complete an <strong>Accident Damage Report form online</strong>.</p>
    <p>They must provide full details of the accident and damage to the vehicle, including any damage that affects:</p>
      <ul>
        <li>Safety</li>
        <li>Performance</li>
        <li>Appearance</li>
      </ul>
    <p>This information allows the Licensing Service to understand what happened and assess the condition of the vehicle.</p>

  <h3>After the Report is Submitted</h3>
    <p>The Council will <strong>inspect the vehicle in person</strong> to decide whether the vehicle is still suitable to 
    carry passengers.</p>
    <p>If the vehicle is <strong>not fit for use</strong>, the vehicle licence will be <strong>suspended</strong>. 
    This means the vehicle cannot be used until repairs are completed, and the vehicle <strong>passes a compliance test</strong> 
    at the Council’s testing station.</p>
    <p>Where a vehicle is badly damaged and cannot be driven, the driver will be asked to return the vehicle 
    licence plate rather than being issued with a suspension.</p>

  <h3>After the Repairs are Completed</h3>
    <p>Once the vehicle has been repaired, the driver is responsible for <strong>contacting the Licensing Service</strong>, 
    who will arrange a <strong>compliance test</strong> before the vehicle can return to service.</p>

  <h3>Key Messages for Call Handling</h3>
    <ul>
      <li>Report the accident <strong>within 72 hours</strong></li>
      <li>Complete the <strong>Accident Damage Report form</strong> online</li>
      <li>Do not use the vehicle if it may be unsafe</li>
      <li>Await inspection and follow Licensing instructions before returning to work</li>
    </ul>`,
  {},
  {},
  {},
  {
    type: "Report",
    keywords: [
      "report",
      "reporting",
      "taxi accident",
      "taxi",
      "accident",
      "damage",
      "private hire",
      "hackney carriage",
      "vehicle",
      "road traffic",
      "traffic",
      "crash",
      "collision",
      "colision",
      "collission",
      "incident",
      "incidents",
      "incedent",
      "accidnet",
      "acident",
      "vehcle",
      "hackny",
      "hakney",
      "carrage",
      "carridge",
      "carrige",
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "18/06/2026", name: "Liz Taster" }
);


const taxiComplaints = new ContentBusiness(
  "taxiComplaints",
  "Taxi Complaint Process",
  "Details of how to report issues with taxi drivers, vehicles, or operators licensed in Sheffield.",
  `
  <h3>Overview</h3>
    <p>Customers can report <strong>complaints about taxi drivers</strong>, vehicles, or operators licensed in Sheffield. 
    The council is responsible for investigating these complaints and may take enforcement action where necessary.</p>
    <p>Complaints are currently submitted by email using a form available here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/passenger-information/complain-about-taxi-or-driver" target="_blank">
    Complain about a taxi or driver | Sheffield City Council</a></p>

    <p>[insert send link]</p>

    <p><strong>In emergencies, residents should call 999.</strong></p>

  <h3>What Can Be Reported</h3>
    <p>Complaints may include issues such as:</p>
      <ul>
        <li>Poor customer service</li>
        <li>Poor or unsafe driving standards</li>
        <li>Overcharging</li>
        <li>Refusal to take a passenger</li>
        <li>Vehicle defects</li>
        <li>Failure to display driver or vehicle identification</li>
        <li>Unnecessarily long routes</li>
        <li>Illegal plying for hire</li>
        <li>Issues with operators</li>
        <li>Equality concerns (e.g. refusal of wheelchair users or guide dogs)</li>
        <li>Breaches of licence conditions</li>
      </ul>

  <h3>How to Report</h3>
    <p>Customers should complete a <strong>taxi incident/complaint form</strong>, 
    providing as much detail as possible to support the investigation.</p>
    <p>Submit the form and any supporting information (such as evidence) to the taxi licensing service via email at 
    <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a>.
    </p>

  <h3>Investigation and Outcomes</h3>
    <p>The council investigates complaints relating to taxi drivers, vehicles, and operators. They may:</p>
      <ul>
        <li>Offer advice</li>
        <li>Issue warnings</li>
        <li>Suspend or revoke licences</li>
        <li>Prosecute where appropriate</li>
      </ul>

  <h3>Important Considerations</h3>
    <ul>
      <li>If prosecution is pursued, the complainant may need to attend a council committee or magistrates’ court as a witness.</li>
      <li>Criminal matters (such as assault, theft, or dangerous driving) must be reported to the police first, then to the licensing service.</li>
      <li>In emergencies, residents should call 999.</li>
    </ul>`,
  { buttonLabel: "", formName: "" },
  { typeKey: "Report" },
  { typeKey: "Complaint" },
  {
    type: "Report",
    keywords: [
      "taxi",
      "complaint",
      "report",
      "issue",
      "driver",
      "vehicle",
      "taxi operator",
      "overcharging",
      "unsafe driving",
      "refusal passenger",
      "complaints",
      "cab",
      "hackney carriage",
      "private hire",
      "complant",
      "compaint",
      "lisencing"
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "18/06/2026", name: "Liz Taster" }
);


const medicalExemptionsTaxi = new ContentBusiness(
  "medicalExemptionsTaxi",
  "Medical Exemptions for Taxi Drivers",
  "Information on medical exemptions for taxi drivers under the Equality Act 2010, including how to apply.",
  
  `<h3>Overview</h3>
    <p>Taxi drivers are legally required to assist passengers with disabilities, including carrying assistance dogs and helping passengers using wheelchairs. This duty is set out under the Equality Act 2010.</p>
    <p>A <strong>medical exemption</strong> may be granted if a driver has a medical condition that prevents them from carrying out these duties.</p>
    <p>Further information and a link to the online form can be found here: 
    <a href="https://www.sheffield.gov.uk/licences-permits-registrations/taxi-licensing/taxi-drivers/medical-exemptions" target="_blank">
    Medical exemptions – Sheffield City Council</a></p>

    <p>[insert send link]</p>

  <h3>Types of Medical Exemption</h3>
    <p>There are two types of exemption certificates available:</p>
      <ul>
        <li><strong>Section 166 Exemption Certificate (Wheelchairs)</strong> - applies where a driver’s <strong>physical health makes it impossible or very difficult</strong> to assist passengers in wheelchairs.</li>
        <li><strong>Section 169 Exemption Certificate (Assistance Dogs)</strong> - applies where a driver has a <strong>medical condition caused by being near dogs</strong>.</li>
      </ul>
    <p>Evidence must confirm that the condition makes it <strong>impossible or very difficult</strong> to carry out these duties.</p>

  <h3>What the Exemption Means</h3>
    <p>Drivers who are granted an exemption will receive a <strong>certificate</strong>.</p>
    <p>The certificate must be <strong>displayed in the taxi</strong>, or be <strong>produced on request</strong>.</p>
    <p>Without a valid exemption certificate, drivers are still required by law to provide assistance.</p>

  <h3>How to Apply</h3>
    <ol>
      <li>Complete the <strong>online form</strong> to request a medical exemption</li>
      <li>Obtain <strong>medical evidence</strong> from your GP, or a doctor approved by the council – ensure this confirms that you cannot carry passengers with wheelchairs, and/or assistance dogs</li>
      <li>Submit the evidence to support your application</li>
    </ol>

  <h3>Key Information for Call Handlers</h3>
    <ul>
      <li>Medical exemptions are <strong>not automatic</strong> and must be approved by the council.</li>
      <li>A <strong>valid certificate must be displayed, or shown</strong> if requested.</li>
      <li>Without an exemption, drivers <strong>must assist wheelchair users and carry assistance dogs</strong> and <strong>must not charge extra</strong> for doing so.</li>
    </ul>`,

  { buttonLabel: "Apply online", formName: "request_driver_med_exemp" },
  { typeKey: "Application" },
  { typeKey: "Apply" },
  {
    type: "Application",
    keywords: [
      "medical",
      "exemption",
      "taxi",
      "drivers",
      "wheelchair",
      "assistance dog",
      "guide dog",
      "dog",
      "section 166",
      "section 169",
      "taxi licensing",
      "apply",
      "disability",
      "wheelchair",
      "assistance",
      "certificate",
      "exemptions",
      "medcial",
      "excemption",
      "exemtion"
    ],
    categories: ["Business", "Taxi Licensing"]
  },
  { date: "19/06/2026", name: "Liz Taster" }
);



  const taxiLicensing = new MenuBusiness(
  "taxiLicensing",
  "Taxi Licensing",
  "Information regarding taxi licensing",
  [
    vechicleInspections,
    vechicleCustomerCharter,
    transferLicence,
    surrenderLicence,
    medicalNeeds,
    drivingStandardsTestGuide,
    applyPrivateHireVehicleLicence,
    applyHackneyCarriageVehicleLicence,
    applyTaxiDriverLicence,
    applyPrivateHireOperatorLicence,
    renewPrivateHireOperatorLicence,
    changeOfNameOrAddress,
    convictionsAndDrivingOffences,
    renewTaxiDriverLicence,
    renewPrivateHireVehicleLicence,
    renewHackneyCarriageVehicleLicence,
    applyKnowledgeTest,
    orderReplacementTaxiItems,
    taxiAdvertisingConsent,
    reportTaxiAccident,
    taxiComplaints,
    medicalExemptionsTaxi
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


  