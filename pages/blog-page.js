import Layout from '../components/Layout'
import fetch from 'node-fetch';
import { getPostsData } from '../lib/posts'

const Blog = ({ posts }) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resolve) => resolve.json())
        .then((json) => console.log("非同期だから後で出る"))
    console.log("こっちが先に出る")
    return (
        <Layout title="Blog">
            { posts && posts.map((post, index) => <p key={index}>aaa</p>)}
        </Layout>

    )
}

export default Blog

export async function getStaticProps() {
    
    const posts = await getPostsData()

    return { props: { posts: posts } }
}