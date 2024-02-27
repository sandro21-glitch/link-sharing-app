import { useAppSelector } from "../../../hooks/reduxHooks";
import LinkBoxes from "../linksPage/addedLinks/LinkBoxes";
import phoneMockup from "/assets/images/illustration-phone-mockup.svg";
const LinksMockup = () => {
  const { image, userData } = useAppSelector((store) => store.user);

  return (
    <section className="bg-white rounded-[12px] w-[512px] h-[834px] hidden lg:flex-center ">
      <div className="relative">
        <img
          src={phoneMockup}
          alt="phoneMockup"
          className="min-w-[307px] h-auto object-contain "
        />
        {image !== "" && (
          <div className="absolute mx-auto top-[63.5px] w-[96px] h-[96px] overflow-hidden left-0 right-0 rounded-full border-4 border-strongPurple">
            <img src={image} alt="user image" />
          </div>
        )}
        {userData && (
          <>
            <h1 className="text-center font-semibold w-[80%] bg-white mx-auto text-[1rem] absolute left-0 right-0 top-[185px]">
              {userData.userName} {userData.lastName}
            </h1>
            <p className="text-[.8rem]  w-[80%] absolute top-[206px] left-0 right-0 mx-auto text-center bg-white">
              {userData.email}
            </p>
          </>
        )}
        <div className="absolute bottom-[57px] w-[237px] h-[300px] bg-white left-0 right-0 mx-auto"></div>
        <LinkBoxes />
      </div>
    </section>
  );
};

export default LinksMockup;
