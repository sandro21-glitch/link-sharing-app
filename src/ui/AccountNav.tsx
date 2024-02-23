import logoLarge from "/assets/images/logo-devlinks-large.svg";
import logoSmall from "/assets/images/logo-devlinks-small.svg";
import NavLinks from "./NavLinks";
import PrevLinkBtn from "./PrevLinkBtn";
type AccountNavTypes = {
  currPage: string;
  setCurrPage: (page: string) => void;
};
const AccountNav = ({ currPage, setCurrPage }: AccountNavTypes) => {
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
      <PrevLinkBtn />
    </nav>
  );
};

export default AccountNav;
