const BasicDetails = () => {
  return (
    <section className="mb-5 px-5 flex flex-col justify-center gap-[12px] items-center mx-auto bg-[#fafafa] w-[85%] h-[233px]">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <label htmlFor="name" className="text-[.7rem] mb-1 lg:mb-0">
          First name*
        </label>
        <div className="w-[432px]">
          <input
            id="name"
            type="text"
            placeholder="Text input"
            className="w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <label htmlFor="lastName" className="text-[.7rem] mb-1 lg:mb-0">
          Last name*
        </label>
        <div className="w-[432px]">
          <input
            id="lastName"
            type="text"
            placeholder="Text input"
            className="w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <label htmlFor="email" className="text-[.7rem] mb-1 lg:mb-0">
          Email
        </label>
        <div className="w-[432px]">
          <input
            id="email"
            type="email"
            placeholder="Text input"
            className="w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
          />
        </div>
      </div>
    </section>
  );
};

export default BasicDetails;
