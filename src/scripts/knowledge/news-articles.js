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
    "Lorem Ipsum!",
    `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor odio, ultrices in
          eleifend in, aliquet quis justo. Cras sapien felis, pharetra ac eros a, blandit mattis
          nulla. Sed vel tincidunt lectus. Donec consequat consectetur lorem, ac lacinia purus
          volutpat molestie. In cursus justo ac sem sagittis mollis. Etiam euismod cursus convallis.
          Pellentesque in est porta, iaculis tortor vel, rhoncus felis. Sed et enim nisl. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius ante ac convallis
          consectetur. Pellentesque volutpat ultricies quam nec pretium. Vestibulum feugiat nulla et
          ipsum ornare, auctor placerat lorem eleifend. Sed euismod dui eget nulla posuere rhoncus.
          Duis id finibus mi.
        </p>
        <p>
          Pellentesque sed egestas mauris. Quisque egestas sodales lobortis. Quisque condimentum non
          ligula eu vestibulum. Pellentesque dignissim tempus lobortis. Ut non diam convallis, dapibus
          ipsum non, maximus eros. Aenean pulvinar, tellus vel aliquam varius, magna nulla volutpat
          ligula, at malesuada dolor lectus vel arcu. Integer ac ipsum porta, blandit erat et, facilisis
          quam.
        <p>
    `,
    "Elliott Griffiths",
    "2024-08-15",
    "2024-08-15",
    "2024-12-31"
  ),
  new NewsArticle(
    "Verint CRM Upgrade Coming Soon!",
    `
        <p><strong>We anticipate the launching the new system by the end of May 2025.</strong></p>
        <p>To ensure a smooth transition and address any questions or issues that may arise, 
        we'll be providing <strong>two weeks of hyper support</strong> from the launch date.
        Our dedicated support team will be available to assist you with any concerns.</p>
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
    "2025-03-01",
    "2025-06-01"
  ),
  new NewsArticle(
    "My Account Coming Soon!",
    `
        <p><strong>We aare launching a customer account system during June 2025.</strong></p>
        <p>tbc...</p>
    `,
    "Elliott Griffiths",
    "2025-03-26",
    "2025-06-01",
    "2025-08-01"
  ),
  new NewsArticle(
    "New Housing system Coming Soon!",
    `
        <p><strong>We anticipate the launch of the new system during November 2025.</strong></p>
        <p>To ensure a smooth transition and address any questions or issues that may arise, 
        we'll be providing <strong>two weeks of hyper support</strong> from the launch date.
        Our dedicated support team will be available to assist you with any concerns.</p>
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
    "2025-03-26",
    "2025-09-01",
    "2025-10-01"
  ),
];
