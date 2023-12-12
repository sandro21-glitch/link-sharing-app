import phoneMockup from "/assets/images/illustration-phone-mockup.svg";

const AddedLinks = () => {
  return (
    <section className="bg-white rounded-[12px] w-[512px] flex-center">
      <div>
        <img
          src={phoneMockup}
          alt="phoneMockup"
          className="min-w-[307px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default AddedLinks;
