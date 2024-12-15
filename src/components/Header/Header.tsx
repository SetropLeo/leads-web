"use client";

import { Layout } from "antd";
import "./styles.css";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      style={{
        backgroundColor: "#fff",
        padding: 0,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{ paddingLeft: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Leads
      </div>
    </Header>
  );
};

export default AppHeader;
