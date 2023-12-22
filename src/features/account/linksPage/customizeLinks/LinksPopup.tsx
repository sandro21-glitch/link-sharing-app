import { useAccountContext } from "../../../../context/AccountContext";
import { LINK_SITES } from "../../../../platforms";
type LinkPopupTypes = {
  selectIndex: number;
};
const LinksPopup = ({ selectIndex }: LinkPopupTypes) => {
  const { selectLink } = useAccountContext();

  return (
    <div className="absolute z-[9999] border rounded-md top-[5.5rem] bg-white w-full h-[345px] px-[16px] overflow-y-scroll">
      {LINK_SITES.map((link, index) => {
        return (
          <li
            onClick={() => selectLink(selectIndex)}
            key={index}
            className="flex items-center gap-3 border-b py-[12px] cursor-pointer group"
          >
            <img src={link.logo} alt={link.name} />
            <span className="text-darkGrey group-hover:text-strongPurple transition-colors ease-in duration-150">
              {link.name}
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default LinksPopup;
