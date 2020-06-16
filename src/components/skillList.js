

import React from "react";
import Skill from "./skill"

export default function SkillList() {
  return (
    <div style={{ width: '100%' }}>
      <Skill skillName='Javascript' percentage='90'></Skill>
      <Skill skillName='HTML' percentage='80'></Skill>
      <Skill skillName='CSS' percentage='60'></Skill>
      <Skill skillName='NodeJS' percentage='50'></Skill>
      <Skill skillName='VueJS' percentage='90'></Skill>
      <Skill skillName='React' percentage='90'></Skill>
    </div>
  );
}

