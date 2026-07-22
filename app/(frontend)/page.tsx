import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaSection } from "@/components/home/CtaSection";
import { Faq } from "@/components/home/Faq";

// Home renders CMS-managed content (featured listings, testimonials, FAQ),
// so it's always rendered per-request instead of statically generated.
export const dynamic = "force-dynamic";

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
