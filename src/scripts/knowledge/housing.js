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
// to go in estates and environment
const indoorCommunalAreas = new ContentH(
  "indoorCommunalAreas",
  "Indoor Communal Areas",
  "TBC",
  `<h3>Blocked Bin Chutes</h3>
<p>Bin chutes in Council flats or maisonettes may become blocked and will be unblocked upon request.</p>

  <><p>Open the blocked chutes list from the button below, and use the search, is the property on the list?<br>

    <h3>Communal Cupboard and Meter Box Cupboard</h3>
    ,p>Meter boxes cupboard can be inside or outside of the property and the keyhole will be triangular in shape. These will need to purchased from a hardware store as we cannot provide one.</></p><p>If the keyhole is not triangular then it is likely to be cupboard in the communal area. These cupboards may contain more than one gas/electric meter and they mostly require a T1 Key that is held in the local Area office.&quot;</p>
    <h3>Communal Fire Safety </h3>
    <p>Under the Regulatory Reform Order (2005), landlords are required to ensure that fire risk assessments are carried out in any shared areas of any properties they manage. Landlords also need to ensure that any fire escape routes and entrances/exits to properties are clear from trip hazards and items which would prevent exit from the building in the event of an emergency.</p><p>As such, please do not place in the communal area, items such as:</p><p>Chairs and tables<br>
      Bookcases<br>
        Loose carpets<br>
          Curtains, blinds or net curtains<br>
            Plastic flower pots<br>
              Petrol containers and gas bottles<br>
                Motorbikes, mopeds or any other equipment which uses petrol/diesel or gas<br>
                  If any of these items, or any other item which is felt to be a fire risk, are left in your communal area we will ask residents to remove them. If they remain they will be removed.</p>

                <p>Bicycles, prams, pushchairs and similar items will not normally be permitted to be stored or located within the internal communal parts unless there is an area capable of storage without causing obstruction.</p>

                <p>You can have a small doormat if it is rubber backed. Edged and trimmed natural plants in ceramic, earthenware or metal pots, as long as they are not placed on stairs or landings which are the means of escape from the building.<br>
                </></p>`,
                {buttonLabel: "Example 1", formName: "example_form" },
                {typeKey: "example_transfered_to_service" },
                {typeKey: "example_information_provided" },
                {type: "Apply", keywords: [], categories: ["Housing"] },
                {date: "05/09/2024", name: "Elliott Griffiths" }
)
                // Example instantiation for topicExample1
                const topicExample1 = new ContentH(
                "topicexample1",
                "Topic Title Example 1",
                "Topic Description Example 1",
                "<p>example text</p>",
                {buttonLabel}: "Example 1", formName: "example_form" },
                {typeKey}: "example_transfered_to_service" },
                {typeKey}: "example_information_provided" },
                {type}: "Request", keywords: [], categories: ["Housing"] },
                {date}: "05/09/2024", name: "Elliott Griffiths" }
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
                "<p>example text</p>",
                {buttonLabel}: "Example 1", formName: "example_form" },
                {typeKey}: "example_transfered_to_service" },
                {typeKey}: "example_information_provided" },
                {type}: "Apply", keywords: [], categories: ["Housing"] },
                {date}: "05/09/2024", name: "Elliott Griffiths" }
                );

                // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
                // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

                const housing = new ServiceH(
                "housing",
                "Housing",
                "Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…",
                [ subjectExample2]
                );
              </></></></></></></></>
