import { useAppSelector } from "../../../hooks/reduxHooks";
import arrowRight from "/assets/images/icon-arrow-right-white.svg";
const UserLinks = () => {
  const { links } = useAppSelector((store) => store.links);
  return (
    <div className="w-[80vw] sm:w-[50%] lg:w-[80%] flex flex-col gap-3">
      {links.map((singleLink) => {
        const { color, id, logoWhite, name, path } = singleLink;
        return (
          <a
          href={path.startsWith("https") ? path : `https://${path}`}
            target="_blank"
            key={id}
            style={{
              backgroundColor: color,
            }}
            className={`border flex justify-between items-center cursor-grab h-[50px] w-full rounded-[8px] text-white px-[16px] text-[.75rem]`}
          >
            <div className="flex gap-2 items-center">
              <img src={logoWhite} alt={name} />
              <span
                className={`${
                  name === "Frontend Mentor" ? "text-black" : "text-white"
                }`}
              >
                {name}
              </span>
            </div>
            <img src={arrowRight} alt="arrow right" />
          </a>
        );
      })}
    </div>
  );
};

export default UserLinks;
