
import NavLinks from "./NavLinks";
import PrevLinkBtn from "./PrevLinkBtn";
import NavLogo from "./NavLogo";
type AccountNavTypes = {
  currPage: string;
  setCurrPage: (page: string) => void;
};
const AccountNav = ({ currPage, setCurrPage }: AccountNavTypes) => {
  return (
    <nav className="w-full h-[78px] p-5 bg-white rounded-md flex items-center justify-between mb-5">
      <NavLogo />
      <NavLinks currPage={currPage} setCurrPage={setCurrPage} />
      <PrevLinkBtn />
    </nav>
  );
};

export default AccountNav;
