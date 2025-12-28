import React from 'react';

const Footer = () => {
    return (
        <div style={{
            textAlign: "center",
            padding: "20px 0",
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            color: "#8fc9da"
        }}>
            <p>
                Coded by{" "}
                <a
                    href="https://www.linkedin.com/in/harendra8587/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f06789", textDecoration: "none", fontWeight: "500" }}
                >
                    Harendra Singh
                </a>
                ,{" "}
                <a
                    href="https://github.com/Harendrasingh1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f06789", textDecoration: "none", fontWeight: "500" }}
                >
                    Github Profile
                </a>{" "}
                Thank You!
            </p>
        </div>
    );
};

export default Footer;
