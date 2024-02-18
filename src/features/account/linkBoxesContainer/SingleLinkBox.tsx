import arrowRight from "/assets/images/icon-arrow-right-white.svg";
type SingleLinkTypes = {
  link: {
    id: number;
    name: string;
    placeholderUrl: string;
    logo: string;
    logoWhite: string;
    color: string;
    validation: RegExp;
  };
};
const SingleLinkBox = ({ link }: SingleLinkTypes) => {
  const { color, logo, name } = link;
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`border flex justify-between items-center cursor-grab h-[44px] w-full rounded-[8px] text-white px-[16px] text-[.75rem]`}
    >
      <div className="flex gap-2 items-center">
        <img src={logo} srcSet={name} />
        <span>{name}</span>
      </div>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default SingleLinkBox;
