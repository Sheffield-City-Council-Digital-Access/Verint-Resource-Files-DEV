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
  "Comunity litter collection",
  "Collection after a community litter pick",
  "litter_pick_collection",
  {
    type: "Report",
    keywords: ["litter", "pick", "collection"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const manholeStopcockCover = new FormRaP(
  "manholeStopcockCover",
  "Manhole or stopcock cover",
  "Report problems such as broken, depressed, missing, raised and rocking or noosy manhole or stopcock covers",
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
  "Report problems with cycle barriers, fences, pedestrian barriers, temporary barrer/sbollards or vehicle barriers",
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
  "Report problems such as damaged, missing or exposed wires, obscureed or not working lights, and structural and appearance issues",
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
  "View grit bin locations and request a grit bin",
  `## needs information around grit bin locations and requesting a grit bin ##`,
  {
    buttonLabel: "Request a grit bin",
    formName: "request_grit_bin",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: ["Grit", "bin"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const requestGritting = new ContentRaP(
  "requestGritting",
  "Gritting routes",
  "View gritting routes and request gritting or snow clearance",
  `<iframe src="https://sheffieldcc.maps.arcgis.com/apps/webappviewer/index.html?id=796ba9a88ab04607a265d78e93d36d5c" style="height:300px;width:100%"></iframe>`,
  {
    buttonLabel: "Request gritting or snow clearance",
    formName: "request_gritting",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: ["Gritting"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const roadPavementSurface = new FormRaP(
  "roadPavementSurface",
  "Road or pavement surface",
  "Report problems such as dip or depression or vegetation in the road or pavement",
  "report_road_pavement_surface",
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
  "Reports problems such as overgrown, dead or diseased, and damaged vegetation",
  `## needs information around grass cutting schedule ##`,
  {
    buttonLabel: "Report a hedge, plant or grass",
    formName: "hedge_plant_grass",
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
  "Report problems such as full, leaning or knocked overlitter bins",
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
  "Report propblems such as obstructed, missing, damaged, or fallen signs or bollards",
  "road_street_sign_bollard",
  {
    type: "Report",
    keywords: ["Street", "sign", "bollard"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportTree = new FormRaP(
  "reportTree",
  "Trees and tree grills",
  "Report problems such as fallen, leaning, diseased, dead trees, or damaged tree grills",
  "report_tree",
  {
    type: "Report",
    keywords: ["Tree"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const requestHighwayInfo = new ContentRaP(
  "requestHighwayInfo",
  "Highway information",
  "Request information about service, works, policy or legislation",
  ``,
  {
    buttonLabel: "Request highway information",
    formName: "request_highway_info",
  },
  { typeKey: "" },
  { typeKey: "" },
  {
    type: "Request",
    keywords: ["Grit", "bin"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
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
