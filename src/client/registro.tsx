import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "/img/LogoBlanco.png";
import "./Registro.css";
import { RegistroResolver } from "./registro.yup";
import { UserType } from "../shared/types/user.type";
import { useQuery } from "react-query";
import { createClient } from "../shared/services/client.service";

export default function RegistroClient() {
  const navigate = useNavigate();

  const { handleSubmit, control, getValues } = useForm<
    Omit<UserType, "id" | "rol">
  >({
    resolver: RegistroResolver,
    mode: "all",
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const { refetch } = useQuery(
    "query-login",
    async () => {
      return await createClient(getValues());
    },
    {
      enabled: false,
      onSuccess: () => {
        navigate("/login-client");
      },
    }
  );

  const iniciarSesion = () => {
    handleSubmit(() => {
      refetch();
    })();
  };

  return (
    <div className="container">
      <div className="container-forms">
        <div className="forms">
          <div className="welcome hidden md:flex">
            <img src={logo} alt="" className="logo-register block" />
            <p>
              Te damos la bienvenida a "Serenity", el espacio en línea dedicado
              a promover el bienestar emocional y psicológico de las personas.
            </p>
            <div className="login-signup flex">
              <span className="text">¿Ya estas registrado?</span>
              <Link to="/login-client">
                <a href="/" className="text signup-text">
                  Clickea aquí.
                </a>
              </Link>
            </div>
          </div>
          <div className="registro-form fit-content">
            <img src={logo} alt="" className="logo-register block md:hidden" />
            <div className="input-field">
              <label>Nombre:</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field">
              <label>Apellidos:</label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tus apellidos"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field">
              <label>Correo:</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu correo"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field">
              <label>Contraseña:</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu contraseña"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field button">
              <input
                type="button"
                onClick={iniciarSesion}
                value="Regístrate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
