function PostCard(props) {
  return ( <>
    <div className={styles.card}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.image}</p>
          </div>
  </> );
}

export default PostCard;