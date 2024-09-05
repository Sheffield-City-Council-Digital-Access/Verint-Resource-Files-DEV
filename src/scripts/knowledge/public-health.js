// class Core {
//   constructor(id, name, description) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//   }
// }

// class Service extends Core {
//   constructor(id, name, description, subjects = []) {
//     super(id, name, description);
//     this.subjects = subjects;
//   }
// }

// class Menu extends Core {
//   constructor(id, name, description, topics = []) {
//     super(id, name, description);
//     this.topics = topics;
//   }
// }

// class Content extends Core {
//   constructor(id, name, description, content, process, transfer, finish, meta, lastModified) {
//     super(id, name, description);
//     this.content = content;
//     this.process = process;
//     this.transfer = transfer;
//     this.finish = finish;
//     this.meta = meta;
//     this.lastModified = lastModified;
//   }
// }

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\



// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const publicHealth = new Service(
  'publicHealth',
  'Public Health',
  `Food safety, hygiene ratings, training, disease, health and wellbeing, immunisation, maternity care, flooding…`,
  []
);
