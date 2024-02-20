import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./pages/Account";
import Preview from "./pages/Preview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/account" />} />
        <Route path="account" element={<Account />} />
        <Route path="preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
