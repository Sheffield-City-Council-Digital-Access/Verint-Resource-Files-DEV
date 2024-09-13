class CoreTaT {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceTaT extends CoreTaT {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuTaT extends CoreTaT {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentTaT extends CoreTaT {
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

const blueBadge = new ContentTaT(
  "bluebadge",
  "Blue Badge",
  "Who can apply for a Blue Badge",
  `
    <p>
    From April 2024, eligible working parents of 2-year-olds can access 15 hours childcare support. By September 2025, eligible working families with children aged between 9 months and 5 years old will be entitled to 30 hours of childcare support.
    </p>
    <p>The changes are being introduced gradually to make sure that providers can meet the needs of more families. This means that:</p>
    <p>From September 2025, eligible working parents of children from 9 months to school age will be entitled to 30 hours of childcare a week.</p>
    <p>Like the existing offer, depending on your provider, these hours can be used over 38 weeks of the year, or up to 52 weeks if you use fewer than your total hours per week.</p>
    <p>All eligible children are entitled to at least 570 hours of funded childcare each year.</p>
    <p>FEL (Funded Early Learning) helps children learn through play activities. Some benefits that parents have seen:</p>
    <ul>
      <li>children making friends their own age</li>
      <li>children behaving better with grown-ups</li>
      <li>children improving their speech and language</li>
      <li>children settle down and concentrate for longer</li>
      <li>children are more willing to try new foods which improves their nutrition</li>
      <li>younger children improving their sleeping patterns and toilet training</li>
    </ul>
    <p>The funded hours also help parents and carers access employment and training, spend time with their younger children or just find time to get things done.</p>
    <p>The hours must be taken over a minimum of 38 weeks (15 hours a week, or 30 if entitled to additional hours) but can be taken over more weeks: for example, your child could take 12 hours a week for 47½ weeks. Talk to your childcare provider about what options are available. For Funded Early Learning enquiries and more information on the Family Hubs for Families, please contact the Family Hubs - <b>0114 273 5665</b></p>
    <p>For information about the new 2-year-old extended working entitlement (15 hours offer starts April 2024, from 9 months old from September 2024) please visit the childcare choices page, there is an assessment tool offering families details of childcare support they might be eligible for and a link to apply to:</p>
    <p>HMRC:<b> www.childcarechoices.gov.uk</b></p>
    <p>From September 2025, eligible working parents of children from 9 months to school age will be entitled to 30 hours of childcare a week.</p>
    <h3>What is happening with my Blue Badge Application</h3>
    <p>Update/Chasing Application</p>
    <p>You may be able to provide the customer with an update to their application using the case notes or status update. All cases will be dealt with in date order, there are no exceptions to this regardless of circumstances so do not raise requests of this nature to FFT. Blue Badge applications will be assessed within 28 days calendar days from the date the application was received. The order date of the blue badge is not the despatch date from our 3rd party who produce the Blue Badge.</p>
    <p>Once Sheffield City Council have ordered the Blue Badge the 3rd Party have 3-4 working days to despatch and weekends need to be taken into account.</p>
    <h3>What should I do if my Blue Badge is confiscated by an Enforcement Officer</h3>
    <p>Send an e-mail to: <b>customerservices@sheffield.gov.uk</b> or send a letter to:</p>
    <p>Customer Services<br>
      Floor 2<br>
      Howden House<br>
      1 Union Street<br>
      Sheffield<br>
      S1 2SH<br>
    </p>
    <p>Detail the circumstances which led to the blue badge being taken, once we have that information the customer will be contacted, and a decision made around returning the blue badge.</p>
    <h3>Who Should I report a Death to</h3>
    <p>If the customer has an appointment with Registrars in Sheffield to report the death, they can sign up to 'Tell Us Once' meaning the customer does not have to report it to each individual service. Alternatively, the details can be taken today and passed to our back-office team who will update our records, the badge should be returned to:</p>
    <p>Customer Services<br>
      Floor 2<br>
      Howden House<br>
      1 Union Street<br>
      Sheffield<br>
      S1 2SH<br>
    </p>
  `,
  {
    buttonLabel: "Apply for or renew a Blue Badge",
    formName: "Blue_badge_application",
  },
  { typeKey: "apply_blue_badge_transfered_to_service" },
  { typeKey: "apply_blue_badge_information_provided" },
  {
    type: "Application",
    keywords: [
      "Blue badge application",
      "bluebadg",
      "bleu badge",
      "blue bage",
      "bluebadje",
      "blu badge",
      "badg",
      "bagde",
      "badeg",
      "badje",
      "badgge",
      "blu",
      "bleu",
      "bluw",
      "bloue",
      "bule",
      "applicotion",
      "aplication",
      "applcation",
      "applicaton",
      "aplicacion",
      "applucation",
    ],

    categories: ["Travel and Transport"],
  },
  { date: "12/09/2024", name: "Shahzad Athar" }
);

const disabledTravelPermit = new ContentTaT(
  "disabledTravelPermit",
  "Disabled Travel Permit",
  "What is the Eligibility Criteria for a Disabled Travel Permit",
  `
    <p>
      You may qualify for a pass if you're aged between 5 and 66 and meet one of the following criteria:
    </p>
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
      <p>
        If your application is successful, passes are issued between 1 and 5 years the timescale is dependent on your qualifying criteria, you will be made aware of the timescale when your application is approved.<br>
        If you have any supporting evidence/eligibility that has an end date, your pass will be issued up to that date.<br>
        If during the time you have the pass, you would turn 66, your pass will expire on your 66th birthday.
      </p>
      <h3>How do I appeal the decision</h3>
      <p>
        Appeals must be made in writing to:<br>
        Customer Services<br>
        Floor 2<br>
        Howden House<br>
        1 Union Street<br>
        Sheffield<br>
        S1 2SH
      </p>
      <h3>When can I use my Travel Permit</h3>
      <p>
        A disabled persons pass enables free public transport on buses, trams and trains.
      </p>
      <p>
        If the Pass is being used within South Yorkshire the pass can be used at all times of the day, however if the pass is being used beyond South Yorkshire (within England or Wales) your pass is only valid between 9:30am - 11pm.
      </p>
   `,
  {
    buttonLabel: "Apply for disabled travel permit",
    formName: "disabled_travel_pass",
  },
  false,
  { typeKey: "disabled_travel_pass_information_provided" },
  {
    type: "Apply",
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
      "dtp",
      "mobility",
    ],
    categories: ["Travel Permit", "Disablity"],
  },
  { date: "11/09/2024", name: "Dinah Williams" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const travelAndTransport = new ServiceTaT(
  "travelAndTransport",
  "Travel and Transport",
  `Public transport, driving, cycling, walking, travel cards and passes, school passes, travel news and updates…`,
  [disabledTravelPermit]
);
