import { useState } from "react";
import BasicDetails from "./profileDetails/BasicDetails";
import UploadImage from "./profileDetails/UploadImage";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setUserDataState } from "../../user";

const ProfileDetails = () => {
  const dispatch = useAppDispatch();
  const storedUserData = localStorage.getItem("userData");
  const initialUserData = storedUserData ? JSON.parse(storedUserData) : {};

  const [userData, setUserData] = useState({
    userName: initialUserData.userName || "",
    userLastName: initialUserData.lastName || "",
    email: initialUserData.email || "",
  });

  const handleSubmitUserData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setUserDataState({
        data: {
          userName: userData.userName,
          lastName: userData.userLastName,
          email: userData.email,
        },
      })
    );
  };

  return (
    <form
      onSubmit={handleSubmitUserData}
      className="bg-white flex-1 rounded-[12px]"
    >
      <h1 className="text-[2rem] font-semibold normal-case pt-10 px-10 mb-5">
        Profile Details
      </h1>
      <p className="mb-10 px-10">
        Add your details to create a personal touch to your profile.
      </p>
      <UploadImage />
      <BasicDetails userData={userData} setUserData={setUserData} />
      <div className="mt-5 border border-transparent border-t-[#d9d9d9] flex justify-center lg:justify-end">
        <button
          type="submit"
          className="text-white mt-5 bg-strongPurple font-semibold capitalize w-[90%] lg:w-[91px] h-[46px] rounded-[8px] hover:opacity-60 transition-opacity ease-in duration-150"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileDetails;
