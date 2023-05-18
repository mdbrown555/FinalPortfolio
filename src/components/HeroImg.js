import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/safar-safarov-MSN8TFhJ0is-unsplash.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="Intro-Img"/>
            </div>
            <div className="content">
                <p>MARIO BROWN</p>
                <h1>Software Engineer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
};

export default HeroImg;