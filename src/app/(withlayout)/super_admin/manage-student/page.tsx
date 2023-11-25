import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudent = () => {
  return (
    <div>
      <ActionBar title="Student List">
        <Link href="/super_admin/manage-student/create">
          {" "}
          <Button
            type="primary"
            style={{
              margin: "10px 5px",
            }}
          >
            Create Student
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudent;
<h1>Manage Student Page</h1>;
