import React from "react";
import Footer3 from "../footer/Footer3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import Header3 from "../header/Header3";

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
      <Head>
        <title>Everdots - Accelerating Digital Intelligence</title>
        <meta
          name="description"
          content="Discover AI - driven solutions at Everdots — your partner in digital automation and innovation. Accelerate business growth with cutting-edge intelligence."
        />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Header3 />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
