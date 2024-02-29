import Aos from "aos";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Navbar from "./components/Navbar/Navbar";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import "aos/dist/aos.css";
import OurService from "./components/OurServices/OurService";
import DoMore from "./components/DoMore/DoMore";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  Aos.init({ duration: 1000 });
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <OurService />
      <DoMore />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
