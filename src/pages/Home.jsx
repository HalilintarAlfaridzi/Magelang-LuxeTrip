import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import FeaturedDestinations from "../components/home/FeaturedDestinations.jsx";
import TravelCategories from "../components/home/TravelCategories.jsx";
import PopularPackages from "../components/home/PopularPackages.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import TravelTipsPreview from "../components/home/TravelTipsPreview.jsx";
import CTASection from "../components/common/CTASection.jsx";
import { setSeo } from "../utils/seo.js";

export default function Home() {
  useEffect(() => {
    setSeo({
      title: "Magelang LuxeTrip | Premium Magelang Travel Agency",
      description:
        "Discover Magelang with Magelang LuxeTrip, a premium travel agency offering curated destinations, tour packages, travel tips, and WhatsApp trip consultation.",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <TravelCategories />
      <PopularPackages />
      <WhyChooseUs />
      <Testimonials />
      <TravelTipsPreview />
      <CTASection />
    </>
  );
}
