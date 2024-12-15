"use client";

import { Layout } from "antd";
import "./styles.css";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header-container">
      <div className="header-title">Leads</div>
    </Header>
  );
};

export default AppHeader;
