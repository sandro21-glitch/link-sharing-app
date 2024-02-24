import toast from "react-hot-toast";
import { useAppSelector } from "../../../../hooks/reduxHooks";

const SaveBtn = () => {
  const { links } = useAppSelector((store) => store.links);
  const areAllLinksValid = links.every((link) => {
    const patternWithoutSlashes = link.validation.replace(/^\/|\/$/g, "");
    const regexPattern = new RegExp(patternWithoutSlashes);
    return regexPattern.test(link.path) || link.path !== "";
  });
  
  return (
    <button
      type="submit"
      onClick={() => areAllLinksValid && toast.success("Your changes have been successfully saved!")}
      disabled={areAllLinksValid ? false : true}
      className={`${
        !areAllLinksValid ? "cursor-not-allowed" : "cursor-pointer"
      } mt-5 w-full border border-transparent border-t-[#d9d9d9] flex justify-center lg:justify-end`}
    >
      <div
        className="text-white flex justify-center items-center mt-5 bg-strongPurple
       font-semibold capitalize w-[90%] lg:w-[91px] h-[46px] rounded-[8px] hover:opacity-60 transition-opacity ease-in duration-150"
      >
        Save
      </div>
    </button>
  );
};

export default SaveBtn;
