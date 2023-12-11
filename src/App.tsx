import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./pages/Account";
import AccountPage from "./features/account/AccountPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="account" element={<Account />}>
          <Route index element={<AccountPage />} />
        </Route>
        <Route index element={<Navigate replace to="account" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
