import logoLarge from "/assets/images/logo-devlinks-large.svg";
import logoSmall from "/assets/images/logo-devlinks-small.svg";
import previewLogo from "/assets/images/icon-preview-header.svg";

import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
type AccountNavTypes = {
  currPage: string;
  setCurrPage: (page: string) => void;
};
const AccountNav = ({ currPage, setCurrPage }: AccountNavTypes) => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[78px] p-5 bg-white rounded-md flex items-center justify-between mb-5">
      <picture>
        <source media="(max-width: 768px)" srcSet={logoSmall} />
        <img
          src={logoLarge}
          alt="logo"
          className="w-full h-auto object-contain lg:w-[146px] lg:h-auto"
        />
      </picture>
      <NavLinks currPage={currPage} setCurrPage={setCurrPage} />
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
    </nav>
  );
};

export default AccountNav;
