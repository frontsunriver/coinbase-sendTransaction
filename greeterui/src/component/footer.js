import React from "react";

export default function Footer () {
    return(
        <div>
            <footer>
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-logo">
                            <div className="logo"><img src="ggp/gamertoken/logo2.png" alt="GamerToken - Play. Earn. Trade." className="lazyload"/></div>
                        </div>
                        <div className="footer-links">
                            
                        </div>
                        <div className="footer-social">
                            <div className="social">
                                <h4>Connect with us</h4>
                                <ul>
                                    <li className="" data-tooltip="Telegram" data-inverted="" title="Telegram">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-telegram"></i></a>
                                    </li>
                                    <li className="" data-tooltip="Github" data-inverted="" title="Github">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-github"></i></a>
                                    </li>
                                    <li className="" data-tooltip="Twitter" data-inverted="" title="Twitter">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="" data-tooltip="Facebook" data-inverted="" title="Facebook">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li className="" data-tooltip="Medium" data-inverted="" title="Medium">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-medium"></i></a>
                                    </li>
                                    <li className="" data-tooltip="LinkedIn" data-inverted="" title="LinkedIn">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li className="" data-tooltip="Bitcoin Talk" data-inverted="" title="Bitcoin Talk">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-bitcoin"></i></a>
                                    </li>
                                    <li className="" data-tooltip="Reddit" data-inverted="" title="Reddit">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-reddit"></i></a>
                                    </li>
                                    
                                    <li className="" data-tooltip="Instagram" data-inverted="" title="Instagram">
                                        <a href="https://t.me/Fletcherboby" target="_blank"><i className="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="copyright">
                        <strong>Contact us <i className="fa fa-envelope"></i> <a className="Gamingotoken@gmail.com" >[Gamingotoken@gmail.com]</a></strong>
                        <span>Copyright <i className="fa fa-copyright"></i> 2022 The Laurel Foundry. All rights reserved</span>
                    </div>
                </div>
            </footer>
            <div className="ui mini white modal transition hidden">
                <div className="header">
                <img src="ggp/gamertoken/adobe-pdf-icon.png" alt=""/> <span>Download White Paper</span>
                </div>
                <div className="content">
                <p><input type="checkbox" id="wpd-cb"/> <span>By downloading GAMINGO White Paper I agree to the</span> <a href="documents/terms-conditions-gamertoke.pdf" target="_blank"><span>Terms & Conditions</span></a> <span>of the Laurel Foundry.</span></p>
                </div>
                <div className="mfooter">
                    <a href="documents/whitepaper-gamertoken.pdf" target="_blank" className="disabled" id="wpd">
                        <span>Download</span>
                    </a>
                </div>
            </div>
            <div className="ui mini one modal transition hidden">
                <div className="header">
                <img src="ggp/gamertoken/adobe-pdf-icon.png" alt=""/> Download One Pager
                </div>
                <div className="content">
                <p><input type="checkbox" id="opd-cb"/> <span>By downloading GAMINGO One Pager I agree to the</span> <a href="documents/terms-conditions-gamertoke.pdf" target="_blank"><span>Terms & Conditions</span></a> <span>of the Laurel Foundry.</span></p>
                </div>
                <div className="mfooter">
                    <a href="documents/onepager-gamertoke.pdf" target="_blank" className="button disabled" id="opd">
                        <span>Download</span>
                    </a>
                </div>
            </div>
        </div>
    )
}