import Input from "../../../../ui/Input";
import Label from "../../../../ui/Label";

const BasicDetails = () => {
  return (
    <section className="mb-5 px-5 flex flex-col justify-center gap-[12px] items-center mx-auto bg-[#fafafa] w-[85%] h-[233px]">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <Label
          className="text-[.7rem] mb-1 lg:mb-0"
          htmlFor="name"
          name="First name*"
        />
        <div className="w-[432px]">
          <Input
            id="name"
            type="text"
            placeholder="Text input"
            className="w-[85%] md:w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <Label
          className="text-[.7rem] mb-1 lg:mb-0"
          htmlFor="lastName"
          name="Last name*"
        />
        <div className="w-[432px]">
          <Input
            id="lastName"
            type="text"
            placeholder="Text input"
            className="w-[85%] md:w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center">
        <Label
          className="text-[.7rem] mb-1 lg:mb-0"
          htmlFor="email"
          name="Email*"
        />
        <div className="w-[432px]">
          <Input
            id="email"
            type="email"
            placeholder="Text input"
            className="w-[85%] md:w-full h-[48px] border rounded-lg outline-none focus:border-strongPurple transition-all ease-in duration-150 px-4"
          />
        </div>
      </div>
    </section>
  );
};

export default BasicDetails;
