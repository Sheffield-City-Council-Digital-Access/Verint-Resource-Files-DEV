class CoreBDMaC {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceBDMaC extends CoreBDMaC {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuBDMaC extends CoreBDMaC {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentBDMaC extends CoreBDMaC {
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

class FormBDMaC extends CoreBDMaC {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\


//-----------------Re-register a birth tile-------
const reRegisterABirth = new ContentBDMaC(
  "reRegisterABirth",
  "Re-register a Birth",
  "Desc tbc",
  `
  <p> Takes to <a href src= "#">form </a></p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: ["", ""],
  },
  { date: "16/10/2024", name: "Joe Nixon" }
);

//-------------Register a Death tile-----------
const registerADeath = new ContentBDMaC(
  "registerADeath",
  "Register a Death",
  "Desc tbd",
  `
  <h3>Register a death</h3>
<p>You are legally required to register a death within 5 days from when the Coroner or Medical Examiner has passed the relevant paperwork to the Register Office. The registration should take place in the district where the person died.
</p>
<h3>Changes to the death certification process
</h3>
<p>Regulations introducing changes to the death certification process were laid before Parliament on 15 April 2024 and will come into force on 9 September 2024.
</p>
<p>The reforms change the way in which the causes of deaths are scrutinised and certified in England and Wales with the introduction of a statutory medical examiner system.
</p>
<p>During this process you may be contacted by the Medical Examiners Office. For further information regarding the deceased you should contact the hospital or GP dealing with the death.
</p>
<p>For more information about the death reform certification process please visit the GOV.UK website.
</p>
<h3>Who can register a death</h3>
<p>Usually, a relative or long-term partner (living with the deceased) of the person who has died can register death, but others can also do this. This can be:</p>
<ul>
    <li>Someone present at the death</li>
    <li>A person arranging the funeral</li>
    <li>A personal representative of the deceased (solicitor, family friend or funeral director)</li>
    <li>An official from the hospital or the manager of where the death took place (for example a care home)</li>
</ul>
<h3>How to register a death</h3>
<p>Select a date to speak with the registrar, who will help you to make an appointment for registering the death.</p>
<h3>What happens next</h3>
<p>On your chosen date, the registrar will call you to check the paperwork and the deceased’s details. You don't need to worry about the relevant medical paperwork, as the coroner or medical examiner will send us a copy.</p>
<p>The registrar will then arrange for you to attend the Register Office the following day. This is for you to check and sign the registration paperwork and complete the registration.</p>
<p>If required, at this appointment you will receive the relevant paperwork for the funeral director, the Tell Us Once registration code and any death certificates</p>
<h3>Tell us once service</h3>
<p>When you register a death we will notify our other services and certain Government agencies of the person’s death. This is a free voluntary service and means fewer phone calls, letters or emails for you.</p>
<h3>Cost</h3>
<ul>
    <li>Registration is free of charge.</li>
    <li>Certified copies are £12.50 each at the time of registration.</li>
    <li>Copy certificates may be obtained at a later date for the standard fee of £13.50 each.</li>
</ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: ["", ""],
  },
  { date: "16/10/2024", name: "Joe Nixon" }
);

//---------Register a Birth and Death tile

const registerABirthAndDeath = new ContentBDMaC(
  "registerABirthAndDeath",
  "Register a Birth and Death",
  "Desc tbd",
  `
  <p> Takes to <a href src= "#">form </a></p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: ["", ""],
  },
  { date: "16/10/2024", name: "Joe Nixon" }
);


//-------register a stillbirth tile

const registerAStillbirth = new ContentBDMaC(
  "registerAStillbirth",
  "Register a Stillbirth",
  "Desc tbd",
  `
  <p> Takes to <a href src= "#">form </a></p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "",
    keywords: [],
    categories: ["", ""],
  },
  { date: "16/10/2024", name: "Joe Nixon" }
);


 

  












// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const birthsDeathsMarriagesAndCitizenship = new ServiceBDMaC(
  "birthsDeathsMarriagesAndCitizenship",
  "Births, Deaths, Marriages and Citizenship",
  `Register Office, naming ceremonies, burials and memorials, civil partnerships, citizenship ceremonies, order copies of certificates…`,
  []
);
