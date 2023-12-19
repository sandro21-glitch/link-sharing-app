import { useAccountContext } from "../../../../context/accountContext";
import GitHubLogo from "/assets/images/icon-github.svg";
const AddNewLink = () => {
  const { addNewLink } = useAccountContext();
  const tempLink = {
    name: "GitHub",
    placeholderUrl: "https://www.github.com/johnappleseed",
    logo: GitHubLogo,
    color: "hsl(0, 0%, 10%)",
    validation: /(https:\/\/)?(www\.)?github\.com\/[\w\-\/]*/,
  };
  return (
    <button
      type="button"
      onClick={() => addNewLink(tempLink)}
      className="mb-5 border border-strongPurple w-full py-3 rounded-lg text-strongPurple font-medium hover:bg-veryLightPurple transition-colors ease-in duration-150"
    >
      + Add new link
    </button>
  );
};

export default AddNewLink;
