import Header from "../components/Header";
import FirstSlider from "../components/FirstSlider";
import Heading from "../components/Heading";
import Mobiles from "../components/Mobiles";
import Facility from "../components/Facility";
import OfferSlider from "../components/OfferSlider";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <FirstSlider />
      <Heading
        heading="Which One is yours ?"
        tagline="Connecting Hearts, Connecting Worlds"
      />
      <Mobiles />
      <Heading
        heading="Support"
        tagline="Connecting Hearts, Connecting Worlds"
      />
      <Facility />
      <Heading
        heading="Exclusive Mobile Service Offers!"
        tagline="Connecting Hearts, Connecting Worlds"
      />
      <OfferSlider />
      <Heading heading="Testimonials" tagline="Our Satisfied Visitors." />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
