import Head from "next/head";
import { Loading } from "@nextui-org/react";
import { capitalize } from "lodash";
import { useUser } from "hooks/useUser";
import Layout from "components/Layout";

function Home() {
  const { user, loading } = useUser();

  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h3>
          {loading ? (
            <Loading size="xl" type="points-opacity" />
          ) : user ? (
            `Authenticated as ${capitalize(user.role)}`
          ) : (
            "Landing Page"
          )}
        </h3>
      </Layout>
    </>
  );
}

export default Home;
