import React from "react";
import { servicesData } from '../data/data'
import styled from 'styled-components'

const StyledDiv_Box = styled.div`
    width: 20%;
    border: 3px solid #4f4f4f;
    text-align: center;
    padding: 4%;
    background-color: #fff;
`

const StyledDiv_Container = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: space-around;
`

const StyledH3 = styled.h3`
    margin: 15% 0;
`

function Services() {


    return (
        <section id='services'>
            <h2>{servicesData.mainText}</h2>
            <StyledDiv_Container className="container">
                {servicesData.serviceNames.map((element, index) => {
                    return (
                        <StyledDiv_Box key={index} className="box">
                            {servicesData.serviceIcons[index]}
                            <StyledH3>{element}</StyledH3>
                        </StyledDiv_Box>
                    )
                })}
            </StyledDiv_Container>
        </section>
    )
}

export default Services;

/* <section id="farm">
    <h2>Farm Fresh</h2>
    <div class="container">
        <div class="box">
            <i class="fas fa-cheese"></i>
            <h3>Dairy</h3>
        </div>
        <div class="box">
            <i class="fas fa-egg"></i>
            <h3>Eggs</h3>
        </div>
        <div class="box">
            <i class="fas fa-carrot"></i>
            <h3>Produce</h3>
        </div>
        <div class="box">
            <i class="fas fa-bread-slice"></i>
            <h3>Bakery</h3>
        </div>
    </div>
</section> */