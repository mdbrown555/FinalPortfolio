import "./AboutContentStyles.css"

import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/AWS cert.png"
import pic2 from "../assets/sf admin cert.png"

const AboutContent = () => {
    return(
    <div className="about">
        <div className="top">
            <h1>CERTIFICATIONS</h1>
            <p>Software developer specializing in Salesforce and Full-stack web applications</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="top">
            <div className="img-container">
                <div className="img-stack">
                    <img style={{ width: 450, height: 300 }} src={pic1}
                    className="img"
                    alt="true" />
                </div>
            </div>
        </div>
        <div className="top">
            <div className="img-container">
                <div className="img-stack">
                    <img style={{ width: 450, height: 300 }} src={pic2}
                    className="img"
                    alt="true" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutContent;