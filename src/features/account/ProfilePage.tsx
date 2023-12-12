import LinksMockup from "./profilePage/LinksMockup";
import ProfileDetails from "./profilePage/ProfileDetails";

const ProfilePage = () => {
  return (
    <div className="flex gap-5">
      {/* added links */}
      <LinksMockup />
      {/* customize profile details */}
      <ProfileDetails />
    </div>
  );
};

export default ProfilePage;
