type InputTypes = {
  id: string;
  type: string;
  placeholder: string;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  className,
  id,
  placeholder,
  type,
  onChange,
  value,
}: InputTypes) => {
  return (
    <div className="w-[432px]">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
