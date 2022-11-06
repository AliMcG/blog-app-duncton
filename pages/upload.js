import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../src/aws-exports";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createPost, updatePost, deletePost } from "../src/graphql/mutations";
Amplify.configure(awsExports);

// boilerplate from AWS S3 Storage bucket
import { Storage } from "@aws-amplify/storage";

// await Storage.put('test.txt', 'Protected Content', {
//     level: 'protected',
//     contentType: 'text/plain'
// });

// this page should be secure

const initialState = {
  title: "",
  description: "",
};

function Upload({ signOut, user }) {
  
  const [blog, setBlog] = useState(initialState)
  const [imageFile, setImageFile] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
    console.log("This is handleSubmit")
    await API.graphql(graphqlOperation(createPost, { input: blog }));

    await Storage.put(imageFile, 'Protected Content', {
          level: 'protected',
          contentType: 'image'
      });

    setBlog(initialState)
    
  }

  function handleChange(event) {
    // destructs the event.target
    const { name, value } = event.target;

    // [name] reads the name from the input tag
    setBlog((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <>
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        <br></br>
        <h1>Write a new blog entry</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={blog.title}
            onChange={handleChange}
          />

          <br></br>

          <textarea
            name="description"
            placeholder="Content..."
            value={blog.description}
            rows="4"
            cols="50"
            onChange={handleChange}
          />
          <br></br>
          <label>
            Add Image:
            <br></br>
            <input
              type="file"
              name="image"
              value={imageFile}
              onChange={(e) => setImageFile(e.target.value)}
            />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        
      </>
    </>
  );
}

export default withAuthenticator(Upload);
