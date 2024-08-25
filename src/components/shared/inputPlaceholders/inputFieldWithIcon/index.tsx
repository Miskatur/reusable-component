import React, { InputHTMLAttributes, ReactElement, ReactNode } from "react";

type TGenericInput = {
  label: string;
  id: string;
  inputClass?: string;
};
type TIconProps = {
  icon?: ReactElement<any, any> | ReactNode;
  iconPosition?: "left" | "right";
};
interface AdditionalInputProps extends InputHTMLAttributes<HTMLInputElement> {}

type TGenericInputProps = TGenericInput & AdditionalInputProps & TIconProps;

const InputFieldWithIcon: React.FC<TGenericInputProps> = ({
  id,
  label,
  inputClass,
  icon,
  iconPosition,
  ...inputProps
}) => {
  return (
    <div className="space-y-2 relative">
      <label htmlFor={id} className="text-sm font-medium ">
        {label}
      </label>

      {icon && iconPosition === "left" && (
        <>
          <input
            id={id}
            className="flex items-center justify-center h-10 w-full rounded-md border px-3 outline-none  pl-10"
            {...inputProps}
          />
          <div className="absolute top-8 left-2 ">{icon}</div>
        </>
      )}
      {icon && iconPosition === "right" && (
        <>
          <input
            id={id}
            className="flex items-center justify-center h-10 w-full rounded-md border px-3 outline-none  pr-10"
            {...inputProps}
          />
          <div className="absolute top-8 right-2 cursor-pointer">{icon}</div>
        </>
      )}
    </div>
  );
};

export default InputFieldWithIcon;
