import React from "react";
import "./Home.css";

const NAV_OFFSET = 72;

export default function Home() {
    const handleScroll = () => {
        const target = document.getElementById("projects");
        if (!target) return;

        const scroller = document.querySelector(".pageScroller");

        // Scroll inside the app container
        if (scroller) {
            scroller.scrollTo({
                top: target.offsetTop - NAV_OFFSET,
                behavior: "smooth",
            });
            return;
        }

        // Fallback
        const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <div className="container homeWrap">
            <div className="homeCenter">
                <div className="welcomeRow">
                    <span className="welcomeText">Welcome! My name is</span>
                </div>

                {/* Wave animation */}
                <h1 className="heroTitle">
                    {"Nicholas Montgomery".split("").map((ch, i) => (
                        <span
                            key={i}
                            className="waveLetter"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
              {ch === " " ? "\u00A0" : ch}
            </span>
                    ))}
                </h1>

                <p className="heroSub">
                    I work in web development and digital marketing, using data insights
                    to guide design, strategy, and growth initiatives.
                </p>

                <button
                    className="scrollHint"
                    type="button"
                    onClick={handleScroll}
                    aria-label="Scroll to projects"
                >
                    <span className="scrollHintText">Scroll for more</span>
                    <span className="scrollArrow" aria-hidden="true">
            ↓
          </span>
                </button>
            </div>
        </div>
    );
}
