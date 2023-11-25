"use client";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FromSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import From from "@/components/form/From";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
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
    <div style={{ padding: "20px" }}>
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
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FromSelectField
                  name="admin.gender"
                  size="large"
                  label="Gender"
                  options={genderOptions}
                  placeholder="select gender"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FromSelectField
                  name="admin.managementDepartment"
                  size="large"
                  label="Department"
                  options={departmentOptions}
                  placeholder="select Department"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <UploadImage />
              </Col>
            </Row>
          </div>
          {/* Basic Info  */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Basic Information
            </p>
            <Row gutter={{ sm: 8, md: 24 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px", width: "100%" }}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  size="large"
                  label="Date of Birth"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FromSelectField
                  name="admin.bloodGroup"
                  size="large"
                  label="Blood Group"
                  options={bloodGroupOptions}
                  placeholder="select blood group"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present Address"
                  rows={4}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea
                  name="admin.parmanentAddress"
                  label="Permanent Address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </From>
      </div>
    </div>
  );
};

export default CreateAdminPage;
