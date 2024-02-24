import DndProviderWrapper from "../../../../hooks/DndProviderWrapper";
import DroppableArea from "../../../../hooks/DroppableArea";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import SingleLinkBox from "./SingleLinkBox";

const LinkBoxes = () => {
  const { links } = useAppSelector((store) => store.links);

  return (
    <DndProviderWrapper>
      <div className="absolute top-[278px] left-0 right-0 mx-auto w-[237px] flex flex-col gap-[20px]">
        {/* single box */}
        {links.map((link) => (
          <DroppableArea key={link.id} dropAreaId={link.id}>
            <SingleLinkBox link={link} />
          </DroppableArea>
        ))}
      </div>
    </DndProviderWrapper>
  );
};

export default LinkBoxes;
