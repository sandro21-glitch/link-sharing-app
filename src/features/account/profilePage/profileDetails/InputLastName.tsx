import Input from "../../../../ui/Input";
import Label from "../../../../ui/Label";
type InputLastNameTypes = {
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
const InputLastName = ({ userData, setUserData }: InputLastNameTypes) => {
  const handleSetLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      userLastName: e.target.value,
    }));
  };
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
      <Label
        className="text-[.7rem] mb-1 lg:mb-0"
        htmlFor="lastName"
        name="Last name*"
      />
      <Input
        id="lastName"
        type="text"
        value={userData.userLastName}
        onChange={handleSetLastname}
        placeholder="Text input"
        className="w-[85%] md:w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
      />
    </div>
  );
};

export default InputLastName;
