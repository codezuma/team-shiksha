import { testimonialData } from "@/components/home-page/data/testimonials";
import FaqSection from "@/components/home-page/faq-section";
import HeroSection from "@/components/home-page/hero-section";
import Projects from "@/components/home-page/projects";
import Testimonials from "@/components/home-page/testimonials";
import type { Metadata } from 'next';


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <FaqSection />
      <Testimonials testimonials={testimonialData} />
    </>
  );
};

export default HomePage;


export const metadata: Metadata = {
  title: "Team Shiksha",
  description: "A Growth Community For Everyone Who Wants To Learn in Private BETA.",
};
