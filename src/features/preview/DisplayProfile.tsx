import UserInfo from "./userSettings/UserInfo";

const DisplayProfile = () => {
  return (
    <article className="absolute top-[208px] left-0 right-0 mx-auto
     w-[349px] min-h-[569px] rounded-[24px] py-[48px] bg-white shadow-lg flex flex-col items-center ">
      <UserInfo />
    </article>
  );
};

export default DisplayProfile;
