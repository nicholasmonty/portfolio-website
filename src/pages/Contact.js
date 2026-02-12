import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div>
            <h2 className="sectionTitle">Contact</h2>

            <p className="contactText">
                Want to work together or have a question? Reach out — I typically respond within 24–48 hours.
            </p>

            <div className="contactActions">
                <a className="btnPrimary" href="mailto:your@email.com">
                    Email Me
                </a>

                <a
                    className="btnGhost"
                    href="https://linkedin.com/in/YOUR-LINK"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    );
}
