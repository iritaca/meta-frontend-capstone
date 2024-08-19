import React, { FC, InputHTMLAttributes, useState } from "react";
import Styles from "./FormElements.module.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputId: string;
  isRequired?: boolean;
}

function useRequireField(
  isRequired: boolean,
  value: string | number | readonly string[] | undefined
) {
  const [requiredAndEmpty, setRequieredAndEmpty] = useState(false);

  const handleBlur = () => {
    if (isRequired && (!value || value === "")) setRequieredAndEmpty(true);
    if (value !== "") setRequieredAndEmpty(false);
  };

  return { requiredAndEmpty, handleBlur };
}

const RequieredMessage = () => {
  return <p className={Styles.errorMessage}>Required data</p>;
};

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
  const { requiredAndEmpty, handleBlur } = useRequireField(isRequired, value);
  return (
    <div className={Styles.formInput}>
      <label htmlFor={inputId}>{`${label} ${isRequired ? "(*)" : ""}`}</label>
      {children ? (
        children
      ) : (
        <>
          <input
            className={`${Styles.input} ${
              requiredAndEmpty ? Styles.error : ""
            }`}
            id={inputId}
            value={value}
            onChange={onChange}
            name={inputId}
            type={type}
            onBlur={handleBlur}
            data-testId={`input-${inputId}`}
            {...rest}
          />
          {requiredAndEmpty && <RequieredMessage />}
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
  isRequired = false,
  label,
}: {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  isRequired?: boolean;
  label: string;
}) => {
  const { requiredAndEmpty, handleBlur } = useRequireField(isRequired, value);
  return (
    <div className={Styles.formInput}>
      <label htmlFor={id}>{`${label} ${isRequired ? "(*)" : ""}`}</label>
      <select
        id={id}
        name={id}
        className={Styles.input}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
        data-testId={`select-${id}`}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {requiredAndEmpty && <RequieredMessage />}
    </div>
  );
};
