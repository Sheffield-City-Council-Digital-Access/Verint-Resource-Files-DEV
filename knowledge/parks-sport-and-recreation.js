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
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsContact = new ContentPSaR(
  "allotmentsContact",
  "Annual Waiting List Refresh",
  "Information on the yearly waiting list refresh for allotments",
  `
<p>
  In order to ensure our records are accurate and up to date, we 
  conduct an annual refresh of the allotment waiting list around October. 
  This involves contacting individuals who have been on the waiting list 
  for more than a year to confirm whether they still wish to retain their place.
  We request a response to this communication to verify continued interest. 
  If we do not receive a reply, we will assume that the individual is no 
  longer interested, and they will be removed from the waiting list.
</p>

<p>
  It is important for applicants to check their email inboxes carefully — 
  including spam and junk folders — to ensure they do not miss this communication. 
  Many enquiries relate to individuals not realising an email had been sent. 
  If you believe you missed the email and did not respond in time, appeals 
  should be directed to the manager via 
  <a href="mailto:pwc.allotments@sheffield.gov.uk">pwc.allotments@sheffield.gov.uk</a>.
</p>

<p>
  You can check the current waiting list information using the allotment map tool.  
  The map shows the number of plots on each site, any vacancies, and how many people 
  are currently on the waiting list. This can help you understand demand and expected 
  waiting times before applying.
  <br />
  <a href="https://sheffieldcc.maps.arcgis.com/apps/instant/sidebar/index.html?appid=227576827bf94eba994b9b64f907477b" 
     target="_blank" 
     rel="noopener noreferrer">
     View allotment waiting list map
  </a>
</p>

<button
  type="button"
  class="dform_widget email-btn dform_widget_type_button"
  aria-label="Send link to allotment waiting list map"
  onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=Allotment%20waiting%20list%20map\`
  "
>
  Send link to check the waiting list map
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
      "Alotments",
      "Allotment",
      "Alotment",
      "Waiting List",
      "Waitng List",
      "Annual Refresh",
      "Anual Refresh",
      "Renewal",
      "Renewel",
      "Map",
      "Waiting List Map",
      "Vacancies"
    ],
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "25/11/2025", name: "Andy Walker" }
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
    categories: ["Parks and Countryside", "Allotments"]
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
    categories: ["Parks and Countryside", "Allotments"]
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
    categories: ["Parks and Countryside", "Allotments"]
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
    categories: ["Parks and Countryside", "Allotments"]
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
  { buttonLabel: "Report smoke", formName: "report_smoke" },
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
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);

const allotmentsDogs = new ContentPSaR(
  "allotmentsDogs",
  "Dogs on Allotments",
  "Rules for dogs on allotment site",
  `
    <ul>
      <li>You can bring your dog on site, but it must not cause a nuisance.</li>
      <li>Dog waste must be collected and disposed of appropriately.</li>
      <li>Dogs must be on leads in communal areas and not stray.</li>
      <li>Dogs must not foul paths or plots.</li>
      <li>Dogs cannot be left unattended on plots.</li>
    </ul>

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
      "Dogs",
      "Doggs",
      "Dgos",
      "Rules",
      "Rule",
      "Ruels",
      "Ruless"
    ],
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "25/11/2025", name: "Andy Walker" }
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
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "25/11/2025", name: "Andy Walker" }
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
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "06/11/2025", name: "Andy Walker" }
);

const allotmentsDrones = new ContentPSaR(
  "allotmentsDrones",
  "Drones",
  "Drone use policy on allotment sites",
  `
    <p>
      Drones are not permitted on any Sheffield City Council estate, 
      including allotments, without prior written permission.
    </p>

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
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "25/11/2025", name: "Andy Walker" }
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
    categories: ["Parks and Countryside", "Allotments"]
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
    categories: ["Parks and Countryside", "Allotments"]
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
    categories: ["Parks and Countryside", "Allotments"]
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
    categories: ["Parks and Countryside", "Allotments"]
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
       If a customer wishes to end their tenancy they need to write to PWC with the end date, site name, plot number, and the tenants name.
       <br>This information should be sent to:
       <br>
       <br>   Allotment Office,
       <br>   The Centre in the Park,
       <br>   Guildford Avenue,
       <br>   Sheffield, 
       <br>    S2 2PL
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
    <a href="https://www.gov.uk/guidance/register-as-a-keeper-of-less-than-50-poultry-or-other-captive-birds" 
      target="_blank" 
      rel="noopener noreferrer">
      Register as a keeper of less than 50 poultry or other captive birds
    </a>.
  </p>
  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="Send link to DEFRA bird registration"
    onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
          KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=DEFRA%20bird%20registration\`
    "
  >
    Send link to DEFRA bird registration
  </button>
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
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "12/05/2026", name: "Liz Taster" }
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
    <h4>Reporting Anti-Social Behaviour</h4>
    <p>
      For issues involving anti-social behaviour in or around an allotment site — 
      including vandalism, theft, arson, harassment, or abuse. Tenants and witnesses 
      should be advised to report the matter directly to South Yorkshire Police 
      by calling 101 so the appropriate action can be taken.
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
    categories: ["Parks and Countryside", "Allotments"]
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
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "17/11/2025", name: "Andy Walker" }
);

const allotmentsEmergencies = new ContentPSaR(
  "allotmentsEmergencies",
  "Allotment Emergencies",
  "What to do in an emergency on an allotment site",
  `
<p>
  Below is guidance on how allotment-related emergencies and urgent issues 
  are managed both during and outside of normal operating hours.
</p>

<h3>Issues that may require an emergency response</h3>
<p>
  During office hours, the only allotment issues that may require an emergency response are:
</p>
<ul>
  <li>A tenant locked on plot due to a lock or gate failure.</li>
  <li>A built structure at immediate risk of failure that could cause serious injury.</li>
</ul>
<p>
  These will be managed through CRM and forwarded to 
  <a href="mailto:pwc.allotments@sheffield.gov.uk">pwc.allotments@sheffield.gov.uk</a>.
</p>

<h3>Non-emergency issues</h3>
<p>
  All other issues should be reported using the 
  <strong>Report allotment</strong> button below. Examples include:
</p>
<ul>
  <li>Water leaks</li>
  <li>Small fires on plots</li>
  <li>Off-road bikes (on applicable sites)</li>
</ul>
<p>
  For any urgent issue outside normal office hours, please warm transfer the call:
  <br>
  <a href="#" class="telephoneNumber" onclick="copyToClipboard('01142734542')">0114 2734542</a>
  <br><br>
  This number can also be reached via the general Council line:
  <a href="#" class="telephoneNumber" onclick="copyToClipboard('01142734567')">0114 2734567</a>.
  All calls will be triaged by the out-of-hours service.
</p>
  `,
  { buttonLabel: "Report allotment", formName: "report_allotment_issue" },
  { typeKey: "allotments_transferred_to_service" },
  { typeKey: "allotments_information_provided" },
  {
    type: "Information",
    keywords: [
      "Allotments",
      "Allotment",
      "Alotment",
      "Emergency",
      "Emergencies",
      "Urgent",
      "Out of hours",
      "Locked in allotment",
      "Allotment fire",
      "Allotment water leak",
      "Allotment danger"
    ],
    categories: ["Parks and Countryside", "Allotments"]
  },
  { date: "26/11/2025", name: "Andy Walker" }
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
    allotmentsTreeManagement,
    allotmentsEmergencies
  ]
);

//#endregion Allotments

//#region Bookings

const bannersInParks = new ContentPSaR(
  "bannersInParks",
  "Banners in Parks",
  "Information about banner applications on park property or fencing.",
  `
  
  <p>
    Due to limited resources, we are not currently accepting applications for banners on park property or fencing.
  </p>
  
  `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "banner",
      "banners",
      "sign",
      "signs",
      "advertising",
      "advertisement",
      "parks",
      "applications",
      "application",
      "banner permit",
      "bannners",
      "baners",
      "aplication"
    ],
    categories: ["Parks and Countryside", "Bookings"]
  },
  {
    date: "07/08/2026",
    name: "Liz Taster"
  }
);

const bookAnEvent = new ContentPSaR(
  "bookAnEvent",
  "Book an Event",
  "Information about holding private events in parks and how to make an enquiry using the booking form.",
  `
  <p>
    Private events for friends/families are welcome - our green spaces are for all to use. 
  </p>
  
  <p>
    Remind customers to be mindful of other park users, and to not erect structures such as gazebos.
  </p>
  
  <p>
    More information about holding an event in a park can be found on the 
    <a href="https://www.sheffield.gov.uk/parks-sport-recreation/events-parks" target="_blank" rel="noopener noreferrer">
    Events in parks | Sheffield City Council</a> webpage, including the terms and conditions.
  </p>

  <p>[Insert Send Link] 01</p>

  <p>
    Enquiries about holding an event in a park are welcome and can be done by completing the <strong><em>Book a Room/Event/Film/Photoshoot</em></strong> form - 
    this is available at the link above.
  </p>

  <p>
    The form must be completed by the interested party due to liability issues - <strong>the form must not be completed by customer service staff on their behalf.</strong>
  </p>

  <p>
    Once the form has been submitted, the customer will be contacted to discuss the booking further.
  </p>

  <p>
    Please also refer to other relevant articles in the <strong>'Bookings'</strong> section of the <strong>'Parks, sport and recreation'</strong> knowledge menu.
  </p>
  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "event",
      "events",
      "park",
      "parks",
      "private event",
      "private events",
      "gazebo",
      "gazebos",
      "book a room",
      "enquiry",
      "application",
      "booking",
      "bokking",
      "booknig",
      "evnt",
      "evnts",
    ],
    categories: ["Parks and Countryside", "Booking"]
  },
  { date: "07/08/2026", name: "Liz Taster" }
);
 

