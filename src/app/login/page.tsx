"use client";

import { Button, Col, Row } from "antd";
import loginImg from "../../assets/login_image.png";
import Image from "next/image";
import FormInput from "@/components/form/FormInput";
import From from "@/components/form/From";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit = (data: SubmitHandler<FormValues>) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImg} alt="login_image" width={500} />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "15px 0px" }}>First Login your account</h1>
        <div>
          <From submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </From>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
