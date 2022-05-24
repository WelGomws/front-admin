import { getProtect } from "../contexts/protect";
import { Stations } from "../components/Stations";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portal - Estações</title>
      </Head>
      <Stations />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  return getProtect(context);
}
