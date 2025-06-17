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

//#region Cross regional tiles

const makingAPayment = new ContentP(
  "makingAPayment",
  "Making A Payment",
  "Learn how to make a secure payment for parking tickets online, by phone, or at pay point outlets, including the necessary details for processing your payment.",
  `
    <p>
      It is quick, safe, and secure to make a payment online or using our automated
      telephone payment line. To do this, you will need:
    </p>
    <ul>
      <li>Ticket reference number (can be found on Gateway)</li>
      <li>Credit or debit card</li>
      <li>Your vehicle registration number</li>
    </ul>
    <p>
      The customer must enter ** on their keypad in place of the FD letters at the
      start of entering their pcn number
    </p>
    <p>Alternatively, you can:</p>
    <ul>
      <li>Pay at a pay point outlet by cash</li>
      <li>Pay at a Post Office by cash, cheque, credit, or debit card</li>
    </ul>
    <p>
      Sheffield City Council does not accept cash, cheque, or postal orders direct.
    </p>
    <p>
      Payments are taken at the same time as the application is made and the permit
      is then active immediately.
    </p>
    <p>
      For further information, visit
      <a href="https://www.sheffield.gov.uk/parking" target="_blank"
        >Sheffield Parking</a
      >.
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to further information payment link"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
        Send link to review further information
      </button>
    </p>
    <p>
      How to make a payment, visit
      <a
        href="https://www.sheffield.gov.uk/parking/pay-penalty-charge-notice"
        target="_blank"
        >Pay a Penalty Charge Notice</a
      >.
      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to to pay for a parking fine"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
        Send link to to pay a parking fine
      </button>
    </p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "06/12/2024", name: "Nathan Smith" }
);

const customerPaidTwice = new ContentP(
  "customerPaidTwice",
  "Customer Has Paid Twice",
  "Report a double payment issue by emailing Customer Services with the details of the problem for investigation",
  `
      <p>
        The customer needs to email <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> advising 
        the issue they experienced, customer services will then look into the issue
      </p>
    `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "27/11/2024", name: "Andy Walker" }
);

//#endregion Cross regional tiles

//#region Blue Badge

const appealBlueBadge = new ContentP(
  "apealBlueBadge",
  "Appeal a Blue Badge Decision",
  "",
  `   
   <h3>Appeal a Blue Badge Decision</h3>
    <ul>
      <li>The customer can request a review of the decision.</li>
      <li>Add a note on the case outlining any information given by the customer.</li>
      <li>If the customer wishes to provide any further supporting documents, advise them that they can send them to <a href="mailto:bluebadge@sheffield.gov.uk">bluebadge@sheffield.gov.uk</a>.</li>
      <li>Give the customer the case reference number for their application and ask them to quote it if sending any further information.</li>
      <li>Note on the case the advice given to the customer.</li>
      <li>Advise the customer that the review request has been made.</li>
      <li>Reallocate the case to Appeals.</li>
    </ul>  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "blue_badge_information_provided" },
  {
    type: "Appeal",
    keywords: [
      "Car",
      "blu",
      "bb",
      "bbadge",
      "blue bad",
      "bdge",
      "appeel",
      "serivce",
      "parkng",
      "park",
      "parkng",
      "prking info",
      "Blue Badge",
      "blue badge",
      "parking"
    ],
    categories: ["Parking"],
  },
  { date: "04/06/2025", name: "Dinah Williams" }
);

const applyBlueBadge = new ContentP(
  "applyBlueBadge",
  "Apply for a Blue Badge",
  "Learn about the eligibility criteria and application process for a Blue Badge, including automatic qualification and discretionary assessments.",
  `
    <h3>Eligible Without Further Assessment</h3>
      <p>(Previously known as 'automatic')</p>
      <p>
        The customer will automatically qualify for a blue badge if they are more 
        than three years old and fall within one or more of the following descriptions:
      </p>
      <ul>
        <li>Receives the higher rate of the mobility component of the Disability Living Allowance.</li>
        <li>Receives the mobility component of Personal Independence Payment (PIP) and has obtained 8 points or more under the "moving around" activity.</li>
        <li>Receives the mobility component of Personal Independence Payment (PIP) and has obtained 10 points specifically for descriptor E under the "planning and following journeys" activity, on the grounds that they are unable to undertake any journey because it would cause them overwhelming psychological distress.</li>
        <li>Is registered blind (severely sight impaired).</li>
        <li>Receives a War Pensioner's Mobility Supplement (WPMS).</li>
        <li>Has been both awarded a lump sum benefit at tariffs 1-8 of the Armed Forces Compensation Scheme and certified as having a permanent and substantial disability which causes inability to walk or very considerable difficulty in walking.</li>
        <li>Has a life-limiting illness and may have been issued with an SR1 form.</li>
      </ul>

      <h3>Eligible Subject to Further Assessment</h3>
      <p>(Previously known as 'discretionary')</p>
      <p>
        If the customer does not meet any of the criteria above, they will need to 
        complete an application form giving details of their disability to be 
        assessed under the 'eligible subject to further assessment' criteria.
      </p>
     
      <p>
      <a href="https://www.gov.uk/apply-blue-badge" target="_blank">https://www.gov.uk/apply-blue-badge</a>
      <button type="button" class="dform_widget email-btn dform_widget_type_button"
          aria-label="Send link to apply for a blue badge"
          onclick="
            window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
              KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
            }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20a%20Blue%20Badge\`
          ">
          Send link to apply online
        </button>
    
  <details class="accordion">
    <summary class="accordion-header">
    <h3>Cost</h3>
    <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>If your application is successful, there is a cost of £10 for the badge.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
    <h3>Evidence</h3> 
    <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <ul> 
    <li>Proof of address, which could be a Council Tax bill, utility bill or bank statement dated within the last 3 months.</li> 
    <li>Proof of your identity, which could be a copy of your passport, drivers licence, birth or marriage certificates.</li> 
    <li>If you are not using a passport or driving licence for proof you will need to send us a passport standard photograph.</li> 
    </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
    <h3>What’s happening with my application</h3>
    <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>Provide the customer with an update to their application using case notes or status update.</p> 
    <p>All cases will be dealt with in date order, with no exceptions regardless of circumstances.</p> 
    <p>Blue Badge applications will be assessed within 28 calendar days from the date the application was received.</p> 
    <p>Once Sheffield City Council have ordered the Blue Badge it can take up to 2 weeks to receive.</p>
    </div>
  </details>

    <details class="accordion">
    <summary class="accordion-header">
    <h3>Request Paper Application</h3>
    <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
<p>To request a Blue Badge paper application, follow this link:</p>

<a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/blue_badge_enquiry?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${KDF.getParams().interactionid}">Blue Badge enquiry</a>

    </div>
  </details>


  `,
  {
    buttonLabel: "Apply for a blue badge",
    formName: "blue_badge_application",
  },
  { typeKey: "" },
  { typeKey: "blue_badge_information_provided" },
  {
    type: "Apply",
    keywords: [
      "Car",
      "Blu Badg",
      "bbadge",
      "blue bdge",
      "bb",
      "badg",
      "appely",
      "parkin",
      "prking",
      "perking",
      "Blue Badge",
      "blue badge",
      "parking"
    ],
    categories: ["Parking"],
  },
  { date: "04/06/2025", name: "Dinah Williams" }
);

const blueBadgeHolderPassedAway = new ContentP(
  "blueBadgeHolderPassedAway",
  "Badge Holder Passed Away",
  "Learn how to report the passing of a Blue Badge holder and return the badge to Sheffield City Council.",
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
  { typeKey: "" },
  { typeKey: "blue_badge_information_provided" },
  {
    type: "Request",
    keywords: [
      "Car",
      "Car Badge",
      "Blu Badg",
      "bbadge",
      "blue bdge",
      "badg",
      "appely",
      "parkin",
      "prking",
      "bb",
      "blu",
      "Blue Badge",
      "blue badge",
      "blue badge holder passed away",
      "badge holder deceased",
      "passed away",
      "deceased badge holder"
    ],
    categories: ["Parking"],
  },
  { date: "19/02/2025", name: "Andy Walker" }
);

const replacementBlueBadge = new ContentP(
  "lostorStolenBlueBadge",
  "Request a replacement badge",
  "Find out how to request a replacement for a misplaced, stolen, or seized Blue Badge, including the process for submitting a form or contacting customer services.",
  `   
   <h3>Misplaced or stolen badges</h3>
      <p>
        If your badge is lost, damaged, stolen, or if you need to amend details on it, there is a £10 charge.
      </p>
      <p>
        If a badge is lost or stolen we now require a form to be completed with a signature. 
        The form is available online to print or alternatively a form can be sent out via 2nd post.  You may also request a large print option.
      </p>
      <h3>Badges seized by an enforcement officer</h3>
      <p>
        If your Blue Badge has been confiscated by an Enforcement Officer,
        you will need to:
      </p>
      <p>
        Send an e-mail to
        <a href="mailto:customerservices@sheffield.gov.uk" target="_blank">customerservices@sheffield.gov.uk</a>
      </p>
      <p>
        Or send a letter to:
      </p>
      <address>
        Customer Services<br>
        Floor 2<br>
        Howden House<br>
        1 Union Street<br>
        Sheffield<br>
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
  { typeKey: "" },
  { typeKey: "blue_badge_information_provided" },
  {
    type: "Request",
    keywords: [
      "Car",
      "Blu Badg",
      "bbadge",
      "blue bdge",
      "badg",
      "bb",
      "Blue Badge",
      "blue badge",
      "lost",
      "lost and stolen",
      "replacement",
      "replacment",
      "replc",
      "replacmnt",
      "stolen",
      "badge replacement",
      "blue badge replacemnt",
      "parkin",
      "prking"
    ],
    categories: ["Parking"],
  },
  { date: "04/06/2025", name: "Dinah Williams" }
);

const blueBadge = new MenuP(
  "blueBadge",
  "Blue Badge",
  "Information on applying for a Blue Badge, including eligibility criteria, replacement requests, and procedures for reporting the passing of a Blue Badge holder or appealing decisions.",
  [
    applyBlueBadge,
    replacementBlueBadge,
    blueBadgeHolderPassedAway,
    appealBlueBadge
  ]
);

//#endregion Blue Badge

//#region Parking Issues

const baySuspensions = new ContentP(
  "baySuspensions",
  "Bay Suspensions",
  "Learn how to request a parking bay suspension, including the application process, charges, and payment details.",
  `
    <h3>Requesting a Suspension</h3>
    <p>
      A request can be made that specific parking bays, for example pay and display,
      permit holders only, disabled and loading bays are kept clear of parked
      vehicles in certain circumstances such as:
    </p>
    <ul>
      <li>
        Maintenance of adjacent property where highway access is required for
        deliveries, essential vehicles, skips etc.
      </li>
      <li>Skips on the highway</li>
      <li>Maintenance of trees</li>
      <li>Police request</li>
      <li>Security reasons</li>
      <li>Filming - contact us about filming in the city</li>
      <li>Any other reason accepted by ourselves</li>
    </ul>
    <p>
      Parking Services will not suspend bays to provide parking for vehicles unless
      they are essential for works in the suspended area (such as an asbestos
      removal vehicle).
    </p>
    <p>
      Other works or private vehicles should be parked legally elsewhere (for
      example in nearby pay and display parking).
    </p>
    <h3>Submitting your application</h3>
    <p>
      Applications for parking bay suspensions should be made at least 14 days
      before the suspension start date.
    </p>
    <h3>Charges and payment</h3>
    <p>
      If the application is accepted, Parking Services will contact the customer for
      payment.
    </p>
    <p>
      Full payment must be made at least 9 days before the suspension start date.
      You can pay by credit card, debit card, or BACS.
    </p>
    <p>
      The daily charge per 5m section of bay is £17.90 for City Centre controlled
      parking zone, with a non-refundable administration fee of £29.85. The daily
      charge per 5m section of bay is £5 for all other areas, with a non-refundable
      administration fee of £29.85.
    </p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "12/02/2025", name: "Dinah Williams" }
);

