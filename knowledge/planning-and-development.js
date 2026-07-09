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



  <h3>Key information for Call Centre Staff</h3>
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


const buildingControl = new MenuPaD(
  "buildingControl",
  "Building Control",
  "Information regarding building control",
  [
    templateTile,
    guideForDemolitionNoticeQueries,
    reportingAPlanningEnforcementIssue,
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
