import "./PricingCardStyles";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
    return <div className="pricing">
        <div className="card-container">
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