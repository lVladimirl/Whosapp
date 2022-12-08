import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

// import "./style.css";
import { Api } from "../../services/api";
import { useState } from "react";
import { ErrorModal } from "../errorModal";
export function LoginContainer() {
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  function handleGoToRegister() {
    navigate("/register");
  }

  const schema = yup.object().shape({
    senha: yup
      .string()
      .required("Required field!")
      .min(6, "minimum 6 characters"),
    nome: yup.string().required("Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    Api.post("login", data)
      .then((resp) => {
        localStorage.setItem("@WHO-TOKEN", resp.data.token);
        navigate("/homepage");
      })
      .catch((error) => {
        setFormError(error.response.data);
      });
  };

  return (
    <div id="login-register" className="container">
      {formError && (
        <ErrorModal
          message={formError.message}
          statusCode={formError.statusCode}
        />
      )}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <div className="form-inputs">
          <label>Nome Completo</label>
          <input placeholder="nome completo..." {...register("nome")}></input>
          {errors && <small>{errors.nome?.message}</small>}

          <label>Senha</label>
          <input placeholder="senha..." {...register("senha")}></input>
          {errors && <small>{errors.senha?.message}</small>}
        </div>
        <button type="submit">Logar</button>
        <p onClick={handleGoToRegister}>Não Possui conta? Faça Cadastro</p>
      </form>
    </div>
  );
}
