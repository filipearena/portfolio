import React from "react";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';
import TimeLineElement from "./timelineElement"

export default function Section2() {
  return (
    <div id="2" className="section-2">
      <div className='timeline-start'>NOW</div>
        <VerticalTimeline className={'timeline'}>
        <TimeLineElement
          icon={FaSuitcase}
          title="Software Engineer - Technlogy One"
          location="Brisbane, Australia"
          date="2021 - Current"
          text="Developing mobile project using React Native, making sure clients can access features even without internet."></TimeLineElement>
        <TimeLineElement
          icon={FaSuitcase}
          title="Software Engineer - Conpago"
          location="Brisbane, Australia"
          date="2020 - 2021"
          text="Developed projects using React and React Native, to help care providers increase engagement with the community."></TimeLineElement>
        <TimeLineElement
          icon={FaSuitcase}
          title="Software Engineer - Eante"
          location="Brisbane, Australia"
          date="2019 - 2020"
          text="Developed several projects, including a blast mining 
        planning tool with core stack using VueJS, ElectronJS, NodeJS, 
        Firebase and more."></TimeLineElement>
        <TimeLineElement
          icon={FaGraduationCap}
          title="Masters of Information Technology (QUT)"
          location="Brisbane, Australia"
          date="2019 - 2021"
          text="Moved to Brisbane, Australia to start a Masters of Information Technology at QUT">
        </TimeLineElement>
        <TimeLineElement
          icon={FaSuitcase}
          title="Consultant"
          location="Accenture, Brazil"
          date="2018 - 2019"
          text="Tech Lead in two large projects for diamond clients using AngularJS, Cordova, IBM Mobile First and more.">
        </TimeLineElement>
        <TimeLineElement
          icon={FaSuitcase}
          title="Analyst"
          location="Accenture, Brazil"
          date="2017 - 2018"
          text="Hired as full-time Analyst. Front-end architecture development using AngularJS, NodeJS, Firebase and more.">
        </TimeLineElement>
        <TimeLineElement
          icon={FaSuitcase}
          title="Intern"
          location="Accenture, Brazil"
          date="2015 - 2017"
          text="Front-end development with AngularJS, Unit Testing, E2E testing and more">
        </TimeLineElement>
        <TimeLineElement
          icon={FaGraduationCap}
          title="Bachelor of Computer Engineer"
          location="POLI-USP, Brazil"
          date="2010 - 2017"
          text="Finished Bachelor in Computer Engineering at Polytechnic School from the University of São Paulo (POLI-USP)">
        </TimeLineElement>
      </VerticalTimeline>
    </div >
  );
}

