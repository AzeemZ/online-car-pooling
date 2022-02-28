import { useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import { Loading } from "@nextui-org/react";
import Layout from "components/Layout";

export default function Signout() {
  useEffect(() => {
    const signOut = async () => {
      await axios.get("/api/auth/signout");
      Router.replace("/", "/");
    };
    signOut();
  });

  return (
    <Layout>
      <Loading size="xl" type="points-opacity" />
    </Layout>
  );
}