const carParkParkingMeterProblem = new ContentP(
  "carParkParkingMeterProblem",
  "Car Park/Parking Meter Problem",
  "Report parking meter issues or request a refund by contacting Parking Enforcement via phone or email.",
  `
    <p>
    If the customer is reporting an issue with a parking meter/machine fault, 
    they need to contact Parking Enforcement on <a href="tel:0114 2736255">0114 2736255</a>. Any issues 
    around refunds need to be put in writing to <a href="mailto:parkingenforcement@sheffield.gov.uk">parkingenforcement@sheffield.gov.uk</a>
    </p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "27/11/2024", name: "Dinah WIlliams" }
);

const illegalParking = new ContentP(
  "illegalParking",
  "Illegal Parking",
  "Report illegal parking or vehicles causing obstructions by contacting Parking Enforcement or the police.",
  `
    <p>
      Refers to a vehicle parked where there are parking restrictions in place, or
      the vehicle has travelled over parking restrictions to park.
    </p>
    <p>Parking restrictions include:</p>
    <ul>
      <li>Single/double yellow lines</li>
      <li>Permit zones</li>
      <li>Dropped kerb</li>
    </ul>
    <p>
      Please note: “H” and Disabled road markings are only advisory and are not
      legally enforceable in the same way as yellow lines.
    </p>
    <p>
      If the vehicle is contraveing any highway restrictions i.e. parked on 
      Double Yellow Lines then advise the customer to contact parking enforcement 
      on 01142736255.  If a vehicle is causing an obstruction or blocking acess 
      then advise the customer to contact the police on 101.
    </p>

    <h3>A Customer’s Vehicle Has Been Towed by Us</h3>
    <p>All vehicles are impounded by:</p>
    <ul>
      <li>The Mansfield Group</li>
      <li>Parkway Drive, Sheffield</li>
      <li>Tel: <a href="tel: 08706003444"> 0870 6003444</a></li>
    </ul>
    <p>
    The customer will need to contact Mansfield to retrieve their vehicle. They will need to pay the PCN amount to release their vehicle, and then 
    they can make representations against the PCN if they wish to do so.
    </p>

    <h3>Incorrectly Parked Vehicles (in Contravention)</h3>
    <p>
    Customers can report an incorrectly parked vehicle via our website:<br>
    <a href="https://www.sheffield.gov.uk/parking/report-incorrectly-parked-vehicle" target="_blank">
             https://www.sheffield.gov.uk/parking/report-incorrectly-parked-vehicle
    </a>
    Report an incorrectly parked vehicle
    </a>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20an%20incorrectly%20parked%20vehicle\`
    "
>
    Send link to review further information
</button>

    </p>

  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "15/05/2025", name: "Dinah Williams" }
);

const vehicleObstruction = new ContentP(
  "vehicleObstruction",
  "Vehicle Obstruction",
  "Report vehicle obstructions or hazards to the police via 101, or contact Highways Enforcement for other road obstructions.",
  `
    <p>
      Refers to a vehicle causing an obstruction that is considered to be a hazard
      to other road or footpath users where there are no parking restrictions in
      place. For example:
    </p>
    <ul>
      <li>Blocking the footpath</li>
      <li>
        Parked on a bend or at a junction creating a safety hazard for other users
      </li>
      <li>
        The Police are responsible for enforcement action against vehicle
        obstruction on the highway, advise the customer to use the 101 service to
        report
      </li>
    </ul>
    <h3>Other Obstructions</h3>
    <p>
      Any other obstruction left on the roads, such as skips, building material,
      mud, caravans, are dealt with by Highways Enforcement
    </p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "12/11/2024", name: "Andy Walker" }
);

const vehicleParkedInASuspendedBay = new ContentP(
  "vehicleParkedInASuspendedBay",
  "Vehicle Parked In A Suspended Bay",
  "Learn who to report vehicles parked in a suspended bay to.",
  `<p>Should be reported to Parking Enforcement</p>`,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "12/02/2025", name: "Dinah WIlliams" }
);

const yellowLineDispensations = new ContentP(
  "yellowLineDispensations",
  "Yellow Line Dispensations",
  "Learn how to apply for a Yellow Line Dispensation, including eligibility, application process, and associated charges.",
  `
    <h3>Request Yellow Line Dispensation</h3>
    <p>
      Parking Services will consider dispensations to allow vehicles which are being
      used as a workshop vehicle (e.g. vehicle where there is equipment which needs
      to be used directly from the vehicle as part of the work being carried out at
      an adjacent property) to park on yellow lines, or in bays for longer than
      restrictions allow.
    </p>
    <h3>Dispensations are unlikely to be granted if:</h3>
    <ul>
      <li>A loading ban applies</li>
      <li>The vehicle is likely to cause an obstruction to traffic flow</li>
      <li>The vehicle may be hazardous to other road users</li>
    </ul>
    <p>
      If dispensation is granted, we will issue a signed written notice which must
      be clearly displayed on the parked vehicle.
    </p>
    <p>
      Dispensations are vehicle and location specific, if the dispensation notice
      has been altered in any way it will be deemed invalid.
    </p>
    <h3>Submitting your application</h3>
    <p>
      Applications for dispensations should be made at least 7 days before the
      dispensation start date.
    </p>
    <h3>Charges and payment</h3>
    <p>
      If the application is accepted, Parking Services will contact the customer for
      payment.
    </p>
    <p>
      Full payment is required before dispensation can be granted. There is a charge
      of £17.90 per vehicle per day for a dispensation as well as a £29.85 non-refundable
      administration fee.
    </p>
	`,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "14/10/2024", name: "Dinah WIlliams" }
);

const parkingIssues = new MenuP(
  "parkingIssues",
  "Parking Issues",
  "Guidance on reporting illegal parking, vehicle obstructions, and issues with parking meters. It also includes information on bay suspensions, yellow line dispensations, and vehicles parked in suspended bays.",
  [
    illegalParking,
    vehicleObstruction,
    carParkParkingMeterProblem,
    baySuspensions,
    yellowLineDispensations,
    vehicleParkedInASuspendedBay
  ]
);

//#endregion Parking Issues

//#region Parking Permits

