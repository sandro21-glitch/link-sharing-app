import UserAvatar from "./UserAvatar";
import UserEmail from "./UserEmail";
import UserLinks from "./UserLinks";
import UserName from "./UserName";

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <UserAvatar />
      <UserName />
      <UserEmail />
      <UserLinks />
    </div>
  );
};

export default UserInfo;
