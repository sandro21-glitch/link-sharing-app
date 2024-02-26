import { useAppSelector } from "../../../hooks/reduxHooks";

const UserName = () => {
  const {
    userData: { userName, lastName },
  } = useAppSelector((store) => store.user);
  return (
    <h3 className="font-semibold">
      {userName && lastName ? (
        <div className="flex items-center gap-2">
          <span>{userName}</span>
          <span>{lastName}</span>
        </div>
      ) : (
        ""
      )}
    </h3>
  );
};

export default UserName;
