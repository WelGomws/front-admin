import { createContext, ReactNode } from "react";
import { api } from "../services/api";

type SingInCredentials = {
  email: string;
  password: string;
};

type LoginReturn = {
  token: string;
  user: {
    name: string;
  };
};

type AuthContextData = {
  signIn(credentials: SingInCredentials): Promise<LoginReturn>;
  isAuthenticated: boolean;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;
  async function signIn({ email, password }: SingInCredentials) {
    try {
      const response = await api.post("/user/signin", {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      console.log("nao encontrado");
      throw err;
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