const businessPermit = new ContentP(
  "businessPermit",
  "Business Permit",
  "Learn about the types, costs, and application process for business permits, including required evidence for vehicle ownership and proof of address.",
  `
<h3>Business parking permit</h3>

<p>
  You will need a permit if your business is in a parking permit zone and 
  you want to use on-street parking spaces.
</p>

<p>There are two types of business permits available:</p>

<h4>Single vehicle permit</h4>
<ul>
  <li>
    This is a paperless permit for a specific car that cannot be used in any other vehicle.
  </li>
</ul>

<h4>Pool Permit</h4>
<ul>
  <li>
    Pool business permits allow staff at a business to share the use of the permit to park near the business.
  </li>
</ul>

<h3>Cost</h3>
<ul>
  <li>The first permit costs £111.60</li>
  <li>A second permit costs £223.20</li>
</ul>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Exceptions</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
 <p>Business permits are not issued for:</p>
            <ul>
                <li>City centre Inner/Outer zones</li>
                <li>Falding Street</li>
                <li>Holme Lane</li>
                <li>Edward Street Flats Car Park</li>
                <li>Loxley New Road</li>
                <li>Vaughton Hill</li>
            </ul>
             </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Number of permits</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
     <h4>You can have 2 permits per business.</h4>
            <p>
                Businesses in Neepsend have the option to apply for additional permits. If you’d like to apply for 
                additional permits, please log in to your account, select the ‘Business Discretionary’ permit type 
                and complete your application.
            </p> 
        </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>How long a permit lasts</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
  <p>
      Permits are issued for one year. It is your responsibility to ensure your permit is renewed. 
      We do not issue replacement pool permits; if you lose them, you will need to apply again. 
  </p>
      </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Where you can use the permit</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
  <p>
      A permit does not entitle you to park directly at your business address, but it allows you to park in 
      any designated on-street parking space within the zone your permit is for. 
  </p>
            <p>
                You can park your vehicle without time limits in any on-street bay in the parking zone that is signed 
                for the use of permit holders.
            </p>
            <p>
                Botanical zone permits are also valid for parking in the Sharrow Vale centre, Endcliffe, and Stalker Lees zones.
            </p>
            <p>
                Broomhall and The Groves permit holders can also park in Broomspring Lane car park.
            </p>
            <p>
                Chandos Street, College Street, Beaufort Road, and Severn Road permits are also valid in the Broomhill zone. 
                However, if you have a Broomhill permit, you cannot park on Beaufort Road, Severn Road, Chandos Street, or College Street.
            </p>
            <p>Business permits are not valid for use in any of the permit bays on:</p>
            <ul>
                <li>Hickmott Road</li>
                <li>Rosedale Gardens</li>
                <li>Sharrow Vale Road (between Junction Road and Lynton Road)</li>
                <li>Bennett Street</li>
                <li>Randall Place</li>
                <li>Harwood Close</li>
                <li>Thorp Close</li>
                <li>The residential parking areas off Dover Street, Ellison Street, or Netherthorpe Place</li>
            </ul>
            <p>Business permits are not valid for use in any of the shared-use permit bays on these roads:</p>
            <ul>
                <li>Fulwood Road</li>
                <li>Glossop Road</li>
                <li>Westbourne Road (from Glossop Road to Southbourne Road)</li>
                <li>Ashdell Road (from Glossop Road to Ashdell)</li>
                <li>Peel Street</li>
                <li>Newbould Lane (Whitham Road to Nile Street)</li>
                <li>2-hour maximum stay bays on Beech Hill Road</li>
                <li>Watson Road</li>
                <li>Ashgate Road</li>
                <li>Whitham Road</li>
                <li>Spooner Road (from Crookes Road to car park ramp) </li>
            </ul>        
    </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Evidence Required</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
<h4> Vehicle Ownership</h4>
<p>
	You will need to provide us with an electronic copy of one of the following:
</p>
<ul>
	<li>Registration document (V5)</li>
	<li>Vehicle insurance certificate</li>
	<li>Lease agreement in your name</li>
	<li>Letter on company headed paper verifying that you work for them with the V5 or the vehicle lease document (if you use a company car)</li>
</ul>
<h4>Proof of Address</h4>
<p>
	  We will check our Council Tax or electoral records or we will ask you to provide an electronic copy of one of the following items that show your name and address:
 </p>
<ul>
	<li>Most recent utility bill</li>
	<li>Tenancy agreement (witnessed and signed)</li>
	<li>Current household contents insurance policy</li>
	<li>Current vehicle insurance certificate or schedule</li>
	<li>Bank statement or credit card bill dates or showing transactions from the last 2 months (block out your account details)</li>
	<li>Payslip, pension slip, benefits notification letter or Inland Revenue notice of bill coding dated within the last 2 months (block out any personal details)</li>
</ul>
<p>
	Failure to provide proof of vehicle registration and/or proof of your address will result in cancellation of the permit/s with no refund.
</p>
<p>
      When you purchase your parking permit you need to send proof of eligibility 
      to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days 
      (if you have not been requested to do so in the application process). 
      At any time after this while you hold a permit we may require you to provide proof 
      of your vehicle registration and your home or business address as part of 
      regular audit checks. If this is requested please submit them to 
      <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> 
</p>          
    </div>
</details>

<h4> Vehicle Ownership</h4>
<p>
	You will need to provide us with an electronic copy of one of the following:
</p>
<ul>
	<li>Registration document (V5)</li>
	<li>Vehicle insurance certificate</li>
	<li>Lease agreement in your name</li>
	<li>Letter on company headed paper verifying that you work for them with the V5 or the vehicle lease document (if you use a company car)</li>
</ul>
<h4>Proof of Address</h4>
<p>
	We will check our Council Tax or electoral records or we will ask you to provide an electronic copy of one of the following items that show your name and address:
 </p>
<ul>
	<li>Most recent utility bill</li>
	<li>Tenancy agreement (witnessed and signed)</li>
	<li>Current household contents insurance policy</li>
	<li>Current vehicle insurance certificate or schedule</li>
	<li>Bank statement or credit card bill dates or showing transactions from the last 2 months (block out your account details)</li>
	<li>Payslip, pension slip, benefits notification letter or Inland Revenue notice of bill coding dated within the last 2 months (block out any personal details)</li>
</ul>
<p>
	Failure to provide proof of vehicle registration and/or proof of your address will result in cancellation of the permit/s with no refund.
</p>
<p>
      When you purchase your parking permit you need to send proof of eligibility 
      to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days 
      (if you have not been requested to do so in the application process). 
      At any time after this while you hold a permit we may require you to provide proof 
      of your vehicle registration and your home or business address as part of 
      regular audit checks. If this is requested please submit them to 
      <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> 
</p>         
</div>
</details>

<p>
	For further information, visit <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
</p>

     <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information and to apply send link to apply online"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
        Send link to review further information
      </button>


	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "05/03/2025", name: "Gee Whitehouse" }
);

const residentsCarer = new ContentP(
  "residentsCarer",
  "Resident's Carer",
  "Learn about eligibility, cost, and required evidence for a carer permit, allowing carers to park in permit holder areas while providing home care.",
  `

  <section class="info-panel" role="region" aria-label="Information panel">
    <p>
        There is a system issue that will prevent the renewal of paper resident's carer parking permits. 
        You will need to allow your permit to expire, then as early as possible within the 14-day grace period, 
        buy a new permit. We apologise for the inconvenience.
    </p>
</section>

<h3>Resident's carer parking permit</h3>

<p>
    If your essential care at home is provided by a carer or carers, you may be eligible for a resident’s carer permit. 
    You can apply for a paper permit which they will need to display when they visit you.  
    It allows your carer to use on-street parking bays in your parking permit zones, without a time limit, 
    while they provide you with care.
</p>

<p>This permit can only be used by your carer or carers.</p>

<h4>Cost</h4>
<p>This permit is free.</p>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Exceptions</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
<p>These permits are not available for:</p>
            <ul>
                <li>City centre</li>
                <li>Hawley Street Car Park</li>
                <li>Holme Lane</li>
                <li>Loxley New Road</li>
                <li>Vaughton Hill schemes</li>
                <li>Developments within parking permit zones that are car-free. 
                    You should check with your landlord, letting agent, or solicitor if your property is car-free.</li>
            </ul> 
            </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Number of permits</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
<p>These permits are not available for:</p>
            <ul>
                <li>City centre</li>
                <li>Hawley Street Car Park</li>
                <li>Holme Lane</li>
                <li>Loxley New Road</li>
                <li>Vaughton Hill schemes</li>
                <li>Developments within parking permit zones that are car-free. 
                    You should check with your landlord, letting agent, or solicitor if your property is car-free.</li>
            </ul> 
    </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>How long a permit lasts</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
<p>
                Permits are issued for one year. It is your responsibility to ensure your permit is renewed. 
                Once we have all your supporting evidence, we will respond to your application within 10 working days.
                If your application requires further investigation, we will contact you within 28 working days.
            </p>
            <p>Should you lose your permit, replacement permits will not be issued, and you will need to apply for a new permit.</p> 
    </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Where your carer can use the permit</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
       <p>
                Your carer can park in any designated on-street parking space in the zone the permit is for.  
                A permit does not guarantee parking directly at an address.
            </p> 
    </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Evidence Required</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
 <ul>
                <li>Carer's Allowance statement for the person who helps look after you</li>
                <li>Higher rate of Disability Living Allowance for personal care</li>
                <li>Enhanced rate of Personal Independence Payment</li>
                <li>Constant Attendance Allowance</li>
                <li>
                    A letter from your doctor (GP) or healthcare specialist confirming that you 
                    need care at home (dated within the last 3 months)
                </li>
            </ul>
            <p>
                When you purchase your parking permit, you need to send proof of eligibility 
                to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days 
                (if you have not been requested to do so in the application process).  
                At any time after this, while you hold a permit, we may require you to provide proof 
                of your vehicle registration and your home or business address as part of 
                regular audit checks. If this is requested, please submit them to  
                <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a>.
            </p> 
            </div>
</details>

<p>
    For further information, visit  
    <a href="https://www.sheffield.gov.uk/parking" target="_blank">
        https://www.sheffield.gov.uk/parking
    </a>.
</p>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information and to apply send link to apply online"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
    "
>
    Send link to review further information
</button>

     
  `,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "06/03/2025", name: "Gee Whitehouse" }
);

//
//customerPaidTwice is in the cross regional section at the top of the Parking.js file
//

const greenParkingPermit = new ContentP(
  "greenParkingPermit",
  "Green Parking Permit",
  "Learn about the eligibility, benefits, and application process for a free Green Parking Permit for ultra low-emission vehicles (ULEVs).",
  `
	<p>
	    A green parking permit allows Ultra Low Emission Vehicles (ULEVs) that meet the following criteria to park in the city centre for free. 
	    Anyone with an eligible vehicle can apply for it.
	</p>
	
	<p>The vehicle must be:</p>
	<ul>
	    <li>electric or hybrid fuel type</li>
	    <li>emit less then 75g of carbon dioxide (CO2) per kilometre travelled, with a capability of travelling a minimum range of 10 miles with zero CO2 emissions</li>
	</ul>
	
	<p>
	    You can use the DVLA checker to see if your vehicle meets these standards. 
	    It may show 0g on the CO2 emissions for some diesel vehicles as this data is not on their records. 
	    Such vehicles are not ULEVs and do not qualify for a green parking permit.
	</p>
	
	<h3>Cost</h3>
	<p>Green permits are free.</p>
	
	<details class="accordion">
	  <summary class="accordion-header">
	    <h3>How long a permit lasts</h3>
	    <div class="accordion-icon"></div>
	  </summary>
	  <div class="accordion-content">
	    <p>
	      Permits are issued for one year. It is your responsibility to ensure your permit is renewed. 
	      We do not issue replacement pool permits; if you lose them, you will need to apply again. 
	    </p>
	  </div>
	</details>
	
	<details class="accordion">
	  <summary class="accordion-header">
	    <h3>Where you can use the permit</h3>
	    <div class="accordion-icon"></div>
	  </summary>
	  <div class="accordion-content">
	    <p>
	      A green permit only allows you to park in pay and display bays located in the city centre (inner and outer zones) either:
	    </p>
	    <ul>
	      <li>on street</li>
	      <li>in most car parks that we run (subject to time limits)</li>
	    </ul>
	
	    <p>It cannot be used in:</p>
	    <ul>
	      <li>other types of parking bay (such as disabled bays, permit holder parking bays)</li>
	      <li>Hawley Street Car Park</li>
	      <li>in other parking permit zones</li>
	      <li>car parks we don’t run eg university permit holder car parks</li>
	    </ul>
	  </div>
	</details>
	
	<details class="accordion">
	  <summary class="accordion-header">
	    <h3>Parking time limits</h3>
	    <div class="accordion-icon"></div>
	  </summary>
	  <div class="accordion-content">
	    <p>
	      There are no time limits for parking with a green permit in most of the pay and display bays in the city centre inner and outer zones.  
	    </p>
	
	    <p>However, the following car parks are restricted to a maximum stay period of 6 hours for green permit holders:</p>
	    <ul>
	      <li>Devonshire Green car park</li>
	      <li>Milton Street car park </li>
	      <li>Carver Lane car park</li>
	      <li>West Street Lane car park</li>
	    </ul>
	
	    <p>
	      If you intend to use any of these car parks please send an email to
	      <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a>
	      and we'll send you a clock for you to display in your windscreen.
	    </p>
	  </div>
	</details>
	
	<details class="accordion">
	  <summary class="accordion-header">
	    <h3>Number of permits</h3>
	    <div class="accordion-icon"></div>
	  </summary>
	  <div class="accordion-content">
	    <p>You can apply for one permit per vehicle. There is no limit to how many permits a household can have.</p>
	  </div>
	</details>
	
	<details class="accordion">
	  <summary class="accordion-header">
	    <h3>How long a permit lasts</h3>
	    <div class="accordion-icon"></div>
	  </summary>
	  <div class="accordion-content">
	    <p>Permits last for one year. It is your responsibility to ensure your permit is renewed.</p>
	  </div>
	</details>
	
	<p>
	  For further information, visit 
	  <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
	</p>
	
	<button
	  type="button"
	  class="dform_widget email-btn dform_widget_type_button"
	  aria-label="For further information and to apply send link to apply online"
	  onclick="
	    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
	      KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
	    }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
	  "
	>
	  Send link to review further information
	</button>
