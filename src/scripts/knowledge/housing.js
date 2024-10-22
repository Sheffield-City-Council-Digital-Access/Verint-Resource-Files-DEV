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
  { typeKey: "registering_to_vote_transferred_to_service" },
  { typeKey: "registering_to_vote_information_provided" },
  {
    type: "Request",
    keywords: [],
    categories: ["Elections and Referendums", "Electoral"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
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

//apply for Housing Rent to be under Rent menu
const arrearsorDebt = new ContentH(
  "arrearsorDebt",
  "Court Order Removal of",
  "Removal of a Court Order from your rent account,",
  `
    <p>
      If you would like the removal of a Court Order from your rent account, or to pay for the removal 
      of the Court Order, then you can either apply direct to the court, or speak to our Court Team.  
      You will require your court reference number.
    </p>
    <p>
      If the Court Team are happy for the Order to be removed, they will send a letter to the court 
      advising the court that that they do not oppose the removal.
    </p>
  `,
  { buttonLabel: "Arrears or Debt", formName: "Rents" },
  { typeKey: "rents_information_provided" },
  { typeKey: "rents_transfered_to_service" },
  { type: "Information", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const balanceEnquiry = new ContentH(
  "balanceEnquiry",
  "Balance Enquiry",
  "Information about rent balance enquiry,",
  `
  <p>
  You can now check your own balance and rent account online by logging onto 
  <a href="https://www.sheffield.gov.uk/home/council-housing/check-my-rent-balance">this page</a>.
  </p> 
  <p>
  There is also a link on this page to the GRO site for users who wish to use this.
  </p>
  <p>
  You can also register for SMS alerts at 
  <a href="https://www.sheffield.gov.uk/utilities/Forms/housing/register-rent-text">this link</a>.
  </p>
  <p>
  You only need your rent reference and surname to use these services.
  </p> 

  <details class="accordion">
      <summary class="accordion-header">
        <h3>Assist Customer to Register for SMS Balance Alerts</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
      <ol> 
      <li><a href="https://www.sheffield.gov.uk/utilities/Forms/housing/register-rent-text">Click here to open website</a></li> 
      <li>Ask for Rent Reference and Surname</li> 
      <li>Ask for mobile phone number</li> 
      <li>Inform the customer - you should receive a Text from Sheffield CC – obtain code from tenant</li> 
      <li>Please can you state your preferences</li> 
      <li>For verification purposes, please provide your name. We do not store this information</li> 
      <li>Confirm customer is now registered for text alerts. Advise to TEXT RENT at any time to 0790866101 for an updated balance</li> 
      </ol> 
      <p>
      Advise the Tenant the online balance may take up to 72 hours after payment to update.
      </p> 
      </div>
    </details>
  `,
  { buttonLabel: "Balance Enquiry", formName: "Rents" },
  { typeKey: "rents_information_provided" },
  { typeKey: "rents_transfered_to_service" },
  { type: "Information", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const insurance = new ContentH(
  "insurance",
  "Insurance",
  "Information about offering an insurance scheme to the tenants",
  `
  <p>
  The Council offers tenants an insurance scheme, covering:
  </p>
  <ul>
  <li>Water damage</li>
  <li>Fire damage</li>
  <li>Theft</li>
  <li>Accidental damage</li>
  <li>Lost or damaged while in your house, domestic outbuildings, garages, sheds, greenhouses, and cellars.</li>
  </ul>
  <p>
  There are no excess payments on the Insurance through this scheme.
  </p>
     
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Apply for Insurance / Customer received Home Contents Insurance Flyer</h3>
       <div class="accordion-icon"></div>
        </summary>
          <div class="accordion-content">
           <p>
            You can apply for insurance online at <a href="http://www.sheffield.gov.uk/content/sheffield/home/council-housing/tenants-home-contents-insurance.html">this page</a>.
            </p>
            <p>
             If you are unable to access the online application, we can start the process for you.
            </p>
             </div>
              </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Cancel Household Insurance</h3>
        <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content">
          <p>
           To cancel Household Insurance with the Council Housing Service, write to:
          </p>
          <address>
          Sheffield Council Housing Service<br>
          PO Box 5967<br>
          Sheffield<br>
          S2 9GH
          </address>
          <p>
          or can be referred to the Rent Account Maintenance team.
          </p>
          </div>
          </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Chasing a Claim (Loss Adjuster)</h3>
       <div class="accordion-icon"></div>
        </summary>
          <div class="accordion-content">
        <p>
        Once a claim has been made, the loss adjuster aims to contact the customer within 48 hours. The Loss 
        Adjuster can be contacted on 0161 8758988.
        </p>
        </div>
        </details>

  <details class="accordion">
   <summary class="accordion-header">
    <h3>Eligibility</h3>
     <div class="accordion-icon"></div>
      </summary>
       <div class="accordion-content">
      <p>
      Council Housing tenants with less than 4 weeks of arrears are eligible for the Council Housing Contents
      Insurance scheme.
      </p>
      <p>
      Council tenants with more than 4 weeks of arrears are not eligible, nor are Non-Council tenants or 
      Leaseholders.
      </p>
      </div>
      </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Insurance Premium Tax (Renewal) Letter</h3>
        <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content">
          <p>
          <strong>Issue:</strong> You have renewed my cover but my policy has been cancelled.
          </p>
          <p>
          The renewal letter must have crossed with us cancelling it.
          </p>
          <p>
          <strong>From Notes Section on Spreadsheet:</strong> Refer to the rent account maintenance team (RAM).
          </p>
            </div>
            </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Received Cheque but no Bank Account</h3>
        <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content">
          <p>
          Customers can have a cheque reissued in the name of a friend or relative, or can join the Credit Union
          which will allow them to cash cheques.
          </p>
            </div>
              </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Information on Joining Credit Union</h3>
        <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content">
          <p>
          Advise the customer that they can cash the cheque by becoming a member of the Credit Union 
          (this costs £1), and a post office cheque will be issued immediately. The address for the Credit Union is:
          </p>
          <address>
          Sheffield Credit Union<br>
          16 Commercial Street<br>
          Sheffield<br>
          S1 2AT
          </address>
          <p>
          The Credit Union's premises are open Monday to Friday, 10am to 1pm.
          </p>
            </div>
              </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Weekly Cost</h3>
        <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content"> 
  <p> The weekly cost depends upon how much cover is required:
</p>
<table style="width:60%">  
 <tr style="background-color: black; color: white;">
<th>Cost</th><th>Cover</th> <th>Cost</th>	 <th>Cover</th>	 <th>Cost</th>	 <th>Cover</th>	 <th>Cost</th>	 <th>Cover</th>	 <th>Cost</th>	 <th>Cover</th>
</tr>
<tr>
<td bgcolor="#ffccff">£6,000 (over 60's only)</td>	  <td bgcolor="#ffccff">£0.98</td>   <td bgcolor="#ffffcc">£13,000</td>	  <td bgcolor="#ffffcc">£2.11</td>	  <td bgcolor=#cce5ff>£20,000</td>	  <td bgcolor=#cce5ff>£3.25</td>	  <td bgcolor="#ffffcc">£27,000</td>	  <td bgcolor="#ffffcc">£4.39</td>	  <td bgcolor=#cce5ff>£34,000</td>	  <td bgcolor=#cce5ff>£5.53</td><td></td>
</tr>
<tr>
<td bgcolor="#ffccff">£7,000 (over 60's only)</td>	  <td bgcolor="#ffccff">£1.14</td>	  <td bgcolor="#ffffcc">£14,000</td>	  <td bgcolor="#ffffcc">£2.28</td>	  <td bgcolor=#cce5ff>£21,000</td>	  <td bgcolor=#cce5ff>£3.41</td>	  <td bgcolor="#ffffcc">£28,000</td>	  <td bgcolor="#ffffcc">£4.55</td>	  <td bgcolor=#cce5ff>£35,000</td>	  <td bgcolor=#cce5ff>£5.69</td><td></td>
</tr>
<tr>
<td bgcolor="#ffccff">£8,000 (over 60's only)</td>	<td bgcolor="#ffccff">£1.30</td>	 <td bgcolor="#ffffcc">£15,000</td>	 <td bgcolor="#ffffcc">£2.44</td>	 <td bgcolor=#cce5ff>£22,000</td>	 <td bgcolor=#cce5ff>£3.58</td>	 <td bgcolor="#ffffcc">£29,000</td>	 <td bgcolor="#ffffcc">£4.71</td>	 <td bgcolor=#cce5ff>£36,000</td>	 <td bgcolor=#cce5ff>£5.85</td><td></td>
</tr>
<tr>
<td bgcolor=#cce5ff>£9,000</td>	<td bgcolor=#cce5ff>£1.46</td>	 <td bgcolor="#ffffcc">£16,000</td>	<td bgcolor="#ffffcc">£2.60</td>	 <td bgcolor=#cce5ff>£23,000</td>	 <td bgcolor=#cce5ff>£3.74</td>	 <td bgcolor="#ffffcc">£30,000</td>	 <td bgcolor="#ffffcc">£4.88</td>	 <td bgcolor=#cce5ff>£37,000</td>	 <td bgcolor=#cce5ff>£6.01</td>
<td></td>     </tr>
<tr>
<td bgcolor=#cce5ff>£10,000</td>	 <td bgcolor=#cce5ff>£1.63</td>	 <td bgcolor="#ffffcc">£17,000</td>	 <td bgcolor="#ffffcc">£2.76</td>	 <td bgcolor=#cce5ff>£24,000</td>	 <td bgcolor=#cce5ff>£3.90</td>	 <td bgcolor="#ffffcc">£31,000</td>	<td bgcolor="#ffffcc">£5.04</td>	 <td bgcolor=#cce5ff>£38,000</td>	 <td bgcolor=#cce5ff>£6.18</td>
<td></td>      </tr>
<tr>
<td bgcolor=#cce5ff>£11,000</td>	 <td bgcolor=#cce5ff>£1.79</td>	 <td bgcolor="#ffffcc">£18,000</td>	 <td bgcolor="#ffffcc">£2.93</td>	 <td bgcolor=#cce5ff>£25,000</td>	 <td bgcolor=#cce5ff>£4.06</td>	 <td bgcolor="#ffffcc">£32,000</td>	 <td bgcolor="#ffffcc">£5.20</td>	 <td bgcolor=#cce5ff>£39,000</td>	 <td bgcolor=#cce5ff>£6.34</td>
<td></td>     </tr>
<tr>
<td bgcolor=#cce5ff>£12,000</td>	 <td bgcolor=#cce5ff>£1.95</td>	 <td bgcolor="#ffffcc">£19,000</td>	 <td bgcolor="#ffffcc">£3.09</td>	 <td bgcolor=#cce5ff>£26,000</td>	 <td bgcolor=#cce5ff>£4.23</td>	 <td bgcolor="#ffffcc">£33,000</td>	 <td bgcolor="#ffffcc">£5.36</td>	 <td bgcolor=#cce5ff>£40,000</td>	 <td bgcolor=#cce5ff>£6.50</td>
<td></td>   </tr>
</table> 
</div>
</details>  

  `,
  { buttonLabel: "Insurance", formName: "Rents" },
  { typeKey: "rents_information_provided" },
  { typeKey: "rents_transfered_to_service" },
  { type: "Information", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const onlineServices = new ContentH(
  "onlineServices",
  "Online Services",
  "Information about online Rents Services,",
  `
  <p>
  You can now check your own balance and rent account online by logging onto <a href="https://www.sheffield.gov.uk/home/council-housing/check-my-rent-balance">this page</a>.
  </p>
  <p>
  There is also a link on this page to the GRO site for users who wish to use this.
  </p>
  <p>
  You can also register for SMS alerts at <a href="https://www.sheffield.gov.uk/utilities/Forms/housing/register-rent-text">this link</a>.
  </p> 
  <p>
  You only need your rent reference and surname to use these services.
  </p>
  <p>
  This will hopefully be increasing as per Customer engagement project and Web Project.
  </p>

  `,
  { buttonLabel: "Online Services", formName: "Rents" },
  { typeKey: "rents_information_provided" },
  { typeKey: "rents_transfered_to_service" },
  { type: "Online Services", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const references = new ContentH(
  "references",
  "References",
  "Information about Rents References,",
  `
  <p>IMFIT (Rents) can provide a financial reference for you. Your Neighbourhood Support Team can provide a Tenancy Reference.
  </p>
  <p>
  Both of these may be subject to charges before the reference is returned.
  </p>
  <p>
  If this is for a mortgage company or a private landlord, the company needs to put this request in writing. There is a charge for this of £60, which must be paid to IMFIT before the reference is returned. The fee can be paid by debit/credit card or by BACS. 
  If they want to pay this, transfer the call to IMFIT - this is NOT paid to the rent account.
  </p>
  <p>
  Reference requests should be sent to:
  </p> 

  <address> 
  Sheffield Council Housing Service<br> 
  PO Box 5967<br>
  Sheffield<br>
  S2 9GH 
  </address> 
  <p>
  For Social Landlords (Housing Associations), these also need to be put in writing but there is no charge.
  </p>
  <p>
  Social Landlords can also email details of their request to <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> if they prefer to send an email.
  </p> 

  `,
  { buttonLabel: "References", formName: "Rents" },
  { typeKey: "rents_information_provided" },
  { typeKey: "rents_transfered_to_service" },
  { type: "References", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const rentVariation = new ContentH(
  "rentVariation",
  "Rent Variation",
  "",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ,",
  `
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Is your Rent Increasing?</h3>
        <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content">
          <p> 
          The annual changes to the rent charged are agreed by the Council Cabinet every January. 
          The general rent increase agreed from 1st April 2024 is <strong>7.7%</strong>.
          </p>
          <p>
          You can check an outline of the changes to rents and charges at Sheffield city counicl website
          by visiting the following links: 
          </p> 
          <p>
          <a href="/council-housing/how-rent-is-calculated">How we calculate your rent</a> 
          </p>
          <p>
          <a href="/council-housing/paying-your-rent" data-drupal-link-system-path="node/3140">Paying your rent</a>
          </p>
            </div>
              </details>

   <details class="accordion">
    <summary class="accordion-header">
      <h3>Direct Debit </h3>
         <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content">
          <p> 
          Anybody applying to pay by Direct Debit should be dealt with as normal, in the same way, 
          during this rent change period.
          </p>
          <p>
          Any queries on Direct Debits need to be directed to the Income Management and Financial 
          Inclusion Team.
          </p>
            </div>
              </details>

   <details class="accordion">
    <summary class="accordion-header">
      <h3>OHMS Rent System </h3>
        <div class="accordion-icon"></div>
          </summary>
            <div class="accordion-content">
          <p>
          Any OHMS Rent system issues can be reported through the IT Service Desk, Tel: 0114 2734476.
          </p>
          <p>The rent-free weeks this year will be weeks commencing:</p>
          <ul>
          <li>Monday 16th December 2024</li> 
          <li>Monday 23rd December 2024</li>
          </ul> 
            </div>
              </details>          





  `,
  { buttonLabel: "Rent Varitaion", formName: "Rents" },
  { typeKey: "rents_information_provided" },
  { typeKey: "rents_transfered_to_service" },
  { type: "Rent Varitaion", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);


const rents = new MenuH(
  "rents",
  "Rents",
  "Information about Housing Rents",
  [
    arrearsorDebt,
    balanceEnquiry,
    insurance,
    onlineServices,
    references,
    rentVariation,
    
  ]
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  "housing",
  "Housing",
  "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
  [
    estatesAndEnvironments, 
    leaseholderInformation,
    estatesAndEnvironments, 
    leaseholderInformation, 
    rehousing,
    rents,
  
  ]
);

