class CoreR {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceR extends CoreR {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuR extends CoreR {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentR extends CoreR {
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

class FormR extends CoreR {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const adaptation = new ContentR(
  "adaptation",
  "Adaptation",
  "",
  `
  <h2>Handrails</h2>
    <p>For Council Housing properties, refer the customer to 
    <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>
  
  <h2>Grab Rails</h2>
  <p>For internal or external access to sole occupancy, refer the customer to 
  <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>
  
  <h2>Mobility Scooter Ramps</h2>
  <p>If the customer is requesting a communal ramp for their mobility scooter, 
  advise them that if the scooter was not supplied through Equipment and Adaptations, 
  we are <strong>unlikely to supply a ramp</strong>.</p>
  <p>If the customer has acquired their own mobility scooter, then it is their own responsibility to install a ramp. 
  They will also need permission from the Housing Service to install their own ramp.</p>
  <p>For further advice about ramps to an individual's property or communal entrances, refer the customer to 
  <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>
  
  <h2>For Disabled Customers, Including Wet Rooms</h2>
  <p>For walk-in shower rooms (wet rooms), refer the customer to 
  <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const blacksmith = new ContentR(
  "blacksmith",
  "Blacksmith",
  "",
  `
    <p><strong>Category Fault:</strong> Blacksmiths Repairs</p>
    <p><strong>Contract:</strong> Responsive</p>
    <p><strong>Warranty:</strong> N/A</p>
    <p><strong>Key Information:</strong> Gas No Access: HF, NA or CI code, 
    No Repair: NR code, or ALMO, continue to order a repair and contact the RPIT Gas Team.</p>
    <p><strong>Outcome:</strong> Log job on T-Mobile</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const brickwork = new ContentR(
  "brickwork",
  "Brickwork",
  "",
  `
    <p><strong>Category Fault:</strong> Brickwork Repairs</p>
    <p><strong>Contract:</strong> Responsive</p>
    <p><strong>Warranty:</strong> Identified from the Ohms system. 
    If within a warranty period, invoke the warranty repair process.</p>
    <p><strong>Outcome:</strong> Appoint job on T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const chimneyStack = new ContentR(
  "chimneyStack",
  "Chimney Stack",
  "",
  `
  <p>All chimney-related repairs get sent to Contractors to survey before carrying out the repair.</p>
  <p>Repairs won't be carried out on the appointment date due to health and safety procedures 
  involving gas safety checks to ensure gas fires in the property and/or neighbouring properties 
  are isolated.</p>

  <p>A letter from Repairs and Maintenance is sent to the tenanted property and neighbours for 
  shared stacks, outlining access requirements. Typically, a two-week notice is given.</p>
  <p>Regardless of tenant claims about gas fires, checks must be conducted by Repairs 
  and Maintenance's gas section and Hi-point before scheduling and carrying out the repair.</p>

  <p><strong>No check = No repair</strong></p>

  <p>Appointments are arranged directly with the tenant via Hi-point where possible and 
  coordinated with the gas section.</p>
  <p>If Contractors fail to gain access, they will attempt to reschedule following the same 
  procedure.</p>

  <p>Notes will be placed in T-Mobile explaining access issues.</p>
  <p>Once access is gained and the repair is completed, Contractors will notify us, and Gas 
  will be notified via WAH to reinstate the gas appliance.</p>

  <p><strong>Category Fault:</strong> Chimney Stack</p>

  <p><strong>Contract:</strong> Responsive</p>

  <p><strong>Codes:</strong> No code</p>

  <p><strong>Warranty:</strong> Identified from the Ohms system. If within a warranty period, 
  invoke the repair process.</p>

  <p><strong>Key Information:</strong> If a pop-up appears (e.g., Gas No Access: HF, NA, 
  or CI code, No Repair: NR code, or ALMO), continue to order a repair and contact the RPIT Gas Team.</p>

  <p><strong>Outcome:</strong> Log job on T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const claimforDamage = new ContentR(
  "claimforDamage",
  "Claim for Damage",
  "",
  `
  <p>Tenants must ensure the contents of their home are adequately insured as the Council will 
  not compensate for unexpected damage caused to fittings or personal possessions when the Council is not at fault.</p>
  
  <p>When the Housing Service carries out major work which spoils decorations (for example, 
  modernisation or extensive re-plastering), customers may be able to claim money to help redecorate. 
  This is called a discretionary payment, and the team responsible for carrying out the work should be contacted.</p>

  <p>If a worker causes damage to possessions when carrying out a standard repair, 
  please contact a Senior or Team Leader for advice.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const clothesPost = new ContentR(
  "clothesPost",
  "Clothes Post",
  "",
  `
      <h3>Category Fault</h3>
      <p>Clothes Posts</p>
      
      <h3>Contract</h3>
      <p>Responsive</p>
      
      <h3>Codes</h3>
      <p>N/A</p>
      
      <h3>Warranty</h3>
      <p>Identified from the Ohms system. If repair is identified as within a warranty period, 
      invoke the warranty repair process.</p>
      
      <h3>Key Questions and Information</h3>
      <p>Place orders for communal areas only.</p>
      <p>If there is a pop-up i.e. for Gas No Access: HF, NA or CI code, No Repair: NR code, or 
      ALMO, continue to order a repair (if applicable) then immediately contact the RPIT Gas Team.</p>
      
      <h3>Recharge</h3>
      <p>N/A</p>
      
      <h3>Outcome</h3>
      <p>Only log a job if in comm drying area (we do not do individual properties) and book 
      non-appointed job on T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const communalArea = new ContentR(
  "communalArea",
  "Communal Area",
  "",
  `
 <h3>Category Fault</h3>
    <p>N/A</p>
      
  <h3>Contract</h3>
     <p>Responsive</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const concrete = new ContentR(
  "concrete",
  "Concrete",
  "",
  `
  <h3>Category Fault</h3>
     <p>Concrete Repairs</p>
      
  <h3>Contract</h3>
    <p>Responsive</p>
      
  <h3>Warranty</h3>
    <p>Identified from the OHMS system. If repair is identified as within a warranty period, 
    invoke the warranty repair process.</p>
      
  <h3>Key Questions and Information</h3>
    <p>Examples of Concrete Repairs: Lintels, Sills, Coping Stones, Canopies, Marionette 
    Walkways/Private Balconies, Columns, and Beams.</p>
    <p>If there is a pop-up i.e. for Gas No Access: HF, NA or CI code, No Repair: NR code, or 
    ALMO, continue to order a repair (if applicable) then immediately contact the RPIT Gas Team.</p>
      
  <h3>Recharge</h3>
    <p>N/A</p>
      
  <h3>Outcome</h3>
    <p>Order Remedy Repair on T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const dampandMould = new ContentR(
  "dampandMould",
  "Damp and Mould",
  "",
  `
  <p>Apply Halophane Treatment (go to P2P Damp) put the job under the following:</p>
      <ul>
          <li>Workstream - Painting Programme</li>
          <li>Job Code - work cat - Damp</li>
      </ul>

  <p>Back out of job (green arrow) and someone will be in contact to book an appointment.</p>
  <p>Any jobs that need chasing please log a chase call on T-Mobile.</p>
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);


const districtHeatingSwitch2Setup = new ContentR(
  "districtHeatingSwitch2Setup",
  "District Heating Switch2 Setup",
  "",
  `
   <p>New tenants do not have to register with Switch2 when they move into their new property; 
   it is done automatically on the first Wednesday after the property is let.</p>

   <p>If a tenant gets the keys early, then there will probably be a delay with their card. 
   If this is the case, they will have to call us and we will have to set up the account 
   earlier, but we must stress: <span class="important">if there is no power on, then there 
   will be no heating, so always check this first with the customer.</span></p>

  <h3>Freehold - District Heating</h3>

  <p>If a customer has bought their property but we still maintain the district heating, 
  when logging a job on T-Mobile, start the order comments with <strong>SOLD</strong>, 
  then the description of the repair.</p>

  <h3>Advice for New Tenants Who Have Had a Heat Meter Installed</h3>

  <ul>
      <li>The heating, hot water, or the heat meter will not work until there is power on at 
      the property. So, a new tenant will have to organize this first.</li>
      <li>When the power is sorted out, the meter will be reset back to zero by the previous 
      tenant.</li>
      <li>Tenants can then press the emergency credit button, and this will give them 
      <strong>£10 emergency credit</strong> (this will have to be paid back). This will last 
      them until the account is set up and the card ordered (see below).</li>
  </ul>

  <h3>Automatic Account Setup</h3>

  <ul>
    <li>When properties are let, an account will automatically be set up with Switch2 for the 
    new tenant, and a barcode will be sent by first-class post in a letter. Tenants can use 
    this barcode to top up their meter until the new payment card arrives (this usually takes 5 
    working days). This can be used at any shop with a PayPoint or Post Office.</li>
    <li>If they wish to receive the package (if it's not left in the property), they can call 
    <strong>27 35595</strong> direct and we will send one out. This package has information 
    about the heat meter and the payment options, including an application for Direct Debit.</li>

  <h3>Lost or Missing Cards</h3>

  <ul>
      <li><strong>Lost cards:</strong> Ask customers to call <strong>0333 321 2010.</strong></li>
      <li><strong>Chase their meter card:</strong> Ask customers to contact Switch2 at <strong>0333 321 2010.</strong></li>
  </ul>

  <h3>Payment and Suppliers</h3>

  <p>Tenants pay the council and will not be able to look for alternate suppliers.</p>
  <p>Switch2 handles our billing and accounts, and fits and maintains the meters.</p>
  
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "03/03/2025", name: "Shahzad Athar" }
);

const doorFurniture  = new ContentR(
  "doorFurniture",
  "Door Furniture",
  "",
  `
  <h3>Category Fault</h3>
  <p>Door Furniture Repairs</p>

  <h3>Contract</h3>
  <p>Responsive</p>
  
  <h3>Warranty</h3>
  <p>Identified from the OHMS system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

  <h3>Key questions and information</h3>
  <ul>
      <li>Ask the tenant for details of door type (i.e., PVCu, Wood, Other) for entry into T-Mobile.</li>
      <li>How was the damage caused? If caused by tenant, inform the tenant this will be logged
      as a recharge.</li>
  </ul>

  <h3>Recharge</h3>
  <p>N/A</p>

<h3>Outcome</h3>
  <ul>
      <li>Order Remedy Repair on T-Mobile.</li>
      <li>If due to deliberate damage and not agreed to recharge, do not raise a repair unless 
      it's a health & safety (H&S) issue.</li>
  </ul>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "03/03/2025", name: "Shahzad Athar" }
);

const drainage  = new ContentR(
  "drainage",
  "Drainage",
  "",
  `
  <h3>Category Fault</h3>
  <p>N/A</p>

  <h3>Repairs</h3>
  <ul>
      <li>Repairs to Drainage System.</li>
      <li>Remedy Blocked or Leaking Foul Drain.</li>
      <li>Remedy Blocked or leaking soil stack.</li>
  </ul> 

  <h3>Contract</h3>
  <p>Responsive</p>

  <h3>Warranty</h3>
  <p>Identified from the OHMS system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

  <h3>Key Questions and Information</h3>
  <ul>
      <li>See Yorkshire Water Procedure. If unsure and for further information concerning Communal Drainage Repairs.</li>
      <li>If there is a pop-up (i.e., for Gas No Access: HF, NA or CI code, No Repair: NR code, or ALMO), 
      continue to order a repair (if applicable) then immediately contact the RPIT Gas Team.</li>
  </ul>

  <h3>Recharge</h3>
  <p>N/A</p>

  <h3>Outcome</h3>
  <ul>
      <li>Log job on T-Mobile.</li>
  </ul>

  
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "03/03/2025", name: "Shahzad Athar" }
);

const disrepair  = new ContentR(
  "disrepair",
  "Disrepair",
  "",
  `
<p>The team's main responsibilities are:</p>

  <ul>
      <li>Dealing with Right to Repair</li>
      <li>Disrepair inspections</li>
      <li>Inputting work schedules</li>
      <li>Producing reports for Legal</li>
      <li>Liaison with Legal</li>
      <li>Liaison with Repairs and Maintenance</li>
      <li>Monitoring timescales</li>
  </ul>

  <p>Please check in <strong>"warning section"</strong> to see if a disrepair is in process and if a 
  non-urgent job wants logging, please call the number in warning box first before logging a job on 
  T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const electricalandHeating = new ContentR(
  "electricalandheating",
  "Electrical and Heating",
  "",
  `
  <h3>Electrical Items</h3>
  <p>For electrical fittings, additional sockets, etc., email 
  <a href="mailto:ElectricalSheffield@Sheffield.go.uk" class="email">ElectricalSheffield@Sheffield.go.uk</a>.</p>
  
  <h3>Heating Items</h3>
  <p>For extra radiators, email 
  <a href="mailto:GasSheffield@sheffield.gov.uk" class="email">GasSheffield@sheffield.gov.uk</a>.</p>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "24/02/2025", name: "Shahzad Athar" }
);

const electricalTesting  = new ContentR(
  "electricalTesting",
  "Electric Testing",
  "",
  `
  <p>If the system states <strong>"Live Electrical Test",</strong> this is ordered by RPIT. 
  Any enquiries relating to this should be directed to the relevant hub.</p>

  <p><strong>If there has been a Mutual Exchange,</strong> these are dealt with by 
  <a href="mailto:HME_GandE_Reinstates@sheffield.gov.uk">HME_GandE_Reinstates@sheffield.gov.uk</a>.</p>

  <p><strong>Domestic Electrical Tests</strong> are carried out every 5 years.</p>

  <h3>Key Questions and Information</h3>

  <p><strong>If there is a pop-up status for "VT",</strong> this indicates an electrical testing 
  no access issue. Contact <a href="mailto:ElectricalSheffield@sheffield.gov.uk">ElectricalSheffield@sheffield.gov.uk</a> 
  for an appointment to be made with the tenant.</p>

  <h3>Can You Please Advise All Officers Involved with the Following:</h3>
  <ul>
      <li>New Tenancy</li>
      <li>Electric & Gas Reinstate</li>
      <li>Boiler Installation</li>
      <li>Decant/Disrepair</li>
      <li>Cap off make safe</li>
      <li>Disconnect/Reconnect Electric or Gas Cooker</li>
      <li>Mutual Exchange</li>
      <li>Electric & Gas Service Check</li>
      <li>Dispersed Properties</li>
  </ul>

  <p>Email all relevant information above to 
  <a href="mailto:HME_GandE_Reinstates@sheffield.gov.uk">HME_GandE_Reinstates@sheffield.gov.uk</a>.</p>

  <h3>Contact Information for Specific Enquiries:</h3>
  <ul>
      <li>Gas Service enquiries: <a href="mailto:GasSheffield@sheffield.gov.uk">GasSheffield@sheffield.gov.uk</a></li>
      <li>Electric enquiries: <a href="mailto:ElectricalSheffield@sheffield.gov.uk">ElectricalSheffield@sheffield.gov.uk</a></li>
  </ul>
  
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "03/03/2025", name: "Shahzad Athar" }
);

const externalContractors   = new ContentR(
  "externalContractors",
  "External Contractors",
  "",
  `
  <p>If a tenant calls and the job is with a contractor, 
  please call the relevant team in the back office if needing to chase.</p>
  
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "27/02/2025", name: "Shahzad Athar" }
);

const externalDoorLock   = new ContentR(
  "externalDoorLock",
  "External Door Lock",
  "",
  `
  <h3>Category Fault</h3>
      <p>External Door Locks Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key Questions and Information</h3>

      <p>If a member of staff from an Area Housing Office requests a lock change to a property, 
      order remedy repair.</p>
      <p>If there is a pop-up (e.g., Gas No Access: HF, NA or CI code, No Repair: NR code, or ALMO), 
      continue to order a repair if applicable and immediately contact the RPIT Gas Team.</p>

  <h3>Recharge</h3>

      <p>N/A</p>

  <h3>Outcome</h3>

      <p>Log a repair on T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const externalDoor   = new ContentR(
  "externalDoor",
  "External Door",
  "",
  `
  <h3>Category Fault</h3>
      <p>External Door Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key questions and information</h3>

      <p>Ask tenant for details of door type (PVCu, Wood, Metal, or Other).</p>
      <p>Check programme details (e.g., Prior to Painting). If work is due, 
      defer the repair to programme works.</p>
      <p>If a result of Burglary / Vandalism, then check if the customer has a Police crime 
      reference number.</p>
     
  <h3>Recharge</h3>

      <p>If there is no Crime Reference Number, advise the tenant that a job will be raised 
      as a <strong>RECHARGE</strong>. </p>

  <h3>Outcome</h3>

      <p>If a result of Burglary / Vandalism, then a Police crime reference number is required 
      if repair is because of Burglary / Vandalism. Where there is no Crime Reference Number, 
      board up/make safe only.</p>
      <p>Order Remedy Repair</p>.
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const flatRoof   = new ContentR(
  "flatRoof",
  "Flat Roof",
  "",
  `
  <h3>Category Fault</h3>
      <p>Flat Roofing Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process. </p>
  
  <h3>Key questions and information</h3>

      <p>If there is a pop-up (Gas No Access: HF, NA or CI code, No Repair: NR code, or ALMO), 
      continue to order a repair if applicable and immediately contact the RPIT Gas Team.</p>
      <p>Order Remedy Repair. Start order comments with "Storm Damage" if required.</p>
      <p>If leaking into property, order as Urgent Leak.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const floororStaircase   = new ContentR(
  "floororStaircase",
  "Floor or Staircase",
  "",
  `
  <h3>Category Fault</h3>
      <p>Floors or Staircase Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process. </p>
  
  <h3>Key questions and information</h3>

      <p>Not available</p>

  <h3>Recharge</h3>

      <p>If there is a pop-up (Gas No Access: HF, NA or CI code, No Repair: NR code, or ALMO), 
      continue to order a repair if applicable and immediately contact the RPIT Gas Team.</p>

  <h3>Outcome</h3>

      <p>Order Remedy Repair.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const footpathandSteps   = new ContentR(
  "footpathandSteps",
  "Footpath and Steps",
  "",
  `
 <h3>Category Fault</h3>
      <p>Footpath and Steps Repairs</p>
 <h3>Contract</h3>
      <p>Responsive</p>
 <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key questions and information</h3>

      <p>Order Repairs only to Main Footpath to Property and to Entrance doors.  Need to 
      identify the type of Material i.e., Concrete, Tarmac.</p>

      <p>If there is a pop-up i.e. for Gas No Access: HF, NA or CI code, No Repair: NR code, 
      or ALMO, continue to order a repair (if applicable) then immediately contact the 
      RPIT Gas Team.</p>

  <h3>Outcome</h3>

      <p>Log a repair on T-Mobile and book a non-appointed visit.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const fireJobs  = new ContentR(
  "fireJobs",
  "Fire Jobs",
  "",
  `
<p>If there is a fire at property, please email the contacts below.</p>

  <ul>
      <li>Steve Willis Operations Manager <a href="mailto:steve.willis@sheffield.gov.uk">steve.willis@sheffield.gov.uk</a></li>
      <li>Steve Pitts Team Leader <a href="mailto:steve.pitts1@sheffield.gov.uk">steve.pitts1@sheffield.gov.uk</a></li>
      <li>Gordon Hampshire Team Leader <a href="mailto:gordon.hampshire@sheffield.gov.uk">gordon.hampshire@sheffield.gov.uk</a></li>
  </ul>

  <p>Inspection following Fires. Fire Job orders. Post Inspections. Method Statements.</p>

  <h3>Sheltered</h3>

  <ul>
      <li>Sheltered Repairs</li>
      <li>Interim Repairs</li>
      <li>High Support</li>
      <li>Inputting work schedules</li>
  </ul>

  <h3>Permissions</h3>

  <p><strong>All requests must be put in writing to:</strong></p>
  <p>Sheffield Council Housing Service<br>PO Box 5967<br>S2 9GH</p>
  <p>Inform the customer that if they are over £250 (Total Indebtedness) in arrears their Permissions 
  request is unlikely to be granted.</p>
  <p>You must have written permission from the Housing Service to alter or improve your home. 
  This includes:</p>

  <ul>
      <li>Putting up any form of extension or building</li>
      <li>Adding to, changing, or replacing the fixtures, fittings and appliances provided by us.</li>
      <li>Altering essential gas, electricity, and water services</li>
      <li>Putting up a radio or television aerial or satellite dish</li>
      <li>Decorating the outside of your home</li>
      <li>Removing internal walls</li>
      <li>Insulation (Walls & Lofts)</li>
  </ul>

  <p>It is your responsibility to seek and get any planning or building regulation approvals.</p>
  <p>Permissions for loft conversions, conservatories, spiral staircases, swimming pools and extensions 
  are highly unlikely to be granted due to extra maintenance costs and potential structural problems.</p>
  <p>It is also unlikely that we will give permissions for stairlifts in communal areas, as it is more 
  appropriate for tenants that require this to be rehoused.</p>
  <p>Every request for permission will be assessed using criteria and conditions appropriate to the request. 
  These criteria and conditions will be explained in the letter sent in reply to the customer's permission 
  request.</p>

  <h3>Team's main responsibilities</h3>

  <ul>
      <li>Permission visits</li>
      <li>Sign off visit once permission completed.</li>
      <li>Joint visits with Area Teams</li>
      <li>Joint visits with Leaseholder Team</li>
      <li>Process Management of Permissions</li>
  </ul>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);


const garageorDetachedOutbuilding = new ContentR(
  "garageorDetachedOutbuilding",
  "Garage or Detached Outbuilding",
  "",
  `
  <h3>Category Fault</h3>
      <p>Garages and Detached Outbuildings</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key questions and information</h3>

      <p>Do not place orders for Sheds.</p>

  <h3>Outcome</h3>

      <p>Log a job on T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const gasandDomesticSystems   = new ContentR(
  "gasandDomesticSystems",
  "Gas and Domestic Systems",
  "",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Category Fault</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>Domestic Gas system</p>
  </div>
  </details>
  
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Codes</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>Remedy Blocked Flue to Boiler</li>
      <li>Remedy TOTAL Loss of Heating & Hot Water (Gas Heating)</li>
      <li>Repair Gas Fired Central Heating (where other heating available)</li>
      <li>Repair Gas Fire/Wall Heater/Gas Boiler (where there is NO other form of heating available)</li>
      <li>Repair leaking Heating Pipe, Tank, Cistern, Radiator etc.</li>
      <li>Remedy no Hot Water (where other heat is available)</li>
      <li>Repair Warm Air Central Heating system</li>
      <li>Remedy Total/Partial loss of Gas Supply</li>
      <li>Recall non chargeable repair</li>
  </ul>
  </div>
  </details>
  
  <details class="accordion">
    <summary class="accordion-header">
        <h3>Warranty</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <details class="details-accordion">
            <summary>
                <p>
                    Identified from the T-MOBILE system. If repair is identified as within a warranty period, 
                    invoke the warranty repair process for new boilers 
                    (Mark as <strong>'WARRANTY RECALL</strong> - Repair to faulty boiler, still in warranty 
                    or call obsolete on 01142736978.
                </p>
            </summary>
            <div class="details-accordion-content">
            </div>
        </details>
<details class="details-accordion">
            <summary>
                <h3>Key questions and information</h3>
            </summary>
            <div class="details-accordion-content">
                <p>
                    Check if the repair is regarding no water flowing out of the taps, or whether there is 
                    water flowing, and it is cold. If there is no water flowing this should be a 
                    <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx"> 
                    plumbing repair</a>.</p>
                <p>
                  If a customer has a pre-pay meter but has no gas heating at all, either from a boiler 
                  or gas fire (if present), ask the customer to check that the meter has credit and that the 
                  heating room stat is turned up high enough.</p>
                <p>
                  Where arranging a gas service inform the Customer that if they have a gas fire it should 
                  be switched off and not used on the day of service.</p>
            </div>
        </details>
    </div>
</details>



      
  
  

  

  

  <h3>Boiler Warning Codes</h3>

  <p>If a customer call stating their heating isn't working, and they give the fault code of 
  <strong>F28</strong> or <strong>F29</strong>, this means that there is <strong>no gas going 
  to the boiler</strong>. Please go through the check list below with tenant.</p>

   <table border="1" cellpadding="5">
      <tr>
          <th></th>
          <th>Heating Issue</th>
          <th>Low Pressure</th>
          <th>No Gas</th>
          <th>No Power</th>
      </tr>
      <tr>
          <td>Vaillant Ecotec Pro/Sustain</td>
          <td>Thermostat, Programmer or Low Pressure</td>
          <td>F22, 0.0bar</td>
          <td>F28, F29</td>
          <td>Boiler display blank</td>
      </tr>
      <tr>
          <td>Vaillant Ecomax</td>
          <td>Thermostat, Programmer or Low Pressure</td>
          <td>F22, F25</td>
          <td>F28, F29</td>
          <td>Boiler display blank</td>
      </tr>
      <tr>
          <td>Baxi Duo Tec</td>
          <td>Thermostat, Programmer or Low Pressure</td>
          <td>E119</td>
          <td>E133</td>
          <td>Boiler display blank</td>
      </tr>
  </table>
  
<img class="knowledge-img" src="../../../images/Repairs/meter-and-credit.jpg" alt="test2" loading="lazy" referrerpolicy="no-referrer" />


  <p>The fault code has been missing a lot lately from the job notes as asked for in the prompt 
  text box for central heating repairs.</p>
  <p>This has meant we have had an increase of <strong>F28 / F29 faults codes</strong> (avoidable jobs).</p>
  <p>92% of the time this is a meter fault which is more common now with a smart meter i.e., 
  it's not switched on / not been reset after the tenant has run out of credit.</p>
  <p>If the customer describes this fault, please ask them to:</p>

  <ul>
      <li>Check they have credit on their meter.</li>
      <li>The meter display is working.</li>
      <li>The meter is on / not shut down due to safety lock out.</li>
  </ul>

  <p>If the customer answers <strong>no</strong> to any of these questions they will need to 
  add credit or contact their supplier to rectify the meter fault or they will be told how to 
  switch on/reset the meter.</p>
  <p>If the customer answers <strong>yes</strong> to all 3 questions, they simply must press 
  and hold the reset button on the boiler for 3 seconds, this button is a flame with an X 
  through it see pic below.</p>

  IMAGE

  <p>If this fails and it still goes to F28 (not F29), then it is a genuine heating repair:</p>

  <ul>
      <li>The gas meter has run out of gas.</li>
      <li>This is a new tenant that hasn't had the gas reinstated.</li>
  </ul>

  <p>The above will apply to Vaillant boilers only. However, for the new Duo Tecs we are 
  installing in certain areas, the code <strong>E133</strong> will appear.</p>

  <p>Other than these boilers, none of the older ones will have digital displays. 
  However, you should still:</p>

  <ul>
      <li>Ask the customer to check the gas meter.</li>
      <li>Check T-MOBILE to find out if the property has been recently vacant, and whether 
      a gas reinstatement was ordered.</li>
  </ul>

<h3>Central Heating Replacement Programme</h3>

  <p>On some occasions, there is an overlap with the installation of new systems and the 
  annual gas service. Therefore, if a tenant rings to organise their gas service, but states 
  that they have just had a new boiler / central heating system installed, please contact 
  <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">HM&E</a> 
  and they will advise on what steps you need to take with the gas service. This will 
  generally consist of confirming to the tenant that we will not need to service the gas 
  appliances this year, and delaying the service on the system, to allow HM&E to get the 
  paperwork scanned.</p>

<h3>Cowls</h3>

  <p>If the tenant has a gas fire and cowl has blown off, please put a gas job on using the 
  <strong>"INSTALL GC1 TERMINAL"</strong> code on OHMS and change to <strong>PL FAO After 
  trades</strong>. If there is <strong>no</strong> gas fire, then raise job for WAH to replace 
  cowl on chimney.</p>

<h3>Gas Meters</h3>

  <p>Anything related to the Gas Meter should be directed to the supplier not us. If unsure, 
  please ask.</p>

<h3>Heating repairs during warm weather</h3>

  <p>New boilers will show a "Fault Code" on the boiler display "F??" if there is a problem 
  with the boiler / heating system.</p>
  <p>Most older systems are thermostatically controlled but may not have fault code.</p>
  <p> If the weather is warm, the heating may not come on because it is too hot for it to 
  activate.</p>
  <p> Please ask callers what the room-stat is set at before ordering a job that may be 
  unnecessary. If the customer says there is a fault code on the boiler display, a job will 
  need to be ordered. If there isn't a fault code, this would suggest the boiler is fine, 
  just too hot to be activated.</p>

<h3>Leaking Pipe</h3>

  <p>Before registering a repair for leaking pipes, you need to establish if it is heating or 
  plumbing. If it is heating, then it will mean pressure has dropped on boiler and may show 
  error code F22 or drop on pressure gauge. If not, then it will be a leak on the domestic 
  plumbing so not for gas section.</p>

<h3>Outcome</h3>

  <p>Order Remedy Repair</p>

<h3>Pre-inspection</h3>

  <p>If a customer requests an inspection for a gas heating appliance in their property, 
  please refer to <strong>HM&E</strong>.</p>

  <h3>Stolen Boiler</h3>

  <p>If a boiler has been stolen, contact <strong>RPIT</strong>. Do not contact HM&E. Please 
  raise an <strong>EM</strong> job and advise the tenant we need a crime ref number so then 
  they can be referred to <strong>RPIT</strong>.</p>
  <p>If a stolen boiler is reported, a 'make safe gas and water' job should be raised by the 
  service center agent or anyone that takes a stolen boiler call. This should be raised on 
  the "gas escape / fumes" code. If a joiner is required to board, then a repair will need to 
  be put on for that to meet the gas fitter.</p>

<h3>Gas after trades</h3>

  <p>If gas after trades are required following work, please contact the 
  <a href="mailto:ElectricalSheffield@sheffield.gov.uk?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=108&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">Gas Team</a> 
  to ask for work to be done.</p>
  <p><strong>Do not put a job on.</strong></p>

  <h3>Trunking</h3>

  <p>To order trunking to heating pipes:</p>

  <ul>
      <li>Type in "Gas" into diagnosis search on T_MOBILE</li>
      <li>Select the "Gas after trades" option</li>
      <li>Type into your description what is required and where.</li>
      <li>Save changes and green arrow back out of the job to leave in "New" status.</li>
  </ul>

  <p>This will then get picked up with the relevant section to contact the tenant to arrange 
  when they have the resources to carry this out. Please refrain from giving any specific 
  timescales.</p>

<h3>Urgent Gas Repair</h3>

  <p><strong>Monday to Thursday.</strong> You can put urgent repairs on the system until close 
  of play and will be visited within 24 hours. Please stress to tenants that it may not be the 
  same day but will be next. Obviously, if the tenant is not going to be in at any point during 
  the 24hrs please put this info in the description.</p>
  <p><strong>Friday.</strong> You can put urgent repairs on up until 5.30pm. Again, advise the 
  tenant that it will be a 24-hour call out, and if not visited on Friday, it will be Monday. 
  Inform customer to call out of hours if becomes worse over the weekend.</p>

<h3>Smoke Alarm</h3>
  <p>There are 2 types of smoke alarms battery and mains powered. Please ask relevant questions
  to establish which type is in the property.</p>

  <ul>
      <li>Mains powered will be logged as an electrician.</li>
      <li>Battery will be logged as a joiner.</li>
  </ul>

<h3>Carbon Monoxide Alarm</h3>

  <p>RPIT have a program to fit around 17000 mains wiring alarm which will take about 6 to 7 
  years.</p>
  <p>R&M - HM&E are fitting a battery CO alarm on the gas service if a main's one is not 
  currently fitted in the property / correct place.</p>
  <p>We will fit a battery CO alarm if requested. (If the customer does not have one already 
  fitted or it's gone faulty)</p>
  <p> We must fit it within 28 days of the request as well, but we only have to fit them near 
  gas fires and gas boilers, not near gas cookers or gas hobs. </p>
  <p>The easy way to tell if its battery or mains wired alarm in the property is the battery 
  alarm's we are fitting are a AICO EI208, so if they can't see this model number it's most 
  likely a mains power one.</p>

IMAGE

  <p>As for fitting the battery alarm any trade can do them, but if the operative is not from 
  the gas section, they need to confirm with the gas section were to locate the alarm or speak 
  to <strong>AICO </strong>technical for location advice.</p>
  <p> Replacing Mains alarms is still down for electricians. </p>  


  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const gasReinstateandUncapServicesorAppointments  = new ContentR(
  "gasReinstateandUncapServicesorAppointments",
  "Gas Reinstate /Gas Uncap Services / Appointments",
  "",
  `
<h3>Cancel an Appointment</h3>

  <p>If a tenant rings to cancel an appointment as they have no gas, <strong>do not</strong> 
  cancel the appointment. We will still visit, and if there is no gas, we cap off. 
  This ensures that the tenant will ring back to have the appliances uncapped and serviced. 
  If we just cancel, then there is no guarantee that the tenant will ring back.</p>

<h3>New Tenant</h3>

  <p>If a new tenant makes contact regarding a gas reinstate, then these need to be passed 
  through to <strong>HM&E</strong> if no answer please email 
  <a href="mailto:HME_GandE_Reinstates@sheffield.gov.uk">HME_GandE_Reinstates@sheffield.gov.uk</a>.</p>
  <p>If a new tenant makes contact and reports that they have no heat or hot water, please 
  first check that their gas has been reinstated <strong>before</strong> ordering a repair.</p>


<h3>Existing Tenant</h3>

  <p>As part of the annual gas service, if we arrive and the tenant has no gas on the meter, 
  we cap off the supply. We then wait for the tenant to contact us and arrange an "uncap and 
  service".</p>
  <p>If the tenant makes contact within two weeks of the original cap off, then this can be 
  put through to <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/Documents/Emails/Roof%20Enquiry.msg?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=258&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">Gas Team</a> direct on <a href="mailto:steve.pitts1@sheffield.gov.uk">GasSheffield@sheffield.gov.uk</a>.</p>
  <p>If job and it is more than two weeks, then these need to be put through to 
  <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">HM&E Gas</a> 
  to order a new job, and book the appointment.</p>
  <p>There are occasions where a tenant may have a <strong>gas meter changed</strong>. When 
  the meter is changed, the supplier generally asks the tenant for a copy of the most 
  up-to-date service certificate.</p>
  <p>If they cannot provide this, then the supplier will cap them off. In cases like this, 
  you just need to raise a repair, on an <strong>URGENT</strong>, to "Reconnect and safety 
  check after meter change", using the "No heat / hot water code".</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const gateorFence  = new ContentR(
  "gateorFence",
  "Gate or Fence",
  "",
  `
<h3>Category Fault</h3>

  <p>Gates and Fences</p>

<h3>Contract</h3>

  <p>Responsive</p>

<h3>Codes</h3>

  <p>N/A</p>

<h3>Warranty</h3>

  <p>N/A</p>

<h3>Key questions and information</h3>

  <p>Is the repair a communal repair? If not, these repairs are generally not our 
  responsibility. However, if there is a Health & Safety issue, we will do the repair/ make 
  safe. If not sure speak with a team leader or senior.</p>
  <p>If there is a pop-up i.e. for Gas No Access: HF, NA or CI code, No Repair: NR code, 
  or ALMO, continue to order a repair (if applicable) then immediately contact the 
  <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">RPIT Gas Team</a>.</p>

<h3>Recharge</h3>
  <p>N/A</p>

<h3>Outcome</h3>
  <p>Order <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/Lists/Communal%20Repair/AllItems.aspx">Communal Repairs</a> (if communal repair or if it's a health and safety issue)</p>
  
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const glazingincludingfailedDoubleGlazedUnits = new ContentR(
  "glazingincludingfailedDoubleGlazedUnits",
  "Glazing Including Failed Double Glazed Units",
  "",
  `
<h3>Category Fault</h3>

  <p>Glazing Repairs Including Failed Double-Glazed Units</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>If there is a <strong>Police Crime Reference Number</strong>, Order Remedy Repair.</p>
  <p>If the glass in the window/door has gone through completely, put a board-up on straight 
  away for H&S. If only a crack or chip, tenant needs to get a crime reference number 
  1st before we put any job on.</p>
  <p>If the customer has a Crime Reference Number, you must also order a follow up re-glazing 
  job and appoint it accordingly.</p>
  <p>Please note it is not the responsibility of the joiner carrying out the board up to do it.</p>
  <p>If there is no Crime reference Number advise tenant that it would be a recharge.</p>
  <p>When ordering <strong>all</strong> double-glazing repairs, the tenant must be informed 
  that the first appointment will be to measure the unit only - it is not to carry out the 
  repair.</p>
  <p>As all double-glazed units are individually sized, they will need to be manufactured 
  hence the first visit is purely to measure the window.</p>
  <p>If there is a pop-up i.e., for Gas No Access: <strong>HF</strong>, <strong>NA</strong> 
  or <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, 
  continue to order a repair (if applicable) then immediately contact the 
  <strong>RPIT Gas Team</strong>.</p>

<h3>Recharge</h3>
  <p>If the tenant admits breaking glass, an order should only be placed if the tenant agrees 
  to be recharged. (Unless gone through both panes and is a security issue) then raise a job 
  for board up only.</p>

<h3>Outcome</h3>
  <p>If caused by tenant (<strong>no Police Crime Reference Number</strong>) advise tenant, 
  it will be a recharge and order job accordingly.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const gutteringandRainwaterPipes  = new ContentR(
  "gutteringandRainwaterPipes",
  "Guttering and Rainwater Pipes",
  "",
  `
<h3>Category Fault</h3>

  <p>Guttering and Rainwater Pipe Repairs</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>You need to identify the type of material i.e., Plastic, Timber, or Metal.</p>
  <p>If there is a pop-up i.e. for Gas No Access: <strong>HF</strong>, <strong>NA</strong> or 
  <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, 
  continue to order a repair (if applicable) then immediately contact the 
  <strong>RPIT Gas Team</strong>.</p>

  <h3>Appointments</h3>

  <p>Ensure when ordering repairs to gutters that you always enter WAH, not PB. This will 
  ensure that the correct WAH diary comes up.</p>

  <h3>Recharge</h3>

  <p>N/A</p>

  <h3>Outcome</h3>

  <p>Order Remedy Repair and remember to start with Storm Damage if caused by strong winds.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const handyperson  = new ContentR(
  "handyperson",
  "Handyperson",
  "",
  `
  <p>The handyperson scheme is available for vulnerable Council tenants to do certain smaller
  jobs in the home.</p>

<h3>Criteria of the work</h3>

  <p>Work could be carried out by an able-bodied person and doesn't require any specialist 
  equipment or training.</p>

  <h3>Definition of service users</h3>

  <h4>Individual tenant</h4>
  <ul>
      <li>In and around the tenant's home</li>
      <li>Specific criteria: over 60; or those with a disability or severe health problem; 
      or showing an H or E code.</li>
  </ul>

  <h4>Community Work</h4>
  <ul>
      <li>In either communal area around council owned properties or land</li>
      <li>Ordered by an officer.</li>
      <li>Work that fits the scope and intention of the service</li>
  </ul>

  <h3>Clarification points for types of work</h3>

  <h4>Electrical Work</h4>
  <p>No HM&E work to be carried out by Handyperson service, including electrical light 
  fittings.</p>


  <h4>Specialist equipment or chemicals</h4>
  <p>Handyperson cannot use any heavy-duty equipment or chemicals that require specialist 
  training, i.e., graffiti removal or tenant's own garden equipment.</p>

  <h4>Ordering Materials</h4>
  <p>Handyperson does not have the facility to order materials, i.e., fence panels, etc. 
  these need to be provided by the tenant or by the officer ordering the job should already 
  have these available.</p>

  <h3>Type of work carried out</h3>

  <h4>Odd jobs</h4>
  <ul>
      <li>Hang mirror / pictures</li>
      <li>Put up / take down shelves</li>
      <li>Put up a cabinet</li>
      <li>Put up / take down curtains</li>
      <li>Fit curtain / shower rails / Blind</li>
  </ul>

  <h4>Decoration</h4>
  <ul>
      <li>Painting a small area (after leak or plastering)</li>
      <li>Fit reflective foil behind a radiator</li>
      <li>Grout small area of tiles</li>
      <li>Apply small area of sealant</li>
  </ul>

  <h4>Furniture</h4>
  <ul>
      <li>Erect flat pack furniture including garden furniture (only small items such as 
      bookcases or units measuring approx. 1 meter x 1 meter or smaller).</li>
      <li>Move furniture around the home.</li>
      <li>Repair broken furniture</li>
  </ul>

  <h4>Bathroom or Kitchen accessories</h4>
  <ul>
      <li>Replace the toilet seat with a new one purchased by the tenant</li>
      <li>Fix plug to sink.</li>
      <li>Fit soap dispenser</li>
      <li>Fit new 2D bulbs in bathroom*</li>
      <li>Fit splash back to cooker</li>
      <li>Fit new battery in oven.</li>
      <li>Connect / disconnect dishwasher / washer machine.</li>
      <li>Secure appliance.</li>
      <li>Replace fridge seal.</li>
      <li>Replace fuse to appliance</li>
      <li>Adjust worktop to fit appliance: Refer to permissions procedure, RPIT</li>
  </ul>
  <p>*Replacing kitchen / bathroom light, the tenant to provide light bulb, Handyperson can 
  advise which bulb to purchase and will also fit the bulb.</p>

  <h4>Lighting or cables</h4>
  <ul>
      <li>Replace light bulbs (but will not supply bulbs)</li>
      <li>Fit light shades.</li>
      <li>Fit external solar security lights.</li>
      <li>Fit / Secure extension cables.</li>
      <li>Fit cable ties</li>
      <li>Secure trailing wires</li>
      <li>Fit screw covers</li>
  </ul>

  <h4>Flooring or carpet</h4>
  <ul>
      <li>Adjust door after new carpets fitted.</li>
      <li>Fix / Secure threshold</li>
      <li>Secure carpet</li>
      <li>Fit small area of flooring / carpet tiles</li>
  </ul>

  <h4>Door, window or lock</h4>
  <ul>
      <li>Fix / fit door chain</li>
      <li>Fix / replace door handles.</li>
      <li>Fit / replace doorbell.</li>
      <li>Fit digi door locks*</li>
      <li>Fit dead lock*</li>
      <li>Fit key safe / letterbox / milk box</li>
      <li>Fit bin locks</li>
      <li>Fit external cigarette box.</li>
      <li>Fit cat flap</li>
      <li>Fit window lock</li>
      <li>Clean the downstairs outside window.</li>
      <li>Apply frost film</li>
  </ul>

  <h4>Fence, shed or gate</h4>
  <ul>
      <li>Fix or repair fence panel</li>
      <li>Fix or repair gate</li>
      <li>Board shed window.</li>
      <li>Fit shed alarm.</li>
      <li>Fit lock to shed.</li>
  </ul>

  <h4>Outside or garden</h4>
  <ul>
      <li>Put up washing line / hook.</li>
      <li>Fit hose pipe to wall</li>
      <li>Put up hanging basket.</li>
      <li>Move or fill plant pots.</li>
      <li>Tidy part of garden / remove leaves.</li>
      <li>Trim hedge to clear access</li>
      <li>Fit / remove / secure sign to wall.</li>
      <li>Fit Recycle bin posts: Refer to Estates and Environmental Services Team</li>
      <li>Fit Posts: Not covered by the Handyperson Service as this requires a 'permit to dig'
      and the handypersons are not trained to carry out this.</li>
      <li>Gardening work: Handyperson cannot use any of the tenant's electrical equipment as 
      this will not have been PAT tested.</li>
  </ul>

  <h4>Grab rail</h4>
  <ul>
      <li>Fit / remove grab rail.</li>
  </ul>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const internalDoor  = new ContentR(
  "internalDoor",
  "Internal Door",
  "",
  `
<h3>Category Fault</h3>

  <p>Internal Door Repairs</p>

  <h3>Warranty</h3>#

  <p>Identified from the Ohms system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

  <h3>Key questions and information</h3>

  <p>Generally, need to be sceptical when interviewing tenants that are reporting a repair - potential 
  tenant recharge issue.</p>

  <h3>Recharge</h3>

  <p>Potential recharge</p>

  <h3>Outcome</h3>

  <ul>
      <li>If recharge advise tenant</li>
      <li>If ordering 3 doors or less - Order Remedy Repair</li>
      <li>If ordering more than 3 doors -- log more than 1 job on T-Mobile.</li>
  </ul>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const kitchenUnit  = new ContentR(
  "kitchenUnit",
  "Kitchen Unit",
  "",
  `
<h3>Category Fault</h3>

  <p>Kitchen Unit Repairs</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If the repair is identified as being within the warranty period,
  invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>There may also be a tenant Recharge issue if units have been damaged by tenants.</p>
  <p>If there is a pop-up i.e. for Gas No Access: <strong>HF</strong>, <strong>NA</strong> or 
  <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, 
  continue to order a repair (if applicable) then immediately contact the 
  <strong>RPIT Gas Team</strong>.</p>
  <p>Please note that any customer enquiries concerning outstanding Decent Homes (Investment) 
  work, or work to 'upgrade' kitchens should be directed to the 
  <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=277&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">Asset Management Team</a>.</p>

<h3>Recharge</h3>

  <p>Possible recharge</p>

<h3>Outcome</h3>

  <p>If Repair to unit - Order Remedy Repair</p>
  <p>If Recharge -- i.e damaged by tenant, please advise tenant and log recharge job 
  accordingly.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const liftorHoist  = new ContentR(
  "liftorHoist",
  "Lift or Hoist",
  "",
  `
    <ul>
      <li>Log a job on T-Mobile</li>
      <li>Back out of job green arrow</li>
      <li>Phone through to lift section on <a href="tel:0114 2734410">0114 2734410</a> to make aware.</li>
      <li>If passenger lift adds location of lift and any further information.</li>
  </ul>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);


const lostKeyorFob  = new ContentR(
  "lostKeyorFob",
  "Lost Key or Fob",
  "",
  `
<h3>Category Fault</h3>
  <p>Lost keys</p>

<h3>Codes</h3>
  <p>N/A</p>

<h3>Key questions and information</h3>
  <p>Check if the customer is elderly or vulnerable</p>

<h3>Recharge</h3>
  <p>Yes</p>

<h3>Outcome</h3>
  <p>Log recharge job on T-Mobile</p>

<h3>Lost Fob</h3>
  <p>If the tenant calls and has lost the fob (communal door) please refer to the local area housing office.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);


const newBuildPropertyDefectorEmergencyCallOut  = new ContentR(
  "newBuildPropertyDefectorEmergencyCallOut",
  "New Build Property Defect or Emergency Call Out",
  "",
  `
  <h3>Property Repairs</h3>

  <p>If a tenant calls to report a repair to new build properties, provide them with the contact details 
  of Equans:</p>
  <p>Telephone: 0800 019 0919 or 01709 766017</p>
  <p>Opening hours: Monday to Friday 8:30am to 4pm</p>
  <p>Email: <a href="mailto:yhm.customercare.uk-kmr@equans.com">yhm.customercare.uk-kmr@equans.com</a></p>
  <p>For emergency OOH repairs including bank holidays, please call 0800 019 0919 or 01709 766017. 
  No emails will be monitored OOH, so any emergency repairs will need to be called through.</p>

  <h3>Escalation using T-Mobile</h3>

  <p>There are 2 <strong>categories</strong> of notes:</p>

  <ul>
      <li>Chase Calls</li>
      <li>Important Must-Read Notes (you need someone to read them and act on them)</li>
  </ul>

  <p>Note: normal/general notes -- not important can be added normally without picking a category, 
  the notes will stay on the job as normal.</p>

  <h3>Business Continuity</h3>

  <p><a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx">OHMS Business Continuity Plan Form</a> 
  <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx">Logging an emergency 
  job when OHMS is down</a>.</p>
  <p>Systems are down -- T-Mobile -- apologise and request the tenant to call back.</p>
  <p>A Storm message will be played forewarning new callers.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const paintingCommunalArea  = new ContentR(
  "paintingCommunalArea",
  "Painting Communal Area",
  "",
  `
<h3>Painting Communal Area Service</h3>

  <ul>
      <li>An hour's work of minor painting i.e., small areas or tidy up work, in either communal areas 
      or around council owned properties or land.</li>
      <li>The work should fit within the scope and intention of the Handyperson Painting service.</li>
      <li>The work is ordered by a housing officer, warden or caretaker.</li>
  </ul>

<h3>Type of Painting Work</h3>

  <ul>
      <li>Internal Communal Areas including bin chutes and bin stores</li>
      <li>Small areas of painting including tidy up work.</li>
  </ul>

<h3>Community Centres</h3>

  <ul>
      <li>Small areas of painting including tidy up work</li>
  </ul>

<h3>Graffiti</h3>

  <ul>
      <li>Painting over removed graffiti or non-offensive graffiti.</li>
  </ul>
  <p>Offensive Graffiti is removed by the Estates Team but may require painting over the area after blast 
  washing.</p>

<h3>Communal Handrails</h3>

  <ul>
      <li>Painting communal handrails and tidying up.</li>
  </ul>
  <p>Handrails on footpaths are a repair job and this work is carried out under the Painting Programme.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const pitchedRoof  = new ContentR(
  "pitchedRoof",
  "Pitched Roof",
  "",
  `
<h3>Category Fault</h3>

  <p>Pitched Roofing Repairs</p>

<h3>Codes</h3>

  <ul>
      <li>Repairs to Pitched Roof</li>
      <li>Remedy leaking Pitched Roof to Dwelling (leaking into property)</li>
  </ul>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile. If repair is identified as within a warranty period, invoke the warranty 
  repair process.</p>

<h3>Key questions and information</h3>

  <p>If there is a pop-up i.e. for Gas No Access: <strong>HF</strong>, <strong>NA</strong> or 
  <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, continue to 
  order a repair (if applicable) then immediately contact the 
  <a href="mailto:HME_GandE_Reinstates@sheffield.gov.uk?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">RPIT Gas Team</a>.</p>
  <p>If the property has a <strong>RO</strong> (Roof Ordered) code, you should decide if the enquiry is 
  in relation to the ongoing Reroofing Programme or if it is a genuine repair requiring a repair to be 
  ordered.</p>
  <p>If the enquiry is in relation to the Re-roofing Programme, transfer to 
  <strong>Asset Management</strong> or email <a href="mailto:AMT-GeneralEnq@sheffield.gov.uk">AMT-GeneralEnq@sheffield.gov.uk</a>.</p>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcomes</h3>

  <p>Log a job on T-Mobile *Remember to put in order comments <strong>Storm Damage</strong> if required.</p>
  <p>If leaking into property, order as <strong>Urgent Leak</strong></p>


  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const plastering  = new ContentR(
  "plastering",
  "Plastering",
  "",
  `
<h3>Category Fault</h3>

  <p>Plastering Repairs</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
  warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>If there is a pop-up i.e. for Gas No Access: <strong>HF</strong>, <strong>NA</strong> or 
  <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, continue to 
  order a repair (if applicable) then immediately contact the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">RPIT Gas Team</a>.</p>
  <p><strong>Sealant jobs around a bath</strong> are done by Plasterers (not plumbers)</p>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcome</h3>

  <p>Log job on T-Mobile</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const plumbingandDomesticHotorColdWater  = new ContentR(
  "plumbingandDomesticHotorColdWater",
  "Plumbing and Domestic Hot or Cold Water",
  "",
  `
<h3>Category Fault</h3>

  <p>Plumbing Repairs - Domestic Hot / Cold Water Services</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
  warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>Check if the repair is regarding no water flowing out of the taps, or whether there is water flowing, 
  and it is cold. If it's around no hot water then this should be a <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx">domestic heating repair</a>.</p>
  <p>External bursts should be ordered as an appointable job.</p>
  <p>If there is a pop-up i.e. for Gas No Access: <strong>HF</strong>, <strong>NA</strong> or 
  <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, continue to order
  a repair (if applicable) then immediately contact the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">RPIT Gas Team</a>.</p>
  <p><strong>Sealant jobs around a bath</strong> are done by Plasterers (not plumbers)</p>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcome</h3>

  <p>Log a job on T-Mobile.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const refuseChute  = new ContentR(
  "refuseChute",
  "Refuse Chute",
  "",
  `
<h3>Category Fault</h3>

  <p>Refuse Chute Repairs</p>

  <ul>
      <li>Bin Chute -- Stuck OPEN -- FIRE HAZARD will go to the Fire Stopping Team</li>
      <li>Bin Store/chute will go to the Responsive Repair Team (joiner)</li>
  </ul>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>N/A</p>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcome</h3>

  <p>For blocked refuse chutes, contact the <a href="mailto:ElectricalSheffield@Sheffield.go.uk?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=83&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">Council Housing Service Call Centre</a></p>


  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const reroofingProgrammeWarranty  = new ContentR(
  "reroofingProgrammeWarranty",
  "Re-roofing Programme Warranty",
  "",
  `
  <p>If a repair is needed and the re-roofing work is <strong>under warranty</strong> (within 6 months), 
  please email the details to the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx">Asset Management Team</a>.</p>
  <p>If a repair is needed and the re-roofing work is <strong>not under warranty</strong> (12 months), 
  the repair should be dealt with as a new repair.</p>
  <p>If a customer is <strong>unhappy with the quality of work</strong>, the workers, or the programme 
  in general, please email the details to the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx">Asset Management Team</a>.</p>
  <p>If a customer is <strong>reporting an emergency on site</strong>, the relevant contractor should be
  notified. There is a <a href="mailto:HME_GandE_Reinstates@sheffield.gov.uk">spreadsheet</a> that lists 
  all addresses that are to be included in the Re-roofing Programme along with the emergency contact numbers.</p>
  <p>In OHMS, the Re-roofing work is indicated by the <strong>RW</strong> code. The Property Notes will show 
  the warranty dates and numbers to contact.</p>

  IMAGE

  <p>Over the next 5 years from 2025 to 2030, the Asset Management Team will manage a citywide re-roofing 
  programme.</p>

  <p>Three Types of Letters Sent to Council Tenants and Owner Occupiers</p>

  <ul>
      <li>
          <h4>In Programme Letter</h4>
          <p>Sent to council properties that will have roofing work done.</p>
      </li>
      <li>
          <h4>Party Wall Notice</h4>
          <p>Sent to owner occupiers or freehold properties that are adjoined to council properties. 
          This notice includes an acknowledgement (returnable) letter that owner occupiers or freeholders 
          must send back to the council.</p>
      </li>
      <li>
          <h4>Access Letter</h4>
          <p>Sent to council tenants or owner occupiers/freehold properties if the council is having access 
          issues regarding roofing work.</p>
      </li>
  </ul>

  <p>Customers also receive another letter from the contractor prior to work starting at their property or 
  block.</p>
  <p>The proposed works could include but are not limited to any of the following:</p>

  <ul>
      <li>Replacing the existing flat roof covering</li>
      <li>Insulating the existing roof</li>
      <li>Where required, installing fire stopping over the party wall</li>
      <li>Installing a secret gutter between your roof and the roof covering of an owner occupier</li>
      <li>New flashings, etc.</li>
      <li>Possible repairs to the shared service stacks or flues</li>
      <li>New soffits and fascia’s</li>
      <li>New rainwater goods</li>
      <li>Structural works where identified</li>
      <li>Removal of identified asbestos</li>
  </ul>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "05/03/2025", name: "Shahzad Athar" }
);

const rightToBuy  = new ContentR(
  "rightToBuy",
  "Right To Buy",
  "",
  `
  <p>If an address is shown as Right to Buy, we can only put repairs on to make the property "wind and 
  watertight". For example, doors, windows, and roof repairs that are related to Health and Safety, also 
  any internal leaks to a flat below.</p>

  <h3>Customer claims they are not in the RTB process.</h3>

    <p>Sometimes a customer may say that their Right to Buy application has been denied and that they are no
    longer in the RTB process. Technically, the application may indeed have been denied but the tenant has 
    the right to appeal the denial. For this reason, we do not close the application or remove the RTB status 
    code until after the expiration date of the possible appeal. This is 8 weeks from the date we denied the 
    application.</p>
    <p>If the tenant contacts us prior to the expiration date to state, they are not going to appeal we will 
    close the application and change the repairs status back to tenanted. Any queries about this, please 
    contact the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=278&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">Home Ownership Team</a>.</p>

  <h3>Right to Buy inspection requests</h3>

    <p>For Right to Buy inspections, please contact the <a href="mailto:steve.willis@sheffield.gov.uk?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=278&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">Home Ownership Team</a>.</p>
    <p>Any tenant that is in a Right to Buy stage is not eligible for the Handyperson service.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);

const rightToRepair  = new ContentR(
  "rightToRepair",
  "Right To Repair",
  "",
  `
  <h3>About the Right to Repair scheme</h3>

    <p>The right to repair scheme is designed to ensure that council tenants can get certain repairs 
    completed quickly and easily. It sets time limits for certain types of repairs, which councils must 
    stick to. If the contractors the council uses don't do the work in that time, a request can be made 
    to hire someone else. If the repairs still aren't done, compensation can be claimed by the 
    tenant/resident.</p>

  <h3>Repairs covered</h3>

    <p>It only covers certain repairs, known as 'qualifying repairs', which cost less than £250 to carry out. 
    See <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/Documents/Emails/Roof%20Enquiry.msg">list 
    of qualifying repairs</a> and the response time (times are set by law - not by the council).</p>


  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);

const scaffolding  = new ContentR(
  "scaffolding",
  "Scaffolding",
  "",
  `
  <h3>Blocking Access</h3>

    <p>If a new tenant states that they cannot move into their new property due to scaffolding obstructing 
    access and blocking doors or windows; contact the Roofing team on internal number 0114 2735921 and also 
    inform the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/Lists/Keir%20Contacts2/DispForm.aspx?ID=102&Source=https%3a//knowledge.sheffield.gov.uk/HousingRepairs/Pages/Telephone-Directory.aspx&ContentTypeId=0x01008B0EE4E0E1BA644197584AD04A25C474&IsDlg=1">Vacants Team</a>. It will then be arranged for the scaffolding to be moved to allow access. This will prevent any discretionary payments to rent accounts via Vacants due to the tenant being unable to move into the property.</p>

  <h3>Scaffolding Process</h3>

    <p>This procedure only applies to Steel (or sometimes it says Fixed which is the same thing). Hi-Point 
    give SCC a date when they will be able to use it from which is the date put on screen as a "handover" 
    date, but they start erecting steels 2 days before due to health and safety procedures.</p>
    <p>To clarify, the process is:</p>

    <ul>
        <li>Day 1 Hi-Point erect a scaffold.</li>
        <li>Day 2 Hi-Point supervisors / inspectors inspect the scaffold to make sure they consider it is 
        safe to work on</li>
        <li>Day 3 SCC inspector inspects the scaffold to make sure it passes SCC safety procedures to work 
        on</li>
    </ul>

    <p>With this procedure, they may be working on the scaffold on the 3rd day after the SCC inspector has 
    inspected, but sometimes the SCC inspector will fail the scaffold which means Hi-Point have to go back 
    and alter it and then the inspection procedure will start again which obviously will delay work.</p>
    <p>If the scaffold passes the inspection, they will work on it as soon as they can but have to fit this 
    in with day-to-day appointments and Urgent as the WAH and roofing teams do everything i.e., scaffolds, 
    appointments and Urgent. They will always get scaffold jobs done as soon as possible as we are charged 
    weekly for the scaffold.</p>

    <p>Remember that lots of jobs that use a scaffold do get delayed by adverse weather conditions i.e., 
    too wet, windy, or icy. There may also be other variables that can affect the work starting such as 
    operative absence, van breakdowns or emergency / urgent jobs taking priority, so please also bear these 
    possibilities in mind.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);

const surveyors = new ContentR(
  "surveyors",
  "Surveyors",
  "",
  `
    <p><strong>Do not log surveyors' jobs</strong>.</p>
    <p>These are logged when an operative has attended the property and has established that it is a lot 
    bigger job / more work needed. The operative will go back and pass the information to his 
    manager/ team leader, and they will log a surveyor's job. These jobs will be picked up by the surveyors 
    and they will contact the tenant with an appointment.</p>
    <p>If the job has been allocated to a surveyor, please contact them direct via phone or email. 
    Any job that has not been allocated or needs chasing up please email your senior, who will pass on the 
    information.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);

const tarmac = new ContentR(
  "tarmac",
  "Tarmac",
  "",
  `
    <p>Please log a job on T-Mobile with the description, location, and approximate size, then 
    <strong>book a Non appointed</strong> appointment.</p>
  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);

const wallRepair = new ContentR(
  "wallRepair",
  "Wall Repair",
  "",
  `
  <h3>Category Fault</h3>

    <p>Concrete/Wall Repairs</p>

  <h3>Warranty</h3>

    <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
    warranty repair process.</p>

  <h3>Key questions and information</h3>

    <p>If there is a pop-up i.e., for Gas No Access: <strong>HF</strong>, <strong>NA</strong> or 
    <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, continue to order a repair (if applicable) then immediately contact the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/_layouts/listform.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">RPIT Gas Team</a>.</p>

  <h3>Rendering</h3>

    <p>We only make it safe.</p>

  <h3>Recharge</h3>

    <p>No</p>

  <h3>Outcome</h3>

    <p>Log a job on T-Mobile - except for Concrete Repairs to Concrete Gutters.</p>
    <p>Examples of Concrete Repairs - Lintels, Cills, Coping Stones, Canopy's, Marionette Walkways/Private 
    Balcony's, Columns and Beams.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);

const wcBathorShowerorSinkUnit = new ContentR(
  "wcBathorShowerorSinkUnit",
  "WC, Bath, Shower or Sink Unit",
  "WC/Bath/Shower/Sink Unit Repairs",
  `
  <h3>Category Fault</h3>
    <p>WC/Bath/Shower/Sink Unit Repairs</p>

  <h3>Contract</h3>
    <p>Responsive.</p>

  <h3>Codes</h3>

    <ul>
        <li>Repairs to Supply Tank</li>
        <li>Clear Blockage from WC / Sink / Bath / Soil Stack - Emergency Macro</li>
        <li>Repair Electric Installations Dwelling - Shower Unit (check Attributes) - HM&E Macro</li>
        <li>Repairs to Shower Head / Rail / Service valve - Remedy Macro</li>
        <li>Repair Burst Copper pipe - Emergency Macro</li>
        <li>Repair Bath taps / Waste / Sealant - Remedy Macro</li>
        <li>Repairs to Wash Hand Basin</li>
        <li>Repairs to WC</li>
    </ul>

  <h3>Warranty</h3>
    <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
    warranty repair process.</p>

  <h3>Key questions and information</h3>
    <p>If the request is from an operative for <strong>new shower</strong>, check the attributes on the 
    customer records and place an order to replace the shower, only if it is on the current attributes.</p>

  <h3>Upgrade</h3>

    <p>Where a tenant is <strong>able bodied</strong> and not elderly and the shower (generally over a bath), 
    or the bath cannot be used, a standard Appointment.</p>
    <p>Where a tenant is <strong>disabled or elderly</strong> and they have a walk-in shower then the repair 
    should be up graded to a more Urgent category. If unsure, please ask your supervisor.</p>
    <p><strong>Sealant jobs around a bath</strong> are done by Plasterers (not plumbers).</p>
    <p>Toilet seat repairs are the tenant's <strong>own</strong> responsibility in normal circumstances. 
    If the tenant is vulnerable or a resident of Sheltered accommodation, a repair to replace a toilet seat 
    can be ordered. If unsure, please ask your supervisor.</p>
    <p><strong>Shower Rails and rise rails</strong> are fitted by Plumbers not Joiners.</p>
    <p>Any customer enquiries concerning outstanding <strong>Decent Homes</strong> (Investment) work, 
    or work to '<strong>upgrade' kitchens</strong> should be directed to the 
    <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/Documents/Business%20Continuity%20-%20OHMS%20BCP%20Form.docx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=277&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">Asset Management Team</a>.</p>

  <h3>Systems and Processes</h3>
    <p>Only white soft closed seats can be fitted.</p>

  <h3>Recharge</h3>
    <p>Possible Tenant recharge for damaged items.</p>

  h3>Outcome</h3>
    <p>Log job on T-Mobile</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);


const windowSillorCill = new ContentR(
  "windowSillorCill",
  "Window Sill or Cill",
  "Window Sill or (Cill)",
  `
  <p>Question the customer sufficiently to ensure you are going to select the correct tradesperson 
  for the job.</p>

    <p>Find out:</p>

    <ul>
        <li>if the windowsill is <strong>internal or external</strong></li>
        <li>what it is made of, it its:</li>
        <ul>
            <li>wooden or plastic, this requires a <strong>joiner</strong></li>
            <li>concrete or quarry tiles, this requires a <strong>bricklayer</strong>.</li>
        </ul>
    </ul>

    <p>As always if unsure, please ask your supervisor / team leader.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);

const windowFrame = new ContentR(
  "windowFrame",
  "Window Frame",
  "Repairs for Window Frame",
  `
  <h3>Category Fault</h3>

    <p>Window Frame Repairs</p>

  <h3>Warranty</h3>

    <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, 
    invoke the warranty repair process.</p>

  <h3>Key questions and information</h3>

    <p>Ask tenant for details of window type i.e., UPVC, Wood or Metal</p>
    <p>Police incident number is required if repair is because of Burglary/Vandalism amend category of work. 
    Where there is no Crime Reference Number, board up/make safe.</p>
    <p>If there is a pop-up i.e., for Gas No Access: <strong>HF</strong>, <strong>NA</strong> or 
    <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, continue to order
    a repair (if applicable) then immediately contact the <a href="https://knowledge.sheffield.gov.uk/HousingRepairs/Pages/KnowledgePages/Domestic-Gas-Systems.aspx?PageType=4&ListId=%7bD189B7FE-EDB5-45AD-9391-ECFB467A8DC6%7d&ID=88&ContentTypeID=0x01008B0EE4E0E1BA644197584AD04A25C474">RPIT Gas Team</a>.</p>

  <h3>Recharge</h3>

    <p>Yes where there is no <strong>Police Crime Reference Number</strong>, board up/make safe only.</p>

    <h3>Order Remedy Repair</h3>


  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);


const workingatHeight = new ContentR(
  "workingatHeight",
  "Working at Height (WAH)",
  "",
  `
    <p>There is often some confusion as to what constitutes a 'Working at Height' job with some orders 
    being passed to Working at Height when they should be picked up by the responsive team on the Hub. 
    It might be necessary in some cases for the customer to be asked to <strong>identify exactly where 
    the problem is</strong> in the property, i.e., an overflow that is running can often be low down and 
    needn't be passed to Working at Height.</p>

  `
  ,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: [],
  },
  { date: "13/03/2025", name: "Shahzad Athar" }
);




// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const repairs = new ServiceR(
  "repairs",
  "Repairs",
  "",
    [
      adaptation, blacksmith, brickwork, chimneyStack, claimforDamage, 
      clothesPost, communalArea, concrete, dampandMould, districtHeatingSwitch2Setup, 
      doorFurniture, drainage, disrepair, electricalandHeating, electricalTesting, externalContractors,
      externalDoorLock, externalDoor, flatRoof, floororStaircase, footpathandSteps, fireJobs,
      garageorDetachedOutbuilding, gasandDomesticSystems, gasReinstateandUncapServicesorAppointments,
      gateorFence, glazingincludingfailedDoubleGlazedUnits, gutteringandRainwaterPipes, handyperson, 
      internalDoor, kitchenUnit, liftorHoist, lostKeyorFob, newBuildPropertyDefectorEmergencyCallOut,
      paintingCommunalArea, pitchedRoof, plastering, plumbingandDomesticHotorColdWater, refuseChute,
      reroofingProgrammeWarranty, rightToBuy, rightToRepair, scaffolding, surveyors, tarmac, wallRepair, 
      wcBathorShowerorSinkUnit, windowSillorCill, windowFrame, workingatHeight ]
);

