import React from "react";
import { Typography } from "antd";
import Skill from "./Skill";
import { skillData } from "../const/skillsData";

const Skills = () => {
  return (
    <>
      <Typography.Title level={1}>Skills</Typography.Title>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {skillData.map((data) => (
          <Skill name={data.name} percent={data.percent} />
        ))}
      </div>
    </>
  );
};

export default Skills;
