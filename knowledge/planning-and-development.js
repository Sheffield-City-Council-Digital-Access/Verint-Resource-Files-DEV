class CorePaD {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServicePaD extends CorePaD {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuPaD extends CorePaD {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentPaD extends CorePaD {
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

class FormPaD extends CorePaD {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

//#region Building Control


const giveNoticeToDemolishABuilding = new ContentPaD(
  "giveNoticeToDemolishABuilding",
  "Give Notice to Demolish a Building",
  "Guidance for customers on giving notice to demolish a building, including requirements, process, and Building Control involvement.",
  `  
    <p>
      Customers planning to demolish a buildings over 50 cubic metres in Sheffield must inform the council before any work begins. This is a legal requirement for most demolition work and is managed through Building Control.
    </p>
    <p>
      The notice allows the council to assess the proposal, provide guidance on safety requirements, and coordinate with relevant parties where needed.
    </p>
 
  <h3>What the Customer Needs to Do</h3>
    <p>Customers intending to carry out demolition work must:</p>
      <ul>
        <li>Complete a <strong>“Notice of Intention to Demolish a Building” form</strong></li>
        <li><strong>Submit</strong> the completed form to Building Control</li>
        <li>Provide a <strong>site location plan</strong></li>
      </ul>
    <p>
      The form can be returned by email, post or in person.
    </p>
    <p>
      For full details and access to the form, see:
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/demolish-building" target="_blank" rel="noopener noreferrer">Apply to demolish a building | Sheffield City Council</a>
    </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20to%20demolish%20a%20building\`
            "
        >
            Send link to review further information
        </button>
 

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Happens Next</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Once the notice has been submitted the council will issue a <strong>Counter Notice (DEM 2 form)</strong>. 
        This sets out conditions to help manage <strong>health and safety requirements</strong> during demolition.
      </p>
      <p>Building Control may:</p>
        <ul>
          <li>Carry out inspections where necessary</li>
          <li>Continue inspections during and after demolition if required</li>
          <li>Consult and coordinate with relevant organisations as appropriate</li>
        </ul>
    
      <p>Building Control will also confirm if the building is:</p>
        <ul>
          <li>Within a <strong>Conservation Area</strong></li>
          <li>A <strong>Listed Building</strong></li>
          <li>Affecting a <strong>Listed Building</strong></li>
        </ul>
    
      <p><strong>Inspections</strong> may take place:</p>
        <ul>
          <li>Before demolition (if required)</li>
          <li>During demolition</li>
          <li>After demolition</li>
        </ul>
      <p>
        All inspections are carried out in line with current Building Control policy and procedures.
      </p>
      <p>
        Building Control can also provide a <strong>Construction Design Management Principal Designer service</strong> for further assistance with demolition projects.
      </p>
    </div>
  </details>
 
  <h3>Key Points for Call Centre Staff</h3>
    <ul>
      <li>Customers <strong>must notify the council before demolition begins</strong></li>
      <li>A <strong>form</strong> and <strong>site location plan</strong> must be submitted</li>
      <li>The council will issue a <strong>Counter Notice with conditions</strong></li>
      <li>Additional checks may apply for <strong>listed buildings or conservation areas</strong></li>
      <li>Inspections may be carried out at different stages of the work</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "demolition",
      "demolish",
      "building",
      "notice",
      "building control",
      "form",
      "DEM 2",
      "inspection",
      "inspections",
      "notify",
      "demoliton",
      "demoltion",
      "demolishin"
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "09/07/2026", name: "Liz Taster" }
);
 



const applyForABuildingNotice = new ContentPaD(
  "applyForABuildingNotice",
  "Apply for a Building Notice",
  "Details of how to Apply for a Building Notice for minor domestic building works, including eligibility and process details",
  `
    <p>
      A Building Notice is a type of building control application used for <strong>minor works to domestic properties (homes)</strong>. 
      It allows customers to notify the council of planned building work <strong>without submitting detailed plans for formal approval before work starts</strong>.
    </p>
    <p>
      The <strong>property owner and person carrying out the work are responsible</strong> for ensuring the work meets building regulations.
    </p>
    <p>
      Customers can apply or find more information here: 
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/building-notice" target="_blank" rel="noopener noreferrer">
      Building Notice Application | Sheffield City Council</a>
    </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Building%20Notice%20Application\`
            "
        >
            Send link to review further information
        </button>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Eligibility and Suitability</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>A Building Notice is suitable for:</p>
        <ul>
          <li><strong>Small or straightforward domestic projects</strong></li>
          <li>Work where <strong>plans do not need to be formally approved before starting</strong></li>
        </ul>
      <p>It is <strong>not suitable</strong> for:</p>
        <ul>
          <li>Work on commercial buildings</li>
          <li>Properties that are not single-family dwellings</li>
          <li>Work within 3 metres of a public sewer</li>
          <li>Buildings fronting onto a private road</li>
          <li>Buildings subject to fire safety legislation (The Regulatory Reform (Fire Safety) Order 2005)</li>
        </ul>
      <p>
        If the applicant <strong>cannot ensure compliance</strong> with building regulations, they should use a <strong>Full Plans</strong> application instead.
      </p>
      <br>

      <p><strong>Examples</strong> of work that may be suitable include:</p>
        <ul>
          <li>Removing a load-bearing wall (with appropriate support)</li>
          <li>Installing or altering heating appliances and flues</li>
          <li>Extensions to an existing dwelling</li>
          <li>Bathroom or shower installations where a structural alterations are undertaken or creating a new drainage connection</li>
          <li>Replacement windows (if not using a FENSA-registered installer)</li>
          <li>Domenstic re-roof  over 50% of the roof</li>
        </ul>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Apply</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Customers can apply in two ways:</p>
        <ul>
          <li><strong>Online via Planning Portal</strong> - The council encourages use of the Planning Portal as it is quick and fully digital.</li>
          <li><strong>Directly to Sheffield City Council</strong> - Available for customers unable to use the Planning Portal.</li>
        </ul>
      <p>
        Once the application is submitted the council will send a <strong>payment link</strong> for fees.
      </p>
      <p>
        The <strong>completion inspection</strong> is usually included in the application fee, unless additional inspections are needed.
      </p>
    </div>
  </details>

  
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Process Details</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Customers must give <strong>at least 2 working days’ notice</strong> before starting work.
      </p>
      <p>
        Building Control will carry out <strong>site inspections at key stages</strong> during construction.
      </p>
      <p>
        Unlike Full Plans applications, plans are not formally approved in advance and <strong>compliance is checked during the build through inspections.</strong>
      </p>
      <p>
        A <strong>completion certificate</strong> is issued once the council is satisfied that the work complies with building regulations.
      </p>
      <p>
        This certificate is an important legal record of compliance.
      </p>
    </div>
  </details>

  <h3>Key Points for Call Handling</h3>
    <ul>
      <li>Building Notices are for <strong>minor domestic work only</strong></li>
      <li><strong>No upfront plan approval</strong> — inspections happen during construction</li>
      <li>Customers must <strong>notify before starting work and at key stages</strong></li>
      <li>Customers are <strong>responsible for compliance</strong></li>
      <li>Not suitable for <strong>complex, commercial, or higher-risk work</strong></li>
    </ul>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Application",
    keywords: [
      "building",
      "notice",
      "notices",
      "build",
      "construction",
      "building",
      "planning portal",
      "minor works",
      "home improvements",
      "extensions",
      "load bearing wall",
      "regulations",
      "completion",
      "certificate",
      "application",
      "bulding",
      "buildng",
      "bilding",
      "notise",
      "bild",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "10/07/2026", name: "Liz Taster" }
);


const fullPlansBuildingApplication = new ContentPaD(
  "fullPlansBuildingApplication",
  "Full Plans Building Application",
  "Information about Full Plans Building Applications - including when they are needed and how to apply.",
  `
    <p>
      A Full Plans Building Application is used to have detailed building proposals checked and approved before construction work begins. 
      It ensures that plans comply with relevant Building Regulations and helps reduce the risk of issues, delays, or costly changes during construction.
    </p>
    <p>
      This type of application is commonly submitted by an architect or principal designer on behalf of the customer.
    </p>
    <p>
      For more information can be found here: 
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/full-plans" target="_blank" rel="noopener noreferrer">
      Full Plans Application – Sheffield City Council</a>
    </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Full%20Plans%20Application\`
            "
        >
            Send link to review further information
        </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>When to Use a Full Plans Application</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Customers should choose a Full Plans Application when they want their building plans formally checked by a Registered Building Inspector (RBI) before starting work.
      </p>
      <p>It can be used for a wide range of building work, including:</p>
        <ul>
          <li>Erecting a new building</li>
          <li>Extending an existing building</li>
          <li>Structural alterations</li>
          <li>Loft conversions</li>
          <li>Changing the use of a building</li>
          <li>Installing services or fittings (e.g. central heating)</li>
          <li>Building larger conservatories</li>
        </ul>
      <p>
        This route is particularly useful where certainty and compliance are important before work starts.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>What the Customer Needs to Provide</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        To submit a Full Plans Application, customers must provide detailed information about the proposed work. 
        This includes:
      </p>
        <ul>
          <li>Completed Full Plans application form</li>
          <li>Block plan (typically at 1:1250 scale) showing the site and boundaries</li>
          <li>Existing plans</li>
          <li>Proposed plans</li>
          <li>Construction specifications (may be included within plans)</li>
          <li>Structural calculations</li>
          <li>Drainage details or plans showing any changes or building over drains</li>
        </ul>
      <p>
        <em>Please note: Incomplete submissions may delay the validation process.</em>
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Apply</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Customers can submit a Full Plans Application in two ways:</p>
        <ul>
          <li><strong>Online via the Planning Portal</strong> - The council encourages use of the Planning Portal as it is quick and fully digital.</li>
          <li><strong>Directly to Sheffield City Council</strong> - Available for customers unable to use the Planning Portal</li>
        </ul>
      <p>
        <em>Please note: Any service charge added by the Planning Portal is deducted so the total cost remains the same</em>
      </p>
    </div>
  </details>


<details class="accordion">
    <summary class="accordion-header">
      <h3>What Happens After Submission</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The application is reviewed by a Registered Building Inspector (RBI).
      </p>
      <p>The RBI will either:</p>
        <ul>
          <li><strong>Approve the plans</strong>, or</li>
          <li><strong>Request amendments</strong> if needed to meet regulations</li>
        </ul>
      <p>
        If information is missing, the customer will be contacted before the application can be validated.
      </p>
      <p>
        Once validated, an acknowledgement is sent to confirm the application has been accepted.
      </p>
    </div>
  </details>

  <h3>Key Points for Call Centre Staff</h3>
    <ul>
      <li>A Full Plans Application is the <strong>most thorough building control route</strong></li>
      <li>It involves submitting <strong>detailed plans</strong> for approval <strong>before starting work</strong></li>
      <li>It is recommended where customers want certainty and compliance upfront</li>
      <li>This type of application is commonly submitted by an architect or principal designer on behalf of the customer.</li>
      <li>Customers can apply online via the Planning Portal or directly with the council</li>
      <li>Missing information is a common cause of delays — <em>encourage customers to include all required information when submitting applications</em></li>
    </ul>
    
    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Application",
    keywords: [
      "full plans building application",
      "building control application",
      "full plans application",
      "full plans",
      "building regulations",
      "building",
      "build",
      "construction approval",
      "apply building plans",
      "construction",
      "planning portal",
      "home improvements",
      "loft conversions",
      "structural alterations",
      "block plan",
      "drainage plans",
      "extensions",
      "compliance",
      "regulations",
      "completion",
      "certificate",
      "application",
      "bulding",
      "buildng",
      "bilding",
      "notise",
      "bild",
      "fullplans",
      "full plan",
      "planing portal",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "10/07/2026", name: "Liz Taster" }
);

const applyForARegularisationCertificate = new ContentPaD(
  "applyForARegularisationCertificate",
  "Apply for a Regularisation Certificate",
  "Information about how to apply for retrospective approval for building work completed without Building Regulations approval.",
  `
  <p>
    A <strong>Regularisation Certificate</strong> is used to gain <strong>retrospective approval</strong> for building work that was completed <strong>without Building Regulations approval at the time</strong>.
  </p>
  <p> 
    This applies to <strong>unauthorised building work</strong> carried out on, or after, <strong>11 November 1985</strong>.
  </p>
  <p> 
    It is not an alternative to applying for approval before starting work, but a way to assess and potentially certify work that has already been completed.
  </p>
  <p>
    Further information, including starting an application, can be found here:  
    <a href="https://www.sheffield.gov.uk/planning-development/building-control/regularisation" target="_blank" rel="noopener noreferrer">
    Regularisation Application | Sheffield City Council</a>
  </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Regularisation%20Application\`
            "
        >
            Send link to review further information
        </button>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>When is Regularisation Needed?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Residents may need to apply for a Regularisation Certificate if:</p>
        <ul>
          <li>Building work has already been carried out without Building Control approval</li>
          <li>There is no completion certificate for work on a property</li>
          <li>They need to demonstrate that past work complies with Building Regulations</li>
        </ul>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Eligibility Criteria</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The work must have been completed <strong>on, or after, 11 November 1985</strong>
      </p>
      <p>
        The work must be capable of meeting the Building Regulations that applied <strong>at the time it was carried out</strong>.
      </p>
      <p>
        The applicant must be willing to carry out <strong>additional or remedial work if required</strong> to achieve compliance.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>What the Customer Needs to Provide</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        To submit an application, the customer must provide sufficient information to demonstrate compliance. 
        This may include:
      </p>
        <ul>
          <li>A completed regularisation application form</li>
          <li>Plans showing the layout before the work started</li>
          <li>Plans showing the layout as the building currently stands</li>
          <li>Details of any further work required to achieve compliance (if needed)</li>
          <li>Construction details and supporting evidence showing compliance</li>
          <li>Additional supporting information</li>
        </ul>
      <p>
        <em>Please note: Incomplete information may delay the application.</em>
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Apply</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Residents can apply using one of the following methods:</p>
        <ul>
          <li><strong>Online via the Planning Portal</strong> - The council encourages use of the Planning Portal as it is quick and fully digital.</li>
          <li><strong>Directly to Sheffield City Council</strong> - Available for customers unable to use the Planning Portal.</li>
        </ul>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Fees and Payment</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Fees depend on the type and scale of the work.
      </p>
      <p>
        After submitting an application, the resident will be sent a <strong>payment link</strong> to complete payment online
      </p>
    </div>
  </details>



  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Happens After Applying?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <ol>
        <li><strong>Assessment of Information</strong> - Building Control will review the information submitted with the application. 
          <em>More detailed applications are processed more easily.</em></li>
        <li><strong>Inspection and Investigation</strong> - A site visit may be required. 
          In some circumstances the resident may need to expose parts of the work for inspection, testing, or sampling.</li>
        <li><strong>Remedial Work</strong> (if required) - Any work that does not meet regulations must be corrected.</li>
        <li><strong>Decision - </strong>A Regularisation Certificate will only be issued if the work complies with the relevant regulations.</li>
      </ol>
    </div>
  </details>



<h3>Key Points for Call Centre Staff</h3>
  <ul>
    <li>Building Control <strong>cannot advise how to make the work compliant</strong> – this responsibility lies with the applicant</li>
    <li>Residents may need to appoint a professional (such as an architect or surveyor) to support their application</li>
    <li>Regularisation may involve <strong>additional work, inspections, or opening up completed structures</strong></li>
    <li>Work completed <strong>before</strong> 11 November 1985 <strong>cannot be regularised</strong></li>
    <li>If work has <strong>not yet started, or is ongoing</strong>, this is not the correct process. Customers should instead be directed 
      to information about a <strong>Building Notice Application</strong> or <strong>Full Plans Application</strong>, depending on the scale of the work.</li>
  </ul>

`,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Application",
    keywords: [
      "regularisation",
      "certificate",
      "regularization",
      "application",
      "retrospective",
      "approval",
      "building",
      "regulations",
      "control",
      "unauthorised",
      "work",
      "unauthorized",
      "planning portal",
      "cert",
      "regulatisation",
      "regularsation",
      "regulrisation",
      "certificat",
      "certifcate",
      "certficate",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "10/07/2026", name: "Liz Taster" }
);

const requestACompletionCertificate = new ContentPaD(
  "requestACompletionCertificate",
  "Request a Completion Certificate",
  "Guidance on how to request a completion certificate for building work.",
  `
    <p>
      A <strong>completion certificate</strong> is issued at the end of a building project to confirm that the <strong>work complies with Building Regulations</strong>. 
    </p>
    <p>
      It is provided by Building Control after all required checks and inspections are successfully completed.
    </p>
    <p>
      This document is <strong>important and should be kept safe</strong>, as it may be required when selling a property or requested by mortgage lenders or insurers.
    </p>
    <p>
      Further information and the application form can be found here: 
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/completion"target="_blank" rel="noopener noreferrer">
      Completion certificates | Sheffield City Council</a>
    </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Completion%20certificates\`
            "
        >
            Send link to review further information
        </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Apply</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        To request a completion certificate, a <strong>Regulation 16 (4) Notice of Completion form</strong> must be completed and submitted to Building Control.
      </p>
      <p>
        This form acts as a <strong>declaration that the building work is complete and complies with regulations</strong>.
      </p>
      <p>The form must be completed by all relevant duty holders:</p>
        <ul>
          <li>The client</li>
          <li>The principal designer</li>
          <li>The principal contractor</li>
        </ul>
      <p>
        The Notice of Completion form is usually issued as part of the original application acknowledgement, but it can also be downloaded.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>How the Request is Processed</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>The completed Notice of Completion form is submitted to Building Control.</li>
        <li>The council reviews the form to ensure all required information is provided.</li>
        <li>A <strong>completion inspection</strong> is arranged.</li>
        <li>If the inspection is satisfactory, or once any outstanding issues are resolved, a completion certificate is issued.</li>
      </ul>
      <p>
        This marks the formal completion of the Building Control process.
      </p>
    </div>
  </details>

  
  <h3>Key points for Call Handlers</h3>
  <ul>
    <li>The <strong>Notice of Completion form</strong> must be completed by all relevant parties and submitted to Building Control.</li>
    <li>This form acts as a <strong>declaration that the building work is complete and complies with regulations</strong>.</li>
    <li>A <strong>completion inspection</strong> must take place before a certificate can be issued.</li>
    <li>The certificate confirms the work <strong>meets legal Building Regulation standards</strong>.</li>
    <li>Once received, the Completion Certificate document should be kept safe.</li>
  </ul>
  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Request",
    keywords: [
      "completion",
      "certificate",
      "certificates",
      "cert",
      "inspection",
      "building",
      "control",
      "regulations",
      "notice of completion",
      "request",
      "apply",
      "construction",
      "building project",
      "complition",
      "comletion",
      "completion cert",
      "completetion"
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "10/07/2026", name: "Liz Taster" }
);


const reportingDangerousStructures = new ContentPaD(
  "reportingDangerousStructures",
  "Reporting Dangerous Structures",
  "Information on how residents can report a dangerous structure if a building or structure appears to pose a risk to people, property, or the surrounding area.",
  `
  <section class="alert-panel" role="alert" aria-label="Alert panel">
    <h3>Emergency Situations</h3>
      <p>
        If there is an <strong>immediate danger to life</strong> or a structure is at risk of imminent collapse advise the customer to <strong>call 999 immediately</strong>.
      </p>
  </section>
  
  <p>
    Residents can report a dangerous structure to Sheffield City Council if a building or structure appears to pose a <strong>risk to people, property, or the surrounding area</strong>.
  </p>
  <p>
    A dangerous structure may be publicly or privately owned and includes anything that could become unsafe or unstable.
  </p>
  <p>
    Full details and a link to the report form can be found here: 
    <a href="https://www.sheffield.gov.uk/planning-development/building-regulations/report-dangerous-structure" target="_blank" rel="noopener noreferrer">
    Report a dangerous structure | Sheffield City Council</a>
  </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Reporting%20a%20dangerous%20structure\`
            "
        >
            Send link to review further information
        </button>


<details class="accordion">
    <summary class="accordion-header">
      <h3>How to Report</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Reports are submitted online via the council’s website.
      </p>
      <p>
        Reporters should be encouraged to include photographs wherever possible.
      </p>
      <p>
        The enquiry will then be directed to the appropriate team for investigation.
      </p>
      <p>
        Once the report is received, the council will assess the report and an inspection may be carried out.
        <br>Appropriate action will be taken to remove or reduce the danger
      </p>
    </div>
  </details>
  

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What <strong>Can</strong> be Reported</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A report should be made when a structure could present a hazard to the public or nearby property. 
        <br>Examples include:
      </p>
        <ul>
          <li>Damaged or leaning walls, particularly where the public can access them</li>
          <li>Walls over 1.5 metres high or retaining walls above 1.5 metres</li>
          <li>Loose slates, tiles, gutters, or building materials</li>
          <li>Broken glass or window frames</li>
          <li>Damaged or unstable chimneys or chimney stacks</li>
          <li>Falling debris from a building or structure</li>
          <li>Buildings showing signs of possible collapse</li>
          <li>Fire-damaged buildings</li>
          <li>Vacant or accessible buildings posing a danger</li>
          <li>Weakened or undermined structures</li>
          <li>Trees posing a specific or imminent danger</li>
        </ul>
    </div>
  </details>


<details class="accordion">
    <summary class="accordion-header">
      <h3>What <strong>Cannot</strong> be Reported</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Some issues are not handled through the dangerous structures service. These include:</p>
        <ul>
          <li>Timber fences or domestic sheds</li>
          <li>Debris contained within a private enclosed area</li>
          <li>Walls in private rear gardens under 1.5 metres high</li>
          <li>Hanging cables (<em>report to the relevant utility provider</em>)</li>
          <li>Highway-related hazards such as trip hazards or inspection covers (<em>report to Amey</em>)</li>
          <li>Boundary disputes or encroachments</li>
          <li>Unsafe working practices (<em>report to the Health and Safety Executive</em>)</li>
          <li>General tree issues such as overgrowth or roots causing damage</li>
          <li>Bus shelters</li>
        </ul>
    </div>
  </details>

`,
  { buttonLabel: "Report a Dangerous Structure", formName: "dangerous_structures" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Report",
    keywords: [
      "dangerous",
      "structure",
      "report",
      "structures",
      "unsafe",
      "building",
      "hazard",
      "collapse",
      "damage",
      "damaged",
      "falling",
      "debris",
      "unsafe",
      "issue",
      "dangeruos",
      "dangrous",
      "structre",
      "stucture",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "10/07/2026", name: "Liz Taster" }
);


const bookingBuildingSiteInspections = new ContentPaD(
  "bookingBuildingSiteInspections",
  "Booking Building Site Inspections",
  "Information about how residents (or their builders) can book a building site inspections as part of an existing building control application.",
  `
  <p>
    Customers, builders, architects and agents can book a building site inspection as part of an existing building control application with Sheffield City Council. 
    The inspection service is included within the application and ensures work complies with building regulations.
  </p>
  <p>
    Inspections are carried out by a qualified Registered Building Inspector (RBI) and are independent of the builder.
  </p>
  <p>
    Further information can be found here: <a href="https://www.sheffield.gov.uk/planning-development/building-control/site-inspection" target="_blank" rel="noopener noreferrer">
    Book a building site inspection | Sheffield City Council</a>
  </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Book%20a%20building%20site%20inspection\`
            "
        >
            Send link to review further information
        </button>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>When a Site Inspection is Needed</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Inspections take place at key stages of a building project.
      </p>
      <p>
        The required stages will be outlined at the start of the project.
      </p>
      <p>
        Additional inspections may be requested depending on the project.
      </p>

      <h4>Typical stages that may be inspected</h4>
        <ul>
          <li>Foundations</li>
          <li>Ground and floors</li>
          <li>Damp proofing</li>
          <li>Roof structure</li>
          <li>Drainage</li>
          <li>Structural beams and openings</li>
          <li>Fireproofing</li>
          <li>Thermal insulation</li>
          <li>Compliance declarations</li>
          <li>Completion of the project</li>
        </ul>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before Booking</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Work must not start until the council has been notified.
      </p>
      <p>
        <strong>Notice of Commencement form</strong> is provided as part of the building control application and must be submitted <strong>before work begins.</strong>
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Book a Site Inspection</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Residents or builders can request a site inspection using the LABC Inspection Request app.
      </p>
      <p>
        The app is the quickest and easiest way to book. It is available to download for mobile devices.
      </p>
      <p>
        Links to download the LABC app can be found here: 
        <a href="https://www.sheffield.gov.uk/planning-development/building-control/site-inspection" target="_blank" rel="noopener noreferrer">
        Book a building site inspection | Sheffield City Council</a>
      </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Book%20a%20building%20site%20inspection\`
            "
        >
            Send link to review further information
        </button>

      <p>
        If the app cannot be used, customers can contact the Building Control team directly on 0114 2734168 <a href="tel:0114 2734168">0114 2734168</a> 
      </p>
      <p>
        <em>Please note: The same information required for the app will still be needed.</em>
      </p>
    </div>
  </details>
  

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Information Required to Book</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Customers must provide the following details when making a booking:</p>
        <ul>
          <li>Address and postcode of the works</li>
          <li>Building control application reference number</li>
          <li>Name and contact details of the person on site during the visit</li>
          <li>Type of inspection required</li>
          <li>Preferred inspection date</li>
        </ul>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Appointment Availability</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Customers can request a morning visit.
      </p>
      <p>
        Requested dates or times cannot always be guaranteed.
      </p>
      <p>
        If the requested date is not available, the team will contact the customer to rearrange.
      </p>
      <p>
         Site inspections must be booked a minimum of one day before the inspection is required. Same day inspection requests are not offered.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Completion Inspections</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A completion inspection is required at the end of a project. 
      </p>
      <p>
        A Notice of Completion will need to be completed and submitted prior to book the completion visit
      </p>
      <p>
        Please see the knowledge tile <strong>Request a Completion Certificate</strong> for further information.
      </p>
    </div>
  </details>


<h3>Key Points for Call Centre Staff</h3>
  <ul>
    <li>Site inspections are part of a building control application process.</li>
    <li><strong>Booking is mainly done via the LABC app.</strong></li>
    <li>Ensure customers have all required details before booking.</li>
    <li>Dates and times are not guaranteed and may be rescheduled.</li>
  </ul>`

,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Request",
    keywords: [
      "building",
      "site",
      "inspection",
      "booking",
      "book",
      "building control",
      "LABC app",
      "request",
      "construction",
      "completion",
      "building regs",
      "appointment",
      "site visit",
      "inspecion",
      "bulding",
      "inspetion",
      "bookng"
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "10/07/2026", name: "Liz Taster" }
);


const localLandCharges = new ContentPaD(
  "localLandCharges",
  "Local Land Charges",
  "Information and guidance for requesting Local Land Charges and Local Authority Searches.",
  `
    <p>
      Local Land Charges are <strong>restrictions</strong> or <strong>legal obligations</strong> placed on <strong>land or property</strong>. These are recorded by 
      the council and can affect how a property is used or whether there are financial liabilities attached to it.
    </p>
    <p>
      The Local Land Charges service provides official information to support property transactions such as 
      buying or selling land. The service has a statutory duty to supply accurate information when requested.
    </p>
    <p>
      More detailed information can be found here: 
      <a href="https://www.sheffield.gov.uk/your-city-council/legal-services/local-land-charges" target="_blank" rel="noopener noreferrer">
      Land and property searches | Sheffield City Council</a>
    </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Land%20and%20property%20searches\`
            "
        >
            Send link to review further information
        </button>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>When are Searches Needed?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Customers typically get in touch when they:</p>
        <ul>
          <li>Are buying or selling a property</li>
          <li>Need information for a conveyancing (legal property transfer) search</li>
          <li>Want to check if any restrictions or obligations apply to a property</li>
        </ul>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>What a Local Authority Search Includes</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A Local Authority Search is a <strong>compulsory part of the conveyancing process</strong>. It provides important information 
        about a property before a sale is completed.
      </p>
      <p>The search can include:</p>
        <ul>
          <li>Charges for services such as roads</li>
          <li>Restrictions such as Tree Preservation Orders</li>
          <li>Planning conditions or permissions</li>
          <li>Conservation area designations</li>
          <li>Listed building status</li>
          <li>Legal agreements affecting the land</li>
        </ul>
      <p>
        This information helps solicitors and buyers understand any risks, limitations, or obligations linked to the property.
      </p>
    </div>
  </details>

    
  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Request a Search</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Searches can be requested by email at <a href="mailto:landcharges@sheffield.gov.uk">landcharges@sheffield.gov.uk</a>, or by post.
      </p>
      <p>
        Searches can also be requested through third parties – for example, a conveyancing solicitor.
      </p>
      <p>
        Customers can also carry out their own enquiries using the CON29 questions. For guidance about how to do this, customers should contact the council at 
        <a href="mailto:foi@sheffield.gov.uk">foi@sheffield.gov.uk</a>.
      </p>
      <p>
        Fees vary depending on the type of search and any additional information requested.
      </p>
    </div>
  </details>


    <h3>Key Points for Call Centre Staff</h3>
    <ul>
      <li>Local Land Charges relate to <strong>legal restrictions or financial obligations on land or property</strong></li>
      <li>A <strong>Local Authority Search is required during property transactions</strong></li>
      <li>The search helps identify <strong>issues that could affect ownership or use of the property</strong></li>
      <li>Requests can be made through multiple channels, including the council and third parties</li>
      <li>Charges apply depending on the search type and level of detail required</li>
    </ul>

  `,
  { buttonLabel:"" , formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "local",
      "land",
      "charges",
      "charge",
      "local authority",
      "search",
      "property",
      "conveyancing",
      "property",
      "restrictions",
      "legal obligations",
      "land restrictions",
      "planning conditions",
      "liabilities",
      "landcharges",
      "chargs",
      "charjes",
      "conveyncing",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "15/07/2026", name: "Liz Taster" }
);

const workingWithAnRBCA = new ContentPaD(
  "workingWithAnRBCA",
  "Working with a Registered Building Control Approver",
  "Guidance on working with a Registered Building Control Approver (RBCA), including roles, responsibilities, initial notices, amendments, and reversion procedures.",
  `
    <p>
      Customers can choose to work with a Registered Building Control Approver. 
      They will act to ensure building projects comply with building regulations. 
      This is instead of the council ensuring compliance.
    </p>
    <p>
      <strong>RBCAs are in direct competition with the Council and should not be advertised to customers as an option</strong>.
    </p>
    <p>
      Where a customer hires an RBCA, there is still information that needs to be provided to the council. 
      This is normally done by the RBCA, not by the customer.
      Details of these scenarios can be found below.
    </p>

  
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Initial Notice</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The Initial Notice is an essential document in the building control process if working with an RBCA. 
        It serves two important functions:
      </p>
        <ul>
          <li>It <strong>notifies the council</strong> that building control for a project will be managed by a 
            Registered Building Control Approver rather than the Local Authority itself.</li>
          <li>It <strong>officially registers the project</strong> on the Local Authority’s system. 
            This ensures that future legal searches, such as those carried out by conveyancing solicitors during property transactions, 
            can access accurate and up-to-date information.</li>
        </ul>
      <p>
        The Initial Notice has a set format determined by current UK building control legislation and is normally submitted 
        by a customer's RBCA.
      </p>
    </div>
  </details>

  
<details class="accordion">
    <summary class="accordion-header">
      <h3>Cancellation or Amendment of Initial Notice</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If there are <strong>changes</strong> after an Initial Notice has been submitted, or the work is <strong>cancelled</strong>, 
        these need to be reported to the council in an <em>Amendment Notification.</em> 
        There is a set format for submitting this information that is determined by current UK building control legislation. 
        This is normally submitted by a customer's RBCA.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Apply for a Reversion</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A <strong>reversion notice</strong> is used when an RBCA can no longer manage a project. 
        This notice legally transfers responsibility for building control back over to the council.
      </p>
      <p>
        A reversion notice can be submitted by the RBCA, by the person carrying out the work, or by the Building Safety Regulator.
      </p>
    </div>
  </details>
    
    `
    ,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "Registered Building Control Approver",
      "RBCA",
      "initial",
      "notice",
      "notification",
      "amendment ",
      "reversion",
      "project registration",
      "initail",
      "intial",
      "reverion",
      "rversion",
      "revrsion",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "16/07/2026", name: "Liz Taster" }
);




const partnerAuthoritySchemeApplications = new ContentPaD(
  "partnerAuthoritySchemeApplications",
  "Partner Authority Scheme Applications",
  "Details of the LABC Partner Authority scheme.",
  `
  <p>
    The Local Authority Building Control (LABC) <strong>partner authority scheme</strong> is shared by all local authority building control 
    teams in England and Wales. 
  </p>

  <p>
    A company can choose to work with any local authority building control surveyor to undertake all pre-application and design 
    work, regardless of the project's geographical location.
  </p>

  <p>
    Architect companies interested in joining this scheme should review the details and complete the application to become a partner on the LABC website.
  <p/>

  <p>
    Full details can be found here: 
    <a href="https://www.labc.co.uk/about/how-labc-supports-your-authority/partner-authority-scheme-pas" target="_blank" rel="noopener noreferrer">
    Partner Authority Scheme | LABC</a>
  </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=LABC%20Partner%20Authority%20Scheme\`
            "
        >
            Send link to review further information
        </button>

    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "LABC",
      "PAS",
      "partner",
      "scheme",
      "local",
      "authority",
      "parner",
      "partnr",
      "prtner",
      "skeem",
      "sceme",
      "skeme",
      "authorty",
      "authrity",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "16/07/2026", name: "Liz Taster" }
);

const worksThatRequireABuildingControlApplication = new ContentPaD(
  "worksThatRequireABuildingControlApplication",
  "Works That Require a Building Control Application",
  "Information about building works that require a building control application, exempt structures, and further guidance.",
  `
  <p>
    Most proposed building works require a building control application before work begins. 
    Building control approval helps ensure that building work complies with current Building Regulations.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Types of Work That Require an Application</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Examples of works that normally require a building control application include:</p>
        <ul>
          <li>Extensions to a building</li>
          <li>Basement conversions</li>
          <li>Loft conversions</li>
          <li>Garage conversions</li>
          <li>New underground drainage connections</li>
          <li>Internal alterations</li>
          <li>Upgrading the external thermal envelope of a building</li>
          <li>Replacement roof coverings</li>
          <li>Construction of new dwellings</li>
          <li>Any material change of use to a building in accordance with Regulation 5 of the Building Regulations 2010</li>
          <li>Electrical work that is not covered by a relevant competent persons scheme</li>
          <li>Alterations to commercial, residential, institutional or public buildings that may materially affect:</li>
            <ul>
              <li>Structural safety</li>
              <li>Fire safety</li>
              <li>Access and use</li>
              <li>Toilet provisions</li>
            </ul>
        </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Exempt Structures</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Some types of work are exempt from the requirement to submit a building control application under the legislation. 
        These may include:
      </p>
        <ul>
          <li>Class 1: Buildings used for the storage and manufacture of explosives that are granted under the Explosive Regulations 2014</li>
          <li>Class 2: Buildings not normally frequented by people</li>
          <li>Class 3: Greenhouses and agricultural buildings</li>
          <li>Class 4: Temporary buildings</li>
          <li>Class 5: Ancillary buildings, such as those used on construction sites</li>
          <li>Class 6: Small detached buildings</li>
          <li>Class 7: Certain extensions</li>
        </ul>
    </div>
  </details>


<h3>Additional Information</h3>
  <p>
    Further information can be found at:
    <a href="https://www.sheffield.gov.uk/planning-development/building-control/works-require" target="_blank" rel="noopener noreferrer">
    Works that require a building control application | Sheffield City Council</a>.
  </p>
  <p>
    A link can be found at the bottom of the above page to The Building Regulations 2010. 
    These should be consulted for definitions and further details on exempt structures.
  </p>

    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="For further information send link"
      onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
              KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Works%20that%20require%20a%20building%20control%20application\`
      "
    >
      Send link to review further information
    </button>
`,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "building",
      "control",
      "application",
      "building",
      "regulations",
      "require",
      "required",
      "requiring",
      "work",
      "extensions",
      "extension",
      "approval",
      "buildng",
      "bulding",
      "aplication",
      "regualtions"
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  {
    date: "20/08/2026",
    name: "Liz Taster"
  }
);

const buildingControlExplained = new ContentPaD(
  "buildingControlExplained",
  "Building Control Explained",
  "Information explaining the purpose of Building Control, when approval may be needed, and links to related Building Control services and guidance.",
  `
  <p>
    Building Control helps make sure that building work meets the requirements of Building Regulations. 
    It applies to a wide range of construction, alteration and improvement works and is intended to ensure that buildings are safe, 
    accessible and compliant with current standards.
  </p>

<h3>What Building Control Does</h3>
  <p>
    Building Control oversees building work and checks that it complies with Building Regulations. 
    This includes reviewing applications, carrying out inspections during construction, and confirming compliance when work is completed.
  </p>

<h3>Why Building Control Is Important</h3>
  <p>
    Building Regulations are designed to ensure that buildings are constructed and altered safely. 
    Building Control provides checks throughout the construction process to help confirm that work meets the required standards.
  </p>

<h3>When You May Need Building Control</h3>
  <p>
    You may need Building Control approval before carrying out certain types of building work. Sheffield City Council provides guidance on:
  </p>
    <ul>
      <li>Making a building control application – see <strong>Apply for a Building Notice</strong> and <strong>Full Plans Building Application</strong> articles</li>
      <li>Understanding which works require an application – see <strong>Works That Require a Building Control Application</strong> and <strong>Apply for a Regularisation Certificate</strong> articles</li>
      <li>Booking site inspections – see <strong>Booking Building Site Inspections</strong> article</li>
      <li>Obtaining completion certification – see <strong>Request a Completion Certificate</strong> article</li>
      <li>Reporting unauthorised building works – see <strong>Report Unauthorised Building Works</strong> article</li>
      <li>Reporting dangerous structures – see <strong>Reporting Dangerous Structures</strong> article</li>
    </ul>

<h3>Further Information</h3>
  <p>
    For further explanation of building control, please direct customers to 
    <a href="https://www.sheffield.gov.uk/planning-development/building-control/building-control-explained" target="_blank" rel="noopener noreferrer">
    Building control explained | Sheffield City Council</a>.
  </p>

    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="For further information send link"
      onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
              KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Building%20Control%20Explained\`
      "
    >
      Send link to review further information
    </button>

  <p>
    Or direct customers to the main building control website: 
    <a href="https://www.sheffield.gov.uk/planning-development/building-control" target="_blank" rel="noopener noreferrer">
    Building Control | Sheffield City Council</a>.
  </p>

    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="For further information send link"
      onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
              KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Building%20Control\`
      "
    >
      Send link to review further information
    </button>
  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "Building",
      "control",
      "Regulations",
      "regulation",
      "construction",
      "alteration",
      "works",
      "application",
      "applications",
      "Notice",
      "compliance",
      "inspection",
      "inspections",
      "planning",
      "development",
      "approval",
      "buildng",
      "bulding",
      "controll",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  {
    date: "20/08/2026",
    name: "Liz Taster"
  }
);

const localActsSYMiscellaneousProvisions = new ContentPaD(
  "localActsSYMiscellaneousProvisions",
  "Local Acts: South Yorkshire Act, Miscellaneous Provisions Act",
  "Information about works overseen by Building Control and the Dangerous Structures team that may be controlled under other legislation.",
  `
  <p>
    Some work overseen by Building Control and the Dangerous Structures team falls outside the Building Regulations. 
    These works may instead be controlled under other legislation, including the South Yorkshire Act 1980 and Local Government (Miscellaneous Provisions) Act 1982.
  </p>
  <p>
    If you a customer thinks their project may be covered by these laws, our technical team can provide advice and guidance.
  </p>
`,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "Local Acts",
      "South Yorkshire Act",
      "Miscellaneous Provisions Act",
      "Building Control",
      "legislation",
      "construction",
      "building works",
      "misc provisions act",
      "Building",
      "Controls",
      "Control",
      "South Yorkshre Act",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  {
    date: "20/08/2026",
    name: "Liz Taster"
  }
);

const reportUnauthorisedBuildingWorks = new ContentPaD(
  "reportUnauthorisedBuildingWorks",
  "Report unauthorised building works",
  "Information about reporting unauthorised building works, dangerous structures, and retrospective approval through regularisation.",
  `
  <p>
    Any work carried out without the correct building control application is classed as unauthorised works.
  </p>

  <p>
    If a customer suspects unauthorised works are taking place they can contact us. If it is relevant to building control, we have a duty to investigate it where appropriate.
  </p>

<h3>Dangerous structures</h3>
  <p>
    If they think that the works are dangerous or present a danger to life, then they may be classed as a dangerous structure.
  </p>
  <p> 
    Please consult the knowledge tile <strong>Reporting Dangerous Structures</strong> for further information.
  <p>

<h3>Retrospective approval</h3>
  <p>
    Works which were unauthorised and have been completed will need to get retrospective approval, also known as regularisation.
  </p>
  <p> 
    Please consult the knowledge tile <strong>Apply for a Regularisation Certificate</strong> for further information.
  <p>
`,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "report",
      "unauthorised",
      "building",
      "works",
      "work",
      "unauthorized",
      "dangerous",
      "structures",
      "structure",
      "unsafe",
      "building",
      "retrospective",
      "approval",
      "regularisation",
      "regularization",
      "construction",
      "unauthrised",
      "bilding",
      "buildng",
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "20/08/2026", name: "Liz Taster" }
);


const buildingControl = new MenuPaD(
  "buildingControl",
  "Building Control",
  "Information regarding building control",
  [
    giveNoticeToDemolishABuilding,
    applyForABuildingNotice,
    fullPlansBuildingApplication,
    applyForARegularisationCertificate,
    requestACompletionCertificate,
    reportingDangerousStructures,
    bookingBuildingSiteInspections,
    localLandCharges,
    workingWithAnRBCA,
    partnerAuthoritySchemeApplications,
    worksThatRequireABuildingControlApplication,
    buildingControlExplained,
    localActsSYMiscellaneousProvisions,
    reportUnauthorisedBuildingWorks
  ]
);

//#endregion Building Control

//#region Planning Applications

const reportingAPlanningEnforcementIssue = new ContentPaD(
  "reportingAPlanningEnforcementIssue",
  "Reporting a Planning Enforcement Issue",
  "Information about reporting a planning enforcement issue, including what can and cannot be reported.",
  `
  <p>
    Residents can report a planning enforcement issue to the council if they believe development has taken place without planning permission 
    or is not in line with the permission granted.
  </p>
  <p>
    Planning enforcement allows the council to investigate potential breaches of planning control and decide if action is required.
  </p>
  <p>
    Further details about planning enforcement, including a link to the form to report an issue can be found here: 
    <a href="https://www.sheffield.gov.uk/planning-development/report-planning-enforcement-issue" target="_blank" rel="noopener noreferrer">
    Reporting a planning enforcement issue | Sheffield City Council</a>
  </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Reporting%20a%20planning%20enforcement%20issue\`
            "
        >
            Send link to review further information
        </button>


<details class="accordion">
    <summary class="accordion-header">
      <h3>How to Report an Issue</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <strong>Before reporting</strong>, residents are advised to check if the development already has planning permission before making a report.
      </p>
      <p>
        Reports can be submitted using the council’s online reporting form. This can be found at 
        <a href="https://www.sheffield.gov.uk/planning-development/report-planning-enforcement-issue" target="_blank" rel="noopener noreferrer">
        Reporting a planning enforcement issue | Sheffield City Council</a>
      </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Reporting%20a%20planning%20enforcement%20issue\`
            "
        >
            Send link to review further information
        </button>

      <p>Residents should report if they believe:</p>
        <ul>
          <li>Development has taken place without permission</li>
          <li>A development is not complying with its approved plans or conditions</li>
        </ul>

      <p>
        Residents can search to find out if a property has already been served with an enforcement notice or breach of condition notice here: 
        <a href="https://www.sheffield.gov.uk/planning-development/applications-advice/search-view-comment" target="_blank" rel="noopener noreferrer">
        Search, view and comment on planning applications | Sheffield City Council</a>
      </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Search%20view%20and%20comment%20on%20planning%20applications\`
            "
        >
            Send link to review further information
        </button>

    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Can Be Reported</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The council can investigate the following types of issues:</p>
        <ul>
          <li>Development carried out without planning permission</li>
          <li>Development that differs from approved planning permission</li>
          <li>Breaches of planning conditions</li>
          <li>Unauthorised advertisements</li>
          <li>Unauthorised works to a listed building</li>
          <li>Unauthorised works to protected trees</li>
          <li>Unauthorised works in conservation areas or protected areas (such as greenbelt)</li>
          <li>Unauthorised changes of use</li>
          <li>Untidy land</li>
        </ul>
    </div>
  </details>
  
  
<details class="accordion">
    <summary class="accordion-header">
      <h3>What Cannot Be Reported</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Some issues are not planning enforcement matters and cannot be investigated:</p>
        <ul>
          <li>Non-material planning considerations – loss of property value, damage to private property, loss of view;</li>
          <li>Private disputes or interests – boundary or land ownership disputes, internal alterations to houses (unless listed), security lights on houses, high hedges, business competition concerns;</li>
          <li>Issues covered by other legislation – noise complaints, improper use of highways, building safety or dangerous structures, blocked rights of way, health and safety or site security issues</li>
        </ul>
      <p>
        More detail on what can and cannot be investigated is available in the Local Enforcement Plan, available here: 
        <a href="https://www.sheffield.gov.uk/sites/default/files/2025-05/local-enforcement-plan-may-2025.pdf" target="_blank" rel="noopener noreferrer">
        Sheffield Local Enforcement Plan</a>
      </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Local%20Enforcement%20Plan\`
            "
        >
            Send link to review further information
        </button>

    </div>
  </details>



  <h3>Key Information for Call Centre Staff</h3>
    <p>When handling enquiries:</p>
      <ul>
        <li>Confirm whether the issue relates to a potential breach of planning control.</li>
        <li>Check the issue is within planning enforcement scope.</li>
        <li>Advise the resident to check if planning permission exists.</li>
        <li>Direct the resident to the online reporting form if appropriate.</li>
        <li>If the issue falls outside planning enforcement, signpost to the relevant service where applicable.</li>
      </ul>
    
    `,
  { buttonLabel: "Report a Planning Issue", formName: "report_planning_issue" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Report",
    keywords: [
      "planning",
      "enforcement",
      "report",
      "planning",
      "issue",
      "breach",
      "control",
      "unauthorised",
      "development",
      "works",
      "permission",
      "enforcement",
      "notice",
      "applications",
      "developement",
      "planing",
      "enforcment",
      "enforcemnt",
      "developement"
    ],
    categories: ["Planning and Development", "Planning"]
  },
  { date: "09/07/2026", name: "Liz Taster" }
);

const historicalPlanningRequests = new ContentPaD(
  "historicalPlanningRequests",
  "Historical Planning Application Requests",
  "Guidance on how customers can request and access planning history information, including service details, charges, requirements, and processes.",
  `
  <p>
    Customers may request information about the planning history of a property or site. 
    Multiple options are available depending on the type of search, the time period required, and the level of detail needed.
  </p>
  <p>
    For full details, refer customers to: 
    <a href="https://www.sheffield.gov.uk/planning-development/planning-history" target="_blank" rel="noopener noreferrer">
    Find a property's planning history | Sheffield City Council</a>
  </p>

        <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Find%20property%20planning%20history\`
            "
        >
            Send link to review further information
        </button>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Planning History Requests</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <h4>Service Details</h4>
        <ul>
          <li>The service provides planning histories and enforcement case information.</li>
          <li>Standard coverage is from <strong>2001 to the present date</strong>.</li>
          <li>Requests can be extended back to <strong>1975</strong> for an additional charge.</li>
        </ul>

      <h4>Charges</h4>
        <ul>
          <li>£25 for a <strong>domestic, straightforward postal address search</strong> (including VAT).</li>
          <li>£50 for a <strong>commercial search</strong> (including VAT).</li>
          <li>More complex searches may incur <strong>higher charges by arrangement</strong>.</li>
        </ul>

      <h4>Requirements to Submit a Request</h4>
        <ul>
          <li>A covering letter</li>
          <li>A <strong>1:1250 location plan</strong></li>
          <li>Payment for the relevant fee</li>
        </ul>

      <h4>Processing Time</h4>
        <p>
          Searches are typically completed within <strong>5 working days after payment is received</strong>.
        </p>
    </div>
  </details>  


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Complex or Specialist Searches</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Complex searches attract additional charges and are handled by the <strong>Records and Enquiries Team</strong>.
      </p>
      <p>
        Customers should be directed to this team for detailed or unusual requests.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Viewing Historical Planning Files</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Historical applications from <strong>1998 to 2003</strong> are available on a public computer at First Point, Howden House.
      </p>

      <h4>In-Person Viewing</h4>
        <p>
          In-person viewing is available for <strong>straightforward numbered properties (1975–2005)</strong>.
        </p>
        <p>Customers must:</p>
          <ul>
            <li>Complete a request form</li>
            <li>Provide application numbers</li>
            <li>Email it to the planning service at <a href="mailto:planningdc@sheffield.gov.uk">planningdc@sheffield.gov.uk</a></li>
            <li>Files can only be viewed after <strong>authorisation by senior managers</strong>.</li>
          </ul>

      <h4>Assistance and Support</h4>
        <ul>
          <li>Up to <strong>10 minutes of help is provided free of charge</strong>.</li>
          <li>Additional assistance must be <strong>paid for in advance</strong>.</li>
        </ul>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Property Purchases</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Customers purchasing a property may require a <strong>comprehensive search or an expedited search</strong>. 
        These enquiries should be referred to the <strong>Local Land Charges team</strong>. 
      </p>
      <p>
        Please refer to the Local Land Charges knowledge article.
      </p>
    </div>
  </details>


  <h3>Key Points for Call Centre Staff</h3>
    <ul>
      <li>Confirm what time period the customer needs before advising on the correct route.</li>
      <li>Check whether the customer requires a <strong>simple search, complex search, or in-person file viewing</strong>.</li>
      <li>Inform customers about <strong>required documents and fees</strong> before submitting a request.</li>
      <li>Direct complex queries and specialist requests to the <strong>Records and Enquiries Team</strong>.</li>
      <li>Refer property purchase-related enquiries to the <strong>Local Land Charges team</strong>.</li>
    </ul>
    
    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "building_control_information_provided" },
  {
    type: "Information",
    keywords: [
      "planning",
      "history",
      "requests",
      "historical",
      "application",
      "property",
      "complex planning search",
      "planning files",
      "in person viewing",
      "planing",
      "historial",
      "plannng"
    ],
    categories: ["Planning and Development", "Planning"]
  },
  { date: "16/07/2026", name: "Liz Taster" }
);

//#region Planning Applications

const applyForPlanningPermission = new ContentPaD(
  "applyForPlanningPermission",
  "Apply for Planning Permission",
  "Guidance on applying for planning permission, including application fees, supporting documents and local planning requirements.",
  `
  <p>
    You can apply for planning permission online through the Planning Portal. The service allows you to complete your application, upload supporting documents, create a site location plan and pay any required fees.
  </p>
  <p>
    <strong>Apply online:</strong><br>
    <a href="https://1app.planningportal.co.uk/Form/StartPlanningApplication" target="_blank" rel="noopener noreferrer">
      Apply for Planning Permission | Planning Portal
    </a>
  </p>

  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20planning%20permission\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before You Apply</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Before applying, you should check whether planning permission is required for your proposed work.
      </p>
      <p>There are several ways to do this:</p>
      <ul>
        <li>Check whether your proposal qualifies as permitted development</li>
        <li>Submit a Lawful Development Certificate application to obtain written confirmation</li>
        <li>Submit a pre-application enquiry if you would like planning advice before making a formal application</li>
        <li>Review planning application fees before applying</li>
      </ul>
      <p>
        For further information and access to all available services, visit:
        <a href="https://www.sheffield.gov.uk/planning-development/applications-advice/apply" target="_blank" rel="noopener noreferrer">
          Apply for Planning Permission | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20planning%20permission%20advice\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Supporting Documents</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        When you apply, you must provide the information and supporting documents required for your application. This will normally include:
      </p>
      <ul>
        <li>An application form</li>
        <li>Plans and drawings</li>
        <li>Ownership certificates</li>
        <li>Any additional supporting statements required for your proposal</li>
      </ul>
      <p>
        Applications that do not include the required information may not be validated until the missing information is received.
      </p>
      <p>
        <strong>Further guidance:</strong><br>
        <a href="https://www.gov.uk/guidance/making-an-application" target="_blank" rel="noopener noreferrer">
          Making an Application | GOV.UK
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Making%20a%20planning%20application\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Application Fees</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Planning application fees are paid directly through the Planning Portal when you submit your application online. VAT is not payable on planning applications.
      </p>
      <p>
        Sheffield City Council does not accept payment by cheque.
      </p>
      <p>
        If you submit your application by post, you will be sent a payment link by email.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Local Planning Requirements</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Some applications may require additional information to meet Sheffield's local planning validation requirements.
      </p>
      <p>
        <strong>View local planning requirements:</strong><br>
        <a href="https://www.sheffield.gov.uk/planning-development/local-planning-guidance" target="_blank" rel="noopener noreferrer">
          Local Planning Requirements | Sheffield City Council
        </a>
      </p>

      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Local%20planning%20requirements\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Customers should <strong>check whether planning permission is required</strong> before applying.</li>
    <li>Planning applications can be submitted online through the <strong>Planning Portal</strong>.</li>
    <li>Customers must provide the <strong>required plans, documents and supporting information</strong>.</li>
    <li>Applications may require additional information to meet <strong>Sheffield's local validation requirements</strong>.</li>
    <li>Applications cannot be validated until the required information has been provided.</li>
    <li>Application fees can be paid through the Planning Portal when applying online.</li>
  </ul>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Application",
    keywords: [
      "planning permission",
      "planning application",
      "planning portal",
      "permitted development",
      "lawful development certificate",
      "pre-application enquiry",
      "application fees",
      "supporting documents",
      "local planning requirements",
      "planing permission",
      "planing application",
      "permision",
      "aplication"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const applyForPreApplicationAdvice = new ContentPaD(
  "applyForPreApplicationAdvice",
  "Apply for Pre-Application Advice",
  "Guidance on obtaining planning advice before submitting an application, including charges, payment, enquiry types, planning policies and specialist proposals.",
  `
  <p>
    A pre-application enquiry allows you to receive planning advice before submitting a planning application. This can help identify potential issues early, understand planning requirements and improve the quality of your proposal before you apply.
  </p>
  <p>
    Applications submitted without addressing planning policy requirements may be at greater risk of refusal.
  </p>
  <p>
    For full details of the service, application requirements, fees and supporting guidance, visit:
    <a href="https://www.sheffield.gov.uk/planning-development/applications-advice/pre-application-enquiry" target="_blank" rel="noopener noreferrer">
      Make a Pre-Application Enquiry | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Make%20a%20pre-application%20enquiry\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Charges for Pre-Application Advice</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Pre-application advice is a chargeable service and fees include VAT.
      </p>
      <p>
        Although there is a cost, obtaining advice before submitting an application may help identify issues, avoid delays and potentially save money in the long term.
      </p>
      <p>
        <strong>View current fees:</strong><br>
        <a href="https://www.sheffield.gov.uk/sites/default/files/2026-03/pre-application-fees-from-1-april-2026x.pdf" target="_blank" rel="noopener noreferrer">
          Pre-Application Fees | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Pre-application%20fees\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How to Pay</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can pay for pre-application advice by credit card, debit card or arrange a BACs payment.
      </p>
      <p>
        <strong>Telephone:</strong><br>
        0114 273 4218 <a href="tel:0114 2734218">0114 2734218</a> 
      </p>
      <p>
        <strong>Email:</strong><br>
        <a href="mailto:planningapps@sheffield.gov.uk">
          planningapps@sheffield.gov.uk
        </a>
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Submit a Pre-Application Enquiry</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        All pre-application enquiries must be submitted using the appropriate enquiry process. Different routes are available depending on the scale and complexity of the proposed development.
      </p>
      <p>This includes:</p>
      <ul>
        <li>Smaller-scale development proposals</li>
        <li>Major development proposals</li>
        <li>Applications requiring supporting plans and documents</li>
        <li>Proposals seeking planning advice before a formal application is submitted</li>
      </ul>
      <p>
        You must include the relevant fee and any supporting documents required for your enquiry.
      </p>
      <p>
        Details of the available enquiry types, application requirements and submission process are provided on the main pre-application enquiry page linked above.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Planning Policies and Guidance</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Before submitting an enquiry, you may find it useful to review the local planning policies and guidance relevant to your proposal.
      </p>
      <p>
        <strong>Sheffield Local Plan:</strong><br>
        <a href="https://www.sheffield.gov.uk/planning-development/sheffield-plan" target="_blank" rel="noopener noreferrer">
          Sheffield Local Plan | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Local%20Plan\`
        "
      >
        Send link to review further information
      </button>
      <p>
        <strong>Planning guidance and advice notes:</strong><br>
        <a href="https://www.sheffield.gov.uk/planning-development/approved-planning-guidance" target="_blank" rel="noopener noreferrer">
          Approved Planning Guidance | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Approved%20planning%20guidance\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Heritage Assets and Conservation Areas</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If your proposal affects a listed building, conservation area or other heritage asset, you may need to provide information explaining how the proposal affects the heritage significance of the site.
      </p>
      <p>
        <strong>Check if a property is in a conservation area:</strong><br>
        <a href="https://www.sheffield.gov.uk/planning-development/conservation-areas" target="_blank" rel="noopener noreferrer">
          Conservation Areas | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Conservation%20areas\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Planning Performance Agreements</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        For large or strategic developments, you may wish to enter into a Planning Performance Agreement (PPA).
      </p>
      <p>
        A PPA provides a project management framework, agreed timescales and closer working between the applicant and the Council throughout the planning process.
      </p>
      <p>
        Fees are based on the scale and complexity of the proposal.
      </p>
      <p>
        <strong>Email for PPA enquiries:</strong><br>
        <a href="mailto:planningdc.centralmajor@sheffield.gov.uk">
          planningdc.centralmajor@sheffield.gov.uk
        </a>
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Confidentiality</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Pre-application enquiries are not published by the Council.
      </p>
      <p>
        However, information may still be subject to requests under the Freedom of Information Act 2000 or the Environmental Information Regulations 2004.
      </p>
    </div>
  </details>
  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Pre-application advice is available <strong>before a formal planning application is submitted</strong>.</li>
    <li>The service is <strong>chargeable and fees include VAT</strong>.</li>
    <li>The type of enquiry depends on the <strong>scale and complexity of the proposed development</strong>.</li>
    <li>Customers must provide the <strong>required supporting information and relevant fee</strong>.</li>
    <li>Large or strategic developments may be suitable for a <strong>Planning Performance Agreement (PPA)</strong>.</li>
    <li>Pre-application enquiries are not normally published, but information may still be subject to <strong>Freedom of Information or Environmental Information requests</strong>.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Application",
    keywords: [
      "pre-application advice",
      "pre-application enquiry",
      "planning advice",
      "pre-application fees",
      "planning performance agreement",
      "PPA",
      "planning guidance",
      "Sheffield Local Plan",
      "heritage asset",
      "conservation area",
      "listed building",
      "preapp",
      "pre application",
      "pre aplication",
      "planing advice",
      "planing enquiry"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const findOutIfYouNeedPlanningPermission = new ContentPaD(
  "findOutIfYouNeedPlanningPermission",
  "Find Out if You Need Planning Permission",
  "Guidance on checking whether planning permission is required, including permitted development rights, local constraints and written confirmation.",
  `
  <p>
    Not all building work, alterations or changes of use require planning permission. There are several ways to check whether permission is needed before starting work.
  </p>
  <p>
    For further information about checking whether planning permission is required, visit:
    <a href="https://www.sheffield.gov.uk/planning-development/applications-advice/need-planning-permission" target="_blank" rel="noopener noreferrer">
      Find Out if You Need Planning Permission | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Find%20out%20if%20you%20need%20planning%20permission\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Check Permitted Development Rights</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Some types of development can be carried out without planning permission under Permitted Development Rights, provided specific conditions are met.
      </p>
      <p>
        <strong>Interactive planning guides:</strong><br>
        <a href="https://www.planningportal.co.uk/info/200125/do_you_need_permission" target="_blank" rel="noopener noreferrer">
          Check if You Need Planning Permission | Planning Portal
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Check%20if%20you%20need%20planning%20permission\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Local Constraints</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Planning permission may still be required if:
      </p>
      <ul>
        <li>The property is a listed building</li>
        <li>The property is within a conservation area</li>
        <li>An Article 4 Direction applies</li>
        <li>Permitted development rights have been removed by a planning condition</li>
        <li>The proposal affects protected trees</li>
        <li>The proposal involves a House in Multiple Occupation (HMO) in an Article 4 area</li>
      </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Additional Guidance</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Additional guidance is available for specific types of development, including:
      </p>
      <ul>
        <li>Air Source Heat Pumps</li>
        <li>Telecommunications Infrastructure</li>
        <li>Houses in Multiple Occupation (HMOs)</li>
        <li>Listed Buildings</li>
        <li>Conservation Areas</li>
        <li>Protected Trees</li>
        <li>Other proposals that may be affected by local planning constraints</li>
      </ul>
      <p>
        Guidance relevant to these proposals is available on the main planning permission page linked above.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Written Confirmation</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you would like written confirmation that planning permission is not required, you can apply for a Lawful Development Certificate (LDC).
      </p>
      <p>
        If approved, this provides formal confirmation that the proposed development is lawful and may be useful when selling a property in the future.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Need Further Advice?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you are unsure whether planning permission is required, you can submit a pre-application enquiry for written advice. Charges apply for this service.
      </p>
      <p>
        <a href="https://www.sheffield.gov.uk/planning-development/applications-advice/pre-application-enquiry" target="_blank" rel="noopener noreferrer">
          Make a Pre-Application Enquiry | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Make%20a%20pre-application%20enquiry\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>
  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Not all development requires planning permission; some work may be covered by <strong>Permitted Development Rights</strong>.</li>
    <li>Local restrictions such as <strong>Article 4 Directions, listed buildings, conservation areas or planning conditions</strong> can affect permitted development rights.</li>
    <li>A <strong>Lawful Development Certificate</strong> can provide formal written confirmation that proposed development is lawful.</li>
    <li>If the customer remains unsure, they can request <strong>pre-application advice</strong>, for which a charge applies.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Information",
    keywords: [
      "do I need planning permission",
      "planning permission required",
      "permitted development",
      "permitted development rights",
      "Article 4",
      "lawful development certificate",
      "LDC",
      "planning constraints",
      "listed building",
      "conservation area",
      "protected trees",
      "HMO",
      "change of use",
      "planing permission",
      "planning permision",
      "permited development",
      "lawful developement certificate"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const planningDecisionsAndAppeals = new ContentPaD(
  "planningDecisionsAndAppeals",
  "Planning Decisions and Appeals",
  "Information about how planning applications are decided, Planning Committee meetings, material planning considerations and the planning appeals process.",
  `
  <p>
    Planning applications are assessed by a Planning Officer and considered against local and national planning policies, along with any relevant comments received during the consultation process.
  </p>
  <p>
    A recommendation is then made to either approve or refuse the application.
  </p>
  <p>
    For further information about planning decisions and appeals, visit:
    <a href="https://www.sheffield.gov.uk/planning-development/decisions-appeals" target="_blank" rel="noopener noreferrer">
      Planning Decisions and Appeals | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Planning%20decisions%20and%20appeals\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How Decisions Are Made</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <h4>Minor and Non-Controversial Applications</h4>
      <p>
        Most smaller planning applications are decided by senior planning officers under delegated powers.
      </p>
      <h4>Major or Controversial Applications</h4>
      <p>
        Significant developments and controversial applications may be referred to the Planning and Highways Committee, where councillors make the final decision.
      </p>
      <p>
        Councillors may accept or reject the officer's recommendation after considering the application and any relevant information.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Speaking at Planning Committee</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Interested parties may request to speak at Planning and Highways Committee meetings. Any views should also be submitted in writing as part of the application process.
      </p>
      <p>
        You are responsible for monitoring an application's progress, including whether it will be considered by the Committee.
      </p>
      <p>
        <strong>Planning and Highways Committee information:</strong><br>
        <a href="https://democracy.sheffield.gov.uk/mgCommitteeDetails.aspx?ID=373" target="_blank" rel="noopener noreferrer">
          Planning and Highways Committee | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Planning%20and%20Highways%20Committee\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What Is Considered When Making a Decision?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        When assessing an application, the Council may consider:
      </p>
      <ul>
        <li>Local and national planning policies</li>
        <li>Previous planning decisions and appeal decisions</li>
        <li>The impact on the surrounding area</li>
        <li>Comments received from consultees and interested parties</li>
        <li>Material planning considerations</li>
      </ul>
      <h4>Impact on Local Amenities</h4>
      <p>
        Planning decisions may consider the impact on:
      </p>
      <ul>
        <li>The appearance and character of an area</li>
        <li>Privacy of neighbouring properties</li>
        <li>Noise, pollution and environmental impacts</li>
        <li>Highway, pedestrian and cyclist safety</li>
        <li>Employment and the local economy</li>
      </ul>
      <p>
        Objections do not automatically result in an application being refused, and a lack of objections does not guarantee that an application will be approved.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Appeals</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Applicants can appeal if:
      </p>
      <ul>
        <li>Planning permission is refused</li>
        <li>Conditions are attached to an approval</li>
        <li>The application has not been determined within the target timescale</li>
      </ul>
      <p>
        Only the applicant has the right to appeal. Third parties cannot appeal against a planning decision.
      </p>
      <p>
        <strong>Make an appeal:</strong><br>
        <a href="https://acp.planninginspectorate.gov.uk/" target="_blank" rel="noopener noreferrer">
          Appeals Casework Portal | Planning Inspectorate
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Planning%20appeals\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Comments on Appeals</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Anyone who submitted comments on the original planning application will be notified if an appeal is made and may be given the opportunity to submit further comments.
      </p>
      <p>
        Comments on planning appeals must be submitted through the Appeals Casework Portal.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Appeal Time Limits</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Appeals must be submitted within the relevant timescale from the date shown on the decision notice:
      </p>
      <ul>
        <li>Householder and minor commercial applications: 12 weeks</li>
        <li>Advertisement consent applications: 8 weeks</li>
        <li>Most other planning applications: 6 months</li>
      </ul>
    </div>
  </details>
  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Most smaller applications are decided by planning officers under <strong>delegated powers</strong>; significant or controversial applications may go to the <strong>Planning and Highways Committee</strong>.</li>
    <li>Objections do <strong>not automatically mean an application will be refused</strong>, and no objections does not guarantee approval.</li>
    <li>Only the <strong>applicant</strong> has the right to appeal a planning decision; third parties cannot appeal.</li>
    <li>An appeal may be possible following a <strong>refusal, conditions being imposed or non-determination</strong>.</li>
    <li>Appeal deadlines vary depending on the type of application and run from the date of the decision notice.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Information",
    keywords: [
      "planning decision",
      "planning appeal",
      "planning refusal",
      "planning conditions",
      "non-determination",
      "planning committee",
      "Planning and Highways Committee",
      "delegated decision",
      "material planning considerations",
      "planning objections",
      "Planning Inspectorate",
      "appeal time limit",
      "third party appeal",
      "planing decision",
      "planning apeal",
      "planning commitee"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const searchViewAndCommentOnPlanningApps = new ContentPaD(
  "searchViewAndCommentOnPlanningApplications",
  "Search, View and Comment on Planning Applications",
  "Guidance on searching for current and historical planning applications, registering to comment, tracking applications and viewing enforcement notices.",
  `
  <p>
    You can search and view both current and historical planning applications online. If an application is currently open for consultation, you may also be able to submit comments.
  </p>
  <p>
    Comments should be made responsibly and focus on planning matters that are relevant to the application.
  </p>
  <p>
    <strong>Search, view or comment on an application:</strong><br>
    <a href="https://planningapps.sheffield.gov.uk/online-applications/" target="_blank" rel="noopener noreferrer">
      Search, View and Comment on Planning Applications
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Search%20and%20comment%20on%20planning%20applications\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Register to Comment</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        To submit comments on an application, you must first register for a Public Access account.
      </p>
      <p>
        <strong>Register on Public Access:</strong><br>
        <a href="https://planningapps.sheffield.gov.uk/online-applications/registrationWizard.do?action=start" target="_blank" rel="noopener noreferrer">
          Register for a Public Access Account
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Register%20on%20Public%20Access\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Before You Comment</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>Comments and your address will normally be published online</li>
        <li>Anonymous comments are generally not considered</li>
        <li>Do not include personal information that you do not want published</li>
        <li>Offensive, defamatory or inappropriate comments may be removed</li>
        <li>Only comments relating to relevant planning considerations can be considered when an application is decided</li>
        <li>Comments should be submitted before the consultation deadline wherever possible</li>
      </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Tracking an Application</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You are responsible for monitoring the progress of an application, including whether it will be considered by the Planning and Highways Committee.
      </p>
      <p>
        Any comments relating to a planning committee item should be submitted at least 24 hours before the meeting.
      </p>
      <p>
        <strong>Planning Committee agendas:</strong><br>
        <a href="https://democracy.sheffield.gov.uk/mgCommitteeDetails.aspx?ID=373" target="_blank" rel="noopener noreferrer">
          Planning and Highways Committee | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Planning%20and%20Highways%20Committee\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Planning Decisions</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Information is available about how planning applications are assessed and which factors can be considered when making a decision.
      </p>
      <p>
        <strong>Planning Decisions and Appeals:</strong><br>
        <a href="https://www.sheffield.gov.uk/planning-development/decisions-appeals" target="_blank" rel="noopener noreferrer">
          Planning Decisions and Appeals | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Planning%20decisions%20and%20appeals\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Enforcement and Breach Notices</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        You can search historical registers to check whether a property or site has been served with an Enforcement Notice or Breach of Condition Notice.
      </p>
      <p>
        The historical registers can be searched using the planning application search linked at the top of this article.
      </p>
      <p>
        For copies of notices or further information, contact:
      </p>
      <p>
        <strong>Email:</strong><br>
        <a href="mailto:planningdc@sheffield.gov.uk">
          planningdc@sheffield.gov.uk
        </a>
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Important Information</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>Planning application information may be incomplete and should not be used instead of a formal Local Land Charges search</li>
        <li>Planning documents are protected by copyright and may only be used for consultation purposes</li>
        <li>Additional copies must not be made without permission from the copyright owner</li>
      </ul>
    </div>
  </details>
  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Customers can search both <strong>current and historical planning applications</strong> online.</li>
    <li>A <strong>Public Access account</strong> is required to submit comments online.</li>
    <li>Comments should relate to <strong>relevant planning considerations</strong> and should be submitted before the consultation deadline wherever possible.</li>
    <li>Comments and the customer's address will normally be <strong>published online</strong>; anonymous comments are generally not considered.</li>
    <li>Customers are responsible for <strong>monitoring the progress of an application</strong>, including whether it is going to Planning and Highways Committee.</li>
    <li>Planning application information should not be used instead of a <strong>formal Local Land Charges search</strong>.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Information",
    keywords: [
      "search planning applications",
      "view planning applications",
      "comment on planning applications",
      "planning application search",
      "historical planning applications",
      "Public Access",
      "register to comment",
      "planning objection",
      "track planning application",
      "planning committee",
      "planning decision",
      "enforcement notice",
      "breach of condition",
      "planning reference",
      "planing application",
      "planning aplication",
      "planning serch",
      "planning coment",
      "public acess",
      "enforcment notice"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const planningPermissionForHmo = new ContentPaD(
  "planningPermissionForHousesInMultipleOccupation",
  "Planning Permission for Houses in Multiple Occupation (HMOs)",
  "Guidance on planning permission requirements for Houses in Multiple Occupation, including Article 4 restrictions, HMO density and existing HMO use.",
  `
  <p>
    If you are planning to convert a property into a House in Multiple Occupation (HMO), you may need planning permission depending on the location of the property and the number of occupants.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Do I Need Planning Permission?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Within Sheffield's Article 4 Area, planning permission is required to change a dwellinghouse (Use Class C3) into an HMO occupied by 3 to 6 unrelated people (Use Class C4).
      </p>
      <p>
        You should check whether the property falls within the Article 4 Area before making plans to convert a property into an HMO.
      </p>
      <p>
        Outside the Article 4 Area, planning permission is generally not required to convert a dwellinghouse into an HMO occupied by 3 to 6 unrelated people.
      </p>
      <p>Planning permission is normally required anywhere in the city for:</p>
      <ul>
        <li>HMOs occupied by 7 or more people</li>
        <li>Conversions from another use class into an HMO</li>
      </ul>
      <p>
        For information about HMOs, Article 4 restrictions and how planning permission requirements may affect your property, visit:
        <a href="https://www.sheffield.gov.uk/planning-development/applications-advice/planning-permission-hmo" target="_blank" rel="noopener noreferrer">
          Planning Permission for Houses in Multiple Occupation | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Planning%20permission%20for%20houses%20in%20multiple%20occupation\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>HMO Licensing</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Even if planning permission is not required, you may still require an HMO licence. This is commonly required for properties occupied by 5 or more people.
      </p>
      <p>
        Planning permission and HMO licensing are separate requirements.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How Applications Are Assessed</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Applications are assessed against Core Strategy Policy CS41.
      </p>
      <p>
        As a guide, planning permission is less likely to be granted where 20% or more of residential properties within 200 metres of the property are already HMOs.
      </p>
      <p>
        <strong>HMO Density List:</strong><br>
        <a href="https://www.sheffield.gov.uk/sites/default/files/2026-05/hmo-density-list.xlsx" target="_blank" rel="noopener noreferrer">
          HMO Density List | Sheffield City Council
        </a>
      </p>
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=HMO%20density%20list\`
        "
      >
        Send link to review further information
      </button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>If the Property Is Already an HMO</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You may not need planning permission if:</p>
      <ul>
        <li>The property has been continuously used as an HMO since 10 December 2011</li>
        <li>Planning permission for HMO use was previously granted and the property has remained in HMO use</li>
      </ul>
      <p>
        You should keep evidence such as tenancy agreements that demonstrate continuous HMO occupation. This may be required for future planning enquiries, enforcement investigations or Lawful Development Certificate applications.
      </p>
      <p>
        If a property has since reverted back to use as a normal dwellinghouse, planning permission may be required to change it back into an HMO.
      </p>
    </div>
  </details>
  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Within Sheffield's <strong>Article 4 Area</strong>, planning permission is required to change a C3 dwellinghouse into a C4 HMO for 3 to 6 unrelated people.</li>
    <li>Outside the Article 4 Area, this change is generally permitted for <strong>3 to 6 unrelated people</strong>.</li>
    <li>Planning permission is normally required anywhere in Sheffield for an HMO occupied by <strong>7 or more people</strong>.</li>
    <li><strong>Planning permission and HMO licensing are separate requirements</strong>; a property may require one or both.</li>
    <li>Existing HMO use may be relevant where the property has been continuously used as an HMO since <strong>10 December 2011</strong>.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Information",
    keywords: [
      "HMO planning permission",
      "house in multiple occupation",
      "HMO",
      "HMO conversion",
      "change of use",
      "C3 to C4",
      "Article 4",
      "HMO licensing",
      "HMO density",
      "Policy CS41",
      "existing HMO",
      "lawful development certificate",
      "planing permission",
      "HMO licencing",
      "Artical 4",
      "HMO denisty"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const disabilityAccessPlanningGuidance = new ContentPaD(
  "disabilityAccessPlanningGuidance",
  "Disability Access Planning Guidance",
  "Information about accessibility and inclusive design advice for planning applications, Building Regulations and licensed premises.",
  `
  <p>
    The Council's Access Officer provides advice on physical access and inclusive design to help ensure developments are accessible for disabled people and comply with the Equality Act 2010.
  </p>

  <h3>Advice Available</h3>
  <p>Advice can be provided on:</p>
  <ul>
    <li>Pre-planning enquiries and planning applications</li>
    <li>Access requirements relating to Building Regulations, including Part M (Access to and Use of Buildings)</li>
    <li>Access arrangements for licensed premises</li>
  </ul>

  <h3>Access Liaison Group (ALG)</h3>
  <p>
    The Access Liaison Group (ALG) is made up of disabled people from across Sheffield who help shape improvements to accessibility throughout the city.
  </p>
  <p>
    New members are welcome and can contact the Access Officer for further information.
  </p>

  <h3>Design Guidance and Specialist Advice</h3>
  <p>
    Advice on inclusive design, disability access standards and specialist disability organisations is available from the Access Officer.
  </p>
  <p>
    <strong>Email:</strong><br>
    <a href="mailto:planningdc@sheffield.gov.uk">
      planningdc@sheffield.gov.uk
    </a>
  </p>
  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>The Council's <strong>Access Officer</strong> can provide advice about physical access and inclusive design.</li>
    <li>Advice can cover <strong>planning applications, pre-planning enquiries, Building Regulations Part M and licensed premises</strong>.</li>
    <li>Customers requiring specialist accessibility advice can be directed to the Access Officer through the contact details provided.</li>
    <li>The <strong>Access Liaison Group (ALG)</strong> includes disabled people from across Sheffield and welcomes new members.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Information",
    keywords: [
      "disability access",
      "disabled access",
      "accessibility",
      "inclusive design",
      "Access Officer",
      "planning access advice",
      "Building Regulations Part M",
      "licensed premises",
      "Access Liaison Group",
      "ALG",
      "Equality Act 2010",
      "accessability",
      "accesibility",
      "disabilty access",
      "inclusve design",
      "acess officer"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const findAPropertysPlanningHistory = new ContentPaD(
  "findAPropertysPlanningHistory",
  "Find a Property's Planning History",
  "Information about planning history searches, fees, archived planning files and viewing historical planning records.",
  `
  <p>
    If you would like to find the planning history of a property or site, there are several search options available depending on the information you require.
  </p>
  <p>
    For further information about planning history searches and archived planning records, visit:
    <a href="https://www.sheffield.gov.uk/planning-development/planning-history" target="_blank" rel="noopener noreferrer">
      Find a Property's Planning History | Sheffield City Council
    </a>
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Find%20a%20propertys%20planning%20history\`
    "
  >
    Send link to review further information
  </button>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Property Purchases</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If you are buying a property, you may require a comprehensive or expedited search. In these circumstances, you should contact the Local Land Charges team for advice.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Planning History Requests</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Planning history searches are available for planning applications and enforcement cases from 2001 to the present day.
      </p>
      <p>
        Searches can be extended back to 1975 for an additional charge.
      </p>
      <h4>Fees</h4>
      <ul>
        <li>£25 for a straightforward domestic property search, including VAT</li>
        <li>£50 for a commercial property search, including VAT</li>
        <li>Complex searches may incur additional charges</li>
      </ul>
      <p>To request a search, you will need:</p>
      <ul>
        <li>A covering letter</li>
        <li>A 1:1250 location plan</li>
        <li>Payment of the appropriate fee</li>
      </ul>
      <p>
        Please allow up to 5 working days after payment has been received for the search to be completed.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Viewing Historical Planning Files</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Historical planning files may be available to view in person, subject to approval.
      </p>
      <p>
        If you know the planning application number, you can request access to archived files by contacting the Planning Service.
      </p>
      <p>
        <strong>Email:</strong><br>
        <a href="mailto:planningdc@sheffield.gov.uk">
          planningdc@sheffield.gov.uk
        </a>
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Additional Information</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>Complex sites require an appointment to view records</li>
        <li>Up to 10 minutes of assistance is provided free of charge</li>
        <li>Additional assistance may be chargeable</li>
        <li>Historic planning applications from 1998 to 2003 can be viewed on the public computer at First Point, Howden House</li>
      </ul>
    </div>
  </details>
  <h3>Key Information for Call Centre Staff</h3>
  <ul>
    <li>Customers buying a property who require a comprehensive or expedited search should be directed to <strong>Local Land Charges</strong>.</li>
    <li>Planning history searches are available from <strong>2001 onwards</strong> and can be extended back to 1975 for an additional charge.</li>
    <li>Customers requesting a search need a <strong>covering letter, 1:1250 location plan and the appropriate fee</strong>.</li>
    <li>Allow up to <strong>5 working days after payment</strong> for a planning history search to be completed.</li>
    <li>Historical files may be available to view in person where the customer knows the <strong>planning application reference</strong>.</li>
  </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_application_information_provided" },
  {
    type: "Information",
    keywords: [
      "planning history",
      "property planning history",
      "historical planning applications",
      "archived planning files",
      "planning records",
      "planning enforcement history",
      "planning application reference",
      "planning history search",
      "Local Land Charges",
      "view planning files",
      "property purchase",
      "Howden House",
      "planing history",
      "planning histroy",
      "historical planing applications",
      "archived planing files"
    ],
    categories: ["Planning and Development", "Planning Applications"]
  },
  { date: "20/08/2026", name: "Andy Walker" }
);

const planningApplications = new MenuPaD(
  "planningApplications",
  "Planning Applications",
  "Information regarding planning applications",
  [
    reportingAPlanningEnforcementIssue,
    historicalPlanningRequests,
    applyForPlanningPermission,
    applyForPreApplicationAdvice,
    findOutIfYouNeedPlanningPermission,
    planningDecisionsAndAppeals,
    searchViewAndCommentOnPlanningApps,
    planningPermissionForHmo,
    disabilityAccessPlanningGuidance,
    findAPropertysPlanningHistory,
  ]
);

//#endregion Planning Applications

//#region Planning Listed Buildings

const planningListedBuildings = new ContentPaD(
  "planningListedBuildings",
  "Planning Listed Buildings",
  "Information about listed buildings, Listed Building Consent, checking whether a property is listed and obtaining conservation advice.",
  `
  <p>
    Listed buildings are buildings of special architectural or historic interest. If a building is listed, you may need Listed Building Consent before carrying out alterations, extensions, demolition works or other changes that could affect its character.
  </p>
  <p>
    Planning permission and Listed Building Consent are separate requirements and, in some cases, both may be needed.
  </p>

  <h3>Check if a Building Is Listed</h3>
  <p>
    You can search Historic England's register to find out whether a property is listed.
  </p>
  <p>
    <strong>Search Historic England's List:</strong><br>
    <a href="https://historicengland.org.uk/listing/the-list/" target="_blank" rel="noopener noreferrer">
      Search the List | Historic England
    </a>
  </p>

  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Search%20the%20List%20Historic%20England\`
    "
  >
    Send link to review further information
  </button>

  <h3>Further Advice</h3>
  <p>
    For advice about listed buildings, Listed Building Consent and conservation matters, contact:
  </p>
  <p>
    <strong>Email:</strong><br>
    <a href="mailto:conservation@sheffield.gov.uk">
      conservation@sheffield.gov.uk
    </a>
  </p>

  <h3>Quick Summary</h3>
  <p>
    Listed Building Consent may be required before carrying out works to a listed building. Check whether the property is listed and seek advice before starting any work.
  </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "planning_listed_buildings_information_provided" },
  {
    type: "Information",
       keywords: [
      "listed building",
      "listed buildings",
      "Listed Building Consent",
      "listed building permission",
      "check if building is listed",
      "Historic England",
      "heritage building",
      "listed building alterations",
      "listed building extension",
      "listed building demolition",
      "conservation advice",
      "listed bulding"
    ],
    categories: ["Planning and Development", "Planning"]
  },
  { date: "21/08/2026", name: "Andy Walker" }
);

//#endregion Planning Listed Buildings

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const planningAndDevelopment = new ServicePaD(
  "planningAndDevelopment",
  "Planning and Development",
  `Planning applications, building regulations, conservation, regeneration, planning committee…`,
  [
    buildingControl,
    planningApplications,
    planningListedBuildings,
    
  ]
);
