import React, { useState } from "react";
import "./About.css";
import lambdaCrest from "../assets/lambda-crest.png";
import stBaldricksLogo from "../assets/stbaldricks-logo.png";

function ExpandCard({ children }) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }
    };

    return (
        <div
            className={`aboutBrowserCard ${open ? "isOpen" : ""}`}
            role="button"
            tabIndex={0}
            aria-expanded={open}
            onClick={toggle}
            onKeyDown={handleKeyDown}
        >
            {children}
        </div>
    );
}

export default function About() {
    return (
        <section className="container aboutWrap" id="about">
            <h2 className="aboutTitle">About</h2>

            <div className="aboutContent">
                <p className="aboutLead">
                    I believe design and digital strategy are powerful tools for growth.
                </p>

                <p>
                    Strong web design clarifies complexity, aligns messaging, and turns
                    difficult ideas into simple, usable experiences. When done well,
                    digital marketing and development work together seamlessly.
                </p>

                <p>
                    I focus on building modern websites that combine thoughtful design
                    with measurable performance — ensuring brands not only look good
                    online, but grow.
                </p>

                <p>
                    My goal is to create digital experiences that serve both people and
                    business objectives.
                </p>
            </div>

            <div className="aboutCardsWrap">
                <p className="aboutCardsHint" />

                <div className="aboutCards aboutCards--two">

                    {/* Lambda Chi */}
                    <ExpandCard>
                        <div className="aboutBrowserTabsHead" aria-hidden="true">
                            <div className="aboutTabOpen">
                                <span>Lambda Chi Alpha</span>
                                <span className="aboutCloseTab">×</span>
                                <div className="aboutRoundedL">
                                    <div className="aboutMaskRound" />
                                </div>
                                <div className="aboutRoundedR">
                                    <div className="aboutMaskRound" />
                                </div>
                            </div>

                            <div className="aboutWindowOpt" aria-hidden="true">
                                <button type="button" tabIndex={-1}>—</button>
                                <button type="button" tabIndex={-1}>□</button>
                                <button type="button" tabIndex={-1} className="aboutWindowClose">×</button>
                            </div>
                        </div>

                        <div className="aboutHeadBrowser" aria-hidden="true">
                            <button type="button" tabIndex={-1}>←</button>
                            <button type="button" tabIndex={-1}>→</button>
                            <input readOnly value="https://lambdachi.org" tabIndex={-1} />
                            <span className="aboutStar">★</span>
                        </div>

                        <div className="aboutBrowserBody aboutBrowserBody--lambda">
                            <img
                                src={lambdaCrest}
                                alt="Lambda Chi Alpha Crest"
                                className="aboutLambdaImage"
                            />

                            <h3>Leadership & Brotherhood</h3>

                            <p>
                                As an active member of Lambda Chi Alpha, I developed leadership,
                                accountability, and collaboration skills that continue to shape
                                how I approach teamwork and responsibility.
                            </p>
                        </div>
                    </ExpandCard>

                    {/* St. Baldrick's */}
                    <ExpandCard>
                        <div className="aboutBrowserTabsHead" aria-hidden="true">
                            <div className="aboutTabOpen">
                                <span>St. Baldrick's Foundation</span>
                                <span className="aboutCloseTab">×</span>
                                <div className="aboutRoundedL">
                                    <div className="aboutMaskRound" />
                                </div>
                                <div className="aboutRoundedR">
                                    <div className="aboutMaskRound" />
                                </div>
                            </div>

                            <div className="aboutWindowOpt" aria-hidden="true">
                                <button type="button" tabIndex={-1}>—</button>
                                <button type="button" tabIndex={-1}>□</button>
                                <button type="button" tabIndex={-1} className="aboutWindowClose">×</button>
                            </div>
                        </div>

                        <div className="aboutHeadBrowser" aria-hidden="true">
                            <button type="button" tabIndex={-1}>←</button>
                            <button type="button" tabIndex={-1}>→</button>
                            <input readOnly value="https://www.stbaldricks.org" tabIndex={-1} />
                            <span className="aboutStar">★</span>
                        </div>

                        <div className="aboutBrowserBody aboutBrowserBody--lambda">
                            <img
                                src={stBaldricksLogo}
                                alt="St. Baldrick's Foundation Logo"
                                className="aboutLambdaImage"
                            />

                            <h3>Fundraising & Impact</h3>

                            <p>
                                I raised <strong>$1,000+</strong> for childhood cancer research
                                through the St. Baldrick’s Foundation by leading outreach efforts,
                                mobilizing peers, and driving donor engagement within the community.
                            </p>
                        </div>
                    </ExpandCard>

                </div>

                <p className="aboutCardsNote">
                    Experiences that shaped how I lead, collaborate, and deliver real results.
                </p>
            </div>
        </section>
    );
}
