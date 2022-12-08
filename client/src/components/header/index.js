import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import "./index.css";
export const Header = () => {
  const { login, setLogin } = useContext(UserContext);
  const navigate = useNavigate();

  function handleGoTologin(){
    navigate("/")
  }
  function handleGoHome(){
    navigate("/homepage")
  }
  useEffect(() => {
    const token = localStorage.getItem("@WHO-TOKEN")
    if(token) {
      setLogin(true)
    }
  }, []);
  return (
    <>
      <div className="header">
        <h1>Whosapp</h1>
        {login && login ? <button onClick={handleGoHome}>Home</button> : <button onClick={handleGoTologin}>Login</button>}
      </div>
    </>
  );
};
