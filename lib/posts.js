import fetch from "node-fetch";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getPostsData() {
  const response = await fetch(new URL(postsUrl));
  const posts = await response.json();

  return posts;
}

export async function getPostIds() {
  const response = await fetch(new URL(postsUrl));
  const posts = await response.json();
  const ids = posts.map((post) => {
    return { params: { id: String(post.id) } };
  });

  return ids;
}

export async function getPost(id) {
  const response = await fetch(new URL(`${postsUrl}/${id}`));
  const post = await response.json();

  return post;
}