import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBaby, FaGraduationCap, FaSuitcase, FaPlane, FaLaptop, FaBomb } from 'react-icons/fa';

export default function Section2() {
  return (
    <div id="2" className="section-2">
      <VerticalTimeline className={'timeline'}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date="2019 - Current"
          dateClassName={'timeline-date'}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          icon={<FaBomb />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer - Eante Pty</h3>
          <h4 className="vertical-timeline-element-subtitle">Brisbane, Australia</h4>
          <p>
            Help developed several projects, including a blast mining planning tool with core stack using VueJS, ElectronJS, NodeJS, Firebase and more.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date="2019 - Current"
          dateClassName={'timeline-date'}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          icon={<FaPlane />}
        >
          <h3 className="vertical-timeline-element-title">Masters of Information Technology (QUT)</h3>
          <h4 className="vertical-timeline-element-subtitle">Brisbane, Australia</h4>
          <p>
            Moved to Brisbane, Australia to start a Masters of Information Technology at QUT
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={'timeline-date'}
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date="2017 - 2019"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          icon={<FaLaptop />}
        >
          <h3 className="vertical-timeline-element-title">Consultant</h3>
          <h4 className="vertical-timeline-element-subtitle">Accenture, Brazil</h4>
          <p>
            Tech Lead in two large projects for diamond clients using AngularJS, Cordova, IBM Mobile First and more.
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
          dateClassName={'timeline-date'}
          date="2015 - 2017"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          icon={<FaSuitcase />}
        >
          <h3 className="vertical-timeline-element-title">Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">Accenture, Brazil</h4>
          <p>
            Hired as full-time Analyst. Front-end architecture development using AngularJS, NodeJS, Firebase and more.
    </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
          dateClassName={'timeline-date'}
          date="Late - 2017"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Computer Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">POLI-USP, Brazil</h4>
          <p>
            Finished Bachelor in Computer Engineering at Polytechnic School from the University of São Paulo (POLI-USP)
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
          dateClassName={'timeline-date'}
          date="2015 - 2017"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
          icon={<FaBaby />}
        >
          <h3 className="vertical-timeline-element-title">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Accenture, Brazil</h4>
          <p>
            Front-end development with AngularJS, Unit Testing, E2E testing and more
    </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div >
  );
}

