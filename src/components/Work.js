import "./WorkCardStyles.css"

import React from "react";
import pro1 from "../assets/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="proimage"/>
                    <h2 className="project-title">TITLE</h2>
                    <div className="pro-details">
                        <p>This is text.</p>
                        <div className="pro-btns">
                            <NavLink to="url.comma" className="btn">VIEW</NavLink>
                            <NavLink to="url.comma" className="btn">SOURCE</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

}

export default Work;