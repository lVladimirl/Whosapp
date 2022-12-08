import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);
  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
