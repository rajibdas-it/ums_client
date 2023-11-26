"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import { useGetDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const DepartmentPage = () => {
  const query = {};
  const { data, isLoading } = useGetDepartmentsQuery({ ...query });

  const { departments, meta } = data;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Actions",
      render: function (data: Record<string, any>) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            X
          </Button>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { field, order } = sorter;
    console.log(field, order);
  };
  return (
    <div>
      <ActionBar title="Deparment List">
        <Link href="/super_admin/department/create">
          <Button
            type="primary"
            style={{
              margin: "10px 5px",
            }}
          >
            Create Department
          </Button>
        </Link>
      </ActionBar>

      <UMTable
        loading={false}
        columns={columns}
        data={dataSource}
        pageSize={5}
        totalPage={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default DepartmentPage;
<h1>Department Page</h1>;
