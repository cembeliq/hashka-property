import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaSection } from "@/components/home/CtaSection";
import { Faq } from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedListings />
      <WhyUs />
      <Testimonials />
      <CtaSection />
      <Faq />
    </>
  );
}
