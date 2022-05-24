import { getProtect } from "../contexts/protect";
import { Lines } from "../components/Lines";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portal - Linhas</title>
      </Head>
      <Lines />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  return getProtect(context);
}
