import React from "react";
import mlproject from '../assets/images/ML project.png';
import IOT from '../assets/images/IOT.jpg';
import elective from '../assets/images/elective.jpg';
import FYP from '../assets/images/FYP.png';
import portfolio from '../assets/images/portfolio.png'
import '../assets/styles/Project.scss';
import ieee from '../assets/images/ieee.png';
import coursera from '../assets/images/coursera.svg';

function Certifications() {
    return(
    <div className="projects-container" id="certifications">
        <h1>Certifications</h1>
        <div className="projects-grid">

            {/* <div className="project">
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><img src={portfolio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Sarathkrishna869/ML_Music_Recommendation" target="_blank" rel="noreferrer"><h2>Personal Portfolio</h2></a>
                <p>Devoloped a Personal Website to Showcase About Myself. </p>
                <p>Skills: React, scss, TypeScript, Javascript, HTML</p>
            </div> */}

            <div className="project">
                <a href="https://www.coursera.org/account/accomplishments/certificate/2GHR8TK4SG3V" target="_blank" rel="noreferrer"><img src={coursera} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.coursera.org/account/accomplishments/certificate/2GHR8TK4SG3V" target="_blank" rel="noreferrer">
                    <h3> Natural Language Processing With Sequence Models</h3>
                </a>
                <p> Institution:  Coursera, Virtual</p>
                <p>Issued:  Dec 2023</p>
            </div>
            <div className="project">
                <a href="https://www.coursera.org/account/accomplishments/certificate/PYBQ5892AXTG" target="_blank" rel="noreferrer"><img src={coursera} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.coursera.org/account/accomplishments/certificate/PYBQ5892AXTG" target="_blank" rel="noreferrer">
                    <h3> Natural Language Processing With Sequence Models</h3>
                </a>
                <p> Institution:  Coursera, Virtual</p>
                <p>Issued:  Dec 2023</p>
            </div>



        </div>
    </div>
    );
}

export default Certifications;