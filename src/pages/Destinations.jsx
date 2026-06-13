import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CategoryFilter from "../components/common/CategoryFilter.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import CTASection from "../components/common/CTASection.jsx";
import DestinationGrid from "../components/destinations/DestinationGrid.jsx";
import { destinationCategories } from "../data/categories.js";
import { destinations } from "../data/destinations.js";
import { filterByCategory, includesKeyword, sortDestinations } from "../utils/filters.js";
import { setSeo } from "../utils/seo.js";

const sortOptions = ["Recommended", "Popular", "Name A-Z", "Shortest Duration", "Longest Duration"];

export default function Destinations() {
  const [params] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") || "");
  const [category, setCategory] = useState(params.get("category") || "All");
  const [sortBy, setSortBy] = useState("Recommended");

  useEffect(() => {
    setSeo({
      title: "Best Destinations in Magelang | Magelang LuxeTrip",
      description:
        "Explore the best destinations in Magelang, from Borobudur and cultural heritage sites to nature attractions, family trips, and hidden gems.",
    });
  }, []);

  const filteredDestinations = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const categoryMatches = filterByCategory(destinations, category);
    const keywordMatches = keyword
      ? categoryMatches.filter((destination) =>
          [
            destination.title,
            destination.location,
            destination.category,
            destination.shortDescription,
            destination.description,
            destination.highlights.join(" "),
          ].some((field) => includesKeyword(field, keyword)),
        )
      : categoryMatches;

    return sortDestinations(keywordMatches, sortBy);
  }, [category, search, sortBy]);

  return (
    <>
      <PageHero
        eyebrow="Destination Catalog"
        title="Best Destinations in Magelang"
        description="Search, filter, and compare cultural heritage, nature, family, educational, and hidden-gem places around Magelang."
      />
      <section className="section-padding">
        <div className="container-shell">
          <SectionHeader
            align="left"
            eyebrow="Explore"
            title="Find a Destination That Fits Your Travel Style"
            description="All results come from local static data, so the page stays fast and frontend-only."
          />

          <div className="mt-8 grid gap-4 rounded-lg border border-[#E5E7EB] bg-white p-4 md:grid-cols-[1fr_auto] md:items-end">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#111827]">Search destinations</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by title, location, category, or highlight..."
                className="focus-ring h-12 w-full rounded-lg border border-[#D7C9AB] px-4 text-[#111827]"
              />
            </label>
            <label className="block md:min-w-64">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111827]">
                <SlidersHorizontal aria-hidden="true" className="h-4 w-4 text-[#8B6F47]" />
                Sort by
              </span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="focus-ring h-12 w-full rounded-lg border border-[#D7C9AB] px-4 text-[#111827]"
              >
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6">
            <CategoryFilter
              categories={destinationCategories}
              activeCategory={category}
              onChange={setCategory}
              ariaLabel="Destination categories"
            />
          </div>

          <div className="mt-8">
            {filteredDestinations.length > 0 ? (
              <DestinationGrid destinations={filteredDestinations} />
            ) : (
              <EmptyState
                title="No destinations found"
                description="Try a different keyword or category. You can also ask for a custom recommendation through WhatsApp."
                actionLabel="Reset to All Destinations"
                actionPath="/destinations"
              />
            )}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