`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
     categories: ["Parking"],
  },
  { date: "11/03/2025", name: "Gee Whitehouse" }
);

const langsettAndHillsboroughBusAndTramgate = new ContentP(
  "langsettAndHillsboroughBusAndTramGate",
  "Langsett And Hillsborough Bus And Tram Gate",
  "Learn about the eligibility and application process for a free permit to drive through the Langsett and Hillsborough bus and tram gate for residents of specific roads.",
  `
<h3>Hillsborough Langsett Road bus and tram gate</h3>

<p>
    The bus or tram gate on Langsett Road is just beyond Ripley Street and is usually limited to public transport and taxis.
</p>

<p>
    A permit to drive through the bus or tram gate at Langsett Road (outbound only) is available for residents of the following roads:
</p>

<ul>
    <li>Rudyard Road</li>
    <li>Rudyard Mews</li>
    <li>Treswell Crescent</li>
    <li>Rider Road</li>
    <li>Haggard Road</li>
    <li>Kipling Road</li>
</ul>

<section class="info-panel" role="region" aria-label="Information panel">
    <p>
        Each permit is valid for 12 months. Without a permit, residents can't use the bus or tram gate.
        The permit is issued virtually so you don’t need to display it in your vehicle.
    </p>
</section>

<h4>Cost</h4>

<p>There is no charge for this permit </p>

<p>Who can't apply for the permit</p>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Where you can use the permit</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
                <p>
                We can't provide permits for visitors to properties, delivery vehicles,
                or short-term hire or lease cars (unless registered at an address on one of the eligible roads).
            </p>
 </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Where you can't use the permit</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
                   <p>
                The permit doesn't allow the holder to use other bus or tram gates in Hillsborough or elsewhere in Sheffield. 
                This includes the inbound bus or tram gates on Holme Lane or Middlewood Road.
            </p>
            <p>
                If holders do use these gates (when signs say they shouldn't) we may consider withdrawing their permit completely.
            </p>
 </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Withdrawing permits</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
                 <p>Your permit will be invalid if:</p>
            <ul>
                <li>you are not a resident of one of the above roads </li>
                <li>you cause or allow the letter of exemption to be used for reward </li>
                <li>in our opinion the use of the exemption has been abused </li>
            </ul>

  <p>
    If any of this takes place we may cancel your permit and you will not be allowed to use Langsett Road bus gate. 
    You could be issued a bus lane fine if you drive through without a valid permit.
</p>       
 </div>
</details>


<details class="accordion">
 <summary class="accordion-header">
   <h3>Evidence Required</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
             <h4>Proof of vehicle ownership</h4>
            <p>You would need to provide us with an electronic copy of one of the following:</p>
            <ul>
                <li>registration document (V5)</li>
                <li>vehicle insurance certificate</li>
                <li>lease agreement in your name</li>
                <li>letter on company headed paper verifying that you work for them with the V5 or the vehicle lease document (if you use a company car)</li>
            </ul>

            <h4>Proof of address</h4>
            <p>We also need one proof of address:</p>
            <ul>
                <li>most recent utility bill</li>
                <li>tenancy agreement (witnessed and signed)</li>
                <li>current household contents insurance policy</li>
                <li>current vehicle insurance certificate or schedule</li>
                <li>bank statement or credit card bill dated or showing transactions from the last 2 months (block out your account details)</li>
                <li>payslip, pension slip, benefits notification letter or Inland Revenue notice of bill coding dated within the last 2 months 
                    (block out any personal details)</li>
            </ul>
 </div>
</details>

<p>
    For further information, visit 
    <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
</p>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information and to apply send link to apply online"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
    "
>
    Send link to review further information
</button>


	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "06/03/2025", name: "Gee Whitehouse" }
);

//
//makingAPayment is in the cross regional section at the top of the Parking.js file
//

const nhsPractitionerOrCarerParkingPermit = new ContentP(
  "nhsPractitionerOrCarerParkingPermit",
  "NHS practitioner or carer parking permit (Medical Professional Carer)",
  "Learn about the eligibility, cost, and application process for NHS practitioner or carer parking permits carrying essential equipment or treating patients.",
  `
    <h3>About the Permit</h3>
    <p>Medical professional carer permits are available for:</p>
    <ul>
      <li>NHS qualified medical practitioners</li>
      <li>
        NHS medical practitioners carrying essential equipment or drugs to treat a
        patient resident
      </li>
    </ul>
    <p>
      The driver can only use the permit for carrying out visits to clients or
      patients, not to park where they are based (their workplace).
    </p>
    <p>
      Carer permit holders have to display a timer disc in the vehicle to show when
      they started parking. The maximum time for parking is 2 hours.
    </p>
    <p>
      If the client/patient regularly needs longer care visits, they may be eligible
      to apply for a resident carer permit (see above). Clients/patients who require
      an occasional longer visit may provide a visitor permit.
    </p>
    <h3>Cost</h3>
    <p>£10 each for 12 months.</p>
    <h3>Evidence Required</h3>
    <p>
      The organisation should apply not for an individual and provide the following
      information:
    </p>
    <ul>
      <li>The organisations operation</li>
      <li>How many staff are employed</li>
      <li>How many permits are required</li>
      <li>Why the permit is required</li>
    </ul>
    <p>
      When you purchase your parking permit you need to send proof of eligibility 
      to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days 
      (if you have not been requested to do so in the application process). 
      At any time after this while you hold a permit we may require you to provide proof 
      of your vehicle registration and your home or business address as part of 
      regular audit checks. If this is requested please submit them to 
      <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> 
    </p>
    <p>
    For further information, visit 
    <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
  </p>
 </div>
</details>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information and to apply send link to apply online"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
    "
>
    Send link to review further information
</button>

	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "06/03/2025", name: "Gee Whitehouse" }
);

const organisationCarer = new ContentP(
  "organisationCarer",
  "Organisation Carer",
  "Learn about the eligibility, cost, and application process for organisation carer permits, allowing access to permit holder bays for healthcare and support professionals.",
  `
	<h3>Organisation Carer</h3>

<p>Mental health and healthcare organisations can apply for an All area medical/carer permit which can be used by their staff to park in Sheffield’s 
parking zones. 
The permit is a paper disc with a timer which will allow staff to park in any permit zone outside the city centre for a limited time.</p>

<h4>If you work for the NHS</h4>

<p>If you are an NHS practitioner or carer you should apply for a separate parking permit.</p>

<h4>If you work for the Council</h4>

<p>These parking permits are for:</p>

<ul>
  <li>
    Mental health social workers visiting a patient who may need to be detained
    under the Mental Health Act
  </li>
  <li>Primary care outreach nurses</li>
  <li>TB nurses</li>
  <li>Health Visitors</li>
  <li>Family support workers</li>
</ul>

<section class="info-panel" role="region" aria-label="Information panel">
  <p>
    There is a system issue that will prevent the renewal of paper version of the All Area Medical/Carer Permits. 
    You will need to allow your permit to expire,
    then as early as possible within the 14 day grace period, buy a new permit.
  </p>
</section>

<h3>Cost</h3>
<p>£10 each for 12 months.</p>

<details class="accordion">
 <summary class="accordion-header">
   <h3>How long a permit lasts</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
            <p>Permits last for one year. It is your responsibility to ensure your permit is renewed.</p>
 </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Evidence Required</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
 <p>
        The organisation should apply and not an individual and provide the following
        information:
      </p>
      <ul>
        <li>The organisations operation</li>
        <li>How many staff are employed</li>
        <li>How many permits are required</li>
        <li>Why the permit is required</li>
      </ul>
      <p>
        When you purchase your parking permit you need to send proof of eligibility 
        to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days 
        (if you have not been requested to do so in the application process). 
        At any time after this while you hold a permit we may require you to provide proof 
        of your vehicle registration and your home or business address as part of 
        regular audit checks. If this is requested please submit them to 
        <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a>
      </p>
       </div>
</details>

  <p>
    For further information, visit 
    <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
  </p>
</div>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information and to apply send link to apply online"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
    "
>
    Send link to review further information
</button>	
	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "06/03/2025", name: "Gee Whitehouse" }
);

