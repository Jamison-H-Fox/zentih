import React from "react"
import { topData } from '../data/data'
import styled from 'styled-components'

const StyledSection = styled.section`
    height: 85vh;
    background-image: url('${topData.topImage_URL}');
    margin-top: 10vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    & .titles {
        padding: 1.25%;
        // margin: 0% 0% 45vh 0;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 5px;
    }
`

function Top() {


    return (
        <StyledSection id="home">
            <div className="titles">
                <h1>{topData.mainHeading}</h1>
                <h2>{topData.subHeading1}<br/>{topData.subHeading2}</h2>
            </div>
        </StyledSection>
    )
}

export default Top;

/* 
<section id="top">
    <div class="titles">
        <h1>Farm To Table</h1>
        <h2>Ethical Fresh Products<br>Delivered To Your Door</h2>
    </div>
</section> 
*/