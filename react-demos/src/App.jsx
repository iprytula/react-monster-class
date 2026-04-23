import BasicEffect from "./components/BasicEffect";
import Counter from "./components/Counter";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";
import UpdateUser from "./components/UpdateUser";
import { UserContext, UserProvider } from "./components/UserContext";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <>
      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> */}
      <Counter />
    </>
  )
};

export default App;