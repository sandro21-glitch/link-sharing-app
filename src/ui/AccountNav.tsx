import logoLarge from "/assets/images/logo-devlinks-large.svg";
import link from "/assets/images/icon-link.svg";
import profile from "/assets/images/icon-profile-details-header.svg";
const AccountNav = () => {
  return (
    <nav className="w-full h-[78px] p-5 bg-white rounded-md flex items-center justify-between">
      <img
        src={logoLarge}
        alt="logo"
        className="w-[146px] h-auto object-contain"
      />
      <ul className="flex items-center gap-8">
        <li className="w-[122px] h-[46px] bg-veryLightPurple rounded-lg flex justify-center items-center gap-2 cursor-pointer">
          <img src={link} alt="link" />
          <span className="text-strongPurple font-semibold">Links</span>
        </li>
        <li className="w-[187px] h-[46px] rounded-lg flex justify-center items-center gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <img src={profile} alt="profile" />
            <span className="text-darkGrey font-semibold">Profile Details</span>
          </div>
        </li>
      </ul>
      <button className="w-[114px] h-[46px] border border-strongPurple rounded-lg capitalize text-strongPurple font-semibold">
        preview
      </button>
    </nav>
  );
};

export default AccountNav;
