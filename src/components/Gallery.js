import React from "react";
import { galleryData } from '../data/constants'


function Gallery() {


    return (
        <section className="gallery">
            {galleryData.classNames.map((element, index) => {
                return (
                    <div key={index} className={element}>
                        <div className="hide">
                            <h2>{galleryData.galleryTitles[index]}</h2>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Gallery;


/* 
<section class="gallery">
    <div class="farm">
        <div class="hide">
            <h2>The Farm</h2>
        </div>
    </div>
    <div class="cook">
        <div class="hide">
            <h2>Cooking Classes</h2>
        </div>
    </div>
    <div class="produce">
        <div class="hide">
            <h2>The Produce</h2>
        </div>
    </div>
    <div class="animals">
        <div class="hide">
            <h2>The Animals</h2>
        </div>
    </div>
</section> 
*/