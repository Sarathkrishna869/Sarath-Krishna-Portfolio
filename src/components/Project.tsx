import React from "react";
import mlproject from '../assets/images/ML project.png';
import IOT from '../assets/images/IOT.jpg';
import elective from '../assets/images/elective.jpg';
import FYP from '../assets/images/FYP.png';
import portfolio from '../assets/images/portfolio.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">

            {/* <div className="project">
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><img src={portfolio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><h2>Personal Portfolio</h2></a>
                <p>Devoloped a Personal Website to Showcase About Myself. </p>
                <p>Skills: React, scss, TypeScript, Javascript, HTML</p>
            </div> */}

            <div className="project">
                <a href="https://fog-dove-87a.notion.site/Final-Year-Project-6f04775c984148e5ac46b43d2046b369?pvs=4" target="_blank" rel="noreferrer"><img src={FYP} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://fog-dove-87a.notion.site/Final-Year-Project-6f04775c984148e5ac46b43d2046b369?pvs=4/" target="_blank" rel="noreferrer"><h2> Enhancing Credit Card Fraud Detection with Deep Learning and Graph Neural Networks
                (FYP)</h2></a>
                <p>This project uses deep learning (Autoencoders, RNNs, GNNs) and data preprocessing
                techniques (PCA, oversampling, synthetic data generation) to enhance credit card fraud detection.
                Results show that deep learning models can accurately identify and classify anomalies, improving
                security and operational efficiency in the banking sector. I have also worked on a
                research paper and presented it at a conference</p>
                <p>Tools: Python, Numpy, Pandas, Matplotlib, Sklearn ,  Python modules: Scikit-learn, NumPy, Pandas, MatPlotLib, SeaBorn, NLTK, XGBoost, LightGBM, CatBoost</p>
            </div>

            <div className="project">
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><img src={mlproject} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><h2>ML Music Recommendation System</h2></a>
                <p>The Main goal of this project is to try multiple Basic Machine Learning (ML) Models for a music recommendation system for users.</p>
                <p>Skills: Python, Python modules: Scikit-learn, NumPy, Pandas, MatPlotLib, SeaBorn, NLTK, XGBoost, LightGBM, CatBoost</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/in/sarath-krishna-ck/" target="_blank" rel="noreferrer"><img src={IOT} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/in/sarath-krishna-ck/" target="_blank" rel="noreferrer"><h2>IoT Smart Street Light</h2></a>
                <p>Developed an efficient IoT-based street lighting system with remote access and cloud analytics for traffic-based investment decisions.</p>
                <p>Key Components</p>
                <p>
                    <ul>
                        <li>Sensors: IR (vehicle proximity) and LDR (day/night).</li>
                        <li>Controller: ESP32 Devkit with Wi-Fi for logic and commands.</li>
                        <li>AWS IoT Core: Used as an MQTT broker for a Node.js web app (hosted on glitch.io) to control lights. Data stored in MongoDB for analysis.</li>
                        <li>GSM Communication: SIM800L module for SMS alerts via an emergency button.</li>
                    </ul>
                </p>
                <p>Skills: IoT, ESP32, AWS IoT, MongoDB, MQTT, GSM, Node.js, HTML5, JavaScript, CSS, Express.js, Arduino IDE.</p>
            </div>
            <div className="project">
                <a href="https://electivemgt.glitch.me/" target="_blank" rel="noreferrer"><img src={elective} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://electivemgt.glitch.me/" target="_blank" rel="noreferrer"><h2>Elective management webapp</h2></a>
                <p>"ElectiveMGT" is a web-based application that is created for the main purpose of making the 
                Elective registration process smoother and more convenient for the Teachers as well as the students. Few of the features are available only for the Admin / Teachers, whereas other features are common among all users.</p>
                <p>Skills: Scrum · Jira · Front-End Development · Selenium · Cascading Style Sheets (CSS) · Problem Solving · Software Testing · User Interface Design · Teamwork · JMeter · Agile Methodologies · User Experience Design (UED) · JavaScript · MongoDB · Project Management · Responsive Web Design · Analytical Skills · Statistics · Node.js · HTML5 · ChatGPT · Skill Development</p>
            </div>
        </div>
    </div>
    );
}

export default Project;