import LinksPage from "./LinksPage";
import ProfilePage from "./ProfilePage";
type AccountTypes = {
  currPage: string;
};
const AccountPage = ({ currPage }: AccountTypes) => {
  return (
    <section>{currPage === "links" ? <LinksPage /> : <ProfilePage />}</section>
  );
};

export default AccountPage;
