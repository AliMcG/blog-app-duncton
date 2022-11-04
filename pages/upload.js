import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
import { useReducer, useState } from "react"
import { API } from "aws-amplify";
import * as mutations from '../src/graphql/mutations';
Amplify.configure(awsExports);

// boilerplate from AWS S3 Storage bucket
import { Storage } from "@aws-amplify/storage"

// await Storage.put('test.txt', 'Protected Content', {
//     level: 'protected',
//     contentType: 'text/plain'
// });


// this page should be secure

const initialState = {
  id: 1,
  title: "",
  description: "",
  // imageFile: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return {
        ...state,
        title: action.title,
      }
    case "description":
      return {
        ...state,
        description: action.description
      }
    case "image":
      return {
        imageFile: action.imageFile
      }
    case "submit":
      return {
        ...initialState
      }
    default:
      return state;
  }}

function Upload({ signOut, user }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const [imageFile, setImageFile] = useState("")

  async function handleSubmit(e) {
    
    // const { title, blogText } = e.target;
    console.log("This was called with: ", state);

    // this doesn't create a new blogpost: 
    // const newTodo = await API.graphql({ query: mutations.createPost, variables: {input: state}});
    // console.log("posted data: ", newTodo)
    dispatch({ type: "submit" })
    // dispatch({
    //   type: "add_blogs",
    //   title: title,
    //   blogText: content
    // });
    // setTitle("")
    // setBlogText("")
    // setImageFile("")
    e.preventDefault()
  }

  function handleChange(event){
    // destructs the event.target
    const { name, value } = event.target;
    // using prevValue of the state object, the spread operator to spread then add the new value.
    // [name] reads the name from the input tag
    dispatch({ type: name, [name]: value });
  }

  return ( <>
    
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <br></br>
      <h1>Write a new blog entry</h1>
      <form onSubmit={handleSubmit} >
          
            <input 
              type="text" 
              name="title"
              placeholder="Title..."
              value={state.title}
              onChange={handleChange} />
          
          <br></br>
          
            <textarea 
              name="description"
              placeholder="Content..."
              value={state.description}
              rows="4" 
              cols="50"
              onChange={handleChange} />
          <br></br>
          <label>
            Add Image:
            <br></br>
            <input 
              type="file"
              name="image"
              value={imageFile}
              onChange={(e) => setImageFile(e.target.value)} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
    </>
  </> );
}

export default withAuthenticator(Upload);