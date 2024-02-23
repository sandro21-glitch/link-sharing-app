import logoLarge from "/assets/images/logo-devlinks-large.svg";
import logoSmall from "/assets/images/logo-devlinks-small.svg";
const NavLogo = () => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={logoSmall} />
      <img
        src={logoLarge}
        alt="logo"
        className="w-full h-auto object-contain lg:w-[146px] lg:h-auto"
      />
    </picture>
  );
};

export default NavLogo;
