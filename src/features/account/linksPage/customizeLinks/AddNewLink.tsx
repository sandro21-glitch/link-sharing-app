import { useAccountContext } from "../../../../context/AccountContext";
// import GitHubLogo from "/assets/images/icon-github.svg";
// import GitHubLogoWhite from "/assets/images/icon-github-link-box.svg";
import { LINK_SITES } from "../../../../platforms";
const AddNewLink = () => {
  const { addNewLink } = useAccountContext();

  return (
    <button
      type="button"
      onClick={() => addNewLink(LINK_SITES[0])}
      className="mb-5 border border-strongPurple w-full py-3 rounded-lg text-strongPurple font-medium hover:bg-veryLightPurple transition-colors ease-in duration-150"
    >
      + Add new link
    </button>
  );
};

export default AddNewLink;
