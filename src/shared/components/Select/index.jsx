import { useState, useEffect } from 'react'
import { ErrorMessage, InputWrapper, StyledSelect } from "./style";
import { Controller } from "react-hook-form";

export const Select = ({
  control,
  options,
  optionFormatter,
  inputChange,
  name,
  label,
  type,
  placeholder,
  ...props
}) => {
  const [innerOptions, setInnerOptions] = useState([])

  useEffect(() => {
    if (optionFormatter) {
      const formatedOptions = optionFormatter(options)
      setInnerOptions(formatedOptions)
    }
  }, [options, optionFormatter])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <InputWrapper>
          <label htmlFor={name}>{label}</label>
          <StyledSelect
            ref={ref}
            name={name}
            onChange={(e) => {
              const opcaoId = e.target.value
              const opcao = options.find((op) => op.id === parseInt(opcaoId));
              if (inputChange) {
                inputChange(opcao)
              } else {
                onChange(e)
              }
            }}
            value={value}
            id={name}
            type={type}
            placeholder={placeholder}
            {...props}
          >
            {innerOptions.map(({value, label}) => (
                <option value={value}>{label}</option>
            ))}
          </StyledSelect>
          <ErrorMessage>{error?.message}</ErrorMessage>
        </InputWrapper>
      )}
    />
  );
};
