import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { instance } from "shared/services/axios/requests";
import { ToastContainer, toast } from "react-toastify";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormUsuario } from "../FormUsuario";
import {
  USUARIO_FORM_DEFAULT_VALUES,
  USUARIO_FORM_SCHEMA,
} from "../FormUsuario/schema";
import { DivMain } from "Pages/ListUsuarios/style";

export const CreateUsuario = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(USUARIO_FORM_SCHEMA),
    defaultValues: USUARIO_FORM_DEFAULT_VALUES,
  });

  const toList = () => {
    navigate("/")
  }

  const fetchApi = useCallback(
    (formData) => {
      async function cadastraUsuario() {
        try {
          await instance.post("/users", formData);
          toast.success("Cadastro realizado com sucesso!");
          navigate("/");
        } catch (err) {
          toast.error("Ocorreu um erro, tente novamente mais tarde!");
        }
      }
      cadastraUsuario();
    },
    [navigate]
  );

  return (
    <DivMain>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <FormUsuario
        control={control}
        onSubmitCallback={handleSubmit(fetchApi)}
        onBackToList={toList()}
        title="Cadastro de Usuário"
      />
    </DivMain>
  );
};
