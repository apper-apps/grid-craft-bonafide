import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Textarea = forwardRef(({ 
  className, 
  disabled = false,
  error = false,
  rows = 4,
  ...props 
}, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-vertical",
        error && "border-red-500 focus:ring-red-500",
        disabled && "bg-gray-100 cursor-not-allowed opacity-50",
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;