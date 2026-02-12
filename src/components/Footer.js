import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footerRow">
        <span className="footerItem">
          © {new Date().getFullYear()} Nicholas Montgomery
        </span>

                <a
                    className="footerLink"
                    href="tel:+18608666584"
                    aria-label="Call Nicholas Montgomery"
                >
                    860-866-6584
                </a>

                <a
                    className="footerLink"
                    href="mailto:nicholasmonty13@gmail.com"
                    aria-label="Email Nicholas Montgomery"
                >
                    nicholasmonty13@gmail.com
                </a>

                <a
                    className="footerLink"
                    href="https://www.linkedin.com/in/nicholas-montgomery-434357229/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Nicholas Montgomery's LinkedIn profile"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}
