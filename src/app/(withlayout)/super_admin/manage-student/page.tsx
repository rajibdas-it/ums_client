import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudent = () => {
  return (
    <div>
      <h1>Manage Student Page</h1>
      <Link href="/super_admin/manage-student/create">
        {" "}
        <Button type="primary">Create Student</Button>
      </Link>
    </div>
  );
};

export default ManageStudent;
<h1>Manage Student Page</h1>;
