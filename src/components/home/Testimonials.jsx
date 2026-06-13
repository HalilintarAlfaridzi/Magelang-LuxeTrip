import { Star } from "lucide-react";
import SectionHeader from "../common/SectionHeader.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#FAFAF7]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Testimonials"
          title="Travelers Want Clear Plans Before They Go"
          description="These portfolio testimonials show the type of trust signals a premium travel agency website should support."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-lg border border-[#E5E7EB] bg-white p-6">
              <div className="flex gap-1 text-[#C8A45D]">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 leading-7 text-[#374151]">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-[#E5E7EB] pt-4">
                <p className="font-bold text-[#111827]">{testimonial.name}</p>
                <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
