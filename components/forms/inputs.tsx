

import formStyles from "~styles/forms.module.css";

type TextFieldProps = { 
  label: string; 
  type: string; 
  registerFunction: any;
  register: string;
  auto: string;
  isRequired: boolean;
  placeholder?: string;
}

const TextField = ({ label, type, registerFunction, register, auto, isRequired, placeholder }:TextFieldProps,) => {
  return (
    <div className={formStyles.Input}>
      <label htmlFor="name">{label}</label>
      <input
        id={register}
        {...registerFunction(register)}
        placeholder={placeholder}
        type={type}
        autoComplete={auto}
        required={isRequired}
      />
    </div>
  );
}

export { TextField };