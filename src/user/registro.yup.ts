import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../shared/yupLocale";
import { UserType } from "../shared/types/user.type";
import { AcademicInformationType } from "../shared/types/academic-information.type";

const UserSchema: yup.SchemaOf<Omit<UserType, "id">> = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  rol: yup.string().required(),
  email: yup
    .string()
    .email("No tiene un formato válido")
    .required("Esta campo es requerido"),
  password: yup.string().required("Este campo es requerido"),
});

const AISchema: yup.SchemaOf<Omit<AcademicInformationType, "id">> = yup.object().shape({
  title: yup.string().required(),
  institution: yup.string().required(),
  description: yup.string().required(),
  date: yup.date().required(),
});

export const UserResolver = yupResolver(UserSchema);
export const AIResolver = yupResolver(AISchema);