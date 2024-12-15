"use client";

import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Submitted",
    dataIndex: "submitted",
    key: "submitted",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
];

const data = [
  {
    key: "1",
    name: "Jorge Ruiz",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Mexico",
  },
  {
    key: "2",
    name: "Bahar Zamir",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Mexico",
  },
  {
    key: "3",
    name: "Mary Lopez",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Brazil",
  },
  // ... adicione mais dados conforme necessário
];

const LeadsTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      style={{ margin: "20px" }}
    />
  );
};

export default LeadsTable;
