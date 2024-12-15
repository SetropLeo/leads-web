"use client";
import { useState } from "react";
import { Layout, Select } from "antd";
import Search from "antd/es/transfer/search";
import Sidebar from "@/components/Sidebar/Sidebar";
import AppHeader from "@/components/Header/Header";
import LeadsTable from "@/components/LeadsTable/LeadsTable";

import "./styles.css";

const { Content } = Layout;

const Page = () => {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
  });

  return (
    <Layout className="layout-container">
      <Sidebar />
      <Layout className="main-content">
        <AppHeader />
        <Content className="layout-content">
          <div className="table-filters">
            <Search
              placeholder="Search"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
            <Select
              options={filterOptions}
              value={filters.type || "status"}
              className="filter-selector"
              onChange={(value) => setFilters({ ...filters, type: value })}
            />
          </div>
          <LeadsTable searchFilter={filters.search} typeFilter={filters.type} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Page;

const filterOptions = [
  { label: "Name", value: "name" },
  { label: "Date", value: "date" },
  { label: "Status", value: "status" },
  { label: "Country", value: "country" },
];
