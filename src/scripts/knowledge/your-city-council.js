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
  
  const emergencyAccommodation = new FormYCC(
    "emergencyAccommodation",
    "Out of hours emergency accommodation",
    "Apply for emergency accommodation.",
    "apply_emergency_homeless",
    {
      type: "Apply",
      keywords: 
      [
        'Homeless',
        'YCC',
        'accommodation',
        'Emergency accommodation',
        'accomodation',
        'emergency accomodation',
        'emergncy accomodation',
        'emergancy accommodation',
        'emergency accomodtion',
        'emergncy accommodation'
      ],
      categories: ["out of hours"],
    },
    { date: "22/01/2025", name: "Nathan Smith" }
  );
  
  const emergencyChildService = new FormYCC(
    "emergencyChildService",
    "Children's emergency service",
    "Request for emergency child needs.",
    "emergency_child_service",
    {
      type: "Request",
      keywords: 
      [
        "YCC",
        "children's emergency service",
        'Childrens emergncy service',
        "Childern's emergency service",
        'Childrens emergancy service',
        "Childern's emergncy service",
        "Children's emrgency servce"
      ],
      categories: ["out of hours"],
    },
    { date: "22/01/2025", name: "Nathan Smith" }
  );
  
  const emergencyAdultService = new FormYCC(
    "emergencyAdultService",
    "Adult's emergency service",
    "Request for emergency adult needs.",
    "emergency_adult_service",
    {
      type: "Request",
      keywords: 
      [
        "YCC",
        "Adult's emergency service",
        'adults emergancy service',
        "adult's emergncy service",
        'adults emrgency servce',
        'adults emerjency service',
        'adults emergency servise'
      ],
      categories: ["out of hours"],
    },
    { date: "22/01/2025", name: "Nathan Smith" }
  );
  
  const reportAnEmergencyRepair = new FormYCC(
    "reportAnEmergencyRepair",
    "Report an emergency repair",
    "Report any urgent Housing repair needs.",
    "report_emergency_repair",
    {
      type: "Report",
      keywords: 
      [
        "YCC",
        'Report an emergency repair',
        'report an emergncy repair',
        'reprot an emergency repair',
        'report an emergncy repare',
        'report an emrgency repair',
        'report an emergancy repair'
      ],
      categories: ["out of hours"],
    },
    { date: "22/01/2025", name: "Nathan Smith" }
  );
  
  
  
  
  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const yourCityCouncil = new ServiceYCC(
    "yourCityCouncil",
    "Your City Council",
    "Emergency council services and reports outside of standard working hours, including Adult and Children's emergencies, Emergency Accommodation, and Urgent Repair needs.",
      [
        emergencyAccommodation,
        emergencyAdultService,
        emergencyChildService,
        reportAnEmergencyRepair
      ]
  );