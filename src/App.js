import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
    return (
        <div className="appShell">
            <Navbar />

            <main className="page">
                <section id="home" className="section">
                    <Home />
                </section>

                <section id="projects" className="section">
                    <Projects />
                </section>

                <section id="about" className="section">
                    <About />
                </section>
            </main>

            <Footer />
        </div>
    );
}
