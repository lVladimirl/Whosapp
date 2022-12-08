import "./style.css";
import { Api } from "../../services/api";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RegisterContactContainer } from "../../components/registerContact";
import { ViewContactContainer } from "../../components/viewContact";

export function Homepage() {
  const { setLogin } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  const [viewIsOpen, setViewIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

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
  useEffect(() => {
    Api.get("users/profile").then((resp) => {
      setUser(resp.data);
    });
  }, [user]);
  return (
    <>
      <div className="Homepage-profile">
        <div className="Homepage-profile-info">
          <h1>nome</h1>
          <div className="Homepage-profile-info-contacts">
            <div>
              <h2>emails</h2>
              <ul>
                {user?.email?.map((elem, index) => (
                  <li key={index}>{elem}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2>telefones</h2>
              <ul>
              {user?.telefone?.map((elem, index) => (
                  <li key={index}>{elem}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {(registerIsOpen === false) & (viewIsOpen === false) ? (
          <div className="Homepage-contact-info">
            <button onClick={handleRegisterContact}>criar contato</button>
            <button onClick={handleViewContact}>visualizar contatos</button>
          </div>
        ) : (
          <></>
        )}
        {registerIsOpen && (
          <RegisterContactContainer
            handleRegisterContact={handleRegisterContact}
          />
        )}
        {viewIsOpen && (
          <ViewContactContainer handleViewContact={handleViewContact} />
        )}
      </div>
    </>
  );
}
