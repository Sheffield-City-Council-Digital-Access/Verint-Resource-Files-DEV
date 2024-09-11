class CoreSaC {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ServiceSaC extends CoreSaC {
  constructor(id, name, description, subjects = []) {
    super(id, name, description);
    this.subjects = subjects;
  }
}

class MenuSaC extends CoreSaC {
  constructor(id, name, description, topics = []) {
    super(id, name, description);
    this.topics = topics;
  }
}

class ContentSaC extends CoreSaC {
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

const fundedEarlyLearning = new ContentFEL(
  'fundedEarlyLearning',
  'Funded Early Learning',
  'Apply for funding',
  `
    <p>From April 2024, eligible working parents of 2-year-olds can access 15 hours childcare support. By September 2025, 
    eligible working families with children aged between 9 months and 5 years old will be entitled to 30 
    hours of childcare support.
The changes are being introduced gradually to make sure that providers can meet the needs of more families. This means that:
</p >
      
      <p>From September 2025
Eligible working parents of children from 9 months to school age will be entitled to 30 hours of childcare a week.<br>
Like the existing offer, depending on your provider, these hours can be used over 38 weeks of the year, or up to 52 weeks if you use fewer than your total hours per week.
</p>
      
      <p>
        All eligible children are entitled to at least 570 hours of funded childcare each year.
        
      </p>
      <p>
        FEL helps children learn through play activities. Some benefits that parents have seen;
        <ul>
          <li>children making friends their own age</li>
          <li>children behaving better with grown-ups</li>
          <li>children improving their speech and language</li>
          <li>children settle down and concentrate for longer</li>
          <li>children are more willing to try new foods which improves their nutrition</li>
          <li> younger children improving their sleeping patterns and toilet training</li>

        </ul>
    </p>
      <p>
        The funded hours also help parents and carers access employment and training, spend time with their younger children or just find time to get things done.
        
      </p>
        <p>
        The hours must be taken over a minimum of 38 weeks (15 hours a week, or 30 if entitled to additional hours) but can be taken over more weeks: for example, your child could take 12 hours a week for 47½ weeks. Talk to your childcare provider about what options are available. For Funded Early Learning enquiries and more information on the Family Hubs for Families, please contact the Family Hubs - 0114 273 5665.
                
      </p>
        <p>
       For information about the new 2-year-old extended working entitlement (15 hours offer starts April 2024, from 9 months old from September 2024) please visit the childcare choices page, there is an assessment tool offering families details of childcare support they might be eligible for and a link to apply to HMRC. www.childcarechoices.gov.uk. From September 2025
Eligible working parents of children from 9 months to school age will be entitled to 30 hours of childcare a week
        
      </p>
        
      
  `,

  { buttonLabel: 'Apply Funded Early Learning', formName: 'report_abandoned_vehicle?' },
  { typeKey: 'abandoned_vehicle_transfered_to_service?' },
  { typeKey: 'abandoned_vehicle_information_provided?' },
  

  {
    type: 'Application',
    keywords: [
      'Fnded', 'Fuded', 'Fuded Early Lerning', 'Fnded Early Larning', 'Funded Erly Learning',
      'Fundded', 'Funned', 'Funed', 'Fudned', 'Fundeed',
      'earley', 'erly', 'earlye', 'earli', 'erley',
      'lerning', 'learnning', 'lurning', 'lreaning', 'leanring',

    ],
    categories: ['Schools and Childcare'],
  },
  { date: '11/09/2024', name: 'Gee Whitehouse' }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const schoolsAndChildcare = new ServiceSaC(
  'schoolsAndChildcare',
  'Schools and Childcare',
  `Admissions, catchment areas, find schools, school travel, attendance, childcare and nurseries, teaching jobs…`,
  [
    
    fundedEarlyLearning

  ]
);
