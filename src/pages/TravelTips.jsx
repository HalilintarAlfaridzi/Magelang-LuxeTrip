import { useEffect, useMemo, useState } from "react";
import PageHero from "../components/common/PageHero.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import CategoryFilter from "../components/common/CategoryFilter.jsx";
import CTASection from "../components/common/CTASection.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import BlogCard from "../components/blog/BlogCard.jsx";
import BlogGrid from "../components/blog/BlogGrid.jsx";
import { blogCategories } from "../data/categories.js";
import { blogPosts } from "../data/blogPosts.js";
import { assetPath } from "../utils/assets.js";
import { filterByCategory } from "../utils/filters.js";
import { setSeo } from "../utils/seo.js";

export default function TravelTips() {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setSeo({
      title: "Magelang Travel Tips & Destination Guide",
      description:
        "Read helpful Magelang travel guides, itinerary ideas, family travel tips, cultural guides, and destination recommendations.",
    });
  }, []);

  const filteredPosts = useMemo(() => filterByCategory(blogPosts, category), [category]);
  const featured = category === "All" ? blogPosts[0] : filteredPosts[0];
  const rest = filteredPosts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <PageHero
        eyebrow="Travel Tips"
        title="Magelang Travel Tips & Destination Guide"
        description="Practical articles for planning cultural visits, family trips, student tours, nature routes, and premium travel."
        image={assetPath("images/magelang-sunrise.png")}
      />
      <section className="section-padding">
        <div className="container-shell">
          <SectionHeader
            align="left"
            eyebrow="Articles"
            title="Helpful Planning Notes"
            description="Browse frontend-only editorial content that supports trust, SEO structure, and internal linking."
          />
          <div className="mt-8">
            <CategoryFilter
              categories={blogCategories}
              activeCategory={category}
              onChange={setCategory}
              ariaLabel="Blog categories"
            />
          </div>
          {featured ? (
            <>
              <div className="mt-8">
                <BlogCard post={featured} featured />
              </div>
              <div className="mt-10">
                {rest.length ? (
                  <BlogGrid posts={rest} />
                ) : (
                  <EmptyState
                    title="No more articles in this category"
                    description="Choose another category to keep exploring Magelang travel guides."
                  />
                )}
              </div>
            </>
          ) : (
            <div className="mt-8">
              <EmptyState
                title="No articles found"
                description="Try another travel tips category."
                actionLabel="View All Articles"
                actionPath="/travel-tips"
              />
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
