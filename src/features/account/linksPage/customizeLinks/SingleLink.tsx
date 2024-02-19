import temp2 from "/assets/images/icon-chevron-down.svg";
import LinksPopup from "./LinksPopup";
import { useState } from "react";
import SingleLinkHeader from "./SingleLinkHeader";
import SingleLinkFooter from "./SingleLinkFooter";
type SingleLinkTypes = {
  link: {
    id: string;
    name: string;
    placeholderUrl: string;
    logo: string;
    logoWhite: string;
    color: string;
    validation: string;
  };
  index: number;
};
const SingleLink = ({ link, index }: SingleLinkTypes) => {
  const [openPopup, setOpenPopup] = useState(false);
  const { logo, name, validation, placeholderUrl, id } = link;
  return (
    <li className="bg-[#fafafa] p-[20px] rounded-md">
      <SingleLinkHeader id={id} index={index} />
      {/* platform */}
      <div className="mb-2 relative">
        <label htmlFor="" className="text-[.7rem]">
          Platform
        </label>
        <div
          onClick={() => setOpenPopup((prevState) => !prevState)}
          className="flex justify-between items-center h-[48px] bg-white py-[12px] px-[16px] border rounded-md cursor-pointer hover:border-strongPurple transition-all duration-150 ease-in"
        >
          <div className="flex items-center gap-3">
            <img src={logo} alt="link logo" />
            <span className="text-darkGrey">{name}</span>
          </div>
          <img
            src={temp2}
            alt="arrow"
            className={`${openPopup ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        {openPopup ? <LinksPopup id={id} setOpenPopup={setOpenPopup} /> : null}
      </div>
      <SingleLinkFooter
        validation={validation}
        name={name}
        placeholderUrl={placeholderUrl}
      />
    </li>
  );
};

export default SingleLink;
