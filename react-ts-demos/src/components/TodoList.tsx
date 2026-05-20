import { useState, useEffect } from 'react'
import type { Todo } from '../interfaces';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status}`);
        }

        const todosResponse: Todo[] = await response.json();
        setTodos(todosResponse); 
      } catch (error) {
        console.error('Failed to load todos', error);
      }
    };

    loadTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '(done)' : '(pending)'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList