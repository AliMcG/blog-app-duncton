import { useState, useReducer, useEffect } from "react";
import BlogForm from "../components/BlogForm";
import Image from "next/image";
import styles from "../styles/UploadPage.module.css";
import { Editor } from "@tinymce/tinymce-react";
import { Markup } from 'interweave';


const initialState = {
  title: "",
  description: "",
  image: "",
};
// sets the file input default to these image.files.types
 // Multipurpose Internet Mail Extensions
const imageMimeType = /image\/(png|jpg|jpeg)/i;

function AddNewBlog() {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(false);
  const [testText, setTestText] = useState("")

  const [state, dispatch] = useReducer(
    // deconstructs the object from the dispatch function. 
    (state, action) => ({
      ...state,
      ...action,
    }),
    initialState
  );
  
  // destructs the event which is an array to get the file object.
  // Checks that the file format is correct.
  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
    // to clear input field
    e.target.value = null;
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    // creates a new FileReader to read the uploaded file.
    // fileReader is async by default
    // fileReader.onload happens automatically after async fileReader.readAsDataURL has returned the file.
    if (file) {
      fileReader = new FileReader();
      // the event of fileReader is the return of the async fileReader.readAsDataURL.
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          // adds the data:url of uploaded file to state.image
          console.log(result)
          dispatch({ image: result });
          // boolean switch to control the image preview div in component render.
          setFilePreview(true);
        }
      };
      fileReader.readAsDataURL(file);
    }
    // return cleanup function to clear the current useEffect and reset for a new file upload.
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  async function handleSubmit(e) {
    e.preventDefault();
    // onSubmit will POST to the database
    console.log("This is handleSubmit", state);
    const res = await fetch("http://localhost:4000/api/blogs/blogs-data", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(state)
    })
    const result = await res.json()
    console.log(result)

    // resets the form data to empty stings
    dispatch(initialState);
    // to remove preview after submit
    setFilePreview(false);
    console.log("Test text", testText)
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
        {/* a fully editable text area */}
        <Editor 
          // initialValue='<p>Once upon a time...</p>'
          name="description"
          value={state.description}
          init={{height: 400, width: 800, menubar: false}}
          onEditorChange={(e) => dispatch({ description: e })}
          />
        {/* <textarea
          name="description"
          placeholder="Content..."
          value={state.description}
          rows="4"
          cols="50"
          onChange={(e) => dispatch({ description: e.target.value })}
        /> */}
        <label>
          Add Image:
          <br></br>
          <input type="file" name="image" onChange={changeHandler} />
        </label>

        <input type="submit" value="Submit" />
      </form>

      {filePreview ? (
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
      {testText ? (
        
        <div>
        {/* this shows the the html tags and content from the Rich Text input */}
        <textarea
          name="output"
          value={testText}
          rows="4"
          cols="50"
        />
        {/* This show the text only from the Rich Text input */}
        <Markup content={testText} />
        </div>
      ) : null}
    </main>
  );
}

export default AddNewBlog;
