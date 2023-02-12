import axios from "axios";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import { IUser } from "types/userTypes";

type TProps = {
  user: IUser;
};

export default function User({ user }: TProps) {
  const router = useRouter();

  return (
    <section>
      {router.isFallback ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          <h1>User Details</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const { data } = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");

  // paths: data.map((user) => ({
  //   params: {
  //     userId: user.id.toString(),
  //   },
  // })),
  return {
    paths: [
      {
        params: {
          userId: "1",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const userId = context.params?.userId as string;

  const { data } = await axios.get<IUser>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return {
    props: {
      user: data,
    },
  };
};
