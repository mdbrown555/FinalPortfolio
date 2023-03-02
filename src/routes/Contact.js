import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from "../components/HeroImgProject";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImgProject heading="CONTACT" text="Reach me using the methods below."/>
            <Footer/>
        </div>
    )
};

export default Contact;