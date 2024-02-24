import { useEffect, useState } from "react";
import iconLink from "/assets/images/icon-link.svg";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { addLinkPath } from "../../../links";

type SingleLinkFooterTypes = {
  validation: string;
  name: string;
  placeholderUrl: string;
  id: string;
  path: string;
};

const SingleLinkFooter = ({
  validation,
  name,
  placeholderUrl,
  id,
  path,
}: SingleLinkFooterTypes) => {
  const [linkPath, setLinkPath] = useState(path);
  const [blurred, setBlurred] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);
  const dispatch = useAppDispatch();

  const patternWithoutSlashes = validation.replace(/^\/|\/$/g, "");
  const regexPattern = new RegExp(patternWithoutSlashes);

  const isValid = (inputValue: string) => regexPattern.test(inputValue);

  const handleAddLink = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    const isValidInput = isValid(inputValue);
  
    setLinkPath(inputValue);
    setIsValidInput(isValidInput);
  
    if (isValidInput) {
      dispatch(addLinkPath({ id, linkPath: inputValue }));
    } else {
      // If the input is not valid or empty, clear the Redux path
      dispatch(addLinkPath({ id, linkPath: "" }));
    }
  };
  
  

  const handleFocus = () => {
    setBlurred(false);
  };

  const handleBlur = () => {
    setBlurred(true);
  };

  const isInputTyped = linkPath.length > 0;
  const isInvalidInput = !isValidInput && blurred && isInputTyped;
  const isEmptyInput = linkPath.length === 0 && blurred;

  useEffect(() => {
    setLinkPath(path);
  }, [path]);

  useEffect(() => {
    if (isValidInput) {
      // Check if linkPath is not empty before dispatching
      if (linkPath.trim() !== "") {
        dispatch(addLinkPath({ id, linkPath }));
      } else {
        dispatch(addLinkPath({ id, linkPath: "" }));
      }
    }
  }, [dispatch, id, linkPath, isValidInput]);

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
            (isInvalidInput && isInputTyped) || (isEmptyInput && blurred)
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
