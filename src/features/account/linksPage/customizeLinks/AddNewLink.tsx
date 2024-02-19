import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { LINK_SITES } from "../../../../platforms";
import { addNewLink } from "../../../links";

const AddNewLink = () => {
  const dispatch = useAppDispatch();
  const firstLink = {
    name: LINK_SITES[0].name,
    placeholderUrl: LINK_SITES[0].placeholderUrl,
    logo: LINK_SITES[0].logo,
    logoWhite: LINK_SITES[0].logoWhite,
    color: LINK_SITES[0].color,
    validation: LINK_SITES[0].validation,
  };
  return (
    <button
      type="button"
      onClick={() => dispatch(addNewLink(firstLink))}
      className="mb-5 border border-strongPurple w-full py-3 rounded-lg text-strongPurple font-medium hover:bg-veryLightPurple transition-colors ease-in duration-150"
    >
      + Add new link
    </button>
  );
};

export default AddNewLink;
