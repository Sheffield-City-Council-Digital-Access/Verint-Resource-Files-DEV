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
  
  const myAccount = new ContentP(
    "myAccount",
    "My Account",
    "Our new digital service that lets customers track their enquiries online from start to finish.",
    `
    <h3>What is My Account</h3>
    <p>
      My Account gives customers a secure online login where they can see progress 
      of any enquiry submitted through an online form. This is a key part of making it easier 
      for people to interact with the Council and choose digital first.
    </p>
    <p>
      The first phase of My Account focuses on enquiries made through online forms. 
      The service will go live on Tuesday 17 March 2026.
    </p>
    <p>
      By making customer enquiries more transparent and consistent, we are living 
      our organisational value of openness and honesty, ensuring that customers 
      and colleagues have clear, reliable information.
    </p>
    `,
  
    { buttonLabel: "", formName: ""},
    { typeKey: "" },
    { typeKey: "my_account_information_provided"},
    {
      type: "Report",
      keywords: [
        "Account",
        "MyAccount",
        "My Account"
      ],
      categories: ["Your City Council"],
    },
    { date: "05/03/2026", name: "Nathan Smith"} 
  );

  const switchboard = new ContentP(
    "switchboard",
    "Switchboard",
    "Records calls that are transferred via Switchboard.",
    `
    <p>
      Using Storm find the appropriate number for the service you wish to transfer the customer to.
    </p>
    `,
  
    { buttonLabel: "", formName: ""},
    { typeKey: "switchboard_transferred_to_service" },
    { typeKey: "switchboard_information_provided"},
    {
      type: "Request",
      keywords: [
        "Switchboard",
        "Switch board",
        "Switch",
        "transfer",
        "redirect",
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
        switchboard,
        myAccount
      ]
  );
