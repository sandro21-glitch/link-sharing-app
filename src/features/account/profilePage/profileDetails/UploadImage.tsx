import uploadImage from "/assets/images/icon-upload-image.svg";

const UploadImage = () => {
  return (
    <section className="mb-5 flex justify-between px-5 items-center gap-5 mx-auto bg-[#fafafa] w-[85%] h-[233px]">
      <p className="">Profile picture</p>
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
      <p className="w-[215px] text-[.75rem]">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </section>
  );
};

export default UploadImage;
