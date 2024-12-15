"use client";
import { Layout } from "antd";
import Sidebar from "@/components/Sidebar/Sidebar";
import AppHeader from "@/components/Header/Header";
import LeadsTable from "@/components/LeadsTable/LeadsTable";

import "./styles.css";

const { Content } = Layout;

const Page = () => {
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout className="main-content">
        <AppHeader />
        <Content className="content">
          <LeadsTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Page;
