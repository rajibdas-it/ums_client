import Login from "@/components/ui/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UMS-Login User",
  description: "Login page for users",
};

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
