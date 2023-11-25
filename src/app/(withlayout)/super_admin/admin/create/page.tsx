"use client";
import FormInput from "@/components/form/FormInput";
import FromSelectField from "@/components/form/FormSelectField";
import From from "@/components/form/From";
import { genderOptions } from "@/constants/global";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create Admin</h1>

      <div>
        <From submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </p>
            <Row gutter={{ sm: 8, md: 24 }}>
              <Col className="gutter-row" span={8}>
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FromSelectField
                  name="admin.gender"
                  size="large"
                  label="Gender"
                  options={genderOptions}
                  placeholder="select gender"
                />
              </Col>
            </Row>
          </div>
          <Button
            style={{ marginLeft: "15px" }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </From>
      </div>
    </div>
  );
};

export default CreateAdminPage;
