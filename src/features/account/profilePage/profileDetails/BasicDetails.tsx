const BasicDetails = () => {
  return (
    <section className="mb-5 px-5 flex flex-col justify-center gap-[12px] items-center mx-auto bg-[#fafafa] w-[85%] h-[233px]">
      <div className="w-full flex justify-between items-center">
        <label htmlFor="name" className="text-[1rem]">
          First name*
        </label>
        <div className="w-[432px]">
          <input id="name" type="text" className="w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4" />
        </div>
      </div>
      <div className="w-full  flex justify-between items-center">
        <label htmlFor="lastName" className="text-[1rem]">
        Last name*
        </label>
        <div className="w-[432px]">
          <input id="lastName" type="text" className="w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4" />
        </div>
      </div>
      <div className="w-full  flex justify-between items-center">
        <label htmlFor="email" className="text-[1rem]">
        Email
        </label>
        <div className="w-[432px]">
          <input id="email" type="email" className="w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4" />
        </div>
      </div>
    </section>
  );
};

export default BasicDetails;
