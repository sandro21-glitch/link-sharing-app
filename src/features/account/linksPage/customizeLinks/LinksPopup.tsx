import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { LINK_SITES } from "../../../../platforms";
import { SingleLinkType } from "../../../../types/linksType";
import { editLink } from "../../../links";
type LinkPopupTypes = {
  id: string;
  setOpenPopup: (open: boolean) => void;
};
const LinksPopup = ({ id, setOpenPopup }: LinkPopupTypes) => {
  const dispatch = useAppDispatch();
  const handleChangeLink = (link: SingleLinkType) => {
    dispatch(editLink({ id, link }));
    setOpenPopup(false);
  };
  return (
    <ul className="absolute z-[9999] border rounded-md top-[5.5rem] bg-white w-full h-[345px] px-[16px] overflow-y-scroll">
      {LINK_SITES.map((link) => {
        const { id, name, logo } = link;
        return (
          <li
            onClick={() => handleChangeLink(link)}
            key={id}
            className="flex items-center gap-3 border-b py-[12px] cursor-pointer group"
          >
            <img src={logo} alt={name} />
            <span className="text-darkGrey group-hover:text-strongPurple transition-colors ease-in duration-150">
              {name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default LinksPopup;
