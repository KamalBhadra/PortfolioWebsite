import React from 'react';

export default function Footer() {
    return (

        <section className="footer">
            <div className="icons">
                <a href="https://github.com/KamalBhadra/" target="_blank">
                    <img src="Images/github.png" alt="footer-image" className='icons' />
                </a>

                <a href="https://www.linkedin.com/in/kamal-bhadra/" target="_blank" rel="noopener noreferrer">
                    <img src="Images/linkedin.png" alt="footer-image" className='icons' />
                </a>

                <a href="https://www.facebook.com/kamal.bhadra" target="_blank" rel="noopener noreferrer">
                    <img src="Images/facebook.png" alt="footer-image" className='icons' />
                </a>

                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src="Images/twitter.png" alt="footer-image" className='icons' />
                </a>

                <a href="https://www.instagram.com/kamalbhanushali1111/" target="_blank" rel="noopener noreferrer">
                    <img src="Images/instagram.png" alt="footer-image" className='icons' />
                </a>
            </div>
            <div className="copyright">Copyright ©2023 All rights reserved </div>
        </section>

    )
}
