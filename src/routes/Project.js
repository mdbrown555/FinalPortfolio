import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from "../components/HeroImgProject";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";


const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImgProject heading="PROJECTS" text="Recent projects I have completed..." />
            <WorkCard/>
            <PricingCard/>
            <Footer />
        </div>
    )
};

export default Project;