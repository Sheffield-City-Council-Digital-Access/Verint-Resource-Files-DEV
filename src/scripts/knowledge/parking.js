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

const blueBadge = new ContentP(
  "bluebadge",
  "Blue Badge",
  "Who can apply for a Blue Badge",
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
      FEL (Funded Early Learning) helps children learn through play activities. Some
      benefits that parents have seen:
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
    </p>
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
      Family Hubs - <a href="tel:01142735665">0114 2735665</a>
    </p>
    <p>
      For information about the new 2-year-old extended working entitlement (15
      hours offer starts April 2024, from 9 months old from September 2024) please
      visit the childcare choices page, there is an assessment tool offering
      families details of childcare support they might be eligible for and a link to
      apply to:
    </p>
    <p>
      HMRC:
      <a href="https://www.childcarechoices.gov.uk"
        >https://www.childcarechoices.gov.uk</a
      >
    </p>
    <p>
      From September 2025, eligible working parents of children from 9 months to
      school age will be entitled to 30 hours of childcare a week.
    </p>
    <h3>What is happening with my Blue Badge Application</h3>
    <p>Update/Chasing Application</p>
    <p>
      You may be able to provide the customer with an update to their application
      using the case notes or status update. All cases will be dealt with in date
      order, there are no exceptions to this regardless of circumstances so do not
      raise requests of this nature to FFT. Blue Badge applications will be assessed
      within 28 days calendar days from the date the application was received. The
      order date of the blue badge is not the despatch date from our 3rd party who
      produce the Blue Badge.
    </p>
    <p>
      Once Sheffield City Council have ordered the Blue Badge the 3rd Party have 3-4
      working days to despatch and weekends need to be taken into account.
    </p>
    <h3>
      What should I do if my Blue Badge is confiscated by an Enforcement Officer
    </h3>
    <p>
      Send an e-mail to:
      <a href="mailto:customerservices@sheffield.gov.uk"
        >customerservices@sheffield.gov.uk</a
      >
      or send a letter to:
      <address>
        Customer Services<br />
        Floor 2<br />
        Howden House<br />
        1 Union Street<br />
        Sheffield<br />
        S1 2SH<br />
      </address>
    </p>
    <p>
      Detail the circumstances which led to the blue badge being taken, once we have
      that information the customer will be contacted, and a decision made around
      returning the blue badge.
    </p>
    <h3>Who Should I report a Death to</h3>
    <p>
      If the customer has an appointment with Registrars in Sheffield to report the
      death, they can sign up to 'Tell Us Once' meaning the customer does not have
      to report it to each individual service. Alternatively, the details can be
      taken today and passed to our back-office team who will update our records,
      the badge should be returned to:
      <address>
        Customer Services<br />
        Floor 2<br />
        Howden House<br />
        1 Union Street<br />
        Sheffield<br />
        S1 2SH<br />
      </address>
    </p>
  `,
  {
    buttonLabel: "Apply for or renew a Blue Badge",
    formName: "blue_badge_application",
  },
  { typeKey: "apply_blue_badge_transfered_to_service" },
  { typeKey: "apply_blue_badge_information_provided" },
  {
    type: "Apply",
    keywords: [
      "Blue badge application",
      "bluebadg",
      "bleu badge",
      "blue bage",
      "bluebadje",
      "blu badge",
      "badg",
      "bagde",
      "badeg",
      "badje",
      "badgge",
      "blu",
      "bleu",
      "bluw",
      "bloue",
      "bule",
      "applicotion",
      "aplication",
      "applcation",
      "applicaton",
      "aplicacion",
      "applucation",
    ],

    categories: ["Travel and Transport"],
  },
  { date: "12/09/2024", name: "Shahzad Athar" }
);

const parkingPermits = new ContentP(
  "parkingPermits",
  "Parking Permits",
  "Parking Permits",
  `
	<h2>Parking Permits</h2>
	<h3>About the Permit</h3>
	<h3>Business Permit Information</h3>
	<p>There are two types of business permit available:</p>
	<ul>
	    <li>Vehicle specific - Vehicle specific business permits are now paperless, virtual permits (similar to tax discs).
	    </li>
	    <li>Pool permit - Pool business permits allow staff at a business to share the use of the permit to park near the
		business.</li>
	</ul>
	<p>A physical permit will be issued by post. The permit can only be used in one vehicle at a time. Replacement pool
	    permits will not be issued.</p>
	<p>You may have up to 2 annual permits per business. Any requests for additional permits will be assessed when the
	    application is received.</p>
	<p>Business permits are not valid for the city centre, Falding Street, Holme Lane, Loxley New Road, and Vaughton Hill
	    parking zones.</p>
	<h3>Cost</h3>
	<ul>
	    <li>1st permit £111.80</li>
	    <li>Additional permits £223.20</li>
	</ul>
	<h3>Evidence Required - Vehicle Ownership</h3>
	<p>You will need to provide us with an electronic copy of one of the following:</p>
	<ul>
	    <li>Registration document (V5)</li>
	    <li>Vehicle insurance certificate</li>
	    <li>Lease agreement in your name</li>
	    <li>Letter on company headed paper verifying that you work for them with the V5 or the vehicle lease document (if
		you use a company car)</li>
	</ul>
	<h3>Evidence Required - Proof of Address</h3>
	<p>We will check our Council Tax or electoral records or we will ask you to provide an electronic copy of one of the
	    following items that show your name and address:</p>
	<ul>
	    <li>Most recent utility bill</li>
	    <li>Tenancy agreement (witnessed and signed)</li>
	    <li>Current household contents insurance policy</li>
	    <li>Current vehicle insurance certificate or schedule</li>
	    <li>Bank statement or credit card bill dates or showing transactions from the last 2 months (block out your account
		details)</li>
	    <li>Payslip, pension slip, benefits notification letter or Inland Revenue notice of bill coding dated within the
		last 2 months (block out any personal details)</li>
	</ul>
	<p>Failure to provide proof of vehicle registration and/or proof of your address will result in cancellation of the
	    permit/s with no refund.</p>
	<h3> Carer Permit and Medical</h3>
	<h3>Resident Carer</h3>
	<h3>About the Permit</h3>
	<p>If you need essential care at home provided by a carer or carers, you may be eligible for a resident’s carer permit.
	    It entitles the vehicle to park without time limit in a 'permit holders only' bay while the driver provides care for
	    the permit holder in their home.</p>
	<p>They are not available for residents of the inner or outer city centre or Holme Lane, Loxley New Road and Vaughton
	    Hill schemes.</p>
	<p>Permits will normally be limited to one per household.</p>
	<p>Replacement pool permits will not be issued.</p>
	<h3>Cost</h3>
	<p>A 12 month permit is £10.00.</p>
	<h3>Evidence Required</h3>
	<ul>
	    <li>Carer's Allowance statement for the person who helps look after you</li>
	    <li>Higher rate of Disability Living Allowance for personal care</li>
	    <li>Enhanced rate of Personal Independence Payment</li>
	    <li>Constant Attendance Allowance</li>
	    <li>A letter from your doctor (GP) or healthcare specialist confirming that you need care at home (dated within the
		last 3 months)</li>
	</ul>
	<h3>Organisation Carer</h3>
	<h3>About the Permit</h3>
	<p>As an organisation you can apply for a permit to use in permit holder bays in all parking zones but not in the city
	    centre.</p>
	<p>Organisation carer permits are available for:</p>
	<ul>
	    <li>Mental health social workers visiting a patient who may need to be detained under the Mental Health Act</li>
	    <li>Primary care outreach nurses</li>
	    <li>TB nurses</li>
	    <li>Health Visitors</li>
	    <li>Family support workers</li>
	</ul>
	<p>The driver can only use the permit for carrying out visits to clients or patients, not to park where they are based
	    (their workplace).</p>
	<p>Carer permit holders have to display a timer disc in the vehicle to show when they started parking. The maximum time
	    for parking is 2 hours.</p>
	<p>If the client/patient regularly needs longer care visits, they may be eligible to apply for a resident carer permit
	    (see above). Clients/patients who require an occasional longer visit may provide a visitor permit.</p>
	<h3>Cost</h3>
	<p>£10 each for 12 months.</p>
	<h3>Evidence Required</h3>
	<p>The organisation should apply not an individual and provide the following information:</p>
	<ul>
	    <li>The organisations operation</li>
	    <li>How many staff are employed</li>
	    <li>How many permits are required</li>
	    <li>Why the permit is required</li>
	</ul>
	<h3>Medical Professional Carer</h3>
	<h3>About the Permit</h3>
	<p>Medical professional carer permits are available for:</p>
	<ul>
	    <li>NHS qualified medical practitioners</li>
	    <li>NHS medical practitioners carrying essential equipment or drugs to treat a patient resident</li>
	</ul>
	<p>The driver can only use the permit for carrying out visits to clients or patients, not to park where they are based
	    (their workplace).</p>
	<p>Carer permit holders have to display a timer disc in the vehicle to show when they started parking. The maximum time
	    for parking is 2 hours.</p>
	<p>If the client/patient regularly needs longer care visits, they may be eligible to apply for a resident carer permit
	    (see above). Clients/patients who require an occasional longer visit may provide a visitor permit.</p>
	<h3>Cost</h3>
	<p>£10 each for 12 months.</p>
	<h3>Evidence Required</h3>
	<p>The organisation should apply not for an individual and provide the following information:</p>
	<ul>
	    <li>The organisations operation</li>
	    <li>How many staff are employed</li>
	    <li>How many permits are required</li>
	    <li>Why the permit is required</li>
	</ul>
	<h3>Green Parking Permit</h3>
	<h3>About the Permit</h3>
	<p>A green parking permit is for ultra low-emission vehicles (ULEV). A ULEV is any electric or hybrid vehicle that emits
	    less than 75g of carbon dioxide (CO2) per kilometre travelled, with a capability of travelling a minimum range of 10
	    miles with zero CO2 emissions.</p>
	<p>A green permit allows you to park in pay and display on-street bays in the city centre or in Council city car parks.
	</p>
	<p>The scheme is for anyone with an eligible vehicle, irrespective of home address but If you do not comply with the
	    conditions of the scheme you may receive a parking fine.</p>
	<p>Permits will not be issued for any period less than 12 months.</p>
	<p>The permit is paperless and will be activated up to 36 hours after it has been paid for.</p>
	<h3>Cost</h3>
	<p>Green permits are free.</p>
	<h3>Time Limits</h3>
	<p>The time clock provided under the previous Green permit scheme is no longer required to be displayed.</p>
	<p>There are no time limits for parking in pay and display bays on street with a green permit. Car parks tend not to
	    have special time limits for green permits, but there are some where you can only stay for 6 hours. The following
	    car parks are restricted to a maximum stay period of 6 hours for green permit holders:</p>
	<ul>
	    <li>Wellington Street car park (old fire station site)</li>
	    <li>Carver Lane car park</li>
	    <li>Stanley Lane car park</li>
	</ul>
	<h3>Green permits cannot be used:</h3>
	<ul>
	    <li>In non-council car parks or in other parking permit zones like Broomhill and Hillsborough.</li>
	    <li>In the Science Car Park A car park, Monday to Friday from 8am to 4pm.</li>
	    <li>At all Sheffield Hallam University ‘Permit Holders only’ car parks - these are indicated by yellow signs.</li>
	</ul>
	<title>Langsett and Hillsborough Bus and Tram Gate</title>
	<h3>About the Permit</h3>
	<p>A permit to drive through the bus or tram gate at Langsett Road (outbound only) is available for residents of the
	    following roads:</p>
	<ul>
	    <li>Rudyard Road</li>
	    <li>Rudyard Mews</li>
	    <li>Treswell Crescent</li>
	    <li>Rider Road</li>
	    <li>Haggard Road</li>
	    <li>Kipling Road</li>
	</ul>
	<p>Each 'permit of exemption' is valid for 12 months. Without a permit, residents can't use the bus or tram gate. The
	    bus or tram gate on Langsett Road is just beyond Ripley Street.</p>
	<p>The permit doesn't allow the holder to use other bus/tram gates in Hillsborough or elsewhere in Sheffield. This
	    includes the ‘inbound’ bus or tram gates on Holme Lane or Middlewood Road. If holders do (when signs say they
	    shouldn't), we may consider withdrawing the exemption completely.</p>
	<p>We can provide exemptions for additional vehicles registered at individual properties (subject to appropriate
	    evidence). However, we are not able to provide exemptions for visitors to properties, delivery vehicles, or
	    short-term hire or ‘lease’ cars (unless registered at an address on one of the above roads).</p>
	<h3>Cost</h3>
	<p>There is no charge for this permit.</p>
	<h3>Evidence Required - Proof of Address</h3>
	<p>We will check your Sheffield Council Tax or electoral records. If we do not have these, provide an electronic copy of
	    one of the following:</p>
	<ul>
	    <li>Last utility bill</li>
	    <li>Tenancy agreement</li>
	    <li>Council Tax statement</li>
	    <li>Proof of vehicle ownership</li>
	    <li>Registration document (V5)</li>
	    <li>Vehicle insurance certificate</li>
	    <li>Company car: also include a letter on company headed paper</li>
	</ul>
	<h3>Residents Permit</h3>
	<h3>About the Permit</h3>
	<p>Residents parking permits are for residents living within a parking permit zone. There are exceptions if the planning
	    consent states that an address is a car-free property.</p>
	<p>Residents parking permits are now paperless, virtual permits (similar to tax discs).</p>
	<p>You must apply for, renew, cancel, or change a residents permit online.</p>
	<h3>Cost</h3>
	<ul>
	    <li>City Centre inner zone: £310.00</li>
	    <li>City Centre outer zone: £155.00</li>
	    <li>Other zones - 1st permit: £55.80</li>
	    <li>Other zones - additional permit: £111.60</li>
	</ul>
	<h3>Evidence Required - Vehicle Ownership</h3>
	<p>You will need to provide us with an electronic copy of one of the following:</p>
	<ul>
	    <li>Registration document (V5)</li>
	    <li>Vehicle insurance certificate</li>
	    <li>Lease agreement in your name</li>
	    <li>Letter on company headed paper verifying that you work for them with the V5 or the vehicle lease document (if
		you use a company car)</li>
	</ul>
	<h3>Evidence Required - Proof of Address</h3>
	<p>We will check our Council Tax or electoral records or we will ask you to provide an electronic copy of one of the
	    following items that show your name and address:</p>
	<ul>
	    <li>Most recent utility bill</li>
	    <li>Tenancy agreement (witnessed and signed)</li>
	    <li>Current household contents insurance policy</li>
	    <li>Current vehicle insurance certificate or schedule</li>
	    <li>Bank statement or credit card bill dated or showing transactions from the last 2 months (block out your account
		details)</li>
	    <li>Payslip, pension slip, benefits notification letter or Inland Revenue notice of bill coding dated within the
		last 2 months (block out any personal details)</li>
	</ul>
	<p>Failure to provide proof of vehicle registration and/or proof of your address will result in cancellation of the
	    permit(s) with no refund.</p>
	<title>Trade Permits</title>
	<h3>About the Permit</h3>
	<p>These allow trades persons to park whilst they are working in Sheffield permit zones. These permits are for voucher
	    books so please order in advance.</p>
	<p>They are not valid in the city centre, Falding Street, Holme Lane, Loxley New Road and Vaughton Hill parking zones.
	</p>
	<p>There is no limit to the number of trade permits you can buy.</p>
	<h3>Cost</h3>
	<p>Batch of 25 daily permits: £96.85</p>
	<p>Permits should be validated and displayed in the vehicle promptly after parking. They are valid until midnight on the
	    day of use.</p>
	<h3>Evidence Required</h3>
	<p>You would need to provide us with an electronic copy of one of the following:</p>
	<ul>
	    <li>Letter addressed to you from Planning or Building Control detailing the works that you are carrying out at a
		property within an existing permit scheme</li>
	    <li>Official estimate, invoice or job sheet (on company headed paper) for the work on the property that is in an
		existing permit scheme where work is being carried out</li>
	    <li>Current landlord insurance for a property that you rent out to tenants within an existing permit scheme</li>
	    <li>Registered trader card (for example a Gas Safe engineer card)</li>
	    <li>Letter on company headed paper confirming that your organisation is a registered Housing Association</li>
	</ul>
	<h3>Utility Permit</h3>
	<h3>About the Permit</h3>
	<p>Utility permits are for bigger utility companies i.e. British Gas, NPower or BT - for use in the Inner/Outer City
	    Centre.</p>
	<p>If a company is working outside the City Centre then they would need a Trade Permit.</p>
	<h3>Costs</h3>
	<p class="cost">£193.75 for a book of 25 half day passes.</p>
	<h3>Visitors Permits</h3>
	<h3>About the Permit</h3>
	<p>You can apply for paper visitor parking permit books online. These are for people visiting you at home.</p>
	<p>The permit should be validated and displayed in the vehicle promptly after your visitor has arrived.</p>
	<p>Instead of using visitor parking permits, visitors can use nearby pay and display or unrestricted parking to leave
	    more parking for regular permit holders.</p>
	<p>You can also use visitor parking permits for contractors working on your house. If the contractor needs parking for
	    more than 2 weeks, they should apply for a trade permit.</p>
	<h3>Charge for Permit</h3>
	<p>It costs £19.35 for a batch of 25 daily permits. These are valid on the day of use until 10am the following day.</p>
	<p class="important">These permits cannot be refunded or exchanged.</p>
	<h3>Evidence Required</h3>
	<p>We will check our Council Tax or electoral records or we will ask you to provide an electronic copy of one of the
	    following items that show your name and address:</p>
	<ul>
	    <li>Most recent utility bill</li>
	    <li>Tenancy agreement (witnessed and signed)</li>
	    <li>Current household contents insurance policy</li>
	    <li>Current vehicle insurance certificate or schedule</li>
	    <li>Bank statement or credit card bill dated or showing transactions from the last 2 months (block out your account
		details)</li>
	    <li>Payslip, pension slip, benefits notification letter or Inland Revenue notice of bill coding dated within the
		last 2 months (block out any personal details)</li>
	</ul>
	<h3>Penalty Charge Notice</h3>
	<h3>Payment Enquiries</h3>
	<h3>Making a Payment</h3>
	<p>It is quick, safe, and secure to make a payment online or using our automated telephone payment line. To do this,
	    you will need:</p>
	<ul>
	    <li>Ticket reference number (can be found on Gateway)</li>
	    <li>Credit or debit card</li>
	    <li>Your vehicle registration number</li>
	</ul>
	<p>Alternatively, you can:</p>
	<ul>
	    <li>Pay at a pay point outlet by cash</li>
	    <li>Pay at a Post Office by cash, cheque, credit, or debit card</li>
	</ul>
	<p>Sheffield does not accept cash, cheque, or postal orders direct.</p>
	<h3>Confirmation of Payment</h3>
	<p>Payments can take up to 3-4 days to show on our system regardless of the payment method.</p>
	<p>If the customer has received further correspondence from Parking Services asking for a payment but:</p>
	<ul>
	    <li>They believe payment has already been made</li>
	    <li>Gateway is not showing case is fully paid (closed)</li>
	</ul>
	<p>The customer should make a written appeal online or in writing (ideally online as it will be processed quicker)
	    and send proof of payment. If a card payment was made, the last 4 digits of the card should be provided.</p>
	<h3>Customer unable to pay</h3>
	<p>If the ticket has been allocated to Enforcement Agents (bailiffs), Parking Services are no longer responsible for
	    collecting the debt and therefore any enquiries relating to payment should be referred directly to the
	    enforcement agents involved.</p>
	<p>At this stage, only payment will be accepted, and routes to appeal have been exhausted.</p>
	<p>The enforcement agent may be able to arrange a payment agreement.</p>
	<p>Parking Services already offer a reduced rate if paid within 14 days. They do not offer payment agreements. In
	    exceptional circumstances, they may be able to extend the time the customer has to pay, but this will be at the
	    full amount.</p>
	<h3>Customer tried to pay online but won't accept details</h3>
	<p>The PCN should show on Gateway/online within minutes of being issued, therefore the customer may have incorrect
	    details. The ticket details can be confirmed on Gateway.</p>
	<p>The VRM should be entered without spaces along with the full PCN number.</p>
	<p>Check the person entering the details has entered the VRM without spaces and entered the full PCN number.</p>
	<h3>Customer has paid twice</h3>
	<p>Escalation</p>
	<h3>Challenging a PCN</h3>
	<h3>How can I appeal</h3>
	<p>Challenges can be made online within 28 days of receiving the original ticket. Please note that it may take up to
	    24 hours for the ticket to appear on the online portal.</p>
	<p>Documentation can be uploaded to support the challenge. The online link also enables the motorist to use an
	    interactive portal to guide them through their appeal. Evidence such as photos of the contravention can be
	    viewed online.</p>
	<p>Do not discuss any possible outcomes or give your opinions. Parking services will contact the customer following
	    the decision.</p>
	<h3>How long do I have to appeal</h3>
	<p>Anyone wanting to appeal should do so within 28 days after the original ticket was received.</p>
	<h3>Will I get a discounted rate if I appeal</h3>
	<p>If the appeal is declined, we will usually re-offer a 14 day discount period if the challenge was received whilst
	    the case is still in the initial 14 day discount period.</p>
	<p>If the charge is already at the full amount and a Notice to Owner letter has been received, there is a further 28
	    days to appeal to us online (usually the discount rate would not be offered again but this will be confirmed
	    when a written reply is sent).</p>
	<p>If the challenge is at charge certificate stage the call should be transferred to parking services (this can be
	    checked on gateway).</p>
	<h3>Have you received my appeal</h3>
	<p>This can be found by checking Gateway.</p>
	<h3>Multiple PCN's</h3>
	<p>Challenges can be made online within 28 days of receiving the original ticket. (It can take up to 24 hours to
	    appear on online portal.) </p>
	<p>Documentation can be uploaded to support the challenge, the online link also enables the motorist to use an
	    interactive portal to guide them through their appeal and evidence can be viewed (e.g photos of the
	    contravention)</p>
	<p>Do not discuss any possible outcomes or give your opinions. Parking services will contact the customer following
	    the decision.</p>
	<h3>Rejected PCN's</h3>
	<p>The correspondence to reject their challenge will explain the next steps to take if they are unhappy with the
	    decision.</p>
	<p>General information relating to the PCN Enforcement is available on the
	    <a href="http://www.patrol-uk.info">http://www.patrol-uk.info</a>
	<h3>Enforcement (Bailiff) Enquiries</h3>
	<p>Once the debt has been referred to enforcement agents there is no further investigation or challenges that can be
	    made. </p>
	<p>To make a payment or arrange an agreement to pay, the customer should contact the appropriate enforcement agency.
	</p>
	<p>If the customer states they moved address before any correspondence was sent out then refer them to Traffic
	    Regulation Centre(TFC) - TFC will provide information how to appeal.</p>
	<h3>Person is not living at that address</h3>
	<p>The envelope should be returned to sender and marked "Not known at this address"</p>
	<p>Our records are taken from DVLA so the customer may wish to update them.</p>
	<h3>Parking Issues</h3>
	<h3>Illegal Parking</h3>
	<p>Refers to a vehicle parked where there are parking restrictions in place, or the vehicle has travelled over
	    parking restrictions to park.</p>
	<p>Parking restrictions include:</p>
	<ul>
	    <li>Single/double yellow lines</li>
	    <li>Permit zones</li>
	    <li>Dropped kerb</li>
	</ul>
	<p>Please note: “H” and Disabled road markings are only advisory and are not legally enforceable in the same way as
	    yellow lines.</p>
	<h3>Vehicle Obstruction</h3>
	<p>Refers to a vehicle causing an obstruction that is considered to be a hazard to other road or footpath users
	    where there are no parking restrictions in place. For example:</p>
	<li>Blocking the footpath</li>
	<li>Parked on a bend or at a junction creating a safety hazard other users</li>
	</li>The Police are responsible for enforcement action against vehicle obstruction on the highway, advise the
	customer to use the 101 service to report</li>
	<h3>Other Obstructions</h3>
	<p>Any other obstruction left on the roads, such as skips, building material, mud, caravans, are dealt with by
	    Highways Enforcement</p>
	<h3>Car Park/Parking Meter Problem</h3>
	<p>Any other obstruction left on the roads, such as skips, building material, mud, caravans, are dealt with by
	    Highways Enforcement.</p>
	<h3>Car Park/Parking Meter Problem</h3>
	<p>Escalation.</p>
	<h3>Bay Suspensions</h3>
	<h3>Requesting a Suspension</h3>
	<p>A request can be made that specific parking bays, for example pay and display, permit holders only, disabled and
	    loading bays are kept clear of parked vehicles in certain circumstances such as:</p>
	<ul>
	    <li>Maintenance of adjacent property where highway access is required for deliveries, essential vehicles, skips
		etc.</li>
	    <li>Skips on the highway</li>
	    <li>Maintenance of trees</li>
	    <li>Police request</li>
	    <li>Security reasons</li>
	    <li>Filming - contact us about filming in the city</li>
	    <li>Any other reason accepted by ourselves</li>
	</ul>
	<p>Parking Services will not suspend bays to provide parking for vehicles unless they are essential for works in the
	    suspended area (such as an asbestos removal vehicle).</p>
	<p>Other works or private vehicles should be parked legally elsewhere (for example in nearby pay and display
	    parking).</p>
	<h3>Submitting your application</h3>
	<p>Applications for parking bay suspensions should be made at least 14 days before the suspension start date.</p>
	<h3>Charges and payment</h3>
	<p>If the application is accepted, Parking Services will contact the customer for payment.</p>
	<p>Full payment must be made at least 9 days before the suspension start date. You can pay by credit card, debit
	    card, or BACS.</p>
	<p>The daily charge per 5m section of bay is £15 for City Centre controlled parking zone, with a non-refundable
	    administration fee of £25. The daily charge per 5m section of bay is £5 for all other areas, with a
	    non-refundable administration fee of £25.</p>
	<h3>Yellow Line Dispensations</h3>
	<h3>Request Yellow Line Dispensation</h3>
	<p>Parking Services will consider dispensations to allow vehicles which are being used as a workshop vehicle (e.g.
	    vehicle where there is equipment which needs to be used directly from the vehicle as part of the work being
	    carried out at an adjacent property) to park on yellow lines, or in bays for longer than restrictions allow.</p>
	<h3>Dispensations are unlikely to be granted if:</h3>
	<ul>
	    <li>A loading ban applies</li>
	    <li>The vehicle is likely to cause an obstruction to traffic flow</li>
	    <li>The vehicle may be hazardous to other road users</li>
	</ul>
	<p>If dispensation is granted, we will issue a signed written notice which must be clearly displayed on the parked
	    vehicle.</p>
	<p>Dispensations are vehicle and location specific, if the dispensation notice has been altered in any way it will
	    be deemed invalid.</p>
	<h3>Submitting your application</h3>
	<p>Applications for dispensations should be made at least 7 days before the dispensation start date.</p>
	<h3>Charges and payment</h3>
	<p>If the application is accepted, Parking Services will contact the customer for payment.</p>
	<p>Full payment is required before dispensation can be granted. There is a charge of £15 per vehicle per day for a
	    dispensation as well as a £25 non-refundable administration fee.</p>
	<h3>Vehicle parked in a Suspended Bay</h3>
	<p>Should be reported to Parking Enforcement</p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "parking_permit_information_provided" },
  { typeKey: "" },
  {
    type: "Information",
    keywords: [
      "parking permit",
      "parking pass",
      "parking permitt",
      "parking permt",
      "parking pemit",
      "parkin permit",
      "parking permitt",
      "parknig",
      "parkingg",
      "paking",
      "parrking",
      "parkng",
      "permt",
      "permmit",
      "permitt",
      "pemit",
      "premit",
    ],
    categories: ["Parking"],
  },
  { date: "18/09/2024", name: "Dinah WIlliams" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const parking = new ServiceP(
  "parking",
  "Parking",
  `Car parks, on-street parking, residents' parking permits, visitors' parking, disabled parking, parking fines…`,
  [parkingPermits, blueBadge]
);
