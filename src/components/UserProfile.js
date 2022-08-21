import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

const UserProfile = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      <div style={{ display: "flex" }}>
        <Avatar
          icon={<UserOutlined />}
          style={{
            height: 60,
            width: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div style={{ marginLeft: 10 }}>
          <Typography.Title level={1}>Danilo Rivera</Typography.Title>
          <Typography.Title level={4}>
            Ing. en ciencias de la computacion
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
