import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";

const FormField = ({ 
  label, 
  type = "text", 
  required = false, 
  error,
  multiline = false,
  rows = 4,
  ...props 
}) => {
  const InputComponent = multiline ? Textarea : Input;

  return (
    <div className="space-y-1">
      <Label required={required}>
        {label}
      </Label>
      <InputComponent
        type={type}
        error={!!error}
        rows={multiline ? rows : undefined}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField;