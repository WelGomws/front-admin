import Head from "next/head";
import { Signin } from "../components/Signin";
import { AuthProvider } from "../contexts/auth";

const LoginPage = () => (
  <AuthProvider>
    <Head>
      <title>Login</title>
    </Head>
    <Signin />
  </AuthProvider>
);

export default LoginPage;
