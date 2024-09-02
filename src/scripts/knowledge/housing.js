const topicExample1 = {
  id: `topicexample1`,
  name: `Example 1`,
  description: `Example 1`,
  content: `
      <p>example text</p>
    `,
  process: {
    buttonLabel: `Example 1`,
    formName: `example_form`
  },
  transfer: {
    typeKey: `example_transfered_to_service`
  },
  finish: {
    typeKey: `example_information_provided`
  },
  meta: {
    keywords: [],
    categories: ['Housing']
  },
};

const subjectExample2 = {
  id: `subjectexample2`,
  name: `Example 2`,
  description: `Example 2`,
  topics: [
    topicExample1
  ]
};

const subjectExample1 = {
  id: `subjectexample1`,
  name: `Example 1`,
  description: `Example 1`,
  content: `
      <p>example text</p>
    `,
  process: {
    buttonLabel: `Example 1`,
    formName: `example_form`
  },
  transfer: {
    typeKey: `example_transfered_to_service`
  },
  finish: {
    typeKey: `example_information_provided`
  },
  meta: {
    keywords: [],
    categories: ['Housing']
  },
};

// --- ^ - ADD SCRIPT ABOVE THIS  LINE - ^ ---------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const housing = {
  id: `housing`,
  name: `Housing`,
  description: `Council and private housing, landlords and tenants, assisted living and care homes, heating your home, homelessness…`,
  subjects: [
    subjectExample1,
    subjectExample2
  ]
};