const bookASportsFacility = new ContentPSaR(
  "bookASportsFacility",
  "Book a Sports Facility",
  "Information on booking tennis courts, football pitches, cricket pitches and Graves Park pitch and putt.",
  `
  <p>
    A variety of sports facilities can be booked in Sheffield's parks. The sections below give details for each type of facility, including links to book where relevant. 
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Tennis Courts</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Tennis Courts are available at the following parks:</p>
        <ul>
          <li>Bingham Park</li>
          <li>Concord Park</li>
          <li>Ecclesfield Park</li>
          <li>Graves Park</li>
          <li>High Hazels Park</li>
          <li>Hillsborough Park</li>
          <li>Millhouses Park</li>
          <li>Weston Park</li>
        </ul>

      <p>
        Tennis courts can be booked online at <a href="https://tennissheffield.com/" target="_blank" rel="noopener noreferrer">
        Book courts and pitches in Sheffield with Courtside</a>.
      </p>

      <p>[Insert Send Link] 02</p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Football Pitches</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We have outdoor football pitches available for seasonal or occasional bookings.
      </p>
      <p>
        Pitches must be booked at least 5 working days in advance.
      </p>
      <p>
        Costs vary depending on the quality of the pitch and the facilities available.
      </p>
      <p>
        More details and the booking process can be found at 
        <a href="https://www.sheffield.gov.uk/parks-sport-recreation/physical-activity-outdoor-sport/book-sports-pitch" target="_blank" rel="noopener noreferrer">
        Book a sports pitch | Sheffield City Council</a>.
      </p>
      <p>[Insert Send Link] 03</p>
    </div>
  </details>


    <details class="accordion">
    <summary class="accordion-header">
      <h3>Cricket Pitches</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We have cricket pitches available for seasonal or occasional bookings. 
      </p>
      <p>
        Pitches must be booked at least 5 working days in advance.
      </p>
      <p>
        The link for payment can be found at <a href="https://www.sheffield.gov.uk/parks-sport-recreation/physical-activity-outdoor-sport/book-sports-pitch" target="_blank" rel="noopener noreferrer">
        Book a sports pitch | Sheffield City Council</a>.
      </p>
      <p>[Insert Send Link] 04</p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Pitch & Putt (Graves Park)</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <strong>Cost</strong> - The pitch and putt is free to play and open throughout the year.
      </p>
      <p>
        <strong>Equipment</strong> - You will need to bring your own equipment as we no longer provide these.
      </p>
      <p>
        <strong>Parking</strong> - Free parking is available via the Charles Ashmore Road entrance - S8 8GJ
      </p>
    </div>
  </details>
    
    `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Transactional",
    keywords: [
      "sports",
      "facility",
      "facilities",
      "sport",
      "booking",
      "book",
      "football",
      "pitch",
      "pitches",
      "soccer",
      "tennis",
      "court",
      "courts",
      "cricket",
      "putt",
      "facillity",
      "tenis",
      "footbal",
      "criket"
    ],
    categories: ["Parks and Countryside", "Booking"]
  },
  { date: "07/08/2026", name: "Liz Taster" }
);

const commercialActivitiesParks = new ContentPSaR(
  "commercialActivitiesParks",
  "Commercial Activities/Vendors",
  "Information about commercial activities, vendors, and fitness-related activities in parks.",
  `
  <p>
    If we receive enquiries about using park spaces for business purposes, including food vendors, ice cream vans, non-fitness activities etc. they should be directed 
    to email the details to: <a href="mailto:ParksBusinessPartnership@sheffield.gov.uk">ParksBusinessPartnership@sheffield.gov.uk</a> 
  </p>

  <p>
    Enquiries about fitness related activities should be directed to 
    <a href="https://www.sheffield.gov.uk/parks-sport-recreation/fitness-parks" target="_blank" rel="noopener noreferrer">
    Organise a fitness class | Sheffield City Council </a>, 
    where there are further details and links to provisionally book activities.
  </p>

  <p>[Insert Send Link] 05</p>
  
  `,
  
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "commercial",
      "activities",
      "activity",
      "vendors",
      "vendor",
      "fitness",
      "classes",
      "class",
      "venders",
      "venodrs",
      "buisness",
      "fitnes",
      "activites"
    ],
    categories: ["Parks and Countryside", "Booking"]
  },
  {
    date: "12/08/2026",
    name: "Liz Taster"
  }
);


const filmingPhotoshoots = new ContentPSaR(
  "filmingPhotoshoots",
  "Filming/Photoshoots in Parks",
  "Information for customers wanting to hold a photo shoot on Parks & Countryside land.",
  `
  <p>
    If a customer would like to hold a photo shoot on Parks & Countryside land they must apply for permission.
  </p>
  <p>
    Full terms and conditions are available on our website <a href="https://www.sheffield.gov.uk/business/permission-film-hold-photo-shoot-city-centre" target="_blank" rel="noopener noreferrer">
    Permission to film or hold a photo shoot in the city centre | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 06</p>

  <p>
    The booking form is available on the website and must be completed by the interested party due to liability issues. 
    <strong>The form should not be completed by customer service staff on their behalf.</strong>
  </p>

  <p>[Insert Send Link] 07 - <em>this will be to wherever the new form is hosted</em>.</p>

  <p>Fees apply as follows:</p>
    <table>
      <tr>
        <th>Shoot type</th>
        <th>Fees</th>
      </tr>
      <tr>
        <td>Commercial shoots</td>
        <td>£600 per day, <br>minimum £300 for half day or less.</td>
      </tr>
      <tr>
        <td>Private/personal shoots e.g. weddings or family portraits (including Botanical Gardens)</td>
        <td>£96 per hour</td>
      </tr>
      <tr>
        <td>Student projects</td>
        <td>considered on request</td>
      </tr>
      <tr>
        <td>News bulletins &amp; the promotion of Sheffield</td>
        <td>considered on request</td>
      </tr>
    </table>

  <p>
    Once a request for permission has been received it will be reviewed and the requestor will be contacted within 5 working days.
  </p>
  <p>
    Once permission is agreed, payment is required via an online link. Onc payment is received, confirmation of permission will be provided by email.
  </p>
  
  `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "filming",
      "film",
      "films",
      "photoshoot",
      "photoshoots",
      "photo shoot",
      "photo shoots",
      "photography",
      "photograph",
      "photographs",
      "commercial",
      "private",
      "student",
      "news",
      "promotion",
      "wedding",
      "weddings",
      "portrait",
      "portraits",
      "Botanical Gardens",
      "photoshot",
      "photshoot",
      "filiming"
    ],
    categories: ["Parks and Countryside", "Booking"]
  },
  {
    date: "12/08/2026",
    name: "Liz Taster"
  }
);

const bookRoomOrParkBuilding = new ContentPSaR(
  "bookRoomOrParkBuilding",
  "Book a Room or Park Building",
  "Information about hiring community buildings in parks and booking available venues.",
  `
  <p>
    We have several community buildings in our parks that are available to hire.
  </p>
  <p>
    The facilities vary by location and are capable of hosting a range of activities:
  </p>
    <ul>
      <li>Private functions</li>
      <li>Larger community events and activities</li>
      <li>Education classes</li>
      <li>Conferences</li>
      <li>Meetings</li>
    </ul>

  <p>
    Further information regarding facilities and booking requirements can be found at 
    <a href="https://www.sheffield.gov.uk/parks-sport-recreation/book-park-community-building" target="_blank" rel="noopener noreferrer">
    Book a community building or advertising space in a park | Sheffield City Council</a>.
  </p>
  <p>[Insert Send Link] 08</p>
  <p>
    Layouts are available on the webpage but are not facilitated, so the person booking is responsible for the room setup.
  </p>
  <p>
    The following facilities can be booked using the 
    <a href="https://sheffield.zipporah.co.uk/Generic.Live/" target="_blank" rel="noopener noreferrer">Sheffield Council Parks Booking System</a>:
  </p>
    <ul>
      <li>Centre in the Park</li>
      <li>Firth Park Clock Tower</li>
      <li>Bole Hill Pavillion</li>
      <li>Stannington Pavillion</li>
    </ul>

  <p>[Insert Send Link] 09</p>
  
  <p>The following venues can be booked by submitting an enquiry using our online form:</p>
    <ul>
      <li>Dorothy Fox Centre (Botanical Gardens) - Weddings</li>
      <li>Woodland Discovery Centre (Ecclesall Woods) - Weddings</li>
      <li>Shire Brook Valley Visitor Centre</li>
      <li>Graves Park Animal Farm</li>
    </ul>

  <p>[Insert Send Link] 10</p>
  
  <p>
    The form is available on the website and must be completed by the interested party due to liability issues - 
    <strong>the form must not be completed by customer service staff on their behalf</strong>.
  </p>  
  <p>
    Once a completed form is received, we will contact the customer to discuss the requirements further.
  </p>
  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  { 
    type: "Information",
    keywords: [
      "book",
      "hire",
      "room",
      "park",
      "community",
      "building",
      "venue",
      "booking",
      "bookings",
      "reservation",
      "reservations",
      "conference",
      "meeting",
      "meetings",
      "education",
      "classes",
      "community",
      "events",
      "private functions",
      "bookng",
      "bokking",
    ],
    categories: ["Parks and Countryside", "Bookings"]
  },
  { date: "19/08/2026", name: "Liz Taster" }
);

const weddingsInParks = new ContentPSaR(
  "weddingsInParks",
  "Weddings in Parks",
  "Information about wedding ceremonies at Sheffield Botanical Gardens and Ecclesall Woods, including how to enquire and what details to provide.",
  `
  <p>
    Wedding ceremonies are welcome in the pavilion at the Sheffield Botanical Gardens, or inside the Woodland Discovery Centre at Ecclesall Woods. 
    We do not hold a license for ceremonies to take place in any other park locations.
  </p>
  <p>
    Those making a booking will need to book the registrar separately through the Ceremonies team.
  </p>
  <p>
    To enquire about a wedding ceremony please contact <a href="mailto:ParksBusinessPartnership@sheffield.gov.uk">ParksBusinessPartnership@sheffield.gov.uk</a> 
    with the following details:
  </p>
    <ul>
      <li>Preferred location – Sheffield Botanical Gardens or Woodland Discovery Centre</li>
      <li>Preferred date, or date window for the wedding</li>
      <li>Number of guests you plan to invite</li>
      <li>Any other relevant information you wish to provide</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "wedding",
      "weddings",
      "ceremony",
      "ceremonies",
      "marriage",
      "marry",
      "registrar",
      "registrars",
      "wdding",
      "weding",
      "marrage",
      "marrige",
      "marridge",
    ],
    categories: ["Parks and Countryside", "Bookings"]
  },
  {
    date: "20/08/2026",
    name: "Liz Taster"
  }
);

const bookingsParks = new MenuPSaR(
  "bookings",
  "Bookings",
   `Details of how to book different parks services and facilities, including rooms, events, spors facilities and photoshoots.`,
  [
    bannersInParks,
    bookAnEvent,
    bookASportsFacility,
    commercialActivitiesParks,
    filmingPhotoshoots,
    bookRoomOrParkBuilding,
    weddingsInParks,
    
  ]
);

//#endregion Bookings


//#region Events and Activities

