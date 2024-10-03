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

class FormTaT extends CoreTaT {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const eligibilityCTP = new ContentTaT(
  "childrensTravelPass",
  "What is the Eligibility criteria for a Children’s Travel Pass?",
  "Description",
  `
    <h3>What is the Eligibility criteria for a Children’s Travel Pass?</h3>
    <p>
      From April 2024, eligible working parents of 2-year-olds can access 15 hours
      childcare support. By September 2025, eligible working families with children
      aged between 9 months and 5 years old will be entitled to 30 hours of
      childcare support. The changes are being introduced gradually to make sure
      that providers can meet the needs of more families. This means that:
    </p>
    <p>
      From September 2025, eligible working parents of children from 9 months to
      school age will be entitled to 30 hours of childcare a week. Like the existing
      offer, depending on your provider, these hours can be used over 38 weeks of
      the year, or up to 52 weeks if you use fewer than your total hours per week.
    </p>
    <p>
      All eligible children are entitled to at least 570 hours of funded childcare
      each year.
    </p>
    <p>
      FEL (Funded Early Learning) helps children learn through play activities. Some
      benefits that parents have seen:
      <ul>
        <li> children making friends their own age</li>
        <li> children behaving better with grown-ups</li>
        <li> children improving their speech and language</li>
        <li> children settle down and concentrate for longer</li>
        <li> children are more willing to try new foods which improves their nutrition</li>
        <li> younger children improving their sleeping patterns and toilet training</li>
      </ul>
    </p>
    <p>
      The funded hours also help parents and carers access employment and training,
      spend time with their younger children or just find time to get things done.
    </p>
    <p>
      The hours must be taken over a minimum of 38 weeks (15 hours a week, or 30 if
      entitled to additional hours) but can be taken over more weeks: for example,
      your child could take 12 hours a week for 47½ weeks. Talk to your childcare
      provider about what options are available. For Funded Early Learning enquiries
      and more information on the Family Hub for Families, please contact the Family
      Hubs -<b>0114 273 5665.</b>
    </p>
    <p>
      For information about the new 2-year-old extended working entitlement (15
      hours offer starts April 2024, from 9 months old from September 2024) please
      visit the childcare choices page, there is an assessment tool offering
      families details of childcare support they might be eligible for and a link to
      apply to HMRC. <b> www.childcarechoices.gov.uk</b>.
    </p>
    <p>
      From September 2025, eligible working parents of children from 9 months to
      school age will be entitled to 30 hours of childcare a week
    </p>
  `,
  {
    buttonLabel: "Apply for childrens travel pass",
    formName: "childrens_travel_pass",
  },
  { typeKey: "childrens_travel_pass_transfered_to_service" },
  { typeKey: "childrens_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "childrens travel pass",
      "childrens travel pas",
      "childrens travle pass",
      "childrens travelp ass",
      "childrens trave pass",
      "childrens travell pass",
      "childrens",
      "childrenss",
      "childrens",
      "childrenss",
      "childerns",
      "travil",
      "traval",
      "travle",
      "trevel",
      "tavel",
      "pas",
      "pess",
      "passs",
      "passe",
      "pazs",
    ],
    categories: ["travel and transport", "disability and mental health"],
  },
  { date: "26/09/2024", name: "Gee Whitehouse" }
);

const distanceCTP = new ContentTaT(
  "distancectp",
  "How is the distance from Home to School calculated",
  "Description",
  `
    <h3>How is the distance from Home to School calculated</h3>
    <p>
      We measure the distance between the house and the school by using a mapping
      tool. The maps will decide the most efficient route between the 2 points. It
      may include a route that involves footpaths, bridleways, and other pathways,
      as well as some recognised roads. A route will be viewed as ‘available’ even
      if the child would need to be accompanied along it by his or her parent, as
      long as such accompaniment is reasonably practicable from a road safety
      perspective.
    </p>
  `,
  {
    buttonLabel: "Apply for childrens travel pass",
    formName: "childrens_travel_pass",
  },
  { typeKey: "childrens_travel_pass_transfered_to_service" },
  { typeKey: "childrens_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "childrens travel pass",
      "childrens travel pas",
      "childrens travle pass",
      "childrens travelp ass",
      "childrens trave pass",
      "childrens travell pass",
      "childrens",
      "childrenss",
      "childrens",
      "childrenss",
      "childerns",
      "travil",
      "traval",
      "travle",
      "trevel",
      "tavel",
      "pas",
      "pess",
      "passs",
      "passe",
      "pazs",
    ],
    categories: ["travel and transport", "disability and mental health"],
  },
  { date: "26/09/2024", name: "Gee Whitehouse" }
);

const over16CTP = new ContentTaT(
  "distancectp",
  "How is the distance from Home to School calculated",
  "Description",
  `
    <h3>My child is 16 or over, what pass could I get</h3>
    <p>Travel South Yorkshire offer a pass for anyone aged between 16-18</p>
    <p>Benefits include:
      <ul>
        <li>Cheaper travel for work, school, college, or leisure.</li>
        <li>
          Travel anytime, anywhere in South Yorkshire for just 80p per journey on bus
          or tram and half fare on Northern trains.
        </li>
        <li>
          Valid through Summer months so you can enjoy cheaper travel in August.
        </li>
        <li>Access money saving tickets for young people.</li>
      </ul>
    </p>
  `,
  {
    buttonLabel: "Apply for childrens travel pass",
    formName: "childrens_travel_pass",
  },
  { typeKey: "childrens_travel_pass_transfered_to_service" },
  { typeKey: "childrens_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "childrens travel pass",
      "childrens travel pas",
      "childrens travle pass",
      "childrens travelp ass",
      "childrens trave pass",
      "childrens travell pass",
      "childrens",
      "childrenss",
      "childrens",
      "childrenss",
      "childerns",
      "travil",
      "traval",
      "travle",
      "trevel",
      "tavel",
      "pas",
      "pess",
      "passs",
      "passe",
      "pazs",
    ],
    categories: ["travel and transport", "disability and mental health"],
  },
  { date: "26/09/2024", name: "Gee Whitehouse" }
);

const notEligibleCTP = new ContentTaT(
  "notEligibleCTP",
  "If I am not eligible for a Childrens Travel Pass, are there any other Passes available",
  "Description",
  `
    <h3>
      If I am not eligible for a Children’s Travel Pass, are there any other Passes
      available?
    </h3>
    <p>
      Travel South Yorkshire offer a MegaTravel Pass for children that are not
      eligible for a Children's Travel Pass.
    </p>
    <p>
      With a MegaTravel Pass you can travel anytime, anywhere in South Yorkshire for
      a single fare of £1.00 on bus or tram. You can also buy discounted 7-day
      tickets for young people, which may work out cheaper if you travel regularly.
      You’ll also be able to travel half price on local trains.
    </p>
    <p>MegaTravel Pass Information.</p>
    <h3>What should i do if my child has lost their Children’s Travel Pass?</h3>
    <p>
      If your child has lost their pass, you can order a replacement from Travel
      South Yorkshire.
    </p>
    <p>There will be a replacement fee of £7.</p>
    <p>
      Information on how to replace a Lost pass can be found at: Lost Children's
      Travel Pass
    </p>
  `,
  {
    buttonLabel: "Apply for childrens travel pass",
    formName: "childrens_travel_pass",
  },
  { typeKey: "childrens_travel_pass_transfered_to_service" },
  { typeKey: "childrens_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "childrens travel pass",
      "childrens travel pas",
      "childrens travle pass",
      "childrens travelp ass",
      "childrens trave pass",
      "childrens travell pass",
      "childrens",
      "childrenss",
      "childrens",
      "childrenss",
      "childerns",
      "travil",
      "traval",
      "travle",
      "trevel",
      "tavel",
      "pas",
      "pess",
      "passs",
      "passe",
      "pazs",
    ],
    categories: ["travel and transport", "disability and mental health"],
  },
  { date: "26/09/2024", name: "Gee Whitehouse" }
);

