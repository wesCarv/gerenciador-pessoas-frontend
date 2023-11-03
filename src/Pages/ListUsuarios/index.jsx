import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  CardListWrapper,
  Content,
  DivMain,
  HeaderWrapper,
  StyledButton,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Card } from "./components/Card";
import { instance } from "shared/services/axios/requests";

export const ListUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const usuarios = await instance.get("/users/all")
        setUsuarios(usuarios.data);
        
      } catch (err) {
        toast.error("Ocorreu um erro, tente novamente mais tarde!");
      }
    };
    loadData();
  }, [setUsuarios]);



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
      <Content>
        <HeaderWrapper>
          <h1>Usuários</h1>
          <StyledButton onClick={() => navigate("/cadastro")}>
            Novo Usuário
          </StyledButton>
        </HeaderWrapper>
        <CardListWrapper>
          {usuarios.map((usuario, index) => (
            <Card
              nome={usuario.name}
              telefone={usuario.cellphone}
              atributos={usuario.taxes}
              onClick={() => navigate(`/edicao/${usuario.id}`)}
            />
          ))}
        </CardListWrapper>
      </Content>
    </DivMain>
  );
};
