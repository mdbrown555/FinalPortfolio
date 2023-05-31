import "./PricingCardStyles.css";
import React from "react";

const PricingCard = () => {
    return <div className="pricing">
        <h1 className="project-heading">Durable Skills</h1>
        <div className="skills">
            <h2>- DASHBOARDS & REPORT INSTRUCTION -</h2>
            <p>Educating users in creating templates for risk teams to build new dashboard components and deliver timely reports to leadership through data visualization. The reports requested by teams are used to collect historical data to identify trends and measure impact, enable searching within list views, and group related records for detailed analysis of leadership participation and case outcomes.</p>
            <span></span>
            <h2>- SALESFORCE DATA MANAGEMENT -</h2>
            <p>By using the Salesforce Dataloader tool to backfill hundreds of thousands of records using simple SQL-like queries, I have saved many hundreds of work hours of manual insertion into relevant tables for future database storage. The use of dataloader requires improved skills with Excel in data analysis, cleanup, and VLookup search to reduce the prevalence of manual requests for data updates, and populate existing records with minimal opportunities for errors.</p>
            <span></span>
            <h2>- LIFE SCIENCES DASHBOARD & PSE REPORTS / DATA VISUALIZATION TOOLS -</h2>
            <p>By creating a dashboard used by the Life Sciences Team to assess pending case reviews and reporting metrics used by PRACL users, I was able to create a template the Life Sciences Team can use to build new dashboard components and deliver timely reports to leadership through data visualization. The reports requested through JIRA by the PSE Team are used to collect historical data to identify trends and measure impact, enable searching within list views, and group related records for detailed analysis of leadership participation and case outcomes. This dashboard and the PSE reports enhance the ease of use and availability of reporting information, grants users access to critical data across teams during risk reviews, and enables access to be easily revoked at the end of the review process, facilitating Firm security best practices.</p>
            <span></span>
            <h2>- MULTIVERSE LEARNING SESSIONS -</h2>
            <p>Weekly technical meetings through Multiverse ment to improve competencies in object-oriented programming priciples.</p>

        </div>
    </div>

}

export default PricingCard;