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

const childTravelPasss = new ContentTaT(
  "childTravelPasss",
  "Child Travel Pass",
  "Apply or replace a child travel pass (Zoom Zero Travel Pass)",
  `
    <h3>Eligibility</h3>
    <p>ADD INFO</p>
    <h3>Misplaced Passes</h3>
    <p>
      If your child has misplaced their pass, you can order a replacement from
      Travel South Yorkshire.
    </p>
    <p>There will be a replacement fee of £7.</p>
    <p>
      Information on how to replace a misplaced pass can be found at:
      <a href="https://www.travelsouthyorkshire.com/zerofarepass" target="_blank"
        >www.travelsouthyorkshire.com/zerofarepass</a
      >
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>How is the distance from Home to School calculated?</summary>
          <div class="details-accordion-content">
            <p>
              We measure the distance between the house and the school by using a mapping
              tool. The maps will decide the most efficient route between the 2 points. It
              may include a route that involves footpaths, bridleways, and other pathways,
              as well as some recognised roads. A route will be viewed as ‘available’ even
              if the child would need to be accompanied along it by his or her parent, as
              long as such accompaniment is reasonably practicable from a road safety
              perspective.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>My child is 16 or over, what pass could I get?</summary>
          <div class="details-accordion-content">
            <p>Travel South Yorkshire offer a pass for anyone aged between 16-18</p>
            <p>Benefits include:</p>
            <ul>
              <li>Cheaper travel for work, school, college, or leisure.</li>
              <li>
                Travel anytime, anywhere in South Yorkshire for just 80p per journey
                on bus or tram and half fare on Northern trains.
              </li>
              <li>
                Valid through Summer months so you can enjoy cheaper travel in
                August.
              </li>
              <li>Access money saving tickets for young people.</li>
            </ul>
          </div>
        </details>
        <details class="details-accordion">
          <summary>I'm not eligible, are there any other passes?</summary>
          <div class="details-accordion-content">
            <p>
              Travel South Yorkshire offer a MegaTravel Pass for children that are
              not eligible for a Children's Travel Pass.
            </p>
            <p>
              With a MegaTravel Pass you can travel anytime, anywhere in South
              Yorkshire for a single fare of £1.00 on bus or tram. You can also buy
              discounted 7-day tickets for young people, which may work out cheaper
              if you travel regularly. You’ll also be able to travel half price on
              local trains.
            </p>
          </div>
        </details>
      </div>
    </details>
  `,
  {
    buttonLabel: "Apply for childrens travel pass",
    formName: "childrens_travel_pass",
  },
  { typeKey: "" },
  { typeKey: "childrens_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "Zoom Zero Travel Pass",
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
    categories: ["Travel and Transport"],
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

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const travelAndTransport = new ServiceTaT(
  "travelAndTransport",
  "Travel and Transport",
  `Public transport, driving, cycling, walking, travel cards and passes, school passes, travel news and updates…`,
  [childTravelPasss, disabledTravelPermit]
);
