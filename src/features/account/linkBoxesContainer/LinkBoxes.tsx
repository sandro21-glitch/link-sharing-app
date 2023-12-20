import { useAccountContext } from "../../../context/AccountContext";
import SingleLinkBox from "./SingleLinkBox";

const LinkBoxes = () => {
  const { state } = useAccountContext();
  const links = state.links;
  return (
    <div className="absolute top-[278px] left-0 right-0 mx-auto w-[237px] flex flex-col gap-[20px]">
      {/* single box */}
      {links.map((link, index) => {
        return <SingleLinkBox key={index} link={link} />;
      })}
    </div>
  );
};

export default LinkBoxes;
