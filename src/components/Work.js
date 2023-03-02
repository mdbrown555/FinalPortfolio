import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"

import React from "react";
import pro1 from "../assets/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
               {WorkCardData.map((val,ind) => {
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.tetx}
                    view={val.view}
                    source={val.source} />
                )
               })}
            </div>
        </div>
);

}

export default Work;