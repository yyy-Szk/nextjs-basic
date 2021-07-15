import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title={"title"}>
      <div>ID: {id}</div>
    </Layout>
  );
}
