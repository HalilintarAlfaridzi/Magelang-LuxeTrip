import SectionHeader from "../common/SectionHeader.jsx";
import Button from "../common/Button.jsx";
import PackageGrid from "../packages/PackageGrid.jsx";
import { tourPackages } from "../../data/packages.js";
import { limit } from "../../utils/filters.js";

export default function PopularPackages() {
  return (
    <section className="section-padding bg-[#FAFAF7]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Popular Packages"
          title="Curated Routes for Clearer Travel Decisions"
          description="Choose a prepared route, then use WhatsApp to adjust timing, group size, and travel preferences."
        />
        <div className="mt-10">
          <PackageGrid packages={limit(tourPackages, 3)} />
        </div>
        <div className="mt-10 text-center">
          <Button to="/packages" variant="dark">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
