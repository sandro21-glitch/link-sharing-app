import UserInfo from "./userSettings/UserInfo";

const DisplayProfile = () => {
  return (
    <article className="absolute top-[150px] lg:top-[208px] left-0 right-0 mx-auto
     lg:w-[349px] lg:min-h-[569px] lg:rounded-[24px] py-[48px] lg:bg-white lg:shadow-lg flex flex-col items-center ">
      <UserInfo />
    </article>
  );
};

export default DisplayProfile;
