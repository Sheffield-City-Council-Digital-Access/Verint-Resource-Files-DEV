class CoreDaMH {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceDaMH extends CoreDaMH {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuDaMH extends CoreDaMH {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentDaMH extends CoreDaMH {
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

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const disabledTravelPermit = new ContentDaMH(
  "disabledTravelPermit",
  "Disabled Travel Permit",
  "What is the Eligibility Criteria for a Disabled Travel Permit",
  `
    <p> You may qualify for a pass if you're aged between 5 and 66 and meet one of the following criteria:</p>
    <p>
        <ul>
          <li>a current blue badge holder</li>
          <li>registered blind, partially sighted or deaf</li>
          <li>registered with Social Services as having a learning disability</li>
          <li>unable to use both of your arms</li>
          <li>unable to drive because of a health problem, such as autism or epilepsy</li>
          <li>currently suffering from, a psychiatric disorder, or have an enhanced level care programme approach</li>
          <li>unable to speak</li>
          <li>suffering from a substantial and long-term disabilities or injuries which severely impacts your ability to walk</li>
        </ul>
      </p>
      <h3>How long does a Disabled Travel Permit last for</h3>
      <p>If your application is successful, passes are issued between 1 and 5 years the timescale is dependent on your qualifying criteria, you will be made aware of the timescale when your application is approved.<br>
 
        If you have any supporting evidence/eligibility that has an end date, your pass will be issued up to that date.<br>
 
        If during the time you have the pass, you would turn 66, your pass will expire on your 66th birthday.</p></p>
      <h3>How do i appeal the decision</h3>
      <p>
        Appeals must be made in writing to:<br>
        Customer Services<br>
        Floor 2<br>
        Howden House<br>
        1 Union Street<br>
        Sheffield<br>
        S1 2SH</p>
      <h3>When can i use my Travel Permit</h3>
      <p>A disabled persons pass enables free public transport on buses, trams and trains.</p>
      <p>If the Pass is being used within South Yorkshire the pass can be used at all times of the day, however if the pass is being used beyond South Yorkshire (within England or Wales) your pass is only valid between 9:30am - 11pm.
 </p>
       `,
  {
    buttonLabel: "Apply for disabled travel permit",
    formName: "disabled_travel_pass",
  },
  { typeKey: "disabled_travel_pass_application" },
  { typeKey: "disabled_travel_pass_information_provided" },
  {
    type: "Application",
    keywords: [
      "disabled travel pass",
      "dissabled ",
      "disabeled",
      "disabld",
      "disaabled",
      "disableed",
      "traval",
      "travle",
      "trvel",
      "travell",
      "treval",
      "premit",
      "permitt",
      "pemit",
      "permet",
      "permot",
    ],
    categories: ["Travel Permit??", "Disablity??"],
  },
  { date: "11/09/2024", name: "Dinah Williams" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const disabilityAndMentalHealth = new ServiceDaMH(
  "disabilityAndMentalHealth",
  "Disability and Mental Health",
  `Help and support, travel and transport, equipment, children with disabilities, care and carers, mental health services…`,
  ["disabledTravelPermit"]
);
