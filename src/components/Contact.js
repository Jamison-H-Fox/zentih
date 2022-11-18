import React from "react";
import { contactData } from '../data/constants'


function Contact() {


    return (
        <section id="contact">
            <h2>{contactData.mainText}</h2>
            <div className="left">
                <div className="contact-info">
                    <h3>Find Us At:</h3>
                    <address>{contactData.address1}<br/>{contactData.address2}<br/>
                        <a href={`tel:${contactData.phone}`}>{contactData.phone}</a><br/>
                        <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                    </address>
                </div>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={contactData.contactImg_URL} alt={contactData.contactImg_alt} />
                </div>
            </div>
        </section>
    )
}

export default Contact;

/* 
<section id="contact">
    <h2>Come Visit Us!</h2>
    <div class="left">
        <div class="contact-info">
            <h3>Find Us At:</h3>
        <address>123 Cottonwood Rd.<br>
            Prince Edward County, Ontario<br>
            Canada K1X 0H8
            <a href="tel:1-888-888-8888">888-888-8888</a><br>
            <a href="mailto:peter.rabbit@farmtotable.com">peter.rabbit@farmtotable.com</a>
        </address>
        </div>
    </div>
    <div class="right">
        <div class="img-container">
            <img src="https://github.com/BrityHemming/farm-to-table-practice-project/blob/solution/farm-to-table/images/landscape.jpg?raw=true" alt="tractor towing bails of hay accross a field of wheat">
        </div>
    </div>
</section> 
*/