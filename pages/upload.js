// import { Amplify, Auth } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// import awsExports from "../src/aws-exports";
import { useState, useReducer, useEffect } from "react";
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
// sets the file input default to these image.files.types
const imageMimeType = /image\/(png|jpg|jpeg)/i;

function AddNewBlog() {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(false);

  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    initialState
  );

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        console.log(result);
        if (result && !isCancel) {
          dispatch({ image: result });
          setFileDataURL(true);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("This is handleSubmit", state);
    dispatch(initialState);
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
          onChange={(e) => dispatch({ title: e.target.value })}
        />
        <textarea
          name="description"
          placeholder="Content..."
          value={state.description}
          rows="4"
          cols="50"
          onChange={(e) => dispatch({ description: e.target.value })}
        />
        <label>
          Add Image:
          <br></br>
          <input type="file" name="image" onChange={changeHandler} />
        </label>

        <input type="submit" value="Submit" />
      </form>

      {fileDataURL ? (
        <p className="img-preview-wrapper">
          {
            <Image
              src={state.image}
              alt="upload image"
              width="200"
              height="200"
            />
          }
        </p>
      ) : null}
    </main>
  );
}

export default AddNewBlog;

// function handleChange(event) {
//   // destructs the event.target
//   const { name, value } = event.target;

//   // using prevValue of the state object, the spread operator to spread then add the new value.
//   // [name] reads the name from the input tag
//   setBlog((prevValue) => {
//     return { ...prevValue, [name]: value };
//   });
// }

// const toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   const reader = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.onload = () => resolve(fileReader.result);
//       fileReader.readAsDataURL(file);
//     });
//   };
//   const readFile = (file) => {
//     reader(file).then((result) => console.log("From reader", result));
//   };
//   const readBase = (file) => {
//     toBase64(file).then((result) => console.log("This is Base64", result));
//   };
