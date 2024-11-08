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
    <p>
      LEAP can also provide information on benefits, budgeting and debt advice and energy tariff switching. 
      You can access the service online or by calling (freephone) <strong>0800 060 7567</strong> or emailing <a href="mailto:support@applyforleap.org.uk">support@applyforleap.org.uk</a>.
      Local Energy Advice Partnership can be found at: <a href="https://applyforleap.org.uk/" target="_blank">https://applyforleap.org.uk/</a> 
    </p>
    <h3>Citizens Advice Bureau Sheffield</h3>
    <p>
      Citizens Advice Bureau offer an extensive online guide to problems with your energy bill. 
      They can also offer an Energy Affordability Helpline which provides advice for people who may be struggling to pay their energy bills. 
      Contact them on freephone <strong>0800 448 0721</strong> for fuel debt advice and income maximisation.
    </p>
    <p>
      Citizens Advice Sheffield: Get help can be found at: <a href="https://citizensadvicesheffield.org.uk/get-help/" target="_blank">https://citizensadvicesheffield.org.uk/get-help/</a> 
    </p>
    <h3>Green Doctor</h3>
    <p>
      Green Doctors, provide specialist advice on how households can reduce their energy bills and make their homes more energy efficient.
    </p>
      Green Doctors can provide advice on:
      <ul>
        <li>energy bills and fuel debt support</li>
        <li>grants for boilers and insulation</li>
        <li>heating systems and controls</li>
        <li>reducing energy costs in the home</li>
        <li>water bills and debt</li>
        <li>damp/condensation/mould advice</li>
      </ul>
    <p>
      Green Doctor can be found at: <a href="https://www.groundwork.org.uk/greendoctor/" target="_blank">https://www.groundwork.org.uk/greendoctor/</a> 
    </p>
    <h3>Improve Energy Efficiency Service</h3>
    <p>
      The Improve Energy Efficiency Service is a free Government endorsed service. If you own a property in England or Wales you can get recommendations 
      for home improvements that could make your property cheaper to heat and keep warm. 
      For each recommendation you can see an estimated cost of making the improvement, 
      how much you could save on your bills and next steps if you want to make the improvement.
    </p>
    <p>
      GOV.UK: Improve energy efficiency can be found at: <a href="https://www.gov.uk/improve-energy-efficiency" target="_blank">https://www.gov.uk/improve-energy-efficiency</a> 
    </p>
    <h3>Cost of living support and advice</h3>
    <p>
      Here you can find out the local and national support available to help you manage the cost of living in Sheffield.
    </p>
    <p>
      Cost of living support and advice can be found at: <a href="https://www.sheffield.gov.uk/cost-of-living" target="_blank">https://www.sheffield.gov.uk/cost-of-living</a> 
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "cost_of_living_scheme_transferred_to_service" },
  { typeKey: "cost_of_living_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "05/11/2024", name: "Nathan Smith" }
);

