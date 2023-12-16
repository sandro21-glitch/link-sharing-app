import illustrationEmpty from "/assets/images/illustration-empty.svg";

const EmptyLinks = () => {
  return (
    <div className="bg-[#fafafa] w-full h-[469px] flex flex-col justify-center items-center">
      <img src={illustrationEmpty} alt="illustration empty" className="mb-10" />
      <h1 className="text-[2rem] font-semibold mb-10">Let's get you started</h1>
      <p className="w-[488px] text-center">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyLinks;
