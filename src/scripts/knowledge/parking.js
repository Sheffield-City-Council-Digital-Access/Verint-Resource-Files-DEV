class CoreP {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceP extends CoreP {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuP extends CoreP {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentP extends CoreP {
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

class FormP extends CoreP {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const whocanApplyforaBlueBadge = new ContentP(
  "whocanApplyforaBlueBadge",
  "who can Apply for a Blue Badge",
  "",
  `<h3> Eligibility</h3>
	  <p>
		If the condition that the customer has a diagnosis for is not permanent and substantial 
		they will not be eligible for a blue badge.
	  </p>
	  
	  <h3> Automatically Qualify </h3>

	  <p>
		The customer will automatically qualify for a blue badge if they meets the following criteria 
		and have the relevent evidence:
		<ul>
		  <li>In Receipt of Higher Rate Disability Living Allowance from the DWP (Department for Works and Pensions)
		   dated within the current financial year</li>
		  <li>In receipt of PIP (Personal Independence Payment) if scored 8 or above</li>
		  <li>Registered as Blind (Severely Sight Impaired</li>
		  <li>War Pension Supplement</li>
		  <li> Armed Forces and Reserved Forces Compensation Scheme</li>
		  <li>Terminally Ill Applicants - If the applicant is being treated by Mcmillan, 
		  Weston Park or Northern General the application would require a stamp / compliment slip 
		  / note from nurse or doctor and is issued for one year with no charge.</li>
		  <li>Terminally Ill - A terminally ill applicant will have a DS1500  – A form giving medical facts
		  relating to cancer or an SR1 form used for claiming benefits under the rules for people with 
		  terminal cancer. There is a charge of £10 for all badges and the badge is issued for a year, 
		  should they apply the following 2 years there would be no further charge.</li>
		</ul>
	  </p>
	  <p>
		These applications will be fast tracked and would not be held up awaiting payment or 
		other evidence. When applying online these applications via gov.uk 
		<a href="https://www.gov.uk"target="_blank">https://www.gov.uk</a> are processed the same working day.
	  </p>
	  
		<h3> Discretionary</h3>

		<p> If the customer does not meet any of the criteria above they will need to go through 
		an assessment with an advisor to see if they qualify for a blue badge.
	  </p>
	`,

  { buttonLabel: "", formName: "" },
  { typeKey: "blue_badge_information_provided" },
  { typeKey: "blue_badge_tarnsferred_to_service" },
  { type: "Request", keywords: [], categories: ["Parking"] },
  { date: "01/10/2024", name: "Shahzad Athar" }
);

const whatisHappeningwithmyBlueBadgeApplication = new ContentP(
  "whatisHappeningwithmyBlueBadgeApplication",
  "What is Happening with my Blue Badge Application",
  "",
  `<h3> Update/Chasing Application</h3>
	  <p>
		You may be able to provide the customer with an update to their application using the case notes 
		or status update. All cases will be dealt with in date order, there are no exceptions to this 
		regardless of circumstances so do not raise requests of this nature to FFT. Blue Badge applications 
		will be assessed within 28 days calendar days from the date the application was received. 
		The order date of the blue badge is not the despatch date from our 3rd party who produce the 
		Blue Badge.
	  </p>
	  <p>
		Once Sheffield City Council have ordered the Blue Badge the 3rd Party have 5 working days to 
		despatch and weekends need to be taken into account.
	  </p>
	`,

  { buttonLabel: "", formName: "" },
  { typeKey: "blue_badge_information_provided" },
  { typeKey: "blue_badge_tarnsferred_to_service" },
  { type: "Request", keywords: [], categories: ["Parking"] },
  { date: "01/10/2024", name: "Shahzad Athar" }
);

const lostorStolenBlueBadge = new ContentP(
  "lostorStolenBlueBadge",
  "Lost or Stolen Blue Badge",
  "",
  `<h3>Requesting a Replacement Badge</h3>
	  <p>
		If a badge is lost or stolen we now require a form to be completed with a signature. 
		The form is available online to print or alternatively a form can be sent out via 2nd post.
	  </p>
	`,

  { buttonLabel: "", formName: "" },
  { typeKey: "blue_badge_information_provided" },
  { typeKey: "blue_badge_tarnsferred_to_service" },
  { type: "Request", keywords: [], categories: ["Parking"] },
  { date: "01/10/2024", name: "Shahzad Athar" }
);

const blueBadgetakenbyanEnforcementOfficer = new ContentP(
  "blueBadgetakenbyanEnforcementOfficer",
  "Blue Badge taken by an Enforcement Officer",
  "",
  `
		<h3>Requesting a Replacement Badge</h3>
		<p>
			If your Blue Badge has been confiscated by an Enforcement Officer, please
			follow these steps:
		</p>
		<p>
			Send an e-mail to
			<a href="mailto:customerservices@sheffield.gov.uk" target="_blank"
				>customerservices@sheffield.gov.uk</a
			>
			or send a letter to:
		</p>
		<address>
			Customer Services<br />
			Floor 2<br />
			Howden House<br />
			1 Union Street<br />
			Sheffield<br />
			S1 2SH
		</address>
		<p>
			In your message, please detail the circumstances that led to the Blue Badge
			being taken. Once we receive this information, a member of our team will
			contact you, and a decision will be made regarding the return of your Blue
			Badge.
		</p>
	`,
  { buttonLabel: "", formName: "" },
  { typeKey: "blue_badge_information_provided" },
  { typeKey: "blue_badge_tarnsferred_to_service" },
  { type: "Request", keywords: [], categories: ["Parking"] },
  { date: "01/10/2024", name: "Shahzad Athar" }
);

const whoshouldIReportaboutaDeath = new ContentP(
  "whoshouldIReportaboutaDeath",
  "Who should I Report about a Death",
  "",
  `
		<p>
			If the customer has an appointment with Registrars in Sheffield to report the
			death, they can sign up to <strong>Tell Us Once</strong> meaning the customer
			does not have to report it to each individual service. Alternatively the
			details can be taken today and passed to our back office team who will update
			our records, the badge should be returned to:
		</p>
		<address>
			Customer Services<br />
			Floor 2<br />
			Howden House<br />
			1 Union Street<br />
			Sheffield<br />
			S1 2SH
		</address>
	`,
  { buttonLabel: "", formName: "" },
  { typeKey: "blue_badge_information_provided" },
  { typeKey: "blue_badge_tarnsferred_to_service" },
  { type: "Request", keywords: [], categories: ["Parking"] },
  { date: "01/10/2024", name: "Shahzad Athar" }
);

const blueBadge = new MenuP("blueBadge", "Blue Badge", "", [
  whocanApplyforaBlueBadge,
  whatisHappeningwithmyBlueBadgeApplication,
  lostorStolenBlueBadge,
  blueBadgetakenbyanEnforcementOfficer,
  whoshouldIReportaboutaDeath,
]);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const parking = new ServiceP(
  "parking",
  "Parking",
  `Car parks, on-street parking, residents' parking permits, visitors' parking, disabled parking, parking fines…`,
  [blueBadge]
);