const findFoodSupportInSheffield = new ContentB(
  "findFoodSupportInSheffield",
  "Find food support in Sheffield",
  "Description",
  `
    <p>
      Food support in Sheffield can be found at: <a href="https://www.sheffield.gov.uk/cost-of-living/find-food-support-sheffield" target="_blank">https://www.sheffield.gov.uk/cost-of-living/find-food-support-sheffield</a>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "cost_of_living_scheme_transferred_to_service" },
  { typeKey: "cost_of_living_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "06/11/2024", name: "Nathan Smith" }
);

const applyForTheHouseholdSupportFund = new ContentB(
  "applyForTheHouseholdSupportFund",
  "Apply for the Household Support Fund",
  "Description",
  `
    <p>
      This is a non-repayable grant to help people living in Sheffield with food and energy costs. It is funded by the UK Government.
      You can apply for help from the fund once every 3 months for help with paying for:
    </p>
    <p>
      <ul>
        <li>food</li>
        <li>gas and electricity</li>
        <li>telephone and broadband (phone costs, top-ups, broadband charges etc)</li>
        <li>housekeeping (groceries, toiletries, etc)</li>
        <li>clothing</li>
        <li>wider essential needs not linked to energy and water, should the local authority consider this appropriate in your circumstances</li>
      </ul>
    </p>
    <p>
      It cannot be awarded for:
    </p>
    <p>
      <ul>
        <li>payment of debts</li>
        <li>mortgage costs</li>
        <li>statutory activities / requirements that either the Council or another public sector organisation is responsible for delivering</li>
        <li>rent or housing arrears under normal circumstances</li>
        <li>clothing</li>
        <li>white goods (visit <a href="https://applyforleap.org.uk/leap-appliances/" target="_blank">https://applyforleap.org.uk/leap-appliances/</a> for support replacing broken or damaged white goods)</li>
      </ul>
    </p>
    <p>
      If you need help paying rent or housing arrears, you must apply for Universal Credit, Housing Benefit, a Discretionary Housing Payment or a Homelessness Prevention Grant.
      If you can prove you are ineligible for these benefits, in extreme circumstances we may be able to help with rent arrears or deposits for new tenancies.
    </p>
    <p>
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
    </p>
    <p>
      <ul>
        <li>include the application date</li>
        <li>show at least 30 days of transactions</li>
        <li>be for all accounts held by all adult account holders in the household</li>
        <li>show incoming and outgoing payments and current balances</li>
        <li>show the sort code, account number and account holder name</li>
        <li>be saved in pdf format (not screenshots)</li>
      </ul>
    </p>
    <p>
      <section class="info-panel" role="region" aria-label="Information panel">
        <p>
          If you're looking for additional support with your application, we've partnered with a select group of trusted organisations, 
          known as Trusted Assessors, who are ready to assist you. These organisations specialise in various areas, offering their expertise 
          and tailored assistance, both to make your application process smoother and to provide support in their respective fields.
        </p>
        <p>
          Our network of Trusted assessors can be found at: <a href="https://www.sheffielddirectory.org.uk/HSF" target="_blank">https://www.sheffielddirectory.org.uk/HSF</a>
        </p>
      </section>
    </p>
    <h3>What happens next</h3>
    <p>
      A council officer will look at all the information on your application before deciding if we can make an award. The information you provide will help us decide: 
    </p>
    <p>
      <ul>
        <li>whether you meet the eligibility criteria</li>
        <li>the amount you may be awarded</li>
      </ul>
    </p>
    <p>
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

const mapOfWelcomePlacesInSheffield = new ContentB(
  "mapOfWelcomePlacesInSheffield",
  "Map of Welcome Places in Sheffield",
  "Description",
  `
    <p>
      A map of Welcome Places in Sheffield can be found at: <a href="https://www.vas.org.uk/sheffield-living-crisis-map-of-support/" target="_blank">https://www.vas.org.uk/sheffield-living-crisis-map-of-support/</a>
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "cost_of_living_scheme_transferred_to_service" },
  { typeKey: "cost_of_living_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "06/11/2024", name: "Nathan Smith" }
);

const moneySupport = new ContentB(
  "moneySupport",
  "Money support",
  "Description",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Discretionary Housing Payment and Council Tax Hardship Scheme</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The Discretionary Housing Payment (DHP) scheme can help you if you get Housing Benefit or Universal Credit, 
      but you still need help to pay your rent. If you get Council Tax Support (CTS) you can also get help to pay 
      your Council Tax under the Council Tax Hardship Scheme (CTHS).
    </p>
      <section class="alert-panel--ineligible" role="alert" aria-label="Alert panel">
        <p>
          Changes to our IT systems may cause delays in processing changes to housing benefit claims, discretionary housing payments, 
          requests for Council Tax support and council tax hardship scheme awards.
          We apologise for any inconvenience this may cause you.
        </p>
      </section>
      <h3>What DHP can't help with</h3>
    <p>
      There are some charges that DHP can’t cover including:
    </p>
    <p>
      <ul>
        <li>service charges like heating or hot water</li>
        <li>charges for water rates</li>
        <li>charges for tenants levy</li>
      </ul>
    </p>
      <h3>How much we can award and how long the award lasts</h3>
    <p>
      The amount of DHP we can award and how long the award lasts depends on your own circumstances. You must be able to show that you need extra help to meet your housing costs.
      The amount of CTHS we can award depends upon your circumstances, and in most cases, the award you receive will be made for the current financial year.
      DHP and CTHS come from a fixed pot of money, so we try to give the extra help to people who need it most. Once we’ve spent the money in the pot, no further awards can be made.
    </p>
      <h3>How we pay</h3>
    <p>
      If you’re a Council tenant, we’ll pay your DHP directly to your rent account. If you’re a private tenant, we’ll pay your DHP in the same way as your Housing Benefit.
      If you’re in receipt of Universal Credit, we will make the payment directly to you, or your landlord.
      If you’re awarded CTHS, we’ll reduce your Council Tax and send you a new bill for a lower amount.
    </p>
      <h3>The application process</h3>
    <p>
      You need to provide as much information as you can about how much you spend each week on items like food, bills, clothes, your children and travel.
      You don’t have to provide details of your income as we get this from your Housing Benefit claim. When we receive your application form and have checked your 
      supporting information we’ll write to you with a decision.
    </p>
      <h3>If you need to appeal</h3>
    <p>
      If you don’t agree with our decision you can contact the Discretionary Payment Team and ask us to look at your application again.
      You must appeal within one month of the date of your decision letter. You should provide any information you feel may help your 
      application and we’ll review our decision and write to you with the outcome.
    </p>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>How to apply for Universal Credit</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      Universal Credit is a single benefit that has been introduced to replace the current six-benefit system. 
      It is designed to assist working-age individuals with low incomes, or those who are unemployed. 
      This benefit aims to provide support for people to prepare for work, find employment, or increase their earnings.
    </p>
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
        If you have previously been receiving any of the following six benefits, you will stop receiving these and be moved over to Universal Credit:
      </p>
      <p>
        <ul>
        <li>Housing Benefit</li>
        <li>Income-related Employment and Support Allowance (ESA)</li>
        <li>Income-based Jobseeker's Allowance (JSA)</li>
        <li>Child Tax Credit</li>
        <li>Working Tax Credit</li>
        <li>Income Support</li>
        </ul>
      </p>
      <p>
        You can find more information on what to do if you receive a Migration Notice at:
        <a href="https://www.sheffield.gov.uk/benefits/what-do-if-you-receive-migration-notice" target="_blank">https://www.sheffield.gov.uk/benefits/what-do-if-you-receive-migration-notice</a>
      </p>
    </section>
      <h3>Who is eligible</h3>
      <p>
        You may be entitled to Universal Credit if you are:
      </p>
      <p>
        <ul>
          <li>on a low income</li>
          <li>out of work</li>
          <li>unable to work</li>
          <li>not already in receipt of any benefits</li>
        </ul>
      </p>
      <p>
          You can use the following calculator to check whether you would be entitled to Universal Credit: <a href="https://www.entitledto.co.uk/benefits-calculator/" target="_blank">https://www.entitledto.co.uk/benefits-calculator/</a>
      </p>
      <p>
        If you are still unsure you should seek advice from a benefits advisor at your local DWP office or Job Centre. You can find this at:  
        <a href="https://find-your-nearest-jobcentre.dwp.gov.uk/search.php" target="_blank">https://find-your-nearest-jobcentre.dwp.gov.uk/search.php</a>
      </p>
      <p>
        You can also contact the Citizens Advice for money, debt advice and whether Universal Credit is right for you, 
        by visiting their website or calling the Help to Claim line on <strong>0800 144 8444</strong>.
      </p>
      <p>
        You can contact Citizens Advice at: 
        <a href="https://www.citizensadvice.org.uk/benefits/universal-credit/before-you-apply/Check-if-you-can-get-Universal-Credit/" target="_blank">https://www.citizensadvice.org.uk/benefits/universal-credit/before-you-apply/Check-if-you-can-get-Universal-Credit/</a>
      </p>
      <h3>How much you could receive</h3>
      <p>
      The amount you receive will depend on:
      </p>
      <p>
        <ul>
          <li>your (or your partner's) income and savings</li>
          <li>your (or your partner's) age(s)</li>
          <li>circumstances (such as children, a couple or single)</li>
          <li>if you or your partner are incapable of work or a carer</li>
          <li>if you have housing costs, like rent</li>
          <li>your entitlement to a transitional amount</li>
        </ul>
      </p>
      <h3>How Universal Credit is paid</h3>
      <p>
        Universal Credit is paid monthly in arrears. If you think that you will struggle 
        while you are waiting for your first payment of Universal Credit, you can ask the DWP for a short-term advance.
        You may be able to have your Universal Credit paid more frequently than monthly, or have it paid direct to your landlord.
      </p>
      <h3>How to apply for Universal Credit</h3>
      <p>
        You can apply for Universal Credit on the government website.
        In order to claim Universal Credit you will need to sign a claimant commitment when you make your first claiming. 
        This is a signed record of what you agree to do whilst in receipt of Universal Credit.
      </p>
      <p>
        You can apply for Universal Credit at: 
        <a href="https://www.gov.uk/universal-credit/how-to-claim" target="_blank">https://www.gov.uk/universal-credit/how-to-claim</a>
        Find out how Universal Credit could help you at: 
        <a href="https://ucmove.campaign.gov.uk/" target="_blank">https://ucmove.campaign.gov.uk/</a>
      </p>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Sheffield Credit Union</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      You can find out more information about the Sheffield Credit Union at: 
      <a href="https://sheffieldcreditunion.com/" target="_blank">https://sheffieldcreditunion.com/</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Healthy Start Scheme: get help to buy food and milk</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      You can find out more information about the Healthy Start Scheme at: 
      <a href="https://www.healthystart.nhs.uk/" target="_blank">https://www.healthystart.nhs.uk/</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Get help with your transport if you are referred to hospital</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      If you have a referral to a specialist or a hospital for
      NHS treatment or tests and you are on benefits or
      allowances you could claim travel costs.
      To claim, take your travel receipts, appointment
      letter or card, plus proof that you're receiving one of
      the qualifying benefits, to a nominated cashiers'
      office in the hospital/clinic.
    </p>
    <p>
      More information about getting help with transport if you are referred to hospital at: 
      <a href="https://www.nhs.uk/nhs-services/help-with-health-costs/healthcare-travel-costs-scheme-htcs/" target="_blank">https://www.nhs.uk/nhs-services/help-with-health-costs/healthcare-travel-costs-scheme-htcs/</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Apply for Housing Benefit</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <section class="alert-panel--ineligible" role="alert" aria-label="Alert panel">
    <p>
        Changes to our IT systems may cause delays in processing changes to housing benefit claims, 
        discretionary housing payments, requests for Council Tax support and council tax hardship scheme awards.
        We apologise for any inconvenience this may cause you.
    </p>
    </section>
    <p>
    If you’re on a low income you can apply for Housing Benefit to help you pay for part or all of your rent.
    You can apply for Housing Benefit whether you’re unemployed or working, and whether you rent from the private sector, 
    a Housing Association or our Council housing.
    </p>
    <section class="alert-panel--ineligible" role="alert" aria-label="Alert panel">
    <h3>Universal Credit</h3>
    <p>
        From November 2018 if you need to start a new Housing Benefit claim you may have to claim Universal Credit.
    </p>
    </section>
    <h3>How much you could receive</h3>
    <p>
        There’s no set amount of Housing Benefit. What you receive will be affected by:
    </p>
    <p>
      <ul>
          <li>if you are a private tenant. What you get will depend on whether you are restricted by the Local Housing Allowance</li>
          <li>if you rent from us. Following the under-occupancy rule (or bedroom tax), you will receive less support if you have empty bedrooms in your house or flat</li>
      </ul>
    </p>
    <section class="alert-panel--ineligible" role="alert" aria-label="Alert panel">
    <h3>Urgent payment</h3>
    <p>
        If your claim hasn’t been processed yet and you need payment urgently because you’re facing eviction you must contact us as soon as possible.
        You will need to send or bring in a copy of any information you’ve received about eviction proceedings. Once we have the evidence we need, 
        we’ll arrange to pay your Housing Benefit as soon as we can.
    </p>
    </section>
    <h3>Receiving payment</h3>
    <p>
      You should claim as soon as you can. We can usually pay Housing Benefit from the Monday after the day we receive your claim form. 
      We can only backdate your benefit for up to one month from when you make your claim.
      If you live in our Council housing, we’ll pay Housing Benefit directly into your rent account. You won’t receive the money.
      If you’re a private tenant, we’ll usually pay Housing Benefit into your bank or building society account, 
      although we may decide that it’s in your best interests to pay your Housing Benefit directly to your landlord.
    </p>
    <h3>Applying for Housing Benefit if you’re claiming other benefits</h3>
    <p>
      If you’re claiming Employment and Support Allowance, Income Support or Jobseeker’s Allowance, contact Jobcentre Plus to claim Housing Benefit too. 
      Jobcentre Plus will send us details of your claim for Housing Benefit.If you’re claiming Universal Credit, you can get help paying for housing with your 
      Universal Credit payment instead of getting Housing Benefit.
      If you’re claiming Pension Credit, contact the Pension Service to claim Housing Benefit with your claim for Pension Credit. 
      The Pension Service will send us details of your claim for Housing Benefit.
    </p>
    <h3>Apply for Housing Benefit if you’re not claiming other benefits</h3>
    <p>
      If you’re not claiming other benefits, you can apply online for Housing Benefit.
      Once you've applied, we’ll let you know what information we need from you to support your claim. 
      This may include information like your National Insurance Number, your birth certificate or driving licence, 
      and evidence that you pay the rent, like your rent book or tenancy agreement.
      You should provide this information as soon as you can so we can deal with your claim as quickly as possible. 
      When you provide evidence please bare in mind the following:
    </p>
    <p>
      <ul>
          <li>we can only accept original documents as proof. We can’t accept photocopies</li>
          <li>you can bring the documents we need to First Point or any Area Housing Office</li>
          <li>if you supply the proofs in person we’ll photocopy them and give you the originals back. We’ll also give you a receipt. You should ask to see the photocopies and make sure that you’re satisfied that the copies are clear and legible</li>
          <li>if we need more evidence, we’ll write to you as soon as possible to let you know</li>
      </ul>
    </p>
    <p>
      Check your eligibility and calculating your entitlement at:
      <a href="https://www.entitledto.co.uk/" target="_blank">https://www.entitledto.co.uk/</a>
    </p>
    <p>
        Email a link so a customer can start or continue an application: 
        <a href="${window.location.protocol}//${
        window.location.hostname
        }/form/launch/send_link_to_service?${
        KDF.getParams().customerid
        ? `customerid=${KDF.getParams().customerid}&`
        : ""
        }interactionid=${KDF.getParams().interactionid}">Send link</a>
      </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Sheffield Money Support Guide</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      You can find out more information about the Sheffield Money Support Guide at: 
      <a href="https://sheffieldmoneysupport.co.uk/" target="_blank">https://sheffieldmoneysupport.co.uk/</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Multiply: imrove your numeracy skills</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      You can find out more information about Multiply at: 
      <a href="https://linktr.ee/multiplysheffield" target="_blank">https://linktr.ee/multiplysheffield</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Free vitamins for pregnant women, new mums and children under 4</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      If you’re pregnant you can have free Healthy Start
      vitamins up to your baby’s 1st birthday.
      Your children can have free Healthy Start vitamin
      drops from the age of 4 weeks until their 4th
      birthday.
      Ask your midwife or health visitor today.
    </p>
    <p>
      More information on free vitamins at: 
      <a href="https://www.sheffield.gov.uk/sites/default/files/2023-05/NHS_Vitamin_Support.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-05/NHS_Vitamin_Support.pdf</a>
    </p>
    <p>
      Children who are having 500ml or more of formula a day do not need these vitamins.
      You or your children should not take more than the recommended amount.
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Prescription support using prepayment certificate</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      If you know you'll have to pay for lots of
      prescriptions, it may be cheaper to buy a
      prescription prepayment certificate.
      This covers all your NHS prescriptions, including NHS
      dental prescriptions, no matter how many you need.
      If you need 2 items a month you could save £116.30 a
      year.
    </p>
    <p>
      More information on prescription prepayment certificates by calling <strong>0300 330 1341</strong> or visiting: 
      <a href="https://services.nhsbsa.nhs.uk/buy-prescription-prepayment-certificate/start" target="_blank">https://services.nhsbsa.nhs.uk/buy-prescription-prepayment-certificate/start</a>
    </p>
    <p>
      Children who are having 500ml or more of formula a day do not need these vitamins.
      You or your children should not take more than the recommended amount.
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Make your money go further</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      A large proportion of government benefits and allowances go unclaimed every year, meaning you may be entitled to benefits and support that you are not receiving. 
      Furthermore, there are a number of ways that you can reduce your outgoings and increase your income, making your money go further.
      On this page you will find information to help your money go further, including benefits checkers and ways to reduce your household bills.
      Alternatively, if you would like assistance with assessing your circumstances to find out how you can make your money go further, 
      you can start a web chat with one of our team who will book an appointment for you.
    </p>
      <h3>Help with your Council Tax bill or arrears</h3>
      <h4>Council Tax support</h4>
    <p>
      You could be eligible for a reduction of up to 100% in the amount of Council Tax you pay each month, 
      if you’re on a low income or you claim benefits. You can apply if you own your home, rent, are unemployed or working.
      What you receive will depend on:
    </p>
    <p>
      <ul>
        <li>your circumstances (for example income, number of children, benefits, residency status)</li>
        <li>your household income - this includes savings, pensions and your partner’s income</li>
        <li>if your children live with you</li>
        <li>if other adults live with you</li>
      </ul>
    </p>
      <h4>Council Tax discounts and exemptions</h4>
    <p>
      Certain people are eligible for discounts or exemptions from Council Tax, including students, people who are disabled and people who live alone.
    </p>
      <h4>Help with rent and Council Tax</h4>
    <p>
      The Discretionary Housing Payment (DHP) scheme can help you if you get Housing Benefit or Universal Credit, but you still need help to pay your rent. 
      If you get Council Tax Support (CTS) you can also get help to pay your Council Tax under the Council Tax Hardship Scheme (CTHS).
    </p>
      <h4>Help with your water bill</h4>
    <p>
      If you are on benefits, on a low income, have debt connected to your water bill, or have a medical condition that means you need to use more water, 
      you may be eligible for help paying your water bill. Yorkshire Water runs a number of schemes that can reduce the amount you pay for water each month.
    </p>
      <h3>Check if you could get additional income</h3>
    <p>
      Billions of pounds of benefits go unclaimed each year and many people don’t know what they are entitled to, 
      but a simple check can assist you to make a claim. Use a benefits calculator to find out what you could receive.
    </p>
      <h3>Help with telephone and broadband costs</h3>
    <p>
      Many telephone and broadband companies have social tariffs for people claiming Universal Credit, Pension Credit and some other benefits.
    </p>
      <h3>Access crisis grants if you're in hardship</h3>
    <p>
      If you are in hardship and cannot afford food, energy and other essentials, you may be eligible for a payment under the Household Support Fund.
      If you are in crisis following an emergency or disaster, or need help to remain in your home, you may be eligible for a payment under the Local Assistance Scheme.
    </p>
    </section>
  </div>
  </details>
  `,
  { buttonLabel: "Apply for Discretionary Housing Payment and Council Tax Hardship Scheme", formName: "apply_dhp_cths" },
  { typeKey: "cost_of_living_scheme_transferred_to_service" },
  { typeKey: "cost_of_living_scheme_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "06/11/2024", name: "Nathan Smith" }
);

const foodSupport = new ContentB(
  "foodSupport",
  "Food support",
  "Description",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Community groceries</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about community groceries can be found at: 
      <a href="https://communitygrocery.org.uk/how-we-can-help/" target="_blank">https://communitygrocery.org.uk/how-we-can-help/</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Bags of Taste</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about Bags of Taste can be found at: 
      <a href="https://bagsoftaste.org/" target="_blank">https://bagsoftaste.org/</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Feed your family for less resource pack</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about feeding the family for less can be found at: 
      <a href="https://www.sheffieldissweetenough.org/res/downloads/feed-your-family-for-less-booklet.pdf" target="_blank">https://www.sheffieldissweetenough.org/res/downloads/feed-your-family-for-less-booklet.pdf</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Too Good to Go: rescue unsold food</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about Too Good to Go can be found at: 
      <a href="https://www.toogoodtogo.com/en-gb/" target="_blank">https://www.toogoodtogo.com/en-gb/</a>
    </p>
    </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Money Saving Expert restaurant deals</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about Money Saving Expert restaurant deals can be found at: 
      <a href="https://www.moneysavingexpert.com/deals/cheap-restaurant-deals/" target="_blank">https://www.moneysavingexpert.com/deals/cheap-restaurant-deals/</a>
    </p>
    </section>
  </div>
  </details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "cost_of_living_transferred_to_service" },
  { typeKey: "cost_of_living_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "07/11/2024", name: "Nathan Smith" }
);

const energySupport = new ContentB(
  "energySupport",
  "Energy support",
  "Description",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Warm Home Discount Scheme</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about the Warm Home Discount Scheme can be found at: 
      <a href="https://www.gov.uk/the-warm-home-discount-scheme" target="_blank">https://www.gov.uk/the-warm-home-discount-scheme</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Winter Fuel Payment</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about the Winter Fuel Payment can be found at: 
      <a href="https://www.gov.uk/winter-fuel-payment" target="_blank">https://www.gov.uk/winter-fuel-payment</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Energy advice from Energy Savings Trust</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information from Energy Savings Trust can be found at: 
      <a href="https://energysavingtrust.org.uk/" target="_blank">https://energysavingtrust.org.uk/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Connected for Warmth energy grants</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about Connected for Warmth energy grants can be found at: 
      <a href="https://www.connectedforwarmth.org.uk/" target="_blank">https://www.connectedforwarmth.org.uk/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Get independent energy advice from Green Doctors</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about independent energy advice from Green Doctors can be found at: 
      <a href="https://www.groundwork.org.uk/greendoctor/" target="_blank">https://www.groundwork.org.uk/greendoctor/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Central heating</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      Knowing how your central heating system works will help you keep warm and save money.
    </p>
    <h3>Room thermostat</h3>
    <p>
      Usually on the living room or hall wall, it senses when the house is warm enough and 
      turns the boiler off automatically. It should be set at between 18 to 21 degrees C 
      (65 to 70 degrees F), slightly higher if you are an older person or have young children.
    </p>
    <h3>Thermostatic radiator valve</h3>
    <p>
      These are fitted to your radiators and allow you to set different temperatures in different 
      rooms. The lower the number or comfort level on the valve, the less heat the radiator 
      will give off.
    </p>
    <h3>How to use the system</h3>
    <p>
      <ul>
        <li>try to maintain a comfortable, even temperature throughout your home</li>
        <li>don’t keep heating or hot water on too long or at times when you don’t need it</li>
        <li>set the controller to bring the heating/hot water on about half an hour before you get up and to go off half an hour before you go to bed</li>
        <li>remember to keep your home well ventilated to reduce condensation</li>
      </ul>
    </p>
    <h3>Gas fires</h3>
    <p>
      If you have one, make sure it is kept free of dust and isn’t covered up. 
      If there is a ventilator in the window, don’t block it up otherwise harmful fumes could build up. 
      We recommend you don’t use the fire at the same time as the central heating.
    </p>
    <h3>Fuel costs</h3>
    <p>
    If fear of high bills is stopping you heating your home, here are some tips to help:
    </p>
    <p>
      <ul>
        <li>compare fuel costs between different suppliers to get a better deal. Visit <a href="https://www.energyhelpline.com/" target="_blank">https://www.energyhelpline.com/</a> or call <strong>0800 074 0745</strong></li>
        <li>it is often cheaper to get both gas and electricity from the same supplier and there is usually a discount for paying by Direct Debit</li>
        <li>many suppliers offer discounted schemes for older people or people claiming benefit</li>
        <li>some suppliers, including <a href="https://britishgasenergytrust.org.uk/" target="_blank">https://britishgasenergytrust.org.uk/</a> or <a href="https://www.edfenergytrust.org.uk/" target="_blank">https://www.edfenergytrust.org.uk/</a>, offer financial grants to customers in need</li>
        <li>pensioners or individuals with sight or hearing impairments, disability or chronic illness should ask to be put on their supplier’s ‘Priority Services Register’, so they can’t be disconnected between the 1 October and 31 March</li>
        <li>the Winter Fuel Payment helpline is <strong>0800 731 0160</strong></li>
      </ul>
    </p>
    <h3>Faults</h3>
    <p>
    Before you call us, please make sure:
    </p>
    <p>
      <ul>
        <li>the heating is turned on (there is normally a switch near the boiler)</li>
        <li>the timer is set correctly – if you are unsure how to do this, call us on <strong>0114 273 5555</strong></li>
        <li>your room thermostat is set to the required temperature and your thermostatic radiator valves are turned on</li>
        <li>your pre-payment or token meter has credit</li>
      </ul>
    </p>
    <p>
    If the system still won’t work, report a repair at: <a href="https://britishgasenergytrust.org.uk/" target="_blank">https://britishgasenergytrust.org.uk/</a> or <a href="https://www.sheffield.gov.uk/council-housing/council-housing-repairs" target="_blank">https://www.sheffield.gov.uk/council-housing/council-housing-repairs</a>
    </p>
    <p>
    If you want someone to visit your home and explain how the central heating works, call us on <strong>0114 273 5555</strong> or visit your Neighbourhood Office.
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Help from your energy supplier: the Energy Company Obligation</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about help from your energy supplier can be found at: 
      <a href="https://www.gov.uk/energy-company-obligation" target="_blank">https://www.gov.uk/energy-company-obligation</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>National Energy Action</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about National Energy Action can be found at: 
      <a href="https://www.nea.org.uk/" target="_blank">https://www.nea.org.uk/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Apply for alternative funding for your energy bills</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The government is offering two schemes which provide funding to people who do not 
      have a direct contract with an energy supplier and are therefore not eligible for 
      the current Energy Bill Support Scheme. 
    </p>
    <h3>Energy Bills Support Scheme Alternative Funding</h3>
    <p>
      The Energy Bills Support Scheme Alternative Funding provides eligible residences with 
      a £400 discount on their energy bills. This includes, for example, care home residents 
      or those living in properties with energy costs paid to a commercial landlord.
    </p>
    <h3>Alternative Fuel Payments Scheme</h3>
    <p>
      The Alternative Fuel Payments Scheme offers a discount of £200 to those using alternative 
      fuels such as biomass or heating oil.
    </p>
    <h3>How to apply</h3>
    <p>
      If you are eligible for one of these schemes, you will need to apply through the GOV.UK website. 
      Once you have made an application and it's been approved, your payment details will be shared 
      with the Council in order to process your payment. A privacy notice regarding sharing personal 
      information is available for you to read on our privacy notice page which can be found here: 
      <a href="https://www.sheffield.gov.uk/utilities/footer-links/privacy-notice" target="_blank">https://www.sheffield.gov.uk/utilities/footer-links/privacy-notice</a>
    </p>
    <h3>Further support</h3>
    <p>
      If you need to speak to someone about the schemes, there is a dedicated government 
      helpline to answer your queries. You can access the helpline details at: 
      <a href="https://www.gov.uk/get-help-energy-bills" target="_blank">https://www.gov.uk/get-help-energy-bills</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Warm Homes Sheffield: Energy support guide</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about Warm Homes Sheffield can be found at: 
      <a href="https://www.warmhomessheffield.org.uk/" target="_blank">https://www.warmhomessheffield.org.uk/</a>
    </p>
  </section>
  </div>
  </details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "cost_of_living_transferred_to_service" },
  { typeKey: "cost_of_living_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "08/11/2024", name: "Nathan Smith" }
);

const howYouCanHelpYourCommunity = new ContentB(
  "howYouCanHelpYourCommunity",
  "How you can help your community",
  "Description",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Offering help as a business</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      We know that many businesses are struggling with rising costs but there are others
      who feel able to support the communities they are part of.
    </p>
    <h3>Community support</h3>
    <p>
      If you are a business who can help, you may want to look at our general 
      information on donating money, food and other items and volunteering for local 
      charities on our Cost of living page.
    </p>
    <h3>Sheffield Business Together</h3>
    <p>
      Sheffield Business Together is a business-led cross sector collaboration, which brings together 
      businesses and charities to address some of the key challenges facing our city. 
      The team work closely with Voluntary Action Sheffield and us to identify opportunities 
      for businesses to support their community. To contact them, 
      please email <a href="mailto:katie@sheffieldbusinesstogether.org.uk</a>
    </p>
    <h3>Business in the Community</h3>
    <p>
      Business in the Community are partners of Sheffield Business Together and work with businesses 
      to continually grow their responsible business practices. They have developed guidance on the 
      different ways that organisations can help to respond to the cost-of-living crisis which is 
      available on their website at:
      <a href="https://www.bitc.org.uk/cost-living-crisis-helping-businesses-respond/" target="_blank">https://www.bitc.org.uk/cost-living-crisis-helping-businesses-respond/</a>
    </p>
    <h3>Supporting your employees</h3>
    <p>
      One of the most tangible and direct ways any organisation can help alleviate the 
      cost-of-living crisis is to provide support to their own employees. 
      Below are some ideas that you may wish to consider as part of this:
    </p>
    <p>
      <ul>
        <li>paying the living wage</li>
        <li>set up a cost-of-living task force to understand the needs of your employees</li>
        <li>consider a one-off cost of living payment</li>
        <li>signpost employees to the help available across the city</li>
        <li>establish an emergency loan service for staff</li>
        <li>champion equality and assess who is being impacted</li>
        <li>run support and wellbeing sessions</li>
        <li>encourage employees to receive help by breaking down perceptions of shame and stigma</li>
        <li>provide free food or a breakfast</li>
        <li>pay untaken leave</li>
      </ul>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Donate to Citzens Advice Sheffield</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about donating to Citzens Advice Sheffield can be found at: 
      <a href="https://citizensadvicesheffield.org.uk/support-us/" target="_blank">https://citizensadvicesheffield.org.uk/support-us/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Voluntary Action Sheffield: Voltunary and Community Support</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about Voluntary Action Sheffield can be found at: 
      <a href="https://www.vas.org.uk/what-we-do/communitysupportforcostoflivingcrisis/" target="_blank">https://www.vas.org.uk/what-we-do/communitysupportforcostoflivingcrisis/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Donate to Community Grocery</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about donating to Community Grocery can be found at: 
      <a href="https://communitygrocery.org.uk/donate/" target="_blank">https://communitygrocery.org.uk/donate/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Donate to South Yorkshire's Community Foundation: South Yorkshire Cost of Living Fund</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about donating to South Yorkshire's Community Foundation can be found at: 
      <a href="https://www.sycf.org.uk/apply" target="_blank">https://www.sycf.org.uk/apply</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Sheffield Volunteer Centre</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about Sheffield Volunteer Centre can be found at: 
      <a href="https://www.sheffieldvolunteercentre.org.uk/" target="_blank">https://www.sheffieldvolunteercentre.org.uk/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Donate to Sheffield 1000 charity</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about donating to Sheffield 1000 charity can be found at: 
      <a href="https://thesheffield1000.org/" target="_blank">https://thesheffield1000.org/</a>
    </p>
  </section>
  </div>
  </details>
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Donate to Sheffield Foodbanks</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      More information about donating to Sheffield Foodbanks can be found at: 
      <a href="https://www.sheffieldfoodbank.org.uk/" target="_blank">https://www.sheffieldfoodbank.org.uk/</a>
    </p>
  </section>
  </div>
  </details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "cost_of_living_transferred_to_service" },
  { typeKey: "cost_of_living_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "08/11/2024", name: "Nathan Smith" }
);

const supportForBusinesses = new ContentB(
  "supportForBusinesses",
  "Support for businesses",
  "Description",
  `
  <details class="accordion">
    <summary class="accordion-header">
        <h3>Support with challenges in your business</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      We know the rising cost of living is posing big challenges for businesses right now. 
      We offer one-to-one support for businesses and resources to help manage the cost of 
      living in your business.
    </p>
    <h4>Free one-to-one support</h4>
    <p>
      Our Business Information Officers and Business Advisors are here to offer free in-depth, 
      one-to-one support with any challenges you’re facing in your business. They’re business 
      experts with many years’ experience between them in a wide range of sectors. The Business 
      Information Officers support high street businesses throughout Sheffield.
      They can help with things like:
    </p>
    <p>
      <ul>
        <li>managing cashflow</li>
        <li>understanding energy bills and contracts</li>
        <li>finding new ways to save and bring in money</li>
        <li>marketing and social media</li>
        <li>accessing Council services and processes</li>
      </ul>
    </p>
    <p>
    Our Business Advisors work with businesses away from the high streets, 
    from start-ups to tech companies to manufacturers and much more. 
    They can help with things like:
    </p>
    <p>
      <ul>
        <li>strengthening your business model</li>
        <li>managing cashflow</li>
        <li>marketing</li>
        <li>accessing funding and finance</li>
      </ul>
    </p>
    <p>
    You can read about our team on the Business Sheffield website. 
    If you’d like support, contact the Business Sheffield team at: 
    <a href="https://www.welcometosheffield.co.uk/business/" target="_blank">https://www.welcometosheffield.co.uk/business/</a>
    </p>
    <h4>Resources for managing the cost of living in your business</h4>
    <p>
      We know lots of businesses are making changes at the moment to manage the impact of the rising 
      cost of living. We’ve put together some resource sheets to help you think through some of the 
      options, decide what’s right for you, and manage any change safely.
    </p>
        <details class="details-accordion">
            <summary>
                Energy suppliers and billing
            </summary>
            <div class="details-accordion-content">
                <p>
                    A resource sheet to help you navigate the process of switching energy contracts; 
                    know what to do during energy sales calls; and look out for extra money you could 
                    be paying on your bill.
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2022-11/energy-suppliers-contracts-and-bills-1.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2022-11/energy-suppliers-contracts-and-bills-1.pdf</a>
                </p>
            </div>
        </details>
        <details class="details-accordion">
            <summary>
                Saving energy
            </summary>
            <div class="details-accordion-content">
                <p>
                    Guides to help you think through ways to save energy, identify any risks 
                    and ensure you avoid them.
                    <p>
                    Guide for saving energy in your business:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2022-11/saving-energy-in-your-business.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2022-11/saving-energy-in-your-business.pdf</a>
                    </p>
                    <p>
                    Guide for saving energy in your food business:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2022-11/saving-energy-for-food-businesses-1.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2022-11/saving-energy-for-food-businesses-1.pdf</a>
                    </p>
                </p>
            </div>
        </details>
        <details class="details-accordion">
            <summary>
                Taking control of costs and income
            </summary>
            <div class="details-accordion-content">
                <p>
                    A guide to help you get to grips with your cashflow; understand what each 
                    product costs and brings in; and think about whether the concept behind your 
                    business still serves you in the current climate.
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2022-11/taking-control-of-costs-and-bills-1.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2022-11/taking-control-of-costs-and-bills-1.pdf</a>
                </p>
            </div>
        </details>
        <details class="details-accordion">
            <summary>
                Resources in translation
            </summary>
            <div class="details-accordion-content">
                <p>
                    These documents explain in various languages the support we have for 
                    businesses to help them manage their cost of living. 
                    <p>
                    Arabic:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_arabic_1.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_arabic_1.pdf</a>
                    </p>
                    <p>
                    Bengali:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources-_bengali_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources-_bengali_0.pdf</a>
                    </p>
                    <p>
                    Chinese:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_chinese_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_chinese_0.pdf</a>
                    </p>
                    <p>
                    Italian:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_italian_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_italian_0.pdf</a>
                    </p>
                    <p>
                    Kurdish:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_kurdish_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_kurdish_0.pdf</a>
                    </p>
                    <p>
                    Pakistani:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_pakistani_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_pakistani_0.pdf</a>
                    </p>
                    <p>
                    Polish:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_polish_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_polish_0.pdf</a>
                    </p>
                    <p>
                    Slovak:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_slovak_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_slovak_0.pdf</a>
                    </p>
                    <p>
                    Somali:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_somali.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_somali.pdf</a>
                    </p>
                    <p>
                    Urdu:
                    <a href="https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_urdu_0.pdf" target="_blank">https://www.sheffield.gov.uk/sites/default/files/2023-03/cost_of_living_business_resources_-_urdu_0.pdf</a>
                    </p>
                </p>
            </div>
        </details>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
        <h3>Business rate relief</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      There are different types of business rate relief. 
    </p>
    <section class="alert-panel--ineligible" role="alert" aria-label="Alert panel">
      <p>
          Whilst your application is in progress, you must pay as billed. 
          If you are unable to pay, please contact us immediately to discuss this further. 
          We may be able to help you by making a more suitable payment arrangement.
      </p>
    </section>
    <section class="info-panel" role="region" aria-label="Information panel">
      <p>
          The Valuation Office Agency (VOA) has updated the rateable values of all business, 
          and other non-domestic, property in England and Wales. These future rateable values 
          will be reflected in the Business Rates you pay from 1 April 2023. The government 
          has announced a package of rates relief for businesses as part of the Autumn Statement 2022, 
          to help businesses adjust to the new rates. We are awaiting full details of this scheme 
          from Government and will update the information here as soon as with have these details.
      </p>
      <p>
        Find out more about rateable value at: 
        <a href="https://www.gov.uk/government/publications/autumn-statement-2022-business-rates-factsheet/autumn-statement-2022-business-rates-factsheet" target="_blank">https://www.gov.uk/government/publications/autumn-statement-2022-business-rates-factsheet/autumn-statement-2022-business-rates-factsheet</a>
      </p>
    </section>
      <details class="details-accordion">
          <summary>
              Discretionary Rate Relief
          </summary>
          <div class="details-accordion-content">
              <p>
                  Non-profit making organisations have no automatic entitlement to rate relief but we may decide to give discretionary relief. 
                  Your organisation must be charitable, religious or concerned with education, social welfare, science, literature or the fine arts, 
                  or the property must be used by a non-profit-making organisation wholly or mainly for the purpose of recreation.
              </p>
              <h4>Apply for Discretionary Rate Relief</h4>
              <p>
                  Download, complete and return the 'Discretionary Relief application form.
                  You will also need to provide us with a copy of your organisation's:
              </p>
              <ul>
                <li>Objects and Articles to show what you do</li>
                <li>audited accounts for the last 2 years</li>
              </ul>
              <p>
              This will allow us to confirm what, if any, profits have been made and what happens to them.
              </p>
              <h4>Decision</h4>
              <p>
              Your application is considered against a set of policy guidelines and criteria, and decisions are made on an individual basis. 
              You will be notified of all decisions in writing. We can only consider backdating Discretionary Relief to a certain date.
              </p>
              <h4>Payment while your application is considered</h4>
              <p>
              Please note that you must pay as billed while your application is being considered. If you are unable to pay, please contact us. 
              If you have received any notices from us regarding non-payment, please contact us immediately so that we can come to some form of payment arrangement.
              </p>
              <p>
                Discretionary Relief application form: 
                <a href="${window.location.protocol}//${
                window.location.hostname
                }/form/launch/send_link_to_service?${
                KDF.getParams().customerid
                ? `customerid=${KDF.getParams().customerid}&`
                : ""
                }interactionid=${KDF.getParams().interactionid}">Send link</a>
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Hardship rate relief
          </summary>
          <div class="details-accordion-content">
              <p>
                  We have discretion to award rate relief where a business is experiencing hardship. 
                  Hardship will only be awarded if it is believed to be in the 
                  interest of our taxpayers. We can choose to write off some or all of your debt.
              </p>
              <p>
                When making this decision, we must consider:
              </p>
                <ul>
                  <li>is your business experiencing hardship</li>
                  <li>is it is reasonable to award relief</li>
                </ul>
              <p>
                If you want to apply, you will need to complete a 'Hardship Relief application form'.
              </p>
              <h4>Document proof</h4>
              <p>
                As you are asking us to write off your Rates debt at the expense of other taxpayers, 
                we will ask you to provide a substantial amount of supporting information, proof of:
              </p>
                <ul>
                  <li>wages</li>
                  <li>benefits received</li>
                  <li>outgoings, for example, copies of your other bills</li>
                </ul>
              <p>
              We may also ask you to provide any additional information that supports your claim. We will write to you and ask you to provide this if we need it. 
              Please remember to provide as much proof as possible with your application. Your application will only be considered when we receive a fully completed application, 
              and you have provided any proof we ask for. Please contact us if you want to know more about this relief.
              </p>
              <p>
                Hardship Relief application form: 
                <a href="${window.location.protocol}//${
                window.location.hostname
                }/form/launch/send_link_to_service?${
                KDF.getParams().customerid
                ? `customerid=${KDF.getParams().customerid}&`
                : ""
                }interactionid=${KDF.getParams().interactionid}">Send link</a>
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Mandatory (charitable) rate relief
          </summary>
          <div class="details-accordion-content">
              <p>
                  80% Mandatory rate relief is available to registered charities or charities exempted from registration as a charity. 
                  Registered Community Amateur Sports Clubs are also entitled if the use of the club is wholly or mainly for charitable purposes. 
                  Apply using the 'Charity Relief application form'.
              </p>
              <p>
                Charity Relief application form: 
                <a href="${window.location.protocol}//${
                window.location.hostname
                }/form/launch/send_link_to_service?${
                KDF.getParams().customerid
                ? `customerid=${KDF.getParams().customerid}&`
                : ""
                }interactionid=${KDF.getParams().interactionid}">Send link</a>
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Rural rate relief
          </summary>
          <div class="details-accordion-content">
              <p>
                This applies to village shops and Post Offices, pubs and petrol filling stations. To qualify for relief, your shop must be within 
                a defined settlement in a designated rural area and this settlement must have a population of less than 3,000 people. For Sheffield, 
                the settlements are currently;
              </p>
              <ul>
                <li>Bolsterstone</li>
                <li>Bradfield</li>
                <li>Dungworth</li>
                <li>Loxley</li>
                <li>Wharncliffe Side</li>
                <li>Worrall</li>
              </ul>
              <p>
                Plans showing the boundaries of the defined settlements are available for inspection. 
                Where there is only one village general store, food shop or post office in a defined settlement with a rateable value 
                of up to £8,500 it will be eligible for 100% relief. Sole village pubs or petrol filling stations with a rateable value of up to £12,500 also qualify for 100% relief. 
                Any other businesses in the qualifying rural areas, which have a rateable value of up to £16,500 can apply for relief. However, we have the sole discretion whether to award the relief or not. 
                If you think that you may qualify, please contact us.
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Small business rate relief
          </summary>
          <div class="details-accordion-content">
              <p>
                Small business rate relief is designed to help small businesses reduce their business rate bill.
              </p>
              <h4>Eligible businesses</h4>
              <p>
                Eligible businesses with a rateable value of below £12,000 will receive 100% relief commencing on 1st April 2023. 
                This relief will decrease on a sliding scale of 1% for every £30 of rateable value over £12,000 up to £14,999. 
                The relief is available to ratepayers occupying:
              </p>
              <ul>
                <li>one property with a rateable value of less than £15,000</li>
                <li>more than one property where the combined rateable value of all your occupied properties is less than £20,000: 
                relief will be available only on the property with the highest rateable value (your main property). 
                each of the properties you occupy in addition to your main property must have a rateable value of less than £2,900</li>
              </ul>
              <style> 
                table { 
                width: 50%; 
                border-collapse: collapse; 
                margin: 20px 0; 
                font-size: 16px; 
                text-align: center; 
                } 
                th, td { 
                padding: 12px; 
                border: 1px solid #ddd; 
                } 
                th { 
                background-color: #d3d3d3; /* Light grey */ 
                color: black; 
                } 
                tr:nth-child(even) { 
                background-color: #f2f2f2; 
                } 
                tr:hover { 
                background-color: #ddd; 
                } 
              </style>
              <table>
                <thead>
                    <tr>
                      <th>Rateable Value</th>
                      <th>% Relief Given</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>12,000</td>
                      <td>100.00</td>
                    </tr>
                    <tr>
                      <td>12,250</td>
                      <td>91.67</td>
                    </tr>
                    <tr>
                      <td>12,500</td>
                      <td>83.34</td>
                    </tr>
                    <tr>
                      <td>12,750</td>
                      <td>75.01</td>
                    </tr>
                    <tr>
                      <td>13,000</td>
                      <td>66.68</td>
                    </tr>
                    <tr>
                      <td>13,250</td>
                      <td>58.35</td>
                    </tr>
                    <tr>
                      <td>13,500</td>
                      <td>50.00</td>
                    </tr>
                    <tr>
                      <td>13,750</td>
                      <td>41.67</td>
                    </tr>
                    <tr>
                      <td>14,000</td>
                      <td>33.34</td>
                    </tr>
                    <tr>
                      <td>14,250</td>
                      <td>25.01</td>
                    </tr>
                    <tr>
                      <td>14,500</td>
                      <td>16.68</td>
                    </tr>
                    <tr>
                      <td>14,750</td>
                      <td>8.35</td>
                    </tr>
                    <tr>
                      <td>15,000</td>
                      <td>0</td>
                    </tr>
                </tbody>
              </table>
              <h4>Reductions on main properties</h4>
              <p>
                You may be entitled to a reduction in the business rates bill on your main property 
                if you occupy more than one non-domestic property in England if:
              </p>
              <ul>
                <li>the total rateable value of your main property plus all the other properties you occupy is less than £20,000 and</li>
                <li>each of your other properties has a Rateable Value (RV) of less than £2,900</li>
              </ul>
              <p>
                In calculating relief, your main property will be classed as the property with the higher RV.
              </p>
              <h4>Small business rate relief - extension regulations</h4>
              <p>
                Since 1 April 2014, those businesses that have taken on an additional property which would normally have meant the loss of small business rate relief are allowed 
                to keep that relief on the first occupied property for a period of 12 months. You will still be able to receive the relief on your existing qualifying 
                property even if the total RV of your properties is higher than the £20,000 limit which normally applies.
              </p>
              <h4>Change in your circumstances</h4>
              <p>
                Small business rate relief will continue until there is a relevant change in your circumstances. Relevant changes are:
              </p>
              <ul>
                <li>an increase in the rateable value of a property you occupy which is not in our billing area – these changes will have to be notified in writing</li>
                <li>you take up occupation of any property which is not mentioned in your application for relief – these changes will have to be notified through a fresh application</li>
              </ul>
              <p>
                If you believe your business may qualify for relief please complete the 'Small Business Rates Relief application form'.
              </p>
              <p>
                Business Rates Support for Small Business application form: 
                <a href="${window.location.protocol}//${
                window.location.hostname
                }/form/launch/send_link_to_service?${
                KDF.getParams().customerid
                ? `customerid=${KDF.getParams().customerid}&`
                : ""
                }interactionid=${KDF.getParams().interactionid}">Send link</a>
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Transitional rate relief
          </summary>
          <div class="details-accordion-content">
              <p>
                Transitional arrangements soften the impact of revaluation by phasing in the changes to the rates bill over a period of time. 
                Different transitional arrangements will apply depending on whether your business premises are classed as small or large. 
                Transition can also affect your bill if you obtain a reduction in your Rateable Value (RV) from a date other than 1 April 2017. 
                The Valuation Officer may certify that it should have taken effect from the beginning of the Rating List, but that the list cannot be updated due to backdating restrictions. 
                If your bill receives a Transitional Adjustment, the amount you pay is calculated by increasing the previous year's net rate (that is, the amount you actually paid) by up 
                to the maximum amount permitted by the government for each year.
              </p>
              <h4>Level of transitional relief</h4>
              <p>
                If a property has a RV of more than £100,000 and is facing an increase in its bill, it is classed as a <strong>higher tier loser.</strong> 
                If a property has a RV of between £20,001 and £100,000 and is facing an increase in its bill, it is classed as a <strong>middle tier loser. </strong>
                If a property has a RV of up to £20,000 and is facing an increase in its bill, it is classed as a <strong>lower tier loser.</strong>
              </p>
              <h4>Percentage of the bill that increases or decreases</h4>
              <p>
                Once we have found out what level of relief should apply, we then take the annual figure for 2022/23 and increase or decrease it by the appropriate percentage 
                that is determined by the Government.
              </p>
              <h4>Apply an inflation adjustment</h4>
              <p>
                Once the percentage increase is applied to last years charge, we have to add an adjustment for inflation. This is the level of 
                inflation as at the previous September.
              </p>
              <h4>Rateable Value changes</h4>
              <p>
                If your RV is changed, we will have to recalculate your entitlement to transitional relief. It is quite possible that a reduction in 
                your RV may not result in an immediate reduction in your bill.
              </p>
              <h4>Check your relief</h4>
              <p>
                If you would like us to check that your calculation is correct, please contact us. There is no right of appeal against transitional relief. 
                It is part of business rates legislation and we have no powers to change or waver it.
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Living Wage Relief
          </summary>
          <div class="details-accordion-content">
              <p>
                We may award Living Wage Relief for a non-domestic property where:
              </p>
              <ul>
                <li>the ratepayer of that property is an employer who is accredited with the Living Wage Foundation</li>
                <li>and where the property has a rateable value of £50,000 or below</li>
              </ul>
              <p>
                Where an organisation is liable for more than one property and those properties have a combined rateable value of over £50,000 no relief will be awarded for any of those properties. 
                This relief is available in respect of the financial year 2016/17, and the level of relief will be up to £5,000. We may only make an award where we are satisfied that the organisation is accredited with the Living Wage Foundation. 
                We must also be satisfied that the organisation's application for accreditation with the Living Wage Foundation was made on or after 1 April 2016, and had not paid its employees a wage above the Living Wage Foundation rate prior to 1 April 2016. 
                Accreditation must be in respect of employees working at the property in Sheffield.
                The Living Wage Foundation monitors its accredited organisations, and should any business break the agreement within 2 years of signing it any relief awarded may be reclaimed.
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Expanded (Capped) Retail, Accommodation, Hospitality and Leisure Discount
          </summary>
          <div class="details-accordion-content">
              <p>
                  For the period 1 April 2023 to 31 March 2024, the amount of relief under Expanded (Capped) Retail, Accommodation, Hospitality and Leisure Discount is set at 75%. 
                  Please note that this discount will not be applied automatically. To apply, please read the details below, fill in the form provided, and return it by post or 
                  email to the addresses on the form.
              </p>
              <p>
                Capped Retail Discount application 2024: 
                <a href="${window.location.protocol}//${
                window.location.hostname
                }/form/launch/send_link_to_service?${
                KDF.getParams().customerid
                ? `customerid=${KDF.getParams().customerid}&`
                : ""
                }interactionid=${KDF.getParams().interactionid}">Send link</a>
              </p>
              <p>
                Capped Retail Discount application 2023: 
                <a href="${window.location.protocol}//${
                window.location.hostname
                }/form/launch/send_link_to_service?${
                KDF.getParams().customerid
                ? `customerid=${KDF.getParams().customerid}&`
                : ""
                }interactionid=${KDF.getParams().interactionid}">Send link</a>
              </p>
              <h4>Eligible businesses</h4>
              <p>
                The Government guidelines state that to be eligible for the discount the premises must be:
              </p>
              <ul>
                <li>occupied (empty premises do not qualify)</li>
                <li>have an occupied rates charge for the year (properties receiving 100% Small Business Rate Relief, for example, do not qualify)</li>
                <li>be wholly, or mainly, used for retail purposes for visiting members of the public</li>
              </ul>
              <p>
                Please refer to the Government guidance for qualifying businesses at: 
                <a href="https://www.gov.uk/government/publications/business-rates-retail-discount-guidance/expanded-retail-discount-2020-to-2021-coronavirus-response-local-authority-guidance" target="_blank">https://www.gov.uk/government/publications/business-rates-retail-discount-guidance/expanded-retail-discount-2020-to-2021-coronavirus-response-local-authority-guidance</a>
              </p>
              <p>
                If you're not sure whether your business will qualify for this discount, please contact: 
                <a href="mailto:business.rates@sheffield.gov.uk.">business.rates@sheffield.gov.uk</a>
              </p>
              <h4>Eligible businesses</h4>
              <p>
                Please note that the total amount of discount your business may receive under the Expanded (Capped) Retail, Accommodation, Hospitality and Leisure Discount is £110,000. If your business has already reached this cap, you may not be entitled to a discount in this period. 
                The cap is per business, not per property. If your business owns multiple properties in England, the total amount of discount received by all of them must add up to £110,000 or less. 
                If one or more ratepayers have a qualifying connection to one another (for instance, if one is a subsidiary of the other, or if they are both subsidiaries of the same company), then the amount of discount they receive between them must add up to £110,000 or less. 
                Where only one ratepayer is a company, and another ratepayer has such an interest in that company as would, if it were a company, result in its being the holding company of the other, this counts as a qualifying connection. 
                For more advice on what counts as a qualifying connection, please contact:
                <a href="mailto:businesssheffield@sheffield.gov.uk.">businesssheffield@sheffield.gov.uk</a>
              </p>
              <h4>Subsidy control obligations</h4>
              <p>
                Relief provided under this scheme must comply with the UK’s domestic and international subsidy control obligations of the UK-EU Trade and Cooperation Agreement (TCA), World Trade Organisation rules on subsidies, 
                and other international subsidy control commitments. The UK-EU Trade and Cooperation Agreement allows an economic actor (eg a holding company and its subsidiaries) to receive up to 343,000 Special Drawing Rights 
                (circa £370k) in a three-year period (consisting of the 2022/23 year and the two previous financial years). Expanded Retail Discount granted in either 2020/21 or 2021/22 does not count towards the £343,000 allowance 
                but BEIS business grants (throughout the 3 years) and any other subsidies claimed under the Small Amounts of Financial Assistance limit should be counted.
              </p>
        </div>
      </details>
      <details class="details-accordion">
          <summary>
              Partly empty properties
          </summary>
          <div class="details-accordion-content">
              <p>
                If part of your property is empty for a short period, you may apply to have your business rates bill reduced.
              </p>
              <h4>Apply</h4>
              <p>
                To apply for the reduction, complete the 'Partly Empty Properties Relief application form', and provide a plan of your property, 
                clearly indicating which proportion of your premises is occupied and which is unoccupied. Once we have received your information, 
                we will visit your premises to inspect them and verify your claim.
              </p>
              <h4>Our decision</h4>
              <p>
                If we think you should qualify for the relief, we will ask the Valuation Office to issue a certificate to confirm the rateable value of the empty part. 
                Once we receive this, we will apply the appropriate relief or exemption to the empty part and send you a revised bill. 
                The period of relief will normally be for a maximum of 3 months, or 6  months in the case of industrial premises. 
                If you have received any notices from us regarding non-payment, please see payment problems. 
                Any properties where we have granted the relief will be subject to periodic visits from our property inspector. 
                If any parts of the area you have previously claimed to be empty are found to be occupied, your relief may be cancelled.
              </p>
              <p>
                Partly Empty Properties Relief application form: 
                <a href="${window.location.protocol}//${
                window.location.hostname
                }/form/launch/send_link_to_service?${
                KDF.getParams().customerid
                ? `customerid=${KDF.getParams().customerid}&`
                : ""
                }interactionid=${KDF.getParams().interactionid}">Send link</a>
              </p>
          </div>
      </details>
      <details class="details-accordion">
          <summary>
              Appeals
          </summary>
          <div class="details-accordion-content">
              <p>
                In circumstances where an application for Business Rate relief has been declined, the applicant may appeal for the decision to be reconsidered.
              </p>
              <p>
                Appeals should be made to us in writing no later than 3 months after the date of determination. 
              </p>
              <p>
                Appeals should be made to:
              </p>
              <p>
                The Senior NNDR Administrator
              </p>
              <p>
                Sheffield City Council
              </p>
              <p>
                Non-Domestic Rates
              </p>
              <p>
                PO Box 1310
              </p>
              <p>
                Sheffield
              </p>
              <p>
                S1 1UY
              </p>
          </div>
      </details>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
        <h3>Paying your business rates</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      More information about paying your business rates can be found at: 
      <a href="https://www.sheffield.gov.uk/business/pay-business-rates" target="_blank">https://www.sheffield.gov.uk/business/pay-business-rates</a>
    </p>
    </div>
  </details>
  <details class="accordion">
    <summary class="accordion-header">
        <h3>Energy Bills Discount Scheme</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      More information about the Energy Bills Discount Scheme can be found at: 
      <a href="https://www.gov.uk/guidance/energy-bills-discount-scheme" target="_blank">https://www.gov.uk/guidance/energy-bills-discount-scheme</a>
    </p>
    </div>
  </details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: " cost_of_living_transferred_to_service" },
  { typeKey: "cost_of_living_information_provided" },
  { type: "Information", keywords: [], categories: ["benefits"] },
  { date: "08/11/2024", name: "Nathan Smith" }
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
    findFoodSupportInSheffield,
    applyForTheHouseholdSupportFund,
    mapOfWelcomePlacesInSheffield,
    moneySupport,
    foodSupport,
    energySupport,
    howYouCanHelpYourCommunity,
    supportForBusinesses,
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
