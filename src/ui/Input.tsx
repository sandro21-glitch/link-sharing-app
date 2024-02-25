type InputTypes = {
  id: string;
  type: string;
  placeholder: string;
  className: string;
};

const Input = ({ className, id, placeholder, type }: InputTypes) => {
  return (
    <div className="w-[432px]">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default Input;
