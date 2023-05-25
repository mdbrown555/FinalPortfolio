import pro1 from "../assets/joe-shields-dLij9K4ObYY-unsplash.jpg";
import pro2 from "../assets/markus-spiske-jUWw_NEXjDw-unsplash.jpg";
import pro3 from "../assets/mika-baumeister-Wpnoqo2plFA-unsplash.jpg";
import pro4 from "../assets/Tool Pic.png";
import pro5 from "../assets/kelly-sikkema-LzfP2KtuvVQ-unsplash.jpg";
import pro6 from "../assets/Calendar Pic.png";

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Universal Profile",
        text: "Unique permission sets joined together copying user profile access within Salesforce organization to create single Universal profile that streamlines overlapping settings, improves information visibility across teams, removes and rearranges unused page sections, and enables Engagement Details availability.",
        view: "",
        source: "https://help.salesforce.com/s/articleView?id=sf.admin_userprofiles.htm&type=5",
    },
    {
        imgsrc: pro2,
        title: "Exception Apex Trigger",
        text: "Apex trigger automatically populates specific fields for Exception objects upon record creation or update, greatly reducing manual work, rewrites of existing data, & enabling fufillment of mandatory PSE Team registration requirements for other data users.",
        view: "",
        source: "https://trailhead.salesforce.com/content/learn/modules/apex_triggers/apex_triggers_intro",
    },
    {
        imgsrc: pro3,
        title: "AWS Glue Migration",
        text: "Decoupling of applications and data transfer to the cloud from ETL pipeline  migration (Snaplogic to Glue) reducing on-premise presence to ease pipeline issues such as data inconsistency & eliminating 100% of latency between database and CMS enabling real time data sharing.",
        view: "",
        source: "https://aws.amazon.com/blogs/big-data/simplify-data-pipelines-with-aws-glue-automatic-code-generation-and-workflows/",
    },
    {
        imgsrc: pro4,
        title: "KKMN Tools",
        text: "A mock hardware e-commerce website built using React & Redux with Stripe functionality.",
        view: "",
        source: "https://github.com/Group2-FullStack/Project",
    },
    {
        imgsrc: pro5,
        title: "Light's Notebook",
        text: "A back end focused database application to create, update, & delete a list of criminal names.",
        view: "",
        source: "https://github.com/death-notebook/lights-notebook",
    },
    {
        imgsrc: pro6,
        title: "CalendarCrew",
        text: "A full-stack web application designed to display a calendar with scheduling functionality.",
        view: "",
        source: "https://github.com/CalendarCrew/calendarcrew",
    }
];

export default ProjectCardData;