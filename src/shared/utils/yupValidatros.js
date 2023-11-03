import * as yup from "yup";

export const YupStringRequired = (requiredText) =>
  yup.string().required(requiredText || "Campo obrigátorio");
