import logo from '../../images/logo.png'

// Create and inject a footer to the form
(() => {
    if (KDF.kdf().access === 'citizen') {
        // Create the footer HTML string
        const footerHTML = `
            <footer class="footer" role="contentinfo">
                <div class="az-links-container">
                    <nav role="navigation" class="az-links">
                        <a href="https://www.sheffield.gov.uk/utilities/a-z">A-Z of services</a>
                        <p class="skip">
                            <a href="#footer-content" class="button hide-screen focusable">
                                Skip the A to Z services
                            </a>
                        </p>
                        <ul class="az-menu">
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#a">
                                    <span>Services</span> A
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#b">
                                    <span>Services</span> B
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#c">
                                    <span>Services</span> C
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#d">
                                    <span>Services</span> D
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#e">
                                    <span>Services</span> E
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#f">
                                    <span>Services</span> F
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#g">
                                    <span>Services</span> G
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#h">
                                    <span>Services</span> H
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#i">
                                    <span>Services</span> I
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#j">
                                    <span>Services</span> J
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#k">
                                    <span>Services</span> K
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#l">
                                    <span>Services</span> L
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#m">
                                    <span>Services</span> M
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#n">
                                    <span>Services</span> N
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#o">
                                    <span>Services</span> O
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#p">
                                    <span>Services</span> P
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#q">
                                    <span>Services</span> Q
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#r">
                                    <span>Services</span> R
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#s">
                                    <span>Services</span> S
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#t">
                                    <span>Services</span> T
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#u">
                                    <span>Services</span> U
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#v">
                                    <span>Services</span> V
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#w">
                                    <span>Services</span> W
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#x">
                                    <span>Services</span> X
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#y">
                                    <span>Services</span> Y
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#z">
                                    <span>Services</span> Z
                                </a>
                            </li>
                            <li>
                                <a href="https://www.sheffield.gov.uk/content/sheffield/utilities/a-z.html#123">
                                    <span>Services</span> 123
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer-links-container" id="footer-content">
                    <ul id="legal-links">
                        <li>
                            <a href="https://www.sheffield.gov.uk/">
                                Site Home Page
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sheffield.gov.uk/utilities/footer-links/privacy-notice">
                                Privacy notice
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sheffield.gov.uk/utilities/footer-links/cookie-policy">
                                Use of cookies
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sheffield.gov.uk/utilities/footer-links/accessibility-statement">
                                Accessibility statement
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sheffield.gov.uk/utilities/footer-links/legal-notices">
                                Legal notices
                            </a>
                        </li>
                    </ul>
                    <ul id="other-links">
                        <li>
                            <a href="https://www.sheffield.gov.uk/job-vacancies">
                                Jobs and volunteering with Sheffield City Council
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sheffield.gov.uk/your-city-council/access-to-information">
                                Get access to information
                            </a>
                        </li>
                        <li>
                            <a href="http://www.welcometosheffield.co.uk/visit/events">
                                Sheffield events
                            </a>
                        </li>
                        <li>
                            <a href="https://haveyoursay.sheffield.gov.uk/">
                                Have your say - consultations
                            </a>
                        </li>
                        <li>
                            <a href="http://www.sheffieldnewsroom.co.uk">
                                News and press
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sheffield.gov.uk/utilities/footer-links/advertising">
                                Advertising
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sheffield.gov.uk/business">
                                Business
                            </a>
                        </li>
                    </ul>
                    <ul id="social-links">
                        <li>
                            <a href="https://twitter.com/sheffcouncil?lang=en" class="icon-twitter-after">
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/SheffCityCouncil/" class="icon-facebook-after">
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/SheffieldCCouncil" class="icon-youtube-after">
                                <span>YouTube</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sheffieldcitycouncil/" class="icon-instagram-after">
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://public.govdelivery.com/accounts/UKSHEFFIELD/subscriber/new" class="icon-mail-after">
                                <span>Email alerts</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="info">
                    <p class="modified"></p>
                    <p class="copyright">${new Date().getFullYear()} &copy; Copyright Sheffield City Council</p>
                </div>
                <div class="logo-container">
                    <a href="https://www.sheffield.gov.uk" title="Back to homepage" class="footer-logo-link">
                        <img class="footer-logo" src="${logo}" alt="Sheffield City Council Logo">
                    </a>
                </div>
                <div class="jump-container">
                    <a href="#top" id="jump-to-top">Top</a>
                </div>
            </footer>
        `;

        // Find the body element
        const body = document.getElementsByTagName("body")[0];

        // Insert the footer HTML at the end of the body
        body.insertAdjacentHTML("beforeend", footerHTML);
    }
})();