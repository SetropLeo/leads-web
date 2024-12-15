"use client";
import { Avatar, Layout, Menu } from "antd";
import { FileOutlined, SettingOutlined } from "@ant-design/icons";
import Link from "next/link";

import "./styles.css";
import Image from "next/image";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="sidebar-container" width={250}>
      <div className="logo-container">
        <Image src="/logo.png" alt="Logo" width={108} height={40} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-list"
        color="black"
      >
        <Menu.Item key="1" className="menu-item">
          <Link href="/leads">Leads</Link>
        </Menu.Item>
        <Menu.Item key="2" className="menu-item">
          <Link href="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="3" className="menu-item user-avatar">
          <Avatar size={36} shape="circle" icon={<>A</>} />
          <p className="username">Admin</p>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
