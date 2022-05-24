import Head from "next/head";
import { Signin } from "../components/Signin";
import { AuthProvider } from "../contexts/auth";

const LoginPage = () => (
  <AuthProvider>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Rubik:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title>Login</title>
    </Head>
    <Signin />
  </AuthProvider>
);

export default LoginPage;
