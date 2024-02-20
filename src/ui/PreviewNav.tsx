const PreviewNav = () => {
  return (
    <nav className="max-w-[1264px] w-full mx-auto h-[78px] p-5 bg-white rounded-lg flex items-center justify-between mb-5">
      <div className="flex justify-between w-full">
        <button
          className="border-strongPurple border w-[159px] h-[46px]
         rounded-md font-semibold text-strongPurple hover:text-white hover:bg-strongPurple transition-all ease-in duration-150"
        >
          Back To Editor
        </button>
        <button
          className="border-strongPurple border w-[159px] h-[46px]
         rounded-md font-semibold bg-strongPurple text-white hover:text-strongPurple hover:bg-white transition-all ease-in duration-150"
        >
          Share Link
        </button>
      </div>
    </nav>
  );
};

export default PreviewNav;
