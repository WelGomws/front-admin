import { getProtect } from "../contexts/protect";
import { HomePage } from "../components/Home";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portal - Inicio</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  return getProtect(context);
}
