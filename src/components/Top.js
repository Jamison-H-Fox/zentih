import React from "react"
import { topData } from '../data/constants'


function Top() {


    return (
        <section id="home">
            <div className="titles">
                <h1>{topData.mainHeading}</h1>
                <h2>{topData.subHeading1}<br/>{topData.subHeading2}</h2>
            </div>
        </section>
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