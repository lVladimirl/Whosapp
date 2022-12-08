import { createContext, useState } from "react";
// import { api } from "../services/api";
// import { useNavigate } from "react-router";

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
