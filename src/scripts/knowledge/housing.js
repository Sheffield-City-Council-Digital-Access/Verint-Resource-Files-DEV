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

//#region Crossregion

const communalFireSafety = new ContentH(
  "communalFireSafety",
  "Communal Fire Safety",
  "Learn about fire safety regulations for communal areas, prohibited items, and permitted placements to ensure clear escape routes and compliance with safety standards.",
  `
    <p>
      Under the Regulatory Reform Order (2005), landlords are required to ensure
      that fire risk assessments are carried out in any shared areas of any
      properties they manage. Landlords also need to ensure that any fire escape
      routes and entrances/exits to properties are clear from trip hazards and items
      which would prevent exit from the building in the event of an emergency.
    </p>
    <p>As such, please do not place in the communal area, items such as:</p>
    <ul>
      <li>Chairs and tables</li>
      <li>Bookcases</li>
      <li>Loose carpets</li>
      <li>Curtains, blinds or net curtains</li>
      <li>Plastic flower pots</li>
      <li>Petrol containers and gas bottles</li>
      <li>
        Motorbikes, mopeds or any other equipment which uses petrol/diesel or gas
      </li>
    </ul>
    <p>
      If any of these items, or any other item which is felt to be a fire risk, are
      left in your communal area we will ask residents to remove them. If they
      remain they will be removed.
    </p>
    <p>
      Bicycles, prams, pushchairs and similar items will not normally be permitted
      to be stored or located within the internal communal parts unless there is an
      area capable of storage without causing obstruction.
    </p>
    <p>
      You can have a small doormat if it is rubber backed. Edged and trimmed natural
      plants in ceramic, earthenware or metal pots, as long as they are not placed
      on stairs or landings which are the means of escape from the building.
    </p>
  `,
  { buttonLabel: "Raise enquiry", formName: "hou_estates_enquiry" },
  { typeKey: "" },
  { typeKey: "estates_and_environmental_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "13/05/2025", name: "Nathan Smith" }
);

const universalCredit = new ContentH(
  "universalCredit",
  "Universal credit",
  "Learn about Universal Credit, including how to apply, report changes, and manage rent and Council Tax payments.",
  `
    <p>If you need to make a new claim or if you have a change in circumstances with one of the following benefits, 
   you may be directed to claim Universal Credit:</p>
<ul>
    <li>Housing Benefit</li>
    <li>Income-related Employment and Support Allowance (ESA)</li>
    <li>Income-based Jobseeker's Allowance (JSA)</li>
    <li>Child Tax Credit</li>
    <li>Working Tax Credit</li>
    <li>Income Support</li>
</ul>
<p>At some point in the future, many people currently on the benefits above will be moved across to Universal Credit. 
   The Government has not yet given a date for this, but the Department for Work and Pensions 
   will contact anyone affected before there are changes to their benefits or tax credits.</p>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Applying for an advance through Universal Credit</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            You can apply for an advance from your Universal Credit (UC), which is a loan and is paid back through your payments. <br>
            If you claim an advance which includes some of your Housing Costs, you should pay this amount towards your rent.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Change of circumstances</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Any changes to your circumstances must be reported immediately using your UC journal.</p>
        <p>If not, you may be sanctioned and your UC payment may be less than you think.</p>
        <p>If this happens, you will still receive your payment for the Housing Cost Element, 
           but it is important that this is paid to the rent account to make sure you meet your obligation to SCC to pay rent.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Council Tax and Universal Credit</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Universal Credit does not include help with your Council Tax, so you must claim this separately.</p>
        <p>You can do this at:
        <a href="https://www.sheffield.gov.uk/benefits/council-tax-support" 
      </p>
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20Council%20Tax%20support\`
    "
>
    Send link to review further information
</button>

  
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>How will Universal Credit affect my rent payments</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Universal Credit payments are usually paid monthly, and in arrears.</p>
        <p>You should be absolutely clear that if you claim Universal Credit, you will need to pay your full rent yourself.</p>
        <p>You may receive Housing Costs within your UC payment that will help towards your rent, 
           and this may change depending on the income you receive during your monthly assessment period. 
           But regardless of this, you need to ensure your full rent payments are made.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Notifying SCC when you start claiming Universal Credit</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>As all Sheffield City Council tenancies charge rent weekly, it is important that you advise us immediately if you start to claim Universal Credit.</p>
        <p>This will allow us to discuss and agree with you arrangements about your rent payments.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Delays before first payment</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>When you first claim UC, you may have to wait 5 weeks for your first payment.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Will my Universal Credit payment date change</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>Your UC payment date will be the same every month unless it is due on a weekend or Bank Holiday.</p>
        <p>If this is the case, it will be paid on the last working day before your usual payment date.</p>
        <p>Please check your UC journal regularly as this is the way you will know what your payments will be each month.</p>
        <p>This will also be how you usually have contact with the DWP.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Setting up an email account and bank account for Universal Credit</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>You can set up an email account and bank account to receive Universal Credit online. It will also help with automatic updates and payments.</p>
        <p>Set up your Universal Credit account online:</p>
        <ul>
            <li>Visit the official Universal Credit website</li>
            <li>Fill in the application form</li>
            <li>Submit the form and wait for further instructions</li>
        </ul>
    </div>
</details>

  `,
  { buttonLabel: "Universal credit", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
      "Universal Credit",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const welfareReform = new ContentH(
  "welfareReform",
  "Welfare reform",
  "Understand how welfare reforms, including the under-occupation charge and benefit cap, impact housing benefit for council and housing association tenants.",
  `
  <p>From April 2013, the government reduced the amount of housing benefit for council / housing association tenants in homes that had any spare bedrooms. 
    This is also known as under-occupation. This change only affected people of working age.</p>
  <p>Claimants of housing benefit and those considering a move to a new home either through:</p>
  <ul>
  <li>a new council or housing association tenancy</li>
  <li>a mutual exchange, or</li>
  <li>a transfer to another council home</li>
  </ul>
  <p>Need to be aware of the impact that having a home with spare bedrooms will have on their welfare benefits.</p>
  
  <details class="accordion">
    <summary class="accordion-header">
        <h3>FAQ</h3>
        <div class="accordion-icon"></div>
    </summary>

    <div class="accordion-content">
        <details class="details-accordion">
            <summary>
                Will these changes affect me?
            </summary>
            <div class="details-accordion-content">
                <p>This only affects people of working age, so if you are old enough to receive a state pension (of a pensionable age) then these changes will not affect you. 
                You are likely to be affected by these changes, especially if you are a single person with two or more bedrooms, 
                a couple with two or more bedrooms, or in a household whose children have grown up and left home.</p>
                <p>If you are of working age you therefore need to think very carefully before bidding for a property that has more bedrooms than housing benefit will allow for, 
                as a reduction in this would mean that you have to pay additional money towards your rent yourself. 
                Our eligibility table gives an indication of where there is likely to be a reduction in housing benefit.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                How will the government work out if you have spare bedrooms?
            </summary>
            <div class="details-accordion-content">
                <p>The government has told us that one bedroom will be allowed for each person, or couple with the following exceptions:</p>
                <ul>
                    <li>Children aged 16 or under will be expected to share with another child of the same sex.</li>
                    <li>Children aged 10 and under will be expected to share with another child regardless of their sex.</li>
                </ul>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                How much will my housing benefit be reduced by?
            </summary>
            <div class="details-accordion-content">
                <p>If you have one spare bedroom you are likely to lose 14% of your weekly housing benefit and if you have two spare bedrooms you could lose 25%. 
                This means that you will have to pay the extra money towards the rent yourself.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                What considerations should I make when bidding for a new property?
            </summary>
            <div class="details-accordion-content">
                <p>If you are currently looking for a new home you must consider very carefully the size of the home you want to move to. 
                Remember if you are of working age and receiving housing benefit, this might be reduced if you move to a home which is too big for you.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                How can I move to a smaller home?
            </summary>
            <div class="details-accordion-content">
                <p>There may be a number of options available to you:</p>
                <ul>
                    <li>You could exchange your current home with another tenant who wants to move. This is called a mutual exchange.</li>
                    <li>You could be awarded a rehousing priority under the SMARTMOVE scheme to move to a smaller more manageable home if you are currently living in a high demand council / housing association property.</li>
                    <li>You can move to another council/housing association property by bidding for the available homes which we advertise each week.</li>
                </ul>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                Are adapted properties exempt?
            </summary>
            <div class="details-accordion-content">
                <p>Adapted properties are not exempt from the welfare reform and extra bedroom charge.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                If there is a couple, one of a pensionable age and the other not, will they be affected by benefit changes next year?
            </summary>
            <div class="details-accordion-content">
                <p>Generally speaking, pensionable aged persons are exempt from the welfare reforms. However, 
                when there is a couple & one isn’t of pensionable age it is not as straightforward, it will be dependent on what DWP benefit they are receiving.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                Furnished properties change
            </summary>
            <div class="details-accordion-content">
                <p>Where a property is furnished and under occupied they lose the HB granted for the furniture charge. 
                The % reduction is applied to the net rent and the furniture charge too.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                Benefit cap
            </summary>
            <div class="details-accordion-content">
                <p>The DWP have announced that the benefit cap (overall level of combined benefits and credits a workless household (with no disability benefits) 
                can receive to around £384.62/week for lone parents/couples outside London, or £257.69/week for single people outside London) 
                will not be introduced nationally in April but are expecting it to be in place across the country by September, 
                we will update our information as we know more.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                Spare room subsidy exemption
            </summary>
            <div class="details-accordion-content">
                <p>For tenants to be exempt from the spare room subsidy, they must have been continuously entitled to housing benefit since 
                at least 1 January 1996 and occupied the same dwelling since that date, save for any period where a 
                fire, flood, explosion or natural catastrophe has rendered the property uninhabitable.</p>
                <p>These provisions apply if there has been a break in entitlement of no more than 4 weeks, or if there has been a break of entitlement of 
                no more than 52 weeks if the claimant or their partner is a welfare to work beneficiary.</p>
                <p>Note: it may be the case that the protection has been inherited by a tenant where they have succeeded a tenancy.</p>
                <p>The DWP are going to amend the regulations to remove this exemption. However, until the legislation is amended, 
                customers who meet the criteria are exempt from the spare room subsidy.</p>
                <p>An application form must be completed by the customer and returned to the benefits service.</p>
            </div>
        </details>
    </div>
</details>

`,
  { buttonLabel: "Welfare reform", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing Benefit",
      "Housing Benfit",
      "Housing Benifit",
      "Housng Benefit",
      "Housing Beneift",
      "Housin Benefit",
      "Housing Benefet",
      "Housng Benfit",
      "Housin Benifit",
      "Housing Benifits",
      "Welfare reform",
      "Wlfare reform",
      "Welfare refrom",
      "Welfar reform",
      "Welfare reforrm",
      "Welfere reform",
      "Welfare reformm",
      "Welfare reformz",
      "Welfer reform",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "05/11/2024", name: "Andy Walker" }
);

//#endregion CrossRegion

//#region Asset Management And Repairs

const adaptationChase = new ContentH(
  "adaptationChase",
  "Adaptation Chases",
  "Learn how to chase progress on adaptations and understand the permissions required for home improvements in Sheffield Council properties.",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Eligibility</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>If you are over £250 (Total Indebtedness) in arrears, your permission request is unlikely to be granted. 
      You must have written permission from the Housing Service to alter or improve your home. This includes:</p> 
    <ul>
      <li>Putting up any form of extension or building</li>
      <li>Adding to, changing, or replacing the fixtures, fittings, and appliances provided by us</li>
      <li>Altering essential gas, electricity, and water services</li>
      <li>Putting up a radio or television aerial or satellite dish</li>
      <li>Decorating the outside of your home</li>
      <li>Removing internal walls</li>
      <li>Insulation (Walls & Lofts)</li>
      <li>Conservatories (considered on an individual basis)</li>
    </ul> 
    <p>However, the following are highly unlikely to be granted due to extra maintenance costs and 
      potential structural problems:</p> 
    <ul>
      <li>Loft conversions</li>
      <li>Spiral staircases</li>
      <li>Swimming pools</li>
      <li>Extensions</li>
      <li>Stair lifts in communal areas</li>
    </ul> 
    <p>It is the customer's responsibility to seek and get any planning or building regulation approvals.</p> 
    <p>Every request for permission will be assessed using criteria and conditions appropriate to the particular request. 
      These criteria and conditions will be explained in the letter sent in reply to the customer's permission request.</p> 
    <p>We will take action against any installations that are in breach of Health and Safety regulations.</p> 
  </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Permission Requests</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Written permission requests should be referred in the first instance 
        (unless the customer is a Leaseholder or the permission request is for a mobility scooter) 
        to the appropriate Area Team at:</p> 
      <address> 
        Sheffield Council Housing Service<br> 
        PO Box 5967<br> 
        Sheffield<br> 
        S2 9GH 
      </address> 
      <p>If the permission request is for a mobility scooter, it should be referred to:</p> 
      <address> 
        Maintenance Partnership Unit (Permissions)<br> 
        PO Box 5967<br> 
        Sheffield<br> 
        S2 9GH 
      </address> 
      <p>If the customer is a Leaseholder, permission requests should be put in writing to:</p> 
      <address> 
        Leaseholder Services Team<br> 
        Floor 11<br> 
        Moorfoot Building<br> 
        Sheffield<br> 
        S1 4PL 
      </address> 
      <p>Once we have received your request, we will contact you to discuss it and, where necessary, 
        arrange a suitable time to visit your property. We will give you a decision within 21 days of receiving your request. 
        If we give you permission, you should carry out the work within 90 days and let us know when it is complete. </p> 
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Permissions and Your Tenancy Conditions</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Tenancy condition 47 states that:</p> 
      <ul>//jctest
        <li>You must ask for our permission, and you must not proceed until we give you our permission.</li>
        <li>We will confirm our answer in writing.</li>
        <li>If we refuse permission, we will explain why.</li>
        <li>If we give permission, we may attach additional conditions.</li>
        <li>We may withdraw our permission at any time if you do not comply with the conditions we have made.</li>
      </ul> 
      <p>We will take action against you and/or charge you for any costs incurred if you do not comply with parts a-e above.</p> 
    </div>
  </details>
  `,
  { buttonLabel: "Housing Adaptations Request", formName: "hou_adaptations" },
  { typeKey: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const adaptationOther = new ContentH(
  "adaptationOther",
  "Adaptation Other Request",
  "Understand the process for requesting permission to make adaptations to your Sheffield Council property, including restrictions and requirements.",
  `
    <h2>Tenant wants to make their own changes</h2> 

    <p>If you are over £250 (Total Indebtedness) in arrears, your permission request is unlikely to be granted. You must have written permission from the Housing Service to alter or improve your home. This includes:</p> 

    <ul> 
        <li>Putting up any form of extension or building</li> 
        <li>Adding to, changing, or replacing the fixtures, fittings, and appliances provided by us</li> 
        <li>Altering essential gas, electricity, and water services</li> 
        <li>Putting up a radio or television aerial or satellite dish</li> 
        <li>Decorating the outside of your home</li> 
        <li>Removing internal walls</li> 
        <li>Insulation (Walls & Lofts)</li> 
        <li>Conservatories (considered on an individual basis)</li> 
    </ul> 

    <p>However, the following are highly unlikely to be granted due to extra maintenance costs and potential structural problems:</p> 

    <ul> 
        <li>Loft conversions</li> 
        <li>Spiral staircases</li> 
        <li>Swimming pools</li> 
        <li>Extensions</li> 
        <li>Stair lifts in communal areas</li> 
    </ul> 

    <p>It is the customer's responsibility to seek and get any planning or building regulation approvals.</p> 

    <p>Every request for permission will be assessed using criteria and conditions appropriate to the particular request. These criteria and conditions will be explained in the letter sent in reply to the customer's permission request.</p> 

    <p>We will take action against any installations that are in breach of Health and Safety regulations.</p> 
  `,
  {
    buttonLabel: "Housing Adaptations Request",
    formName: "hou_adaptations",
  },
  { typeKey: "" },
  { typeKey: "repairs_and_investment_information_provided" },

  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const asbestos = new ContentH(
  "asbestos",
  "Asbestos",
  "Asbestos guidance for Sheffield Council properties, including identification, safety, removal procedures, and tenant responsibilities.",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>What is asbestos?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>Asbestos is the name given to a group of fibrous minerals which evolve naturally in the earth; these are found in many parts of the world.</p>
  </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Why was asbestos used in the past?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Asbestos fibres are strong, durable, resistant to heat and chemicals and provide thermal insulation; these properties are what led to its widespread use in the construction industry prior to the mid-1980s. It was also used in vehicles, domestic goods, and industrial items.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Where is asbestos likely to be found?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Asbestos is most likely to be found in buildings constructed before the mid-1980s. Typical places inside your home where asbestos may be found are:</p>
      <ul>
        <li>Artex / textured coatings</li>
        <li>Floor tiles and Linoleum products</li>
        <li>Pipe boxing</li>
        <li>Bath panels</li>
        <li>Fire / Heater panels</li>
        <li>Service ducting panels</li>
        <li>Heating and Fuse board cupboards</li>
        <li>Sink Pad (Bitumen based product)</li>
        <li>WC Cisterns</li>
      </ul>
      <p>Typical areas outside your home where asbestos may be found are:</p>
      <ul>
        <li>Roof tiles</li>
        <li>Rainwater pipes and gutters</li>
        <li>Soffits & Fascias</li>
        <li>Garage / Outbuilding roofs</li>
      </ul>
      <p>Asbestos may also be found in some household goods such as oven gloves, ironing boards, fire blankets, etc.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What does asbestos containing material look like?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>It is difficult to tell if something contains asbestos just by looking at it, unless it is labelled. If in doubt, you should assume that a material contains asbestos until it is confirmed otherwise. The only way to be absolutely sure is by getting it tested in a laboratory. However, we do not have to send samples to a laboratory; we can presume it is asbestos and then take all safety precautions when working on the material by using trained workers or licensed contractors.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What should I do if I think there may be asbestos in my home?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>You don’t need to do anything unless you suspect the asbestos may have been damaged, disturbed, or is in poor condition. Generally, if it is in good condition and cannot be easily damaged or disturbed, it is best to leave it alone, as removal can lead to the release of higher levels of fibres in the air for some time.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What should I do if I accidentally damage or disturb it?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>If you discover or damage asbestos-containing material (ACM), exit the room, ensuring no one else enters. Do not attempt to repair the damage or clear up any debris using a brush or domestic vacuum cleaner, as this will release fibres into the air.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What is the Council Housing Service doing to manage asbestos?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>We are carrying out asbestos surveys to all our properties and recording all the information. This includes the type of asbestos found, the location and condition, and any recommended actions (i.e., to remove the asbestos-containing material or to leave it in place and manage it). Where asbestos is identified as requiring removal, we will use specialist contractors to carry out this work. As part of this survey, we also record where no asbestos is found.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Will you remove asbestos if found in my property?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>We will only remove asbestos from your home if it is found to be in poor condition or damaged, as it is generally best practice to leave it in place and manage it if it is in good condition. Removal creates a greater risk of releasing fibres into the air and possible exposure.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Why do I need an asbestos survey?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>We need to carry out a survey to identify any asbestos-containing materials within your home, as we have a legal duty to provide this information to the contractors we use to carry out repairs or modernization works. The survey also helps us keep accurate records of where asbestos is located in your home.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>When will a survey be carried out on my home?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The Council Housing Service has been conducting asbestos surveys on our properties as part of a rolling program since 2004. Your home may have already been surveyed, but if not, it will be programmed in the near future.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Who will carry out the survey?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The Council Housing Service works with survey contractors called Tersus. For asbestos removal, we work with contractors called Rilmac and E4 Environmental.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>How do I get a copy of my survey?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Where a survey has been carried out, the Council Housing Service will send copies to tenants. If you need a report sooner, you may request a copy at your local Area Housing Office or First Point. We are also working towards making the reports accessible on the Council Housing Service website in the near future.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What should I do if I want to carry out works to my property?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>If you are planning home improvements (with permission) and think you may have asbestos in your home, we can check our records and tell you if any asbestos is present or arrange for a survey to be carried out.</p>

      <h2>General things to remember before carrying out DIY:</h2>

      <ul>
        <li>Do not drill, saw, scrub, or sand anything you think may contain asbestos.</li>
        <li>Keep activities to a minimum in areas where material may contain asbestos.</li>
        <li>Do not dust, sweep, or vacuum debris that may contain asbestos.</li>
        <li>Take every precaution to avoid damaging asbestos material or asbestos-containing products.</li>
        <li>Always wear a protective face mask if you are doing any DIY work.</li>
        <li>Soak wallpaper before removing it; if possible, use a steam stripper and gently peel away the paper before re-decorating.</li>
        <li>Don’t try to remove old floor tiles or linoleum. Leave them in place and lay new floor coverings over them.</li>
      </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Am I at risk?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Asbestos is only a risk to health if the fibres become airborne and are breathed into the lungs. The fibres breathed in could lead to asbestos-related diseases. Although the body’s natural defences can break some of these particles down, others may stay in the lungs for a long time. Asbestos-containing products in good condition do not represent a significant risk unless they are damaged or abraded and should be left undisturbed.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>What should I do if I think I have been exposed to asbestos?</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>If you think you may have been exposed, you may wish to discuss your concerns with your doctor.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Asbestos Resurveying Programme</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The Asbestos Resurveying Programme is ongoing and may be for any of the following reasons:</p>
      <ul>
        <li>Surveys carried out pre-2010 have presumed asbestos items, and we now need to know whether asbestos is present or not.</li>
        <li>Contractors have removed asbestos as part of Decent Homes and provided feedback.</li>
        <li>Contractors are asking for more detailed surveys to carry out more intrusive work.</li>
        <li>There is no survey for that property.</li>
      </ul>
      <p>Prior to surveying, tenants will be contacted by letter, phone call, or text. The letter explains that Tersus Consultancy is our appointed contractor.</p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Asbestos Removal Programme</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>The Asbestos Removal Programme is a 3-year programme and covers approximately 800 properties. The removal is mainly linked to district heating pipes that are not easily accessible due to asbestos panels. All affected properties will receive letters in batches of up to 20 per month.</p>
      <p>Prior to work commencing, all properties will be surveyed by the contractor to reconfirm what will be removed. Please note, work may require the tenant to vacate the property on the day of removal.</p>
      <p>Letters will start going out to customers from August 2017, with further letters going out in the following months. The letter explains that Rilmac Insulation has been appointed as a contractor and will be contacting customers soon.</p>
    </div>
  </details>

  `,
  {
    buttonLabel: "Raise Housing Decant Enquiry",
    formName: "hou_sustainment_decants",
  },
  { typeKey: "" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const carbonMonoxide = new ContentH(
  "carbonmonoxide",
  "Carbon Monoxide/ What is CO Poisoning",
  "Learn about carbon monoxide poisoning, its symptoms, causes, and immediate actions to take for safety and health.",
  `
  <h3>What is CO Poisoning?</h3>
  <p>
    Unsafe gas appliances can produce a highly poisonous gas called carbon monoxide (CO). 
    It can cause death as well as serious long-term health problems such as brain damage. 
    CO is produced by the incomplete burning of natural gas or liquefied petroleum gas (LPG). 
    This happens when a gas appliance has been incorrectly fitted, badly repaired, or poorly maintained. 
    It can also occur if flues, chimneys, or vents are blocked. Oil and solid fuels such as coal, wood, petrol, 
    and oil can also produce carbon monoxide.
  </p>

  <h3>Remember the Six Main Symptoms to Look Out For</h3>
  <ul>
    <li>Headaches</li>
    <li>Dizziness</li>
    <li>Nausea</li>
    <li>Breathlessness</li>
    <li>Collapse</li>
    <li>Loss of consciousness</li>
  </ul>

  <h3>What to Do if You Suspect CO Poisoning?</h3>
  <p>
    Get fresh air immediately. Open doors and windows, turn off gas appliances and leave the house. 
    See your doctor immediately or go to the hospital - let them know that you suspect CO poisoning. 
    They can do a blood or breath test to check.
  </p>
  <p>
    If you think there is an immediate danger, call the Gas Emergency Helpline on <a href="tel:0800 111999">0800 111999</a>.
  </p>
  <p>
    Alternatively, if there is no immediate danger you can call the repairs team on <a href="tel:0114 2735555">0114 2735555</a>

`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const communalAerials = new ContentH(
  "communalAerials",
  "Communal Aerials",
  "Find information on communal aerials and maintenance policies, including guidelines for privately-owned aerials.",
  `
  <h3>Communal Aerials List</h3>
  <p>
    <a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Communal%20Aerials.aspx" target="_blank">Communal aerials list</a>
  </p>
  <p>
    You can contact the repairs service for communal aeriels on: <a href="tel:0114 2735555">0114 2735555</a>
  </p>
  <h3>Customers Own Aerial</h3>
  <p>
    This is not a Council Housing Service aerial. We do not offer a maintenance service for customer’s own aerials.
  </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const communalAreas = new ContentH(
  "communalAreas",
  "Communal Areas",
  "Learn about maintenance and responsibilities for communal areas, including bin chutes, fences, and safety measures.",
  `
  <h3>Blocked Bin Chutes</h3>
  <p>
      Bin chutes in Council flats or maisonettes may become blocked and will be unblocked upon request.<br>
      Check the 
      <a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Blocked%20Chutes.aspx" target="_blank">Blocked bin chutes list</a>
    </p>

    <h3>Fences</h3>
    <h4>New Fence</h4>
    <p>
      Installation of fences is the tenant's responsibility. The customer will need to have permission to install a new fence. See "Permissions" section.
    </p>

    <h4>Repair to an Existing Fence</h4>
    <p>
      The Council does not repair tenants' fences. It is the tenant's responsibility.
    </p>

    <h4>Fallen Fence to be Removed</h4>
    <p>
      Estate Services teams will only remove blown down fences if they are a safety hazard.
    </p>
  `,
  {
    buttonLabel: "Raise Housing Enquiry ",
    formName: "hou_estates_enquiry",
  },
  { typeKey: "" },
  { typeKey: "estates_and_environmental_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
      "blocked",
      "bin",
      "bins",
      "chute",
    ],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

// Communal fire safety is in the cross region section at the top of the area

const decants = new FormH(
  "decants",
  "Decants",
  "Request a decant due to asbestos, infestation or linked to a previously reported repair.",
  "hou_sustainment_decants",
  {
    type: "Enquiry",
    keywords: ["Decant", "Housing", "Asbestos", "Repair", "Infestation"],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const districtHeating = new ContentH(
  "districtHeating",
  "District Heating",
  "Learn about District Heating charges, including usage, standing, unmetered, and sheltered service costs.",
  `
  <h3>A Usage Charge - 3.04 pence per Kwh</h3>
  <p>
    This is for the heat and hot water used within the property.
  </p>

  <h3>A weekly Standing Charge - £4.80 per week</h3>
  <p>
    £4.80 per week from 1/4/2021 (previously £4.20 per week)
    Tenants pay the Standing Charge via their rent account.
  </p>

  <h3>District Heating (heat and hot water)</h3>
  <p>
    Replacing your current weekly district heating heat and hot water charge of £11.81 per week
  </p>

  <h3>Unmetered Heating Surcharge: £7.00</h3>
  <p>
    The current weekly Unmetered District Heating Surcharge will remain the same (£7.00 per week).
  </p>

  <h3>District Heating Unmetered Hot Water - £1.38</h3>
  <p>
    Replacing your current weekly District Heating Unmetered Hot Water charge of 69p per week.
  </p>

  <h3>Sheltered Service Charge: £11.03</h3>
  <p>
    Replacing your current weekly Sheltered Service charge of £10.38 per week (a 65p increase per week towards Communal Area Heating).
  </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const doorEntrySystems = new ContentH(
  "doorEntrySystems",
  "Door Entry Systems",
  "Learn about door entry systems for flats, how they enhance security, their functionality, and the installation process.",
  `
    <details class="accordion">
  <summary class="accordion-header">
    <h3>What is a Door Entry System and Why is it Necessary?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      We are carrying out work to improve security to the block of flats where you live. Our door entry system can help prevent unauthorized or unwanted access into the communal areas of your flats.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How Does the System Work?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>Once the system has been installed, the entrance doors are locked, and access into the block will be controlled.</li>
      <li>Residents can access the block through the main door using either a door key or electronic fob.</li>
      <li>Tradespeople can access the block at certain times of the day using a push button on the door intercom panel marked as “trades.”</li>
      <li>A visitor presses the call button for the flat they wish to visit. The handset in your flat will ring for a set period of time. When you answer the call, you can have a conversation with the visitor. If you then want to allow the person in, you can press the button on the handset to release the lock on the main entrance door.</li>
      <li>If you do not want to let the visitor in, you can replace the handset and finish the call.</li>
      <li>Visitors’ access to the block can only be granted by a resident pressing the door release button on the door entry handset.</li>
    </ul>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How Can I Stop Nuisance Calls Coming Through on My Door Entry Phone?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      If this happens, you can turn off the handset using the “privacy button.” When this is used, a red light will illuminate on the phone to show that the door entry calls are switched off. The privacy facility resets itself after a fixed period of time (red light goes off) so that the handset isn’t left switched off and a genuine visitor is prevented from contacting the resident they wish to visit.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How do I Know That the Main Entrance Door is Secure When I Am in My Home?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The door entry system is set up to monitor the main entrance and will tell you if the door is open or closed. 
      If the main entrance is left open, a green light will show on your door entry phone. 
      When the main entrance door is closed, the green light goes out.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How do the post, milk, and newspapers delivery people gain access into the block during the day?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      A “trades” button is provided on the door entrance panel next to the main entrance to your block.
      This button is set up to work at certain times of the day (time clock controlled). 
      When active, the button can be used by tradespeople to gain access into the block through the main door. 
      The times are set up in consultation with residents to suit the requirements of each particular block of flats.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How do the emergency services gain access?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The system includes an emergency switch next to the main door. 
      The emergency services can use this switch, operated by a special key, to gain access in an emergency.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>What work is involved in installing the door entry system?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>A door entry telephone handset will be put in your home; usually, it will be placed in your hallway or near the door.</li>
      <li>A door entry panel will be put next to the main entrance to your block of flats. Each flat will have its own button visitors can use to ring the flat that they wish to visit.</li>
      <li>We will put an electronic lock on the main entrance. Each resident’s door entry handset has a push button which operates the release of the door and allows visitors to enter into the block.</li>
      <li>Most of the work will take place in the communal areas.</li>
      <li>We will only need access to your home to fit the door entry handset and to check the system is working.</li>
      <li>An external light will be fitted above the entrance door to each block of flats if there isn’t already one in place. A survey will be carried out before the work starts to look at lights, and in some cases, existing lights may be replaced.</li>
    </ul>
  </div>
</details>

  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const emergencyCredit = new ContentH(
  "emergencyCredit",
  "Emergency Credit",
  "Understand the emergency credit feature for your meter, how to activate it, and its repayment requirements for continued use.",
  `
      <p>
        The meter has an emergency credit facility. This allows the customer to ‘borrow’ credit up to £10.00 which will 
        reconnect the heat and hot water supply. This is simply a loan, and must be paid back in full before 
        the system can be used again. 
        The emergency credit facility becomes available when the meters credit value reaches £1.00 or less. 
        To activate, press the blue button marked Press For Em Credit.</p>

        <p>PLEASE NOTE: that this should only be used in emergency situations where the customer cannot top-up
        before the remaining credit is due to expire."
      </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const emergencyRepairs = new ContentH(
  "emergencyRepairs",
  "Emergency Repairs",
  "Learn how to handle emergency repairs, including gas leaks, equipment issues, and out-of-hours emergencies, with relevant contact numbers.",
  `
  <h3>Gas Leak</h3>
  <p>
    If you smell gas or are worried about gas safety, call National Grid on <a href="tel:0800 111999">0800 111999</a>  at any time, day or night.
  </p> 

  <h3>Contact Equipment and Adaptations Teams</h3> 
  <p>
    Please contact the Equipment and Adaptations number.
    </p> 

  <h3>Out of Hours Emergency Contacts</h3> 
  <p>
    If you have an emergency outside normal working hours, at weekends, or Bank Holidays, please phone:
  </p> 

  <ul>
    <li><a href="tel:0114 2735555">0114 2735555</a> (after 8pm) for burst pipes, boarding up doors and windows, no electricity supply, and all heating breakdowns. This number will divert to Out of Hours Repairs service.</li> 
    <li><a href="tel:0800 111999">0800 111999</a> for gas leaks.</li> 
    <li><a href="tel:0114 2737693">0114 2737693</a> for lift breakdowns.</li> 
  </ul>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const homeImprovementRequests = new ContentH(
  "homeImprovementRequests",
  "Home Improvement Requests",
  "Understand the process for requesting permission for home improvements to the District Heating Network and associated responsibilities.",
  `
  <p>
    Please Call the Repairs Policy and Improvement Team (RPIT) on <a href="tel:0114 2052615">0114 2052615</a> for permission requests to carry out work/home 
    improvements to the District Heating Network i.e. replacing radiators. Required 
    maintenance to resolve unauthorised work to the District Hearting network will be invoiced to the tenant/homeowner.
  </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const homeownerDisconnection = new ContentH(
  "homeownerDisconnection",
  "Homeowner Disconnection",
  "Learn about the disconnection process and charges for homeowners on the District Heating network.",
  `
  <p>
    Please call the Home Ownership and Revenues Unit on <a href="tel:0114 2735595">0114 2735595</a> for further 
    information on homeowner requests regarding disconnection from the District Heating network. 
    Disconnection charges apply as referenced in the property’s sale conveyance. 
    SCC properties will not be disconnected from the District Heating network.
  </p>
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const inspectionRequest = new FormH(
  "inspectionRequest",
  "Request inspection",
  "Request inspection of tenants own aids and adaptations or a general repair.",
  "hou_inspection_request",
  {
    type: "Request",
    keywords: ["Inspection", "Adaptation", "Repair", "Alteration", "Aid"],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const loststolenkeys = new ContentH(
  "lostStolenKeys",
  "Lost Stolen Keys and Lock Repairs",
  "Find details on lost or stolen keys, lock repairs, and replacement fob charges for council housing.",
  `
   <h3>Lost Keys</h3>
    <ul>
      <li>A charge of £5 for lost or stolen keys.</li>
      <li>Locks will only be replaced if the customer agrees to the charge or provides a valid crime reference number.</li>
      <li>Exceptions apply for elderly or vulnerable individuals.</li>
    </ul>

    <h3>Replacement Fobs</h3>

    <ul>
      <li>Costs £10 (communal keys: £5).</li>
      <li>Can be purchased at local housing offices with ID.</li>
    </ul>

    <h3>Area Housing Offices</h3>
    <p>
      Please note: Howden House only deals with Rehousing enquiries and will not be able to help with fobs or keys. 
      List of Area Offices:  <a href="https://www.sheffield.gov.uk/council-housing/neighbourhood-offices "target="_blank">https://www.sheffield.gov.uk/council-housing/neighbourhood-offices</a>
    </p>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Neighbourhood%20offices\`
    "
>
    Send link to review further information
</button>

  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const newAndExistingRepairs = new ContentH(
  "newAndExistingRepairs",
  "New and Existing Repairs",
  "Information for leaseholders on repair responsibilities within their flats and shared areas, including service charge details for communal repairs.",
  `
  <h3>Leaseholder Repairs</h3> 
  <p>
    You are responsible for repairs within your own flat or home, and should make your own arrangements for these.
    If you, or someone you have employed, are carrying out repairs inside your flat, 
    you must make sure that no damage is done to communal areas or to the structure of the building. 
    You are liable for any damage caused to the building as it is owned by Sheffield City Council, 
    and you will have to pay for any such damage. This includes any damage caused by visitors or other members of your household. <br><br>
    
    Sheffield City Council will continue to carry out all external fabric and communal/shared 
    repairs to the block in which you live. You do not have the authority to carry out repairs in shared areas, 
    and you would not be covered by Sheffield City Council insurance if you had an accident or caused any damage. 
    Only Sheffield City Council may carry out this type of work.<br><br>

    Leaseholders receive a service charge bill each year for their proportion of the cost of carrying out external fabric 
    and communal/shared repairs to the block in which they live.
  </p> 
  `,
  {
    buttonLabel: "Raise Housing Decant Enquiry",
    formName: "hou_sustainment_decants",
  },
  { typeKey: "" },
  { typeKey: "repairs_and_investment_information_provided" },

  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const payment = new ContentH(
  "payment",
  "Payment",
  "Details about payment options, including Pay As You Go, Budget Plan Direct Debit, replacing cards, and accessing money-saving advice for heat and hot water usage.",
  `
<p> 
  New tenants will initially be issued with a Pay As You Go card, however they will be supplied with a 
  Budget Plan Direct Debit mandate in their new tenancy welcome information pack and in addition a copy 
  of the Budget Plan information and Direct Debit mandate will be posted separately.
</p>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Payment</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      New tenants will initially be issued with a Pay As You Go card, however they will be supplied with a 
      Budget Plan Direct Debit mandate in their new tenancy welcome information pack and in addition a copy 
      of the Budget Plan information and Direct Debit mandate will be posted separately.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Budget Plan Scheme</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      This is a prepayment method which allows the customer to pay for heating by making set monthly Direct 
      Debit instalments based on anticipated usage. Monthly instalments would then be periodically adjusted 
      to reflect the actual heat and hot water used in the property. Please call Home Ownership and Revenues 
      Unit on <a href="tel:0114 2735595">0114 2735595</a>
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Methods of Payment</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      New tenants will initially be issued with Pay As You Go information/number, however they will be supplied 
      with a Budget Plan Direct Debit mandate in their new tenancy welcome information pack and in addition a 
      copy of the Budget Plan information and Direct Debit mandate will be posted separately. If the customer 
      wishes to amend the method by which they pay for the heat they use, please call Home Ownership and Revenues 
      Unit on <a href="tel:0114 2735595">0114 2735595</a>
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Replace Pay as you go Card</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The meter has an emergency credit facility. This allows the customer to ‘borrow’ credit up to £10.00 
      which will reconnect the heat and hot water supply. This is simply a loan and must be paid back in full 
      before the system can be used again. The emergency credit facility becomes available when the meters 
      credit value reaches £1.00 or less. To activate, press the blue button marked. If the customer has used 
      all the emergency credit and is still unable to afford to top-up, please call the Home Ownership and 
      Revenues Unit on <a href="tel:0114 2735595">0114 2735595</a>.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Money Saving Advice</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      Please call Home Ownership and Revenues Unit on <a href="tel:0114 2735595">0114 2735595</a>
    </p>
  </div>
</details>
`,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const programmedWorks = new ContentH(
  "programmedWorks",
  "Programmed Works",
  "",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Electrical Upgrade</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>Aims to modernize electrical standards in council-managed housing by 2024.</li>
      <li>Will cover over 20,000 dwellings with potential investments of £40-45 million.</li>
      <li>Includes upgrades such as installation of isolation switches, replacement of consumer units, improved socket spread, smoke alarms, and carbon monoxide detectors.</li>
      <li>Work will be conducted in batches of 250-300 properties with a target of 60 completed properties per week.</li>
    </ul>

    <details class="details-accordion">
      <summary>Background</summary>
      <div class="details-accordion-content">
        <p>Installation of fences is the tenant’s responsibility.
        Over the last 12 years considerable investment has been made in the housing stock via the Decent Homes programme and other programmes. This has included some elements of electrical work particularly within bathrooms and kitchens. However, enhancing the overall electrical standard in homes / communal facilities was not a key requirement of the Decent Homes programme or for properties to achieve the government decent homes standard.</p>

        <p>Consequently, whilst the electrical condition of the stock is fair / good, there remain improvements required to provide a modern-day standard that will keep customers safe, contribute to digital inclusion, meet existing and future legislative standards and contribute to reducing the carbon footprint by providing energy efficient products.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>What will be included within the Electrical Upgrade Programme?</summary>
      <div class="details-accordion-content">
        <p>The aim of this programme is to bring all properties over time up to a modern-day electrical standard and move towards an electrical periodic test every 5 years as recommended by the National Council for Electrical Installation Contracting (NICEIC).</p>

        <p>Work will be released in batch orders of approximately 250 to 300 dwellings but on a geographical basis to enable the contractor(s) and the contract administrator to work efficiently. Once fully underway, 60 properties per week for each contractor will be completed. This programme will include the following:</p>

        <ul>
          <li>Install Isolation Switch (where necessary)</li>
          <li>Carry out an initial periodic condition test and report</li>
          <li>Replace consumer units (where necessary only) to provide improved RCD protection and safety for residents</li>
          <li>Address Category 1, 2, and 3 issues identified by the periodic test</li>
          <li>Ensure earth bonding is adequate (where necessary)</li>
          <li>Install earth wiring to lighting circuits (where necessary)</li>
          <li>Install additional sockets and/or improve the spread of sockets including 2 USB equipped sockets</li>
          <li>Install hard-wired smoke alarms</li>
          <li>Install carbon monoxide detectors – risk-based approach</li>
          <li>Replace bathroom light fittings which are difficult to access to replace bulbs</li>
          <li>Install external lighting to houses, bungalows & flats (where no communal lighting presently exists)</li>
          <li>Carry out a final periodic test (if further work is carried out) to verify all electrics are operating correctly</li>
          <li>Not every dwelling will require all the above work.</li>
        </ul>

        <p>The list above is a menu of activity which will be undertaken as required.</p>

        <p>Isolation switches allow the dwelling to be worked upon safely by electrical engineers. During the Decent Homes programme, thousands of isolation switches were installed, but we do not have full coverage. The upgrade project will enable us over time to install an isolation switch to every property.</p>

        <p>Consumer unit specifications change regularly, and in certain cases, we are not offering the most ideal protection. This project will ensure consumer units are suitable, up-to-date, and offer the best protection to our residents.</p>

        <p>Category 1 & 2 issues identified from the periodic test will be rectified. Category 3 issues will be rectified based on a cost/benefit analysis.</p>

        <p>Earth bonding is very often disrupted as a result of other works. This project will ensure that earth bonding is maintained and is effective.</p>

        <p>Earth wiring to lighting circuits will be installed, enabling residents to use metal lighting accessories safely. At present, metal accessories have to be removed if found for Health & Safety reasons.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Meeting Modern Day Standards - Additional Sockets and/or spread of sockets</summary>
      <div class="details-accordion-content">
        <p>Due to the age of the stock many of the dwellings do not have sufficient sockets or a sufficient spread of sockets which meet customer needs and the increasing use of technology in the home which leads to the overuse of trailing cables or socket extension leads. This can lead to Health and Safety issues. The Decent Homes programme did provide some improvements especially in kitchens but there is still work to do in many dwellings to improve the socket provision. There is no current programme to cover this work.</p>

        <p>Evidence from the teams working on the ground indicates that customer DIY work to electrics is putting residents at risk. For example, the erection of external lighting in response to security concerns, additional sockets not installed by a qualified installer, surface mounted sockets and trailing cables.</p>

        <p>Hard Wired Smoke Alarms - There is around 10,000 hard wired smoke alarms within the stock. All high risk properties such as sheltered, and towers have hard wired smoke alarms with the exception of Deer Park tower blocks. This block needs to be addressed ASAP in response to recommendations from South Yorkshire Fire and Rescue Service.</p>

        <p>Additionally properties that are rewired always have hard wired alarms installed at the same time as it is part of the rewire specification. Legislation does not currently insist we install hard wired to all dwellings managed by Housing Services, but it may do in near future as there is national lobbying to government by the Fire Service. Hard wired alarms are part of the building regulations for new build. In the meantime, we have battery smoke alarms within the remaining stock which are checked annually by the gas and district heating servicing programmes.</p>

        <p>Carbon Monoxide Detectors - There are very few carbon monoxide detectors within the stock as a whole. Once again, the legislation surrounding carbon monoxide detectors does not insist on their use but increasingly there is recommendation for their use in general housing stock. Carbon Monoxide detectors are part of the building regulations for new build. It is recommended that the housing service installs Carbon Monoxide detectors on a risk-based approach at the same time as other electrical improvement work and / or when hard wired smoke alarms are installed. There is no current programme.</p>

        <p>Replacing bathroom light fittings which are difficult to access – since the new requirement for bathroom light fittings were introduced approx.10 to 12 years ago tenants have had difficulty removing the cover and changing the light bulbs. Some of the fittings are particularly difficult to access. This programme will identify these fittings and replace with a more suitable unit. The unit will be LED.</p>

        <p>External Lighting – A report from Birmingham University presented to the Burglary Theme Group in 2014 provided evidence that external lighting can reduce the incidence of burglary and is the most effective of all the crime reduction measures that can be applied to a home including burglar alarms. Including this work as part of an upgrade project will present tenants with a safer environment in which to live.</p>
      </div>
    </details>
  </div>
</details>

  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const propertyAge = new ContentH(
  "propertyAge",
  "Property Age",
  "Access detailed information about property age and related data.",
  `
  <p>
    <a href="https://sccextranet.sharepoint.com/:x:/s/CustomerServiceKnowledgeCouncilHousing/ESm4Dds9S6pAq3ChaiPPEH8BNQtMLmygyOEvErvW2ISK2A?e=Qkq084"target="_blank">Property Age</a>
  </p>
  
  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const refunds = new ContentH(
  "refunds",
  "Refunds",
  "Learn about Pay As You Go refund eligibility for vacated properties and the process for requesting a refund.",
  `
  <p>
    Pay As You Go refunds are not made unless the tenant has vacated the property.<br>
    Once their rent account has been closed, customers are entitled to a full refund as long as their remaining 
    Pay As You Go balance is £10.00 or greater please ask the tenant to call Home Ownership 
    and Revenues Unit on <a href="tel:0114 2735595">0114 2735595</a> once their rent account has been closed. 
  </p>
  `,
  { buttonLabel: "Report Rents Refunds ", formName: "hou_rents_refunds" },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const noHeatNoWater = new ContentH(
  "noHeatNoWater",
  "Report no heat or hot water",
  "Find out steps to restore heat and hot water, activate emergency credit, and reboot the meter if necessary, or contact Repairs for further assistance.",
  `
  <p>
    To access a supply of heat and hot water please follow the simple steps below: 
  </p>
  <ol> 
    <li>Does the property have an electricity supply? They will not have access to heat and hot water without it. The customer will need to Dial 105 or visit <a href="https://www.findmysupplier.energy "target="_blank">https://www.findmysupplier.energy</a> to find their current supplier. 
    <br>
   
    <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Find%20My%20Supplier\`
    "
>
    Send link to review further information
</button>

 </li>
    <li>
      The District Heating Meter location may vary but is usually located in the property airing cupboard. Does The Meters Home Screen say ON in the top right corner? Is your heating programmer turned on?
    </li>
    <li>  
      To activate an emergency credit, press the blue button, marked ‘Press For Em Credit’ as instructed by the meters home screen. 
      This will allow the tenant to ‘borrow’ credit up to £10.00 which will connect your heat and hot water supply for a short time. 
      This is simply a loan and will need to be repaid on receipt of the prepayment information/number which will be with them shortly.<br>
      <strong>Advisor note</strong>: If the tenant has already reached the £10.00 limit and needs additional funds they can contact the Home Ownership and Revenues Team on: <a href="tel:0114 2735595">0114 2735595</a>.
      This is a public number and has voicemail if the team is unavailable. They can also be contact by email at: <a href="mailto:RDH@Sheffield.gov.uk">RDH@Sheffield.gov.uk</a>
    </li>
    <li>
      If the Meters screen in blank or shows something similar to ‘D bug’ then the customer can reboot the G6 unit by pressing the blue and orange button together for 10 seconds.
    </li>
    <li>  
      If the reboot is unsuccessful or for any other repair, please call the Repairs line on <a href="tel:0114 2735555">0114 2735555</a>
    </li>
  </ol>

  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_information_provided" },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "17/03/2025", name: "Nathan Smith" }
);

const tenantsOwnImprovements = new ContentH(
  "tenantsOwnImprovements",
  "Tenant's own improvements",
  "Learn about compensation for tenant-made improvements, the claims process, and how to receive reimbursement for eligible home upgrades.",
  `
    <details class="accordion">
  <summary class="accordion-header">
    <h3>What we will pay compensation for?</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>New central heating systems and extra fires, radiators or thermostatic valves</li>
      <li>Up to 5 new kitchen units and making the kitchen larger</li>
      <li>New bathroom suites, showers or moving a bathroom upstairs</li>
      <li>New windows to replace metal ones or wooden ones put in before 1946, and double glazing</li>
      <li>Garages, car ports, hard standings, porches, conservatories and extensions</li>
      <li>Loft insulation, cavity wall insulation and extra electrical fittings</li>
    </ul>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How much you will get</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      The amount of compensation depends on how long ago you did the work, the quality of the work and its condition.
      When you claim, someone will visit to see the improvement and we will work out your payment on a sliding scale,
      taking account of its age and condition.
    </p>
  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>How to claim</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>
      Complete the Tenants' Compensation Scheme form and send it to us as soon as you’ve told us you are leaving.
      If you want to claim for more than 3 improvements, please put the extra details on another form or a blank sheet
      and attach it to the main claim form. You can also get claim forms from Neighbourhood Offices and First Points.
    </p>

    <p>
      When you claim, please send all the receipts for the work you have done with your form.
      This will help us pay you easily and quickly.
    </p>

    <p>
      You can claim when you give notice to leave the property you have improved.
      You can’t claim before then or more than 2 months after leaving.
    </p>

    <p>
      The Repairs team will only discuss the improvements claim after the form in the leaflet has been completed and
      sent back to us.
      Customer's Email Address
    </p>
  </div>
</details>

  `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "10/10/2024", name: "George Whitehouse" }
);

const assetManagementAndRepairs = new MenuH(
  "assetManagementAndRepairs",
  "Asset Management And Repairs",
  "Information on asset management, including asbestos, carbon monoxide, communal areas, district heating, emergency repairs, and various home improvement services.",
  [
    adaptationChase,
    adaptationOther,
    asbestos,
    carbonMonoxide,
    communalAerials,
    communalAreas,
    communalFireSafety,
    decants,
    districtHeating,
    doorEntrySystems,
    emergencyCredit,
    emergencyRepairs,
    homeImprovementRequests,
    homeownerDisconnection,
    inspectionRequest,
    loststolenkeys,
    newAndExistingRepairs,
    noHeatNoWater,
    payment,
    programmedWorks,
    propertyAge,
    refunds,
    tenantsOwnImprovements,
  ]
);

//#endregion Asset Management And Repairs

//#region Estates and Environments

const communalCupboard = new ContentH(
  "communalCupboard",
  "Communal Cupboard and Meter Box Cupboard",
  "Learn how to access meter box and communal cupboards, including key types and where to obtain them for property and communal areas.",
  `
    <p>
      Meter box cupboard can be inside or outside of the property and the keyhole
      will be triangular in shape. These will need to be purchased from a hardware
      store as we cannot provide one.
    </p>
    <p>
      If the keyhole is not triangular then it is likely to be cupboard in the
      communal area. These cupboards may contain more than one gas/electric meter
      and they mostly require a T1 or an L Key that is held in the local Area office.
    </p>
    <p>
      You can check the barrel of the lock for the code to provide to the Area office which can
      speed up the process as they will know which key is required.
    </p>
    <p>
      <strong>Advisor Note:</strong> Use the form below to request a communal cupboard key if required.
    </p>
  `,
  { buttonLabel: "Raise enquiry", formName: "hou_estates_enquiry" },
  { typeKey: "estates_and_environmental_transferred_to_service" },
  { typeKey: "estates_and_environmental_information_provided" },
  {
    type: "Housing",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "17/03/2025", name: "Nathan Smith" }
);

// Communal fire safety is in the cross region section at the top of the area

const fencesCouncilHousing = new ContentH(
  "fencesCouncilHousing",
  "Fences (Council Housing)",
  "Understand tenant responsibilities for fence installation, repairs, and removal, including when Council services may intervene for safety hazards.",
  `
    <h3>New Fence</h3>
    <p>
      Installation of fences to a house is the tenants responsibility. The customer will need
      to have permission to install a new fence. However, if it is on communal land or a pathway it will need to go through the estates team by completing the form below.
    </p>
    <h3>Repair to an Existing Fence</h3>
    <p>
      The Council do not repair tenants' fences. It is the tenant's responsibility. However, if it is on communal land or a pathway it 
      will need to go through the estates team by completing the form below.
    </p>
    <h3>Fallen Fence to be Removed</h3>
    <p>
      Estate Services teams will only remove blown down fences if they are a safety
      hazard.
    </p>
    <h3>Requesting permission for a fence</h3>

<a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/hou_sustainment_perm?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&sel_permission_about=New permission request&sel_permission_type=Erect a fence">Request permission to erect a fence</a>
  `,
  { buttonLabel: "Report Housing Fences", formName: "hou_sustainment_fence" },
  { typeKey: "" },
  { typeKey: "estates_and_environmental_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const gardenPledgeScheme = new ContentH(
  "gardenPledgeScheme",
  "Garden Pledge Scheme",
  "Learn about the discontinuation of the Garden Pledge Scheme, alternative gardening services, and where to find reliable tradespeople for garden maintenance.",
  `
    <p>
      The Garden Pledge Scheme <strong>ceased</strong> to operate in <strong>April 2023</strong> as highlighted below
    </p>
    <p>
      Due to substantial financial pressures within the Housing Revenue Account, we
      have unfortunately had to consider reducing or stopping some services to
      customers in order to invest in others. Last year the Garden Pledge Scheme was
      put forward as a potential saving and following full Council on 20th February
      2023 a decision was taken by Members to end this service on the 31st of March
      2023.
    </p>
    <p>
      This means that the annual garden visits that customers currently on the
      scheme receive will not continue. If you haven’t already you will shortly
      receive a letter with further information and containing details about third
      party organisations who may be able to offer support with your garden, please
      note that these organisations may charge for their services and are not linked
      to Sheffield City Council in any way.
    </p>
    <p>
      We appreciate this decision will be disappointing to you and that you may have
      questions.
    </p>
    <p>
      List of Gardening Services:
      <a
        href="G:\CEX\Corp Res\CS-Gen\Contact Centre\CRM Spreadsheets\Estates\Garden\Alternative Garden Services List.xls"target="_blank">Alternative Garden Services List (G:\CEX\Corp Res\CS-Gen\Contact Centre\CRM Spreadsheets\Estates\Garden\Alternative Garden Services List.xls)</a>
      - (This list can be provided to customers (emailed, posted, etc.))
    </p>
    <p>
      Please note, these companies are not endorsed by Sheffield City Council. The
      inclusion of these companies on this list does not mean that they have been
      recommended or vetted by Sheffield City Council.
    </p>
    <p>
      The Government also has a website which lists local, trustworthy and reliable
      tradesmen, operating to Government endorsed standards
      <a href="http://www.trustmark.org.uk/ "target="_blank">http://www.trustmark.org.uk</a>.<br>
    
    <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Trust%20Mark\`
    "
>
    Send link to review further information
</button>


      </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "estates_and_environmental_transferred_to_service" },
  { typeKey: "estates_and_environmental_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const estatesAndEnvironments = new MenuH(
  "estatesAndEnvironments",
  "Estates and Environments",
  "Details on communal cupboard access, fire safety regulations, and maintaining clear escape routes and safety standards in shared housing spaces.",
  [
    communalCupboard,
    communalFireSafety,
    fencesCouncilHousing,
    gardenPledgeScheme,
  ]
);

//#endregion Estates and Environments

//#region General Council Housing
const generalCouncilHousing = new ContentH(
  "generalCouncilHousing",
  "General Council Housing",
  "Access area office information, report concerns about bogus callers, and find contact details for Sheffield Council Housing Service.",
  `
  <h3>Area Office Information</h3>
  <p>
    <a href="https://www.sheffield.gov.uk/council-housing/neighbourhood-offices"target="_blank">https://www.sheffield.gov.uk/council-housing/neighbourhood-offices</a> <br>
        
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Neighbourhood%20offices\`
    "
>
    Send link to review further information
</button>
  </p>

  <h3>Accounts Payable</h3>
  <p>
    Purchasing and Payments can be contacted at <a href="tel:0114 2735082">0114 2735082</a>
  </p>
<h3>Communications (Journalist / Media enquiries)</h3>
  <p>
    Please do not give any information out and refer to the Communications Team <a href="tel:0114 2735538">0114 2735538</a> and <a href="mailto:communications@sheffield.gov.uk">communications@sheffield.gov.uk</a> (Public email address).
  </p>

  <h3>Bogus Callers</h3>
  <p>
    All Council Housing Service staff, surveyors, and contractors carry identification cards at all times. It is important that you always ask to see identification before you let anyone into your home. If you have any doubts about a caller’s identity, do not let them in.
    <br><br>
    Council Officers NEVER ask a household for cash on the doorstep. You should always be alert to protect yourself against bogus callers. If you are suspicious about any caller’s identity, you should call the police immediately.

    Give the option to search for team contact details and to report by case (but remind to phone the police).
  </p>

  <h3>Housing Service Contact Details</h3>
  <p>
    You can write to us at: <br>
    <address>
      Sheffield Council Housing Service <br>
      PO Box 5967 <br>
      Sheffield <br>
      S2 9GH
    </address> 
  </p>
  <h3>Telephone Directory</h3>
  <p>
    <a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Telephone%20Directory.aspx"target="_blank">Telephone Directory</a>
  </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "housing_general_transferred_to_service" },
  { typeKey: "housing_general_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);
//#endregion General Council Housing

//#region Benefits

const benefitCap = new ContentH(
  "benefitCap",
  "Benefit cap",
  "Find information about the Housing Benefit Cap on the official government website.",
  `
    <p>View website for housing benefit cap information: <a href="https://www.gov.uk/benefit-cap" target="_blank">https://www.gov.uk/benefit-cap</a>
    <br>
    
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Benefit%20cap\`
    "
>
    Send link to review further information
</button>

    </p>
  `,
  { buttonLabel: "Benefit cap", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing benefit",
      "Housing benfit",
      "Housing benifit",
      "Housng benefit",
      "Housing beneift",
      "Housin benefit",
      "Housing benefet",
      "Housng benfit",
      "Housin benifit",
      "Housing benifits",
      "Benefit cap",
      "Benfit cap",
      "Beneift cap",
      "Benifit cap",
      "Benfit cpap",
      "Benfit capp",
      "Benefitt cap",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const benefitClaim = new ContentH(
  "benefitClaim",
  "Benefit claim",
  "Contact Sheffield Benefits Service for non-council tenant benefit claims, or complete the online form for support.",
  `
      <h4>Customer is not a council tenant</h4>
      <p>If the customer is not a council tenant, transfer them to the benefits team on the number below. If the line is busy, 
      <strong>do not</strong> ask the customer to call back later today; instead, advise the customer to email either:</p>
      <ul>
          <li><a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a></li>
          <li><a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a></li>
      </ul>
      <p>Or they can complete the online form at: <a href="https://www.sheffield.gov.uk/council-tax" target="_blank">https://www.sheffield.gov.uk/council-tax</a> <br>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Council%20Tax\`
    "
>
    Send link to review further information
</button>

</p>
      <p><strong>Service area:</strong> Sheffield Benefits Service</p>
      <p><strong>Telephone number:</strong> <a href="tel:0114 2736777">0114 2736777</a></p>
      <p><strong>Email address:</strong> <a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a> or <a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a></p>
    `,
  { buttonLabel: "Benefit claim", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing benefit",
      "Housing benfit",
      "Housing benifit",
      "Housng benefit",
      "Housing beneift",
      "Housin benefit",
      "Housing benefet",
      "Housng benfit",
      "Housin benifit",
      "Housing benifits",
      "Benefit claim",
      "Benfit claim",
      "Beneift claim",
      "Benifit claim",
      "Benfit clam",
      "Benfit claaim",
      "Benefitt claim",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const benefitFraud = new ContentH(
  "benefitFraud",
  "Benefit fraud",
  "Find out about Benefit fraud and how it can be reported anonymously online.",
  `
      <p>You can can report fraud anonymously online at: <a href="https://www.gov.uk/report-benefit-fraud" target="_blank">https://www.gov.uk/report-benefit-fraud</a><br>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Report%20benefit%20fraud\`
    "
>
    Send link to review further information
</button>
    </p>
    `,
  { buttonLabel: "Benefit fraud", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing Benefit",
      "Housing Benfit",
      "Housing Benifit",
      "Housng Benefit",
      "Housing Beneift",
      "Housin Benefit",
      "Housing Benefet",
      "Housng Benfit",
      "Housin Benifit",
      "Housing Benifits",
      "Benefit fraud",
      "Benfit fraud",
      "Benifit fraud",
      "Beneift fraud",
      "Benfit fruad",
      "Benfit fraaud",
      "Benefitt fraud",
      "Benifit fraaud",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const benefitOnTwoHomes = new ContentH(
  "benefitOnTwoHomes",
  "Benefit on two homes",
  "Guidelines for housing benefit claims in scenarios like dual liabilities, fleeing violence, delayed occupation, or hospitalisation.",
  `
      <h4>Unavoidable liability</h4>
      <p><strong>Situation:</strong> When tenants sign for a tenancy and have moved in but have a liability on another property.</p>
      <p>This is where a tenant has signed for a Council property but has a liability at another property. 
        This usually occurs when they have to give four weeks' notice on the property 
        they have left but are inclined to take the Council Housing Service property.</p>
      <p>To make a claim for unavoidable liability, a written request needs to be made by the tenant. 
        As it is discretionary, they will then need to satisfy the criteria 
        as stated on the enclosed letter within the standard 28 days of the application. 
        For housing benefit to be paid on the Council Housing Service property, 
        the tenants will need to be physically living at the property. 
        If not, housing benefit cannot be paid under unavoidable liability rules.</p>
  
      <h4>Fleeing violence</h4>
      <p><strong>Situation:</strong> Where a tenant is fleeing violence and has been put into other accommodation.</p>
      <p>If someone is fleeing violence, and they state that they have an intention to return home if the threat of violence is lifted, 
        then they can claim housing benefit on two homes if they have a rental liability at 
        the property they are fleeing and the one that they are currently occupying.</p>
      <p>They will need to complete a housing benefit claim for both homes.</p>
      <p>To successfully claim housing benefit, they will need to confirm in writing that they have an intention 
        to return to the property once the threat of violence is removed. 
        They may also need to provide proof, such as a letter from the police, 
        a crime reference number, or a letter from the Council Housing Service.</p>
  
      <h4>Benefit prior to occupation</h4>
      <p><strong>Basic principles:</strong> Benefit prior to occupation can only be paid when housing benefit is <u>not</u> being paid at any other property.</p>
      <p><strong>Situation:</strong> Tenant(s) sign for a property but there is a delay in moving into the property.</p>
      <p>A tenant(s) may qualify for up to four weeks of benefit prior to occupation if the delay in moving was 
        reasonable and they were waiting for a social fund payment for a need connected with the move (e.g., removal expenses or help to set up home). 
        This only applies if:</p>
      <ul>
        <li>They have a child of five or under living with them.</li>
        <li>They are 60 or over and neither they nor their partner are receiving Income Support (IS) or income-based Jobseeker's Allowance (JSA).</li>
        <li>They are under 60 (or they or their partner are receiving IS or JSA) and qualify for one of the pensioner premiums or 
          a disability, severe disability, or disabled child premium.</li>
        <li>They were waiting for adaptations to be completed to meet needs due to a disability (must be structural, not decorative).</li>
        <li>They became liable for payments while a hospital patient or in residential accommodation.</li>
      </ul>
      <p>Housing benefit is not paid until the tenants move in, and they should have already informed the local authority (LA) of their intent to move. 
        A new claim must be made within four weeks of the actual move-in date.</p>
      <p>If the above criteria are not met, then a tenant will not be able to claim housing benefit until they move in.</p>
      <p>You will need to inform the tenant that if they do not move in and do not meet the above criteria, 
        they will be liable for full rent until they move into the property.</p>
  
      <h4>In hospital</h4>
      <p>If a tenant is in hospital during the time they have signed up for the property, 
        they will not be entitled to housing benefit until they actually move into the property.</p>
      <p>If this is the case, it can be argued that they have moved the majority of their possessions into the 
        property and that this is their main home (as per the basic principles). 
        However, this does not apply if they have a property elsewhere.</p>
    `,
  { buttonLabel: "Benefit on two homes", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing Benefit",
      "Housing Benfit",
      "Housing Benifit",
      "Housng Benefit",
      "Housing Beneift",
      "Housin Benefit",
      "Housing Benefet",
      "Housng Benfit",
      "Housin Benifit",
      "Housing Benifits",
      "Benefits on two homes",
      "Benfits on two homes",
      "Benifits on two homes",
      "Beneifts on two homes",
      "Benefits on 2 homes",
      "Benfits on 2 homes",
      "Benifits on 2 homes",
      "Benefits on too homes",
      "Benfits on too homes",
      "Benfits on to homes",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "05/11/2024", name: "Andy Walker" }
);

const benefitsClawback = new ContentH(
  "benefitsClawback",
  "Benefits clawback",
  "Details on housing benefit overpayment recovery, including clawback reductions and how to appeal if affordability is an issue.",
  `
    <p>If you have been overpaid housing benefit and no longer receive it, you will receive an invoice from Sheffield Benefits Service to repay directly.
       If you still receive housing benefit, the overpayment is recovered by reducing your weekly housing benefit.
       This reduction, which increases your rent payable by the same amount, is called 'clawback'.
       If you cannot afford the increase, you can appeal to Sheffield Benefits Service to have the amount reduced.</p>
    `,
  { buttonLabel: "Benefits clawback", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing Benefit",
      "Housing Benfit",
      "Housing Benifit",
      "Housng Benefit",
      "Housing Beneift",
      "Housin Benefit",
      "Housing Benefet",
      "Housng Benfit",
      "Housin Benifit",
      "Housing Benifits",
      "Benefits clawback",
      "Benfits clawback",
      "Benifits clawback",
      "Beneifts clawback",
      "Benefits clawbak",
      "Benfits clawbak",
      "Benefits clawbck",
      "Benifits clawbck",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "05/11/2024", name: "Andy Walker" }
);

const changeOfCircumstances = new ContentH(
  "changeOfCircumstances",
  "Change of circumstances",
  "Update your Housing Benefits details online quickly and easily through the Sheffield Council website.",
  `
      <p>Housing Benefits can now be claimed online. Claiming online is the quickest and easiest way to claim, and paper forms are no longer available.<br> 
        You can access this via <a href="https://www.sheffield.gov.uk/benefits" target="_blank">https://www.sheffield.gov.uk/benefits</a><br> 
      </p>
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20Council%20Tax%20support\`
    "
>
    Send link to review further information
</button>

    `,
  { buttonLabel: "Change of circumstances", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Change of Circumstances",
      "Change of Circumstances",
      "Change of Circumstances",
      "Change of Circumstances",
      "Change of Circumstances",
      "Change of Circumstances",
      "Change of Circumstances",
      "Change of Circumstances",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const claimsForMoney = new FormH(
  "claimsForMoney",
  "Claims for money",
  "Use this section for claims for; benefits, decoration grants or discretionary payments, following repair or programmed works, local assistance scheme, loss of earnings, personal injury, SCC home insurance or tenants own improvements",
  "hou_sustainment_claims",
  {
    type: "Report",
    keywords: ["Claim", "Money"],
    categories: ["Housing", "Benefits"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const contactHousingBenefits = new ContentH(
  "contactHousingBenefits",
  "Contact housing benefits",
  "Find contact details and guidance for housing benefits and council tax enquiries, including phone numbers, email addresses, and online form links",
  `
    <p>Transfer the customer to the benefits team on the number below. If the line is busy, 
    <strong>do not</strong> ask the customer to call back later today; instead, advise the customer to email either:</p>
    <ul>
        <li><a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a></li>
        <li><a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a></li>
    </ul>
    <p>Or they can complete the online form at: <a href="https://www.sheffield.gov.uk/council-tax" target="_blank">https://www.sheffield.gov.uk/council-tax</a> <br> 
    </p>

<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Council%20Tax\`
    "
>
    Send link to review further information
</button>

<p><strong>Service area:</strong> Sheffield Benefits Service</p>
    <p><strong>Telephone number:</strong> <a href="tel:0114 2736777">0114 2736777</a></p>
    <p><strong>Email address:</strong> <a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a> or 
    <a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a></p>

    <h4>Contact council tax</h4>
    <p>Transfer the customer to the council tax team on the number below. If the line is busy, <strong>do not</strong> 
    ask the customer to call back later today; instead, advise the customer to email either:</p>
    <ul>
        <li><a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a></li>
        <li><a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a></li>
    </ul>
    <p>Or they can complete the online form at: <a href="https://www.sheffield.gov.uk/council-tax.html" target="_blank">https://www.sheffield.gov.uk/council-tax</a><br> 
    
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Council%20Tax\`
    "
>
    Send link to review further information
</button>
    </p>
    <p><strong>Service area:</strong> Council tax</p>
    <p><strong>Telephone number:</strong> <a href="tel:0114 2736633">0114 2736633</a> (public number)</p>
    <p><strong>Further information:</strong> Lines open 8:30-5:30</p>
    <p><strong>Email address:</strong> <a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a></p>
  `,

  { buttonLabel: "Contact benefits", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing benefit",
      "Housing benfit",
      "Housing benifit",
      "Housng benefit",
      "Housing beneift",
      "Housin benefit",
      "Housing benefet",
      "Housng benfit",
      "Housin benifit",
      "Housing benifits",
      "Contact benefits",
      "Contct benefits",
      "Contat benefits",
      "Contact benifits",
      "Cntact benefits",
      "Contct benifits",
      "Contact benifit",
      "Conatct benefits",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const localAssistanceScheme = new ContentH(
  "localAssistanceScheme",
  "Local Assistance Scheme",
  "Access the Local Assistance Scheme and submit Housing Benefit claims quickly and easily online.",
  `
      <p>Housing Benefits can now be claimed online. Claiming online is the quickest and easiest way to claim, and paper forms are no longer available. <br>
         You can access this via <a href="https://www.sheffield.gov.uk/benefits" target="_blank">https://www.sheffield.gov.uk/benefits</a> <br> 
         
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20Council%20Tax%20support\`
    "
>
    Send link to review further information
</button>
    </p>
    `,
  { buttonLabel: "Local Assistance Scheme", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Local Assistance Scheme",
      "Local Assistance Scheme",
      "Local Assistance Scheme",
      "Local Assistance Scheme",
      "Local Assistance Scheme",
      "Local Assistance Scheme",
      "Local Assistance Scheme",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const pdsa = new ContentH(
  "pdsa",
  "PDSA",
  "The Benefits Service can fax a letter to PDSA to assist with pet treatment for customers receiving benefits.",
  `
      <p>The Benefits Service can fax a letter to PDSA for pet treatment if the customer is on benefits.</p>
    `,
  { buttonLabel: "PDSA", formName: "" },
  { typeKey: "housing_benefits_information_provided" },
  { typeKey: "housing_benefits_information_requested" },
  {
    type: "Information",
    keywords: [
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "Housing Benefit",
      "PDSA",
      "PDSA",
      "PDSA",
      "PDSA",
      "PDSA",
      "PDSA",
      "PDSA",
      "PDSA",
    ],
    categories: ["Housing", "Benefits"],
  },
  { date: "05/11/2024", name: "Andy Walker" }
);

//Universal Credit is in Cross Region

const housingBenefits = new MenuH(
  "housingBenefits",
  "Housing benefits",
  "Information on housing benefits, including eligibility, claims, fraud prevention, and changes in circumstances. It also covers topics like universal credit and local assistance schemes.",
  [
    benefitCap,
    benefitClaim,
    benefitFraud,
    benefitOnTwoHomes,
    benefitsClawback,
    claimsForMoney,
    changeOfCircumstances,
    contactHousingBenefits,
    localAssistanceScheme,
    pdsa,
    universalCredit,
    welfareReform,
  ]
);

//#endregion Benefits

//#region Leaseholders
const leaseholderInformation = new ContentH(
  "leaseholderInformation",
  "Leaseholder Information",
  "Learn about leaseholder responsibilities, service charges, payment options, and the rules around subletting in ex-Council properties.",
  `
    <p>
      If you live in an ex-Council flat or maisonette property you are a leaseholder
      of Sheffield City Council.
    </p>
    <p>
      As a landlord, the Council are responsible for calculating and issuing bills to leaseholders.
      These may be for service charges and similar costs, as well as for major works.
    </p>
    <p>
      The Council are only responsible for communal repairs; Leaseholders are responsible
      for repairs within their own property.
    </p>
    <h3>What service charges cover</h3>
    <p>
      Service charges cover all works and services carried out to the structure of the block and communal
      areas, including cleaning of communal areas, lighting, lift maintenance and upkeep of gardens. It also
      covers day-to-day repairs, maintenance and improvement work.
    </p>
    <h3>Cost of service charges</h3>
    <p>
      Service charges for leaseholders are paid annually and vary depending on the cost incurred to the
      block during the service charge year, which runs from 1st October to 30th September. Customers will
      pay a share of the costs calculated for their block. For example; if there are 8 dwellings in a block,
      service charges will amount to 1/8th of the total cost.
    </p>
    <h3>Difficulty paying service charge</h3>
    <p>
      Leaseholders can now pay service charges by instalments, spreading the cost over 12 months.
    </p>
    <p>
      For larger items of work commanding higher costs, Leaseholders should contact the Council to discuss tailored repayment options.
    </p>
    <h3>Subletting a property</h3>
    <p>
      As a leaseholder you have the right to sublet your home. This means that you may take in lodgers or rent your home to someone else, if you want to.
    </p>
    <p>
      You will also need to advise your mortgage lender if you do rent out your home.
    </p>
    <p>
      You will remain responsible for ensuring that the terms of the lease are complied with and you will remain liable for any breaches,
      regardless of whether the breaches are committed by you, your sub-tenant or other parties connected to your sub-tenant.
      You will therefore be responsible for the behaviour of your sub-tenant(s). This would include, for example, ensuring that they do not cause a nuisance to neighbours.
    </p>

    <h3>Contact Details</h3>
    <p>
      The leaseholder team can be contacted via <a href="tel:0114 2734468">0114 2734468</a> and <a href="mailto:leaseholdservice@sheffield.gov.uk">leaseholdservice@sheffield.gov.uk</a>.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing"],
  },
  { date: "11/10/2024", name: "Abishai Devarapalli" }
);

//#endregion Leaseholders

//#region Rehousing

const allocationsPolicy = new ContentH(
  "applicantPlacedInAPriorityBand",
  "Allocations Policy - Applicant placed in a priority band",
  "Explanation of priority bands for housing applications, including why certain applicants are placed in specific bands, how priority bids are assessed, and the reasoning behind the banding system based on individual circumstances.",
  `
  <details class="accordion">
    <summary class="accordion-header">
        <h3>Why has my priority bid not been successful?</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            If you are in Priority band B or C, it is likely that the property was offered to an applicant in a higher priority band, 
            despite your priority effective date. Your effective date will only be considered alongside other applicants in the same band as you.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>What is a band?</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            A band is where an applicant is placed based on their needs and/or circumstances. 
            A band is used to determine the priority of an application. Band 'A' is the highest and band 'E' is the lowest.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Which band am I in?</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Advisor Note - Check Housing Registration Application on Abritas – this will show the applicant’s band.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Why have I been placed in the band I have?</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            The bands take into account your individual circumstances, and you have been placed in the band which is seen as the most appropriate 
            for your needs, based on the information you have provided.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Band 'E' FAQs</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <details class="details-accordion">
            <summary>
                Why am I in band E?
            </summary>
            <div class="details-accordion-content">
                <p>
                    You have been placed in band E due to your circumstances, in accordance with the allocations policy. 
                    For example: out of town and no local connection; rent arrears etc.
                </p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                Owner Occupier in band D/E - why can't I bid?
            </summary>
            <div class="details-accordion-content">
                <p>
                    The new policy states that owner occupiers may register, but will have their bidding restricted until they have sold their property. 
                    Proof of sale by way of exchange of contracts will be required before an owner occupier can start bidding, 
                    unless they have been assessed and given a priority. 
                    In this case proof of sale would need to be produced at a later date.
                </p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                Why am I classed as no local connection but have a Sheffield postcode?
            </summary>
            <div class="details-accordion-content">
                <p>
                    A local connection means within the Sheffield city boundary. 
                    Although many areas use a Sheffield postcode, they are classed as outside of Sheffield.
                </p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>
                I'm in band E, but have a longer waiting time than someone who was offered a property?
            </summary>
            <div class="details-accordion-content">
                <p>
                    You are in band E which means you will be considered after applicants in band D, regardless of your waiting time. 
                    This is because band E is classed as having reduced preference. 
                    Also, certain applicants within band E will be considered before others in band E, regardless of waiting time. 
                    For example, if you have arrears, you will be considered after someone living outside of Sheffield.
                </p>
            </div>
        </details>
    </div>
</details>
  `,

  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "05/12/2024", name: "Joseph Coupland" }
);

const applicationChanges = new ContentH(
  "applicationChanges",
  "Application Changes",
  "Understand the process for updating your housing application, including submitting changes, providing ID, and renewing your application annually.",
  `
    <p>
      Change of circumstances are now online. When you are making changes, remember
      to click 'Submit'. ID/References may also need to be submitted before any
      changes are accepted.
    </p>
    <p>
      It is very important that you notify us of any changes in your circumstances
      so that we can amend your application. We will inform you if this results in
      your application moving to a different band. Depending on the change you have
      made, you may be required to resubmit your identification/reference before
      changes are accepted. We will notify you if this is necessary.
    </p>
    <p>
      If the customer has made recent changes, the changes are likely to be awaiting
      approval, and no further changes can be made until they are approved.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Accepted ID</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          You must provide two forms of identification to prove changes to your
          application. One must be from the Proof of ID documents list, while the
          second must provide proof of your current UK address. Photo ID is also
          required to prove your identity. If you do not have photo ID, you must
          provide a passport-sized photo accompanied by a birth certificate. Proof
          of child benefit is only required where children under 16 years of age are
          being rehoused with you.
        </p>
        <h3>Proof of ID documents</h3>
        <ul>
          <li>Marriage certificate</li>
          <li>Divorce/Annulment papers</li>
          <li>
            Passport (this can be expired, but if the customer is an adult, an adult
            passport must be produced)
          </li>
          <li>
            Deed poll documentation for name changes (to accompany details of former
            name, if applicable)
          </li>
          <li>Current bus pass with photograph</li>
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
          <li>Bank statement from within the last 3 months</li>
          <li>Wage slip from current employer</li>
          <li>Life assurance/Insurance policies</li>
          <li>Proof of all other benefits</li>
        </ul>
        <h3>Proof of Child Benefit</h3>
        <ul>
          <li>Child benefit award letter</li>
          <li>
            The last 3 consecutive months of bank statements (Only where the award
            letter is not available)
          </li>
          <li>
            Universal Credit is also accepted if it includes the child's name on the claim.
          </li>
        </ul>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Annual Renewal</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Under the Allocation Policy, customers will be required to update their
          application on the anniversary of the date they registered.
        </p>
        <p>
          If applications are not renewed within 42 days when requested, the
          application may be cancelled.
        </p>
        <p>
          Customers won’t need to submit ID for any changes they make, and this will
          continue for the time being. This will change in the future.
        </p>
        <details class="details-accordion">
          <summary>
            Instructions for completing the renewal of your Housing Application
            online
          </summary>
          <div class="details-accordion-content">
            <p>
              Log onto our website at <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank">www.sheffieldpropertyshop.org.uk</a> and follow
              the links from the homepage.<br> 
              
      <button type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
            window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
            }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Property%20Shop\`
    "
>
            Send link to review further information
    </button>
            
            </p>
            <p>Click ‘Log into my account’.</p>
            <p>
              Enter your login details: Your unique reference number (found on the
              enclosed letter), your memorable date, and your password. Contact us
              if you need these.
            </p>
            <p>
              Once logged in, click ‘Update my details’ under the ‘Application
              renewal required’ heading. Check your information carefully, confirm
              that the details are correct, and submit the form. You must submit the
              form even if there are no changes.
            </p>
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
        <p>
          The Allocations Policy advises of various circumstances where we will
          reduce the preference given to applicants on the Housing Register or
          prevent them from joining the register. These include circumstances such
          as rent arrears or past/current anti-social behaviour.
        </p>
        <p>
          In the most serious debt cases, the Allocations Policy allows us to place
          applicants into band E or disqualify a customer from the Housing Register
          for an initial period of 12 months.
        </p>
        <p>A customer can apply for a restriction to be removed if:</p>
        <ul>
          <li>
            They are able to evidence that their behaviour has significantly improved
            (e.g., paying off arrears in full)
          </li>
          <li>They appeal the restriction (disqualification) within 21 days</li>
          <li>They have exceptional circumstances</li>
          <li>They need a priority</li>
        </ul>
        <p>
          If an applicant is allowed back on the housing register, they will have to
          re-register. ID and references will be required unless recently submitted.
          Usual checks will be carried out and the appropriate band chosen.
          Applicants will lose their original waiting time.
        </p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Assistance with Change of Circumstances</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>Log on using the details below if required.</p>
        <p>Unique Reference - 1257822</p>
        <p>Memorable date - 25/12/2012</p>
        <p>Password - DMrm15</p>
        <p>
          Advisor note: You have logged in using dummy login details. Please do not
          amend anything on screen. Log in if required using the login details above
          and follow the instructions:
        </p>
        <p>Select "My Social Housing" on the left-hand side.</p>
        <p>
          Click "Update your details" and navigate through the form using the "Next
          section" buttons.
        </p>
        <p>Please do not submit the application.</p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Exceptions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          The Allocations Policy advises various circumstances in which we will
          reduce the preference given to applicants on the Housing Register or
          prevent them from joining the register. These include circumstances such
          as rent arrears or past/current anti-social behaviour.
        </p>
        <p>
          An Exception Request allows us to make decisions on whether it is
          appropriate to waive these restrictions in exceptional circumstances, such
          as awarding a priority or when an applicant wishes to move to more
          suitable accommodation using their waiting time due to a change in
          circumstances.
        </p>
        <p>
          Applicants must demonstrate exceptional circumstances and prove that they
          have taken action to rectify issues that led to reduced preference or
          disqualification.
        </p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Name Changes</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Present three proof documents to a housing office or First Point, where ID
          will be copied and saved. The name will be updated in our system. See above within the "Accepted ID" section
          for valid options of ID that can be used.
        </p>
        <p>
          Alternatively, send the name change in writing along with proof
          (originals, not photocopies) to <a href="mailto:RegistrationID@sheffield.gov.uk">RegistrationID@sheffield.gov.uk</a>.
        </p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Split Applications</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <h3>Main Applicant</h3>
        <p>
          To remove a joint applicant, you must do this online at the Property Shop
          website.
        </p>
        <h3>Joint Applicant</h3>
        <p>
          Speak to the Registration team to remove your National Insurance Number.
          You will need to submit a new application and confirm the removal from the
          previous application.
        </p>
      </div>
    </details>
  `,
  { buttonLabel: "Raise Enquiry", formName: "hou_rehousing_enquiry" },
  { typeKey: "" },
  { typeKey: "rehousing_services_information_provided" },
  {
    type: "Apply",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Rehousing"],
  },
  { date: "12/02/2025", name: "Nathan Smith" }
);

const applyForRehousing = new ContentH(
  "applyForRehousing",
  "Apply for rehousing",
  "Learn how to apply for rehousing in Sheffield by registering online and submitting required documents like ID and landlord references.",
  `
    <p>
      To apply for Social Housing you need to do so via the Property Shop website.
      There are no paper application forms.
    </p>
    <p>Go online and register on <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank">www.sheffieldpropertyshop.org.uk</a><br> 
    
    <button type="button" class="dform_widget email-btn dform_widget_type_button"
      aria-label="Send link to property shop website"
      onclick="
      window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
      KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
      }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Property%20Shop\`"
    >
      Send link to register online
    </button>

    </p>
    <p>
      Before you can complete an application to join the Housing Register you will
      need to register yourself as a new household on the system.
    </p>
    <p>
      Once registered you will be able to complete an application form to join the
      Housing Register.
    </p>
    <p>
      You must produce proof of ID (and Child Benefit if appropriate) and a landlord
      reference (if you are not already a Council tenant) at the same time,
      documents can be uploaded via the website or at your local housing office or
      First Point before your application will be validated.
    </p>
  `,
  { buttonLabel: "Raise Enquiry", formName: "hou_rehousing_enquiry" },
  { typeKey: "" },
  { typeKey: "rehousing_services_information_provided" },
  {
    type: "Request",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Rehousing"],
  },
  { date: "12/02/2025", name: "Nathan Smith" }
);

const bidding = new ContentH(
  "bidding",
  "Bidding",
  "Learn how to place bids for properties on the Sheffield Property Shop website, manage your application details, and handle restrictions or disqualifications.",
  `
      <p>
        After you have registered for housing, you express your interest in renting a
        property by making a bid. You only have to bid once per property. You make
        bids online at the Property Shop website
        <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank">www.sheffieldpropertyshop.org.uk</a> <br> 
        
        <button type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
            window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
            }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Property%20Shop\`
    "
>
            Send link to review further information
    </button>

        <br>You can bid 3 times (plus 1 FCFS) within each weekly bidding cycle (Thursday
        to Tuesday).
      </p>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>Why can't you bid for me?</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            If you need assistance placing a bid, you can visit Sheffield Property Shop
            located in Howden House on Union Street, Sheffield, or your nearest
            neighbourhood housing office.
          </p>        
        </div>
      </details>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>First Come First Served</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            Log onto our website at <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank">www.sheffieldpropertyshop.org.uk</a> and follow
            the links from the homepage.
            <br>

    <button type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
            window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
            }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Property%20Shop\`
    "
>
            Send link to review further information
    </button>
            <br>
            <br>
              Click ‘Log into my account’.
            <br>
            <br>
              Enter your login details: Your unique reference number (found on the
              enclosed letter), your memorable date, and your password. Contact us
              if you need these.
            <br>
            <br>
              Once logged in, click ‘Update my details’ under the ‘Application
              renewal required’ heading. Check your information carefully, confirm
              that the details are correct, and submit the form. You must submit the
              form even if there are no changes.
          </p>
        </div>
      </details>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>Disqualification/Restriction</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            The Allocations Policy advises of various circumstances where we will
            reduce the preference given to applicants on the Housing Register or
            prevent them from joining the register. These include circumstances such
            as rent arrears or past/current anti-social behaviour.
          <br>
          <br>
            In the most serious debt cases, the Allocations Policy allows us to place
            applicants into band E or disqualify a customer from the Housing Register
            for an initial period of 12 months.
          <br>
          <br>
            A customer can apply for a restriction to be removed if:
          <br>
          <br>
            <ul>
              <li>They are able to evidence that their behaviour has significantly improved (e.g., paying off arrears in full)</li>
              <li>They appeal the restriction (disqualification) within 21 days</li>
              <li>They have exceptional circumstances</li>
              <li>They need a priority</li>
            </ul>
          <br>
          <br>
            If an applicant is allowed back on the housing register, they will have to
            re-register. ID and references will be required unless recently submitted.
            Usual checks will be carried out and the appropriate band chosen.
            Applicants will lose their original waiting time.
          </p>
        </div>
      </details>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>Assistance with Change of Circumstances</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            Log on using the details below if required.
            <br>
            <br>
            Unique Reference - 1257822
            <br>
            <br>
            Memorable date - 25/12/2012
            <br>
            <br>
            Password - DMrm15
            <br>
            <br>
            Advisor note: You have logged in using dummy login details. Please do not
            amend anything on screen. Log in if required using the login details above
            and follow the instructions:
            <br>
            <br>
            Select "My Social Housing" on the left-hand side.
            <br>
            <br>
            Click "Update your details" and navigate through the form using the "Next
            section" buttons.
            <br>
            <br>
            Please do not submit the application.
          </p>
        </div>
      </details>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>Exceptions</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            The Allocations Policy advises various circumstances in which we will
            reduce the preference given to applicants on the Housing Register or
            prevent them from joining the register. These include circumstances such
            as rent arrears or past/current anti-social behaviour.
            <br>
            <br>
            An Exception Request allows us to make decisions on whether it is
            appropriate to waive these restrictions in exceptional circumstances, such
            as awarding a priority or when an applicant wishes to move to more
            suitable accommodation using their waiting time due to a change in
            circumstances.
            <br>
            <br>
            Applicants must demonstrate exceptional circumstances and prove that they
            have taken action to rectify issues that led to reduced preference or
            disqualification.
          </p>
        </div>
      </details>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>Name Changes</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            Present three proof documents to a housing office or First Point, where ID
            will be copied and saved. The name will be updated in our system.
          <br>
          <br>
            Alternatively, send the name change in writing along with proof
            (originals, not photocopies) to <a href="mailto:RegistrationID@sheffield.gov.uk">RegistrationID@sheffield.gov.uk</a>.
          </p>
        </div>
      </details>

      <details class="accordion">
        <summary class="accordion-header">
          <h3>Split Applications</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <h3>Main Applicant</h3>
          <p>
            To remove a joint applicant, you must do this online at the Property Shop
            website at: <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank">www.sheffieldpropertyshop.org.uk</a>
          <br>

     <button 
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
            window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
            }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Property%20Shop\`
    "
>
            Send link to review further information
     </button>

          <br>
          <h3>Joint Applicant</h3>
          <br>
          <br>
            Speak to the Registration team to remove your National Insurance Number.
            You will need to submit a new application and confirm the removal from the
            previous application.
          </p>
        </div>
      </details>
    `,
  { buttonLabel: "", formName: "" },
  { typeKey: "repairs_and_investment_transferred_to_service" },
  { typeKey: "repairs_and_investment_information_provided" },
  {
    type: "Apply",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Rehousing"],
  },
  { date: "14/10/2024", name: "Omily Parkin" }
);

const eligibility = new ContentH(
  "eligibility",
  "Eligibility",
  "Check eligibility for Sheffield's Housing Register, including age, immigration status, and documentation requirements for application.",
  `
      <p>
        Sheffield City Council operates an open register and therefore any person over
        the age of 16 can apply to join the Housing Register. However, generally you
        will not be made an offer of a property until you are at least 18 years old.
      </p>
      <p>
        The Housing Act 1996 prevents Local Authorities from offering a property to
        some people because of their immigration status. We will let you know if this
        applies to you after you register.
      </p>
      <p>
        If you are eligible to register you may do so by completing the online
        application form. Following this, you will be provided with a login reference
        number and required to provide a memorable date which will act as your
        password for logging in to the website in the future.
      </p>
      <p>
        There are some people who are not eligible to be included on the Housing
        Register. These are:
      </p>
      <p>
        Certain people who are subject to Immigration Control under the 1996 Asylum
        and Immigration Act.
        <br />
        Certain people from abroad who are not subject to immigration control but who
        are not habitually resident in the UK, the Channel Islands, the Isle of Man or
        the Republic of Ireland.
        <br />
        People (including members of their household) who have been guilty of
        unacceptable behaviour that makes them unsuitable to be a tenant.
      </p>
      <h3>After submitting your application</h3>
      <p>
        After submitting your application online you will be asked to provide us with
        various documentation such as identification and a reference. You may also be
        asked to provide evidence of your immigration status where relevant. You
        should make sure that all of this documentation is available to you before
        completing your online application as you need to submit this
        documentation immediately. Failure to provide this within the given timescales
        will mean you will need to restart the process from the beginning by
        submitting a further online application.
      </p>
      <h3>Eligibility Table</h3>
      <p>
        A copy of the eligibility table can be found 
        <a href="https://sccextranet.sharepoint.com/:w:/s/CustomerServiceKnowledgeCouncilHousing/EbdSLAAvW9JGiy9NqU1kK10B4dnbAzvX4hi3YjglwR3TDQ?e=Nicw6D&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDEwMjAwMTMxOCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" target="_blank">here</a>.
      </p>
      <h3>Relaxed eligibility</h3>
      <p>
        Relaxed eligibility criteria is uncommon, but has sometimes been applied in
        the past to properties that receive no bids and/or have a known low demand.
        The majority of these properties were maisonettes.
      </p>
      <p>
        Properties where relaxed eligibility has been applied will have a message in
        the 'Show full details>>Further information' box of the property advert.
      </p>
      <p>
        For Example: A 3 bed maisonette with relaxed eligibility will have a message
        similar to this:
      </p>
      <p>
        Households eligible for 2 bed properties can bid and a financial assessment
        will be carried out to check that the property is affordable.
      </p>
      <p>
        If a customer then places a bid for the property and comes first, IMFIT
        (Rents) will contact the customer prior to any offer to ensure that the
        customer is able to afford the property.
      </p>
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "14/10/2024", name: "Abishai Devarapalli" }
);

const fosteringAndAdoption = new ContentH(
  "fosteringAndAdoption",
  "Fostering and Adoption",
  "Details on the processes for amending bedroom eligibility for foster and adoptive applicants, including the need for confirmation from Social Services and the potential benefit implications.",
  `
   
  <h3>Adoption</h3>
  
  <p> Social Services will undertake an initial visit to assess the size of the applicant’s current accommodation. 
  Bedroom eligibility in these situations will only be amended once we have received confirmation to go ahead from Social Services. Upon receipt of confirmation, the bedroom eligibility can be amended. 
  An e-mail from Social Services will be the normal route to receive confirmation. </p>
  
     <h3>Fostering</h3>
  
     <p>Fostering has a different process. 
     Until an applicant is suitably housed an assessment cannot begin. 
     Confirmation from Social Services in the form of an email stating the applicant has made an application to foster is the requirement 
     to change bedroom eligibility. Upon receipt of confirmation, the bedroom eligibility can be amended. 
     An e-mail from Social Services will be the normal route to receive confirmation. 
     However staff advising potential foster carers must advise the applicant of the benefit implications of moving to a 
     larger property if the child / children are not placed with them immediately after they move or they do not proceed with the 
     application to foster after they are rehoused.</p>
  
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "07/22/2024", name: "George Whitehouse" }
);

const housingAssociations = new ContentH(
  "housingAssociations",
  "Housing Associations",
  "Explore various housing associations in Sheffield, offering a range of properties and eligibility criteria for different housing needs.",
  `
      <p>
        Housing Associations and Housing Trusts are non-profit making, independent organisations.
        They vary widely in the types of people they house.
        Some cater for all groups giving priority for those with the most urgent housing need.
        Others specialise in helping particular groups of people, e.g. the elderly, disabled or those with other specific needs.
        Public numbers cannot be used on freephone.
      </p>
  
      <details class="accordion">
        <summary class="accordion-header">
          <h3> List of Housing Associations and their details</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <details class="details-accordion">
            <summary>Acis Group Ltd</summary>
            <div class="details-accordion-content">
              <address>
                Acis Group Ltd, tel <a href="tel:0142 7678000">0142 7678000</a><br>
                Acis Group Limited<br>
                Acis House<br>
                Bridge Street<br>
                Gainsborough<br>
                Lincolnshire<br>
                DN21 1GG<br>
                <a href="http://www.acisgroup.co.uk" target="_blank">http://www.acisgroup.co.uk</a> <br>
                
     <button type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Book%20a%20Notice%20of%20Civil%20Partnership%20Appointment\`
    "
>
        Send link to review further information
     </button>
              </address>
              <p>
                Variety of properties across Woodthorpe and Lower Manor. Stock transfer from the Council Housing Service.
                To register, a Council Housing Service rehousing registration form needs to be completed.
                Properties are advertised through the Choice Based Letting System.
                The only properties not advertised through the Sheffield Property Shop are those where Acis have agreed a management transfer for current tenants or mutual exchange.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Anchor Trust</summary>
            <div class="details-accordion-content">
              <address>
                Anchor Trust, tel <a href="tel:0345 7758595">0345 7758595</a><br>
                Customer Centre<br>
                2 Godwin Street,<br>
                Bradford,<br>
                BD1 2ST<br>
                GEN EMAIL: <a href="mailto:contact@anchor.org.uk">contact@anchor.org.uk</a>
              </address>
              <p>
                Sheltered housing for the elderly. Applicants need to be 55+.
                Waiting list, priority awarded to the following groups: homeless, fleeing harassment, and leaving hospital with nowhere else to go.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Arches Housing Association</summary>
            <div class="details-accordion-content">
              <address>
                Arches Housing Limited, tel <a href="tel:0114 2288100">0114 2288100</a><br>
                122 Burngreave Road<br>
                Sheffield<br>
                S3 9DE<br>
                Email: <a href="mailto:info@archeshousing.org.uk">info@archeshousing.org.uk</a><br>
                Website and web chat: <a href="https://www.archeshousing.org.uk" target="_blank">https://www.archeshousing.org.uk</a>
                <br>
      <button
            type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
            window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
            }interactionid=\${KDF.getParams().interactionid}&sel_service=Arches%20Housing\`
    "
>
            Send link to review further information
       </button>
              </address>
              <p>
                Mutual exchanges advertised and managed through home swapper: register on <a href="https://www.homeswapper.co.uk" target="_blank">https://www.homeswapper.co.uk</a> 
                <br>
                
       <button type="button"
                class="dform_widget email-btn dform_widget_type_button"
                aria-label="For further information send link"
                onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Home%20Swapper\`
    "
>
                Send link to review further information
       </button>

                Information on lettings: Flats and houses available, including some over 60s independent living accommodation (no warden on site). Must be 18+ and eligible for benefits if not working. 
                An affordability and risk assessment will be carried out, and a previous landlord reference requested for all nominees.
                We do not hold a waiting list for the general public.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Clarion Housing Group</summary>
            <div class="details-accordion-content">
              <p>
                Clarion Housing Group, tel <a href="tel:0330 5008000">0330 5008000</a><br>
                Mix of housing types including some sheltered schemes. Need to be 18+. Points based system.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Together Group with Pennine</summary>
            <div class="details-accordion-content">
              <address>
                Together Group with Pennine, tel <a href="tel:0845 2701088">0845 2701088</a><br>
                Harrison Street<br>
                Wakefield<br>
                WF1 1PS
              </address>
              <p>
                1 & 2 bed flats. Two, three, and four bedroom houses. Points system - based on housing need. Small, scattered developments. Need to be aged 18+, but in some cases will take 16+.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>English Churches Housing Group / The Riverside Group</summary>
            <div class="details-accordion-content">
              <address>
                English Churches Housing Group / The Riverside Group, tel <a href="tel:0345 1559002">0345 1559002</a><br>
                2 Estuary Boulevard<br>
                Estuary Commerce Park<br>
                Liverpool<br>
                L24 8RF
              </address>
              <p>
                Since English Churches Housing Group merged with The Riverside Group in March 2007, their waiting list has been closed.
                Some of their properties are still being offered through the Choice Based Letting System. To register, complete a Council Housing Service rehousing registration form.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Great Places Housing Group</summary>
            <div class="details-accordion-content">
              <address>
                Great Places Housing Group, tel <a href="tel:0300 1231966">0300 1231966</a><br>
                2a Derwent Avenue<br>
                Manchester<br>
                M21 7QP<br>
                <a href="http://www.greatplaces.org.uk" target="_blank">http://www.greatplaces.org.uk</a> 
                <br>
                
       <button type="button"
            class="dform_widget email-btn dform_widget_type_button"
            aria-label="For further information send link"
            onclick="
            window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
            }interactionid=\${KDF.getParams().interactionid}&sel_service=Great%20Places\`
    "
>
            Send link to review further information
       </button>

              </address>
              <p>
                Flats, houses, and bungalows in Wybourn, Richmond Park, Birklands, and Athelstan (mostly ex-Council properties). To register, a Council Housing Service rehousing registration form needs to be completed.
                Properties are advertised through the Choice Based Letting System and a local lettings policy.
                Some properties are advertised to existing Great Places tenants under their Local Lettings Policy.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Guinness Northern Counties</summary>
            <div class="details-accordion-content">
              <address>
                Guinness Northern Counties, tel <a href="tel:0303 1231890">0303 1231890</a><br>
                St Helens Court,<br>
                Stirling Cl,<br>
                Elsecar,<br>
                Barnsley<br>
                S74 8DY<br>
                <a href="http://www.guinnesspartnership.com" target="_blank">http://www.guinnesspartnership.com</a>
                <br> 

      <button type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Guinness%20Partnership\`
    "
>
    Send link to review further information
     </button>
              </address>
              <p>
                Available properties are either advertised through the Council’s Property Shop and Property Shop website or are allocated from Guinness Northern Counties’ own waiting list.
                You need to join Guinness Northern Counties’ waiting list as well as the Council’s Housing Register in order to bid for properties.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Home Group</summary>
            <div class="details-accordion-content">
              <address>
                Home Group, tel <a href="tel:0345 1414663">0345 1414663</a><br>
                Home Group Ltd<br>
                2nd Floor, 20 Westfield Terrace<br>
                Sheffield<br>
                S1 4GH<br>
                <a href="mailto:contactus@homegroup.org.uk" target="_blank">contactus@homegroup.org.uk</a> 
              </address>
              <p>
                2, 3, and 4 bedroomed homes for general needs rent within S12. Please note we do not hold a waiting list, and any properties becoming available will be advertised through the Choice Based Lettings system.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Housing 21</summary>
            <div class="details-accordion-content">
              <address>
                Housing 21, tel <a href="tel:0370 192 4000">0370 192 4000</a><br>
                Tricorn House<br>
                51–53 Hagley Road<br>
                Birmingham<br>
                B16 8TP<br>
                <a href="mailto:enquiries@housing21.org.uk" target="_blank">enquiries@housing21.org.uk</a> 
              </address>
              <p>
                Flats and bedsits for 60+. If registered disabled, 55+. Allocation system based on waiting time.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Johnnie Johnson Housing Trust Ltd</summary>
            <div class="details-accordion-content">
              <address>
                Johnnie Johnson Housing Trust Ltd, tel <a href="tel:0345 3055335">0345 3055335</a><br>
                Eden Point,<br>
                Three Acres Lane,<br>
                Cheadle Hulme,<br>
                Cheadle,<br>
                SK8 6RL<br>
                <a href="mailto:talktous@jjhousing.co.uk" target="_blank">talktous@jjhousing.co.uk</a>  
              </address>
              <p>
                Bedsits, 1 & 2 bed flats, 2 + 3 bed houses. Need to be aged 18+, but some age-banded schemes. Allocation based on waiting time.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Padley</summary>
            <div class="details-accordion-content">
              <address>
                Padley, tel <a href="tel:0114 2666626">0114 2666626</a><br>
                208 Crookes<br>
                S10 1TG<br>
                <a href="mailto:sheffieldcrookeslettings@hunters.com" target="_blank">sheffieldcrookeslettings@hunters.com</a>
              </address>
              <p>
                Sheltered accommodation and 1-bed flats mainly for the elderly. Point system based on personal circumstances.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Places for People</summary>
            <div class="details-accordion-content">
              <p>
                Places for People, tel <a href="tel:0113 2858923">0113 2858923</a><br>
                Mix of housing types, offered generally 18+ but in some cases will take 16+. There are 3 waiting lists:
              </p>
              <ul>
                <li>Economic – people not receiving Housing Benefit/LHA and paying full rent.</li>
                <li>General waiting list</li>
                <li>Community – people needing to move to a property in a specific area (e.g., to care for a relative)</li>
              </ul>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Sanctuary</summary>
            <div class="details-accordion-content">
              <address>
                Sanctuary, tel <a href="tel:0800 1313348">0800 1313348</a><br>
                In Person:<br>
                Sanctuary Housing Association<br>
                36a Beck Road<br>
                Shiregreen<br>
                Sheffield<br>
                S5 0GB<br>
                By mail:<br>
                Sanctuary Housing Association<br>
                Marybone House<br>
                2 Marybone<br>
                Liverpool<br>
                Mersey<br>
                L3 2BY<br>
                Email: <a href="mailto:contactus@sanctuary.co.uk">contactus@sanctuary.co.uk</a><br>
                <a href="http://www.sanctuary-housing.co.uk" target="_blank">http://www.sanctuary-housing.co.uk</a>
                <br>
        <button
              type="button"
              class="dform_widget email-btn dform_widget_type_button"
              aria-label="For further information send link"
              onclick="
              window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
              KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
              }interactionid=\${KDF.getParams().interactionid}&sel_service=Sanctuary%20Housing\`
    "
>
               Send link to review further information
        </button>
     
              </address>
              <p>
                Stock transfer from Council Housing Service. All types of properties. Current stock is in Shiregreen. To register, a Council Housing Service rehousing registration form needs to be completed.
                Properties are advertised through the Choice Based Letting System and a local lettings policy.
                The only properties not advertised through the Sheffield Property Shop are those where Sanctuary has agreed a management transfer for current tenants or mutual exchange.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Sheffield Jewish Housing Association</summary>
            <div class="details-accordion-content">
              <address>
                Sheffield Jewish Housing Association, tel <a href="tel:0114 2554318">0114 2554318</a><br>
                22 Kingfield Road<br>
                Sheffield<br>
                S11 9AS
              </address>
              <p>
                Accommodation for over 60’s, Jewish and non-Jewish members of the community. 1-bed flats, waiting list system.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>South Yorkshire Housing Association</summary>
            <div class="details-accordion-content">
              <address>
                South Yorkshire Housing Association<br>
                tel <a href="tel:0114 2900200">0114 2900200</a> / <a href="tel:0800 1380380">0800 1380380</a><br>
                152 Rockingham Street,<br>
                Sheffield<br>
                S1 4EB
              </address>
              <p>
                We hold separate waiting lists for our Extra Care schemes at White Willows and the Meadows. These lists are not currently suspended.
                People can apply directly to the services if they don’t need care.
                The PL for both these schemes is Chris Dearnley:<a href="c.dearnely@syha.co.uk" target="_blank">c.dearnely@syha.co.uk</a>  (0114 244 4978).
                If care is needed, then they go through the link workers. The link workers for the schemes are Jean Peachey for The Meadows (<a href="jean.peachey@sheffield.gov.uk" target="_blank">jean.peachey@sheffield.gov.uk</a>) and Jacqui Bradshaw for White Willows (<a href="Jacqueline.bradshaw@sheffield.gov.uk" target="_blank">Jacqueline.bradshaw@sheffield.gov.uk</a>).
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Together Housing Group</summary>
            <div class="details-accordion-content">
              <address>
                Together Housing Group<br>
                Tel: <a href="tel:0142 2284500">0142 2284500</a><br>
                Bull Green House<br>
                Bull Green<br>
                Halifax<br>
                HX1 2EB
              </address>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Yorkshire Housing</summary>
            <div class="details-accordion-content">
              <address>
                Yorkshire Housing, tel <a href="tel:0345 36644040">0345 36644040</a><br>
                The Place<br>
                2 Central Place<br>
                Leeds<br>
                LS10 1FB<br>
                <a href="http://www.yorkshirehousing.co.uk" target="_blank">http://www.yorkshirehousing.co.uk</a>
                <br>
                
      <button type="button"
                 class="dform_widget email-btn dform_widget_type_button"
                 aria-label="For further information send link"
                 onclick="
                 window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                 KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Yorkshire%20Housing\`
    "
>
                 Send link to review further information
      </button>

              </address>
              <p>
                Mix of housing types including some sheltered schemes. Points system - based on housing need. Generally need to be 18+, but in some cases will take 16+.
                NB: These contact details give a summary only; if further details are needed, please contact the Housing Association directly.
              </p>
            </div>
          </details>
        </div>
      </details>
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  {
    typeKey: "rehousing_services_information_provided",
  },
  {
    typeKey: "rehousing_services_information_requested",
  },
  {
    type: "Request",
    keywords: [
      "rehousing",
      "rehausing",
      "rehousingg",
      "rehosuing",
      "rehouzing",
    ],
    categories: ["Housing"],
  },
  {
    date: "13/05/2025",
    name: "Dinah Williams",
  }
);

const idReferences = new ContentH(
  "idReferences",
  "ID / References",
  "Details on the required identification and references needed for the rehousing process, including verification procedures.",
  `
      <p>
        For current SCC tenants, ID is required for new rehousing applications.<br>
        For non SCC tenants, ID and a Reference are required for new rehousing applications.<br><br>
  
        You must provide two forms of identification (do not post original documents to us). <br>
        One must be from the Proof of ID documents list <br>
        (see Acceptable ID below) whilst the second must provide proof of your current UK address.<br><br>
  
        Photo ID is also required to prove your identity. <br>
        If you do not have photo ID, you must provide a passport-sized photo.  <br>
        A <strong> landlord Reference</strong>  is also required. <br><br>
  
        The same document cannot be used more than once e.g. <br>
        driving licence as primary evidence and proof of address. <br>
        Proof of child benefit receipt is required where children under 16 years of age are 
        being rehoused with you.<br><br>
  
        All required ID's and References must be brought to your Local Area Housing Office, 
        or to Howden House First Point, at the same time. <br>
        <strong> Alternatively, you can upload your documents via the website (including reference if appropriate) </strong><br><br>
  
        Failure to submit all required ID and references at the same time, 
        may mean that you will need to restart the application process from the beginning by 
        submitting a further online application. <br><br>
      </p>
      <h3>Acceptable ID</h3>
  
        <ul>
          <li>Proof of ID documents	Proof of address	Proof of Child Benefit</li>
          <li>Marriage certificate</li>
          <li>Divorce/Annulment papers</li>
          <li>Divorce/Annulment papers</li>
          <li>Passport (this can be expired but if the customer is an adult an adult passport must be produced)</li>
          <li>passport must be produced)</li>
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
          <li>Recent utility bill paid in that person’s name (last quarter)</li>
          <li>Most recent council tax statement</li>
          <li>Home Office standard acceptance letter</li>
          <li>Letter from DWP for tax credits</li>
          <li>Bank statement from within the last 3 months</li>
          <li>Wage slip from current employer</li>
          <li>Life assurance/Insurance policies</li>
          <li>Proof of all other benefits</li>
          <li>Child benefit award letter</li>
          <li>The last 3 consecutive months bank statements (Only where award letter is not available).</li>
        </ul>
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "08/05/2025", name: "Dinah Williams" }
);

const idFaq = new ContentH(
  "idFaq",
  "ID FAQs",
  "Review frequently asked questions about ID requirements for rehousing applications, including document submission and validation processes.",
  `
      <p>
        Customers who have submitted an online application for rehousing, 
        or have made a change to an existing Application, need to provide ID, 
        references and proof of Child Benefit (if appropriate) in order for their application to be accepted 
        and validated.<br><br>
  
        ID is required for all Household Members and should be submitted within 28 days of filling-in 
        the Application.<br><br>
  
        Applicants should present the relevant documents at a Housing Office or First Point where the 
        Main Applicant's and the Joint Applicant's (if appropriate) documents will be photocopied and 
        copies sent to the Registration Team. Household Members documents must also be produced and witnessed by an officer.<br><br>
      </p>
      <h4>Customer advising ID/proofs have been posted to us</h4>
      <p> 
        Customers should not post original documents to us, but when a customer has posted their documents to us,
        they should call to advise us of this. Advisor Note: The Registrations Team need to be advised so they
        can check DMS in the next couple of days and subsequently validate the application. <br>
        Remember to take a note of the names and dates of birth of all household members and include them 
        in any email or case that you send to the Registration Team.<br><br>
  
        Advise the customer that it can take up to a month for their documents to be returned.
      </p>
      <h4>Customer submitted application but did not provide ID within 28 days</h4>
      <p> 
        We will not re-instate your Application and you should 
        submit a new Application and provide the relevant ID.
      </p>
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "07/11/2024", name: "George Whitehouse" }
);

const movingIn = new ContentH(
  "movingIn",
  "Moving In",
  "Details about moving into a new property, including scheduling, property standards, utility setup, and meter readings.",
  `
      <h4>When can I move in once offered a property?</h4>
      <p>
        You can arrange your moving in date as part of the viewing and Sign Up process 
        with the <strong>Voids</strong> Officer.
      </p>
  
      <h4>Standard of property when moving in</h4>
      <p>
        Before you move into your new home we will check to make sure it is safe and secure. 
        Where necessary we get qualified and skilled trades people to test electrical, gas, 
        water and waste services. Our priority is to provide you with a safe living environment. 
        We will ensure that:<br><br>
  
        Sometimes delays may occur due to unforeseen work that is required to bring the property up
        to a standard that meets our Vacant Charter.  
        When the property is ready, we will contact you to arrange an appointment to view the property 
        and then to sign for your new tenancy, should you choose to accept. In some circumstances 
        we may arrange a ‘work in progress’ viewing.<br><br>
  
        Generally, if repairs are left outstanding at the start of a tenancy, these would be minor ones 
        not seriously affecting the use of the property and would require a small amount of work to rectify 
        the given problems. To have completed these within the prior repairs programme/work schedule 
        would have unnecessarily held up the letting, leaving a property standing ‘idle’ whilst there were 
        people needing re-housing. The ‘on-tenancy’ repairs can be completed once you have moved in 
        and will cause very little in the way of disruption, mess or upheaval.
      </p>
  
      <h4>Gas / Electricity supplier</h4>
      <p>
        Any known utilities suppliers information will be provided in the Sign-up pack.
  
        The responsibility/contractual agreement for arranging the supply 
        (and the utility meter installation if necessary) is with the customer and 
        the utility provider e.g. British Gas, Powergen etc.<br><br>
  
        If the supplier is not known, the customer will need to contact one of the numbers below, 
        and then contact the utility supplier themselves:<br><br>
  
        <strong>Gas</strong> - Call the M Number Enquiry Line on <a href="tel:0870 6081524">0870 6081524</a>, provided by xoserve Ltd. 
        They will tell you the supplier and give you your Meter Point Reference Number (MPRN).<br><br>
  
        <strong>Electricity</strong> - Call your local electricity distribution company and ask for their Meter 
        Point Administration Service (MPAS). Alternatively, contact <a href="tel:00845 0707172">0845 0707172</a>.
      </p>
  
      <h4>Meter Readings</h4>
      <p>
        The meter reading before they moved in - you will have been advised of this at sign up 
        and the information will have been provided in their sign up pack. (We also advise Customers 
        to take their own meter readings and contact the utility company themselves.)<br><br>
  
        The meter reading when they move out - you should contact the utility company themselves.
      </p>
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "07/11/2024", name: "George Whitehouse" }
);

const mutualExchanges = new ContentH(
  "mutualExchanges",
  "Mutual Exchanges",
  "Details and guidelines regarding the process, eligibility, and conditions of Mutual Exchange for housing tenants, including required documentation, restrictions, and steps to complete an exchange.",
  `
      <p>
        A Mutual Exchange is where two or more Council or Housing Association tenants can apply to swap
        their homes. The 1985 Housing Act (part 4, section 92) gives tenants this right under certain circumstances.<br><br>
  
        The Mutual Exchange application form can be accessed online at the Property Shop website at: <a href="https://www.sheffieldpropertyshop.org.uk/" target="_blank">https://www.sheffieldpropertyshop.org.uk/</a> and the Sheffield City Council website at: <a href="https://www.sheffield.gov.uk/council-housing/mutual-exchanges" target="_blank">https://www.sheffield.gov.uk/council-housing/mutual-exchanges</a>.
        <br>
        <button type="button" class="dform_widget email-btn dform_widget_type_button"
          aria-label="Send link to mutual exchanges page"
          onclick="
          window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
          KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
          }interactionid=\${KDF.getParams().interactionid}&sel_service=Mutual%20exchanges\`"
        >
        Send link to register online
        </button>
        
        <br>
        <br>
  
        Advisor Note: Check for updates on the progress of a customer's mutual exchange on Abritas.
      </p>
  
      <details class="accordion">
        <summary class="accordion-header">
          <h3>FAQs</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <details class="details-accordion">
            <summary>How long do I have to live in a Council tenancy before I can have an exchange?</summary>
            <div class="details-accordion-content">
              <p>
                You can Mutually Exchange as soon as you have a <strong>secure</strong> Council Tenancy except if you have one 
                of the criteria set out below.
              </p>
              <p>
                Mutual Exchanges are normally allowed, however, we can refuse for the following reasons only as set out in legislation:
              </p>
              <ul>
                <li>You have an introductory tenancy or another type of tenancy that is not Secure or Assured.</li>
                <li>The tenancy is subject to a court order for possession.</li>
                <li>The tenancy is subject to a notice seeking possession or possession proceedings are pending.</li>
                <li>The tenant or a household member is subject to any court order or any proceedings are pending in respect of antisocial behaviour.</li>
                <li>The property is substantially larger than you and your family need.</li>
                <li>The property is too small for you and your family and would result in overcrowding or would break the normal letting criteria in relation to the size of the property and the number of occupants.</li>
                <li>The property has been let as a service tenancy.</li>
                <li>The property has been adapted for a person with a physical disability and is very different from other properties and if the exchange were to go ahead, a disabled person would no longer live in the property.</li>
                <li>The property is one of a group let to people with special needs near to Social Services or a special facility and if the exchange was to go ahead someone needing those services or facilities would no longer be living in the property. This includes sheltered or supported housing schemes and properties normally offered to people with mobility needs.</li>
                <li>The property is the subject of a management agreement with a housing association and at least half the tenants of the properties within the agreement are members and the tenant is not willing to become a member.</li>
              </ul>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>How do I find someone to exchange with? (Homeswapper)</summary>
            <div class="details-accordion-content">
              <p>
                HomeSwapper is an independent nationwide service for social housing tenants who want to exchange their property. 
                As a Sheffield City Council tenant, you can register for free and this will allow you to search for properties anywhere in the UK.<br><br>
   
                HomeSwapper offers a matching service and will send you details of suitable exchanges via email or text. 
                The HomeSwapper website is <a href="https://www.homeswapper.co.uk" target="_blank">https://www.homeswapper.co.uk</a>.
                <br>          
                <button type="button"
                class="dform_widget email-btn dform_widget_type_button"
                aria-label="For further information send link"
                onclick="
                window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
                KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
                }interactionid=\${KDF.getParams().interactionid}&sel_service=Home%20Swapper\`
    "
>
    Send link to review further information
 </button>
                <br>
                <br>
                Before you get full access to the website, your registration will need to be approved. 
                New submissions are approved daily, so except for weekends, it would be a maximum of 24 hours before you can view full details.<br><br>
  
                Any registrations submitted on a Friday or over the weekend will be approved on Monday morning, and for Bank Holidays, 
                it will be the next working day.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>What happens when I have someone to exchange with?</summary>
            <div class="details-accordion-content">
              <p>
                Once you have found a suitable Mutual Exchange, all parties involved will need to complete a Mutual Exchange application form (this includes anyone involved who is not a Council tenant). 
                Please see the website for further information on how to apply.<br><br>
  
                The forms will then be processed by staff within the Mutual Exchange Team, who will contact you directly. 
                If anyone involved is not a Sheffield City Council tenant, paperwork will also need to be completed and returned to the other housing provider(s).
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Do I need permission to do a Mutual Exchange?</summary>
            <div class="details-accordion-content">
              <p>
                Yes. The landlord of everyone involved in the exchange must agree to it. Before we can agree, we will check that:
              </p>
              <ul>
                <li>You have a clear current rent account</li>
                <li>There is no possession order on your home</li>
                <li>Your home is in satisfactory condition</li>
              </ul>
              <p>
                There are also rules that apply in terms of eligibility for different sizes and types of property. 
                Remember that you should not move until you have written permission from us and a move date has been agreed.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Can a Mutual Exchange be refused?</summary>
            <div class="details-accordion-content">
              <p>
                Mutual Exchanges are normally allowed, however, we can refuse for the following reasons only as set out in legislation:
              </p>
              <ul>
                <li>The tenancy is subject to a court order for possession.</li>
                <li>The tenancy is subject to a notice seeking possession or possession proceedings are pending.</li>
                <li>The tenant or a household member is subject to any court order or any proceedings are pending in respect of antisocial behaviour.</li>
                <li>The property is substantially larger than you and your family need.</li>
                <li>The property is too small for you and your family and would result in overcrowding or would break the normal letting criteria in relation to the size of the property and the number of occupants.</li>
                <li>The property has been let as a service tenancy.</li>
                <li>The property has been adapted for a person with a physical disability and is very different from other properties and if the exchange were to go ahead, a disabled person would no longer live in the property.</li>
                <li>The property is one of a group let to people with special needs near to Social Services or a special facility and if the exchange was to go ahead someone needing those services or facilities would no longer be living in the property. This includes sheltered or supported housing schemes and properties normally offered to people with mobility needs.</li>
                <li>The property is the subject of a management agreement with a housing association and at least half the tenants of the properties within the agreement are members and the tenant is not willing to become a member.</li>
              </ul>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>I have rent arrears, can I move?</summary>
            <div class="details-accordion-content">
              <p>
                It depends on the type of arrears. Only current arrears are taken into consideration. <br>
                You must have a completely clear current rent account before full consent will be given (See conditional consent above). <br>
                You will not be able to move with current arrears, even if you have been sticking to a repayment plan. <br>
                Any other types of arrears, including former tenancy arrears, recharges, etc., will be disregarded and will not prevent an exchange from taking place.<br>
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>If I Mutually Exchange, will I keep my waiting time?</summary>
            <div class="details-accordion-content">
              <p>
                Yes. A Mutual Exchange is not linked to your rehousing application and will not affect your waiting time.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Is it illegal to pay someone to do a Mutual Exchange?</summary>
            <div class="details-accordion-content">
              <p>
                It may be illegal in some circumstances. We would advise that you should never offer or receive money to carry out a Mutual Exchange, 
                including paying off rent arrears. There is no guarantee that the Mutual Exchange will take place and Sheffield City Council will not get involved 
                in any disputes related to such matters.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>What if HomeSwapper site asks me for a fee?</summary>
            <div class="details-accordion-content">
              <p>
                When registering, you need to ensure that you have selected Sheffield City Council as your landlord. <br>
                This is within Section 3 of the registration. If the site asks for payment, the customer should not go any further. 
                HomeSwapper is a free site for all SCC tenants.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Will I be able to monitor my progress online?</summary>
            <div class="details-accordion-content">
              <p>
                This will be possible soon via HomeSwapper.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>My property has passed the inspection, what happens next?</summary>
            <div class="details-accordion-content">
              <p>
                Once your property has passed an inspection, a report will be sent to the Mutual Exchange Team. <br>
                Subject to other tenancy checks, once the report is received, you will be contacted with an appointment to sign the paperwork.<br>
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>Who needs to attend the sign up for my Mutual Exchange?</summary>
            <div class="details-accordion-content">
              <p>
                All tenants involved in the sign-up, including any joint tenants, must attend.
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>I have signed up but no longer wish to move</summary>
            <div class="details-accordion-content">
              <p>
                Once you have signed the Deeds of Assignment, the exchange becomes legally binding and you must move by the tenancy commencement date. <br>
                If you fail to do so, the Council can serve a Notice to Quit and take possession proceedings for unauthorized occupation of the property.<br>
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>What is conditional consent?</summary>
            <div class="details-accordion-content">
              <p>
                Conditional consent is when we are unable to agree to the exchange immediately but, providing the problem is resolved, we may allow the exchange to go ahead. <br>
                For example, in the case of current rent arrears, we may agree that once the arrears have been cleared in full, the exchange can take place. <br>
                If we give conditional consent, we will write to you explaining what the delays are and what you need to do before we arrange for the properties to be exchanged.<br>
              </p>
            </div>
          </details>
  
          <details class="details-accordion">
            <summary>There is a problem with the tenancy I want to exchange into and I have been given conditional consent, what can I do?</summary>
            <div class="details-accordion-content">
              <p>
                As you have been advised in your Conditional Consent letter, under the Data Protection Act we are unable to give you any further information. <br>
                We will have also written to the other party advising them on what action they need to take to resolve the situation. <br>
                Once the problem has been resolved, we will be happy to make arrangements for both parties to come and sign the Deed of Assignment document.<br>
              </p>
            </div>
          </details>
        </div>
      </details>
    `,
  {
    buttonLabel: "Raise Enquiry",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "" },
  { typeKey: "rehousing_services_information_provided" },
  {
    type: "Request",
    keywords: ["rehousing", "rehousing", "rehousign", "rehozing"],
    categories: ["Housing"],
  },
  { date: "12/02/2025", name: "Nathan Smith" }
);

const priorities = new ContentH(
  "priorities",
  "Priorities",
  "Learn about priority for rehousing, including how priority is assessed, what it means for your housing options, and how to request a review.",
  `
    <p>
      Priority for rehousing can be awarded if there is a need to be rehoused urgently and immediately. When your circumstances have been assessed, we will look at whether we can give you priority for housing ahead of other people on the Housing Register. We will then write to you explaining our decision. If we give you priority, we will explain why it has been given, what sort of property it is for and how long you have to use it. The letter will also explain how to request a review of the decision if you are unhappy with it.<br><br>
  
      In some cases we will make you an offer of a property that we feel meets your needs. If we are unable to contact you due to changes not notified to us, your registration may be suspended or cancelled.<br><br>
  
      If you may be eligible for a priority you will be asked to provide us with further information. Once you have been assessed, we will write to you and explain whether you have been given priority. If you are given priority the letter will explain what sort of properties you can bid for with the priority and when the priority will be reviewed.<br><br>
  
      We will write to you and explain why if you have not been awarded a priority. We will tell you if you can request a review of the decision and how to go about this. In many cases, if you are not given priority but need further assistance, we will work with you, your advocates and our partner agencies to provide advice and assistance.<br><br>
  
      A priority does not affect your waiting time, you can apply for properties with both your waiting time and your priority. For most of the properties advertised we will consider people with priority first. If you have a priority, you must keep bidding for suitable properties. Even with a priority, you may have to bid for a considerable time before you are offered a property. In order for our system to be fair, a proportion of properties are also let on the basis of an applicant's waiting time on the housing register. This will be clearly shown in the property adverts.<br>
     </p> 
    `,
  {
    buttonLabel: "Raise Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "" },
  { typeKey: "rehousing_services_information_provided" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "12/02/2025", name: "Nathan Smith" }
);

const priorityBandingTable = new ContentH(
  "priorityBandingTable",
  "Priority Banding Table",
  "Priority Banding Table details various rehousing priorities and their associated bands, along with hierarchy rules for certain categories like anti-social behaviour, homelessness, and health-related needs.",
  `
      <h3>Priority Banding Table</h3>
  
      <p>The table below shows the list of priorities and the bands they fall in. </p>
  
      <p>Some of the priorities span multiple bands and we cannot give a definitive answer for which band they will be in e.g. demolition and health. 
      As such, these are marked in the table below as ‘None’. </p>
  
      <p>Also marked as ‘None’ are the priorities which no longer exist. These are: </p>
  
      <ul>
        <li>Council Service tenant retiring or leaving employment</li>
        <li>Council service tenant who is dismissed</li>
        <li>Special Case</li>
        <li>If a priority spans the bands, the awarding officer will have already spoken with the customer.</li>
      </ul>
  
      <h3>Effective Dates</h3>
  
      <p>Within bands A-D there is no hierarchy, offers will be made solely on the effective date within the band. For example, 
      three different priorities within the same band would be ordered based on the earliest effective date first.</p>
  
      <p>The only exception is band E which has the following hierarchy: </p>
  
      <ul>
        <li>No Local Connection</li>
        <li>Refused Offers</li>
        <li>Unacceptable Behaviour </li>
      </ul>
  
      <p>Inside each of the above rungs, applicants are ordered based on effective date.  
      Therefore, an applicant with unacceptable behaviour in band E will always come below an applicant in band E due to refused offers 
      regardless of their effective date.</p>
  
      <details class="accordion">
        <summary class="accordion-header">
          <h3>Priorities Banding Table</h3>
          <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            <table border="1" cellpadding="0" cellspacing="0" style="width:100%">
              <tbody>
                <tr>
                  <td style="width:300px; height:10px" bgcolor="#002040"><strong><font color="black">Current Approval Reasons</font></strong></td>
                  <td style="width:300px" bgcolor="#002040">
                    <p><strong><font color="black">New Banding Criteria</font></strong></p>
                  </td>
                  <td style="width:300px" bgcolor="#002040">
                    <p><strong><font color="black">Bands In Which They Appear</font></strong></p>
                  </td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Anti-social behaviour (ASB) - Rehousing Options for the Victim</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Council Service Tenant Retiring or Leaving Employment</p></td>
                  <td style="width:189px"><p>None</p></td>
                  <td style="width:217px"><p>General Needs band D (Inactive)</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Council Service Tenant Who is Dismissed</p></td>
                  <td style="width:189px"><p>None</p></td>
                  <td style="width:217px"><p>General Needs band D (Inactive)</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Demolition/Clearance of Council Owned Properties</p></td>
                  <td style="width:189px"><p>None</p></td>
                  <td style="width:217px"><p>General Needs band D (Inactive)</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Demolition/Clearance of Owner Occupied and Private Rented Sectors</p></td>
                  <td style="width:189px"><p>None</p></td>
                  <td style="width:217px"><p>General Needs band D (Inactive)</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Development Work in Council Owned Property</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>Top Priority band A</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Domestic Abuse</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Downsizing for Under Occupiers</p></td>
                  <td style="width:189px"><p>Under occupation and/or release of an adapted property</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Homeless - Immediate Priority</p></td>
                  <td style="width:189px"><p>Full Homelessness Duty</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Homeless or Threatened with Homelessness - Planned Priority</p></td>
                  <td style="width:189px"><p>Other Homelessness Duties</p></td>
                  <td style="width:217px"><p>3rd Priority band C</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Insanitary or Unsatisfactory Housing Conditions</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Mental Health, Learning Disability, Long Term Health Problems, Community Care or Other Health Problem</p></td>
                  <td style="width:189px"><p>None</p></td>
                  <td style="width:217px"><p>General Needs band D (Inactive)</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Mobility Needs and Service Personnel</p></td>
                  <td style="width:189px"><p>Health</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Permanent Moves for Council Tenants Who Have Moved Temporarily</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>Top Priority band A</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Racial and Other Harassment of Council Tenants</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Re-Designation of Older Persons Property</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>3rd Priority band C</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Release of Disabled Persons Property</p></td>
                  <td style="width:189px"><p>Under Occupation and/or Release of an Adapted Property</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Sheffield Overcrowding</p></td>
                  <td style="width:189px"><p>None</p></td>
                  <td style="width:217px"><p>General Needs band D (Inactive)</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Special Case</p></td>
                  <td style="width:189px"><p>None</p></td>
                  <td style="width:217px"><p>General Needs band D (Inactive)</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Statutory Overcrowding</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Support and Hardship needs</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Supportive Hostels</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Temporary and Permanent Moves for Non-Council Households Undergoing Modernisation or Repair with Grant Aid</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>Top Priority band A</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Vulnerable Young Person Aged 16 or 17</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
                <tr>
                  <td style="width:225px"><p>Young People and Children’s Act 1989</p></td>
                  <td style="width:189px"><p>Welfare, Hardship and Support Needs</p></td>
                  <td style="width:217px"><p>2nd Priority band B</p></td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </details>
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "07/22/2024", name: "George Whitehouse" }
);

const PropertyOffersAndViewings = new ContentH(
  "PropertyOffersAndViewings",
  "Property Offers and Viewings",
  "Understand how Sheffield City Council allocates properties, including the bidding process, property offers, and viewings based on eligibility and priority.",
  `
      <p>
        Once the bidding period has closed on a Tuesday night, 
        bids for each property are sorted automatically based on the eligibility criteria.
      </p>
      <h3>How does Sheffield City Council allocate the property?</h3>
       <p>
        Once the bidding period has closed on a Tuesday night, bids for each property are sorted automatically based on the eligibility criteria. Full details of how we allocate properties can be found in Sheffield City Council’s Allocations Policy however in short:
      </p>
      <ul>
        <li>Properties advertised to Waiting Time – These properties will be offered to customers in band D first in order of their effective date (oldest first). If no customers in band D accept the property, it will be offered to the other bands in the following order: band A, band B, band C, Band E.</li>
        <li>Properties advertised to Housing Register – These properties will be offered to customers with a priority in band A first in order of their effective date (oldest first). If no customers in band A accept the property, it will be offered to the other bands in the following order: band B, Band C, Band D, Band E.</li>
        <li>Properties advertised to First Come First Served – These properties will be offered to the customer who placed their bid first regardless of their band or effective date. The customer must still meet the minimum eligibility requirements in order for their bid to be considered.</li>
        <li>If your bid for a property was successful, we will contact you and invite you to view the property as soon as possible. We do not contact unsuccessful applicants however; you will be able to check your final bid position on the Sheffield Property Shop. You can do this by logging in to your account.</li>
        <li>There are some circumstances where a customer may come in first position for a property however due to other circumstances such as a debt to the Housing Service or a history of anti-social behaviour, they are bypassed and are not made the offer. We will let you know if we bypass you for an offer and explain how you can rectify this.</li>
        <li>Please note, if you make a bid for a property and your circumstances change or your priority ends during the bidding period, we will not offer you the property if you no longer meet the eligibility criteria.</li>
      </ul>
    `,
  {
    buttonLabel: "Raise Enquiry",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "" },
  { typeKey: "rehousing_services_information_provided" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "12/02/2025", name: "Nathan Smith" }
);

const referencesFAQs = new ContentH(
  "referencesFAQs",
  "References FAQs",
  "Guidelines for providing references when applying for housing or making changes to applications, including who can provide them, how to obtain them, and the timeline for submission.",
  `
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Why do I need to provide a reference?</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Current SCC tenants are not required to submit a reference as the Council is already aware of 
          their circumstances and tenancy history.<br>
          References were introduced as part of the Allocations Policy. The purpose of this is for SCC to better 
          understand the people who are currently on its Housing Register. <br>
          SCC often has very little knowledge of the people on the register and therefore requesting a reference will help the Council to improve this.
        </p>
      </div>
    </details>
  
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Who can provide a reference?</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          All customers other than current SCC tenants now need to provide a reference when joining the Housing Register. 
          The following customers also need to provide a reference when creating a new application:
      </p>
      <ul>
          <li>Housing Association tenants (Landlord needs to provide the reference)</li>
          <li>Tenants of other Councils (Landlord needs to provide the reference)</li>
          <li>Private rented tenants (Landlord needs to provide the reference - the landlord must not be a family member)</li>
          <li>Owner occupiers - no need for a reference as bidding is restricted</li>
          <li>Living with family/parents (18+ only, character reference is needed)</li>
          <li>NFA/Living with friends (Character reference is needed)</li>
      </ul>
      <p>
          For customers who currently do or have ever lived independently, the reference should be completed by their most recent landlord.
          Advisor note: For customers who are unable to provide a landlord's reference, they must gain agreement from the 
          Registration Team for what reference will be acceptable and they will send the professional reference form out.<br>
          If the customer is advising that there would be a charge for the reference, the customer would be responsible for 
          this charge. SCC will not pay landlords to provide a reference.
      </p>
      </div>
    </details>
  
    <details class="accordion">
      <summary class="accordion-header">
        <h3>How to get a Landlords reference form?</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Landlord references should be submitted using the SCC reference form. This can be found online on the 
          Property Shop website at: <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank">www.sheffieldpropertyshop.org.uk</a>. Customer should select:

 <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Property%20Shop\`
    "
>
    Send link to review further information
  </button>
   
      </p>
      <ul>
          <li>Information header, select Identification and References</li>
          <li>Scroll down to SCC Reference Template</li>
          <li>Landlord reference forms are also available at local housing offices.</li>
      </ul>
      </div>
    </details>
  
    <details class="accordion">
      <summary class="accordion-header">
        <h3>How long do I have to provide the reference?</h3>
        <div class="accordion-icon"></div>
      </summary>
    <div class="accordion-content">
      <p>
        You will have the same 28 days to provide the reference as they have for providing ID currently. This 
        period starts from the day that the online application was submitted. Do not submit the application until 
        you have all of the relevant documentation. If ID and a reference are not submitted within this time, the 
        application will be cancelled and you will need to resubmit this online.
      </p>
    </div>
    </details>
  
    <details class="accordion">
      <summary class="accordion-header">
        <h3>What will the reference be used for?</h3>
        <div class="accordion-icon"></div>
      </summary>
    <div class="accordion-content">
      <p>
        The reference will be used along with the information supplied by the customer when completing their 
        application online to determine which band they should be placed in. The criteria for being placed in 
        band D or band E can be found within the Allocations Policy. Customers will be notified in writing which 
        band they have been placed in and how to challenge this if they feel it is incorrect. Customers who have 
        special or extenuating circumstances can request an Exception Request if they wish to do so. All such 
        requests are assessed on their merits and the customer will be advised of the decision in writing.
      </p>
    </div>
    </details>
  
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Is a reference required for a change of circumstances?</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          A reference will only be required if the change being submitted is a change of address, or the Application 
          is being changed to a Joint Application. If the customer is changing their address, a new reference would 
          be required with the exception of current SCC tenants moving to another SCC property. In these cases, 
          we would still not require a reference.
        </p>
      </div>
    </details>
  
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Is a reference required as part of a renewal process?</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Customers are not required to submit a reference as part of the renewals process, 
          <strong>unless a new address is provided or</strong> the Application is being changed to a Joint Application.
        </p>
      </div>
    </details>
  
   <details class="accordion">
      <summary class="accordion-header">
        <h3>Is a reference required as part of a renewal process?</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <h3>What if the customer can't visit an Area Office?</h3>
        <p>
          There are alternatives to visiting the area office yourself, such as asking your friends or family 
          to bring your ID and Reference in for you, as this is safer than posting your original ID documents. 
          <strong>Documents can be uploaded via the property shop website.</strong>
        </p>
      </div>
    </details>
    `,
  {
    buttonLabel: "Report Housing Enquiry ",
    formName: "hou_rehousing_enquiry",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "15/05/2025", name: "Dinah Williams" }
);

const threeOffersDemotedorDisqualified = new ContentH(
  "threeOffersDemotedorDisqualified",
  "Three Offers Demoted or Disqualified",
  "Understand the consequences of refusing three reasonable housing offers, including potential demotion or disqualification from the Housing Register.",
  `
  <h3>Reduced preference (demotion) following refusal of 3 reasonable offers</h3>
  <p> 
    If a customer is in band D and they have refused 3 offers in 12 months, the Sheffield City Council Allocations Policy states:<br>
    <ul>
      <li>If you refuse an offer of a property, you could be moved to a lower band or your application may be cancelled. The following will also be considered as a refusal:</li>
      <li>If you fail to respond to an offer of a property made to you within the timescales specified and do not have a good reason for this failure.</li>
      <li>If you fail to attend a viewing of a property offered to you within the timescales specified and do not have a good reason for this failure.</li>
    </ul>
    If you are to be Demoted, we will write to you 21 days before you are Demoted. If you do not respond, you will be Demoted to band E on the Housing Register for 12 months. After 12 months you can request to be moved back in to band D.
  </p>
     <h3>Disqualification following refusal of 3 reasonable offers</h3>
     <p>
      If a customer who is in band E refuses 3 reasonable offers, they can be disqualified from the Housing Register.<br>
      The customer will be notified in writing and they have 21 days to appeal the decision. <br>
      If we do not hear from the customer within 21 days, their housing application will be cancelled and they will be disqualified from the Housing Register for 12 months. <br>
      After 12 months the customer is able to submit an on-line application for Social Housing to re-join the Housing Register.
     </p>
    `,
  {
    buttonLabel: "",
    formName: "",
  },
  { typeKey: "rehousing_services_information_provided" },
  { typeKey: "rehousing_services_information_requested" },
  {
    type: "Request",
    keywords: [
      "rehosing",
      "rehausing",
      "rehousingg",
      "rehosuing",
      "rehouzing",
      "three",
      "offers",
      "demoted",
      "disqualified",
    ],
    categories: ["Housing"],
  },
  { date: "04/12/2024", name: "Joseph Coupland" }
);

const rehousing = new MenuH(
  "rehousing",
  "Rehousing",
  "Guidelines on applying for rehousing, understanding the process, and checking eligibility for alternative housing.",
  [
    allocationsPolicy,
    applicationChanges,
    applyForRehousing,
    bidding,
    eligibility,
    fosteringAndAdoption,
    housingAssociations,
    idReferences,
    idFaq,
    movingIn,
    mutualExchanges,
    priorities,
    priorityBandingTable,
    PropertyOffersAndViewings,
    referencesFAQs,
    threeOffersDemotedorDisqualified,
  ]
);

//#endregion Rehousing

//#region Rents
const balanceEnquiry = new ContentH(
  "balanceEnquiry",
  "Balance Enquiry",
  "Learn how to manage your housing application, including balance checks, change of circumstances, and required identification for updates.",
  `
  <p>
  You can now check your own balance and rent account online by logging onto 
  <a href="https://www.sheffield.gov.uk/home/council-housing/check-my-rent-balance">https://www.sheffield.gov.uk/home/council-housing/check-my-rent-balance</a>.
<br>
  
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Check%20rent%20balance\`
    "
>
    Send link to review further information
</button>

  </p> 
`,
  {
    buttonLabel: "Check balance",
    formName: "hou_check_balance",
  },
  { typeKey: "" },
  { typeKey: "rents_information_provided" },
  {
    type: "Request",
    keywords: ["rehosing", "rehausing", "rehousingg", "rehosuing", "rehouzing"],
    categories: ["Housing"],
  },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const contactRentsTeam = new ContentH(
  "contactRentsTeam",
  "Contact Rents Team",
  "Find contact information for various housing and benefits teams in Sheffield, including Rent, Benefits, Arrears, and Discretionary Housing Payments.",
  `
    <details class="accordion">
        <summary class="accordion-header">
            <h3>Contact Benefits Team</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                If you need to contact the Benefits Team, transfer the customer to the Benefits Team on 0114 2736777. 
                If the line is busy, DO NOT ask the customer to call back later today. 
                Instead, advise the customer to email either: <a href="mailto:council.tax@sheffield.gov.uk">council.tax@sheffield.gov.uk</a> 
                or <a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a>.
            </p>
            <p>
                Alternatively, they can complete the online form at <a href="https://www.sheffield.gov.uk/benefits/housing-benefit">https://www.sheffield.gov.uk/benefits/housing-benefit</a>.
              <br>
                
    <button
        type="button"
        class="dform_widget email-btn dform_widget_type_button"
        aria-label="For further information send link"
        onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
        KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Apply%20for%20Housing%20Benefit\`
    "
    >
        Send link to review further information
   </button>

            </p> 
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Contact Centre Supervisor</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            <strong>Advisor note: Do not give these numbers out to the public</strong>
          </p>
          <p>
              <strong>Service Area:</strong> Customer Services (Housing Call Centre Supervisors)
          </p>
          <p>
              <strong>Telephone Number:</strong><br><br>
              Tracy Harding:<br>
              Teams: 0114 2053091 or Storm: 71021;<br><br>
              Lisa Styring:<br>
              Teams: 0114 2053091 or Storm: 71015;<br><br>
              Sarah Barry:<br>
              Storm: 22657
          </p> 
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Contact Court Team and Procedure Team</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                <strong>Service Area:</strong> Income Management & Financial Inclusion Team.
            </p>
            <p>
                <strong>Telephone Number:</strong> <a href="tel:0114 2052910">0114 2052910</a>
            </p>
            <p>
                <strong>Email Address:</strong> <a href="mailto:homesrentcourt@sheffield.gov.uk">homesrentcourt@sheffield.gov.uk</a>
            </p>
            <p>
                <strong>Referred by Phone:</strong> Customer Above NSP & Refuses to be Transferred Refer by Case.
            </p> 
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Contact Current Arrears Team</h3> 
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
              Current Arrears North 1: 0114 2057221<br>
              Current Arrears North 2: 0114 2052923<br><br>
              Current Arrears South 1: 0114 2052906<br>
              Current Arrears South 2: 0114 2057222<br><br>
              Introductory Tenancy Team: 0114 2052911
            </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Contact Debt Recovery Team</h3> 
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
          <p>
            Debt Recovert Team: 0114 2052904
          </p>
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Discretionary Housing Payment Team</h3> 
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Transfer the Customer to the Discretionary Housing Payments Team on the number below, 
                or give the customer the number.
            </p>
            <p>
                <strong>Service Area:</strong> Revenues and Benefits.
            </p>
            <p>
                <strong>Telephone Number:</strong> <a href="tel:0114 2736983">0114 2736983</a>.
            </p>
            <p>
                <strong>Further Information:</strong> Revenues and Benefits Client Team, PO Box 1283, Town Hall, Sheffield S1 1UL.
            </p>
            <p>
                <strong>Email Address:</strong> <a href="mailto:DHP-CTS@sheffield.gov.uk">DHP-CTS@sheffield.gov.uk</a>
            </p> 
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Department of Work and Pensions (DWP)</h3> 
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Transfer the Customer to the Department of Work and Pension on the number below, 
                or give the customer the number.
            </p>
            <p>
                <strong>Service Area:</strong> DWP.
            </p>
            <p>
                <strong>Telephone Number:</strong> <a href="tel:0345 6057064">0345 6057064</a>.
            </p> 
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Housing Benefits Overpayments</h3> 
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                Transfer the Customer to the Housing Benefits Overpayment Team on the number below, 
                or give the customer the number.
            </p>
            <p>
                <strong>Service Area:</strong> Housing Benefit.
            </p>
            <p>
                <strong>Telephone Number:</strong> <a href="tel:0114 2734199">0114 2734199</a>.
            </p>
            <p>
                <strong>Email Address:</strong> <a href="mailto:benefits@sheffield.gov.uk">benefits@sheffield.gov.uk</a>
            </p>  
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Rent Account Maintenance Team</h3> 
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
                <strong>Service Area:</strong> Income Management & Financial Inclusion Team.
            </p>
            <p>
                <strong>Telephone Number:</strong> <a href="tel:0114 2052909">0114 2052909</a>.
            </p>
            <p>
                <strong>Email Address:</strong> <a href="mailto:Homesrentincome@sheffield.gov.uk">Homesrentincome@sheffield.gov.uk</a>.
            </p> 
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Sheltered Housing Rents</h3> 
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
              Sheltered Housing: 0114 2037603
            </p> 
        </div>
    </details>

    <details class="accordion">
        <summary class="accordion-header">
            <h3>Rents Support Team</h3>
            <div class="accordion-icon"></div>
        </summary>
        <div class="accordion-content">
            <p>
              Rents Support Team: 0114 2052903
            </p> 
        </div>
    </details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "rents_transferred_to_service" },
  { typeKey: "rents_information_provided" },
  { type: "Contact Rents Team", keywords: ["Rent"], categories: ["Housing"] },
  { date: "15/05/2025", name: "Dinah Williams" }
);

const arrearsorDebt = new ContentH(
  "arrearsorDebt",
  "Court Order Removal of",
  "Learn how to request the removal of a court order from your rent account, including the necessary steps and contact with the Court Team",
  `
    <p>
      If you would like the removal of a Court Order from your rent account, or to pay for the removal 
      of the Court Order, then you can either apply direct to the court, or speak to our Court Team on: 0114 2052910.<br>br>
      You will require your court reference number. <br><br>

      If the Court Team are happy for the Order to be removed, they will send a letter to the court 
      advising the court that that they do not oppose the removal.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "rents_transferred_to_service" },
  { typeKey: "rents_information_provided" },
  { type: "Information", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const debtRecovery = new FormH(
  "debtRecovery",
  "Debt Recovery",
  "Use this form to enquire about Debt recovery or any correspondence you have received regarding Debt Recovery.",
  "hou_rents_debt_recovery",
  {
    type: "Request",
    keywords: ["Debt", "Housing", "Rent", "Recovery"],
    categories: ["Housing"],
  },
  { date: "12/03/2025", name: "Nathan Smith" }
);

const references = new ContentH(
  "references",
  "References",
  "Find out how to request financial or tenancy references, including fees for mortgage or private landlord requests.",
  `
    <p>
      IMFIT (Rents) can provide a financial reference for you. Your Neighbourhood Support Team can provide a Tenancy Reference.<br>
      Both of these may be subject to charges before the reference is returned.<br>
      If this is for a mortgage company or a private landlord, the company needs to put this request in writing. There is a charge for this of £60, which must be paid to IMFIT before the reference is returned. The fee can be paid by debit/credit card or by BACS. If they want to pay this, transfer the call to IMFIT - this is NOT paid to the rent account.<br>
      Reference requests should be sent to:
    </p>
    <address>
      Sheffield Council Housing Service<br>
      PO Box 5967<br>
      Sheffield<br>
      S2 9GH
    </address>
    <p>
      For Social Landlords (Housing Associations), these also need to be put in writing but there is no charge.<br>
      Social Landlords can also email details of their request to <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> if they prefer to send an email.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "rents_information_provided" },
  { type: "References", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const rentArrangements = new FormH(
  "rentArrangements",
  "Rent Arrangements",
  "Use this form to set up, amend or enquire about a Rent Arrangement.",
  "hou_rents_arrangements",
  {
    type: "Request",
    keywords: ["Arrangement", "Housing", "Rent"],
    categories: ["Housing"],
  },
  { date: "12/03/2025", name: "Nathan Smith" }
);

const rentRefunds = new FormH(
  "rentRefunds",
  "Rent Refunds",
  "Use this form to chase or request a Rent refund. You must more than 4 weeks in credit to request a refund and the refund will leave the account 4 weeks in credit.",
  "hou_rents_refunds",
  {
    type: "Request",
    keywords: ["Refund", "Housing", "Rent"],
    categories: ["Housing"],
  },
  { date: "12/03/2025", name: "Nathan Smith" }
);

const rentVariation = new ContentH(
  "rentVariation",
  "Rent Variation",
  "Learn about rent changes, including the annual increase, rent payment methods, and how various charges, including tenant levies and housing benefit adjustments, are handled.",
  `

  <details class="accordion">
    <summary class="accordion-header">
        <h3>Rent Free Weeks</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>The rent-free weeks this year will be weeks commencing:</p>
        <ul>
            <li>Monday 16th December 2024</li>
            <li>Monday 23rd December 2024</li>
        </ul>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
        <h3>Is your Rent Increasing?</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            The annual changes to the rent charged are agreed by the Council Cabinet every January. 
            The general rent increase agreed from 1st April 2024 is <strong>7.7%</strong>.
        </p>
        <p>
            You can check an outline of the changes to rents and charges at Sheffield city council website
            by visiting the following links:
        </p>
        <p>
            <a href="/council-housing/how-rent-is-calculated">How we calculate your rent</a>
        </p>
        <p>
            <a href="/council-housing/paying-your-rent" data-drupal-link-system-path="node/3140">Paying your rent</a>
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Direct Debit</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Anybody applying to pay by Direct Debit should be dealt with as normal, in the same way, 
            during this rent change period.
        </p>
        <p>
            Any queries on Direct Debits need to be directed to the Income Management and Financial 
            Inclusion Team.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>OHMS System Issues</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Any OHMS Rent system issues can be reported through the IT Service Desk, Tel: <a href="tel:0114 2734476">0114 2734476</a>.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Weekly Rent Year</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            The year 2024-2025 is a 53-week rent year, which means there are 53 Mondays in the financial year. 
            Taking into account the rent-free weeks, rent will be charged over 51 weeks.
        </p>
        <p>
            When calculating monthly arrangements, these will need to be calculated over 51 weeks instead of the normal 50 weeks. 
            The rent calculator can be used to assist in calculating arrangements:
        </p>
        <p><strong>File Path:</strong> G:/HSG/Public/Rents/001. public sharepoint digital ringbinder/1. Comms/51 week rent calculator.xlsx</p>
        <h3>Rent Calculator</h3>
        <p>
            Anybody applying to pay by Direct Debit should be dealt with as normal, in the same way, during this rent change period. 
            Any queries on Direct Debits need to be directed to the Income Management and Financial Inclusion Team.
        </p>
        <p>This is relevant to this year but can change year to year.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Full List of Variations</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <ul>
            <li>Social Council rents – 7.7% increase</li>
            <li>Affordable Rents – 7.7% increase</li>
            <li>Interim/High Support/Temporary Accommodation Rents – 7.7% increase</li> 
            <li>Garage Rents – 7.7% increase</li>
            <li>District/Community Heating – No increase</li>
            <li>Sheltered Accommodation service charge – 6.7% increase</li>
            <li>Furnished charges – 6.7% increase</li>
            <li>Burglar alarm charges – 6.7% increase</li>
            <li>Insurance charges – 10% increase. Household contents insurance charges will be fixed for two years until April 2026</li>
            <li>South Yorkshire Housing leased managed properties – 7.7% increase</li>
            <li>Shared Ownership Properties – 7.7% increase</li>
            <li>Gypsy & Traveller charges – to be confirmed</li>
            <li>Direct deductions from the DWP for rent arrears will be £4.55 per week from 1st April 2024</li>
        </ul>
        <p>
            <strong>This is relevant from April 2024 to April 2025 when it will be updated with new rent increase charges</strong>.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Garages</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Garage letters will be sent from 18th March 2024, so tenants will only receive one garage letter. 
            This is because we don't have to give legal notice of the rent change for garages.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Rent Charged After Property is Vacant</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Please note that the rent for any properties let after being vacant will be set at the maximum 
            rent, as agreed by the Co-op Executive. This will be applied automatically, so the rent showing in 
            the Choice Based Letting advert will be correct. This may mean, in some instances but not all, that
            the new tenant may pay a higher rent than the previous tenant.
        </p>
        <p>
            <strong>From Notes Section on Spreadsheet:</strong> Needs changing; the wording is a bit odd! 
            Not sure where this has come from!
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Tenant Levy</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            The Tenants Levy is a weekly payment of 10p that is used to support community activity in our 
            council housing areas. It is collected by the Council and will go towards funding local Tenants
            and Residents Associations (TARAs). Where there is currently no TARA, the levy is held by the 
            Council to support any future community activity in the local area.
        </p>
        <p>
            Tenants can decide whether to pay the levy, which is not covered by Housing Benefit or Universal Credit. 
            For any tenant levy enquiries contact the Community Engagement Team: <a href="mailto:getinvolved@sheffield.gov.uk">getinvolved@sheffield.gov.uk</a> or call <a href="tel:0114 2735566">0114 2735566</a>.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Dealing with Detailed Rent Enquiries</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Please refer any detailed queries about rent charges or the changes to the relevant Income 
            Management and Financial Inclusion Team.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Housing Benefit</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            The Housing Benefits Year end on Academy will start week commencing 4th March 2024, so Academy
            is possibly unavailable from Wednesday 6th March 2024 to Monday 11th March 2024.
        </p>
        <p>
            The Housing Benefit letters will be posted out from 11th March 2024.
        </p>
        <p>
            Apart from these dates, Academy will be available to view as normal. If this changes, an update 
            will be issued. All housing benefit adjustments will be credited to rent accounts as normal throughout March.
        </p>
        <p>
            All changes to Housing Benefit levels, either through cancellations, changes of circumstances, 
            or creation of a new case will continue as normal throughout March.
        </p>
        <p>
            The Housing Benefit Overpayment recovery rate (Clawback) amount is increasing. From 1st April 2024, 
            it will be £13.65 a week for normal cases up to a maximum of £22.75 per week, plus 50% of any disregard 
            included in the calculation for earnings. The minimum clawback rate is £4.55 per week.
        </p>
        <p>
            All changes to weekly housing benefit for the new rent levels will be applied to the Rents system 
            from 1st April 2024.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Notice of Variation (NOV) Letters and Deliveries</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            The Notice of Variation (NOV) letter will be posted from 15th February 2024, arriving with 
            tenants in the seven days after this.
        </p>
        <p>
            These letters are based on information produced on 8th February 2024, so any tenancy changes 
            after that won’t be included. This means any successions, assignments, changes of names, etc. 
            will be correct on the system, but the letters will be sent with the original details on them.
        </p>
        <p>
            The NOV letter includes the detailed rent change letter and a letter from the Housing Cabinet Member.
        </p>
        <p>
            The second letter will be posted to tenants from 18th March 2024.
        </p>
        <p>
            The second letter includes the Gross amount letter and inserts. This second letter will show 
            all the charges on the account and WILL include the housing benefit, so it shows the net amount payable.
        </p>
        <p>
            The benefit details included are as of 11th March 2024, so any changes in entitlement after that 
            date won’t be shown on these rent change letters. Tenants will be notified separately by Sheffield 
            Benefits Service for any changes after 11th March 2024.
        </p>
        <p>
            Anybody on Housing Benefit will also receive a letter directly from Sheffield Benefits Service 
            telling them what their Housing Benefit is and how it has been worked out. These letters from the
            Benefits Service will be posted to tenants from 11th March 2024. Any queries need to be made directly
            to the Sheffield Benefits service.
        </p>
        <p>
            The Water rates leaflet for properties covered by Yorkshire Water will be posted separately around 
            the same time. As before, these dates change every year.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Standing Orders</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            If you pay your rent by standing order, please inform your bank of the new amount as soon as possible.
        </p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Total Indebtedness</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>
            Rent balances will show the correct Total Indebtedness throughout this period. 
            The balances should be correct for all tenants, given there is no closedown.
        </p>
        <p>
            <strong>Any queries regarding rent payments should be sent to Income Management and Financial Inclusion Team.</strong>
        </p>
    </div>
</details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "rents_information_provided" },
  { type: "Rent Varitaion", keywords: ["Rent"], categories: ["Housing"] },
  { date: "16/10/2024", name: "Shahzad Athar" }
);

const statements = new ContentH(
  "statements",
  "Statements",
  "Find out how to access rent statements, request current or past statements, and understand the process for tenants in arrears.",
  `
  <p>
  Statements are issued every 12 months or are available online along with rent balance enquiries at 
  <a href="https://www.gro.sheffieldhomes.org.uk">https://www.gro.sheffieldhomes.org.uk</a>. 
  <br>
  
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Homes\`
    "
>
    Send link to review further information
</button>
  
  <br>
  <br>

  If the customer requires a current statement, we can still provide one upon request that covers the last 3 months. 
  If the customer is asking for more than 3 months, we need to know why they need it as there will be a charge. <br><br>

  <strong>Tenants in arrears:</strong> We will continue to send statements every 13 weeks if the customer is repaying arrears.
  </p> 
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "rents_information_provided" },
  { type: "Statements", keywords: ["Rent"], categories: ["Housing"] },
  { date: "07/05/2025", name: "Dinah Williams" }
);

//universalCredit is in cross regions

const yorkshireWater = new ContentH(
  "yorkshireWater",
  "Yorkshire Water",
  "Find out how to query water charges, access support schemes, and check eligibility for reduced water charges based on household income.",
  `
  <p>
    If a customer is querying their water charges:<br>
    These are set by Yorkshire Water, and we collect these charges as part of the rent.  Any complaints about the charges need to be directed to Yorkshire Water – 03451242424 or visit <a href="https://www.yorkshirewater.com/help" target="_blank">https://www.yorkshirewater.com/help</a>.
  </p>
  <p>
    There are various schemes available, including Yorkshire Water Support, where we may be able to reduce the charge depending on household make-up and income.
    Please direct any queries to the Income Plus Specialist for that property.<br>
    The income thresholds for support are as follows:
  </p>

  <table border="1">
  <thead>
    <tr>
      <th>Household Make Up</th>
      <th>Band 1 – Reduce to £5.40 per week</th>
      <th>Band 2 – Reduce to £7.08 per week</th>
      <th>Band 3 – Reduce to £8.18 per week</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Single Adult</td>
      <td>&lt; £12,000</td>
      <td>&lt; £15,000</td>
      <td>&lt; £20,000</td>
    </tr>
    <tr>
      <td>2 + Adults</td>
      <td>&lt; £15,600</td>
      <td>&lt; £19,500</td>
      <td>&lt; £26,000</td>
    </tr>
    <tr>
      <td>1 Dependant</td>
      <td>&lt; £15,600</td>
      <td>&lt; £19,500</td>
      <td>&lt; £26,000</td>
    </tr>
    <tr>
      <td>2 + Dependents</td>
      <td>&lt; £16,800</td>
      <td>&lt; £21,000</td>
      <td>&lt; £28,000</td>
    </tr>
  </tbody>
</table>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "rents_information_provided" },
  {
    type: "Yorkshire Water",
    keywords: ["Rent", "Water", "Yorkshire"],
    categories: ["Housing"],
  },
  { date: "10/03/2025", name: "Nathan Smith" }
);

const rents = new MenuH(
  "rents",
  "Rents",
  "Information on rent payment methods, how to manage rent arrears, and the council's policy on rent increases.",
  [
    arrearsorDebt,
    balanceEnquiry,
    contactRentsTeam,
    debtRecovery,
    references,
    rentArrangements,
    rentRefunds,
    rentVariation,
    statements,
    universalCredit,
    yorkshireWater,
  ]
);

//#endregion Rents

//#region Repairs

const adaptation = new ContentH(
  "adaptation",
  "Adaptation",
  "Property modifications for accessibility or efficiency",
  `
  <h2>Handrails</h2>
    <p>For Council Housing properties, refer the customer to 
  
<a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=CommunitiesEquip&Adaptations@sheffield.gov.uk">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>

  <h2>Grab Rails</h2>

  <p>For internal or external access to sole occupancy, refer the customer to 
  
<a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=CommunitiesEquip%26Adaptations@sheffield.gov.uk">CommunitiesEquip%26Adaptations@sheffield.gov.uk</a>

  <h2>Mobility Scooter Ramps</h2>

  <p>If the customer is requesting a communal ramp for their mobility scooter, 
  advise them that if the scooter was not supplied through Equipment and Adaptations, 
  we are <strong>unlikely to supply a ramp</strong>.</p>
  <p>If the customer has acquired their own mobility scooter, then it is their own responsibility to install a ramp. 
  They will also need permission from the Housing Service to install their own ramp.</p>
  <p>For further advice about ramps to an individual's property or communal entrances, refer the customer to 
  
 <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=CommunitiesEquip&Adaptations@sheffield.gov.uk">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>

  <h2>For Disabled Customers, Including Wet Rooms</h2>

  <p>For walk-in shower rooms (wet rooms), refer the customer to  

<a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=CommunitiesEquip&Adaptations@sheffield.gov.uk">CommunitiesEquip&Adaptations@sheffield.gov.uk</a>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "adaptaion",
      "adaptasion",
      "adaptetion",
      "adptation",
      "adapttion",
      "adaptiation",
      "adptasion",
      "addaptation",
      "adabtation",
      "adapation",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const blacksmith = new ContentH(
  "blacksmith",
  "Blacksmith",
  "Crafts metal items like gates and railings",
  `
    <p><strong>Category Fault:</strong> Blacksmiths Repairs</p>
    <p><strong>Contract:</strong> Responsive</p>
    <p><strong>Warranty:</strong> N/A</p>
    <p><strong>Outcome:</strong> Log job on T-Mobile</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "black",
      "smth",
      "blak",
      "smiht",
      "blck",
      "smth",
      "black",
      "smitt",
      "blaksmitt",
      "blacksmthh",
      "bllack",
      "smitth",
      "blac",
      "smith",
      "blackK",
      "smiht",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const brickwork = new ContentH(
  "brickwork",
  "Brickwork",
  "Construction or repair of brick structures",
  `
    <p><strong>Category Fault:</strong> Brickwork Repairs</p>
    <p><strong>Contract:</strong> Responsive</p>
    <p><strong>Warranty:</strong> Identified from the Ohms system. 
    If within a warranty period, invoke the warranty repair process.</p>
    <p><strong>Outcome:</strong> Appoint job on T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "brickwork",
      "brikwork",
      "bricwork",
      "brickwok",
      "brickworrk",
      "brrickwork",
      "brikworck",
      "brikwerck",
      "brickwrok",
      "brickworck",
      "brickwoork",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const chimneyStack = new ContentH(
  "chimneyStack",
  "Chimney Stack",
  "Upper chimney section needing maintenance",
  `
  <p>All chimney-related repairs get sent to Contractors to survey before carrying out the repair.</p>
  <p>Repairs won't be carried out on the appointment date due to health and safety procedures 
  involving gas safety checks to ensure gas fires in the property and/or neighbouring properties 
  are isolated.</p>

  <p>A letter from Repairs and Maintenance is sent to the tenanted property and neighbours for 
  shared stacks, outlining access requirements. Typically, a two-week notice is given.</p>
  <p>Regardless of tenant claims about gas fires, checks must be conducted by Repairs 
  and Maintenance's gas section and Hi-point before scheduling and carrying out the repair.</p>

  <p><strong>No check = No repair</strong></p>

  <p>Appointments are arranged directly with the tenant via Hi-point where possible and 
  coordinated with the gas section.</p>
  <p>If Contractors fail to gain access, they will attempt to reschedule following the same 
  procedure.</p>

  <p>Notes will be placed in T-Mobile explaining access issues.</p>
  <p>Once access is gained and the repair is completed, Contractors will notify us, and Gas 
  will be notified via WAH to reinstate the gas appliance.</p>

  <p><strong>Category Fault:</strong> Chimney Stack</p>

  <p><strong>Contract:</strong> Responsive</p>

  <p><strong>Codes:</strong> No code</p>

  <p><strong>Warranty:</strong> Identified from the Ohms system. If within a warranty period, 
  invoke the repair process.</p>

  <p><strong>Outcome:</strong> Log job on T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "chimny",
      "stack",
      "chimeney",
      "stack",
      "chimey",
      "stack",
      "chimnay",
      "stack",
      "chimney",
      "stak",
      "chimney",
      "stck",
      "chimeny",
      "stack",
      "chimmney",
      "stack",
      "chimney",
      "stach",
      "chimny",
      "stak",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const claimforDamage = new ContentH(
  "claimforDamage",
  "Claim for Damage",
  "Request for property damage repair",
  `
  <p>Tenants must ensure the contents of their home are adequately insured as the Council will 
  not compensate for unexpected damage caused to fittings or personal possessions when the Council is not at fault.</p>
  
  <p>When the Housing Service carries out major work which spoils decorations (for example, 
  modernisation or extensive re-plastering), customers may be able to claim money to help redecorate. 
  This is called a discretionary payment, and the team responsible for carrying out the work should be contacted.</p>

  <p>If a worker causes damage to possessions when carrying out a standard repair, 
  please contact a Senior or Team Leader for advice.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "clamefor",
      "damage",
      "cliamfor",
      "damage",
      "claimfor",
      "damge",
      "claimefor",
      "damage",
      "clamfor",
      "damage",
      "claimfor",
      "dmage",
      "claimfopr",
      "damage",
      "claimfor",
      "damagg",
      "claimfor",
      "damgae",
      "calimfor",
      "damage",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const clothesPost = new ContentH(
  "clothesPost",
  "Clothes Post",
  "Outdoor post for drying laundry",
  `
      <h3>Category Fault</h3>
      <p>Clothes Posts</p>
      
      <h3>Contract</h3>
      <p>Responsive</p>
      
      <h3>Codes</h3>
      <p>N/A</p>
      
      <h3>Warranty</h3>
      <p>Identified from the Ohms system. If repair is identified as within a warranty period, 
      invoke the warranty repair process.</p>
      
      <h3>Key Questions and Information</h3>
      <p>Place orders for communal areas only.</p>
      
      <h3>Recharge</h3>
      <p>N/A</p>
      
      <h3>Outcome</h3>
      <p>Only log a job if in comm drying area (we do not do individual properties) and book 
      non-appointed job on T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "cloths",
      "post",
      "clothe",
      "post",
      "clothes",
      "pst",
      "clothes",
      "psot",
      "clothes",
      "pot",
      "clotes",
      "post",
      "clohtes",
      "post",
      "clothess",
      "post",
      "clothes",
      "posst",
      "clothes",
      "poost",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const communalArea = new ContentH(
  "communalArea",
  "Communal Area",
  "Shared spaces like hallways and gardens",
  `
 <h3>Category Fault</h3>
    <p>N/A</p>
      
  <h3>Contract</h3>
     <p>Responsive</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "comunal",
      "area",
      "communal",
      "are",
      "comunal",
      "areaa",
      "commmnal",
      "area",
      "comunel",
      "area",
      "commuanl",
      "area",
      "communal",
      "aria",
      "commnal",
      "area",
      "comunnal",
      "area",
      "comunnal",
      "aria",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const concrete = new ContentH(
  "concrete",
  "Concrete",
  "Repairs for concrete structures",
  `
  <h3>Category Fault</h3>
     <p>Concrete Repairs</p>
      
  <h3>Contract</h3>
    <p>Responsive</p>
      
  <h3>Warranty</h3>
    <p>Identified from the OHMS system. If repair is identified as within a warranty period, 
    invoke the warranty repair process.</p>
      
  <h3>Key Questions and Information</h3>
    <p>Examples of Concrete Repairs: Lintels, Sills, Coping Stones, Canopies, Marionette 
    Walkways/Private Balconies, Columns, and Beams.</p>
      
  <h3>Recharge</h3>
    <p>N/A</p>
      
  <h3>Outcome</h3>
    <p>Order Remedy Repair on T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "concret",
      "concrte",
      "concete",
      "concreate",
      "conkreet",
      "konkreet",
      "concrait",
      "conkret",
      "concrt",
      "conkrite",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const dampandMould = new ContentH(
  "dampandMould",
  "Damp and Mould",
  "Issues from moisture, causing mold",
  `
  <p>Apply Halophane Treatment (go to P2P Damp) put the job under the following:</p>
      <ul>
          <li>Workstream - Painting Programme</li>
          <li>Job Code - work cat - Damp</li>
      </ul>

  <p>Back out of job (green arrow) and someone will be in contact to book an appointment.</p>
  <p>Any jobs that need chasing please log a chase call on T-Mobile.</p>
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "dampan",
      "mould",
      "dampand",
      "mold",
      "dampamd",
      "mould",
      "dammpand",
      "mould",
      "dampad",
      "mould",
      "dampand",
      "mouuld",
      "dampand",
      "muold",
      "dampnd",
      "mould",
      "dampand",
      "moukd",
      "dampand",
      "mouod",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const districtHeatingSwitch2Setup = new ContentH(
  "districtHeatingSwitch2Setup",
  "District Heating Switch2 Setup",
  "Setup of central heating systems",
  `
   <p>New tenants do not have to register with Switch2 when they move into their new property; 
   it is done automatically on the first Wednesday after the property is let.</p>

   <p>If a tenant gets the keys early, then there will probably be a delay with their card. 
   If this is the case, they will have to call us and we will have to set up the account 
   earlier, but we must stress: <span class="important">if there is no power on, then there 
   will be no heating, so always check this first with the customer.</span></p>

  <h3>Freehold - District Heating</h3>

  <p>If a customer has bought their property but we still maintain the district heating, 
  when logging a job on T-Mobile, start the order comments with <strong>SOLD</strong>, 
  then the description of the repair.</p>

  <h3>Advice for New Tenants Who Have Had a Heat Meter Installed</h3>

  <ul>
      <li>The heating, hot water, or the heat meter will not work until there is power on at 
      the property. So, a new tenant will have to organize this first.</li>
      <li>When the power is sorted out, the meter will be reset back to zero by the previous 
      tenant.</li>
      <li>Tenants can then press the emergency credit button, and this will give them 
      <strong>£10 emergency credit</strong> (this will have to be paid back). This will last 
      them until the account is set up and the card ordered (see below).</li>
  </ul>

  <h3>Automatic Account Setup</h3>

  <ul>
    <li>When properties are let, an account will automatically be set up with Switch2 for the 
    new tenant, and a barcode will be sent by first-class post in a letter. Tenants can use 
    this barcode to top up their meter until the new payment card arrives (this usually takes 5 
    working days). This can be used at any shop with a PayPoint or Post Office.</li>
    <li>If they wish to receive the package (if it's not left in the property), they can call 
    <strong>27 35595</strong> direct and we will send one out. This package has information 
    about the heat meter and the payment options, including an application for Direct Debit.</li>

  <h3>Lost or Missing Cards</h3>

  <ul>
      <li><strong>Lost cards:</strong> Ask customers to call <strong>0333 321 2010.</strong></li>
      <li><strong>Chase their meter card:</strong> Ask customers to contact Switch2 at <strong>0333 321 2010.</strong></li>
  </ul>

  <h3>Payment and Suppliers</h3>

  <p>Tenants pay the council and will not be able to look for alternate suppliers.</p>
  <p>Switch2 handles our billing and accounts, and fits and maintains the meters.</p>
  
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "district",
      "heating",
      "swich2",
      "setup",
      "distric",
      "heating",
      "switch2",
      "setup",
      "distric",
      "heating",
      "swtich2",
      "setup",
      "district",
      "heaating",
      "switch2",
      "setup",
      "district",
      "heating",
      "switch2",
      "setp",
      "district",
      "heating",
      "switch2",
      "setuo",
      "district",
      "heating",
      "switch2",
      "setpu",
      "distrct",
      "heating",
      "switch2",
      "setup",
      "distrcit",
      "heating",
      "switch2",
      "setup",
      "district",
      "heatng",
      "switch2",
      "setup",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const doorFurniture = new ContentH(
  "doorFurniture",
  "Door Furniture",
  "Handles, locks, and hinges for doors",
  `
  <h3>Category Fault</h3>
  <p>Door Furniture Repairs</p>

  <h3>Contract</h3>
  <p>Responsive</p>
  
  <h3>Warranty</h3>
  <p>Identified from the OHMS system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

  <h3>Key questions and information</h3>
  <ul>
      <li>Ask the tenant for details of door type (i.e., PVCu, Wood, Other) for entry into T-Mobile.</li>
      <li>How was the damage caused? If caused by tenant, inform the tenant this will be logged
      as a recharge.</li>
  </ul>

  <h3>Recharge</h3>
  <p>N/A</p>

<h3>Outcome</h3>
  <ul>
      <li>Order Remedy Repair on T-Mobile.</li>
      <li>If due to deliberate damage and not agreed to recharge, do not raise a repair unless 
      it's a health & safety (H&S) issue.</li>
  </ul>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "dor",
      "furniture",
      "door",
      "furnture",
      "door",
      "frniture",
      "dooor",
      "furniture",
      "door",
      "furnituer",
      "door",
      "furniure",
      "door",
      "furinture",
      "door",
      "funiture",
      "door",
      "furnitture",
      "door",
      "furniature",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const drainage = new ContentH(
  "drainage",
  "Drainage",
  "Water drainage system maintenance",
  `
  <h3>Category Fault</h3>
  <p>N/A</p>

  <h3>Repairs</h3>
  <ul>
      <li>Repairs to Drainage System.</li>
      <li>Remedy Blocked or Leaking Foul Drain.</li>
      <li>Remedy Blocked or leaking soil stack.</li>
  </ul> 

  <h3>Contract</h3>
  <p>Responsive</p>

  <h3>Warranty</h3>
  <p>Identified from the OHMS system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

  <h3>Key Questions and Information</h3>
  <ul>
      <li>See Yorkshire Water Procedure. If unsure and for further information concerning Communal Drainage Repairs.</li>
  </ul>

  <h3>Recharge</h3>
  <p>N/A</p>

  <h3>Outcome</h3>
  <ul>
      <li>Log job on T-Mobile.</li>
  </ul>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "drainag",
      "dranage",
      "drainige",
      "draniage",
      "drainaje",
      "drainiage",
      "dranige",
      "dranije",
      "drainaeg",
      "drianage",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const disrepair = new ContentH(
  "disrepair",
  "Disrepair",
  "Property damage needing repair",
  `
<p>The team's main responsibilities are:</p>

  <ul>
      <li>Dealing with Right to Repair</li>
      <li>Disrepair inspections</li>
      <li>Inputting work schedules</li>
      <li>Producing reports for Legal</li>
      <li>Liaison with Legal</li>
      <li>Liaison with Repairs and Maintenance</li>
      <li>Monitoring timescales</li>
  </ul>

  <p>Please check in <strong>"warning section"</strong> to see if a disrepair is in process and if a 
  non-urgent job wants logging, please call the number in warning box first before logging a job on 
  T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "disrepar",
      "disrepir",
      "disrepair",
      "disrepier",
      "disprepair",
      "disrepaire",
      "desrepair",
      "disrpair",
      "disrpare",
      "disrrepaiir",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const electricalandHeating = new ContentH(
  "electricalandheating",
  "Electrical and Heating",
  "Electrical and heating system maintenance",
  `
  <h3>Electrical Items</h3>
  <p>For electrical fittings, additional sockets, etc., email to 

  <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=ElectricalSheffield@Sheffield.go.uk">ElectricalSheffield@Sheffield.go.uk</a>
 

  <h3>Heating Items</h3>
  <p>For extra radiators, email to
  
  <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=GasSheffield@sheffield.gov.uk">GasSheffield@sheffield.gov.uk</a>


  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "electrical",
      "heting",
      "electrical",
      "heting",
      "eletrical",
      "heating",
      "elctrical",
      "heating",
      "electricalnd",
      "heating",
      "electrical",
      "heatng",
      "electrical",
      "heeting",
      "electrical",
      "heatiing",
      "electirical",
      "heating",
      "electricland",
      "heating",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const electricalTesting = new ContentH(
  "electricalTesting",
  "Electric Testing",
  "Safety checks for electrical systems",
  `
  <p>If the system states <strong>"Live Electrical Test",</strong> this is ordered by RPIT. 
  Any enquiries relating to this should be directed to the relevant hub.</p>

  <p><strong>If there has been a Mutual Exchange,</strong> these are dealt with by HME Gas and Electric Reinstates team.
  Email all relevant information above to:</p>

  <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=HME_GandE_Reinstates@sheffield.gov.uk">HME_GandE_Reinstates@sheffield.gov.uk</a>

  <p><strong>Domestic Electrical Tests</strong> are carried out every 5 years.</p>

  <h3>Key Questions and Information</h3>

  <p><strong>If there is a pop-up status for "VT",</strong> this indicates an electrical testing 
  no access issue. Contact the team om the following email for an appointment to be made with the tenant.
  
  </p><a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=ElectricalSheffield@Sheffield.go.uk">ElectricalSheffield@Sheffield.go.uk</a>
  

  <h3>Can You Please Advise All Officers Involved with the Following:</h3>
  <ul>
      <li>New Tenancy</li>
      <li>Electric & Gas Reinstate</li>
      <li>Boiler Installation</li>
      <li>Decant/Disrepair</li>
      <li>Cap off make safe</li>
      <li>Disconnect/Reconnect Electric or Gas Cooker</li>
      <li>Mutual Exchange</li>
      <li>Electric & Gas Service Check</li>
      <li>Dispersed Properties</li>
  </ul>

  <h3>Contact Information for Specific Enquiries:</h3>
  
  <p>Contact Gas Service team for information or specific enquiries on:</p>

   </p><a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=GasSheffield@Sheffield.go.uk">GasSheffield@Sheffield.go.uk</a>
  
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "electrical",
      "tesing",
      "electrical",
      "testng",
      "electrical",
      "tetsing",
      "electrical",
      "tsting",
      "electrical",
      "tessting",
      "electircal",
      "testing",
      "electrical",
      "tseting",
      "electrical",
      "tsting",
      "electrical",
      "testin",
      "electrial",
      "testing",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const externalContractors = new ContentH(
  "externalContractors",
  "External Contractors",
  "Hired professionals for property work",
  `
  <p>If a tenant calls and the job is with a contractor, 
  please call the relevant team in the back office if needing to chase.</p>
  
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "external",
      "contractrs",
      "extenal",
      "contractors",
      "external",
      "contarctors",
      "external",
      "contrctors",
      "external",
      "conttractors",
      "extarnal",
      "contractors",
      "extternal",
      "contractors",
      "external",
      "contracors",
      "external",
      "conractors",
      "external",
      "contrators",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const externalDoorLock = new ContentH(
  "externalDoorLock",
  "External Door Lock",
  "Security locks for external doors",
  `
  <h3>Category Fault</h3>
      <p>External Door Locks Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key Questions and Information</h3>

      <p>If a member of staff from an Area Housing Office requests a lock change to a property, 
      order remedy repair.</p>

  <h3>Recharge</h3>

      <p>N/A</p>

  <h3>Outcome</h3>

      <p>Log a repair on T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "external",
      "dorlock",
      "external",
      "dorrlock",
      "external",
      "doorlok",
      "external",
      "doorlck",
      "external",
      "doorlocck",
      "externnal",
      "doorlock",
      "external",
      "doorrlock",
      "external",
      "dooorlock",
      "external",
      "doorlk",
      "external",
      "doorloc",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const externalDoor = new ContentH(
  "externalDoor",
  "External Door",
  "Main or back entry doors",
  `
  <h3>Category Fault</h3>
      <p>External Door Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key questions and information</h3>

      <p>Ask tenant for details of door type (PVCu, Wood, Metal, or Other).</p>
      <p>Check programme details (e.g., Prior to Painting). If work is due, 
      defer the repair to programme works.</p>
      <p>If a result of Burglary / Vandalism, then check if the customer has a Police crime 
      reference number.</p>
     
  <h3>Recharge</h3>

      <p>If there is no Crime Reference Number, advise the tenant that a job will be raised 
      as a <strong>RECHARGE</strong>. </p>

  <h3>Outcome</h3>

      <p>If a result of Burglary / Vandalism, then a Police crime reference number is required 
      if repair is because of Burglary / Vandalism. Where there is no Crime Reference Number, 
      board up/make safe only.</p>
      <p>Order Remedy Repair</p>.
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "external",
      "dor",
      "external",
      "dorr",
      "extenal",
      "door",
      "external",
      "dooor",
      "external",
      "doorr",
      "external",
      "dour",
      "extarnal",
      "door",
      "externnal",
      "door",
      "extrenal",
      "door",
      "external",
      "doer",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const flatRoof = new ContentH(
  "flatRoof",
  "Flat Roof",
  "Maintenance of horizontal roofs",
  `
  <h3>Category Fault</h3>
      <p>Flat Roofing Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process. </p>
  
  <h3>Key questions and information</h3>

      <p>Order Remedy Repair. Start order comments with "Storm Damage" if required.</p>
      <p>If leaking into property, order as Urgent Leak.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "flat",
      "rooff",
      "falt",
      "roof",
      "flat",
      "roofff",
      "flatt",
      "roof",
      "fllat",
      "roof",
      "flat",
      "rof",
      "flat",
      "roofff",
      "flat",
      "roff",
      "flt",
      "roof",
      "flat",
      "rofe",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const floororStaircase = new ContentH(
  "floororStaircase",
  "Floor or Staircase",
  "Repairs for floors and stairs",
  `
  <h3>Category Fault</h3>
      <p>Floors or Staircase Repairs</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process. </p>
  
  <h3>Key questions and information</h3>

      <p>Not available</p>

  <h3>Outcome</h3>

      <p>Order Remedy Repair.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "flooror",
      "staircae",
      "flooror",
      "staiircase",
      "flooror",
      "staircsse",
      "flooror",
      "staircasse",
      "flooror",
      "staircsae",
      "floror",
      "staircase",
      "flooror",
      "staircaase",
      "floooror",
      "staircase",
      "flooror",
      "staaircase",
      "flooror",
      "staircse",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const footpathandSteps = new ContentH(
  "footpathandSteps",
  "Footpath and Steps",
  "Maintenance of walkways and steps",
  `
 <h3>Category Fault</h3>
      <p>Footpath and Steps Repairs</p>
 <h3>Contract</h3>
      <p>Responsive</p>
 <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key questions and information</h3>

      <p>Order Repairs only to Main Footpath to Property and to Entrance doors.  Need to 
      identify the type of Material i.e., Concrete, Tarmac.</p>

  <h3>Outcome</h3>

      <p>Log a repair on T-Mobile and book a non-appointed visit.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "footpathand",
      "stepps",
      "footpathan",
      "steps",
      "footpathand",
      "stpes",
      "footpathand",
      "stps",
      "footpathand",
      "steep",
      "footpathnd",
      "steps",
      "footpatand",
      "steps",
      "footpathaand",
      "steps",
      "footpathand",
      "stepes",
      "fotpathand",
      "steps",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const fireJobs = new ContentH(
  "fireJobs",
  "Fire Jobs",
  "Fire safety-related maintenance",
  `
<p>If there is a fire at property, please email the contacts below.</p>

  <ul>
      <li>Steve Willis Operations Manager <a href="mailto:steve.willis@sheffield.gov.uk">steve.willis@sheffield.gov.uk</a></li>
      <li>Steve Pitts Team Leader <a href="mailto:steve.pitts1@sheffield.gov.uk">steve.pitts1@sheffield.gov.uk</a></li>
      <li>Gordon Hampshire Team Leader <a href="mailto:gordon.hampshire@sheffield.gov.uk">gordon.hampshire@sheffield.gov.uk</a></li>
  </ul>

  <p>Inspection following Fires. Fire Job orders. Post Inspections. Method Statements.</p>

  <h3>Sheltered</h3>

  <ul>
      <li>Sheltered Repairs</li>
      <li>Interim Repairs</li>
      <li>High Support</li>
      <li>Inputting work schedules</li>
  </ul>

  <h3>Permissions</h3>

  <p><strong>All requests must be put in writing to:</strong></p>
  <p>Sheffield Council Housing Service<br>PO Box 5967<br>S2 9GH</p>
  <p>Inform the customer that if they are over £250 (Total Indebtedness) in arrears their Permissions 
  request is unlikely to be granted.</p>
  <p>You must have written permission from the Housing Service to alter or improve your home. 
  This includes:</p>

  <ul>
      <li>Putting up any form of extension or building</li>
      <li>Adding to, changing, or replacing the fixtures, fittings and appliances provided by us.</li>
      <li>Altering essential gas, electricity, and water services</li>
      <li>Putting up a radio or television aerial or satellite dish</li>
      <li>Decorating the outside of your home</li>
      <li>Removing internal walls</li>
      <li>Insulation (Walls & Lofts)</li>
  </ul>

  <p>It is your responsibility to seek and get any planning or building regulation approvals.</p>
  <p>Permissions for loft conversions, conservatories, spiral staircases, swimming pools and extensions 
  are highly unlikely to be granted due to extra maintenance costs and potential structural problems.</p>
  <p>It is also unlikely that we will give permissions for stairlifts in communal areas, as it is more 
  appropriate for tenants that require this to be rehoused.</p>
  <p>Every request for permission will be assessed using criteria and conditions appropriate to the request. 
  These criteria and conditions will be explained in the letter sent in reply to the customer's permission 
  request.</p>

  <h3>Team's main responsibilities</h3>

  <ul>
      <li>Permission visits</li>
      <li>Sign off visit once permission completed.</li>
      <li>Joint visits with Area Teams</li>
      <li>Joint visits with Leaseholder Team</li>
      <li>Process Management of Permissions</li>
  </ul>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "fire",
      "jbos",
      "fire",
      "jbso",
      "fire",
      "jbso",
      "fire",
      "jbss",
      "fire",
      "jsbos",
      "fire",
      "jbss",
      "fire",
      "jobbs",
      "fir",
      "jobs",
      "ffire",
      "jobs",
      "fire",
      "jops",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const garageorDetachedOutbuilding = new ContentH(
  "garageorDetachedOutbuilding",
  "Garage or Detached Outbuilding",
  "Repairs for garages and sheds",
  `
  <h3>Category Fault</h3>
      <p>Garages and Detached Outbuildings</p>
  <h3>Contract</h3>
      <p>Responsive</p>
  <h3>Warranty</h3>
      <p>Identified from the T-Mobile system.If repair is within a warranty period, 
      invoke the warranty repair process.</p>
  
  <h3>Key questions and information</h3>

      <p>Do not place orders for Sheds.</p>

  <h3>Outcome</h3>

      <p>Log a job on T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "garageor",
      "detached",
      "outbulding",
      "garageor",
      "detached",
      "ouutbuilding",
      "garageor",
      "detachdoutbuilding",
      "garager",
      "detachedoutbuilding",
      "garageor",
      "dettachedoutbuilding",
      "garageor",
      "detachedotbuilding",
      "garagor",
      "detachedoutbuilding",
      "garageor",
      "detachedoutbuliding",
      "garageor",
      "detachedoutbuildig",
      "garageor",
      "detahcedoutbuildi",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const gasandDomesticSystems = new ContentH(
  "gasandDomesticSystems",
  "Gas and Domestic Systems",
  "Gas system maintenance and repairs",
  `
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Category Fault</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <p>Domestic Gas system</p>
  </div>
  </details>
  
  <details class="accordion">
  <summary class="accordion-header">
    <h3>Codes</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <ul>
      <li>Remedy Blocked Flue to Boiler</li>
      <li>Remedy TOTAL Loss of Heating & Hot Water (Gas Heating)</li>
      <li>Repair Gas Fired Central Heating (where other heating available)</li>
      <li>Repair Gas Fire/Wall Heater/Gas Boiler (where there is NO other form of heating available)</li>
      <li>Repair leaking Heating Pipe, Tank, Cistern, Radiator etc.</li>
      <li>Remedy no Hot Water (where other heat is available)</li>
      <li>Repair Warm Air Central Heating system</li>
      <li>Remedy Total/Partial loss of Gas Supply</li>
      <li>Recall non chargeable repair</li>
  </ul>
  </div>
  </details>
  
  <details class="accordion">
    <summary class="accordion-header">
        <h3>Warranty</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <details class="details-accordion">
            <summary>
                <p>
                    Identified from the T-MOBILE system. If repair is identified as within a warranty period, 
                    invoke the warranty repair process for new boilers 
                    (Mark as <strong>'WARRANTY RECALL</strong> - Repair to faulty boiler, still in warranty 
                    or call obsolete on 01142736978.
                </p>
            </summary>
            <div class="details-accordion-content">
            </div>
        </details>
<details class="details-accordion">
            <summary>
                <h3>Key questions and information</h3>
            </summary>
            <div class="details-accordion-content">
                <p>
                    Check if the repair is regarding no water flowing out of the taps, or whether there is 
                    water flowing, and it is cold. If there is no water flowing this should be a plumbing repair.</p>
                <p>
                  If a customer has a pre-pay meter but has no gas heating at all, either from a boiler 
                  or gas fire (if present), ask the customer to check that the meter has credit and that the 
                  heating room stat is turned up high enough.</p>
                <p>
                  Where arranging a gas service inform the Customer that if they have a gas fire it should 
                  be switched off and not used on the day of service.</p>
            </div>
        </details>
    </div>
</details>


 <details class="accordion">
    <summary class="accordion-header">
      <h3>Boiler Warning Codes</h3>
         <div class="accordion-icon"></div>
          </summary>
             <div class="accordion-content">
          <p>If a customer call stating their heating isn't working, and they give the fault code of 
          <strong>F28</strong> or <strong>F29</strong>, this means that there is <strong>no gas going 
          to the boiler</strong>. Please go through the check list below with tenant.</p>

    <table border="1" cellpadding="5">
        <tr>
            <th></th>
            <th>Heating Issue</th>
            <th>Low Pressure</th>
            <th>No Gas</th>
            <th>No Power</th>
        </tr>
        <tr>
            <td>Vaillant Ecotec Pro/Sustain</td>
            <td>Thermostat, Programmer or Low Pressure</td>
            <td>F22, 0.0bar</td>
            <td>F28, F29</td>
            <td>Boiler display blank</td>
        </tr>
        <tr>
            <td>Vaillant Ecomax</td>
            <td>Thermostat, Programmer or Low Pressure</td>
            <td>F22, F25</td>
            <td>F28, F29</td>
            <td>Boiler display blank</td>
        </tr>
        <tr>
            <td>Baxi Duo Tec</td>
            <td>Thermostat, Programmer or Low Pressure</td>
            <td>E119</td>
            <td>E133</td>
            <td>Boiler display blank</td>
        </tr>
    </table>
  
<img class="knowledge-img" src="https://cdn.uk.empro.verintcloudservices.com/tenants/sheffield/Images/meter-and-credit.jpg" alt="Check the meter is switched on and ensure there is a credit on the meter" loading="lazy" referrerpolicy="no-referrer" />

  <p>The fault code has been missing a lot lately from the job notes as asked for in the prompt 
  text box for central heating repairs.</p>
  <p>This has meant we have had an increase of <strong>F28 / F29 faults codes</strong> (avoidable jobs).</p>
  <p>92% of the time this is a meter fault which is more common now with a smart meter i.e., 
  it's not switched on / not been reset after the tenant has run out of credit.</p>
  <p>If the customer describes this fault, please ask them to:</p>

  <ul>
      <li>Check they have credit on their meter.</li>
      <li>The meter display is working.</li>
      <li>The meter is on / not shut down due to safety lock out.</li>
  </ul>

  <p>If the customer answers <strong>no</strong> to any of these questions they will need to 
  add credit or contact their supplier to rectify the meter fault or they will be told how to 
  switch on/reset the meter.</p>
  <p>If the customer answers <strong>yes</strong> to all 3 questions, they simply must press 
  and hold the reset button on the boiler for 3 seconds, this button is a flame with an X 
  through it see pic below.</p>

  <img class="knowledge-img" src="https://cdn.uk.empro.verintcloudservices.com/tenants/sheffield/Images/heating-repair.png" alt="If this fails and it still goes to F28 (not F29) then it is a genuine heating repair" loading="lazy" referrerpolicy="no-referrer" />
  
  <p>If this fails and it still goes to F28 (not F29), then it is a genuine heating repair:</p>

  <ul>
      <li>The gas meter has run out of gas.</li>
      <li>This is a new tenant that hasn't had the gas reinstated.</li>
  </ul>

  <p>The above will apply to Vaillant boilers only. However, for the new Duo Tecs we are 
  installing in certain areas, the code <strong>E133</strong> will appear.</p>

  <p>Other than these boilers, none of the older ones will have digital displays. 
  However, you should still:</p>

  <ul>
      <li>Ask the customer to check the gas meter.</li>
      <li>Check T-MOBILE to find out if the property has been recently vacant, and whether 
      a gas reinstatement was ordered.</li>
  </ul>

      </div>
  </details>
      
  <details class="accordion">
    <summary class="accordion-header">
      <h3>Central Heating Replacement Programme</h3>
        <div class="accordion-icon"></div>
        </summary>
          <div class="accordion-content">
      <p>
        On some occasions, there is an overlap with the installation of new systems and the 
        annual gas service. Therefore, if a tenant rings to organise their gas service, but states 
        that they have just had a new boiler / central heating system installed, please refer the customer to Gas and Electric 
        Reinstates team on: </P>
        
        <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=HME_GandE_Reinstates@sheffield.gov.uk">HME_GandE_Reinstates@sheffield.gov.uk</a>
        
        <p> and they will advise on what steps the customer need to take with the gas service. This will 
        generally consist of confirming to the tenant that we will not need to service the gas 
        appliances this year, and delaying the service on the system, to allow HM&E to get the 
        paperwork scanned.
      </p>
      </div>
  </details>
  <details class="accordion">
      <summary class="accordion-header">
          <h3>Cowls</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      <p>
          If the tenant has a gas fire and cowl has blown off, please put a gas job on using the 
          <strong>"INSTALL GC1 TERMINAL"</strong> code on OHMS and change to <strong>PL FAO After 
          trades</strong>. If there is <strong>no</strong> gas fire, then raise job for WAH to replace 
          cowl on chimney.
      </p>

        </div>
  </details>

  
  <details class="accordion">
      <summary class="accordion-header">
          <h3>Gas Meters</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      <p>
          Anything related to the Gas Meter should be directed to the supplier not us. If unsure, 
          please ask.</p>
      </p>

        </div>
  </details>
  
 <details class="accordion">
      <summary class="accordion-header">
          <h3>Heating repairs during warm weather</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      <p>
            <p
            New boilers will show a "Fault Code" on the boiler display "F??" if there is a problem 
            with the boiler / heating system.
            </p>
            <p>
            Most older systems are thermostatically controlled but may not have fault code.
            </p>
            <p>
            If the weather is warm, the heating may not come on because it is too hot for it to 
            activate.
            </p>
            <p>
            Please ask callers what the room-stat is set at before ordering a job that may be 
            unnecessary. If the customer says there is a fault code on the boiler display, a job will 
            need to be ordered. If there isn't a fault code, this would suggest the boiler is fine, 
            just too hot to be activated.
      </p>

        </div>
  </details>
  
<details class="accordion">
      <summary class="accordion-header">
          <h3>Leaking Pipe</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      <p>
            <p>
            Before registering a repair for leaking pipes, you need to establish if it is heating or 
            plumbing. If it is heating, then it will mean pressure has dropped on boiler and may show 
            error code F22 or drop on pressure gauge. If not, then it will be a leak on the domestic 
            plumbing so not for gas section.
      </p>

        </div>
  </details>

  
  <details class="accordion">
      <summary class="accordion-header">
          <h3>Outcome</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
            <p>Order Remedy Repair</p>
      
        </div>
  </details>

<details class="accordion">
      <summary class="accordion-header">
          <h3>Pre-inspection</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
            <p>
            If a customer requests an inspection for a gas heating appliance in their property, 
            please refer to </p>

            <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=GasSheffield@sheffield.gov.uk">GasSheffield@sheffield.gov.uk</a>
      
        </div>
  </details>
  
<details class="accordion">
      <summary class="accordion-header">
          <h3>Stolen Boiler</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
              <p>
              If a boiler has been stolen, contact <strong>Repairs Policy & Improvement Team</strong>. Do not contact HM&E. Please 
              raise an <strong>EM</strong> job and advise the tenant we need a crime ref number so then 
              they can be referred to </p>

            <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=RepairsPolicy&ImprovementsTeam@sheffield.gov.uk">RepairsPolicy&ImprovementsTeam@sheffield.gov.uk</a>

              <p>
              If a stolen boiler is reported, a 'make safe gas and water' job should be raised by the 
              service center agent or anyone that takes a stolen boiler call. This should be raised on 
              the "gas escape / fumes" code. If a joiner is required to board, then a repair will need to 
              be put on for that to meet the gas fitter.
              </p>
      
        </div>
  </details>

  <details class="accordion">
      <summary class="accordion-header">
          <h3>Gas after trades</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
                <p>If gas after trades are required following work, please contact the 
                <a href="mailto:Gas@sheffield.gov.uk">Gas</a> to ask for work to be done.</p>
                <p><strong>Do not put a job on.</strong></p>
      
        </div>
  </details>

  <details class="accordion">
      <summary class="accordion-header">
          <h3>Trunking</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
              <p>To order trunking to heating pipes:</p>

                <ul>
                    <li>Type in "Gas" into diagnosis search on T_MOBILE</li>
                    <li>Select the "Gas after trades" option</li>
                    <li>Type into your description what is required and where.</li>
                    <li>Save changes and green arrow back out of the job to leave in "New" status.</li>
                </ul>

              <p>This will then get picked up with the relevant section to contact the tenant to arrange 
              when they have the resources to carry this out. Please refrain from giving any specific 
              timescales.</p>
      
        </div>
  </details>


  <details class="accordion">
      <summary class="accordion-header">
          <h3>Urgent Gas Repair</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
            <p>
            <strong>Monday to Thursday.</strong> You can put urgent repairs on the system until close 
            of play and will be visited within 24 hours. Please stress to tenants that it may not be the 
            same day but will be next. Obviously, if the tenant is not going to be in at any point during 
            the 24hrs please put this info in the description.
            </p>
            <p>
            <strong>Friday.</strong> You can put urgent repairs on up until 5.30pm. Again, advise the 
            tenant that it will be a 24-hour call out, and if not visited on Friday, it will be Monday. 
            Inform customer to call out of hours if becomes worse over the weekend.
            </p>
      
        </div>
  </details>

  <details class="accordion">
      <summary class="accordion-header">
          <h3>Smoke Alarm</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
            <p>There are 2 types of smoke alarms battery and mains powered. Please ask relevant questions
            to establish which type is in the property.</p>

            <ul>
                <li>Mains powered will be logged as an electrician.</li>
                <li>Battery will be logged as a joiner.</li>
            </ul>
        </div>
    </details>
  

  <details class="accordion">
      <summary class="accordion-header">
          <h3>Carbon Monoxide Alarm</h3>
              <div class="accordion-icon"></div>
                </summary>
                    <div class="accordion-content">
      
          <p>
          RPIT have a program to fit around 17000 mains wiring alarm which will take about 6 to 7 
          years.
          </p>
          <p>
          R&M - HM&E are fitting a battery CO alarm on the gas service if a main's one is not 
          currently fitted in the property / correct place.
          </p>
          <p>
          We will fit a battery CO alarm if requested. (If the customer does not have one already 
          fitted or it's gone faulty)
          </p>
          <p>
          We must fit it within 28 days of the request as well, but we only have to fit them near 
          gas fires and gas boilers, not near gas cookers or gas hobs.
          </p>
          <p>
          The easy way to tell if its battery or mains wired alarm in the property is the battery 
          alarm's we are fitting are a AICO EI208, so if they can't see this model number it's most 
          likely a mains power one.
          </p>

        <img class="knowledge-img" src="https://cdn.uk.empro.verintcloudservices.com/tenants/sheffield/Images/carbon-monoxide-alarm.png" alt="Standard alarm fitted by us" loading="lazy" referrerpolicy="no-referrer" />

          <p>
          As for fitting the battery alarm any trade can do them, but if the operative is not from 
          the gas section, they need to confirm with the gas section were to locate the alarm or speak 
          to <strong>AICO </strong>technical for location advice.
          </p>
          <p>
          Replacing Mains alarms is still down for electricians.
          </p>  
        </div>
    </details>
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "gasand",
      "domesticsystms",
      "gasand",
      "domesticsytems",
      "gasand",
      "dometicsystems",
      "gasand",
      "domsticsystems",
      "gasand",
      "dometicsytems",
      "gasand",
      "domesticsystesm",
      "gasand",
      "domesticsystm",
      "gasand",
      "domesticsytem",
      "gasand",
      "domesticsysstems",
      "gasnd",
      "domesticsystems",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const gasReinstateandUncapServicesorAppointments = new ContentH(
  "gasReinstateandUncapServicesorAppointments",
  "Gas Reinstate /Gas Uncap Services / Appointments",
  "Restoring gas supply services",
  `
<h3>Cancel an Appointment</h3>

  <p>If a tenant rings to cancel an appointment as they have no gas, <strong>do not</strong> 
  cancel the appointment. We will still visit, and if there is no gas, we cap off. 
  This ensures that the tenant will ring back to have the appliances uncapped and serviced. 
  If we just cancel, then there is no guarantee that the tenant will ring back.</p>

<h3>New Tenant</h3>

  <p>If a new tenant makes contact regarding a gas reinstate, then these need to be passed 
  through to </p>

  <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=GasSheffield@sheffield.gov.uk">GasSheffield@sheffield.gov.uk</a>
  
  <p>if no answer please email 
  <a href="mailto:HME_GandE_Reinstates@sheffield.gov.uk">HME_GandE_Reinstates@sheffield.gov.uk</a>.</p>
  <p>If a new tenant makes contact and reports that they have no heat or hot water, please 
  first check that their gas has been reinstated <strong>before</strong> ordering a repair.</p>


<h3>Existing Tenant</h3>

  <p>As part of the annual gas service, if we arrive and the tenant has no gas on the meter, 
  we cap off the supply. We then wait for the tenant to contact us and arrange an "uncap and 
  service".</p>
  <p>If the tenant makes contact within two weeks of the original cap off, then this can be 
  put through to Gas team  direct on <a href="mailto:Gas@sheffield.gov.uk">Gas</a>.</p>
  <p>If job and it is more than two weeks, then these need to be put through to: </p>

  <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=HME_GandE_Reinstates@sheffield.gov.uk">HME_GandE_Reinstates@sheffield.gov.uk</a>

  <p>There are occasions where a tenant may have a <strong>gas meter changed</strong>. When 
  the meter is changed, the supplier generally asks the tenant for a copy of the most 
  up-to-date service certificate.</p>
  <p>If they cannot provide this, then the supplier will cap them off. In cases like this, 
  you just need to raise a repair, on an <strong>URGENT</strong>, to "Reconnect and safety 
  check after meter change", using the "No heat / hot water code".</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "gasreinstateanduncap",
      "servcesorappointments",
      "gasreinstateanduncap",
      "serviceorappointments",
      "gasreinstateanduncap",
      "servicssorappointments",
      "gasreinstateanduncap",
      "serviceorapoinments",
      "gasreinstateanduncap",
      "servicseorappointments",
      "gasreinstateanduncap",
      "serviesorappointments",
      "gasreinstateanduncap",
      "servicesorappoinments",
      "gasreinstateanduncap",
      "sericesorappointments",
      "gasreinstateanduncap",
      "serivesorappointments",
      "gasreinstateanduncap",
      "servicsorappointments",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const gateorFence = new ContentH(
  "gateorFence",
  "Gate or Fence",
  "Repairs for gates and fences",
  `
<h3>Category Fault</h3>

  <p>Gates and Fences</p>

<h3>Contract</h3>

  <p>Responsive</p>

<h3>Codes</h3>

  <p>N/A</p>

<h3>Warranty</h3>

  <p>N/A</p>

<h3>Key questions and information</h3>

  <p>Is the repair a communal repair? If not, these repairs are generally not our 
  responsibility. However, if there is a Health & Safety issue, we will do the repair/ make 
  safe. If not sure speak with a team leader or senior.</p>

<h3>Recharge</h3>
  <p>N/A</p>

<h3>Outcome</h3>
  <p>Order Communal Repairs (if communal repair or if it's a health and safety issue)</p>
  
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "gator",
      "fence",
      "gateor",
      "fance",
      "gateor",
      "fnce",
      "gateor",
      "fenec",
      "gateor",
      "fense",
      "gateor",
      "fencc",
      "gaateor",
      "fence",
      "gateor",
      "fencce",
      "gatteor",
      "fence",
      "gateor",
      "fenxe",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const glazingincludingfailedDoubleGlazedUnits = new ContentH(
  "glazingincludingfailedDoubleGlazedUnits",
  "Glazing Including Failed Double Glazed Units",
  "Window glass repairs and replacements",
  `
<h3>Category Fault</h3>

  <p>Glazing Repairs Including Failed Double-Glazed Units</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>If there is a <strong>Police Crime Reference Number</strong>, Order Remedy Repair.</p>
  <p>If the glass in the window/door has gone through completely, put a board-up on straight 
  away for H&S. If only a crack or chip, tenant needs to get a crime reference number 
  1st before we put any job on.</p>
  <p>If the customer has a Crime Reference Number, you must also order a follow up re-glazing 
  job and appoint it accordingly.</p>
  <p>Please note it is not the responsibility of the joiner carrying out the board up to do it.</p>
  <p>If there is no Crime reference Number advise tenant that it would be a recharge.</p>
  <p>When ordering <strong>all</strong> double-glazing repairs, the tenant must be informed 
  that the first appointment will be to measure the unit only - it is not to carry out the 
  repair.</p>
  <p>As all double-glazed units are individually sized, they will need to be manufactured 
  hence the first visit is purely to measure the window.</p>
  <p>If there is a pop-up i.e., for Gas No Access: <strong>HF</strong>, <strong>NA</strong> 
  or <strong>CI</strong> code, No Repair: <strong>NR</strong> code, or <strong>ALMO</strong>, 
  continue to order a repair (if applicable) then immediately contact the 
  <strong>RPIT Gas Team</strong>.</p>

<h3>Recharge</h3>
  <p>If the tenant admits breaking glass, an order should only be placed if the tenant agrees 
  to be recharged. (Unless gone through both panes and is a security issue) then raise a job 
  for board up only.</p>

<h3>Outcome</h3>
  <p>If caused by tenant (<strong>no Police Crime Reference Number</strong>) advise tenant, 
  it will be a recharge and order job accordingly.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "glazingincludingfailed",
      "doubleglazdunits",
      "glazzingincludingfailed",
      "doubleglazedunits",
      "glazingincludingfaield",
      "doubleglazedunits",
      "glazingincludingfailed",
      "dubleglazedunits",
      "glazingincludingfailed",
      "doubleglasedunits",
      "glazingincludingfailed",
      "doubleglazzedunits",
      "glazingincludingfailed",
      "doubleglazedunittts",
      "glazingincludingfailedd",
      "doubleglazedunits",
      "glazngincludingfailed",
      "doubleglazedunits",
      "glazingincludingfailed",
      "doubleglazedunts",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const gutteringandRainwaterPipes = new ContentH(
  "gutteringandRainwaterPipes",
  "Guttering and Rainwater Pipes",
  "Maintenance of roof drainage",
  `
<h3>Category Fault</h3>

  <p>Guttering and Rainwater Pipe Repairs</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>You need to identify the type of material i.e., Plastic, Timber, or Metal.</p>

<h3>Appointments</h3>

  <p>Ensure when ordering repairs to gutters that you always enter WAH, not PB. This will 
  ensure that the correct WAH diary comes up.</p>

  <h3>Recharge</h3>

  <p>N/A</p>

  <h3>Outcome</h3>

  <p>Order Remedy Repair and remember to start with Storm Damage if caused by strong winds.</p> 

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "gutteringand",
      "rainwatrpipes",
      "gutteringand",
      "rainwaterppes",
      "gutteringand",
      "rainwaterpipe",
      "gutteringand",
      "raiinwaterpipes",
      "gutterinand",
      "rainwaterpipes",
      "gutteringnd",
      "rainwaterpipes",
      "gutteringand",
      "rainwaterrpipes",
      "gutteringand",
      "rainwterpipes",
      "gutteringand",
      "rainwaterpipees",
      "gutterringand",
      "rainwaterpipes",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const handyperson = new ContentH(
  "handyperson",
  "Handyperson",
  "General minor repairs and maintenance",
  `
  <p>The handyperson scheme is available for vulnerable Council tenants to do certain smaller
  jobs in the home.</p>

<h3>Criteria of the work</h3>

  <p>Work could be carried out by an able-bodied person and doesn't require any specialist 
  equipment or training.</p>

  <h3>Definition of service users</h3>

  <h4>Individual tenant</h4>
  <ul>
      <li>In and around the tenant's home</li>
      <li>Specific criteria: over 60; or those with a disability or severe health problem; 
      or showing an H or E code.</li>
  </ul>

  <h4>Community Work</h4>
  <ul>
      <li>In either communal area around council owned properties or land</li>
      <li>Ordered by an officer.</li>
      <li>Work that fits the scope and intention of the service</li>
  </ul>

  <h3>Clarification points for types of work</h3>

  <h4>Electrical Work</h4>
  <p>No HM&E work to be carried out by Handyperson service, including electrical light 
  fittings.</p>


  <h4>Specialist equipment or chemicals</h4>
  <p>Handyperson cannot use any heavy-duty equipment or chemicals that require specialist 
  training, i.e., graffiti removal or tenant's own garden equipment.</p>

  <h4>Ordering Materials</h4>
  <p>Handyperson does not have the facility to order materials, i.e., fence panels, etc. 
  these need to be provided by the tenant or by the officer ordering the job should already 
  have these available.</p>

  <h3>Type of work carried out</h3>

  <h4>Odd jobs</h4>
  <ul>
      <li>Hang mirror / pictures</li>
      <li>Put up / take down shelves</li>
      <li>Put up a cabinet</li>
      <li>Put up / take down curtains</li>
      <li>Fit curtain / shower rails / Blind</li>
  </ul>

  <h4>Decoration</h4>
  <ul>
      <li>Painting a small area (after leak or plastering)</li>
      <li>Fit reflective foil behind a radiator</li>
      <li>Grout small area of tiles</li>
      <li>Apply small area of sealant</li>
  </ul>

  <h4>Furniture</h4>
  <ul>
      <li>Erect flat pack furniture including garden furniture (only small items such as 
      bookcases or units measuring approx. 1 meter x 1 meter or smaller).</li>
      <li>Move furniture around the home.</li>
      <li>Repair broken furniture</li>
  </ul>

  <h4>Bathroom or Kitchen accessories</h4>
  <ul>
      <li>Replace the toilet seat with a new one purchased by the tenant</li>
      <li>Fix plug to sink.</li>
      <li>Fit soap dispenser</li>
      <li>Fit new 2D bulbs in bathroom*</li>
      <li>Fit splash back to cooker</li>
      <li>Fit new battery in oven.</li>
      <li>Connect / disconnect dishwasher / washer machine.</li>
      <li>Secure appliance.</li>
      <li>Replace fridge seal.</li>
      <li>Replace fuse to appliance</li>
      <li>Adjust worktop to fit appliance: Refer to permissions procedure, RPIT</li>
  </ul>
  <p>*Replacing kitchen / bathroom light, the tenant to provide light bulb, Handyperson can 
  advise which bulb to purchase and will also fit the bulb.</p>

  <h4>Lighting or cables</h4>
  <ul>
      <li>Replace light bulbs (but will not supply bulbs)</li>
      <li>Fit light shades.</li>
      <li>Fit external solar security lights.</li>
      <li>Fit / Secure extension cables.</li>
      <li>Fit cable ties</li>
      <li>Secure trailing wires</li>
      <li>Fit screw covers</li>
  </ul>

  <h4>Flooring or carpet</h4>
  <ul>
      <li>Adjust door after new carpets fitted.</li>
      <li>Fix / Secure threshold</li>
      <li>Secure carpet</li>
      <li>Fit small area of flooring / carpet tiles</li>
  </ul>

  <h4>Door, window or lock</h4>
  <ul>
      <li>Fix / fit door chain</li>
      <li>Fix / replace door handles.</li>
      <li>Fit / replace doorbell.</li>
      <li>Fit digi door locks*</li>
      <li>Fit dead lock*</li>
      <li>Fit key safe / letterbox / milk box</li>
      <li>Fit bin locks</li>
      <li>Fit external cigarette box.</li>
      <li>Fit cat flap</li>
      <li>Fit window lock</li>
      <li>Clean the downstairs outside window.</li>
      <li>Apply frost film</li>
  </ul>

  <h4>Fence, shed or gate</h4>
  <ul>
      <li>Fix or repair fence panel</li>
      <li>Fix or repair gate</li>
      <li>Board shed window.</li>
      <li>Fit shed alarm.</li>
      <li>Fit lock to shed.</li>
  </ul>

  <h4>Outside or garden</h4>
  <ul>
      <li>Put up washing line / hook.</li>
      <li>Fit hose pipe to wall</li>
      <li>Put up hanging basket.</li>
      <li>Move or fill plant pots.</li>
      <li>Tidy part of garden / remove leaves.</li>
      <li>Trim hedge to clear access</li>
      <li>Fit / remove / secure sign to wall.</li>
      <li>Fit Recycle bin posts: Refer to Estates and Environmental Services Team</li>
      <li>Fit Posts: Not covered by the Handyperson Service as this requires a 'permit to dig'
      and the handypersons are not trained to carry out this.</li>
      <li>Gardening work: Handyperson cannot use any of the tenant's electrical equipment as 
      this will not have been PAT tested.</li>
  </ul>

  <h4>Grab rail</h4>
  <ul>
      <li>Fit / remove grab rail.</li>
  </ul>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "handi",
      "persn",
      "handy",
      "persson",
      "handy",
      "persn",
      "handy",
      "prson",
      "handy",
      "peron",
      "hany",
      "persoon",
      "hndy",
      "person",
      "handi",
      "persone",
      "handy",
      "perrson",
      "hand",
      "person",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const internalDoor = new ContentH(
  "internalDoor",
  "Internal Door",
  "Repairs or replacements for inside doors",
  `
<h3>Category Fault</h3>

  <p>Internal Door Repairs</p>

  <h3>Warranty</h3>

  <p>Identified from the Ohms system. If repair is identified as within a warranty period, 
  invoke the warranty repair process.</p>

  <h3>Key questions and information</h3>

  <p>Generally, need to be sceptical when interviewing tenants that are reporting a repair - potential 
  tenant recharge issue.</p>

  <h3>Recharge</h3>

  <p>Potential recharge</p>

  <h3>Outcome</h3>

  <ul>
      <li>If recharge advise tenant</li>
      <li>If ordering 3 doors or less - Order Remedy Repair</li>
      <li>If ordering more than 3 doors -- log more than 1 job on T-Mobile.</li>
  </ul>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "internldoor",
      "internaldor",
      "internaldorr",
      "intarnaldoor",
      "internaldooor",
      "internaldoorr",
      "intrnaldoor",
      "iternaldoor",
      "internalldoor",
      "internaldoer",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const kitchenUnit = new ContentH(
  "kitchenUnit",
  "Kitchen Unit",
  "Maintenance of cupboards and countertops",
  `
<h3>Category Fault</h3>

  <p>Kitchen Unit Repairs</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If the repair is identified as being within the warranty period,
  invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>There may also be a tenant Recharge issue if units have been damaged by tenants.</p>

  <p>Please note that any customer enquiries concerning outstanding Decent Homes (Investment) 
  work, or work to 'upgrade' kitchens should be directed to the Asset Management Team on </p>

  <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=AMT-GeneralEnq@sheffield.gov.uk">AMT-GeneralEnq@sheffield.gov.uk</a>
  

<h3>Recharge</h3>

  <p>Possible recharge</p>

<h3>Outcome</h3>

  <p>If Repair to unit - Order Remedy Repair</p>
  <p>If Recharge -- i.e damaged by tenant, please advise tenant and log recharge job 
  accordingly.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "kitchennunit",
      "kitcenunit",
      "kitchenunitt",
      "kicthenunit",
      "kithchenunit",
      "kitchenuunit",
      "kitchenunitt",
      "kitchununitt",
      "kitchenunite",
      "kitchennunit",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const liftorHoist = new ContentH(
  "liftorHoist",
  "Lift or Hoist",
  "Servicing of lifts and hoists",
  `
    <ul>
      <li>Log a job on T-Mobile</li>
      <li>Back out of job green arrow</li>
      <li>Phone through to lift section on <a href="tel:0114 2734410">0114 2734410</a> to make aware.</li>
      <li>If passenger lift adds location of lift and any further information.</li>
  </ul>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "lifttorhoist",
      "liftorhoit",
      "liforhoist",
      "liftorhoits",
      "liftorhois",
      "liftorhoistt",
      "lftorhoist",
      "liftorhoisst",
      "lifftrhoist",
      "liftorhoost",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const lostKeyorFob = new ContentH(
  "lostKeyorFob",
  "Lost Key or Fob",
  "Replacement of lost keys or fobs",
  `
<h3>Category Fault</h3>
  <p>Lost keys</p>

<h3>Codes</h3>
  <p>N/A</p>

<h3>Key questions and information</h3>
  <p>Check if the customer is elderly or vulnerable</p>

<h3>Recharge</h3>
  <p>Yes</p>

<h3>Outcome</h3>
  <p>Log recharge job on T-Mobile</p>

<h3>Lost Fob</h3>
  <p>If the tenant calls and has lost the fob (communal door) please refer to the local area housing office.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "lostkeyorfb",
      "lostkeyorfo",
      "lostkyorfob",
      "lostkeyrfob",
      "lostkeyorrfob",
      "losstkeyorfob",
      "lostkeyorfoob",
      "lostkeyofob",
      "lostkyeorfob",
      "lostkeyrfobb",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const newBuildPropertyDefectorEmergencyCallOut = new ContentH(
  "newBuildPropertyDefectorEmergencyCallOut",
  "New Build Property Defect or Emergency Call Out",
  "Urgent fixes for new-build defects",
  `
  <h3>Property Repairs</h3>

  <p>If a tenant calls to report a repair to new build properties, provide them with the contact details 
  of Equans:</p>
  <p>Telephone: 0800 019 0919 or 01709 766017</p>
  <p>Opening hours: Monday to Friday 8:30am to 4pm</p>
  <p>Email: <a href="mailto:yhm.customercare.uk-kmr@equans.com">yhm.customercare.uk-kmr@equans.com</a></p>
  <p>For emergency OOH repairs including bank holidays, please call 0800 019 0919 or 01709 766017. 
  No emails will be monitored OOH, so any emergency repairs will need to be called through.</p>

  <h3>Escalation using T-Mobile</h3>

  <p>There are 2 <strong>categories</strong> of notes:</p>

  <ul>
      <li>Chase Calls</li>
      <li>Important Must-Read Notes (you need someone to read them and act on them)</li>
  </ul>

  <p>Note: normal/general notes -- not important can be added normally without picking a category, 
  the notes will stay on the job as normal.</p>

  <h3>Business Continuity</h3>

  <p>OHMS Business Continuity Plan Form Logging an emergency job when OHMS is down.</p>
  <p>Systems are down -- T-Mobile -- apologise and request the tenant to call back.</p>
  <p>A Storm message will be played forewarning new callers.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "newbuildpropertydefector",
      "emergenccallout",
      "newbuidpropertydefector",
      "emergencycallout",
      "newbuildpropertydefctor",
      "emergencycallout",
      "newbuildpropertydefector",
      "emergencalout",
      "newbuildpropertydefector",
      "emergencycallouut",
      "newbuildpropertydefector",
      "emergenccalloout",
      "newbuildpropertydefector",
      "emrgncycallout",
      "newbuildpropertdefector",
      "emergencycallout",
      "newbuildproperydefector",
      "emergencycallout",
      "newbuildpropertydefector",
      "emrgencycallout",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const paintingCommunalArea = new ContentH(
  "paintingCommunalArea",
  "Painting Communal Area",
  "Repainting shared spaces",
  `
<h3>Painting Communal Area Service</h3>

  <ul>
      <li>An hour's work of minor painting i.e., small areas or tidy up work, in either communal areas 
      or around council owned properties or land.</li>
      <li>The work should fit within the scope and intention of the Handyperson Painting service.</li>
      <li>The work is ordered by a housing officer, warden or caretaker.</li>
  </ul>

<h3>Type of Painting Work</h3>

  <ul>
      <li>Internal Communal Areas including bin chutes and bin stores</li>
      <li>Small areas of painting including tidy up work.</li>
  </ul>

<h3>Community Centres</h3>

  <ul>
      <li>Small areas of painting including tidy up work</li>
  </ul>

<h3>Graffiti</h3>

  <ul>
      <li>Painting over removed graffiti or non-offensive graffiti.</li>
  </ul>
  <p>Offensive Graffiti is removed by the Estates Team but may require painting over the area after blast 
  washing.</p>

<h3>Communal Handrails</h3>

  <ul>
      <li>Painting communal handrails and tidying up.</li>
  </ul>
  <p>Handrails on footpaths are a repair job and this work is carried out under the Painting Programme.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "paintig",
      "communalarea",
      "painting",
      "comunalarea",
      "painnting",
      "communalarea",
      "painting",
      "communalare",
      "painting",
      "communalaree",
      "painting",
      "comunallarea",
      "panting",
      "communalarea",
      "painting",
      "communaarea",
      "painting",
      "comunalareaa",
      "painting",
      "communallarea",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const pitchedRoof = new ContentH(
  "pitchedRoof",
  "Pitched Roof",
  "Maintenance of sloped roofs",
  `
<h3>Category Fault</h3>

  <p>Pitched Roofing Repairs</p>

<h3>Codes</h3>

  <ul>
      <li>Repairs to Pitched Roof</li>
      <li>Remedy leaking Pitched Roof to Dwelling (leaking into property)</li>
  </ul>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile. If repair is identified as within a warranty period, invoke the warranty 
  repair process.</p>

<h3>Key questions and information</h3>

  <p>If the property has a <strong>RO</strong> (Roof Ordered) code, you should decide if the enquiry is 
  in relation to the ongoing Reroofing Programme or if it is a genuine repair requiring a repair to be 
  ordered.</p>
  <p>If the enquiry is in relation to the Re-roofing Programme, transfer to 
  <strong>Asset Management team </strong> </p>

    <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=AMT-GeneralEnq@sheffield.gov.uk">AMT-GeneralEnq@sheffield.gov.uk</a>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcomes</h3>

  <p>Log a job on T-Mobile *Remember to put in order comments <strong>Storm Damage</strong> if required.</p>
  <p>If leaking into property, order as <strong>Urgent Leak</strong></p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "pithedroof",
      "pitcheddroof",
      "pitchedrooff",
      "pithcedroof",
      "pitchedroofff",
      "pitchedrooffff",
      "pitchdroof",
      "pitchdrooff",
      "pitchedroofff",
      "pithchedroof",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const plastering = new ContentH(
  "plastering",
  "Plastering",
  "Repairs for walls and ceilings",
  `
<h3>Category Fault</h3>

  <p>Plastering Repairs</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
  warranty repair process.</p>

<h3>Key questions and information</h3>

  <p><strong>Sealant jobs around a bath</strong> are done by Plasterers (not plumbers)</p>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcome</h3>

  <p>Log job on T-Mobile</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "plasterin",
      "plasttering",
      "plasterinng",
      "plasteriing",
      "plastaring",
      "plaastering",
      "plasteering",
      "plastteringg",
      "plasterring",
      "plaasterinng",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const plumbingandDomesticHotorColdWater = new ContentH(
  "plumbingandDomesticHotorColdWater",
  "Plumbing and Domestic Hot or Cold Water",
  "Fixing water pipes and systems",
  `
<h3>Category Fault</h3>

  <p>Plumbing Repairs - Domestic Hot / Cold Water Services</p>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
  warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>Check if the repair is regarding no water flowing out of the taps, or whether there is water flowing, 
  and it is cold. If it's around no hot water then this should be a domestic heating repair.</p>
  <p>External bursts should be ordered as an appointable job.</p>

  <p><strong>Sealant jobs around a bath</strong> are done by Plasterers (not plumbers)</p>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcome</h3>

  <p>Log a job on T-Mobile.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "plumbinganddomestic",
      "hotorcoldwter",
      "plumbinganddomestic",
      "hotrcoldwater",
      "plumbinganddomestic",
      "hotorcolddwater",
      "plumbinganddometic",
      "hotorcoldwater",
      "plumbingnddomestic",
      "hotorcoldwater",
      "plumbinganddomestic",
      "hotorrcoldwater",
      "plumbinganddomstic",
      "hotorcoldwater",
      "pluminganddomestic",
      "hotorcoldwater",
      "plumbinganddomestic",
      "hotorcoldwaterr",
      "plumbinganddomestic",
      "hotorcoldwaater",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const refuseChute = new ContentH(
  "refuseChute",
  "Refuse Chute",
  "Cleaning and maintenance of waste chutes",
  `
<h3>Category Fault</h3>

  <p>Refuse Chute Repairs</p>

  <ul>
      <li>Bin Chute -- Stuck OPEN -- FIRE HAZARD will go to the Fire Stopping Team</li>
      <li>Bin Store/chute will go to the Responsive Repair Team (joiner)</li>
  </ul>

<h3>Warranty</h3>

  <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the warranty repair process.</p>

<h3>Key questions and information</h3>

  <p>N/A</p>

<h3>Recharge</h3>

  <p>N/A</p>

<h3>Outcome</h3>

  <p>For blocked refuse chutes, refer the customer to Council Housing Service call center through </p>
  
    <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=ElectricalSheffield@Sheffield.gov.uk">ElectricalSheffield@Sheffield.gov.uk</a>
  
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "refussechute",
      "refuzechute",
      "refuschute",
      "refusechut",
      "refuzechut",
      "refussechute",
      "refuschutte",
      "refuseechute",
      "refsechute",
      "refusechutte",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const reroofingProgrammeWarranty = new ContentH(
  "reroofingProgrammeWarranty",
  "Re-roofing Programme Warranty",
  "Roof replacement warranty repairs",
  `
  <p>If a repair is needed and the re-roofing work is <strong>under warranty</strong> (within 6 months), 
  please email the details to the Asset Management Team on <a href="mailto:AMT-GeneralEnq@sheffield.gov.uk"></a></p>
  <p>If a repair is needed and the re-roofing work is <strong>not under warranty</strong> (12 months), 
  the repair should be dealt with as a new repair.</p>
  <p>If a customer is <strong>unhappy with the quality of work</strong>, the workers, or the programme 
  in general, please email the details to the Asset Management Team on <a href="mailto:AMT-GeneralEnq@sheffield.gov.uk"></a></p>
  <p>If a customer is <strong>reporting an emergency on site</strong>, the relevant contractor should be
  notified. There is a <a href="mailto:HME_GandE_Reinstates@sheffield.gov.uk">spreadsheet</a> that lists 
  all addresses that are to be included in the Re-roofing Programme along with the emergency contact numbers.</p>
  <p>In OHMS, the Re-roofing work is indicated by the <strong>RW</strong> code. The Property Notes will show 
  the warranty dates and numbers to contact.</p>

  <img class="knowledge-img" src="https://cdn.uk.empro.verintcloudservices.com/tenants/sheffield/Images/re-roofing-programme-warranty.jpg" alt="OHMS code and job history can be seen on Ohms" loading="lazy" referrerpolicy="no-referrer" />


  <p>Over the next 5 years from 2025 to 2030, the Asset Management Team will manage a citywide re-roofing 
  programme.</p>

  <p>Three Types of Letters Sent to Council Tenants and Owner Occupiers</p>

  <ul>
      <li>
          <h4>In Programme Letter</h4>
          <p>Sent to council properties that will have roofing work done.</p>
      </li>
      <li>
          <h4>Party Wall Notice</h4>
          <p>Sent to owner occupiers or freehold properties that are adjoined to council properties. 
          This notice includes an acknowledgement (returnable) letter that owner occupiers or freeholders 
          must send back to the council.</p>
      </li>
      <li>
          <h4>Access Letter</h4>
          <p>Sent to council tenants or owner occupiers/freehold properties if the council is having access 
          issues regarding roofing work.</p>
      </li>
  </ul>

  <p>Customers also receive another letter from the contractor prior to work starting at their property or 
  block.</p>
  <p>The proposed works could include but are not limited to any of the following:</p>

  <ul>
      <li>Replacing the existing flat roof covering</li>
      <li>Insulating the existing roof</li>
      <li>Where required, installing fire stopping over the party wall</li>
      <li>Installing a secret gutter between your roof and the roof covering of an owner occupier</li>
      <li>New flashings, etc.</li>
      <li>Possible repairs to the shared service stacks or flues</li>
      <li>New soffits and fascia’s</li>
      <li>New rainwater goods</li>
      <li>Structural works where identified</li>
      <li>Removal of identified asbestos</li>
  </ul>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "reroofing",
      "programe",
      "warranty",
      "reroofing",
      "programme",
      "warrnty",
      "reroofing",
      "programmee",
      "warranty",
      "reroofing",
      "progrmme",
      "warranty",
      "reroofing",
      "programm",
      "warranty",
      "reroofing",
      "programme",
      "warrantyy",
      "reroofing",
      "programe",
      "warrantyy",
      "reroofing",
      "programme",
      "waranty",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const rightToBuy = new ContentH(
  "rightToBuy",
  "Right To Buy",
  "Tenant purchase scheme for homes",
  `
  <p>If an address is shown as Right to Buy, we can only put repairs on to make the property "wind and 
  watertight". For example, doors, windows, and roof repairs that are related to Health and Safety, also 
  any internal leaks to a flat below.</p>

  <h3>Customer claims they are not in the RTB process.</h3>

    <p>Sometimes a customer may say that their Right to Buy application has been denied and that they are no
    longer in the RTB process. Technically, the application may indeed have been denied but the tenant has 
    the right to appeal the denial. For this reason, we do not close the application or remove the RTB status 
    code until after the expiration date of the possible appeal. This is 8 weeks from the date we denied the 
    application.</p>
    <p>If the tenant contacts us prior to the expiration date to state, they are not going to appeal we will 
    close the application and change the repairs status back to tenanted. Any queries about this, please 
    contact the contact the Home Ownership Team on </p>

    <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=rdh@sheffield.gov.uk">rdh@sheffield.gov.uk</a>

  <h3>Right to Buy inspection requests</h3>

    <p>For Right to Buy inspections, please contact the Home Ownership team on <a href="mailto:rdh@sheffield.gov.uk"></a></p>
    <p>Any tenant that is in a Right to Buy stage is not eligible for the Handyperson service.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "rigth",
      "tobuy",
      "right",
      "tbuy",
      "right",
      "tobuyy",
      "rigt",
      "tobuy",
      "right",
      "toby",
      "right",
      "toobuy",
      "righ",
      "tobuy",
      "right",
      "tobu",
      "right",
      "tobuuy",
      "right",
      "ttobuy",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const rightToRepair = new ContentH(
  "rightToRepair",
  "Right To Repair",
  "Tenant rights for essential repairs",
  `
  <h3>About the Right to Repair scheme</h3>

    <p>The right to repair scheme is designed to ensure that council tenants can get certain repairs 
    completed quickly and easily. It sets time limits for certain types of repairs, which councils must 
    stick to. If the contractors the council uses don't do the work in that time, a request can be made 
    to hire someone else. If the repairs still aren't done, compensation can be claimed by the 
    tenant/resident.</p>

  <h3>Repairs covered</h3>

    <p>It only covers certain repairs, known as 'qualifying repairs', which cost less than £250 to carry out. </p>
    
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "rigth",
      "torepair",
      "right",
      "trepair",
      "right",
      "repaair",
      "righ",
      "torepair",
      "right",
      "repai",
      "right",
      "toorepair",
      "righ",
      "trepir",
      "right",
      "reapir",
      "right",
      "rrepair",
      "right",
      "reepair",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const scaffolding = new ContentH(
  "scaffolding",
  "Scaffolding",
  "Temporary structures for high work",
  `
  <h3>Blocking Access</h3>

    <p>If a new tenant states that they cannot move into their new property due to scaffolding obstructing 
    access and blocking doors or windows; contact the Roofing team on internal number 0114 2735921 and also 
    inform the Vacants Team on </p>

    <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=voids@sheffield.gov.uk">voids@sheffield.gov.uk</a>
    
  <p> It will then be arranged for the scaffolding to be moved to allow access. This will prevent any 
  discretionary payments to rent accounts via Vacants due to the tenant being unable to move into the property.</p>

  <h3>Scaffolding Process</h3>

    <p>This procedure only applies to Steel (or sometimes it says Fixed which is the same thing). Hi-Point 
    give SCC a date when they will be able to use it from which is the date put on screen as a "handover" 
    date, but they start erecting steels 2 days before due to health and safety procedures.</p>
    <p>To clarify, the process is:</p>

    <ul>
        <li>Day 1 Hi-Point erect a scaffold.</li>
        <li>Day 2 Hi-Point supervisors / inspectors inspect the scaffold to make sure they consider it is 
        safe to work on</li>
        <li>Day 3 SCC inspector inspects the scaffold to make sure it passes SCC safety procedures to work 
        on</li>
    </ul>

    <p>With this procedure, they may be working on the scaffold on the 3rd day after the SCC inspector has 
    inspected, but sometimes the SCC inspector will fail the scaffold which means Hi-Point have to go back 
    and alter it and then the inspection procedure will start again which obviously will delay work.</p>
    <p>If the scaffold passes the inspection, they will work on it as soon as they can but have to fit this 
    in with day-to-day appointments and Urgent as the WAH and roofing teams do everything i.e., scaffolds, 
    appointments and Urgent. They will always get scaffold jobs done as soon as possible as we are charged 
    weekly for the scaffold.</p>

    <p>Remember that lots of jobs that use a scaffold do get delayed by adverse weather conditions i.e., 
    too wet, windy, or icy. There may also be other variables that can affect the work starting such as 
    operative absence, van breakdowns or emergency / urgent jobs taking priority, so please also bear these 
    possibilities in mind.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "scafolding",
      "scafflding",
      "scafoldng",
      "scaffoling",
      "scaffoldin",
      "scaffoldingg",
      "scafollding",
      "scaffolling",
      "scaffoelding",
      "scaffoldinng",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const surveyors = new ContentH(
  "surveyors",
  "Surveyors",
  "Professionals who assess buildings for structural integrity, repairs, or property valuation",
  `
    <p><strong>Do not log surveyors' jobs</strong>.</p>
    <p>These are logged when an operative has attended the property and has established that it is a lot 
    bigger job / more work needed. The operative will go back and pass the information to his 
    manager/ team leader, and they will log a surveyor's job. These jobs will be picked up by the surveyors 
    and they will contact the tenant with an appointment.</p>
    <p>If the job has been allocated to a surveyor, please contact them direct via phone or email. 
    Any job that has not been allocated or needs chasing up please email your senior, who will pass on the 
    information.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "survayors",
      "servayors",
      "surveryors",
      "surveyers",
      "sureyors",
      "surveeyors",
      "survyyors",
      "survyors",
      "suveyors",
      "surveryor",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const tarmac = new ContentH(
  "tarmac",
  "Tarmac",
  "A road surfacing material used for driveways and pathways that may need repair due to wear and tear",
  `
    <p>Please log a job on T-Mobile with the description, location, and approximate size, then 
    <strong>book a Non appointed</strong> appointment.</p>
  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "tarmak",
      "tarmaac",
      "tarmacc",
      "tarmoc",
      "taramc",
      "tarmoc",
      "tarmaek",
      "tarmaak",
      "tarmak",
      "tarrmac",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const wallRepair = new ContentH(
  "wallRepair",
  "Wall Repair",
  "Fixing structural damage or cosmetic issues on internal or external walls",
  `
  <h3>Category Fault</h3>

    <p>Concrete/Wall Repairs</p>

  <h3>Warranty</h3>

    <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
    warranty repair process.</p>

  <h3>Rendering</h3>

    <p>We only make it safe.</p>

  <h3>Recharge</h3>

    <p>No</p>

  <h3>Outcome</h3>

    <p>Log a job on T-Mobile - except for Concrete Repairs to Concrete Gutters.</p>
    <p>Examples of Concrete Repairs - Lintels, Cills, Coping Stones, Canopy's, Marionette Walkways/Private 
    Balcony's, Columns and Beams.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "wallrepir",
      "walrepair",
      "wallrpair",
      "wallrepaiir",
      "wallrepaar",
      "walrepaiir",
      "wallrepairr",
      "wwallrepair",
      "wallreapir",
      "wallrepirr",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const wcBathorShowerorSinkUnit = new ContentH(
  "wcBathorShowerorSinkUnit",
  "WC, Bath, Shower or Sink Unit",
  "Plumbing fixtures such as toilets, baths, showers, and sinks that may need maintenance or replacement",
  `
  <h3>Category Fault</h3>
    <p>WC/Bath/Shower/Sink Unit Repairs</p>

  <h3>Contract</h3>
    <p>Responsive.</p>

  <h3>Codes</h3>

    <ul>
        <li>Repairs to Supply Tank</li>
        <li>Clear Blockage from WC / Sink / Bath / Soil Stack - Emergency Macro</li>
        <li>Repair Electric Installations Dwelling - Shower Unit (check Attributes) - HM&E Macro</li>
        <li>Repairs to Shower Head / Rail / Service valve - Remedy Macro</li>
        <li>Repair Burst Copper pipe - Emergency Macro</li>
        <li>Repair Bath taps / Waste / Sealant - Remedy Macro</li>
        <li>Repairs to Wash Hand Basin</li>
        <li>Repairs to WC</li>
    </ul>

  <h3>Warranty</h3>
    <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, invoke the 
    warranty repair process.</p>

  <h3>Key questions and information</h3>
    <p>If the request is from an operative for <strong>new shower</strong>, check the attributes on the 
    customer records and place an order to replace the shower, only if it is on the current attributes.</p>

  <h3>Upgrade</h3>

    <p>Where a tenant is <strong>able bodied</strong> and not elderly and the shower (generally over a bath), 
    or the bath cannot be used, a standard Appointment.</p>
    <p>Where a tenant is <strong>disabled or elderly</strong> and they have a walk-in shower then the repair 
    should be up graded to a more Urgent category. If unsure, please ask your supervisor.</p>
    <p><strong>Sealant jobs around a bath</strong> are done by Plasterers (not plumbers).</p>
    <p>Toilet seat repairs are the tenant's <strong>own</strong> responsibility in normal circumstances. 
    If the tenant is vulnerable or a resident of Sheltered accommodation, a repair to replace a toilet seat 
    can be ordered. If unsure, please ask your supervisor.</p>
    <p><strong>Shower Rails and rise rails</strong> are fitted by Plumbers not Joiners.</p>
    <p>Any customer enquiries concerning outstanding <strong>Decent Homes</strong> (Investment) work, 
    or work to '<strong>upgrade' kitchens</strong> should be directed to the: </p>
    
    <a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/refer_to_service?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }&txt_emailservice=AMT-GeneralEnq@sheffield.gov.uk">AMT-GeneralEnq@sheffield.gov.uk</a>

  <h3>Systems and Processes</h3>
    <p>Only white soft closed seats can be fitted.</p>

  <h3>Recharge</h3>
    <p>Possible Tenant recharge for damaged items.</p>

  <h3>Outcome</h3>
    <p>Log job on T-Mobile</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "wc bath or showerr sink unit",
      "wc bath or shower or sink unt",
      "wc bath or shower o sink unit",
      "wc bath or shower or sink unitt",
      "wc bath or showerr or sink unit",
      "wc bath or shower or sink uunit",
      "wc bath or shwer or sink unit",
      "wc bath or showr or sink unit",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const windowSillorCill = new ContentH(
  "windowSillorCill",
  "Window Sill or Cill",
  "The horizontal ledge at the bottom of a window, which may require repairs due to weather damage",
  `
  <p>Question the customer sufficiently to ensure you are going to select the correct tradesperson 
  for the job.</p>

    <p>Find out:</p>

    <ul>
        <li>if the windowsill is <strong>internal or external</strong></li>
        <li>what it is made of, it its:</li>
        <ul>
            <li>wooden or plastic, this requires a <strong>joiner</strong></li>
            <li>concrete or quarry tiles, this requires a <strong>bricklayer</strong>.</li>
        </ul>
    </ul>

    <p>As always if unsure, please ask your supervisor / team leader.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "windowsilorcill",
      "windowsillorcil",
      "windowsillorcell",
      "windowsillorciill",
      "windowsilorcil",
      "windosillorcill",
      "windowsilorrCill",
      "windowsillorcilll",
      "windowsilrcill",
      "windowsillorcillll",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const windowFrame = new ContentH(
  "windowFrame",
  "Window Frame",
  "Repairs for Window Frame",
  `
  <h3>Category Fault</h3>

    <p>Window Frame Repairs</p>

  <h3>Warranty</h3>

    <p>Identified from the T-Mobile system. If repair is identified as within a warranty period, 
    invoke the warranty repair process.</p>

  <h3>Key questions and information</h3>

    <p>Ask tenant for details of window type i.e., UPVC, Wood or Metal</p>
    <p>Police incident number is required if repair is because of Burglary/Vandalism amend category of work. 
    Where there is no Crime Reference Number, board up/make safe.</p>
    
  <h3>Recharge</h3>

    <p>Yes where there is no <strong>Police Crime Reference Number</strong>, board up/make safe only.</p>

    <h3>Order Remedy Repair</h3>


  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "windwframe",
      "windoframe",
      "windowfrme",
      "windowfrrame",
      "windowfraame",
      "windowfame",
      "windowframme",
      "windowfrime",
      "windofram",
      "windowframee",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const workingatHeight = new ContentH(
  "workingatHeight",
  "Working at Height (WAH)",
  "Tasks performed above ground level that require safety measures such as harnesses and scaffolding",
  `
    <p>There is often some confusion as to what constitutes a 'Working at Height' job with some orders 
    being passed to Working at Height when they should be picked up by the responsive team on the Hub. 
    It might be necessary in some cases for the customer to be asked to <strong>identify exactly where 
    the problem is</strong> in the property, i.e., an overflow that is running can often be low down and 
    needn't be passed to Working at Height.</p>

  `,
  { buttonLabel: "Enquiry Counter", formName: "menu_repairs_service" },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: [
      "workingatheigh",
      "workingattheight",
      "workngatheight",
      "workingatheigt",
      "workingatheigght",
      "workingatheighht",
      "workingatheigtt",
      "workingaheight",
      "workingatheigth",
      "workingaheightt",
    ],
    categories: ["Repairs"],
  },
  { date: "28/04/2025", name: "Shahzad Athar" }
);

const newHousingPin = new FormH(
  "newHousingPin",
  "New Housing Pin",
  "Send a customer an email of their new housing pin",
  "send_housing_pin",
  {
    type: "Request",
    keywords: 
    [
      "Housing Pin",
      "Repair Pin",
      "Repairs Pin",
      "Housing Password",
      "Repair Password",
      "Repairs Password",
      "Housing Repair Pin",
      "Housing Repairs Pin",
      "Repair Housing Pin",
      "Repairs Housing Pin"
    ],
    categories: ["Repair"],
  },
  { date: "22/05/2025", name: "Sam Coupland" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const repairs = new MenuH(
  "repairs",
  "Repairs",
  "Report home repairs, safety checks, accessibility adaptations, and maintenance for internal, external, and communal property features.",
  [
    adaptation,
    blacksmith,
    brickwork,
    chimneyStack,
    claimforDamage,
    clothesPost,
    communalArea,
    concrete,
    dampandMould,
    districtHeatingSwitch2Setup,
    doorFurniture,
    drainage,
    disrepair,
    electricalandHeating,
    electricalTesting,
    externalContractors,
    externalDoorLock,
    externalDoor,
    flatRoof,
    floororStaircase,
    footpathandSteps,
    fireJobs,
    garageorDetachedOutbuilding,
    gasandDomesticSystems,
    gasReinstateandUncapServicesorAppointments,
    gateorFence,
    glazingincludingfailedDoubleGlazedUnits,
    gutteringandRainwaterPipes,
    handyperson,
    internalDoor,
    kitchenUnit,
    liftorHoist,
    lostKeyorFob,
    newBuildPropertyDefectorEmergencyCallOut,
    paintingCommunalArea,
    pitchedRoof,
    plastering,
    plumbingandDomesticHotorColdWater,
    refuseChute,
    reroofingProgrammeWarranty,
    rightToBuy,
    rightToRepair,
    scaffolding,
    surveyors,
    tarmac,
    wallRepair,
    wcBathorShowerorSinkUnit,
    windowSillorCill,
    windowFrame,
    workingatHeight,
    newHousingPin
  ]
);

//#endregion Repairs

//#region Sheltered and Supported

const extraCareHousing = new ContentH(
  "extraCareHousing",
  "Extra Care Housing",
  "Discover Extra Care Housing in Sheffield, offering independent living with tailored care, flexible packages, and a range of facilities.",
  `
    <h3>What is Extra Care Housing?</h3>
    <p>Extra Care Housing is based on 3 key principles:</p>
    <ul>
      <li>To keep people as independent as possible.</li>
      <li>
        To allow someone to get services in their own home, without having to move
        to get them.
      </li>
      <li>
        Accommodation designed to be adaptable so that people can get the care and
        support they need at home.
      </li>
    </ul>
    <p>The main features are:</p>
    <ul>
      <li>Self-contained flats or bungalows, with their own front door.</li>
      <li>Choice of tenure (rent, shared ownership or buy).</li>
      <li>High standards of design, with wheelchair access throughout.</li>
      <li>High level of security & safety features with alarm call systems.</li>
      <li>Flexible packages, tailored to individual care needs.</li>
      <li>24-hour care and support (Emergencies only from 10p.m. – 6 a.m.)</li>
      <li>
        Range of facilities, e.g. cafe, craft/activity room, IT suite, with a number
        of activities taking place weekly.
      </li>
    </ul>
    <p>There are currently 5 Extra Care Housing schemes in Sheffield.</p>

    <h3>Extra Care Contact Details</h3>
    <p>
      Guildford Grange, Norfolk Park. Contact the scheme on <a href="tel:0114 2037888">0114 2037888</a><br>
      The Meadows, Shirecliffe. Contact the scheme on <a href="tel:0114 2435749">0114 2435749</a><br>
      Brunswick Gardens, Woodhouse. Contact the scheme on <a href="tel:0114 2940000">0114 2940000</a><br>
      Roman Ridge, Wincobank. Contact the scheme on <a href="tel:0114 2800540">0114 2800540</a><br>
      White Willows, Jordanthorpe. Contact the scheme on <a href="tel:0114 2377960">0114 2377960</a>.
    </p>
    <p>
      People need to be registered on the Council’s Housing Register but also need
      to complete a re-housing application form for the scheme itself.
    </p>
    <p>
      If anyone is currently receiving care and is interested in being re-housed to
      Extra Care Housing, they need to make their social worker/care manager aware
      of this.
    </p>

    <h3>Cost of Extra Care Housing</h3>
    <p>
      The costs of Extra Care Housing vary, depending on the type of accommodation
      and the tenure. Generally, the costs of rental properties in Extra Care
      include:
    </p>
    <ul>
      <li>Net rent for the individual property</li>
      <li>A service charge for the upkeep of the communal facilities</li>
      <li>A service charge for the individual property</li>
      <li>A Supporting People charge for housing related support.</li>
      <li>Council Tax is charged for on a separate bill.</li>
    </ul>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "sheltered_and_supported_transferred_to_service" },
  { typeKey: "sheltered_and_supported_information_provided" },
  {
    type: "",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

const furnishedAccommodation = new ContentH(
  "furnishedAccommodation",
  "Furnished Accommodation",
  "Explore the Furnished Accommodation service, offering affordable, furnished housing with flexible packages and delivery options.",
  `
    <p>
      Furnished Accommodation meets the need for good quality furnished housing for
      rent at affordable prices and offers an alternative for people residing in
      expensive bed and breakfast accommodation.
    </p>
    <p>
      Properties are furnished with goods generally selected by the customer on a
      choice basis to meet their needs on a 3-tiered service charge arrangement.
      Fully furnished properties are decorated and carpeted throughout and curtains
      and tracks are provided and fitted.
    </p>
    <p>
      Enquiries that are specifically regarding the information in this page can be
      sent to Furnished using the links at the bottom of the page. If the enquiry is
      related to other matters, for instance estate management, tenancy management
      or Anti-social behaviour (ASB), then the appropriate form should be used to process that enquiry.
    </p>
    <h3>Furnished Accommodation Cost</h3>
    <p>
      The cost depends on the package chosen and there are 3 tiers: Gold, Silver and
      Bronze. These carry £10, £15 and £20 per week charge that is payable over and
      above the net rent charge for the property.
    </p>
    <p>How it works</p>
    <p>There are three price bands to choose from:</p>
    <ul>
      <li>Gold - £23.94 per week (20 points)</li>
      <li>Silver - £17.96 per week (15 points)</li>
      <li>Bronze - £11.97 per week (10 points)</li>
    </ul>
    <p>Legacy Charging Model (No longer used for New Furnished)</p>
    <ul>
      <li>Bedsit - £23.05</li>
      <li>1 Bed - £26.05</li>
      <li>2 Bed - £30.05</li>
      <li>3 Bed - £34.04</li>
      <li>4 Bed - £43.02</li>
    </ul>
    <p>
      Each piece of furniture or floor covering will have a points value and the
      points will add up to package you want; Gold, Silver or Bronze. A Bronze
      package for example costs £10 a week and you can have 10 points worth of
      furniture (this could include a table and chairs, a settee, a fridge freezer
      and washing machine all at 2 points each and an armchair and crockery pack at
      1 point each). You can mix and match, depending on what furniture you already
      have.
    </p>
    <p>
      Items of furniture and colour choices now available include washing machines,
      fridge freezers, vacuum cleaners, pots and pans and 3 colours of carpets and
      vinyl.
    </p>
    <h3>Customer wants an item of furniture replacing</h3>
    <p>
      The exchanging of furniture items is subject to a variety of factors
      including:
    </p>
    <ul>
      <li>The age of the goods as they still may be under warranty.</li>
      <li>
        If damaged – the reason for the damage - must be fair wear and tear or
        manufacturing fault / defect.
      </li>
      <li>
        Most goods are assessed at the customer’s annual visit they receive and also
        all relevant electrical items are PAT tested at this time. The officer
        carrying out the visit will arrange any replacement goods if agreed and
        applicable.
      </li>
    </ul>
    <h3>Customer no longer wants their furniture</h3>
    <p>
      There are instances where financial hardship may be caused by the service
      charge and / or the customer has sourced their own goods now. The process of
      removing the service charge is known as Deed of Variation and it takes
      approximately 10 weeks to complete as there are 2 notice periods with a 28 days
      cooling off periods legally built into them.
    </p>
    <h3>Furnished and Local Assistance Scheme (LAS)</h3>
    <p>
      Furnished provide the goods and deliver them to customers who have applied for
      the grant / goods via Local Assistance Scheme. Furnished may provide
      installation at Council properties but do not perform installs at non-Council
      properties.
    </p>
    <h3>Furnished on Demand</h3>
    <p>
      The service is only available to new customers who are signing up for a new
      Council tenancy.
    </p>
    <p>Acceptance criteria:</p>
    <ol>
      <li>
        Applicants moving from any Temporary Accommodation property, Bed and
        Breakfast or Assessment Beds. The applicant must be currently bidding on
        Sheffield City Council properties and have a full homeless priority (This is
        generally bands A and B under the new Allocations policy).
      </li>
      <li>Applicants referred via a medical priority (Generally band A).</li>
      <li>
        Other applicants who would not be able to access a property without the
        Furnished Accommodation Service will be considered on a case-by-case basis
        (Most of these will be under band C in Allocations policy).
      </li>
    </ol>
    <p>(Most of these will be under band C in Allocations policy).</p>
    <p>
      NB: Budget constraints may impact on criteria 3 and criteria’s 1 & 2 will
      always take preference.
    </p>
    <p>
      If the Customer does not meet the above criteria direct them to alternative
      options such as St Vincent De Pauls, Local Assistance Scheme or Emmaus.
    </p>
    <h3>Furnished Delivery Schedule</h3>
    <p>
      Open the delivery schedule spreadsheet (copy the link:
      <a href=""G:/HSG/Public/Supported Hsg/Furnished Accommodation/Furnished delivery sheets/Furnished Delivery Sheet.xlsx"" target="_blank">"G:/HSG/Public/Supported Hsg/Furnished Accommodation\Furnished delivery sheets/Furnished Delivery Sheet.xlsx"</a> 
      and paste into the Windows Explorer title bar).
    </p>
    <p>
      Search for the customer's address (street) and remember that the same address
      may be on the spreadsheet a few times - look for the most recent entry.
    </p>
    <h3>Furnished Team</h3>
    <p>
      <strong> advisor note: </strong> The Furnished team can be contacted on
      <a href="tel:0114 2052600">0114 2052600</a>.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "sheltered_and_supported_transferred_to_service" },
  { typeKey: "sheltered_and_supported_information_provided" },
  {
    type: "Information",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

const gypsyAndTravellers = new ContentH(
  "gypsyAndTravellers",
  "Gypsy and Travellers",
  "Find information on Gypsy and Traveller sites in Sheffield, including management, roles, and waiting lists for accommodation.",
  `
    <h3>Where are the official Gypsy and Traveller sites</h3>
    <address>
      Long Acre View Holbrook Trading Estate<br>
      Holbrook<br>
      Sheffield<br>
      S20 3FU
    </address>
    <br>
    <address>
      Redmires Caravan Park Redmires Lane<br>
      Lodge Moor<br>
      Sheffield<br>
      S10 4JZ
    </address>
    <h3>Who manages the sites?</h3>
    <p>
      Both sites are managed by the Housing and Neighbourhood Service Gypsy and
      Traveller Site Management team based at Solpro.
    </p>
    <h3>What are the roles of the team</h3>
    <p>The team deals with everything including:</p>
    <ul>
      <li>Rent</li>
      <li>Tenancy Management</li>
      <li>Anti-social behaviour (ASB)</li>
      <li>Estate Management issues</li>
      <li>
        Repairs - all calls for new repairs or where an inspection is required
        should be transferred to the Repairs Contact Centre
      </li>
      <li>Vacants and lettings</li>
    </ul>
    <p>
      Everything is recorded on OHMS the same as housing tenants although these
      customers are not classed as ‘tenants’, they are classed as 'Occupiers' and are
      managed under 'agreements' under the Mobile Homes Act 1983.
    </p>
    <h3>Rehousing and Waiting Lists</h3>
    <p>Registrations are encouraged for both sites:</p>
    <ul>
      <li>Long Acre View (14 plots)</li>
      <li>Redmires Caravan Park (17 plots)</li>
    </ul>
    <p>
      And is done via the Gypsy and Traveller registration form. The registration
      form is issued by the Gypsy and Traveller Team, who maintain a waiting list
      for both traveller sites.
    </p>
    <p>
      This list is separate to the main Lettings system and it cannot be viewed on
      Abritas.
    </p>
    <h3>Roadside and Illegal Encampments</h3>
    <p>
      Environmental Protection Services deal with questions or enquiries around any
      roadside encampments or any other kind of unauthorised encampments, on
      <a href="tel:0114 2734651">0114 2734651</a>.
    </p>
    <h3>Supported Housing</h3>
    <p>
        Gypsy Traveller Site Support Officer can be contacted on
      <a href="tel:0771 1153441">0771 1153441</a>.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "sheltered_and_supported_transferred_to_service" },
  { typeKey: "sheltered_and_supported_information_provided" },
  {
    type: "",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

const olderPersonsIndependentLiving = new ContentH(
  "olderPersonsIndependentLiving",
  "Older Persons Independent Living (OPIL)",
  "Explore Sheltered Housing for older people in Sheffield, offering independent living with support services, security, and communal facilities.",
  `
  <p>
      A list of our Our sheltered housing schemes can be found at <a href="https://www.sheffield.gov.uk/housing/our-sheltered-housing-schemes" target="_blank">https://www.sheffield.gov.uk/housing/our-sheltered-housing-schemes</a>

      <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheltered%20Housing%20Schemes\`
    "
>
    Send link to review further information
</button>

  </p>
  <p>
      Sheltered housing is rented accommodation that is specially designed for older
      people who are able to live independently.
    </p>
    <p>
      It aims to provide comfortable accommodation with added security, in an
      environment where customers can come and go as they please.
    </p>
    <p>
      Enquiries that are specifically regarding the information in this form can be
      sent to OPIL using the links at the bottom of the form. If the enquiry is
      related to other matters, for instance, Estate Management, Tenancy Management
      or Anti-social behaviour (ASB), then the appropriate form should be used to process that enquiry.
    </p>
    <h3>Where are the properties?</h3>
    <p>
      Schemes are scattered all over the city. A comprehensive list of properties
      can be found on the council website or in the Older Persons Independent Living
      Service leaflet.
    </p>
    <h3>
      What does the Sheltered Neighbourhood Officer do and New Tenancy Support
    </h3>
    <p>
      The Neighbourhood Officers will complete a support plan with the tenant when
      they move in. This replaces the standard 'New Tenancy Visit' that
      non-Sheltered tenants receive.
    </p>
    <p>
      The plan is reviewed every six months or when there is a change in
      circumstances. We will agree with the customer the type and frequency of
      contact they require based on the customers needs. The Neighbourhood Officer
      will manage a Sheltered tenancy in the same way that a Neighbourhood Officer
      based in an area team would manage a standard tenancy, but will also include
      any support agreed in the support plan.
    </p>
    <p>
      The Neighbourhood Officers will help and support the customer to access any
      services they may need to help them live independently. The Neighbourhood
      Officers wardens will also contact relatives, call a doctor or an ambulance in
      an emergency.
    </p>
    <h3>What does OPIL provide</h3>
    <p>
      Convenient and comfortable accommodation with added security, in an
      environment where residents have their own front door and can come and go as
      they please. We can usually provide the following accommodation and
      facilities:
    </p>
    <ul>
      <li>Self contained flats/Studio apartments/Bungalows</li>
      <li>Communal Facilities such as:
        <ul>
          <li>Caretaking service for the communal areas</li>
          <li>City Wide Care Alarm (24 hour emergency response)</li>
          <li>Gardens</li>
          <li>Guest room</li>
          <li>Kitchen</li>
          <li>Laundry</li>
          <li>Lounge for social activities</li>
          <li>Neighbourhood Officer Warden</li>
          <li>Security and Safety features</li>
        </ul>
      </li>    
    </ul>
    <h3>Who is eligible for OPIL accommodation</h3>
    <p>
      Anyone aged over 60 and is registered for rehousing. In the case of a couple,
      at least one person must fit the age requirement.
    </p>
    <p>
      Before offering a property we will check to make sure it meets all your
      housing needs. You will also be invited to an accompanied viewing of the
      building without any commitment.
    </p>
    <h3>What are the costs of OPIL Accommodation</h3>
    <p>
      The cost of living in Sheltered Housing is very competitive when compared with
      other social housing providers.
    </p>
    <p>
      You pay weekly rent and a service charge (where applicable) for the heating
      and hot water in your property and/or towards the heating in communal areas of
      the scheme.
    </p>
    <p>
      There is an added support charge to cover the Neighbourhood Officer service
      and City Wide Alarm. If you are already in receipt of Housing Benefit you will
      not have to pay this charge.
    </p>
    <p>
      If you are on a low income you can apply to have an assessment to see if you
      are entitled to any assistance.
    </p>
    <p>
      You will receive help and advice on claiming Welfare and/or Housing Benefit at
      the start of your tenancy.
    </p>
    <h3>What are the benefits of OPIL Accommodation</h3>
    <ul>
      <li>Good quality housing</li>
      <li>Security</li>
      <li>Independence</li>
      <li>Your own front door</li>
      <li>Peace of mind, with help on hand in emergencies</li>
      <li>
        Neighbourhood Officer Warden support service and a 24 hr emergency response
        system connected to each flat (City Wide Care Alarms)
      </li>
      <li>
        A support plan - agreed with the Neighbourhood Officer - to meet individual
        needs
      </li>
      <li>Being part of the community</li>
    </ul>
    <h3>Register for OPIL Accommodation</h3>
    <p>Applicants should be registered for rehousing.</p>
    <p>
      You can access OPIL accommodation through the Sheffield Property Shop at: <a href="https://www.sheffieldpropertyshop.org.uk" target="_blank">www.sheffieldpropertyshop.org.uk</a> or call
      in at any of the local Area Housing Offices.

  <button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Sheffield%20Property%20Shop\`
    "
>
    Send link to review further information
 </button>

    </p>
    <p>You can also be referred through:</p>
    <ul>
      <li>Health and Housing</li>
      <li>Social Services</li>
      <li>Health Service</li>
    </ul>

    <h3>Contact Details</h3>
    <p>
      Sheltered Housing can be contact on <a href="tel:0114 2037030">0114 2037030</a> <a href="mailto:HomesAreaSheltered@sheffield.gov.uk">HomesAreaSheltered@sheffield.gov.uk</a> 
    </p>
    <p>
      Temporary Accommodation can be contact on <a href="tel:0114 2053171">0114 2053171</a> or <a href="tel:0114 2930832">0114 2930832</a> 
    </p>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "sheltered_and_supported_transferred_to_service" },
  { typeKey: "sheltered_and_supported_information_provided" },
  {
    type: "",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "15/10/2024", name: "Joe Nixon" }
);

//It might be worth updating the below to instead be a function that populates to use less code, this would add some complexity however.
const shelteredWardens = new ContentH(
  "shelteredWardens",
  "Sheltered Wardens",
  "Contact details for Sheltered Wardens.",
  `
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Balfour House</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          <address>
            Horner Close,<br>
            Stocksbridge,<br>
            S36 1LQ,<br>  
          </address>
          <a href="tel:0114 2830285">0114 2830285</a> (Public number, cannot use on the freephone)
        </p>        
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Blackberry Hamlet</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          <address>
            Halfway Centre,<br>
            Mosborough,<br>
            S20 4TA,<br>  
          </address>
          <a href="tel:0114 2482678">0114 2482678</a> (Public number, cannot use on the freephone)
        </p>        
      </div>
    </details>

    <details class="accordion">
    <summary class="accordion-header">
      <h3>Blackwell Court</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Blackwell Place,<br>
          S2 5PW,<br>
        </address>
        <a href="tel:0114 2701682">0114 2701682</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

    <details class="accordion">
    <summary class="accordion-header">
      <h3>Callow Mount</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Handbank Block,<br>
          Newfield Green,<br>
          S14 1PJ,<br>
        </address>
        <a href="tel:0114 2647736">0114 2647736</a> (Public number, cannot use on the freephone) <br>
        Fax: <a href="tel:0114 2358667">0114 2358667</a>
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Cambridge Court</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          120 Cambridge Road,<br>
          Heeley,<br>
          S8 9SN,<br>  
        </address>
        <a href="tel:0114 2586596">0114 2586596</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Charles Square Hamlet including Well Croft</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Charles Square,<br>
          High Green,<br>
          S35 4FS,<br>  
        </address>
        <a href="tel:0114 2869513">0114 2869513</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Cherry Tree Common</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          4 Union Road,<br>
          Nether Edge,<br>
          S11 9EF,<br>  
        </address>
        <a href="tel:0114 2585634">0114 2585634</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Crabtree Grange</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          191 Crabtree Road,<br>
          Norwood,<br>
          S5 7BA,<br>  
        </address>
        <a href="tel:0114 2437165">0114 2437165</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Elm Tree House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 37,<br>
          7 Ridgeway Road,<br>
          Intake,<br>  
          S12 2TW,<br> 
        </address>
        <a href="tel:0114 2646896">0114 2646896</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Ernest Copley House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Peckham Road,<br>
          High Green,<br>
          S35 3JA,<br>  
        </address>
        <a href="tel:0114 2848573 ">0114 2848573 </a> (Public number, cannot use on the freephone)
        Fax: <a href="tel:0114 2869910">0114 2869910</a>
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Ernest Fox House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Lump Lane,<br>
          Grenoside,<br>
          S35 9PZ,<br>  
        </address>
        <a href="tel:0114 2461011">0114 2461011</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Eva Ratcliffe House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Yew Lane,<br>
          Ecclesfield,<br>
          S5 9BE,<br>  
        </address>
        <a href="tel:0114 2400950">0114 2400950</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Helliwell Court</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 8,<br>
          Helliwell Lane,<br>
          Deepcar,<br>
          S36 2QH,<br>  
        </address>
        <a href="tel:0114 2830284">0114 2830284</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Holly Bank</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 23,<br>
          Mansfield Drive,<br>
          Intake,<br>
          S12 2BF,<br>  
        </address>
        <a href="tel:0114 2358668">0114 2358668</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>John Trickett House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Bevan Way,<br>
          Chapeltown,<br>
          S35 1RL,<br>  
        </address>
        <a href="tel:0114 2463644">0114 2463644</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Kinsey Road</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Kinsey Road,<br>
          High Green,<br>
          S35 4HP,<br>  
        </address>
        <a href="tel:0114 2848613">0114 2848613</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>


  <details class="accordion">
    <summary class="accordion-header">
      <h3>Low Edges</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 177,<br>
          Low Edges Road,<br>
          S8 7JG,<br>  
        </address>
        <a href="tel:0114 2839356">0114 2839356</a> (Public number, cannot use on the freephone). <br>
          Alternatively, dial the wardens on their mobiles, <a href="tel:0776 4229571">0776 4229571</a> or <a href="tel:0777 6462885">0777 6462885</a> 
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Lytton Court</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          37 Lytton Drive,<br>
          Parson Cross,<br>
          S5 8AZ,<br>  
        </address>
        <a href="tel:0114 2315752">0114 2315752</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Manor House </h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          706 Stannington Road, <br>
          Stannington, <br>
          S6 6AJ, <br>  
        </address>
        <a href="tel:0114 2340218">0114 2340218</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Mount View Lodge</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          194 Derbyshire Lane,<br>
          Norton,<br>
          S8 8SE,<br>  
        </address>
        <a href="tel:0114 2585327">0114 2585327</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Newgate Close</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Newgate Close,<br>
          High Green,<br>
          S35 4PD,<br>  
        </address>
        <a href="tel:0114 2869433">0114 2869433</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Newton Croft</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          26 Chapel Street,<br>
          Woodhouse,<br>
          S13 7JN,<br>  
        </address>
        <a href="tel:0114 2699927">0114 2699927</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Orpen House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 5, <br>
          2 Mawfa Road, <br>
          Norton, <br>
          S14 1AZ, <br>  
        </address>
        <a href="tel:0114 2358722">0114 2358722</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Painted Fabrics</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          69 Little Norton Drive,<br>
          Norton,<br>
          S8 8HH,<br>  
        </address>
        <a href="tel:0114 2746790">0114 2746790</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Park View Lodge</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 10,<br>
          44 Leader Road,<br>
          Hillsborough,<br>
          S6 4GH,<br>
        </address>
        <a href="tel:0114 2333788">0114 2333788</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Roscoe Court</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          2 Stanwood Road,<br>
          Stannington,<br>
          S6 5JF,<br>  
        </address>
        <a href="tel:0114 2347619">0114 2347619</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Springwater House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          44 Cotleigh Crescent,<br>
          Hackenthorpe,<br>
          S12 4HT,<br>  
        </address>
        <a href="tel:0114 2488296">0114 2488296</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>St Georges Court</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 35,<br>
          1 Beet Street,<br>
          Netherthorpe,<br>
          S3 7GP,<br>  
        </address>
        <a href="tel:0114 2762861">0114 2762861</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Sweeney House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 40,<br>
          Oxley Close,<br>
          Stocksbridge,<br>
          S36 1LH,<br>  
        </address>
        <a href="tel:0114 2830278">0114 2830278</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Welwyn Court</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Flat 1,<br>
          71 Jaunty Lane,<br>
          Gleadless,<br>
          S12 4DL,<br>  
        </address>
        <a href="tel:0114 2358727">0114 2358727</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Westnall House</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        <address>
          Glossop Row,<br>
          Oughtibridge,<br>
          S35 0GH,<br>  
        </address>
        <a href="tel:0114 2863231">0114 2863231</a> (Public number, cannot use on the freephone)
      </p>        
    </div>
  </details>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "sheltered_and_supported_transferred_to_service" },
  { typeKey: "sheltered_and_supported_information_provided" },
  {
    type: "",
    keywords: [
      "Sheltered",
      "Supported",
      "Sheltered & Supported",
      "Sheltered and Supported",
      "Warden",
    ],
    categories: ["Housing", "Sheltered and Supported"],
  },
  { date: "12/05/2025", name: "Joseph Coupland" }
);

const shelteredAndSupported = new MenuH(
  "shelteredAndSupported",
  "Sheltered and Supported",
  "Details on sheltered housing and supported living services, including eligibility and the support available for tenants.",
  [
    extraCareHousing,
    furnishedAccommodation,
    gypsyAndTravellers,
    olderPersonsIndependentLiving,
    shelteredWardens,
  ]
);

//#endregion Sheltered and Supported

//#region Tenancy enforcement

// Tenancy enforcement page to under main Housing menu i think

const tenancyEnforcementASB = new ContentH(
  "tenancyEnforcementASB",
  "Tenancy Enforcement (ASB)",
  "Information regarding Anti-Social Behaviour (ASB), including reporting, council responsibilities, and support for hate crime and domestic abuse victims.",
  `<p><h3>Anti-social Behaviour</h3>
    <p>Anti-social behaviour is behaviour which is capable of causing nuisance, annoyance, harassment, alarm or distress to an individual or community. This could range from a relatively minor issue to serious criminal activity. We do not adopt a single definition of anti-social behaviour but instead consider each report based on the circumstances.</p>
    <p>Examples of behaviours we may consider to be anti-social are:</p>
    <ul>
      <li> Playing excessively loud music/television/video games</li>
      <li> Threatening or verbally abusing another person</li>
      <li> Damaging property</li>
      <li> Attacking another person</li>
      <li> Failing to control a pet / banned breed pet</li>
      <li> Misusing drugs or alcohol</li>
      <li> Incorrect disposal of rubbish</li>
    </ul>
    <p>Examples of behaviours we may not consider to be anti-social are:</p>
    <ul>
      <li> Reasonable household noise</li>
      <li> Carrying out DIY at reasonable times</li>
      <li> Babies crying</li>
      <li> A one-off party if noise was the only issue and it is unlikely to be repeated</li>
      <li> Children playing (including ball games)</li>
    </ul>
    <h3>Police responsibility</h3>
    <p>South Yorkshire Police are responsible for dealing with any behaviour or activity which results in a criminal offence being committed.</p>
    <p>Where the perpetrator is an SCC tenant the Tenancy Enforcement and Sustainment Team (TEST) will work closely with SYP to ensure that any appropriate enforcement action is taken by the council.</p>
    <p>We feel, it is not appropriate to list specific incidents that Police deal with as this may result in the issue just being reported to police and not being routed to appropriate SCC teams who may also need to look at enforcement action.</p>
    <h3>Council Responsibility</h3>
    <p>We are responsible for incidents involving:</p>
    <ul>
      <li> abandoned vehicles</li>
      <li> dead animals</li>
      <li> dog fouling</li>
      <li> fly posting</li>
      <li> dumped, fly-tipped waste</li>
      <li> inoffensive graffiti</li>
      <li> non-hate crime graffiti</li>
      <li> littering</li>
      <li> lost, stray or barking dogs</li>
      <li> noise nuisance or DIY related noise (We cannot log anonymous complaints about noise as we rely on evidence from the complainant, and observations at the complainant’s home, to evaluate whether the noise is a statutory nuisance).</li>
      <li> syringes or needles</li>
      <li> dumped, fly-tipped waste (nobody present)</li>
    </ul>
    <p>Please note that although all of the above are issues that the council will deal with, only noise nuisance and possibly barking dogs are generally dealt with by TEST (where it is a SCC tenant). A number of other teams are involved in managing these issues including Environmental services and Estates teams etc..</p>
    <h3>Hate Crime</h3>
    <h4>What is hate crime?</h4>
    <p>Hate Crime is any criminal offence committed against a person or property that is motivated by an offender’s hatred of someone because of their Disability, Race, Religion or Beliefs, Sexual Orientation or Transgender.</p>
    <p>Crimes committed against someone because of their disability, transgender-identity, race, religion or belief, or sexual orientation are hate crimes and should be reported to the police.</p>
    <p>Hate crimes can include:</p>
    <ul>
      <li> threatening behaviour</li>
      <li> assault</li>
      <li> robbery</li>
      <li> damage to property</li>
      <li> inciting others to commit hate crimes</li>
      <li> harassment</li>
      <li> online abuse</li>
    </ul>
    <br>
    <h4>How to report Hate Crime</h4>
    <p>Anyone experiencing Hate Crime should report this to South Yorkshire Police, this can be done via 101 or via 999 if a crime is in progress or someone is in immediate danger. Hate Crime should also be reported to SCC, the Neighbourhood Team/ TEST who will work closely with Police and establish if any enforcement action against perpetrators is appropriate.</p>
    <ul>
      <li> robbery</li>
      <li> damage to property</li>
      <li> inciting others to commit hate crimes</li>
      <li> harassment</li>
      <li> online abuse</li>
    </ul>
    <h3>Sanctuary Scheme/Target hardening</h3>
    <p>Service Area: Action Domestic Abuse (Sanctuary Scheme)</p>
    <p>Telephone Number: Helpline No: <a href="tel:0808 8082241">0808 8082241</a>; Office No. <a href="tel:0114 2706999">0114 2706999</a></p>
    <p>Email Address: <a href="mailto:sanctuary.scheme@actionorg.uk">sanctuary.scheme@actionorg.uk</a></p>
    <p>South Yorkshire Fire and Rescue Service can fit blank letter boxes if there are concerns regarding harmful items being posted through the door. The Neighbourhood Officer can make a referral to SYF&amp;R for a Home Safety check.</p>
    <p>Neighbourhood Teams may have stock of target hardening equipment.</p>
    <p>Victim Support may support with target hardening.</p>
  </p>`,
  { buttonLabel: "Raise report", formName: "hou_enforcement_asb" },
  { typeKey: "" },
  { typeKey: "tenancy_enforcement_information_provided" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "14/02/2025", name: "Nathan Smith" }
);
//#endregion Tenancy enforcement

//#region Tenancy sustainment

const abandonment = new FormH(
  "abandonment",
  "Abandonment",
  "Report the abandonment of an item, pet or property.",
  "hou_sustainment_abandon",
  {
    type: "Report",
    keywords: ["Housing", "Abandon", "Pet"],
    categories: ["Housing"],
  },
  { date: "07/03/2025", name: "Nathan Smith" }
);

const boundaries = new FormH(
  "boundaries",
  "Council housing and private land boundaries",
  "Report boundary issues with Council housing land, private land and other Council owned land.",
  "hou_sustainment_boundary",
  {
    type: "Report",
    keywords: ["Boundaries", "Boundary"],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const burglarAlarmRequest = new FormH(
  "burglarAlarmRequest",
  "Burglar alarms",
  "Request new or chase installation, missing or damaged alarm, alarm removal, a repair or alarm code.",
  "hou_sustainment_bur_alar",
  {
    type: "Request",
    keywords: ["Burlgar", "Alarm"],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const fobsandKeys = new ContentH(
  "fobsandKeys",
  "Fobs and Keys",
  "Find out how to replace lost or stolen keys and fobs, including costs, required ID, and the process for requesting replacements.",
  `
  <p>
    Locks will only be replaced if the customer agrees to a recharge or if they have a valid crime reference number.
  </p>
  <p>
    The only exceptions are if the person is Elderly or a Vulnerable person, in which case a Discretionary Decision would need
    to be applied for.
  </p>
  <p>
    If the customer has contents insurance through the Council Housing Service scheme, they can make a claim by completing
    an insurance form.
  </p>
  <p>
    Lost or stolen keys, there may be a recharge (£5), communal doors are £5. If it's your own door, it's over £200 recharge from repairs.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Replacement Fobs</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Replacement fobs cost £10 (communal keys cost £5) and they can be purchased from your local area housing office
        or from your Warden if you live in Sheltered Accommodation. You will need to take ID with you when purchasing a
        replacement fob. If you are ordering a replacement communal door key, you will need to take the number off of the
        lock with you too.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Acceptable ID</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Preferably, at least one piece of evidence must be from the Primary List, and at least one document should contain
        photographic identification. The Primary List contains the most definitive piece of documentary evidence.
      </p>
      <p>
        If the evidence provided from the list does not contain a photograph (for example, birth certificate, marriage certificate,
        or divorce/annulment papers), then a further piece of identity should be provided with a photograph such as a photo-card driving license
        or valid passport.
      </p>

      <table style="width:100%">
        <tr style="background-color: black; color: white;">
          <tbody>
            <tr>
              <th>Primary ID</th>
              <th>Secondary ID</th>
            </tr>
            <tr>
              <td>Birth certificate</td>
              <td>Wage slip from current employer</td>
            </tr>
            <tr>
              <td>Current and valid passport</td>
              <td>Letter from Social Worker/Solicitor/Probation Officer</td>
            </tr>
            <tr>
              <td>Driving license</td>
              <td>Letter from DWP for Child/Work Tax Credits</td>
            </tr>
            <tr>
              <td>Marriage certificate</td>
              <td>Life assurance/insurance policies</td>
            </tr>
            <tr>
              <td>Divorce/Annulment papers</td>
              <td>Utility bill (paid in the customer's name for last quarter)</td>
            </tr>
            <tr>
              <td>UK Resident Permit</td>
              <td>Proof of all other benefits (e.g. JSA)</td>
            </tr>
            <tr>
              <td>ID card issued by the following EEA/EU countries (Finland, Greece, France, Germany, Irish Republic, Italy, Bulgaria and Romania, Austria, Belgium, Denmark, Malta, Liechtenstein, Luxembourg, Spain, Norway, Sweden, Portugal, Cyprus, Iceland, Netherlands, Switzerland and the UK. A8 countries, Czech Republic, Estonia, Hungary, Latvia, Lithuania, Poland, Slovakia and Slovenia)</td>
              <td>3 consecutive months bank statements</td>
            </tr>
            <tr>
              <td>Home Office Standard Acceptance letter</td>
              <td></td>
            </tr>
            <tr>
              <td>UK travel document</td>
              <td></td>
            </tr>
            <tr>
              <td>Immigration Status Document</td>
              <td></td>
            </tr>
            <tr>
              <td>NASS 35</td>
              <td></td>
            </tr>
            <tr>
              <td>Accession State Workers Registration Scheme Registration Card (Workers Registration Scheme Registration Card Medical Card)</td>
              <td></td>
            </tr>
          </tbody>
        </table>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Area Housing offices</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
      Please note: Howden House will email the relevant area with the fob token code so they can put it into the system.
      List of Area Offices:  <a href="https://www.sheffield.gov.uk/council-housing/neighbourhood-offices "target="_blank">https://www.sheffield.gov.uk/council-housing/neighbourhood-offices</a>
      <br>
        
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
        window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
            KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
        }interactionid=\${KDF.getParams().interactionid}&sel_service=Neighbourhood%20offices\`
    "
>
    Send link to review further information
</button>

    </p>
    </div>
  </details>

  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "tenancy_sustainment_information_provided" },
  { type: "Fobs and Keys", keywords: ["Tenancy"], categories: ["Housing"] },
  { date: "07/05/2025", name: "Dinah Williams" }
);

const garageRequest = new ContentH(
  "garageRequest",
  "Garages",
  "Use this section to accept an offer, decant, request a plot application form, purchase or quit a garage.",
  `
    <p>
      <strong>Advisor note:</strong> For accepting an offer, decanting a garage, purchasing or quitting a garage use the form at the bottom of this page.
    </p>
    <h3>Garage and garage plot application form</h3>
    <p>
      You will need to complete a Garage Registration form in your local Housing office or post the application to:
    </p>
    <address>
      Sheffield Council Housing Service,<br>
      PO Box 5967,<br>
      Sheffield,<br>
      S2 9GH
    </address>
    <p>
      You can find your nearest local Housing office at: <a href="https://www.sheffield.gov.uk/council-housing/neighbourhood-offices"target="_blank">https://www.sheffield.gov.uk/council-housing/neighbourhood-offices</a>
    
<button
    type="button"
    class="dform_widget email-btn dform_widget_type_button"
    aria-label="For further information send link"
    onclick="
    window.location.href = \`\${window.location.protocol}//\${window.location.hostname}/form/launch/send_link_to_service?\${
    KDF.getParams().customerid ? \`customerid=\${KDF.getParams().customerid}&\` : ''
    }interactionid=\${KDF.getParams().interactionid}&sel_service=Neighbourhood%20offices\`
    "
>
    Send link to review further information
</button>
    
    </p>
    <p>
      <a href="https://sccextranet.sharepoint.com/:u:/s/CustomerServiceKnowledgeCouncilHousing/ES04xrxIc7VKqUQ33LQjnF8Bx3FDF1Inm-mzsYUJRYii6Q?e=Sw7Yzn"target="_blank">Email garage application template</a>
    </p>
  `,
  { buttonLabel: "Raise Garage Request", formName: "hou_sustainment_garage" },
  { typeKey: "" },
  { typeKey: "tenancy_sustainment_information_provided" },
  {
    type: "Request",
    keywords: [
      "repairs and investmant",
      "repears and investment",
      "repairs and invesment",
      "repair and investement",
      "repairs and invesmant",
    ],
    categories: ["Housing", "Estates and Environments"],
  },
  { date: "15/05/2025", name: "Dinah Williams" }
);

const gardensUntidyCommunalAreas = new FormH(
  "gardensUntidyCommunalAreas",
  "Gardens (Untidy) and communal areas",
  "Report untidy Council gardens and untidy Council communal areas",
  "hou_sustainment_garden",
  {
    type: "Report",
    keywords: ["Garden", "Untidy", "Communal"],
    categories: ["Housing"],
  },
  { date: "27/02/2025", name: "Nathan Smith" }
);

const housingServiceParkingPermits = new ContentH(
  "housingServiceParkingPermits",
  "Housing Service Parking Permits",
  "Learn how to apply for housing service parking permits and contact details for customer services related to permits and other assistance.",
  ` 
<p>
<strong>Service Area:</strong> Customer Services Back Office (Fulfilment Team)<br>
<strong>Telephone Number:</strong> <a href="tel:0114 2734011">0114 2734011</a><br>
<strong>Further Information:</strong> Free School Meals, Blue Badge, Parking Permits, Children's Travel Pass, Disability Travel Permit, 
Streets Ahead, Environmental Services, Local Assistance Scheme<br>
<strong>Email Address:</strong> <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a>
</p>

  `,
  { buttonLabel: "Parking Permits", formName: "Tenancy Sustainment" },
  { typeKey: "" },
  { typeKey: "tenancy_sustainment_information_provided" },
  { type: "Parking Permits", keywords: ["Tenancy"], categories: ["Housing"] },
  { date: "07/11/2024", name: "Shahzad Athar" }
);

const nameChanges = new ContentH(
  "nameChanges",
  "Name Changes",
  "Find out the process for changing your name on your housing application, including required documents and acceptable forms of ID",
  `
<p>
You should present proof (3 documents in total) to a housing office or First Point who will copy the ID and save it to 
our document management store.</p>
<p><strong>Advisor note:</strong> Acceptable ID is listed in an accordion above.</p>
<p>
The name will then be changed in our Housing management system. alternatively, you can put the name change in writing 
along with proof of the new name (originals, not photocopies) and send it to 
<a href="mailto:RegistrationID@sheffield.gov.uk">RegistrationID@sheffield.gov.uk</a>.
</p>
<p>
At least one piece of proof must be primary evidence whilst the second may be either primary or secondary evidence.  
Proof of their current UK address is also required. 
</p>
<p>
Photo ID is also required to prove identity. If the customer does not have photo ID, they must provide a passport-sized photo. 
The same document cannot be used more than once (e.g., driving licence as primary).
</p>

  `,
  { buttonLabel: "Name Changes", formName: "Tenancy Sustainment" },
  { typeKey: "" },
  { typeKey: "tenancy_sustainment_information_provided" },
  { type: "Name Changes", keywords: ["Tenancy"], categories: ["Housing"] },
  { date: "07/11/2024", name: "Shahzad Athar" }
);

const permissions = new ContentH(
  "permissions",
  "Permissions",
  "Understand the requirements for requesting permission for alterations or improvements to your home, including conditions, restrictions, and the approval process.",
  ` 
  <p>
    If you are over £250 (Total Indebtedness) in arrears, your permissions request is unlikely to be granted. You must have written permission 
    from the Housing Service to alter or improve your home. This includes:
  </p>
  <ul>
    <li>Putting up any form of extension or building</li>
    <li>Adding to, changing, or replacing the fixtures, fittings, and appliances provided by us</li>
    <li>Altering essential gas, electricity, and water services</li>
    <li>Putting up a radio or television aerial or satellite dish</li>
    <li>Decorating the outside of your home</li>
    <li>Removing internal walls</li>
    <li>Insulation (Walls & Lofts)</li>
    <li>Conservatories (considered on an individual basis)</li>
    <li>Driveways</li>
    <li>Hardstandings</li>
    <li>CCTV</li>
    <li>Laminate flooring</li>
  </ul>
  <p>
    However, the following are highly unlikely to be granted due to extra maintenance costs and potential structural problems:
  </p>
  <ul>
    <li>Loft conversions</li>
    <li>Spiral staircases</li>
    <li>Swimming pools</li>
    <li>Extensions</li>
    <li>Stair lifts in communal areas</li>
  </ul>
  <p>
    It is the customer's responsibility to seek and get any planning or building regulation approvals. Every request for permission will be assessed 
    using criteria and conditions appropriate to the particular request. These criteria and conditions will be explained in the letter sent in reply 
    to the customer's permission request.
  </p>
  <p>
    We will take action against any installations that are in breach of Health and Safety regulations.
  </p>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Permission Requests</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>
        Written permission requests should be referred in the first instance (unless the customer is a Leaseholder or the permission request
        is for a mobility scooter) to the appropriate Area Team at:
      </p>
      <address>
        Sheffield Council Housing Service<br>
        PO Box 5967<br>
        Sheffield<br>
        S2 9GH
      </address>
      <p>
        If the permission request is for a mobility scooter, it should be referred to:
      </p>
      <address>
        Maintenance Partnership Unit (Permissions)<br>
        PO Box 5967<br>
        Sheffield<br>
        S2 9GH
      </address>

      <p>
        If the customer is a Leaseholder, permission requests should be put in writing to:
      </p>
      <address>
        Floor 11<br>
        Moorfoot Building<br>
        Sheffield<br>
        S1 4PL
      </address>
      <p>
        Once we have received your request, we will contact you to discuss it and, where necessary, arrange a suitable time to visit your property. 
        We will give you a decision within 21 days of receiving your request. If we give you permission, you should carry out the work within 90 days 
        and let us know when it is complete.
      </p>
    </div>
  </details>

  <details class="accordion">
    <summary class="accordion-header">
      <h3>Permission and Your Tenancy Conditions</h3>
      <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
      <p>Tenancy condition 47 states that:</p>
      <blockquote>
      <br>
        Where a tenancy condition requires you to ask for our permission, this means:<br>
        <ul>
          <li>A. You must ask for our permission, and you must not proceed until we give you our permission.</li>
          <li>B. We will confirm our answer in writing.</li>
          <li>C. If we refuse permission, we will explain why.</li>
          <li>D. If we give permission, we may attach additional conditions.</li>
          <li>E. We may withdraw our permission at any time if you do not comply with the conditions we have made.</li>
          <li>We will take action against you and/or charge you for any costs incurred if you do not comply with parts A-E above.</li>
        </ul>
      </blockquote>
    </div>
  </details>
  `,
  { buttonLabel: "Permissions", formName: "hou_sustainment_perm" },
  { typeKey: "" },
  { typeKey: "tenancy_sustainment_information_provided" },
  { type: "Permissions", keywords: ["Tenancy"], categories: ["Housing"] },
  { date: "07/03/2025", name: "Nathan Smith" }
);

const tenancyAgreementRequest = new ContentH(
  "tenancyAgreementRequest",
  "Tenancy Agreement Request",
  "Request a copy of your Tenancy Agreement, ensuring you provide the required identification and address proof documents to verify your request.",
  ` 
  <p>
    If the request is urgent or for a former tenancy, you will need to visit your Area Office with relevant ID to obtain a copy of your Tenancy Agreement.
  </p>
  <h3>Weekly Cost</h3>

  <p>
        Preferably, at least one piece of evidence must be from the Primary List, and at least one document should contain photographic identification.
      </p>
      <p>
        The Primary List contains the most definitive piece of documentary evidence. If the evidence provided from the list does not contain a photograph 
        (for example, birth certificate, marriage certificate, or divorce/annulment papers), then a further piece of identity should be provided with a 
        photograph such as a photo-card driving license or valid passport.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Proof of ID documents</th>
            <th>Proof of address</th>
          </tr>
          <tr>
            <td valign="top">
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
                <li>Proof</li>
              </ul>
            </td>
            <td valign="top">
              <ul>
                <li>Recent utility bill paid in that person’s name (last quarter)</li>
                <li>Most recent council tax statement</li>
                <li>Driving licence</li>
                <li>Home Office standard acceptance letter</li>
                <li>Letter from DWP for tax credits</li>
                <li>Bank statement from within the last 3 months</li>
                <li>Wage slip from current employer</li>
                <li>Life assurance/Insurance policies</li>
                <li>Proof of all other benefits</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
  `,
  { buttonLabel: "tenancyAgreementRequest", formName: "Tenancy Sustainment" },
  { typeKey: "" },
  { typeKey: "tenancy_sustainment_information_provided" },
  {
    type: "tenancyAgreementRequest",
    keywords: ["Tenancy"],
    categories: ["Housing"],
  },
  { date: "08/11/2024", name: "Shahzad Athar" }
);

const tenancyChange = new FormH(
  "tenancyChange",
  "Tenancy Change",
  "Request for adding, removing or enquiring about occupants, changes to tenancy both sole and joint, reporting a deceased tenant, ending a tenancy, passing on a tenancy or enquiring about tenancy start and end dates.",
  "hou_sustainment_ten_chan",
  {
    type: "Request",
    keywords: ["Housing", "Tenancy", "Tenant"],
    categories: ["Housing"],
  },
  { date: "07/03/2025", name: "Nathan Smith" }
);

const tenancyConditions = new ContentH(
  "tenancyConditions",
  "Tenancy Conditions",
  "Tenancy conditions outline tenant responsibilities, including rent payment, maintenance, and behavior expectations. Specific rules apply for alterations, pets, and tenancy violations. Tenants have rights like the right to repairs and compensation for certain improvements, and must follow rules for evictions and tenant references.",
  `
<details class="accordion">
  <summary class="accordion-header">
    <h3>Conditions as a Tenant</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    <details class="details-accordion">
      <summary>What are Tenancy Conditions?</summary>
      <div class="details-accordion-content">
        <p>
          Tenancy Conditions are an agreement between you and us. If you break these conditions of tenancy, you may lose your home. The basic conditions of your tenancy are:
        </p>
        <ul>
          <li>You must pay your rent.</li>
          <li>You must look after and carry out any day-to-day maintenance to the property.</li>
          <li>You must not cause a nuisance or danger to people nearby.</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Keeping Animals</summary>
      <div class="details-accordion-content">
        <p>
          You must not keep any animal which we consider to be dangerous or which may cause a nuisance. You must not keep a dog or a cat in a flat or maisonette which has shared parts or a shared entrance. If you live in a small block of flats or maisonettes, we will give you written permission to keep a dog or cat if all the tenants who use the same shared parts of the building have agreed to you keeping the dog or cat. 
          If we give our permission, we may withdraw it if your pet causes nuisance or upset to any of your neighbours. If we gave you written permission before 3rd April 1995 to keep a dog or cat in a block of flats containing more than 12 homes, you can continue to keep that dog or cat. 
          You must not keep any pigeons or doves in or on any part of the property unless before 3rd April 1995 we gave you written permission to do so. Parrots, budgies, etc., are allowed as long as they are not causing a nuisance.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Responsible and Maintenance We Are Responsible For</summary>
      <div class="details-accordion-content">
        <p>We will repair and maintain the following:</p>
        <ul>
          <li>The structure and outside of the building (roofs, outside walls, outside doors, window sills and frames, chimneys and chimney stacks, drains, gutters and outside pipes)</li>
          <li>Inside walls, skirting boards, doors, door frames, floors, ceilings and major replastering work.</li>
          <li>Electric wiring, sockets and light fittings and gas and water pipes.</li>
          <li>Heating equipment (such as fires, radiators and storage radiators) and water heating equipment (such as boilers and immersion heaters).</li>
          <li>Kitchen and bathroom fixtures (such as sinks, basins, baths, showers and toilets).</li>
          <li>Pathways and steps which are the main means of getting to your home.</li>
          <li>Shared TV aerial.</li>
          <li>The glass in outside doors and windows.</li>
          <li>Supporting or retaining walls and front walls and front metal railings to the property.</li>
          <li>We will be responsible for cutting down or trimming large trees within the property, but only if they are causing danger or damage to your property or a nearby property.</li>
          <li>We will decorate the outside and any shared parts of the building when necessary (this will be at least every five years).</li>
          <li>With your help and cooperation, we will keep in good repair and look after the shared parts of the building.</li>
          <li>When you ask for a repair, and we agree to do it, we will give you a receipt showing when we will carry out the work.</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Appointable Repairs</summary>
      <div class="details-accordion-content">
        <p>
          These are offered in 2-hour time slots for most non-urgent repairs including loose fitting doors and windows, leaking guttering, loose floorboards, or a light or electric socket not working. If you’re not at home at the appointed time, the repair will be cancelled, and you will need to make a new appointment via the contact centre. Some non-urgent repairs cannot be ordered straightaway but will be looked at by an inspector within two weeks of you reporting the fault. If the inspector finds that work is needed, then it will be ordered for you.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Emergency Repairs</summary>
      <div class="details-accordion-content">
        <p>
          This category has a 4-hour time limit and is used only for repairs where your health and safety could be at risk. These repairs include burst water pipes, blocked WC basin, gas leaks, and total electrical failure.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Urgent Repairs</summary>
      <div class="details-accordion-content">
        <p>
          This is a 24-hour category for urgent jobs. Urgent repairs include heating breakdowns where you have no other way of heating your home, replacement of door locks, and blocked drains.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Planned Work</summary>
      <div class="details-accordion-content">
        <p>
          For jobs that need planning due to the nature of the work. This work includes manufactured items like external doors and windows or where there are large amounts of plastering to walls and ceilings.
        </p>
        <strong>We Will Not Be Responsible For:</strong>
        <ul>
          <li>Decorating the inside of your home.</li>
          <li>Repairing any damage caused by you, members of your household or guests, deliberately, or through neglect or carelessness.</li>
          <li>Repairing any fixtures and fittings which you have added to your home unless we agreed, in writing, to maintain them before you put them in.</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Repairs and Maintenance You Are Responsible For</summary>
      <div class="details-accordion-content">
        <p>
          You are responsible for any repair not listed above. If you need a repair which we are responsible for, you must tell us about this repair as soon as possible. You must look after and maintain the property and carry out any repair you are responsible for. If you do not, we may maintain the property or carry out the repairs. We will charge you for this. If you have broken condition 23 of these conditions, we may remove any scrap from the property or do anything else which is necessary. Again, we will charge you for this.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Permission for Alterations</summary>
      <div class="details-accordion-content">
        <p>
          You must not alter or improve the property unless you have written permission from us. This includes:
        </p>
        <ul>
          <li>Putting up an extension</li>
          <li>Adding to or changing or replacing the fixtures and fittings provided by us</li>
          <li>Altering essential gas, electricity, and water services</li>
          <li>Putting up a radio or television aerial or satellite dish</li>
          <li>Decorating the outside of your home</li>
        </ul>
        <p>
          If we refuse to give you permission for any alteration, we will always write to you and say why.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Rent (Your Responsibilities)</summary>
      <div class="details-accordion-content">
        <p>
          You must pay your rent and all other charges for the property (including any district heating charges) when they are due. The rent and any other charges are due every Monday, except for two weeks in each financial year which we will tell you about beforehand.
        </p>
        <p>
          You must not withhold the rent for any reason whatsoever. In particular, you must not set off the cost of outstanding repairs which are our responsibility against your obligation to pay rent.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Rent (Our Responsibilities)</summary>
      <div class="details-accordion-content">
        <p>
          If we change the amount of your rent or any other charges for the property, we will give you notice in writing. The notice will give details of the new amount, when it must be paid from, and why we have made the change. Whenever we change the general levels of net rent for Council properties, we will give you four weeks' notice in writing.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Use of the Property</summary>
      <div class="details-accordion-content">
        <p>You must only use the home to live in as your only or principal home.</p>
        <ul>
          <li>You can ask us for permission to run a business from your property. We may give you permission if we are satisfied that the business will not cause a nuisance to neighbours and other people living in the area and you have any planning permission you need. If we give permission we may withdraw it if your business causes a nuisance to any neighbours or other people living in the area.</li>
          <li>You must not part with possession or sublet all of the property.</li>
          <li>You may part with possession or sublet part of the property if you have written permission from us. If we refuse to give you permission we will write to you and say why.</li>
          <li>You, your household and guests must respect the rights of other people and not do anything (either in or near the property or on the estate where the property is) which is illegal, immoral or would cause danger, a nuisance or annoyance, including harassment of other people.</li>
          <li>You, members of your household or guests must not use violent, abusive or offensive behaviour to our employees, agents or contractors doing housing work.</li>
          <li>You must not store petrol, paraffin, liquid or bottled gas or other dangerous materials in the property. In flats and maisonettes you must not use paraffin heaters or liquid or bottled gas heaters. You must take all reasonable precautions to prevent a fire.</li>
          <li>You must not keep any vehicle (including a caravan, boat or trailer) at the property, if the size or condition of the vehicle spoils the surrounding property or estate.</li>
          <li>You must not use any garden or drive to your property to store, load or unload scrap metal, or to strip down vehicles or persistently repair them.</li>
        </ul>
      </div>
    </details>

    <details class="details-accordion">
      <summary>District Heating System</summary>
      <div class="details-accordion-content">
        <p>
          You must not interfere with any part of a District Heating system (including any meters, pre-payment controllers or cards), whether the system is provided by us, Sheffield Heat & Power Limited, or anyone else. If the supply of heat to your home is individually metered you must pay for all the heat which is supplied to your home. If any supply of heating and hot water which you pay for as part of your rent goes off for more than a day, we will reduce the weekly charge by one seventh for each day (or part of a day over 8 hours), during which the heating and hot water is off.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Gardens</summary>
      <div class="details-accordion-content">
        <p>You must keep any private garden or hedges to the property tidy.</p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Car Parking</summary>
      <div class="details-accordion-content">
        <p>
          You can only park a vehicle in your garden if there is a hardstanding. If you have to cross a pavement to get to your hardstanding, the kerb to that pavement must be adapted to allow vehicles to cross it. You must get permission from us to build a hardstanding in your garden. You must have written permission from us and the Highway Authority to adapt a pavement so a vehicle may cross it. You must not regularly park a vehicle on communal areas, pavements or verges at the side of roads.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Running a business from home</summary>
      <div class="details-accordion-content">
        <p>
          You can ask us for permission to run a business from your property. We may give you permission if we are satisfied that the business will not cause a nuisance to neighbours and other people living in the area and you have any planning permission you need. If we give permission we may withdraw it if your business causes a nuisance to any neighbours or other people living in the area.
        </p>
      </div>
    </details>

    <details class="details-accordion">
      <summary>Access to your property</summary>
      <div class="details-accordion-content">
        <p>
          You must allow our employees, agents or contractors to enter the property to inspect the property, carry out repairs or improvements, service appliances or carry out any of our duties. We will give you 72 hours notice in writing if we need to enter your property and our employees, agents or contractors will show you a pass proving their identity before they may enter your property. If it is convenient you may allow our employees, agents or contractors access to your property even if they have not given you notice. If we decide that it is necessary because of an emergency which could cause personal injury or damage to Council or adjoining properties and you do not give us immediate access, we may take steps to enter your property using force if necessary without giving notice.
        </p>
      </div>
    </details>
  </div>
</details>
<div class="accordion-content">
    <details class="details-accordion">
        <summary>Ending your Tenancy</summary>
        <div class="details-accordion-content">
            <p>If you want to end your tenancy you must give us four weeks written notice. The four weeks’ notice must end on a Monday. You must leave the property clean, safe, tidy, and ready for the next tenant to move into. You must hand all the keys into the Housing Area Office by the end of the four weeks’ notice.</p>

            <p>You may have to remove fixtures and fittings which you have added to the property and replace them with the kind of fixtures and fittings we use. You will not have to do this if we had agreed to maintain the fixtures and fittings which you put in. If you have altered the property, even with our permission, we may ask you to restore the property to its original condition if the alterations make the property unsuitable for future tenants. If you do not replace fittings or restore the property to its original condition when we have asked you to do so, we will do the work and charge you for it.</p>

            <p>We may charge you if we have to remove rubbish or other items which you have left in the property. We may also charge you for any damage to the property. You may give or send us any Notice about your tenancy (except for Notices about legal action against us) by addressing it to:</p>

            <address>
                Sheffield Council Housing Service<br>
                PO Box 10589<br>
                Nottingham<br>
                NG6 6DN
            </address>

            <p>Send notices about legal action to:</p>

            <address>
                Head of Legal Services<br>
                Town Hall<br>
                Sheffield<br>
                S1 2HH
            </address>

            <p>In addition to any way permitted by law, we may serve any notice on you at the dwelling by putting it through the letterbox or fixing it to the dwelling or by leaving it with somebody for you at the dwelling.</p>
        </div>
    </details>
</div>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Rights as a Tenant</h3>
        <div class="accordion-icon"></div>
    </summary>
    <p>Most Sheffield City Council tenants are 'Secure Tenants'. A secure tenant has a number of rights either by law or under our policies. These rights include the following:</p>
    <div class="accordion-content">
        <details class="details-accordion">
            <summary>Right to Repairs</summary>
            <div class="details-accordion-content">
                <p>For certain types of repairs you can arrange to have the work carried out yourself if:</p>
                <ul>
                    <li>you have ordered a repair</li>
                    <li>the value of the repair is less than £250</li>
                    <li>the repair has not been completed in the time promised</li>
                    <li>you use a contractor on the Council's approved contractor list</li>
                </ul>
                <p>The 'Repairs and Maintenance to your home' leaflet tells you how you can go about giving a notice of claim and includes a form for doing this. The Repairs and Maintenance Team will only discuss any claims for money once the form has been sent in to them.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right to compensation for improvements</summary>
            <div class="details-accordion-content">
                <p>At the end of your tenancy you may get compensation for certain improvements you have made to your home. The leaflet called “Tenants own improvements” explains the scheme. You cannot get compensation if you are buying your home through the ‘Right to Buy’ or ‘Rent to Mortgage’ scheme or for any improvements costing less than £50.</p>
                <p>Tenant's Own Improvements ↗</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right to take in lodgers</summary>
            <div class="details-accordion-content">
                <p>You can take in lodgers without getting the permission of the Council Housing Service as long as your home does not become overcrowded. If you get Housing Benefit you must tell the Area Housing Office and the Housing Benefits Service that you have taken in lodgers as this may affect the amount of benefit you can receive. (If you don’t tell the Area Housing Office and the Council Housing Service finds out later, your benefit may be reduced for the period you have had lodgers, and any benefit which has been overpaid may be recovered.)</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right to Succeed</summary>
            <div class="details-accordion-content">
                <p>The following rules apply if you die and you did not take over the tenancy from a member of your family:</p>
                <ul>
                    <li>Your spouse or civil partner will have the right to succeed to the tenancy provided that they occupy the property as their only or principal home, or</li>
                    <li>Another member of your family can take over the tenancy if they lived in the property throughout the 12 months before your death and the property was their only or principal home.</li>
                </ul>
                <p>If more than one person qualifies to take over the tenancy, your spouse or civil partner will be entitled to take it over. If you have no spouse or civil partner living with you, everyone entitled to the tenancy must agree on who will take it on. If the people involved cannot agree we will choose who to give the tenancy to.</p>
                <p>People who are not entitled to take over your tenancy may, in certain circumstances, (which are set out in the Council's Lettings Policy) be given a new secure tenancy of your property.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right to inspect personal files</summary>
            <div class="details-accordion-content">
                <p>Under the law and the Council Housing Service policies you have the right to see certain information which the Council Housing Service has about your housing circumstances.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right for compensation for loss of income due to broken appointments</summary>
            <div class="details-accordion-content">
                <p>If any housing staff fail to keep an appointment they arranged with you, you may claim compensation for loss of income. The appointment must have been made in writing and you must have lost wages in order to claim compensation.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right to be consulted</summary>
            <div class="details-accordion-content">
                <p>The Council Housing Service will consult you before the Council makes any change to any part of the tenancy conditions. There are a number of ways of consulting tenants on issues affecting them. You can get more details in Sheffield’s City Wide Tenant and Resident Participation Compact.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right to Buy</summary>
            <div class="details-accordion-content">
                <p>If you have been a council or housing association tenant for at least three years (or five years if you became a tenant after 18th January 2005) you will probably have a right to buy your home. You can get more details from the Council's home ownership team.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Right to Exchange</summary>
            <div class="details-accordion-content">
                <p>You may make a 'Mutual Exchange' (that is swap homes) with another Council or Housing Association tenant. As long as the size of the families involved qualify for the size and type of home and any Council tenants involved do not owe any rent, it should be possible to agree to an exchange. You can get more information from the leaflet called <strong>Mutual Exchanges - How to Apply</strong>. You must not swap homes until you have a letter from the Council Housing Service agreeing to the swap.</p>
            </div>
        </details>

        <details class="details-accordion">
            <summary>Assignment</summary>
            <div class="details-accordion-content">
                <p>You may ask the Council Housing Service for permission to transfer your tenancy to a member of your family living with you.</p>
            </div>
        </details>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Leaflets and Information</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>You can get copies of leaflets and information on housing services from any Area Housing Office.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Reasons for us evicting you</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>The Council Housing Service can only evict you on behalf of the Council if the Council Housing Service gives you a “Notice Seeking Possession” and applies to the court to end your tenancy. The Council Housing Service can evict you from your home if the court thinks this is reasonable for any of the following reasons:</p>
        <ul>
            <li>You have not paid the rent or not kept to these conditions.</li>
            <li>You or anybody living with you or visiting you has caused a nuisance or annoyance to other people, has been convicted for using the premises for illegal or immoral purposes, or convicted of a serious offence in or near the premises.</li>
            <li>If you have been living with someone as their partner and your partner has left because of violence or threats of violence from you, either to them or a member of the family, and it is unlikely they will return.</li>
            <li>You have damaged the property or common parts.</li>
            <li>You or anybody living with you has damaged any furniture provided by the Council.</li>
            <li>You got the tenancy because you or somebody else on your behalf made false statements.</li>
            <li>You refuse to leave a property which we let to you temporarily while work was being carried out at your own property.</li>
            <li>You will usually have a chance to put things right before the Council Housing Service evicts you. The Council Housing Service will usually seek to evict you if you, your household or guests harass people (unless other legal action is more appropriate).</li>
        </ul>

        <p>The Council Housing Service can evict you for the following reasons, if the court is satisfied that there is suitable alternative accommodation:</p>

        <ul>
            <li>If your home is overcrowded as defined in the Housing Act 1985.</li>
            <li>If your home is to be altered or demolished and this cannot be done while you’re still living there.</li>
        </ul>

        <p>The Council Housing Service will consult you if the Council Housing Service wants to evict you because of these reasons. The Council Housing Service will also offer you alternative accommodation which meets your reasonable needs.</p>
        <p>The Council Housing Service can evict you for the following reasons if the court is satisfied that it is reasonable and you could get suitable alternative accommodation:</p>

        <ul>
            <li>The home was designed or adapted for a disabled person and there is no longer a disabled person living in the home but the home is required for a disabled person.</li>
            <li>The home is one to which special services are provided and there is no longer anyone living in the home who needs the special services and the home is required for someone who does.</li>
            <li>The home is much larger than you reasonably need and you have taken over the tenancy from another member of your family. (This reason is rarely used).</li>
        </ul>

        <p>The Council Housing Service will consult you if the Council Housing Service wants to evict you because of these reasons. The Council Housing Service will also offer you alternative accommodation which meets your reasonable needs. If the Council Housing Service has to go to court you can challenge the reasons given by the Council Housing Service to evict you and/or the suitability of the alternative accommodation offered by the Council Housing Service. You should get legal advice before you do this. These reasons for ending tenancies are part of the Housing Act 1985.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Abandonment and Notice to Quit</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>If you abandon your property, the Council Housing Service will treat it as a surrender of your tenancy, and the Council Housing Service may re-enter the property and relet it. You will be responsible for the rent until the Council Housing Service accepts the surrender. If you do not use the property as your only or principal home, the Council Housing Service may serve you with a Notice to Quit.</p>
    </div>
</details>

<details class="accordion">
    <summary class="accordion-header">
        <h3>Tenancy References</h3>
        <div class="accordion-icon"></div>
    </summary>
    <div class="accordion-content">
        <p>IMFIT (Rents) can provide a financial reference for you. Your Neighbourhood Support Team can provide a Tenancy Reference.</p>
        <p>Both of these may be subject to charges before the reference is returned.</p>
        <p>If this is for a mortgage company or a private landlord, the company needs to put this request in writing. There is a charge for this of £60, which must be paid to IMFIT before the reference is returned. The fee can be paid by debit/credit card or by BACS. If they want to pay this, transfer the call to IMFIT - this is NOT paid to the rent account.</p>

        <strong>Reference requests should be sent to:</strong><br>
        <address>
          Sheffield Council Housing Service<br>
          PO Box 5967<br>
          Sheffield<br>
          S2 9GH</p>
        </address>
        <p>For Social Landlords (Housing Associations), these also need to be put in writing, but there is no charge. Social Landlords can also email details of their request to <a href="mailto:customerservices@sheffield.gov.uk">customerservices@sheffield.gov.uk</a> if they prefer to send an email.</p>
    </div>
</details>
`,
  { buttonLabel: "tenancyAgreementRequest", formName: "Tenancy Sustainment" },
  { typeKey: "" },
  { typeKey: "tenancy_sustainment_information_provided" },
  {
    type: "tenancyAgreementRequest",
    keywords: ["Tenancy"],
    categories: ["Housing"],
  },
  { date: "08/11/2024", name: "Shahzad Athar" }
);

const tenancySustainment = new MenuH(
  "tenancySustainment",
  "Tenancy Sustainment",
  "Support for maintaining tenancies, including information on permissions, tenancy agreements, name changes, parking permits, and council housing services.",
  [
    abandonment,
    boundaries,
    burglarAlarmRequest,
    fencesCouncilHousing,
    fobsandKeys,
    garageRequest,
    gardensUntidyCommunalAreas,
    housingServiceParkingPermits,
    nameChanges,
    permissions,
    tenancyAgreementRequest,
    tenancyChange,
    tenancyConditions,
  ]
);

//#endregion Tenancy Management Tenancy Sustainment

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  "housing",
  "Housing",
  "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
  [
    assetManagementAndRepairs,
    estatesAndEnvironments,
    generalCouncilHousing,
    housingBenefits,
    leaseholderInformation,
    rehousing,
    rents,
    repairs,
    shelteredAndSupported,
    tenancyEnforcementASB,
    tenancySustainment,
  ]
);