const activitiesInParks = new ContentPSaR(
"activitiesInParks",
"Activities in Parks",
"Details of guidance and restrictions around activities in parks - BBQs, drones, fishing, metal detecting and wood collection.",
`
<p>
  Visitors can enjoy a range of activities in Sheffield’s parks, but some are subject to specific rules and restrictions. 
</p>
<p>
  The sections below give details of any restrictions and provide relevant links to send to customers.
</p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>BBQs</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        BBQs are allowed in parks, but customers are asked to following these rules:
      </p>
        <ul>
          <li>Choose a location carefully and consider the safety of other park users</li>
          <li>Make sure the barbecue is safe and cannot fall over</li>
          <li>Do not place the barbecue directly onto the grass or on park furniture, where it can damage the surface and leave a burn mark. 
            If possible, use a barbecue designed with legs or place on a non-combustible surface like a brick to prevent damage</li>
          <li>Take care with the disposal of the hot ashes, do not dispose of these in a bin or throw them onto adjacent land - 
            take some water to extinguish the burning charcoals</li>
          <li>Do not allow the smoke to disturb other park users</li>
          <li>Keep children and pets safe at all times</li>
          <li>Ensure food is thoroughly cooked and stored in good, hygienic containers</li>
          <li>Do not put leftover food scraps in litter bins as this encourages foraging by dogs or foxes, etc</li>
          <li>Ensure all litter is taken home with you</li>
        </ul>

      <p>
        These guidelines are also available on the website at:
        <a href="https://www.sheffield.gov.uk/parks-sport-recreation/barbecues-parks" target="_blank" rel="noopener noreferrer">
        Barbecues in parks | Sheffield City Council</a>
      </p>

      <p>[Insert Send Link] 11</p>

    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Drones</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Drones may <strong>not</strong> be flown from, or over, Council land without our permission.
      </p>

      <p>Permission will only be granted where:</p>
        <ul>
          <li>use of a drone device helps reduce risk in the workplace, such as working at height</li>
          <li>land and building survey work</li>
          <li>to undertake professional services such as festivals and events media</li>
        </ul>

      <p>
        Parks byelaws already restrict the use of powered model aircraft.
      </p>

      <p>
        Byelaws associated with park usage can be found at 
        <a href="https://www.sheffield.gov.uk/parks-sport-recreation/parks-green-spaces" target="_blank" rel="noopener noreferrer">
        Parks and green spaces | Sheffield City Council</a>
      </p>

      <p>[Insert Send Link] 12</p>

      <p>
        For the use of drones in filming or photoshoots please search for the knowledge article <strong>Filming and photoshoots</strong>
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Fishing</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We have several sites across Sheffield where people can fish for free, as long as they have a current Environmental Agency Rod Licence.
      </p>

      <p>
        The list of sites can be found at: 
        <a href="https://www.sheffield.gov.uk/parks-sport-recreation/fishing-parks" target="_blank" rel="noopener noreferrer">
        Fishing in parks | Sheffield City Council</a>.
      </p>

      <p>[Insert Send Link] 13</p>

      <p>
        This website also has a list of places which are available to fish for a charge, and where day tickets can be purchased from.
      </p>

      <p>
        <strong>Fishing is not permitted at any other ponds and lakes</strong> managed by Sheffield City Council, including the Local Nature Reserve in Shire Brook Valley 
        and the Porter Valley Nature Reserves (except Wire Mill Dam).
      </p>

      <p>
        <strong>Do not add fish to any public pond</strong> - many ponds are for wildlife which do not co-exist well with fish.
        Releasing non-native or controlled species into the wild without a specific licence from Defra or Natural England is a criminal offense.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Metal detecting</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        As part of our byelaws for green spaces, <strong>metal detecting is not permitted</strong> on land managed by Parks and Countryside. 
        This is to prevent damage to green spaces and reduce risk of injury to park users.
      </p>

      <p>
        Anyone found metal detecting will be asked to leave the site. 
        Digging is classed as criminal damage and the removal of any artefacts found will be treated as theft.
      </p>

      <p>
        Byelaws associated with park usage can be found at: 
        <a href="https://www.sheffield.gov.uk/parks-sport-recreation/parks-green-spaces" target="_blank" rel="noopener noreferrer">
        Parks and green spaces | Sheffield City Council</a>
      </p>

      <p>[Insert Send Link] 14</p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Wood collecting</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Collecting wood for wood burners or private fires from parks and woodland is strictly prohibited. 
        Woodlands are delicate ecosystems and we intentionally leave both standing and fallen dead wood to improve the ecology on sites.
      </p>

      <p>
        If you notice a dead or fallen tree in a dangerous state, please notify us using the <strong>‘Report an Issue with a tree’</strong> form
        <a href="https://forms.sheffield.gov.uk/site/portal/form/report_tree" target="_blank" rel="noopener noreferrer">
        Report a problem with a tree | Sheffield City Council</a>
      </p>
  
      <p>[Insert Send Link] 15</p>
    </div>
  </details>

  `,

{ buttonLabel: "", formName: "" },
{ typeKey: "" },
{ typeKey: "parks_information_provided" },
{
type: "Information",
keywords: [
"bbq",
"bbqs",
"barbecue",
"barbecues",
"barbeque",
"barbeques",
"drones",
"drone",
"model aircraft",
"fishing",
"fish",
"rod",
"licence",
"license",
"ponds",
"lakes",
"metal",
"detecting",
"detector",
"wood collecting",
"dead wood",
"fallen tree",
"activites",
"metel",
"colecting",
"barbacue",
"barbaque",
"barbiecue",
"barbieque",
"droon",
"dron",
"drne",
"fsh",
"fshing",
"fishng",

],
categories: ["Parks and Countryside", "Events and Activities"]
},
{
date: "06/08/2026",
name: "Liz Taster"
}
);


const eventsInParks = new ContentPSaR(
  "eventsInParks",
  "Events in Parks",
  "Information about upcoming events in Sheffield parks, including Tramlines contact details and resident enquiries.",
  `
  <p>
    Upcoming events taking place in Sheffield can be found at <a href="https://www.welcometosheffield.co.uk/visit/whats-on/all-events/" target="_blank" rel="noopener noreferrer">
    All Events in Sheffield</a>.
  </p>

  <p>[Insert Send Link] 16</p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Tramlines</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        General queries about the event to be directed to <a href="mailto:info@tramlines.org.uk">info@tramlines.org.uk</a>
      </p>
      <p>
        Concerns regarding Hillsborough Park to be directed to <a href="mailto:Events@sheffield.gov.uk">Events@sheffield.gov.uk</a>
      </p>
      <p>
        Tramlines have a dedicated line for residents during the event: 0114 3213662. 
        <br> The phoneline is open on all festival days and in the days prior/following the event, 8am to 11pm. 
        <br>Enquiries can also be submitted to <a href="mailto:residents@tramlines.org.uk">residents@tramlines.org.uk</a>
      </p>
    </div>
  </details>
    
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "event",
      "events",
      "what's on",
      "whats on",
      "Tramlines",
      "festival",
      "tramlimes",
      "tramlins",
    ],
    categories: ["Parks and Countryside", "Events and Activities"]
  },
  {
    date: "12/08/2026",
    name: "Liz Taster"
  }
);
 

const rivelinValleyWaterPlay = new ContentPSaR(
  "rivelinValleyWaterPlay",
  "Rivelin Valley Water Play",
  "Information about opening dates, opening hours, admission fees, accessibility facilities, etc. for Rivelin Valley Water Play.",
  `
  <p>
    Rivelin Valley Water Play is open from Spring Bank Holiday until the first weekend in September.
  </p>
  <p>
    Admission is <strong>free</strong>.
  </p>

<h3>Opening Hours</h3>
  <p><strong>Out of school holidays</strong> – Open weekends only, 10am to 4.30pm</p>
  <p><strong>During school holidays</strong> – Open every day, 10am to 4.30pm</p>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Accessibility</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Disabled access and facilities:</p>
        <ul>
          <li>Ramped access with handrails into the paddling pool</li>
          <li>The water play area is accessible to people of all abilities, and special aqua wheelchairs are available for loan to disabled children and their carers</li>
          <li>Changing Places toilet facility - access is controlled by a Radar key which can be obtained from the nearby cafe</li>
          <li>3 large splash pads with colourful anti-slip surfacing</li>
        </ul>
    </div>
  </details>


<h3>More Information</h3>
  <p>
    Further information can be found at: 
    <a href="https://www.sheffield.gov.uk/parks-sport-recreation/rivelin-valley-water-play" target="_blank" rel="noopener noreferrer">
    Rivelin Valley Water Play | Sheffield City Council</a>
  </p>
  
  <p>[Insert Send Link] 17</p>
  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "Rivelin",
      "Valley",
      "Water",
      "Play",
      "park",
      "splash",
      "pad",
      "pads",
      "paddling",
      "pool",
      "aqua wheelchair",
      "aqua wheelchairs",
      "Changing Places",
      "waterplay",
      "Rivelen",
      "Rivlin",
      "vally",
      "splas"
    ],
    categories: ["Parks and Countryside", "Events and Activities"]
  },
  {
    date: "12/08/2026",
    name: "Liz Taster"
  }
);

