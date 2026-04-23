import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";
import UpdateUser from "./components/UpdateUser";
import { UserContext, UserProvider } from "./components/UserContext";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  )
};

export default App;