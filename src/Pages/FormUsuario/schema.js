import * as yup from "yup";
import { YupStringRequired } from "../../shared/utils/yupValidatros";

export const USUARIO_FORM_SCHEMA = yup.object({
  name: YupStringRequired(),
  email: YupStringRequired().email("O email deve ser válido"),
  cellphone: YupStringRequired(),
  age: YupStringRequired(),
  country: YupStringRequired(),
  state: YupStringRequired(),
  city: YupStringRequired(),
});

export const USUARIO_FORM_DEFAULT_VALUES = {
  nome: "",
  email: "",
  telefone: "",
  idade: "",
  pais: "",
  estado: "",
  cidade: "",
  atributos: "",
};
