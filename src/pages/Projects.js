import React from "react";
import "./Projects.css";

import tampaSite from "../assets/phone.png";
import shuffle from "../assets/shuffle.png";
import prj3 from "../assets/prj3.png";
import shuffleReport from "../assets/Marketing Strategy Report.pdf";

const NAV_OFFSET = 72;

const scrollToId = (id) => {
    const target = document.getElementById(id);
    const scroller = document.querySelector(".pageScroller");
    if (!target || !scroller) return;

    scroller.scrollTo({
        top: target.offsetTop - NAV_OFFSET,
        behavior: "smooth",
    });
};

export default function Projects() {
    return (
        <div className="container projectsWrap">
            <h2 className="sectionTitle">Projects</h2>

            {/* Project 1 */}
            <div className="caseCard">
                <div className="caseLeft">
                    <p className="caseOrg">TAMPA PALMS PROFESSIONAL CENTER</p>
                    <h3 className="caseTitle">
                        Website redesign for Tampa Palms Professional Center
                    </h3>

                    <p className="caseDesc">
                        Redesigned and built a responsive website with a team of four.
                        Collaborated in Figma, then implemented the final design with HTML,
                        CSS, and JavaScript. Connected to Supabase and deployed with Vercel.
                    </p>

                    <div className="tagRow">
                        <span className="tag">Figma</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">HTML &amp; CSS</span>
                    </div>

                    <div className="btnRow">
                        <a
                            className="btnPrimary"
                            href="https://www.figma.com/proto/VhFMR0YUNcpmGCmAs9tNZU/Wireframe?node-id=0-1&t=SvW5SE4Wll1zUQ8i-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Wireframe
                        </a>

                        <a
                            className="btnGhost"
                            href="https://tppcgroup4.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className="caseRight">
                    <img className="caseImg" src={tampaSite} alt="Tampa Palms preview" />
                </div>
            </div>

            {/* Project 2 */}
            <div className="caseCard">
                <div className="caseLeft">
                    <p className="caseOrg">ST. PETE SHUFFLEBOARD CLUB</p>
                    <h3 className="caseTitle">
                        St. Pete Shuffleboard Club marketing revamp
                    </h3>

                    <p className="caseDesc">
                        Marketing overhaul for one of the world’s longest-established
                        shuffleboard clubs.
                    </p>

                    <div className="tagRow">
                        <span className="tag">Excel</span>
                        <span className="tag">Qualtrics</span>
                        <span className="tag">PowerPoint</span>
                    </div>

                    <div className="btnRow">
                        <a
                            className="btnPrimary"
                            href={shuffleReport}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Written Report
                        </a>

                        <a
                            className="btnGhost"
                            href="https://stpeteshuffle.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Club Site <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className="caseRight">
                    <img className="caseImg" src={shuffle} alt="Shuffleboard preview" />
                </div>
            </div>

            {/* Project 3 */}
            <div className="caseCard">
                <div className="caseLeft">
                    <p className="caseOrg">PERSONAL PORTFOLIO</p>
                    <h3 className="caseTitle">Personal portfolio website</h3>

                    <p className="caseDesc">
                        Designed and built this portfolio to showcase my work, process, and
                        web development skills in a clean, responsive format.
                    </p>

                    <div className="tagRow">
                        <span className="tag">React</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">CSS</span>
                    </div>

                    <div className="btnRow">
                        <a
                            className="btnPrimary"
                            href="https://github.com/nicholasmonty/portfolio-website"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View GitHub
                        </a>

                        <button
                            className="btnGhost"
                            type="button"
                            onClick={() => scrollToId("home")}
                        >
                            Back to Home <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>

                <div className="caseRight">
                    <img className="caseImg" src={prj3} alt="Portfolio preview" />
                </div>
            </div>
        </div>
    );
}
