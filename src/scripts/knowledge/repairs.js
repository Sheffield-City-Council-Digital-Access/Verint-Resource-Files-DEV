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
    "doorFurniture ",
    "Door Furniture ",
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
        <li>Electric & Gas Reinstate</li>
        <li>Mutual Exchange</li>
        <li>Electric & Gas Service Check</li>
        <li>Dispersed Properties</li>
        <li>Electric & Gas Reinstate</li>
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
