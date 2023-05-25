import "./AboutContentStyles.css"

import React from "react";
import pic1 from "../assets/AWS cert.png"
import pic2 from "../assets/sf admin cert.png"

const AboutContent = () => {
    return(
    <div className="about text-center">
        <div className="top">
            <div className="img-container">
                <h6>AWS Cloud Practitioner</h6>
                <div className="img-stack">
                    <img style={{ width: 600, height: 450 }} src={pic1}
                    className="img"
                    alt="true" />
                </div>
            </div>
        </div>
        <div className="top">
            <div className="img-container">
            <h6>Salesforce Certified Administrator</h6>
                <div className="img-stack">
                    <img style={{ width: 600, height: 450 }} src={pic2}
                    className="img"
                    alt="true" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutContent;