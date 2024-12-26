import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import Amrita from '../assets/images/Amrita.jpeg'
import select from '../assets/images/selectllc.jpeg'

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2024"
            iconStyle={{ background: 'black', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBook} />}
          >
            <div className="vertical-timeline-element--box">
            <h3 className="vertical-timeline-element-title"> Bachloer of Technology in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Amrita Vishwa Vidyapeetham, Coimbatore</h4>

            <p>
            <img src={Amrita} />
            </p>
            </div>

          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;