const residentsPermit = new ContentP(
  "residentsPermit",
  "Residents Permit",
  "Learn about the eligibility, cost, and application process for residents parking permits, including vehicle and address verification requirements.",
  `

<h3>Residents Parking Permit</h3>


<p>If you live in a parking zone you will need a permit to park your vehicle on the street in this zone.</p>

<p>Permits do not entitle you to park at directly at your address, but they allow you to park in any designated on street parking space within the zone
your permit is for.</p>

<p>The permit is issued virtually so you don’t need to display it in your window. 
Once your licence plate is registered as holding a permit you can use on street parking.</p>

<p>Whether or not you can apply will depend on your home address, which will need to be within a parking zone to be eligible for a permit.</p>

<section class="info-panel" role="region" aria-label="Information panel">
    <p>
       There's a system issue that will prevent the renewal of paper residents parking permits for Holme Lane, 
       Vaughton Hill and Loxley New Road. You will need to allow your permit to expire, 
       then as early as possible within the 14 day grace period, buy a new permit. We apologise for the inconvenience.  
    </p>
</section>


  <h4>Cost</h4>
  <p>The costs to apply for a permit are: </p>
     <ul>
          <li>standard first permit £55.80</li>
          <li>standard second permit £111.60</li>
          <li>city centre inner residents permit £310.00</li>
          <li>city centre outer residents permit £155.00</li>
          <li>Hawley Street Car Park residents permit £55.80</li>
          <li>Kelham Island and Neepsend Parking Scheme - first permit £111.60</li>
          <li>Kelham Island and Neepsend Parking Scheme - second permit £223.20</li>
    </ul>

<details class="accordion">
 <summary class="accordion-header">
   <h3>New and previous tenancies</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
<p>
If you are moving into a new property and the Resident parking permit application shows the price being offered is not correct, this is likely to be because the previous tenants/owners have permits that are still valid.
</p>
<p>
Email your signed tenancy agreement or proof of property purchase to <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a>. Add the subject “Please check the address and cancel existing permits".
</p>
<p>
We can then identify the new residents. This should allow the cancellation of the existing permits. Once this is done, and an email confirming this has been received, the correct pricing should then be in place for applications to go ahead.
</p>
<p>
If you have moved or are moving from an address where you hold a parking permit, email us with the subject “Please cancel my permit” and specify the date that this can be completed. We'll act on your instructions to allow the new tenants to buy their permits at the correct price.
</p>
<p>
Get in touch with us for any other problems regarding parking permit applications or pricing.
</p>
 </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Hawley Street</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
        <p>
                 Residents of the Hawley Street Flats Car Park scheme can only apply for 1 permit per household.
             </p>
             <p>
                 We only allow 30 permits in total for the scheme due to the size of the car park.
             </p>
              </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Evidence Required</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
<h4>Vehicle Ownership</h4>
                <p>
                    You will need to provide us with an electronic copy of one of the following:
                </p>
                <ul>
                    <li>Registration document (V5)</li>
                    <li>Vehicle insurance certificate</li>
                    <li>Lease agreement in your name</li>
                    <li>Letter on company headed paper verifying that you work for them with the V5 or the vehicle lease document (if you use a company car)</li>
                </ul>

                <h4>Proof of Address</h4>
                <p>
                    We will check our Council Tax or electoral records or we will ask you to provide an electronic copy of one of the following items that show your name and address:
                </p>
                <ul>
                    <li>Most recent utility bill</li>
                    <li>Tenancy agreement (witnessed and signed)</li>
                    <li>Current household contents insurance policy</li>
                    <li>Current vehicle insurance certificate or schedule</li>
                    <li>
                        Bank statement or credit card bill dated or showing transactions from the last 2 months (block out your account details)
                    </li>
                    <li>
                        Payslip, pension slip, benefits notification letter or Inland Revenue notice of bill coding dated within the last 2 months (block out any personal details)
                    </li>
                </ul>
                <p>
                    Failure to provide proof of vehicle registration and/or proof of your address will result in cancellation of the permit(s) with no refund.
                </p>
                <p>
                    When you purchase your parking permit you need to send proof of eligibility to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days (if you have not been requested to do so in the application process). At any time after this while you hold a permit we may require you to provide proof of your vehicle registration and your home or business address as part of regular audit checks. If this is requested please submit them to <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a>.
                </p>
   </div>
</details>



                        <p>
                    For further information, visit <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
                    
                </p>
         <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information and to apply send link to apply online"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
        Send link to review further information
      </button>



	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "05/03/2025", name: "Gee Whitehouse" }
);

const staffPermit = new ContentP(
  "staffPermit",
  "Staff Permit",
  "Find out how staff can apply for a parking permit through Facilities Management with detailed instructions on the application process.",

  `<p>
  Staff who need to apply for a parking permit should contact Facilities Management 
  for assistance. Full details on how to apply for a staff parking permit can be 
  found on the <a href="https://intranet.sheffield.gov.uk/services/facilities-management/applying-staff-parking-permit" 
  target="_blank">https://intranet.sheffield.gov.uk/services/facilities-management/applying-staff-parking-permit</a>.
</p>
<p>
  For further information, visit:
  <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
</p>

          <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information and to apply send link to apply online"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
        Send link to review further information
      </button>
  `,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "12/02/2025", name: "Dinah WIlliams" }
);

const tradePermit = new ContentP(
  "tradePermit",
  "Trade Permit",
  "Learn about the application process, costs, and required evidence for obtaining trade permits for parking while working in Sheffield permit zones.",
  `

<h3>Trade permit </h3>

<p>A trade parking permit allows you to park your vehicle in on street parking bays while you work in a parking permit zone. </p>
<p>They do not entitle you to park at a specific address, but they allow you to park in any on street parking space signposted for permit users in any eligible zone. </p>

<h4>Cost</h4>
		<p>Trade permits costs £96.85 for a batch of 25 daily permits. They cannot be refunded or exchanged.</p>
		<p>
			Permits should be validated and displayed in the vehicle promptly after
			parking. They are valid until midnight on the day of use.
		</p>

    <details class="accordion">
 <summary class="accordion-header">
   <h3>Exceptions</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
<p>Trade permits are not valid for use in these parking zones:  </p>

          <ul>
			<li>city centre </li>
			<li>Falding Street </li>
			<li>Hawley Street Car Park </li>
			<li>Holme Lane </li>
			<li>Loxley New Road </li>
      <li>Vaughton Hill </li>
		</ul>
         </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Number of permits </h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
    <p>There is no limit to the number of trade permits you can buy. </p>
 </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Where you can use the permit</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
        <p>You can park your vehicle up until midnight in any bay signed for the use of permit holders in the parking zone your permit is valid for.
        If you want to park it overnight you will need to ensure you also display a permit for the following day. </p>
        
        <p>You must display your permit in the windscreen of your vehicle so that all the details are visible from the outside or you may be fined. </p>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Evidence Required</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
            		<p>
			You would need to provide us with an electronic copy of one of the following:
		</p>
		<ul>
			<li>
				Letter addressed to you from Planning or Building Control detailing the
				works that you are carrying out at a property within an existing permit
				scheme
			</li>
			<li>
				Official estimate, invoice or job sheet (on company headed paper) for the
				work on the property that is in an existing permit scheme where work is
				being carried out
			</li>
			<li>
				Current landlord insurance for a property that you rent out to tenants
				within an existing permit scheme
			</li>
			<li>Registered trader card (for example a Gas Safe engineer card)</li>
			<li>
				Letter on company headed paper confirming that your organisation is a
				registered Housing Association
			</li>
		</ul>
    <p>
      When you purchase your parking permit you need to send proof of eligibility 
      to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days 
      (if you have not been requested to do so in the application process). 
      At any time after this while you hold a permit we may require you to provide proof 
      of your vehicle registration and your home or business address as part of 
      regular audit checks. If this is requested please submit them to 
      <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> 
    </p>
 </div>
</details>


    <p>
    For further information, visit 
    <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.

    </p>
             <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information and to apply send link to apply online"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
        Send link to review further information
      </button>

	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "06/03/2025", name: "Gee Whitehouse" }
);

const utilityPermit = new ContentP(
  "utilityPermit",
  "Utility Permit",
  "Learn about the utility permit application process, including costs and how utility companies can apply for permits in Sheffield's city centre.",
  `

		<h3>Utility Permit</h3>

<p>
  <li>Issued for city centre works taking place by utility companies. E.g. Yorkshire Water, BT, British Gas etc.</li>
  <li>25 half day cards per book</li>
  <li>Maximum of 10 books per application</li>
</p>

<p>Utility Permits are only for major utility companies who need to complete work within the city centre.</p>
<p>Valid for am/pm slots (not full days).</p>

<p>
  If a company is working outside the City Centre then they would need a Trade
  Permit.
</p>

<h4>Costs</h4>

<p class="cost">£193.75 for a book of 25 half day passes.</p>

<p>
  Ask customer to email <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> to ask if they can order a 
  utility permit or we can send them a link to apply.
</p>
  

      <p>
      For further information, visit 
      <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.

      </p>

                   <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information and to apply send link to apply online"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
  {
    type: "Apply",
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "06/03/2025", name: "Gee Whitehouse" }
);

const visitorsPermits = new ContentP(
  "visitorsPermits",
  "Visitors Permits",
  "Learn about the application process, costs, and required evidence for obtaining visitor parking permits for guests and contractors.",
  `
	<h3>Visitors Permit</h3>

<p>If you live in a parking permit zone and would like visitors to be able to park nearby, 
you can buy a book of single use parking permits. You can give this to your visitors.</p>

<p>A permit does not guarantee parking directly at your address, but it will allow your visitors to park in on street parking bays within your permit zone. You can also give permits to contractors who are carrying out work on your home for up to two weeks. Likewise, you could provide a visitors permit to your landlord if they need to visit your property to do work. 
Contractors needing more time to work at a property will need to apply for trade permits. Landlords can apply for trade permits too.</p>

<p>You can only apply for visitor permits for the parking zone you live in.</p>

<h4>Cost</h4>

<p>One book of 25 permits costs £19.35.</p>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Exceptions</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
    <p>One book of 25 permits costs £19.35.</p>
      <ul>
        <li>city centre</li>
        <li>Falding Street</li>
        <li>Hawley Street Car Park</li>
        <li>Holme Lane</li>
        <li>Loxley New Road</li>
        <li>Vaughton Hill parking zones</li>
      </ul> </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3>Number of permits</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
        <p>You can buy up to 150 visitor permits per year (we may consider discretionary applications for more permits).</p>
 </div>
</details>


<details class="accordion">
 <summary class="accordion-header">
   <h3>How long each permit lasts</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
    <p>Permits are valid on the day of use until 10am the following day.</p>
 </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3> Where you can use the permit</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
      <p>Your visitors can park their vehicle without time limit in any bay which is signed as being for the use of permit holders. 
      They must display their permit in the windscreen so that all the details are visible from outside the vehicle as soon as possible after parking.</p>
      <p>If your visitors display an invalid permit (for example one that has expired or one that has been issued for a different zone) they will be fined.</p>

 </div>
</details>

<details class="accordion">
 <summary class="accordion-header">
   <h3> Evidence Required</h3>
   <div class="accordion-icon"></div>
 </summary>
 <div class="accordion-content">
     <p>
        You will need to provide an electronic copy of one of the following items
        that show your name and address:
      </p>
      <ul>
        <li>Most recent utility bill</li>
        <li>Tenancy agreement (witnessed and signed)</li>
        <li>Current household contents insurance policy</li>
        <li>Current vehicle insurance certificate or schedule</li>
        <li>
          Bank statement or credit card bill dated or showing transactions from the
          last 2 months (block out your account details)
        </li>
        <li>
          Payslip, pension slip, benefits notification letter or Inland Revenue notice
          of bill coding dated within the last 2 months (block out any personal
          details)
        </li>
      </ul>
      <p>
        When you purchase your parking permit you need to send proof of eligibility 
        to <a href="mailto:ppproofs@sheffield.gov.uk">ppproofs@sheffield.gov.uk</a> within 3 days 
        (if you have not been requested to do so in the application process). 
        At any time after this while you hold a permit we may require you to provide proof 
        of your vehicle registration and your home or business address as part of 
        regular audit checks. If this is requested please submit them to 
        <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a>
      </p>
 </div>
</details>

  <p>
    For further information, visit 
    <a href="https://www.sheffield.gov.uk/parking" target="_blank">https://www.sheffield.gov.uk/parking</a>.
  </p>
</div>

             <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information and to apply send link to apply online"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Parking\`
            "
      >
        Send link to review further information
      </button>

<p>

<h3>If the customer is unable to apply online click the link to order on their behalf.</h3>
  <a href="${window.location.protocol}//${window.location.hostname}/form/launch/visitor_permit_process">
    Launch Visitor Permit Form
  </a>
</p>

	`,
  {
    buttonLabel: "Parking Permit Enquiry",
    formName: "parking_permit_enquiry",
  },
  { typeKey: "parking_permit_transferred_to_service" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "07/05/2025", name: "Gee Whitehouse" }
);

const parkingPermits = new MenuP(
  "parkingPermit",
  "Parking Permits",
  "Comprehensive information on different types of parking permits including business, carer, medical, green, trade, staff, residents, and visitors' permits. It covers eligibility, application process, costs, and necessary evidence for each permit type.",
  [
    businessPermit,
    residentsCarer,
    organisationCarer,
    nhsPractitionerOrCarerParkingPermit,
    greenParkingPermit,
    langsettAndHillsboroughBusAndTramgate,
    residentsPermit,
    staffPermit,
    tradePermit,
    utilityPermit,
    visitorsPermits,
    makingAPayment,
    customerPaidTwice
  ]
);

//#endregion Parking Permits

//#region Penalty Charge Notice (PCN)

const confirmationOfPayment = new ContentP(
  "confirmationOfPayment",
  "Confirmation of payment",
  "Report payment discrepancies by submitting a written appeal and proof of payment, including the last 4 digits of the card if applicable.",
  `
		<p>
			Payments can take up to 3-4 days to show on our system regardless of the
			payment method.
      <br>
      <br>
			If the customer has received further correspondence from Parking Services
			asking for a payment but:
      <br>
      <br>
		<ul>
			<li>They believe payment has already been made</li>
			<li>Gateway is not showing case is fully paid (closed)</li>
		</ul>
      <br>
      <br>
			The customer should make a written appeal online or in writing (ideally online
			as it will be processed quicker) and send proof of payment. If a card payment
			was made, the last 4 digits of the card should be provided.
		</p>
	`,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "penalty_charge_notice_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "06/12/2024", name: "Nathan Smith" }
);

//
//customerPaidTwice is in the cross regional section at the top of the Parking.js file
//

const customerTriedToPayOnline = new ContentP(
  "customerTriedToPayOnline",
  "Customer tried to pay online but it won't accept their details",
  "Ensure the vehicle registration number and full PCN number are entered correctly without spaces when trying to pay online.",
  `
		<p>
			The PCN should show on Gateway/online within minutes of being issued,
			therefore the customer may have incorrect details. The ticket details can be
			confirmed on Gateway.
      <br>
      <br>
      The Vehicle Registration Number (VRN) should be entered without spaces along 
      with the full Penalty Charge Notice (PCN) number.
      <br>
      <br>
			Check the person entering the details has entered the VRM without spaces and
			entered the full PCN number.
		</p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "penalty_charge_notice_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "06/12/2024", name: "Nathan Smith" }
);

