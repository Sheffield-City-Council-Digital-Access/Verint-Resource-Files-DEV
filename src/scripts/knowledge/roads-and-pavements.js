class CoreRaP {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceRaP extends CoreRaP {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuRaP extends CoreRaP {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentRaP extends CoreRaP {
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

class FormRaP extends CoreRaP {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const reportDamagedMissingKerb = new FormRaP(
  "reportDamagedMissingKerb",
  "Kerbs",
  "Report problems such as damaged or missing kerbs",
  "damaged_missing_kerb",
  {
    type: "Report",
    keywords: ["Kerb"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const requestLitterPickCollection = new FormRaP(
  "requestLitterPickCollection",
  "Community litter collection",
  "Collection after a community litter pick",
  "litter_pick_collection",
  {
    type: "Request",
    keywords: ["litter", "pick", "collection"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const manholeStopcockCover = new FormRaP(
  "manholeStopcockCover",
  "Manhole or stopcock cover",
  "Report problems such as broken, depressed, missing, raised and rocking or noisy manhole or stopcock covers",
  "manhole_stopcock_cover",
  {
    type: "Report",
    keywords: ["Manhole", "stopcock", "cover"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportDrainGulley = new FormRaP(
  "reportDrainGulley",
  "Drain or gulley",
  "Report problems such as blocked, flooding, damaged, missing, odours from drains",
  "report_drain_gulley",
  {
    type: "Report",
    keywords: ["Drain", "gulley"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFenceBarrier = new FormRaP(
  "reportFenceBarrier",
  "Fences or safety barriers",
  "Report problems with cycle barriers, fences, pedestrian barriers, temporary barriers/bollards or vehicle barriers",
  "report_fence_barrier",
  {
    type: "Report",
    keywords: ["Fence", "barrier"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFloodedArea = new FormRaP(
  "reportFloodedArea",
  "Flood on the highway",
  "Report problems water flowing along the road or into private land/properties",
  "report_flooded_area",
  {
    type: "Report",
    keywords: ["Flooded", "area"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportGritBin = new FormRaP(
  "reportGritBin",
  "Grit bins",
  "Report problems such as empty, damaged, missing displaced or knocked over grit bins",
  "report_grit_bin",
  {
    type: "Report",
    keywords: ["Grit", "bin"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportHighwayDamage = new FormRaP(
  "reportHighwayDamage",
  "Damage to the highway",
  "Report damage to the highway by a individual or organisation",
  "report_highway_damage",
  {
    type: "Report",
    keywords: ["Highway", "damage"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportHighwaySpillage = new FormRaP(
  "reportHighwaySpillage",
  "Spillages on the highway",
  "Report problems such as spilt items or debris on the highway",
  "report_highway_spillage",
  {
    type: "Report",
    keywords: ["Highway", "spillage"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportMudGravel = new FormRaP(
  "reportMudGravel",
  "Mud or gravel on the highway",
  "Report problems such as mud or gravel on the highway",
  "report_mud_gravel",
  {
    type: "Report",
    keywords: ["Mud", "gravel"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportPotholeCrack = new FormRaP(
  "reportPotholeCrack",
  "Pothole or crack on the highway",
  "Report problems such as potholes or cracks in the road or pavement",
  "report_pothole_crack",
  {
    type: "Report",
    keywords: ["Pothole", "crack"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportRoadMarking = new FormRaP(
  "reportRoadMarking",
  "Road markings",
  "Report problems with yellow or white road markings",
  "report_road_marking",
  {
    type: "Report",
    keywords: ["Road", "marking"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportStreetFurniture = new FormRaP(
  "reportStreetFurniture",
  "Street furniture",
  "Report problems with art or sculpture, bollards, seats or benches on the highway",
  "report_street_furniture",
  {
    type: "Report",
    keywords: ["Street", "furniture"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportStreetLight = new FormRaP(
  "reportStreetLight",
  "Street light",
  "Report problems with the light, lantern, lamp or lamppost",
  "report_street_light",
  {
    type: "Report",
    keywords: ["Street", "light"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportTrafficSignal = new FormRaP(
  "reportTrafficSignal",
  "Traffic signal, pedestrian crossing, camera or electronic sign",
  "Report problems such as damaged, missing or exposed wires, obscured or not working lights, and structural and appearance issues",
  "report_traffic_signal",
  {
    type: "Report",
    keywords: ["Traffic", "signal"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const requestClaimsPack = new FormRaP(
  "requestClaimsPack",
  "Highways claims pack",
  "Damaged to vehicle or personal property or personal injury due to a problem on the highway",
  "request_claims_pack",
  {
    type: "Request",
    keywords: ["Claims", "pack"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const requestGritBin = new ContentRaP(
  "requestGritBin",
  "Grit bin locations",
  "Find information about grit bin locations, criteria for new allocations, and the process for grit bin relocations.",
  `
    <iframe
      src="https://sheffieldcc.maps.arcgis.com/apps/webappviewer/index.html?id=796ba9a88ab04607a265d78e93d36d5c"
      style="height: 400px; width: 100%"
    ></iframe>
    <h3>Grit Bin Allocations</h3>
    <p>
      We do not allocate any new grit bins once the winter period has started.
      Winter runs from the 1st October through to 31st March.
    </p>
    <p>
      For a new grit bin to be considered, the location must meet two or more of the
      criteria below:
    </p>
    <ul>
      <li>On a road that has a drainage problem</li>
      <li>On a road that has a steep gradient of 1 in 10 (10%)</li>
      <li>On a bad bend that has a radius of less than 50 meters</li>
      <li>On a junction</li>
      <li>On a road that has a main entrance to sheltered housing</li>
      <li>On a road that has a main entrance to a school</li>
      <li>In an isolated area</li>
      <li>Near traffic signals (within 20m)</li>
    </ul>
    <h3>Grit Bin Relocations</h3>
    <p>
      We cannot move a grit bin from it's assigned location.
    </p>
    <p>
      If a grit bin has been moved we can return it to its assigned location.
    </p>
    <p>
      If a grit bin is blocking access to a property, we will arrange for the site
      to be inspected and assessed. This does not guarantee the grit bin will be
      re-positioned or moved.
    </p>
  `,
  {
    buttonLabel: "Request a grit bin",
    formName: "request_grit_bin",
  },
  { typeKey: "" },
  { typeKey: "grit_bin_information_provided" },
  {
    type: "Request",
    keywords: ["Grit", "bin"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "08/10/2024", name: "Elliott Griffiths" }
);

const requestGritting = new ContentRaP(
  "requestGritting",
  "Gritting routes",
  "Find information about Sheffield's gritting routes, prioritisation criteria, and how emergency requests are handled for gritting services.",
  `
    <iframe
    src="https://sheffieldcc.maps.arcgis.com/apps/webappviewer/index.html?id=07f393cef2684b47b429d4a232277bd0"
    style="height: 400px; width: 100%"
    ></iframe>
    <p>
      Priority one and two routes are gritted when freezing temperatures are
      forecast. The route cannot be changed.
    </p>
    <p>The priority routes are the main roads used for getting around the city.</p>
    <h3>Gritting Priorities</h3>
    <ul>
      <li>
        <strong>Priority 1 Routes</strong> – these are the main and arterial roads
        which link Sheffield to other major cities, the motorway network and provide
        a means of access to key emergency facilities such as hospitals and fire
        stations.
      </li>
      <li>
        <strong>Priority 2 Routes</strong> - these cover the other main roads, link
        roads, roads where key public service facilities (such as schools, doctor’s
        surgeries and care homes) are located, and rural routes serving less
        populated areas.
      </li>
      <li>
        <strong>Emergencies (brought to us by the emergency services)</strong>
      </li>
      <li><strong>Roads on the NHS list</strong></li>
      <li><strong>Veolia collection routes e.g. next days black bins</strong></li>
      <li><strong>Very special circumstances e.g. funerals</strong></li>
    </ul>
    <p>
      We will only gritting side roads once traffic is flowing on all these priorities.
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>NHS Patients</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          The NHS have a list of patients who will need priority access to hospitals
          during bad weather. This list is compiled by doctors and clinical staff
          and may include patients on dialysis or receiving chemotherapy.
        </p>
        <p>
          The NHS has a contract with a company who have the provision of 4x4
          vehicles, which can be used during bad weather.
        </p>
        <p>
          Customers who are concerned about whether they are on the NHS list, or
          want further information, can contact the NHS.
        </p>
        <p>
          Alternatively, customers can contact their GP or health provider/hospital
          who will be able to assist. Please refer customers who are concerned about
          outpatient appointments to their NHS Outpatients Department or GP.
        </p>
      </div>
    </details>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>Will Housing Services grit my path?</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          As a guide, the area estates teams may consider gritting the following:
        </p>
        <ul>
          <li>Communal drying areas and landings</li>
          <li>
            Pathways, steps and entrances leading to blocks - especially if there
            are a high proportion of older people living in the blocks
          </li>
          <li>Around housing offices and meeting rooms</li>
        </ul>
        <p><a href="${window.location.protocol}//${
    window.location.hostname
  }/form/launch/hou_estates_enquiry?${
    KDF.getParams().customerid
      ? `customerid=${KDF.getParams().customerid}&`
      : ""
  }interactionid=${
    KDF.getParams().interactionid
  }">Raise this with the estates team</a>.</p>
      </div>
    </details>
    <section class="info-panel" role="region" aria-label="Information panel">
      <h3>Gritting Requests</h3>
      <p>We will only take gritting requests in emergencies such as:</p>
      <ul>
        <li>A burst water main</li>
        <li>An accident has occurred</li>
        <li>A request from emergency services</li>
      </ul>
    </section>
  `,
  {
    buttonLabel: "Request gritting or snow clearance",
    formName: "request_gritting",
  },
  { typeKey: "" },
  { typeKey: "gritting_and_snow_clearance_information_provided" },
  {
    type: "Request",
    keywords: ["Gritting"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "08/10/2024", name: "Elliott Griffiths" }
);

const roadPavementSurface = new FormRaP(
  "roadPavementSurface",
  "Road or pavement surface",
  "Report problems such as dip or depression or vegetation in the road or pavement",
  "road_pavement_surface",
  {
    type: "Report",
    keywords: ["Road", "pavement", "surface"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportDeadAnimal = new FormRaP(
  "reportDeadAnimal",
  "Dead animal",
  "Report animals such as dead cats, dogs, sheep, deer, badger or foxes on the highway",
  "report_dead_animal",
  {
    type: "Report",
    keywords: ["Dead", "animal"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFallenLeaves = new FormRaP(
  "reportFallenLeaves",
  "Fallen leaves on the highway",
  "Report problems such as fallen or rotten leaves on the highway",
  "report_fallen_leaves",
  {
    type: "Report",
    keywords: ["Fallen", "leaves"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportHedgePlantGrass = new ContentRaP(
  "reportHedgePlantGrass",
  "Hedges, plants or grassed areas",
  "Report problems such as overgrown, dead or diseased, and damaged vegetation",
  `
    <section>
      <h3>Grassed areas</h3>
      <p>
        Grass cutting seasons are Spring and Summer. The frequecney in which they
        are cut varies from every 2-4 weeks or every year.
      </p>
      <ul>
        <li>
          Areas with daffodils or other bulbs are left uncut until early June.
        </li>
        <li>
          Areas containing wildflowers area, it is cut once per year, typically in
          late August.
        </li>
        <li>
          Areas that impact sight lines around junctions, signs, bollards and street
          name plates are attended more frequently as required.
        </li>
      </ul>

      <details class="details-accordion">
        <summary>Verge hardening</summary>
        <div class="details-accordion-content">
          <p>
            Grass verges play an important role in urban drainage as they absorb
            rainfall which would otherwise find its way into the drainage system
            thereby increasing the risk of flooding. <br />In view of this, we will
            not consider individual requests for verge hardening.
          </p>
          <p>
            Similarly, individual requests for verge protection measures (such as
            bollards) will not be considered.
          </p>
        </div>
      </details>
    </section>

    <section>
      <h3>Planted areas</h3>
      <p>
        Shrub and rose areas are inspected twice per year at which time any
        necessary pruning and maintenance is carried out.
      </p>
    </section>

    <section>
      <h3>Hedges</h3>
      <p>
        We plan our routine hedge and tree cutting around bird nesting times and
        other conservation issues (e.g. insect habitats), so they do not cut hedges
        in the spring and early summer unless for reasons of public safety.
      </p>
      <p>
        If a hedge or tree is encroaching on to the highway from private property or
        land, you will need to transfer the call to the Highway Enforcement team.
        The Highway Enforcement team can serve hedge cutting/tree pruning notices to
        private landowners where trees/hedges are encroaching on to the highway not
        considered to be causing hazard or danger. If a tree is causing a hazard or
        danger to the highway, raise a report.
      </p>
    </section>
  `,
  {
    buttonLabel: "Report a hedge, plant or grass",
    formName: "report_hedge_plant_grass",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Report",
    keywords: ["Hedge", "plant", "grass"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportLitterBin = new FormRaP(
  "reportLitterBin",
  "Litter bins",
  "Report problems such as full, leaning or knocked over litter bins",
  "report_litter_bin",
  {
    type: "Report",
    keywords: ["Litter", "bin"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportStreetSignBollard = new FormRaP(
  "reportStreetSignBollard",
  "Street signs or bollards",
  "Report problems such as obstructed, missing, damaged, or fallen signs or bollards",
  "road_street_sign_bollard",
  {
    type: "Report",
    keywords: ["Street", "sign", "bollard"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportTree = new ContentRaP(
  "reportTree",
  "Trees and tree grills",
  "Report problems such as fallen, leaning, diseased, dead trees, or damaged tree grills",
  `
    <section>
      <h3>Maintanence</h3>
      <p>
        We plan our routine hedge and tree cutting around bird nesting times and
        other conservation issues (e.g. insect habitats), so they do not cut hedges
        in the spring and early summer unless for reasons of public safety.
      </p>
      <p>
        If a hedge or tree is encroaching on to the highway from private property or
        land, you will need to transfer the call to the Highway Enforcement team.
        The Highway Enforcement team can serve hedge cutting/tree pruning notices to
        private landowners where trees/hedges are encroaching on to the highway not
        considered to be causing hazard or danger. If a tree is causing a hazard or
        danger to the highway, raise a report.
      </p>
      <p>
        Initially, the tree will be inspected and where it is considered hazardous
        remedial works will be carried out to make the area safe.
      </p>
      <p>
        Tree removal is always the very last option undertaken after all other
        solutions have been explored. As a result of any removal, we will always aim
        to plant a new tree in a nearby location.
      </p>
    </section>
    <details class="details-accordion">
      <summary>Damage caused by trees</summary>
      <div class="details-accordion-content">
        <p>
          Residents who believe that branches or roots from a highway tree have
          caused damage to their vehicle, boundary wall or driveway are at liberty
          to request a claim form.
          <br /><br />
          Residents who believe that branches or roots from a highway tree have
          caused damage to their house should always contact their own house
          insurers in the first instance, who will arrange for the relevant surveys
          to be carried out.
        </p>
      </div>
    </details>
  `,
  {
    buttonLabel: "Report a problem with a tree",
    formName: "report_tree",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Report",
    keywords: ["Tree"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "29/01/2025", name: "Elliott Griffiths" }
);

const requestHighwayInfo = new FormRaP(
  "requestHighwayInfo",
  "Highway information",
  "Request information about service, works, policy or legislation",
  `request_highway_info`,
  {
    type: "Request",
    keywords: ["Grit", "bin"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "29/01/2025", name: "Elliott Griffiths" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const roadsAndPavements = new ServiceRaP(
  "roadsAndPavements",
  "Roads and Pavements",
  `Roadworks, Streets Ahead, maintenance, street lighting, traffic lights, road signs, traffic cameras, bus lanes, cycling…`,
  [
    reportDamagedMissingKerb,
    requestLitterPickCollection,
    manholeStopcockCover,
    reportDrainGulley,
    reportFenceBarrier,
    reportFloodedArea,
    reportGritBin,
    reportHighwayDamage,
    reportHighwaySpillage,
    reportMudGravel,
    reportPotholeCrack,
    reportRoadMarking,
    reportStreetFurniture,
    reportStreetLight,
    reportTrafficSignal,
    requestClaimsPack,
    requestGritBin,
    requestGritting,
    roadPavementSurface,
    reportDeadAnimal,
    reportFallenLeaves,
    reportHedgePlantGrass,
    reportLitterBin,
    reportStreetSignBollard,
    reportTree,
    requestHighwayInfo,
  ]
);
