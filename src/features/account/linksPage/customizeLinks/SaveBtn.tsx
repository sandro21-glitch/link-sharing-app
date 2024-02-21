const SaveBtn = () => {
  return (
    <button
      type="submit"
      className="mt-5 w-full  border border-transparent border-t-[#d9d9d9] flex justify-end"
    >
      <div className="text-white flex justify-center items-center mt-5 bg-strongPurple font-semibold capitalize w-[91px] h-[46px] rounded-[8px] hover:opacity-60 transition-opacity ease-in duration-150">
        Save
      </div>
    </button>
  );
};

export default SaveBtn;
