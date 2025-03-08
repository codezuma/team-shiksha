import { testimonialData } from "@/components/home-page/data/testimonials";
import HeroSection from "@/components/home-page/hero-section";
import Testimonials from "@/components/home-page/testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Testimonials testimonials={testimonialData} />
    </>
  );
};

export default HomePage;