class CorePH {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServicePH extends CorePH {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuPH extends CorePH {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentPH extends CorePH {
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

//const fleaTreatments = new MenuE( column B menu)
 // 'fleaTreatments',
  //'Flea Treatments',
  //'Description',
  //[column c headings]
//);




const fleaTreatments = new ContentE(
  'fleaTreatments',
  'Flea Treatments',
  'Information regarding Flea Treatments',
  `
   <h2>Flea Treatments</h2>

<p>It is true to say that, normally, we wouldn’t ask for evidence of fleas before a treatment is booked. This is due to the fact that they are difficult to catch and hard to see.</p>

<p>However, sometimes people have skin conditions or some sort of psychological problems which make them believe that they have a biting insect infestation.</p>

<p>Usually, by talking to the customer, you can decide whether a treatment for fleas should be booked at the point of contact for eg, if they have a cat or a dog, and have bites on their legs (usually lower legs and around the ankles). <br />
They may have just moved into a property that has been vacant, have received bites, and seen small dark brown/black insects “jumping” around the place.</p>

<p>The complaints to be wary of are from customers who phone saying they have fleas because:
<ul>
  <li>They feel like something is crawling on them.</li>
  <li>They are itching.</li>
  <li>They are covered all over their body in bites.</li>
  <li>They have no pets.</li>
</ul>
</p>

<p>These are the cases where we may ask for a sample or picture to be provided for ID. <br />
 Also, we could suggest monitoring their property to determine if there is a flea problem, then offer a treatment if fleas are found on the traps.</p>

  `,
  { buttonLabel: '', formName: ''},
  { typeKey: 'flea_Treatments_transfered_to_service' },
  { typeKey: 'flea_Treatments_information_provided' },
  {
    type: 'Information',
    keywords: [
      'flea treatments','flea treatmets', 'flea tretments', 'fleaa treatments', 'flea teatments', 'flea treetments','fle', 'fleea', 'fllea', 'fea', 'flae','treatmnts', 'tretments', 'treatmets', 'treatmants', 'treatmens',
'treatmant', 'tretment', 'treatmint', 'treatmen', 'treatmnet'
      
   
    ],
    categories: ['public health',],
  },
  { date: '25/09/2024', name: 'Gee Whitehouse' }
);



// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const enviromentalServices = new ServiceE( // First Menu regarding the service first tile under service
  'enviromentalServices',
  'Enviromental Services',
  `Information regarding enviromental services`,
  [fleaTreatments]
);


