// only component
import { useState } from "react";
import { AuthContext } from "./AuthContextInstance"; // separate context export

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};