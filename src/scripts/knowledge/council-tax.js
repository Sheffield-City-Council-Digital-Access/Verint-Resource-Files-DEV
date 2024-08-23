const payYourCouncilTax = {
  id: `payYourCouncilTax`,
  name: `Pay your Council Tax`,
  description: `Ways to pay your Council Tax`,
  content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci urna, 
      fermentum in odio id, sodales dictum enim. Etiam ligula quam, tincidunt 
      sed condimentum rutrum, egestas et dui. Nam blandit hendrerit lorem, non 
      maximus tellus egestas id. Phasellus id dui massa. Nullam facilisis 
      aliquam fringilla. Phasellus non maximus risus, vitae feugiat dolor. Morbi
      et ex quis nunc commodo tempus.</p>

      <p>Duis sit amet ultrices nulla, id fermentum urna. Fusce malesuada magna 
      nec erat dignissim, vitae imperdiet orci ullamcorper. Phasellus congue, 
      arcu a fermentum pharetra, quam lacus eleifend eros, in malesuada purus 
      dolor sit amet nunc. Nulla posuere dapibus commodo. Nullam mauris nisi, 
      dignissim at sem sit amet, pellentesque faucibus felis. Duis pulvinar quis
      erat in cursus. Vivamus at sagittis nulla. In hac habitasse platea 
      dictumst. Phasellus consectetur maximus dapibus. Aenean semper erat id 
      dapibus elementum. Morbi mollis laoreet erat, nec viverra velit lobortis 
      vitae.</p>

      <p>Ut nibh sem, auctor eu malesuada non, egestas eu tellus. Quisque 
      eleifend nisl a nisl faucibus euismod. Ut in metus sed neque luctus 
      egestas nec at libero. Donec malesuada lectus ut turpis aliquet, a 
      imperdiet nibh sollicitudin. Sed lacus nunc, vehicula ut feugiat quis, 
      fringilla cursus diam. Donec egestas est sed sagittis condimentum. Nunc 
      facilisis pellentesque libero, ut faucibus turpis volutpat ut. 
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Praesent elementum congue tortor, vel efficitur dolor 
      convallis at.</p>
    `,
  process: {
    buttonLabel: `Send link`,
    formName: `send_link_to_service`
  },
  transfer: {
    typeKey: `council_tax_refund_transfered_to_service`
  },
  finish: {
    typeKey: `council_tax_refund_infomration_provided`
  },
  meta: {
    keywords: [
      'Pay', 'Countil Tax', 'Poll Tax', 'Ground Rents', 'Domestic Rates', 'Community Charge',
      'Forgotten to pay', 'Ways to pay', 'Direct Debit', 'Online', 'Phone', 'Stanging Order', 'Post Office', 'PayPoint'
    ],
    categories: ['Countil Tax']
  },
};

const councilTaxChangeOfAddress = {
  id: `councilTaxChangeOfAddress`,
  name: `Change of address`,
  description: `Report a change of address`,
  content: ``,
  process: {
    buttonLabel: ``,
    formName: ``
  },
  transfer: {
    typeKey: ``
  },
  finish: {
    typeKey: ``
  },
  meta: {
    keywords: [],
    categories: ['Countil Tax']
  },
};

const councilTaxDiscounts = {
  id: `councilTaxDiscounts`,
  name: `Council Tax discounts`,
  description: `Council Tax discounts`,
  content: ``,
  process: {
    buttonLabel: ``,
    formName: ``
  },
  transfer: {
    typeKey: ``
  },
  finish: {
    typeKey: ``
  },
  meta: {
    keywords: [],
    categories: ['Countil Tax']
  },
};

const councilTaxChangeOfExemptions = {
  id: `councilTaxChangeOfExemptions`,
  name: `Council Tax exemptions`,
  description: `Council Tax exemptions`,
  content: ``,
  process: {
    buttonLabel: ``,
    formName: ``
  },
  transfer: {
    typeKey: ``
  },
  finish: {
    typeKey: ``
  },
  meta: {
    keywords: [],
    categories: ['Countil Tax']
  },
};

const councilTaxOnlineAccount = {
  id: `councilTaxOnlineAccount`,
  name: `Your online account`,
  description: `Log in to your online account`,
  content: ``,
  process: {
    buttonLabel: ``,
    formName: ``
  },
  transfer: {
    typeKey: ``
  },
  finish: {
    typeKey: ``
  },
  meta: {
    keywords: [],
    categories: ['Countil Tax']
  },
};

const councilTaxSupport = {
  id: `councilTaxSupport`,
  name: `Council Tax Support`,
  description: `Council Tax Support`,
  content: ``,
  process: {
    buttonLabel: ``,
    formName: ``
  },
  transfer: {
    typeKey: ``
  },
  finish: {
    typeKey: ``
  },
  meta: {
    keywords: [],
    categories: ['Countil Tax']
  },
};

const councilTaxDifficultyPaying = {
  id: `councilTaxDifficultyPaying`,
  name: `Difficulty paying`,
  description: `What to do if you have difficulty paying`,
  content: ``,
  process: {
    buttonLabel: ``,
    formName: ``
  },
  transfer: {
    typeKey: ``
  },
  finish: {
    typeKey: ``
  },
  meta: {
    keywords: [],
    categories: ['Countil Tax']
  },
};

// --- ^ - ADD SCRIPT ABOVE THIS  LINE - ^ ---------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const councilTax = {
  id: `councilTax`,
  name: `Council Tax`,
  description: `Your account, who has to pay, banding, how it's calculated, discounts and exemptions, how we spend it…`,
  subjects: [
    payYourCouncilTax,
    councilTaxChangeOfAddress,
    councilTaxDiscounts,
    councilTaxChangeOfExemptions,
    councilTaxOnlineAccount,
    councilTaxSupport,
    councilTaxDifficultyPaying,
  ]
};