const sheffieldRoundWalk = new ContentPSaR(
  "sheffieldRoundWalk",
  "Sheffield Round Walk",
  "Information about the Sheffield Round Walk and access to an online PDF guide.",
  `
  <p>
    We have previously offered booklets about the Sheffield Round Walk for sale however these are no longer available.
  </p>
  <p>
    A PDF with information about the walk is available online at 
    <a href="https://www.welcometosheffield.co.uk/content/articles/sheffield-round-walk/" target="_blank" rel="noopener noreferrer">Sheffield Round Walk</a>
  </p>
  
  <p>[Insert Send Link] 18</p>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "Sheffield",
      "Round",
      "Walk",
      "walking",
      "walk",
      "walks",
      "trail",
      "trails",
      "route",
      "routes",
      "hiking",
      "Shefield ",
      "Wak"
    ],
    categories: ["Parks and Countryside", "Events and Activities"]
  },
  {
    date: "12/08/2026",
    name: "Liz Taster"
  }
);

const playgrounds = new ContentPSaR(
  "playgrounds",
  "Playgrounds",
  "Information about children's playgrounds in Sheffield parks and open spaces, inspections, maintenance, and reporting damage.",
  `
  <p>
    There are over 150 children's playgrounds in Sheffield’s parks and open spaces.
  </p>
  <p>
    All the playgrounds in Sheffield's parks and open spaces are checked on a regular basis, in addition to quarterly and annual routine inspections.
  </p>
  <p>
    Sheffield City Council are responsible for the maintenance of all the equipment and facilities provided. 
    All new playground equipment complies with European Standard EN1176/7.
  </p>
  <p>
    A map of all playgrounds in Sheffield can be found here: 
    <a href="https://sheffieldcc.maps.arcgis.com/apps/instant/sidebar/index.html?appid=5dbfc04cd9564cb3a10a2af4d4c81796" target="_blank" rel="noopener noreferrer">
    Parks Playgrounds</a>.
  </p>
  <p>[Insert Send Link] 19</p>
  <p>
    Occasionally, playgrounds may become damaged. To report an issue with playground equipment or facilities please complete the online 
    form which can also be found here: [insert link once form live].
  </p>
  <p>[Insert Send Link] 20</p>
  <p>
    Once a report has been received an assessment will be undertaken to document the extent of the damage and the repairs required. 
    Where there is a risk of injury the inspection will be carried out within 24 hours, and the equipment will be made safe. 
    Delays may occur over the weekend due to staffing limitations.
  </p>

  <p>
    If a customer is wanting to report an injury in a playground, please refer to the ‘<em>Insurance/Personal Injury/Compensation</em>’ knowledge tile.
  </p>
  
  `,
  { buttonLabel: "Report playground issue", formName: "report_playground" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "playground",
      "playgrounds",
      "play",
      "area",
      "areas",
      "children's",
      "childrens",
      "equipment",
      "playgroud",
      "playgrond",
      "playgraound"
    ],
    categories: ["Parks and Countryside", "Events and Activities"]
  },
  { date: "13/08/2026", name: "Liz Taster" }
);

const gravesPark = new ContentPSaR(
  "gravesPark",
  "Graves Park",
  "Information about events, activities and facilities at Graves Park, including the animal farm.",
  `
<h3>Animal farm</h3>
  <p>
    <strong>Opening hours</strong> - 10am -3.30pm, 7 days a week
  </p>
  <p>
    <strong>Admission fee</strong> - Admission is free, but donations are welcome on arrival.
  </p>
  <p>
    <strong>Animal feed</strong> - Available for a small fee.
  </p>
  <p>
    <strong>Facilities</strong> – Refreshments, toilets, and baby change facilities available on site.
  </p>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Animal farm FAQs</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <strong>Where can I park?</strong> Limited payable parking is available via the entrance on the corner of Hemsworth Rd and Bunting Nook - S8 8LJ. 
        Overflow parking is available in seasonal peaks (weather dependant)
      </p>
      <p>
        <strong>Are the animals for sale?</strong> No
      </p>
      <p>
        <strong>Can I sponsor an animal?</strong> No
      </p>
      <p>
        <strong>Can I hire an animal?</strong> No, this causes a lot of stress to the animals.
      </p>
      <p>
        <strong>Can I donate supplies &amp; equipment?</strong> The farm will consider donations which support the care of animals e.g. food, hay, sawdust, blankets etc. 
        Donations must be agreed by the park manager and delivered to the park; we do not collect donations. Customers should complete the online donation form.
      </p>
      <p>
        Information about this topic will be available on the Council Website
      </p>
      <p>
        <strong>Can I donate an animal?</strong> No, we don’t take animals as donations and are unable to rescue animals.
      </p>
      <p>The enquirer can contact:</p>
        <ul>
          <li>Heeley City Farm who may be able to take the animal or offer further guidance - 0114 2580482</li>
          <li>Royal Society for the Prevention of Cruelty to Animals (RSPCA) - 0114 2898050</li>
        </ul>
      <p>
        <strong>Sick/Injured/Loose farm animals</strong> - If an animal living in an enclosure/field within the Animal Farm appears to be sick, 
        injured, or is loose please report to park staff immediately.
      </p>
    </div>
  </details>

<details class="accordion">
    <summary class="accordion-header">
      <h3>Animal farm events and barn hire</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Events held at the Animal Farm are advertised on <a href="http://www.trybooking.co.uk/" target="_blank" rel="noopener noreferrer">
        www.trybooking.co.uk</a> and can be booked through the site. 
        Click on <em>Find Event</em> and search for <em>Graves Park Animal Farm</em>.
      </p>
      <p>[Insert Send Link] 21</p>

      <p> 
        The barn is available to hire for a flat fee of £50 for the day - 10am to 3.00pm. 
      </p>
      <p>
        Hire does not include interactive sessions with our animals, and we are unable to offer this. 
      </p>
      <p>
        Customers who hire the barn are welcome to bring their own entertainment and decorations. 
      </p>
      <p>
        To request a booking, the customer should complete the online form <strong>Book a Room/Event/Film/Photoshoot form</strong> available here:{link}. 
      </p>
      <p>[Insert Send Link] 22</p>
      <p>
        Once we receive an enquiry, we will contact the customer to discuss availability. 
      </p>
    </div>
  </details>


<details class="accordion">
    <summary class="accordion-header">
      <h3>Animal farm work experience and volunteering</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Volunteering and work experience opportunities are very limited and organised annually in August/September.
      </p>
      <p>
        We get many applications each year but can only take a small number due to the training and supervision required.
      </p>
      <p>
        Each September a trial morning is held where volunteers can experience the work involved and staff can assess suitability.
      </p>
      <p>
        Information and updates on available opportunities can be found on the Graves Park Animal Farm Facebook page.
      </p>
      <p>
        Opportunities are also advertised on <a href="http://www.trybooking.co.uk/" target="_blank" rel="noopener noreferrer">
        www.trybooking.co.uk</a> – Click on <em>Find Event</em> and search for <em>Graves Park Animal Farm</em> and follow the organisation 
        to receive a notification when a volunteering event is planned.
      </p>
      <p>[Insert Send Link] 23</p>
    </div>
  </details>


<h3>Park train</h3>
  <p>
    The park train runs through the summer holidays and on sunny weekends.
  </p>

<h3>Rose Garden Cafe</h3>
  <p>
    Opening Hours - 9am -5pm, 7 days a week
  </p>
  <p>
    Phone number - 0114 2582705
  </p>
  <p>
    Updates regarding the café restoration can be found on the Council website here 
    <a href="https://www.sheffield.gov.uk/rose-garden-cafe-updates" target="_blank" rel="noopener noreferrer">
    Rose Garden Cafe Updates | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 24</p>

`,
  { buttonLabel: "Donate to animal farm", formName: "request_donation_parks" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "Graves",
      "Park", 
      "Animal",
      "Farm", 
      "farms", 
      "animals", 
      "feed", 
      "feeding", 
      "donations", 
      "donation",  
      "sick", 
      "injured", 
      "loose", 
      "work experience", 
      "volunteering", 
      "volunteer", 
      "volunteers", 
      "train", 
      "Grave", 
      "Gravs", 
      "Grvaes", 
      "fram",
    ],
    categories: ["Parks and Countryside", "Events and Activities"]
  },
  { date: "14/08/2026", name: "Liz Taster" }
);

const eventsAndActivities = new MenuPSaR(
  "eventsAndActivities",
  "Events and Activities",
   `Information about a variety of events and activities in Sheffield parks.`,
  [
    activitiesInParks,
    eventsInParks,
    rivelinValleyWaterPlay,
    sheffieldRoundWalk,
    playgrounds,
    gravesPark
    
  ]
);

//#endregion Events and Activities


//#region Maintenance and Issues


const reportTreePark = new ContentPSaR(
  "reportTreePark",
  "Report an Issue with a Tree",
  "Information on how the Council manages trees, what issues we can respond to, and when you may take action yourself.",
  `
  <p>
    Below you will find information on how the Council manages trees on parks and 
    open spaces, including when we may carry out work, when you may take action 
    yourself, and what to do in an emergency.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Trees causing shade, overhang or other nuisance issues</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
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
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Pruning branches that overhang your property</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Under Common Law you may prune branches back to your boundary line, 
        but you should first seek legal advice and check with your local 
        planning authority whether the tree is protected by a Tree Preservation 
        Order or in a Conservation Area. Consider whether the work may make the 
        tree unsafe and inform the Council before carrying out work.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Trees on council land touching houses</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Where council trees are physically touching a building, the Council will 
        carry out pruning work before damage occurs.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>When the Council may carry out work</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <ul>
        <li>An assessment identifies a hazard such as significant decay or imminent failure</li>
        <li>There is proven tree-root subsidence damage</li>
        <li>Branches are touching buildings</li>
        <li>Safety or sightlines are compromised (road signs, lighting, etc.)</li>
      </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Vandalism and illegal felling</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Reports of vandalism will be investigated. Where vandalism affects new trees, 
        we may plant larger replacements, involve local communities, or post notices 
        to discourage further incidents.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Emergency situations with trees</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">

      <h4>What is considered an emergency?</h4>
      <ul>
        <li>A tree or limb has fallen from council land onto a property.</li>
        <li>A tree or limb has fallen and is blocking the road or a public footpath.</li>
        <li>A tree or limb has fallen and is blocking access in or out of a resident’s property.</li>
        <li>A tree or limb is about to fall (its failure is considered imminent).</li>
        <li>A limb or branch has broken and is likely to cause injury or property damage.</li>
      </ul>
      <h4>What is not considered an emergency?</h4>
      <ul>
        <li>Trees moving significantly in the wind (unless the root plate is shifting or lifting).</li>
        <li>Trees considered dangerous only due to size or proximity.</li>
      </ul>
      <h4>Who to contact</h4>
      <p>
      <strong>During normal office hours (Mon–Fri, 08:00–17:00):</strong><br>
      Please use the <strong>Report tree</strong> button below and select <strong>“Hazard”</strong> from the options.  
      This will automatically mark the case as urgent and send it to the correct contacts for immediate review.
      </p>
      <p>
      <strong>During out-of-hours (Mon–Fri 17:00–08:00, weekends and bank holidays):</strong><br>
      Transfer the call to the Operations Control Room: 
      <a href="#" class="telephoneNumber" onclick="copyToClipboard('08001164743')">0800 1164743</a><br>
      Amey provides emergency tree cover under contract reference 
      <strong>NC25-018/CS016</strong>.
      </p>
    </div>
  </details>
  <p>
    To report an issue, use the <strong>Report tree</strong> button below.
  </p>
  `,
  { buttonLabel: "Report tree", formName: "report_tree" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
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
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "18/11/2025", name: "Andy Walker" }
);


const antiSocialBehaviourParks = new ContentPSaR(
  "antiSocialBehaviourParks",
  "Anti-social Behaviour in Parks",
  "Information about reporting anti-social behaviour and how reports are managed in parks.",
  `
    <p>
      <strong>In the first instance antisocial behaviour should be reported to the Police via 101, or using 999 if it is an emergency.</strong>
    </p>

    <p>
      Sheffield City Council take reports of anti-social behaviour (ASB) seriously and assess each report based on the circumstances, 
      including the frequency of incidents, the impact on others, and any associated risks.
    </p>
    <p>
      Examples of ASB may include vandalism, threatening behaviour, drug or alcohol-related nuisance, damage to property, noise nuisance, 
      illegal use of vehicles, and harassment.
    </p>

    <p>
      Further information about the councils approach to antisocial behaviour and a link to contact the ASB team can be found here: 
      <a href="https://www.sheffield.gov.uk/pollution-and-nuisance/crime-anti-social-behaviour/anti-social-behaviour" target="_blank" rel="noopener noreferrer">
      Anti-social behaviour and community safety | Sheffield City Council</a>
    </p>

    <p>[Insert Send Link] 25</p>

  <h3>ASB in Parks</h3>
    <p>
      Reports of ASB are passed to the Area Manager responsible for the park to review.
    </p>
    <p>
      Records are maintained to help identify patterns, hot-spots and repeat incidents.
    </p>
    <p>
      Depending on the nature and severity of the issue, we may work with other Council services, the Police, Community Safety teams, 
      or other partner organisations to address the problem collectively.
    </p>
    <p>
      Where an incident has been reported to Police, ask customers to <strong>provide the crime reference number or incident number</strong> - 
      this assists council officers when liaising with other organisations.
    </p>
    
  `,

  { buttonLabel: "Report ASB", formName: "report_asb" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "anti-social behaviour",
      "antisocial",
      "behaviour",
      "ASB",
      "anti social",
      "report ASB",
      "parks",
      "park",
      "vandalism",
      "threatening behaviour",
      "drug",
      "alcohol",
      "noise",
      "nuisance",
      "property damage",
      "illegal vehicles",
      "harassment",
      "behavour",
      "antisocail",
      "behviour"
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  {
    date: "07/08/2026",
    name: "Liz Taster"
  }
);


const cctvParks = new ContentPSaR(
  "cctvParks",
  "CCTV in Parks",
  "Information about CCTV enquiries in park spaces.",
  `
  <p>
    CCTV cameras operate in park spaces in order to:
  </p>
    <ul>
      <li>Promote community safety by protecting people and property</li>
      <li>Assist with the prevention and detection of crime</li>
      <li>Help us act upon threats or instances of criminal and anti-social behaviour</li>
      <li>Ensure safety and better services e.g. traffic management and alarms</li>
    </ul>
  <p>
    CCTV footage is generally kept for 14 days then automatically deleted on day 15.
  </p>
  <p>
    Details on the locations of CCTV cameras across the city, and how footage can be accessed, is available on the website 
    <a href="https://www.sheffield.gov.uk/your-city-council/cctv-body-worn-video" target="_blank" rel="noopener noreferrer">
    CCTV and Body Worn Video | Sheffield City Council</a>.
  </p>

  <p>[Insert Send Link] 26</p>
  
  `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "CCTV",
      "camera",
      "cameras",
      "security",
      "surveillance",
      "CCTVs",
      "cttv",
      "cvtv",
      "survellance",
      "camra",
      "camras"
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "07/08/2026", name: "Liz Taster" }
);

const insurancePersonalInjuryCompensation = new ContentPSaR(
  "insurancePersonalInjuryCompensation",
  "Insurance, Personal Injury or Compensation",
  "Information on reporting an injury or making a compensation claim.",
  `
  <p>
    If someone wishes to report an injury or claim compensation they should contact 
    <a href="mailto:insurance@sheffield.gov.uk">insurance@sheffield.gov.uk</a> with details of their claim.
  </p>
    
    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "insurance",
      "insurances",
      "personal",
      "injury",
      "injuries",
      "compensation",
      "claim",
      "claims",
      "accident",
      "indurance",
      "compansation",
      "injruy"
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "07/08/2026", name: "Liz Taster" }
);

