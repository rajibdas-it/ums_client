"use client";
import { Avatar, Dropdown, Layout, Row, Space } from "antd";
import { Button, MenuProps } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storage";
import { useRouter } from "next/navigation";
const { Header } = Layout;

const Headers = () => {
  const user: any = getUserInfo();

  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          {" "}
          Logout <LoginOutlined />
        </Button>
      ),
    },
  ];

  return (
    <Header>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <p style={{ color: "white", marginRight: "1rem" }}>{user?.role}</p>
        <Dropdown menu={{ items }}>
          <a href="">
            <Space wrap size={16}>
              <Avatar
                style={{ border: "1px solid white" }}
                size="large"
                icon={<UserOutlined />}
              />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default Headers;
