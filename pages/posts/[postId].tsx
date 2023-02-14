import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";
// import { fetchPosts } from ".";
import axios from "axios";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// eslint-disable-next-line no-console
console.log("hello");

const fetchPostDetails = (postId: string) => {
  return axios.get<TPost>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

type TPostProps = {
  postData: TPost;
};
export default function Post(props: TPostProps) {
  const router = useRouter();

  if (router.isFallback) return <p>loading</p>;
  return (
    <section>
      <h1>{props.postData.title}</h1>
      <p>{props.postData.body}</p>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const { data } = await fetchPostDetails(params?.postId?.toString() as string);

  return {
    props: {
      postData: data,
    },
  };
};
