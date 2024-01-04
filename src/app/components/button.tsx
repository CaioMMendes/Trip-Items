import React from "react";
import { twMerge } from "tailwind-merge";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        type="submit"
        className={twMerge(
          ` ${
            variant === "botao" &&
            "flex px-3 py-1.5 md:mt-[25px] font-medium justify-center items-center bg-paynes-gray cursor-pointer hover:bg-columbia-blue/10 transition duration-300 rounded-lg"
          } ${className}`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export default Button;
