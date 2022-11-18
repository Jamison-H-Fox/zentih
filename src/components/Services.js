import React from "react";
import { servicesData } from '../data/constants'


function Services() {


    return (
        <section id='services'>
            <h2>{servicesData.mainText}</h2>
            <div className="container">
                {servicesData.serviceNames.map((element, index) => {
                    return (
                        <div key={index} className="box">
                            {servicesData.serviceIcons[index]}
                            <h3>{element}</h3>
                        </div>
                    )
                })}
            </div>
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