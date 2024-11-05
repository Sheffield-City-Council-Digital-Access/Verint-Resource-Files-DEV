class CoreB {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceB extends CoreB {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuB extends CoreB {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentB extends CoreB {
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

class FormB extends CoreB {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

//#region Cost of Living

const waysToReduceYourFuelBills = new ContentB(
  "waysToReduceYourFuelBills",
  "Ways to reduce your fuel bills",
  "Description",
  `
    <p>
      If we are more efficient with our home energy use we can reduce our energy 
      bills and do our bit to tackle the climate emergency.
      The information contained on this page is for owner occupiers, 
      landlords and tenants in private, Council or Housing Association properties.
      Private landlords have legal duties and requirements around a minimum level 
      of energy efficiency, more information on this can be found at:
      <a href="https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance#full-publication-update-history" target="_blank">https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance#full-publication-update-history</a> 
    </p>
    <h3>Warm Homes Sheffield</h3>
    <p>
      This is a partnership between Sheffield City Council and energy experts AgilityEco.

      It provides a route to access a number of energy saving programmes that can help 
      Sheffield residents reduce energy use and stay warm and well.
      <a href="https://www.warmhomessheffield.org.uk/" target="_blank">https://www.warmhomessheffield.org.uk/</a> 
      More advice and local support services can be found below.
    </p>
    <h3>Advice on saving energy and lowering your bills</h3>
    <p>
      We have identified a list of resources that you can use in order reduce the costs of your energy bills:
      <ul>
      <li>GOV.UK: how to save energy and lower your bills this winter can be found at: <a href="https://helpforhouseholds.campaign.gov.uk/energy-saving-advice/" target="_blank">https://helpforhouseholds.campaign.gov.uk/energy-saving-advice/</a> </li>
      <li>Get help if you cannot afford your energy bills can be found at: <a href="https://www.ofgem.gov.uk/information-consumers/energy-advice-households/getting-help-if-you-cant-afford-your-energy-bills" target="_blank">https://www.ofgem.gov.uk/information-consumers/energy-advice-households/getting-help-if-you-cant-afford-your-energy-bills</a> </li>
      <li>Understanding Energy Performance Certificates (EPC) can be found at: <a href="https://energysavingtrust.org.uk/advice/guide-to-energy-performance-certificates-epcs/" target="_blank">https://energysavingtrust.org.uk/advice/guide-to-energy-performance-certificates-epcs/</a> </li>
      <li>Quick tips to save energy can be found at: <a href="https://energysavingtrust.org.uk/hub/quick-tips-to-save-energy/" target="_blank">https://energysavingtrust.org.uk/hub/quick-tips-to-save-energy/</a> </li>
      </ul>
    </p>
    <h3>Local and national support services</h3>
    <p>
      There are several support services available that offer further help and advice when it comes to energy saving and money advice.
      The services set out in the list below are not provided by the Council and therefore we cannot give assurances regarding the assistance provided.
    </p>
    <h3>Home Energy Advice: Local Energy Advice Partnership</h3>
    <p>
      Provided by AgilityEco, The Local Energy Advice Partnership (LEAP) provides tailored energy advice based on your needs. 
      It can provide advice on a range of energy related topics including:
      <ul>
      <li>issues with energy suppliers</li>
      <li>use of appliances and heating controls</li>
      <li>energy efficiency in your home</li>
      <li>ways to use less energy</li>
      <li>energy efficiency grant advice</li>
      </ul>
      LEAP can also provide information on benefits, budgeting and debt advice and energy tariff switching. 
      You can access the service online or by calling (freephone) <strong>0800 060 7567</strong> or emailing <a href="mailto:support@applyforleap.org.uk">support@applyforleap.org.uk</a>.
      Local Energy Advice Partnership can be found at: <a href="https://applyforleap.org.uk/" target="_blank">https://applyforleap.org.uk/</a> 
    </p>
    <h3>Citizens Advice Bureau Sheffield</h3>
    <p>
      Citizens Advice Bureau offer an extensive online guide to problems with your energy bill. 
      They can also offer an Energy Affordability Helpline which provides advice for people who may be struggling to pay their energy bills. 
      Contact them on freephone <strong>0800 448 0721</strong> for fuel debt advice and income maximisation.
      Citizens Advice Sheffield: Get help can be found at: <a href="https://citizensadvicesheffield.org.uk/get-help/" target="_blank">https://citizensadvicesheffield.org.uk/get-help/</a> 
    </p>
    <h3>Green Doctor</h3>
    <p>
      Green Doctors, provide specialist advice on how households can reduce their energy bills and make their homes more energy efficient.
      Green Doctors can provide advice on:
      <ul>
      <li>energy bills and fuel debt support</li>
      <li>grants for boilers and insulation</li>
      <li>heating systems and controls</li>
      <li>reducing energy costs in the home</li>
      <li>water bills and debt</li>
      <li>damp/condensation/mould advice</li>
      </ul>
      Green Doctor can be found at: <a href="https://www.groundwork.org.uk/greendoctor/" target="_blank">https://www.groundwork.org.uk/greendoctor/</a> 
    </p>
    <h3>Improve Energy Efficiency Service</h3>
    <p>
      The Improve Energy Efficiency Service is a free Government endorsed service. If you own a property in England or Wales you can get recommendations 
      for home improvements that could make your property cheaper to heat and keep warm. 
      For each recommendation you can see an estimated cost of making the improvement, 
      how much you could save on your bills and next steps if you want to make the improvement. 
      GOV.UK: Improve energy efficiency can be found at: <a href="https://www.gov.uk/improve-energy-efficiency" target="_blank">https://www.gov.uk/improve-energy-efficiency</a> 
    </p>
    <h3>Cost of living support and advice</h3>
    <p>
      Here you can find out the local and national support available to help you manage the cost of living in Sheffield.
      Cost of living support and advice can be found at: <a href="https://www.sheffield.gov.uk/cost-of-living" target="_blank">https://www.sheffield.gov.uk/cost-of-living</a> 
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "cost_of_living_scheme_transferred_to_service" },
  { typeKey: "cost_of_living_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "05/11/2024", name: "Nathan Smith" }
);

const applyForTheHouseholdSupportFund = new ContentB(
  "applyForTheHouseholdSupportFund",
  "Apply for the Household Support Fund",
  "Description",
  `
    <p>
      This is a non-repayable grant to help people living in Sheffield with food and energy costs. It is funded by the UK Government.
      You can apply for help from the fund once every 3 months for help with paying for:
      <ul>
      <li>food</li>
      <li>gas and electricity</li>
      <li>telephone and broadband (phone costs, top-ups, broadband charges etc)</li>
      <li>housekeeping (groceries, toiletries, etc)</li>
      <li>clothing</li>
      <li>wider essential needs not linked to energy and water, should the local authority consider this appropriate in your circumstances</li>
      </ul>
      It cannot be awarded for:
      <ul>
      <li>payment of debts</li>
      <li>mortgage costs</li>
      <li>statutory activities / requirements that either the Council or another public sector organisation is responsible for delivering</li>
      <li>rent or housing arrears under normal circumstances</li>
      <li>clothing</li>
      <li>white goods (visit <a href="https://applyforleap.org.uk/leap-appliances/" target="_blank">https://applyforleap.org.uk/leap-appliances/</a> for support replacing broken or damaged white goods)</li>
      </ul>
      If you need help paying rent or housing arrears, you must apply for Universal Credit, Housing Benefit, a Discretionary Housing Payment or a Homelessness Prevention Grant.
      If you can prove you are ineligible for these benefits, in extreme circumstances we may be able to help with rent arrears or deposits for new tenancies.
      <section class="info-panel" role="region" aria-label="Information panel">
        <p>
          Please be aware that applications to the Household Support Fund can only be made once every three months. This is to ensure that support can continue to be offered throughout the year.
        </p>
      </section>
    </p>
    <h3>What to include with your application</h3>
    <p>
      In most circumstances, we will not require any evidence from you to process your application. If we do require information from you, we'll write to you and request this.
      This could include a recent bank statement for every adult account holder in the household. These bank statements should:
      <ul>
      <li>include the application date</li>
      <li>show at least 30 days of transactions</li>
      <li>be for all accounts held by all adult account holders in the household</li>
      <li>show incoming and outgoing payments and current balances</li>
      <li>show the sort code, account number and account holder name</li>
      <li>be saved in pdf format (not screenshots)</li>
      </ul>
      <section class="info-panel" role="region" aria-label="Information panel">
        <p>
          If you're looking for additional support with your application, we've partnered with a select group of trusted organisations, 
          known as Trusted Assessors, who are ready to assist you. These organisations specialise in various areas, offering their expertise 
          and tailored assistance, both to make your application process smoother and to provide support in their respective fields.
          Our network of Trusted assessors can be found at: <a href="https://www.sheffielddirectory.org.uk/HSF" target="_blank">https://www.sheffielddirectory.org.uk/HSF</a>
        </p>
      </section>
    </p>
    <h3>What happens next</h3>
    <p>
      A council officer will look at all the information on your application before deciding if we can make an award. The information you provide will help us decide: 
      <ul>
      <li>whether you meet the eligibility criteria</li>
      <li>the amount you may be awarded</li>
      </ul>
      If you have provided us with an email address, written confirmation of the decision will be sent to you by email. 
      If you do not have an email address, the decision notice will be sent to your home address by second class post.
      If you have no recourse to public funds, you may in some circumstances be eligible for assistance. 
      Your immigration status will not be affected by any award made under the Household Support Fund.
    </p>
    <h3>If you need to appeal</h3>
    <p>
      If you don’t agree with our decision, you can contact the Household Support Fund team and ask us to look at your application again.
      You must appeal in writing within one month of the date of your decision. 
      You should provide any information you feel may help your application and we’ll review our decision and write to you with 
      the outcome within 28 days of receiving your appeal.
    </p>
  `,
  { buttonLabel: "Apply for the Household Support Fund", formName: "apply_hsf_las" },
  { typeKey: "cost_of_living_scheme_transferred_to_service" },
  { typeKey: "cost_of_living_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "05/11/2024", name: "Nathan Smith" }
);

//#endregion Cost of Living

const whoCanApply = new ContentB(
  "whoCanApply",
  "Who Can Apply",
  "",
  `
    <p>
      You may be able to get a Local Assistance Loan if: You are a Sheffield
      resident and are getting one of the qualifying benefits listed below or are
      assessed to have insufficient income to meet your needs:
      <ul>
      <li>Universal Credit</li>
      <li>Income Support</li>
      <li>Income-based Jobseeker's Allowance</li>
      </ul>
    </p>
    <p>
      Income-related Employment and Support Allowance Any type of Pension Credit,
      and You need help because of an emergency or disaster and the health and
      safety of you or a member of your family will be at serious risk if you do not
      get any money If you are not receiving a qualifying benefit, you will need to
      provide bank statements for the last 3 months in order for us to consider your
      application. These can be provided in person, by post, or via email.
    </p>
    <p>
      If you do not provide these bank statements within the processing time-scale
      of your application, it will be rejected. You haven't been awarded two
      Sheffield Crisis Grants in any 12-month period, regardless of any change in
      circumstances.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const WhatIsItFor = new ContentB(
  "WhatIsItFor",
  "What Is It For",
  "",
  `
    <p>
      Sheffield Crisis Grants are to help people who do not have enough money to
      meet their short-term needs because of an emergency or disaster. They are used
      to prevent serious risk to the health and safety of an individual or a family
      member residing with them.
    </p>
    <p>
      An emergency means an unforeseen event or situation resulting in needs that
      must be met urgently (for example, theft).
    </p>
    <p>
      A disaster is an event of sudden and great misfortune (for example, a major
      fire, flood or, gas explosion). Less serious situations such as a small fire
      in one room or a leak from a washing machine do not qualify as a disaster.
    </p>
    <p>
      Sheffield Crisis Grants cannot be used to help with financial hardship which
      is not the direct result of an emergency or disaster (for example a reduction
      in benefits).
    </p>
    <p>Sheffield Crisis Grant awards do not need to be paid back.</p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howDoesTheApplicationProcessWork = new ContentB(
  "howDoesTheApplicationProcessWork",
  "How does the application process work",
  "",
  `
    <p>
      Applications for Sheffield Crisis Grants can be made by filling in our online
      form
      <a
        href="
    www.sheffield.gov.uk/localassistance"
      >
        Local Assistance.</a
      >
      The form can be filled in on a computer or mobile device. If you apply online
      you will be able to save your application and return to it later if you are
      missing any information.
    </p>
    <p>
      If you do not have internet access at home, you can use the internet for free
      at your local library or at any First Point sites.
    </p>
    <p>The online form comes with guidance and examples to help you complete it.</p>
    <p>
      You will need to have certain information to hand to complete the application.
    </p>
    <p>
      You will be asked to explain what has happened to cause your emergency or
      disaster and to provide details of your financial situation.
    </p>
    <p>
      Some of the information you provide (for example, the benefits you receive)
      will be checked before a decision can be made.
    </p>
    <p>
      If you are applying by telephone you will need to make sure you have this
      information ready before you make the call. If you apply online you will be
      able to save your application and return to it later if you are missing any
      information.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const WhatWillCrisisGrantsBeMadeFor = new ContentB(
  "WhatWillCrisisGrantsBeMadeFor",
  "What will Crisis Grants be made for",
  "",
  `
    <p>
      Sheffield Crisis Grants are generally awarded to cover day-to-day living
      expenses (food, groceries, nappies, money for pay-as-you go fuel meters).
    </p>
    <p>
      In some situations, a Sheffield Crisis Grant could also be used to help with
      accommodation costs (rent in advance for privately rented properties, board
      and lodging or hostel charges) or travel expenses (access to hospital) if
      there is no other way to prevent a serious health and safety risk to you or
      your family.
    </p>
    <p>
      In the event of a disaster a Sheffield Crisis Grant could be used to help with
      items or services other than day-to-day living expenses (for example clothing,
      household items, or travel expenses to enable you to return home if you are
      stranded outside Sheffield as the result of a disaster).
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const WhatWillNotCrisisGrantsBeMadeFor = new ContentB(
  "WhatWillNotCrisisGrantsBeMadeFor",
  "What will Not Crisis Grants be made for",
  "",
  `
    <p>
      It is not intended that a Sheffield Crisis Grant will be awarded to help with
      any of the following expenses:
      <ul>
        <li>Any need which occurs outside the United Kingdom</li>
        <li>An educational or training need including clothing and tools</li>
        <li>
          Distinctive school uniform or sports clothes or equipment of any description
          to be used at school
        </li>
        <li>Travel expenses to or from school</li>
        <li>School meals</li>
        <li>
          Expenses in connection with court (legal) proceedings such as legal fees,
          fines, court fees, costs, damages, subsistence, or travelling expenses
        </li>
        <li>Removal or storage charges</li>
        <li>Domestic assistance and respite care</li>
        <li>Repair to property</li>
        <li>A medical, surgical, optical, aural, or dental item or service</li>
        <li>Work-related expenses</li>
        <li>Debts</li>
        <li>Investments</li>
        <li>Maternity and Funeral Expenses</li>
      </ul>
    </p>
    <p>
      Accommodation charges including meals and services. If an application is made
      for payment in advance to secure accommodation and the accommodation charge
      includes meals and / or services, then the award will be made to cover the
      accommodation charge only.
    </p>
    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howIsTheDecisionMade = new ContentB(
  "howIsTheDecisionMade",
  "How Is The Decision Made",
  "",
  `
    <p>
      A council officer will look at all the information on your application before
      deciding if we can make a payment. You may be awarded less than the amount you
      have asked for.
    </p>
    <p>
      There is only a limited amount of money available for Sheffield Crisis Grants
      so we cannot make a payment in every case. The decision maker has to meet
      priority needs first.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howWillIBeNotifiedOfTheDecision = new ContentB(
  "howWillIBeNotifiedOfTheDecision",
  "How will i be notified of the decision",
  "",
  `
    <p>
      A council officer will look at all the information on your application before
      deciding if we can make a payment. You may be awarded less than the amount you
      have asked for.
    </p>
    <p>
      There is only a limited amount of money available for Sheffield Crisis Grants,
      so we cannot make a payment in every case. The decision maker has to meet
      priority needs first.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const WhatIfIDisagreeWithTheDecision = new ContentB(
  "WhatIfIDisagreeWithTheDecision",
  "What if i disagree with the decision",
  "",
  `
    <p>
      If you are unhappy with the outcome of your application, you may request a
      review of the decision. Review requests should be submitted in writing by post
      or email, within one calendar month of the date on the decision notice:
    </p>
    <address>
      FAO Local Assistance Scheme<br />
      3rd Floor<br />
      Howden House<br />
      1 Union Street<br />
      Sheffield<br />
      S1 2SH<br />
    </address>
   `,

  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howWillIGetMySheffieldCrisisGrant = new ContentB(
  "howWillIGetMySheffieldCrisisGrant",
  "What if I disagree with the decision",
  "",
  `
    <p>
      Sheffield Crisis Grants will be administered by the Cashiers service based in
      Howden House. You will be advised of the payment process and required
      identification documents by the adviser or officer who has processed your
      application.
    </p>
    <p>
      The first exception to this is for Rent in Advance awards, which will be made
      directly to the landlord or letting agent via BACS transfer.
    </p>
    <p>
      The second exception to this is for Household Goods (except for ovens and
      washing machines for non-Council tenants) awarded in Disaster situations,
      which will be delivered through the Furnished Accommodation team within the
      Council. If an award is made for a Washing Machine or either a Gas or Electric
      Oven and you do not live in a Council tenancy, a payment will be made via
      Cashiers instead.
      <ul>
        <li>I.D. for Cashiers</li>
        <li>
          One of the following or one of the following plus one of the following
        </li>
        <li>
          Passport Paper Driving Licence Council Tax Letter (dated within last 3
          months)
        </li>
        <li>
          Driving Licence Card Benefit letter (dated within last 3 months) Bank or
          Credit Card Statement (dated within last 3 months, not from internet)
        </li>
        <li>
          National Identity Card EU Member State Card Utility Bill (dated within last
          3 months, not from internet)
        </li>
        <li>
          ID Card (Northern Ireland Electoral Office) Inland Revenue Tax Notification
        </li>
        <li>Residence Permit</li>
      </ul>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const fraudulentClaims = new ContentB(
  "fraudulentClaims",
  "Fraudulent Claims",
  "",
  `
    <p>
      The Council, to ensure that limited resources are most effectively used to
      meet need, is committed to taking action against fraudulent claims for
      assistance. Where the Council is satisfied that the Applicant has made a
      fraudulent claim, for example, by falsely declaring their circumstances,
      providing a false statement or evidence in support of their application, it
      will take appropriate action, including prosecution.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const whoCanApplyForIndependenceGrant = new ContentB(
  "whoCanApplyForIndependenceGrant",
  "Who Can Apply For Independence Grant",
  "",
  `
    <p>You may be able to get a Sheffield Independence Grant if:</p>
    <p>You are a Sheffield resident, and:</p>
    <p>
      You are getting one of the qualifying benefits listed below or are assessed to
      have insufficient income to meet your needs:
      <ul>
        <li>Universal Credit</li>
        <li>Income Support</li>
        <li>Income-based Jobseeker's Allowance</li>
        <li>Income-related Employment and Support Allowance</li>
        <li>
          Any type of Pension Credit, and You need help for one of the reasons
          described in the “What is it for?” section (below), and You cannot meet the
          cost by any other means
        </li>
        <ul>
          <p>
            If you are not receiving qualifying benefit, you will need to provide bank
            statements for the last 3 months for us to consider your application.
            These can be provided in person, by post or via email.
          </p>
          <p>
            If you do not provide these bank statements within the processing
            time-scale of your application, it will be rejected.
          </p>
          <p>
            You can only be awarded one Sheffield Independence Grant in a rolling
            12-month period, regardless of any change in circumstances.
          </p>
        </ul>
      </ul>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const WhatIndependanceGrantInformationIsItFor = new ContentB(
  "wWhatIndependanceGrantInformationIsItFor",
  "What Independance Grant Information Is It For",
  "",
  `
    <p>
      Sheffield Independence Grants are to support independent living in the
      community. A Sheffield Independence Grant can help:
      <ul>
        <li>
          You, a member of your family, someone you look after or someone you will be
          looking after, to return to the community from care
        </li>
        <li>
          You, a member of your family, someone you look after or someone you will be
          looking after, to return to the community from prison
        </li>
        <li>
          You, a member of your family, someone you look after or someone you will be
          looking after, to stay in the community instead of going into care
        </li>
        <li>Ease exceptional pressure on individuals and families *</li>
        <li>
          You or your partner look after someone on leave from prison or a young
          offender’s institution on a temporary licence
        </li>
        <li>
          You to set up home as part of a planned resettlement programme if you have
          had an unsettled way of life
        </li>
      </ul>
    </p>
    <p>
      It can also be used to help with certain travel expenses in the UK. The
      journey could be:
      <ul>
        <li>To visit a close friend or family member who is ill</li>
        <li>To attend a relative’s funeral</li>
        <li>
          To visit a child who is being looked after by another parent while awaiting
          a court decision
        </li>
        <li>To ease a domestic crisis, or</li>
        <li>To move to suitable accommodation.</li>
        <li>Sheffield Independence Grants do not have to be paid back.</li>
      </ul>
    </p>
    <p>
      *All individuals and families on low incomes face pressures. Exceptional
      pressure means a situation which causes additional pressure on an individual
      or family. Examples of this could be a relationship breakdown, having to cope
      with new health problems or existing health problems suddenly getting worse.
    </p>
  `,

  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howDoesTheIndependanceGrantInformationApplicationProcessWork =
  new ContentB(
    "howDoesTheIndependanceGrantInformationApplicationProcessWork",
    "How Does The Independance Grant Information Application Process Work",
    "Description",
    `
      <p>
        Applications for Sheffield Independence Grants should be made by filling in
        our online form. You can do this in one of two ways:
        <ul>
          <li>
            Self Service. You can fill in the form yourself on our website:
            <a href="https://www.sheffield.gov.uk/localassistance">Local Assistance</a>. The
            form can be filled in on a computer or mobile device.
          </li>
          <li>
            If you do not have internet access at home, you can use the internet for
            free at your local library or at any First Points.
          </li>
          <li>
            The online form comes with guidance and examples to help you complete it.
          </li>
          <li>
            There are also advice services throughout the city who can support you to
            apply online.
          </li>
          <li>
            Assisted Self Service. If you have a key worker, they will be able to advise
            you on the process and help you with your application.
          </li>
          <li>
            A key worker is someone, who is providing you with professional support.
            Examples of key workers are Social Workers, Tenancy Support Workers, Housing
            Support Workers, Mental Health Workers, Probation Officers, Drug & Alcohol
            Support Workers (these are examples only – not an exhaustive list).
          </li>
          <li>
            If you have no support and are not able to access the internet (for example,
            because you are in hospital), you can request a paper form.
          </li>
        </ul>
      </p>
    `,

    { buttonLabel: "", formName: "" },
    { typeKey: "local_assistance_scheme_transferred_to_service" },
    { typeKey: "local_assistance_scheme_information_provided" },
    { type: "Information", keywords: [], categories: ["benefits"] },
    { date: "25/09/2024", name: "George Whitehouse" }
  );

const WhatWillIndepedenceGrantsBeMadeFor = new ContentB(
  "WhatWillIndepedenceGrantsBeMade",
  "What will Indepedence Grants be made for",
  "",
  `
    <p>
      It is not intended that a Sheffield Crisis Grant will be awarded to help with
      any of the following expenses:
    </p>
    <p>
      Sheffield Independence Grants are generally awarded to help buy household
      items such as white goods (for example, fridges, ovens and washing machines),
      essential cooking equipment, seating, carpets, curtains, beds and bedding.
    </p>
    <p>
      Under some circumstances a Sheffield Independence Grant could also be awarded
      to help with:
      <ul>
        <li>Repair of household items</li>
        <li>
          Removal and Storage Expenses including reconnection of moved appliances
        </li>
        <li>Improvement to living conditions (redecoration or minor repairs)</li>
        <li>Utility connection charges / installation of prepayment meters</li>
        <li>Travel expenses to hospital for appointments</li>
        <li>
          Certain other travel expenses (including an overnight stay if this is
          essential) as described in the “What is it for?” section (above) Travel
          expenses
        </li>
        <li>Clothing</li>
        <li>
          We will not pay for items provided in furnished tenancies by your landlord.
          If you are a tenant, your landlord is responsible for repairs and
          maintenance of items they have provided.
        </li>
        <li>
          Please check with them and your tenancy agreement first, as we will not be
          able to pay for items your landlord is responsible for.
        </li>
        <li>
          If you are a council tenant, you can contact the Council Housing Service.
        </li>
        <li>
          If you are unsure about your rights as a tenant, you can contact Housing
          Aid.
        </li>
      </ul>
    </p>
   `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const WhatWillNotIndependenceGrantsBeMadeFor = new ContentB(
  "WhatWillIndepedenceGrantsBeMade",
  "What will Independence Grants be made for",
  "",
  `
    <p>
      <ul>
        <li>
          The cost of buying, renting or installing a telephone or any call charges.
        </li>
        <li>
          The cost of fuel consumption and any associated standing charges (gas or
          electricity bills).
        </li>
        <li>Council tax or water charges or arrears.</li>
        <li>
          Any housing costs, including repairs or improvements to your home (unless
          very minor), deposits to secure accommodation, rent, mortgage payments,
          service costs and all other charges for accommodation (whether or not that
          charge includes payment for meals and/or services).
        </li>
        <li>
          Any item or service which the Local Authority has a statutory duty to
          provide.
        </li>
        <li>Maternity or Funeral expenses.</li>
        <li>Rent in advance for people leaving care.</li>
        <li>
          Daily living expenses such as food and groceries unless these are additional
          expenses because you or your partner are looking after a prisoner or young
          offender on temporary licence.
        </li>
        <li>This list is not exhaustive.</li>
      </ul>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howLongDoesItTakeToGetADecision = new ContentB(
  "howLongDoesItTakeToGetADecision",
  "How long does it take to get a decision",
  "",
  `
    <p>
      A decision will be made about your Sheffield Independence Grant within 15
      working days of us receiving a fully completed application. It will be decided
      whether your financial circumstances merit the provision of assistance.
    </p>
    <p>
      When deciding whether to award a Sheffield Independence Grant, we need to take
      into account how much money is left in the budget.
    </p>
    <p>
      Where a Sheffield Independence Grant is awarded, it will be paid to help you
      meet identified needs that reflect the aims of the scheme. (as explained in
      the “What is it for?” section).
    </p>
    <p>
      We will take into account any savings you have in deciding how much you will
      be awarded.
    </p>
    <p>
      The council officer may contact other people who have been working with you.
      (for example, a social worker or tenancy support worker) to help them make the
      right decision. You will be asked to give permission for them to do this in
      your application.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howWillIBeNotifiedOfTheDecisionForIndepenceGrantInformation =
  new ContentB(
    "howWillIBeNotifiedOfTheDecisionForIndepenceGrantInformation",
    "How will I be notified of the decision For Indepence Grant Information",
    "",
    `
      <p>
        If you have provided us with an email address, written confirmation of the
        decision will be sent to you by email. If you do not have an email address,
        the decision notice will be sent to your home address by second-class post.
      </p>
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "local_assistance_scheme_transferred_to_service" },
    { typeKey: "local_assistance_scheme_information_provided" },
    { type: "Information", keywords: [], categories: ["benefits"] },
    { date: "25/09/2024", name: "George Whitehouse" }
  );

const whatIfIDisagreeWithTheIndependenceGrantdecision = new ContentB(
  "whatIfIDisagreeWithTheIndependenceGrantdecision",
  "What if i disagree with the decision the Independence Grant decision",
  "",
  `
    <p>
      If you are unhappy with the outcome of your application, you may request a
      review of the decision. Review requests should be submitted in writing by post
      or email, within one calendar month of the date on the decision notice:
      <address>
        FAO Local Assistance Scheme<br />
        3rd Floor<br />
        Howden House<br />
        1 Union Street<br />
        Sheffield<br />
        S1 2SH<br />
      </address>
      <p><a href="mailto:LAS@sheffield.gov.uk">LAS@sheffield.gov.uk</a></p>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howWillIGetMySheffieldIndependanceGrant = new ContentB(
  "howWillIGetMySheffieldIndependanceGrant",
  "How will I get my Sheffield Independance Grant",
  "",
  `
    <p>
      Household goods (except for ovens and washing machines for non-Council
      tenants) will be delivered through the Furnished Accommodation team within the
      Council. If an award is made for a Washing Machine or either a Gas or Electric
      Oven and you do not live in a Council tenancy, a payment will be made via BACS
      directly into your bank account instead.
    </p>
    <p>
      Please note that the Furnished Accommodation team are not responsible for the
      maintenance or repair of any items delivered on behalf of the Local Assistance
      Scheme.
    </p>
    <p>
      Travel awards will be issued as advance tickets for buses and trams through
      the Cashiers service in Howden House or arrangements will be made by the back
      office team for trains and taxis. Awards for removals will still be issued as
      cash but will be sent directly to the removal company.
    </p>
    <p>
      Sheffield Independence Grants must be used to pay for the items we have agreed
      to fund, and you should keep receipts as proof of purchase. We may contact you
      to provide these.
    </p>
    <p>
      Sheffield Independence Grants do not need to be paid back. I.D. for Cashiers
    </p>
    <p>One of the Following Or one of the following Plus one of the following:
      <ul>
        <li>
          Passport Paper Driving Licence Council Tax Letter (dated within last 3
          months)
        </li>
        <li>
          Driving Licence Card Benefit letter (dated within last 3 months) Bank or
          Credit Card Statement (dated within last 3 months, not from internet)
        </li>
        <li>
          National Identity Card EU Member State Card Utility Bill (dated within last
          3 months, not from internet)
        </li>
        <li>
          ID Card (Northern Ireland Electoral Office) Inland Revenue Tax Notification
          Residence Permit
        </li>
      </ul>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const fraudulentClaimsForIndependanceGrants = new ContentB(
  "fraudulentClaimsForIndependanceGrants",
  "Fraudulent Claims For Independance Grants",
  "",
  `
    <p>
      The Council, to ensure that limited resources are most effectively used to
      meet need, is committed to taking action against fraudulent claims for
      assistance. Where the Council is satisfied that the Applicant has made a
      fraudulent claim, for example, by falsely declaring their circumstances,
      providing a false statement or evidence in support of their application, it
      will take appropriate action, including prosecution.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const generalInformation = new ContentB(
  "generalInformation",
  "General Information",
  "",
  `
    <p>
      Residents facing hardship are currently able to apply for a Household Support
      fund nonerepayable grant if they are unable to meet the costs of food, energy
      or wider essentials.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "26/09/2024", name: "George Whitehouse" }
);

const eligibilityCriteria = new ContentB(
  "eligibilityCriteria",
  "Eligibility Criteria",
  "",
  `
    <p>
      Are on a qualifying means tested benefit or are able to evidence that you are
      unable to meet essential costs.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "25/09/2024", name: "George Whitehouse" }
);

const howDoIApply = new ContentB(
  "howDoIApply",
  "How do I apply",
  "",
  `
    <p>
      Applications can be made on our website at
      <a href="www.sheffield.gov.uk/cost-of-living">Cost of Living</a>, if you need
      assistance to apply, you can call the Community Helpline on 01142734567
      (option 0)
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "26/09/2024", name: "George Whitehouse" }
);

const otherSupportAvailable = new ContentB(
  "otherSupportAvailable",
  "Other Support Available",
  "",
  `
    <p>
      If a caller does not meet the eligibility criteria you should consider whether
      there are other hardship payments or support available to them (for example, a
      discretionary housing payment), or whether other support can be offered with
      regards to income maximisation food or utility support via the Community
      Support Helpline. br> You should also consider signposting the caller to other
      services such as the Council Tax helpline and Council Housing if they are a
      Council tenant, to discuss whether any support can be given with regards to
      repayment of Rent or Council Tax.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "26/09/2024", name: "George Whitehouse" }
);

const howLongDoesItTakeToGetADecisionForHouseholdSupportFund = new ContentB(
  "howLongDoesItTakeToGetADecisionForHouseholdSupportFund",
  "What If I Disagree With The Decision For Household Support Fund",
  "",
  `
    <p>
      On average, a decision will be made about your Household Support Fund
      application within 3 working days of us receiving a fully completed
      application, it will be decided whether your financial circumstances merit the
      provision of assistance.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "26/09/2024", name: "George Whitehouse" }
);

const WhatIfIDisagreeWithTheDecisionForHouseholdSupportFund = new ContentB(
  "WhatIfIDisagreeWithTheDecisionForHouseholdSupportFund",
  "What if I disagree with the decision",
  "",
  `
    <p>
      If you disagree with a decision about your application, you can request that
      the decision is reviewed by emailing
      <a href="HSF@sheffield.gov.uk">HSF@sheffield.gov.uk</a>, or by calling the
      Community Helpline on 0114 2734567 (option 0)
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "26/09/2024", name: "George Whitehouse" }
);

const howillIGetMyHouseholdSupportFundPayment = new ContentB(
  "howillIGetMyHouseholdSupportFundPayment",
  "How will I get my Household Support Fund payment",
  "Description",
  `
    <p>
      Unless requested otherwise, you will receive a text or email from PayPoint.
      This email or text will contain a link and instructions to allow you to add
      the funds to your bank account or obtain cash at any PayPoint shop. You can
      request that funds are paid to your bank account by BACS if you would prefer
      this.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "26/09/2024", name: "George Whitehouse" }
);

const fraudulentClaimsForHouseholdSupportFund = new ContentB(
  "fraudulentClaimsForHouseholdSupportFund",
  "Fraudulent Claims For Household Support Fund",
  "",
  `
    <p>
      The Council, to ensure that limited resources are most effectively used to
      meet need, is committed to taking action against fraudulent claims for
      assistance. Where the Council is satisfied that the Applicant has made a
      fraudulent claim, for example by falsely declaring their circumstances,
      providing a false statement or evidence in support of their application, it
      will take appropriate action, including prosecution.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "local_assistance_scheme_transferred_to_service" },
  { typeKey: "local_assistance_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "26/09/2024", name: "George Whitehouse" }
);

// const localAssistantScheme = new MenuB(
//   "localAssistantScheme",
//   "Local Assistant Scheme",
//   "The Local Assistance Scheme (LAS) provides Sheffield Independence Grants to support independent living and Sheffield Crisis Grants to help Sheffield residents in crisis situations who aren't receiving help",
//   [independanceGrantInformation, householdSupportFund]
// );

const costOfLiving = new MenuB(
  "costOfLiving",
  "Cost of Living",
  "Description",
  [
    waysToReduceYourFuelBills,
    // findFoodSupportInSheffield,
    applyForTheHouseholdSupportFund,
    // mapOfWelcomePlacesInSheffield,
    // moneySupport,
    // foodSupport,
    // energySupport,
    // howYouCanHelpYourCommunity,
    // supportForBusinesses,
    // travelSupport,
    // employmentSupport,
    // welcomePlaces
  ]
);

const crisisGrantInformation = new MenuB(
  "crisisGrantInformation",
  "Crisis Grant Information",
  "Discreption",
  [
    whoCanApply,
    WhatIsItFor,
    howDoesTheApplicationProcessWork,
    WhatWillCrisisGrantsBeMadeFor,
    WhatWillNotCrisisGrantsBeMadeFor,
    howIsTheDecisionMade,
    howWillIBeNotifiedOfTheDecision,
    WhatIfIDisagreeWithTheDecision,
    howWillIGetMySheffieldCrisisGrant,
    fraudulentClaims,
  ]
);

const independanceGrantInformation = new MenuB(
  "independanceGrantInformation",
  "Independance Grant Information",
  "Discreption",
  [
    WhatIndependanceGrantInformationIsItFor,
    howDoesTheIndependanceGrantInformationApplicationProcessWork,
    howLongDoesItTakeToGetADecision,
    howWillIBeNotifiedOfTheDecisionForIndepenceGrantInformation,
    whatIfIDisagreeWithTheIndependenceGrantdecision,
    howWillIGetMySheffieldIndependanceGrant,
    fraudulentClaimsForIndependanceGrants,
  ]
);

const householdSupportFund = new MenuB(
  "householdSupportFund",
  "Household Support Fund",
  "Discreption",
  [
    generalInformation,
    eligibilityCriteria,
    howDoIApply,
    otherSupportAvailable,
    howLongDoesItTakeToGetADecisionForHouseholdSupportFund,
    howillIGetMyHouseholdSupportFundPayment,
    fraudulentClaimsForHouseholdSupportFund,
  ]
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const benefits = new ServiceB(
  "benefits",
  "Benefits",
  `Housing Benefit, Council Tax Support, budgeting, local assistance grants and loans, benefits calculator, appeals…`,
  [costOfLiving, crisisGrantInformation, independanceGrantInformation, householdSupportFund]
);
