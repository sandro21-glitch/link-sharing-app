import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { setUserImage } from "../../../user";
import uploadImage from "/assets/images/icon-upload-image.svg";

const UploadImage = () => {
  const dispatch = useAppDispatch();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(setUserImage(imageUrl));
    }
  };
  return (
    <section
      className="mb-5 flex flex-col lg:flex-row items-start
     lg:justify-between py-5 lg:py-0 px-5 lg:items-center gap-5 mx-auto bg-[#fafafa] w-[85%] min-h-[233px]"
    >
      <p>Profile picture</p>
      <label
        htmlFor="inputFile"
        className="bg-veryLightPurple w-[193px] h-[193px] flex justify-center items-center flex-col rounded-[12px] text-strongPurple font-semibold cursor-pointer"
      >
        <input
          id="inputFile"
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleFileChange}
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
