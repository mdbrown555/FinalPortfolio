import "./WorkCardStyles.css"

import React from "react";
import pro1 from "../assets/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="proimage"/>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">VIEW</NavLink>
                    <NavLink to={props.source} className="btn">SOURCE</NavLink>
                </div>
            </div>
        </div>
);

}

export default WorkCard;