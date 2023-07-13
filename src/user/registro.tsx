import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "/img/LogoAzul.png";
import "./Registro.css";
import { AIResolver, UserResolver } from "./registro.yup";
import { UserType } from "../shared/types/user.type";
import { useQuery } from "react-query";
import { createUser } from "../shared/services/user.service";
import { AcademicInformationType } from "../shared/types/academic-information.type";
import { createAI } from "../shared/services/academic-information.service";

export default function RegistroUsuario() {
  const navigate = useNavigate();

  const { handleSubmit: handleSubmitUser, control: controlUser, getValues: getUserValues } = useForm<Omit<UserType, "id">>({    resolver: UserResolver,
    mode: "all",
    defaultValues: {
      name: "",
      lastName: "",
      rol: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit: handleSubmitAI, control: controlAI, getValues: getAIValues } = useForm<Omit<AcademicInformationType, "id">>({    resolver: AIResolver,
    mode: "all",
    defaultValues: {
      title: "",
      institution: "",
      description: "",
      date: new Date(),
    },
  });

  const { refetch } = useQuery(
    "query-login",
    async () => {
      const userResponse = await createUser(getUserValues());
      const userId = userResponse.data.id;      
      const academicInfoValues = getAIValues();      
      const academicInfo = { ...academicInfoValues, userId };      
      return await createAI(academicInfo);
    },
    {
      enabled: false,
      onSuccess: () => {
        navigate("/login-user");
      },
    }
  );

  const iniciarSesion = () => {
    handleSubmitUser(() => {
      refetch();
    })();
  };

  return (
    <>
      <div className="body px-20 py-10 h-full w-full">
        <div className="header text-center max-w-2xl mx-auto">
          <img src={logo} alt="logo serenity" className="mx-auto mb-4" />
          <p className="mb-2">Te damos la bienvenida a "Serenity", el espacio en línea dedicado a promover el bienestar emocional y psicológico de las personas.</p>
          <span className="text mr-4">¿Ya estas registrado?</span>
          <Link to="/login-user">
            <a href="/" className="text font-bold">
              Clickea aquí.
            </a>
          </Link>
        </div>
        <div className="form-container p-10 my-6 rounded-xl bg-white">
          <h2 className="mb-4 text-lg font-bold">Datos Generales:</h2>
          <div className="row-1 flex flex-col mb-4 md:mb-0 md:flex-row gap-6 w-full">
            <div className="input-field w-full md:w-1/2">
              <label className="block">Nombre:</label>
              <Controller
                name="name"
                control={controlUser}
                render={({ field }) =>(
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu nombre..."
                    required
                  />
                )}
              />
            </div>
            <div className="input-field w-full md:w-1/2">
              <label className="block">Apellidos:</label>
              <Controller
                name="lastName"
                control={controlUser}
                render={({field}) =>(
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tus apellidos..."
                    required
                  />
                )}
              />
            </div>
          </div>
          <div className="row-2 flex flex-col mb-4 md:mb-0 md:flex-row gap-6 w-full">
            <div className="input-field w-full md:w-1/3">
              <label className="block">Correo:</label>
              <Controller
                name="email"
                control={controlUser}
                render={({ field }) =>(
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="email"
                    placeholder="Ingresa tu correo..."
                    required
                  />
                )}
              />
            </div>
            <div className="input-field w-full md:w-1/3">
              <label className="block">Contraseña:</label>
              <Controller
                name="password"
                control={controlUser}
                render={({field}) =>(
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="password"
                    placeholder="Ingresa tu contraseña..."
                    required
                  />
                )}
              />
            </div>
            <div className="input-field w-full md:w-1/3">
              <label className="block">Registrarse como:</label>
              <Controller
                name="rol"
                control={controlUser}
                render={({field}) =>(
                  <select className="select" {...field}>
                    <option value="PSICOLOGIA" selected={field.value === "PSICOLOGIA"}>
                      Psicólogo
                    </option>
                    <option value="PSIQUIATRIA" selected={field.value === "PSIQUIATRIA"}>
                      Psiquiatra
                    </option>
                    <option value="TERAPIA OCUPACIONAL" selected={field.value === "TERAPIA OCUPACIONAL"}>
                      Terapeuta Ocupacional
                    </option>
                    <option value="TERAPIA FAMILIAR" selected={field.value === "TERAPIA FAMILIAR"}>
                      Terapeuta Familiar
                    </option>
                    <option value="PSICOTERAPIA" selected={field.value === "PSICOTERAPIA"}>
                      Psicoterapeuta
                    </option>
                  </select>
                )}
              />
            </div>
          </div>
          <div className="divider w-full mb-4">
            <div className="border-t border-opacity-30 border-black"></div>
          </div>
          <h2 className="mb-4 text-lg font-bold">Información Académica:</h2>
          <div className="row-3 flex flex-col mb-4 md:mb-0 md:flex-row gap-6 w-full">
            <div className="input-field w-full md:w-1/2">
              <label className="block">Titulación:</label>
              <Controller
                name="title"
                control={controlAI}
                render={({ field }) =>(
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu título académico..."
                    required
                  />
                )}
              />
            </div>
            <div className="input-field w-full md:w-1/2">
              <label className="block">Institución de estudios:</label>
              <Controller
                name="institution"
                control={controlAI}
                render={({field}) =>(
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu institución de estudios..."
                    required
                  />
                )}
              />
            </div>
          </div>
          <div className="row-4 flex flex-col mb-4 md:mb-0 md:flex-row gap-6 w-full">
            <div className="input-field w-full">
              <label className="block">Descripción del perfil:</label>
              <Controller
                name="description"
                control={controlAI}
                render={({ field }) =>(
                  <textarea
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Ingresa tu descripción de perfil..."
                    rows={3}
                    maxLength={250}
                    required
                  />
                )}
              />
            </div>
          </div>
          <div className="submit-registro w-full ">
            <input type="button" onClick={iniciarSesion} value="Regístrate" />
          </div>
        </div>
      </div>
    </>

  );
}
