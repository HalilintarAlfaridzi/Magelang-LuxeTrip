import { useEffect } from "react";
import { Compass, Gem, Handshake, MapPinned, ShieldCheck } from "lucide-react";
import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CTASection from "../components/common/CTASection.jsx";
import WhatsAppButton from "../components/common/WhatsAppButton.jsx";
import { assetPath } from "../utils/assets.js";
import { whatsappMessages } from "../utils/whatsapp.js";
import { setSeo } from "../utils/seo.js";

const values = [
  {
    icon: ShieldCheck,
    title: "Comfort",
    description: "Routes are designed around practical timing, clear stops, and group-friendly movement.",
  },
  {
    icon: MapPinned,
    title: "Local Expertise",
    description: "Destination choices reflect Magelang clusters, cultural context, and visitor needs.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "The site keeps booking flow transparent by directing inquiries to WhatsApp.",
  },
  {
    icon: Compass,
    title: "Flexibility",
    description: "Visitors can ask for family, student, private, or custom itinerary adjustments.",
  },
  {
    icon: Gem,
    title: "Premium Experience",
    description: "The presentation emphasizes polished content, clean layout, and calm visual hierarchy.",
  },
];

export default function About() {
  useEffect(() => {
    setSeo({
      title: "About Magelang LuxeTrip | Premium Local Travel Agency",
      description:
        "Learn about Magelang LuxeTrip, a premium local travel agency concept focused on curated Magelang destinations and WhatsApp consultation.",
    });
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Magelang LuxeTrip"
        description="A premium travel agency concept built around comfort, clarity, local expertise, and curated Magelang experiences."
        image={assetPath("images/magelang-family.png")}
      />
      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={assetPath("images/magelang-village.png")}
              alt="Magelang highland village and mountain scenery"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Brand Story"
              title="Local Destination Knowledge, Presented Like a Premium Travel Business"
              description="Magelang LuxeTrip helps visitors understand where to go, what kind of package fits them, and how to start a direct WhatsApp consultation."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-[#374151]">
              <p>
                The agency concept focuses on Borobudur, highland scenery, student learning routes, family-friendly stops, and private travel experiences around Magelang.
              </p>
              <p>
                The website is intentionally frontend-only. It does not store booking data, process payments, or require accounts. Its business role is to educate visitors and convert serious interest into WhatsApp leads.
              </p>
            </div>
            <WhatsAppButton
              message={whatsappMessages.general}
              label="Consult via WhatsApp"
              className="mt-8"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#EDF4EA]">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Mission and Values"
            title="A Calm, Helpful, and Professional Travel Planning Experience"
            description="The brand promise is simple: discover Magelang with a premium, comfortable, and locally curated travel experience."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg border border-[#D7C9AB] bg-white p-5">
                <value.icon aria-hidden="true" className="h-7 w-7 text-[#8B6F47]" />
                <h2 className="mt-4 text-lg font-bold text-[#111827]">{value.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#5f6673]">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAFAF7]">
        <div className="container-shell grid gap-8 md:grid-cols-3">
          {[
            ["Why Magelang", "Magelang combines Borobudur heritage, mountain scenery, city access, and family-friendly travel potential."],
            ["Service Approach", "The route starts with clear information, then moves into a WhatsApp conversation for details."],
            ["Audience Fit", "Families, local tourists, international visitors, students, and groups can compare content quickly."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-lg border border-[#E5E7EB] bg-white p-6">
              <h2 className="font-display text-2xl text-[#111827]">{title}</h2>
              <p className="mt-3 leading-7 text-[#5f6673]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
