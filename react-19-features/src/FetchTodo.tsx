import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const FetchTodo = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
        );

        if (!result.ok)
          throw new Error(`Something went wrong, status: ${result.status}`);

        const data: Todo = await result.json();
        setTodo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodo();
  }, []);

  return (
    <div className="todo">
      {loading ? (
        <div className="loading">
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="todo-contend">
          <h1 className="">{todo?.title}</h1>
        </div>
      )}
    </div>
  );
};

export default FetchTodo;
