import { cn } from "@/libs/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type TVariant =
  | "outline"
  | "primary"
  | "rounded"
  | "rounded-hover"
  | "primary-hover"
  | "ghost"
  | "pagination"
  | undefined;
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const GenericButton = forwardRef<HTMLButtonElement, TButton>(
  ({ children, variant, className, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "border text-[#000000] border-[#000000] py-3 md:py-4 px-6 rounded-lg ";
        case "primary":
          return "text-white py-3 md:py-4 px-6 rounded-lg bg-black text-base border ";
        case "primary-hover":
          return "text-white py-3 md:py-4 px-6 rounded-lg bg-black text-base border border-[#000000] hover:bg-white hover:text-black";
        case "rounded":
          return "text-[#000000] py-3 md:py-4 px-6 rounded-lg bg-white text-base border border-[#000000] rounded-full";
        case "rounded-hover":
          return "text-[#000000] py-3 md:py-4 px-6 rounded-lg bg-white text-base border border-[#000000] rounded-full hover:bg-black hover:text-white";
        case "pagination":
          return "border text-[#000000] border-[#000000] py-4 px-6 rounded-lg";
        default:
          return "bg-fr-neutral-500 border-fr-neutral-500 text-white";
      }
    };
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(
          "px-7 py-2.5 rounded font-medium border-[1.5px]",
          getVariant(variant),
          className
        )}
      >
        {children}
      </button>
    );
  }
);

GenericButton.displayName = "Button";

export default GenericButton;
