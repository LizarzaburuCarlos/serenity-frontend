import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../shared/yupLocale";
import { UserType } from "../shared/types/user.type";

const RegistroSchema: yup.SchemaOf<Omit<UserType, "id" | "rol">> = yup
  .object()
  .shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup
      .string()
      .email("No tiene un formato válido")
      .required("Esta campo es requerido"),
    password: yup.string().required("Este campo es requerido"),
  });

export const RegistroResolver = yupResolver(RegistroSchema);
