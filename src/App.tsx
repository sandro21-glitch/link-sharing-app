import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
