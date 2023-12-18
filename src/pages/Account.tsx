import { useState } from "react";
import AccountPage from "../features/account/AccountPage";
import AccountNav from "../ui/AccountNav";
const Account = () => {
  const [currPage, setCurrPage] = useState("links");
  return (
    <main className="section-center py-[25px]">
      <AccountNav currPage={currPage} setCurrPage={setCurrPage} />
      <AccountPage currPage={currPage} />
    </main>
  );
};

export default Account;
