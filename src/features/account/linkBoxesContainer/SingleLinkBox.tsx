import arrowRight from "/assets/images/icon-arrow-right-white.svg";
export interface SingleLinkBoxTypes {
  link: {
    name: string;
    placeholderUrl: string;
    logo: string;
    logoWhite: string;
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
      className={`border flex justify-between items-center cursor-grab h-[44px] w-full rounded-[8px] text-white px-[16px] text-[.75rem]`}
    >
      <div
        className={`flex items-center gap-2 ${
          link.color === "hsl(0, 0%, 100%)" ? "text-black" : "text-white"
        }`} 
      >
        <img src={link.logoWhite} alt={link.name} />
        {link.name}
      </div>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default SingleLinkBox;
