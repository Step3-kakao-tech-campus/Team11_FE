import Box from "./Box";
import Label from "./Label";
import Input from "./Input";

const InputGroup = ({
  id,
  type,
  value,
  onChange,
  className,
  placeholder,
  label,
  valid,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        valid={valid}
      />
    </Box>
  );
};

export default InputGroup;
