import Home3Team from "@/components/Team/Home3Team";
import About3 from "@/components/about/About3";
import Banner3 from "@/components/bannner/Banner3";
import Home3Blog from "@/components/blog/Home3Blog";
import Preloader from "@/components/common/Preloader";
import Home3Contact from "@/components/contact/Home3Contact";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import Partner3 from "@/components/partner/Partner3";
import PricingPlan3 from "@/components/pricingplan/PricingPlan3";
import Solution3 from "@/components/solutions/Solution3";
import SuccessStory3 from "@/components/successStorys/SuccessStory3";
import Testimonial3 from "@/components/testimonial/Testimonial3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

export default function Home() {
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
        <title>Everdots - Accelerating Digital Intelligence</title>
        <meta
          name="description"
          content="Discover AI - driven solutions at Everdots — your partner in digital automation and innovation. Accelerate business growth with cutting-edge intelligence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>

      <Header3 />
      <Banner3 />
      {/* <Partner3 />  */}
      <Solution3 />
      <About3 />

      <Home3Contact />

      <Footer3 />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
