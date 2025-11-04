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
    "The NEC Housing system is ready to launch today.",
    `

    `,
    "Motolani Akinola",
    "2024-11-03",
    "2024-11-03",
    "2025-02-03"
  ),
   
];
