import Layout from "../components/Layout";
import fetch from "node-fetch";
import Post from "../components/Post";
import { getPostsData } from "../lib/posts";

const Blog = ({ posts }) => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((resolve) => resolve.json())
  //     .then((json) => console.log("非同期だから後で出る"));
  //   console.log("こっちが先に出る");
  //   <Post key={1} post={{ id: 1, title: "test" }} />
//   {posts && posts.map((post) => <Post key={post.id} post={post} />)}
//   {posts && posts.map((post) => <Post key={post.id} post={post} />)}

  return (
    <Layout title="Blog">
      <ul className="m-10">
          <Post key={posts[0].key} post={posts[0]}/>
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getPostsData();
//   console.log(posts);

  return { props: { posts: posts } };
}
