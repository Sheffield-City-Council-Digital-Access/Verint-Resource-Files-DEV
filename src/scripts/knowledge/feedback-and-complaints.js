class CoreFaC {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceFaC extends CoreFaC {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuFaC extends CoreFaC {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentFaC extends CoreFaC {
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

class FormFaC extends CoreFaC {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const complaints = new ContentFaC(
  "complaints",
  "Complaints",
  "Description",
  `
    <h3>Our Approach<h3>

    <p> Our definition of a complaint is ‘an expression of dissatisfaction, however made, about the standard of service, 
    actions or lack of action by the organisation/landlord, its own staff, or those acting on its behalf, 
    affecting an individual/resident or group of individuals/residents.</p>

    <p>We value our customers’ views on the way we deliver our services. 
    We are committed to using these views to improve our services.  </p>

    <p> When a customer makes a complaint, their complaint will be handled through with the approach set out in this Policy. 
    We will do this irrespective of where and how they make their complaint.</p>

    <h3>Service request enquiry and complaints<h3>

     <p>Our communication with the complainant will not identify individual members of staff or contractors, 
     except in exceptional circumstances, as their actions are undertaken on behalf of the Council.</p>

     <p>Where a response to a complaint falls outside the timescales set out in this Policy, 
     we will agree with the complainant suitable intervals for keeping them informed about their complaint.</p>

     <p>When responding, we will where appropriate, thank the complainant, 
     clearly explain what happened and what we will do, and will apologise and put in place remedies.</p>

     <p>Our tone will be open, responsive and avoid unnecessary formality. 
     Written correspondence will use Plain English.</p>

     <p>Customers who make a complaint will be treated fairly and will not be victimised or 
     discriminated against either in the investigation or conclusion of their complaint, 
     or in any service they receive or request.</p>

     <p>Dealing with complaints is the responsibility of all Sheffield City Council employees.</p>

     <p>We will keep a record of complaints raised by customers.</p>

      <p>We will learn from complaints so that we can improve our service.</p>


  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "_information_provided" },
  {
    type: "Apply",
    keywords: ['feadback and complaints', 'feedback and complants', 'feedbak and complaints', 'feedback and complaits', 'fedback and complaints'],
    categories: ["'Feedback and Complaints','compliants', 'complants', 'complaits', 'complanits', 'complaents'"],
  },
  { date: "25/10/2024", name: "Gee Whitehouse" }
);


const ChildrensSocialCareComplaints = new ContentFaC(
  "ChildrensSocialCareComplaints",
  "Children's social care complaints",
  "Description",
  `
    <h3>Children's social care complaints<h3>

    <p> The Feedback and Complaints Team act as Case Coordinator for the Children and Families Service. </p>

    <p>The Children Act complaints procedure is governed by The Children Act 1989 Representations Procedure (England) 
    Regulations 2006, 
    and the accompanying guidance “Getting the Best from Complaints”. </p>

    <p> A complaint is eligible for consideration under the Children Act procedure 
    if it is made by an eligible individual as defined by Section 26(3) and section 24D of the Children Act 1989 and section
     3(1) of the Adoption and Children Act 2002, and the complaint is about a statutory function provided to a child or young person under Part 3, 4 or 5 of the Children Act 1989. 
    Also included are adoption support services and specialist guardian support services.</p>



     <p>If a complaint does not meet the eligibility criteria it will be considered under the Corporate Complaint Procedure.</p>

     

  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "" },
  { typeKey: "_information_provided" },
  {
    type: "Apply",
    keywords: ['feadback and complaints', 'feedback and complants', 'feedbak and complaints', 'feedback and complaits', 'fedback and complaints'],
    categories: ["'Feedback and Complaints','compliants', 'complants', 'complaits', 'complanits', 'complaents'"],
  },
  { date: "25/10/2024", name: "Gee Whitehouse" }
);

const feedbackAndComplaintsMenu = new MenuH(
  "feedbackAndComplaintsMenu",
  "Feedback and Complaints",
  "Description",
  [complaints,]
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const feedbackAndComplaints = new ServiceFaC(
  "travelAndTransport",
  "Travel and Transport",
  `Public transport, driving, cycling, walking, travel cards and passes, school passes, travel news and updates…`,
  [feedbackAndComplaintsMenu, ]
);
