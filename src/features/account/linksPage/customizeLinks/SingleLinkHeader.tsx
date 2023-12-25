type LinkHeaderTypes = {
  id: number;
};
const SingleLinkHeader = ({ id }: LinkHeaderTypes) => {
  return (
    <header className="w-full flex justify-between items-center mb-3">
      <h1 className="text-[1rem] font-semibold text-darkGrey">
        = Link #{id}
      </h1>
      <button className="text-darkGrey hover:text-strongPurple">Remove</button>
    </header>
  );
};

export default SingleLinkHeader;
