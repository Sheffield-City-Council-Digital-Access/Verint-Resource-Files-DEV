class CoreEaR {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceEaR extends CoreEaR {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuEaR extends CoreEaR {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentEaR extends CoreEaR {
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

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

// Example instantiation for topicExample1
const informationInDifferentFormats = new ContentEaR(
  "informationInDifferentFormats",
  "Information in different formats",
  "Accessing infomration in different formats",
  "<p>example text</p>",
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "05/09/2024", name: "Elliott Griffiths" }
);

// Example instantiation for subjectExample2 (Menu with topics)
const registeringToVote = new MenuEaR(
  "registeringToVote",
  "Registering to vote",
  "add description",
  [topicExample1]
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const electionsAndReferendums = new ServiceEaR(
  "electionsAndReferendums",
  "Elections and Referendums",
  `General elections, local elections, by-election, mayoral election, police and crime commitioner, referendums, voting…`,
  [registeringToVote]
);
