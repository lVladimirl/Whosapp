import { createContext, useState } from "react";
// import { api } from "../services/api";
// import { useNavigate } from "react-router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);
  // const navigate = useNavigate();

  // const [user, setUser] = useState(null);
  // const [allUsers, setAllUsers] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("@WHO-TOKEN");
  //   const id = localStorage.getItem("@WHO-ID");

  //   async function logado() {
  //     try {
  //       const parsedToken = JSON.parse(token);
  //       const idParsed = JSON.parse(id);
  //       const response = await api.get(`/users/${idParsed}`, {
  //         headers: {
  //           Authorization: `Bearer ${parsedToken}`,
  //         },
  //       });
  //       setUser(response.data);
  //     } catch (error) {
  //       localStorage.removeItem("@WHO-ID");
  //       localStorage.removeItem("@WHO-TOKEN");
  //     }
  //   }
  //   logado();
  // }, []);

  // async function userLogin(formData, setError) {
  //   try {
  //     const response = await api.post("/login", formData);
  //     setUser(response.data.user);
  //     localStorage.setItem(
  //       "@who-TOKEN",
  //       JSON.stringify(response.data.accessToken)
  //     );
  //     localStorage.setItem("@WHO-ID", response.data.user.id);
  //     navigate("/");
  //   } catch (error) {
  //     setError(error.response.data);
  //     setTimeout(() => {
  //       setError(false);
  //     }, 5000);
  //     console.log(error.response.data);
  //   }
  // }

  // async function userCreate(formData, setError, setSuccess) {
  //   try {
  //     await api.post("/users", formData);
  //     setSuccess(true);
  //     setTimeout(() => {
  //       setSuccess(false);
  //       navigate("/login");
  //     }, 3000);
  //   } catch (error) {
  //     setError(error.response.data);
  //     setTimeout(() => {
  //       setError(false);
  //     }, 5000);
  //   }
  // }

  // async function userEdit(userId, formData, setSuccess) {
  //   try {
  //     const token = JSON.parse(localStorage.getItem("@WHO-TOKEN"));
  //     await api.patch(`users/${userId}`, formData, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setSuccess(true);
  //     setTimeout(() => {
  //       setSuccess(false);
  //       navigate("/");
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function getAllUsers() {
  //   try {
  //     const token = localStorage.getItem("@WHO-TOKEN");
  //     const parsedToken = JSON.parse(token);
  //     const response = await api.get(`/users`, {
  //       headers: {
  //         Authorization: `Bearer ${parsedToken}`,
  //       },
  //     });
  //     setAllUsers(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
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
