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
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Request", keywords: ["rehousing"], categories: ["Housing"] },
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

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  "housing",
  "Housing",
  "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
  [estatesAndEnvironments, leaseholderInformation]
  [estatesAndEnvironments, leaseholderInformation, rehousing]
);
