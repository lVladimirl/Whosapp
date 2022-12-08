import "./style.css";
import { Api } from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export function RegisterContactContainer({ handleRegisterContact }) {
  const [registerError, setRegisterErrorr] = useState(null);

  const schema = yup.object().shape({
    nome: yup.string().required("Required field!"),
    email: yup.string().required("Required field!"),
    telefone: yup.string().required("Required field!"),
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
    };

    Api.post("contacts", formData)
      .then((resp) => {
        handleRegisterContact();
      })
      .catch((error) => {
        setRegisterErrorr(error.response.data);
      });
  };

  return (
    <div className="homepage-register-contact-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro de Contatos</h2>

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
        </div>
        <button type="submit">Salvar Contato</button>
        <p onClick={handleRegisterContact}>voltar</p>
      </form>
    </div>
  );
}
