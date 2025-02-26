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
      <p>For Council Housing properties, refer the customer to <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>
    
    <h2>Grab Rails</h2>
    <p>For internal or external access to sole occupancy, refer the customer to <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>
    
    <h2>Mobility Scooter Ramps</h2>
    <p>If the customer is requesting a communal ramp for their mobility scooter, advise them that if the scooter was not supplied through Equipment and Adaptations, we are <strong>unlikely to supply a ramp</strong>.</p>
    <p>If the customer has acquired their own mobility scooter, then it is their own responsibility to install a ramp. They will also need permission from the Housing Service to install their own ramp.</p>
    <p>For further advice about ramps to an individual's property or communal entrances, refer the customer to <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>
    
    <h2>For Disabled Customers, Including Wet Rooms</h2>
    <p>For walk-in shower rooms (wet rooms), refer the customer to <a href="mailto:CommunitiesEquip&Adaptations@sheffield.gov.uk" class="email">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>.</p>

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
  
  const electricalandheating = new ContentR(
    "electricalandheating",
    "Electrical and Heating",
    "",
    `
      <h2>Electrical Items</h2>
    <p>For electrical fittings, additional sockets, etc., email <a href="mailto:ElectricalSheffield@Sheffield.go.uk" class="email">ElectricalSheffield@Sheffield.go.uk</a>.</p>
    
    <h2>Heating Items</h2>
    <p>For extra radiators, email <a href="mailto:GasSheffield@sheffield.gov.uk" class="email">GasSheffield@sheffield.gov.uk</a>.</p>

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
  
  const electricalandheating = new ContentR(
    "electricalandheating",
    "Electrical and Heating",
    "",
    `
      <h2>Electrical Items</h2>
    <p>For electrical fittings, additional sockets, etc., email <a href="mailto:ElectricalSheffield@Sheffield.go.uk" class="email">ElectricalSheffield@Sheffield.go.uk</a>.</p>
    
    <h2>Heating Items</h2>
    <p>For extra radiators, email <a href="mailto:GasSheffield@sheffield.gov.uk" class="email">GasSheffield@sheffield.gov.uk</a>.</p>

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



  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const repairs = new ServiceR(
    "repairs",
    "Repairs",
    "TBD.",
      [
        adaptation,
        electricalandheating,
      
      ]
  );
