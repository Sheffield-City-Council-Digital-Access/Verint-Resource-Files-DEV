class Core {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class Service extends Core {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class Menu extends Core {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class Content extends Core {
  constructor(id, name, description, content, process, transfer, finish, meta) {
    super(id, name, description);
    this.content = content;
    this.process = process;
    this.transfer = transfer;
    this.finish = finish;
    this.meta = meta;
  }
}

// // --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// // --- v - ADD SCRIPT BELOW THIS  LINE - v ---------------------------------- \\

// Example instantiation for topicExample1
const topicExample1 = new Content(
  'topicexample1',
  'Example 1',
  'Example 1',
  '<p>example text</p>',
  { buttonLabel: 'Example 1', formName: 'example_form' },
  { typeKey: 'example_transfered_to_service' },
  { typeKey: 'example_information_provided' },
  { keywords: [], categories: ['Housing'] }
);

// Example instantiation for subjectExample2 (Menu with topics)
const subjectExample2 = new Menu(
  'subjectexample2',
  'Example 2',
  'Example 2',
  [topicExample1]
);

// Example instantiation for subjectExample1 (Full content)
const subjectExample1 = new Content(
  'subjectexample1',
  'Example 1',
  'Example 1',
  '<p>example text</p>',
  { buttonLabel: 'Example 1', formName: 'example_form' },
  { typeKey: 'example_transfered_to_service' },
  { typeKey: 'example_information_provided' },
  { keywords: [], categories: ['Housing'] }
);

// // --- ^ - ADD SCRIPT ABOVE THIS  LINE - ^ ---------------------------------- \\
// // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new Service(
  'housing',
  'Housing',
  'Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…',
  [
    subjectExample1,
    subjectExample2
  ]
);
