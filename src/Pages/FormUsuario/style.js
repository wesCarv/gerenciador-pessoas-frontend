import { colors } from "shared/colors";
import styled from "styled-components";

export const FormCadastro = styled.div`
  height: auto;
  width: 400px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${colors.primary[200]};
`;

export const HeaderWrapper = styled.div`
  padding: 14px 0px;
  margin-bottom: 20px;
`;

export const TaxesFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledSubmitButton = styled.button`
  width: auto;
  background-color: ${colors.green};
  color: white;
  padding: 10px 16px;
  margin: 8px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${colors.green};
  color: white;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const UserWrapper = styled.div`
  margin-bottom: 30px;
`

export const TaxesListWrapper = styled.div`
  overflow-y: scroll;
  max-height: 150px;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: ${colors.primary[300]} ${colors.primary[200]};

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.primary[200]};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary[300]};
    border-radius: 0px;
    border: 0px solid ${colors.primary[200]};
  }
`

export const StyledButtonBack = styled(StyledSubmitButton)`
background-color: ${colors.blue};`

export const StyledDeleteButton = styled(StyledSubmitButton)`
  background-color: ${colors.red};
`;
