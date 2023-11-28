"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import dayjs, { Dayjs } from "dayjs";
import { useGetAdminsQuery } from "@/redux/api/adminApi";
import { useGetAcaFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { useGetAcaDepartmentsQuery } from "@/redux/api/academic/acaDepartmentApi";
import { useGetSemestersQuery } from "@/redux/api/academic/acaSemesterApi";

const AcademicSemesterPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  query["page"] = page;
  query["limit"] = size;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetSemestersQuery({ ...query });

  const academicSemester = data?.academicSemester;
  console.log(academicSemester);
  const meta = data?.meta;
  // const [deleteDepartment] = useDeleteDepartmentMutation();

  // const handleDeleteDepartment = async (id: string) => {
  //   message.loading("Deleting...");
  //   try {
  //     await deleteDepartment(id);
  //     await message.success("Delete department successfully");
  //   } catch (error: any) {
  //     message.error(error);
  //   }
  // };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a: any, b: any) => a.title - b.title,
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a: any, b: any) => a.title - b.title,
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      sorter: (a: any, b: any) => a.title - b.title,
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      sorter: (a: any, b: any) => a.title - b.title,
    },
    {
      title: "Year",
      dataIndex: "year",
      sorter: (a: any, b: any) => a.title - b.title,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      sorter: (a: any, b: any) => a.title - b.title,
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },

    {
      title: "Actions",
      render: function (data: Record<string, any>) {
        return (
          <>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button style={{ margin: "0 5px" }} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            {/* <Button
              onClick={() => handleDeleteDepartment(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button> */}
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { field, order } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetAllQuery = () => {
    setSearchTerm("");
    setSortBy("");
    setSortOrder("");
  };
  return (
    <div>
      <ActionBar title="Academic Semester List">
        <Input
          type="text"
          size="large"
          placeholder="search..."
          style={{ width: "20%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/admin/academic/semester/create">
            <Button
              type="primary"
              style={{
                margin: "10px 5px",
              }}
            >
              Create Semester
            </Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button onClick={resetAllQuery} type="primary">
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={academicSemester}
        pageSize={size}
        totalPage={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AcademicSemesterPage;
<h1>Department Page</h1>;
