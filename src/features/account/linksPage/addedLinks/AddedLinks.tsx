import LinkBoxes from "./LinkBoxes";
import phoneMockup from "/assets/images/illustration-phone-mockup.svg";
const AddedLinks = () => {
  return (
    <section className="bg-white  rounded-[12px] w-[512px] h-[834px] hidden lg:flex-center">
      <div className="relative">
        <img
          src={phoneMockup}
          alt="phoneMockup"
          className="min-w-[307px] h-auto object-contain"
        />
        <LinkBoxes />
      </div>
    </section>
  );
};

export default AddedLinks;
