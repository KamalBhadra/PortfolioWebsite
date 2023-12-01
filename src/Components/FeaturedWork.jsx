import React from 'react';
import { TfiEye } from "react-icons/tfi";
export default function FeaturedWork() {

    
    return (

        <section className="featured-work">
            <div className="title">Featured Projects</div>
            <div className="box">
                < div className="box-left">

                    <img src="Images/instagram-clone.png" alt="project-image" />

                </div>
                <div className="box-right">
                    <div className="heading">
                        Instagram Web Clone
                    </div>
                    <div className="row">
                        <div className="project-year">2023</div>
                        <div className="project-name">React.js Application</div>
                    </div>
                    <div className="description">
                        <p>Developed a comprehensive Instagram clone with user profiles, modals, sliders, navigation bars, and galleries. React Router was integrated for smooth navigation. Custom styles and animations were crafted using CSS3 and SCSS to replicate Instagram's aesthetics. Interactive features like likes, comments, and user interactions are added.</p>
                    </div>
                    <a href="https://web-clone-instagram.netlify.app" target='_blank' rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <button>  View Project <TfiEye className='icons' /> </button>
                    </a>
                </div>
            </div>
            <div className="box">
                < div className="box-left">

                    <img src="Images/musicplayer.png" alt="project-image" />

                </div>
                <div className="box-right">
                    <div className="heading">
                        Music Player
                    </div>
                    <div className="row">
                        <div className="project-year">2023</div>
                        <div className="project-name">React.js Application</div>
                    </div>
                    <div className="description">
                        <p>Elevate the music journey with this Music Player, offering smooth transitions, volume controls, and curated 'Top Charts' and 'Recommended Songs.' Meticulously designed with React, SCSS, and JavaScript for an immersive and functional musical experience that harmonizes style and functionality effortlessly. Dive into a dynamic playlist experience.</p>
                    </div>
                    <a href="https://music-player-reactjs-web.netlify.app/" target='_blank' rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <button className='button'>View Project<TfiEye className='icons' /></button>
                    </a>
                </div>
            </div>
            <div className="box">
                < div className="box-left">

                    <img src="Images/weather.png" alt="project-image" />

                </div>
                <div className="box-right">
                    <div className="heading">
                        Weather Application
                    </div>
                    <div className="row">
                        <div className="project-year">2023</div>
                        <div className="project-name">React.js Application</div>
                    </div>
                    <div className="description">
                        <p>Crafted a weather application for users, leveraging Axios for efficient data retrieval from a weather API. Implemented location-based search and enhanced user engagement with dynamic icons. Integrated the Unsplash API to enrich the user interface with visually captivating images, highlighting a commitment to seamless API integration.</p>
                    </div>
                    <a href="https://weather-app-reactjs-web.netlify.app" target='_blank' rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <button className='button'>View Project <TfiEye className='icons' /></button>
                    </a>
                </div>
            </div>

        </section>
    )
}
