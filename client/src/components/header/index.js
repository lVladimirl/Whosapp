import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import "./index.css";
export const Header = () => {
  const { login, setLogin } = useContext(UserContext);
  const navigate = useNavigate();

  function handleGoTologin(){
    navigate("/")
  }
  function handleGoToProfile(){
    navigate("/profile")
  }
  useEffect(() => {
    const token = localStorage.getItem("@WHO-TOKEN")
    if(token) {
      setLogin(true)
    }
  }, [login]);
  return (
    <>
      <div className="header">
        <h1>Whosapp</h1>
        {login && login ? <button onClick={handleGoToProfile}>Perfil</button> : <button onClick={handleGoTologin}>Login</button>}
      </div>
    </>
  );
};
