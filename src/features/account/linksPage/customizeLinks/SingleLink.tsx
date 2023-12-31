import temp2 from "/assets/images/icon-chevron-down.svg";
import LinksPopup from "./LinksPopup";
import { useState } from "react";
import SingleLinkHeader from "./SingleLinkHeader";
import SingleLinkFooter from "./SingleLinkFooter";
type SingleLinkTypes = {
  link: {
    id: number;
    name: string;
    placeholderUrl: string;
    logo: string;
    color: string;
    validation: RegExp;
  };
};
const SingleLink = ({ link }: SingleLinkTypes) => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="bg-[#fafafa] p-[20px] rounded-md">
      <SingleLinkHeader id={link.id} />
      {/* pltform */}
      <div className="mb-2 relative">
        <label htmlFor="" className="text-[.7rem]">
          Platform
        </label>
        <div
          onClick={() => setOpenPopup((prevState) => !prevState)}
          className="flex justify-between items-center h-[48px] bg-white py-[12px] px-[16px] border rounded-md cursor-pointer hover:border-strongPurple transition-all duration-150 ease-in"
        >
          <div className="flex items-center gap-3">
            <img src={link.logo} alt={link.name} />
            <span className="text-darkGrey">{link.name}</span>
          </div>
          <img
            src={temp2}
            alt="arrow"
            className={`${openPopup ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        {openPopup ? <LinksPopup/> : null}
      </div>
      <SingleLinkFooter link={link} />
    </div>
  );
};

export default SingleLink;
