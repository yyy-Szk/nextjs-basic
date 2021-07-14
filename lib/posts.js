import fetch from 'node-fetch'
const postsUrl = "https://jsonplaceholder.typicode.com/posts"

export async function getPostsData() {
  const response = await fetch(new URL(postsUrl))
  console.log("res", response)
  const posts = await response.json()

  return posts
}