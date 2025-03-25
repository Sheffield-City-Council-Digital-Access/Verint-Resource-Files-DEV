class CoreEaR {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceEaR extends CoreEaR {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuEaR extends CoreEaR {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentEaR extends CoreEaR {
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

class FormEaR extends CoreEaR {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

// #region Annual Canvass
  const canvassForm = new ContentEaR(
    "canvassForm",
    "Canvass Form (CF)",
    "How to complete the Canvass Form to confirm or update voter registration details for your household.",
    `
      <section class="info-panel" role="region" aria-label="Information panel">
        <p>
            Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
        </p>
      </section>
      <p>
        Any residential property that does not respond to the CCB form will receive a
        <strong>Canvass Form (CF)</strong>.
      </p>
      <p>
        Someone in the property should check the details on the form are correct and
        up to date. This form <strong>requires a response</strong>, even if the
        details on it are correct. Responses can be made online at
        <a href="http://www.elecreg.co.uk/sheffield" target="_blank">www.elecreg.co.uk/sheffield</a> 
        or by returning the completed form in the reply envelope. If there are changes
        or to confirm there are no changes. If everything is correct, this can be
        confirmed by SMS or phone instead, using the details on the form. 
        <br>
        <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=elecreg'"> Send Link </button>
      </p>
      <p>
        <strong
          >You need to include the name and nationality of everyone aged 16 or over
          who is resident and eligible to register for voting.</strong
        >
        If there are no eligible residents, you should state why this is the case.
      </p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "" },
    { typeKey: "annual_canvass_information_provided" },
    {
      type: "Request",
      keywords: [
        "elections",
        "ele",
        "elect",
        "vote",
        "voting",
        "voters",
        "electorial",
        "elect",
        "elec",
        "canvass"
      ],
      categories: ["Elections and Referendums", "Electoral"],
    },
    { date: "03/12/2024", name: "Andy Walker" }
  );

const ccaCCBorCanvassForms = new ContentEaR(
  "ccaCCBorCanvassForms",
  "CCB or Canvass Form",
  "CCB or Canvass Forms - Completion of CCB or Canvass Forms",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Any residential property that does not respond to the CCB form will receive a
      <strong>Canvass Form (CF)</strong>.
    </p>
    <p>
      Someone in the property should check the details on the form are correct and
      up to date. This form <strong>requires a response</strong>, even if the
      details on it are correct. Responses can be made online at: 
      <a href="http://www.elecreg.co.uk/sheffield" target="_blank">www.elecreg.co.uk/sheffield</a> 
      or by returning the completed form in the reply envelope. If there are changes
      or to confirm there are no changes. If everything is correct, this can be
      confirmed by SMS or phone instead, using the details on the form.
      <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=elecreg'"> Send Link </button>
    </p>
    <p>
      <strong> You need to include the name and nationality of everyone aged 16 or over
        who is resident and eligible to register for voting.</strong>
      If there are no eligible residents, you should state why this is the case.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "e" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "CCA", 
      "CCB",
      "Canvass"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const ccaCCBForms = new ContentEaR(
  "ccaCCBForms",
  "CCA/B Forms",
  "CCA and CCB forms for annual electoral register checks, including how to respond and update details.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Each year, the <strong>Electoral Registration Officer (ERO)</strong> is
      required to check the details held on the electoral register. Every
      residential property will receive either a <strong>CCA</strong> or
      <strong>CCB</strong> form.
    </p>
    <p>
      <strong>Properties receiving a CCA</strong> - Someone in the property should
      check the details on the form are correct and up to date. If they are, the
      form can be ignored. If there are any updates to make (such as a change of
      name, adding or removing someone), they should go online at
      <a href="http://www.elecreg.co.uk/sheffield" target="_blank">www.elecreg.co.uk/sheffield</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=elecreg'"> Send Link </button>
      and make the change using the unique security codes printed on the form, or
      contact Electoral Services directly if they cannot go online.
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=elecreg'"> Send Link </button>
    </p>
    <p>
      <strong>Properties receiving a CCB</strong> - Someone in the property should
      check the details on the form are correct and up to date. This form
      <strong>requires a response</strong>, even if the details on it are correct.
      Responses can be made online at
      <a href="http://www.elecreg.co.uk/sheffield" target="_blank">www.elecreg.co.uk/sheffield</a> 
      if there are changes or to confirm there are no changes. If everything is
      correct, this can be confirmed by SMS or phone instead, using the details on
      the form. They can contact Electoral Services directly if they cannot go
      online.<br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=elecreg'"> Send Link </button>
    </p>
    <p>
      <strong
        >You need to include the name and nationality of everyone aged 16 or over
        who is resident and eligible to register for voting.</strong
      >
      If there are no eligible residents, you should state why this is the case.
    </p>
    <p>
      If you do not want to appear on the electoral register in Sheffield you can write to us
      stating that the address you are living at is a second home and send it to: 
      <address>
        Electoral Services<br/>
        Town Hall<br/>
        Sheffield, S1 2HH
      </address>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "CCA",
      "CCB"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "28/02/2025", name: "Dinah Williams" }
);

const informationChangeandHowToUpdateIt = new ContentEaR(
  "informationChangeAndHowToUpdateIt",
  "Information change and how to update it",
  "What happens if I change my name, address, nationality, or anything else on the form?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If anyone listed on the form is not living at your address, their name should
      be clearly crossed out. If people living at the property are not shown, the
      name and nationality of everyone aged over 16 who is resident and eligible to
      register for voting should be added.
    </p>
    <p>
      If your nationality has changed, correct this and return the form; we might
      need you to re-register if your eligibility changes (e.g. from EU nationality
      to British). The form will have instructions on how to change your
      <strong>open register choice</strong>.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "CCA", 
      "CCB",
      "Canvass"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const lostCCACCBorCanvassForm = new ContentEaR(
  "lostCCACCBorCanvassForm",
  "Lost my CCA/B or Canvass Form",
  "How to request a duplicate CCA, CCB, or Canvass Form and respond if forms are lost.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If you have lost your form then a duplicate can be sent, or you can wait for a
      reminder. If there are no changes to make, I can confirm this to Electoral
      Services for you.
    </p>
    <p>
      If the reminders are lost, your home will be visited to check why forms
      haven't been completed. If you can remember your HEF's reference you can
      complete the form at:
      <a href="https://www.hef-response.co.uk/" target="_blank">https://www.hef-response.co.uk/</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=HEF%20Response'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "CCA", 
      "CCB",
      "Canvass"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "03/12/2024", name: "Andy Walker" }
);

const removalFromRegister = new ContentEaR(
  "removalFromRegister",
  "Removal from Register",
  "What happens if I move out of a property?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If you have received a CCA, CCB, or CF with a previous resident's details on,
      cross through these details and add any new residents' names and nationalities
      or complete the <strong>Empty Property</strong> section on the online or paper
      form.
    </p>
    <p>
      If you are reporting you have left or are leaving a property, please note this
      on the form and the date you will be leaving.
    </p>
    <p>
      We can only remove a name if we are informed a person has died, if another ERO
      informs us they have registered in their area, or if we determine that the
      person no longer meets the registration requirements. If you no longer want to
      vote, we cannot remove you from the register, as it is a legal requirement to
      be registered.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "death",
      "died",
      "ded",
      "dea",
      "remove",
      "removal",
      "reg",
      "register",
      "dead"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const studentVoters = new ContentEaR(
  "studentVoters",
  "Student Voters",
  "The voting rights and registration processes for students with term-time and home addresses.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Students can be registered in both their term-time and home address but can
      only vote once at a national election or referendum (e.g. they can only vote
      once in a Parliamentary Election). At local elections you can vote in both
      places (providing they are different areas).
    </p>
    <p>
      Students at Sheffield Hallam or the University of Sheffield will be asked if
      they want their details to be shared with Sheffield's ERO as part of their
      enrolment. If an election is taking place soon, it is faster to register
      online.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "student"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "03/12/2024", name: "Andy Walker" }
);

const annualCanvassMenu = new MenuEaR(
  "annualCanvassMenu",
  "Annual Canvass",
  "The household canvass takes place each year to enable us to ensure the electoral register is up to date for each residential property in the city.",
  [
    canvassForm,
    ccaCCBorCanvassForms,
    ccaCCBForms,
    informationChangeandHowToUpdateIt,
    lostCCACCBorCanvassForm,
    removalFromRegister,
    studentVoters
  ]
);

// #endregion Annual Canvass

// #region Elections and Voting

const assistanceForPartiallySightedVoters = new ContentEaR(
  "assistanceForPartiallySightedVoters",
  "Assistance for partially sighted Voters",
  "Voting assistance options for partially sighted voters, including tactile devices, large print ballots, and postal voting with signature waivers.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      <strong>Voting in Person:</strong>Large print copies of ballot papers are
      provided within the polling station. The presiding officer or a family member
      can assist the voter by reading aloud the candidates list and marking the
      ballot paper on behalf of the voter (if this type of assistance is given, it
      will be recorded by the presiding officer). A tactile voting device that uses
      braille and numbered flaps is also provided to help blind or partially sighted
      voters identify where on the ballot paper they can mark to vote. The presiding
      officer can also read the candidate list in this instance.
    </p>
    <p>
      <strong>Voting by Postal Voting:</strong>If the voter is able to sign their
      name, then the normal postal process can be followed. If the voter is unable
      to sign their name, then they can apply for a postal vote with a signature
      waiver. This application must be supported.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "blind",
      "sight",
      "vote",
      "voters",
      "voting",
      "disabled"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "03/12/2024", name: "Andy Walker" }
);


const howToCompletePostalVote = new ContentEaR(
  "howToCompletePostalVote",
  "How to complete Postal Vote",
  "Step-by-step guide on completing a postal vote, including marking, sealing, and returning your ballot securely.",
  `
  <p>
     If you would prefer to return your ballot paper by post rather than going to the polling station you must apply for a postal vote.
     If you vote by post, your poll card will confirm the address where you have asked us to send your postal vote pack,
     what to do if you have lost or spoilt all or part of your pack, or if you haven’t received it.
  </p>
  <p>It is now possible to apply to vote by post using the government’s online service or by using a paper form requested from us.
     However, you must now provide your national insurance number as part of the application. Signatures must still be handwritten, not typed in.
  </p>
  <p>
  <a href="https://www.gov.uk/apply-for-a-postal-vote">GOV.UK: Apply for a postal vote</a>
  </p>
  <p>
    You can send a scanned copy of a paper form by email to: 
    <a href="mailto:electoralservices@sheffield.gov.uk">electoralservices@sheffield.gov.uk</a> 
    or post the completed form to:
    </p>
       <address>
        Electoral Services<br>
        Town Hall<br>
        Pinstone Street<br>
        Sheffield<br>
        S1 2HH
      </address>      
    <p>
    You can get a replacement for a lost or spoiled ballot paper up to 5pm on polling day from the Town Hall.</p>
     <section class="info-panel" role="region" aria-label="Information panel">
    <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
    </p>
      </section>
    <p>
      <Strong>Advisor Note:</Strong> You can also access instructions on how to complete a postal vote via weberos.
     </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "post",
      "vote",
      "voting",
      "voters"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "17/03/2025", name: "Dinah Williams" }
);

const localElections = new ContentEaR(
  "localElections",
  "Local Elections",
  "Understanding Sheffield's four-year local election cycle and how to find information about your ward councillors.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Local elections are held on a four-year cycle. There is an election for the
      first three years and then no election in the fourth year. In these elections,
      you are voting to elect Councillors of Sheffield who will represent your views
      for the ward (area) in which you live. Further info on Councillors can be
      found using the link below:
      <a href="https://www.sheffield.gov.uk/councillors" target="_blank">https://www.sheffield.gov.uk/councillors</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Councillors'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "post",
      "postal",
      "loc",
      "loca"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const parishElections = new ContentEaR(
  "parishElections",
  "Parish Elections",
  "Parish Elections in Sheffield, including eligibility, election timing, and details about the city's three parish councils.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Parish Councils are separate local authorities to the City Council, with their
      own elected members. They are wholly contained within the City Council
      boundary. A parish councillor can stand for election to the City Council and
      vice versa.
    </p>
    <p>
      Parish elections are held once every four years and usually at the same time
      as an election to the City Council. There are three parish councils in
      Sheffield, which are split into smaller parish wards:
      <ul>
        <li>Bradfield Parish Council</li>
        <li>Ecclesfield Parish Council</li>
        <li>Stocksbridge Town Council</li>
      </ul>
    </p>
    <p>
      You can only vote at a Parish election if you live within the parish. 
      More details around the Parish Elections can be found here:
      <a href="https://www.sheffield.gov.uk/home/your-city-council/election-types"target="_blank">https://www.sheffield.gov.uk/home/your-city-council/election-types</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Types%20of%20elections'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "paris",
      "pari"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const postalVoteNoLongerRequired = new ContentEaR(
  "postalVoteNoLongerRequired",
  "Postal Vote no longer required",
  "how to cancel a postal vote application, including deadlines and required documentation.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You can cancel your application for a postal vote at any time up to the postal
      vote application/change deadline. After this time, you can use the postal vote
      pack and hand it in to any polling station in your ward or the Town Hall. You
      must complete the whole pack as normal and also complete a postal vote hand
      delivery form when dropping it off (otherwise it will be rejected).
    </p>
    <p>
      In order to cancel your postal vote, you will need to send a letter to
      Electoral Services at:
      <address>
        Electoral Services<br>
        Town Hall<br>
        Sheffield, S1 2HH
      </address>
    </p>
    <p>
      Or scan a letter and send it via email to:
      <a href="mailto:electoralservices@sheffield.gov.uk">electoralservices@sheffield.gov.uk</a>
    </p>
    <p>Your letter must include:
      <ul>
        <li>Your name</li>
        <li>Your address</li>
        <li>Your signature</li>
        <li>Statement that you wish to cancel your postal vote</li>
      </ul>
    </p>
    <p>
      We cannot do this over the phone as the request must be made in writing. This
      is a security and fraud prevention measure.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "paris",
      "pari"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "03/12/2024", name: "Andy Walker" }
);

const postalVoteReceivedButNotRequested = new ContentEaR(
  "postalVoteReceivedButNotRequested",
  "Postal Vote Received But Not Requested",
  "What happens if I have received a postal ballot and did not request one or cannot remember requesting one?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If you have received a postal ballot and did not request one or cannot
      remember requesting one, you can ask for this to be cancelled, as long as this
      is before 5pm, 11 working days ahead of an election, or use it and hand it in
      to any polling station in your ward or at the Town Hall. You must complete a
      postal vote hand delivery form when you drop it off, otherwise, it will be
      rejected.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "post",
      "postal"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const postalVoteSendingAbroad = new ContentEaR(
  "postalVoteSendingAbroad",
  "Voting abroad with a Postal Vote",
  "The process and risks of receiving and returning postal votes from abroad.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Postal votes can be sent abroad, but it is at your own risk. We are unable to
      send postal votes out until around 2 weeks before polling day. If you are
      confident that you have enough time to receive the ballot paper and send it
      back to us before 10pm on polling day, we will be happy to send it anywhere in
      the world.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "03/12/2024", name: "Andy Walker" }
);

const spoiltorDamagedPostalVote = new ContentEaR(
  "spoiltorDamagedPostalVote",
  "Spoilt or Damaged Postal Vote",
  "How to request a replacement for a spoiled or damaged postal vote, including in-person and postal options.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      We can issue replacement postal vote ballot papers in the event of the
      original being damaged or a mistake being made on the ballot paper. You can
      request a replacement for a spoiled/damaged pack immediately. But we will need
      the whole pack/what is left to be returned to us before we can do this.
    </p>
    <p>
      <strong>In Person:</strong> You need to take the spoilt postal vote pack to
      the Town Hall – you will need to take ID.
    </p>
    <p>
      <strong>By Post:</strong> You need to put the entire pack into a plain
      envelope (not either of the envelopes the postal vote came with) with a
      covering letter explaining the problem and send it to:
      <address>
        Electoral Services<br />
        Town Hall<br />
        Sheffield, S1 2HH
      </address>
    </p>
    <p>We will then re-issue the ballot by post.</p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "post",
      "postal"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "03/12/2024", name: "Andy Walker" }
);

const whereDoIVote = new ContentEaR(
  "whereDoIVote",
  "Where do I vote?",
  "An interactive map to find designated polling stations based on address.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <iframe
      src="https://sheffieldcc.maps.arcgis.com/apps/instant/sidebar/index.html?appid=0247a5d9717149b1b85bfcb821e41e3a"
      style="height: 400px; width: 100%"
    ></iframe>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "CCA", 
      "CCB",
      "Canvass"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "03/12/2024", name: "Andy Walker" }
);

const frequentlyAskedQuestions = new ContentEaR(
  "frequentlyAskedQuestions",
  "Frequently Asked Questions",
  "",
  `
  <h3>Frequently Asked Questions</h3>
    <p>
    <strong>Can I register to vote if I’m homeless, live on a houseboat, in a 
    caravan, in a mental hospital, or remanded in custody?</strong>
    </p>
    <p>
    For individuals in these situations, please contact the Electoral Services 
    office directly for assistance with registration.
    </p>
<h3>Do I need ID to vote?</h3>
<p>
  You will need to show one of the accepted photo ID documents
</p>

<details class="accordion">
  <summary class="accordion-header">
    <h3>You must present one of the following forms of photographic 
    identification in order to vote in person at a polling station:</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>A passport issued by the UK, any of the Channel Islands, 
      the Isle of Man, a British Overseas Territory, 
      an EEA state or a Commonwealth country</li>
      <li>A driving licence issued by the UK, any of the Channel Islands, 
      the Isle of Man or an EEA state</li>
      <li>A biometric immigration document</li>
      <li>An identity card bearing the Proof of Age Standards Scheme 
      hologram (a PASS card)</li>
      <li>Ministry of Defence Form 90 (Defence Identity Card)</li>
      <li>A Blue Badge</li>
      <li>A national identity card issued by an EEA state</li>
      <li>An Older Person’s Bus Pass</li>
      <li>A Disabled Person’s Bus Pass</li>
      <li>An Oyster 60+ Card</li>
      <li>A Freedom Pass</li>
      <li>A Scottish National Entitlement Card issued in Scotland</li>
      <li>A 60 and Over Welsh Concessionary Travel Card issued in Wales</li>
      <li>A Disabled Person’s Welsh Concessionary Travel Card issued in Wales</li>
      <li>A Senior SmartPass issued in Northern Ireland</li>
      <li>A Registered Blind SmartPass or Blind Person’s SmartPass 
      issued in Northern Ireland</li>
      <li>A War Disablement SmartPass or War Disabled SmartPass 
      issued in Northern Ireland</li>
      <li>A 60+ SmartPass issued in Northern Ireland</li>
      <li>A Half Fare SmartPass issued in Northern Ireland</li>
      <li>An Electoral Identity Card issued in Northern Ireland</li>
      <li>A Voter Authority Certificate or temporary Voter Authority Certificate</li>
    </ul>
    <p>
      If your photographic identification document has expired, 
      it will still be accepted so long as the photograph is still a 
      good likeness of you, unless it is a temporary Voter Authority 
      Certificate which is not valid for use on the date of poll.
    </p>
    <p>
      You may be required to provide further proof of identity if there 
      is any discrepancy between your name as shown on your form of photographic 
      identification and the name of the elector that you claim to be.
    </p>
  </div>
</details>

<p>
  or a voter authority certificate at the polling station to receive a ballot paper. 
  If you appoint a proxy to vote for you, they must also show their own photo 
  ID at the polling station.
</p>
    <p>
    If you choose to vote by post, you do not need photographic ID.
    </p>
    <h3>I have no I.D.</h3>
    <p>
    The voter can apply for a Voter Authority Certificate. 
    Transfer the customer to Electoral Services back office 
    to be advised on how to apply for this.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "faq",
      "fqa",
      "frequently asked questions",
      "frequentley asked questions",
      "frequently askd questions",
      "frequentley askd questions"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "02/12/2024", name: "Andy Walker" }
);

const electionsAndVoting = new MenuEaR(
  "electionsAndVoting",
  "Elections and Voting",
  "Information about Voting in these elections can be found here.",
  [
    assistanceForPartiallySightedVoters,
    localElections,
    parishElections,
    postalVoteNoLongerRequired,
    postalVoteReceivedButNotRequested,
    postalVoteSendingAbroad,
    spoiltorDamagedPostalVote,
    whereDoIVote,
    frequentlyAskedQuestions
  ]
);

// #endregion Elections and Voting

// #region Postal or Proxy Voting

const applyingForPostalVote = new ContentEaR(
  "applyingForPostalVote",
  "Applying for Postal Vote",
  "How to apply for a postal vote online, via email, or in person, including requirements for a hand-written signature.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You can choose to vote using a postal vote in all elections that you are
      eligible to vote in. You can apply for a postal vote online at
      <a href="https://www.gov.uk/apply-postal-vote" target="_blank">www.gov.uk/apply-postal-vote</a>
      or by completing a paper form. You must provide a hand-written signature
      however you apply. You can obtain the appropriate form by the following means:
      <ul>
        <li>
          Online at <a href="https://www.gov.uk/apply-postal-vote" target="_blank">www.gov.uk/apply-postal-vote</a> 
        </li>
        <li>Email Link to Customer</li>
        <li>From Porters Lodge at the Town Hall or First Point at Howden House</li>
      </ul>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Apply%20for%20a%20postal%20vote'"> Send Link </button><br/>
      <br/>
      If the customer cannot apply online, please send an email to<a href="mailto:elections@sheffield.gov.uk">electoral services</a> and select transferred to service.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "applying_for_postal_vote_transferred_to_service" },
  { typeKey: "applying_for_postal_vote_infomation_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "post",
      "postal",
      "vote",
      "voting",
      "voters"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const postalProxyVote = new ContentEaR(
  "postalProxyVote",
  "Postal Proxy Vote",
  "How to apply for a postal proxy vote, including form request details and deadlines for submission.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If a person has been appointed as a proxy voter for someone else, but cannot
      vote in person, they can apply to vote on their behalf by post. This is known
      as a postal proxy. The person who will be voting as the Proxy for a registered
      elector must request a postal proxy form for themselves. This cannot be done
      online.
    </p>
    <p>
      The form must be requested from the Electoral Services at the elector's local
      authority, not the proxy's. The appointed proxy must submit the postal proxy
      application before the postal voting application deadline.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "post",
      "postal",
      "vote",
      "voting",
      "voters",
      "prox",
      "proxy"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const postalVoteNotReceivedorLost = new ContentEaR(
  "postalVoteNotReceivedorLost",
  "Postal Vote not received or Lost",
  "What to do if your postal vote pack is lost or not received, including how to request or collect a replacement.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If you have not received your postal voting pack by 4 working days before
      polling day, or you have lost it, please contact electoral services to ask for
      a replacement. Replacements for lost or undelivered postal vote packs can only
      be made from 4 working days before polling day.
    </p>
    <p>
      Alternatively, you can arrange to collect it from the Town Hall up to 5pm on
      Polling Day. You will be required to produce ID.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "post",
      "postal",
      "vote",
      "voting",
      "voters",
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const requestproxyVote = new ContentEaR(
  "requestproxyVote",
  "Request Proxy Vote",
  "How to request a proxy vote, including eligibility, process, and options for your proxy to vote by post.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You can request to vote by proxy to have another person vote on your behalf at
      your Polling Station. This can be done online at
      <a href="https://www.gov.uk/apply-proxy-vote" target="_blank">www.gov.uk/apply-proxy-vote</a> 
      or using a paper form.
      <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Apply%20for%20a%20proxy%20vote'"> Send Link </button>
    </p>
    <p>
      The Proxy Voter cannot vote at their own Polling Station for your vote, unless
      both voters share the same polling station. The proxy must be registered and
      eligible to vote at the election. Your proxy can ask to vote for you by post.
    </p>
    <p>
      You can vote yourself if your proxy has not already done so and has not got a
      postal vote as proxy.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const swappingFromPostalToProxyVoting = new ContentEaR(
  "swappingFromPostalToProxyVoting",
  "Swapping from Postal to Proxy Voting",
  "How to switch from postal to proxy voting, including deadlines and reapplication requirements.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You can do this at any time of the year, but specific deadlines apply before
      an election. You will need to do this before the deadline for registering to
      vote by post (11 working days before polling day). This is because you cannot
      have a postal vote and a proxy vote at the same time.
    </p>
    <p>
      If you have indicated this is a temporary arrangement, you will need to
      reapply to vote by post again after the election.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const swappingFromProxyToPostalVoting = new ContentEaR(
  "swappingFromProxyToPostalVoting",
  "Swapping from Proxy to Postal Voting",
  "How to switch from proxy to postal voting, including deadlines and eligibility for long-term proxy arrangements.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You can do this at any time of the year, but specific deadlines apply before
      an election. You will need to do this before the deadline for registering to
      vote by post (11 working days before polling day). This is because you cannot
      have a postal vote and a proxy vote at the same time.
    </p>
    <p>
      A proxy vote will only last for poll date unless there is a specific reason it
      can be in force for longer (e.g. a disability or living overseas (Overseas
      Electors only)).
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const waiverApplication = new ContentEaR(
  "waiverApplication",
  "Waiver Application",
  "Waiver applications for postal and proxy voting when a voter cannot provide a signature.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      A waiver is used for postal and proxy voting applications when a voter is
      unable to sign their name. Subject to approval, the postal voting pack sent
      out at an election will have the words 'Signature not required' instead of a
      signature box.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const postalorProxyVoting = new MenuEaR(
  "postalOrProxyVotingas",
  "Postal or Proxy Voting",
  "If you want someone to vote on your behalf, you can choose to vote by proxy.",
  [
    applyingForPostalVote,
    howToCompletePostalVote,
    postalProxyVote,
    postalVoteNotReceivedorLost,
    requestproxyVote,
    swappingFromPostalToProxyVoting,
    swappingFromProxyToPostalVoting,
    waiverApplication
  ]
);

// #endregion Postal or Proxy Voting

// #region Registering to Vote

const archiveCopies = new ContentEaR(
  "archiveCopies",
  "Archive Copies",
  "What happens if I request a copy of the electoral register?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Copies of the register are supplied to the British Library. Copies of the
      revised register from previous years are kept in the Archive and Local Studies
      Library within the Central Library, Surrey Street, Sheffield S1. Inspection is
      under supervision but copies cannot be made of the register if it is from
      within 10 years of the current register, other than hand written notes.
      Registers that are over 10 years old may be copied at a charge by Archive
      Service staff. For more information about Register Archives visit: 
      <a href="https://www.sheffield.gov.uk/home/libraries-archives/access-archives-local-studies-library/collections/electoral-registers-archive.html"target="_blank">https://www.sheffield.gov.uk/home/libraries-archives/access-archives-local-studies-library/collections/electoral-registers-archive.html</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Electoral%20Registers%20archive'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "copy",
      "copyies",
      "archive",
      "archives",
      "arch"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const changeofAddressForm = new ContentEaR(
  "changeOfAddressForm",
  "Change of Address Form",
  "How to update your voter registration address and re-register using the online service",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      We do not issue a change of address form, to change the address you are
      registered at you would need to re-register at your new address, this can be
      done using the online service. If you provide your previous address at point
      of registration you should be removed at the next revision date.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const changeofNameonTheRegister = new ContentEaR(
  "changeOfNameOnTheRegister",
  "Change of name on the Register",
  "How to update your name on the electoral register, including required forms and evidence.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If your name has changed, you can complete a change of name form with your
      previous and new name, along with the date of the change. Evidence, such as a
      marriage certificate or deed poll certificate, will be required.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const creditReferencingAgencies = new ContentEaR(
  "creditReferencingAgencies",
  "Credit Referencing Agencies",
  "How credit referencing agencies use the electoral register and the differences between the full and open registers.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Credit referencing agencies have access to the electoral register (previously
      called the full register), which means that everyone who has registered to
      vote appears on this register, even if they have opted out of the open
      register (previously called the edited register). <br>
      <br>
      There are legal restrictions on what the credit referencing agencies can use the electoral register for and
      they are not allowed to sell this version, but can sell the open register.
      They can only use the electoral register for credit referencing purposes.<br>
      <br>
      The register is updated monthly, normally on the first working day of the month. A
      data file is prepared and sent to all credit reference agencies who have
      requested and paid for updates. They will have the information to hand by the
      third working day of the week at the latest. We do not know how long it takes
      them to then update their data bases, or the reasons for any delays at their
      end.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const doINeedToReRegisterEachYear = new ContentEaR(
  "doINeedToReRegisterEachYear",
  "Do I need to Re-Register each year?",
  "When you need to re-register to vote and update your details on the electoral register.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You do not need to register again unless you change address. You should also
      inform us if any of your details change such as your name or nationality.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "regsiter",
      "reg"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const doINeedToRegister = new ContentEaR(
  "doINeedToRegister",
  "Do I need to Register?",
  "Why responding to voter registration invitations is important and how it impacts credit applications.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If we have invited you to register to vote, it is important that you respond.
      If you do not, we will send you reminders through the post and someone will
      visit your home. Not being registered can also impact on applications for
      credit, such as for a mortgage or mobile phone contract, since credit
      reference agencies use the register to validate applications.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "regsiter",
      "reg"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const electoralRegisterConfirmationLetter = new ContentEaR(
  "electoralRegisterConfirmationLetter",
  "Electoral Register Confirmation Letter",
  "Request a confirmation letter from Electoral Services as proof of voter registration at your address.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Letters can be requested from Electoral Services for Proof of Registration.
      This only provides evidence that someone is registered at an address, not that
      they are resident. We can only send this confirmation letter by post to the
      registered address.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const includeSomeoneElseontheRegisterForm = new ContentEaR(
  "includeSomeoneElseontheRegisterForm",
  "Include someone on the Invitation to Register Form",
  "Can I Include someone else on the Invitation to Register (ITR) form?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      No, this is an individual registration form. If you know someone who wants to
      vote, they must register. They can do so by visiting
      <a href="https://www.gov.uk/register-to-vote" target="_blank">www.gov.uk/register-to-vote</a>, 
      or we can send them a paper registration form if they do not have internet
      access. <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20to%20vote'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "electorial",
      "elect",
      "elec",
      "ITR"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const incorrectDetailsOnElectoralRegister = new ContentEaR(
  "incorrectDetailsOnElectoralRegister",
  "Incorrect details on Electoral Register",
  "How to report and correct errors on the electoral register through re-registration.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If an error is found on the electoral register, please let us know so it can
      be corrected. The quickest way to do this is by re-registering at
      <a href="https://www.gov.uk/register-to-vote" target="_blank">www.gov.uk/register-to-vote</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20to%20vote'"> Send Link </button>
      <br>
      We cannot correct an error in an already published electoral register, but the
      correct would show in the next monthly update or revised register.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const informationInDifferentFormats = new ContentEaR(
  "informationInDifferentFormats",
  "Information in different formats",
  "Accessing information in different formats (Braille, Large Print etc)",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Some information is available in alternative formats. If you are registering
      to vote, do so at
      <a href="https://www.gov.uk/register-to-vote" target="_blank">www.gov.uk/register-to-vote</a>, 
      which works with assistive technologies such as screen readers, or we can
      send you an application in your preferred format where available. For
      additional information, please call: <a href="tel:0114 2734093">0114 2734093</a>. <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20to%20vote'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const invitationToRegister = new ContentEaR(
  "invitationToRegister",
  "Invitation to Register",
  "What is an Invitation To Register (ITR)?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      An ITR is an Invitation To Register, this is a letter that is sent out to an individual 
      needing to complete register to vote. The letter advises you how to register to vote 
      using the online service or the attached form.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "electorial",
      "elect",
      "elec",
      "ITR"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const lostMyInvitationToRegister = new ContentEaR(
  "lostMyInvitationToRegister",
  "Lost my invitation to Register",
  "What happens if I lose my Invitation To Register (ITR)?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If you have lost your form, you can apply to register online at
      <a href="https://www.gov.uk/register-to-vote" target="_blank">www.gov.uk/register-to-vote</a>, 
      or we can send a replacement form. <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20to%20vote'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "electorial",
      "elect",
      "elec",
      "ITR"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const movingHomeorMovedHome = new ContentEaR(
  "movingHomeorMovedHome",
  "Moving Home or Moved Home",
  "What happens if I move home?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      If you have moved, you need to re-register for voting at your new address. You
      can do this by registering online at:
      <a href="https://www.gov.uk/register-to-vote" target="_blank">https://www.gov.uk/register-to-vote</a> 
      or by asking us for a form.
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20to%20vote'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const optOutofTheOpenRegister = new ContentEaR(
  "optOutOfTheOpenRegister",
  "Opt out of the Open Register",
  "How to opt out of the open register without affecting your voting rights or credit score.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Your name and address will be included in the open register unless you ask for
      them to be removed. Removing your details from the open register does not
      affect your right to vote or your credit score. If you do not have access to
      the internet, a request can be sent through to Electoral Services for them to
      remove you from the Register. You can change your opt-out preference at any
      time by visiting: 
      <a href="https://www.gov.uk/register-to-vote" target="_blank">www.gov.uk/register-to-vote</a>.<br> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20to%20vote'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const registerToVote = new ContentEaR(
  "registerToVote",
  "Register to Vote",
  "How to register to vote, securely using your National Insurance Number and date of birth.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Everyone is responsible for registering themselves. This is called Individual
      Electoral Registration (IER). To register, you will need your National
      Insurance Number and date of birth, which ensures the process is more secure.
      To register or change your details, please visit:
      <a href="https://www.gov.uk/register-to-vote" target="_blank">https://www.gov.uk/register-to-vote</a>
      or we can send you a paper form in the post.<br>
       <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20to%20vote'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const requestforEvidenceLetter = new ContentEaR(
  "requestForEvidenceLetter",
  "Request for Evidence Letter (Registering)",
  "Why a Request for Evidence letter is issued and how to provide the required documents for voter registration.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      This letter is sent when documents are requested to support someone's
      application to register to vote, for example, if some information is missing
      or details do not match the identity checks.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "proxy",
      "prox",
      "vote",
      "voting",
      "voters",
      "postal",
      "post",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const requestOtherElectionsReferral = new ContentEaR(
  "requestOtherElectionsReferral",
  "Request other Elections Referral",
  "Requesting election assistance when internet access or required documents are unavailable.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      <strong>Note to advisor</strong> - This is only to be used if the caller does not have access
      to the internet or if a copy of the requested letter is not held on Weberos.<br>
      <br>
      Transfer enquiry to Electoral Services.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const revisionstoTheElectoralRegister = new ContentEaR(
  "revisionsToTheElectoralRegister",
  "Revisions to the Electoral Register",
  "What are the revision dates for the Electoral Register?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Additions or changes to the register are usually added on the next monthly
      Notice of Alteration (usually the first working day of the month). The
      electoral register is fully revised each year. It is usually published on the
      1st of December each year. Current planned revision dates are:
      <ul>
        <li>2 September 2024</li>
        <li>1 October 2024</li>
        <li>1 November 2024</li>
        <li>1 December 2024</li>
        <li>2 January 2025</li>
        <li>Fully revised register published 1 February 2025</li>
      </ul>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const successfulOnlineRegistration = new ContentEaR(
  "successfulOnlineRegistration",
  "Successful Online Registration",
  "How will I know if my online Registration was Successful?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You will be sent a letter from local electoral registration staff confirming
      that your registration was successful, or asking for more information if that
      is required. If you have provided your email address or phone numbers, you may
      be contacted that way instead.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const useofEmailAddressandPhoneNumber = new ContentEaR(
  "useOfEmailAddressandPhoneNumber",
  "Email Address and Phone Number",
  "What happens if I provide an email address or phone number?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Including an email address and phone number is optional. This information will only be used to contact you regarding your registration or application and will not be shared or used for other purposes unless required by law.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const registeringToVote = new MenuEaR(
  "registeringToVote",
  "Registering to Vote",
  "You must be registered to vote before you can vote in UK elections or referendums.",
  [
    archiveCopies,
    changeofAddressForm,
    changeofNameonTheRegister,
    creditReferencingAgencies,
    doINeedToReRegisterEachYear,
    doINeedToRegister,
    electoralRegisterConfirmationLetter,
    includeSomeoneElseontheRegisterForm,
    incorrectDetailsOnElectoralRegister,
    informationInDifferentFormats,
    invitationToRegister,
    lostMyInvitationToRegister,
    movingHomeorMovedHome,
    optOutofTheOpenRegister,
    registerToVote,
    requestforEvidenceLetter,
    requestOtherElectionsReferral,
    revisionstoTheElectoralRegister,
    successfulOnlineRegistration,
    useofEmailAddressandPhoneNumber
  ]
);

// #endregion Registering to Vote

// #region Other Enquiries

const councillors = new ContentEaR(
  "councillors",
  "Councillors",
  "Sheffield Councillors, their duties, and how to contact them",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      For more information about Sheffield Councillors and their duties, you can
      visit the official Sheffield City Council page:
    </p>
    <p>
      <a href="https://www.sheffield.gov.uk/councillors" target="_blank">https://www.sheffield.gov.uk/councillors</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Councillors'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "clr",
      "cllr",
      "counc",
      "Council"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

const electionResults = new ContentEaR(
  "electionResults",
  "Election Results",
  "Where can I find the results of previous elections?",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      You can find the previous election results via: <a href="https://www.sheffield.gov.uk/your-city-council/election-results" target="_blank">https://www.sheffield.gov.uk/your-city-council/election-results</a>
      <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Election%20Results'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "resu",
      "resul",
      "result",
      "elections results",
      "results"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const overSeasVoters = new ContentEaR(
  "overSeasVoters",
  "Overseas Voters",
  "Learn about eligibility and registration for Overseas Voters, including which elections you can vote in and the registration period.",
  `
    <p>
      Only British citizens may register as Overseas Voters (other Commonwealth citizens and citizens of the Irish Republic may not) – allowing them to vote at UK Parliamentary and European Parliamentary elections.<br/>
      <br/>
      Registration is allowed for 15 years from the date an elector was last registered as a UK resident. If you were too young to register when you left the UK, your parent or guardian must have been registered.<br/>
      <br/>
      As an overseas voter, you are eligible to vote in elections for the UK Parliament and the European Parliament. You cannot vote in UK local or mayoral elections, or elections to the Scottish Parliament, the National Assembly for Wales or the London Assembly.<br/>
      <br/>
      If you live in a country which is a member of the European Union, you can vote in that country's own local and European parliamentary elections. But, you cannot vote in European elections in more than one country.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "oversea",
      "seas",
      "vote",
      "voting",
      "voters"
    ],
    categories: ["Elections and Referendums", "Electoral","Overseas"],
  },
  { date: "07/03/2024", name: "Sam Coupland" }
);

const familyTreeorGenealogy = new ContentEaR(
  "familyTreeorGenealogy",
  "Family Tree or Genealogy",
  "How electoral registers and Sheffield Archives can assist with family tree or genealogy research.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      The electoral register is compiled for election purposes and is not intended
      to be used as a tool for searching for lost relatives. Registers are split
      into the 6 parliamentary constituencies, then into the wards wihtin those
      constituencies. Each ward is broken down into the polling district each
      polling station serves and then into each street within that district.
      Properties are then sorted by address order - not by name.
    </p>
    <p>
      Sheffield Archives may be able to offer more support in this area.
    </p>
  `,
  { buttonLabel: "familyTreeorGenealogy", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "28/02/2025", name: "Dinah Williams" }
);

const wards = new ContentEaR(
  "wards",
  "Wards",
  "Sheffield's 28 electoral wards and their representation by City Councillors.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          Click <a href="http://sccvmazelt02/WebEros/" target="_blank">here</a> to access WebEros.
      </p>
    </section>
    <p>
      Sheffield has 28 electoral areas called Wards, and each Ward is represented by
      3 City Councillors who are elected in local elections. Further information on
      Wards can be found at the following link: 
      <a href="https://www.sheffield.gov.uk/home/your-city-council/electoral-wards"target="_blank">https://www.sheffield.gov.uk/home/your-city-council/electoral-wards</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Election%20Wards'"> Send Link </button>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "elections",
      "ele",
      "elect",
      "vote",
      "voting",
      "voters",
      "electorial",
      "elect",
      "elec",
      "loca",
      "local"
    ],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/11/2024", name: "Nathan Smith" }
);

// #endregion Other Enquiries


// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const electionsAndReferendums = new ServiceEaR(
  "electionsAndReferendums",
  "Elections and Referendums",
  `General elections, local elections, by-election, mayoral election, police and crime commissioner, referendums and voting...`,
  [
    annualCanvassMenu,
    councillors,
    electionResults,
    electionsAndVoting,
    familyTreeorGenealogy,
    postalorProxyVoting,
    overSeasVoters,
    registeringToVote,
    wards
  ]
);
