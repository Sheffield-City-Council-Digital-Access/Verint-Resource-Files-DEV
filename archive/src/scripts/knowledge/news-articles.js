class NewsArticle {
  constructor(
    title,
    content,
    createdBy,
    createdDate,
    publishDate,
    archiveDate
  ) {
    this.title = title;
    this.content = content;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
    this.publishDate = publishDate;
    this.archiveDate = archiveDate;
  }
}

const newsArticles = [
   new NewsArticle(
    "Lorem Ipsum",
    `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
      anim id est laborum.
    `,
    "Nathan Smith",
    "2024-01-01",
    "2024-11-03",
    "2025-02-03"
  ),
   
];
