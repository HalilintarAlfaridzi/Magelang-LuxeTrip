import { BadgeCheck, HeartHandshake, Map, ShieldCheck } from "lucide-react";
import SectionHeader from "../common/SectionHeader.jsx";

const benefits = [
  {
    icon: Map,
    title: "Local Magelang Expertise",
    description: "Routes are built around real destination clusters, pacing, and visitor needs.",
  },
  {
    icon: BadgeCheck,
    title: "Curated Premium Feel",
    description: "Clean itineraries, clear information, and comfortable destination combinations.",
  },
  {
    icon: ShieldCheck,
    title: "Family and Student Friendly",
    description: "Trip ideas can be adjusted for age range, group size, and learning goals.",
  },
  {
    icon: HeartHandshake,
    title: "Easy WhatsApp Planning",
    description: "Visitors can ask questions, request changes, and confirm details directly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#F7F0DF]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built for Travelers Who Value Comfort and Clarity"
          description="Magelang LuxeTrip presents each destination and package with the practical details visitors need before asking for a recommendation."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-lg border border-[#D7C9AB] bg-white p-6">
              <benefit.icon aria-hidden="true" className="h-8 w-8 text-[#8B6F47]" />
              <h3 className="mt-5 text-lg font-bold text-[#111827]">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5f6673]">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
