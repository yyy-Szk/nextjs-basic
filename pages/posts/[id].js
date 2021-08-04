import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getPostIds, getPost } from "../../lib/posts";

export default function Post({ post }) {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <Layout title={post.title}>
      <div>ID: {post.id}</div>
      <div>BODY: {post.body}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);

  return {
    props: { post },
  };
}
