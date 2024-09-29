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
  "Damaged, missing kerb",
  "Report a damaged or missing kerb",
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
  "Litter pick collection",
  "Request a collection after a litter pick",
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
  "Manhole stopcock cover",
  "Report a damaged or missing manhole stopcock cover",
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
  "Drain gulley",
  "Report a drain gulley",
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
  "Fence barrier",
  "Report a fence barrier",
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
  "Report a flooded area",
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
  "Grit bin",
  "Report a grit bin",
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
  "Highway damage",
  "Report damage to the highway",
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
  "Highway spillage",
  "Report a highway spillage",
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
  "Mud or gravel",
  "Report mud or gravel",
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
  "Pothole or crack",
  "Report a pothole or crack",
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
  "Road marking",
  "Report a road marking",
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
  "Report street furniture",
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
  "Report a street light",
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
  "Traffic signal",
  "Report a traffic signal",
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
  "Claims pack",
  "Request a claims pack",
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
  "Grit bin",
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
  "Gritting and snow clearing",
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
  "Road pavement surface",
  "Report a road pavement surface",
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
  "Report a dead animal",
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
  "Dog fouling",
  "Report dog fouling",
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
  "Fallen leaves",
  "Report fallen leaves",
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
  "Fly posting",
  "Report a fly posting",
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
  "Fly tipping",
  "Report a fly tipping",
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
  "Graffiti",
  "Report graffiti",
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
  "Hedge, plant, grass",
  "Report a hedge, plant or grass",
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
  "Litter",
  "Report litter",
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
  "Litter bin",
  "Report a litter bin",
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
  "Needles or glass",
  "Report needles or glass",
  "report_needles_glass",
  {
    type: "Report",
    keywords: ["Needles", "glass"],
    categories: ["Roads and pavements", "Highways", "Streets Ahead", "Amey"],
  },
  { date: "30/09/2024", name: "Elliott Griffiths" }
);

const reportTree = new FormRaP(
  "reportTree",
  "Tree",
  "Report a tree",
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
    reportTree,
    requestHighwayInfo,
  ]
);
