import styles from "../../styles/Single.module.css"
import { API, graphqlOperation } from 'aws-amplify';
// import { listPosts, getPost } from "../src/graphql/queries"; 

// export const getStaticPaths = async () => {
  // const data = await API.graphql({ query: listPosts });

  // const paths = data.data.listPosts.items.map(post => {
  //   return {
  //     params: { id: post.id.toString() }
  //   }
  // }
  // )

  // return {
  //   paths,
  //   fallback: false
  // }
// }


// // Query using a parameter
// const oneTodo = await API.graphql({
//   query: queries.getTodo,
//   variables: { id: 'some id' }
// });

export const getStaticProps = async (context) => {
  // const id = context.params.id
  const data = await API.graphql(graphqlOperation(getPost, { id: id }));
  

  return {
    props: { post: data }
  }
}

const BlogDetails = ({ post }) => {
  return ( 
    <div className={styles.single}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

    </div>
   );
}
 
export default BlogDetails;
