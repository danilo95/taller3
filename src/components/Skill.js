import React from "react";
import { Progress, Tooltip } from "antd";

const Skill = ({ name, percent }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tooltip title={`${name} - ${percent}%`}>
        <Progress
          percent={percent}
          success={{ percent: percent }}
          type="circle"
        />
      </Tooltip>
      <p style={{ fontWeight: "bold", marginTop: 20 }}>{name}</p>
    </div>
  );
};

export default Skill;
