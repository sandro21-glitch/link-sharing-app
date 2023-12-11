import phoneMockup from "/assets/images/illustration-phone-mockup.svg";

const AddedLinks = () => {
  return (
    <section className="bg-white p-24 rounded-lg">
      <div>
        <img
          src={phoneMockup}
          alt="phoneMockup"
          className="w-[307px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default AddedLinks;
