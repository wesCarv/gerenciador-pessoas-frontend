import { colors } from "shared/colors";
import styled from "styled-components";

export const DivMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 80%;
  width: 400px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  background-color: ${colors.primary[200]};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const StyledButton = styled.button`
  width: auto;
  background-color: ${colors.green};
  color: white;
  padding: 8px 14px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CardListWrapper = styled.div`
  overflow-y: auto;
  padding: 10px;

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
`;
