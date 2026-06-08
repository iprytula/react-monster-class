import { use } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todoPromise: Promise<Todo> = fetch(
  "https://jsonplaceholder.typicode.com/todos/1"
).then(res => res.json());

const FetchTodo = () => {
  const data = use(todoPromise);

  return (
    <div className="todo">
      <h1>{data.title}</h1>
    </div>
  );
};

export default FetchTodo;