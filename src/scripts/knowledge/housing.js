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
        Traveller Site Management team based at Solpro.
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
        customers are not classed as ‘tenants’, they are classed as 'Occupiers' and are
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
        completing your online application as you need to submit this
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
            as rent arrears or past/current anti-social behaviour.
          </p>
          <p>
            In the most serious debt cases, the Allocations Policy allows us to place
            applicants into Band E or disqualify a customer from the Housing Register
            for an initial period of 12 months.
          </p>
          <p>A customer can apply for a restriction to be removed if:</p>
          <ul>
            <li>
              They are able to evidence that their behaviour has significantly improved
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
            as rent arrears or past/current anti-social behaviour.
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
          href="G:\CEX\Corp Res\CS-Gen\Contact Centre\CRM Spreadsheets\Estates\Garden\Alternative Garden Services List.xls"target="_blank">Alternative Garden Services List (G:\CEX\Corp Res\CS-Gen\Contact Centre\CRM Spreadsheets\Estates\Garden\Alternative Garden Services List.xls)</a>
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
        <a href="http://www.trustmark.org.uk/ "target="_blank"
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
            <summary>What does asbestos containing material look like?</summary>
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
      
  <p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Communal%20Aerials.aspx"target="_blank">Communal Aerials List</a></p> 
  
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
        <p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Blocked%20Chutes.aspx"target="_blank">Blocked Bin Chutes</a></p>  
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
    "Carbon Monoxide/ What is CO Poisoning",
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
  
  <p><a href="https://sccextranet.sharepoint.com/:x:/s/CustomerServiceKnowledgeCouncilHousing/ESm4Dds9S6pAq3ChaiPPEH8BNQtMLmygyOEvErvW2ISK2A?e=Qkq084"target="_blank">property Age</a></p>
  
    
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
            <summary>Replace Pay as you go Card</summary>
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
  <p><a href="https://www.sheffield.gov.uk/council-housing/neighbourhood-offices="target="_blank">Neighbourhood Offices</a></p>
  
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
  
  <p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Telephone%20Directory.aspx"target="_blank">Telephone Directory</a></p>
  
  
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


//#region Tenancy enforcement

//Tenancy enforcement page to under main Housing menu i think

const tenancyEnforcementASB = new ContentH(
  "tenancyEnforcementASB",
  "Tenancy Enforcement (ASB)",
  "What ASB is, who is responsible and how to report and Sanctuary scheme",
  `<p><h3>Anti-social Behaviour</h3>
<p>Anti-social behaviour is behaviour which is capable of causing nuisance, annoyance, harassment, alarm or distress to an individual or community. This could range from a relatively minor issue to serious criminal activity. We do not adopt a single definition of anti-social behaviour but instead consider each report based on the circumstances.</p>
<p>Examples of behaviours we may consider to be anti-social are:</p>
<ul>
<li> Playing excessively loud music/television/video games</li>
<li>Threatening or verbally abusing another person</li>
<li> Damaging property</li>
<li> Attacking another person</li>
<li> Failing to control a pet / banned breed pet</li>
<li> Misusing drugs or alcohol</li>
<li> Incorrect disposal of rubbish</li>
</ul>
<p>Examples of behaviours we may not consider to be anti-social are:</p>
<ul>
 <li>Reasonable household noise</li>
<li> Carrying out DIY at reasonable times</li>
<li> Babies crying</li>
<li> A one-off party if noise was the only issue and it is unlikely to be repeated</li>
<li> Children playing (including ball games)</li>
</ul>
<h3>Police responsibility</h3>
<p>South Yorkshire Police are responsible for dealing with any behaviour or activity which results in a criminal offence being committed.</p>
<p>Where the perpetrator is an SCC tenant the Tenancy Enforcement and Sustainment Team (TEST) will work closely with SYP to ensure that any appropriate enforcement action is taken by the council.</p>
<p>We feel, it is not appropriate to list specific incidents that Police deal with as this may result in the issue just being reported to police and not being routed to appropriate SCC teams who may also need to look at enforcement action.</p>
<h3>Council Responsibility</h3>
<p>We are responsible for incidents involving:</p>
<ul>
<li>abandoned vehicles</li>
<li>dead animals</li>
<li>dog fouling</li>
<li>fly posting</li>
<li> dumped, fly-tipped waste</li>
<li>inoffensive graffiti</li>
<li>non-hate crime graffiti</li>
<li>littering</li>
<li>lost, stray or barking dogs</li>
<li>noise nuisance or DIY related noise (We cannot log anonymous complaints about noise as we rely on evidence from the complainant, and observations at the complainant&rsquo;s home, to evaluate whether the noise is a statutory nuisance).</li>
<li>syringes or needles</li>
<li>dumped, fly-tipped waste (nobody present)</li>
<p>Please note that although all of the above are issues that the council will deal with, only noise nuisance and possibly barking dogs are generally dealt with by TEST (where it is a SCC tenant) A number of other teams are involved in managing these issues including Environmental services and Estates teams etc..</p>
<h3>Hate Crime</h3>
<h4>What is hate crime?</h4>
<p>Hate Crime is any criminal offence committed against a person or property that is motivated by an offender’s hatred of someone because of their Disability, Race, Religion or Beliefs, Sexual Orientation or Transgender.</p>
<p>Crimes committed against someone because of their disability, transgender-identity, race, religion or belief, or sexual orientation are hate crimes and should be reported to the police.</p>
<p>Hate crimes can include:</p>
<ul>
<li>threatening behaviour</li>
<li>assault</li>
<li>robbery</li>
<li>damage to property</li>
<li>inciting others to commit hate crimes</li>
<li>harassment</li>
<li>online abuse</li>
</ul>
<h4>How to report Hate Crime</h4>
<p>Anyone experiencing Hate Crime should report this to South Yorkshire Police, this can be done via 101 or via 999 if a crime is in progress or someone is in immediate danger. Hate Crime should also be reported to SCC, the Neighbourhood Team/ TEST who will work closely with Police and establish if any enforcement action against perpetrators is appropriate.</p>
<li>robbery</li>
<li>damage to property</li>
<li>inciting others to commit hate crimes</li>
<li>harassment</li>
<li>online abuse</li>
</ul>
<h3>Sanctuary Scheme/Target hardening</h3>
<p>Service Area: Action Domestic Abuse (Sanctuary Scheme)</p>
<p>Telephone Number: Helpline No: 08088 082 241; Office No. 0114 270 6999</p>
<p>Email Address: sanctuary.scheme@actionorg.uk</p>
<p>South Yorkshire Fire and Rescue Service can fit blank letter boxes if there are concerns regarding harmful items being posted through the door. The Neighbourhood Officer can make a referral to SYF&amp;R for a Home Safety check.</p>
<p>Neighbourhood Teams may have stock of target hardening equipment.</p>
<p>Victim Support may support with target hardening.</p>
  </p>`,
  {buttonLabel: "Example 1", formName: "example_form" },
  {typeKey: "example_transfered_to_service" },
  {typeKey: "example_information_provided" },
  {type: "Request", keywords: [], categories: ["Housing"] },
  {date: "16/10/2024", name: "Omily Parkin" }
  );

