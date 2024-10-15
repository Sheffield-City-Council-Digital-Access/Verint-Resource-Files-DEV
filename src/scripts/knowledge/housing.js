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
  [applyForRehousing,applicationChanges]
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
                // Example instantiation for topicExample1
                const topicExample1 = new ContentH(
                "topicexample1",
                "Topic Title Example 1",
                "Topic Description Example 1",
                "<p>example text</p>",
                {buttonLabel}: "Example 1", formName: "example_form" },
                {typeKey}: "example_transfered_to_service" },
                {typeKey}: "example_information_provided" },
                {type}: "Request", keywords: [], categories: ["Housing"] },
                {date}: "05/09/2024", name: "Elliott Griffiths" }
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
                "<p>example text</p>",
                {buttonLabel}: "Example 1", formName: "example_form" },
                {typeKey}: "example_transfered_to_service" },
                {typeKey}: "example_information_provided" },
                {type}: "Apply", keywords: [], categories: ["Housing"] },
                {date}: "05/09/2024", name: "Elliott Griffiths" }
                );

                // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
                // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

                const housing = new ServiceH(
                "housing",
                "Housing",
                "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
                [ subjectExample2]
                );
              </></></></></></></></>
