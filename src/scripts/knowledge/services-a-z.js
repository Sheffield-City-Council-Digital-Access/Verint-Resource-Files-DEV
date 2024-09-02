class Form {
  constructor(name, label, description, category) {
    this.name = name;
    this.label = label;
    this.description = description;
    this.category = category;
  }
}

const formList = [
  new Form('apply_school_meals', 'Free School meals', 'Apply for free school meals', 'Apply'),
  new Form('book_repair', 'Book a repair', 'Book a repair for a Council House', 'Book'),
  new Form('blue_badge_application', 'Blue Badge (Application)', 'Apply for or renew a Blue Badge', 'Apply'),
  new Form('childrens_travel_pass', 'Childrens Travel Pass', 'Apply for a Children\'s Travel Pass', 'Apply'),
  new Form('disabled_travel_pass', 'Disabled travel pass', 'Apply for a disabled travel pass', 'Apply'),
  new Form('apply_emergency_homeless', 'Emergency accommodation', 'Applicaton for emergency accommodation related to homelessness', 'Apply'),
  new Form('register_burglar_alarm', 'Burgular Alarm', 'Register a Burgular alarm', 'Register'),
  new Form('report_abandoned_vehicle', 'Abandoned vehicle', 'Report a vehicle that has been left for a period of time and will usually be damaged, run-down or unroadworthy.', 'Report'),
  new Form('hou_sustainment_abandon', 'Abandonment', 'Report abandonment', 'Report'),
  new Form('report_accumulations', 'Accumulations', 'Report an accumulation', 'Report'),
  new Form('report_animal_control', 'Animal control', 'Report animal control', 'Report'),
  new Form('hou_enforcement_asb', 'Anti-social behaviour', 'Report anti-social behaviour', 'Report'),
  new Form('hou_sustainment_boundary', 'Boundary', 'Report boundary', 'Report'),
  new Form('report_dangerous_dog', 'Dangerous dogs', 'Report dangerous dog', 'Report'),
  new Form('report_dog_handover', 'Dog handover', 'Report a dog handover', 'Report'),
  new Form('report_emergency_repair', 'Emergency repair', 'Report emergency repair', 'Report'),
  new Form('hou_sustainment_fence', 'Fence', 'Report a fence', 'Report'),
  new Form('report_filthy_premises', 'Filthy premise', 'Report Filthy premise', 'Report'),
  new Form('report_fumes_odours', 'Fumes and odours', 'Report Fumes and odours', 'Report'),
  new Form('report_high_hedge', 'High hedges', 'Report High hedges', 'Report'),
  new Form('hou_adaptations', 'Housing adaptations', 'Report housing adaptations', 'Report'),
  new Form('report_flytipping', 'Fly-tipping', 'Report fly tipping', 'Report'),
];
