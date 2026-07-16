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
    <li>Work completed <strong>before</strong> 11 November 1985 <strong>cannot be regularised</strong></li>
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

const requestACompletionCertificate = new ContentPaD(
  "requestACompletionCertificate",
  "Request a Completion Certificate",
  "Guidance on how to request a completion certificate for building work.",
  `
  <h3>Overview</h3>
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
      <a href="https://www.sheffield.gov.uk/planning-development/building-control/completion"target="_blank">
      Completion certificates | Sheffield City Council</a>
    </p>
    <p>[Insert Send Link]</p>

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
  { typeKey: "" },
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
  <section class="alert-panel--ineligible" role="alert" aria-label="Alert panel">
    <h3>Emergency Situations</h3>
      <p>
        If there is an <strong>immediate danger to life</strong> or a structure is at risk of imminent collapse advise the customer to <strong>call 999 immediately</strong>.
      </p>
  </section>
  
<h3>Overview</h3>
  <p>
    Residents can report a dangerous structure to Sheffield City Council if a building or structure appears to pose a <strong>risk to people, property, or the surrounding area</strong>.
  </p>
  <p>
    A dangerous structure may be publicly or privately owned and includes anything that could become unsafe or unstable.
  </p>
  <p>
    Full details and a link to the report form can be found here: 
    <a href="https://www.sheffield.gov.uk/planning-development/building-regulations/report-dangerous-structure" target="_blank">
    Report a dangerous structure | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link]</p>


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
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
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
<h3>Overview</h3>
  <p>
    Residents (or their builders) can book a building site inspection as part of an existing building control application with Sheffield City Council. 
    The inspection service is included within the application and ensures work complies with building regulations.
  </p>
  <p>
    Inspections are carried out by a qualified Registered Building Inspector (RBI) and are independent of the builder.
  </p>
  <p>
    Further information can be found here: <a href="https://www.sheffield.gov.uk/planning-development/building-control/site-inspection" target="_blank">
    Book a building site inspection | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link]</p>


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
        <a href="https://www.sheffield.gov.uk/planning-development/building-control/site-inspection" target="_blank">
        Book a building site inspection | Sheffield City Council</a>
      </p>
      <p>[Insert Send Link]</p>
      <p>
        If the app cannot be used, customers can contact the Building Control team directly on 0114 273 4168.
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
        Customers can request a morning or afternoon visit.
      </p>
      <p>
        Requested dates or times cannot always be guaranteed.
      </p>
      <p>
        If the requested date is not available, the team will contact the customer to rearrange.
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
  { typeKey: "" },
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
  <h3>Overview</h3>
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
      <a href="https://www.sheffield.gov.uk/your-city-council/legal-services/local-land-charges" target="_blank">
      Land and property searches | Sheffield City Council</a>
    </p>

    <p>[Insert Send Link]</p>


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
  { typeKey: "" },
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
  <h3>Overview</h3>
    <p>
      Customers can choose to work with a Registered Building Control Approver. 
      They will act to ensure building projects comply with building regulations. 
      This is instead of the council ensuring compliance.
    </p>
    <p>
      Where a customer hires an RBCA, there is still information that needs to be provided to the council. 
      This is normally done by the RBCA, not by the customer.
    </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What is a Registered Building Control Approver?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        A <strong>Registered Building Control Approver (RBCA)</strong> is an individual or company that can act as an 
        alternative to Local Authority Building Control. They were previously known as an ‘Approved Inspector’.
      </p>
      <p>
        RBCAs are authorised to ensure building projects comply with building regulations. 
        They are responsible for all the things normally done by Building Control at the council - reviewing plans, 
        inspecting work on-site, and issuing final certificates upon completion.
      </p>
      <p>
        All RBCAs must be licensed and registered by the <strong>Building Safety Regulator (BSR)</strong>. 
        Customers should check their registration when hiring them.
      </p>
    </div>
  </details>

  
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
  { typeKey: "" },
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


const historicalPlanningRequests = new ContentPaD(
  "historicalPlanningRequests",
  "Historical Planning Application Requests",
  "Guidance on how customers can request and access planning history information, including service details, charges, requirements, and processes.",
  `
<h3>Overview</h3>
  <p>
    Customers may request information about the planning history of a property or site. 
    Multiple options are available depending on the type of search, the time period required, and the level of detail needed.
  </p>
  <p>
    For full details, refer customers to: 
    <a href="https://www.sheffield.gov.uk/planning-development/planning-history" target="_blank">
    Find a property's planning history | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link]</p>


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
  { typeKey: "" },
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
    categories: ["Planning and Development", "Building Control"]
  },
  { date: "16/07/2026", name: "Liz Taster" }
);


const partnerAuthoritySchemeApplications = new ContentPaD(
  "partnerAuthoritySchemeApplicationss",
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
    <a href="https://www.labc.co.uk/about/how-labc-supports-your-authority/partner-authority-scheme-pas" target="_blank">
    Partner Authority Scheme | LABC</a>
  </p>

  <p>[Insert Send Link]</p>


    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
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
    requestACompletionCertificate,
    reportingDangerousStructures,
    bookingBuildingSiteInspections,
    localLandCharges,
    workingWithAnRBCA,
    historicalPlanningRequests,
    partnerAuthoritySchemeApplications,
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
