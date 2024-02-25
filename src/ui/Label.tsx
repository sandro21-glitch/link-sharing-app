type LabelTypes = {
  htmlFor: string;
  className: string;
  name: string;
};

const Label = ({ className, htmlFor, name }: LabelTypes) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {name}
    </label>
  );
};

export default Label;
