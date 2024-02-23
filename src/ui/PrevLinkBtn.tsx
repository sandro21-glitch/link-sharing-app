import { useNavigate } from "react-router-dom";
import previewLogo from "/assets/images/icon-preview-header.svg";

const PrevLinkBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/preview")}
      className="lg:w-[114px] w-[52px] lg:h-[46px] h-[42px] border
     border-strongPurple rounded-lg capitalize text-strongPurple
      font-semibold hover:bg-veryLightPurple transition-colors ease-in duration-150
      flex-center"
    >
      <span className="hidden lg:block">preview</span>
      <img src={previewLogo} alt="preview logo" className="lg:hidden" />
    </button>
  );
};

export default PrevLinkBtn;
