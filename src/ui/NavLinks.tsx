type NavLinkTypes = {
  currPage: string;
  setCurrPage: (page: string) => void;
};
import LinkIcon from "./LinkIcon";
import ProfileIcon from "./ProfileIcon";
const NavLinks = ({ currPage, setCurrPage }: NavLinkTypes) => {
  return (
    <ul className="flex items-center gap-2 md:gap-8">
      <li
        onClick={() => setCurrPage("links")}
        className={`w-[74px] md:w-[122px] h-[42px] md:h-[46px] ${
          currPage === "links" ? "bg-veryLightPurple" : "bg-none"
        }  rounded-lg flex justify-center items-center gap-2
       cursor-pointer hover:bg-veryLightPurple transition-colors ease-in duration-150`}
      >
        <LinkIcon fill={currPage === "links" ? "#633CFF" : "#737373"} />
        <span
          className={`${
            currPage === "links" ? "text-strongPurple" : "text-darkGrey"
          } hidden md:block font-semibold`}
        >
          Links
        </span>
      </li>
      <li
        onClick={() => setCurrPage("profile")}
        className={` w-[74px] md:w-[187px] h-[42px]  md:h-[46px] ${
          currPage === "profile" ? "bg-veryLightPurple" : "bg-none"
        }  rounded-lg flex justify-center items-center gap-2
       cursor-pointer hover:bg-veryLightPurple transition-colors ease-in duration-150`}
      >
        <div className="flex items-center gap-2">
          <ProfileIcon fill={currPage === "profile" ? "#633CFF" : "#737373"} />
          <span
            className={`${
              currPage === "profile" ? "text-strongPurple" : "text-darkGrey"
            } hidden md:block font-semibold`}
          >
            Profile Details
          </span>
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;
