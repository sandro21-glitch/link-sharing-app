import githubLogo from "/assets/images/icon-github-box.svg";
import arrowRight from "/assets/images/icon-arrow-right-white.svg";
const SingleLinkBox = () => {
  return (
    <div className="flex justify-between items-center cursor-grab bg-black h-[44px] w-full rounded-[8px] text-white px-[16px] text-[.75rem]">
      <div className="flex items-center gap-2">
        <img src={githubLogo} alt="github logo" />
        Github
      </div>
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default SingleLinkBox;