const flyTipping = new ContentPSaR(
  "flyTipping",
  "Fly Tipping",
  "Information about reporting fly-tipping and how waste is removed from parks and woodland areas.",
  `
  <p>
    Reports of fly tipping are referred to the parks/woodland management team who will assess the scale of the issue and the response required.
  </p>
  <p>
    Some materials require a specialist response and will take longer to remove.
  </p>
  <p>
    Waste will be removed no later than 10 working days after being reported.
  </p>
  <p>
    Further information about how the council deals with fly-tipping can be found here: 
    <a href="https://www.sheffield.gov.uk/pollution-nuisance/fly-tipping-and-litter" target="_blank" rel="noopener noreferrer">
    Fly-tipping and litter | Sheffield City Council</a>
  </p>

  <p>[Insert Send Link] 27</p>

  <p>
    Fly-tipping can be reported using the button at the bottom or with the link available here: 
    <a href="https://www.sheffield.gov.uk/pollution-nuisance/fly-tipping-and-litter/report-fly-tipping-public-land" target="_blank" rel="noopener noreferrer">
    Reporting fly-tipping | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 28</p>

  `,
 
  { buttonLabel: "Report Fly-tipping", formName: "report_fly_tipping"},
  { typeKey: ""},
  { typeKey: "parks_information_provided"},
  {
    type: "Information",
    keywords: [
      "fly",
      "tipping",
      "fly-tipping",
      "illegal",
      "dumped",
      "waste",
      "rubbish",
      "litter",
      "parks",
      "woodland",
      "waste removal",
      "fly tip",
      "fly tips",
      "dumping",
      "refuse",
      "trash",
      "flytipping",
      "fly tiping",
      "flytippng",
      "tpping",
      "tippng",
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  {
    date: "07/08/2026",
    name: "Liz Taster"
  }
);

const damageToPavementsAndSurfaces = new ContentPSaR(
  "damageToPavementsAndSurfaces",
  "Damage to Pavements and Surfaces",
  "Information on reporting damage to footpaths, pavements and surfaces in parks and countryside areas.",
  `
  <p>
    Damage to footpaths or pavements should be reported using the online form found here: 
    <a href="https://forms.sheffield.gov.uk/site/portal/form/road_pavement_surface" target="_blank" rel="noopener noreferrer">
    Report a problem with a road or pavement surface</a>.
  </p>
  <p>[Insert Send Link] 29</p>
  <p>
    Reported damage will be assessed and any appropriate action will be undertaken within 3-5 working days. Urgent issues will be assessed as a priority.
  </p>
  <p>
    Repairs are prioritised based on public safety, accessibility, and severity of damage.
  </p>
  <p>
    Parks &amp; Countryside will only contact the reporter if additional information is required.
  </p>
  
  `,
  { buttonLabel: "Report damage", formName: "road_pavement_surface" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "damage",
      "damaged",
      "footpath",
      "footpaths",
      "path",
      "paths",
      "pavement",
      "pavements",
      "surface",
      "surfaces",
      "repair",
      "repairs",
      "maintenance",
      "report",
      "reporting",
      "walkway",
      "walkways",
      "pavment",
      "footpth"
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "13/08/2026", name: "Liz Taster" }
);


const damageToFencing = new ContentPSaR(
  "damageToFencing",
  "Damage to Fencing",
  "Information on reporting damage to fencing in parks and countryside areas.",
  `
  <p>
    Damage to fencing should be reported using the online form found here: 
    <a href="https://forms.sheffield.gov.uk/site/portal/form/report_fence_barrier" target="_blank" rel="noopener noreferrer">
    Report a problem with a fence or barrier</a>.
  </p>
  <p>[Insert Send Link] 30</p>
  <p>
    Reported damage will be assessed and any appropriate action will be undertaken within 3-5 working days. Urgent issues will be assessed as a priority.
  </p>
  <p>
    Repairs are prioritised based on public safety, accessibility, and severity of damage.
  </p>
  <p>
    Parks &amp; Countryside will only contact the reporter if additional information is required.
  </p>
  
  `,
  { buttonLabel: "Report damage", formName: "report_fence_barrier" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Transactional",
    keywords: [
      "damage",
      "damaged",
      "fence",
      "fencing",
      "fences",
      "repair",
      "repairs",
      "maintenance",
      "report",
      "reporting",
      "reported",
      "broken",
      "fense",
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "13/08/2026", name: "Liz Taster" }
);

const litterAndLitterBins = new ContentPSaR(
  "litterAndLitterBins",
  "Litter and Litter Bins",
  "Information about litter bin responsibilities, emptying schedules, maintenance, reporting issues, and community litter picking support.",
  `
  <p>
    Responsibility for litter bins varies depending on their location. Some bins are managed by the Parks and Countryside Service, 
    while others may be the responsibility of Highways, Housing Services, or other Council services.
  </p>
  <p>
    Litter bins in parks are generally emptied daily although this varies depending on demand, location and usage. 
    Special events and adverse weather can occasionally impact scheduled emptying.
  </p>
  <p>
    Throughout the warmer periods an increase in park visitor numbers can lead to higher-than-expected volumes of waste, and bin overflows; 
    we attempt to address these instances as a priority.
  </p>
  <p>
    We do not conduct planned maintenance on bins. Damaged, vandalised, or defective bins are assessed when reported and repairs or replacements 
    are considered based on the condition of the bin.
  </p>
  <p>
    To report an issue with a litter bin, direct customers to use the online form available here - click on 'Report a problem with a litter bin' 
    <a href="https://www.sheffield.gov.uk/pollution-nuisance/fly-tipping-and-litter/dealing-litter" 
    target="_blank" rel="noopener noreferrer">Report litter bin</a>.
  </p>
      <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20litter%20bin\`
            "
        >
            Send link to review further information
       </button>

<h3>Litter Picking Resources and Support</h3>
  <p>
    For information about litter picking, please refer customers to: 
    <a href="https://www.sheffield.gov.uk/pollution-and-nuisance/fly-tipping-litter/organise-litter-picks" target="_blank" rel="noopener noreferrer">
    Organise a community litter pick | Sheffield City Council</a>.
  </p>
  <p>[Insert Send Link] 32</p>

`,
  { buttonLabel: "Report a litter bin", formName: "report_litter_bin" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "litter",
      "bin",
      "bins",
      "waste",
      "rubbish",
      "trash",
      "overflow",
      "overflows",
      "emptying",
      "damaged",
      "vandalised",
      "defective",
      "pick",
      "picking",
      "litterbin",
      "binn",
      "bns",
      "rubbis",
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "13/08/2026", name: "Liz Taster" }
);

const lostFoundProperty = new ContentPSaR(
  "lostFoundProperty",
  "Lost/Found Property",
  "Information about reporting lost or found property in parks.",
  `
  <p>
    Sheffield City Council is not responsible for property lost or damaged in parks.
  </p>
  <p>
    When property is reported <strong>lost</strong>, we will attempt to reunite the item with the owner based on the information provided, if the item is found.
  </p>
  <p>
    If property is reported as <strong>found</strong>, we will attempt to reunite it with the owner if we receive a matching report of a lost item.
  </p>
  <p>
    Once informed about lost property we will only contact the reporter if the item is found.
  </p>
  
  `,
  { buttonLabel: "Report lost/found property", formName: "report_lost_prop_parks" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "lost",
      "found",
      "property",
      "item",
      "missing",
      "unclaimed",
      "items",
      "belongings",
      "foud",
      "propety",
      "proprty"
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  {
    date: "13/08/2026",
    name: "Liz Taster"
  }
);

const grassHedgeCutting = new ContentPSaR(
  "grassHedgeCutting",
  "Grass and Hedge Cutting",
  "Information about grass cutting schedules, hedge cutting periods, and reporting issues with grassed areas and hedges.",
  `
<h3>Grass cutting</h3>
  <p>
    Grass is cut every 3-4 weeks following a schedule, starting in April and running to the end of October. 
    Frequency depends on the weather conditions, grass growth rates, and site conditions.
  </p>
  <p>
    Where visible, litter is collected prior to cutting. If the grass is too long some litter cannot be seen by our operatives. 
    If this is the case, litter will be collected shortly after the grass has been cut, but not necessarily on the same day.
  </p>

<h3>Hedge cutting</h3>
  <p>
    Hedge cutting takes place during specific periods:
  </p>
    <ul>
      <li>June to August</li>
      <li>October to December</li>
    </ul>
  <p>
    Timing may vary depending on the type and location of the hedge, nesting bird considerations, and weather conditions.
  </p>
<h3>Reporting issues</h3>
  <p>
    If someone wishes to report an area that appears to have been missed, requires attention, or an issue with grass or hedges 
    ask them to use the form here: <a href="https://forms.sheffield.gov.uk/site/portal/form/report_hedge_plant_grass" target="_blank" rel="noopener noreferrer">
    Report hedges, plants or grassed areas</a>.
    Once the report has been reviewed, the park manager will inspect the area and act where required.
  </p>
  <p>[Insert Send Link] 33</p>

  <p>
    Further information about grass cutting, hedge cutting, and other related topics can be found here:
    <a href="https://www.sheffield.gov.uk/roads-pavements/problems-plants-trees-weeds-grass" target="_blank" rel="noopener noreferrer">
    Problems with plants, trees, weeds and grass | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 34</p>

  `,
  { buttonLabel: "Report an issue", formName: "report_hedge_plant_grass" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "grass",
      "cutting",
      "cut",
      "mow",
      "mowing",
      "lawn",
      "hedge",
      "trim",
      "trimming",
      "hedges",
      "grassed",
      "weeds",
      "grasscutting",
      "hedgecutting",
      "gras",
      "cuting",
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  {
    date: "13/08/2026",
    name: "Liz Taster"
  }
);

const dogFouling = new ContentPSaR(
  "dogFouling",
  "Dog Fouling",
  "Information about reporting dog fouling and related penalties.",
  `
  <p>
    Dog fouling is illegal in the UK and can result in a fixed penalty notice ranging from £50 to £100, or prosecution in a magistrate’s court. 
    Exemptions may be made for registered blind owners or people with certain disabilities affecting mobility or sight.
  </p>
  <p>
    To report an issue with dog fouling, please use the online form available here: <a href="https://www.sheffield.gov.uk/pollution-nuisance/animals/dog-fouling" target="_blank" rel="noopener noreferrer">
    Report dog fouling</a> form.
  </p>
      <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20dog%20fouling\`
            "
        >
            Send link to review further information
      </button>
  `,
  { buttonLabel: "Report dog fouling", formName: "report_dog_fouling" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "dog",
      "fouling",
      "foul",
      "mess",
      "waste",
      "dogs",
      "pets",
      "pet",
      "canine",
      "poop",
      "poo",
      "fauling",
      "foulling",
      "fowling"
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  {
    date: "13/08/2026",
    name: "Liz Taster"
  }
);

const dogBins = new ContentPSaR(
  "dogBins",
  "Dog Bins",
  "Information about dog waste bin emptying schedules, maintenance, and reporting issues.",
  `
  <p>
    Dog waste bins in parks are emptied weekly or twice a week depending on volume - this is based on varying demand, location and usage.
  </p>
  <p>
    We do not conduct planned maintenance on dog waste bins. Damaged, vandalised, or defective bins are assessed when reported and 
    repairs or replacements are considered based on the condition of the bin.
  </p>
  <p>
    To report an issue with a dog waste bin, use the online form available here: [link required once live]
  </p>
  <p>[Insert Send Link] 36</p>

`,
  { buttonLabel: "Report Dog Bin Issue", formName: "report_dog_bin" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "dog",
      "bin",
      "bins",
      "waste",
      "dogs",
      "fouling",
      "litter",
      "damaged",
      "damage",
      "poo",
      "poop",
      "vandalised",
      "defective",
      "dogbn",
      "wast",
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "13/08/2026", name: "Liz Taster" }
);

const dogCatWasteCommercial = new ContentPSaR(
  "dogCatWasteCommercial",
  "Dog & Cat Waste (Commercial)",
  "We provide dog and cat waste removal services to private companies e.g. kennels or vets, located within the Sheffield City boundaries.",
  `
  <p>
    We provide dog and cat waste removal services to private companies e.g. kennels or vets located within the Sheffield City boundaries.
  </p>

  <p>The following criteria must be met:</p>
    <ul>
      <li>Collection must be from an accessible location, ideally enabling a vehicle to park next to the waste point or within a reasonable distance</li>
      <li>The waste must be bagged and meet the agreed standard of BK090A9, BK090A8 or equivalent (SCC does not supply these bags)</li>
      <li>All waste bags must be securely tied by cable ties to prevent spillage</li>
      <li>Individual bags must weigh no more than 20kg</li>
      <li>Waste transfer notes can be supplied at the customer’s request</li>
    </ul>

  <p>
    The charge varies depending on the number of bags in a single collection. <strong>Charges start at £40.95</strong> for one bag, with additional bags charged at £5 each.
  </p>

  <p>
    Customers should fill out the request form here: [insert council website link].
  </p>
  <p>[Insert Send Link] 37</p>

  <p>
    The request form includes a link for immediate payment on the request confirmation screen. If a customer reports an issue with payment, it can be made using the following link
    <a href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fip.e-paycapita.com%2FAIP%2FitemSelectionPage.do%3Flink%3DshowItemSelectionPage%26siteId%3D266%26languageCode%3DEN%26source%3DAIP%26fc%3D30%26sc%3DPACO%26ic%3DGSR&data=05%7C02%7CRichard.Biddulph%40sheffield.gov.uk%7Cb516f156c82645592a5f08dee985dc28%7Ca1ba59b9720448d8a3607770245ad4a9%7C0%7C0%7C639204958298646457%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=%2Fo13W6G60PFuAGSGOBGbJYV44swgNQLDcy8A2k5JuwE%3D&reserved=0" target="_blank" rel="noopener noreferrer">
    https://ip.e-paycapita.com/Grit/Salt Requests</a>
  </p>

  <p>
    Once an enquiry has been submitted, the customer will be contacted by a member of the Parks &amp; Countryside service to discuss the request.
  </p>

<details class="accordion">
    <summary class="accordion-header">
      <h3>Cost details</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <table>
        <thead>
          <tr>
            <th>Number of Bags</th>
            <th>Cost of collection</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>£40.95</td></tr>
          <tr><td>2</td><td>£45.95</td></tr>
          <tr><td>3</td><td>£50.95</td></tr>
          <tr><td>4</td><td>£55.95</td></tr>
          <tr><td>5</td><td>£60.95</td></tr>
          <tr><td>6</td><td>£65.95</td></tr>
          <tr><td>7</td><td>£70.95</td></tr>
          <tr><td>8</td><td>£75.95</td></tr>
          <tr><td>9</td><td>£80.95</td></tr>
          <tr><td>10</td><td>£85.95</td></tr>
        </tbody>
      </table>
    </div>
  </details>

`,
  { buttonLabel: "Request waste collection", formName: "request_waste_collection" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "",
    keywords: [
      "dog",
      "cat",
      "waste",
      "Commercial",
      "commercial",
      "animal",
      "pet",
      "removal",
      "collection",
      "collections",
      "private",
      "company",
      "companies",
      "kennels",
      "kennel",
      "vets",
      "vet",
      "veterinary",
      "bags",
      "bagged",
      "wast",
      "comercial",
      "kenels",
      "payement"
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  {
    date: "13/08/2026",
    name: "Liz Taster"
  }
);

const gritSaltCommercial = new ContentPSaR(
  "gritSaltCommercial",
  "Grit/Salt (Commercial)",
  "We provide Grit or Salt to private organisations located within the Sheffield City boundaries e.g. colleges and schools, for a charge.",
  `
  <p>
    <strong>The following does not apply to public grit bins which are maintained and refilled regularly as required.</strong> 
    More information about public grit bins can be found at 
    <a href="https://www.sheffield.gov.uk/roads-pavements/winter-road-maintenance-and-gritting/grit-bins-sheffield" target="_blank" rel="noopener noreferrer">
    Grit bins in Sheffield | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 38</p>

  <p>
    We provide Grit or Salt to private organisations located within the Sheffield City boundaries e.g. colleges and schools, for a charge.
  </p>

  <p>
    Information about this topic will be available on the Council Website
  </p>

  <p>
    The minimum order is 0.5 tonnes, requests for more than10 tonnes require 28 days’ notice.
  </p>
  <p>
    The material is supplied in 1 tonne builders’ bags using a grab lorry. <strong>The delivery location must be suitable to accommodate the lorry.</strong>
  </p>
  <p>
    Deliveries will only be made on weekdays. 
  </p>
  <p>
    The price varies by volume required.
  </p>
  <p>
    For amounts of 2 tonne or greater, the cost is £180 per tonne. The cost per tonne is higher for 0.5/1tonne due to the delivery.
  </p>

<table>
  <thead>
    <tr>
      <th><strong>Quantity</strong></th>
      <th><strong>Cost</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0.5 tonne</td><td>£150</td></tr>
    <tr><td>1 tonne</td><td>£240</td></tr>
    <tr><td>2 tonnes</td><td>£360</td></tr>
    <tr><td>3 tonnes</td><td>£540</td></tr>
    <tr><td>4 tonnes</td><td>£720</td></tr>
    <tr><td>5 tonnes</td><td>£900</td></tr>
    <tr><td>6 tonnes</td><td>£1,080</td></tr>
    <tr><td>7 tonnes</td><td>£1,260</td></tr>
    <tr><td>8 tonnes</td><td>£1,440</td></tr>
    <tr><td>9 tonnes</td><td>£1,620</td></tr>
    <tr><td>10 tonnes</td><td>£1,800</td></tr>
  </tbody>
</table>
  
  <p>
    Customers can fill out the request form which can be found on the website and includes a link for immediate payment on the request confirmation page.</p>

  <p>
    If there has been an issue with payment, it can be made using the following link 
    <a href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fip.e-paycapita.com%2FAIP%2FitemSelectionPage.do%3Flink%3DshowItemSelectionPage%26siteId%3D266%26languageCode%3DEN%26source%3DAIP%26fc%3D30%26sc%3DPACO%26ic%3DGSR&data=05%7C02%7CRichard.Biddulph%40sheffield.gov.uk%7Cb516f156c82645592a5f08dee985dc28%7Ca1ba59b9720448d8a3607770245ad4a9%7C0%7C0%7C639204958298646457%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=%2Fo13W6G60PFuAGSGOBGbJYV44swgNQLDcy8A2k5JuwE%3D&reserved=0" target="_blank" rel="noopener noreferrer">
    https://ip.e-paycapita.com/Grit/Salt Requests</a>
  </p>

  <p>
    Once an enquiry is made through the online form the customer will be contacted by a member of the Parks &amp; Countryside service to discuss the request.
  </p>
  
  `,
  { buttonLabel: "Order grit (commercial)", formName: "request_order_grit_salt" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "Grit",
      "Salt",
      "Commercial",
      "bins",
      "bins",
      "winter",
      "gritting",
      "salting",
      "road",
      "rock",
      "de-icing",
      "deicing",
      "gritt",
      "grittt",
      "sault",
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "14/08/2026", name: "Liz Taster" }
);

const graffitiRemovalParkProperty = new ContentPSaR(
  "graffitiRemovalParkProperty",
  "Graffiti Removal (Park Property)",
  "Report graffiti located on park property for inspection and appropriate action.",
  `
  <p>
    Graffiti located on park property can be reported using the Graffiti Removal form.
  </p>
  <p>
    When completing the form accuracy is very important to ensure the form is routed to the responsible team e.g. if the graffiti is on a building next to a road, 
    please ensure you select the building, and not the road.
  </p>
  <p>
    Once reported, the graffiti will be inspected and appropriate action will be taken, which can range from removal to cover up.
  </p>
  <p>
    The report form can be found here: <a href="https://forms.sheffield.gov.uk/site/portal/form/report_graffiti" target="_blank" rel="noopener noreferrer">
    Graffiti Report Form</a> 
  </p>
  <p>[Insert Send Link] 39</p>

  <p>
    <em>Please note</em> - it is not always the Council's responsibility to remove graffiti where the graffiti is on an item not owned by the council - e.g. bus stops, or broadband cabinets.
    <br>Information about reporting graffiti to the correctly responsible party, and links to do so, can be found here: <a href="https://www.sheffield.gov.uk/pollution-nuisance/report-graffiti" target="_blank" rel="noopener noreferrer">
    Report graffiti | Sheffield City Council</a> 
  </p>
  <p>[Insert Send Link] 40</p>

`,
  { buttonLabel: "Report graffiti", formName: "report_graffiti" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "graffiti",
      "removal",
      "remove",
      "vandalism",
      "tagging",
      "graffitti",
      "grafitti",
      "grafiti",
    ],
    categories: ["Parks and Countryside", "Maintenance and Issues"]
  },
  { date: "20/08/2026", name: "Liz Taster" }
);

const maintenanceAndIssues = new MenuPSaR(
  "maintenanceAndIssues",
  "Maintenance and Issues",
   `Information about how to report maintenance and other issues in Sheffield parks.`,
  [
    reportTreePark,
    antiSocialBehaviourParks,
    cctvParks,
    insurancePersonalInjuryCompensation,
    flyTipping,
    damageToPavementsAndSurfaces,
    damageToFencing,
    litterAndLitterBins,
    lostFoundProperty,
    grassHedgeCutting,
    dogFouling,
    dogBins,
    dogCatWasteCommercial,
    gritSaltCommercial,
    graffitiRemovalParkProperty
    
  ]
);

//#endregion Maintenance and Issues

//#region Planning and Purchase

const purchaseLeaseLicenceParks = new ContentPSaR(
  "purchaseLeaseLicenceParks",
  "Purchase, Lease, or Licence of Park Property",
  "Information about the purchase, lease or license of park property and spaces.",
  `
  <p>
    Enquiries related to the purchase, lease, or licence of park land should be asked to email 
    <a href="mailto:ParksBusinessPartnership@sheffield.gov.uk">ParksBusinessPartnership@sheffield.gov.uk</a> directly with details.
  </p>
  
  `,

  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "purchase",
      "lease",
      "licence",
      "purchse",
      "purchise",
      "lees",
      "leese",
      "leace",
      "license",
      "lisense",
    ],
    categories: ["Parks and Countryside", "Planning and Purchase"]
  },
  { date: "13/08/2026", name: "Liz Taster" }
);
 

const parksPlanningAndPurchase = new MenuPSaR(
  "parksPlanningAndPurchase",
  "Parks Planning and Purchase",
   `Information about planning applications (including ecology support), and the purchase, lease or license of parks property and land.`,
  [
    purchaseLeaseLicenceParks,
    
  ]
);

//#endregion Planning and Purchase

//#region Top level tiles - must be listed in ServicePSAR

const ecology = new ContentPSaR(
  "ecology",
  "Ecology",
  "Information about crayfish trapping restrictions and ecology data requests.",
  `
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Crayfish</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        The council does not allow crayfish trapping on its land anywhere in Sheffield unless it is for approved scientific research with an Environment Agency 
        licence and landowner permission.
      </p>
      <p>
        It is a criminal offence which can lead to prosecution, fines, and other penalties.
      </p>
      <p>
        Crayfish trapping controls are in place, including for invasive crayfish, due to the potential to make environmental problems worse. 
        Potential risks are:
      </p>
        <ul>
          <li>Spreading invasive species and disease</li>
          <li>Accidentally harming protected native crayfish</li>
          <li>Catching other wildlife such as fish, water voles or otters</li>
          <li>Damaging riverbanks and habitats</li>
        </ul>

        <p>
          The UK’s native, white-clawed crayfish is endangered and legally protected due to major long-term declines caused by invasive species and disease. 
          There are only two populations of white-clawed crayfish in Sheffield and they must be protected.
        </p>

        <p>
          Further enquiries are to be directed to <a href="mailto:ecology@sheffield.gov.uk">ecology@sheffield.gov.uk</a>
        </p>
    </div>
  </details>
  
      <details class="accordion">
    <summary class="accordion-header">
      <h3>Ecology data requests</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Enquiries may be received regarding Sheffield and Barnsley Record Centre data requests.
      </p>
      <p>
        If the person has already completed a data request form, it should be sent to <a href="mailto:ecology@sheffield.gov.uk">ecology@sheffield.gov.uk</a>
      </p>
      <p>
        If the person wants to make a new data request, they can find the form and further information on the process and requirements at 
        <a href="https://www.sheffield.gov.uk/parks-sport-recreation/sheffield-biological-records-centre" target="_blank" rel="noopener noreferrer">
        Sheffield Biological Records Centre | Sheffield City Council</a>
      </p>
      <p>[Insert Send Link] 41</p>
    </div>
  </details>
         
        `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "ecology",
      "crayfish",
      "crayfishes",
      "cray fish",
      "white-clawed",
      "white clawed",
      "native",
      "invasive",
      "Environment Agency",
      "scientific research",
      "wildlife",
      "riverbanks",
      "habitats",
      "protected species",
      "Biological Records Centre",
      "data requests",
      "biological records",
      "data request",
      "trapping",
      "traping",
      "crayfsh",
      "ecolgy",
      "biolgical"
    ],
    categories: ["Parks and Countryside"]
  },
  {
    date: "12/08/2026",
    name: "Liz Taster"
  }
);

const treePlantingCommunityForestry = new ContentPSaR(
  "treePlantingCommunityForestry",
  "Tree Planting and Community Forestry",
  "Information about tree donations, tree planting, maintenance of young trees, Community Forestry events, and volunteering opportunities.",
  `
  <p>
    Sheffield City Council’s Community Forestry Team manages tree planting on Parks and Countryside land. 
    The sections below provide details about donating towards tree planting, as well as Community Forrestry events and volunteering.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Donating my tree</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We are unable to accept donations of living trees or allow trees to be planted on Parks and Countryside property that are not sourced 
        through our partner organisation; Trees for Streets.
      </p>
      <p>
        Pests and disease are a constant threat to Sheffield’s tree stock and planting trees without knowledge of the provenance raises the risk of 
        introducing more into our green spaces. All trees planted on Parks and Countryside land must be sourced by the Community Forestry Team who will 
        ensure it comes from a Plant Healthy, or similar certified, nursery.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Donating to plant a tree</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Sheffield City Council work with Trees for Streets who manage the administration of tree donations to the city. 
        Donations can be made through their website <a href="https://www.treesforstreets.org/" target="_blank" rel="noopener noreferrer">
        Trees for Streets</a>.
      </p>

      <p>[Insert Send Link] 42</p>

      <p>
        Not all parks have space for additional trees and the location within a park is decided by Tree Officers.
      </p>
      <p>
        The cost of the tree includes supply, planting, and 2 years of maintenance until it reaches maturity. 
        We will replace the tree once in its first 2 years of life if it fails.
      </p>
      <p>
        We will inform you of the planting time and date and will allow you to come along to watch if you wish. 
        We don’t allow plaques, flowers, or other objects to be attached to the tree; however, we do have an online 
        dedication page where you will be able to leave a short statement and a picture if you wish.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Maintenance of young trees</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        All young trees are maintained for 2 years after planting. 
        If you see a tree with stakes around it which is leaning, or the stakes/straps need attention, please send details of the issue and 
        the tree's location to <a href="mailto:communityforestry@sheffield.gov.uk">communityforestry@sheffield.gov.uk</a>.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Community Forestry events</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Details of upcoming Community Forestry events, and ticket booking, can be found at 
        <a href="https://www.eventbrite.co.uk/o/scc-community-forestry-20138037357" target="_blank" rel="noopener noreferrer">
        Community Forestry Eventbrite Page</a>.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Community Forestry volunteering</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Community Forestry work is seasonal but assistance with tasks is appreciated all year round. 
        If you would like to do regular volunteering, please email the team directly at 
        <a href="mailto:communityforestry@sheffield.gov.uk">communityforestry@sheffield.gov.uk</a>.
      </p>
    </div>
  </details>
  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "Tree",
      "Planting",
      "Community",
      "Forestry",
      "Trees for Streets",
      "donation",
      "donate",
      "donations",
      "plant",
      "planting",
      "tree maintenance",
      "volunteering",
      "volunteer",
      "trees",
      "sapling",
      "saplings",
      "urban forestry",
      "donaton",
      "plantng",
      "forrestry",
      "commmunity"
    ],
    categories: ["Parks and Countryside"]
  },
  {
    date: "12/08/2026",
    name: "Liz Taster"
  }
);

const volunteeringWorkExperienceInParks = new ContentPSaR(
  "volunteeringWorkExperienceInParks",
  "Volunteering and Work Experience in Parks",
  "Information about volunteering opportunities, work experience, Friends of groups, litter picking, and group volunteering enquiries in Sheffield parks and countryside.",
  `
  <p>
    The Parks and Countryside team are always looking for volunteers to help us look after our City's fantastic green spaces. There are a variety of opportunities 
    available to support, further information which can be found through the below links.
  </p>

  <p>
    Customers can find local ‘Friends of’ groups who are active throughout the city and welcome volunteers and support here: 
    <a href="https://www.sheffield.gov.uk/parks-sport-recreation/friends-of-groups" target="_blank" rel="noopener noreferrer">
    'Friends of' groups | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 43</p>

  <p>
    Further volunteer opportunities with Parks &amp; Countryside can be found here: 
    <a href="https://www.sheffield.gov.uk/parks-sport-recreation/volunteer-with-parks-countryside" target="_blank" rel="noopener noreferrer">
    Volunteer with Parks and Countryside | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 44</p>

  <p>
    More information about litter picking is available here: 
    <a href="https://www.sheffield.gov.uk/pollution-and-nuisance/fly-tipping-litter/organise-litter-picks" target="_blank" rel="noopener noreferrer">
    Organise a community litter pick | Sheffield City Council</a>
  </p>
  <p>[Insert Send Link] 45</p>

  <p>
    Group, educational, or corporate volunteering enquiries should be directed to <a href="mailto:ParksBusinessPartnership@sheffield.gov.uk">ParksBusinessPartnership@sheffield.gov.uk</a> 
    and include the following information:
  </p>
    <ul>
      <li>Organisation name</li>
      <li>Contact name</li>
      <li>Contact details</li>
      <li>Type of group (corporate, school, university, community group, etc.)</li>
      <li>Approximate number of participants</li>
      <li>Preferred dates or timescales</li>
      <li>Any objectives or specific requirements for the volunteering activity</li>
    </ul>
  `,
  
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "volunteering",
      "volunteer",
      "volunteers",
      "work experience",
      "Friends of",
      "groups",
      "community",
      "litte",
      "pick",
      "picking",
      "picks",
      "corporate",
      "volenteering",
      "voluntering",
      "litterpicking"
    ],
    categories: ["Parks and Countryside"]
  },
  {
    date: "13/08/2026",
    name: "Liz Taster"
  }
);

const wildlifeInParks = new ContentPSaR(
  "wildlifeInParks",
  "Wildlife in Parks",
  "Information about nesting birds, wildlife crime, unusual wildlife, loose animals, and wildlife welfare concerns in parks.",
  `
  <p>
    Please see below for details of a variety of different types of wildlife query.
  </p>
  
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Nesting birds & wildlife crime</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Disturbing nesting birds, or abuse of wildlife are potentially criminal matters and should be reported to the police by 
        phoning 101 and asking for a Wildlife Crime Officer.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Snakes & unusual wildlife</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        For an encounter with a snake or unusual wildlife in a park, ask the customer to contact the Ecology team with details and a photo, 
        if possible, at <a href="mailto:ecology@sheffield.gov.uk">ecology@sheffield.gov.uk</a>.
      </p>
      <p>
        Staff can help identify the species and advise on safety and conservation.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Loose wildlife</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        If an animal is loose and poses a risk to people or property or is near active vehicles, ask customers to call 999. 
        This is considered a public welfare issue and may require an emergency response.
      </p>
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
        <h3>Wildlife welfare concerns</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        SCC are not responsible for wild animals. Concerns for the welfare of wildlife e.g. injured or unwell animals, should be directed to:
      </p>

      <p>
        Royal Society for the Prevention of Cruelty to Animals (RSPCA) - 0114 2898050
      </p>

      <p>
        Sheffield & Rotherham Wildlife Trust – 0114 2634335
      </p>

      <p>
        Additional information about injured or distressed wildlife, wildlife crimes, and rescue centres can be found on the Sheffield & Rotherham Wildlife Trust website: 
        <a href="https://www.wildsheffield.com/wildlife/local-rescue-centres/" target="_blank" rel="noopener noreferrer">
        Local Wildlife Rescue Centres - Sheffield & Rotherham Wildlife Trust</a>
      </p>
      <p>[Insert Send Link] 46</p>
    </div>
  </details>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "wildlife",
      "wild life",
      "parks",
      "park",
      "nesting",
      "birds",
      "bird",
      "crime",
      "Wildlife Crime Officer",
      "WCO",
      "snake",
      "snakes",
      "ecology",
      "loose",
      "animal",
      "welfare",
      "injured",
      "unwell",
      "rescue",
      "centre",
      "centres",
      "wildsheffield",
      "rescue",
      "wildilfe",
      "wilflife",
      "ecolgy",
    ],
    categories: ["Parks and Countryside"]
  },
  {
    date: "13/08/2026",
    name: "Liz Taster"
  }
);

const memorialsInParks = new ContentPSaR(
  "memorialsInParks",
  "Memorials in Parks",
  "Information about ashes, memorial benches, and memorial trees in parks and green spaces.",
  `
<h3>Ashes</h3>
  <p>
    We do not allow the scattering of ashes on park land.
  </p>

<h3>Memorial Benches</h3>
  <p>
    The current <strong>cost</strong> for installation of a bench is <strong>£1000+</strong>. The bench would be a standard cast iron bench with recycled plastic slats to 
    ensure consistency with other benches across park land.
  </p>

  <p>
    Applications for a bench can be made by completing the online form here: [not yet published].
  </p>
  <p>[Insert Send Link] 47</p>
  <p>
    Once an application is received it will be reviewed by the Park Area Manager and a site assessment may be undertaken.
  </p>
  <p>
    Approval will depend on the suitability of the location and existing provision.
  </p>
  <p>
    Customers will then be advised of costs, conditions, and ongoing arrangements associated with the memorial bench scheme.
  </p>

  <p>
    Details can be found in the sections below about applications for memorial benches in different locations.
  </p>

<details class="accordion">
    <summary class="accordion-header">
      <h3>Benches in parks</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Memorial benches are available in some parks and green spaces; however, availability varies by location. 
        The suitability of installing additional benches depends on factors such as available space, existing bench provision, landscape considerations, 
        maintenance requirements, accessibility, and the character of the site.
      </p>

      <p>
        There is currently very limited space for additional benches in park spaces. A list of parks accepting applications to install a memorial bench is below:
      </p>

      <ul>
        <li>Charlton Brook</li>
        <li>Concord Park (limited and specific locations)</li>
        <li>Crookes Valley</li>
        <li>Don Fields</li>
        <li>Greenhill Park</li>
        <li>Grenoside Park</li>
        <li>Hillsborough Park</li>
        <li>Longley Park</li>
        <li>Lowfields</li>
        <li>Mount Pleasant</li>
        <li>Oxley Park</li>
        <li>Ponderosa</li>
        <li>Ruskin Park</li>
        <li>Weston Park</li>
      </ul>
    </div>
  </details>

<details class="accordion">
    <summary class="accordion-header">
      <h3>Benches in woodland</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        We no longer accept requests to place memorial benches in woodland spaces.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Memorial bench terms and conditions</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Terms and conditions apply to all memorial benches:
      </p>
        <ul>
          <li>Memorials are engraved into the bench. We do not allow brass plates as these are regularly stolen and we are unable to replace them.</li>
          <li>No political, sports team, or abusive content are allowed in memorials.</li>
          <li>Personal items e.g./trinkets/vases/locks and flowers are not permitted either on or attached to the seat and will be removed by the City Council.</li>
          <li>No responsibility can be accepted for theft.</li>
          <li>The bench shall be a once only donation - it shall not be replaced by the Council at the end of its life or if it is destroyed by vandalism, 
              but it can be replaced at your cost. </li>
          <li>The City Council may remove the bench if it becomes unsafe.</li>
          <li>Upkeep of the bench is the responsibility of the client. Advice can be given.</li>
        </ul>
    </div>
  </details>

<h3>Memorial Trees</h3>
  <p>
    Donations of memorial or commemorative trees are welcome.
  </p>
  <p>
    Details of how to donate can be found in the <strong>Tree Planting and Community Forestry</strong> knowledge article. 
    Search for '<em>donate a tree</em>' using the search function above.
  </p>

  `,
  { buttonLabel: "Apply for a Memorial Bench", formName: "request_memorial_bench" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "memorial",
      "memorials",
      "ashes",
      "scattering",
      "scatter",
      "bench",
      "benches",
      "commemorative",
      "tree",
      "trees",
      "donation",
      "donate",
      "benchs",
      "benche",
      "benh",
      "memoral",
      "memmorial"
    ],
    categories: ["Parks and Countryside"]
  },
  {
    date: "13/08/2026",
    name: "Liz Taster"
  }
);

