"use client";
import FormInput from "@/components/form/FormInput";
import From from "@/components/form/From";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateDepartment = () => {
  const [addDepartment] = useAddDepartmentMutation();
  const createDepartmentHandler = async (data: any) => {
    message.loading("Createing...");
    try {
      console.log(data);
      await addDepartment(data);
      message.success("Department created successfully");
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
  };
  return (
    <div style={{ padding: "15px" }}>
      <From submitHandler={createDepartmentHandler}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" type="text" size="large" label="Title" />
          </Col>
        </Row>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </From>
    </div>
  );
};

export default CreateDepartment;
