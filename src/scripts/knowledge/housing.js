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
  constructor(id, name, description, content, process, transfer, finish, meta, lastModified) {
    super(id, name, description);
    this.content = content;
    this.process = process;
    this.transfer = transfer;
    this.finish = finish;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

const retTopic = new ContentH(
  'retTopicID',
  'ret Topic enample',
  'info about rent topic',
  `<p>1st info here</p>
  <h4>header 4</h4>
  <p>2nd infor here</p>
  <ul>
  <li>list item</li>
  </ul>
  `
)

const rentsExample = new MenuH(
  'rentMenuID',
  'rent menu name',
  'indormation about rent tpoics',
  [retTopic]
)



// Example instantiation for topicExample1
const topicExample1 = new ContentH(
  'topicexample1',
  'Topic Title Example 1',
  'Topic Description Example 1',
  '<p>example text</p>',
  { buttonLabel: 'Example 1', formName: 'example_form' },
  { typeKey: 'example_transfered_to_service' },
  { typeKey: 'example_information_provided' },
  { type: 'Request', keywords: [], categories: ['Housing'] },
  { date: '05/09/2024', name: 'Elliott Griffiths' }
);

// Example instantiation for subjectExample2 (Menu with topics)
const subjectExample2 = new MenuH(
  'subjectexample2',
  'Subject Title Example 2',
  'Subject Description Example 2',
  [topicExample1]
);

// Example instantiation for subjectExample1 (Full content)
const subjectExample1 = new ContentH(
  'subjectexample1',
  'Subject Title Example 1',
  'Subject Description Example 1',
  '<p>example text</p>',
  { buttonLabel: 'Example 1', formName: 'example_form' },
  { typeKey: 'example_transfered_to_service' },
  { typeKey: 'example_information_provided' },
  { type: 'Apply', keywords: [], categories: ['Housing'] },
  { date: '05/09/2024', name: 'Elliott Griffiths' }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  'housing',
  'Housing',
  'Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…',
  [
    subjectExample1,
    subjectExample2,
    rentsExample
  ]
);
