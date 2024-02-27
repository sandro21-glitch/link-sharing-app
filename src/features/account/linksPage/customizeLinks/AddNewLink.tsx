import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { LINK_SITES } from "../../../../platforms";
import { addNewLink } from "../../../links";

const AddNewLink = () => {
  const { links } = useAppSelector((store) => store.links);
  const dispatch = useAppDispatch();
  const isLinksFull = links.length === 5;
  const firstLink = {
    name: LINK_SITES[0].name,
    path: "",
    placeholderUrl: LINK_SITES[0].placeholderUrl,
    logo: LINK_SITES[0].logo,
    logoWhite: LINK_SITES[0].logoWhite,
    color: LINK_SITES[0].color,
    validation: LINK_SITES[0].validation,
    index: links.length,
  };

  return (
    <button
      type="button"
      onClick={() => dispatch(addNewLink(firstLink))}
      disabled={isLinksFull}
      title={isLinksFull ? "Maximum links reached" : "Add new link"}
      className={`
      ${
        isLinksFull
          ? "cursor-not-allowed bg-gray-300 text-gray-700 border-transparent"
          : "hover:bg-veryLightPurple"
      }
      mb-5 border border-strongPurple w-full py-3 rounded-lg
       text-strongPurple font-medium transition-colors ease-in duration-150`}
    >
      + Add new link
    </button>
  );
};

export default AddNewLink;
