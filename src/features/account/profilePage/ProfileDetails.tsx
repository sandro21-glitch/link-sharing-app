import uploadImage from "/assets/images/icon-upload-image.svg";
const ProfileDetails = () => {
  return (
    <form className="bg-white flex-1 rounded-[12px]">
      <h1 className="text-[2rem] font-semibold normal-case pt-10 px-10 mb-5">
        Profile Details
      </h1>
      <p className="mb-10 px-10">
        Add your details to create a personal touch to your profile.
      </p>
      <section className="flex justify-between px-5 items-center gap-5 mx-auto bg-[#fafafa] w-[85%] h-[233px]">
        <p className=" mx-auto">Profile picture</p>
        <label
          htmlFor="inputFile"
          className="bg-veryLightPurple w-[193px] h-[193px] flex justify-center items-center flex-col rounded-[12px] text-strongPurple font-semibold cursor-pointer"
        >
          <input
            id="inputFile"
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
          />
          <img src={uploadImage} />+ Upload Image
        </label>
        <p className="mx-auto w-[155px] text-[.75rem]">Image must be below 1024x1024px. Use PNG or JPG format.</p>
      </section>
    </form>
  );
};

export default ProfileDetails;