const customerUnableToPay = new ContentP(
  "customerUnableToPay",
  "Customer Unable To Pay",
  "Find guidance on how to resolve issues with payments not appearing on the system, including how to submit proof of payment.",
  `
		<p>
			Payments can take up to 3-4 days to show on our system regardless of the
			payment method.
      <br>
      <br>
			If the customer has received further correspondence from Parking Services
			asking for a payment but:
      <br>
      <br>
		<ul>
			<li>They believe payment has already been made</li>
			<li>Gateway is not showing case is fully paid (closed)</li>
		</ul>
    <br>
    <br>
			The customer should make a written appeal online or in writing (ideally online
			as it will be processed quicker) and send proof of payment. If a card payment
			was made, the last 4 digits of the card should be provided.
		</p>
    <h3>Customer needs more time to pay the PCN</h3>
    <p>Advise the customer to make an appeal as normal.</p>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>We have offered a certain amount on a recent letter, however, when they go to pay it states a different amount</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          You can warm transfer to:
          <strong>Advisor Note: (Internal number Storm line):</strong>
          <a href="tel: 87061">87061</a> dependent on PCN type, to let us check the correct amount is showing and amend it on the call if it is wrong.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Customer has a parking or bus lane PCN</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>If you are still unable to resolve the PCN, you can warm transfer to:
         <strong>Advisor Note: (Internal number Storm line):</strong>
        <a href="tel: 87061">87061</a>
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Customer has a Clean Air Zone (CAZ) PCN</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>If you are still unable to resolve the PCN, you can warm transfer to:
        <strong>Advisor Note: (Internal number Storm line):</strong>
        <a href="tel: 87062">87062</a>
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Contact Details for Enforcement Agents for Customers</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p><strong>Bristow &amp; Sutor</strong><br>
        Phone: <a href="tel: 03003902010">0300 390 2010</a><br>
        Text: <a href="tel: 07781488270">07781 488270</a>
        </p>
        <p><strong>Dukes</strong><br>
        Phone: <a href="tel:01785825500">01785 825 500</a><br>
        Email: <a href="mailto:info@dukeslimited.co.uk">info@dukeslimited.co.uk</a>
        </p>
        <p><strong>Equita</strong><br>
        Phone: <a href="tel:01604628360">01604 628 360</a>
        </p>
        <p><strong>Excel</strong><br>
        Phone: <a href="tel:03303639988">0330 363 9988</a><br>
        Email: <a href="mailto:info@excelenforcement.co.uk">info@excelenforcement.co.uk</a>
        </p>
        <p><strong>Marston</strong><br>
        Phone: <a href="tel:03333201822">0333 320 1822</a><br>
        Email: <a href="mailto:generalenquiries@marstongroup.co.uk">generalenquiries@marstongroup.co.uk</a>
        </p>
        <p><strong>Newlyn</strong><br>
        Phone: <a href="tel:01604633001">01604 633001</a><br>
        Email: <a href="mailto:enquiries@newlynplc.co.uk">enquiries@newlynplc.co.uk</a>
        </p>
        <p><strong>Phoenix/CDER</strong><br>
        Phone: <a href="tel:03004605295">0300 460 5295</a><br>
        Email: <a href="mailto:info@contactcder.co.uk">info@contactcder.co.uk</a>
        </p>
      </div>
    </details>
	`,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "penalty_charge_notice_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "14/05/2025", name: "Andy Walker" }
);

const enforcementBaliffEnquiries = new ContentP(
  "enforcementBaliffEnquiries",
  "Enforcement Baliff Enquiries",
  "Learn about the steps to take if your debt has been referred to enforcement, including how to make payments or challenge the process.",
  `   
		<h3>Enforcement (Bailiff) Enquiries</h3>
		<p>
			Once the debt has been referred to enforcement agents there is no further
			investigation or challenges that can be made.
      <br>
      <br>
			To make a payment or arrange an agreement to pay, the customer should contact
			the appropriate enforcement agency.
      <br>
      <br>
			If the customer states they moved address before any correspondence was 
      sent out, then refer them to the Traffic Enforcement Centre (TEC) - 
      TEC will provide information on how to appeal. The contact details for 
      TEC are: <a href="tel:0300 1231059">0300 1231059</a>
		</p>
		<h3>Person is not living at that address</h3>
		<p>
			The envelope should be returned to sender and marked "Not known at this
			address"
      <br>
      <br>
      Our records are taken from DVLA so the customer may wish to update them.
    </p>
    <h3>Enforcement Agents are at a Customer’s Property</h3>
    <p>
    If a customer calls and states enforcement agents are at their property to recover funds, then you can contact us via warm transfer on: 
    <strong>Advisor Note: (Internal number):</strong>
    <a href="tel: 87061">87061</a> (Storm line), dependent on PCN type.<br><br> 
    If you can, try to get as much information from the customer such as the PCN reference and any background information.
    </p>
    <p>
    If they have grounds to file a Late Witness Statement, then we can request enforcement is placed on hold temporarily to allow them time to do so.
    </p>

        <details class="accordion">
      <summary class="accordion-header">
        <h3>Contact Details for Enforcement Agents for Customers</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p><strong>Bristow &amp; Sutor</strong><br>
        Phone: <a href="tel:03003902010">0300 390 2010</a><br>
        Text: <a href="tel:07781488270">07781 488270</a>
        </p>
        <p><strong>Dukes</strong><br>
        Phone: <a href="tel:01785825500">01785 825 500</a><br>
        Email: <a href="mailto:info@dukeslimited.co.uk">info@dukeslimited.co.uk</a>
        </p>
        <p><strong>Equita</strong><br>
        Phone: <a href="tel:01604628360">01604 628 360</a>
        </p>
        <p><strong>Excel</strong><br>
        Phone: <a href="tel:03303639988">0330 363 9988</a><br>
        Email: <a href="mailto:info@excelenforcement.co.uk">info@excelenforcement.co.uk</a>
        </p>
        <p><strong>Marston</strong><br>
        Phone: <a href="tel:03333201822">0333 320 1822</a><br>
        Email: <a href="mailto:generalenquiries@marstongroup.co.uk">generalenquiries@marstongroup.co.uk</a>
        </p>
        <p><strong>Newlyn</strong><br>
        Phone: <a href="tel:01604633001">01604 633001</a><br>
        Email: <a href="mailto:enquiries@newlynplc.co.uk">enquiries@newlynplc.co.uk</a>
        </p>
        <p><strong>Phoenix/CDER</strong><br>
        Phone: <a href="tel:03004605295">0300 460 5295</a><br>
        Email: <a href="mailto:info@contactcder.co.uk">info@contactcder.co.uk</a>
        </p>
      </div>
    </details>

	`,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "penalty_charge_notice_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff",
      "Baliff",
      "baliff",
      "Enforcement and Baliff Enquiries",
      "Enforcement Baliff Enquiries"
    ],
    categories: ["Parking"],
  },
  { date: "14/05/2025", name: "Andy Walker" }
);

