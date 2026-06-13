import { useEffect, useMemo, useState } from "react";
import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CategoryFilter from "../components/common/CategoryFilter.jsx";
import CTASection from "../components/common/CTASection.jsx";
import FAQAccordion from "../components/faq/FAQAccordion.jsx";
import { faqs } from "../data/faqs.js";
import { assetPath } from "../utils/assets.js";
import { setSeo } from "../utils/seo.js";

const faqCategories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

export default function FAQ() {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setSeo({
      title: "Magelang Travel FAQ | Magelang LuxeTrip",
      description:
        "Find answers to common Magelang travel questions about bookings, packages, family trips, student tours, and custom itineraries.",
    });
  }, []);

  const filteredFaqs = useMemo(() => {
    if (category === "All") return faqs;
    return faqs.filter((faq) => faq.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Magelang Travel FAQ"
        description="Answers to common questions about destination planning, packages, family trips, student groups, and WhatsApp inquiries."
        image={assetPath("images/magelang-family.png")}
      />
      <section className="section-padding">
        <div className="container-shell">
          <SectionHeader
            align="left"
            eyebrow="Questions"
            title="Find Answers Before You Start a Chat"
            description="The FAQ reduces hesitation while keeping the actual inquiry flow on WhatsApp."
          />
          <div className="mt-8">
            <CategoryFilter
              categories={faqCategories}
              activeCategory={category}
              onChange={setCategory}
              ariaLabel="FAQ categories"
            />
          </div>
          <div className="mt-8 max-w-4xl">
            <FAQAccordion faqs={filteredFaqs} />
          </div>
        </div>
      </section>
      <CTASection
        title="Still Have a Question?"
        description="Ask directly through WhatsApp and get a recommendation based on your trip plan."
        buttonLabel="Ask on WhatsApp"
      />
    </>
  );
}
