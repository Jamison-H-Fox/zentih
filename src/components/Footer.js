import React from "react";
import { footerData } from '../data/constants'

function Footer() {


    return (
        <footer>
            <div>
                <h3>Connect With Us On The Socials</h3>
                <nav className="social">
                    {footerData.socialLinks.map((element, index) => {
                        return (
                            <a key={index} href={element} target='_blank'>{footerData.socialIcons[index]}</a>
                        )
                    })}                    
                </nav>
            </div>
            <div>
                <nav className="main">
                    {footerData.linkList.map((element, idx) => {
                        return <a key={idx} href={`#${element.toLowerCase()}`}>{element}</a>
                    })}
                </nav>
            </div>
            <div className="copyright">
                <p>© Jamison Fox 2022</p>
            </div>
        </footer>
    )
}

export default Footer;

/* 
<footer>
    <div>
        <h3>Connect With Us On The Socials</h3>
        <nav class="social">
            <a href="http://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="http://facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="http://twitter.com" target="_blank"><i class="fab fa-twitter-square"></i></a>
        </nav>
    </div>
    <div>
        <nav class="main">
            <a href="#top">Home</a>
            <a href="#farm">Farm Fresh</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
    <div class="copyright">
        <p>Copyright <a href="https://bloomtech.com" target="_blank">BloomTech</a> 2022</p>
    </div>
</footer> 
*/