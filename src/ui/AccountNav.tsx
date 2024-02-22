import logoLarge from "/assets/images/logo-devlinks-large.svg";
import logoSmall from "/assets/images/logo-devlinks-small.svg";
import LinkIcon from "./LinkIcon";
import ProfileIcon from "./ProfileIcon";
import { useNavigate } from "react-router-dom";
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
            <ProfileIcon
              fill={currPage === "profile" ? "#633CFF" : "#737373"}
            />
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
      <button
        onClick={() => navigate("/preview")}
        className="w-[114px] h-[46px] border border-strongPurple rounded-lg capitalize text-strongPurple font-semibold hover:bg-veryLightPurple transition-colors ease-in duration-150"
      >
        preview
      </button>
    </nav>
  );
};

export default AccountNav;