const lostPassCTP = new ContentTaT(
  "notEligibleCTP",
  "What should I do if my child has lost their Children’s Travel Pass",
  "Description",
  `
    <h3>What should I do if my child has lost their Children’s Travel Pass</h3>
    <p>
      If your child has lost their pass, you can order a replacement from Travel
      South Yorkshire.
    </p>
    <p>There will be a replacement fee of £7.</p>
    <p>
      Information on how to replace a Lost pass can be found at: Lost Children's
      Travel Pass
    </p>
  `,
  {
    buttonLabel: "Apply for childrens travel pass",
    formName: "childrens_travel_pass",
  },
  { typeKey: "childrens_travel_pass_transfered_to_service" },
  { typeKey: "childrens_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "childrens travel pass",
      "childrens travel pas",
      "childrens travle pass",
      "childrens travelp ass",
      "childrens trave pass",
      "childrens travell pass",
      "childrens",
      "childrenss",
      "childrens",
      "childrenss",
      "childerns",
      "travil",
      "traval",
      "travle",
      "trevel",
      "tavel",
      "pas",
      "pess",
      "passs",
      "passe",
      "pazs",
    ],
    categories: ["travel and transport", "disability and mental health"],
  },
  { date: "26/09/2024", name: "Gee Whitehouse" }
);

const disabledTravelPermit = new ContentTaT(
  "disabledTravelPermit",
  "Disabled Travel Permit",
  "What is the Eligibility Criteria for a Disabled Travel Permit",
  `
    <p>
      You may qualify for a pass if you're aged between 5 and 66 and meet one of the
      following criteria:
      <ul>
        <li>a current blue badge holder</li>
        <li>registered blind, partially sighted or deaf</li>
        <li>registered with Social Services as having a learning disability</li>
        <li>unable to use both of your arms</li>
        <li>
          unable to drive because of a health problem, such as autism or epilepsy
        </li>
        <li>
          currently suffering from, a psychiatric disorder, or have an enhanced level
          care programme approach
        </li>
        <li>unable to speak</li>
        <li>
          suffering from a substantial and long-term disabilities or injuries which
          severely impacts your ability to walk
        </li>
      </ul>
    </p>
    <h3>How long does a Disabled Travel Permit last for</h3>
    <p>
      If your application is successful, passes are issued between 1 and 5 years the
      timescale is dependent on your qualifying criteria, you will be made aware of
      the timescale when your application is approved.<br />
      If you have any supporting evidence/eligibility that has an end date, your
      pass will be issued up to that date.<br />
      If during the time you have the pass, you would turn 66, your pass will expire
      on your 66th birthday.
    </p>
    <h3>How do I appeal the decision</h3>
    <p>Appeals must be made in writing to:<br />
      <address>
        Customer Services<br />
        Floor 2<br />
        Howden House<br />
        1 Union Street<br />
        Sheffield<br />
        S1 2SH
      </address>
    </p>
    <h3>When can I use my Travel Permit</h3>
    <p>
      A disabled persons pass enables free public transport on buses, trams and
      trains.
    </p>
    <p>
      If the Pass is being used within South Yorkshire the pass can be used at all
      times of the day, however if the pass is being used beyond South Yorkshire
      (within England or Wales) your pass is only valid between 9:30am - 11pm.
    </p>
   `,
  {
    buttonLabel: "Apply for disabled travel permit",
    formName: "disabled_travel_pass",
  },
  { typeKey: "" },
  { typeKey: "disabled_travel_pass_information_provided" },
  {
    type: "Apply",
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

const childrensTravelPass = new MenuTaT(
  "ChildrensTravelPass",
  "Childrens Travel Pass",
  "Discription",
  [eligibilityCTP, distanceCTP, over16CTP, notEligibleCTP, lostPassCTP]
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const travelAndTransport = new ServiceTaT(
  "travelAndTransport",
  "Travel and Transport",
  `Public transport, driving, cycling, walking, travel cards and passes, school passes, travel news and updates…`,
  [childrensTravelPass, disabledTravelPermit]
);
