import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../src/aws-exports";
import { useReducer, useState } from "react";
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
  // imageFile: ""
};

const reducer = async (state, action) => {
  switch (action.type) {
    case "title":
      return {
        ...state,
        title: action.title,
      };
    case "description":
      return {
        ...state,
        description: action.description,
      };
    case "image":
      return {
        imageFile: action.imageFile,
      };
    // case "submit":

    //   console.log("state inside reducer when API called: ", state)
    //   try {
    //     await API.graphql(graphqlOperation(createPost, {input: state}));
    //   }
    //   catch (err) {
    //     console.log(err)
    //   }
    //   return state;

    case "reset":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

function Upload({ signOut, user }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [blog, setBlog] = useState(initialState)

  const [imageFile, setImageFile] = useState("");

  // const blog = { title: "My nth blog", description: "Hello Again world!" };

  /* create a todo */

  async function handleClick() {
    // console.log("Clicked and sent:", blog)
    await API.graphql(graphqlOperation(createPost, { input: blog }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    console.log("This is handleSubmit")
    await API.graphql(graphqlOperation(createPost, { input: blog }, { errorPolicy: "all" }));
    // dispatch({ type: "reset" });
    setBlog(initialState)
    
  }

  function handleChange(event) {
    // destructs the event.target
    const { name, value } = event.target;

    // [name] reads the name from the input tag
    setBlog((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(blog)
    // dispatch({ type: name, [name]: value });
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
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        <button onClick={handleClick}>Click to create post</button>
      </>
    </>
  );
}

export default withAuthenticator(Upload);
