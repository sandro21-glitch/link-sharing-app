import { useState } from "react";
import iconLink from "/assets/images/icon-link.svg";

type SingleLinkFooterTypes = {
  validation: string;
  name: string;
  placeholderUrl: string;
};

const SingleLinkFooter = ({
  validation,
  name,
  placeholderUrl,
}: SingleLinkFooterTypes) => {
  const [linkPath, setLinkPath] = useState("");
  const [blurred, setBlurred] = useState(false);

  const patternWithoutSlashes = validation.replace(/^\/|\/$/g, "");
  const regexPattern = new RegExp(patternWithoutSlashes);

  const isValid = (inputValue: string) => regexPattern.test(inputValue);

  const handleAddLink = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    setLinkPath(inputValue);
  };

  const handleFocus = () => {
    setBlurred(false);
  };

  const handleBlur = () => {
    setBlurred(true);
  };

  const isInputTyped = linkPath.length > 0;
  const isInvalidInput = !isValid(linkPath);
  const isEmptyInput = linkPath.length === 0 && blurred;

  return (
    <footer>
      <label htmlFor={name} className="text-[.7rem]">
        Link
      </label>
      <div className="flex items-center bg-white cursor-pointer relative">
        <img src={iconLink} alt="icon" className="absolute left-[16px]" />
        <input
          value={linkPath}
          onChange={(e) => handleAddLink(e)}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          type="text"
          id={name}
          className={`border ${
            (isInvalidInput && blurred && isInputTyped) ||
            (isEmptyInput && blurred)
              ? "border-red-500 text-red-500"
              : "text-black"
          } rounded-md h-[48px] w-full pl-[44px] pr-[16px] outline-none hover:border-strongPurple transition-all duration-150 ease-in`}
          placeholder={placeholderUrl}
        />
        {isInvalidInput && isInputTyped && blurred && (
          <span className="absolute right-5 text-red-500 text-[.65rem]">
            Please check the URL
          </span>
        )}
        {isEmptyInput && blurred && !isInputTyped && (
          <span className="absolute right-5 text-red-500 text-[.65rem]">
            Can't be empty
          </span>
        )}
      </div>
    </footer>
  );
};

export default SingleLinkFooter;
