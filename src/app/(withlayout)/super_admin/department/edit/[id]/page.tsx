"use client";
import FormInput from "@/components/form/FormInput";
import From from "@/components/form/From";
import {
  useGetDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

type IDProps = {
  params: any;
};
const EditDepartment = ({ params }: IDProps) => {
  const router = useRouter();
  const { id } = params;

  const { data, isLoading } = useGetDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const updateDepartmentHandler = async (values: { title: string }) => {
    message.loading("Updating...please wait a while");
    try {
      await updateDepartment({ id, body: values });
      await message.success("Department updated successfully");
      router.push("/super_admin/department/");
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  return (
    <div style={{ padding: "15px" }}>
      <From
        submitHandler={updateDepartmentHandler}
        defaultValues={defaultValues}
      >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" type="text" size="large" label="Title" />
          </Col>
        </Row>
        <Button htmlType="submit" type="primary">
          Update
        </Button>
      </From>
    </div>
  );
};

export default EditDepartment;
