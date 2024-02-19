import AddNewLink from "./AddNewLink";
import SaveBtn from "./SaveBtn";
import SingleLink from "./SingleLink";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import EmptyLinks from "./EmptyLinks";
const CustomizeLinks = () => {
  const { links } = useAppSelector((store) => store.links);
  const isLinksEmpty = links.length < 1;
  return (
    <form className="bg-white flex-1 rounded-[12px] h-full">
      <h1 className="text-[2rem] font-semibold normal-case pt-10 px-10 mb-5">
        Customize your links
      </h1>
      <p className="mb-10 px-10">
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>
      <div className="px-10 min-h-[500px]">
        {/* add new link btn */}
        <AddNewLink />
        {/* check if there is no links */}
        {isLinksEmpty ? (
          <EmptyLinks />
        ) : (
          <ul className="flex flex-col gap-5">
            {links.map((link) => {
              return <SingleLink key={link.id} link={link} />;
            })}
          </ul>
        )}
      </div>
      {/* save btn */}
      <SaveBtn />
    </form>
  );
};

export default CustomizeLinks;
