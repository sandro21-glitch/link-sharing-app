import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./pages/Account";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/account" />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
