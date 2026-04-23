import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({name: "John Doe"});

  const updateUser = (updatedUser) => setUser(updatedUser);

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };