import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "src/pages/Home/HomePage";
import LoginPage from "src/pages/Login/LoginPage";
import SignUpPage from "src/pages/SignUp/SignUpPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
