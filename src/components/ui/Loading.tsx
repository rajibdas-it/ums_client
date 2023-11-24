import { Flex, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex>
        <Spin tip="Loading" size="large"></Spin>
      </Flex>
    </div>
  );
};

export default Loading;
