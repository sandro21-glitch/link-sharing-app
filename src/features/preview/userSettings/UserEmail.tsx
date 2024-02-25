import { useAppSelector } from "../../../hooks/reduxHooks";

const UserEmail = () => {
  const {
    userData: { email },
  } = useAppSelector((store) => store.user);
  return <p className="mb-10">{email ? email : ""}</p>;
};

export default UserEmail;
