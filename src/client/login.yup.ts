import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../shared/yupLocale";

const LoginSchema: yup.SchemaOf<{ email: string; password: string }> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("No tiene un formato válido")
      .required("Esta campo es requerido"),
    password: yup.string().required("Este campo es requerido"),
  });

export const LoginResolver = yupResolver(LoginSchema);
