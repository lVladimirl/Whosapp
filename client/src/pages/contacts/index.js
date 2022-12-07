import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContactContainer } from "../../components/registerContact";
import { RegisterContainer } from "../../components/registerUser";
import { ViewContactContainer } from "../../components/viewContact";

import { UserContext } from "../../context/user.context";
import "./style.css";

export function Contacts() {
  const { login, setLogin } = useContext(UserContext);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [viewIsOpen, setViewIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleRegisterContact() {
    setRegisterIsOpen(!registerIsOpen);
    setViewIsOpen(false);
  }
  function handleViewContact() {
    setViewIsOpen(!viewIsOpen);
    setRegisterIsOpen(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("@WHO-TOKEN");
    if (token) {
      setLogin(true);
    } else {
      navigate("/");
    }
  });
  return (
    <>
      {(registerIsOpen === false) & (viewIsOpen === false) ? (
        <div className="contact-container">
          <button onClick={handleRegisterContact}>criar contato</button>
          <button onClick={handleViewContact}>visualizar contatos</button>
        </div>
      ) : (
        <></>
      )}
      {viewIsOpen && (
        <ViewContactContainer handleViewContact={handleViewContact} />
      )}
      {registerIsOpen && (
        <RegisterContactContainer
          handleRegisterContact={handleRegisterContact}
        />
      )}
    </>
  );
}
