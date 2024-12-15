"use client";

import { Select } from "antd";
import React, { useMemo } from "react";
import countryList from "react-select-country-list";

import "./styles.css";

const CountrySelect = ({
  onChange = () => {},
  value = "",
  className = "",
  id = "",
  showSearch = false,
}: CountrySelectorComponentProps) => {
  const countryOptions = useMemo(() => {
    return countryList().getData();
  }, []) as { value: string; label: string }[];

  return (
    <Select
      options={countryOptions}
      id={id}
      value={value || undefined}
      placeholder="Country of citizenship"
      onChange={onChange}
      className={`country-selector ${className}`}
      showSearch={showSearch}
    />
  );
};

export default CountrySelect;

interface CountrySelectorComponentProps {
  value?: string | null;
  className?: string;
  id?: string;
  showSearch?: boolean;
  onChange?: (value: string) => void;
}
