const Input = ({type, value, className, onChange, placeholder, id}) => {
  return (
    <input 
      id={id}
      className={className}
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
    />
  )
}

export default Input;