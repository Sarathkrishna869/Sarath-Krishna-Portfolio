import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // For React icon
import { faDatabase, faCode, faProjectDiagram, faTools } from '@fortawesome/free-solid-svg-icons'; // For solid icons
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const categories = [
  {
    icon: faCode,
    title: "Programming Languages & Frameworks",
    description:
      "Proficient in a wide range of languages and frameworks used in software and web development.",
    techStack: [
      "Python",
      "Java",
      "C",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },
  {
    icon: faDatabase,
    title: "Database & Data Analytics",
    description:
      "Hands-on experience with relational and non-relational databases and data visualization tools.",
    techStack: [
      "MySQL",
      "MongoDB",
      "HDFS",
      "PowerBI",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "scikit-learn",
      "TensorFlow",
      "DLGraph",
    ],
  },
  {
    icon: faTools,
    title: "Testing & Automation",
    description:
      "Experienced in manual and automated testing tools and methodologies, ensuring robust application delivery.",
    techStack: [
      "Selenium",
      "Apache JMeter",
      "Manual Testing",
      "Black-box Testing",
    ],
  },
  {
    icon: faReact,
    title: "User Interface & Web Development",
    description:
      "Skilled in creating interactive web applications and visually appealing user interfaces.",
    techStack: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },
  {
    icon: faProjectDiagram,
    title: "Project Management & Version Control",
    description:
      "Proficient in managing tasks, collaborating with teams, and maintaining version control.",
    techStack: ["Jira", "GitHub"],
  },
  {
    icon: faTools,
    title: "Operating Systems & Office Tools",
    description:
      "Comfortable working with diverse operating systems and office productivity tools.",
    techStack: [
      "Windows",
      "Linux (Ubuntu, Kali)",
      "Mac OS",
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "Outlook",
    ],
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {categories.map((category, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={category.icon} size="3x" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {category.techStack.map((tech, techIndex) => (
                  <Chip key={techIndex} className="chip" label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