const donatingToParks = new ContentPSaR(
  "donatingToParks",
  "Donating to Parks and Green Spaces",
  "Information about financial donations and item donations for parks and green spaces.",
  `
  <p>
    Customers wishing to make donations to Sheffield's Parks and Green Spaces should be directed to complete the online form available on the website.
    Further details can be found below about donation types and how they are used.
  </p>

  <p>[Insert Send Link] 48</p>

  <h3>Donating money</h3>
    <p>
      The Council welcomes financial donations to support the maintenance, enhancement, and improvement of parks and green spaces.
    </p>
    <p>
      Donations will be used to support improvements such as planting schemes, park facilities, biodiversity projects, community initiatives, 
      or other agreed improvements within parks and green spaces.
    </p>
    <p>
      Donations can be made using the online form and can be allocated to a specific park. 
      Any park-specific donation arrangements will be subject to Council financial procedures and operational requirements.
    </p>
    <p>
      If a specific park is not selected, donations may be used for parks and green spaces across the city where they are most needed.
    </p>
    <p>
      Once a customer has completed the donation request form they will find a link to make payment of their donation in the request confirmation screen.
    </p>

  <h3>Donating items</h3>
    <p>
      We are unable to accept donations of items or equipment - for example furniture, plants, memorial items, or play equipment.
    </p>
    <p>
      Graves Park Animal Farm will consider donations which support the care of animals, such as food, hay, sawdust, blankets and similar items. 
      Donations must be agreed by the park manager and delivered to the park. We do not collect donations.
    </p>
    <p>
      Please provide details of the items you wish to donate using the form. A park manager will review the details and respond within 3-5 working days. 
    </p>

  <h3>Donating tree/plants</h3>
    <p>
      We do not accept donations of trees or plants. Please search for the knowledge article <strong>Tree Planting and Community Forestry</strong> for more info. 
    </p>
  
  `,
  { buttonLabel: "Donate to parks", formName: "request_donation_parks" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "donation",
      "donations",
      "donate",
      "donating",
      "financial",
      "money",
      "supportparks",
      "charitable",
      "giving",
      "contribution",
      "contributions",
      "dontation",
      "donatoin",
      "donatons"
    ],
    categories: ["Parks and Countryside"]
  },
  { date: "14/08/2026", name: "Liz Taster" }
);

