type InputTypes = {
  id: string;
  type: string;
  placeholder: string;
  className: string;
};

const Input = ({ className, id, placeholder, type }: InputTypes) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
