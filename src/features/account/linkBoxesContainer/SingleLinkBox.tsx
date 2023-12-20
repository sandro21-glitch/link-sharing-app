import arrowRight from "/assets/images/icon-arrow-right-white.svg";
export interface SingleLinkBoxTypes {
  link: {
    name: string;
    placeholderUrl: string;
    logo: string;
    color: string;
    validation: RegExp;
  };
}

const SingleLinkBox = ({ link }: SingleLinkBoxTypes) => {
  return (
    <div
      style={{
        backgroundColor: link.color,
      }}
      className={`flex justify-between items-center cursor-grab h-[44px] w-full rounded-[8px] text-white px-[16px] text-[.75rem]`}
    >
      <div className="flex items-center gap-2">
        <img src={link.logo} alt="github logo" />
        Github
      </div>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default SingleLinkBox;
