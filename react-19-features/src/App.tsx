import { Suspense } from "react";
import "./App.css";
import FetchTodo from "./FetchTodo";
import { ThemeProvider } from "./ThemeProvider";
import Card from "./Card";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <FetchTodo />
      </Suspense>
      <ThemeProvider>
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
