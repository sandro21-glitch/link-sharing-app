import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./pages/Account";
import Preview from "./pages/Preview";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/account" />} />
        <Route path="account" element={<Account />} />
        <Route path="preview" element={<Preview />} />
      </Routes>
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </BrowserRouter>
  );
};

export default App;
