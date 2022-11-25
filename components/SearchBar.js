import React, { useState } from "react";
import "@ant-design/icons";
import { Input, Space } from "antd";
import styles from "../styles/Search.module.css";
const { Search } = Input;
import { useRouter } from "next/router";
import data from "../Data/testPostData.js";

function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  // filters the blogData by title or content to include the search bar string
  function onSearch() {
    const searchedBlog = data.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase())
      );
    });
    // passes the 1st returned blog entry that matches the search string to dynamic routing
    // in /pages/:id using the searchedBlog.id as params.
    const href = `/posts/${searchedBlog[0].id}`;
    // router.push pushes the user to the new page
    router.push(href);
  }

  return (
    <Space direction="vertical" className={styles.search}>
      <Search
        placeholder="Search..."
        allowClear
        onSearch={onSearch}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{
          width: 200,
        }}
      />
    </Space>
  );
}

export default SearchBar;
