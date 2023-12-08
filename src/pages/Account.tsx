import { Outlet } from "react-router-dom";
import AccountNav from "../ui/AccountNav";
const Account = () => {
  return (
    <main className="section-center border py-[25px]">
      <AccountNav />
      <Outlet />
    </main>
  );
};

export default Account;
