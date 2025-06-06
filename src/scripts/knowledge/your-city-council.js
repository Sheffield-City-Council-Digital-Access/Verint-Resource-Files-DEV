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
    "Records calls that are transferred to Switchboard.",
    `
    `,
  
    { buttonLabel: "", formName: ""},
    { typeKey: "switchboard_transferred_to_service" },
    { typeKey: ""},
    {
      type: "Request",
      keywords: [
        "Switchboard",
        "Switch board",
        "transfer call",
        "call"
      ],
      categories: ["Your City Council"],
    },
    { date: "04/06/2025", name: "George Whitehouse"} 
  );
  
  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const yourCityCouncil = new ServiceYCC(
    "yourCityCouncil",
    "Your City Council",
    "Your City Council.",
      [
        switchboard
      ]
  );
