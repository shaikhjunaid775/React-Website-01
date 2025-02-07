import Aboutus from "../component/Aboutus";
import AnimatedCounters from "../component/AnimatedCounters";
import Banner from "../component/Banner";
import CallToAction from "../component/CallToAction";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Services from "../component/Services";
import Testimonial from "../component/Testomonial";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AnimatedCounters />
      <Aboutus />
      <Testimonial />
      <Services />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
