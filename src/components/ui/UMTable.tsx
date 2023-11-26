"use client";
import { Table } from "antd";
import React from "react";

type UMTableProps = {
  loading?: boolean;
  columns: any;
  data: any;
  pageSize?: number;
  totalPage?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const UMTable = ({
  loading,
  columns,
  data,
  pageSize,
  totalPage,
  showSizeChanger,
  onPaginationChange,
  onTableChange,
  showPagination,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPage,
        pageSizeOptions: [5, 10, 20, 30, 40],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={data}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
