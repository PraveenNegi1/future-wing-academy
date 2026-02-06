import FAQs from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TrainingProgrammes from "@/components/TrainingProgrammes";
import WhoIsThisCourseFor from "@/components/WhoIsThisCourseFor";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero />
  <WhyChooseUs />
  <WhoWeAre />
  <TrainingProgrammes />
  <WhoIsThisCourseFor />
  <Testimonials />
  <FAQs />
  </>
  );
}
