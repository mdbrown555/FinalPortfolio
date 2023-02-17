import "./FooterStyles.css";


import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>123 Street Name</p>
                            <p>RANDOM CITY, USA</p>
                        </div>
                    </div>
                    <div classPhone="phone">
                        <h4><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                        (123)456-7890</h4>
                    </div>
                    <div classPhone="email">
                        <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                        info@email.gov</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the Author:</h4>
                    <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color:"#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{ color:"#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{ color:"#fff", marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer