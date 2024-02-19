import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { removeLink } from "../../../links";
type LinkHeaderTypes = {
  id: string;
  index: number;
};
const SingleLinkHeader = ({ id, index }: LinkHeaderTypes) => {
  const dispatch = useAppDispatch();

  return (
    <header className="w-full flex justify-between items-center mb-3">
      <h1 className="text-[1rem] font-semibold text-darkGrey">
        = Link #{index + 1}
      </h1>
      <button
        type="button"
        onClick={() => dispatch(removeLink(id))}
        className="text-darkGrey hover:text-strongPurple"
      >
        Remove
      </button>
    </header>
  );
};

export default SingleLinkHeader;
