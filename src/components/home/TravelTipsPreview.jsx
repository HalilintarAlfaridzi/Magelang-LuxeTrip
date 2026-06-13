import SectionHeader from "../common/SectionHeader.jsx";
import Button from "../common/Button.jsx";
import BlogGrid from "../blog/BlogGrid.jsx";
import { blogPosts } from "../../data/blogPosts.js";
import { limit } from "../../utils/filters.js";

export default function TravelTipsPreview() {
  return (
    <section className="section-padding bg-[#EDF4EA]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Travel Tips"
          title="Helpful Notes Before Visiting Magelang"
          description="Practical guides improve confidence before visitors ask for a package recommendation."
        />
        <div className="mt-10">
          <BlogGrid posts={limit(blogPosts, 3)} />
        </div>
        <div className="mt-10 text-center">
          <Button to="/travel-tips" variant="dark">
            Read More Tips
          </Button>
        </div>
      </div>
    </section>
  );
}
