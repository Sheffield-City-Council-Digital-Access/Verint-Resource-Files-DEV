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

const furnishedAccommodation = new ContentH(
  "furnishedAccommodation",
  "Furnished Accommodation",
  "Desc tbc",
  `
    <p>
      Furnished Accommodation meets the need for good quality furnished housing for
      rent at affordable prices and offers an alternative for people residing in
      expensive bed and breakfast accommodation.
    </p>
    <p>
      Properties are furnished with goods generally selected by the customer on a
      choice basis to meet their needs on a 3 tiered service charge arrangement.
      Fully furnished properties are decorated and carpeted throughout and curtains
      and tracks are provided and fitted.
    </p>
    <p>
      Enquiries that are specifically regarding the information in this page can be
      sent to Furnished using the links at the bottom of the page. If the enquiry is
      related to other matters, for instance estate management, tenancy management
      or ASB, then the appropriate form should be used to process that enquiry.
    </p>
    <h3>Furnished Accommodation Cost</h3>
    <p>
      The cost depends on the package chosen and there are 3 tiers: Gold, Silver and
      Bronze. These carry £10, £15 and £20 per week charge that is payable over and
      above the net rent charge for the property.
    </p>
    <p>How it works</p>
    <p>There are three price bands to choose from:</p>
    <ul>
      <li>Gold - £20 per week (20 points)</li>
      <li>Silver - £15 per week (15 points)</li>
      <li>Bronze - £10 per week (10 points)</li>
    </ul>
    <p>
      Each piece of furniture or floor covering will have a points value and the
      points will add up to package you want; Gold, Silver or Bronze. A Bronze
      package for example costs £10 a week and you can have 10 points worth of
      furniture (this could include a table and chairs, a settee, a fridge freezer
      and washing machine all at 2 points each and an arm chair and crockery pack at
      1 point each). You can mix and match, depending on what furniture you already
      have.
    </p>
    <p>
      Items of furniture and colour choices now available include washing machines,
      fridge freezers, vacuum cleaners, pots and pans and 3 colours of carpets and
      vinyl.
    </p>
    <h3>Customer wants an item of furniture replacing</h3>
    <p>
      The exchanging of furniture items is subject to a variety of factors
      including:
    </p>
    <ul>
      <li>The age of the goods as they still may be under warranty</li>
      <li>
        If damaged – the reason for the damage - must be fair wear and tear or
        manufacturing fault / defect.
      </li>
      <li>
        Most goods are assessed at the customer’s annual visit they receive and also
        all relevant electrical items are PAT tested at this time. The officer
        carrying out the visit will arrange any replacement goods if agreed and
        applicable.
      </li>
    </ul>
    <h3>Customer no longer wants their furniture</h3>
    <p>
      There are instances where financial hardship may be caused by the service
      charge and / or the customer has sourced their own goods now. The process of
      removing the service charge is known as Deed of Variation and it takes
      approximately 10 weeks to complete as there are 2 notice periods with 28 day
      cooling off periods legally built into them.
    </p>
    <h3>Furnished and Local Assistance Scheme (LAS)</h3>
    <p>
      Furnished provide the goods and deliver them to customers who have applied for
      the grant / goods via Local Assistance Scheme. Furnished may provide
      installation at Council properties but do not perform installs at non Council
      properties.
    </p>
    <h3>Furnished on Demand</h3>
    <p>
      The service is only available to new customers who are signing up for a new
      Council tenancy.
    </p>
    <p>Acceptance criteria:</p>
    <ol>
      <li>
        Applicants moving from any Temporary Accommodation property, Bed and
        Breakfast or Assessment Beds. The applicant must be currently bidding on
        Sheffield City Council properties and have a full homeless priority (This is
        generally Bands A and B under the new Allocations policy).
      </li>
      <li>Applicants referred via a medical priority (Generally Band A).</li>
      <li>
        Other applicants who would not be able to access a property without the
        Furnished Accommodation Service will be considered on a case by case basis
        (Most of these will be under Band C in Allocations policy).
      </li>
    </ol>
    <p>(Most of these will be under Band C in Allocations policy).</p>
    <p>
      NB: Budget constraints may impact on criteria 3 and criteria’s 1 & 2 will
      always take preference.
    </p>
    <p>
      If the Customer does not meet the above criteria direct them to alternative
      options such as St Vincent De Pauls , Local Assistance Scheme or Emmaus.
    </p>
    <h3>Furnished Delivery Schedule</h3>
    <p>
      Open the delivery schedule spreadsheet (copy the link:
      <br />G:\HSG\Public\Supported Hsg\Furnished Accommodation\Furnished delivery
      sheets\Furnished Delivery Sheet.xlsx<br />
      and paste into the Windows Explorer title bar).
    </p>
    <p>
      Search for the customer's address (street) and remember that the same address
      may be on the spreadsheet a few times - look for the most recent entry.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "Information",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

const olderPersonsIndependentLiving = new ContentH(
  "olderPersonsIndependentLiving",
  "Older Persons Independent Living (OPIL)",
  "desc tbc",
  `
    <p>
      Sheltered housing is rented accommodation that is specially designed for older
      people who are able to live independently.
    </p>
    <p>
      It aims to provide comfortable accommodation with added security, in an
      environment where customers can come and go as they please.
    </p>
    <p>
      Enquiries that are specifically regarding the information in this form can be
      sent to OPIL using the links at the bottom of the form. If the enquiry is
      related to other matters, for instance, Estate Management, Tenancy Management
      or ASB, then the appropriate form should be used to process that enquiry.
    </p>
    <h3>Where are the properties?</h3>
    <p>
      Schemes are scattered all over the city. A comprehensive list of properties
      can be found on the council website or in the Older Persons Independent Living
      Service leaflet.
    </p>
    <h3>
      What does the Sheltered Neighbourhood Officer do and New Tenancy Support
    </h3>
    <p>
      The Neighbourhood Officers will complete a support plan with the tenant when
      they move in. This replaces the standard 'New Tenancy Visit' that
      non-Sheltered tenants receive.
    </p>
    <p>
      The plan is reviewed every six months or when there is a change in
      circumstances. We will agree with the customer the type and frequency of
      contact they require based on the customers needs. The Neighbourhood Officer
      will manage a Sheltered tenancy in the same way that a Neighbourhood Officer
      based in an area team would manage a standard tenancy, but will also include
      any support agreed in the support plan.
    </p>
    <p>
      The Neighbourhood Officers will help and support the customer to access any
      services they may need to help them live independently. The Neighbourhood
      Officers wardens will also contact relatives, call a doctor or an ambulance in
      an emergency.
    </p>
    <h3>What does OPIL provide</h3>
    <p>
      Convenient and comfortable accommodation with added security, in an
      environment where residents have their own front door and can come and go as
      they please. We can usually provide the following accommodation and
      facilities:
    </p>
    <ul>
      <li>Self contained flats/Studio apartments/Bungalows</li>
      <li>Communal Facilities such as:
        <ul>
          <li>Caretaking service for the communal areas</li>
          <li>City Wide Care Alarm (24 hour emergency response)</li>
          <li>Gardens</li>
          <li>Guest room</li>
          <li>Kitchen</li>
          <li>Laundry</li>
          <li>Lounge for social activities</li>
          <li>Neighbourhood Officer Warden</li>
          <li>Security and Safety features</li>
        </ul>
      </li>    
    </ul>
    <h3>Who is eligible for OPIL accommodation</h3>
    <p>
      Anyone aged over 60 and is registered for rehousing. In the case of a couple,
      at least one person must fit the age requirement.
    </p>
    <p>
      Before offering a property we will check to make sure it meets all your
      housing needs. You will also be invited to an accompanied viewing of the
      building without any commitment.
    </p>
    <h3>What are the costs of OPIL Accommodation</h3>
    <p>
      The cost of living in Sheltered Housing is very competitive when compared with
      other social housing providers.
    </p>
    <p>
      You pay weekly rent and a service charge (where applicable) for the heating
      and hot water in your property and/or towards the heating in communal areas of
      the scheme.
    </p>
    <p>
      There is an added support charge to cover the Neighbourhood Officer service
      and City Wide Alarm. If you are already in receipt of Housing Benefit you will
      not have to pay this charge.
    </p>
    <p>
      If you are on a low income you can apply to have an assessment to see if you
      are entitled to any assistance.
    </p>
    <p>
      You will receive help and advice on claiming Welfare and/or Housing Benefit at
      the start of your tenancy.
    </p>
    <h3>What are the benefits of OPIL Accommodation</h3>
    <ul>
      <li>Good quality housing</li>
      <li>Security</li>
      <li>Independence</li>
      <li>Your own front door</li>
      <li>Peace of mind, with help on hand in emergencies</li>
      <li>
        Neighbourhood Officer Warden support service and a 24 hr emergency response
        system connected to each flat (City Wide Care Alarms)
      </li>
      <li>
        A support plan - agreed with the Neighbourhood Officer - to meet individual
        needs
      </li>
      <li>Being part of the community</li>
    </ul>
    <h3>Register for OPIL Accommodation</h3>
    <p>Applicants should be registered for rehousing.</p>
    <p>
      You can access OPIL accommodation through the Sheffield Property Shop or call
      in at any of the local Area Housing Offices.
    </p>
    <p>You can also be referred through:</p>
    <ul>
      <li>Health and Housing</li>
      <li>Social Services</li>
      <li>Health Service</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

const extraCareHousing = new ContentH(
  "extraCareHousing",
  "Extra Care Housing",
  "desc tbd",
  `
    <h3>What is Extra Care Housing?</h3>
    <p>Extra Care Housing is based on 3 key principles:</p>
    <ul>
      <li>To keep people as independent as possible.</li>
      <li>
        To allow someone to get services in their own home, without having to move
        to get them.
      </li>
      <li>
        Accommodation designed to be adaptable so that people can get the care and
        support they need at home.
      </li>
    </ul>
    <p>The main features are:</p>
    <ul>
      <li>Self-contained flats or bungalows, with their own front door.</li>
      <li>Choice of tenure (rent, shared ownership or buy).</li>
      <li>High standards of design, with wheelchair access throughout.</li>
      <li>High level of security & safety features with alarm call systems.</li>
      <li>Flexible packages, tailored to individual care needs.</li>
      <li>24-hour care and support (Emergencies only from 10p.m. – 6 a.m.)</li>
      <li>
        Range of facilities, e.g. cafe, craft/activity room, IT suite, with a number
        of activities taking place weekly.
      </li>
    </ul>
    <p>There are currently 5 Extra Care Housing schemes in Sheffield.</p>

    <h3>Extra Care Contact Details</h3>
    <p>
      Guildford Grange, Norfolk Park. Contact the scheme on 0114 203 7888<br />
      The Meadows, Shirecliffe. Contact the scheme on 0114 243 5749<br />
      Brunswick Gardens, Woodhouse. Contact the scheme on 0114 294 0000<br />
      Roman Ridge, Wincobank. Contact the scheme on 0114 2800540<br />
      White Willows, Jordanthorpe. Contact the scheme on 0114 2377960.
    </p>
    <p>
      People need to be registered on the Council’s Housing Register but also need
      to complete a re-housing application form for the scheme itself.
    </p>
    <p>
      If anyone is currently receiving care and is interested in being re-housed to
      Extra Care Housing, they need to make their social worker/care manager aware
      of this.
    </p>

    <h3>Cost of Extra Care Housing</h3>
    <p>
      The costs of Extra Care Housing vary, depending on the type of accommodation
      and the tenure. Generally, the costs of rental properties in Extra Care
      include:
    </p>
    <ul>
      <li>Net rent for the individual property</li>
      <li>A service charge for the upkeep of the communal facilities</li>
      <li>A service charge for the individual property</li>
      <li>A Supporting People charge for housing related support.</li>
      <li>Council Tax is charged for on a separate bill.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

const gypsyAndTravellers = new ContentH(
  "gypsyAndTravellers",
  "Gypsy and Travellers",
  "desc tbd",
  `
    <h3>Where are the official Gypsy and Traveller sits</h3>
    <address>
      Long Acre View Holbrook Trading Estate<br />Holbrook<br />/Sheffield<br />S20
      3FU
    </address>
    <address>
      Redmires Caravan Park Redmires Lane<br />Lodge Moor<br />Sheffield<br />S10
      4JZ
    </address>
    <h3>What manages the sites?</h3>
    <p>
      Both sites are managed by the Housing and Neighbourhood Service Gypsy and
      Traveller Site Management team based at Solpr.
    </p>
    <h3>What are the roles of the team</h3>
    <p>The team deals with everything including:</p>
    <ul>
      <li>Rent</li>
      <li>Tenancy Management</li>
      <li>ASB</li>
      <li>Estate Management issues</li>
      <li>
        Repairs - all calls for new repairs or where an inspection is required
        should be transferred to the Repairs Contact Centre
      </li>
      <li>Vacants and lettings</li>
    </ul>
    <p>
      Everything is recorded on OHMS the same as housing tenants although these
      customers are not classed as ‘tenants’, they aclassed as 'Occupiers' and are
      managed under 'agreements' under the Mobile Homes Act 1983.
    </p>
    <h3>Rehousing and Waiting Lists</h3>
    <p>Registrations are encouraged for both sites:</p>
    <ul>
      <li>Long Acre View (14 plots)</li>
      <li>Redmires Caravan Park (17 plots)</li>
    </ul>
    <p>
      And is done via the Gypsy and Traveller registration form. The registration
      form is issued by the Gypsy and Traveller Team, who maintain a waiting list
      for both traveller sites.
    </p>
    <p>
      This list is separate to the main Lettings system and it cannot be viewed on
      Abritas.
    </p>
    <h3>Roadside and Illegal Encampments</h3>
    <p>
      Environmental Protection Services deal with questions or enquiries around any
      roadside encampments or any other kind of unauthorised encampments, on
      <a href="tel:01142734651">01142734651</a>.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

const shelteredAndSupported = new MenuH(
  "shelteredAndSupported",
  "Sheltered and Supported",
  "Older persons independent living, extra care housing, furnished accommodation, and gypsy and travellers",
  [
    furnishedAccommodation,
    olderPersonsIndependentLiving,
    extraCareHousing,
    gypsyAndTravellers,
  ]
);

const bidding = new ContentH(
  "bidding",
  "Bidding",
  "Desc tbc",
  `
    <p>
      After you have registered for housing, you express your interest in renting a
      property by making a bid. You only have to bid once per property. You make
      bids online at the Property Shop website
      <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank"
        >www.sheffieldpropertyshop.org.uk</a
      >
      You can bid 3 times (plus 1 FCFS) within each weekly bidding cycle (Thursday
      to Tuesday).
    </p>
    <h3>Why can't you bid for me</h3>
    <p>
      If you need assistance placing a bid, you can visit Sheffield Property Shop
      located in Howden House on Union Street, Sheffield, or your nearest
      neighbourhood housing office.
    </p>
    <h3>First Come First Served</h3>
    <p>
      The homes we offer through our First Come First Served scheme are properties
      which have usually been advertised through the bidding system, but received no
      eligible bids. Where this happens, we will make them available on a first come
      first served basis. These properties are often age-banded studio and
      one-bedroom flats however we do sometimes advertise two and three bedroom
      properties in this way.
    </p>
    <p>
      The properties are located throughout the City and can be provided by the
      Council or Housing Associations. Properties are offered to the first person on
      the housing register who places a bid and meets the minimum letting criteria.
    </p>
    <p>
      In cases when there are no bidders for properties we may also change the
      eligibility criteria. For example, households that would only normally qualify
      for two bedroom properties may be allowed to bid for some three bedroom
      maisonettes. The advert will clearly state where this is the case.
    </p>
    <p>
      However, if you are of working age and you bid for a property that is larger
      than you would normally qualify for, you may not be entitled to receive full
      housing benefit. In these cases we may carry out a financial assessment with
      you.
    </p>
    <h3>How do I get online</h3>
    <h4>Technical issues with the website / Running slowly</h4>
    <p>
      Advisor note: Investigate if the issue is a technical issue with the website
      and check if you can access the Property Shop website.
    </p>
    <h4>How do I get online / I do not have a PC</h4>
    <p>
      You get online via any device that connects to the internet. If you do not
      have access to the internet you can get access via:
    </p>
    <ul>
      <li>Internet cafes from a smart phone</li>
      <li>At a friend or relative's house</li>
      <li>
        Or you can contact the UK Online centre – call
        <a href="tel:0800771234">0800 77 1234</a> to find your nearest online access
        point
      </li>
    </ul>
    <h3>Why can I not bid on the website</h3>
    <p>
      There can be various reasons why you cannot place bids on the website, such
      as:
    </p>
    <ul>
      <li>
        You may not be able to log in because your login details are not correct
      </li>
      <li>Your application may not have been validated</li>
      <li>You may be disqualified from the Housing Register</li>
      <li>Your application may have been closed</li>
      <li>You may be under offer for a property</li>
      <li>You may be trying to bid for properties that you are not eligible for</li>
    </ul>
    <h3>What happens after bidding</h3>
    <p>
      Once the bidding has finished, checks will be made on who is in first
      position, that the keys for the property are ready, and final checks will be
      completed on the person in first position when bidding closed. We will then
      contact the successful customer by phone, email or letter to offer the
      property. It is important that customers ensure their contact details on the
      website are up to date so that we can do this.
      <br />
      Unsuccessful applicants will not be notified.
    </p>
    <p>
      However, we may not offer you a property if you owe a debt to the housing
      service, have a history of anti social behaviour, or have not kept your
      Council tenancy in a good condition. These checks can take a few days.
    </p>
    <p>
      If you are offered a property we will not consider your bids for any other
      properties until you have decided whether or not to accept the property
      offered.
    </p>
    <h3>Assistance with online bidding or login issue</h3>
    <p>Log on using the details below if required.</p>
    <p>
      Unique Reference - 1257822
      <br />
      Memorable date - 25/12/2012
      <br />
      Password - DMrm15
    </p>
    <p>
      Advisor note
      <br />
      You have logged in using dummy login details. Please do not amend anything on
      screen.
    </p>
    <h4>Assistance with bidding</h4>
    <p>
      The 'My Account' screen has a link to the 'Eligible properties' you can bid
      for. Click on the link and choose what property you want to bid for. You then
      needs to:
    </p>
    <ul>
      <li>Click the 'Apply for property' link (in green).</li>
      <li>
        If details are correct, tick the tick box, and then click 'Confirm details
        and apply'.
      </li>
    </ul>
    <h4>Assistance with removing a bid</h4>
    <p>
      Advise the customer that they need to select:
      <br />
      My Bids on the right hand side of the screen, then put a tick against the bid
      you want to withdraw and then select Withdraw selected. It will ask you if you
      are sure you want to withdraw the bid, select Yes or No.
    </p>
    <h4>Assistance with finding out how much waiting time customer has</h4>
    <p>Give the Band effective date on the application to the customer</p>
    <h4>Log in Issue</h4>
    <p>
      To apply for Social Housing you need to do so via the Property Shop website.
      There are no paper application forms. This will be will Housing Online when
      NEC comes in
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
    <h4>URN (Unique Reference Number)</h4>
    <p>Starts process</p>
    <h4>Memorable Date / Password Reset</h4>
    <p>
      The best way for the customer to reset their memorable date is to go online.
      You will need to have included an email address when completing the website
      (household) registration.
    </p>
    <h4>Customer is an owner occupier moving to a council property</h4>
    <p>
      If you own your own property and are moving into a Council Housing Service
      property, you need to have taken reasonable steps to sell or dispose of their
      owner occupied property within 6 months. You should evidence that the house is
      up for sale by showing us the brochure.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Request", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing", "Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
);

const eligibility = new ContentH(
  "eligibility",
  "Eligibility",
  "Desc tbc",
  `
    <p>
      Sheffield City Council operates an open register and therefore any person over
      the age of 16 can apply to join the Housing Register. However, generally you
      will not be made an offer of a property until you are at least 18 years old.
    </p>
    <p>
      The Housing Act 1996 prevents Local Authorities from offering a property to
      some people because of their immigration status. We will let you know if this
      applies to you after you register.
    </p>
    <p>
      If you are eligible to register you may do so by completing the online
      application form. Following this, you will be provided with a login reference
      number and required to provide a memorable date which will act as your
      password for logging in to the website in the future.
    </p>
    <p>
      There are some people who are not eligible to be included on the Housing
      Register. These are:
    </p>
    <p>
      Certain people who are subject to Immigration Control under the 1996 Asylum
      and Immigration Act.
      <br />
      Certain people from abroad who are not subject to immigration control but who
      are not habitually resident in the UK, the Channel Islands, the Isle of Man or
      the Republic of Ireland.
      <br />
      People (including members of their household) who have been guilty of
      unacceptable behaviour that makes them unsuitable to be a tenant.
    </p>
    <h3>After submitting your application</h3>
    <p>
      After submitting your application online you will be asked to provide us with
      various documentation such as identification and a reference. You may also be
      asked to provide evidence of your immigration status where relevant. You
      should make sure that all of this documentation is available to you before
      completing your online application application as you need to submit this
      documentation immediately. Failure to provide this within the given timescales
      will mean you will need to restart the process from the beginning by
      submitting a further online application.
    </p>
    <h3>Eligibility Table</h3>
    <p>A copy of the eligibility table can be found here.</p>
    <h3>Relaxed eligibility</h3>
    <p>
      Relaxed eligibility criteria is uncommon, but has sometimes been applied in
      the past to properties that receive no bids and/or have a known low demand.
      The majority of these properties were maisonettes.
    </p>
    <p>
      Properties where relaxed eligibility has been applied will have a message in
      the 'Show full details>>Further information' box of the property advert.
    </p>
    <p>
      For Example: A 3 bed maisonette with relaxed eligibility will have a message
      similar to this:
    </p>
    <p>
      Households eligible for 2 bed properties can bid and a financial assessment
      will be carried out to check that the property is affordable.
    </p>
    <p>
      If a customer then places a bid for the property and comes first, IMFIT
      (Rents) will contact the customer prior to any offer to ensure that the
      customer is able to afford the property.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Request", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing", "Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
);

const housingAssociations = new ContentH(
  "housingAssociations",
  "Housing Associations",
  "Desc tbc",
  `
    
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Request", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing", "Rehousing"] },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
);

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
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Apply", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing", "Rehousing"] },
  { date: "14/10/2024", name: "Omily Parkin" }
);

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
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "Request",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Rehousing"],
  },
  { date: "23/09/2024", name: "Shahzad Athar" }
);

const rehousing = new MenuH(
  "rehousing",
  "Rehousing",
  "Applying for rehousing, eligibility, bidding, changes to applications and housing associations",
  [
    applyForRehousing,
    applicationChanges,
    housingAssociations,
    eligibility,
    bidding,
  ]
);

const blockedBinChutes = new ContentH(
  "blockedBinChutes",
  "Blocked Bin Chutes",
  "Bin chutes in Council flats or maisonettes may become blocked and will be unblocked upon request",
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
  {
    type: "Report",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Estates and Environments"],
  },
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
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "Information",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Estates and Environments"],
  },
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
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "Information",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Estates and Environments"],
  },
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
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "Information",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Estates and Environments"],
  },
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
  { buttonLabel: "Report Housing Fences", formName: "hou_sustainment_fence" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "Information",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const newAndExistingRepairs = new ContentH(
  "newAndExistingRepairs",
  "New and Existing Repairs",
  "Description",
  `<h3>Leaseholder Repairs</h3> 

<p>You are responsible for repairs within your own flat or home, and should make your own arrangements for these.
 If you, or someone you have employed, are carrying out repairs inside your flat, 
 you must make sure that no damage is done to communal areas or to the structure of the building. 
 You are liable for any damage caused to the building as it is owned by Sheffield City Council, 
 and you will have to pay for any such damage. This includes any damage caused by visitors or other members of your household.
 </p> 

<p>Sheffield City Council will continue to carry out all external fabric and communal/shared 
repairs to the block in which you live. You do not have the authority to carry out repairs in shared areas, 
and you would not be covered by Sheffield City Council insurance if you had an accident or caused any damage. 
Only Sheffield City Council may carry out this type of work.</p> 

<p>Leaseholders receive a service charge bill each year for their proportion of the cost of carrying out external fabric 
and communal/shared repairs to the block in which they live.</p> 
  
  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },

  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const chaseProgressOfAdaptation = new ContentH(
  "chaseProgressOfAdaptation",
  "Chase Progress of Adaptation",
  "Description",
  `
<details class="accordion">
      <summary class="accordion-header">
        <h3>Chase Progress of Adaptation</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>Different Utility supplier</summary>
          <div class="details-accordion-content">
            
<h2>Different Utility supplier</h2> 

<p>If you are over £250 (Total Indebtedness) in arrears, your permission request is unlikely to be granted. 
You must have written permission from the Housing Service to alter or improve your home. This includes:</p> 

<ul> 

    <li>Putting up any form of extension or building</li> 

    <li>Adding to, changing, or replacing the fixtures, fittings, and appliances provided by us</li> 

    <li>Altering essential gas, electricity, and water services</li> 

    <li>Putting up a radio or television aerial or satellite dish</li> 

    <li>Decorating the outside of your home</li> 

    <li>Removing internal walls</li> 

    <li>Insulation (Walls & Lofts)</li> 

    <li>Conservatories (considered on an individual basis)</li> 

</ul> 

<p>However, the following are highly unlikely to be granted due to extra maintenance costs and 
potential structural problems:</p> 

<ul> 

    <li>Loft conversions</li> 

    <li>Spiral staircases</li> 

    <li>Swimming pools</li> 

    <li>Extensions</li> 

    <li>Stair lifts in communal areas</li> 

</ul> 

<p>It is the customer's responsibility to seek and get any planning or building regulation approvals.</p> 

<p>Every request for permission will be assessed using criteria and conditions appropriate to the particular request. 
These criteria and conditions will be explained in the letter sent in reply to the customer's permission request.</p> 

<p>We will take action against any installations that are in breach of Health and Safety regulations.</p> 


          </div>
        </details>


        <details class="details-accordion">
          <summary>
            Permission Requests
          </summary>
          <div class="details-accordion-content">
            
<h2>Permission Requests</h2> 

<p>Written permission requests should be referred in the first instance 
(unless the customer is a Leaseholder or the permission request is for a mobility scooter) 
to the appropriate Area Team at:</p> 

<address> 

    Sheffield Council Housing Service<br> 

    PO Box 5967<br> 

    Sheffield<br> 

    S2 9GH 

</address> 

<p>If the permission request is for a mobility scooter, it should be referred to:</p> 

<address> 

    Maintenance Partnership Unit (Permissions)<br> 

    PO Box 5967<br> 

    Sheffield<br> 

    S2 9GH 

</address> 

<p>If the customer is a Leaseholder, permission requests should be put in writing to:</p> 

<address> 

    Leaseholder Services Team<br> 

    Floor 11<br> 

    Moorfoot Building<br> 

    Sheffield<br> 

    S1 4PL 

</address> 

<p>Once we have received your request, we will contact you to discuss it and, where necessary, 
arrange a suitable time to visit your property. We will give you a decision within 21 days of receiving your request. 
If we give you permission, you should carry out the work within 90 days and let us know when it is complete. </p> 


          </div>
        </details>

<details class="details-accordion">
          <summary>
            Permissions and Your Tenancy Conditions
          </summary>
          <div class="details-accordion-content">
            <h3>Permissions and Your Tenancy Conditions</h3> 

<p>Tenancy condition 47 states that:</p> 

<ul> 

    <li>You must ask for our permission, and you must not proceed until we give you our permission.</li> 

    <li>We will confirm our answer in writing.</li> 

    <li>If we refuse permission, we will explain why.</li> 

    <li>If we give permission, we may attach additional conditions.</li> 

    <li>We may withdraw our permission at any time if you do not comply with the conditions we have made.</li> 

</ul> 

<p>We will take action against you and/or charge you for any costs incurred if you do not comply with parts a-e above.</p> 
          </div>
        </details>
       
  
  `,
  { buttonLabel: "Report Housing Adaptations ", formName: "hou_adaptations" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
   
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const otherAdaptationRequest = new ContentH(
  "otherAdaptationRequest",
  "Other Adaptation Request",
  "Description",
  `

<h3>Other Adaptation Requests</h3> 

<h2>Tenant wants to make their own changes (takes out of script)</h2> 

<p>If you are over £250 (Total Indebtedness) in arrears, your permission request is unlikely to be granted. You must have written permission from the Housing Service to alter or improve your home. This includes:</p> 

<ul> 

    <li>Putting up any form of extension or building</li> 

    <li>Adding to, changing, or replacing the fixtures, fittings, and appliances provided by us</li> 

    <li>Altering essential gas, electricity, and water services</li> 

    <li>Putting up a radio or television aerial or satellite dish</li> 

    <li>Decorating the outside of your home</li> 

    <li>Removing internal walls</li> 

    <li>Insulation (Walls & Lofts)</li> 

    <li>Conservatories (considered on an individual basis)</li> 

</ul> 

<p>However, the following are highly unlikely to be granted due to extra maintenance costs and potential structural problems:</p> 

<ul> 

    <li>Loft conversions</li> 

    <li>Spiral staircases</li> 

    <li>Swimming pools</li> 

    <li>Extensions</li> 

    <li>Stair lifts in communal areas</li> 

</ul> 

<p>It is the customer's responsibility to seek and get any planning or building regulation approvals.</p> 

<p>Every request for permission will be assessed using criteria and conditions appropriate to the particular request. These criteria and conditions will be explained in the letter sent in reply to the customer's permission request.</p> 

<p>We will take action against any installations that are in breach of Health and Safety regulations.</p> 

  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
 
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const asbestos = new ContentH(
  "asbestos",
  "Asbestos",
  "Description",
  `
<details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>What is asbestos?</summary>
          <div class="details-accordion-content">
            
<p>Asbestos is the name given to a group of fibrous minerals which evolve naturally in the earth; 
these are found in many parts of the world.</p> 

          </div>
        </details>

                <details class="details-accordion">
          <summary>Why was asbestos used in the past?</summary>
          <div class="details-accordion-content">
            
<p>Asbestos fibres are strong, durable, resistant to heat and chemicals and provide thermal insulation; 
these properties are what led to its widespread use in the construction industry prior to the mid-1980s. 
It was also used in vehicles, domestic goods, and industrial items.</p> 
          </div>
        </details>

                        <details class="details-accordion">
          <summary>Where is asbestos likely to be found?</summary>
          <div class="details-accordion-content">
            
<p>Asbestos is most likely to be found in buildings constructed before the mid-1980s. Typical places inside your home where asbestos may be found are:</p> 

<ul> 

    <li>Artex / textured coatings</li> 

    <li>Floor tiles and Linoleum products</li> 

    <li>Pipe boxing</li> 

    <li>Bath panels</li> 

    <li>Fire / Heater panels</li> 

    <li>Service ducting panels</li> 

    <li>Heating and Fuse board cupboards</li> 

    <li>Sink Pad (Bitumen based product)</li> 

    <li>WC Cisterns</li> 

</ul> 

<p>Typical areas outside your home where asbestos may be found are:</p> 

<ul> 

    <li>Roof tiles</li> 

    <li>Rainwater pipes and gutters</li> 

    <li>Soffits & Fascias</li> 

    <li>Garage / Outbuilding roofs</li> 

</ul> 

<p>Asbestos may also be found in some household goods such as oven gloves, ironing boards, fire blankets, etc.</p> 
          </div>
        </details>


 <details class="details-accordion">
          <summary>What does abestos containing material look like?</summary>
          <div class="details-accordion-content">
            
<p>It is difficult to tell if something contains asbestos just by looking at it, unless it is labelled. 
If in doubt, you should assume that a material contains asbestos until it is confirmed otherwise. 
The only way to be absolutely sure is by getting it tested in a laboratory. 
However, we do not have to send samples to a laboratory; 
we can presume it is asbestos and then take all safety precautions when working on the material by using trained workers 
or licensed contractors.</p> 

          </div>
        </details>

 <details class="details-accordion">
          <summary> What should I do if I think there may be asbestos in my home?            </summary>
          <div class="details-accordion-content">
            
<p>You don’t need to do anything unless you suspect the asbestos may have been damaged, 
disturbed, or is in poor condition. Generally, if it is in good condition and cannot be easily damaged or disturbed, 
it is best to leave it alone,
 as removal can lead to the release of higher levels of fibres in the air for some time.</p> 
                    
          </div>
        </details>

 <details class="details-accordion">
          <summary> What should I do if I accidentally damage or disturb it? </summary>
          <div class="details-accordion-content">
            
<p>If you discover or damage asbestos-containing material (ACM), exit the room, ensuring no one else enters. 
Do not attempt to repair the damage or clear up any debris using a brush or domestic vacuum cleaner, 
as this will release fibres into the air.</p> 
                    
          </div>
        </details>

   <details class="details-accordion">
          <summary>      What is the Council Housing Service doing to manage asbestos?         </summary>
          <div class="details-accordion-content">
            
<p>We are carrying out asbestos surveys to all our properties and recording all the information. 
This includes the type of asbestos found, the location and condition, and any recommended actions (i.e., to remove the asbestos-containing material or to leave it in place and manage it). Where asbestos is identified as requiring removal, we will use specialist contractors to carry out this work. As part of this survey, 
we also record where no asbestos is found.</p> 
                    
          </div>
        </details>


 <details class="details-accordion">
          <summary>    Will you remove asbestos if found in my property?           </summary>
          <div class="details-accordion-content">
            
<p>We will only remove asbestos from your home if it is found to be in poor condition or damaged, 
as it is generally best practice to leave it in place and manage it if it is in good condition. 
Removal creates a greater risk of releasing fibres into the air and possible exposure.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>       Why do I need an asbestos survey?        </summary>
          <div class="details-accordion-content">
            
<p>We need to carry out a survey to identify any asbestos-containing materials within your home, 
as we have a legal duty to provide this information to the contractors we use to carry out repairs or modernization works.
 The survey also helps us keep accurate records of where asbestos is located in your home.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>       When will a survey be carried out on my home?        </summary>
          <div class="details-accordion-content">
            
<p>The Council Housing Service has been conducting asbestos surveys on our properties as part of a rolling program since 2004. 
Your home may have already been surveyed, but if not, it will be programmed in the near future.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>      Who will carry out the survey?         </summary>
          <div class="details-accordion-content">
            
<p>The Council Housing Service works with survey contractors called Tersus. 
For asbestos removal, we work with contractors called Rilmac and E4 Environmental.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>        How do I get a copy of my survey?       </summary>
          <div class="details-accordion-content">
            
<p>Where a survey has been carried out, the Council Housing Service will send copies to tenants.
 If you need a report sooner, you may request a copy at your local Area Housing Office or First Point.
 We are also working towards making the reports accessible on the Council Housing Service website in the near future.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>   What should I do if I want to carry out works to my property?   </summary>
          <div class="details-accordion-content">
            
<p>If you are planning home improvements (with permission) and think you may have asbestos in your home, 
we can check our records and tell you if any asbestos is present or arrange for a survey to be carried out.</p> 

<h2>General things to remember before carrying out DIY:</h2> 

<ul> 

    <li>Do not drill, saw, scrub, or sand anything you think may contain asbestos.</li> 

    <li>Keep activities to a minimum in areas where material may contain asbestos.</li> 

    <li>Do not dust, sweep, or vacuum debris that may contain asbestos.</li> 

    <li>Take every precaution to avoid damaging asbestos material or asbestos-containing products.</li> 

    <li>Always wear a protective face mask if you are doing any DIY work.</li> 

    <li>Soak wallpaper before removing it; if possible, use a steam stripper and gently peel away the paper before re-decorating.</li> 

    <li>Don’t try to remove old floor tiles or linoleum. Leave them in place and lay new floor coverings over them.</li> 

</ul> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>        Am I at risk?   </summary>
          <div class="details-accordion-content">
            
<p>Asbestos is only a risk to health if the fibres become airborne and are breathed into the lungs. 
The fibres breathed in could lead to asbestos-related diseases. 
Although the body’s natural defences can break some of these particles down, others may stay in the lungs for a long time. 
Asbestos-containing products in good condition do not represent a significant risk unless they are damaged or 
abraded and should be left undisturbed.</p> 
                    
          </div>
        </details>


         <details class="details-accordion">
          <summary>       What should I do if I think I have been exposed to asbestos?        </summary>
          <div class="details-accordion-content">
            
<p>If you think you may have been exposed, you may wish to discuss your concerns with your doctor.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary> Asbestos Resurveying Programme  </summary>
          <div class="details-accordion-content">
            
          <p>The Asbestos Resurveying Programme is ongoing and may be for any of the following reasons:</p> 

<ul> 

    <li>Surveys carried out pre-2010 have presumed asbestos items, and we now need to know whether asbestos is present or not.</li> 

    <li>Contractors have removed asbestos as part of Decent Homes and provided feedback.</li> 

    <li>Contractors are asking for more detailed surveys to carry out more intrusive work.</li> 

    <li>There is no survey for that property.</li> 

</ul> 

<p>Prior to surveying, tenants will be contacted by letter, phone call, or text. 
The letter explains that Tersus Consultancy is our appointed contractor.</p> 

                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>     Asbestos Removal Programme        </summary>
          <div class="details-accordion-content">
            
<p>The Asbestos Removal Programme is a 3-year programme and covers approximately 800 properties. 
The removal is mainly linked to district heating pipes that are not easily accessible due to asbestos panels. 
All affected properties will receive letters in batches of up to 20 per month.</p>
 

<p>Prior to work commencing, all properties will be surveyed by the contractor to reconfirm what will be removed. 
Please note, work may require the tenant to vacate the property on the day of removal.</p> 

<p>Letters will start going out to customers from August 2017, with further letters going out in the following months. 
The letter explains that Rilmac Insulation has been appointed as a contractor and will be contacting customers soon.</p> 
                    
          </div>
        </details>


  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },

  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const communalAerials = new ContentH(
  "communalAerials",
  "Communal Aerials",
  "Description",
  `

<details class="accordion">
  <summary class="accordion-header">
    <h3>Communal Aerials List</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    
<p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Communal%20Aerials.aspx">Communal Aerials List</a></p> 

  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Customers Own Aerial</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
     <p>This is not a Council Housing Service aerial. We do not offer a maintenance service for customer’s own aerials.</p> 
  </div>
</details>

  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const communalAreas = new ContentH(
  "communalAreas",
  "Communal Areas",
  "Description",
  `

<details class="accordion">
  <summary class="accordion-header">
    <h3>Blocked Bin Chutes</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
      <p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Blocked%20Chutes.aspx">Blocked Bin Chutes</a></p>  
  </div>
</details>

<details class="accordion">
      <summary class="accordion-header">
        <h3>Fences</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>New Fence</summary>
          <div class="details-accordion-content">
            
    <p>Installation of fences is the tenant's responsibility. 
    The customer will need to have permission to install a new fence. See "Permissions" section.</p> 

          </div>
        </details>

                <details class="details-accordion">
          <summary>Repair to an Existing Fence</summary>
          <div class="details-accordion-content">
            
    <p>The Council does not repair tenants' fences. It is the tenant's responsibility.</p> 

          </div>
        </details>

                        <details class="details-accordion">
          <summary>Fallen Fence to be Removed</summary>
          <div class="details-accordion-content">
            
        <p>Estate Services teams will only remove blown down fences if they are a safety hazard.</p> 

          </div>
        </details>



  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const doorEntrySystems = new ContentH(
  "doorEntrySystems",
  "Door Entry Systems",
  "Description",
  `

<details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>   What is a Door Entry System and Why is it Necessary?<   </summary>
          <div class="details-accordion-content">
            
    <p>We are carrying out work to improve security to the block of flats where you live. 
    Our door entry system can help prevent unauthorized or unwanted access into the communal areas of your flats.</p> 

          </div>
        </details>

                <details class="details-accordion">
          <summary>How Does the System Work?</summary>
          <div class="details-accordion-content">
            
     <ul> 

        <li>Once the system has been installed, the entrance doors are locked, and access into the block will be controlled.</li> 

        <li>Residents can access the block through the main door using either a door key or electronic fob.</li> 

        <li>Tradespeople can access the block at certain times of the day using a push button on the door intercom panel marked as “trades.”</li> 

        <li>A visitor presses the call button for the flat they wish to visit. The handset in your flat will ring for a set period of time. When you answer the call, you can have a conversation with the visitor. If you then want to allow the person in, you can press the button on the handset to release the lock on the main entrance door.</li> 

        <li>If you do not want to let the visitor in, you can replace the handset and finish the call.</li> 

        <li>Visitors’ access to the block can only be granted by a resident pressing the door release button on the door entry handset.</li> 

    </ul> 

          </div>
        </details>

                        <details class="details-accordion">
          <summary>How Can I Stop Nuisance Calls Coming Through on My Door Entry Phone?</summary>
          <div class="details-accordion-content">
            
            <p>If this happens, you can turn off the handset using the “privacy button.” When this is used, a red light will illuminate on the phone to show that the door entry calls are switched off. 
            The privacy facility resets itself after a fixed period of time (red light goes off) so that the handset isn’t left switched off and a genuine visitor is prevented from contacting the resident they wish to visit.</p> 

          </div>
        </details>

        
                        <details class="details-accordion">
          <summary>How do I Know That the Main Entrance Door is Secure When I Am in My Home?</summary>
          <div class="details-accordion-content">
            
              <p>The door entry system is set up to monitor the main entrance and will tell you if the door is open or closed. 
              If the main entrance is left open, a green light will show on your door entry phone. 
              When the main entrance door is closed, the green light goes out.</p> 

          </div>
        </details>


                        <details class="details-accordion">
          <summary>How do the post, milk, and newspapers delivery people gain access into the block during the day?</summary>
          <div class="details-accordion-content">
            
                <p>A “trades” button is provided on the door entrance panel next to the main entrance to your block.
                 This button is set up to work at certain times of the day (time clock controlled). 
                 When active, the button can be used by tradespeople to gain access into the block through the main door. 
                The times are set up in consultation with residents to suit the requirements of each particular block of flats.</p> 

          </div>
        </details>


                                <details class="details-accordion">
          <summary>How do the emergency services gain access?</summary>
          <div class="details-accordion-content">
            
                 <p>The system includes an emergency switch next to the main door. 
                 The emergency services can use this switch, operated by a special key, to gain access in an emergency.</p> 
          </div>
        </details>

        
                                <details class="details-accordion">
          <summary>What work is involved in installing the door entry system?</summary>
          <div class="details-accordion-content">
            
                <ul> 

        <li>A door entry telephone handset will be put in your home; usually, it will be placed in your hallway or near the door.</li> 

        <li>A door entry panel will be put next to the main entrance to your block of flats. Each flat will have its own button visitors can use to ring the flat that they wish to visit.</li> 

        <li>We will put an electronic lock on the main entrance. Each resident’s door entry handset has a push button which operates the release of the door and allows visitors to enter into the block.</li> 

        <li>Most of the work will take place in the communal areas.</li> 

        <li>We will only need access to your home to fit the door entry handset and to check the system is working.</li> 

        <li>An external light will be fitted above the entrance door to each block of flats if there isn’t already one in place. A survey will be carried out before the work starts to look at lights, and in some cases, existing lights may be replaced.</li> 

    </ul> 

 
          </div>
        </details>
  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const emergencyRepairs = new ContentH(
  "emergencyRepairs",
  "Emergency Repairs",
  "Description",
  `

<details class="accordion">
      <summary class="accordion-header">
        <h3>Emergency Repairs</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>   Gas Leak  </summary>
          <div class="details-accordion-content">
             
          <p>If you smell gas or are worried about gas safety, call National Grid on 0800 111 999 at any time, day or night.</p> 

          <h3>Contact Equipment and Adaptations Teams</h3> 

    <p>Please contact the Equipment and Adaptations number.</p> 

    <h3>Out of Hours Emergency Contacts</h3> 

    <p>If you have an emergency outside normal working hours, at weekends, or Bank Holidays, please phone:</p> 

    <ul> 

        <li>0114 273 5555 (after 8pm) for burst pipes, boarding up doors and windows, no electricity supply, and all heating breakdowns. This number will divert to Out of Hours Repairs service.</li> 

        <li>0800 111 999 for gas leaks.</li> 

        <li>0114 273 7693 for lift breakdowns.</li> 

    </ul> 

          </div>
        </details>


        <details class="accordion">
      <summary class="accordion-header">
        <h3>Emergency Repairs</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>   Gas Leak  </summary>
          <div class="details-accordion-content">
             

          </div>
        </details>
  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const carbonmonoxide = new ContentH(
  "carbonmonoxide",
  "Carbon Monoxide/ What is CO Poisoining",
  "Description",
  `


<details class="accordion">
      <summary class="accordion-header">
        <h3>Carbon Monoxide</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>  What is CO Poisoning?  </summary>
          <div class="details-accordion-content">
             
    <p>Unsafe gas appliances can produce a highly poisonous gas called carbon monoxide (CO). 
    It can cause death as well as serious long-term health problems such as brain damage. 
    CO is produced by the incomplete burning of natural gas or liquefied petroleum gas (LPG). 
    This happens when a gas appliance has been incorrectly fitted, badly repaired, or poorly maintained. 
    It can also occur if flues, chimneys, or vents are blocked. Oil and solid fuels such as coal, wood, petrol, 
    and oil can also produce carbon monoxide.</p> 

          </div>
        </details>

        <details class="details-accordion">
          <summary>   Remember the Six Main Symptoms to Look Out For? </summary>
          <div class="details-accordion-content">
             
 <ul> 

        <li>Headaches</li> 

        <li>Dizziness</li> 

        <li>Nausea</li> 

        <li>Breathlessness</li> 

        <li>Collapse</li> 

        <li>Loss of consciousness</li> 

    </ul> 



          </div>
        </details>


                <details class="details-accordion">
          <summary>   What to Do if You Suspect CO Poisoning </summary>
          <div class="details-accordion-content">
             

    <p>Get fresh air immediately. Open doors and windows, turn off gas appliances and leave the house. 
    See your doctor immediately or go to the hospital - let them know that you suspect CO poisoning. 
    They can do a blood or breath test to check.</p> 

    <p>If you think there is an immediate danger, call the Gas Emergency Helpline on 0800 111 999.</p> 
    

          </div>
        </details>
  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const loststolenkeys = new ContentH(
  "lostStolenKeys",
  "Lost Stolen Keys and Lock Repairs",
  "Description",
  `
<details class="accordion">
      <summary class="accordion-header">
        <h3>Lost/Stolen Keys and Lock Repairs</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>  Lost Keys </summary>
          <div class="details-accordion-content">
             
  <ul> 

        <li>A charge of £5 for lost or stolen keys.</li> 

        <li>Locks will only be replaced if the customer agrees to the charge or provides a valid crime reference number.</li> 

        <li>Exceptions apply for elderly or vulnerable individuals.</li> 

    </ul> 
          </div>
        </details>

        <details class="details-accordion">
          <summary>   Replacement Fobs </summary>
          <div class="details-accordion-content"> 
 <ul>
        <li>Costs £10 (communal keys: £5).</li> 

        <li>Can be purchased at local housing offices with ID.</li> 
    </ul> 
          </div>
        </details>

        <details class="details-accordion">
          <summary>   Area Housing Offices </summary>
          <div class="details-accordion-content"> 
 
<p>Please note: Howden House only deals with Rehousing enquiries and will not be able to help with fobs or keys. 
List of Area Offices:

          </p>
          </div>
        </details>


  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const programmedWorks = new ContentH(
  "programmedWorks",
  "Programmed Works",
  "Description",
  `


<details class="accordion">
      <summary class="accordion-header">
        <h3>Programmed Works</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>  Electrical Upgrade Programme  </summary>
          <div class="details-accordion-content">
         
          <ul> 

        <li>Aims to modernize electrical standards in council-managed housing by 2024.</li> 

        <li>Will cover over 20,000 dwellings with potential investments of £40-45 million.</li> 

        <li>Includes upgrades such as installation of isolation switches, replacement of consumer units, improved socket spread, smoke alarms, and carbon monoxide detectors.</li> 

        <li>Work will be conducted in batches of 250-300 properties with a target of 60 completed properties per week.</li> 

    </ul> 

      </div>
        </details>

 
       <details class="details-accordion">
          <summary>   Background </summary>
          <div class="details-accordion-content">
             
<p>Installation of fences is the tenant’s responsibility.
Over the last 12 years considerable investment has been made in the housing stock via the Decent Homes programme and 
other programmes. This has included some elements of electrical work particularly within bathrooms and kitchens. However, 
enhancing the overall electrical standard in homes / communal facilities was not a key requirement of the 
Decent Homes programme or for properties to achieve the government decent homes standard. </p>

<p>
Consequently, whilst the electrical condition of the stock is fair / good, 
there remain improvements required to provide a modern-day standard that will keep customers safe, 
contribute to digital inclusion, meet existing and future legislative standards and contribute to reducing the carbon 
footprint by providing energy efficient products. </p>



          </div>
        </details>

        <details class="details-accordion">
          <summary>   What will be included within the Electrical Upgrade Programme? </summary>
          <div class="details-accordion-content">
            

    <p>The aim of this programme is to bring all properties over time up to a modern-day electrical standard 
    and move towards an electrical periodic test every 5 years as recommended by the National Council for 
    Electrical Installation Contracting (NICEIC).</p>

    <p>Work will be released in batch orders of approximately 250 to 300 dwellings but on a geographical basis to 
    enable the contractor(s) and the contract administrator to work efficiently. Once fully underway, 
    60 properties per week for each contractor will be completed. This programme will include the following:</p>

    <ul>
        <li>Install Isolation Switch (where necessary)</li>
        <li>Carry out an initial periodic condition test and report</li>
        <li>Replace consumer units (where necessary only) to provide improved RCD protection and safety for residents</li>
        <li>Address Category 1, 2, and 3 issues identified by the periodic test</li>
        <li>Ensure earth bonding is adequate (where necessary)</li>
        <li>Install earth wiring to lighting circuits (where necessary)</li>
        <li>Install additional sockets and/or improve the spread of sockets including 2 USB equipped sockets</li>
        <li>Install hard-wired smoke alarms</li>
        <li>Install carbon monoxide detectors – risk-based approach</li>
        <li>Replace bathroom light fittings which are difficult to access to replace bulbs</li>
        <li>Install external lighting to houses, bungalows & flats (where no communal lighting presently exists)</li>
        <li>Carry out a final periodic test (if further work is carried out) to verify all electrics are operating correctly</li>
        <li>Not every dwelling will require all the above work. </li>
    </ul>

    <p> The list above is a menu of activity which will be undertaken as required.</p>

    <p>Isolation switches allow the dwelling to be worked upon safely by electrical engineers. During the Decent Homes programme, thousands of isolation switches were installed, but we do not have full coverage. The upgrade project will enable us over time to install an isolation switch to every property.</p>

    <p>Consumer unit specifications change regularly, and in certain cases, we are not offering the most ideal protection. This project will ensure consumer units are suitable, up-to-date, and offer the best protection to our residents.</p>

    <p>Category 1 & 2 issues identified from the periodic test will be rectified. Category 3 issues will be rectified based on a cost/benefit analysis.</p>

    <p>Earth bonding is very often disrupted as a result of other works. This project will ensure that earth bonding is maintained and is effective.</p>

    <p>Earth wiring to lighting circuits will be installed, enabling residents to use metal lighting accessories safely. At present, metal accessories have to be removed if found for Health & Safety reasons.</p>

          </div>
        </details>

        <details class="details-accordion">
          <summary>   Meeting Modern Day Standards - Additional Sockets and/or spread of sockets </summary>
          <div class="details-accordion-content">
            
          <p>Due to the age of the stock many of the dwellings do not have sufficient sockets or
           a sufficient spread of sockets which meet customer needs and the increasing use of technology in the home
            which leads to the overuse of trailing cables or socket extension leads. This can lead to Health and Safety 
            issues. The Decent Homes programme did provide some improvements especially in kitchens but there is still 
            work to do in many dwellings to improve the socket provision. There is no current programme to cover this work.
             </p>

<p>Evidence from the teams working on the ground indicates that customer DIY work to electrics is putting residents at risk.
 For example, the erection of external lighting in response to security concerns, additional sockets not installed by a 
 qualified installer, surface mounted sockets and trailing cables. </p>

<p>Hard Wired Smoke Alarms - There is around 10,000 hard wired smoke alarms within the stock. 
All high risk properties such as sheltered, and towers have hard wired smoke alarms with the exception of Deer Park tower 
blocks. This block needs to be addressed ASAP in response to recommendations from South Yorkshire Fire and Rescue Service. 
</p>

<p>Additionally properties that are rewired always have hard wired alarms installed at the same time as it is part of the 
rewire specification. Legislation does not currently insist we install hard wired to all dwellings managed by Housing 
Services, but it may do in near future as there is national lobbying to government by the Fire Service. Hard wired alarms 
are part of the building regulations for new build. In the meantime, we have battery smoke alarms within the remaining 
stock which are checked annually by the gas and district heating servicing programmes. </p>

<p>Carbon Monoxide Detectors - There are very few carbon monoxide detectors within the stock as a whole. Once again,
 the legislation surrounding carbon monoxide detectors does not insist on their use but increasingly there 
 is recommendation for their use in general housing stock. Carbon Monoxide detectors are part of the building regulations 
 for new build. It is recommended that the housing service installs Carbon Monoxide detectors on a risk-based approach at 
 the same time as other electrical improvement work and / or when hard wired smoke alarms are installed. 
 There is no current programme. </p>

<p>Replacing bathroom light fittings which are difficult to access – since the new requirement for bathroom light 
fittings were introduced approx.10 to 12 years ago tenants have had difficulty removing the cover and changing the light 
bulbs. Some of the fittings are particularly difficult to access. This programme will identify these fittings and replace
 with a more suitable unit. The unit will be LED. </p>

<p>External Lighting – A report from Birmingham University presented to the Burglary Theme Group in 2014 provided 
evidence that external lighting can reduce the incidence of burglary and is the most effective of all the crime reduction
 measures that can be applied to a home including burglar alarms. Including this work as part of an upgrade project will 
 present tenants with a safer environment in which to live. </p>


          </div>
        </details>
  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const communalAreasFireSafety = new ContentH(
  "communalAreasFireSafety",
  "Communal Areas Fire Safety",
  "Description",
  `

<h2>Fire Safety in Communal Areas</h2> 

<p>Under the Regulatory Reform Order (2005), landlords are required to ensure that fire risk assessments are carried out in any shared areas of any properties they manage. Landlords also need to ensure that any fire escape routes and entrances/exits to properties are clear from trip hazards and items which would prevent exit from the building in the event of an emergency. </p>

<h3>As such, please do not place in the communal area, items such as: </h3>
<ul>
<li>Chairs and tables</li>
<li>Bookcases</li>
<li>Loose carpets</li>
<li>Curtains, blinds or net curtains</li>
<li>Plastic flower pots</li>
<li>Petrol containers and gas bottles</li>
<li>Motorbikes, mopeds or any other equipment which uses petrol/diesel or gas</li>
</ul>
<p>If any of these items, or any other item which is felt to be a fire risk, are left in your communal area we will ask residents to remove them. If they remain they will be removed. </p>

<p>Bicycles, prams, pushchairs and similar items will not normally be permitted to be stored or located within the internal communal parts unless there is an area capable of storage without causing obstruction. </p>

<p>You can have a small doormat if it is rubber backed. Edged and trimmed natural plants in ceramic, earthenware or metal pots, as long as they are not placed on stairs or landings which are the means of escape from the building. </p>


  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const propertyAge = new ContentH(
  "propertyAge",
  "Property Age",
  "Description",
  `

<p><a href="https://sccextranet.sharepoint.com/:x:/s/CustomerServiceKnowledgeCouncilHousing/ESm4Dds9S6pAq3ChaiPPEH8BNQtMLmygyOEvErvW2ISK2A?e=Qkq084">property Age</a></p>

  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const tenantsOwnImprovements = new ContentH(
  "tenantsOwnImprovements",
  "Tenants Own Improvements",
  "Description",
  `
<details class="accordion">
      <summary class="accordion-header">
        <h3>Tenants Own Improvements</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>  What we will pay compensation for? </summary>
          <div class="details-accordion-content">

<ul>
<li>new central heating systems and extra fires, radiators or thermostatic valves</li>
<li>up to 5 new kitchen units and making the kitchen larger</li>
<li>new bathroom suites, showers or moving a bathroom upstairs</li>
<li>new windows to replace metal ones or wooden ones put in before 1946, and double glazing</li>
<li>garages, car ports, hard standings, porches, conservatories and extensions</li>
<li>loft insulation, cavity wall insulation and extra electrical fittings</li>
</ul>

          
          </div>
        </details>



             <details class="details-accordion">
          <summary>   How much you will get </summary>
          <div class="details-accordion-content">
            
<p>The amount of compensation depends on how long ago you did the work, the quality of the work and its condition. 
When you claim, someone will visit to see the improvement and we will work out your payment on a sliding scale, 
taking account of its age and condition.</p>


          </div>
        </details>

                     <details class="details-accordion">
          <summary>   How to claim </summary>
          <div class="details-accordion-content">
            
<p>Complete the Tenants' Compensation Scheme form and send it to us as soon as you’ve told us you are leaving. 
If you want to claim for more than 3 improvements, please put the extra details on another form or a blank sheet 
and attach it to the main claim form. You can also get claim forms from Neighbourhood Offices and First Points. </p>

<p>When you claim, please send all the receipts for the work you have done with your form. 
This will help us pay you easily and quickly. </p>

<p>You can claim when you give notice to leave the property you have improved. 
You can’t claim before then or more than 2 months after leaving. </p>

<p>The Repairs team will only discuss the improvements claim after the form in the leaflet has been completed and 
sent back to us.
Customer's Email Address</p>



          </div>
        </details>
  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const districtHeating = new ContentH(
  "districtHeating",
  "District Heating",
  "Description",
  `
<details class="accordion">
      <summary class="accordion-header">
        <h3>District Heating</h3>
        <h4>Charges</h4>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>  A Usage Charge - 3.04 pence per Kwh </summary>
          <div class="details-accordion-content">


<p>This is for the heat and hot water used within the property.</p>

      </div>
        </details>


             <details class="details-accordion">
          <summary>  A weekly Standing Charge - £4.80 per week  </summary>
          <div class="details-accordion-content">
            

<p>T£4.80 per week from 1/4/2021 (previously £4.20 per week)</p>
<p>Tenants pay the Standing Charge via their rent account.</p>

          </div>
        </details>

                     <details class="details-accordion">
          <summary>   District Heating (heat and hot water) </summary>
          <div class="details-accordion-content">
            

<p>Replacing your current weekly district heating heat and hot water charge of £11.81 per week</p>


          </div>
        </details>

        
                     <details class="details-accordion">
          <summary>   Unmetered Heating Surcharge: £7.00 </summary>
          <div class="details-accordion-content">
            

<p>The current weekly Unmetered District Heating Surcharge will remain the same (£7.00 per week).</p>


          </div>
        </details>

                             <details class="details-accordion">
          <summary>   District Heating Unmetered Hot Water - £1.38 </summary>
          <div class="details-accordion-content">
            

<p>Replacing your current weekly District Heating Unmetered Hot Water charge of 69p per week.</p>


          </div>
        </details>

                                     <details class="details-accordion">
          <summary>   Sheltered Service Charge: £11.03 </summary>
          <div class="details-accordion-content">
            

<p>Replacing your current weekly Sheltered Service charge of £10.38 per week 
(a 65p increase per week towards Communal Area Heating).</p>


          </div>
        </details>
  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const emergencyCredit = new ContentH(
  "emergencyCredit",
  "Emergency Credit",
  "Description",
  `

<p>"The meter has an emergency credit facility. This allows the customer to ‘borrow’ credit up to £10.00 which will 
reconnect the heat and hot water supply. This is simply a loan, and must be paid back in full before 
the system can be used again. 
The emergency credit facility becomes available when the meters credit value reaches £1.00 or less. 
To activate, press the blue button marked Press For Em Credit.</p>

<p>PLEASE NOTE: that this should only be used in emergency situations where the customer cannot top-up
 before the remaining credit is due to expire."</p>

  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const homeImprovementRequests = new ContentH(
  "homeImprovementRequests",
  "Home Improvement Requests",
  "Description",
  `

<p>Please Call the RPIT on 0114 2052615 for permission requests to carry out work/home 
improvements to the District Heating Network i.e. replacing radiators. Required 
maintenance to resolve unauthorised work to the District Hearting network will be invoiced to the tenant/homeowner.</p>


  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const homeownerDisconnection = new ContentH(
  "homeownerDisconnection",
  "Homeowner Disconnection",
  "Description",
  `

<p>Please call the Home Ownership and Revenues Unit on 27 35595 for further 
information on homeowner requests regarding disconnection from the District Heating network. 
Disconnection charges apply as referenced in the property’s sale conveyance. 
SCC properties will not be disconnected from the District Heating network.</p>


  
  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const noHeatNoWater = new ContentH(
  "noHeatNoWater",
  "No Heat No Water",
  "Description",
  `

<p>To access a supply of heat and hot water please follow the simple steps below: </p>

<ol> 
<li>Does the property have an electricity supply? They will not have access to heat and hot water without it. The customer will need to Dial 105 or visit www.findmysupplier.energy.co.uk to find their current supplier. </li>

<li> The District Heating Meter location may vary but is usually located in the property airing cupboard. Does The Meters Home Screen say ON in the top right corner? Is your heating programmer turned on? </li>

<li> To activate an emergency credit, press the blue button, marked ‘Press For Em Credit’ as instructed by the meters home screen. This will allow the tenant to ‘borrow’ credit up to £10.00 which will connect your heat and hot water supply for a short time. This is simply a loan and will need to be repaid on receipt of the prepayment information/number which will be with them shortly. </li>

<li> If the Meters screen in blank or shows something similar to ‘D bug’ then the customer can reboot the G6 unit by pressing the blue and orange button together for 10 seconds. </li>
<li>If the reboot is unsuccessful or for any other repair, please call the Repairs line on 27 35555</li>
</ol>

  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const payment = new ContentH(
  "noHeatNoWater",
  "No Heat No Water",
  "Description",
  `

<p> New tenants will initially be issued with a Pay As You Go card, however they will be supplied with a 
Budget Plan Direct Debit mandate in their new tenancy welcome information pack
 and in addition a copy of the Budget Plan information and Direct Debit mandate will be posted separately</p>

<details class="accordion">
      <summary class="accordion-header">
        <h3>Payment</h3>
        <h4>Charges</h4>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>  Pay As You Go </summary>
          <div class="details-accordion-content">


<p>New tenants will initially be issued with a Pay As You Go card, however they will be supplied with a 
Budget Plan Direct Debit mandate in their new tenancy welcome information pack and 
in addition a copy of the Budget Plan information and Direct Debit mandate will be posted separately</p>

      </div>
        </details>


             <details class="details-accordion">
          <summary>  Budget Plan Scheme </summary>
          <div class="details-accordion-content">
            

<p>This is a prepayment method which allows the customer to pay for heating by making set monthly Direct Debit instalments 
based on anticipated usage. Monthly instalments would then be periodically adjusted to reflect the actual heat 
and hot water used in the property. 
Please call Home Ownership and Revenues Unit on 0114 27 35595</p>


          </div>
        </details>

                     <details class="details-accordion">
          <summary>  Methods of Payment </summary>
          <div class="details-accordion-content">
            

<p>New tenants will initially be issued with Pay As You Go information/number, 
however they will be supplied with a Budget Plan Direct Debit mandate in their new tenancy welcome information pack and 
in addition a copy of the Budget Plan information and Direct Debit mandate will be posted separately. 
If the customer wishes to amend the method by which they pay for the heat they use, 
please call Home Ownership and Revenues Unit on 0114 27 35595</p>


          </div>
        </details>

        <details class="details-accordion">
          <summary>  Repace Pay as you go Card </summary>
          <div class="details-accordion-content">
            

<p>The customer must call Switch 2 on 03333212010.</p>


          </div>
        </details>

                <details class="details-accordion">
          <summary>  No Credit </summary>
          <div class="details-accordion-content">
            

<p>The meter has an emergency credit facility. 
This allows the customer to ‘borrow’ credit up to £10.00 which will reconnect the heat and hot water supply. 
This is simply a loan and must be paid back in full before the system can be used again. 
The emergency credit facility becomes available when the meters credit value reaches £1.00 or less. 
To activate, press the blue button marked
If the customer has used all the emergency credit and is still unable to afford to top-up, 
please call the Home Ownership and Revenues Unit on 0114 27 35595.</p>


          </div>
        </details>

                        <details class="details-accordion">
          <summary>  Money Saving Advice </summary>
          <div class="details-accordion-content">
            

<p>Please call Home Ownership and Revenues Unit on 0114 2735595.</p>


          </div>
        </details>

        

  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const refunds = new ContentH(
  "refunds",
  "Refunds",
  "Description",
  `

<p>Pay As You Go refunds are not made unless the tenant has vacated the property.<br>
Once their rent account has been closed, customers are entitled to a full refund as long as their remaining 
Pay As You Go balance is £10.00 or greater please ask the tenant to call Home Ownership 
and Revenues Unit on 0114 27 35595 once their rent account has been closed. </p>


  `,
  { buttonLabel: "Report Rents Refunds ", formName: "hou_rents_refunds" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "10/10/2024", name: "George Whitehouse" }
);


const generalCouncilHousing = new ContentH(
  "generalCouncilHousing",
  "General Council Housing",
  "Description",
  `
<h3>Area Office Information</h3>
<p><a href="https://www.sheffield.gov.uk/council-housing/neighbourhood-offices">Neighvourhood Offices</a></p>

<h3>Bogus Callers</h3>
<p>All Council Housing Service staff, surveyors, and contractors carry identification cards at all times. It is important that you always ask to see identification before you let anyone into your home. If you have any doubts about a caller’s identity, do not let them in.</p>

<p>Council Officers NEVER ask a household for cash on the doorstep. You should always be alert to protect yourself against bogus callers. If you are suspicious about any caller’s identity, you should call the police immediately. </p>

<p>Give the option to search for team contact details and to report by case (but remind to phone the police).</p>

<h3>Housing Service Contact Details</h3>
<p>You can write to us at: <br>
<address>
Sheffield Council Housing Service <br>
PO Box 5967 <br>
Sheffield <br>
S2 9GH
</address> 
</p>

<h3>Telephone Directory</h3>

<p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Telephone%20Directory.aspx">Telephone Directory</a></p>


  `,
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  {
    type: "Information",
    keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const leaseholderInformation = new ContentH(
  "leaseholderInformation",
  "Leaseholder Information",
  "Leaseholder responsibilities, service charges, and subletting",
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
  { buttonLabel: "Report Housing Enquiry ", formName: "hou_sustainment_gen_enq" },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_information_requested" },
  { type: "Information", keywords: ['repairs and investmant', 'repears and investment', 'repairs and invesment', 'repair and investement', 'repairs and invesmant'], categories: ["Housing"] },
  { date: "11/10/2024", name: "Abishai Devarapalli" }
);



const estatesAndEnvironments = new MenuH(
  "estatesAndEnvironments",
  "Estates and Environments",
  "Bin chutes, communal cupboard, fences, firesafety and garden maintenance",
  [
    fencesCouncilHousing,
    gardenPledgeScheme,
    blockedBinChutes,
    communalCupboard,
    communalFireSafety
  ]
);



const adaptations = new MenuH("adaptations", "Adaptations", "Desc tbc", [
  chaseProgressOfAdaptation,
  otherAdaptationRequest
]);



const assetManagementAndRepairs = new MenuH(
  "assetManagementAndRepairs",
  "Asset Management And Repairs",
  "Description",
  [
    newAndExistingRepairs,
    adaptations,
    asbestos,
    communalAerials,
    communalAreas,
    doorEntrySystems,
    emergencyRepairs,
    loststolenkeys,
    programmedWorks,
    communalAreasFireSafety,
    tenantsOwnImprovements,
    districtHeating,
    emergencyCredit,
    homeImprovementRequests,
    homeownerDisconnection,
    payment,
    refunds
  ]
);

// Example instantiation for topicExample1
const topicExample = new ContentH(
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

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  "housing",
  "Housing",
  "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
  [subjectExample1, estatesAndEnvironments, generalCouncilHousing,assetManagementAndRepairs]
);
