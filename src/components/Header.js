import React from "react";
import { portfolioData } from '../data/portfolio';

export default function Header() {
    return (
        <div className="Header p-4 rounded-lg mb-4 text-center">
            <h1>{portfolioData.header.title}</h1>
            <p>Welcome, {portfolioData.header.name}</p>
        </div>
    );
}
