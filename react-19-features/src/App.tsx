import { Suspense } from "react";
import "./App.css";
import FetchTodo from "./FetchTodo";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <FetchTodo/>
    </Suspense>
  );
}

export default App;
