import DisplayProfile from "../features/preview/DisplayProfile";
import PreviewNav from "../ui/PreviewNav";

const Preview = () => {
  return (
    <main>
      <header className="h-[357px] w-full bg-white lg:bg-strongPurple rounded-b-[2rem] py-[25px] px-5">
        <PreviewNav />
        <DisplayProfile />
      </header>
    </main>
  );
};

export default Preview;
