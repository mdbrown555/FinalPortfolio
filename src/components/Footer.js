import "./FooterStyles.css";


import React from "react";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>Atlanta, GA, USA</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                        (618) 975-3572</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem"}}/><a href="mailto:mdbrown543@gmail.com">mdbrown543@gmail.com</a></h4>
                    </div>
                    <div className="social">
                        <h4><FaLinkedin size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                        <a href="https://www.linkedin.com/in/mario-brown-ii/">linkedin.com/in/mario-brown-ii</a></h4>
                    </div>
                    <div className="github">
                        <h4><FaGithub size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                        <a href="https://github.com/mdbrown555">github.com/mdbrown555</a></h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the Author:</h4>
                    <p>Detail-oriented software engineer interested in attaining IT careers in software engineering by utilizing my work experience at an industry leading consulting firm, specializing in Salesforce CRM administration, development, and technical support. Excellent problem-solving, communication, and teamwork skills, seeking new opportunities to leverage my expertise in software engineering to contribute to a growing organization's success.</p>
                    <div className="social">
    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer