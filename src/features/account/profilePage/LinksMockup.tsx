import LinkBoxes from "../linksPage/linkBoxesContainer/LinkBoxes";
import phoneMockup from "/assets/images/illustration-phone-mockup.svg";
const LinksMockup = () => {
  return (
    <section className="bg-white rounded-[12px] w-[512px] h-[834px] flex-center ">
      <div className="relative">
        <img
          src={phoneMockup}
          alt="phoneMockup"
          className="min-w-[307px] h-auto object-contain"
        />
        <div className="absolute bottom-[57px] w-[237px] h-[300px] bg-white left-0 right-0 mx-auto"></div>
        <LinkBoxes />
      </div>
    </section>
  );
};

export default LinksMockup;
