import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
    return (
        <>
            <Navbar />

            {/* Main scroll container */}
            <main className="pageScroller">
                <section id="home" className="snapSection">
                    <Home />
                </section>

                <section id="projects" className="snapSection">
                    <Projects />
                </section>

                <section id="about" className="snapSection">
                    <About />
                </section>
            </main>

            <Footer />
        </>
    );
}
