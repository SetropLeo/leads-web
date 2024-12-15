"use client";
import { Layout, Menu } from "antd";
import { FileOutlined, SettingOutlined } from "@ant-design/icons";
import Link from "next/link";

import "./styles.css";
import Image from "next/image";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={250} style={{ backgroundColor: "#fff" }}>
      <div style={{ padding: 16, fontSize: "24px", fontWeight: "bold" }}>
        <Image src="/logo.png" alt="Logo" width={108} height={40} />
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<FileOutlined />}>
          <Link href="/leads">Leads</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          <Link href="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
