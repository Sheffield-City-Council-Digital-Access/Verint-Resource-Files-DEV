class CoreYCC {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  class ServiceYCC extends CoreYCC {
    constructor(id, name, description, subjects = []) {
      super(id, name, description);
      this.subjects = subjects;
    }
  }
  
  class MenuYCC extends CoreYCC {
    constructor(id, name, description, topics = []) {
      super(id, name, description);
      this.topics = topics;
    }
  }
  
  class ContentYCC extends CoreYCC {
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
  
  class FormYCC extends CoreYCC {
    constructor(id, name, description, formName, meta, lastModified) {
      super(id, name, description);
      this.formName = formName;
      this.meta = meta;
      this.lastModified = lastModified;
    }
  }
  
  // --------- KEEP THIS AT THE TOP ------------------------------------------- \\
  // --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\
  
  const switchboard = new ContentP(
    "switchboard",
    "Transferred to Switchboard",
    "Record the call transfer to Switchboard.",
    `
      `,
  
    { buttonLabel: "", formName: "" },
    { typeKey: "switch_board_transferred_to_service" },
    { typeKey: "" },
    {
      type: "Request",
      keywords: [
        "Switchboard",
        "Switch board",
        "transfer call",
        "call",
     
      ],
      categories: ["Your City Council"],
    },
    { date: "04/06/2025", name: "Gee Whitehouse" }
  );
  
  
  
  
  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const yourCityCouncil = new ServiceYCC(
    "yourCityCouncil",
    "Your City Council",
    "Emergency council services and reports outside of standard working hours, including Adult and Children's emergencies, Emergency Accommodation, and Urgent Repair needs.",
      [
        switchboard
      ]
  );