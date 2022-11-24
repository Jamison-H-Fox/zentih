import React from "react";
import { aboutData } from "../data/data";
import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    justify-content: center;

    & .text {
        width: 60%;
        border: 3px solid #4f4f4f;
        background-color: #fff;
        text-align: center;
        padding: 4%;

        & p {
            text-align: justify;
        }
    }
`

function About() {


    return (
        <StyledSection id='about'>
            <div className="text">
                {aboutData.icon}
                <h2>{aboutData.header}</h2>
                <p>{aboutData.content}</p>
            </div>
        </StyledSection>
    )
}

export default About;


/* 
<section id="about">
    <div class="text">
        <i class="fas fa-horse"></i>
        <h2>Our Story</h2>
        <p>Cauliflower a seeds quail. Lettus gobblers pens, radish on kidney beans, llamas pick up truck. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Outhouse at nails mower. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Oranges cucumbers rhubarb gourds watermelon. Petting zoo at carrots alligators quack. Haybine carrots soybeans, owl.</p>
    </div>
</section> 
*/
