import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./style.css";
import { Api } from "../../services/api";
import { useState } from "react";
import { ErrorModal } from "../errorModal";
export function RegisterContainer() {
  const [registerError, setRegisterErrorr] = useState(null);

  const navigate = useNavigate();

  function handleGoToLogin() {
    navigate("/");
  }

  const schema = yup.object().shape({
    nome: yup.string().required("Required field!"),
    email: yup.string().required("Required field!"),
    telefone: yup.string().required("Required field!"),
    senha: yup
      .string()
      .required("Required field!")
      .min(6, "minimum 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const formData = {
      nome: data.nome,
      email: data.email.split(", "),
      telefone: data.email.split(", "),
      senha: data.senha,
    };

    Api.post("users", formData)
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("@WHO-ID", resp.data.id);
        navigate("/");
      })
      .catch((error) => {
        console.log(registerError);
        setRegisterErrorr(error.response.data);
      });
  };

  return (
    <div className="register-container">
      {registerError && (
        <ErrorModal
          message={registerError.message}
          statusCode={registerError.statusCode}
        />
      )}
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro</h2>

        <div className="form-register-inputs">
          <label>Nome Completo</label>
          <input placeholder="nome completo..." {...register("nome")}></input>
          {errors && <small>{errors.nome?.message}</small>}

          <label>Email</label>
          <input
            placeholder="pedrinho@gmail.com, marquinhos@gmail.com..."
            {...register("email")}
          ></input>
          {errors && <small>{errors.email?.message}</small>}

          <label>Telefone</label>
          <input
            placeholder="40028922, 50135080..."
            {...register("telefone")}
          ></input>
          {errors && <small>{errors.telefone?.message}</small>}

          <label>Senha</label>
          <input placeholder="senha..." {...register("senha")}></input>
          {errors && <small>{errors.senha?.message}</small>}
        </div>
        <button type="submit">Logar</button>
        <p onClick={handleGoToLogin}>Possui uma conta? Faça login</p>
      </form>
    </div>
  );
}
