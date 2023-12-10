import AddedLinks from "./addedLinks/AddedLinks";
import CustomizeLinks from "./customizeLinks/CustomizeLinks";

const Links = () => {
  return (
    <section>
      <div className="flex items-center gap-5">
        {/* added links */}
        <AddedLinks />
        {/* customize links */}
        <CustomizeLinks />
      </div>
    </section>
  );
};

export default Links;
