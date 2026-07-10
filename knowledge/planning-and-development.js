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


const templateTile = new ContentPaD(
  "templateTile",
  "Template Tile",
  "Description to go on main tile.",
  `
    <h3>Header</h3>
    <p>Content</p>

    <details class="accordion">
    <summary class="accordion-header">
      <h3>[Accordion Title]</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>[Accordion content]</p>
    </div>
  </details>

  `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: [
      "template",
      "templte"
    ],
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "01/07/2026", name: "Liz Taster" }
);


const guideForDemolitionNoticeQueries = new ContentPaD(
  "giveNoticeToDemolishABuilding",
  "Give Notice to Demolish a Building",
  "Guidance for customers on giving notice to demolish a building, including requirements, process, and Building Control involvement.",
  `  
  <h3>Overview</h3>
    <p>
      Customers planning to demolish a building in Sheffield must inform the council before any work begins. This is a legal requirement for most demolition work and is managed through Building Control.
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
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/demolish-building" target="_blank">Apply to demolish a building | Sheffield City Council</a>
    </p>

    <p>[Insert Send Link]</p>
 

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
  { typeKey: "" },
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
 

const reportingAPlanningEnforcementIssue = new ContentPaD(
  "reportingAPlanningEnforcementIssue",
  "Reporting a Planning Enforcement Issue",
  "Information about reporting a planning enforcement issue, including what can and cannot be reported.",
  `
<h3>Overview</h3>
  <p>
    Residents can report a planning enforcement issue to the council if they believe development has taken place without planning permission 
    or is not in line with the permission granted.
  </p>
  <p>
    Planning enforcement allows the council to investigate potential breaches of planning control and decide if action is required.
  </p>
  <p>
    Further details about planning enforcement, including a link to the form to report an issue can be found here: 
    <a href="https://www.sheffield.gov.uk/planning-development/report-planning-enforcement-issue" target="_blank">
    Reporting a planning enforcement issue | Sheffield City Council</a>
  </p>

  <p>[Insert Send Link]</p>


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
        <a href="https://www.sheffield.gov.uk/planning-development/report-planning-enforcement-issue" target="_blank">
        Reporting a planning enforcement issue | Sheffield City Council</a>
      </p>

      <p>[Insert Send Link]</p>

      <p>Residents should report if they believe:</p>
        <ul>
          <li>Development has taken place without permission</li>
          <li>A development is not complying with its approved plans or conditions</li>
        </ul>

      <p>
        Residents can search to find out if a property has already been served with an enforcement notice or breach of condition notice here: 
        <a href="https://www.sheffield.gov.uk/planning-development/applications-advice/search-view-comment" target="_blank">
        Search, view and comment on planning applications | Sheffield City Council</a>
      </p>

      <p>[Insert Send Link]</p>
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
        <a href="https://www.sheffield.gov.uk/sites/default/files/2025-05/local-enforcement-plan-may-2025.pdf" target="_blank">
        Sheffield Local Enforcement Plan</a>
      </p>
      <p>[Insert Send Link]</p>
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
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
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
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "09/07/2026", name: "Liz Taster" }
);


const applyForABuildingNotice = new ContentPaD(
  "applyForABuildingNotice",
  "Apply for a Building Notice",
  "Details of how to Apply for a Building Notice for minor domestic building works, including eligibility and process details",
  `
  <h3>Overview</h3>
    <p>
      A Building Notice is a type of building control application used for <strong>minor works to domestic properties (homes)</strong>. 
      It allows customers to notify the council of planned building work <strong>without submitting detailed plans for formal approval before work starts</strong>.
    </p>
    <p>
      The <strong>property owner and person carrying out the work are responsible</strong> for ensuring the work meets building regulations.
    </p>
    <p>
      Customers can apply or find more information here: 
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/building-notice" target="_blank">
      Building Notice Application | Sheffield City Council</a>
    </p>

    <p>[Insert Send Link]</p>


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
          <li>Buildings subject to fire safety legislation (Regulatory Reform Order)</li>
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
          <li>Bathroom or shower installations</li>
          <li>Replacement windows (if not using a FENSA-registered installer)</li>
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
  { typeKey: "" },
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

  <h3>Overview</h3>
    <p>
      A Full Plans Building Application is used to have detailed building proposals checked and approved before construction work begins. 
      It ensures that plans comply with relevant Building Regulations and helps reduce the risk of issues, delays, or costly changes during construction.
    </p>
    <p>
      This type of application is commonly submitted by an architect or principal designer on behalf of the customer.
    </p>
    <p>
      For more information can be found here: 
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/full-plans" target="_blank">
      Full Plans Application – Sheffield City Council</a>
    </p>

    <p>[Insert Send Link]</p>

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
  { typeKey: "" },
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
<h3>Overview</h3>
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
    <a href="https://www.sheffield.gov.uk/planning-development/building-control/regularisation" target="_blank">
    Regularisation Application | Sheffield City Council</a>
  </p>

  <p>[Insert Send Link]</p>


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
    <li>Work completed <strong>before</strong> 11 November 1985 <strong>cannot be regularised<,strong></li>
    <li>If work has <strong>not yet started, or is ongoing</strong>, this is not the correct process. Customers should instead be directed 
      to information about a <strong>Building Notice Application</strong> or <strong>Full Plans Application</strong>, depending on the scale of the work.</li>
  </ul>

`,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
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

const buildingControl = new MenuPaD(
  "buildingControl",
  "Building Control",
  "Information regarding building control",
  [
    templateTile,
    guideForDemolitionNoticeQueries,
    reportingAPlanningEnforcementIssue,
    applyForABuildingNotice,
    fullPlansBuildingApplication,
    applyForARegularisationCertificate,
  ]
);

//#endregion Building Control

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const planningAndDevelopment = new ServicePaD(
  "planningAndDevelopment",
  "Planning and Development",
  `Planning applications, building regulations, conservation, regeneration, planning committee…`,
  [buildingControl]
);
