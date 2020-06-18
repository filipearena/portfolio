import React from "react";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Section2({ icon, date, title, location, text }) {
  const Icon = icon;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
      date={date}
      dateClassName={'timeline-date'}
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
      icon={<Icon></Icon>}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>
        {text}
      </p>
    </VerticalTimelineElement>
  );
}

