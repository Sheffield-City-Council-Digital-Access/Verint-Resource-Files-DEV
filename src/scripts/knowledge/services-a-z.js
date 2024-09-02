class Form {
  constructor(name, label, description, category) {
    this.name = name;
    this.label = label;
    this.description = description;
    this.category = category;
  }
}

const forms = [
  new Form('apply_school_meals', 'School meals', 'Apply for free school meals', 'apply'),
  new Form('book_repair', 'Book a repair', 'Book a repair for a Council House', 'book'),
  new Form('report_flytipping', 'Fly tipping', 'Report fly tipping', 'report')
];