//Bidding page to go under Rehousing Menu

const bidding = new ContentH(
  "bidding",
  "Bidding",
  "For assistance or problems with the bidding process",
  `<p>After you have registered for housing, you express your interest in renting a property by making a bid. You only have to bid once per property. You make bids online at the Property Shop website www.sheffieldpropertyshop.org.uk You can bid 3 times (plus 1 FCFS) within each weekly bidding cycle (Thursday to Tuesday). 
  <h3>Why can't you bid for me</h3>
<p>If you need assistance placing a bid, you can visit Sheffield Property Shop located in Howden House on Union Street, Sheffield, or your nearest neighbourhood housing office.</p>
<h3>What happens after bidding</h3>
<p>Once the bidding has finished, checks will be made on who is in first position, that the keys for the property are ready, and final checks will be completed on the person in first position when bidding closed. We will then contact the successful customer by phone, email or letter to offer the property. It is important that customers ensure their contact details on the website are up to date so that we can do this. Unsuccessful applicants will not be notified.</p>
<p>However, we may not offer you a property if you owe a debt to the housing service, have a history of anti social behaviour, or have not kept your Council tenancy in a good condition. These checks can take a few days.</p>
<p>If you are offered a property we will not consider your bids for any other properties until you have decided whether or not to accept the property offered.</p>
  </p>`,
  {buttonLabel: "Example 1", formName: "example_form" },
  {typeKey: "example_transfered_to_service" },
  {typeKey: "example_information_provided" },
  {type: "Request", keywords: [], categories: ["Housing"] },
  {date: "15/10/2024", name: "Omily Parkin" }

//Application Changes page to be under the Rehousing menu

const applicationChanges = new ContentH(
  "applicationChanges",
  "Application Changes",
  "For everything related to changes in an application including name changes, renewals, ID, split applications etc.",
  `<p>Change of circumstances are now online. When you are making changes you must remember to click 'Submit'. ID/References may also need to be submitted before any changes are accepted.</p>
<p>It is very important that you tell us of any changes in your circumstances so that we can amend your application. We will tell you if this results in your application moving to a different band. Depending on the change you have made, you may be required to resubmit your identification/reference before changes are accepted. We will inform you if this is necessary.</p>
<p>If the customer has made recent changes, the changes are likely to be awaiting approval and no further changes can be made until they are approved.</p>
<details class="accordion">
<summary class="accordion-header">
<h3>Accepted ID</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>You must provide two forms of identification to prove changes to your application. One must be from the Proof of ID documents list whilst the second must provide proof of your current UK address. Photo ID is also required to prove your identity. If you do not have photo ID, you must provide a passport-sized photo accompanied with a birth certificate. Proof of child benefit is only required where children under 16 years of age are being rehoused with you.</p>
<p><h3>Proof of ID documents</h3>
<ul>
<li>Marriage certificate</li>
<li>Divorce/Annulment papers</li>
<li>Passport (this can be expired but if the customer is an adult an adult passport must be produced)</li>
<li>Deed poll documentation for change of name (to accompany details of former name if applicable)</li>
<li>Current bus passes with photograph</li>
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
<li>Bank statement from within the last 3months</li>
<li>Wage slip from current employer</li>
<li>Life assurance/Insurance policies</li>
<li>Proof of all other benefits</li>
</ul>
<h3>Proof of Child Benefit</h3>
<ul>
<li>Child benefit award letter</li>
<li>The last 3 consecutive months bank statements (Only where award letter is not available).</li>
</ul>
.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Annual renewal</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>Under the Allocation Policy customers will be required to update their application on the anniversary of the date they registered.</p>
<p>If applications are not renewed within 42 days when requested the application may be cancelled.</p>
<p>Customers won&rsquo;t need to submit ID for any changes they make and this will continue for the time being. This will change in NEC</p>
<details class="details-accordion">
<summary>
                Instructions for completing the renewal of your Housing Application online
</summary>
<div class="details-accordion-content">
<p>
                    <p>&quot;Log onto our website at www.sheffieldpropertyshop.org.uk and follow the links from the homepage</p>
<p>Click &lsquo;Log into my account&rsquo;</p>
<p>On this page you will be asked to enter your login details. These are:</p>
<p>Your unique reference number - This can be found on the enclosed letter Your memorable date and password &ndash; Contact us if you need this Once you have logged into your account you will need to;</p>
<p>Click on the link &lsquo;Update my details&rsquo; under the heading &lsquo;Application renewal required&rsquo; Check the information carefully, and confirm your details are correct, or Submit the form to confirm your details. You must still submit the form even if there are no changes to your information. If you make changes to any of the following information on your application you will also need to provide proof of identity (ID) and address for everyone included on your housing application.</p>
<p>Name of anyone on the application Date of birth on anyone on the application Added a joint applicant or household member to the application Address of anyone on the application National Insurance number of anyone on the application Nationality of anyone on the application If the changes you have submitted require you to provide further evidence, this should be;</p>
<p>One form of &lsquo;primary&rsquo; ID for the applicant, joint applicant and household members. If this does not include a photograph, for example a birth certificate, we will also require a passport style photograph. Proof of address for the applicant , joint applicant and household members aged 16 and over Proof of child benefit for all children aged 16 or under who are named on the application. This should be your most recent child benefit award letter or last 3 months bank statements A full list of acceptable identification documents is available on our website at www.sheffieldpropertyshop.org.uk (Advisor note: Acceptable ID is listed in the accordion above) ID must be provided within 28 days of submitting your application. You should take these to your local First Point or to Howden House. If you have any issues with providing the above, please contact us on 0114 205 3333 or 293 0000.</p>
<p>It is very important that you check and confirm the details on your application even if this has not changed. If you do not do this within 28 days of the date on this letter we will cancel your housing registration. The best way for the customer to reset their memorable date is to go online. You will need to have included an email address when completing the website (household) registration.&quot;</p>
</p>
<details class="details-accordion">
<summary>
                Housing Registration Renewals Letter
</summary>
<div class="details-accordion-content">
<p>&quot;Important - action required or your Housing Application will be cancelled</p>
<p>Reference: XXXXXX</p>
<p>Dear XXXXXX</p>
<p>I am writing to inform you that we are currently checking the details of everyone who has a current application on Sheffield City Council&rsquo;s Housing Register.</p>
<p>If you wish to remain on the Council&rsquo;s Housing Register it is important that you log into your housing application and confirm that all your details are correct. If necessary, you can make changes to the details on your housing application and then submit these. Please see overleaf for how to do this.</p>
<p>We will ask you to renew your application every 12 months on the anniversary date of your application, we will write to you as a reminder so please ensure your correspondence address is kept up to date.</p>
<p>If you do not do this your housing application will be cancelled and any waiting time you have accrued to date will be lost. This means that if you want to be rehoused to social housing in the future you will need to make a fresh application.</p>
<p>If you are unable to complete the online Renewal yourself, please ask family or friends for help. If you wish to discuss the details of this letter or have no way to access the internet you can telephone the Registration Team on 0114 293 0000.</p>
<p>You can also get help and advice at the Sheffield Property Shop located in Howden House on Union Street, Sheffield, or at your nearest neighbourhood housing office.</p>
<p>Yours Sincerely</p>
<p>Registration Team Rehousing Service</p>
<p> Please see over</p>
<p>To complete the renewal of your Housing Application</p>
<p>Log onto our website at www.sheffieldpropertyshop.org.uk and follow the links from the homepage Click &lsquo;Log into my account&rsquo;</p>
<p>On this page you will be asked to enter your login details. These are: - Your unique reference number - This can be found on the enclosed letter - Your memorable date &ndash; Contact us if you need this</p>
<p>Once you have logged into your account you will need to: - Click on the link &lsquo;Update my details&rsquo; under the heading &lsquo;Application renewal required&rsquo; - Check the information carefully, and confirm your details are correct, or - Make changes to any of the information that is incorrect and add any information that is missing. - Submit the form to confirm your details. You must still submit the form even if there are no changes to your information.</p>
<p>It is very important that you check and confirm the details on your application even if this has not changed. If you do not do this within 28 days of the date on this letter we will cancel your housing registration.&quot;</p>
<p>
</div>
</details>
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
<p>The Allocations Policy advises of various circumstances where we will reduce the preference applicants are given on the Housing Register, or prevent them from joining the register. These include circumstances such as rent arrears or past/current anti-social behaviour.</p>
<p>In the most serious debt cases, the Allocations Policy allows us to place applicants into Band E or disqualify a customer from the Housing Register for an initial period of 12 months.</p>
<p>A customer can apply for a restriction to be removed if:</p>
<p>they are able to evidence that their behavior has significantly improved e.g. pay off arrears in full</p>
<p>they appeal the restriction (disqualification) within 21 days</p>
<p>they have exceptional circumstances</p>
<p>they need a priority</p>
<p>An Exception Request allows us to make decisions on whether it is appropriate to waive the restrictions/disqualification in exceptional circumstances.</p>
<p>If an applicant is allowed back on the housing register, they will have to re-register. ID and reference will be applicable; unless recently submitted. The usual checks will be carried out and the appropriate band chosen. Applicants lose their original waiting time.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Disqualification/Restriction</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>The Allocations Policy advises of various circumstances where we will reduce the preference applicants are given on the Housing Register, or prevent them from joining the register. These include circumstances such as rent arrears or past/current anti-social behaviour.</p>
<p>In the most serious debt cases, the Allocations Policy allows us to place applicants into Band E or disqualify a customer from the Housing Register for an initial period of 12 months.</p>
<p>A customer can apply for a restriction to be removed if:</p>
<p>they are able to evidence that their behavior has significantly improved e.g. pay off arrears in full</p>
<p>they appeal the restriction (disqualification) within 21 days</p>
<p>they have exceptional circumstances</p>
<p>they need a priority</p>
<p>An Exception Request allows us to make decisions on whether it is appropriate to waive the restrictions/disqualification in exceptional circumstances.</p>
<p>If an applicant is allowed back on the housing register, they will have to re-register. ID and reference will be applicable; unless recently submitted. The usual checks will be carried out and the appropriate band chosen. Applicants lose their original waiting time.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Assistance with Change of Circumstances</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>Log on using the details below if required.</p>
<p>Unique Reference - 1257822 </p>
<p>Memorable date - 25/12/2012 </p>
<p>Password - DMrm15</p>
<p> Advisor note: You have logged in using dummy login details. Please do not amend anything on screen. Log in if required using the log in details above and follow the below instructions:</p>
<p>Select My Social Housing on the left hand side.</p>
<p> Select Click here to update your details</p>
<p> Navigate through the Social Housing Form using the Next section buttons and advise the customer as appropriate. </p>
<p>Please do not Submit application</p>
<p> Advisor note You have logged in using dummy login details. Please do not amend anything on screen.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Exceptions</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>The Allocations Policy advises of various circumstances in which we will reduce the preference which applicants are given on the Housing Register, or prevent them from joining the register. These include circumstances such as rent arrears or past/current anti-social behaviour.</p>
<p>An Exception Request allows us to make decisions on whether it is appropriate to waive these restrictions in exceptional circumstances. Situations where we might consider an Exception Request include where we are awarding a priority or where an applicant wishes to move to more suitable accommodation using their waiting time due to a change in their circumstances.</p>
<p>In order for us to consider an Exception Request, the applicant will have to demonstrate that they have exceptional circumstances and have taken action to rectify the issues which led to them being given reduced preference or disqualified from the register.</p>
<p>If an applicant is placed in Band E they may request an Exception Request to be placed in General Needs Band D in order to make better use of their waiting time. In these circumstances, an Exception Request can be completed however the applicant would still be required to evidence that they have exceptional circumstances. This is also the case where the applicant is disqualified and an Exception Request is submitted to be placed in Band E.</p>
<p>Reviews</p>
<p>We will write to applicants advising them of our decision at which point a review can be requested within 21 days. Following the review, we will not normally reconsider a request for six months unless there has been a change in the applicant&rsquo;s circumstances. There is no further right of review on such decisions.</p>
<p>Hostel Leavers</p>
<p>Referrals need to be made by the hostel.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Name changes</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>You should present proof (3 documents in total) to a housing office or First Point who will copy the ID and save it to our document management store. Advisor note: Acceptable ID is listed in an accordion above.</p>
<p>The name will then be changed in our Housing management system.</p>
<p>Alternatively, you can put the name change in writing along with proof of the new name (originals, not photocopies) and send it to RegistrationID@sheffield.gov.uk</p>
<p>At least one piece of proof must be primary evidence whilst the second may be either primary or secondary evidence. Proof of their current UK address is also required.</p>
<p>Photo ID is also required to prove identity. If the customer does not have photo ID, they must provide a passport-sized photo. The same document cannot be used more than once e.g. driving licence as primary evidence and proof of address.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Split Applications</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<h3>Main Applicant </h3>
<p>Removing a joint applicant needs to be done online at the Property Shop website.</p>
<h3>Joint Applicant </h3>
<p>You will need to speak to the Registration team so that your National Insurance Number can be removed. Notes will also need to be made on your joint household.</p>
<p>You will need to complete a new online application and confirm on that application that you want to be removed from the other application. You will not lose your original waiting time as this will be carried forward as part of the approval process.</p>
<p>You should not log on and use a made up NI number or you may not get your waiting time back.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Suspend Application</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>You cannot suspend your own application. If you do not want to be rehoused but want to keep you application, simply don't bid.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Family member has been removed</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>Search for customer through Abritas household. Look at the Abritas CRM for recent notes. If notes indicate that 16-25 year old has been removed due to activating own application, the customer will need to speak with their family member.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Application for 16 to 25 year olds</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<h3>Customer wants to activate own Application</h3>
<p>Applicants are only permitted to be on one application unless they are 16-25 and living with parents/guardians. In this case, they can have a restricted application of their own and also be a household member on the family application.</p>
<p>For customers aged 16-25, search for customer through Abritas household to find suspended application.</p>
<h3>Customer wants to go back on to parents/guardians Application</h3>
<p>You will no longer qualify to be rehoused with their parents unless you are willing to cancel your own application (if they have one). In order to be on two applications you must be continuously on your parent&rsquo;s application without a break.</p>
</div>
</details>
<details class="accordion">
<summary class="accordion-header">
<h3>Dummy Registration</h3>
<div class="accordion-icon"></div>
</summary>
<div class="accordion-content">
<p>Log on using the details below if required.</p>
<p>Unique Reference - 1257822</p>
<p>Memorable date - 25/12/2012</p>
<p>Password - DMrm15</p>
<p> Advisor note: You have logged in using dummy login details. Please do not amend anything on screen.</p>
</div>
</details>
</p>`

  {buttonLabel}: "Example 1", formName: "example_form" },
  {typeKey}: "example_transfered_to_service" },
  {typeKey}: "example_information_provided" },
  {type}: "Apply", keywords: [], categories: ["Housing"] },
  {date}: "15/10/2024", name: "Omily Parkin" }
  );

