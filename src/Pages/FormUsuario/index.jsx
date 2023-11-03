import { useCallback } from "react";
import { Input } from "shared/components/Input";
import {
  StyledSubmitButton,
  FormCadastro,
  StyledDeleteButton,
  ButtonsWrapper,
  HeaderWrapper,
  TaxesFormWrapper,
  StyledAddButton,
  StyledButtonBack,
  UserWrapper,
  TaxesListWrapper,
} from "./style";
import { useFieldArray, useForm } from "react-hook-form";
import { TaxeCard } from "./components/TaxeCard";
import { GrFormAdd } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "shared/services/axios/requests";

export const FormUsuario = ({
  control,
  title,
  onSubmitCallback,
  onDeleteCallback,
  onUpdateCallback,
  onBackToList,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "taxes",
    keyName: '_id',
  });

  const { userId } = useParams();

  const {
    control: taxesControl,
    handleSubmit: taxesHandleSubmit,
  } = useForm();

  const createTaxeApi = useCallback(
    (values) => {
      async function updateUsuario() {
        return await instance
          .post('/taxes', {user_id: parseInt(userId), ...values})
          .then((resp) => {
            append(resp.data);
            toast.success("Atributo criado com suceso")
          })
          .catch((err) =>
            toast.error("Não foi possível editar , tente novamente mais tarde")
          );
      }
      updateUsuario();
    },
    [userId, append]
  );

 
  const deleteTaxeApi = useCallback((id) => {
      async function deletaUsuario() {
        return await instance
          .delete(`/taxes/${id}`)
          .then((resp) => toast.success("Atributo deletado com suceso"))
          .catch((err) =>
            toast.error("Não foi possível deletar , tente novamente mais tarde")
          );
      }
      deletaUsuario()
    },[]
  )

  return (
    <FormCadastro>
      <UserWrapper>
        <HeaderWrapper>
          <h1>{title}</h1>
        </HeaderWrapper>
        <Input
          control={control}
          name="name"
          label="Nome"
          placeholder="Insira o seu nome"
          type="text"
        />
        <Input
          control={control}
          name="email"
          label="Email"
          placeholder="Insira o seu email"
          type="email"
        />
        <Input
          control={control}
          name="cellphone"
          label="Telefone"
          placeholder="Insira o seu telefone"
          type="text"
        />
        <Input
          control={control}
          name="age"
          label="Idade"
          placeholder="Insira o sua idade"
          type="number"
        />
        <Input
          control={control}
          name="country"
          label="País"
          placeholder="Insira o seu país"
          type="text"
        />
        <Input
          control={control}
          name="state"
          label="Estado"
          placeholder="Insira o seu estado"
          type="text"
        />
        <Input
          control={control}
          name="city"
          label="Cidade"
          placeholder="Insira o sua cidade"
          type="text"
        />
        <ButtonsWrapper>
          {onBackToList != null && <StyledButtonBack>Voltar</StyledButtonBack>}
          {onDeleteCallback != null && (
            <StyledDeleteButton type="submit" onClick={onDeleteCallback}>
              Deletar
            </StyledDeleteButton>
          )}
          {onSubmitCallback != null && (
            <StyledSubmitButton type="submit" onClick={onSubmitCallback}>
              Salvar
            </StyledSubmitButton>
          )}
        </ButtonsWrapper>
      </UserWrapper>
      {onUpdateCallback != null && (
        <TaxesFormWrapper>
          <Input
            control={taxesControl}
            name="name"
            label="Atributos"
            placeholder="Adicione seus atributos"
            type="text"
          />
          <StyledAddButton
            type="submit"
            onClick={taxesHandleSubmit((value) => {
              createTaxeApi(value);
            })}
          >
            <GrFormAdd style={{ color: "white" }} />
          </StyledAddButton>
        </TaxesFormWrapper>
      )}
      <TaxesListWrapper>
        {onUpdateCallback != null &&
          fields.map((field, index) => (
            <TaxeCard nome={field.name} onDelete={() => {
              console.log(field)
              deleteTaxeApi(field.id)
              remove(index)
            }} />
          ))}
      </TaxesListWrapper>
    </FormCadastro>
  );
};
