import { Col, Row } from "antd";
import FormInput from "../form/FormInput";
import FromSelectField from "../form/FormSelectField";
import { departmentOptions, genderOptions } from "@/constants/global";

const BasicInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <Row gutter={{ sm: 8, md: 24 }}>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="admin.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="admin.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="admin.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FromSelectField
            name="admin.gender"
            size="large"
            label="Gender"
            options={genderOptions}
            placeholder="select gender"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FromSelectField
            name="admin.managementDepartment"
            size="large"
            label="Department"
            options={departmentOptions}
            placeholder="select Department"
          />
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;
