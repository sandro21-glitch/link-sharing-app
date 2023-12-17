import iconLink from "/assets/images/icon-link.svg";

const SingleLinkFooter = () => {
  return (
    <footer>
      <label htmlFor="" className="text-[.7rem]">
        Link
      </label>
      <div className="flex items-center bg-white  cursor-pointer relative">
        <img src={iconLink} alt="" className="absolute left-[16px]" />
        <input
          type="text"
          className=" border rounded-md h-[48px] w-full  pl-[44px] pr-[16px] outline-none hover:border-strongPurple transition-all duration-150 ease-in"
          placeholder="e.g. https://www.github.com/johnappleseed"
        />
        <span className="absolute right-5 text-[.7rem] text-red-500 hidden">
          Can't be empty
        </span>
      </div>
    </footer>
  );
};

export default SingleLinkFooter;
