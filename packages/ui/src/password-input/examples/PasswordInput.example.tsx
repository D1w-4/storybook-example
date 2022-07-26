import React, { ChangeEvent } from "react";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

export const PasswordInputExample = (props) => {
  const [value, setValue] = React.useState("password");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <PasswordInput size={props.size} onChange={onChange} value={value} name={"password"} />;
};
