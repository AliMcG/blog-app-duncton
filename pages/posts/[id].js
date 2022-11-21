import styles from "../../styles/Single.module.css"
import testData from "../../Data/testPostData";
// import { API, graphqlOperation } from 'aws-amplify';
// import { listTodos, getTodo } from "../../src/graphql/queries";


export const getStaticPaths = async () => {
  // const data = await API.graphql({ query: listTodos });

  const paths = testData.map(post => {
    return {
      params: { id: post.id.toString() }
    }
  }
  )

  return {
    paths,
    fallback: false
  }
}


// // Query using a parameter
// const oneTodo = await API.graphql({
//   query: queries.getTodo,
//   variables: { id: 'some id' }
// });

export const getStaticProps = async (context) => {
  const id = context.params.id
  // const data = await API.graphql(graphqlOperation(getTodo, { id: id }));
  const data = testData[id]
  

  return {
    props: { post: data}
  }
}

const BlogDetails = ({ post }) => {
  // console.log(post.data.getTodo.title)
  return ( 
    <div className={styles.single}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>

    </div>
   );
}
 
export default BlogDetails;
