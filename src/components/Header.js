import React from "react";
import { headerData } from '../data/constants'

function Header() {

    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={headerData.logoImg}/>
                </div>
                <div className="links">
                    {headerData.linkList.map((element, idx) => {
                        return <a key={idx} href={`#${element.toLowerCase()}`}>{element}</a>
                    })}
                </div>
            </nav>
        </header>
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