const howCanIAppeal = new ContentP(
  "howCanIAppeal",
  "How can I appeal?",
  "Find out how to appeal a parking ticket online, including how to submit supporting evidence and use the interactive portal.",
  `
    <p>
      Challenges can be made online within 28 days of receiving the original ticket.
      Please note that it may take up to 24 hours for the ticket to appear on the
      online portal.
      <br>
      <br>
      Documentation can be uploaded to support the challenge. The online link also
      enables the motorist to use an interactive portal to guide them through their
      appeal. Evidence such as photos of the contravention can be viewed online.
      <br>
      <br>
      Do not discuss any possible outcomes or give your opinions. Parking services
      will contact the customer following the decision.
      <br>
      <br>
      Appeals should always be made online however, if you are unable to make 
      an online appeal, you can email: <a href="mailto:parkingservices@sheffield.gov.uk">parkingservices@sheffield.gov.uk</a>
      explaining the reason for the appeal
    </p>

    <details class="accordion">
  <summary class="accordion-header">
    <h3>Customer has received a PCN and wants to challenge / make representations</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      If the case is at the following stages:
      <ul>
        <li>PCN issued (parking or camera – bus lane/CAZ)</li>
        <li>Notice to Owner (NTO)</li>
        <li>Charge Certificate (CC)</li>
      </ul>
      Then they need to do this via <br>
      <a href="https://www.sheffield.gov.uk/parking/pay-penalty-charge-notice" target="_blank"https://www.sheffield.gov.uk/parking/pay-penalty-charge-notice"</a><br><br>

      <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Pay%20Penalty%20Charge%20Notice\`
    "
>
    Send link to review further information
</button>

      If they are unable to do this via the website, then they can appeal via email to:<br>
      <a href="mailto:parkingservices@sheffield.gov.uk">parkingservices@sheffield.gov.uk</a><br>
      Or via post to:<br>
      <address>
      Parking Services,<br>
      PO Box 3830,<br>
      Sheffield,<br>
      S1 9AQ
      </address><br><br>
      We are unable to listen to / accept representations over the phone and we are not allowed to accept emails from yourselves as representations.<br><br>
      If the customer states they are unable to make representations online or via 
      email then please direct them to family/friends in the first instance or 
      Citizens Advice (opening times 10am – 4pm): <a href="tel:0808 2787820"> 0808 2787820</a>.<br><br>
      They also have the option to come to First Point and fill in a form there that will be sent to us and attached to the case.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Call back referrals</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      Any call back referrals which are emailed need to please include the following:
      <ul>
        <li>Customer's name</li>
        <li>Contact phone number</li>
        <li>PCN numbers/VRM</li>
      </ul>
      Call back referrals should only be made if the call handler has been unable to contact NPT on the phone.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>A PCN has been issued using an incorrect Vehicle Registration Mark (VRM)</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The customer can challenge the PCN as normal, and we will confirm to them in writing that the PCN has been cancelled.<br><br>
      If the VRM is clearly incorrect, then you can warm transfer to:<br><br>
      <strong>Advisor Note: (Internal number Storm line):</strong>
      <a href="tel: 87061">87061</a> dependent on PCN type, so we can investigate it further.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>What evidence can a driver provide to help them with their PCN?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>Name is on a PCN for a vehicle they have NEVER owned: Provide a police report for fraud and appeal the PCN.</li>
      <li>State vehicle has been cloned: Provide photographs of the vehicle and a crime reference number.</li>
      <li>State vehicle was stolen: Provide police evidence such as a crime reference/incident number.</li>
      <li>State they were involved in an emergency: Provide proof such as hospital admission or other relevant documentation.</li>
      <li>State their vehicle broke down: Provide evidence such as mechanic receipts or towing documentation.</li>
      <li>The registered keeper is now deceased: Provide a copy of the death certificate.</li>
    </ul>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Customer rented a car and has been told by the hire company they have a PCN but it is not in their name</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The registered keeper is the only person liable to pay the PCN. When a driver signs a hire agreement, there should be a section in the terms and conditions that states they take liability for PCNs.<br><br>
      The PCN will be issued to the hire company, and they are liable for the PCN until they have provided a copy of the hire agreement.<br><br>
      Once the hirer details have been provided and everything is in order, we will transfer liability to the hirer, and the PCN will be re-issued to them so they can pay/appeal as normal.<br><br>
      If the hire company has already paid the PCN and requested the money from the hirer, the hire company would have to request a refund for us to re-open the case.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Customer has a parking or bus lane PCN</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>If you are still unable to resolve the PCN, you can warm transfer to:
    <strong>Advisor Note: (Internal number Storm line):</strong> 
    <a href="tel: 87061">87061</a> 
  </div>
  </details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Customer has a Clean Air Zone (CAZ) PCN</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>If you are still unable to resolve the PCN, you can warm transfer to:
     <strong>Advisor Note: (Internal number Storm line):</strong>
    <a href="tel: 87062">87062</a> (Internal Number).</p>
  </div>
</details>


	`,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "penalty_charge_notice_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "08/05/2025", name: "Andy Walker" }
);

const howLongDoIHaveToAppeal = new ContentP(
  "howLongDoIHaveToAppeal",
  "How long do I have to appeal?",
  "Find out the next steps if your PCN challenge is rejected, including information on how to proceed with further action.",
  `	
    <h3>Rejected PCN's</h3>
    <p>
      The correspondence to reject their challenge will explain the next steps to
      take if they are unhappy with the decision.
      <br>
      <br>
      General information relating to the PCN Enforcement is available at: <a href="http://www.patrol-uk.info"target="_blank">http://www.patrol-uk.info</a>
      <br>
      
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=PCN%20Enforcement\`
  "
  >
    Send link to review further information
</button>

    </p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "penalty_charge_notice_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "15/05/2025", name: "Dinah Williams" }
);

//
// makingAPayment is in the cross regional section at the top of the Parking.js file
//

const multiplepcns = new ContentP(
  "multiplePcns",
  "Multiple PCN's",
  "Find out how to challenge multiple PCNs online, including how to submit evidence and use the interactive portal for your appeal.",
  `
<h4>Case is at Debt Registration – What Are the Customer’s Options?</h4>

<p>If the case is currently at debt registration, this means that we are unable to accept representations from the customer.</p>

<p>Their options moving forward are to either pay the PCN or file a Witness Statement with the Traffic Enforcement Centre.</p>

<p>The reasons for filing a Witness Statement are:</p>
<ul>
  <li>Grounds 1: Did not get a ‘notice to owner’ telling you how to make a formal challenge</li>
  <li>Grounds 2: Made a formal challenge on time but did not get a ‘notice of rejection’</li>
  <li>Grounds 3: Appealed to an independent tribunal on time but did not get a response</li>
  <li>Grounds 4: Have proof you’ve paid the penalty charge, such as a credit card statement</li>
</ul>

<p>To file a Witness Statement, they will need to complete Form TE9.<br>
Form TE9 can be found at: 
<a href="https://assets.publishing.service.gov.uk/media/62e14db38fa8f5649f912647/TE9.pdf">https://assets.publishing.service.gov.uk/media/62e14db38fa8f5649f912647/TE9.pdf</a></p>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Unpaid%20Penalty%20Charge\`
    "
>
    Send link to review further information
</button>


<p>The form must be returned to:<br>
Traffic Enforcement Centre<br>
County Court Business Centre<br>
St Katharine’s House, 21-27 St Katharine’s Street, Northampton, NN1 2LH<br>
Or email: <a href="mailto:tec@justice.gov.uk">tec@justice.gov.uk</a></p>

<p>If they have any queries, they can contact the Traffic Enforcement Centre:<br>
<a href="tel:03001231059"> 0300 1231059</a> or <a href="tel: 0300619450"> 0300 619450</a> (9am–5pm)</p>

<hr>

<h4>Case is at Warrant – What Are the Customer’s Options?</h4>

<p>If the case is currently at warrant/enforcement agents, this means that we are unable to accept representations from the customer.</p>

<p>Their options moving forward are to either pay the PCN with the enforcement agents or file a Late Witness Statement with the Traffic Enforcement Centre.</p>

<p>The reasons for filing a Late Witness Statement are:</p>
<ul>
  <li>Grounds 1: Did not get a ‘notice to owner’ telling you how to make a formal challenge</li>
  <li>Grounds 2: Made a formal challenge on time but did not get a ‘notice of rejection’</li>
  <li>Grounds 3: Appealed to an independent tribunal on time but did not get a response</li>
  <li>Grounds 4: Have proof you’ve paid the penalty charge, such as a credit card statement</li>
</ul>

<p>To do this, they will need to complete Forms TE7 and TE9.<br>
Forms can be found at:<br>
<a href="https://www.gov.uk/government/publications/form-te9-witness-statement-unpaid-penalty-charge">https://www.gov.uk/government/publications/form-te9-witness-statement-unpaid-penalty-charge</a><br>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Unpaid%20Penalty%20Charge\`
    "
>
    Send link to review further information
</button>

<a href="https://www.gov.uk/government/publications/form-te7-application-to-file-a-statement-out-of-time">https://www.gov.uk/government/publications/form-te7-application-to-file-a-statement-out-of-time</a></p>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Application%20to%20file%20a%20statement%20out%20of%20time\`
    "
>
    Send link to review further information
</button>

<p>The forms must be returned to:<br>
Traffic Enforcement Centre<br>
County Court Business Centre<br>
St Katharine’s House, 21-27 St Katharine’s Street, Northampton, NN1 2LH<br>
Or email: <a href="mailto:tec@justice.gov.uk">tec@justice.gov.uk</a></p>

<p>If they have any queries about submitting the application, they can contact the Traffic Enforcement Centre:<br>
<a href="tel:03001231059">0300 123 1059</a> or <a href="tel: 0300619450">0300 619 450</a> (9am–5pm)</p>

<p>Once they have filed a Late Witness Statement with the Traffic Enforcement Centre, we will write to the enforcement agents and ask them to place enforcement on hold while we wait for TEC to send a revoking order.</p>

  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "06/12/2024", name: "Nathan Smith" }
);

