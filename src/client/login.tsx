import logo from "/img/LogoBlanco.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { LoginResolver } from "./login.yup";
import { useQuery } from "react-query";
import { useSerenityContext } from "../shared/contexts/SerenityProvider";
import { getClientByEmailAndPassword } from "../shared/services/client.service";
import { LeftCircleOutlined } from "@ant-design/icons";

export default function LoginClient() {
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
      return await getClientByEmailAndPassword(
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
    <div className="contenedor mx-auto">
      <div className="container-forms">
        <div className="forms relative">
          <a href="/" className="rollback z-20"><LeftCircleOutlined className="text-4xl text-tertiaryColor"/></a>
          <div className="form-login-cliente">
            <img src={logo} alt="" className="logo-cliente" />
            <p className="text-center font-semibold text-lg">Paciente</p>
            <div className="input-field-cliente">
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
            <div className="input-field-cliente">
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

            <div className="input-field-cliente button">
              <input type="button" onClick={onLogin} value="Iniciar Sesión" />
            </div>

            <div className="login-signup-cliente">
              <span className="text">¿No estas registrado?</span>
              <Link to="/registro-client">
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
