import "./AboutContentStyles.css"

import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/safar-safarov-MSN8TFhJ0is-unsplash.jpg"

const AboutContent = () => {
    return(
    <div className="about">
        <div className="left">
            <h1>ABOUT ME</h1>
            <p>Software developer specializing in Salesforce and Full-stack web applications</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pic1}
                    className="img"
                    alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={pic1}
                    className="img"
                    alt="true" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutContent;