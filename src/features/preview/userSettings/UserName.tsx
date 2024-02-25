import { useAppSelector } from "../../../hooks/reduxHooks";

const UserName = () => {
  const {
    userData: { userName },
  } = useAppSelector((store) => store.user);
  return <h3 className="font-semibold">{userName ? userName : ""}</h3>;
};

export default UserName;
