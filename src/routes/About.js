import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from "../components/HeroImgProject";
import AboutContent from "../components/AboutContent";


const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImgProject heading="CERTIFICATIONS" text="Professional credentials in software engineering."/>
            <AboutContent/>
            <Footer />
        </div>
    )
};

export default About;