import React, { useState } from "react";
import "@ant-design/icons";
import { Input, Space } from "antd";
import styles from "../styles/Search.module.css"
const { Search } = Input;
import data from "../Data/testPostData.js"



 // Called upon change of search input
//  const searchUsers = (e) => {
//   setSearch(e.target.value)
//   filterUsers(e.target.value)
// }

function SearchBar(){
  const [search, setSearch] = useState("")

// href={"/posts/" + post.id}
function onSearch() {
  console.log(search)
  console.log(data[0].title)
  const searchedBlog = data.filter(blog => {
    return blog.title.toLowerCase().includes(search.toLowerCase()) || blog.description.toLowerCase().includes(search.toLowerCase())
  })
  console.log(searchedBlog)
}

  return (
    <Space direction="vertical" className={styles.search}>
    <Search
      placeholder="Search..."
      allowClear
      onSearch={onSearch}
      onChange={(e) => {setSearch(e.target.value)}}
      style={{
        width: 200,
      }}
    />
  </Space>
  )
} 
  

export default SearchBar;
