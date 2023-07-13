import logo from "/img/LogoBlanco.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { LoginResolver } from "./login.yup";
import { useQuery } from "react-query";
import { getUserByEmailAndPassword } from "../shared/services/user.service";
import { useSerenityContext } from "../shared/contexts/SerenityProvider";
import { LeftCircleOutlined } from "@ant-design/icons";

export default function LoginUsuario() {
  const navigate = useNavigate();

  const {
    user: { setUser },
  } = useSerenityContext();

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>({
    resolver: LoginResolver,
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { refetch } = useQuery(
    "query-login",
    async () => {
      return await getUserByEmailAndPassword(
        getValues().email,
        getValues().password
      );
    },
    {
      enabled: false,
      onSuccess: ({ data }) => {
        setUser(data);
        navigate("/home");
      },
    }
  );

  const onLogin = () => {
    handleSubmit(() => {
      refetch();
    })();
  };

  return (
    <div className="contenedor">
      <div className="container-forms">
        <div className="forms relative">
          <a href="/" className="rollback z-20"><LeftCircleOutlined className="text-4xl text-tertiaryColor"/></a>
          <div className="form-login">
            <img src={logo} alt="" className="logo-user" />
            <p className="text-center font-semibold text-lg">Especialista</p>

            <div className="input-field">
              <label>Usuario:</label>
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
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field button">
              <input type="button" onClick={onLogin} value="Iniciar Sesión" />
            </div>

            <div className="login-signup">
              <span className="text">¿No estas registrado?</span>
              <Link to="/registro-user">
                <a className="text signup-text">Clickea aquí.</a>
              </Link>
            </div>

            <div className="errors-message text-center -mt-6">
              <div>{errors.email ? "Corregir el email" : ""}</div>
              <div>{errors.password ? "Corregir la contraseña" : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}