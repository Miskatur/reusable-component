import React, { InputHTMLAttributes } from "react";

type TGenericInput = {
  label: string;
  id: string;
  inputClass?: string;
};
interface AdditionalInputProps extends InputHTMLAttributes<HTMLInputElement> {}

type TGenericInputProps = TGenericInput & AdditionalInputProps;

const GenericInputField: React.FC<TGenericInputProps> = ({
  id,
  label,
  inputClass,
  ...inputProps
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        className="flex h-10 w-full rounded-md border px-3 outline-none placeholder:text-sm"
        {...inputProps}
      />
    </div>
  );
};

export default GenericInputField;
