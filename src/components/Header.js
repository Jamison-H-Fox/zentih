import React from "react";
import { headerData } from '../data/data'
import styled from 'styled-components'
import { spacerImgageData } from '../data/data'

const StyledHeader = styled.header`

& nav {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    height: 10vh;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
        background-image: url('${headerData.logoImg}');
        height: 8vh;
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        width: 25%;
        margin-left: 3%;
        opacity: .75;
    }
    
    & .links {
        width: 50%;
        display: flex;
        justify-content: space-evenly;

        & a {
            text-decoration: none;
            letter-spacing: 3px;
            color: #4f4f4f;
            font-family: "PT Sans", sans-serif;
            
            &:hover {
                color: #fcb131;
            }
        }        
    }
}

`

function Header() {

    return (
        <StyledHeader>
            <nav>
                <div className="logo">
                </div>
                <div className="links">
                    {headerData.linkList.map((element, idx) => {
                        return <a key={idx} href={`#${element.toLowerCase()}`}>{element}</a>
                    })}
                </div>
            </nav>
        </StyledHeader>
    )
};

export default Header;

/*
    <header>
        <nav>
            <div class="logo">
                <i class="fas fa-tractor"></i>
            </div>
            <div class="links">
                <a href="#top">Home</a>
                <a href="#farm">Farm Fresh</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>
 */

    // https://dsm01pap003files.storage.live.com/y4mbKqNuxGXTQodRiviYQimKHadofFTSqavLOc52bzQ7d5K64NUJN7P9Kf98LjjTlMHhIiZjIWiRM0ysFL5-qQy8fR9h0WNCXenVpKOGkmN-HGsF08Ubr-hz_-R3CjlY7og3otIr6VoyqT8fdVnr3TUQvet8AcsCTt_OWcmOKG2OQb4XyaN6eJnz9PEyszGw_m_?width=1400&height=784&cropmode=none