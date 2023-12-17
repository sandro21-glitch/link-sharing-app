import { Outlet } from "react-router-dom";
import AccountNav from "../ui/AccountNav";
import { useState } from "react";
const Account = () => {
  const [currentPage, setCurrentPage] = useState("links");

  return (
    <main className="section-center py-[25px]">
      <AccountNav />
      <Outlet context={[currentPage, setCurrentPage]} />
    </main>
  );
};

export default Account;
