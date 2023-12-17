import { useOutletContext } from "react-router-dom";
import LinksPage from "./LinksPage";
// import ProfilePage from "./ProfilePage";

const AccountPage = () => {
  const [currentPage:String, setCurrentPage] = useOutletContext();
  return (
    <section>
      <LinksPage />
      {/* <ProfilePage /> */}
    </section>
  );
};

export default AccountPage;
