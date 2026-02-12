import React from "react";
import "./About.css";

export default function About() {
    return (
        <section className="container aboutWrap">
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
        </section>
    );
}
