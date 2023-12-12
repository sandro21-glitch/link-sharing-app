import AddedLinks from "./linksPage/addedLinks/AddedLinks";
import CustomizeLinks from "./linksPage/customizeLinks/CustomizeLinks";

const LinksPage = () => {
  return (
    <div className="flex gap-5">
      {/* added links */}
      <AddedLinks />
      {/* customize links */}
      <CustomizeLinks />
    </div>
  );
};

export default LinksPage;
