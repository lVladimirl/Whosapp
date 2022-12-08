// import "./style.css";
import { Api } from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { ErrorModal } from "../errorModal";
import { UserContext } from "../../context/user.context";

export function RegisterContactContainer({ handleRegisterContact }) {
  const [formError, setFormError] = useState(null);
  const { user } = useContext(UserContext);
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
      telefone: data.telefone.split(", "),
    };

    Api.post("contacts/" + user.id, formData)
      .then((resp) => {
        handleRegisterContact();
      })
      .catch((error) => {
        setFormError(error.response.data);
      });
  };

  return (
    <div className="container">
      {formError && (
        <ErrorModal
          message={formError.message}
          statusCode={formError.statusCode}
        />
      )}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro de Contatos</h2>

        <div className="form-inputs">
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
      </form>
      <button onClick={handleRegisterContact}>voltar</button>
    </div>
  );
}
