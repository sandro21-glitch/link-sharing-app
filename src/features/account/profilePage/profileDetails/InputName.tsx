import Label from "../../../../ui/Label";
import Input from "../../../../ui/Input";
type InputNameTypes = {
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
const InputName = ({ setUserData, userData }: InputNameTypes) => {
  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      userName: e.target.value,
    }));
  };
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
      <Label
        className="text-[.7rem] mb-1 lg:mb-0"
        htmlFor="name"
        name="First name*"
      />
      <Input
        id="name"
        type="text"
        value={userData.userName}
        onChange={handleSetName}
        placeholder="Text input"
        className="w-[85%] md:w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
      />
    </div>
  );
};

export default InputName;
