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

// Example instantiation for topicExample1
const gardenPledgeScheme = new ContentH(
  "gardenPledgeScheme",
  "Garden Pledge Scheme",
  "Desc tbc",
  `
    <p>
      The Garden Pledge Scheme ceased to operate in April 2023 as highlighted below
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
        href="G:\CEX\Corp Res\CS-Gen\Contact Centre\CRM\Spreadsheets\Estates\Garden\Alternative Garden Services List.xls"
        >Alternative Garden Services List</a
      >
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
      <a href="http://www.trustmark.org.uk/ " target="_blank"
        >http://www.trustmark.org.uk</a
      >.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const fencesCouncilHousing = new ContentH(
  "fencesCouncilHousing",
  "Fences (Council Housing)",
  "Desc tbc",
  `
    <h3>New Fence</h3>
    <p>
      Installation of fences is the tenants responsibility. The customer will need
      to have permission to install a new fence.
    </p>
    <h3>Repair to an Existing Fence</h3>
    <p>
      The Council do not repair tenants' fences. It is the tenant's responsibility.
    </p>
    <h3>Fallen Fence to be Removed</h3>
    <p>
      Estate Services teams will only remove blown down fences if they are a safety
      hazard.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const newAndExistingRepairs = new ContentH(
  "newAndExistingRepairs",
  "New and Existing Repairs",
  "Description",
  `<h3>Leaseholder Repairs</h3> 

<p>You are responsible for repairs within your own flat or home, and should make your own arrangements for these.
 If you, or someone you have employed, are carrying out repairs inside your flat, 
 you must make sure that no damage is done to communal areas or to the structure of the building. 
 You are liable for any damage caused to the building as it is owned by Sheffield City Council, 
 and you will have to pay for any such damage. This includes any damage caused by visitors or other members of your household.
 </p> 

<p>Sheffield City Council will continue to carry out all external fabric and communal/shared 
repairs to the block in which you live. You do not have the authority to carry out repairs in shared areas, 
and you would not be covered by Sheffield City Council insurance if you had an accident or caused any damage. 
Only Sheffield City Council may carry out this type of work.</p> 

<p>Leaseholders receive a service charge bill each year for their proportion of the cost of carrying out external fabric 
and communal/shared repairs to the block in which they live.</p> 
  
  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const chaseProgressOfAdaptation = new ContentH(
  "chaseProgressOfAdaptation",
  "Chase Progress of Adaptation",
  "Description",
  `
<details class="accordion">
      <summary class="accordion-header">
        <h3>Chase Progress of Adaptation</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>Different Utility supplier</summary>
          <div class="details-accordion-content">
            
<h2>Different Utility supplier</h2> 

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


        <details class="details-accordion">
          <summary>
            Permission Requests
          </summary>
          <div class="details-accordion-content">
            
<h2>Permission Requests</h2> 

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

<details class="details-accordion">
          <summary>
            Permissions and Your Tenancy Conditions
          </summary>
          <div class="details-accordion-content">
            <h3>Permissions and Your Tenancy Conditions</h3> 

<p>Tenancy condition 47 states that:</p> 

<ul> 

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
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const otherAdaptationRequest = new ContentH(
  "otherAdaptationRequest",
  "Other Adaptation Request",
  "Description",
  `

<h3>Other Adaptation Requests</h3> 

<h2>Tenant wants to make their own changes (takes out of script)</h2> 

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
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const asbestos = new ContentH(
  "asbestos",
  "Asbestos",
  "Description",
  `
<details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>What is asbestos?</summary>
          <div class="details-accordion-content">
            
<p>Asbestos is the name given to a group of fibrous minerals which evolve naturally in the earth; 
these are found in many parts of the world.</p> 

          </div>
        </details>

                <details class="details-accordion">
          <summary>Why was asbestos used in the past?</summary>
          <div class="details-accordion-content">
            
<p>Asbestos fibres are strong, durable, resistant to heat and chemicals and provide thermal insulation; 
these properties are what led to its widespread use in the construction industry prior to the mid-1980s. 
It was also used in vehicles, domestic goods, and industrial items.</p> 
          </div>
        </details>

                        <details class="details-accordion">
          <summary>Where is asbestos likely to be found?</summary>
          <div class="details-accordion-content">
            
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


 <details class="details-accordion">
          <summary>What does abestos containing material look like?</summary>
          <div class="details-accordion-content">
            
<p>It is difficult to tell if something contains asbestos just by looking at it, unless it is labelled. 
If in doubt, you should assume that a material contains asbestos until it is confirmed otherwise. 
The only way to be absolutely sure is by getting it tested in a laboratory. 
However, we do not have to send samples to a laboratory; 
we can presume it is asbestos and then take all safety precautions when working on the material by using trained workers 
or licensed contractors.</p> 

          </div>
        </details>

 <details class="details-accordion">
          <summary> What should I do if I think there may be asbestos in my home?            </summary>
          <div class="details-accordion-content">
            
<p>You don’t need to do anything unless you suspect the asbestos may have been damaged, 
disturbed, or is in poor condition. Generally, if it is in good condition and cannot be easily damaged or disturbed, 
it is best to leave it alone,
 as removal can lead to the release of higher levels of fibres in the air for some time.</p> 
                    
          </div>
        </details>

 <details class="details-accordion">
          <summary> What should I do if I accidentally damage or disturb it? </summary>
          <div class="details-accordion-content">
            
<p>If you discover or damage asbestos-containing material (ACM), exit the room, ensuring no one else enters. 
Do not attempt to repair the damage or clear up any debris using a brush or domestic vacuum cleaner, 
as this will release fibres into the air.</p> 
                    
          </div>
        </details>

   <details class="details-accordion">
          <summary>      What is the Council Housing Service doing to manage asbestos?         </summary>
          <div class="details-accordion-content">
            
<p>We are carrying out asbestos surveys to all our properties and recording all the information. 
This includes the type of asbestos found, the location and condition, and any recommended actions (i.e., to remove the asbestos-containing material or to leave it in place and manage it). Where asbestos is identified as requiring removal, we will use specialist contractors to carry out this work. As part of this survey, 
we also record where no asbestos is found.</p> 
                    
          </div>
        </details>


 <details class="details-accordion">
          <summary>    Will you remove asbestos if found in my property?           </summary>
          <div class="details-accordion-content">
            
<p>We will only remove asbestos from your home if it is found to be in poor condition or damaged, 
as it is generally best practice to leave it in place and manage it if it is in good condition. 
Removal creates a greater risk of releasing fibres into the air and possible exposure.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>       Why do I need an asbestos survey?        </summary>
          <div class="details-accordion-content">
            
<p>We need to carry out a survey to identify any asbestos-containing materials within your home, 
as we have a legal duty to provide this information to the contractors we use to carry out repairs or modernization works.
 The survey also helps us keep accurate records of where asbestos is located in your home.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>       When will a survey be carried out on my home?        </summary>
          <div class="details-accordion-content">
            
<p>The Council Housing Service has been conducting asbestos surveys on our properties as part of a rolling program since 2004. 
Your home may have already been surveyed, but if not, it will be programmed in the near future.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>      Who will carry out the survey?         </summary>
          <div class="details-accordion-content">
            
<p>The Council Housing Service works with survey contractors called Tersus. 
For asbestos removal, we work with contractors called Rilmac and E4 Environmental.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>        How do I get a copy of my survey?       </summary>
          <div class="details-accordion-content">
            
<p>Where a survey has been carried out, the Council Housing Service will send copies to tenants.
 If you need a report sooner, you may request a copy at your local Area Housing Office or First Point.
 We are also working towards making the reports accessible on the Council Housing Service website in the near future.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>   What should I do if I want to carry out works to my property?   </summary>
          <div class="details-accordion-content">
            
<p>If you are planning home improvements (with permission) and think you may have asbestos in your home, 
we can check our records and tell you if any asbestos is present or arrange for a survey to be carried out.</p> 

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

         <details class="details-accordion">
          <summary>        Am I at risk?   </summary>
          <div class="details-accordion-content">
            
<p>Asbestos is only a risk to health if the fibres become airborne and are breathed into the lungs. 
The fibres breathed in could lead to asbestos-related diseases. 
Although the body’s natural defences can break some of these particles down, others may stay in the lungs for a long time. 
Asbestos-containing products in good condition do not represent a significant risk unless they are damaged or 
abraded and should be left undisturbed.</p> 
                    
          </div>
        </details>


         <details class="details-accordion">
          <summary>       What should I do if I think I have been exposed to asbestos?        </summary>
          <div class="details-accordion-content">
            
<p>If you think you may have been exposed, you may wish to discuss your concerns with your doctor.</p> 
                    
          </div>
        </details>

         <details class="details-accordion">
          <summary> Asbestos Resurveying Programme  </summary>
          <div class="details-accordion-content">
            
          <p>The Asbestos Resurveying Programme is ongoing and may be for any of the following reasons:</p> 

<ul> 

    <li>Surveys carried out pre-2010 have presumed asbestos items, and we now need to know whether asbestos is present or not.</li> 

    <li>Contractors have removed asbestos as part of Decent Homes and provided feedback.</li> 

    <li>Contractors are asking for more detailed surveys to carry out more intrusive work.</li> 

    <li>There is no survey for that property.</li> 

</ul> 

<p>Prior to surveying, tenants will be contacted by letter, phone call, or text. 
The letter explains that Tersus Consultancy is our appointed contractor.</p> 

                    
          </div>
        </details>

         <details class="details-accordion">
          <summary>     Asbestos Removal Programme        </summary>
          <div class="details-accordion-content">
            
<p>The Asbestos Removal Programme is a 3-year programme and covers approximately 800 properties. 
The removal is mainly linked to district heating pipes that are not easily accessible due to asbestos panels. 
All affected properties will receive letters in batches of up to 20 per month.</p>
 

<p>Prior to work commencing, all properties will be surveyed by the contractor to reconfirm what will be removed. 
Please note, work may require the tenant to vacate the property on the day of removal.</p> 

<p>Letters will start going out to customers from August 2017, with further letters going out in the following months. 
The letter explains that Rilmac Insulation has been appointed as a contractor and will be contacting customers soon.</p> 
                    
          </div>
        </details>


  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const communalAerials = new ContentH(
  "communalAerials",
  "Communal Aerials",
  "Description",
  `

<details class="accordion">
  <summary class="accordion-header">
    <h3>Communal Aerials List</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
    
<p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Communal%20Aerials.aspx">Communal Aerials List</a></p> 

  </div>
</details>

<details class="accordion">
  <summary class="accordion-header">
    <h3>Customers Own Aerial</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
     <p>This is not a Council Housing Service aerial. We do not offer a maintenance service for customer’s own aerials.</p> 
  </div>
</details>

  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const communalAreas = new ContentH(
  "communalAreas",
  "Communal Areas",
  "Description",
  `

<details class="accordion">
  <summary class="accordion-header">
    <h3>Blocked Bin Chutes</h3>
    <div class="accordion-icon"></div>
  </summary>
  <div class="accordion-content">
      <p><a href="https://sccextranet.sharepoint.com/sites/CustomerServiceKnowledgePhoneDirectory/SitePages/Blocked%20Chutes.aspx">Blocked Bin Chutes</a></p>  
  </div>
</details>

<details class="accordion">
      <summary class="accordion-header">
        <h3>Fences</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>New Fence</summary>
          <div class="details-accordion-content">
            
    <p>Installation of fences is the tenant's responsibility. 
    The customer will need to have permission to install a new fence. See "Permissions" section.</p> 

          </div>
        </details>

                <details class="details-accordion">
          <summary>Repair to an Existing Fence</summary>
          <div class="details-accordion-content">
            
    <p>The Council does not repair tenants' fences. It is the tenant's responsibility.</p> 

          </div>
        </details>

                        <details class="details-accordion">
          <summary>Fallen Fence to be Removed</summary>
          <div class="details-accordion-content">
            
        <p>Estate Services teams will only remove blown down fences if they are a safety hazard.</p> 

          </div>
        </details>



  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const doorEntrySystems = new ContentH(
  "doorEntrySystems",
  "Door Entry Systems",
  "Description",
  `

<details class="accordion">
      <summary class="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>   What is a Door Entry System and Why is it Necessary?<   </summary>
          <div class="details-accordion-content">
            
    <p>We are carrying out work to improve security to the block of flats where you live. 
    Our door entry system can help prevent unauthorized or unwanted access into the communal areas of your flats.</p> 

          </div>
        </details>

                <details class="details-accordion">
          <summary>How Does the System Work?</summary>
          <div class="details-accordion-content">
            
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

                        <details class="details-accordion">
          <summary>How Can I Stop Nuisance Calls Coming Through on My Door Entry Phone?</summary>
          <div class="details-accordion-content">
            
            <p>If this happens, you can turn off the handset using the “privacy button.” When this is used, a red light will illuminate on the phone to show that the door entry calls are switched off. 
            The privacy facility resets itself after a fixed period of time (red light goes off) so that the handset isn’t left switched off and a genuine visitor is prevented from contacting the resident they wish to visit.</p> 

          </div>
        </details>

        
                        <details class="details-accordion">
          <summary>How do I Know That the Main Entrance Door is Secure When I Am in My Home?</summary>
          <div class="details-accordion-content">
            
              <p>The door entry system is set up to monitor the main entrance and will tell you if the door is open or closed. 
              If the main entrance is left open, a green light will show on your door entry phone. 
              When the main entrance door is closed, the green light goes out.</p> 

          </div>
        </details>


                        <details class="details-accordion">
          <summary>How do the post, milk, and newspapers delivery people gain access into the block during the day?</summary>
          <div class="details-accordion-content">
            
                <p>A “trades” button is provided on the door entrance panel next to the main entrance to your block.
                 This button is set up to work at certain times of the day (time clock controlled). 
                 When active, the button can be used by tradespeople to gain access into the block through the main door. 
                The times are set up in consultation with residents to suit the requirements of each particular block of flats.</p> 

          </div>
        </details>


                                <details class="details-accordion">
          <summary>How do the emergency services gain access?</summary>
          <div class="details-accordion-content">
            
                 <p>The system includes an emergency switch next to the main door. 
                 The emergency services can use this switch, operated by a special key, to gain access in an emergency.</p> 
          </div>
        </details>

        
                                <details class="details-accordion">
          <summary>What work is involved in installing the door entry system?</summary>
          <div class="details-accordion-content">
            
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
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const emergencyRepairs = new ContentH(
  "emergencyRepairs",
  "Emergency Repairs",
  "Description",
  `

<details class="accordion">
      <summary class="accordion-header">
        <h3>Emergency Repairs</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>   Gas Leak  </summary>
          <div class="details-accordion-content">
             
          <p>If you smell gas or are worried about gas safety, call National Grid on 0800 111 999 at any time, day or night.</p> 

          <h3>Contact Equipment and Adaptations Teams</h3> 

    <p>Please contact the Equipment and Adaptations number.</p> 

    <h3>Out of Hours Emergency Contacts</h3> 

    <p>If you have an emergency outside normal working hours, at weekends, or Bank Holidays, please phone:</p> 

    <ul> 

        <li>0114 273 5555 (after 8pm) for burst pipes, boarding up doors and windows, no electricity supply, and all heating breakdowns. This number will divert to Out of Hours Repairs service.</li> 

        <li>0800 111 999 for gas leaks.</li> 

        <li>0114 273 7693 for lift breakdowns.</li> 

    </ul> 

          </div>
        </details>


        <details class="accordion">
      <summary class="accordion-header">
        <h3>Emergency Repairs</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <details class="details-accordion">
          <summary>   Gas Leak  </summary>
          <div class="details-accordion-content">
             


          

          </div>
        </details>





  
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "10/10/2024", name: "Gee Whitehouse" }
);

const estatesAndEnvironments = new MenuH(
  "estatesAndEnvironments",
  "Estates and Environments",
  "Desc tbc",
  [fencesCouncilHousing, gardenPledgeScheme]
);

const adaptations = new MenuH("adaptations", "Adaptations", "Desc tbc", [
  chaseProgressOfAdaptation,
  otherAdaptationRequest,
]);

const assetManagementAndRepairs = new MenuH(
  "assetManagementAndRepairs",
  "Asset Management And Repairs",
  "Description",
  [
    newAndExistingRepairs,
    adaptations,
    asbestos,
    communalAerials,
    communalAreas,
    doorEntrySystems,
    emergencyRepairs,
  ]
);

// Example instantiation for topicExample1
const topicExample = new ContentH(
  "topicexample1",
  "Topic Title Example 1",
  "Topic Description Example 1",
  `<p>example text</p>`,
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

// Example instantiation for subjectExample2 (Menu with topics)

// Example instantiation for subjectExample1 (Full content)
const subjectExample1 = new ContentH(
  "subjectexample1",
  "Subject Title Example 1",
  "Subject Description Example 1",
  `<p>example text</p>`,
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Apply", keywords: [], categories: ["Housing"] },
  { date: "05/09/2024", name: "Elliott Griffiths" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  "housing",
  "Housing",
  "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
  [subjectExample1, assetManagementAndRepairs, estatesAndEnvironments]
);
