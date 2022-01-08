import React from 'react';

export default function Home() {
    const removeFullTrailer = () => {}

    return (
        <div>
            <div className="pusher">
                <div id="playerContainer" style={{display:'none'}}>
                    <i onClick={removeFullTrailer()} style={{position: 'absolute',right: '5%', top: '5%', color: 'white', fontSize: '50px !important'}} className="fa fa-times"></i>
                    <div id="player"></div>
                </div>
                <div className="join-our-community">
                    <button id="close">x</button>
                    <div className="join-header">Join our Community</div>
                    <a target="_blank" href="https://t.me/FletcherBoby"><i className="fa fa-telegram"></i> Telegram</a>
                </div>
                <a href="https://t.me/FletcherBoby" id="telegram"><span>Join our community</span></a>
                <section id="main">
                    <div className="container">
                        <div className="main-inner">
                            <div className="main-left">
                                <div className="logo">
                                    <img src="ggp/gamertoken/logo2.png" alt="GamerToken - Play. Earn. Trade." style={{display: 'none'}}/>
                                </div>
                                <h1>PLAY. EARN. TRADE.</h1>
                                <div className="main-content">
                                    <p>Gamingo Token creates a global marketplace for buying and selling unique in-game items on the blockchain. Gamers can finally earn meaningful rewards for in-game activities within a developer-friendly ecosystem.</p>
                                </div>
                                <div className="newsletter_signup">
                                    <h3>Stay up to date</h3>
                                    <p>Subscribe to our mailing list</p>
                                    <div id="mc_embed_signup" className="newsletter_signup">
                                        <form action="https://gamertoken.io/" method="post" name="submitContact" id="submitContact" className="validate" noValidate>
                                                <div id="mc_embed_signup_scroll">
                                                <input type="email" value="" name="email" className="email" id="email" placeholder="Your Email" required />
                                                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="hidden" id="list" name="list" value="1678514743"/></div>
                                                <div className="clear"><button value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn-round-gradient-white">Signup</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="main-right">
                                
                                <div className="main-btn-group">
                                </div>
                            </div>
                        </div>
                        <div id="what-is-gamertoken">
                            <h2 className="blue-green-gradient">What is Gamingo Token?</h2>
                            <div className="wigt-blocks">
                                <div className="wigt-box">
                                    <p>Gamingo Token is creating a marketplace for gamers to buy, sell, and design unique “non-fungible” in-game items.</p>
                                </div>
                                <div className="wigt-box">
                                    <p>Unique items, such as rare skins, are powered by the ERC-20 token standard, giving them their own unique digital signature and ownership history. They are issued in limited quantities. E.g. 1000 limited edition legendary skins in honor of an esports champion or popular Twitch streamer.</p>
                                </div>
                                <div className="wigt-box">
                                    <p>GTX, the transactional currency for the users of the Gamingo Token ecosystem, is based on the ERC-20 standard. It will also be used as a reward mechanism for gamers’ achievements, many people have made a profit with minimal effort. .</p>
                                </div>
                                <div className="wigt-box">
                                    <p>Integrating unique items is made easy for game developers via a universal API that offers multiple endpoints for game developers to seamlessly mint and integrate blockchain based items in their games. Developers can also choose to communicate with the API directly or integrate one of our upcoming SDKs.</p>
                                </div>					
                                <div className="wigt-pdf">
                                    <a className="btn-round wpd">white paper</a>
                                    <a className="btn-round opd">one pager</a>
                                </div>
                            </div>
                            <div className="token-rifle"></div>
                            <div className="token-info"></div>
                        </div>
                    </div>
                </section>
                
                <section id="use-cases">
                    <div className="container">
                        <div className="use-cases-header">
                            <h2 className="blue-green-gradient">Why GAME Token?</h2>
                        </div>
                        <div className="use-cases-content">			
                            <div className="use-case esports">
                                <h2>Esports & Influencers</h2>
                                <div className="description">
                                    <ul>
                                        <li>Be rewarded with legendary limited-edition memorabilia from your favorite esports teams for attending tournaments, gaming events or by supporting players’ livestreams. Bringing the idea of traditional sports collectibles into the digital world. </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <img src="ggp/gamertoken/slider/es-tempo-team.png" alt="" className="lazyload es-team"/>
                                    <img src="ggp/gamertoken/slider/es-fiesta-team.png" alt="" className="lazyload es-fiesta"/>
                                    <img src="ggp/gamertoken/slider/es-tempo-gun.png" alt="" className="lazyload es-gun"/>
                                </div>
                                <div className="background"></div>
                            </div>
                            <div className="use-case advertising">
                                <h2>Advertising & Branding</h2>
                                <div className="description">
                                    <ul>
                                        <li>Influencers and brands can issue a very limited series of skins and distribute them to their community. Marketing campaigns can be enhanced by rewarding players with exclusive skins for participating, which will help boost retention and provide incentives for new users to play.</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <img  alt="" className="lazyload ad-headphones"/>
                                    <img  alt="" className="lazyload ad-girl"/>
                                    <img  alt="" className="lazyload ad-rifle"/>
                                </div>
                                <div className="background"></div>
                            </div>
                            <div className="use-case collectibles">
                                <h2>Digital Collectibles</h2>
                                <div className="description">
                                    <ul>
                                        <li>You no longer need a vault to keep your in-game heirlooms safe. Blockchain technology allows you to truly own your gaming legacy by storing the use, ownership and transaction history of your non-fungible, unique items with complete security.</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <img  alt="" className="lazyload col-cards"/>
                                    <img  alt="" className="lazyload col-archer"/>
                                    <img  alt="" className="lazyload col-deck"/>
                                </div>
                                <div className="background"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="gamertoken-prototypes">
                    <h2 className="blue-green-gradient">THE GAME TOKEN PROTOTYPES</h2>
                    <div className="prototype-box">
                        <img className="white-prototype-box-img" src="ggp/gamertoken/proto-demo-wallet.png" alt=""/>
                        <div className="white-prototype-box">
                            <h3 className="proto-box-header">The demo wallet</h3>
                            <div className="proto-box-list">
                                    <p>View your transactions on the blockchain.</p>
                                    <p>Credited with free demo GTX.</p>
                            </div>
                            <p>
                                <a href="https://wallet.gamertoken.com/dialogs/signup/" className="proto-round-button">CREATE YOUR WALLET</a>
                            </p>
                        </div>
                    </div>
                    <div className="prototype-box prototype-box-market">
                        <img style={{paddingTop: '50px'}} className="white-prototype-box-img" src="ggp/gamertoken/proto-demo-marketplace.png" alt=""/>
                        <img id="sugar-squirrel-img" src="ggp/gamertoken/proto-sugar-squirrel.png" alt=""/>
                        <div className="white-prototype-box">
                            <h3 className="proto-box-header">The marketplace</h3>
                            <div className="proto-box-list">
                                    <p>Use GTX to buy and sell unique assets.</p>
                                    <p>Blockchain ensures your skins are securely represented.</p>
                                    <p>Claim true ownership of your digital assets.</p>
                                    <p>Gear up your character with purchased items.</p>
                            </div>
                            <p style={{paddingTop: '0px'}}>
                                <a href="https://wallet.gamertoken.com/dialogs/market/" className="proto-round-button">TEST MARKETPLACE</a>
                            </p>
                        </div>
                    </div>
                    <div className="prototype-box">
                        <img className="white-prototype-box-img" src="ggp/gamertoken/proto-demo-mmo.png" alt=""/>
                        <div className="white-prototype-box">
                            <h3 className="proto-box-header">The demo mmo</h3>
                            <div className="proto-box-list">
                                    <p>Earn GTX by completing quests and achievements.</p>
                                    <p>Purchase in-game currency with GTX.</p>
                            </div>
                            <p>
                                <a href="https://join-fiesta.crypto-mmo.com/" className="proto-round-button">PLAY DEMO</a>
                            </p>
                        </div>
                    </div>
                </div>
                <section id="ecosystem">
                    <div className="container">
                        <div className="ecosystem-header">
                            <h2 className="blue-green-gradient">Game Token Ecosystem</h2>
                        </div>
                        <div className="ecosystem-content">
                            <p>The digital assets marketplace will function as a traditional API, giving game industry participants the tools they need to buy, sell, and manage in-game assets. </p>
                            <div className="ecosystem-sp">
                                <div className="ecosystem-p">
                                    <ul>
                                        <li>True ownership of your digital assets</li>
                                        <li>Easier customer acquisition</li>
                                        <li>Unique, non-fungible digital assets</li>
                                        <li>Platform for trading & selling</li>
                                    </ul>
                                </div>
                                <div className="ecosystem-p">
                                    <ul>
                                        <li>Smart contracts powered in-game rewards</li>
                                        <li>Smart contracts for marketing partners</li>
                                        <li>Integrated wallet system</li>
                                        <li>Rewards for top asset designers</li>
                                    </ul>
                                </div>
                                <div className="ecosystem-p">
                                    <ul>
                                        <li>Enhanced security and reduced fraud</li>
                                        <li>Blockchain transaction security</li>
                                        <li>Developer friendly API</li>
                                        <li>Implementation support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ecosystem-vcon">
                                <video loop autoPlay playsInline muted>
                                    <source src="ggp/gamertoken/video/gamertoken-ecosystem.webm" type="video/webm"/>
                                    <source src="ggp/gamertoken/video/gamertoken-ecosystem.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="benefits">
                    <div className="container">
                        <div className="benefits-header">
                            <h2>Benefits of the Blockchain</h2>
                        </div>
                            <p>GAME Token aims to unify the gaming ecosystem and create an improved layer of trust for all participants. Gamers will gain the ability to earn tokens through in-game rewards and from selling and designing unique digital assets on the marketplace. It implies that these games have made it very easy to earn tokens. Many such opportunities allow users to make money online easily, and safely even from home. To find out the best methods to earn from home, check out this <a href="https://xn--privatkonomi-0jb.net/tjene-penger-nett/" style={{color:'orange'}}>tjene penger hjemmefra seriøst</a> guide. Make use of this opportunity for a steady income with the right effort. Developers and publishers will be able to enhance their digital economy, generate new streams of revenue, and crowdsource game content from the community. Thanks to its basis in blockchain, transparency and security are fundamental parts of the GAME Token ecosystem.</p>
                        <div className="benefits-content hero">
                            <div className="benefitsbox">
                                
                            </div>
                            <div className="benefitsbox">
                                <div className="benefits-gamers"></div>
                                <div className="box-header">Gamers</div>
                                <div className="box-content">
                                    <ul>
                                        <li><i className="bci g1"></i><span>Enhanced security and usability of valuable items</span></li>
                                        <li><i className="bci g2"></i><span>True ownership of in-game items and esports memorabilia</span></li>
                                        <li><i className="bci g3"></i><span>Trade items from different games on the Marketplace</span></li>
                                        <li><i className="bci g4"></i><span>Earn tokens for completing quests and leaderboard rankings</span></li>
                                        <li><i className="bci g5"></i><span>Proveable and traceable history of non-fungible items</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="benefitsbox">
                                <div className="benefits-developers"></div>
                                <div className="box-header">Developers and Publishers</div>
                                <div className="box-content">
                                    <ul>
                                        <li><i className="bci d1"></i><span>New Streams of revenue from item sales</span></li>
                                        <li><i className="bci d2"></i><span>Enhanced item infrastructure using non-fungible tokens</span></li>
                                        <li><i className="bci d3"></i><span>Tailor rewards to increase retention and playtime</span></li>
                                        <li><i className="bci d4"></i><span>Integrate the game in a larger ecosystem</span></li>
                                        <li><i className="bci d5"></i><span>Enhance existing marketing campaigns and boost ROI</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="roadmap">
                    <div className="container">
                        <div className="roadmap-content">
                            <h2 className="blue-green-gradient">Roadmap</h2>
                            <div className="roadmap-wrapper">
                                <div className="roadmap-step">
                                    <div className="head">
                                        <div className="blue-green-gradient">Q4/2021</div>
                                    </div>
                                    <div className="body">
                                        <h3>Pre-launch Phase</h3>
                                        <ul>
                                            <li>Research, Requirements and Concept of GAME Token</li>
                                            <li>Gamigo Group Partnership</li>
                                            <li>Definition, Ruleset and Logic of the GAME Token Mechanics</li>
                                            <li>Legal Counsel and Security Policies</li>
                                            <li>Foundation, Key Building Blocks and Basic Setup</li>
                                            <li>Token Generation Event Preparation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="roadmap-step">
                                    <div className="head">
                                        <div className="blue-green-gradient">Q1/2022</div>
                                    </div>
                                    <div className="body">
                                        <h3>Prototype Development</h3>
                                        <ul>
                                            <li>Setup and Configuration</li>
                                            <li>Smart Contracts Programming</li>
                                            <li>Rule Test, Verification and Adaptations</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="roadmap-step">
                                    <div className="head">
                                        <div className="blue-green-gradient">Q2/2022</div>
                                    </div>
                                    <div className="body">
                                        <h3>Minimum viable Product</h3>
                                        <ul>
                                            <li>Fiesta Online Fantasy MMO Integration of GAME Token</li>
                                            <li>Wallet and API Development</li>
                                            <li>Working Marketplace Demo</li>
                                            <li>ERC-20 Non-Fungible Item Implementation</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="roadmap-step">
                                    <div className="head">
                                        <div className="blue-green-gradient">Q3/2022</div>
                                    </div>
                                    <div className="body">
                                        <h3>Launch</h3>
                                        <ul>
                                            <li>Public Announcement</li>
                                            <li>Item Rental Feature Planning</li>
                                            <li>Scaling Solution Research</li>
                                        </ul>
                                        <h4>Marketplace Demo Updates:</h4>
                                        <ul className="subpoints">
                                            <li><i style={{fontSize: '15px'}} className="fa fa-clock-o" aria-hidden="true"></i> Live Testing of Rental Feature</li>
                                            <li><i style={{fontSize: '15px'}} className="fa fa-money" aria-hidden="true"></i> Transparent Fees</li>
                                            <li><i style={{fontSize: '15px'}} className="fa fa-filter" aria-hidden="true"></i> Item Filtering</li>
                                            <li><i style={{fontSize: '15px'}} className="fa fa-list-alt" aria-hidden="true"></i> Inventory Pages</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="roadmap-step">
                                    <div className="head">
                                        <div className="blue-green-gradient">Q4/2022</div>
                                    </div>
                                    <div className="body">
                                        <h3>Development</h3>
                                        <ul>
                                            <li>Proof of Concept for Sidechain Scaling Solution</li>
                                            <li>Universal API Development</li>
                                            <li>Esports Team Partnerships</li>
                                            <li>Community Building Roadshows</li>
                                            <li>GitHub Smart Contract Release</li>
                                            <li>Smart Contract Audit</li>
                                            <li>Production Sidechain Deployment</li>
                                            <li>Public Release</li>
                                            <li><h4>Marketplace Demo Updates:</h4>
                                                <ul className="subpoints">
                                                    <li><i style={{fontSize: '15px'}} className="fa fa-clock-o" aria-hidden="true"></i> Rental Feature Deployment</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="roadmap-step active">
                                    <div className="head">
                                        <div className="blue-green-gradient">Q4/2022</div>
                                    </div>
                                    <div className="body">
                                        <h3>Release and Expansion</h3>
                                        <ul>
                                            <li>Token Generation Event</li>
                                            <li>New Game Integrations</li>
                                            <li>Blockchain Explorer Development</li>
                                            <li>Game SDKs</li>
                                            <li>Item Auction Function</li>
                                            <li>Designer's Corner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="stay-up-to-date">
                    <div className="container">
                        <div id="partners-link" className="partners-header">
                            <h2>Stay up to date</h2>
                            <p style={{textAlign: 'center'}}>Subscribe to our Telegram Channel</p>
                            <a id="telegram-focus" target="_blank" href="https://t.me/FletcherBoby">Join Telegram</a>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    )
}