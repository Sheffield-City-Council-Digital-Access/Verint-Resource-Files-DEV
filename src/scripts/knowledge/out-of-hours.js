class CoreOoH {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceOoH extends CoreOoH {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuOoH extends CoreOoH {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentOoH extends CoreOoH {
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

class FormOoH extends CoreOoH {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const emergencyAccommodation = new ContentOoH(
  "emergencyAccommodation",
  "Out of hours emergency accommodation",
  "Description",
  `
 
  `,
  { buttonLabel: "Apply Emergency accommodation", formName: "apply_emergency_homeless" },
  { typeKey: "emergency_homeless_transferred_to_service" },
  { typeKey: "emergency_homeless_information_provided" },
  { type: "Information",
    keywords: [
      'Emergency accommodation',
      'emergency accomodation',
      'emergncy accomodation',
      'emergancy accommodation',
      'emergency accomodtion',
      'emergncy accommodation',
    ],
    categories: ["out of hours"]
  },
  { date: "13/10/2024", name: "George Whitehouse" }
);


const emergencyChildService = new ContentOoH(
  "emergencyChildService",
  "Children's emergency service",
  "Description",
  `
 
  `,
  { buttonLabel: "Apply children's emergency service", formName: "emergency_child_service" },
  { typeKey: "childrens_transferred_to_service" },
  { typeKey: "chidlrens_information_provided" },
  { type: "Apply", keywords: ["children's emergency service",
    'Childrens emergncy service', "Childern's emergency service", 'Childrens emergancy service', "Childern's emergncy service", "Children's emrgency servce"], categories: ["out of hourss"] },
  { date: "13/10/2024", name: "George Whitehouse" }
);

const emergencyAdultService = new ContentOoH(
  "emergencyAdultService",
  "Adult's emergency service",
  "Description",
  `
 
  `,
  { buttonLabel: "Apply Adult emergency service", formName: "emergency_adult_service" },
  { typeKey: "adults_transferred_to_service" },
  { typeKey: "adults_service_information_provided" },
  { type: "Apply", keywords: ["Adult's emergency service",'adults emergancy service', "adult's emergncy service", 'adults emrgency servce', 'adults emerjency service', 'adults emergency servise'], categories: ["out of hours"] },
  { date: "13/10/2024", name: "George Whitehouse" }
);

const reportAnEmergencyRepair = new ContentOoH(
  "reportAnEmergencyRepair",
  "Report an emergency repair",
  "Description",
  `
 
  `,
  { buttonLabel: "Report an emergency repair", formName: "report_emergency_repair" },
  { typeKey: "repairs_transferred_to_service" },
  { typeKey: "repairs_information_provided" },
  { type: "Report", keywords: ['Report an emergency repair','report an emergncy repair', 'reprot an emergency repair', 'report an emergncy repare', 'report an emrgency repair', 'report an emergancy repair'], categories: ["out of hours"] },
  { date: "13/10/2024", name: "George Whitehouse" }
);




// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const outOfHours = new ServiceOoH(
  "outOfHours",
  "Out of Hours",
  "Emergency council services and reports outside of standard working hours, including Adult and Children's emergencies, Emergency Accommodation, and Urgent Repair needs.",
    [
      emergencyAccommodation,
      emergencyAdultService,
      emergencyChildService,
      reportAnEmergencyRepair

    ]
);
