import axios from "axios";
import type { GetServerSideProps } from "next";
import Link from "next/link";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPosts = () => {
  return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
};

export type PostsProps = {
  posts: Post[];
};

export default function Posts(props: PostsProps) {
  return (
    <section>
      <h1>Posts</h1>
      <ol>
        {props.posts.map((post) => (
          <li key={post.id} style={{ fontSize: 24, margin: 30 }}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await fetchPosts();
  return {
    props: {
      posts: data,
    },
  };
};
