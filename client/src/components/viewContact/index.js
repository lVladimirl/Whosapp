import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function ViewContactContainer({handleViewContact}) {
  const [registerError, setRegisterErrorr] = useState(null);

  const navigate = useNavigate();

    // Api.post("contacts", formData)
    //   .then((resp) => {
    //     handleRegisterContact()
    //   })
    //   .catch((error) => {
    //     setRegisterErrorr(error.response.data);
    //   });

  return (
    <div className="view-container">
      <p onClick={handleViewContact}>voltar</p>
     <div className="view-container-contact">
        <h3>Nome completo</h3>
        <p>dois primeiros telefones</p>
        <p>dois primeiros emails</p>
     </div>
    </div>
  );
}
