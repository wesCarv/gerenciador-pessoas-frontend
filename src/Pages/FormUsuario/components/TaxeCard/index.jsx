import { StyledCard, StyledTitle, StyledButton } from "./style";
import { AiFillDelete } from "react-icons/ai";

export const TaxeCard = ({ nome, onDelete }) => {
  return (
    <StyledCard>
      <StyledTitle>{nome}</StyledTitle>
      <StyledButton onClick={onDelete}>
        <AiFillDelete />
      </StyledButton>
    </StyledCard>
  );
};
