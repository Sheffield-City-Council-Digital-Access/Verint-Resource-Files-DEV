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

class FormH extends CoreH {
  constructor(id, name, description, formName, meta, lastModified) {
    super(id, name, description);
    this.formName = formName;
    this.meta = meta;
    this.lastModified = lastModified;
  }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\

// Example instantiation for topicExample1
const gardenPledgeScheme = new ContentH(
  "gardenPledgeScheme",
  "Garden Pledge Scheme",
  "Desc tbc",
  `
    <p>
      The Garden Pledge Scheme ceased to operate in April 2023 as highlighted below
    </p>
    <p>
      Due to substantial financial pressures within the Housing Revenue Account, we
      have unfortunately had to consider reducing or stopping some services to
      customers in order to invest in others. Last year the Garden Pledge Scheme was
      put forward as a potential saving and following full Council on 20th February
      2023 a decision was taken by Members to end this service on the 31st of March
      2023.
    </p>
    <p>
      This means that the annual garden visits that customers currently on the
      scheme receive will not continue. If you haven’t already you will shortly
      receive a letter with further information and containing details about third
      party organisations who may be able to offer support with your garden, please
      note that these organisations may charge for their services and are not linked
      to Sheffield City Council in any way.
    </p>
    <p>
      We appreciate this decision will be disappointing to you and that you may have
      questions.
    </p>
    <p>
      List of Gardening Services:
      <a
        href="G:\CEX\Corp Res\CS-Gen\Contact Centre\CRM\Spreadsheets\Estates\Garden\Alternative Garden Services List.xls"
        >Alternative Garden Services List</a
      >
      - (This list can be provided to customers (emailed, posted, etc.))
    </p>
    <p>
      Please note, these companies are not endorsed by Sheffield City Council. The
      inclusion of these companies on this list does not mean that they have been
      recommended or vetted by Sheffield City Council.
    </p>
    <p>
      The Government also has a website which lists local, trustworthy and reliable
      tradesmen, operating to Government endorsed standards
      <a href="http://www.trustmark.org.uk/ " target="_blank"
        >http://www.trustmark.org.uk</a
      >.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const fencesCouncilHousing = new ContentH(
  "fencesCouncilHousing",
  "Fences (Council Housing)",
  "Desc tbc",
  `
    <h3>New Fence</h3>
    <p>
      Installation of fences is the tenants responsibility. The customer will need
      to have permission to install a new fence.
    </p>
    <h3>Repair to an Existing Fence</h3>
    <p>
      The Council do not repair tenants' fences. It is the tenant's responsibility.
    </p>
    <h3>Fallen Fence to be Removed</h3>
    <p>
      Estate Services teams will only remove blown down fences if they are a safety
      hazard.
    </p>
  `,
  { buttonLabel: "", formName: "" },
  { typeKey: "" },
  { typeKey: "" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

const estatesAndEnvironments = new MenuH(
  "estatesAndEnvironments",
  "Estates and Environments",
  "Desc tbc",
  [fencesCouncilHousing, gardenPledgeScheme]
);

// Example instantiation for topicExample1
const topicExample1 = new ContentH(
  "topicexample1",
  "Topic Title Example 1",
  "Topic Description Example 1",
  `<p>example text</p>`,
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Request", keywords: [], categories: ["Housing"] },
  { date: "09/10/2024", name: "Elliott Griffiths" }
);

// Example instantiation for subjectExample2 (Menu with topics)
const subjectExample2 = new MenuH(
  "subjectexample2",
  "Subject Title Example 2",
  "Subject Description Example 2",
  [topicExample1]
);

// Example instantiation for subjectExample1 (Full content)
const subjectExample1 = new ContentH(
  "subjectexample1",
  "Subject Title Example 1",
  "Subject Description Example 1",
  `<p>example text</p>`,
  { buttonLabel: "Example 1", formName: "example_form" },
  { typeKey: "example_transfered_to_service" },
  { typeKey: "example_information_provided" },
  { type: "Apply", keywords: [], categories: ["Housing"] },
  { date: "05/09/2024", name: "Elliott Griffiths" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = new ServiceH(
  "housing",
  "Housing",
  "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
  [subjectExample1, subjectExample2, estatesAndEnvironments]
);
