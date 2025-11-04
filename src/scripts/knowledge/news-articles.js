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
  <div hidden>
   new NewsArticle(
    "The NEC Housing system is ready to launch today.",
    `
        <h3>Key things to know</h3>
        <ul>
        <li>Users will get their login information and links to NEC Housing in the morning, in batches, starting with project team at 9am, Ambassadors at 10am and then all staff (batched) from 11am. They will get an email with details of how to log in, closely followed by another email with their first-login password.</li>
        <li>We’ll let you know if there are any changes to this timetable</li>
        <li>So that your staff can benefit from Single Sign On (not having to type in usernames and passwords after a first successful login), they must sign into NEC Housing for the first time from their own laptop.</li>
        <li>The <a href="https://sccextranet.sharepoint.com/sites/HousingandNeighbourhoodsDigitalRingbinder/SitePages/NECH-Ambassadors.aspx?web=1&xsdata=MDV8MDJ8TmF0aGFuLlNtaXRoQHNoZWZmaWVsZC5nb3YudWt8Y2E2NzI5MjRmYzI2NDkwOTU3MTcwOGRlMWFiYTA4MTR8YTFiYTU5Yjk3MjA0NDhkOGEzNjA3NzcwMjQ1YWQ0YTl8MHwwfDYzODk3NzU4MzQ2NDc3MTIwMHxVbmtub3dufFRXRnBiR1pzYjNkOGV5SkZiWEIwZVUxaGNHa2lPblJ5ZFdVc0lsWWlPaUl3TGpBdU1EQXdNQ0lzSWxBaU9pSlhhVzR6TWlJc0lrRk9Jam9pVFdGcGJDSXNJbGRVSWpveWZRPT18MHx8fA%3d%3d&sdata=ZXlaNUw0Z3lxNUdOSnlXcHpMV2NOTERXR1p4Q0VaL0xGVlM2WVNDcko4WT0%3d" target="_blank">NEC Housing Ambassadors</a> re-ran through on Friday the triage process for issues being raised and can help with signposting for login issues, training issues and comms to customers. They have access to a log which will improve visibility of issues.</li>
        <li>If there are issues you are notified about to help resolve, your Ambassador(s) will know the process and can help complete a 4me request on the IT Service Desk if needed.  They also have access to a special phone number to escalate 4me tickets, which is also available to Service Managers.</li>
        <li>The Service Desk form to use for NEC Housing issues is <a href="https://sheffieldcc.uk.4me.com/self-service/requests/new/provide_description?from=wizard&requested_for_id=353576&requestor_id=353576&service_id=219&service_instance_id=408&support_domain=sheffieldcc-it&template_id=4481" target="_blank">New Request | Sheffield City Council</a> and the form for users with incorrect access levels (this will be verified) is <a href="https://sheffieldcc.uk.4me.com/self-service/requests/new/provide_description?from=search&requested_for_id=21737&search_id=1192292&template_id=753&position=4
          " target="_blank">New Request | Sheffield City Council</a>. To escalate a 4me call dial 0114 205 6047. Please do not share this number widely as we are asking Ambassadors to use this number so that issues are properly logged. As a service manager you can use the number too, to speak about issues that have been raised already.</li>
        <li>For your information there is a page dedicated to the go-live period. Please visit this page to familiarise yourself: <a href="https://sccextranet.sharepoint.com/sites/HousingandNeighbourhoodsDigitalRingbinder/SitePages/First-weeks-of-NEC-Housing.aspx?xsdata=MDV8MDJ8TmF0aGFuLlNtaXRoQHNoZWZmaWVsZC5nb3YudWt8Y2E2NzI5MjRmYzI2NDkwOTU3MTcwOGRlMWFiYTA4MTR8YTFiYTU5Yjk3MjA0NDhkOGEzNjA3NzcwMjQ1YWQ0YTl8MHwwfDYzODk3NzU4MzQ2NDgwNDU2MXxVbmtub3dufFRXRnBiR1pzYjNkOGV5SkZiWEIwZVUxaGNHa2lPblJ5ZFdVc0lsWWlPaUl3TGpBdU1EQXdNQ0lzSWxBaU9pSlhhVzR6TWlJc0lrRk9Jam9pVFdGcGJDSXNJbGRVSWpveWZRPT18MHx8fA%3d%3d&sdata=c2xvanVkUXRsK2dWMzhvUjJzbGhEOWI2WEU0TEpqa0pncnpDQ3Z4QmFCND0%3d" target="_blank">First weeks of NEC Housing</a>.</li>
        <li>There is information about when the system will be available to customers on that page, as well as guidance on how a NEC Housing user can find a customer’s Application Reference</li>
        <li>We will not be able to write out to customers until all details have been loaded into NEC Housing and the system allocates them a new Application Reference (Registration Number).  This means that the letting cycle will start when we are sure there has been time for people to read their letter and use their registration number to log in, which will be around 20th November.</li>
        <li>You’ll be notified as soon as we have confirmation of when the first lettings cycle starts.</li>
        </ul>
    `,
    "Motolani Akinola",
    "2025-11-03",
    "2025-11-03",
    "2026-02-03"
  ),
  </div>
   
];
