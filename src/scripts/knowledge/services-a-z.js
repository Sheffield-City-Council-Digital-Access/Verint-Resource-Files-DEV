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
  new Form('report_flytipping', 'Fly-tipping', 'Report fly tipping', 'Report')
];
