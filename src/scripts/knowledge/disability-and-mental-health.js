class CoreDaMH {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceDaMH extends CoreDaMH {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuDaMH extends CoreDaMH {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentDaMH extends CoreDaMH {
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

class FormDaMH extends CoreDaMH {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\


//#region City Wide Care Alarms
  const cityWideCareAlarms = new FormDaMH(
    "cityWideCareAlarms",
    "City Wide Care Alarms",
    "Our emergency care alarm service allows people to get help when they are in difficulty. It helps people to remain safe, secure and independent in and around their homes.",
    "city_wide_care_alarm",
    {
      type: "Apply",
      keywords: ['City Wide Care Alarms','City Wde Care Alarms', 'City Wide Car Alarms', 'Cty Wide Care Alarms', 'City Wide Care Alrms', 'City Wide Care Alarms'],
      categories: ["Disability and Mental Health"],
    },
    { date: "22/01/2025", name: "Nathan Smith" }
  );
//#endregion City Wide Care Alarms



//#region Short Break Grants
  const shortBreakGrants = new ContentDaMH(
    "shortBreakGrants",
    "Short Breaks Grants",
    "Apply for a short break grant",
    `
      <p>
        Warm transfer the call to: <a href="tel:0114 2735068">0114 2735068</a>. If the
        call is not answered raise a case.
      </p>
      <h3>Eligibility</h3>
      <p>Household income is the total income of all people sharing a household.</p>
      <p>
        The easiest way for us to tell if you are eligible to apply is to look if you
        are entitled to free school meals. This does not show us your income, but if a
        family is eligible for free school meals it usually means that they are in
        receipt of certain benefits.
      </p>
      <p>
        If you are not eligible for free school meals, we will ask for evidence of
        other means-tested benefits (listed below):
      </p>
      <ul>
        <li>Income-based Free School Meals</li>
        <li>Income-based Jobseekers Allowance (JSA)</li>
        <li>Income-related Employment and Support Allowance (ESA)</li>
        <li>Income Support</li>
        <li>Pension Credit</li>
        <li>Both Tax Credits (Both Child Tax Credit and Working Tax Credit)</li>
        <li>Housing Benefit</li>
        <li>Council Tax Support</li>
        <li>Universal Credit</li>
        <li>
          Social Fund (Sure Start Maternity Grant, Funeral Payment, Cold Weather
          Payment)
        </li>
      </ul>
      <p>
        If you are not receiving any of the benefits listed, we will ask for evidence
        of your family income. The types of income taken into account are:
      </p>
      <ul>
        <li>PAYE-including commission, bonuses, overtime</li>
        <li>
          Self-employed income (taxable profit for financial year ending between 6
          April 2015 and 5 April 2016)
        </li>
        <li>Income from property</li>
        <li>Pension income</li>
        <li>Other benefits and other income including maintenance payments</li>
        <li>
          Interest from bonds, trusts, bank/building society and any investments
        </li>
        <li>Dividends</li>
      </ul>
      <p>
        Please note that Disability Living Allowance (DLA) and Personal Independence
        Payment (PIP) are non-taxable and therefore not counted as income for
        means-tested benefits. DLA and PIP does not count as part of your household
        income in these proposals.
      </p>
    `,
    { buttonLabel: "Short Breaks", formName: "" },
    { typeKey: "short_breaks_transfered_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Information",
      keywords: [
        "short breaks",
        "short breks",
        "shrt breaks",
        "short brak",
        "short breacks",
        "shrot breaks",
        "shrt",
        "shrot",
        "shor",
        "shourt",
        "shorot",
        "breks",
        "braks",
        "breacks",
        "bracks",
        "breacks",
      ],
      categories: ["disability and mental health"],
    },
    { date: "27/09/2024", name: "Dinah WIlliams" }
  );
  const directPayments = new ContentDaMH(
    "directPayments",
    "Direct Payments",
    "Learn about direct payments and how they can be used to support your care plan.",
    `
      <p>
        A direct payment is a cash payment made to you, or someone on your behalf,
        which you use to pay for things outlined in your support plan.
      </p>
      <p>
        Warm transfer the call to: <a href="tel:0114 2735068">0114 2735068</a>. If the
        call is not answered raise a case.
      </p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "short_breaks_transfered_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Request",
      keywords: [],
      categories: ["Disability and Mental Health"],
    },
    { date: "27/09/2024", name: "Dinah Williams" }
  );

  const fosterCare = new ContentDaMH(
    "fosterCare",
    "Foster Care",
    "Discover how to become a foster carer in Sheffield and access local authority support.",
    `
      <p>
        We have a responsibility as a local authority to provide you with advice and
        support about becoming a foster carer in Sheffield.
      </p>
      <p>
        Warm transfer the call to: <a href="tel:0114 2735068">0114 2735068</a>. If the
        call is not answered raise a case.
      </p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "short_breaks_transfered_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Request",
      keywords: [],
      categories: ["Disability and Mental Health"],
    },
    { date: "27/09/2024", name: "Dinah Williams" }
  );

  const overnightRespite = new ContentDaMH(
    "overnightRespite",
    "Overnight Respite",
    "Learn about short respite services for children with disabilities in Sheffield.",
    `
      <p>
        We provide short respite services for children with disabilities in Sheffield.
      </p>
      <p>
        Warm transfer the call to: <a href="tel:0114 2735068">0114 2735068</a>. If the
        call is not answered raise a case.
      </p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "short_breaks_information_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Request",
      keywords: [],
      categories: ["Disability and Mental Health"],
    },
    { date: "27/09/2024", name: "Dinah Williams" }
  );

  const specialNeedsInclusionPlaycareServices = new ContentDaMH(
    "specialNeedsInclusionPlaycareServices",
    "Special Needs Inclusion Playcare Services",
    "Find out about Special Needs Inclusion Playcare Services (SNIPS) for children requiring additional learning and play support.",
    `
      <p>
        If your child needs special help with their learning, pre-schools or
        nurseries*, we may provide this through a way of helping children called Early
        Years Action.
      </p>
      <p>
        Mainstream or “universal” clubs usually have a number of children attending,
        not all with disabilities, and are open to the general public. Targeted or
        “specialist” clubs are delivered for disabled children only and are not open
        to the general public.
      </p>
      <p>If you are unsure please ask the club or contact your SNIPS mentor.</p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "short_breaks_information_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Request",
      keywords: [],
      categories: ["Disability and Mental Health"],
    },
    { date: "27/09/2024", name: "Dinah Williams" }
  );

  const specialistClubs = new ContentDaMH(
    "specialistClubs",
    "Specialist Clubs",
    "Explore Specialist Clubs designed for children with disabilities, including cost details and payment options.",
    `
      <h3>Affordability</h3>
      <p>
        If you are in receipt of means tested benefits or your household income is
        below £21,000.00 you will not have to pay for the actvity cost. Please
        complete the household income assessment.
      </p>
      <h3>If your child cannot attend a session</h3>
      <p>
        You will still need to pay because the staff are employed for each session to
        support your child, and so the club still has to pay these costs.
      </p>
      <h3>Ways of Paying</h3>
      <p>You will pay the club directly.</p>
      <p>
        Warm transfer the call to: <a href="tel:0114 2735068">0114 2735068</a>. If the
        call is not answered raise a case.
      </p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "short_breaks_information_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Request",
      keywords: [],
      categories: ["Disability and Mental Health"],
    },
    { date: "27/09/2024", name: "Dinah Williams" }
  );


  const universalClubs = new ContentDaMH(
    "universalClubs",
    "Universal Clubs",
    "Learn about Universal Clubs for children, including affordability, payment options, and support availability.",
    `
      <p>
        Warm transfer the call to: <a href="tel:0114 2735068">0114 2735068</a>. If the
        call is not answered raise a case.
      </p>
      <h3>Affordability</h3>
      <p>
        If you are in receipt of means tested benefits or your household income is
        below £21,000.00 you will not have to pay for the activity cost. Please
        complete the household income assessment.
      </p>
      <p>
        If families receive other financial support, some of these might be able to be
        used to help with these costs.
      </p>
      <p>
        If your child attends a club that you find too expensive to pay on an ongoing
        basis you may be able to find a lower cost alternative.
      </p>
      <h3>If your child cannot attend a session</h3>
      <p>
        You will still need to pay because the staff are employed for each session to
        support your child, and so the club still has to pay these costs.
      </p>
      <h3>Ways of Paying</h3>
      <p>You will pay the club directly.</p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "short_breaks_information_to_service" },
    { typeKey: "short_breaks_information_provided" },
    {
      type: "Request",
      keywords: [],
      categories: ["Disability and Mental Health"],
    },
    { date: "27/09/2024", name: "Dinah Williams" }
  );


  const shortBreaks = new MenuDaMH(
    "shortBreaks",
    "Short Breaks Services",
    "Provides numerous services to help and support children with disabilities",
    [
      shortBreakGrants,
      directPayments,
      overnightRespite,
      universalClubs,
      specialistClubs,
      fosterCare,
      specialNeedsInclusionPlaycareServices,
    ]
  );
//#endregion City Wide Care Alarms

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const disabilityAndMentalHealth = new ServiceDaMH(
  "disabilityAndMentalHealth",
  "Disability and Mental Health",
  `Help and support, travel and transport, equipment, children with disabilities, care and carers, mental health services…`,
  [shortBreaks,cityWideCareAlarms]
);
