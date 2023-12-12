import illustrationEmpty from "/assets/images/illustration-empty.svg";
const CustomizeLinks = () => {
  return (
    <form className="bg-white flex-1 rounded-[12px]">
      <h1 className="text-[2rem] font-semibold normal-case pt-10 px-10 mb-5">
        Customize your links
      </h1>
      <p className="mb-10 px-10">
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>
      <fieldset className=" px-10 ">
        <button className="mb-5 border border-strongPurple w-full py-3 rounded-lg text-strongPurple font-medium hover:bg-veryLightPurple transition-colors ease-in duration-150">
          + Add new link
        </button>
        <div className="bg-[#fafafa] w-full h-[469px] flex flex-col justify-center items-center">
          <img
            src={illustrationEmpty}
            alt="illustration empty"
            className="mb-10"
          />
          <h1 className="text-[2rem] font-semibold mb-10">
            Let's get you started
          </h1>
          <p className="w-[488px] text-center">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
        {/* save btn */}
        <div className="mt-5 border border-transparent border-t-[#d9d9d9] flex justify-end">
          <button className="text-white mt-5 bg-strongPurple font-semibold capitalize w-[91px] h-[46px] rounded-[8px] hover:opacity-60 transition-opacity ease-in duration-150">
            Save
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CustomizeLinks;
