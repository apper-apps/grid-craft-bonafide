import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "medium", 
  className, 
  disabled = false,
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-200",
    secondary: "bg-white text-secondary border border-gray-200 hover:bg-surface hover:border-gray-300 transition-all duration-200",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-200",
    ghost: "text-secondary hover:text-primary hover:bg-surface transition-all duration-200"
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm font-medium",
    medium: "px-4 py-2 text-sm font-semibold",
    large: "px-6 py-3 text-base font-semibold"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;