import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../common/SectionHeader.jsx";
import { travelCategories } from "../../data/categories.js";

export default function TravelCategories() {
  return (
    <section className="section-padding bg-[#EDF4EA]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Travel Styles"
          title="Browse by the Kind of Trip You Want"
          description="Different travelers need different pacing, comfort, and destination choices."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {travelCategories.map((category) => {
            const Icon = Icons[category.icon] || Icons.Map;

            return (
              <Link
                key={category.slug}
                to={`/destinations?category=${encodeURIComponent(category.title)}`}
                className="surface-card group rounded-lg p-5 transition hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#111827] text-[#E7C97F]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#111827]">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f6673]">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
