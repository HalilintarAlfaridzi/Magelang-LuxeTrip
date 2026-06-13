import SectionHeader from "../common/SectionHeader.jsx";
import Button from "../common/Button.jsx";
import DestinationGrid from "../destinations/DestinationGrid.jsx";
import { destinations } from "../../data/destinations.js";
import { limit } from "../../utils/filters.js";

export default function FeaturedDestinations() {
  const featured = limit([...destinations].sort((a, b) => b.recommended - a.recommended), 3);

  return (
    <section className="section-padding bg-[#FAFAF7]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Featured Destinations"
          title="Signature Magelang Places to Start With"
          description="Explore a balanced mix of heritage, highland scenery, family stops, and local character."
        />
        <div className="mt-10">
          <DestinationGrid destinations={featured} />
        </div>
        <div className="mt-10 text-center">
          <Button to="/destinations" variant="dark">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
