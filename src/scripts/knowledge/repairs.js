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

  const doorFurniture  = new ContentR(
    "doorFurniture ",
    "Door Furniture ",
    "",
    `

    
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

  const drainage  = new ContentR(
    "drainage",
    "Drainage",
    "",
    `

    
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

  const electricalandHeating = new ContentR(
    "electricalandheating",
    "Electrical and Heating",
    "",
    `
    <h2>Electrical Items</h2>
    <p>For electrical fittings, additional sockets, etc., email 
    <a href="mailto:ElectricalSheffield@Sheffield.go.uk" class="email">ElectricalSheffield@Sheffield.go.uk</a>.</p>
    
    <h2>Heating Items</h2>
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

  const externalContractors   = new ContentR(
    "externalContractors",
    "External Contractors",
    "",
    `

    
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


  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const repairs = new ServiceR(
    "repairs",
    "Repairs",
    "",
      [
        adaptation, blacksmith, brickwork, chimneyStack, claimforDamage, 
        clothesPost, communalArea, concrete, dampandMould, districtHeatingSwitch2Setup, 
        doorFurniture, drainage, electricalandHeating, electricalTesting, externalContractors, 

      
      ]
  );
