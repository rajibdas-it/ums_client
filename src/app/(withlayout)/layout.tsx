"use client";
import { Layout } from "antd";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";
import { isLoggedIn } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/Loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
