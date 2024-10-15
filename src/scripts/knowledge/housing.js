class CoreH {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceH extends CoreH {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuH extends CoreH {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentH extends CoreH {
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

class FormH extends CoreH {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const applicationChanges = new ContentH(
  "applicationChanges",
  "Application Changes",
  "Info on updating housing applications, submitting ID/proof, annual renewals, restrictions, exceptions, and disqualification rules.",
  `
    <p>
      Change of circumstances are now online. When you are making changes, remember
      to click 'Submit'. ID/References may also need to be submitted before any
      changes are accepted.
    </p>
    <p>
      It is very important that you notify us of any changes in your circumstances
      so that we can amend your application. We will inform you if this results in
      your application moving to a different band. Depending on the change you have
      made, you may be required to resubmit your identification/reference before
      changes are accepted. We will notify you if this is necessary.
    </p>
    <p>
      If the customer has made recent changes, the changes are likely to be awaiting
      approval, and no further changes can be made until they are approved.
    </p>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Accepted ID</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          You must provide two forms of identification to prove changes to your
          application. One must be from the Proof of ID documents list, while the
          second must provide proof of your current UK address. Photo ID is also
          required to prove your identity. If you do not have photo ID, you must
          provide a passport-sized photo accompanied by a birth certificate. Proof
          of child benefit is only required where children under 16 years of age are
          being rehoused with you.
        </p>

        <h3>Proof of ID documents</h3>
        <ul>
          <li>Marriage certificate</li>
          <li>Divorce/Annulment papers</li>
          <li>
            Passport (this can be expired, but if the customer is an adult, an adult
            passport must be produced)
          </li>
          <li>
            Deed poll documentation for name changes (to accompany details of former
            name, if applicable)
          </li>
          <li>Current bus pass with photograph</li>
          <li>UK resident permit</li>
          <li>ID card issued by EEA/EU countries</li>
          <li>Home Office standard acceptance letter</li>
          <li>Immigration status document</li>
          <li>NASS 35</li>
          <li>Citizenship card (with hologram and photo to prove age)</li>
          <li>Medical card</li>
          <li>Birth certificate/Adoption certificate</li>
          <li>Letter from Social Worker/Probation Officer/Solicitor</li>
          <li>Driving licence</li>
        </ul>

        <h3>Proof of Address</h3>
        <ul>
          <li>Recent utility bill paid in that person’s name (last quarter)</li>
          <li>Most recent council tax statement</li>
          <li>Driving licence</li>
          <li>Home Office standard acceptance letter</li>
          <li>Letter from DWP for tax credits</li>
          <li>Bank statement from within the last 3 months</li>
          <li>Wage slip from current employer</li>
          <li>Life assurance/Insurance policies</li>
          <li>Proof of all other benefits</li>
        </ul>

        <h3>Proof of Child Benefit</h3>
        <ul>
          <li>Child benefit award letter</li>
          <li>
            The last 3 consecutive months of bank statements (Only where the award
            letter is not available)
          </li>
        </ul>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Annual Renewal</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Under the Allocation Policy, customers will be required to update their
          application on the anniversary of the date they registered.
        </p>
        <p>
          If applications are not renewed within 42 days when requested, the
          application may be cancelled.
        </p>
        <p>
          Customers won’t need to submit ID for any changes they make, and this will
          continue for the time being. This will change in the future.
        </p>

        <details class="details-accordion">
          <summary>
            Instructions for completing the renewal of your Housing Application
            online
          </summary>
          <div class="details-accordion-content">
            <p>
              Log onto our website at www.sheffieldpropertyshop.org.uk and follow
              the links from the homepage.
            </p>
            <p>Click ‘Log into my account’.</p>
            <p>
              Enter your login details: Your unique reference number (found on the
              enclosed letter), your memorable date, and your password. Contact us
              if you need these.
            </p>
            <p>
              Once logged in, click ‘Update my details’ under the ‘Application
              renewal required’ heading. Check your information carefully, confirm
              that the details are correct, and submit the form. You must submit the
              form even if there are no changes.
            </p>
          </div>
        </details>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Disqualification/Restriction</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          The Allocations Policy advises of various circumstances where we will
          reduce the preference given to applicants on the Housing Register or
          prevent them from joining the register. These include circumstances such
          as rent arrears or past/current anti-social behavior.
        </p>
        <p>
          In the most serious debt cases, the Allocations Policy allows us to place
          applicants into Band E or disqualify a customer from the Housing Register
          for an initial period of 12 months.
        </p>
        <p>A customer can apply for a restriction to be removed if:</p>
        <ul>
          <li>
            They are able to evidence that their behavior has significantly improved
            (e.g., paying off arrears in full)
          </li>
          <li>They appeal the restriction (disqualification) within 21 days</li>
          <li>They have exceptional circumstances</li>
          <li>They need a priority</li>
        </ul>
        <p>
          If an applicant is allowed back on the housing register, they will have to
          re-register. ID and references will be required unless recently submitted.
          Usual checks will be carried out and the appropriate band chosen.
          Applicants will lose their original waiting time.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Assistance with Change of Circumstances</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>Log on using the details below if required.</p>
        <p>Unique Reference - 1257822</p>
        <p>Memorable date - 25/12/2012</p>
        <p>Password - DMrm15</p>
        <p>
          Advisor note: You have logged in using dummy login details. Please do not
          amend anything on screen. Log in if required using the login details above
          and follow the instructions:
        </p>
        <p>Select "My Social Housing" on the left-hand side.</p>
        <p>
          Click "Update your details" and navigate through the form using the "Next
          section" buttons.
        </p>
        <p>Please do not submit the application.</p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Exceptions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          The Allocations Policy advises various circumstances in which we will
          reduce the preference given to applicants on the Housing Register or
          prevent them from joining the register. These include circumstances such
          as rent arrears or past/current anti-social behavior.
        </p>
        <p>
          An Exception Request allows us to make decisions on whether it is
          appropriate to waive these restrictions in exceptional circumstances, such
          as awarding a priority or when an applicant wishes to move to more
          suitable accommodation using their waiting time due to a change in
          circumstances.
        </p>
        <p>
          Applicants must demonstrate exceptional circumstances and prove that they
          have taken action to rectify issues that led to reduced preference or
          disqualification.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Name Changes</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Present three proof documents to a housing office or First Point, where ID
          will be copied and saved. The name will be updated in our system.
        </p>
        <p>
          Alternatively, send the name change in writing along with proof
          (originals, not photocopies) to RegistrationID@sheffield.gov.uk.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Split Applications</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <h3>Main Applicant</h3>
        <p>
          To remove a joint applicant, you must do this online at the Property Shop
          website.
        </p>
        <h3>Joint Applicant</h3>
        <p>
          Speak to the Registration team to remove your National Insurance Number.
          You will need to submit a new application and confirm the removal from the
          previous application.
        </p>
      </div>
    </details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Apply", keywords: [], categories: ["Housing"] },
  { date: "14/10/2024", name: "Omily Parkin" }
);

//apply for rehousing page to be under Rehousing menu
const applyForRehousing = new ContentH(
  "applyForRehousing",
  "Rehousing",
  "Apply for rehousing",
  `
    <p>
      To apply for Social Housing you need to do so via the Property Shop website.
      There are no paper application forms.
    </p>
    <p>Go online and register on www.sheffieldpropertyshop.org.uk</p>
    <p>
      Before you can complete an application to join the Housing Register you will
      need to register yourself as a new household on the system.
    </p>
    <p>
      Once registered you will be able to complete an application form to join the
      Housing Register.
    </p>
    <p>
      You must produce proof of ID (and Child Benefit if appropriate) and a landlord
      reference (if you are not already a Council tenant) at the same time,
      documents can be uploaded via the website or at your local housing office or
      First Point before your application will be validated.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "14/10/2024", name: "Omily Parkin" }
);

const rehousing = new MenuH("rehousing", "Rehousing", "TBC", [
  applyForRehousing,
  applicationChanges,
]);

const blockedBinChutes = new ContentH(
  "blockedBinChutes",
  "Blocked Bin Chutes",
  "Bin chutes in Council flats or maisonettes may become blocked and will be unblocked upon request.",
  `
    <p>
      Bin chutes in Council flats or maisonettes may become blocked and will be
      unblocked upon request.
    </p>
    <p>
      Open the blocked chutes list from the button below, and use the search, is the
      property on the list?
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Report", keywords: [], categories: ["Housing"] },
  { date: "14/10/2024", name: "Omily Parkin" }
);

const communalCupboard = new ContentH(
  "communalCupboard",
  "Communal Cupboard and Meter Box Cupboard",
  "Information about communal cupboard and meter box cupboards.",
  `
    <p>
      Meter boxes cupboard can be inside or outside of the property and the keyhole
      will be triangular in shape. These will need to purchased from a hardware
      store as we cannot provide one.
    </p>
    <p>
      If the keyhole is not triangular then it is likely to be cupboard in the
      communal area. These cupboards may contain more than one gas/electric meter
      and they mostly require a T1 Key that is held in the local Area office.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Information", keywords: [], categories: ["Housing"] },
  { date: "14/10/2024", name: "Omily Parkin" }
);

const communalFireSafety = new ContentH(
  "communalFireSafety",
  "Communal Fire Safety",
  "Information about communal fire safety regulations and guidelines.",
  `
    <p>
      Under the Regulatory Reform Order (2005), landlords are required to ensure
      that fire risk assessments are carried out in any shared areas of any
      properties they manage. Landlords also need to ensure that any fire escape
      routes and entrances/exits to properties are clear from trip hazards and items
      which would prevent exit from the building in the event of an emergency.
    </p>
    <p>As such, please do not place in the communal area, items such as:</p>
    <ul>
      <li>Chairs and tables</li>
      <li>Bookcases</li>
      <li>Loose carpets</li>
      <li>Curtains, blinds or net curtains</li>
      <li>Plastic flower pots</li>
      <li>Petrol containers and gas bottles</li>
      <li>
        Motorbikes, mopeds or any other equipment which uses petrol/diesel or gas
      </li>
    </ul>
    <p>
      If any of these items, or any other item which is felt to be a fire risk, are
      left in your communal area we will ask residents to remove them. If they
      remain they will be removed.
    </p>
    <p>
      Bicycles, prams, pushchairs and similar items will not normally be permitted
      to be stored or located within the internal communal parts unless there is an
      area capable of storage without causing obstruction.
    </p>
    <p>
      You can have a small doormat if it is rubber backed. Edged and trimmed natural
      plants in ceramic, earthenware or metal pots, as long as they are not placed
      on stairs or landings which are the means of escape from the building.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Information", keywords: [], categories: ["Housing"] },
  { date: "14/10/2024", name: "Omily Parkin" }
);

const gardenPledgeScheme = new ContentH(
  "gardenPledgeScheme",
  "Garden Pledge Scheme",
  "Information about Garden Pledge Scheme and gardening services",
  `
    <p>
      The Garden Pledge Scheme ceased to operate in April 2023 as highlighted below
    </p>
    <p>
      Due to substantial financial pressures within the Housing Revenue Account, we
      have unfortunately had to consider reducing or stopping some services to
      customers in order to invest in others. Last year the Garden Pledge Scheme was
      put forward as a potential saving and following full Council on 20th February
      2023 a decision was taken by Members to end this service on the 31st of March
      2023.
    </p>
    <p>
      This means that the annual garden visits that customers currently on the
      scheme receive will not continue. If you haven’t already you will shortly
      receive a letter with further information and containing details about third
      party organisations who may be able to offer support with your garden, please
      note that these organisations may charge for their services and are not linked
      to Sheffield City Council in any way.
    </p>
    <p>
      We appreciate this decision will be disappointing to you and that you may have
      questions.
    </p>
    <p>
      List of Gardening Services:
      <a
        href="G:\CEX\Corp Res\CS-Gen\Contact Centre\CRM\Spreadsheets\Estates\Garden\Alternative Garden Services List.xls"
        >Alternative Garden Services List</a
      >
      - (This list can be provided to customers (emailed, posted, etc.))
    </p>
    <p>
      Please note, these companies are not endorsed by Sheffield City Council. The
      inclusion of these companies on this list does not mean that they have been
      recommended or vetted by Sheffield City Council.
    </p>
    <p>
      The Government also has a website which lists local, trustworthy and reliable
      tradesmen, operating to Government endorsed standards
      <a href="http://www.trustmark.org.uk/ " target="_blank"
        >http://www.trustmark.org.uk</a
      >.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Information", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const fencesCouncilHousing = new ContentH(
  "fencesCouncilHousing",
  "Fences (Council Housing)",
  "Installation, repair and removal of fences",
  `
    <h3>New Fence</h3>
    <p>
      Installation of fences is the tenants responsibility. The customer will need
      to have permission to install a new fence.
    </p>
    <h3>Repair to an Existing Fence</h3>
    <p>
      The Council do not repair tenants' fences. It is the tenant's responsibility.
    </p>
    <h3>Fallen Fence to be Removed</h3>
    <p>
      Estate Services teams will only remove blown down fences if they are a safety
      hazard.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Information", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const estatesAndEnvironments = new MenuH(
  "estatesAndEnvironments",
  "Estates and Environments",
  "Desc tbc",
  [
    fencesCouncilHousing,
    gardenPledgeScheme,
    blockedBinChutes,
    communalCupboard,
    communalFireSafety,
  ]
);

// Example instantiation for topicExample1
const topicExample1 = new ContentH(
  "topicexample1",
  "Topic Title Example 1",
  "Topic Description Example 1",
  `<p>example text</p>`,
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

// Example instantiation for subjectExample2 (Menu with topics)
const subjectExample2 = new MenuH(
  "subjectexample2",
  "Subject Title Example 2",
  "Subject Description Example 2",
  [topicExample1]
);

// Example instantiation for subjectExample1 (Full content)
const subjectExample1 = new ContentH(
  "subjectexample1",
  "Subject Title Example 1",
  "Subject Description Example 1",
  `<p>example text</p>`,
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Apply", keywords: [], categories: ["Housing"] },
  { date: "05/09/2024", name: "Elliott Griffiths" }
);

const leaseholderInformation = new ContentH(
  "leaseholderInformation",
  "Leaseholder Information",
  "This section provides information on how to handle blocked bin chutes in Council flats or maisonettes.",
  `
    <p>
      If you live in an ex-Council flat or maisonette property you are a leaseholder
      of Sheffield City Council.
    </p>
    <p>
      As a landlord, the Council are responsible for calculating and issuing bills to leaseholders.
      These may be for service charges and similar costs, as well as for major works.
    </p>
    <p>
      The Council are only responsible for communal repairs; Leaseholders are responsible
      for repairs within their own property.
    </p>
    <h3>What service charges cover</h3>
    <p>
      Service charges cover all works and services carried out to the structure of the block and communal
      areas, including cleaning of communal areas, lighting, lift maintenance and upkeep of gardens. It also
      covers day-to-day repairs, maintenance and improvement work.
    </p>
    <h3>Cost of service charges</h3>
    <p>
      Service charges for leaseholders are paid annually and vary depending on the cost incurred to the
      block during the service charge year, which runs from 1st October to 30th September. Customers will
      pay a share of the costs calculated for their block. For example; if there are 8 dwellings in a block,
      service charges will amount to 1/8th of the total cost.
    </p>
    <h3>Difficulty paying service charge</h3>
    <p>
      Leaseholders can now pay service charges by instalments, spreading the cost over 12 months.
    </p>
    <p>
      For larger items of work commanding higher costs, Leaseholders should contact the Council to discuss tailored repayment options.
    </p>
    <h3>Subletting a property</h3>
    <p>
      As a leaseholder you have the right to sublet your home. This means that you may take in lodgers or rent your home to someone else, if you want to.
    </p>
    <p>
      You will also need to advise your mortgage lender if you do rent out your home.
    </p>
    <p>
      You will remain responsible for ensuring that the terms of the lease are complied with and you will remain liable for any breaches,
      regardless of whether the breaches are committed by you, your sub-tenant or other parties connected to your sub-tenant.
      You will therefore be responsible for the behaviour of your sub-tenant(s). This would include, for example, ensuring that they do not cause a nuisance to neighbours.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Information", keywords: [], categories: ["Housing"] },
  { date: "11/10/2024", name: "Abishai Devarapalli" }
);

//Instantiation for Rehousing
const applyForRehousing = new ContentH(
  "applyForRehousing",
  "Apply for Rehousing",
  "Desc tbc",
  `
    <p>
      To apply for Social Housing you need to do so via the Property Shop website. There are no paper application forms.
      This will be will Housing Online when NEC comes in
    </p>
    <p>
      Go online and register on www.sheffieldpropertyshop.org.uk
    </p>
    <p>
      Before you can complete an application to join the Housing Register you will need to register yourself as a new household on the system.
    </p>
    <p>
      Once registered you will be able to complete an application form to join the Housing Register.
    </p>
    <p>
      You must produce proof of ID (and Child Benefit if appropriate) and a landlord reference (if you are not already a Council tenant) at the same time,
      documents can be uploaded via the website or at your local housing office or First Point before your application will be validated.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
)

const applicationChanges = new ContentH(
  "applicationChanges",
  "Application Changes",
  "Desc tbc",
  `
    <p>
      Change of circumstances are now online. When you are making changes you must remember to click 'Submit'.
      ID/References may also need to be submitted before any changes are accepted.
    </p>
    <p>
      It is very important that you tell us of any changes in your circumstances so that we can amend your application.
      We will tell you if this results in your application moving to a different band. Depending on the change you have made,
      you may be required to resubmit your identification/reference before changes are accepted. We will inform you if this is necessary.
    </p>
    <p>
      If the customer has made recent changes, the changes are likely to be awaiting approval and no further changes can be made until they are approved.
    </p>
    <h3>Accepted ID</h3>
      <p>
        You must provide two forms of identification to prove changes to your application.
        One must be from the Proof of ID documents list whilst the second must provide proof of your current UK address.
        Photo ID is also required to prove your identity. If you do not have photo ID, you must provide a passport-sized photo accompanied with a birth certificate.
        Proof of child benefit is only required where children under 16 years of age are being rehoused with you.
      </p>
      <p>
        Proof of ID documents	Proof of address	Proof of Child Benefit
      </p>
      <p>
        Marriage certificate
      </p>
      <p>
        Divorce/Annulment papers
      </p>
      <p>
        Passport (this can be expired but if the customer is an adult an adult passport must be produced)
      </p>
      <p>
        Deed poll documentation for change of name (to accompany details of former name if applicable)
      </p>
      <p>
        Current bus passes with photograph
      </p>
      <p>
        UK resident permit
      </p>
      <p>
        ID card issued by EEA/EU countries
      </p>
      <p>
        Home Office standard acceptance letter
      </p>
      <p>
        Immigration status document
      </p>
      <p>
        NASS 35
      </p>
      <p>
        Citizenship card (with hologram and photo to prove age)
      </p>
      <p>
        Medical card
      </p>
      <p>
        Birth certificate/Adoption certificate
      </p>
      <p>
        Letter from Social Worker/Probation Officer/Solicitor
      </p>
      <p>
        Driving licence
      </p>
      <p>
        Proof
      </p>
      <p>
        Recent utility bill paid in that person’s name (last quarter)
      </p>
      <p>
        Most recent council tax statement
      </p>
      <p>
        Driving licence
      </p>
      <p>
        Home Office standard acceptance letter
      </p>
      <p>
        Letter from DWP for tax credits
      </p>
      <p>
        Bank statement from within the last 3months
      </p>
      <p>
        Wage slip from current employer
      </p>
      <p>
        Life assurance/Insurance policies
      </p>
      <p>
        Proof of all other benefits
      </p>
      <p>
        Child benefit award letter
      </p>
      <p>
        The last 3 consecutive months bank statements (Only where award letter is not available).
      </p>
    <h3>Annual Renewal</h3>
      <p>
        Under the Allocation Policy customers will be required to update their application on the anniversary of the date they registered.
      </p>
      <p>
        If applications are not renewed within 42 days when requested the application may be cancelled.
      </p>
      <p>
        Customers won’t need to submit ID for any changes they make and this will continue for the time being. This will change in NEC
      </p>
      <h4>Instructions for completing the renewal of your Housing Application online</h4>
        <p>
          Log onto our website at www.sheffieldpropertyshop.org.uk and follow the links from the homepage
        </p>
        <p>
          Click ‘Log into my account’
        </p>
        <p>
          On this page you will be asked to enter your login details. These are:
        </p>
        <p>
          Your unique reference number - This can be found on the enclosed letter
          <br>
          Your memorable date and password – Contact us if you need this
          <br>
          Once you have logged into your account you will need to;
        </p>
        <p>
          Click on the link ‘Update my details’ under the heading ‘Application renewal required’
          <br>
          Check the information carefully, and confirm your details are correct, or
          <br>
          Submit the form to confirm your details. You must still submit the form even if there are no changes to your information.
          <br>
          If you make changes to any of the following information on your application you will also need to provide proof of identity (ID) and address for everyone included on your housing application.
        </p>
        <p>
          Name of anyone on the application
          <br>
          Date of birth on anyone on the application
          <br>
          Added a joint applicant or household member to the application
          <br>
          Address of anyone on the application
          <br>
          National Insurance number of anyone on the application
          <br>
          Nationality of anyone on the application
          <br>
          If the changes you have submitted require you to provide further evidence, this should be;
        </p>
        <p>
          One form of ‘primary’ ID for the applicant, joint applicant and household members.
          If this does not include a photograph, for example a birth certificate, we will also require a passport style photograph.
          <br>
          Proof of address for the applicant , joint applicant and household members aged 16 and over
          <br>
          Proof of child benefit for all children aged 16 or under who are named on the application.
          This should be your most recent child benefit award letter or last 3 months bank statements
          <br>
          A full list of acceptable identification documents is available on our website at www.sheffieldpropertyshop.org.uk
          (Advisor note: Acceptable ID is listed in the accordion above)
          <br>
          ID must be provided within 28 days of submitting your application. You should take these to your local First Point or to Howden House.
          If you have any issues with providing the above, please contact us on 0114 205 3333 or 293 0000.
        </p>
        <p>
          It is very important that you check and confirm the details on your application even if this has not changed.
          If you do not do this within 28 days of the date on this letter we will cancel your housing registration.
          The best way for the customer to reset their memorable date is to go online.
          <br>
          You will need to have included an email address when completing the website (household) registration.
        </p>
      <h4>Housing Registration Renewals Letter</h4>
        <p>
          Important - action required or your Housing Application will be cancelled
        </p>
        <p>
          Reference: XXXXXX
        </p>
        <p>
          Dear XXXXXX
        </p>
          I am writing to inform you that we are currently checking the details of everyone who has a current application on Sheffield City Council’s Housing Register.
        <p>
          If you wish to remain on the Council’s Housing Register it is important that you log into your housing application and confirm that all your details are correct.
          If necessary, you can make changes to the details on your housing application and then submit these. Please see overleaf for how to do this.
        </p>
        <p>
          We will ask you to renew your application every 12 months on the anniversary date of your application,
          we will write to you as a reminder so please ensure your correspondence address is kept up to date.
        </p>
        <p>
          If you do not do this your housing application will be cancelled and any waiting time you have accrued to date will be lost.
          This means that if you want to be rehoused to social housing in the future you will need to make a fresh application.
        </p>
        <p>
          If you are unable to complete the online Renewal yourself, please ask family or friends for help.
          If you wish to discuss the details of this letter or have no way to access the internet you can telephone the Registration Team on 0114 293 0000.
        </p>
        <p>
          You can also get help and advice at the Sheffield Property Shop located in Howden House on Union Street, Sheffield, or at your nearest neighbourhood housing office.
        </p>
        <p>
          Yours Sincerely
        </p>
        <p>
          Registration Team
          <br>
          Rehousing Service
        </p>
        <p>
          Please see over
        </p>
        <p>
          To complete the renewal of your Housing Application
        </p>
        <p>
          Log onto our website at www.sheffieldpropertyshop.org.uk and follow the links from the homepage Click ‘Log into my account’
        </p>
        <p>
          On this page you will be asked to enter your login details. These are:
          <br>
          - Your unique reference number - This can be found on the enclosed letter
          <br>
          - Your memorable date – Contact us if you need this
        </p>
        <p>
          Once you have logged into your account you will need to:
          <br>
          - Click on the link ‘Update my details’ under the heading ‘Application renewal required’
          <br>
          - Check the information carefully, and confirm your details are correct, or
          <br>
          - Make changes to any of the information that is incorrect and add any information that is missing.
          <br>
          - Submit the form to confirm your details. You must still submit the form even if there are no changes to your information.
        </p>
        <p>
          It is very important that you check and confirm the details on your application even if this has not changed.
          If you do not do this within 28 days of the date on this letter we will cancel your housing registration.
        </p>
    <h3>Disqualification / Restriction</h3>
      <p>
        The Allocations Policy advises of various circumstances where we will reduce the preference applicants are given on the Housing Register,
        or prevent them from joining the register. These include circumstances such as rent arrears or past/current anti-social behaviour.
      </p>
      <p>
        In the most serious debt cases, the Allocations Policy allows us to place applicants into Band E or disqualify a customer from the Housing Register for an initial period of 12 months.
      </p>
        A customer can apply for a restriction to be removed if:
      <p>
        they are able to evidence that their behaviour has significantly improved e.g. pay off arrears in full
      </p>
      <p>
        they appeal the restriction (disqualification) within 21 days
      </p>
      <p>
        they have exceptional circumstances
      </p>
      <p>
        they need a priority
      </p>
      <p>
        An Exception Request allows us to make decisions on whether it is appropriate to waive the restrictions/disqualification in exceptional circumstances.
      </p>
      <p>
        If an applicant is allowed back on the housing register, they will have to re-register. ID and reference will be applicable; unless recently submitted.
        The usual checks will be carried out and the appropriate band chosen. Applicants lose their original waiting time.
      </p>
    <h3>Assistance with change of circumstances</h3>
      <p>
        Log on using the details below if required.
      </p>
      <p>
        Unique Reference - 1257822
        <br>
        Memorable date - 25/12/2012
        <br>
        Password - DMrm15
        <br>
        Advisor note: You have logged in using dummy login details. Please do not amend anything on screen.
        <br>
        Log in if required using the log in details above and follow the below instructions:
      </p>
      <p>
        Select My Social Housing on the left hand side.
        <br>
        Select Click here to update your details
        <br>
        Navigate through the Social Housing Form using the Next section buttons and advise the customer as appropriate.
        <br>
        Please do not Submit application
        <br>
        Advisor note
        <br>
        You have logged in using dummy login details. Please do not amend anything on screen.
      </p>
    <h3>Exceptions</h3>
      <p>
        The Allocations Policy advises of various circumstances in which we will reduce the preference which applicants are given on the Housing Register, or prevent them from joining the register. These include circumstances such as rent arrears or past/current anti-social behaviour.
      </p>
      <p>
        An Exception Request allows us to make decisions on whether it is appropriate to waive these restrictions in exceptional circumstances. Situations where we might consider an Exception Request include where we are awarding a priority or where an applicant wishes to move to more suitable accommodation using their waiting time due to a change in their circumstances.
      </p>
      <p>
        In order for us to consider an Exception Request, the applicant will have to demonstrate that they have exceptional circumstances and have taken action to rectify the issues which led to them being given reduced preference or disqualified from the register.
      </p>
      <p>
        If an applicant is placed in Band E they may request an Exception Request to be placed in General Needs Band D in order to make better use of their waiting time. In these circumstances, an Exception Request can be completed however the applicant would still be required to evidence that they have exceptional circumstances. This is also the case where the applicant is disqualified and an Exception Request is submitted to be placed in Band E.
      </p>
      <p>
        Reviews
      </p>
      <p>
        We will write to applicants advising them of our decision at which point a review can be requested within 21 days. Following the review, we will not normally reconsider a request for six months unless there has been a change in the applicant’s circumstances. There is no further right of review on such decisions.
      </p>
      <p>
        Hostel Leavers
      </p>
      <p>
        Referrals need to be made by the hostel.
      </p>
    <h3>Name Changes</h3>
      <p>
        You should present proof (3 documents in total) to a housing office or First Point who will copy the ID and save it to our document management store.
        Advisor note: Acceptable ID is listed in an accordion above.
      </p>
      <p>
        The name will then be changed in our Housing management system.
      </p>
      <p>
        Alternatively, you can put the name change in writing along with proof of the new name (originals, not photocopies) and send it to RegistrationID@sheffield.gov.uk
      </p>
      <p>
        At least one piece of proof must be primary evidence whilst the second may be either primary or secondary evidence. Proof of their current UK address is also required.
      </p>
      <p>
        Photo ID is also required to prove identity. If the customer does not have photo ID, they must provide a passport-sized photo.
        The same document cannot be used more than once e.g. driving licence as primary evidence and proof of address.
      </p>
    <h3>Split Applications</h3>
      <h4>Main Applicant</h4>
        <p>
          Removing a joint applicant needs to be done online at the Property Shop website.
        </p>
      <h4>Joint Applicant</h4>
        <p>
          You will need to speak to the Registration team so that your National Insurance Number can be removed. Notes will also need to be made on your joint household.
        </p>
        <p>
          You will need to complete a new online application and confirm on that application that you want to be removed from the other application.
          You will not lose your original waiting time as this will be carried forward as part of the approval process.
        </p>
        <p>
          You should not log on and use a made up NI number or you may not get your waiting time back.
        </p>
    <h3>Suspend Application</h3>
      <p>
        You cannot suspend your own application. If you do not want to be rehoused but want to keep you application, simply don't bid.
      </p>
    <h3>Why has family member been removed from their Application</h3>
      <p>
        Search for customer through Abritas household. Look at the Abritas CRM for recent notes.
        If notes indicate that 16-25 year old has been removed due to activating own application, the customer will need to speak with their family member.
      </p>
      <h3>Application for 16-25 year old</h3>
        <h4>Customer wants to activate own Application</h4>
          <p>
            Applicants are only permitted to be on one application unless they are 16-25 and living with parents/guardians.
            In this case, they can have a restricted application of their own and also be a household member on the family application.
          </p>
          <p>
            For customers aged 16-25, search for customer through Abritas household to find suspended application.
          </p>
        <h4>Customer wants to go back on to parents/guardians Application</h4>
          <p>
            You will no longer qualify to be rehoused with their parents unless you are willing to cancel your own application (if they have one).
            In order to be on two applications you must be continuously on your parent’s application without a break.
          </p>
      <h3>Dummy Registration</h3>
        <p>
          Log on using the details below if required.
        </p>
        <p>
          Unique Reference - 1257822
          <br>
          Memorable date - 25/12/2012
          <br>
          Password - DMrm15
          <br>
          Advisor note: You have logged in using dummy login details. Please do not amend anything on screen.
        </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
)

const bidding = new ContentH(
  "bidding",
  "Bidding",
  "Desc tbc",
  `
    <p>
      After you have registered for housing, you express your interest in renting a property by making a bid.
      You only have to bid once per property. You make bids online at the Property Shop website www.sheffieldpropertyshop.org.uk
      You can bid 3 times (plus 1 FCFS) within each weekly bidding cycle (Thursday to Tuesday).
    </p>
    <h3>Why can't you bid for me</h3>
      <p>
        If you need assistance placing a bid, you can visit Sheffield Property Shop located in Howden House on Union Street, Sheffield, or your nearest neighbourhood housing office.
      </p>
    <h3>First Come First Served</h3>
      <p>
        The homes we offer through our First Come First Served scheme are properties which have usually been advertised through the bidding system,
        but received no eligible bids. Where this happens, we will make them available on a first come first served basis.
        These properties are often age-banded studio and one-bedroom flats however we do sometimes advertise two and three bedroom properties in this way.
      </p>
      <p>
        The properties are located throughout the City and can be provided by the Council or Housing Associations.
        Properties are offered to the first person on the housing register who places a bid and meets the minimum letting criteria.
      </p>
      <p>
        In cases when there are no bidders for properties we may also change the eligibility criteria.
        For example, households that would only normally qualify for two bedroom properties may be allowed to bid for some three bedroom maisonettes.
        The advert will clearly state where this is the case.
      </p>
      <p>
        However, if you are of working age and you bid for a property that is larger than you would normally qualify for,
        you may not be entitled to receive full housing benefit. In these cases we may carry out a financial assessment with you.
      </p>
    <h3>How do I get online</h3>
      <h4>Technical issues with the website / Running slowly</h4>
        <p>
          Advisor note: Investigate if the issue is a technical issue with the website and check if you can access the Property Shop website.
        </p>
      <h4>How do I get online / I do not have a PC</h4>
        <p>
          You get online via any device that connects to the internet. If you do not have access to the internet you can get access via:
        </p>
        <p>
          Internet cafes from a smart phone
          <br>
          At a friend or relative's house
          <br>
          Or you can contact the UK Online centre – call 0800 77 1234 to find your nearest online access point
        </p>
    <h3>Why can I not bid on the website</h3>
      <p>
        There can be various reasons why you cannot place bids on the website, such as:
      </p>
      <p>
        You may not be able to log in because your login details are not correct
        <br>
        Your application may not have been validated
        <br>
        You may be disqualified from the Housing Register
        <br>
        Your application may have been closed
        <br>
        You may be under offer for a property
        <br>
        You may be trying to bid for properties that you are not eligible for
      </p>
    <h3>What happens after bidding</h3>
      <p>
        Once the bidding has finished, checks will be made on who is in first position, that the keys for the property are ready,
        and final checks will be completed on the person in first position when bidding closed. We will then contact the successful customer by phone,
        email or letter to offer the property. It is important that customers ensure their contact details on the website are up to date so that we can do this.
        <br>
        Unsuccessful applicants will not be notified.
      </p>
      <p>
        However, we may not offer you a property if you owe a debt to the housing service, have a history of anti social behaviour, or have not kept your Council tenancy in a good condition. These checks can take a few days.
      </p>
      <p>
        If you are offered a property we will not consider your bids for any other properties until you have decided whether or not to accept the property offered.
      </p>
    <h3>Assistance with online bidding or login issue</h3>
      <p>
        Log on using the details below if required.
      </p>
      <p>
        Unique Reference - 1257822
        <br>
        Memorable date - 25/12/2012
        <br>
        Password - DMrm15
      </p>
      <p>
        Advisor note
        <br>
        You have logged in using dummy login details. Please do not amend anything on screen.
      </p>
      <h4>Assistance with bidding</h4>
        <p>
          The 'My Account' screen has a link to the 'Eligible properties' you can bid for. Click on the link and choose what property you want to bid for. You then needs to:
        </p>
        <p>
          - Click the 'Apply for property' link (in green).
          <br>
          - If details are correct, tick the tick box, and then click 'Confirm details and apply'.
        </p>
      <h4>Assistance with removing a bid</h4>
        <p>
          Advise the customer that they need to select:
          <br>
          My Bids on the right hand side of the screen, then put a tick against the bid you want to withdraw and then select Withdraw selected.
          It will ask you if you are sure you want to withdraw the bid, select Yes or No.
        </p>
      <h4>Assistance with finding out how much waiting time customer has</h4>
        <p>
          Give the Band effective date on the application to the customer
        </p>
      <h4>Log in Issue</h4>
        <p>
          To apply for Social Housing you need to do so via the Property Shop website. There are no paper application forms.
          This will be will Housing Online when NEC comes in
        </p>
        <p>
          Go online and register on www.sheffieldpropertyshop.org.uk
        </p>
        <p>
          Before you can complete an application to join the Housing Register you will need to register yourself as a new household on the system.
        </p>
        <p>
          Once registered you will be able to complete an application form to join the Housing Register.
        </p>
        <p>
          You must produce proof of ID (and Child Benefit if appropriate) and a landlord reference (if you are not already a Council tenant) at the same time,
          documents can be uploaded via the website or at your local housing office or First Point before your application will be validated.
        </p>
          <h4>URN (Unique Reference Number)</h4>
            <p>
              Starts process
            </p>
          <h4>Memorable Date / Password Reset</h4>
            <p>
              The best way for the customer to reset their memorable date is to go online.
              You will need to have included an email address when completing the website (household) registration.
            </p>
      <h4>Customer is an owner occupier moving to a council property</h4>
        <p>
          If you own your own property and are moving into a Council Housing Service property,
          you need to have taken reasonable steps to sell or dispose of their owner occupied property within 6 months.
          You should evidence that the house is up for sale by showing us the brochure.
        </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
)

const eligibility = new ContentH(
  "eligibility",
  "Eligibility",
  "Desc tbc",
  `
    <p>
      Sheffield City Council operates an open register and therefore any person over the age of 16 can apply to join the Housing Register.
      However, generally you will not be made an offer of a property until you are at least 18 years old.
    </p>
    <p>
      The Housing Act 1996 prevents Local Authorities from offering a property to some people because of their immigration status.
      We will let you know if this applies to you after you register.
    </p>
    <p>
      If you are eligible to register you may do so by completing the online application form.
      Following this, you will be provided with a login reference number and required to provide a memorable date which will act as your password for logging in to the website in the future.
    </p>
    <p>
      There are some people who are not eligible to be included on the Housing Register. These are:
    </p>
    <p>
      Certain people who are subject to Immigration Control under the 1996 Asylum and Immigration Act.
      <br>
      Certain people from abroad who are not subject to immigration control but who are not habitually resident in the UK, the Channel Islands,
      the Isle of Man or the Republic of Ireland.
      <br>
      People (including members of their household) who have been guilty of unacceptable behaviour that makes them unsuitable to be a tenant.
    </p>
    <h3>After submitting your application</h3>
      <p>
        After submitting your application online you will be asked to provide us with various documentation such as identification and a reference.
        You may also be asked to provide evidence of your immigration status where relevant.
        You should make sure that all of this documentation is available to you before completing your online application application as you need to submit this documentation immediately.
        Failure to provide this within the given timescales will mean you will need to restart the process from the beginning by submitting a further online application.
      </p>
    <h3>Eligibility Table</h3>
      <p>
        A copy of the eligibility table can be found here .
      </p>
    <h3>Relaxed eligibility</h3>
      <p>
        Relaxed eligibility criteria is uncommon, but has sometimes been applied in the past to properties that receive no bids and/or have a known low demand.
        The majority of these properties were maisonettes.
      </p>
      <p>
        Properties where relaxed eligibility has been applied will have a message in the 'Show full details>>Further information' box of the property advert.
      </p>
      <p>
        For Example: A 3 bed maisonette with relaxed eligibility will have a message similar to this:
      </p>
      <p>
        'Households eligible for 2 bed properties can bid and a financial assessment will be carried out to check that the property is affordable.'
      </p>
      <p>
        If a customer then places a bid for the property and comes first, IMFIT (Rents) will contact the customer prior to any offer to ensure that the customer is able to afford the property.
      </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
)

const housingAssociations = new ContentH(
  "housingAssociations",
  "Housing Associations",
  "Desc tbc",
  `
    <h3></h3>
    <p>

    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
)


// Sheltered and Supported
const furnishedAccommodation = new ContentSaS(
  "furnishedAccommodation",
  "Furnished Accommodation",
  "Desc tbc",
  `
  <p>Furnished Accommodation meets the need for good quality furnished housing for rent at affordable prices and offers an alternative for people residing in expensive bed and breakfast accommodation.</p>
<p>Properties are furnished with goods generally selected by the customer on a choice basis to meet their needs on a 3 tiered service charge arrangement. Fully furnished properties are decorated and carpeted throughout and curtains and tracks are provided and fitted.</p>
<p>Enquiries that are specifically regarding the information in this page can be sent to Furnished using the links at the bottom of the page. If the enquiry is related to other matters, for instance estate management, tenancy management or ASB, then the appropriate form should be used to process that enquiry.</p>   
  
  
  
  
  
  
  
  
  
  
  
  
  `
  
)
// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  "housing",
  "Housing",
  "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
  [estatesAndEnvironments, leaseholderInformation, rehousing]
);
