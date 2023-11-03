import { ErrorMessage, InputWrapper, StyledInput } from "./style";
import { Controller } from "react-hook-form";

export const Input = ({
  control,
  name,
  label,
  type,
  placeholder,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <InputWrapper>
          <label htmlFor={name}>{label}</label>
          <StyledInput
            ref={ref}
            name={name}
            onChange={onChange}
            value={value}
            id={name}
            type={type}
            placeholder={placeholder}
            {...props}
          />
          <ErrorMessage>{error?.message}</ErrorMessage>
        </InputWrapper>
      )}
    />
  );
};
