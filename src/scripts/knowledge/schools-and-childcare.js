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

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const freeSchoolMeals = new ContentSaC(
  "freeschoolmeals",
  "Free School Meals",
  "Apply free school meals",
  `
    <section>
      <h3>What is the Eligibility criteria for Free School Meals</h3>
      <p>From April 2024, eligible working parents of 2-year-olds can access 15 hours childcare support. By September 2025,
        eligible working families with children aged between 9 months and 5 years old will be entitled to 30 hours of
        childcare support.</p>
      <p>The changes are being introduced gradually to make sure that providers can meet the needs of more families. This
        means that: </p>
      <p>From September 2025 eligible working parents of children from 9 months to school age will be entitled to 30 hours
        of
        childcare a week.</p>
      <p>Like the existing offer, depending on your provider, these hours can be used over 38 weeks of the year, or up to 52
        weeks if you use fewer than your total hours per week.</p>
      <p>All eligible children are entitled to at least 570 hours of funded childcare each year.</p>
      <p>FEL (Funded Early Learning) helps children learn through play activities. Some benefits that parents have seen:
      </p>
      <ul>
        <li> children making friends their own age
        <li>children behaving better with grown-ups
        <li>children improving their speech and language
        <li>children settle down and concentrate for longer
        <li>children are more willing to try new foods which improves their nutrition
        <li>younger children improving their sleeping patterns and toilet training
      </ul>
      <p>The funded hours also help parents and carers access employment and training, spend time with their younger
        children
        or just find time to get things done.</p>
      <p>The hours must be taken over a minimum of 38 weeks (15 hours a week, or 30 if entitled to additional hours) but can
        be taken over more weeks: for example, your child could take 12 hours a week for 47½ weeks. Talk to your childcare
        provider about what options are available. For Funded Early Learning enquiries and more information on the Family
        Hubs
        for Families, please contact the Family Hubs - <b>0114 273 5665</b>.</p>
      <p>For information about the new 2-year-old extended working entitlement (15 hours offer starts April 2024, from 9
        months old from September 2024) please visit the childcare choices page, there is an assessment tool offering
        families
        details of childcare support they might be eligible for and a link to apply to:</p>
      <p>HMRC: <a href="www.childcarechoices.gov.uk">www.childcarechoices.gov.uk</a>
      </p>
      <p>From September 2025 eligible working parents of children from 9 months to school age will be entitled to 30 hours
        of
        childcare a week.</p>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>FAQ's</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <details class="details-accordion">
            <summary>
              What if I have a change in circumstance
            </summary>
            <div class="details-accordion-content">
              <p>If your circumstances change, such as if you no longer receive benefits, have moved house, or the school
                attended has
                changed, this may affect your right to claim, and you should reapply for Free School Meals.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>Why is it important to register for Free School Meals</summary>
            <div class="details-accordion-content">
              <p>Applying for free school meals is very important because the amount of money that your child’s school
                receives
                from
                central government depends on the number of children registered as entitled to free school meals. The
                government
                has
                also stated that it is keen for universities to actively recruit pupils that have previously received free
                school
                meals so it is important that those eligible for free school meals do register for them. Most importantly,
                receiving
                up free school meals will save you around £360 per year per child and enable your child to have a balanced
                and
                nutritious lunch.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>What do I do if my child is at Nursery or Primary School?</summary>
            <div class="details-accordion-content">
              <p>Although Primary School Children within the year groups: Reception, Year 1 and Year 2 automatically receive
                Free
                School Meals, we recommend people still apply for Free School Meals as this provides Funding to the Schools
                via
                Pupil
                Premium.</p>
              <p>Children within the Year groups 3 - 6 can only receive a free school meal if their parents/carers are
                eligible
                and if
                a Free School Meals Application Form has been completed. You must therefore complete a Free School Meals
                Application
                Form so that your eligibility can be checked by the Free School Meals Team. If you are eligible, your child
                will
                start
                receiving their free school meal.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>What do I do if my child is at Secondary School?</summary>
            <div class="details-accordion-content">
              <p>Secondary school pupils can only receive a free school meal if their parent/carer is eligible and if a Free
                School
                Meals Application Form has been completed. You must therefore complete a Free School Meals Application Form
                so
                that
                your eligibility can be checked by the Free School Meals Team. If you are eligible, your child can then take
                up
                their
                free school meal.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>What do I do if my child is over 16?</summary>
            <div class="details-accordion-content">
              <p>Over 16s can still receive free school meals if they are staying in education at a sixth form. You should
                complete a
                Free School Meals Application Form. The process is the same as the process for secondary school
                applications.
                All year
                11 pupils applying for the 16-19 bursary fund to help with their place in sixth form in the following year
                will
                need
                to complete a free school meals application form in order to apply for the bursary. The 16-19 bursary is the
                new
                fund
                available to support students aged 16 to 19 to stay in education and is the replacement for the Education
                Maintenance
                Allowance (EMA).</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>What do I do if my child attends an Academy?</summary>
            <div class="details-accordion-content">
              <p>Academies applications are the same for free school meals as other schools. If your child attends an
                academy,
                Complete a Free School Meals application with us.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>What happens after I make my application</summary>
            <div class="details-accordion-content">
              <p>We will let the school know whether or not your child is entitled to free school meals. Your child will
                then be
                able
                to take up their free school meal if eligible. We may also contact you if we need further information to
                process
                your
                application.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>Do you need proof of my benefits?</summary>
            <div class="details-accordion-content">
              <p>You do not have to provide proof of benefits when completing the Free School Meals Application Form as we
                can
                check
                for eligibility against a central government database. If our checks indicate that you are not entitled to
                free
                school
                meals and you think that you should be entitled, we may have to ask for proof of the benefit you are
                receiving
                so that
                we can double check that the details we hold are correct.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>What if my circumstances change?</summary>
            <div class="details-accordion-content">
              <p>If a previous application for free school meals was not successful and a change in your circumstances means
                that you
                think you may now be eligible please contact the Free School Meals Team. You will need to complete another
                application
                form. If your child currently receives a free school meal and you start work, start to receive Working Tax
                Credit, or
                stop receiving one of the qualifying benefits you must notify us as soon as possible.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>Can my claim be backdated?</summary>
            <div class="details-accordion-content">
              <p>It is important that you apply as soon as possible as we are unable to backdate claims for free school
                meals to
                cover
                unpaid dinner money, or to refund dinner money paid prior to the date of a successful application.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>What if my child changes school?</summary>
            <div class="details-accordion-content">
              <p>If your child has moved schools their circumstances will have changed so they may need to apply for Free
                School
                Meals
                once again for their new school.</p>
            </div>
          </details>
          <details class="details-accordion">
            <summary>Do I have to renew my claim every year?</summary>
            <div class="details-accordion-content">
              <p>You do not have apply yearly, however If your child attended a school outside of Sheffield then you would
                need
                to
                reapply</p>
              <p>You will need to reapply if you have previously not been eligible for free school meals but think that you
                are
                now
                eligible.</p>
              <p>If the child/ren is/are eligible under Universal Credit, you will not need to reapply for Free School Meals
                until
                April 2023.</p>
            </div>
          </details>
        </div>
      </details>
    </section>

    <section>
      <h2>FSM Voucher Information</h2>
      <h3>How do I redeem a voucher and spend it?</h3>
      <p>Please Note: that vouchers will be awarded at £15 per child</p>
      <p>You will have received a letter from us, the letter will contain a unique 16 digit eCode
        the letter with the eCode will tell you how much money the eCode is worth.</p>
      <p>You need to go online to swap this code for an eGift card (an online voucher).</p>
      <p>You can redeem your eCode button on the website: </p>
      <p><b>https://www.edenred.co.uk/reward-recipients/Free-School-Meal-Vouchers/</b></p>
      <p>or you can visit:</p>
      <p><b>www.selectyourcompliment.co.uk</b></p>
      <p>Enter the code into the box on the website and click Redeem</p>
      <ol>
        <li>Choose your supermarket.
        <li>Choose the amount of money you want to order.
        <li>Click on "Add to basket" to confirm your choices
        <li>Click on "Checkout" and enter your email address.
        <li>The eGift card (online vouchers) will be sent to your email address within 24 hours.
        <li>If the email does not arrive, check your junk folder.
        <li>The email will have the eGift card in it.
        <li>The eGift card has a barcode or a link to see a barcode online.
      </ol>
      <p>If you cannot see a barcode it could be because the pictures are not showing. You may need to click on Download
        images to see the barcode. You will need the barcode to use the eGift card to pay at the supermarket.</p>
      <p>Take the eGift card (online voucher) into the shop and show it at the till to pay. you can show the eGift card on
        your mobile phone screen or print it ou.t</p>
      <p>After you have spent all the money on the eGift card (online voucher) it cannot be used again. Please delete the
        email or throw away the printed eGift card.</p>
      <h3>I don’t have a smartphone or computer/laptop or can’t access the voucher and can’t print it</h3>
      <li>Talk the customer through the process over the phone following the "How to redeem a voucher, and spend it".</li>
      <li>Advise the customer to visit their local library who can help them print the voucher.</li>
      <li>Take the customer's 16 digit code and redeem the voucher for them online, then print the voucher and post it to
        their address, however this will cause a delay in their receiving the voucher.</li>
      <li>The customer could wait till their school has reopened and request assistance</li>
      </ul>
      <h3>I haven't got a voucher for all my children</h3>
      <p>
        Due to the protection of Free School Meals this can happen, transfer the call through to the general Free School
        Meal
        line where their entitlement can be checked.
      </p>
      <h3>I haven't received a voucher but I feel my children are entitled to FSM (Free School Meals)</h3>
      <p>
        Check if they have applied for Free School Meals previously or does their child already receive Free School Meal?
      </p>
      <p>
        If not put them through to the general Free School Meals line to make an application, but vouchers are only for
        those
        children already registered for Free School Meals
      </p>
      <p>
        If the parent is already registered for Free School Meals we will need to check our information to see whether a
        voucher was sent out, what address it was sent to, etc, before we can issue a replacement voucher, Refer this to
        Audrey/Tracey or Sarah C or Annabel H.
      </p>
      <h3>I have not received a voucher for my child - they attend and Oasis Academy School (such as Don Valley, Fir Vale or
        Watermead)</h3>
      <p>Unfortunately from the 1st of September Oasis Academy Schools decided to manage their own Free School Meal
        provisions.</p>
      <p>We have provided vouchers for all the children at these schools that we were aware of up until the 1st of
        September,
        we will not know about the ones that became eligible after the 1st of September.</p>
      <p>Parents will have to ask schools when they open.</p>

      <h3>Complex Enquiry</h3>
      <p>Where possible complex enquiries should be referred to the Fulfilment Team (Audrey/Tracey) who can pass this on to
        Sarah or Leah when needed.</p>

      <h3>Draft Letter</h3>
      <p>Screenshot of Draft Letter appears</p>
      <h3>Background Information</h3>
      <p>
        22,500 letters sent to parents/carers with a unique eCode to exchange for a £15 food voucher to cover them over the
        half term break (see copy of the letter below under "Draft Letter")
      </p>
      <p>
        The vouchers are provided by a company called Edenred. The same company that provided FSM vouchers over the summer
        holidays.
      </p>
      <p>
        Parents who receive the letter should go onto the website and redeem their voucher by inputting their 16 digit eCode
        number. They will be asked which supermarket they want to use the voucher in.
      </p>
      <p>
        Edenred will turn the eCode into an eGift card/voucher with a bar code which will then be emailed to the parent.
      </p>
      <p>
        The parent should download the eGift card/voucher onto their smartphone and this should be presented to the cashier
        at the supermarket till. Alternatively the voucher can be printed off and a paper copy taken to the supermarket.
      </p>
      <p>
        There is an Edenred User guide and an Edenred Parent FAQ document which are both useful as references, these are
        available on the Edenred website:
      </p>
      <a href="https://www.edenred.co.uk/reward-recipients/Free-School-Meal-Vouchers/">
        https://www.edenred.co.uk/reward-recipients/Free-School-Meal-Vouchers/
      </a>
    </section>
  `,
  { buttonLabel: "Apply school meals", formName: "apply_school_meals" },
  { typeKey: "apply_school_meals_transfered_to_service" },
  { typeKey: "apply_school_meals_information_provided" },
  {
    type: "Apply",
    keywords: [
      "aply",
      "appply",
      "aplye",
      "aplly",
      "aplye",
      "scholl",
      "shcool",
      "scool",
      "schooll",
      "scooll",
      "meal",
      "meas",
      "meails",
      "mealsl",
      "measls",
      "FSM",
    ],
    categories: ["schools and childcare"],
  },
  { date: "12/09/2024", name: "Dinah Williams" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const schoolsAndChildcare = new ServiceSaC(
  "schoolsAndChildcare",
  "Schools and Childcare",
  `Admissions, catchment areas, find schools, school travel, attendance, childcare and nurseries, teaching jobs…`,
  [freeSchoolMeals]
);
