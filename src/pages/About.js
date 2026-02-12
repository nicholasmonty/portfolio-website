import React, { useState } from "react";
import "./About.css";

function AboutCard({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <button
            type="button"
            className={`uiCard ${open ? "isOpen" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
        >
            <div className="uiAlign" aria-hidden="true">
                <span className="uiRed" />
                <span className="uiYellow" />
                <span className="uiGreen" />
            </div>

            <h3 className="uiCardTitle">{title}</h3>

            <div className="uiCardBody">
                {children}
            </div>

            <div className="uiHint">{open ? "Tap to collapse" : "Tap to expand"}</div>
        </button>
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

            {/* Cards go here (under About copy, above footer) */}
            <div className="aboutCardsWrap">

                <p className="aboutCardsHint">
                    Hover to expand • Tap on mobile
                </p>

                <div className="aboutCards">
                <AboutCard title="Design + Clarity">
                        I simplify complex ideas into clean layouts, clear messaging, and
                        user flows that feel effortless.
                    </AboutCard>

                    <AboutCard title="Strategy + Growth">
                        I focus on outcomes—conversion, retention, and brand trust—so the
                        site doesn’t just look good, it performs.
                    </AboutCard>

                    <AboutCard title="Build + Launch">
                        I ship modern, responsive sites with performance and polish—then
                        refine based on real behavior and feedback.
                    </AboutCard>
                </div>

                <p className="aboutCardsNote">
                    These three areas guide how I approach projects: simplify the experience,
                    align with business goals, and build something that performs in the real world.
                </p>
            </div>
        </section>
    );
}
