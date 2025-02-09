import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
     <Head>
        <title>
          Everdots- Accelerating Digital Intelligence
        </title>
        <meta name="description" content="Discover AI-driven solutions at Everdots—your partner in digital automation and innovation. Accelerate business growth with cutting-edge intelligence." />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Header />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
