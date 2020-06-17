

import React from "react";
import Skill from "./skill"

export default function SkillList() {
  return (
    <div className="box-2">
      <Skill skillName='Javascript' percentage='90' color='blue'></Skill>
      <Skill skillName='HTML' percentage='80' color='red'></Skill>
      <Skill skillName='CSS' percentage='60' color='green'></Skill>
      <Skill skillName='NodeJS' percentage='50' color='grey'></Skill>
      <Skill skillName='VueJS' percentage='90' color='brown'></Skill>
      <Skill skillName='React' percentage='90' color='purple'></Skill>
    </div>
  );
}

