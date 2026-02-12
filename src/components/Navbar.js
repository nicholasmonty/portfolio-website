import React from "react";
import "./Navbar.css";

/* Scroll helper */
const scrollToId = (id) => {
    const target = document.getElementById(id);
    const scroller = document.querySelector(".pageScroller");

    if (!target || !scroller) return;

    scroller.scrollTo({
        top: target.offsetTop - 88,
        behavior: "smooth",
    });
};

export default function Navbar() {
    return (
        <header className="navWrap">
            <div className="container navInner">
                {/* Clicking returns to home */}
                <button className="brand" onClick={() => scrollToId("home")}>
                    <span className="brandText">Nicholas Montgomery</span>
                </button>

                {/* Primary navigation */}
                <nav className="navLinks" aria-label="Primary">
                    <button className="navBtn" onClick={() => scrollToId("home")}>
                        Home
                    </button>
                    <button className="navBtn" onClick={() => scrollToId("projects")}>
                        Projects
                    </button>
                    <button className="navBtn" onClick={() => scrollToId("about")}>
                        About
                    </button>
                </nav>
            </div>
        </header>
    );
}
