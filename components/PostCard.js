function PostCard(props) {
  return ( <>
    <div >
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {/* <p>{props.image}</p> */}
          </div>
  </> );
}

export default PostCard;