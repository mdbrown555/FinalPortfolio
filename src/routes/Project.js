import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from "../components/HeroImgProject";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";


const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImgProject heading="PROJECTS" text="Recent projects I have completed..." />
            <Work/>
            <PricingCard/>
            <Footer />
        </div>
    )
};

export default Project;