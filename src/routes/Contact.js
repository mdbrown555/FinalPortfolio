import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from "../components/HeroImgProject";
import Form from "../components/Form";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImgProject heading="CONTACT" text="Reach me using the methods below."/>
            <Form/>
            <Footer/>
        </div>
    )
};

export default Contact;