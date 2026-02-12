import React from "react";
import "./Navbar.css";

const NAV_OFFSET = 72;

const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
        el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

    window.scrollTo({
        top: y,
        behavior: "smooth",
    });
};

export default function Navbar() {
    return (
        <header className="navWrap">
            <div className="container navInner">
                {/* Brand / Home button */}
                <button
                    type="button"
                    className="brand"
                    onClick={() => scrollToId("home")}
                >
                    <span className="brandText">Nicholas Montgomery</span>
                </button>

                {/* Navigation */}
                <nav className="navLinks" aria-label="Primary">
                    <button
                        type="button"
                        className="navBtn"
                        onClick={() => scrollToId("home")}
                    >
                        Home
                    </button>

                    <button
                        type="button"
                        className="navBtn"
                        onClick={() => scrollToId("projects")}
                    >
                        Projects
                    </button>

                    <button
                        type="button"
                        className="navBtn"
                        onClick={() => scrollToId("about")}
                    >
                        About
                    </button>
                </nav>
            </div>
        </header>
    );
}