//apply for rehousing page to be under Rehousing menu
const applyForRehousing = new ContentH(
  "applyForRehousing",
  "Apply For Rehousing",
  "TBC",
  `<p>To apply for Social Housing you need to do so via the Property Shop website. There are no paper application forms. This will be will Housing Online when NEC comes in</p>
<p>Go online and register on www.sheffieldpropertyshop.org.uk</p>
<p>Before you can complete an application to join the Housing Register you will need to register yourself as a new household on the system.</p>
<p>Once registered you will be able to complete an application form to join the Housing Register.</p>
<p>You must produce proof of ID (and Child Benefit if appropriate) and a landlord reference (if you are not already a Council tenant) at the same time, documents can be uploaded via the website or at your local housing office or First Point before your application will be validated.</p>`,
  {buttonLabel: "Example 1", formName: "example_form" },
  {typeKey: "example_transfered_to_service" },
  {typeKey: "example_information_provided" },
  {type: "Request", keywords: [rehousing], categories: ["Housing"] },
  {date: "14/10/2024", name: "Omily Parkin" }
  );

const rehousing = new MenuH(
  "rehousing",
  "Rehousing",
  "TBC",
  [applyForRehousing,applicationChanges, bidding]
  );
// to go in estates and environment

const indoorCommunalAreas = new ContentH(
  "indoorCommunalAreas",
  "Indoor Communal Areas",
  "TBC",
  `<h3>Blocked Bin Chutes</h3>
<p>Bin chutes in Council flats or maisonettes may become blocked and will be unblocked upon request.</p>
  <><p>Open the blocked chutes list from the button below, and use the search, is the property on the list?<br>
    <h3>Communal Cupboard and Meter Box Cupboard</h3>
    ,p>Meter boxes cupboard can be inside or outside of the property and the keyhole will be triangular in shape. These will need to purchased from a hardware store as we cannot provide one.</></p><p>If the keyhole is not triangular then it is likely to be cupboard in the communal area. These cupboards may contain more than one gas/electric meter and they mostly require a T1 Key that is held in the local Area office.&quot;</p>
    <h3>Communal Fire Safety </h3>
    <p>Under the Regulatory Reform Order (2005), landlords are required to ensure that fire risk assessments are carried out in any shared areas of any properties they manage. Landlords also need to ensure that any fire escape routes and entrances/exits to properties are clear from trip hazards and items which would prevent exit from the building in the event of an emergency.</p><p>As such, please do not place in the communal area, items such as:</p><p>Chairs and tables<br>
      Bookcases<br>
        Loose carpets<br>
          Curtains, blinds or net curtains<br>
            Plastic flower pots<br>
              Petrol containers and gas bottles<br>
                Motorbikes, mopeds or any other equipment which uses petrol/diesel or gas<br>
                  If any of these items, or any other item which is felt to be a fire risk, are left in your communal area we will ask residents to remove them. If they remain they will be removed.</p>
                <p>Bicycles, prams, pushchairs and similar items will not normally be permitted to be stored or located within the internal communal parts unless there is an area capable of storage without causing obstruction.</p>
                <p>You can have a small doormat if it is rubber backed. Edged and trimmed natural plants in ceramic, earthenware or metal pots, as long as they are not placed on stairs or landings which are the means of escape from the building.<br>
                </></p>`,
                {buttonLabel: "Example 1", formName: "example_form" },
                {typeKey: "example_transfered_to_service" },
                {typeKey: "example_information_provided" },
                {type: "Apply", keywords: [], categories: ["Housing"] },
                {date: "05/09/2024", name: "Elliott Griffiths" }
)

 //#endregion Tenancy enforcement



  //#region Rents
  
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
   "", 
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
                </details>      
  
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Weekly Rent Year</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              The year 2024-2025 is a 53-week rent year, which means there are 53 Mondays in the financial year. 
              Taking into account the rent-free weeks, rent will be charged over 51 weeks.
              </p>
              <p>
              When calculating monthly arrangements, these will need to be calculated over 51 weeks instead of the normal 50 weeks. 
              The rent calculator can be used to assist in calculating arrangements:
              </p>
              <p><strong>File Path:</strong> G:/HSG/Public/Rents/001. public sharepoint digital ringbinder/1. Comms/51 week rent calculator.xlsx
              </p>
              <h3>Rent Calculator</h3>
              <p>
              Anybody applying to pay by Direct Debit should be dealt with as normal, in the same way, during this rent change period. 
              Any queries on Direct Debits need to be directed to the Income Management and Financial Inclusion Team.
              </p>
              <p>This is relevant to this year but can change year to year.</p> 
              </div>
                </details>
                
     <details class="accordion">
        <summary class="accordion-header">
          <h3>Full List of Variations</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <ul>
              <li>Social Council rents – 7.7% increase</li>
              <li>Affordable Rents – 7.7% increase</li>
              <li>Interim/High Support/Temporary Accommodation Rents – 7.7% increase</li> 
              <li>Garage Rents – 7.7% increase</li>
              <li>District/Community Heating – No increase</li>
              <li>Sheltered Accommodation service charge – 6.7% increase</li>
              <li>Furnished charges – 6.7% increase</li>
              <li>Burglar alarm charges – 6.7% increase</li>
              <li>Insurance charges – 10% increase. Household contents insurance charges will be fixed for two years until April 2026</li>
              <li>South Yorkshire Housing leased managed properties – 7.7% increase</li>
              <li>Shared Ownership Properties – 7.7% increase</li>
              <li>Gypsy & Traveller charges – to be confirmed</li>
              <li>Direct deductions from the DWP for rent arrears will be £4.55 per week from 1st April 2024</li>
              </ul>
              <p>
              <strong>This is relevant from April 2024 to April 2025 when it will be updated with new rent increase charges</strong>.
              </p> 
              </div>
                </details>
                
     <details class="accordion">
        <summary class="accordion-header">
          <h3>Garages</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              Garage letters will be sent from 18th March 2024, so tenants will only receive one garage letter. 
              This is because we don't have to give legal notice of the rent change for garages.
              </p> 
              </div>
                </details>
  
        <details class="accordion">
        <summary class="accordion-header">
          <h3>Rent Charged After Property is Vacant</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              <p>Please note that the rent for any properties let after being vacant will be set at the maximum 
              rent, as agreed by the Co-op Executive. This will be applied automatically, so the rent showing in 
              the Choice Based Letting advert will be correct. This may mean, in some instances but not all, that
              the new tenant may pay a higher rent than the previous tenant.
              </p>
              <p>
              <strong>From Notes Section on Spreadsheet:</strong> Needs changing; the wording is a bit odd! 
              Not sure where this has come from!
              </p> 
              </div>
                </details>
                
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Tenant Levy</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
            <p>
            The Tenants Levy is a weekly payment of 10p that is used to support community activity in our 
            council housing areas. It is collected by the Council and will go towards funding local Tenants
            and Residents Associations (TARAs). Where there is currently no TARA, the levy is held by the 
            Council to support any future community activity in the local area.
            </p> 
            <p>
            Tenants can decide whether to pay the levy, which is not covered by Housing Benefit or Universal Credit. 
            For any tenant levy enquiries contact the Community Engagement Team: <a href="mailto:getinvolved@sheffield.gov.uk">getinvolved@sheffield.gov.uk</a> or call 0114 2735566.
            </p> 
              </div>
                </details>
                          
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Dealing with Detailed Rent Enquiries</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
            <p>
            Please refer any detailed queries about rent charges or the changes to the relevant Income 
            Management and Financial Inclusion Team.
            </p> 
              </div>
                </details> 
  
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Housing Benefit</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
            <p>
            The Housing Benefits Year end on Academy will start week commencing 4th March 2024, so Academy
            is possibly unavailable from Wednesday 6th March 2024 to Monday 11th March 2024.
            </p>
            <p>
            The Housing Benefit letters will be posted out from 11th March 2024.
            </p>
            <p>
            Apart from these dates, Academy will be available to view as normal. If this changes, an update 
            will be issued. All housing benefit adjustments will be credited to rent accounts as normal throughout March.
            </p>
            <p>
            All changes to Housing Benefit levels, either through cancellations, changes of circumstances, 
            or creation of a new case will continue as normal throughout March.
            </p>
            <p>
            The Housing Benefit Overpayment recovery rate (Clawback) amount is increasing. From 1st April 2024, 
            it will be £13.65 a week for normal cases up to a maximum of £22.75 per week, plus 50% of any disregard 
            included in the calculation for earnings. The minimum clawback rate is £4.55 per week.
            </p>
            <p>
            All changes to weekly housing benefit for the new rent levels will be applied to the Rents system 
            from 1st April 2024.
            </p> 
              </div>
                </details>
  
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Notice of Variation (NOV) Letters and Deliveries</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
            <p>
            The Notice of Variation (NOV) letter will be posted from 15th February 2024, arriving with 
            tenants in the seven days after this.
            </p>
            <p>
            These letters are based on information produced on 8th February 2024, so any tenancy changes 
            after that won’t be included. This means any successions, assignments, changes of names, etc. 
            will be correct on the system, but the letters will be sent with the original details on them.
            </p>
            <p>
            The NOV letter includes the detailed rent change letter and a letter from the Housing Cabinet Member.
            </p>
            <p>
            The second letter will be posted to tenants from 18th March 2024.
            </p>
            <p>
            The second letter includes the Gross amount letter and inserts. This second letter will show 
            all the charges on the account and WILL include the housing benefit, so it shows the net amount payable.
            </p>
            <p>
            The benefit details included are as of 11th March 2024, so any changes in entitlement after that 
            date won’t be shown on these rent change letters. Tenants will be notified separately by Sheffield 
            Benefits Service for any changes after 11th March 2024.
            </p>
            <p>
            Anybody on Housing Benefit will also receive a letter directly from Sheffield Benefits Service 
            telling them what their Housing Benefit is and how it has been worked out. These letters from the
            Benefits Service will be posted to tenants from 11th March 2024. Any queries need to be made directly
            to the Sheffield Benefits service.
            </p>
            <p>
            The Water rates leaflet for properties covered by Yorkshire Water will be posted separately around 
            the same time. As before, these dates change every year.
            </p> 
              </div>
                </details>
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Standing Orders<h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
            <p>
            If you pay your rent by standing order, please inform your bank of the new amount as soon as possible.
            </p> 
              </div>
                </details>
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Standing Orders<h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
            <p>
            Rent balances will show the correct Total Indebtedness throughout this period. 
            The balances should be correct for all tenants, given there is no closedown.
            </p>
            <p>
            <strong>Any queries regarding rent payments should be sent to Income Management and Financial Inclusion Team.</strong>
            </p>
              </div>
                </details>
  
    `,
    { buttonLabel: "Rent Varitaion", formName: "Rents" },
    { typeKey: "rents_information_provided" },
    { typeKey: "rents_transfered_to_service" },
    { type: "Rent Varitaion", keywords: ["Rent"], categories: ["Housing"] },
    { date: "16/10/2024", name: "Shahzad Athar" }
  );
  
  const statements = new ContentH(
    "statements",
    "Statements",
    "",
    `
  <p>
  Statements are issued every 12 months or are available online along with rent balance enquiries at 
  <a href="https://www.gro.sheffieldhomes.org.uk/">GRO Sheffield Homes</a>.
  </p> 
  <p>
  If the customer requires a current statement, we can still provide one upon request that covers the last 3 months. 
  If the customer is asking for more than 3 months, we need to know why they need it as there will be a charge.
  </p> 
  <p>
  <strong>Tenants in arrears:</strong> We will continue to send statements every 13 weeks if the customer is repaying arrears.
  </p> 
    `,
    { buttonLabel: "Statements", formName: "Rents" },
    { typeKey: "rents_information_provided" },
    { typeKey: "rents_transfered_to_service" },
    { type: "Statements", keywords: ["Rent"], categories: ["Housing"] },
    { date: "16/10/2024", name: "Shahzad Athar" }
  );
  const universalCredit = new ContentH(
    "universalCredit",
    "Universal Credit",
    "",
    `
  <p>
  Refer to the "Benefits" section for information about Universal Credit.
  </p>
    `,
    { buttonLabel: "Universal Credit", formName: "Rents" },
    { typeKey: "rents_information_provided" },
    { typeKey: "rents_transfered_to_service" },
    { type: "Universal Credit", keywords: ["Rent"], categories: ["Housing"] },
    { date: "16/10/2024", name: "Shahzad Athar" }
  );
  const contactRentsTeam = new ContentH(
    "contactRentsTeam",
    "Contact Rents Team",
    "",
    `
    <details class="accordion">
        <summary class="accordion-header">
          <h3>Contact Benefits Team<h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
          <p>
          If you need to contact the Benefits Team, transfer the customer to the Benefits Team on 0114 2736777. 
          If the line is busy, DO NOT ask the customer to call back later today. 
          Instead, advise the customer to email either: <a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a> 
          or <a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a>.
          </p>
          <p>
          Alternatively, they can complete the online form at <a href="https://www.sheffield.gov.uk/benefits/housing-benefit">Sheffield Housing Benefit</a>.
          </p> 
              </div>
                </details>
    <details class="accordion">
        <summary class="accordion-header">
          <h3>Contact Centre Supervisor</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              <strong>Service Area:</strong> Customer Services (Housing Call Centre Supervisors)
              </p>
              <p>
              <strong>Telephone Number:</strong> Tracy Harding: 46 71021; Lisa Styring: 20 53297
              </p> 
              </div>
                </details>
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Contact Court Team and Procedure Team</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              <strong>Service Area:</strong> Income Management & Financial Inclusion Team.
              </p>
              <p>
              <strong>Telephone Number:</strong> 0114 20 52910
              </p>
              <p>
              <strong>Email Address:</strong> <a href="mailto:homesrentcourt@sheffield.gov.uk">homesrentcourt@sheffield.gov.uk</a>
              </p>
              <p>
              <strong>Referred by Phone:</strong> Customer Above NSP & Refuses to be Transferred Refer by Case.
              </p> 
              </div>
                </details>  
                
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Contact Current Arrears Team</h3> 
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              Goes into process.
              </p>
              <p><strong>Now only 4 current arrears teams and 1 new tenancy team</strong></p> 
              </div>
                </details>
                
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Contact Debt Recovery Team</h3> 
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              Goes into process.
              </p>
              </div>
                </details>    
                
      <details class="accordion">
        <summary class="accordion-header">
         <h3>Discretionary Housing Payment Team</h3> 
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
             Transfer the Customer to the Discretionary Housing Payments Team on the number below, 
             or give the customer the number.
             </p>
             <p>
             <strong>Service Area:</strong> Revenues and Benefits.
             </p>
             <p>
             <strong>Telephone Number:</strong> 0114 27 36983.
             </p>
             <p>
             <strong>Further Information:</strong> Revenues and Benefits Client Team, PO Box 1283, Town Hall, Sheffield S1 1UL.
             </p>
             <p>
             <strong>Email Address:</strong> <a href="mailto:DHP-CTS@sheffield.gov.uk">DHP-CTS@sheffield.gov.uk</a>
             </p> 
              </div>
                </details>     
                
                
      <details class="accordion">
        <summary class="accordion-header">
         <h3>Department of Work and Pensions (DWP)</h3> 
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              Transfer the Customer to the Department of Work and Pension on the number below, 
              or give the customer the number.
              </p>
              <p>
              <strong>Service Area:</strong> DWP.
              </p>
              <p>
              <strong>Telephone Number:</strong> 0345 605 7064.
              </p> 
              </div>
                </details>   
                
      <details class="accordion">
        <summary class="accordion-header">
         <h3>Housing Benefits Overpayments</h3> 
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              Transfer the Customer to the Housing Benefits Overpayment Team on the number below, 
              or give the customer the number.
              </p>
              <p>
              <strong>Service Area:</strong> Housing Benefit.
              </p>
              <p>
              <strong>Telephone Number:</strong> 0114 27 34199.
              </p>
              <p>
              <strong>Email Address:</strong> <a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a>
              </p>  
              </div>
                </details>
                
      <details class="accordion">
        <summary class="accordion-header">
         <h3>Rent Account Maintenance Team</h3> 
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              <strong>Service Area:</strong> Income Management & Financial Inclusion Team.
              </p>
              <p>
              <strong>Telephone Number:</strong> 0114 20 52909.
              </p>
              <p>
              <strong>Email Address:</strong> <a href="mailto:Homesrentincome@sheffield.gov.uk">Homesrentincome@sheffield.gov.uk</a>.
              </p> 
              </div>
                </details>       
                
      <details class="accordion">
        <summary class="accordion-header">
         <h3>Sheltered Housing Rents</h3> 
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              Goes into process.
              </p> 
              </div>
                </details>
                
      <details class="accordion">
        <summary class="accordion-header">
         <h3>Sustainment and Support Team</h3>
           <div class="accordion-icon"></div>
            </summary>
              <div class="accordion-content">
              <p>
              Goes into process.
              </p> 
              </div>
                </details>          
                
    `,
    { buttonLabel: "Contact Rents Team", formName: "Rents" },
    { typeKey: "rents_information_provided" },
    { typeKey: "rents_transfered_to_service" },
    { type: "Contact Rents Team", keywords: ["Rent"], categories: ["Housing"] },
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
      statements,
      universalCredit,
      contactRentsTeam
    ]
  );
  
  //#endregion Rents
  
  
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
    [subjectExample1, estatesAndEnvironments, generalCouncilHousing, assetManagementAndRepairs, leaseholderInformation, rehousing, rents, shelteredAndSupported, tenancyEnforcementASB, bidding, applicationChanges, applyForRehousing, rehousing, indoorCommunalAreas]
  );
  
