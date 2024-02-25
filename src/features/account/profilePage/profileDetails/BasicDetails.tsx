import InputEmail from "./InputEmail";
import InputLastName from "./InputLastName";
import InputName from "./InputName";
type BasicDetailTypes = {
  userData: {
    userName: string;
    userLastName: string;
    email: string;
  };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      userLastName: string;
      email: string;
    }>
  >;
};
const BasicDetails = ({ setUserData, userData }: BasicDetailTypes) => {
  return (
    <section className="mb-5 px-5 flex flex-col justify-center gap-[12px] items-center mx-auto bg-[#fafafa] w-[85%] h-[233px]">
      <InputName setUserData={setUserData} userData={userData} />
      <InputLastName setUserData={setUserData} userData={userData} />
      <InputEmail setUserData={setUserData} userData={userData} />
    </section>
  );
};

export default BasicDetails;
