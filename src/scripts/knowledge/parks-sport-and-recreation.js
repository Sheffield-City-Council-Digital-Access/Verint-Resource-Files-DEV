class CorePSaR {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServicePSaR extends CorePSaR {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuPSaR extends CorePSaR {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentPSaR extends CorePSaR {
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

class FormPSaR extends CorePSaR {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

//#region Allotments

const allotmentsEligibility = new ContentPSaR(
  "allotmentsEligibility",
  "Eligibility for Allotments",
  "Who can apply for an allotment plot",
  `
    <p>
      You must live within the Sheffield City Council boundary 
      (or not more than 1 mile outside of it) to be eligible for a plot. 
      If you plan to move to Sheffield, you may join the waiting list beforehand, 
      but cannot sign up until you meet residency criteria. Moving more than 
      1 mile outside Sheffield requires giving up your plot.
    </p>
    <p>
      You must be 18 years old before taking a plot. If you reach the top of 
      the waiting list before 18, you must wait until your 18th birthday.
    </p>

    <h3>Ready to apply?</h3>
    <p>
      You can apply for an allotment online using the Sheffield City Council 
      Allotment Application Service:
      <br />
      <a href="https://sheffield.colonycloud.co.uk/" target="_blank" rel="noopener noreferrer">
        https://sheffield.colonycloud.co.uk/
      </a>
    </p>

    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to apply for an allotment"
      onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20an%20allotment\`
      "
    >
      Send link to apply for an allotment
    </button>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Eligibility",
  "Eligability",
  "Application",
  "Aplication",
  "Plots",
  "Plot"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsContact = new ContentPSaR(
  "allotmentsContact",
  "Annual Waiting List Refresh",
  "Information on the yearly waiting list refresh for allotments",
  `
<p>
  Every October, applicants are asked to confirm they wish to remain on the list. 
  Failure to respond may result in removal. If you wish to appeal, please contact 
  <a href="mailto:pwc.allotments@sheffield.gov.uk">pwc.allotments@sheffield.gov.uk</a>.
</p>
<p>
  For more information on Sheffield allotments, consult the official policy and regulations document:
  <br />
  <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
    Allotment Policy and Regulations
  </a>
</p>

<button
  type="button"
  class="dform_widget email-btn dform_widget_type_button"
  aria-label="Send link to Sheffield allotment policy and regulations"
  onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
  "
>
  Send link to review the policy and regulations
</button>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Alotments",
  "Allotment",
  "Alotment",
  "Waiting List",
  "Waitng List",
  "Annual Refresh",
  "Anual Refresh",
  "Renewal",
  "Renewel"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsApplying = new ContentPSaR(
  "allotmentsApplying",
  "Applying for a Plot",
  "How to apply for an allotment plot",
  `
    <h3>To apply for an allotment plot you must:</h3>
    <ul>
      <li>Be a Sheffield resident or live within 1 mile of the city boundary.</li>
      <li>Only be on one waiting list at a time (exceptions at the discretion of the office).</li>
      <li>Apply using the online form: 
        <a href="https://sheffield.colonycloud.co.uk/" target="_blank" rel="noopener noreferrer">
          https://sheffield.colonycloud.co.uk/
        </a>
      </li>
    </ul>

    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to allotment application"
      onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20an%20allotment\`
      "
    >
      Send link to apply for an allotment
    </button>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Application",
  "Aplication",
  "Plots",
  "Plot"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsPlotOffers = new ContentPSaR(
  "allotmentsPlotOffers",
  "Plot Offers",
  "How plots are offered from the waiting list for allotments",
  `
    <h3>How Plots Are Offered</h3>
    <p>
    Applicants are selected from the waiting list on a first-come, 
    first-served basis. When you reach the top of your chosen list, you’ll be 
    offered a specific plot by email (or by post if you do not have an email address).
    </p>

    <h4>Responding to an Offer</h4>
    <ul>
      <li>Contact the office within <strong>10 working days</strong> of the offer (or <strong>14 days</strong> if sent by post) to accept, or the offer may be withdrawn.</li>
      <li>If no response is received within <strong>28 days</strong>, we’ll assume you no longer wish to apply and remove your name from the waiting list.</li>
      <li>Declining an offer is allowed once; further refusals may result in removal from the list.</li>
      <li>Plot offers are site-specific and cannot be transferred to another site.</li>
      <li>Use the <strong>Allotment request</strong> button below.</li>
    </ul>

    <h4>Questions About Your Waiting List Position</h4>
    <p>
    If you would like to ask about your place on the waiting list or discuss a 
    plot offer, use the <strong>Allotment request</strong> button below.
    </p>

    <h4>Accepting a Plot</h4>
    <p>
    To accept a plot, you must submit your acceptance form promptly 
    after viewing it. You can either return the paper form or complete the 
    online form, along with the following documents:
    </p>
    <ul>
      <li>Photo ID and proof of address</li>
      <li>Proof of concession eligibility, if applicable</li>
    </ul>
    <p>
    If your acceptance form and supporting documents are not 
    received within <strong>5 working days</strong>, a reminder will be sent 
    by email. If we do not receive them within a further <strong>5 working 
    days</strong>, the offer may be withdrawn and your name removed from the 
    waiting list.
    </p>
    <p>
    Use the <strong>Allotment request</strong> button to submit your 
    acceptance form or access the online form.
    </p>

    <h4>Concessions</h4>
    <p>
      Concessions are available to eligible tenants, including those on a 
      low income, with disabilities, students, or of state pension age. You must 
      provide valid evidence—such as proof of benefits, student status, or pension 
      age—when first claiming and each year during the concession window 
      (unless age-related). Claims cannot be backdated, and only one concession 
      can be applied per tenant and plot. Failure to claim within the window 
      means full rent is due.  
      Please note that only one concession can be awarded per tenant overall, 
      so if you have more than one plot, the concession can only be 
      applied to a single plot.
    </p>    
    <p>For more information on Sheffield allotments, consult the official policy and regulations document:</p>
    <p>
      <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
        Allotment Policy and Regulations
      </a>
    </p>
    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to Sheffield allotment policy and regulations"
      onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
      "
    >
      Send link to review the policy and regulations
    </button>
  `,
  { buttonLabel: "Allotment request", formName: "request_allotment_parks" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
   keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Plot Offers",
  "Plot Offer",
  "Plot Ofers",
  "Plot Ofer",
  "Waiting List",
  "Wating List",
  "Waithing List",
  "Eligibility",
  "Eligability",
  "Appeals",
  "Appeal",
  "Apeals",
  "Apeal"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsPayingFees = new ContentPSaR(
  "allotmentsPayingFees",
  "Paying Annual Fees",
  "Details about rent and water charges for allotments",
  `
  <p>
    The rental year runs from 1st April to 31st March. Rent is reviewed and set annually, 
    with due notice provided in accordance with the legal requirement to give tenants at least 
    one year’s notice of any rent change. All allotment rent is reinvested into the running of the service, 
    the provision of amenities, and the maintenance of sites.
  </p>
  <ul>
    <li>You (the tenant) will be charged rent, plus a water charge if your site has a water supply.</li>
    <li>There are a range of ways to pay. You are responsible for paying promptly on receipt of your invoice, whichever payment method you choose.</li>
    <li>
      If you opt for Direct Debit, you are responsible for ensuring payments are deducted from your account.  
      Direct Debit arrangements must be in place no later than the <strong>1st of March</strong>.  
      If the Direct Debit is not set up on time, other payment methods will be available.
    </li>
    <li>If you would struggle to pay your rent in full immediately, contact the Council promptly on receipt of your invoice; there may be options to help.</li>
    <li>
      Each January, tenants are contacted with details about the upcoming rental year, including information on rent and water charges, concession eligibility, 
      and payment options such as Direct Debit setup.
    </li>
  </ul>
    <p>
    For more information on Sheffield allotments, consult the official policy and regulations document:
    <br />
    <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
    Allotment Policy and Regulations
    </a>
    </p>

<button
  type="button"
  class="dform_widget email-btn dform_widget_type_button"
  aria-label="Send link to Sheffield allotment policy and regulations"
  onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
  "
>
  Send link to review the policy and regulations
</button>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Rent",
  "Rant",
  "Payment",
  "Paymant",
  "Water Charges",
  "Water Charge",
  "Watar Charges",
  "Watter Charges"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsNoticeToQuit = new ContentPSaR(
  "allotmentsNoticeToQuit",
  "Rent Notice to Quit Policy",
  "What happens if rent is not paid for an allotment",
  `
    <p>
      In addition to the Sheffield City Council standard payment policy, 
      if you fail to pay within 40 days of your rent invoice date, 
      you will be issued a Rent ‘Notice to Quit’. 
      If you receive a Rent Notice to Quit, you may be able to keep the 
      plot by submitting an appeal within 14 days of the issued date. 
      Appeal details are included within the Notice to Quit letter, and 
      customers should follow the instructions provided in their notice.
    </p>
    <ul>
      <li>If your appeal is successful, you must clear all arrears during the 1-month Notice period.</li>
      <li>If you receive 3 Notices to Quit for non-payment during your tenancy, the 3rd Notice will stand, even if payment is made during the Notice period.</li>
      <li>Exceptional circumstances can be considered through the appeals process.</li>
    </ul>
    <p>
      If you have received a Notice to Quit and wish to discuss your situation, 
      use the <strong>Allotment request</strong> button below.
    </p>
    <p>
     For more information on Sheffield allotments, consult the official policy and regulations document:
    <br />
    <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
    Allotment Policy and Regulations
    </a>
    </p>

<button
  type="button"
  class="dform_widget email-btn dform_widget_type_button"
  aria-label="Send link to Sheffield allotment policy and regulations"
  onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
  "
>
  Send link to review the policy and regulations
</button>

  `,
  { buttonLabel: "Allotment Request", formName: "request_allotment_parks" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Notice to Quit",
  "Notice to Quite",
  "Rent",
  "Rant",
  "Arrears",
  "Arears",
  "Appeals",
  "Appeel",
  "Apeal"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsFires = new ContentPSaR(
  "allotmentsFires",
  "Burning and Fires",
  "Rules for burning and using fires on plots within allotments",
  `
    <ul>
      <li>Allowed only from 1st October to 30th April (subject to changes in legislation).</li>
      <li>Burn only organic plant material from previous growing seasons.</li>
      <li>No bonfires on open ground; must be contained in an incinerator or similar.</li>
      <li>Do not cause a nuisance as defined in the 
        <a href="https://www.legislation.gov.uk/ukpga/1990/43/contents" target="_blank" rel="noopener noreferrer">
          Environmental Protection Act 1990
        </a>.
      </li>
    </ul>
    <h4>Reports from members of the public</h4>
    <p>
      Burning or smoke issues reported by members of the public should be directed to Environmental Protection Services (EPS). 
      If the burning is creating a <strong>statutory nuisance</strong>—including excessive smoke or visibility issues on the highway—please see:
    </p>
    <p>
      <a href="https://www.sheffield.gov.uk/pollution-nuisance/smoke-nuisance" target="_blank" rel="noopener noreferrer">
        Report a smoke nuisance
      </a>
    </p>
    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to Report a smoke nuisance"
      onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20a%20smoke%20nuisance\`
      "
    >
      Send link to Report a smoke nuisance
    </button>
    <p>
      For more information on Sheffield allotments, consult the official policy and regulations document:
      <br />
      <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" 
         target="_blank" 
         rel="noopener noreferrer">
         Allotment Policy and Regulations
      </a>
    </p>
    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to Sheffield allotment policy and regulations"
      onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
      "
    >
      Send link to review the policy and regulations
    </button>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
      "Allotments",
      "Allotment",
      "Alotment",
      "Fires",
      "Fire",
      "Fyres",
      "Burning",
      "Burnin",
      "Buring",
      "Environmental Protection Act",
      "Enviromental Protection Act",
      "Environmental Protetion Act",
      "Enviromental Protction Act",
      "Smoke nuisance",
      "Smoke",
      "Nuisance",
      "Statutory nuisance"
    ],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsDogs = new ContentPSaR(
  "allotmentsDogs",
  "Dogs on allotments",
  "Rules for dogs on allotment site",
  `
    <ul>
      <li>You can bring your dog on site, but it must not cause a nuisance.</li>
      <li>Dog waste must be collected and disposed of appropriately.</li>
      <li>Dogs must be on leads in communal areas and not stray.</li>
      <li>Dogs must not foul paths or plots.</li>
      <li>Dogs cannot be left unattended on plots.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Dogs",
  "Doggs",
  "Dgos",
  "Rules",
  "Rule",
  "Ruels",
  "Ruless"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsWater = new ContentPSaR(
  "allotmentsWater",
  "Use of Water",
  "Rules for using water on allotment plots",
  `
    <ul>
      <li>Many of our sites have water supplies to help cultivate your plot and care for livestock. Do not drink the water; we cannot guarantee it is safe.</li>
      <li>You must be present on your plot when using the water supply.</li>
      <li>Hosepipes can only be used to fill water butts; no automated devices, sprinklers, or other water spraying devices are allowed.</li>
      <li>Hosepipes must be disconnected from taps when not in use.</li>
      <li>Water must only be used for watering produce and tending livestock kept on your plot.</li>
      <li>Water must not be used to fill paddling pools or wash vehicles.</li>
      <li>Supplies are metered; excessive use may result in increased charges.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Water",
  "Watter",
  "Watr",
  "Use of Water",
  "Use of Watter",
  "Use of Watr",
  "Rules",
  "Rule",
  "Ruels",
  "Ruless"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsKeys = new ContentPSaR(
  "allotmentsKeys",
  "Site Keys",
  "Rules for access and key responsibility for allotments",
  `
    <ul>
      <li>Only the tenant, or a person authorised or accompanied by the tenant, is allowed on the site.</li>
      <li>You are responsible for your site key and that of any co-worker; do not allow persons unknown to you or non-key holders to access the site.</li>
    </ul>
    <p>
    For more information on Sheffield allotments, consult the official policy and regulations document:
    <br />
    <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
    Allotment Policy and Regulations
    </a>
    </p>

<button
  type="button"
  class="dform_widget email-btn dform_widget_type_button"
  aria-label="Send link to Sheffield allotment policy and regulations"
  onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
  "
>
  Send link to review the policy and regulations
</button>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Keys",
  "Keyes",
  "Kyes",
  "Locks",
  "Lokcs",
  "Locs",
  "Access",
  "Acess",
  "Acces",
  "Acsess",
  "Gate Access",
  "Gate Acess",
  "Gat Access"
],
    categories: ["Parks and Countryside"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const allotmentsDrones = new ContentPSaR(
  "allotmentsDrones",
  "Drones",
  "Drone use policy on allotment sites",
  `<p>
  Drones are not permitted on any Sheffield City Council estate, 
  including allotments, without prior written permission. 
  </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Drones",
  "Drone",
  "Drons",
  "Dronz",
  "Model Aircraft",
  "Modell Aircraft",
  "Flying Drones",
  "Fliying Drones",
  "Rules",
  "Rule",
  "Ruels",
  "Ruless"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsTrees = new ContentPSaR(
  "allotmentsTrees",
  "Dangerous Trees on an Allotment",
  "Reporting dangerous trees on allotment sites",
  `
<p>
  If you notice a large tree that appears diseased, damaged, or at 
  risk of failure and poses an immediate danger. 
  Please use the <strong>Report Tree</strong> button below to notify 
  us so that the situation can be assessed and addressed safely.
</p>
  `,
  { buttonLabel: "Report tree", formName: "report_tree" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Trees",
  "Tree",
  "Tress",
  "Treees",
  "Safety",
  "Saftey",
  "Safty",
  "Tree Safety",
  "Tree Saftey",
  "Tree Safty",
  "Tree Hazards",
  "Tree Hazard"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsAsbestos = new ContentPSaR(
  "allotmentsAsbestos",
  "Asbestos",
  "Asbestos policy on allotments",
  `
  <p>
      You must not bring asbestos onto your plot or sites. Asbestos was once 
      a common building material 
      and has found its way onto some allotments in the past. This is 
      often in the form of asbestos 
      cement sheets or pipes (used for roofing, chimneys, etc.), 
      but it can take many other forms.
    </p>
    <p>
      If you are unsure whether something on your plot may contain asbestos, 
      please contact us for advice. 
      Where confirmed, we will arrange for testing and removal.
    </p>
  `,
  { buttonLabel: "Report allotment", formName: "report_allotment_issue" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Asbestos",
  "Asbestoes",
  "Asbesto",
  "Safety",
  "Saftey",
  "Safty",
  "Asbestos Safety",
  "Asbestos Saftey",
  "Asbestos Safty",
  "Hazardous Material",
  "Hazardous Materials",
  "Hazardous Matrial"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsVermin = new ContentPSaR(
  "allotmentsVermin",
  "Rats and Vermin on Allotments",
  "Policy for vermin control on allotment sites",
  `<p>
  Environmental Services will investigate rat issues and take action 
  when appropriate to reduce numbers.
  </p>
  `,
  { buttonLabel: "Report allotment", formName: "report_allotment_issue" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Vermin",
  "Vermiin",
  "Vermn",
  "Rats",
  "Rat",
  "Ratts",
  "Rodents",
  "Rodent",
  "Pests",
  "Pest"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsKeyDeposit = new ContentPSaR(
  "allotmentsKeyDeposits",
  "Allotment Key Deposits",
  "Costs and payment for replacement keys for allotments",
  `<ul>
    <li>Squire keys: £5 deposit</li>
    <li>Mul-T-Lock keys: £30 deposit, with £25 refunded when the key is returned</li>
    <li>Lost or stolen keys: £30 replacement charge</li>
  </ul>
  <p>
      After submitting your request, you will be contacted with instructions on how to make payment.  
      To request a key replacement, use the 
      <strong>Allotment request</strong> button below.
  </p>
  <p>
  For more information on Sheffield allotments, consult the official policy and regulations document:
  <br />
  <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
    Allotment Policy and Regulations
  </a>
  </p>

<button
  type="button"
  class="dform_widget email-btn dform_widget_type_button"
  aria-label="Send link to Sheffield allotment policy and regulations"
  onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
  "
>
  Send link to review the policy and regulations
</button>

  `,
  { buttonLabel: "Allotment request", formName: "request_allotment_parks" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Keys",
  "Keyes",
  "Kyes",
  "Deposit",
  "Deposite",
  "Depost",
  "Security Deposit",
  "Key Deposit"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsEnquiries = new ContentPSaR(
  "allotmentsEnquiries",
  "Allotment Enquiries",
  "Frequently asked questions about allotments in Sheffield, including waiting lists, plot availability, co-workers, and livestock rules.",
  `
  <p>
    Below are answers to the most common allotment enquiries. If you need to contact us,
    please log a case using the <strong>Allotment Enquiries</strong> form.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Where am I on the allotment waiting list?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      To check your position on the waiting list or request more detailed 
      information, use the <strong>Allotment request</strong> button below. 
      The waiting list is updated regularly, and you will 
      be contacted once a plot becomes available.
    </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>There are empty plots on my site — why can’t I have one?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Empty plots may already be on offer to other applicants who are higher up the waiting list.  
        If you have questions about empty plots, please log a case using the <strong>Allotment request</strong> button below and include the allotment site name.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How long will it take to get a plot?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We are unable to provide exact waiting times, as there are many 
        factors that can affect this.  
        However, we can tell you how long the next person on the list 
        has been waiting.  
        Please log a case using the <strong>Allotment Request</strong> 
        button below if you would like this information.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>If I change to a different site, will I keep my place?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        No. If you change to a different allotment site, you will go to the back of that site’s waiting list.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How many people are on the waiting list for my site?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
<p>
  You can visit the 
  <a href="https://www.sheffield.gov.uk/parks-sport-recreation/allotments" target="_blank" rel="noopener noreferrer">
    Allotments
  </a>
  page to see how many plots and applicants there are at each site.  
  For specific information, please log a case using the <strong>Allotment request</strong> button below.
</p>
<button
  type="button"
  class="dform_widget email-btn dform_widget_type_button"
  aria-label="Send link to Allotment information page"
  onclick="window.location.href = window.location.protocol + '//' + window.location.hostname + '/form/launch/send_link_to_service?' + (KDF.getParams().customerid ? 'customerid=' + KDF.getParams().customerid + '&' : '') + 'interactionid=' + KDF.getParams().interactionid + '&sel_service=Allotment%20information%20page';"
  >
  Send link to Allotment information page
</button>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>I applied for two sites — where am I on both lists?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      Applicants can only be on one waiting list at a time. If you apply for more 
      than one site, we will only accept and process your first application. 
      If you have already applied for two sites, you will need to choose which 
      waiting list you want to remain on.
    </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How big are the plots and how much do they cost?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Details about plot sizes and annual costs (rent and water) can be found on the 
        <a href="https://www.sheffield.gov.uk/parks-sport-recreation/allotments" target="_blank" rel="noopener noreferrer">
          Allotments
        </a> 
        page under <strong>Charges and payments</strong>.  
        When a plot is offered, this information is also included in the acceptance form.
      </p>

      <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link to plot size and cost information"
        onclick="window.location.href = window.location.protocol + '//' + window.location.hostname + '/form/launch/send_link_to_service?' + (KDF.getParams().customerid ? 'customerid=' + KDF.getParams().customerid + '&' : '') + 'interactionid=' + KDF.getParams().interactionid + '&sel_service=Allotment%20information%20page';"
      >
        Send link to plot size and cost information
      </button>

    </div>
  </details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How do I add a co-worker to my plot?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      You can have one registered co-worker per plot.  
      <strong>Only the named tenant</strong> can request for a co-worker to be added to their allotment tenancy.
    </p>
    <p>
      You are welcome to invite others to help informally on your plot, but you remain responsible for them and their actions on site.  
    </p>
    <p>
      Co-workers may be issued a site key (normal key charges apply).  
      By registering someone as a co-worker, you give consent for the Council to discuss tenancy matters directly related to your plot with them 
      (sensitive personal information will not be shared).
    </p>
    <p>
      Co-workers do not hold any rights to the tenancy and can be removed by the tenant at any time without notice.  
      If you wish to transfer your plot to a co-worker, they must meet the eligibility criteria set out in the 
      <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
        Allotment Policy and Regulations (2025)
      </a>.
    </p>
    <button
      type="button"
      class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to Sheffield allotment policy and regulations"
      onclick="window.location.href = window.location.protocol + '//' + window.location.hostname + '/form/launch/send_link_to_service?' + (KDF.getParams().customerid ? 'customerid=' + KDF.getParams().customerid + '&' : '') + 'interactionid=' + KDF.getParams().interactionid + '&sel_service=Allotment%20policy%20and%20regulations';"
    >
      Send link to review the policy and regulations
    </button>
    <p>
      To request for a co-worker to be added to your tenancy, use the <strong>Allotment request</strong> button below.
    </p>
  </div>
</details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How do I order a replacement key?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      If you need a replacement site key, please log a case using the <strong>Allotment request</strong> button below and include your site and plot number.  
      You will then receive payment details. The current replacement key cost is £30.00 (subject to confirmation).
    </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How do I quit my plot?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
    <p>
      If you wish to give up your plot, please provide the following information:
    </p>
    <ul>
      <li>Your site and plot number</li>
      <li>Confirmation that you would like to end your tenancy</li>
    </ul>
    <p>
      To formally submit your notice or ask about the process for ending your tenancy, use the <strong>Allotment request</strong> button below. 
      This ensures your request is recorded and processed correctly.
    </p>
    <p>
      A follow-up email will be required as written confirmation that you wish 
      to end your tenancy. Submitting the Allotment Request form will start 
      the process, and we will then contact you to obtain your confirmation.
    </p>
    </div>
  </details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Can I keep livestock on my plot?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      You are not allowed to keep livestock such as cockerels, ducks, pigs, or horses.  
      You may, subject to permission, keep bees, up to 6 hens, 2 rabbits, or pigeons (on selected sites).  
      All birds must be registered with DEFRA:
      <a href="https://www.gov.uk/guidance/register-as-a-keeper-of-less-than-50-poultry-or-other-captive-birds" target="_blank" rel="noopener noreferrer">
        Register as a keeper of less than 50 poultry or other captive birds
      </a>.
    </p>
    <p>
      Pigeons are only allowed on certain sites. Include this in your 
      application notes. Permission must be approved separately and is not automatic. 
      Applications may be deferred if it affects allotment use for fruit and vegetable 
      growing.
    </p>
    <p>
      To request permission or ask about livestock guidelines, use the 
      <strong>Allotment request</strong> button below.
    </p>
  </div>
</details>

  `,
  { buttonLabel: "Allotment request", formName: "request_allotment_parks" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
  "Allotments",
  "Allotment",
  "Alotment",
  "Allotments",
  "Allotment Enquiry",
  "Alotment Enquiry",
  "Allotment Enqury",
  "Allotment Enqury",
  "Waiting List",
  "Waitng List",
  "Waithing List",
  "Plots",
  "Plot",
  "Plottes"
],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsReportIssue = new ContentPSaR(
  "allotmentsReportIssue",
  "Report an Issue in an Allotment",
  "How to report problems on your allotment plot",
  `
    <p>
      If you notice a problem on your allotment plot or site — such as damage, 
      pests, maintenance issues, or potential hazards — 
      please let us know so we can investigate and arrange appropriate action.
    </p>
    <h4>Asbestos Concerns</h4>
    <p>
      If you are unsure whether something on your plot may be an 
      asbestos-containing material, contact us for advice. 
      Where asbestos is confirmed, we will arrange for testing 
      and removal by approved contractors.
    </p>
    <h4>Rats and Pests</h4>
    <p>
      If rats become a problem, we work with colleagues in Environmental 
      Services to investigate and, where appropriate, 
      take action to reduce numbers.
    </p>
    <h4>Water Leaks</h4>
    <p>
      If you suspect a water leak on your site, please report it as 
      soon as possible so we can arrange for inspection and repairs. 
      Providing details such as the exact location and visible signs 
      of the leak will help us respond more quickly.
    </p>
    <h4>Litter and Fly-tipping</h4>
    <p>
      If you notice litter, dumped waste, or fly-tipping on your allotment 
      site,report it. Providing details such as the 
      location and type of waste will help us investigate and take 
      appropriate action to remove the debris and prevent further issues.
    </p>
    <h4>Maintenance and Responsibilities</h4>
    <p>
      In some cases, you may be asked to undertake maintenance work 
      at your own cost, or the Council may carry out the work and 
      charge you accordingly 
      (see 10.33 Payment of Invoices). The Council accepts no 
      liability for any damage caused to belongings or structures 
      concealed within overgrown hedges or placed directly in the 
      line of cutting or flailing. 
      Re-inspection is at the discretion of the allotment officer.
    </p>
      <p>
    For more information on Sheffield allotments, consult the official policy and regulations document:
    <br />
    <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
      Allotment Policy and Regulations
    </a>
    </p>

  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="Send link to Sheffield allotment policy and regulations"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
          KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
    "
  >
    Send link to review the policy and regulations
  </button>
    <p>
      For minor maintenance issues or if you have evidence of a problem, 
      you can report it directly using the <strong>Report allotment</strong> button below.
    </p>
  `,
  { buttonLabel: "Report allotment", formName: "report_allotment_issue" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: ["Allotments", "Report Issue", "Maintenance", "Water Leak", "Pests", "Asbestos"],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsTreeManagement = new ContentPSaR(
  "allotmentsTreeManagement",
  "Tree Management on Allotments",
  "Guidance on large trees, fruit trees, and other ornamental trees on allotment plots",
  `
  <h4>Large Trees Causing Shading and Seeding</h4>
  <p>
    Non-emergency requests to reduce or remove trees over 15cm diameter at chest height will be handled individually.  
    Submit a photo of the issue; the Council will survey and, where appropriate, commission the work.  
    Work is scheduled on a priority basis as the allotment budget allows, usually in autumn/winter.  
    You may hire an approved arborist (Arboricultural Association) with Council permission.  
    The Council may remove any tree, bush, or shrub interfering with other allotment plots.
  </p>

  <h4>Fruit Trees</h4>
  <p>
    Only fruit trees (dwarf/semi-dwarf) are allowed on up to 25% of your plot; this counts toward the 75% cultivation requirement.  
    Fruit trees must not exceed 2.5m and areas beneath must be maintained.  
    Only trees producing edible fruit for humans are permitted.
  </p>

  <h4>Other Trees and Ornamental Trees</h4>
  <p>
    Except for native or privet hedging, you may not plant ornamental or other non-fruit trees.  
    Invasive species and bamboo, willow, blackthorn, cherry laurel, and conifers are prohibited.  
    The Council may remove any tree, bush, or shrub that interferes with other allotment plots.
  </p>

  <p>
    For more information on Sheffield allotments, consult the official policy and regulations document:
    <br />
    <a href="https://www.sheffield.gov.uk/sites/default/files/2025-07/2025_allotment_policy_and_regulations.pdf" target="_blank" rel="noopener noreferrer">
      Allotment Policy and Regulations
    </a>
  </p>

  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="Send link to Sheffield allotment policy and regulations"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
          KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20policy%20and%20regulations\`
    "
  >
    Send link to review the policy and regulations
  </button>

  <p>
    To report an issue with a tree in an allotment, use the <strong>Report tree</strong> button below.
  </p>
  `,
  { buttonLabel: "Report tree", formName: "report_tree" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
      "Allotments",
      "Allotment",
      "Tree",
      "Trees",
      "Fruit Trees",
      "Ornamental Trees",
      "Shading",
      "Seeding",
      "Arborist",
      "Tree removal",
      "Tree reduction",
      "Tree management",
      "Report tree",
      "Tree issue"
    ],
    categories: ["Parks and Countryside"]
  },
  { date: "17/11/2025", name: "Andy Walker" }
);

const allotmentsParks = new MenuPSaR(
  "allotments",
  "Allotments",
   `Allotment eligibility, Applying for an allotment, Plot offers, Notice to quit, Keys and access, Key deposits, Trees, Asbestos, Reporting an issue…`,
  [
    allotmentsEligibility,
    allotmentsContact,
    allotmentsApplying,
    allotmentsPlotOffers,
    allotmentsPayingFees,
    allotmentsNoticeToQuit,
    allotmentsFires,
    allotmentsDogs,
    allotmentsWater,
    allotmentsKeys,
    allotmentsDrones,
    allotmentsTrees,
    allotmentsAsbestos,
    allotmentsVermin,
    allotmentsKeyDeposit,
    allotmentsEnquiries,
    allotmentsReportIssue,
    allotmentsTreeManagement
  ]
);

//#endregion Allotments

//#region Report tree in park

const reportTreePark = new ContentPSaR(
  "reportTreePark",
  "Report an issue with a tree",
  "Information on how the Council manages trees, what issues we can respond to, and when you may take action yourself.",
  `
  <h3>Trees causing shade, overhang or other nuisance issues</h3>
  <p>
  Under normal circumstances the Council will not undertake pruning or 
  removal work in direct response to natural or seasonal growth including:
  </p>
  <ul>
    <li>Trees blocking light and causing shading</li>
    <li>Overhanging branches (except those touching houses)</li>
    <li>Branches obstructing telephone wires</li>
    <li>Blocking or obstruction of views</li>
    <li>Trees interfering with TV or satellite reception</li>
    <li>Falling leaves, flowers, fruit or honeydew drip</li>
    <li>Blocked gutters</li>
    <li>Bird droppings</li>
    <li>Seeds from trees that have germinated in gardens</li>
    <li>Moss caused by shade</li>
  </ul>
  <h3>Pruning branches that overhang your property</h3>
  <p>
  Under Common Law you may prune branches back to your boundary line, 
  but you should first seek legal advice and check with your local planning 
  authority whether the tree is protected by a Tree Preservation Order or 
  in a Conservation Area. Consider whether the work may make the tree unsafe 
  and inform the Council before carrying out work.
  </p>

  <h3>Trees on council land touching houses</h3>
  <p>
  Where council trees are physically touching a building, the Council will 
  carry out pruning work before damage occurs.
  </p>
  <h3>When the Council may carry out work</h3>
  <ul>
    <li>An assessment identifies a hazard such as significant decay or imminent failure</li>
    <li>There is proven tree-root subsidence damage</li>
    <li>Branches are touching buildings</li>
    <li>Safety or sightlines are compromised (road signs, lighting, etc.)</li>
  </ul>
  <h3>Vandalism and illegal felling</h3>
  <p>
  Reports of vandalism will be investigated. Where vandalism affects new trees, 
  we may plant larger replacements, involve local communities, or post notices 
  to discourage further incidents.
  </p>
  <p>
  To report an issue, use the <strong>Report tree</strong> button below.
  </p>
  `,
  { buttonLabel: "Report tree", formName: "report_tree" },
  { typeKey: "" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Report",
    keywords: [
      "Report tree in park",
      "Reprot tree in park",
      "Tree issue in park",
      "Tree isue in park",
      "Fallen tree in park",
      "Damaged tree in park",
      "Damged tree in park",
      "Dangerous tree in park",
      "Dangeros tree in park",
      "Report park tree problem",
      "Reprot park tree problem",
      "Park tree maintenance",
      "Park tree maintainance",
      "Report issue with a park tree",
      "Report isue with a park tree"
    ],
    categories: ["Parks and Countryside"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

//#endregion Report tree in park

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const parksSportAndRecreation = new ServicePSaR(
  "parksSportAndRecreation",
  "Parks, Sport and Recreation",
  `Parks, gardens, trees and woodlands, allotments, leisure and sports facilities, what's on, tourist information…`,
  [allotmentsParks,
   reportTreePark
  ]
);