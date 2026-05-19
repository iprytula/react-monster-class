import AdminInfo from "./AdminInfo";
import "./App.css";
import UserInfo from "./UserInfo";

function App() {
  return (
    <>
      <h1>React TypeScript Demos</h1>
      <UserInfo id={1} name="John Doe" email="user@example.com"/>
      <AdminInfo id={2} name="Jane Smith" email="admin@example.com" role="Super Admin"/>
    </>
  );
}

export default App;
