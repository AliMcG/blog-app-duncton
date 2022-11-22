import React from "react";
import "@ant-design/icons";
import { Input, Space } from "antd";
import styles from "../styles/Search.module.css"
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchBar = () => (
  <Space direction="vertical" className={styles.search}>
    <Search
      placeholder="Search..."
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  </Space>
);
export default SearchBar;
