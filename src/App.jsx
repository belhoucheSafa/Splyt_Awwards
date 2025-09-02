import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import FooterSection from "./sections/FooterSections";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",   
      content: ".smooth-content", 
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div className="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
