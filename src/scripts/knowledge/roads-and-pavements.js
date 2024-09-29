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
  "Report damaged or missing kerbs",
  "",
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
  "Request litter collection after a litter pick",
  "",
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
  "Report a problem with a manhole or stopcock cover",
  "",
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
  "Report a problem with a drain or gulley",
  "",
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
  "Report a problem with fences or safety barriers",
  "",
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
  "Flooded area",
  "",
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
  "Report a problem with a grit bin",
  "",
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
  "Report damage to the highway",
  "",
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
  "Report items or spillages on the highway",
  "",
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
  "Report mud or gravel on the highway",
  "",
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
  "Report a pothole or crack on the highway",
  "",
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
  "Report missing or damaged road markings",
  "",
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
  "Report a problem with street furniture",
  "",
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
  "Report a problem with a street light",
  "",
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
  "Report a problem with a traffic signal, pedestrian crossing, camera or electronic sign",
  "",
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
  "Request a claims pack",
  "",
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
  ``,
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
  ``,
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
  "Report a problem with the road or pavement surface",
  "",
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
  "Report a dead animal",
  "",
  "report_dead_animal",
  {
    type: "Report",
    keywords: ["Dead", "animal"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportDogFouling = new FormRaP(
  "reportDogFouling",
  "Report dog fouling",
  "",
  "report_dog_fouling",
  {
    type: "Report",
    keywords: ["Dog", "fouling"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFallenLeaves = new FormRaP(
  "reportFallenLeaves",
  "Report fallen leaves on the highway",
  "",
  "report_fallen_leaves",
  {
    type: "Report",
    keywords: ["Fallen", "leaves"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFlyPosting = new FormRaP(
  "reportFlyPosting",
  "Report fly-posting",
  "",
  "report_fly_posting",
  {
    type: "Report",
    keywords: ["Fly", "posting"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportFlyTipping = new FormRaP(
  "reportFlyTipping",
  "Report fly-tipping",
  "",
  "report_fly_tipping",
  {
    type: "Report",
    keywords: ["Fly", "tipping"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportGraffiti = new FormRaP(
  "reportGraffiti",
  "Report graffiti on the highway",
  "",
  "report_graffiti",
  {
    type: "Report",
    keywords: ["Graffiti"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportHedgePlantGrass = new ContentRaP(
  "reportHedgePlantGrass",
  "Report a problem with hedges, plants or grassed areas",
  "",
  ``,
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

const reportLitter = new FormRaP(
  "reportLitter",
  "Report litter",
  "",
  "report_litter",
  {
    type: "Report",
    keywords: ["Litter"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportLitterBin = new FormRaP(
  "reportLitterBin",
  "Report a problem with a litter bin",
  "",
  "report_litter_bin",
  {
    type: "Report",
    keywords: ["Litter", "bin"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportNeedlesGlass = new FormRaP(
  "reportNeedlesGlass",
  "Report needles or broken glass",
  "",
  "report_needles_glass",
  {
    type: "Report",
    keywords: ["Needles", "glass"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportStreetSignBollard = new FormRaP(
  "reportStreetSignBollard",
  "Report a problem with a street sign or bollard",
  "",
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
  "Report a problem with a tree",
  "",
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
  "Information about service, works or policy.",
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
    reportDogFouling,
    reportFallenLeaves,
    reportFlyPosting,
    reportFlyTipping,
    reportGraffiti,
    reportHedgePlantGrass,
    reportLitter,
    reportLitterBin,
    reportNeedlesGlass,
    reportStreetSignBollard,
    reportTree,
    requestHighwayInfo,
  ]
);
