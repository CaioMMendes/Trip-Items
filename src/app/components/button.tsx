import React from "react";
import { twMerge } from "tailwind-merge";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="submit"
        className={twMerge(
          `${className} px-3 py-1.5 font-medium bg-paynes-gray cursor-pointer hover:bg-columbia-blue/10 transition duration-300 rounded-lg`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export default Button;
