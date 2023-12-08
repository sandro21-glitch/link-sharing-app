import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./pages/Account";
import Profile from "./features/account/profile/Profile";
import Links from "./features/account/links/Links";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="account" element={<Account />}>
          <Route index element={<Navigate replace to="profile" />} />
          <Route path="profile" element={<Profile />} />
          <Route path="links" element={<Links />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
