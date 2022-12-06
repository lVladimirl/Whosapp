import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";

export function Homepage() {
  const { login, setLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@WHO-TOKEN");
    if (token) {
      setLogin(true);
    }else {
      navigate("/")
    }
  }, [login]);
  return (
    <>
        <p>monek</p>
    </>
  );
}
