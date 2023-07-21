import "./Footer2.css"

const Footer2 = () => {
    return (
        <div>
            <div className="container">
                <div className="box">
                    <ul>
                        <li className="info-heading">Mr Price South Africa</li>
                        <li className="contact-info">Get to know us</li>
                        <li className="contact-info">Mr Price App</li>
                        <li className="contact-info">Find a store</li>
                        <li className="contact-info">Gift Vouchers</li>
                        <li className="contact-info">Find Your Fit</li>
                        <li className="contact-info">Partner up with Mr Price</li>
                    </ul>
                </div>
                <div className="box">
                    <ul>
                        <li className="info-heading">Mr Price Money</li>
                        <li className="contact-info">Open an account</li>
                        <li className="contact-info">Application status</li>
                        <li className="contact-info">Pay my account</li>
                        <li className="contact-info">Airtime & Data</li>
                        <li className="contact-info">Mr Price Cellular</li>
                        <li className="contact-info">Mr Price Insurance</li>
                    </ul>
                </div>
                <div class="box">
                    <ul>
                        <li className="info-heading">Mr Price Group</li>
                        <li className="contact-info">About us</li>
                        <li className="contact-info">Investors</li>
                        <li className="contact-info">Sustainability</li>
                        <li className="contact-info">Careers</li>
                        <li className="contact-info">Terms & Conditions</li>
                        <li className="contact-info">Privacy policy</li>
                    </ul>
                </div>
                <div className="box">
                    <ul>
                        <li className="info-heading">Need help?</li>
                        <li className="contact-info">+27 64 584 1000</li>
                        <li className="contact-info">How to shop online</li>
                        <li className="contact-info">How to get Free Delivery</li>
                        <li className="contact-info">How to pay with Ozow</li>
                        <li className="contact-info">Delivery & Returns</li>
                        <li className="contact-info">Size guides</li>
                        <li className="contact-info">FAQ’s</li>
                        <li className="contact-info">Contact us</li>
                    </ul>
                </div>
            </div>
            <div className="social-container">
                <div className="social">
                    <div class="social-icon">
                        <img src="Facebook.png" alt="Facebook.png" />
                        <img src="Twitter.png" alt="Twitter.png" />
                        <img src="Instagram.png" alt="Instagram.png" />
                        <img src="Youtube.png" alt="Youtube.png" /> <br />
                    </div>
                    <p id="social-tag">Follow us <span>@mrpfashion</span></p>
                </div>
            </div>
            <div id='app-section'>
                <div class="box1">
                    <img src="Screenshot (53).png" alt="Sponser.png" />
                </div>
                <div class="box2">
                    <img src="google-playstore.svg" alt="google-playstore.svg" />
                    <img src="apple-store.svg" alt="apple-store.svg" />
                </div>
            </div>
            <div class="lastfooter-section">
                <div class="blockone">
                    <div class="extrainfo">
                        <p id="boldtext">Mr Price</p>
                        <p class="boldtext"><span>Mr Price Home</span></p>
                        <p class="boldtext"><span>Mr Price Money</span></p>
                        <p class="boldtext"><span>Mr Price Sport</span></p>
                        <p class="redtext"><span>Mr Price Foundation</span></p>
                        <p class="redtext"><span>Investors</span></p>
                        <p class="redtext"><span>Careers</span></p>
                    </div>
                    <div class="za">
                        <img src="za.svg" alt="za.svg" />
                    </div>
                </div>
                <div class="blockone">
                    <div class="copyright">
                        <p>© MRP 2023. All rights reserved. MRP Money is a division of the Mr Price Group Ltd and is an
                            authorised Financial Service and Credit Provider. FSP31450 and NCRCP46.</p>
                    </div>
                    <div class="chat">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2ZM14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25ZM17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z" fill="#ffffff"></path> </g></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer2;