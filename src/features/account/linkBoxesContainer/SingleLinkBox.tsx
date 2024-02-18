import arrowRight from "/assets/images/icon-arrow-right-white.svg";

const SingleLinkBox = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
      className={`border flex justify-between items-center cursor-grab h-[44px] w-full rounded-[8px] text-white px-[16px] text-[.75rem]`}
    >
      <div>
        <img src="link.logo" srcSet="link.name" />
        link name
      </div>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default SingleLinkBox;
