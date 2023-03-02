import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from "../components/HeroImgProject";


const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImgProject heading="ABOUT" text="I'm a software developer specializing in Salesforce CRM."/>
            <Footer />
        </div>
    )
};

export default About;