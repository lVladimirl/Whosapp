import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Api } from "../../services/api";
export function LoginContainer() {
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
        console.log(resp.data);
        localStorage.setItem("@WHO-TOKEN", resp.data.token);
        navigate("/homepage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <div className="form-login-inputs">
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
