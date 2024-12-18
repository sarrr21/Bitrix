import Experience from "./Components/Exprence";
import Exprence from "./Components/Exprence";
import FooterComponent from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import ProcessRoadmap from "./Components/Process";
import Roadmap from "./Components/Roadmap";
import Service from "./Components/service";
import SponsorsMarquee from "./Components/SponsorsMarquee";
import TestimonialSlider from "./Components/Testimonial";

export default function App() {
  return (
    <div>
     <Navbar />
     <Header />
     <SponsorsMarquee />
     <Service />
    <Experience />
    <Roadmap />
   <TestimonialSlider />
   <FooterComponent />
    </div>
  )
}