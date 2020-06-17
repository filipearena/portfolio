

import React from "react";
import Skill from "./skill"

export default function SkillList() {
  return (
    <div className="box-2">
      <Skill skillName='JavaScript' percentage='90' color='blue' sequenceNumber="seq-1"></Skill>
      <Skill skillName='HTML' percentage='80' color='red' sequenceNumber="seq-2"></Skill>
      <Skill skillName='CSS' percentage='60' color='green' sequenceNumber="seq-3"></Skill>
      <Skill skillName='NodeJS' percentage='50' color='grey' sequenceNumber="seq-4"></Skill>
      <Skill skillName='VueJS' percentage='90' color='brown' sequenceNumber="seq-5"></Skill>
      <Skill skillName='React' percentage='90' color='purple' sequenceNumber="seq-6"></Skill>
    </div>
  );
}

