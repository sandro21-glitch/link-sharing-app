import { useAppSelector } from "../../../hooks/reduxHooks";

const UserAvatar = () => {
  const { image } = useAppSelector((store) => store.user);
  return (
    <div className="rounded-full overflow-hidden border-4 border-strongPurple w-[6rem] h-[6rem] mb-7">
      {image !== "" && <img src={image} alt="user image" />}
    </div>
  );
};

export default UserAvatar;
