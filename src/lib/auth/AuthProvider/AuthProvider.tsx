import { useState, createContext, Dispatch, SetStateAction } from "react";

type Context = {
  isLogedIn: boolean;
  loginType: string;
  handleLogout: () => void;
  setIsLogedIn: Dispatch<SetStateAction<boolean>>;
  setLoginType: Dispatch<SetStateAction<string>>;
};
export const AuthContext = createContext<Context>({
  isLogedIn: false,
  loginType: "BUYER",
  handleLogout: () => undefined,
  setIsLogedIn: () => undefined,
  setLoginType: () => undefined,
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [isLogedIn, setIsLogedIn] = useState(!!localStorage.getItem("token"));
  const initialType = localStorage.getItem("login_type") || "BUYER";
  const [loginType, setLoginType] = useState(initialType);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        loginType,
        handleLogout,
        setIsLogedIn,
        setLoginType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
