import { getProtect } from "../contexts/protect";
import { Comments } from "../components/Comments";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portal - Comentários</title>
      </Head>
      <Comments />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  return getProtect(context);
}
