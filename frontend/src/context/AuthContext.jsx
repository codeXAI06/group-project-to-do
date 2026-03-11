import { useState } from "react";
import { AuthContext } from "./AuthContextDefinition";
import { apiRequest } from "../api/api";
import { API_ENDPOINTS } from "../utils/constants";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (email, password) => {
    const data = await apiRequest(API_ENDPOINTS.LOGIN, "POST", { email, password });
    localStorage.setItem("token", data.token);
    setToken(data.token);
  };

  const register = async (username, email, password) => {
    await apiRequest(API_ENDPOINTS.REGISTER, "POST", {
      username,
      email,
      password,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

