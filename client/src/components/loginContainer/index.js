import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Api } from "../../services/api";
export function LoginContainer() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Required field!")
      .min(6, "minimum 6 characters"),
    nomeCompleto: yup.string().required("Required field!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const formData = {
      nome: data.nomeCompleto,
      senha: data.password,
    };
    Api.post("login", formData)
      .then((resp) => {
        console.log(resp.data)
        localStorage.setItem("@WHO-TOKEN", resp.data.token);
        navigate("/homepage");
      })
      .catch((error) => {
        console.log(error);
      });
    // Api.get("users")
    //   .then((resp) => {
    //     console.log(resp.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <div className="form-login-inputs">
          <label>Nome Completo</label>
          <input
            placeholder="nome completo..."
            {...register("nomeCompleto")}
          ></input>
          {errors && <small>{errors.nomeCompleto?.message}</small>}

          <label>Senha</label>
          <input placeholder="senha..." {...register("password")}></input>
          {errors && <small>{errors.password?.message}</small>}
        </div>
        <button type="submit">Logar</button>
        <p>Não possui conta? cadastre-se</p>
      </form>
    </div>
  );
}
