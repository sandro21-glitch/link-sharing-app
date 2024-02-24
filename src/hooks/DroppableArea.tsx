import React from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch } from "../hooks/reduxHooks";
import { reorderLinks } from "../features/links";

interface DroppableAreaProps {
  children: React.ReactNode;
  dropAreaId: string;
}

const DroppableArea = ({ children, dropAreaId }: DroppableAreaProps) => {
  const dispatch = useAppDispatch();

  const [, drop] = useDrop({
    accept: "SINGLE_LINK_BOX",
    drop: (item: { id: string }) => {
      const { id: draggedLinkId } = item;
      dispatch(reorderLinks({ draggedLinkId, droppedLinkId: dropAreaId }));
    },
  });

  return <div ref={drop}>{children}</div>;
};

export default DroppableArea;
