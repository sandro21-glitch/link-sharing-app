import BasicDetails from "./profileDetails/BasicDetails";
import UploadImage from "./profileDetails/UploadImage";

const ProfileDetails = () => {
  return (
    <form className="bg-white flex-1 rounded-[12px]">
      <h1 className="text-[2rem] font-semibold normal-case pt-10 px-10 mb-5">
        Profile Details
      </h1>
      <p className="mb-10 px-10">
        Add your details to create a personal touch to your profile.
      </p>
      <UploadImage />
      <BasicDetails />
    </form>
  );
};

export default ProfileDetails;