const debtRegistrationAndWarrantCases = new ContentP(
  "debtRegistrationAndWarrantCases",
  "Debt Registration and Warrant Cases",
  "Find out what happens when a PCN reaches the debt registration or warrant stage, including how to respond and what support is available.",
  `
    <p>
      Challenges can be made online within 28 days of receiving the original
      ticket. It can take up to 24 hours to appear on the online portal.
      <br>
      <br>
      Documentation can be uploaded to support the challenge, the online link also
      enables the motorist to use an interactive portal to guide them through their
      appeal and the evidence can be viewed (e.g photos of the contravention)
      <br>
      <br>
      Do not discuss any possible outcomes or give your opinions. Parking services
      will contact the customer following the decision.
    </p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "08/05/2025", name: "Andy Walker" }
);

const debtGuidanceRelatedToPCNs = new ContentP(
  "debtGuidanceRelatedToPCNs",
  "Debt Guidance Related To PCN's",
  "Find out where to get debt advice related to PCNs, including support for Breathing Space, Debt Relief Orders, and mental health crisis assistance.",
  `
    <p>This page provides detailed information and resources related to debt guidance, PCN support, and parking-related services in Sheffield.</p>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Here are some resources to help with debt guidance related to PCN's</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <ul>
          <li><strong><a href="https://www.moneyhelper.org.uk/en?source=mas" target="_blank">Money Advice Service</a></strong></li>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Money%20Helper\`
    "
>
    Send link to review further information
</button>

          <li><strong><a href="https://www.stepchange.org/" target="_blank">StepChange Debt Charity</a></strong><br>Tel: <a href="tel:08001381111">0800 138 1111</a> (Monday to Friday 8am–8pm, Saturday 8am–4pm)</li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Step%20Change\`
    "
>
    Send link to review further information
</button>

          <li><strong><a href="https://www.gov.uk/pay-off-debts" target="_blank">GOV.UK – Pay Off Your Debts</a></strong></li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Pay%20off%20debts\`
    "
>
    Send link to review further information
</button>

          <li><strong><a href="https://nationaldebtline.org/" target="_blank">National Debtline</a></strong><br>Tel: <a href="tel:08088084000">0808 8084000</a> (Monday to Friday 9am–8pm)</li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=National%20Debt%20Line\`
    "
>
    Send link to review further information
</button>

          <li><strong><a href="https://www.citizensadvice.org.uk/" target="_blank">Citizens Advice</a></strong><br>

          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Citizens%20Advice\`
    "
>
    Send link to review further information
</button>

            <span>Adviceline (England): <a href="tel:03444111444">03444 111444</a></span><br>
            <span>Advicelink (Wales): <a href="tel:03444772020">03444 772020</a></span><br>
            <span>Textphone: <a href="tel:1800103444111445">18001 03444111445</a></span>
          </li>
        </ul>
        <p>If you are struggling to pay, debt advisors may be able to offer you support with Breathing Space through the 
        Debt Respite Scheme, which offers two types of breathing space:</p>
        <ul>
          <li>Standard Breathing Space</li>
          <li>Mental Health Crisis Breathing Space</li>
        </ul>
        <p>Debt advisors can also assist with applying for a Debt Relief Order (DRO) to help manage 
        debts you cannot pay. More information about DROs is available here:</p>
        <p><a href="https://www.gov.uk/guidance/debt-relief-orders-guidance-for-debt-advisers" target="_blank">https://www.gov.uk/guidance/debt-relief-orders-guidance-for-debt-advisers</a></p>
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Debt%20relief%20orders\`
    "
>
    Send link to review further information
</button>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Mental Health Support</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <ul>
          <li><a href="https://www.rethink.org/advice-and-information" target="_blank">https://www.rethink.org/advice-and-information</a></li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Rethink\`
    "
>
    Send link to review further information
</button>

          <li><a href="https://www.gov.uk/government/publications/debt-respite-scheme-breathing-space-guidance/debt-respite-scheme-breathing-space-guidance-for-money-advisers" target="_blank">Breathing Space Guidance for Creditors – GOV.UK</a></li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Debt%20Respite%20Scheme\`
    "
>
    Send link to review further information
</button>

        </ul>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Suspension / Dispensation Requests</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>If a customer needs to suspend parking bays or requests a yellow line dispensation, information can be found here:</p>
        <ul>
          <li><a href="https://www.sheffield.gov.uk/parking/request-parking-bay-suspension" target="_blank">https://www.sheffield.gov.uk/parking/request-parking-bay-suspension</a></li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Request%20a%20parking%20bay%20suspension\`
    "
>
    Send link to review further information
</button>

          <li><a href="https://www.sheffield.gov.uk/parking/request-yellow-line-dispensation" target="_blank">https://www.sheffield.gov.uk/parking/request-yellow-line-dispensation</a></li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Request%20yellow%20line%20dispensation\`
    "
>
    Send link to review further information
</button>

        </ul>
        <p>For questions, customers can contact: <a href="mailto:suspensions@sheffield.gov.uk">suspensions@sheffield.gov.uk</a></p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Taxi/PHV Drivers</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p><strong>Driver wants to be added to the exemption list:</strong></p>
        <ul>
          <li>Send a copy of the PHV vehicle licence (showing vehicle registration number, start and end date) to: <a href="mailto:PHV@sheffield.gov.uk">PHV@sheffield.gov.uk</a></li>
          <li>Note: It must be the vehicle licence, not the driver's licence.</li>
        </ul>

        <h4>Driver has received a Bus Lane PCN but has a valid PHV licence</h4>
        <ul>
          <li>They can make representations via the website (preferred): <a href="https://www.sheffield.gov.uk/parking/pay-penalty-charge-notice" target="_blank">https://www.sheffield.gov.uk/parking/pay-penalty-charge-notice</a></li>
          <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Pay%20Penalty%20Charge%20Notice\`
    "
>
    Send link to review further information
</button>

          <li>Alternatively, email the PHV licence and PCN reference to: <a href="mailto:PHV@sheffield.gov.uk">PHV@sheffield.gov.uk</a></li>
          <li>Important: The licence must cover the date of the contravention to cancel the PCN.</li>
        </ul>

        <h4>Sheffield City Council PHV driver received a Bus Lane PCN</h4>
        <ul>
          <li>Contact Parking Services immediately to check the exemption list (as SCC PHV drivers should automatically be exempt).</li>
          <li>Alternatively, drivers can appeal online or via email to: <a href="mailto:parkingservices@sheffield.gov.uk">parkingservices@sheffield.gov.uk</a></li>
        </ul>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Reporting Incorrectly Parked Vehicles</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>Customers can report incorrectly parked vehicles online:</p>
        <p><a href="https://www.sheffield.gov.uk/parking/report-incorrectly-parked-vehicle" target="_blank">https://www.sheffield.gov.uk/parking/report-incorrectly-parked-vehicle</a></p>
        
        <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20an%20incorrectly%20parked%20vehicle\`
    "
>
    Send link to review further information
</button>

      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Other Parking Enquiries</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>For issues related to:</p>
        <ul>
          <li>Machine faults/complaints</li>
          <li>Car park complaints</li>
          <li>Refunds (pay and display)</li>
          <li>Car park suspensions</li>
          <li>Signage faults</li>
        </ul>
        <p>Please send these enquiries to: <a href="mailto:TSOcarparkmaintenance@sheffield.gov.uk">TSOcarparkmaintenance@sheffield.gov.uk</a></p>
      </div>
    </details>

  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "08/05/2025", name: "Andy Walker" }
);

const postReceivedForSomeoneNotLivingAtAddress = new ContentP(
  "postReceivedForSomeoneNotLivingAtAddress",
  "Post Received For Someone Not Living At The Address",
  "Find out what happens when a PCN is sent to your address but the person does not live at the address.",
  `
    <h3>PCN Received For Someone Not Living At The Address</h3>
    <p>
    They can write on the envelope ‘not at this address’ and return it to the sender.<br>
    They can email <a href="mailto:parkingservices@sheffield.gov.uk">parkingservices@sheffield.gov.uk</a> with the PCN reference and explain the person does 
    not live at the address (including any forwarding address, if known).<br>
    Let them know they are not liable for the PCN and can disregard it.
    </p>

  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "08/05/2025", name: "Andy Walker" }
);

const unableToResolvePcn = new ContentP(
  "unableToResolvePcn",
  "Unable To Resolve a PCN",
  "Find out what happens when you are unable to resolve the PCN.",
  `
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Customer has a parking or bus lane PCN</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>If you are still unable to resolve the PCN, you can warm transfer to:
        <strong>Advisor Note: (Internal number Storm line):</strong>
        <a href="tel: 87061">87061</a> (Internal Number).</p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Customer has a Clean Air Zone (CAZ) PCN</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>If you are still unable to resolve the PCN, you can warm transfer to:
         <strong>Advisor Note: (Internal number Storm line):</strong>
        <a href="tel: 87062">87062</a> (Internal Number).</p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>We have offered a certain amount on a recent letter, however, when they go to pay it states a different amount</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          You can warm transfer to:
           <strong>Advisor Note: (Internal number Storm line):</strong>
          <a href="tel: 87061">87061</a><br><br>
          dependent on PCN type, to let us check the correct amount is showing and amend it on the call if it is wrong.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Enforcement Agents are at a Customer’s Property</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          If a customer calls and states enforcement agents are at their property to recover funds, then you can contact us via warm transfer on: 
           <strong>Advisor Note: (Internal number Storm line):</strong>
          <a href="tel: 87061">87061</a> dependent on PCN type.<br><br>
          If you can, try to get as much information from the customer such as the PCN reference and any background information.
        </p>
        <p>
          If they have grounds to file a Late Witness Statement, then we can request enforcement is placed on hold temporarily to allow them time to do so.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>A PCN has been issued using an incorrect Vehicle Registration Mark (VRM)</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          The customer can challenge the PCN as normal, and we will confirm to them in writing that the PCN has been cancelled.<br><br>
          If the VRM is clearly incorrect, then you can warm transfer to:
          <strong>Advisor Note: (Internal number Storm line):</strong>
          <a href="tel: 87061"> 87061</a>depending on PCN type so we can investigate it further.
        </p>
      </div>
    </details>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "TEC",
      "Fine",
      "Taxi PCN",
      "Bailiff"
    ],
    categories: ["Parking"],
  },
  { date: "09/05/2025", name: "Andy Walker" }
);

const penaltyChargeNoticePcn = new MenuP(
  "penaltyChargeNoticePCN",
  "Penalty Charge Notice (PCN)",
  "Guidance on resolving Penalty Charge Notice (PCN) issues, including confirming payments, troubleshooting online payment problems, and steps for customers unable to pay. Also provides information on enforcement actions and bailiff inquiries.",
  [
    confirmationOfPayment,
    customerPaidTwice,
    customerTriedToPayOnline,
    customerUnableToPay,
    enforcementBaliffEnquiries,
    howCanIAppeal,
    howLongDoIHaveToAppeal,
    makingAPayment,
    multiplepcns,
    debtRegistrationAndWarrantCases,
    debtGuidanceRelatedToPCNs,
    postReceivedForSomeoneNotLivingAtAddress,
    unableToResolvePcn
  ]
);

//#endregion Penalty Charge Notice (PCN)

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\

const haveYouReceivedMyAppeal = new ContentP(
  "haveYouReceivedMyAppeal",
  "Have You Received My Appeal",
  "",
  `
	  <p>This can be found by checking Gateway.</p>
  `,
  { buttonLabel: "Parking Permit", formName: "" },
  { typeKey: "" },
  { typeKey: "parking_permit_information_provided" },
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
      "premit"
    ],
    categories: ["Parking"],
  },
  { date: "14/10/2024", name: "Dinah WIlliams" }
);

// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const parking = new ServiceP(
  "parking",
  "Parking",
  `Car parks, on-street parking, residents' parking permits, visitors' parking, disabled parking, parking fines…`,
  [parkingPermits, penaltyChargeNoticePcn, parkingIssues, blueBadge]
);