const treePreservationOrders = new ContentPSaR(
  "treePreservationOrders",
  "Tree Preservation Orders and Conservation Areas",
  "Information about Tree Preservation Orders (TPOs), conservation areas, protected trees and notification requirements.",
  `
  <p>
    Trees on private property may be legally protected by a Tree Preservation Order (TPO), this includes work which will impact the root system.
  </p>
  <p>
    In a conservation area SCC must be notified of any tree work to allow consideration as to whether a tree merits protection. 
    This includes:
  </p>
    <ul>
      <li>Lopping and topping of branches</li>
      <li>Severance of the roots</li>
      <li>Removal of the tree</li>
      <li>Uprooting of a tree</li>
    </ul>
  <p>
    If a protected tree is dead or presents an immediate risk where work is urgently needed to remove that risk, the Council must be notified before acting.
  </p>
  <p>
    Contravention of a Tree Preservation Order by damaging or carrying out work on a protected tree is punishable by a fine of up to £20,000 if convicted in a magistrate’s court.
  </p>
  <p>
    A map of conservation areas and TPOs can be found on our website along with details of how to apply for permission to carry out work on a protected tree: 
    <a href="https://www.sheffield.gov.uk/planning-development/conservation-design/tree-works-protected-trees" target="_blank" rel="noopener noreferrer">
    Tree works and protected trees | Sheffield City Council</a>.
  </p>
  <p>[Insert Send Link] 49</p>

  `,
  
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "parks_information_provided" },
  {
    type: "Information",
    keywords: [
      "Conservation",
      "Areas",
      "Area",
      "Tree",
      "Preservation",
      "Order",
      "Orders",
      "TPO",
      "TPOs",
      "protected",
      "tree",
      "trees",
      "lopping",
      "topping",
      "pollarding",
      "branches",
      "roots",
      "root",
      "system",
      "removal",
      "remove",
      "uprooting",
      "uproot",
      "dead tree",
      "dangerous tree",
      "protection",
      "preservasion",
      "presevation",
      "consrvation",
      "protcted",
      "protction",
    ],
    categories: ["Parks and Countryside"]
  },
  {
    date: "20/08/2026",
    name: "Liz Taster"
  }
);
    

//#endregion Top level tiles - must be listed in ServicePSAR

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const parksSportAndRecreation = new ServicePSaR(
  "parksSportAndRecreation",
  "Parks, Sport and Recreation",
  `Parks, gardens, trees and woodlands, allotments, leisure and sports facilities, what's on, tourist information…`,
  [allotmentsParks,
   bookingsParks,
   eventsAndActivities,
   maintenanceAndIssues,
   parksPlanningAndPurchase,
   ecology,
   treePlantingCommunityForestry,
   volunteeringWorkExperienceInParks,
   wildlifeInParks,
   memorialsInParks,
   donatingToParks,
   treePreservationOrders,
  ]
);