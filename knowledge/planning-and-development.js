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
      <li>A form and <strong>site location plan</strong> are required</li>
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
 



const buildingControl = new MenuPaD(
  "buildingControl",
  "Building Control",
  "Information regarding building control",
  [
    templateTile,
    guideForDemolitionNoticeQueries,
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
