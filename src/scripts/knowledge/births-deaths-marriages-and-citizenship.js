class CoreBDMaC {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

class ServiceBDMaC extends CoreBDMaC {
    constructor(id, name, description, subjects = []) {
        super(id, name, description);
        this.subjects = subjects;
    }
}

class MenuBDMaC extends CoreBDMaC {
    constructor(id, name, description, topics = []) {
        super(id, name, description);
        this.topics = topics;
    }
}

class ContentBDMaC extends CoreBDMaC {
    constructor(
        id,
        name,
        description,
        content,
        process,
        transfer,
        finish,
        meta,
        lastModified
    ) {
        super(id, name, description);
        this.content = content;
        this.process = process;
        this.transfer = transfer;
        this.finish = finish;
        this.meta = meta;
        this.lastModified = lastModified;
    }
}

class FormBDMaC extends CoreBDMaC {
    constructor(id, name, description, formName, meta, lastModified) {
        super(id, name, description);
        this.formName = formName;
        this.meta = meta;
        this.lastModified = lastModified;
    }
}

// --------- KEEP THIS AT THE TOP ------------------------------------------- \\
// --- v - ADD SCRIPT BELOW THIS LINE - v ----------------------------------- \\


// #region Births, Deaths, Marriages and Citizenship

const bookNoticeCivilPartnership = new ContentBDMaC(
    "bookNoticeCivilPartnership",
    "Book a Notice of Civil Partnership Appointment",
    "Learn how to book a Notice of Civil Partnership appointment, including requirements, fees, and necessary documentation.",
    `
    <p>Giving notice means making a declaration that you are both free enter into a civil partnership and fulfil other requirements prescribed by law.</p>
    <p>You need to ensure that you have given notice at least 28 days before the date. </p>
    <p>If you are giving notice for a venue in the Sheffield district, please have your booking ID ready (this was provided in your email sent when booking the venue). Please contact our ceremonies team if you do not have this and they will email you the booking ID directly <a href="mailto:ceremoniesteam@sheffield.gov.uk">ceremoniesteam@sheffield.gov.uk</a>.</p>
    <p>If you are booking a notice for a venue outside the Sheffield district you do not require a booking ID.</p>
    <p>The earliest date the notice of civil partnership can be given is 12 months before the civil partnership ceremony. We recommend a notice of civil partnership should be done between 3-6 months before your ceremony.</p>
    <p>Both must be over the age of 18.</p>
    <p>If both of you are British, Irish or you have European Union Settlement Scheme status (settled, pre-settled and you have applied for the status before 30 June 2021) you each need to give your notice of marriage in the Borough or District you are residing in, provided you have lived there for at least 8 days.</p>
    <p>If you are not British, Irish and do not have European Union Settlement Scheme status (settled, pre-settled and you have applied for the status before 30 June 2021) you must attend the notice of marriage appointment together either in the district you both live, or in either district (whichever is most convenient) if you live in different towns.</p>
    <p>You must know where your civil partnership will take place.</p>
    <p>The date of your civil partnership formation must be between 29 calendar days and 1 year of your appointment.</p>
    <p>Further information for notice of civil partnership please visit <a href="https://www.gov.uk/marriages-civil-partnerships/give-notice" target="_blank" rel="noopener noreferrer">https://www.gov.uk/marriages-civil-partnerships/give-notice</a>. <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Book%20a%20Notice%20of%20Civil%20Partnership%20Appointment'"> Send Link </button>
</p>
    <h3>Fees</h3>
    <p>There is a fee to give your notice of civil partnership:</p>
    <ul>
        <li>Monday to Friday: £42.00 each (for standard appointments)</li>
        <li>Monday to Friday: £57.00 each (for those who are not British, Irish and do not have EUSS status (settled, pre-settled and you have applied for the status before 30 June 2021))</li>
        <li>Saturday (limited availability): £60.00 each (for standard appointments only)</li>
        <li>Local foreign divorce for clearance: £55.00</li>
        <li>Referral to General Registration Office for clearance: £83.00</li>
    </ul>
    <p>Any fees are payable when you book your appointment and will be calculated on the choices you make.</p>
    <p>If you are unsure which fee applies to you, please contact <a href="mailto:ceremoniesteam@sheffield.gov.uk">ceremoniesteam@sheffield.gov.uk</a> for clarification.</p>
    <h3>Proof of name, address, marital status and nationality</h3>
    <p>You will need to bring:</p>
    <ul>
        <li>A valid passport for proof of your name, age and nationality</li>
        <li>Your driving licence, a utility bill dated within the last 3 months, or a bank statement dated within a month for proof of your address that includes either your full name or at least your initials</li>
        <li>Proof that a previous marriage or civil partnership has ended:
            <ul>
                <li>decree absolute of divorce / dissolution</li>
                <li>death certificate of former husband, wife or civil partner</li>
                <li>We must be able to link the document to you. A Decree NISI of Divorce or dissolution is not acceptable. If the document is in another language, we will need a translation into English.</li>
            </ul>
        </li>
    </ul>
    <h3>Change of Name</h3>
    <p>If you have changed your name by deed poll or statutory declaration you will need to provide those documents.</p>
    <p>If either you or your partner need an interpreter, you must bring one with you on the day of your appointment. Partners cannot interpret for each other.</p>

    <h3>Appointment</h3>
    <p>If you do not attend with the correct documents or without an interpreter when one is needed, you may not be able to give your notice of civil partnership and you will need to rebook and attend another day.</p>
    <p>Please arrive 5 to 10 minutes before your appointment. If you arrive late you may need to rebook.</p>
 
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Births", "Deaths", "Certificates", "Wedding", "Ceremony", "Partnership", "Civil"],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const bookNoticeOfMarriageApp = new ContentBDMaC(
    "bookNoticeOfMarriageApp",
    "Book a Notice of Marriage Appointment",
    "Learn how to book a Notice of Marriage appointment, including requirements, fees, and necessary documentation.",
    `
    <p>Giving notice means making a declaration that you are both free to marry and fulfil other requirements prescribed by law.</p>

    <ul>
    
        <li> You need to ensure that you have given notice at least 28 days before the date.</li>
        <li>If you are giving notice for a venue in the Sheffield district, please have your booking ID ready, this was provided in your email sent when booking the venue. Please contact our ceremonies team if you do not have this and they will email you the booking ID directly <a href="mailto:ceremoniesteam@sheffield.gov.uk">ceremoniesteam@sheffield.gov.uk</a>.</li>
        <li>If you are booking a notice for a venue outside the Sheffield district you do not require a booking ID.</li>
    
        <li>The earliest date the notice of marriage can be given is 12 months before the marriage ceremony. We recommend a notice of marriage should be done between 3-6 months before your ceremony.</li>
        <li>Both must be over the age of 18.</li>
        <li>If both of you are British, Irish or you have European Union Settlement Scheme status (settled, pre-settled and you have applied for the status before 30 June 2021) you each need to give your notice of marriage in the Borough or District you are residing in, provided you have lived there for at least 8 days.</li>
        <li>If you are not British, Irish and do not have European Union Settlement Scheme status (settled, pre-settled and you have applied for the status before 30 June 2021) you must attend the notice of marriage appointment together either in the district you both live, or in either district (whichever is most convenient) if you live in different towns.</li>
        <li>You must know where your marriage will take place.</li>
        <li>The date of your marriage must be between 29 calendar days and 1 year of your appointment.</li>
    </ul>
    <p>Further information for notice of marriage please visit <a href="https://www.gov.uk/marriages-civil-partnerships/give-notice" target="_blank" rel="noopener noreferrer">https://www.gov.uk/marriages-civil-partnerships/give-notice</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Marriages%20and%20civil%20partnerships'"> Send Link </button>
 </p>
    <h3>Fees</h3>
    <p>There is a fee to give your notice of marriage (additional fees may be incurred dependant on your choices)</p>
    <ul>
        <li>Monday to Friday: £42.00 each (for standard appointments).</li>
        <li>Monday to Friday: £57.00 each (for those who are not British, Irish and do not have European Union Settlement Scheme status (settled, pre-settled and you have applied for the status before 30 June 2021).</li>
        <li>Saturday (limited availability): £60.00 each (for standard appointments only).</li>
        <li>Local foreign divorce for clearance: £55.00.</li>
        <li>Referral to General Registration Office for clearance: £83.00.</li>
    </ul>
    <p>Any fees are payable when you book your appointment and will be calculated on the choices you make.</p>
    <p>If you are unsure which fee applies to you, please contact <a href="mailto:ceremoniesteam@sheffield.gov.uk">ceremoniesteam@sheffield.gov.uk</a> for clarification.</p>
    <h3>Proof of name, address, marital status and nationality</h3>
    <p>You will need to bring:</p>
    <ul>
        <li>a valid passport for proof of your name, age and nationalit.y</li>
        <li>your driving licence, a utility bill dated within the last 3 months, or a bank statement dated within a month for proof of your address that includes either your full name or at least your initials.</li>
        <li>Proof that a previous marriage or civil partnership has ended.</li>
        <li>decree absolute of divorce / dissolution.</li>
        <li>death certificate of former husband, wife or civil partner.</li>
    </ul>
    <p>We must be able to link the document to you. A Decree NISI of Divorce is not acceptable. If the document is in another language, we will need a translation into English.</p>
    <h3>Change of name</h3>
    <p>If you have changed your name by deed poll or statutory declaration you will need to provide those documents.</p>
    <p>If either you or your partner need an interpreter, you must bring one with you on the day of your appointment. Partners cannot interpret for each other.
    </p>
    <h3>Appointment</h3>
    <p>If you do not attend with the correct documents or without an interpreter when one is needed, you may not be able to give your notice of marriage and you will need to rebook and attend another day.</p>
    <p>Please arrive 5 to 10 minutes before your appointment. If you arrive late you may need to rebook.</p>
     `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Wedding", "Ceremony",],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const bookingARegistrarWedding = new ContentBDMaC(
    "bookingARegistrarWedding",
    "Booking a Registrar, Wedding or Civil Partnership in Sheffield",
    "Learn how to book a registrar, wedding, or civil partnership ceremony in Sheffield, including venues, fees, and additional services.",
    `
    <h3>Ceremony Bookings for Weddings or Civil Partnerships</h3>
    <p>Our integrated system allows you to choose and book a ceremony within 15 minutes. Once you have entered the process below the system will give you options to choose a venue either in the Town Hall or at an external licensed venue in the Sheffield district only (please read below for terms to book a venue). The choice will be given to for a Wedding or Civil Partnership during the booking process.</p>
    <p>Once you have booked you will be sent an email with your booking ID, this is your link to all payments for your ceremony.</p>
    <p>The options will show you availability between 90 days and 2 years.</p>
    <p>Our ceremonies team can arrange marriages or civil partnerships under 90 days for special reasons, you would need to contact our team at ceremoniesteam@sheffield.gov.uk</p>
    <h3>To form a marriage or civil partnership you must be:</h3>
    <ul>
        <li>18 years or older: <a href="https://www.legislation.gov.uk/ukpga/2022/28" target="_blank" rel="noopener noreferrer">https://www.legislation.gov.uk/ukpga/2022/28</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Legislation'"> Send Link </button>
</li>
    </ul>
    <h3>You must not:</h3>
    <ul>
        <li>Already be a civil partner or married.</li>
        <li>Be closely related (the Act gives details of prohibited relationships) <a href="https://www.legislation.gov.uk/ukpga/Geo6/12-13-14/76/contents" target="_blank" rel="noopener noreferrer">https://www.legislation.gov.uk/ukpga/Geo6/12-13-14/76/contents</a>.<button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Legislation%20Contents'"> Send Link </button> </li>
    </ul>
    <h3>Non-Refundable Booking Fees</h3>
    <p>When you have completed your ceremony booking you will be required to make payment, this is to reserve the date and time selected, please note this is a non-refundable fee.</p>
    <ul>
        <li>Town Hall Ceremonies- £30.00.</li>
        <li>External Sheffield Venues- £60.00 (reservation of registrars for your ceremony).</li>
    </ul>
    <h3>Weddings and Civil Partnerships in the Register Office and Ceremony Rooms</h3>
    <p>Sheffield Register Office and ceremony rooms are located in the magnificent Grade I listed Town Hall. This unique wedding venue is the perfect choice for couples looking to get married in Sheffield city centre. With reasonable rates, it is also one of the most inexpensive wedding venues in Sheffield.</p>
    <p>Our registrars will perform a ceremony that will be memorable and personal. You can add vows or readings (non-religious). Your ceremony can be formal, flamboyant, sophisticated, or even a singalong – it can be tailored to your individual wishes.</p>
    <h3>Mirror Mandela Room</h3>
    <a href="https://www.sheffield.gov.uk/births-deaths-marriages/town-hall-weddings " target="_blank" rel="noopener noreferrer">https://www.sheffield.gov.uk/births-deaths-marriages/town-hall-weddings </a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Weddings%20in%20the%20Town%20Hall%20Mandela%20Mirror%20Room'"> Send Link </button>
    <p>If you wish to book the room the Mirror Mandela Room, please contact Beth Pinder <a href="mailto:Beth.Pinder@sheffield.gov.uk">Beth.Pinder@sheffield.gov.uk</a> for further details and fees. </p>
    <p>Registrar fees- non-refundable booking fee of £60.00 and £304.00 to reserve Registrars for the ceremony.</p>
    <h3>Civil Partnerships</h3>
    <p>Civil partnership enables same sex couples to obtain legal recognition of their relationship under the Civil Partnership Act 2004. As of 2nd of December 2019, opposite sex couples can also form a civil partnership.  <a href="https://www.legislation.gov.uk/ukpga/2004/33/contents" target="_blank" rel="noopener noreferrer"> https://www.legislation.gov.uk/ukpga/2004/33/contents</a></https:> <br> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Civil%20Partnership%20Act%202004'"> Send Link </button></p>
    <p>Registration of a civil partnership provides couples with rights and obligations which are similar to those acquired through marriage.</p>
    <p>The Civil Partnership will be registered once each of you have signed the civil partnership schedule in the presence of the registrar and two witnesses.</p>
    <p>A ceremony is not required, but we would be pleased to offer a ceremony if you so wish. Information will be emailed once a ceremony is booked.</p>
    <h3>Our Ceremony rooms and prices:</h3>
    <ul>
        <li>
            <strong>Loxley Room</strong>
            <ul>
                <li>This is a small ceremony room for up to sixteen guests and children under 2 years of age sitting on an appropriate adult's knee. It is available Monday to Friday for £198 (including registrars and one marriage or civil partnership certificate). </li>
            </ul>
        </li>
    
        <li>
            <strong>Arundel, Norfolk, and Hallam Rooms</strong>
            <ul>
                <li>The Arundel and Norfolk rooms are dressed and hold up to 45 guests.</li>
                <li>The Hallam room is dressed and holds up to fifty-six guests.</li>
                <li>These rooms are available Monday to Saturday for £304 (including registrars and one marriage or civil partnership certificate).</li>
                <li>The guest capacity numbers do not include the couple or registrars. They do include a photographer, and children over 2 years of age.</li>
            </ul>
        </li>
    
        <li>
            <strong>Statutory Register Office</strong>
            <ul>
                <li>The ceremony will be held in our designated Register Office Ceremony Room.</li>
                <li>The Register Office is available the third Wednesday of every month for couples who just want to attend with their two witnesses.</li>
                <li>This costs a statutory fee of £68.50 (including registrars and one marriage or civil partnership certificate).</li>     
            </ul>
        </li>
    </ul>
    <p>PICTURES WITH DROP DOWN AS CURRENTLY ON WEBSITE</p>
    <h3>Booking a Registrar for a Licensed Sheffield Venue</h3>
    <p>Venues outside of the Sheffield district cannot be conducted by our registrars you should contact the district council where you wish to have the ceremony.</p>
    <p>Sheffield Venue’s must only be booked through our system once you have confirmed with the venue a time and date for your ceremony. When meeting with the venue ceremony team it is advisable to book both the venue and a registrar at the same time as they will have access to match dates and times.</p>
    <p>When booking a ceremony for a venue outside of the Town Hall only licensed venues will be shown. If the venue you choose is not on the list, they do not have a valid license to conduct a legal wedding or civil partnership. Please contact ceremoniesteam@sheffield.gov.uk for further information.</p>
    <p>If you are getting married in Sheffield or forming a civil partnership, whether in the Town Hall or elsewhere, you need to book registrars to conduct the ceremony.</p>
    <p>It isn’t necessary to have a celebrant to attend, unless you specifically wish to do so, as this will add considerably to your costs and our registrars offer a wonderful service when attending any ceremony. Celebrants are not authorised to perform legal ceremonies.</p>
    <h3>Fees</h3>
    <ul>
        <li>Monday to Friday: £482</li>
        <li>Saturday and Sunday: £550</li>
        <li>Bank Holiday: £690</li>
    </ul>
    <p>(Please note these fees are to reserve registrars for your ceremony, see your venue ceremony team for their pricings)</p>
    <h3>Certificates</h3>
    <p>Marriage and civil partnership certificates cost £12.50 at the point of registration (before the ceremony). Your first certificate will be sent out within 5-10 working days of the office receiving your completed marriage or civil partnership schedule. If you require more than 1 certificate, please visit our final payment section for details.</p>
    <p>Ceremonies conducted in religious venues do not receive the first certificate free, please visit our final payment section for details.</p>

  `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Wedding", "Ceremony",],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const copyCertificates = new ContentBDMaC(
    "copyCertificates",
    "Copy Certificates ",
    "Request copy certificates for births, marriages, civil partnerships, or deaths registered in Sheffield, with standard or urgent processing options.",
    `
    <p>We can only take request copies of certificates for registrations that took place in Sheffield.</p>
    <p>You can request copy certificates via <a href="https://www.sheffield.gov.uk/births-deaths-marriages/copy-certificates" target="_blank" rel="noopener noreferrer">https://www.sheffield.gov.uk/births-deaths-marriages/copy-certificates</a>.<button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Birth%20death%20marriage%20and%20civil%20partnership%20certificates'"> Send Link </button>
</p>
    <p>There is a standard fee of £13.50 for these:</p>
    <ul>
        <li>full birth certificate.</li>
        <li>full civil partnership certificate.</li>
        <li>extract civil partnership certificate.</li>
        <li>marriage certificate.</li>
        <li>death certificate.</li>
    </ul>
    <p>Your certificate will be posted to you in 15 working days, please allow 3 days for delivery.</p>
    <h3>Urgent applications</h3>
    <p>These cost £38.50 including the cost of first-class postage, dispatched within 24 hours.</p>
 
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Births", "Deaths", "Certificates"],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const finalPayment = new ContentBDMaC(
    "finalPayment",
    "Final Payment",
    "Complete the final payment for your Sheffield ceremony, including certificate details and deadlines, using your booking ID",
    `
    <h3>Final Ceremony Payment</h3>
    <p>The final step to your ceremony is to make the final payment, you can make a final payment for your ceremony by using the Booking ID.  This booking ID was given when booking the ceremony after 29th of October 2024.</p>
    <p>If you booked your ceremony before 29th of October 2024 and do not have this, please contact our ceremonies team for them to email you the details, <a href="mailto:ceremoniesteam@sheffield.gov.uk">ceremoniesteam@sheffield.gov.uk</a>.</p>
    <p>A final payment reminder email will be sent to you 4 weeks before your ceremony which will include the booking ID.</p>
    <p>Final payment must be paid in full before and no later than 2 weeks before the ceremony date, if payment is not made it this may postpone the ceremony and may need to be rescheduled.</p>
    <h3>Certificates</h3>
    <p>Marriage and civil partnership certificates cost £12.50 at the point of registration (before the ceremony). Your 1st certificate will be sent out within 5-10 working days of the office receiving your completed marriage or civil partnership schedule. If you require another certificate, please follow the link below to order one. The following details must be inputted, date of ceremony, venue and names on the schedule (maiden name).</p>
    <p>Ceremonies conducted in religious venues do not receive the 1st certificate free, please use the link below to purchase another certificate if you require one.</p>
    <p><a href="https://ip.e-paycapita.com/AIP/itemSelectionPage.do?link=showItemSelectionPage&siteId=266&languageCode=EN&source=AIP&fc=30&sc=Reg&ic=Cert11 " target="_blank" rel="noopener noreferrer">https://ip.e-paycapita.com/AIP/itemSelectionPage.do?link=showItemSelectionPage&siteId=266&languageCode=EN&source=AIP&fc=30&sc=Reg&ic=Cert11 </a><button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Marriage%20certificate%20at%20point%20of%20registration'"> Send Link </button></p>
    <p>Copies of certificates can be purchased after the ceremony for £13.50 each at <a href="https://www.sheffield.gov.uk/births-deaths-marriages/copy-certificates " target="_blank" rel="noopener noreferrer">https://www.sheffield.gov.uk/births-deaths-marriages/copy-certificates </a> <br> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Birth%20death%20marriage%20and%20civil%20partnership%20certificates'"> Send Link </button>
</p>
    <h3>A message from our ceremonies team</h3>
    <p><i>We hope you have a wonderful day and a long and happy life together. We would love to have your feedback if you wish pass on how your ceremony was it would great to hear how we are doing. </i></p>
    <p>Please send us the details to <a href="mailto:ceremoniesteam@sheffield.gov.uk">ceremoniesteam@sheffield.gov.uk</a></p>
 
  `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["", ""],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const licensedWeddingVenues = new ContentBDMaC(
    "licensedWeddingVenues",
    "Licensed Wedding Venues in Sheffield",
    "Explore licensed wedding venues in Sheffield, including booking a registrar, fees, and certificate options.",
    `
    <p>You you can find information about licensed wedding venues in Sheffield at <a href="https://www.sheffield.gov.uk/births-deaths-marriages/licensed-wedding-venues" target="_blank" rel="noopener noreferrer">https://www.sheffield.gov.uk/births-deaths-marriages/licensed-wedding-venues</a> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Licensed%20wedding%20venues%20in%20Sheffield'"> Send Link </button></p>
    <p>New link will be finalised soon for new intagrated payments we will need to update thisprocess when confirmed going live</p>
    <p>Sheffield has some of the best wedding venues in Yorkshire. From our own Register Office and Town Hall rooms to hotels, galleries theatres and museums and everything in between, there's a venue to suit every couple.</p>
    <h3>Booking a Registrar</h3>
    <p>If you're getting married in Sheffield you need to book a registrar to conduct the ceremony.</p>
    <p>You will can to booking a registrar via <a href="https://www.sheffield.gov.uk/births-deaths-marriages/book-registrar" target="_blank" rel="noopener noreferrer">https://www.sheffield.gov.uk/births-deaths-marriages/book-registrar</a>.<button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Final%20ceremony%20payment'"> Send Link </button> </p>
    <p>You can provisionally book a registrar up to 2 years ahead of the ceremony but it's your responsibility to contact the venue to check their availability.</p>
    <h3>Fees</h3>
    <ul>
        <li>Monday to Friday: £482.00</li>
        <li>Saturday and Sunday: £550.00</li>
        <li>Bank Holiday: £690.00</li>
    </ul>
    <h3>Booking fee</h3>
    <p>There will be a non-refundable booking fee of £60 to secure a date and time (this is additional to any other fees). </p>
    <h3>Certificates</h3>
    <p>Marriage and civil partnership certificates cost £12.50 on the day of the ceremony. Copies of certificates can be bought at an extra charge."</p>
 
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Wedding", "Ceremony"],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const reRegisterABirth = new ContentBDMaC(
    "reRegisterABirth",
    "Make an appointment to re-register a birth",
    "Make an appointment to re-register a birth.",
    `
  <p> Takes to <a href src= "https://www.sheffield.gov.uk/births-deaths-marriages/register-birth">https://www.sheffield.gov.uk/births-deaths-marriages/register-birth </a></p>
  <br> 
  <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20or%20reregister%20a%20birth'"> Send Link </button>
    
    `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: ['register', 'birth', 'rgister', 'burth'],
        categories: ["Registrars", "Registry Office", "Register Office", "Births"],
    },
    { date: "04/12/2024", name: "Andy Walker" }
);

const registerABirthAndDeath = new ContentBDMaC(
    "registerABirthAndDeath",
    "Register a Birth and Death",
    "Register a birth and death",
    `
    <p> https://www.sheffield.gov.uk/births-deaths-marriages/register-death <a href src= "https://www.sheffield.gov.uk/births-deaths-marriages/register-death">form </a></p> 	<br> <button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20or%20reregister%20a%20birth'"> Send Link </button>

  <p> https://www.sheffield.gov.uk/births-deaths-marriages/register-death <a href src= "https://www.sheffield.gov.uk/births-deaths-marriages/register-death">form </a></p> <br>	<button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register%20a%20death'"> Send Link </button>

  `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Births", "Deaths"],
    },
    { date: "16/10/2024", name: "Joe Nixon" }
);

const registerADeath = new ContentBDMaC(
    "registerADeath",
    "Register a Death",
    "Learn how to register a death in Sheffield, including requirements, process, and associated costs",
    `
    <p>You are legally required to register a death within 5 days from when the Coroner or Medical Examiner has passed the relevant paperwork to the Register Office. The registration should take place in the district where the person died.
    </p>
    <h3>Changes to the death certification process</h3>
    <p>Regulations introducing changes to the death certification process were laid before Parliament on 15 April 2024 and will come into force on 9 September 2024.
    </p>
    <p>The reforms change the way in which the causes of deaths are scrutinised and certified in England and Wales with the introduction of a statutory medical examiner system.
    </p>
    <p>During this process you may be contacted by the Medical Examiners Office. For further information regarding the deceased you should contact the hospital or GP dealing with the death.
    </p>
    <p>For more information about the death reform certification process please visit the <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer">https://www.gov.uk/</a> website.
    <br>	<button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Gov%20UK'"> Send Link </button>

    </p>
    <h3>Who can register a death</h3>
    <p>Usually, a relative or long-term partner (living with the deceased) of the person who has died can register death, but others can also do this. This can be:</p>
    <ul>
        <li>Someone present at the death</li>
        <li>A person arranging the funeral</li>
        <li>A personal representative of the deceased (solicitor, family friend or funeral director)</li>
        <li>An official from the hospital or the manager of where the death took place (for example a care home)</li>
    </ul>
    <h3>How to register a death</h3>
    <p>Select a date to speak with the registrar, who will help you to make an appointment for registering the death.</p>
    <h3>What happens next</h3>
    <p>On your chosen date, the registrar will call you to check the paperwork and the deceased’s details. You don't need to worry about the relevant medical paperwork, as the coroner or medical examiner will send us a copy.</p>
    <p>The registrar will then arrange for you to attend the Register Office the following day. This is for you to check and sign the registration paperwork and complete the registration.</p>
    <p>If required, at this appointment you will receive the relevant paperwork for the funeral director, the Tell Us Once registration code and any death certificates</p>
    <h3>Tell us once service</h3>
    <p>When you register a death we will notify our other services and certain Government agencies of the person’s death. This is a free voluntary service and means fewer phone calls, letters or emails for you.</p>
    <h3>Cost</h3>
    <ul>
        <li>Registration is free of charge.</li>
        <li>Certified copies are £12.50 each at the time of registration.</li>
        <li>Copy certificates may be obtained at a later date for the standard fee of £13.50 each.</li>
    </ul>
  `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["", ""],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const registerAStillbirth = new ContentBDMaC(
    "registerAStillbirth",
    "Register a Stillbirth",
    "Register a stillbirth",
    `
  <p> Takes to <a href src= "https://www.sheffield.gov.uk/births-deaths-marriages/register-stillbirth">https://www.sheffield.gov.uk/births-deaths-marriages/register-stillbirth</a> <br>	<button onclick="window.location.href='https://sheffielddev.form.ukpreview.empro.verintcloudservices.com/form/launch/send_link_to_service?sel_service=Register a stillbirth'"> Send Link </button>
</p> 
  `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Births", "Deaths"],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

const rescheduleAnAppointment = new ContentBDMaC(
    "rescheduleAnAppointment",
    "Reschedule an Appointment",
    "Find out how to reschedule your appointment.",
    `
  <p>To reschedule an appointment email: <a href="mailto:ceremoniesteam@sheffield.gov.uk">ceremoniesteam@sheffield.gov.uk</a></p>
 
  `,
    { buttonLabel: "", formName: "" },
    { typeKey: "register_office_information_requested" },
    { typeKey: "register_office_information_provided" },
    {
        type: "",
        keywords: [],
        categories: ["Registrars", "Registry Office", "Register Office", "Births", "Deaths", "Certificates", "Wedding", "Ceremony",],
    },
    { date: "11/11/2024", name: "Joseph Coupland" }
);

// --- ^ - ADD SCRIPT ABOVE THIS LINE - ^ ----------------------------------- \\
// --------- KEEP THIS AT THE BOTTOM ---------------------------------------- \\

const birthsDeathsMarriagesAndCitizenship = new ServiceBDMaC(
    "birthsDeathsMarriagesAndCitizenship",
    "Births, Deaths, Marriages and Citizenship",
    `Register Office, naming ceremonies, burials and memorials, civil partnerships, citizenship ceremonies, order copies of certificates…`,
    [ 
        bookNoticeCivilPartnership,
        bookNoticeOfMarriageApp,
        bookingARegistrarWedding,
        copyCertificates,
        finalPayment,
        licensedWeddingVenues,
        reRegisterABirth, 
        registerABirthAndDeath,
        registerADeath,
        registerAStillbirth,
        rescheduleAnAppointment
    ]
);

// #endregion Births, Deaths, Marriages and Citizenship
