import { useAppSelector } from "../../../../hooks/reduxHooks";
import SingleLinkBox from "./SingleLinkBox";

const LinkBoxes = () => {
  const { links } = useAppSelector((store) => store.links);
  return (
    <div className="absolute top-[278px] left-0 right-0 mx-auto w-[237px] flex flex-col gap-[20px]">
      {/* single box */}
      {links.map((link) => {
        const { id } = link;
        return <SingleLinkBox key={id} link={link} />;
      })}
    </div>
  );
};

export default LinkBoxes;
