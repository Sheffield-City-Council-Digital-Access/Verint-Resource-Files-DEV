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
// Example instantiation for topicExample1

const informationInDifferentFormats = new ContentEaR(
  "informationInDifferentFormats",
  "Information in different formats",
  "Accessing information in different formats (Braille, Large Print etc)",
  `
    <p>
      Some information is available in alternative formats. If you are registering
      to vote, do so at
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >www.gov.uk/register-to-vote</a
      >, which works with assistive technologies such as screen readers, or we can
      send you an application in your preferred format where available. For
      additional information, please call: 0114 2734093.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const invitationToRegister = new ContentEaR(
  "invitationToRegister",
  "Invitation to Register",
  "What is an Invitation To Register (ITR)?",
  `
    <p>
      An ITR is an Invitation To Register, this is a letter that is sent out to an individual 
      needing to complete register to vote. The letter advises you how to register to vote 
      using the online service or the attached form.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const movingHomeorMovedHome = new ContentEaR(
  "movingHomeorMovedHome",
  "Moving Home or Moved Home",
  "What happens if I move home?",
  `
    <p>
      If you have moved, you need to re-register for voting at your new address. You
      can do this by registering online at:
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >https://www.gov.uk/register-to-vote</a
      >
      or by asking us for a form.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const includeSomeoneElseontheRegisterForm = new ContentEaR(
  "includeSomeoneElseontheRegisterForm",
  "Include Someone on the Invitation to Register Form",
  "Can I Include Someone else on the Invitation to Register (ITR) form?",
  `
    <p>
      No, this is an individual registration form. If you know someone who wants to
      vote, they must register. They can do so by visiting
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >www.gov.uk/register-to-vote</a
      >, or we can send them a paper registration form if they do not have internet
      access.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const lostMyInvitationToRegister = new ContentEaR(
  "lostMyInvitationToRegister",
  "Lost My Invitation To Register",
  "What happens if I lose my Invitation To Register (ITR)?",
  `
    <p>
      If you have lost your form, you can apply to register online at
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >www.gov.uk/register-to-vote</a
      >, or we can send a replacement form.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const registerToVote = new ContentEaR(
  "registerToVote",
  "Register To Vote",
  "Register To Vote",
  `
    <p>
      Everyone is responsible for registering themselves. This is called Individual
      Electoral Registration (IER). To register, you will need your National
      Insurance Number and date of birth, which ensures the process is more secure.
      To register or change your details, please visit:
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >https://www.gov.uk/register-to-vote</a
      >
      or we can send you a paper form in the post.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: ["Register", "Vote", "Voting"],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const requestforEvidenceLetter = new ContentEaR(
  "requestForEvidenceLetter",
  "Request For Evidence Letter (Registering)",
  "",
  `
    <p>
      This letter is sent when documents are requested to support someone's
      application to register to vote, for example, if some information is missing
      or details do not match the identity checks.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const revisionstoTheElectoralRegister = new ContentEaR(
  "revisionsToTheElectoralRegister",
  "Revisions to The Electoral Register (To Be Updated)",
  "What are the revision dates for the Electoral Register?",
  `
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
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const useofEmailAddressandPhoneNumber = new ContentEaR(
  "useOfEmailAddressandPhoneNumber",
  "Use Of Email Address and Phone Number",
  "What happens if I provide an email address or phone number?",
  `
    <p>
      If you provide an email address or phone number as part of your application,
      it will only be used to contact you about your application for registering to
      vote. We won’t give it to anyone else or use it for any other purpose unless
      required by law.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const changeofNameonTheRegister = new ContentEaR(
  "changeOfNameOnTheRegister",
  "Change of Name on the Register",
  "What happens if my name has changed?",
  `
    <p>
      If your name has changed, you can complete a change of name form with your
      previous and new name, along with the date of the change. Evidence, such as a
      marriage certificate or deed poll certificate, will be required.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const creditReferencingAgencies = new ContentEaR(
  "creditReferencingAgencies",
  "Credit Referencing Agencies",
  "",
  `
    <p>
      Credit referencing agencies have access to the electoral register (previously
      called the full register), which means that everyone who has registered to
      vote appears on this register, even if they have opted out of the open
      register (previosuly called the edited register). There are legal restrictions
      on what the credit referencing agencies can use the electoral register for and
      they are not allowed to sell this version, but can sell the open register.
      They can only use the electoral register for credit referencing purposes. The
      register is updated monthly, normally on the first working day of the month. A
      data file is prepared and sent to all credit reference agencies who have
      requested and paid for updates. They will have the information to hand by the
      third working day of the week at the latest. We do not know how long it takes
      them to then update their data bases, or the reasons for any delays at their
      end.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const doINeedToRegister = new ContentEaR(
  "doINeedToRegister",
  "Do I Need To Register",
  "What Happens If I do not?",
  `
    <p>
      If we have invited you to register to vote, it is important that you respond.
      If you do not, we will send you reminders through the post and someone will
      visit your home. Not being registered can also impact on applications for
      credit, such as for a mortgage or mobile phone contract, since credit
      reference agencies use the register to validate applications.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const doINeedToReRegisterEachYear = new ContentEaR(
  "doINeedToReRegisterEachYear",
  "Do I Need To Re-Register Each Year",
  "What Happens If I do not?",
  `
    <p>
      You do not need to register again unless you change address. You should also
      inform us if any of your details change such as your name or nationality.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const successfulOnlineRegistration = new ContentEaR(
  "successfulOnlineRegistration",
  "Successful Online Registration",
  "How will I know if my online Registration was Successful?",
  `
    <p>
      You will be sent a letter from local electoral registration staff confirming
      that your registration was successful, or asking for more information if that
      is required. If you have provided your email address or phone numbers, you may
      be contacted that way instead.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const incorrectDetailsOnElectoralRegister = new ContentEaR(
  "incorrectDetailsOnElectoralRegister",
  "Incorrect Details On Electoral Register",
  "",
  `
    <p>
      If an error is found on the electoral register, please let us know so it can
      be corrected. The quickest way to do this is by re-registering at
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >www.gov.uk/register-to-vote</a
      >
      We cannot correct an error in an already published electoral register, but the
      correct would show in the next monthly update or revised register.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const optOutofTheOpenRegister = new ContentEaR(
  "optOutOfTheOpenRegister",
  "Opt Out of the Open Register",
  "",
  `
    <p>
      Your name and address will be included in the open register unless you ask for
      them to be removed. Removing your details from the open register does not
      affect your right to vote or your credit score. If you do not have access to
      the internet, a request can be sent through to Electoral Services for them to
      remove you from the Register. You can change your opt-out preference at any
      time by visiting
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >www.gov.uk/register-to-vote</a
      >.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const electoralRegisterConfirmationLetter = new ContentEaR(
  "electoralRegisterConfirmationLetter",
  "Electoral Register Confirmation Letter",
  "",
  `
    <p>
      Letters can be requested from Electoral Services for Proof of Registration.
      This only provides evidence that osmeone is registeted at an address, not that
      they are resident. We can only send this confirmaiton letter by post to the
      registered address.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const requestOtherElectionsReferral = new ContentEaR(
  "requestOtherElectionsReferral",
  "Request Other Elections Referral",
  "",
  `
    <p>
      <strong>Note to advisor</strong> - This is only to be used if the caller does not have access
      to the internet or if a copy of the requested letter is not held on Weberos.
      Request Other Elections Referral.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const archiveCopies = new ContentEaR(
  "archiveCopies",
  "Archive Copies",
  "What happens if I request a copy of the electoral register?",
  `
    <p>
      Copies of the register are supplied to the British Library. Copies of the
      revised register from previosu years are kept in theArchive and Loca Studies
      Library within the Central Library, Surrey Street, Sheffield S1. Inspection is
      under supervision but copies cannot be made of the register if it is from
      within 10 years of the current register, other than hand written notes.
      Registers that are over 10 years old may be copied at a charge by Archive
      Servciue staff. For more information about Register Archives visit
      <a
        href="https://www.sheffield.gov.uk/home/libraries-archives/access-archives-local-studies-library/collections/electoral-registers-archive.html"
        target="_blank"
        >electoral-registers-archive</a
      >
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const changeofAddressForm = new ContentEaR(
  "changeOfAddressForm",
  "Change Of Address Form",
  "",
  `
    <p>
      We do not issue a change of address form, to change the address you are
      registered at you would need to re-register at your new address, this can be
      done using the online service. If you provide your previous address at point
      of registration you should be removed at the next revision date.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const needToIncludeEmailAddressandPhoneNumber = new ContentEaR(
  "needToIncludeEmailAddressandPhoneNumber",
  "Need To Include Email Address and Phone Number",
  "Do I Need To Include Email Address and Phone Number on the Form?",
  `
    <p>
      You are invited to include them, but you do not have to. We will use this
      information only in connection with your registration, and it helps us to
      contact you if there is a problem.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const registeringToVote = new MenuEaR(
  "registeringToVote",
  "Registering to Vote",
  "You must be registered to vote before you can vote in UK elections or referendums.",
  [
    informationInDifferentFormats,
    invitationToRegister,
    movingHomeorMovedHome,
    includeSomeoneElseontheRegisterForm,
    lostMyInvitationToRegister,
    registerToVote,
    requestforEvidenceLetter,
    revisionstoTheElectoralRegister,
    useofEmailAddressandPhoneNumber,
    changeofNameonTheRegister,
    creditReferencingAgencies,
    doINeedToRegister,
    doINeedToReRegisterEachYear,
    successfulOnlineRegistration,
    incorrectDetailsOnElectoralRegister,
    optOutofTheOpenRegister,
    electoralRegisterConfirmationLetter,
    requestOtherElectionsReferral,
    changeofAddressForm,
    needToIncludeEmailAddressandPhoneNumber,
  ]
);

const ccaCCBForms = new ContentEaR(
  "ccaCCBForms",
  "CCA/CCB Forms",
  "",
  `
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
      <a href="http://www.elecreg.co.uk/sheffield" target="_blank"
        >www.elecreg.co.uk/sheffield</a
      >
      and make the change using the unique security codes printed on the form, or
      contact Electoral Services directly if they cannot go online.
    </p>
    <p>
      <strong>Properties receiving a CCB</strong> - Someone in the property should
      check the details on the form are correct and up to date. This form
      <strong>requires a response</strong>, even if the details on it are correct.
      Responses can be made online at
      <a href="http://www.elecreg.co.uk/sheffield" target="_blank"
        >www.elecreg.co.uk/sheffield</a
      >
      if there are changes or to confirm there are no changes. If everything is
      correct, this can be confirmed by SMS or phone instead, using the details on
      the form. They can contact Electoral Services directly if they cannot go
      online.
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
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const canvassForm = new ContentEaR(
  "canvassForm",
  "Canvass Form (CF)",
  "",
  `
    <p>
      Any residential property that does not respond to the CCB form will receive a
      <strong>Canvass Form (CF)</strong>.
    </p>
    <p>
      Someone in the property should check the details on the form are correct and
      up to date. This form <strong>requires a response</strong>, even if the
      details on it are correct. Responses can be made online at
      <a href="http://www.elecreg.co.uk/sheffield" target="_blank"
        >www.elecreg.co.uk/sheffield</a
      >
      or by returning the completed form in the reply envelope. If there are changes
      or to confirm there are no changes. If everything is correct, this can be
      confirmed by SMS or phone instead, using the details on the form.
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
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "24/09/2024", name: "Shahzad Athar" }
);

const ccaCCBorCanvassForms = new ContentEaR(
  "ccaCCBorCanvassForms",
  "CCA CCB or Canvass Form",
  "CCA CCB or Canvass Forms - People that do not live at the address",
  `
    <p>
      Any residential property that does not respond to the CCB form will receive a
      <strong>Canvass Form (CF)</strong>.
    </p>
    <p>
      Someone in the property should check the details on the form are correct and
      up to date. This form <strong>requires a response</strong>, even if the
      details on it are correct. Responses can be made online at
      <a href="http://www.elecreg.co.uk/sheffield" target="_blank"
        >www.elecreg.co.uk/sheffield</a
      >
      or by returning the completed form in the reply envelope. If there are changes
      or to confirm there are no changes. If everything is correct, this can be
      confirmed by SMS or phone instead, using the details on the form.
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
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const lostCCACCBorCanvassForm = new ContentEaR(
  "lostCCACCBorCanvassForm",
  "Lost My CCA CCB or Canvass Form",
  "",
  `
    <p>
      If you have lost your form then a duplicate can be sent, or you can wait for a
      reminder. If there are no changes to make, I can confirm this to Electoral
      Services for you.
    </p>
    <p>
      If the reminders are lost, your home will be visited to check why forms
      haven't been completed. If you can remember your HEF's reference you can
      complete the form at:
      <a href="https://www.hef-response.co.uk/" target="_blank"
        >https://www.hef-response.co.uk/</a
      >
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const studentVoters = new ContentEaR(
  "studentVoters",
  "Student Voters",
  "",
  `
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
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const removalFromRegister = new ContentEaR(
  "removalFromRegister",
  "Removal From Register",
  "What happens if I move out of a property?",
  `
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
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const informationChangeandHowToUpdateIt = new ContentEaR(
  "informationChangeAndHowToUpdateIt",
  "Information Change and How to Update It",
  "What happens if I change my name, address, nationality, or anything else on the form?",
  `
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
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const annualCanvasMenu = new MenuEaR(
  "annualCanvasMenu",
  "Annual Canvas",
  "The household canvass takes place each year to enable us to ensure the electoral register is up to date for each residential property in the city.",
  [
    ccaCCBForms,
    canvassForm,
    ccaCCBorCanvassForms,
    lostCCACCBorCanvassForm,
    studentVoters,
    removalFromRegister,
    informationChangeandHowToUpdateIt,
  ]
);

const swappingFromPostalToProxyVoting = new ContentEaR(
  "swappingFromPostalToProxyVoting",
  "Swapping From Postal To Proxy Voting",
  "",
  `
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
  { typeKey: "postal_or_proxy_voting_transferred_to_service" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const swappingFromProxyToPostalVoting = new ContentEaR(
  "swappingFromProxyToPostalVoting",
  "Swapping From Proxy To Postal Voting",
  "",
  `
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
  { typeKey: "postal_or_proxy_voting_transferred_to_service" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const postalVoteNotReceivedorLost = new ContentEaR(
  "postalVoteNotReceivedorLost",
  "Postal Vote Not Received or Lost",
  "",
  `
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
  { typeKey: "postal_or_proxy_voting_transferred_to_service" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const postalProxyVote = new ContentEaR(
  "postalProxyVote",
  "Postal Proxy Vote",
  "",
  `
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
  { typeKey: "postal_or_proxy_voting_transferred_to_service" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const applyingForPostalVote = new ContentEaR(
  "applyingForPostalVote",
  "Applying For Postal Vote",
  "",
  `
    <p>
      You can choose to vote using a postal vote in all elections that you are
      eligible to vote in. You can apply for a postal vote online at
      <a href="https://www.gov.uk/apply-postal-vote" target="_blank"
        >www.gov.uk/apply-postal-vote</a
      >
      or by completing a paper form. You must provide a hand-written signature
      however you apply. You can obtain the appropriate form by the following means:
      <ul>
        <li>
          Online at
          <a href="https://www.gov.uk/apply-postal-vote" target="_blank"
            >www.gov.uk/apply-postal-vote</a
          >
        </li>
        <li>Email Link to Customer</li>
        <li>From Porters Lodge at the Town Hall or First Point at Howden House</li>
      </ul>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "postal_or_proxy_voting_transferred_to_service" },
  { typeKey: "postal_or_proxy_voting_infomation_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const requestproxyVote = new ContentEaR(
  "requestproxyVote",
  "Request Proxy Vote",
  "",
  `
    <p>
      You can request to vote by proxy to have another person vote on your behalf at
      your Polling Station. This can be done online at
      <a href="https://www.gov.uk/apply-proxy-vote" target="_blank"
        >www.gov.uk/apply-proxy-vote</a>
      or using a paper form.
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
  { typeKey: "postal_or_proxy_voting_transferred_to_service" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const waiverApplication = new ContentEaR(
  "waiverApplication",
  "Waiver Application",
  "",
  `
    <p>
      A waiver is used for postal and proxy voting applications when a voter is
      unable to sign their name. Subject to approval, the postal voting pack sent
      out at an election will have the words 'Signature not required' instead of a
      signature box.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "postal_or_proxy_voting_transferred_to_service" },
  { typeKey: "postal_or_proxy_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const postalorProxyVoting = new MenuEaR(
  "postalOrProxyVotingas",
  "Postal or Proxy Voting",
  "If you want someone to vote on your behalf, you can choose to vote by proxy.",
  [
    swappingFromPostalToProxyVoting,
    swappingFromProxyToPostalVoting,
    postalVoteNotReceivedorLost,
    postalProxyVote,
    applyingForPostalVote,
    requestproxyVote,
    waiverApplication,
  ]
);

const whereDoIVote = new ContentEaR(
  "whereDoIVote",
  "Where Do I Vote",
  "",
  `
    <iframe
      src="https://sheffieldcc.maps.arcgis.com/apps/webappviewer/index.html?id=2c10878d034544718d4ea5c733b03559"
      style="height: 400px; width: 100%"
    ></iframe>
    <p>
      SERVICE HAS NOT PROVIDED THE LINK FOR 'WHERE DO I VOTE?
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const assistanceForPartiallySightedVoters = new ContentEaR(
  "assistanceForPartiallySightedVoters",
  "Assistance For Partially Sighted Voters",
  "",
  `
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
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const howToCompletePostalVote = new ContentEaR(
  "howToCompletePostalVote",
  "How to Complete Postal Vote",
  "",
  `
    <p>
      CLICK to ENHANCE IMAGE
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const postalVoteNoLongerRequired = new ContentEaR(
  "postalVoteNoLongerRequired",
  "Postal Vote No Longer Required",
  "",
  `
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
      <a href="mailto:electoralservices@sheffield.gov.uk"
        >electoralservices@sheffield.gov.uk</a
      >
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
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const postalVoteReceivedButNotRequested = new ContentEaR(
  "postalVoteReceivedButNotRequested",
  "Postal Vote Received But Not Requested",
  "What happens if I have received a postal ballot and did not request one or cannot remember requesting one?",
  `
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
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const postalVoteSendingAbroad = new ContentEaR(
  "postalVoteSendingAbroad",
  "Postal Vote Sending Abroad",
  "",
  `
    <p>
      Postal votes can be sent abroad, but it is at your own risk. We are unable to
      send postal votes out until around 2 weeks before polling day. If you are
      confident that you have enough time to receive the ballot paper and send it
      back to us before 10pm on polling day, we will be happy to send it anywhere in
      the world.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const spoiltorDamagedPostalVote = new ContentEaR(
  "spoiltorDamagedPostalVote",
  "Spoilt or Damaged Postal Vote",
  "",
  `
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
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const localElections = new ContentEaR(
  "localElections",
  "Local Elections",
  "Local elections are held on a four-year cycle. There is an election for the first three years and then no election in the fourth year. In these elections, you are voting to elect Councillors of Sheffield who will represent your views for the ward (area) in which you live. Further info on Councillors can be found using the link below:",
  `
    <p>
      Local elections are held on a four-year cycle. There is an election for the
      first three years and then no election in the fourth year. In these elections,
      you are voting to elect Councillors of Sheffield who will represent your views
      for the ward (area) in which you live. Further info on Councillors can be
      found using the link below:
      <a href="https://www.sheffield.gov.uk/councillors" target="_blank"
        >https://www.sheffield.gov.uk/councillors</a
      >
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const parishElections = new ContentEaR(
  "parishElections",
  "Parish Elections",
  "Parish Councils are separate local authorities to the City Council, with their own elected members. They are wholly contained within the City Council boundary. A parish councillor can stand for election to the City Council and vice versa.",
  `
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
      You can only vote at a Parish election if you live within the parish. More
      details around the Parish Elections can be found here:
      <a
        href="https://www.sheffield.gov.uk/home/your-city-council/election-types"
        target="_blank"
        >https://www.sheffield.gov.uk/home/your-city-council/election-types</a
      >
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const electionsAndVoting = new MenuEaR(
  "electionsAndVoting",
  "Elections And Voting",
  "Information about Voting in these elections can be found here",
  [
    whereDoIVote,
    assistanceForPartiallySightedVoters,
    howToCompletePostalVote,
    postalVoteNoLongerRequired,
    postalVoteReceivedButNotRequested,
    postalVoteSendingAbroad,
    spoiltorDamagedPostalVote,
    localElections,
    parishElections,
  ]
);

const annualCanvas = new ContentEaR(
  "annualCanvas",
  "Annual Canvas",
  "",
  `
    <p>
      The Electoral Registration Officer (ERO) is required to send a communication 
      to all residential properties. Households are legally obliged to respond to a
      CCB or CF form, and the ERO must follow up with non-respondents using
      reminders and personal visits. Where a property is sent a CCA form, the ERO
      believes no changes are needed, and there is no legal requirement for a
      response.
    </p>
    <p>
      It’s important to note that these forms do not register anyone to vote. The
      ERO will use the information provided on the form to send Invitations to
      Register (ITR) to people added, and change of name forms to individuals who
      have indicated their name has changed. The law requires the ERO to include a
      pre-paid reply envelope with CFs and ITRs.
    </p>
    <p>
      Households can respond to CCA, CCB, or Canvass Forms via the internet at the
      following website:<a
        href="https://www.elecreg.co.uk/Sheffield"
        target="_blank"
        >www.elecreg.co.uk/Sheffield</a
      >
    </p>
    <p>Invitations to Register (ITRs) can be completed online at:</p>
    <p>
      <a href="https://www.gov.uk/register-to-vote" target="_blank"
        >www.gov.uk/register-to-vote</a
      >
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "annual_canvass_transferred_to_service" },
  { typeKey: "annual_canvass_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const electionResults = new ContentEaR(
  "electionResults",
  "Election Results",
  "Where can I find the results of previous elections?",
  `
    <p>
      SERVICE HAS TO PROVIDE PREVIOUS ELECTION RESULTS
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const whereICanVote = new ContentEaR(
  "whereICanVotes",
  "Where Can I Vote",
  "",
  `
    <h3>Polling Stations</h3>
    <iframe
      src="https://sheffieldcc.maps.arcgis.com/apps/webappviewer/index.html?id=2c10878d034544718d4ea5c733b03559"
      style="height: 400px; width: 100%"
    ></iframe>
    <p>
      SERVICE HAS NOwhereICanVoteT PROVIDED THE LINK FOR 'WHERE DO I VOTE?
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "elections_and_voting_transferred_to_service" },
  { typeKey: "elections_and_voting_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const councillors = new ContentEaR(
  "councillors",
  "Councillors",
  "",
  `
    <p>
      For more information about Sheffield Councillors and their duties, you can
      visit the official Sheffield City Council page:
    </p>
    <p>
      <a href="https://www.sheffield.gov.uk/councillors" target="_blank"
        >https://www.sheffield.gov.uk/councillors</a
      >
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const familyTreeorGenealogy = new ContentEaR(
  "familyTreeorGenealogy",
  "Family Tree or Genealogy",
  "",
  `
    <p>
      The electoral register is compiled for election purposes and is not intended
      to be used as a tool for searching for lost relatives. Registers are split
      intot he 6 parliamentary constituencies, then into the wards wihtin those
      constituencies. Each ward is broken down into the polling district each
      polling stations serves and then into each street within that district.
      Properties are then sorted by address order - not by name.
    </p>
    <p>Sheffield Archives May be able to offer more support in this area.</p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const wards = new ContentEaR(
  "wards",
  "Wards",
  "",
  `
    <p>
      Sheffield has 28 electoral areas called Wards, and each Ward is represented by
      3 City Councillors who are elected in local elections. Further information on
      Wards can be found at the following link:
      <a
        href="https://www.sheffield.gov.uk/home/your-city-council/electoral-wards"
        target="_blank"
        >https://www.sheffield.gov.uk/home/your-city-council/electoral-wards</a
      >
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "25/09/2024", name: "Shahzad Athar" }
);

const topEnquiries = new MenuEaR("topEnquiries", "Top Enquiries", "", [
  annualCanvas,
  electionResults,
  whereICanVote,
  councillors,
  familyTreeorGenealogy,
  wards,
]);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const electionsAndReferendums = new ServiceEaR(
  "electionsAndReferendums",
  "Elections and Referendums",
  `General elections, local elections, by-election, mayoral election, police and crime commissioner, referendums and voting...`,
  [
    registeringToVote,
    annualCanvasMenu,
    postalorProxyVoting,
    electionsAndVoting,
    topEnquiries,
  ]
);
