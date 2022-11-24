import React from "react";
import { footerData } from '../data/data'
import styled from "styled-components";
import { brandPallet } from "../data/data";

const StyledFooter = styled.footer`
    background-color: ${brandPallet.primaryBackgroundColor};
    color: #fff;
    padding: 2% 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    & div {
        width: 30%;
    }

    & .break {
        width: 100%;
    }

    // & * {
    //     border: red 1px solid;
    // }

    & a {
        color: #fff;

        &:hover{
            color: #4f4f4f;
        }
    }

    & .social-container {

        & .social {
            display: flex;
            justify-content: space-between;
            margin-top: 10%;
        }
    }

    & .bottom-right {
        width: 60%;
        display: flex;

        & .bottom-links {
            // height: 80%;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            & a {
                margin-left: 10%;
            }
        }

        & a {
            margin 2% 0;
            text-decoration: none;
        }
    
    }

    & .copyright{
        width: 90%;
        display: flex;
        justify-content: flex-end;
    }
`


function Footer() {


    return (
        <StyledFooter>
            <div className="social-container">
                <h3>{footerData.socialGreeting}</h3>
                <nav className="social">
                    {footerData.socialLinks.map((element, index) => {
                        return (
                            <a key={index} href={element} target='_blank'>{footerData.socialIcons[index]}</a>
                        )
                    })}                    
                </nav>
            </div>
            <div className="bottom-right">
                <nav className="bottom-links">
                    {footerData.linkList.map((element, idx) => {
                        return <a key={idx} href={`#${element.toLowerCase()}`}>{element}</a>
                    })}
                </nav>
            </div>
            <div className="break"></div>
            <div className="copyright">
                <p>{footerData.copyright}</p>
            </div>
        </StyledFooter>
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