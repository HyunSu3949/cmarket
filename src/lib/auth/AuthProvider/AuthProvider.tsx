import { useState, useCallback, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axiosInstance from "src/lib/axiosInstance";
import { Outlet } from "react-router-dom";
import LoginPage from "src/pages/Login/LoginPage";

type UserInfo = {
  username: string;
  password: string;
  login_type: "BUYER" | "SELLER";
};

export const AuthContext = createContext({});

export default function AuthProvider() {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    setIsLogedIn(!!localStorage.getItem("token"));
  }, [navigate]);

  const handleLogout = useCallback(async () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{
        handleLogout,
        isLogedIn,
      }}
    >
      {isLogedIn ? <Outlet /> : <LoginPage />}
    </AuthContext.Provider>
  );
}
