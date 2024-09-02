class Form {
  constructor(name, label, description, category) {
    this.name = name;
    this.label = label;
    this.description = description;
    this.category = category;
  }
}

const formList = [
  new Form('apply_emergency_homeless', 'Emergency Accommodation', 'Application for emergency accommodation related to homelessness', 'Apply'),
  new Form('apply_school_meals', 'Free School meals', 'Apply for free school meals', 'Apply'),
  new Form('blue_badge_application', 'Blue Badge (Application)', 'Apply for or renew a Blue Badge', 'Apply'),
  new Form('book_repair', 'Book a repair', 'Book a repair for a Council House', 'Book'),
  new Form('childrens_travel_pass', 'Children\'s Travel Pass', 'Apply for a Children\'s Travel Pass', 'Apply'),
  new Form('city_wide_care_alarm', 'City Wide Care Alarms', 'Request a City Wide Care Alarm', 'Request'),
  new Form('collect_deceased_pet', 'Deceased Pets', 'Request deceased pet collection', 'Request'),
  new Form('disabled_travel_pass', 'Disabled Travel Pass', 'Apply for a disabled travel pass', 'Apply'),
  new Form('emergency_adult_service', 'Emergency Adult Service', 'Request emergency adult services for a missing adult or an adult at risk', 'Request'),
  new Form('emergency_child_service', 'Emergency Child Service', 'Request emergency child services for a missing child or a child at risk', 'Request'),
  new Form('hou_adaptations', 'Housing Adaptations', 'Report housing adaptations', 'Report'),
  new Form('hou_enforcement_asb', 'Anti-Social Behaviour', 'Report anti-social behaviour', 'Report'),
  new Form('hou_estates_enquiry', 'Housing Estates Enquiry', 'Report a housing estates enquiry', 'Report'),
  new Form('hou_inspection_request', 'Housing Inspection Request', 'Request a housing inspection', 'Report'),
  new Form('hou_rehousing_enquiry', 'Rehousing Enquiry', 'Report a rehousing enquiry', 'Report'),
  new Form('hou_sustainment_abandon', 'Abandonment', 'Report abandonment', 'Report'),
  new Form('hou_sustainment_bur_alar', 'Housing Sustainment Burglar Alarms', 'Report housing sustainment for burglar alarms', 'Report'),
  new Form('hou_sustainment_claims', 'Housing Sustainment Claims for Money', 'Report housing sustainment claims for money', 'Report'),
  new Form('hou_sustainment_fence', 'Fence', 'Report a fence', 'Report'),
  new Form('hou_sustainment_gen_enq', 'Housing Sustainment General Enquiry', 'Report housing sustainment general enquiry', 'Report'),
  new Form('hou_sustainment_garage', 'Housing Sustainment Garages', 'Report housing sustainment garages', 'Report'),
  new Form('hou_sustainment_perm', 'Fence Permissions', 'Request fence permissions', 'Request'),
  new Form('hou_sustainment_ten_chan', 'Housing Sustainment Tenancy Change', 'Report housing sustainment tenancy change', 'Report'),
  new Form('pest_control_technician', 'Pest Control Information', 'Request a pest control technician', 'Request'),
  new Form('pest_control_treatment', 'Pest Control Treatment', 'Book a pest control treatment', 'Request'),
  new Form('register_burglar_alarm', 'Burglar Alarm', 'Register a Burglar alarm', 'Register'),
  new Form('replace_blue_badge', 'Blue Badge (Replacement)', 'Request a replacement for a lost, stolen or damaged Blue Badge.', 'Request'),
  new Form('report_abandoned_vehicle', 'Abandoned Vehicle', 'Report a vehicle that has been left for a period of time and will usually be damaged, run-down or unroadworthy.', 'Report'),
  new Form('report_accumulations', 'Accumulations', 'Report an accumulation', 'Report'),
  new Form('report_animal_control', 'Animal Control', 'Report animal control', 'Report'),
  new Form('report_dangerous_dog', 'Dangerous Dogs', 'Report dangerous dog', 'Report'),
  new Form('report_dog_handover', 'Dog Handover', 'Report a dog handover', 'Report'),
  new Form('report_emergency_repair', 'Emergency Repair', 'Report emergency repair', 'Report'),
  new Form('report_filthy_premises', 'Filthy Premises', 'Report Filthy premise', 'Report'),
  new Form('report_flytipping', 'Fly-tipping', 'Report fly tipping', 'Report'),
  new Form('report_fumes_odours', 'Fumes and Odours', 'Report fumes and odours', 'Report'),
  new Form('report_high_hedge', 'High Hedges', 'Report high hedges', 'Report'),
  new Form('report_light_pollution', 'Light Pollution', 'Report light pollution', 'Report'),
  new Form('report_needles_glass', 'Needles or Broken Glass', 'Report dangerous litter such as needles or broken glass which could pose a risk to the general public.', 'Report'),
  new Form('report_straying_dog', 'Straying Dogs', 'Report a straying dog', 'Report'),
  new Form('report_trade_waste', 'Trade Waste', 'Report trade waste', 'Report'),
  new Form('report_water_drainage', 'Water and Drainage', 'Report water and drainage issue', 'Report'),
  new Form('request_clearance_quote', 'Clearance Quote', 'Request a clearance quote', 'Request'),
  new Form('request_sharp_collection', 'Sharps Collection', 'Request a sharps collection', 'Request'),
  new Form('send_link_to_service', 'Link to Service', 'Request a link to a service to be sent.', 'Request'),
  new Form('sr_location', 'Street Light (Demo)', 'Demo for map development', 'Report'),
  new Form('zz_demo_form', 'Demo Input Form', 'This form is for demonstration purposes. It shows the journey of a front-end data collection form.', 'Demonstration'),
];

