import AddedLinks from "./addedLinks/AddedLinks";
import CustomizeLinks from "./customizeLinks/CustomizeLinks";
const AccountPage = () => {
  return (
    <section>
      <div className="flex gap-5">
        {/* added links */}
        <AddedLinks />
        {/* customize links */}
        <CustomizeLinks />
      </div>
    </section>
  );
};

export default AccountPage;
