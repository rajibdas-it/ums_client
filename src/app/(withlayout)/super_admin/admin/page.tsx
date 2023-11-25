import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button
            type="primary"
            style={{
              margin: "10px 5px",
            }}
          >
            Create Admin
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default AdminPage;
