import InputEmail from "./InputEmail";
import InputLastName from "./InputLastName";
import InputName from "./InputName";

const BasicDetails = () => {
  return (
    <section className="mb-5 px-5 flex flex-col justify-center gap-[12px] items-center mx-auto bg-[#fafafa] w-[85%] h-[233px]">
      <InputName />
      <InputLastName />
      <InputEmail />
    </section>
  );
};

export default BasicDetails;
