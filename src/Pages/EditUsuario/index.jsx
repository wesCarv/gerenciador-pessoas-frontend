/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { instance } from "shared/services/axios/requests";
import { ToastContainer, toast } from "react-toastify";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormUsuario } from "../FormUsuario";
import { DivMain } from "Pages/ListUsuarios/style";
import {
  USUARIO_FORM_DEFAULT_VALUES,
  USUARIO_FORM_SCHEMA,
} from "../FormUsuario/schema";

export const EditUsuario = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(USUARIO_FORM_SCHEMA),
    defaultValues: USUARIO_FORM_DEFAULT_VALUES,
  });

  const fetchApi = useCallback(
    (formData) => {
      async function cadastraUsuario() {
        try {
          await instance.patch(`/users/${userId}`, formData);
          toast.success("Edição realizada!");
          navigate("/");
        } catch (err) {
          toast.error("Edição não realizada, por favor tente novamente!");
        }
      }
      cadastraUsuario();
    },
    [navigate]
  );

  const deleteApi = useCallback(
    () => {
      async function deletaUsuario() {
        try {
          await instance.delete(`/user/${userId}`);
          toast.success("Usuário deletado com sucesso!");
          navigate("/");
        } catch (err) {
          toast.error("Usuario não deletado, por favor tente novamente!");
        }
      }
      deletaUsuario();
    },
    [userId, navigate]
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        if (userId != null) {
          const usuario = await instance.get(`/users/${userId}`);
          reset(usuario.data);
        }
      } catch (err) {
        toast.error("Ocorreu um erro, tente novamente mais tarde!");
      }
    };
    loadData();
  }, [reset, userId]);

   

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
        onUpdateCallback={() => {}}
        onDeleteCallback={deleteApi}
        title="Edição de Usuário"
      />
    </DivMain>
  );
};
