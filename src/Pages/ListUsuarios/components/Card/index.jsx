import { StyledAttribute, StyledCard, StyledTitle } from "./style";

export const Card = ({ nome, telefone, atributos, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledTitle>
        {nome} - {telefone}
      </StyledTitle>
      {atributos != null && (
        <StyledAttribute>{atributos.map(i => i.name).join(", ")}</StyledAttribute>
      )}
    </StyledCard>
  );
};
