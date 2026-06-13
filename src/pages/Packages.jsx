import { useEffect, useMemo, useState } from "react";
import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CategoryFilter from "../components/common/CategoryFilter.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import CTASection from "../components/common/CTASection.jsx";
import PackageGrid from "../components/packages/PackageGrid.jsx";
import { packageCategories } from "../data/categories.js";
import { tourPackages } from "../data/packages.js";
import { assetPath } from "../utils/assets.js";
import { filterByCategory, includesKeyword } from "../utils/filters.js";
import { setSeo } from "../utils/seo.js";

export default function Packages() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSeo({
      title: "Magelang Tour Packages | Family, Student & Private Tours",
      description:
        "Find curated Magelang tour packages for families, students, cultural travelers, nature lovers, and premium private experiences.",
    });
  }, []);

  const filteredPackages = useMemo(() => {
    const byCategory = filterByCategory(tourPackages, category);
    if (!search.trim()) return byCategory;

    return byCategory.filter((tourPackage) =>
      [
        tourPackage.title,
        tourPackage.category,
        tourPackage.shortDescription,
        tourPackage.destinations.map((item) => item.title).join(" "),
      ].some((field) => includesKeyword(field, search)),
    );
  }, [category, search]);

  return (
    <>
      <PageHero
        eyebrow="Curated Tour Packages"
        title="Magelang Tour Packages"
        description="Choose from family, student, cultural, nature, corporate, and premium private trip concepts."
        image={assetPath("images/magelang-family.png")}
      />
      <section className="section-padding">
        <div className="container-shell">
          <SectionHeader
            align="left"
            eyebrow="Packages"
            title="Start with a Ready-Made Route"
            description="Each package is a frontend-only concept designed to lead visitors into WhatsApp consultation."
          />
          <div className="mt-8 rounded-lg border border-[#E5E7EB] bg-white p-4">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#111827]">Search packages</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by package, category, or destination..."
                className="focus-ring h-12 w-full rounded-lg border border-[#D7C9AB] px-4 text-[#111827]"
              />
            </label>
          </div>
          <div className="mt-6">
            <CategoryFilter
              categories={packageCategories}
              activeCategory={category}
              onChange={setCategory}
              ariaLabel="Package categories"
            />
          </div>
          <div className="mt-8">
            {filteredPackages.length ? (
              <PackageGrid packages={filteredPackages} />
            ) : (
              <EmptyState
                title="No packages found"
                description="Try another category or keyword, or ask Magelang LuxeTrip for a custom itinerary."
                actionLabel="View All Packages"
                actionPath="/packages"
              />
            )}
          </div>
        </div>
      </section>
      <section className="bg-[#F7F0DF] py-16">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {["Flexible itinerary planning", "Family and student support", "Premium private experience"].map((item) => (
            <div key={item} className="rounded-lg border border-[#D7C9AB] bg-white p-6 text-center font-bold text-[#111827]">
              {item}
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
