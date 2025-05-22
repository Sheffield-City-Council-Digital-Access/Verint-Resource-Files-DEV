class CoreFaC {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceFaC extends CoreFaC {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuFaC extends CoreFaC {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentFaC extends CoreFaC {
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

class FormFaC extends CoreFaC {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const adultsocialcarecomplaints = new ContentFaC(
  "adultSocialCareComplaints",
  "Adult social care complaints",
  "Adult Social Care complaints, including resolution steps and investigation procedures.",
  `
    <p> The Adult Social Care Complaints Procedure differs from the Corporate Complaints Procedure. 
    This is because it is governed by the 2009 Local Authority Social Services and National Health Service Regulations.</p>

    <p>Customer Services, Feedback and Complaints Team act as Case Coordinator for Adult Social Care complaints.  </p>

<h3>Early resolution</h3>

<p> The focus of complaint handling is not about satisfying a complaints process but seeking to resolve the issues 
our customers raise. </p>

<p>You should only use this form for retrospective recording of a complaint resolved at the first point of contact 
(read the Problem Solving Guide under Documents). 
After 3 working days, if the complaint remains unresolved through problem solving and is not already recorded in the 
Councils Feedback and Complaints case management system (CRM), 
the complaint needs to be recorded using the Complain about Adult Social Care Services form. 
The Customer Feedback and Complaints team will allocate the complaint to the Accountable / 
Reviewing / Investigating Manager in the relevant service. 
Read the Manager Guidance under Documents. </p>

<p> The first task is to write to acknowledge receipt and to say who will be investigating the complaint. 
If the Investigating Manager (IM) has not already spoken to the customer, 
they should do this as soon as possible to clarify the issues raised and 
the outcome sought and agree a timescale for a response. </p>

<p> More detailed information of how to investigate and respond to a complaint is provided in the Corporate 
Complaints Procedure – Effective Complaint handling Guide under Documents. </p>

<h3>Handling a complaint well</h3>

<p>
  <ul>
    <li>Check for any issues around consent or safeguarding</li>
    <li>Review the key documentation around the complaint and speak to the people involved</li>
    <li>Having formed an initial view, IMs should discuss their findings with the customer before drafting their response</li>
    <li>Complaint responses should be focused on resolution and address the issues raised in a thorough way, using plain English</li>
    <li>Responses must be sent from the relevant Head of Service, after being checked by the Service Manager</li>
    <li>To help managers carry out their complaints investigation role we have developed the Customer Complaints: Effective Handling on Go Learn.</li>
  </ul>
</p>

  `,
  {
    buttonLabel: "Make an adult's social care complaint",
    formName: "complain_adult_social",
  },
  // {
  //   buttonLabel: "Make a compliment",
  //   formName: "feedback_compliment",
  // },
  // {
  //   buttonLabel: "Complaint Survey",
  //   formName: "complaints_survey",
  // },
  // { buttonLabel: "Make a Suggestion" },
  // { formName: "feedback_suggestion" },
  
  { typeKey: "" },
  { typeKey: "feedback_services_adult_information_provided" },

  {
    type: "Complaint",
    keywords: [
      "feadback and complaints",
      "feedback and complants",
      "feedbak and complaints",
      "feedback and complaits",
      "fedback and complaints"
    ],
    categories: ["Feedback and Complaint"],
  },
  { date: "11/11/2024", name: "Sam Coupland" }
);

const childrensSocialCareComplaints = new ContentFaC(
  "childrensSocialCareComplaints",
  "Children's social care complaints",
  "Learn about the process for handling Children’s Social Care complaints, including resolution stages and statutory procedures",
  `
   <p>The Feedback and Complaints Team act as Case Coordinator for the Children and Families Service.</p>

  <p>The Children Act complaints procedure is governed by The Children Act 1989 Representations Procedure (England) 
  Regulations 2006, 
  and the accompanying guidance “Getting the Best from Complaints.”</p>

  <p>A complaint is eligible for consideration under the Children Act procedure 
  if it is made by an eligible individual as defined by Section 26(3) and section 24D of the Children Act 1989 and section
  3(1) of the Adoption and Children Act 2002, and the complaint is about a statutory function provided to a child or young person under Part 3, 4 or 5 of the Children Act 1989. 
  Also included are adoption support services and specialist guardian support services.</p>

  <p>If a complaint does not meet the eligibility criteria it will be considered under the Corporate Complaint Procedure.</p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Stage 1: early resolution / service response (local resolution)</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Our initial focus should be on resolving customer's complaints as quickly and as simply as possible 
      through early resolution. For Children Act complaints, 
      early resolution will be viewed and attempted as part of Stage 1 of the Children Act complaint procedure.</p>

      <p>On receipt of a complaint, 
      if you feel there is scope for early resolution you should aim to make contact quickly with the customer.</p>

      <p>Complaints dealt with through early resolution should be resolved 
      (or have an agreed way forward) within 5 working days of being received using the Early Resolution form.</p>

      <p>This form should only be used for retrospective recording of a complaint resolved at the first point of contact.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Early resolution for Children Act related complaints means:</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <ul>
          <li>Talking to the customer</li>
          <li>Listening to what they have to say</li>
          <li>Seeking a solution to their problem</li>
          <li>Explaining what will happen</li>
          <li>Confirming in writing to the Customer the agreed resolution</li>
          <li>Recording details on the feedback and complaints case management system</li>
          <li>After 5 working days, if the complaint remains unresolved, 
          you must complete an investigation and record using the form below.</li>
          <li>This will update the Council’s Complaints case management system (CRM). On receipt, 
          the Customer Feedback and Complaints team will allocate the complaint to the 
          Accountable / Reviewing  / Investigating Manager within the relevant service.</li>
          <li>Read the Manager Guidance under Documents.</li>
        </ul>
      </p>

      <p>You should speak to the customer to clarify the issues being raised and the outcomes being sought and 
      respond in writing to the customer within 20 working days of the complaint being received.</p>

      <p>Service Managers will sometimes arrange (with the agreement of the customer) 
      to meet with customer following receipt of the Stage 1 response to provide further explanation and / 
      or remedy to resolve the complaint.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Stage 2: formal investigation</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Our initial focus should be on resolving customer's complaints as quickly and as simply as possible 
      through early resolution. For Children Act complaints, 
      early resolution will be viewed and attempted as part of Stage 1 of the Children Act complaint procedure.</p>

      <p>On receipt of a complaint, 
      if you feel there is scope for early resolution you should aim to make contact quickly with the customer.</p>

      <p>Complaints dealt with through early resolution should be resolved 
      (or have an agreed way forward) within 5 working days of being received using the Early Resolution form.</p>

      <p>This form should only be used for retrospective recording of a complaint resolved at the first point of contact.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Stage 3: review panel</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>This is the final stage of the statutory complaints procedure. 
      A Review Panel is arranged within 30 working days of the request being made and comprises three independent panellists. 
      Following the review hearing the Panel makes recommendations to the Director, who then issues a decision to the customer.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Local Government and Social Care Ombudsman</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>This is the final stage of the statutory complaints procedure. 
      A Review Panel is arranged within 30 working days of the request being made and comprises three independent panellists. 
      Following the review hearing the Panel makes recommendations to the Director, who then issues a decision to the customer.</p>
    </div>
  </details>

`,
  {
    buttonLabel: "Make a children's social care complaint",
    formName: "complain_child_social",
  },
  // {
  //   buttonLabel: "Make a compliment",
  //   formName: "feedback_compliment",
  // },
  // {
  //   buttonLabel: "Complaint Survey",
  //   formName: "complaints_survey",
  // },
  // { buttonLabel: "Make a Suggestion" },
  // { formName: "feedback_suggestion" },
  
    { typeKey: "" },
    { typeKey: "feedback_services_child_information_provided" },
    {
    type: "Complaint",
    keywords: [
      "feadback and complaints",
      "feedback and complants",
      "feedbak and complaints",
      "feedback and complaits",
      "fedback and complaints"
    ],
    categories: ["Feedback and Complaint"],
  },
  { date: "11/11/2024", name: "Sam Coupland" }
);

const complaints = new ContentFaC(
  "complaints",
  "Complaints",
  "How complaints are handled by Sheffield City Council, including the process, principles, and commitment to service improvement.",
  `
    <h3>Our Approach</h3>

    <p> Our definition of a complaint is ‘an expression of dissatisfaction, however made, about the standard of service, 
    actions or lack of action by the organisation/landlord, its own staff, or those acting on its behalf, 
    affecting an individual/resident or group of individuals/residents.</p>

    <p>We value our customers’ views on the way we deliver our services. 
    We are committed to using these views to improve our services.  </p>

    <p> When a customer makes a complaint, their complaint will be handled through with the approach set out in this Policy. 
    We will do this irrespective of where and how they make their complaint.</p>

    <h3>Service request enquiry and complaints</h3>

     <p>Our communication with the complainant will not identify individual members of staff or contractors, 
     except in exceptional circumstances, as their actions are undertaken on behalf of the Council.</p>

     <p>Where a response to a complaint falls outside the timescales set out in this Policy, 
     we will agree with the complainant suitable intervals for keeping them informed about their complaint.</p>

     <p>When responding, we will where appropriate, thank the complainant, 
     clearly explain what happened and what we will do, and will apologise and put in place remedies.</p>

     <p>Our tone will be open, responsive and avoid unnecessary formality. 
     Written correspondence will use Plain English.</p>

     <p>Customers who make a complaint will be treated fairly and will not be victimised or 
     discriminated against either in the investigation or conclusion of their complaint, 
     or in any service they receive or request.</p>

     <p>Dealing with complaints is the responsibility of all Sheffield City Council employees.</p>

     <p>We will keep a record of complaints raised by customers.</p>

      <p>We will learn from complaints so that we can improve our service.</p>


  `,
  {
    buttonLabel: "Make a compliment",
    formName: "make_complaint",
  },
  { typeKey: "" },
  { typeKey: "feedback_services_complaint_information_provided" },
  // {
  //   buttonLabel: "Make a compliment",
  //   formName: "feedback_compliment",
  // },
  // {
  //   buttonLabel: "Complaint Survey",
  //   formName: "complaints_survey",
  // },
  // { buttonLabel: "Make a Suggestion" },
  // { formName: "feedback_suggestion" },
  {
    type: "Complaint",
    keywords: [
      "feadback and complaints",
      "feedback and complants",
      "feedbak and complaints",
      "feedback and complaits",
      "fedback and complaints"
    ],
    categories: ["Feedback and Complaint"],
  },
  { date: "11/11/2024", name: "Sam Coupland" }
);


const compliment = new FormFaC(
  "compliment",
  "Compliments",
  "Log a compliment about our service.",
  "feedback_compliment",
  {
    type: "Make",
    keywords: 
    [
      "complaints",
      "compliments",
      "compliment",
      "complament",
      "feadback and complaints",
      "feedback and complants",
      "feedbak and complaints",
      "feedback and complaits",
      "fedback and complaints"
    ],
    categories: ["feedback and complaints"],
  },
  { date: "22/05/2025", name: "Sam Coupland" }
);

const corporateComplaintsProcedure = new ContentFaC(
  "corporateComplaintsProcedure",
  "Corporate complaints procedure",
  "Sheffield City Council's two-stage Corporate Complaints Procedure, including response times and escalation to the Ombudsman.",
  `
    <p> Sheffield City Council's Corporate Complaint Handling Procedure has been aligned to the new Ombudsman Complaint 
    Handling Code. This is effective for Housing and Repairs Services from 1 April 2024 and for all other Corporate Council 
    Services from 1 September 2024. Our corporate complaints procedure is a two staged process, consistent across the Council,
     with clear timescales set out for responses.</p>



<h3>Early resolution/Investigation</h3>

<p> You are encouraged wherever possible to provide early and local resolution. Wherever possible, 
seek to resolve the complaint at the first point of contact or within 5 working days of receipt of the complaint. 
Record these consistently in the complaint management recording system (CRM). </p>

<p>This form should only be used for retrospective recording of a complaint resolved at the first point of contact. 
Once resolved, good practise is to ensure some written correspondence is sent to the complainant. 
It should advise/confirm your agreed actions.</p>

<p> If you cannot resolve within 5 working days, or the complaint is too complex to complete within this timeframe, 
then you must ensure that a full investigation is completed and the complainant advised accordingly. </p>

<h3>Acknowledgement</h3>

<p>
Within 5 working days of receipt of the complaint.
</p>


<details class="accordion">
  <summary class="accordion-header">
    <h3>Stage 1 – Early resolution/Investigation</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      Response is within 10 working days of the complaint being acknowledged. However,
      any extension will be no more than 10 working days without good reason, 
      and the reason(s) will be clearly explained to the complainant.
    </p>
  </div>
</details>


<details class="accordion">
  <summary class="accordion-header">
    <h3>Stage 2 – Investigation Review</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      An investigation review occurs if a customer remains dissatisfied within 20 working days of the 
      complaint being acknowledged. Any extension of these timescales must be no longer than an additional 20 working days, 
      with good reason and agreement with the complainant.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Ombudsman and customer dissatisfaction</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      If the complainant is dissatisfied with the response after the Investigation Review, 
      they may be referred to the relevant Ombudsman.
    </p>
    <p>
      If we are unable to respond within the above timescales, 
      we will contact the customer to explain why and will agree a date for a response.
    </p>
  </div>
</details>

  `,
  {
    buttonLabel: "Make a complaint",
    formName: "make_complaint",
  },

  // {
  //   buttonLabel: "Make a compliment",
  //   formName: "feedback_compliment",
  // },
  // {
  //   buttonLabel: "Complaint Survey",
  //   formName: "complaints_survey",
  // },
  // { buttonLabel: "Make a Suggestion" },
  // { formName: "feedback_suggestion" },
  
  
  
  { typeKey: "" },
  { typeKey: "feedback_services_complaint_information_provided" },
  {
    type: "Complaint",
    keywords: [
      "feadback and complaints",
      "feedback and complants",
      "feedbak and complaints",
      "feedback and complaits",
      "fedback and complaints"
    ],
    categories: ["Feedback and Complaint"],
  },
  { date: "11/11/2024", name: "Sam Coupland" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const feedbackAndComplaints = new ServiceFaC(
  "feedbackAndComplaints",
  "Feedback and Complaints",
  "Information and Logging processes for Adult Social Care, Children's Social Care, Corporate Complaints, and our general approach to feedback and resolution.",
    [
      adultsocialcarecomplaints,
      childrensSocialCareComplaints,
      complaints,
      compliment,
      corporateComplaintsProcedure
    ]
);
