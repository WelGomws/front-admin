import { getProtect } from "../contexts/protect";
import { HomePage } from "../components/Home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portal - Inicio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  return getProtect(context);
}
