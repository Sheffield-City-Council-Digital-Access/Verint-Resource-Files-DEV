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
    "Find out how to request a replacement for a misplaced, stolen, or seized Blue Badge, including the process for submitting a form or contacting customer services.",
    `
        <h3>Misplaced or stolen badges</h3>
        <p>
          If your badge is lost, damaged, stolen, or if you need to amend details on it, there is a £10 charge.
        </p>
        <p>
          If a badge is lost or stolen we now require a form to be completed with a signature. 
          The form is available online to print or alternatively a form can be sent out via 2nd post.  You may also request a large print option.
        </p>
        <h3>Badges seized by an enforcement officer</h3>
        <p>
          If your Blue Badge has been confiscated by an Enforcement Officer,
          you will need to:
        </p>
        <p>
          Send an e-mail to
          <a href="mailto:customerservices@sheffield.gov.uk" target="_blank">customerservices@sheffield.gov.uk</a>
        </p>
        <p>
          Or send a letter to:
        </p>
        <address>
          Customer Services<br>
          Floor 2<br>
          Howden House<br>
          1 Union Street<br>
          Sheffield<br>
          S1 2SH
        </address>
        <p>
          In your message, please detail the circumstances that led to the Blue Badge
          being taken. Once we receive this information, a member of our team will
          contact you, and a decision will be made regarding the return of your Blue
          Badge.
        </p>
      `,
  
    { buttonLabel: "", formName: "" },
    { typeKey: "" },
    { typeKey: "" },
    {
      type: "Request",
      keywords: [
        "Car",
        "Blu Badg",
        "bbadge",
        "blue bdge",
        "badg",
        "bb",
        "Blue Badge",
        "blue badge",
        "lost",
        "lost and stolen",
        "replacement",
        "replacment",
        "replc",
        "replacmnt",
        "stolen",
        "badge replacement",
        "blue badge replacemnt",
        "parkin",
        "prking",
      ],
      categories: ["Parking"],
    },
    { date: "28/05/2025", name: "Dinah Williams" }
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