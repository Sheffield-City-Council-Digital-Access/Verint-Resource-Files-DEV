class CoreYCC {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  class ServiceYCC extends CoreYCC {
    constructor(id, name, description, subjects = []) {
      super(id, name, description);
      this.subjects = subjects;
    }
  }
  
  class MenuYCC extends CoreYCC {
    constructor(id, name, description, topics = []) {
      super(id, name, description);
      this.topics = topics;
    }
  }
  
  class ContentYCC extends CoreYCC {
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
  
  class FormYCC extends CoreYCC {
    constructor(id, name, description, formName, meta, lastModified) {
      super(id, name, description);
      this.formName = formName;
      this.meta = meta;
      this.lastModified = lastModified;
    }
  }
  
  // --------- KEEP THIS AT THE TOP ------------------------------------------- \\
  // --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\
  
  const myAccount = new ContentP(
    "myAccount",
    "My Account",
    "Our new digital service that lets customers track their enquiries online from start to finish.",
    `
    <h3>What is My Account</h3>
    <p>
      My Account gives customers a secure online login where they can see progress 
      of any enquiry submitted through an online form. This is a key part of making it easier 
      for people to interact with the Council and choose digital first.
    </p>
    <p>
      The first phase of My Account focuses on enquiries made through online forms. 
      The service will go live on Tuesday 17 March 2026.
    </p>
    <p>
      By making customer enquiries more transparent and consistent, we are living 
      our organisational value of openness and honesty, ensuring that customers 
      and colleagues have clear, reliable information.
    </p>
    <p>
      Click 
      <a href="https://sccextranet.sharepoint.com/:w:/s/DigitalICT-TransformationProgramme/IQCFSJ_BezhxQqJeBfK2KOoUAY13nY3p_2Rp5alnXLMYmSQ?clickparams=eyAiWC1BcHBOYW1lIiA6ICJNaWNyb3NvZnQgT3V0bG9vayIsICJYLUFwcFZlcnNpb24iIDogIjE2LjAuMTk3MjUuMjAxNTIiLCAiT1MiIDogIldpbmRvd3MiIH0%3D&CID=D2D3F3AC-0BDC-4BD2-BA71-FB696A0B6A00&wdLOR=c94C1E888-7672-441D-A24F-0A1B08AB2E33" target="_blank">Here</a>
       to access the My Account FAQ.
    </p>
    <p>
      For any issues relating to My Account, use the 'Report a problem' link at the bottom of this page,
    </p>
    <details class="accordion">
      <summary class="accordion-header">
        <h3>How My Account will help customers, colleagues and the Council</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          The delivery of this change will result in several 
          improved outcomes for our customers, workforce and the Council as a whole.
        </p> 
        <h4>Customers</h4>
        <p>
          For our customers, My Account will provide a reliable and seamless digital 
          service that enables quicker response times and more consistent experiences. 
          It will offer improved access through a digital channel where enquiries can be 
          tracked at any time, which will lead to fewer chase calls.
        </p> 
        <h4>Colleagues</h4>
        <p>
          For our workforce, My Account will provide access to better digitally enabled tools, 
          processes, visibility and capability, all of which will make it easier to serve our 
          customers. This improvement will:
          <ul>
            <li>increase productivity</li>
            <li>reduce transactions between teams</li>
            <li>enhance job purpose</li>
            <li>deliver better customer experiences</li>
            <li>create more capacity to support those with greater needs</li>
          </ul>
        </p>
        <h4>The Council</h4>
        <p>
          For the Council, My Account will help us become the organisation we want 
          and need to be in the future - a Council with people at its heart. It will 
          help build trust in the Council by providing a consistent, modern, secure 
          and high-quality experience where online enquiries work effectively and 
          customers feel heard and connected to what we do.
        </p> 
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Benefits of My Account</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          My Account will improve digital access for customers who prefer to use 
          online services. This reduces call volumes and waiting times, freeing 
          up capacity for customers with more complex needs.
        </p>
        <p>
          Benefits include:
        </p>
        <p>
          <ul>
            <li>full visibility of each case and its progress</li>
            <li>fewer duplicate enquiries and fewer customer chase contacts</li>
            <li>more consistent response standards</li>
            <li>all enquiry history available in one place</li>
            <li>a secure way to share information and respond to customers</li>
          </ul>
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>How My Account is part of Future Sheffield</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          Future Sheffield is our plan to become a modern, trusted council 
          and a great place to work. It's focused on fixing things that slow 
          us down and improving services across the city.
        </p> 
        <p>
          Digital Transformation and Customer Experience Programmes are helping 
          us move towards digital self-serve. My Account is a key part of this work, 
          making it easier for customers who prefer digital access to get updates 
          without needing to contact us.
        </p>
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion-header">
        <h3>Contact us</h3>
        <div class="accordion-icon"></div>
      </summary>
      <div class="accordion-content">
        <p>
          If you have any questions about My Account, please contact Leigh Graham by emailing
          <a href="mailto:leigh.graham@sheffield.gov.uk">leigh.graham@sheffield.gov.uk</a>
        </p>
      </div>
    </details>
    `,
  
    { buttonLabel: "", formName: ""},
    { typeKey: "" },
    { typeKey: "my_account_information_provided"},
    {
      type: "Information",
      keywords: [
        "Account",
        "MyAccount",
        "My Account"
      ],
      categories: ["Your City Council"],
    },
    { date: "05/03/2026", name: "Nathan Smith"} 
  );

  const switchboard = new ContentP(
    "switchboard",
    "Switchboard",
    "Records calls that are transferred via Switchboard.",
    `
    <p>
      Using Storm find the appropriate number for the service you wish to transfer the customer to.
    </p>
    `,
  
    { buttonLabel: "", formName: ""},
    { typeKey: "switchboard_transferred_to_service" },
    { typeKey: "switchboard_information_provided"},
    {
      type: "Request",
      keywords: [
        "Switchboard",
        "Switch board",
        "Switch",
        "transfer",
        "redirect",
        "transfer call",
        "call"
      ],
      categories: ["Your City Council"],
    },
    { date: "04/06/2025", name: "George Whitehouse"} 
  );
  
  // --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
  // --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\
  
  const yourCityCouncil = new ServiceYCC(
    "yourCityCouncil",
    "Your City Council",
    "Your City Council.",
      [
        switchboard,
        myAccount
      ]
  );
