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
            <li><a href="https://www.sheffield.gov.uk/taxi-licensing/private-hire-and-hackney-carriage-vehicles/hackney-carriage-vehicle-licence/choosing-hackney-carriage" target="_blank">https://www.sheffield.gov.uk/taxi-licensing/private-hire-and-hackney-carriage-vehicles/hackney-carriage-vehicle-licence/choosing-hackney-carriage</a></li>
            <li>Process</li>
            <li>Determine</li>
        </ol>
    </p>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Test appointments</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Once the applicant make an application for a Hackney Carriage Licence, the vehicle will be issued with a date to attend the compliance test.<br>
                Vehicle compliance test certificate is valid for 14 days
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Hackney carriage disclosure and barring checks</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                If the applicant does not currently hold a taxi driver licence with SCC, then they must provide a  basic Disclosure and Barring Service (DBS) certificate.<br>
                <br>
                If a vehicle licence is in the name of a company or a partnership, all named directors and partners within the company will need to provide us with a Basic Disclosure from the DBS.<br>
                <br>
                The cost for a basic DBS check is <strong>£21.50</strong>.  
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Hackney carriage vehicle insurance</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                This is a valid insurance certificate or cover note that tells applicant or a licensed driver, are insured to drive the vehicle and the purposes to carry passengers for hire and reward.
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Cost</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                A hackney carriage vehicle licence costs <strong>£212</strong>.  
                Must pay online when complete the hackney carriage application form.
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Information need</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Basic DBS disclosure or your DBS certificate number if you are signed up to the online check service.<br>
                Original V5C registration certificate (logbook) or the keepers supplement of the V5C if you have recently bought the vehicle.<br>
                Original certificate of insurance or the insurance cover note.<br>
                Compliance certificate.
            </p>
        </div>
    </details>

     <details class="accordion">
        <summary class="accordion-header">
            <h3>Apply for a new HC licence</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Online form via Big Change portal Must licence a vehicle to use it as a HC in Sheffield.    Soon to be SCC form
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Collecting the licence</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Service will contact the applicant by email to confirm that they have issued  hackney carriage licence and arrange a time for the applicant to collect  licence from the reception at depot.
                Arrange a time for pick by either by, email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> or telephone <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2734264')">0114 2734264</a>.
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
        <li><a href="https://www.sheffield.gov.uk/taxi-licensing/private-hire-and-hackney-carriage-vehicles/hackney-carriage-vehicle-licence/choosing-hackney-carriage" target="_blank">https://www.sheffield.gov.uk/taxi-licensing/private-hire-and-hackney-carriage-vehicles/hackney-carriage-vehicle-licence/choosing-hackney-carriage</a></li>
        <li>Process</li>
        <li>Determine</li>
    </ol>
    </p>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Test appointments</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Once the applicant make an application for a PHV Licence, the vehicle will be issued with a date to attend the compliance test.<br>
                Vehicle compliance test certificate is valid for 14 days
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Private Hire Vehicle disclosure and barring checks</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                If the applicant does not currently hold a taxi driver licence with SCC, then they must provide a basic Disclosure and Barring Service (DBS) certificate.<br>
                <br>
                If a vehicle licence is in the name of a company or a partnership, all named directors and partners within the company will need to provide us with a Basic Disclosure from the DBS.<br>
                <br>
                The cost for a basic DBS check is <strong>£21.50</strong>.  
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>PHV insurance</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                This is a valid insurance certificate or cover note that tells applicant or a licensed driver, are insured to drive the vehicle and the purposes to carry passengers for hire and reward.
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Apply for a new PHV licence</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Online form via Big Change portal
                Must licence a vehicle to use it as a PHV in Sheffield.
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Cost</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                A private hire vehicle licence costs <strong>£212</strong>.  
                Must pay online when complete the private hire application form.
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Information need</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Basic DBS disclosure or your DBS certificate number if you are signed up to the online check service.<br>
                Original V5C registration certificate (logbook) or the keepers supplement of the V5C if you have recently bought the vehicle.<br>
                Original certificate of insurance or the insurance cover note.<br>
                Compliance certificate.
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Collecting the licence</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Service will contact the applicant by email to confirm that they have issued  hackney carriage licence and arrange a time for the applicant to collect  licence from the reception at depot.
                Arrange a time for pick by either by, email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> or telephone <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2734264')">0114 2734264</a>.
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
      categories: ["Your City Council"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

  const applyTaxiDriver = new ContentBusiness(
    "applyTaxiDriver",
    "Apply for a new taxi driver licence",
    "Apply for a new taxi driver licence",
    `
        <details class="accordion">
        <summary class="accordion-header">
            <h3>Fit and Proper Test : Stage 1</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">

            <details class="details-accordion">
            <summary>Obtaining the "Certificate in Introduction to the Role of Professional Taxi and Private Hire Driver"</summary>
            <div class="details-accordion-content">
                <p>
                    Sheffield City College or other providers from Gov. UK.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Proof of right to work document?</summary>
            <div class="details-accordion-content">
            <p>
                You will need to provide us with evidence that you are legally allowed to work in the UK if you are:
            </p>
                <ul>
                    <li>applying to become a licensed driver</li>
                    <li>applying to become an operator</li>
                    <li>a hackney carriage or private hire vehicle licence holder</li>
                </ul>
            <p>
                To prove this, we will need to see your original right to work documents in person and take copies of them.  
            </p>
            <p>
                This information can be provided when you make your in-person Disclosure and Barring Service application to us.    
            </p>
            <p>
                Once we have seen you in-person, we will not need to see you again unless you have right to work restrictions.    
            </p>
            <p>
                Documents that we accept can be found at <a href="https://www.sheffield.gov.uk/taxi-licensing/taxi-drivers/applying-new-taxi-driver-licence/right-to-work" target="_blank">https://www.sheffield.gov.uk/taxi-licensing/taxi-drivers/applying-new-taxi-driver-licence/right-to-work</a> 
            </p>

            </div>
            </details>

            <details class="details-accordion">
            <summary>If you are under immigration controls</summary>
            <div class="details-accordion-content">
                <ul>
                    <li>Current passport.</li>
                    <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
                    <li>Current immigration status document containing a photograph issued by the Home Office.</li>
                </ul>
            </div>
            </details>

        </div>
        </details>


        <details class="accordion">
        <summary class="accordion-header">
            <h3>Fit and Proper Test : Stage 2</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">

            <details class="details-accordion">
            <summary>Age & experience</summary>
            <div class="details-accordion-content">
                <p>
                    Must be above 21 years old & have held a Driver and Vehicle Licensing Agency (DVLA) driver licence for more than 12 months.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Knowledge test pass mark</summary>
            <div class="details-accordion-content">
                <p>
                    Score at least 80% in each section to pass the Knowledge Test. <p><a href="https://www.sheffield.gov.uk/taxi-licensing/taxi-drivers/applying-new-taxi-driver-licence/knowledge-test" target="_blank">https://www.sheffield.gov.uk/taxi-licensing/taxi-drivers/applying-new-taxi-driver-licence/knowledge-test</a> JCHERE add Send Link</p>
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Driving standards test</summary>
            <div class="details-accordion-content">
                <p>
                    Pass a driving standards test carried out by a driving standards examiner at our Transport Department. The test will include any 3 of the following:
                </p>
                <ul>
                    <li>Emergency stop.</li>
                    <li>Left-hand reverse.</li>
                    <li>Right-hand reverse.</li>
                    <li>Turn in the road.</li>
                    <li>Reverse parking.</li>
                </ul>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Requirements for Driving standards test</summary>
            <div class="details-accordion-content">
                <ul>
                    <li>Must be 21 years of age.</li>
                    <li>Valid for one year.</li>
                    <li>Make a boking.</li>
                    <li>DVLA driving licence number in full.</li>
                </ul>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Cost for Driving standards test</summary>
            <div class="details-accordion-content">
                <p>
                    £75
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Vehicles that can use for the Driving standards test</summary>
            <div class="details-accordion-content">
                <p>
                    With the right insurance:
                </p>
                <ul>
                    <li>Driving instructor’s vehicle.</li>
                    <li>Rental vehicle.</li>
                    <li>Your vehicle.</li>
                    <li>Licenced vehicle that is registered in applicant's name and which applicant has a licence to drive (all licensing livery, including the licence plate should be removed before arriving at Staniforth Road).</li>
                </ul>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Disclosure and barring checks</summary>
            <div class="details-accordion-content">
                <p>
                    An Enhanced Disclosure Certificate with Barred Check Lists from the Disclosure and Barring Service (DBS).
                </p>
                <p>
                    It will look at all convictions and particular attention will be given to the following:
                </p>
                <ul>
                    <li>Crimes resulting in death.</li>
                    <li>Exploitation.</li>
                    <li>Offences resulting in violence.</li>
                    <li>Possession of a weapon.</li>
                    <li>Sex and indecency offences.</li>
                    <li>Dishonesty.</li>
                    <li>Drugs.</li>
                    <li>Discrimination.</li>
                    <li>Motoring convictions (drink driving, driving under the influence of drugs, using a hand-held device or telephone whilst driving).</li>
                </ul>
                <p>
                    If you have had one or more conviction recorded for any of the above offences, your application may be referred to the Licensing Sub-Committee.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>To apply for an Enhanced Disclosure Certificate with Barred Check Lists</summary>
            <div class="details-accordion-content">
                <ul>
                    <li>Driver needs to email taxilicensing@sheffield.gov.uk to get a DBS pack.</li>
                    <li>Complete the DBS form and set up an appointment to have documents checked face-to-face at the reception.</li>
                    <li>Service will send the complete application to DBS, they will make the necessary checks and return the certificate to the driver/applicant.</li>
                    <li>Applicant can apply for DBS certificate when taking knowledge test or driving standards test.</li>
                </ul>
                <p>
                    Cost: The DBS certificate costs £49.50.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>DBS Update Service</summary>
            <div class="details-accordion-content">
                <p>
                    To check whether applicant's DBS is current when granting the licence, applicant must send a copy of the full certificate to us by email and sign-up to the DBS Update Service within 30 days of receiving the certificate.
                </p>
                <p>
                    Applicant must maintain subscription with the DBS service by paying an annual fee of £16 per year to DBS.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>DVLA checks</summary>
            <div class="details-accordion-content">
                <p>
                    Must supply the applicant's Driving and Vehicle Licensing Agency (DVLA) driving licence number.  
                    The applicant might receive an email from a company called TaxiPlus to give consent to allow the service to carry out these checks.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Taxi driver medical assessments</summary>
            <div class="details-accordion-content">
                <p>
                    Must pass a DVLA Group 2 Medical Fitness examination when an applicant first apply to be a licenced driver.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Group 2 Medical Fitness examinations will focus on:</summary>
            <div class="details-accordion-content">
                <ul>
                    <li>Neurological (brain and nerves) disorders.</li>
                    <li>Cardiovascular (heart and blood vessels) disorders.</li>
                    <li>Diabetes.</li>
                    <li>Mental health.</li>
                    <li>Drug or alcohol misuse.</li>
                    <li>Visual (eyesight) disorders.</li>
                    <li>Renal (kidney, ureters and urethra) disorders.</li>
                    <li>Respiratory (breathing) disorders.</li>
                    <li>Any other conditions.</li>
                </ul>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Medical assessments by age</summary>
            <div class="details-accordion-content">
                <ul>
                    <li>45 years of age or older need to take a medical examination every 5 years.</li>
                    <li>65 years of age or older need to take a medical examination every year.</li>
                    <li>Where recommended by the GP may be required to a take medical examination, or other medical tests, on a more frequent basis.</li>
                </ul>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Apply for the medical assessments</summary>
            <div class="details-accordion-content">
                <p>
                    Get a medical assessment form from service (email, post, download), and it needs to be completed either by applicant's doctor or one recommended by us. A driver can apply for the medical exemptions if applicable.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>Returning medical assessment</summary>
            <div class="details-accordion-content">
                <ul>
                    <li>Email - Take clear photos of all pages and email them to taxilicensing@sheffield.gov.uk.</li>
                    <li>Post - by recorded delivery to Licensing Service Block C, Staniforth Road Depot, Staniforth Road Sheffield S9 3HD.</li>
                    <li>In-person - drop the medical pack off in the post box on site ensure you keep a copy of your medical certificate for your own records in all cases.</li>
                </ul>
            </div>
            </details>

        </div>
        </details>

        <details class="accordion">
        <summary class="accordion-header">
            <h3>Fit and Proper Test : Stage 3</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">

            <details class="details-accordion">
            <summary>Apply for a new taxi driver licence</summary>
            <div class="details-accordion-content">
                <p>
                    Applicants who completed stages 1 & 2 can apply for the new combined ph/hc driver licence.
                </p>
            </div>
            </details>

            <details class="details-accordion">
            <summary>New applications are defined as follows</summary>
            <div class="details-accordion-content">
                <ol>
                    <li>Applicant has never held a licence with us.</li>
                    <li>Applicant has held a licence previously but the expiry of that licence is over 12 months since the date they make the application and.</li>
                    <li>An applicant who applies after 1 calendar month since the expiry of his last licence.</li>
                </ol>
            </div>
            </details>

            <details class="details-accordion">
            <summary>The fee for a new taxi driver licence depends on how many years the applicant wants it to last</summary>
            <div class="details-accordion-content">
                <ul>
                    <li>One year - £223.</li>
                    <li>2 years - £245.</li>
                    <li>3 years - £268.</li>
                </ul>
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
      categories: ["Your City Council"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

const applyPrivateLicence = new ContentBusiness(
    "applyPrivateLicence",
    "Apply for a Priviate Hire Driver License",
    "Apply for a Priviate Hire Driver License",
    `
       <details class="accordion">
  <summary class="accordion-header">
    <h3>Fit and Proper Test: Stage 1</h3>
  </summary>
  <div class="accordion-content">

    <details class="details-accordion">
      <summary>Obtaining the "Certificate in Introduction to the Role of Professional Taxi and Private Hire Driver"</summary>
      <div class="details-accordion-content">
        <p>Sheffield City College or other providers listed on Gov.uk</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Proof of right to work</summary>
      <div class="details-accordion-content">
        <ul>
          <li>British passport</li>
          <li>Irish passport</li>
          <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey, or the Isle of Man</li>
          <li>Passport from immigration control</li>
          <li>Immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and name</li>
          <li>UK birth certificate with an official document giving your permanent NI number and name</li>
          <li>Channel Islands, Isle of Man, or Ireland birth certificate with an official document giving your permanent NI number and name</li>
          <li>Certificate of naturalisation as a British citizen with an official document giving your permanent NI number and name</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>If you are under immigration controls</summary>
      <div class="details-accordion-content">
        <ul>
          <li>Current passport</li>
          <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey, or the Isle of Man</li>
          <li>Current immigration status document containing a photograph issued by the Home Office</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Limitations for applicants under immigration controls</summary>
      <div class="details-accordion-content">
        <p>Licence will only be issued for the period you are entitled to work in the UK.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>If right to work is time-limited</summary>
      <div class="details-accordion-content">
        <ul>
          <li>Non-digital document or certificate of application issued by the Home Office</li>
          <li>Document from the Bailiwick of Jersey, Bailiwick of Guernsey, or the Isle of Man</li>
          <li>Application Registration Card issued by the Home Office stating you can take employment</li>
          <li>Positive Verification Notice issued by the Home Office Employer Checking Service</li>
        </ul>
      </div>
    </details>

  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Fit and Proper Test: Stage 2</h3>
  </summary>
  <div class="accordion-content">

    <details class="details-accordion">
      <summary>Age & experience</summary>
      <div class="details-accordion-content">
        <p>Must be 21 years or older and have held a Driver and Vehicle Licensing Agency (DVLA) driver licence for more than 12 months.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Knowledge test pass mark</summary>
      <div class="details-accordion-content">
        <p>Score at least 80% in each section to pass the Knowledge Test.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Driving standards test</summary>
      <div class="details-accordion-content">
        <p>Pass a driving standards test conducted by a driving standards examiner at our Transport Department. The test will include any 3 of the following:</p>
        <ul>
          <li>Emergency stop</li>
          <li>Left-hand reverse</li>
          <li>Right-hand reverse</li>
          <li>Turn in the road</li>
          <li>Reverse parking</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Requirements for the driving standards test</summary>
      <div class="details-accordion-content">
        <ul>
          <li>Must be over 21 years of age</li>
          <li>Held a DVLA driver licence for more than 12 months</li>
          <li>DVLA driving licence number in full</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Qualifications needed before the driving standards test</summary>
      <div class="details-accordion-content">
        <ul>
          <li>Level 2 certificate in Introduction to the Role of the Professional Taxi and Private Hire Driver</li>
          <li>Safeguarding training</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Cost for driving standards test</summary>
      <div class="details-accordion-content">
        <p>£75</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Vehicles allowed for the driving standards test</summary>
      <div class="details-accordion-content">
        <p>With the right insurance:</p>
        <ul>
          <li>Driving instructor’s vehicle</li>
          <li>Rental vehicle</li>
          <li>Your own vehicle</li>
          <li>Licensed vehicle registered in applicant's name, with all licensing livery removed</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Disclosure and Barring Checks (DBS)</summary>
      <div class="details-accordion-content">
        <p>An Enhanced Disclosure Certificate with Barred List checks from the DBS.</p>
        <p>Attention will be given to convictions related to:</p>
        <ul>
          <li>Crimes resulting in death</li>
          <li>Exploitation</li>
          <li>Violence</li>
          <li>Possession of weapons</li>
          <li>Sex and indecency offences</li>
          <li>Dishonesty</li>
          <li>Drugs</li>
          <li>Discrimination</li>
          <li>Motoring offences (drink driving, driving under influence, using a hand-held device while driving)</li>
        </ul>
        <p>One or more relevant convictions may result in referral to the Licensing Sub-Committee.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Applying for a DBS certificate</summary>
      <div class="details-accordion-content">
        <ul>
          <li>Email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> to request a DBS pack</li>
          <li>Complete the DBS form and attend a face-to-face appointment for document verification</li>
          <li>Taxi licensing service will submit your application to DBS and return the certificate to you</li>
          <li>Applicants can apply for the DBS certificate when taking the knowledge or driving standards test</li>
        </ul>
        <p>Cost: £49.50</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>DBS Update Service</summary>
      <div class="details-accordion-content">
        <p>Applicants must email a copy of the full certificate and sign up to the DBS Update Service within 30 days of receipt. Maintain the subscription with an annual fee of £16.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>DVLA checks</summary>
      <div class="details-accordion-content">
        <p>Applicants must provide their DVLA licence number. Consent may be required via TaxiPlus to carry out checks.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Taxi driver medical assessments</summary>
      <div class="details-accordion-content">
        <p>Must pass a DVLA Group 2 Medical Fitness examination.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Medical assessment areas</summary>
      <div class="details-accordion-content">
        <ul>
          <li>Neurological disorders</li>
          <li>Cardiovascular disorders</li>
          <li>Diabetes</li>
          <li>Mental health</li>
          <li>Drug or alcohol misuse</li>
          <li>Visual disorders</li>
          <li>Renal disorders</li>
          <li>Respiratory disorders</li>
          <li>Other conditions as advised</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Medical frequency by age</summary>
      <div class="details-accordion-content">
        <ul>
          <li>45 years and older: every 5 years</li>
          <li>65 years and older: every year</li>
          <li>More frequent exams if recommended by GP</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Submitting medical assessment</summary>
      <div class="details-accordion-content">
        <ul>
          <li>Email: clear photos of all pages to <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a></li>
          <li>Post: recorded delivery to Licensing Service, Block C, Staniforth Road Depot, Sheffield S9 3HD</li>
          <li>In-person: drop off in on-site post box</li>
        </ul>
      </div>
    </details>

  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Fit and Proper Test: Stage 3</h3>
  </summary>
  <div class="accordion-content">

    <details class="details-accordion">
      <summary>Applying for a new taxi driver licence</summary>
      <div class="details-accordion-content">
        <p>Applicants who completed stages 1 & 2 can apply for the new combined PH/HC driver licence.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>New applications defined</summary>
      <div class="details-accordion-content">
        <ol>
          <li>Applicant has never held a licence with us</li>
          <li>Applicant's previous licence expired more than 12 months ago</li>
          <li>Applicant applies more than 1 calendar month after last licence expiry</li>
        </ol>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Licence fees</summary>
      <div class="details-accordion-content">
        <ul>
          <li>1 year: £223</li>
          <li>2 years: £245</li>
          <li>3 years: £268</li>
        </ul>
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
      categories: ["Your City Council"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

const applyPrivateOperator = new ContentBusiness(
    "applyPrivateOperator",
    "Apply Private Hire Vehicle Operators Licence",
    "Apply Private Hire Vehicle Operators Licence",
    `
    <h3>About private hire operator licences</h3>
    <h4>Private Hire Operator Licence</h4>
    <p>You will need to apply for a private hire operator licence to run a private hire business in Sheffield. This enables you to advertise and accept bookings for private hire work.</p>

    <p>Although you may not drive passengers, if you own the business, you will still have to deal with the public. This includes face-to-face, email, or telephone conversations.</p>

    <p>It is important that you only operate licensed vehicles that are driven by licensed drivers. The driver, vehicle, and operator must all be licensed by us.</p>

    <h4>Applying for a licence</h4>
    <p>Find out how to apply for a private operator licence:</p>
    <p><a href="https://www.sheffield.gov.uk/taxi-licensing/private-hire-operator/new-private-hire-operator-licence" target="_blank">https://www.sheffield.gov.uk/taxi-licensing/private-hire-operator/new-private-hire-operator-licence</a> JCHERE add Send Link</p>
    <h3>Find out how to apply for a private hire operator licence</h3>
    <h4>Fit and Proper Check</h4>
    <p>When you apply for a new private hire operator licence, we will check whether you are 'fit and proper' to hold the licence. This means you are safe and suitable to be a private hire operator, pose no threat to public safety, and have no links to serious criminal activity. To help us understand this, we will need to know the following information when you apply online.</p>

    <h4>About DBS</h4>
    <p>You will need to tell us whether all applicants, directors, or partners have any criminal convictions.</p>
    <p><a href="#">About DBS checks</a></p>

    <h4>About right to work</h4>
    <p>We will need to know that you are legally allowed to work in the UK.</p>
    <p><a href="#">Right to work in the UK for taxi operators</a></p>

    <h4>About tax checks</h4>
    <p>You will need to show us that you are aware of tax registration if you do not have a tax check code already.</p>
    <p><a href="#">Private hire operator tax checks</a></p>

    <h4>About insurance</h4>
    <p>Find out about the insurance you will need as a private hire operator.</p>
    <p><a href="#">Private hire operator insurance</a></p>

    <h4>About planning permission</h4>
    <p>Learn more about planning permission you might need for your premises.</p>
    <p><a href="#">Private hire operator planning permission</a></p>

    <h4>About data protection</h4>
    <p>Understand about data protection and registering with the Information Commissioner’s Office (ICO).</p>
    <p><a href="#">Registering with the ICO</a></p>

    <h4>About operator name</h4>
    <p>You must operate under a company name that is not similar to one already used in Sheffield. Learn more about the name your private hire business can have.</p>
    <p><a href="#">Private hire operator name</a></p>

    <h4>Apply for licence</h4>
    <p>Use this form to apply for your new private hire operator licence. JCHERE need form link</p>

    <h3>Private hire operator disclosure and barring checks<h3>
    <h4>Annual DBS Certificate</h4>
    <p>You will need to send us a basic Disclosure and Barring Service (DBS) certificate every year.</p>
    <p>We will look at any and all convictions contained within the DBS check. These include:</p>
    <ul>
    <li>crimes resulting in death</li>
    <li>exploitation</li>
    <li>offences involving violence</li>
    <li>possession of a weapon</li>
    <li>sex and indecency offences</li>
    <li>dishonesty</li>
    <li>drugs</li>
    <li>discrimination</li>
    <li>any offence referenced in hackney carriage and private hire legislation</li>
    </ul>
    <p>If you are a company or partnership applying for a licence, all named directors and partners within the company will need to supply a basic DBS certificate every year.</p>
    <p>If you have one or more convictions recorded for any of the above offences, your licence may be referred to our Licensing Sub-Committee. They will then review any convictions to decide whether you can be granted a private hire operator licence.</p>

    <h4>How to apply</h4>
    <p>The cost for a basic DBS check is £21.50. It is available for people working in England and Wales.</p>

    <h4>About DBS checks - Living overseas</h4>
    <p>If any director within the company or person within the partnership has lived outside of the UK for a period of more than three consecutive months, they will be required to supply a Certificate of Good Character.</p>

    <h3>Right to work in the UK for taxi operators</h3>
    <p>You will need to provide us with evidence that you are legally allowed to work in the UK if you are:</p>
    <ul>
    <li>applying to become a licensed driver</li>
    <li>applying to become an operator</li>
    <li>a hackney carriage or private hire vehicle licence holder</li>
    </ul>
    <p>To prove this, we will need to see your original right to work documents in person and take copies of them. This information can be provided when you make your in-person DBS application to us. Once we have seen you in person, we will not need to see you again unless you have right to work restrictions.</p>

    <h4>Documents that we accept</h4>
    <p>You will need to provide one of the documents listed below:</p>
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
    <p>If you are under immigration controls, then we will only issue a licence for the period that you are entitled to work in the UK. We will need to see one of the documents listed below before we can issue your licence:</p>
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
    <h3>Private hire operator insurance</h3>
    <h4>Private Hire Operator Insurance</h4>
    <p>As a private hire operator, you must have the right insurance in place for the services you offer. This includes:</p>
    <ul>
    <li>public liability insurance</li>
    <li>employers' liability compulsory insurance</li>
    </ul>
    <p>We will need to see copies of the relevant insurance certificates when you make your application.</p>

    <h4>Public Liability Insurance</h4>
    <p>This must be in place if you have premises that are used by the public.</p>
    <p>Public liability insurance, where required, must be a minimum of £2,000,000.</p>
    <p>You will not need public liability insurance if:</p>
    <ul>
    <li>there is no public access to the premises</li>
    <li>no people are employed</li>
    <li>nobody works from the premises</li>
    </ul>

    <h4>Employers' Liability Compulsory Insurance</h4>
    <p>This insurance must be in place if you employ staff.</p>
    <p>Where staff are employed, the insurance must cover, as a minimum, death or personal injury from any incident during a person’s employment.</p>


    <h3>Private hire operator planning permission</h3>
    <h4>Premises and Planning Permission</h4>
    <p>The premises where you operate must be suitable for business purposes and might need planning permission.</p>

    <h4>Planning Permission Not Needed</h4>
    <p>If planning permission is not needed, you will need to supply a letter from the Planning Department stating this.</p>
    <p>You can get a letter from the Pre-Application Enquiry Service. There is a fee for this service.</p>
    <p><a href="#">Make a pre-application enquiry JCHERE</a></p>

    <h4>Planning Permission Needed</h4>
    <p>If you need planning permission, you will have to provide us with a copy of your planning permission.</p>
    <p>You will need to use the Planning Portal if you want to get planning permission.</p>

    <h3>Registering with the ICO</h3>
    <p>
        Under Data Protection Regulations 2018, your private hire operator business must register with the Information Commissioner’s Office (ICO).<br>
        You must follow the principles of the General Data Protection Regulations (GDPR) and understand what you must do to manage information.</br>
    </p>


    <h3>Private hire operator name</h3>
    <p>Your private hire operator business must operate under a company name. This must not be the same, or similar to, one that is used by another company in the Sheffield area.</p>
    <p>Where an operator’s licence is removed, has lapsed, or companies have merged, the name or a similar one cannot be used by another operator until 12 months has lapsed.</p>

    <h4>Words You Cannot Use</h4>
    <p>You must not use the following words, or any similar ones, in your operator name or when advertising your company:</p>
    <ul>
    <li>taxi</li>
    <li>hackney carriage</li>
    <li>cab</li>
    </ul>
    <p>Private hire vehicles must not display any words related to “taxi”.</p>

    <h4>Search Existing Operator Names</h4>
    <p>To help you decide and confirm your operator name, you can view a list of existing operator names in Sheffield on the public register.</p>

    <h3>Apply for a new private hire operator licence</h3>
    <h4>Cost</h4>
    <p>The fee to apply for your private hire operator licence depends on how long your licence is for and how many vehicles you’re operating.</p>

    <table>
    <thead>
        <tr>
        <th>Duration</th>
        <th>Number of Vehicles</th>
        <th>Cost</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>1 year</td><td>1 to 10</td><td>£531</td></tr>
        <tr><td></td><td>11 to 50</td><td>£664</td></tr>
        <tr><td></td><td>51 to 100</td><td>£1993</td></tr>
        <tr><td></td><td>101 to 250</td><td>£4650</td></tr>
        <tr><td></td><td>Over 250 vehicles</td><td>£6643</td></tr>
        <tr><td>2 years</td><td>1 to 10</td><td>£1026</td></tr>
        <tr><td></td><td>11 to 50</td><td>£1282</td></tr>
        <tr><td></td><td>51 to 100</td><td>£3063</td></tr>
        <tr><td></td><td>101 to 250</td><td>£5840</td></tr>
        <tr><td></td><td>Over 250 vehicles</td><td>£8119</td></tr>
        <tr><td>3 years</td><td>1 to 10</td><td>£1521</td></tr>
        <tr><td></td><td>11 to 50</td><td>£1900</td></tr>
        <tr><td></td><td>51 to 100</td><td>£4133</td></tr>
        <tr><td></td><td>101 to 250</td><td>£7030</td></tr>
        <tr><td></td><td>Over 250 vehicles</td><td>£9595</td></tr>
        <tr><td>4 years</td><td>1 to 10</td><td>£2016</td></tr>
        <tr><td></td><td>11 to 50</td><td>£2518</td></tr>
        <tr><td></td><td>51 to 100</td><td>£5203</td></tr>
        <tr><td></td><td>101 to 250</td><td>£8220</td></tr>
        <tr><td></td><td>Over 250 vehicles</td><td>£11071</td></tr>
        <tr><td>5 years</td><td>1 to 10</td><td>£2510</td></tr>
        <tr><td></td><td>11 to 50</td><td>£3137</td></tr>
        <tr><td></td><td>51 to 100</td><td>£6274</td></tr>
        <tr><td></td><td>101 to 250</td><td>£9411</td></tr>
        <tr><td></td><td>Over 250 vehicles</td><td>£12548</td></tr>
    </tbody>
    </table>

    <h4>Information You Will Need to Provide</h4>
    <p>As well as your application and private hire operator's questionnaire, you will need to upload the following information when you apply for your private hire operator licence:</p>
    <ul>
    <li>current basic Disclosure and Barring Service (DBS) certificate of all directors (if not already a licensed driver with us) or DBS certificate number (found by logging into your DBS account)</li>
    <li>right to work document(s) of all business owners (we will need to see this in person if you are not already licensed with us as a driver and/or if your right to work has limitations)</li>
    <li>tax check information or nine-digit tax check code if you have one</li>
    <li>public liability insurance certificate (if applicable)</li>
    <li>employers' liability insurance</li>
    <li>planning consent (if needed) or letter confirming that planning permission is not required</li>
    <li>registration with the Information Commissioner’s Office</li>
    <li>image of the proposed signage that you will use</li>
    </ul>
    <p>We may need to see other documents. If this is the case, we will contact you directly.</p>
    <p>We will not process your application until we have seen all the documents we need.</p>

    <h4>How to Get a Tax Code</h4>
    <p>Find information about checking or getting a tax code at GOV.UK: <a href="https://www.gov.uk/complete-tax-check-for-a-taxi-private-hire-or-scrap-metal-licence">JCHERE SEND LINK Complete a tax check for a taxi, private hire or scrap metal licence</a></p>

    <h3>Read our policy</h3>
    <p>Read our <strong>Private Hire Operator and Vehicle Licence Policy</strong> to find out more about applying for a new private hire operator licence:</p>
    <p><a href="https://www.sheffield.gov.uk/sites/default/files/2025-02/private_hire_operator_and_private_hire_vehicle_licence_policy_0_2.pdf" target="_blank">JCHERE SEND LINK Private Hire Operator and Vehicle Licence Policy (PDF)</a></p>

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
    "Medical Exemptions",
    "Medical Needs",
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
            <h3>About certificates</h3>
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

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Pre requirement:</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>Hackney carriage vehicle needs to go through a compliance test no more than 4 weeks before its licence is due to be renewed.</p>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Compliance test</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>Once the applicant make an renew application for a Hackney Carriage Licence, the vehicle will be issued with a date to attend the compliance test.<br>
                Vehicle compliance test certificate is valid for 14 days.</p>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Hackney carriage disclosure and barring checks</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>If the applicant does not currently hold a taxi driver licence with SCC, then they must provide a basic Disclosure and Barring Service (DBS) certificate.<br><br>
                If a vehicle licence is in the name of a company or a partnership, all named directors and partners within the company will need to provide us with a Basic Disclosure from the DBS.<br><br>
                The cost for a basic DBS check is <strong>£21.50</strong>.</p>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Hackney carriage vehicle insurance</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>This is a valid insurance certificate or cover note that tells applicant or a licensed driver, are insured to drive the vehicle and the purposes to carry passengers for hire and reward.<br><br>
                A copy of the insurance certificate must be provided when making application. Service will check the insurance every month to make sure hackney carriage is insured.</p>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Right to work in the UK for hackney carriage vehicles</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>Need to see original right to work documents in person and take copies of them.</p>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Right to work documents that are accept</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <ul>
                    <li>British passport.</li>
                    <li>Irish passport.</li>
                    <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
                    <li>Oassport from immigration control.</li>
                    <li>Immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name.</li>
                    <li>UK birth certificate, together with an official document giving your permanent NI number and name.</li>
                    <li>Channel Islands, Isle of Man or Ireland birth certificate, presented with an official document giving your permanent NI number and name.</li>
                    <li>Certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name.</li>
                </ul>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>If the applicant is under immigration controls</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <ul>
                    <li>Current passport.</li>
                    <li>Socument from Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
                    <li>Current immigration status document containing a photograph issued by the Home Office.</li>
                </ul>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>If the right to work in the UK is a time-limited period</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <ul>
                    <li>Document or certificate of application (non-digital) issued by the Home Office.</li>
                    <li>Document from the Bailiwick of Jersey, Bailiwick of Guernsey or the Isle of Man.</li>
                    <li>Application Registration Card issued by the Home Office that says you can take employment.</li>
                    <li>Positive Verification Notice issued by the Home Office Employer Checking Service.</li>
                </ul>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Apply for a new hackney carriage vehicle licence</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>Web form<br>
                Paper application</p>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Cost</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>Renewing a hackney carriage hire vehicle licence costs <strong>£212</strong>.<br>
                Must pay this online when complete the application form.</p>
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Information needed</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
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
            </div>
        </details>

        <details class="accordion">
            <summary class="accordion-header">
                <h3>Collecting the licence</h3>
                <div class="accordion-icon"></div>
            </summary>
            <div class="accordion-content">
                <p>Service will contact the applicant by email to confirm that they have issued hackney carriage licence and arrange a time for the applicant to collect licence from the reception at depot.
                Arrange a time for pick by either by, email <a href="mailto:taxilicensing@sheffield.gov.uk">taxilicensing@sheffield.gov.uk</a> or telephone <a href="#" class="telephoneNumber" onclick="copyToClipboard('0114 2734264')">0114 2734264</a>.</p>
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
      categories: ["Your City Council"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

  const renewPriviateHire = new ContentBusiness(
    "renewPriviateHire",
    "Renew a Private Hire Vehicle Licence",
    "Renew a Private Hire Vehicle Licence",
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

const renewPrivateOperator = new ContentBusiness(
    "renewPrivateOperator",
    "Renew Private Hire Vehicle Operators Licence",
    "Renew Private Hire Vehicle Operators Licence",
    `
        <details class="accordion">
        <summary class="accordion-header">
            <h3>About private hire operator licences</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>You will need to apply for a private hire operator licence to run a private hire business in Sheffield. This enables you to advertise and accept bookings for private hire work.</p>
            <p>Although you may not drive passengers, if you own the business, you will still have to deal with the public. This includes face-to-face, email, or telephone conversations.</p>
            <p>It is important that you only operate licensed vehicles that are driven by licensed drivers. The driver, vehicle, and operator must all be licensed by us.</p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Applying for a licence</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>Find out how to apply for a private hire operator licence:</p>
            <p><a href="https://www.sheffield.gov.uk/taxi-licensing/private-hire-operator/new-private-hire-operator-licence" target="_blank">Apply for a new private hire operator licence</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Renewing a licence</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>Everything you need to know about renewing your private hire operator licence:</p>
            <p><a href="https://www.sheffield.gov.uk/taxi-licensing/private-hire-operator/renew-private-hire-operator-licence" target="_blank">Renew a private hire operator licence</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Change of address</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>Tell us if you're changing your operating address:</p>
            <p><a href="https://www.sheffield.gov.uk/taxi-licensing/private-hire-operator/change-your-operating-address" target="_blank">Change your operating address</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>How to apply</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>When you renew a private hire operator licence, we will check whether you are ‘fit and proper’ to hold the licence. This means you are safe and suitable to be a private hire operator, pose no threat to public safety, and have no links to serious criminal activity.</p>
            <p>To help us understand this, we will need to know about the following information when you renew online.</p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>About DBS</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>You will need to tell us whether all applicants, directors, or partners have any criminal convictions.</p>
            <p><a href="#">Private hire operator disclosure and barring checks</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>About right to work</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>We will need to know that you are legally allowed to work in the UK.</p>
            <p><a href="#">Right to work in the UK for taxi operators</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>About tax checks</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>You will need to show us that you have a tax check code.</p>
            <p><a href="#">Private hire operator tax checks</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>About insurance</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>Find out about the insurance you will need as a private hire operator.</p>
            <p><a href="#">Private hire operator insurance</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>About data protection</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>Understand data protection and registering with the Information Commissioner’s Office (ICO).</p>
            <p><a href="#">Registering with the ICO</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Renew your licence</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>Use this form to renew your private hire operator licence.</p>
            <p><a href="#">Renew a private hire operator licence</a></p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Private hire operator disclosure and barring DBS checks</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>You will need to send us a basic Disclosure and Barring Service (DBS) certificate every year. We will look at any and all convictions contained within the DBS check. These include:</p>
            <ul>
                <li>Crimes resulting in death</li>
                <li>Exploitation</li>
                <li>Offences involving violence</li>
                <li>Possession of a weapon</li>
                <li>Sex and indecency offences</li>
                <li>Dishonesty</li>
                <li>Drugs</li>
                <li>Discrimination</li>
                <li>Any offence referenced in hackney carriage and private hire legislation</li>
            </ul>
            <p>If you are a company or partnership applying for a licence, all named directors and partners within the company will need to supply a basic DBS certificate every year.</p>
            <p>If you have one or more convictions recorded for any of the above offences, your licence may be referred to our Licensing Sub-Committee. They will then review any convictions to decide whether you can be granted a private hire operator licence.</p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>How to apply (DBS cost)</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>The cost for a basic DBS check is £21.50. It is available for people working in England and Wales.</p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Living overseas</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>If any director within the company or person within the partnership has lived outside of the UK for a period of more than three consecutive months, they will be required to supply a Certificate of Good Character.</p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Right to work in the UK for taxi operators</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>You will need to provide evidence that you are legally allowed to work in the UK if you are:</p>
            <ul>
                <li>Applying to become a licensed driver</li>
                <li>Applying to become an operator</li>
                <li>A hackney carriage or private hire vehicle licence holder</li>
            </ul>
            <p>To prove this, we will need to see your original right to work documents in person and take copies. This can be provided when you make your in-person DBS application. Once we have seen you in person, we will not need to see you again unless you have right to work restrictions.</p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Documents we accept</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <ul>
                <li>British passport</li>
                <li>Irish passport</li>
                <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey, or the Isle of Man</li>
                <li>Passport from immigration control</li>
                <li>Immigration status document issued by the Home Office, presented with an official document giving your permanent National Insurance (NI) number and your name</li>
                <li>UK birth certificate, together with an official document giving your permanent NI number and name</li>
                <li>Channel Islands, Isle of Man, or Ireland birth certificate, presented with an official document giving your permanent NI number and name</li>
                <li>Certificate of naturalisation as a British citizen, presented with an official document giving your permanent NI number and your name</li>
            </ul>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Under immigration controls</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>If you are under immigration controls, we will only issue a licence for the period you are entitled to work in the UK. We will need to see one of the following documents:</p>
            <ul>
                <li>Current passport</li>
                <li>Document from Bailiwick of Jersey, Bailiwick of Guernsey, or the Isle of Man</li>
                <li>Current immigration status document containing a photograph issued by the Home Office</li>
            </ul>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Right to work is time-limited</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <ul>
                <li>Document or certificate of application (non-digital) issued by the Home Office</li>
                <li>Document from the Bailiwick of Jersey, Bailiwick of Guernsey, or the Isle of Man</li>
                <li>Application Registration Card issued by the Home Office that says you can take employment</li>
                <li>Positive Verification Notice issued by the Home Office Employer Checking Service</li>
            </ul>
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
      categories: ["Your City Council"],
    },
    { date: "21/11/2025", name: "Joseph Coupland"} 
  );

const renewVechicleLicence = new ContentBusiness(
    "renewVechicleLicence",
    "Renewing a Hackney Carriage Vehicle Licence",
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

const renewPriviateLicence = new ContentBusiness(
    "renewPriviateLicence",
    "Renewing a Private Hire Vehicle Licence",
    "Renewing a private hire vehicle licence",
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

const surrenderLicence = new ContentBusiness(
    "surrenderLicence",
    "Surrender a Vehicle Licence",
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
    "Transfer a Vehicle Licence",
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

const vechicleInspections = new ContentBusiness(
    "vechicleInspections",
    "Vehicle Inspections and Testing",
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
    vechicleCustomerCharter,
    transferLicence,
    surrenderLicence,
    renewPriviateLicence,
    renewVechicleLicence,
    medicalNeeds,
    applyTaxiDriver,
    applyPrivateLicence,
    applyPrivateOperator,
    renewPrivateOperator
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


  
