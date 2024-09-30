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
    "Verint CRM Upgrade Coming Soon!",
    `
        <p><strong>We anticipate launching the new system on 18th November 2024.</strong></p>
        <p>To ensure a smooth transition and address any questions or issues that may arise, 
        we'll be providing <strong>two weeks of hyper support</strong> starting on 18th November 
        2024. Our dedicated support team will be available to assist you with any concerns.</p>
        <p><strong>Need help?</strong> Check out our helpful guides and resources:</p>
        <ul>
        <li><strong>FAQ:</strong> [Link to FAQ page]</li>
        <li><strong>How-to Guides:</strong> [Link to how-to guides]</li>
        <li><strong>Community Forums:</strong> [Link to community forums]</li>
        </ul>
        <p>We appreciate your patience and support as we work to enhance your experience.</p>
        <p><strong>Stay tuned for more updates!</strong></p>
    `,
    "Elliott Griffiths",
    "2024-08-15",
    "2024-08-15",
    "2024-12-31"
  ),
  new NewsArticle(
    "New Housing system Coming Soon!",
    `
        <p><strong>We anticipate launching the new system on 18th November 2024.</strong></p>
        <p>To ensure a smooth transition and address any questions or issues that may arise, 
        we'll be providing <strong>two weeks of hyper support</strong> starting on 18th November 
        2024. Our dedicated support team will be available to assist you with any concerns.</p>
        <p><strong>Need help?</strong> Check out our helpful guides and resources:</p>
        <ul>
        <li><strong>FAQ:</strong> [Link to FAQ page]</li>
        <li><strong>How-to Guides:</strong> [Link to how-to guides]</li>
        <li><strong>Community Forums:</strong> [Link to community forums]</li>
        </ul>
        <p>We appreciate your patience and support as we work to enhance your experience.</p>
        <p><strong>Stay tuned for more updates!</strong></p>
    `,
    "Elliott Griffiths",
    "2024-08-15",
    "2024-08-15",
    "2024-12-31"
  ),
];
