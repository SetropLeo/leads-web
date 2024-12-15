"use client";

import { getLeads } from "@/services";
import { Table } from "antd";
import { useEffect, useState } from "react";

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

const LeadsTable = ({ searchFilter, typeFilter }: LeadsTableProps) => {
  const [leads, setLeads] = useState<ILead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<ILead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      const response = await getLeads();
      setLeads(response);
      setLoading(false);
      setFilteredLeads(response);
    };

    fetchLeads();
  }, []);

  useEffect(() => {
    const filteredLeads = leads.filter((lead) => {
      const search = searchFilter.toLowerCase();
      const name = lead.name.toLowerCase();
      const country = lead.country.toLowerCase();
      const status = lead.status.toLowerCase();

      return (
        name.includes(search) ||
        country.includes(search) ||
        status.includes(search)
      );
    });

    setFilteredLeads(filteredLeads);
  }, [searchFilter, typeFilter]);

  return (
    <Table
      columns={columns}
      dataSource={filteredLeads}
      loading={loading}
      sortDirections={["descend"]}
      className="leads-table"
      rootClassName="root-leads-table"
    />
  );
};

export default LeadsTable;

interface LeadsTableProps {
  searchFilter: string;
  typeFilter: string;
}
