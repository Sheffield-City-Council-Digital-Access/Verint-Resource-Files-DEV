class CoreSaC {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceSaC extends CoreSaC {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuSaC extends CoreSaC {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentSaC extends CoreSaC {
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

class FormSaC extends CoreSaC {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const freeSchoolMeals = new ContentSaC(
  "freeSchoolMeals",
  "Free School Meals",
  "Explore the eligibility, application process, and benefits of Free School Meals, including details on vouchers, renewals, and changes in circumstances.",
  `
    <h3>Eligibility</h3>
    <p>
      Your child is eligible for a Free School Meal if you receive any of the
      following:
    </p>
    <ul>
      <li>Income Support</li>
      <li>Income-based Jobseeker's Allowance</li>
      <li>Income-related Employment and Support Allowance</li>
      <li>Support under Part VI of the Immigration and Asylum Act 1999</li>
      <li>The Guarantee element of State Pension Credit</li>
      <li>
        Child Tax Credit, provided they are not entitled to Working Tax Credit and
        have an annual income of £16,190 or less
      </li>
      <li>
        Working Tax Credit 'run-on' - the payment someone may receive for a further
        four weeks after they stop qualifying for Working Tax Credit
      </li>
      <li>
        Universal Credit - In England, if you applied on or after 1 April 2018 your
        household income must be less than £7,400 a year (after tax and not
        including any benefits you get).
      </li>
    </ul>
    <p>
      If your child/ren is/are currently eligible for free school meals, they’ll
      remain eligible until they finish the phase of schooling (primary or
      secondary) they’re in on 31 March 2025.
    </p>
    <p>
      If your child/ren is/are currently attending an Oasis school, they need to apply for Free School Meals with that school directly.
    </p>
    <h3>Change in circumstance</h3>
    <p>
      If your circumstances change, such as if you no longer receive benefits, have
      moved house, or the school attended has changed, this may affect your right to
      claim, and you should reapply for Free School Meals, unless the School
      attending is out of Sheffield you will need to apply to that local authority.
    </p>
    <p>
      If a previous application for free school meals was not successful and a
      change in your circumstances means that you think you may now be eligible
      please contact the Free School Meals Team. You will need to complete another
      application form. If your child currently receives a free school meal and you
      start work, start to receive Working Tax Credit, or stop receiving one of the
      qualifying benefits you must notify us as soon as possible.
    </p>
    <h3>Free food supplement vouchers for school holidays</h3>
    <p>
      We are pleased to inform you that, as part of the Household Support Fund, 
      we will be providing food supplement vouchers for:
    </p>
    <ul>
      <li>Children who are in receipt of income-based free school meals</li>
      <li>Families who receive income-assessed Early Years Support</li>
      <li>Young people leaving their care setting (care leavers)</li>
    </ul>
    <p>
      We will be issuing vouchers a week prior to school holidays.
    </p>
    <p>
      You do not need to apply for the scheme. You will receive a letter 
      automatically with details of how to access the food voucher.
    </p>
    <h4>How to redeem your voucher</h4>
    <p>
      Go to the <a href="https://www.selectyourcompliment.co.uk/grocery/" target="_blank">www.selectyourcompliment.co.uk/grocery/</a>
      and follow the instructions below:
      <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Edenred'"> Send Link </button>
    </p>
    <ol>
      <li>Enter your eCode from the letter</li>
      <li>Choose your supermarket</li>
      <li>Enter the amount</li>
      <li>Go to checkout and complete your order</li>
      <li>The voucher will arrive by email within 24 hours</li>
      <li>Check your inbox for your voucher email and download your voucher</li>
      <li>If you cannot find the voucher email, please check your junk/spam folder</li>
    </ol>
    <p>
      Codes need to be activated within 3 months of the issue 
      date or they will expire automatically. 
      Once vouchers have been claimed on the Edenred website, 
      they will be valid for 12 months.
    </p>
    <p>
      If you have difficulty accessing the Edenred website, 
      please contact your child's school for help in the first instance. 
      You can also contact the Edenred helpline 
      on <a href="tel:0333 4445932">0333 4445932</a> 
      or contact the Free School Meals team.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>Why is it important to register for Free School Meals?</summary>
          <div class="details-accordion-content">
            <p>
              Applying for free school meals is very important because the amount of
              money that your child’s school receives from central government
              depends on the number of children registered as entitled to free
              school meals. The government has also stated that it is keen for
              universities to actively recruit pupils that have previously received
              free school meals so it is important that those eligible for free
              school meals do register for them. Most importantly, receiving up free
              school meals will save you around £360 per year per child and enable
              your child to have a balanced and nutritious lunch.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>
            What do I do if my child is at Nursery or Primary School?
          </summary>
          <div class="details-accordion-content">
            <p>
              Although Primary School Children within the year groups: Reception,
              Year 1 and Year 2 automatically receive Free School Meals, we
              recommend people still apply for Free School Meals as this provides
              Funding to the Schools via Pupil Premium.
            </p>
            <p>
              Children within the Year groups 3 - 6 can only receive a free school
              meal if their parents/carers are eligible and if a Free School Meals
              Application Form has been completed. You must therefore complete a
              Free School Meals Application Form so that your eligibility can be
              checked by the Free School Meals Team. If you are eligible, your child
              will start receiving their free school meal.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>What do i do if my child is at Secondary School?</summary>
          <div class="details-accordion-content">
            <p>
              Secondary school pupils can only receive a free school meal if their
              parent/carer is eligible and if a Free School Meals Application Form
              has been completed. You must therefore complete a Free School Meals
              Application Form so that your eligibility can be checked by the Free
              School Meals Team. If you are eligible, your child can then take up
              their free school meal.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>What do I do if my child is over 16?</summary>
          <div class="details-accordion-content">
            <p>
              Over 16s can still receive free school meals if they are staying in
              education at a sixth form. You should complete a Free School Meals
              Application Form. The process is the same as the process for secondary
              school applications. All year 11 pupils applying for the 16-19 bursary
              fund to help with their place in sixth form in the following year will
              need to complete a free school meals application form in order to
              apply for the bursary. The 16-19 bursary is the new fund available to
              support students aged 16 to 19 to stay in education and is the
              replacement for the Education Maintenance Allowance (EMA).
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>What do do if my child attends an Academy?</summary>
          <div class="details-accordion-content">
            <p>
              You do not have to provide proof of benefits when completing the Free
              School Meals Application Form as we can check for eligibility against
              a central government database. If our checks indicate that you are not
              entitled to free school meals and you think that you should be
              entitled, we may have to ask for proof of the benefit you are
              receiving so that we can double check that the details we hold are
              correct.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>What happens after I make my application?</summary>
          <div class="details-accordion-content">
            <p>
              We will let the school know whether or not your child is entitled to
              free school meals. Your child will then be able to take up their free
              school meal if eligible. We may also contact you if we need further
              information to process your application.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>Can my claim be backdated?</summary>
          <div class="details-accordion-content">
            <p>
              It is important that you apply as soon as possible as we are unable to
              backdate claims for free school meals to cover unpaid dinner money, or
              to refund dinner money paid prior to the date of a successful
              application.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>What if my child changes school?</summary>
          <div class="details-accordion-content">
            <p>
              If your child has moved schools they do not need to re-apply unless
              the child's new School is out of Sheffield then they would apply to
              that local authority.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>Do I have to renew my claim every year?</summary>
          <div class="details-accordion-content">
            <p>
              You do not have apply yearly, however If your child attended a school
              outside of Sheffield then you would need to reapply
            </p>
            <p>
              You will need to reapply if you have previously not been eligible for
              free school meals but think that you are now eligible.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>Do I need proof of my benefits?</summary>
          <div class="details-accordion-content">
            <p>No.</p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>Where do I apply?</summary>
          <div class="details-accordion-content">
            <p>Apply to the council where your school is, not where you live.</p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>When do I apply for FSM?</summary>
          <div class="details-accordion-content">
            <p>
              They should apply when the child starts school, and add all children 
              in the household aged 2 and over.
              All school children receive universal free school meals, 
              but not all are entitled to income-based free school meals,
              which provide Pupil Premium/milk.
            </p>
          </div>
        </details>
  `,
  {
    buttonLabel: "Apply for Free School Meals",
    formName: "apply_school_meals",
  },
  { typeKey: "" },
  { typeKey: "free_school_meals_information_provided" },
  {
    type: "Apply",
    keywords: [
      "Free School Meals",
      "Free Schhol Meals",
      "Fre School Meals",
      "Free Skool Meals",
      "Free Shool Meals",
      "Free Scool Meals",
      "aply for free school meals",
      "Applie for Free School Meals",
      "Aply for Free School Meals",
      "Apply for Fre School Meals",
      "Apply for Free Shool Meals",
      "Apply for Free Schol Meals",
      "fre",
      "frea",
      "frre",
      "frie",
      "fee",
      "scool",
      "shcool",
      "scholl",
      "schol",
      "schoool",
      "meels",
      "meals",
      "mels",
      "mealz",
      "maelz",
      "meel",
      "mael",
      "mial",
      "mel",
      "meall",
      "FSM",
      "FSV",
      "SV"
    ],
    categories: ["School and Childcare"],
  },
  { date: "28/04/2024", name: "Andy Walker" }
);

const fundedEarlyLearning = new ContentSaC(
  "fundedEarlyLearning",
  "Funded Early Learning",
  "Learn about the eligibility, benefits, and application process for Funded Early Learning, including new childcare entitlements for working parents.",
  `
    <p>
      From April 2024, eligible working parents of 2-year-olds can access 15 hours
      childcare support. By September 2025, eligible working families with children
      aged between 9 months and 5 years old will be entitled to 30 hours of
      childcare support.
    </p>
    <p>
      The changes are being introduced gradually to make sure that providers can
      meet the needs of more families. This means that:
    </p>
    <p>
      From September 2025, eligible working parents of children from 9 months to
      school age will be entitled to 30 hours of childcare a week.
    </p>
    <p>
      Like the existing offer, depending on your provider, these hours can be used
      over 38 weeks of the year, or up to 52 weeks if you use fewer than your total
      hours per week.
    </p>
    <p>
      All eligible children are entitled to at least 570 hours of funded childcare
      each year.
    </p>
    <p>
      FEL helps children learn through play activities. Some benefits that parents
      have seen:
    </p>
    <ul>
      <li>children making friends their own age</li>
      <li>children behaving better with grown-ups</li>
      <li>children improving their speech and language</li>
      <li>children settle down and concentrate for longer</li>
      <li>
        children are more willing to try new foods which improves their nutrition
      </li>
      <li>
        younger children improving their sleeping patterns and toilet training
      </li>
    </ul>
    <p>
      The funded hours also help parents and carers access employment and training,
      spend time with their younger children or just find time to get things done.
    </p>
    <p>
      The hours must be taken over a minimum of 38 weeks (15 hours a week, or 30 if
      entitled to additional hours) but can be taken over more weeks: for example,
      your child could take 12 hours a week for 47½ weeks. Talk to your childcare
      provider about what options are available. For Funded Early Learning enquiries
      and more information on the Family Hubs for Families, please contact the
      Family Hubs - <a href="tel:0114 2735665">0114 2735665</a>
    </p>
    <p>
      For information about the new 2-year-old extended working entitlement (15
      hours offer starts April 2024, from 9 months old from September 2024) please
      visit the childcare choices page, there is an assessment tool offering
      families details of childcare support they might be eligible for and a link to
      apply to HMRC.
      <a href="https://www.childcarechoices.gov.uk" target="_blank">https://www.childcarechoices.gov.uk</a>
      <br>
      <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Childcare%20Choicess'"> Send Link </button>

    </p>
    <p>
      From September 2025: <br>
      Eligible working parents of children from 9 months
      to school age will be entitled to 30 hours of childcare a week.
    </p>
    <p>
      If the customer would like to raise an enquiry for information that is not provided here, transfer
      them to Family HUBs Service on: <a href="tel:0114 2735665">0114 2735665</a>
    </p>
    <p>
    For further information, visit 
    <a href="https://www.sheffield.gov.uk/schools-childcare/childcare-funding-support-and-advice" target="_blank">https://www.sheffield.gov.uk/schools-childcare/childcare-funding-support-and-advice</a>.
    <br>
    <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Childcare%20funding%20support%20and%20advice'"> Send Link </button>

    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "funded_early_learning_information_provided" },
  {
    type: "Apply",
    keywords: [
      "Funded Early Learning",
      "Funded Erly Learning",
      "Funded Early Larning",
      "Fundeed Early Learning",
      "Funded Early Lerning",
      "Funded Eearly Learning",
      "FEL",
      "FIS",
      "LAS",
      "Free Early Learning",
      "Fundded",
      "Fuded",
      "Funned",
      "Fundedd",
      "Funnded",
      "Early",
      "Erly",
      "Earley",
      "Eraly",
      "Eraley",
      "Lerning",
      "Learnning",
      "Lurning",
      "Lreaning",
      "Leanring"
    ],
    categories: ["School and Childcare"],
  },
  { date: "02/12/2024", name: "Andy Walker" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const schoolsAndChildcare = new ServiceSaC(
  "schoolsAndChildcare",
  "Schools and Childcare",
  `Admissions, catchment areas, find schools, school travel, attendance, childcare and nurseries, teaching jobs…`,
  [freeSchoolMeals, fundedEarlyLearning]
);
