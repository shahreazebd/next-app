import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";

import { IUser } from "@/types/userTypes";

type TProps = {
  users: IUser[];
};

export default function Users({ users }: TProps) {
  return (
    <section>
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <Link key={user.id} href={`/user/${user.id}`}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");

  return {
    props: {
      users: data,
    },
  };
};
