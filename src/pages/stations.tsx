import { getProtect } from "../contexts/protect";
import { Stations } from "../components/Stations";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portal - Estações</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Stations />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  return getProtect(context);
}
