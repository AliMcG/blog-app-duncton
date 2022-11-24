// import { Amplify, Auth } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// import awsExports from "../src/aws-exports";
import { useState } from "react";
import BlogForm from "../components/Form";
import style from "../styles/UploadPage.module.css"
// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "../src/graphql/mutations";
// Amplify.configure(awsExports);



const initialState = {
  title: "",
  description: "",
};

// { signOut, user }
function AddNewBlog() {
  
  const [blog, setBlog] = useState(initialState)
  const [imageFile, setImageFile] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
    console.log("This is handleSubmit", blog, imageFile)
    // await API.graphql(graphqlOperation(createTodo, { input: blog }));
    

    setBlog(initialState)
    
  }

  function handleChange(event) {
    // destructs the event.target
    const { name, value } = event.target;

     // using prevValue of the state object, the spread operator to spread then add the new value.
    // [name] reads the name from the input tag
    setBlog((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <>
        <h1>Write a new blog entry</h1>
        <form onSubmit={handleSubmit}>
          {/* <input
            type="text"
            name="title"
            placeholder="Title..."
            value={blog.title}
            onChange={handleChange}
          /> */}


          {/* <textarea
            name="description"
            placeholder="Content..."
            value={blog.description}
            rows="4"
            cols="50"
            onChange={handleChange}
          /> */}
          
          {/* <label>
            Add Image:
            <br></br>
            <input
              type="file"
              name="image"
              value={imageFile}
              onChange={(e) => setImageFile(e.target.value)}
            />
          </label> */}
          
          {/* <input type="submit" value="Submit" /> */}
        </form>
        <BlogForm />
    </>
  );
}

// export default Upl
export default AddNewBlog;
