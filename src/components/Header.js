import React, { useState } from "react";
import { portfolioData } from '../data/portfolio';

export default function Header() {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <React.Fragment>
            <div className="Header p-4 rounded-lg mb-4 text-center">
                <h1>{portfolioData.header.title}</h1>
                <p>Welcome, {portfolioData.header.name}</p>
                <button
                    id="about-me-btn"
                    onClick={() => setShowAbout(true)}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    About Me
                </button>
            </div>

            {showAbout && (
                <div id="about-me-text" className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="about-me-content bg-white p-8 rounded-lg max-w-2xl w-full mx-4 text-gray-800 relative">
                        <button
                            onClick={() => setShowAbout(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
                        >
                            ✕
                        </button>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <img
                                src={process.env.PUBLIC_URL + '/' + portfolioData.about.image}
                                alt="About Me"
                                className="about-me-content-img w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/150' }}
                            />
                            <div className="text-left">
                                <h1 className="text-3xl font-bold mb-2">Hi! I am {portfolioData.about.name}</h1>
                                <h3 className="text-xl text-blue-600 mb-4 font-semibold">{portfolioData.about.role}</h3>
                                <p className="mb-4 text-gray-600 leading-relaxed">
                                    {portfolioData.about.description}
                                </p>
                                <ul className="highlights list-disc list-inside space-y-1">
                                    {portfolioData.about.highlights.map((item, index) => (
                                        <li key={index} className="text-gray-700">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
