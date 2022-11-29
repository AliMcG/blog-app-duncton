// import { Amplify, Auth } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// import awsExports from "../src/aws-exports";
import { useState, useReducer } from "react";
import BlogForm from "../components/BlogForm";
import Image from "next/image";
import styles from "../styles/UploadPage.module.css";

// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "../src/graphql/mutations";
// Amplify.configure(awsExports);

const initialState = {
  title: "",
  description: "",
  image: "",
};

// { signOut, user }
function AddNewBlog() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    initialState
  );
  // const [blog, setBlog] = useState(initialState)
  // const [imageFile, setImageFile] = useState("");

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const reader = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });
  };
  const readFile = (file) => {
    reader(file).then((result) => console.log("From reader", result));
  };
  const readBase = (file) => {
    toBase64(file).then((result) => console.log("This is Base64", result));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("This is handleSubmit", state);
    // await API.graphql(graphqlOperation(createTodo, { input: blog }));
    // setBlog(initialState)
    dispatch(initialState);
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
    <main className={styles.title}>
      <h1>Write a new blog entry</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          value={state.title}
          // onChange={handleChange}
          onChange={(e) => dispatch({ title: e.target.value })}
        />
        <textarea
          name="description"
          placeholder="Content..."
          value={state.description}
          rows="4"
          cols="50"
          // onChange={handleChange}
          onChange={(e) => dispatch({ description: e.target.value })}
        />
        <label>
          Add Image:
          <br></br>
          <input
            type="file"
            name="image"
            value={state.image}
            // onChange={(e) => setImageFile(e.target.value)}
            onChange={(e) => dispatch({ image: readBase(e.target.value) })}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      {/* <BlogForm /> */}
      <Image src={upLoadedFile} alt="upload image" width="200" height="200" />
    </main>
  );
}

// export default Upl
export default AddNewBlog;
