import arrowRight from "/assets/images/icon-arrow-right-white.svg";
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
};
const SingleLinkBox = ({ link }: SingleLinkTypes) => {
  const { color, name, logoWhite } = link;
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`border flex justify-between items-center cursor-grab h-[44px] w-full rounded-[8px] text-white px-[16px] text-[.75rem]`}
    >
      <div className="flex gap-2 items-center">
        <img src={logoWhite} alt={name} />
        <span
          className={`${
            name === "Frontend Mentor" ? "text-black" : "text-white"
          }`}
        >
          {name}
        </span>
      </div>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default SingleLinkBox;
