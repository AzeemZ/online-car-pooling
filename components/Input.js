import { Input as InputField } from "@nextui-org/react";

export function Input(props) {
  // console.log(...props);
  return (
    <InputField
      clearable
      rounded
      bordered
      fullWidth
      helperColor="error"
      {...props}
    />
  );
}

export function InputPassword(props) {
  // console.log(...props);
  return (
    <InputField.Password
      clearable
      rounded
      bordered
      fullWidth
      helperColor="error"
      {...props}
    />
  );
}
