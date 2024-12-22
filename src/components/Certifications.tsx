import React from "react";
import '../assets/styles/Certifications.scss';
import coursera from '../assets/images/coursera.svg';
import guvi from '../assets/images/guvi.png';
import helsinki from '../assets/images/helsinki.jpg';
import innoval from '../assets/images/innoval.png';
import fl from '../assets/images/Future.png';

function Certifications() {
    return (
        <div className="certifications-container" id="certifications">
            <h1>Certifications</h1>
            <div className="certifications-grid">
                <div className="certification">
                    <a
                        href="https://www.coursera.org/account/accomplishments/certificate/2GHR8TK4SG3V"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={coursera} className="certification-image" alt="thumbnail" />
                    </a>
                    <a
                        href="https://www.coursera.org/account/accomplishments/certificate/2GHR8TK4SG3V"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3>Natural Language Processing With Sequence Models</h3>
                    </a>
                    <p>Institution: Coursera, Virtual</p>
                    <p>Issued: Dec 2023</p>
                </div>
                {/* More certifications */}
                <div className="certification">
                    <a
                        href="https://www.linkedin.com/posts/sarath-krishna-ck_im-happy-to-share-that-ive-obtained-a-new-activity-7246986459595857923-HInY/?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={innoval} className="certification-image" alt="thumbnail" />
                    </a>
                    <a
                        href="https://www.linkedin.com/posts/sarath-krishna-ck_im-happy-to-share-that-ive-obtained-a-new-activity-7246986459595857923-HInY/?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3>SAP BASIS</h3>
                    </a>
                    <p>Institution: Innoval Digital Solutions Pvt Ltd</p>
                    <p>Issued: Jul 2024 - Aug 2024</p>
                </div>

                <div className="certification">
                    <a
                        href="https://www.futurelearn.com/certificates/v8rngng"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={fl} className="certification-image" alt="thumbnail" />
                    </a>
                    <a
                        href="https://www.futurelearn.com/certificates/v8rngng"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3>DIGITAL SKILLS: USER EXPERIENCE</h3>
                    </a>
                    <p>Institution: Accenture, Virtual</p>
                    <p>Issued: Jul 2022</p>
                </div>

                <div className="certification">
                    <a
                        href="https://www.guvi.in/share-certificate/hfwU48a359WH1V4712"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={guvi} className="certification-image" alt="thumbnail" />
                    </a>
                    <a
                        href="https://www.guvi.in/share-certificate/hfwU48a359WH1V4712"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3>Python</h3>
                    </a>
                    <p>Institution: GUVI Geek Networks, IITM Research Park</p>
                    <p>Issued: Jun 2020</p>
                </div>

                <div className="certification">
                    <a
                        href="https://certificates.mooc.fi/validate/r55qsya8bwn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={helsinki} className="certification-image" alt="thumbnail" />
                    </a>
                    <a
                        href="https://certificates.mooc.fi/validate/r55qsya8bwn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3>Elements Of AI</h3>
                    </a>
                    <p>Institution: University Of Helsinki, Virtual</p>
                    <p>Issued: Jun 2021</p>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
