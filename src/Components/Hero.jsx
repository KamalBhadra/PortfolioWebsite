import React from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
export default function Hero() {

    const handleDownload = () => {

        const filePath = 'Files/KamalBhadraResume.pdf';
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + filePath;
        link.download = 'KamalBhadraResume.pdf';
        link.click();

    };


    return (
        <section className="hero">
            <div className="hero-left">
                <div className="about-me">
                    <p>Hi there,</p>
                    <h2>I'm Kamal Bhadra,</h2>
                </div>
                <div className="description">
                    <span>"Crafting synergy between frontend and backend as a Full Stack Developer." </span>
                </div>
                <button className='resume-btn' onClick={handleDownload}>Download Resume <FaArrowDownLong className='download-icon' /> </button>

            </div>
            <div className="hero-right">
                <div className="image">
                    <img src="/Images/profilepic.jpg" alt="profile picture" />
                </div>
            </div>
        </section>
    )
}
