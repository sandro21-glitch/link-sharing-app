type LinkHeaderTypes = {
  index: number;
};
const SingleLinkHeader = ({ index }: LinkHeaderTypes) => {
  return (
    <header className="w-full flex justify-between items-center mb-3">
      <h1 className="text-[1rem] font-semibold text-darkGrey">
        = Link #{index + 1}
      </h1>
      <button className="text-darkGrey hover:text-strongPurple">Remove</button>
    </header>
  );
};

export default SingleLinkHeader;
