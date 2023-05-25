import "./PricingCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
    return <div className="pricing">
        <h1 className="project-heading">Durable Skills</h1>
        <div className="card-container">
            <div className="card">
                <h3> DASHBOARDS & REPORT INSTRUCTION </h3>
                <p>Educating users in creating templates for risk teams to build new dashboard components and deliver timely reports to leadership through data visualization. The reports requested by teams are used to collect historical data to identify trends and measure impact, enable searching within list views, and group related records for detailed analysis of leadership participation and case outcomes.</p>
            </div>

            <div className="card">
                <h3> BASIC </h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p>THINGS</p>
                <p>STUFF</p>
                <p>GOODS</p>
                <Link to="/contact" className="btn">
                    BUY NOW!!!
                </Link>
            </div>

            <div className="card">
                <h3> BASIC </h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p>THINGS</p>
                <p>STUFF</p>
                <p>GOODS</p>
                <Link to="/contact" className="btn">
                    BUY NOW!!!
                </Link>
            </div>
        </div>
    </div>

}

export default PricingCard;