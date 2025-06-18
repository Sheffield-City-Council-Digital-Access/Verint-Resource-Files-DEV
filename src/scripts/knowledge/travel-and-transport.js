class CoreTaT {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceTaT extends CoreTaT {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuTaT extends CoreTaT {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentTaT extends CoreTaT {
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

class FormTaT extends CoreTaT {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const zoomZeroFare = new ContentTaT(
  "zoomZeroFare",
  "Zoom Zero Travel Pass",
  "(Previously known as a Children's Travel Pass) Find details on eligibility, application, appeals, and replacement options for a Zoom Zero travel pass in Sheffield.",
  `
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>If you have changed your address or school</h3>
      <p>
        This could affect the distance your child travels to school, so please check your eligibility before you apply for a new Zoom Zero travel pass.
        <br><br>
        Applications should be made to the Council where you live and not where the school is.
        <br><br>
        If you chose not to apply for your catchment school or the three nearest qualifying secondary 
        schools for low-income families, you are unlikely to qualify for a Zoom Zero travel pass.
        <br><br>
        Please be aware that if the catchment school or nearest school(s) has a 
        place available in your child's year group, you are unlikely to qualify for 
        a Zoom Zero travel pass. There may also be exceptional circumstances 
        that could qualify your child for a Zoom Zero travel pass.

      </p>
    </section>
    <p>
      Your child may be eligible for free school travel if you meet certain conditions.
    </p>
    <h3>Who can apply</h3>
    <p>
      Children between the age of  5 and 16 (Reception to Y11) may qualify for free school travel 
      support if they go to their nearest available qualifying school in Sheffield and live at least:
    </p>
    <p>
      <ul>
        <li>2 miles or more, if they're 5 to 7 years old</li>
        <li>3 miles or more if they're 8 to 16 years old</li>
      </ul>
    </p>
    <p>
      If you get the maximum Working Tax Credit or your children are entitled to Free School Meals, 
      they'll get free school travel support if they are:
    </p>
    <p>
      <ul>
        <li>aged 8 to 11 and travel 2 miles or more to their nearest available school</li>
        <li>aged 11 to 16 and travel between 2 and 6 miles to their school, (as long as there are not 3 or more nearer available schools)</li>
        <li>aged 11 to 16 and travel between 2 and 15 miles to their nearest available school if the parent chose the school on the grounds of religion, belief</li>
        <li>aged 13 to 16 and attending a Sheffield-based University Technical College (UTC), if the UTC is two miles or more from their permanent home address</li>
      </ul>
    </p>
    <p>
      or
    </p>
    <p>
      <ul>
        <li>the child has special educational needs (SEN)</li>
        <li>the child has an Education, Healthcare and Care plan (EHC)</li>
        <li>the child is in foster care</li>
      </ul>
    </p>
    <h3>Apply for or renew a Zoom Zero travel pass</h3>
    <p>
      You can apply for a new pass or renew an existing one at: <a href="https://www.sheffield.gov.uk/utilities/form/travel-and-transport/apply-childrens-travel-pass-start" target="_blank">https://www.sheffield.gov.uk/utilities/form/travel-and-transport/apply-childrens-travel-pass-start</a> 
      <br>
      
<button
     type="button"
     class="dform_widget email-btn dform_widget_type_button"
     aria-label="For further information send link"
     onclick="
     window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
     KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
     }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20a%20Childrens%20Travel%20Pass\`
     "
 >
     Send link to review further information
</button>

      <br>
      <br>
      It may take up to 28 days to process your application.
      <br>
      <br>
      Please do not send in photographs using filters, such as Snapchat and Instagram images.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Lost or stolen pass</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
      <p>
        To replace a <strong>lost or damaged</strong> pass there is a £7 replacement fee. <br>
        <strong>Stolen</strong> passes can be replaced free of charge if you have a Crime Reference Number from the Police.
        You can make the payment by calling Traveline on <a href="tel:0800 9520002">0800 9520002</a>, selecting option 1, using your credit or debit card.
        All replacements will be posted to your home address by First Class Post.
      </p>
      <p>
        Information on how to replace a misplaced pass can be found at:
        <a href="https://www.travelsouthyorkshire.com/zerofarepass" target="_blank">www.travelsouthyorkshire.com/zerofarepass</a>
        <br>

    <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Zoom%20Zero%20Travel%20Pass\`
    "
>
        Send link to review further information
    </button>

      </p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Appeal a Zoom Zero travel pass decision</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          If you don't meet the criteria and are refused a Zoom Zero travel pass, 
          you have the right to appeal the decision. The appeals process has 2 stages.
        </p>
        <h4>Stage 1</h4>
        <p>
          Request a Stage 1 review within 20 working days of our decision to refuse a Zoom Zero travel pass. We'll send you a
          detailed written outcome, we aim to do this within 20 working days of receiving your written request.
          <br>
          <br>
          If we agree with the original decision to refuse a pass, you have 20 working days from receiving the Stage 1 decision to 
          challenge it in writing. This begins a Stage 2 Appeal.
        </p>
        <h4>Stage 2</h4>
        <p>
          An independent appeal panel (the Admissions Committee) will consider any case that does not fall within our Home to School 
          Transport Policy. 
          <br>
          <br>
          To begin either a Stage 1 or Stage 2, 
          please get in touch with us by emailing 
          <a href="mailto:CTP@sheffield.gov.uk">CTP@sheffield.gov.uk</a>.
        </p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>How is the distance from Home to School calculated?</summary>
          <div class="details-accordion-content">
            <p>
              We measure the distance between the house and the school by using a mapping
              tool. The maps will decide the most efficient route between the 2 points. It
              may include a route that involves footpaths, bridleways, and other pathways,
              as well as some recognised roads. A route will be viewed as ‘available’ even
              if the child would need to be accompanied along it by his or her parent, as
              long as such accompaniment is reasonably practicable from a road safety
              perspective.
            </p>
          </div>
        </details>
        <details class="details-accordion">
          <summary>My child is 16 or over, what pass could I get?</summary>
          <div class="details-accordion-content">
            <p>Travel South Yorkshire offer a pass for anyone aged between 16-18</p>
            <p>Benefits include:</p>
            <ul>
              <li>Cheaper travel for work, school, college, or leisure.</li>
              <li>
                Travel anytime, anywhere in South Yorkshire for just £1 per journey
                on bus or tram and half fare on Northern trains.
              </li>
              <li>
                Valid through Summer months so you can enjoy cheaper travel in
                August.
              </li>
              <li>Access money saving tickets for young people.</li>
            </ul>
          </div>
        </details>
        <details class="details-accordion">
          <summary>I'm not eligible, are there any other passes?</summary>
          <div class="details-accordion-content">
            <p>
              Travel South Yorkshire offer a MegaTravel Pass for children that are
              not eligible for a Children's Travel Pass.
            </p>
            <p>
              With a MegaTravel Pass you can travel anytime, anywhere in South
              Yorkshire for a single fare of £1.00 on bus or tram. You can also buy
              discounted 7-day tickets for young people, which may work out cheaper
              if you travel regularly. You’ll also be able to travel half price on
              local trains.
            </p>
          </div>
        </details>
      </div>
    </details>
  `,
  {
    buttonLabel: "Apply for a Zoom Zero travel pass",
    formName: "childrens_travel_pass",
  },
  { typeKey: "" },
  { typeKey: "childrens_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "Zoom Zero Travel Pass",
      "Zoom Zero Fare",
      "zz",
      "zzt",
      "zzp",
      "ztp",
      "zztp",
      "zzf",
      "tp",
      "childrens travel pass",
      "childrens travel pas",
      "childrens travle pass",
      "childrens travelp ass",
      "childrens trave pass",
      "childrens travell pass",
      "children's travel pass",
      "CTP",
      "childrens",
      "child",
      "child's",
      "childrenss",
      "children's",
      "childrenss",
      "childerns",
      "travil",
      "traval",
      "travle",
      "trevel",
      "tavel",
      "pas",
      "pess",
      "passs",
      "passe",
      "pazs"
    ],
    categories: ["Travel and Transport"],
  },
  { date: "08/05/2025", name: "Dinah Williams" }
);

const disabledPersonsTravelPermit = new ContentTaT(
  "disabledPersonsTravelPermit",
  "Disabled Person's Travel Permit",
  "Find information on eligibility, application process, usage, and appeal details for a Disabled Travel Permit in Sheffield.",
  `
    <p>
      You may qualify for a pass if you're aged between 5 and 66 and meet one of the
      following criteria:
      <ul>
        <li>are blind or partially sighted</li>
        <li>are deaf or without speech</li>
        <li>have a disability which has a substantial and long-term adverse effect on your ability to walk</li>
        <li>do not have arms or have long-term loss of the use of your arms</li>
        <li>
          unable to drive because of a health problem, such as autism or epilepsy
        </li>
        <li>
          have a learning disability
        </li>
        <li>
          have been or would be refused a driver’s licence on medical grounds 
          (other than on the grounds of persistent misuse of drugs and alcohol)</li>
        <li>
            PIP standard rate mobility (at least 8 points awarded for planning and following a journey)
        </li>
        <li>
          PIP enhanced rate mobility (points awarded for planning and following a journey)
        </li>
        <li>
          PIP enhanced rate of Daily Living.  If in receipt of minimum 4 points for mobility, eligible for with carer pass.
        </li>
        <li>
          DLA high-rate care. If in receipt of low-rate mobility, eligible for with carer pass, regardless of age.
        </li>
      </ul>
    </p>
    <p>
    If you have any supporting evidence/eligibility that has an end date, your pass will be issued up to that date.  Maximum of 5 years.
    </p>

    
   <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20a%20Disabled%20Persons%20Travel%20Pass\`
    "
>
    Send link to review further information
</button>

    <h3>How long does a Disabled Travel Permit last for</h3>
       <p>
      If your application is successful, passes are issued between 1 and 5 years the
      timescale is dependent on your qualifying criteria, you will be made aware of
      the timescale when your application is approved.<br>
      If you have any supporting evidence/eligibility that has an end date, your
      pass will be issued up to that date.<br>
    </p>
    <h3>How long will my application take</h3>
    <p>Disabled Travel Permits have a 28 day process period.</p>
    <h3>How do I appeal the decision</h3>
    <p>Appeals must be made in writing to:<br>
      <address>
        Customer Services<br>
        Floor 2<br>
        Howden House<br>
        1 Union Street<br>
        Sheffield<br>
        S1 2SH
      </address>
    </p>
    <p>
      Customers can also request an appeal via email by writing to  <a href="mailto:disabledtravelpass@sheffield.gov.uk">disabledtravelpass@sheffield.gov.uk</a>
    </p>
    <h3>When can I use my Travel Permit</h3>
    <p>
      A disabled persons pass enables free public transport on buses, trams and
      trains.
    </p>
    <h3>Where can I use my pass</h3>
    <p>
      If the Pass is being used within South Yorkshire the pass can be used at all
      times of the day.
      The pass can be used outside of South Yorkshire (within England or Wales)
      between 9:30am and 11pm weekdays, all day at weekends and on Bank Holidays.
    </p>
    <h3>What do I do with the approval letter</h3>
    <p>
      The purple form needs to be completed with a passport size and style photograph
      (eg white background, looking forward etc) and returned to:
      <address>
        Contact Centre<br>
        SYPTE<br>
        11 Broad Street West<br>
        Sheffield<br>
        Sheffield S1 2BQ
      </address>
    </p>
      <h3>I've sent my approval letter off but not got my pass</h3>
    <p>
      Contact SYPTE direct <a href="tel:0800 9520002">0800 9520002</a>.
    </p>
      <h3>Where is my pass (applied with SCC) Ive had a letter/phone call</h3>
    <p>
      Chase/escalation email to the Team Leaders not to the CS Inbox for action.
    </p>
      <h3>What evidence do I need to send</h3>
    <p>
      Proof of address, copy of awards letter for DLA PIP within last 12 months, 
      medical evidence from Health Care Professional, 
      Letter from DVLA re surrendered/revoked driving licence.  
    </p>
    <p>
      Evidence can be uploaded on when completing the online form, if the evidence is not uploaded it
      needs to be sent to <a href="mailto:disabledtravelpass@sheffield.gov.uk">disabledtravelpass@sheffield.gov.uk</a> 
    </p>
    <h3>Lost or stolen pass</h3>
    <p>
      You can replace your lost, damaged, or stolen Disabled Person's Pass online by visiting:  
      <a href="https://www.travelsouthyorkshire.com/Disabledreplace/" target="_blank">
      https://www.travelsouthyorkshire.com/Disabledreplace/ </a>

         <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link for disabled travel pass replacement"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Disabled%20Replace\`
            "
      >
        Send link to review further information
      </button>

   
    </a>. There is a £7 charge for lost or damaged passes. You must provide 
      Proof of Identity that includes your address, such as an official letter, 
      NHS medical card, or utility bill.
    </p>
    <p>
    There is no charge for stolen passes if you obtain a Crime Reference 
    Number from the police. Your replacement pass will be posted to your home 
    address within 7 working days.
    </p>
    <h3>Travelling with a Carer</h3>
    <p>
    There are no age retrictions in place when applying to travel with a carer.
    </p>
  <h4>Qualifying Conditions:</h4>
<ul>
  <li>Higher rate care component of Disability Living Allowance with some mobility</li>
  <li>PIP Enhanced daily living</li>
  <li>Higher rate Attendance Allowance</li>
</ul>
  <p>Your Travel pass will allow one carer to travel with you for free.</p>

  <h3>Replacement Disabled Travel Permit</h3>
  <p>
    You can replace your lost, damaged, or stolen Disabled Person's Pass online by visiting: 
    <a href="https://www.travelsouthyorkshire.com/Disabledreplace/" target="_blank">https://www.travelsouthyorkshire.com/Disabledreplace/</a>
  </p>
  <p>
    Charge: £7 for lost or damaged passes. Proof of identity including your address is required.
  </p>
  <p>
    No Charge for Stolen Passes: With a Crime Reference Number from the police.
  </p>
  <p>
    Processing Time: Replacement pass will be posted to your home address within 7 working days.
  </p>
  
   <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="Send link for disabled travel pass replacement"
        onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Disabled%20Replace\`
            "
      >
        Send link to review further information
      </button>
<a href="${window.location.protocol}//${
       window.location.hostname
     }/form/launch/dtp_enquiry?${
       KDF.getParams().customerid
         ? `customerid=${KDF.getParams().customerid}&`
         : ""
     }interactionid=${KDF.getParams().interactionid}">Disabled Travel Pass enquiry</a>
   `,
  {
    buttonLabel: "Apply for disabled travel permit",
    formName: "disabled_travel_pass",
  },
  { typeKey: "" },
  { typeKey: "disabled_travel_pass_information_provided" },
  {
    type: "Apply",
    keywords: [
      "DTP",
      "DP",
      "DPTP",
      "PTD",
      "TDP",
      "TP",
      "PDTP",
      "DTP",
      "DPT",
      "DPTP",
      "MTP",
      "DP",
      "DPP",
      "disabled travel pass enquiry",
      "dtp enquiry",
      "aplication",
      "applcation",
      "applicaton",
      "aplicacion",
      "applucation",
      "bus",
      "buss",
      "bsu",
      "Mobility Travel Permit",
      "Mobility Travel Pass",
      "Mobile",
      "Mobility"
    ],

    categories: ["Travel and Transport"],
  },
  { date: "17/03/2025", name: "Andy Walker" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const travelAndTransport = new ServiceTaT(
  "travelAndTransport",
  "Travel and Transport",
  `Public transport, driving, cycling, walking, travel cards and passes, school passes, travel news and updates…`,
  [zoomZeroFare, disabledPersonsTravelPermit]
);
