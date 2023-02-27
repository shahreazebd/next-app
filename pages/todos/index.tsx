import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import type { GetServerSideProps } from "next";

export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function fetchTodos(userId: string) {
  const params: { userId?: string } = {};

  if (userId) params.userId = userId;

  return axios<TTodo[]>({
    url: "https://jsonplaceholder.typicode.com/todos",
    params,
  });
}

type TTodoListProps = {
  todoData: TTodo[];
};

export default function TodoList({ todoData }: TTodoListProps) {
  const [todos, setTodos] = useState(todoData);

  const router = useRouter();
  const [q, setQ] = useState(router.query.userId as string);

  useEffect(() => {
    fetchTodos(q).then((res) => {
      setTodos(res.data);
      router.push(`/todos?userId=${q}`, undefined, { shallow: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return (
    <section>
      <h1>Todos</h1>
      <input type="text" onChange={(e) => setQ(e.target.value)} />
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const { data } = await fetchTodos(query.userId as string);

  return {
    props: {
      name: "Shahreaz",
      todoData: data,
    },
  };
};
