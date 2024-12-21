import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import datadevice from '../assets/images/datadevice_logo.jpeg'
import select from '../assets/images/selectllc.jpeg'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - Present"
            iconStyle={{ background: 'black', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            
            <h3 className="vertical-timeline-element-title"> Test Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">DataDevice Pty Ltd., Australia (Remote)</h4>
            <p>
              Manual Testing, Automation Testing, Black-Box testing
            </p>

            <p>
            <img src={datadevice} />
            </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - March 2024"
            iconStyle={{ background: 'black', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Information Technology Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"> Select Training and Management Consultancy L.L.C, Abu Dhabi, United Arab Emirates (Remote)</h4>
            <p>
              Web Devolopment, UI/UX Design, Full-Stack Devolopment
            </p>

            <p>
            <img src={select} />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;