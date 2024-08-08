import React, { FC, InputHTMLAttributes, useState } from "react";
import Styles from "./FormElements.module.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputId: string;
  isRequired?: boolean;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  isRequired = false,
  children,
  inputId,
  value,
  onChange,
  type = "text",
  ...rest
}) => {
  const [requieredAndEmpty, setRequieredAndEmpty] = useState(false);

  const handleBlur = () => {
    if (isRequired && (!value || value === "")) setRequieredAndEmpty(true);
    if (value !== "") setRequieredAndEmpty(false);
  };
  return (
    <div className={Styles.formInput}>
      <label htmlFor={inputId}>{`${label} ${isRequired ? "(*)" : ""}`}</label>
      {children ? (
        children
      ) : (
        <>
          <input
            className={`${Styles.input} ${
              requieredAndEmpty ? Styles.error : ""
            }`}
            id={inputId}
            value={value}
            onChange={onChange}
            name={inputId}
            type={type}
            onBlur={handleBlur}
            {...rest}
          />
          {requieredAndEmpty && (
            <p className={Styles.errorMessage}>Required data</p>
          )}
        </>
      )}
    </div>
  );
};

export const FormSelect = ({
  id,
  onChange,
  value,
  options,
}: {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
}) => {
  return (
    <select
      id={id}
      name={id}
      className={Styles.input}
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};
