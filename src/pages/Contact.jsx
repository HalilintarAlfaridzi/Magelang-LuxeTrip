import { useEffect } from "react";
import { AtSign, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import WhatsAppButton from "../components/common/WhatsAppButton.jsx";
import FAQAccordion from "../components/faq/FAQAccordion.jsx";
import { faqs } from "../data/faqs.js";
import { assetPath } from "../utils/assets.js";
import { WHATSAPP_NUMBER, whatsappMessages } from "../utils/whatsapp.js";
import { setSeo } from "../utils/seo.js";

const contactCards = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: `+${WHATSAPP_NUMBER}`,
    note: "Fastest channel for package inquiries and custom itinerary requests.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@magelangluxetrip.example",
    note: "Placeholder email for portfolio simulation and business presentation.",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@magelangluxetrip",
    note: "Social media placeholder for future brand expansion.",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "09:00 - 18:00 WIB",
    note: "Response time can vary during travel operations and holidays.",
  },
];

export default function Contact() {
  useEffect(() => {
    setSeo({
      title: "Contact Magelang LuxeTrip | Plan Your Magelang Trip",
      description:
        "Contact Magelang LuxeTrip through WhatsApp for Magelang destination recommendations, tour packages, and custom itinerary inquiries.",
    });
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Plan Your Magelang Trip"
        description="Send a WhatsApp inquiry for destination recommendations, package details, family routes, student trips, or a custom itinerary."
        image={assetPath("images/magelang-sunrise.png")}
      />
      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-[#D7C9AB] bg-[#111827] p-7 text-white">
            <MessageCircle aria-hidden="true" className="h-10 w-10 text-[#E7C97F]" />
            <h2 className="font-display mt-5 text-3xl">WhatsApp Consultation</h2>
            <p className="mt-4 leading-7 text-white/75">
              Share your travel date, group size, pickup area, preferred destinations, and whether you need family, student, private, or custom planning.
            </p>
            <WhatsAppButton
              message={whatsappMessages.general}
              label="Chat with Magelang LuxeTrip"
              variant="gold"
              fullWidth
              className="mt-6"
            />
          </div>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact Information"
              title="Direct Ways to Reach the Agency"
              description="The website keeps the inquiry process simple and transparent by directing visitors to WhatsApp."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <article key={card.label} className="rounded-lg border border-[#E5E7EB] bg-white p-5">
                  <card.icon aria-hidden="true" className="h-6 w-6 text-[#8B6F47]" />
                  <h2 className="mt-4 font-bold text-[#111827]">{card.label}</h2>
                  <p className="mt-1 font-semibold text-[#374151]">{card.value}</p>
                  <p className="mt-3 text-sm leading-6 text-[#6B7280]">{card.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#EDF4EA]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Service Area"
              title="Magelang, Borobudur Area, and Central Java Travel Support"
              description="The agency concept focuses on Magelang routes while supporting nearby Central Java travel planning through direct consultation."
            />
            <div className="mt-8 rounded-lg border border-[#D7C9AB] bg-white p-6">
              <MapPin aria-hidden="true" className="h-7 w-7 text-[#8B6F47]" />
              <ul className="mt-5 space-y-3 leading-7 text-[#374151]">
                <li>Magelang city travel support</li>
                <li>Borobudur area cultural and nature routes</li>
                <li>Central Java itinerary consultation</li>
              </ul>
            </div>
          </div>
          <div>
            <SectionHeader
              align="left"
              eyebrow="FAQ Preview"
              title="Common Questions Before Contacting"
            />
            <div className="mt-8">
              <FAQAccordion faqs={faqs.slice(0, 4)} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Ask for a Recommendation?"
        description="Send a short WhatsApp message and describe the kind of Magelang trip you want."
        buttonLabel="Get Travel Recommendation"
      />
    </>
  );
}
