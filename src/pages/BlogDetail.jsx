import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import CTASection from "../components/common/CTASection.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import BlogGrid from "../components/blog/BlogGrid.jsx";
import DestinationGrid from "../components/destinations/DestinationGrid.jsx";
import { blogPosts } from "../data/blogPosts.js";
import { destinations } from "../data/destinations.js";
import { setSeo } from "../utils/seo.js";
import NotFoundPage from "./NotFoundPage.jsx";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  useEffect(() => {
    if (post) {
      setSeo({
        title: post.seo.title,
        description: post.seo.description,
      });
    }
  }, [post]);

  const relatedDestinations = useMemo(() => {
    if (!post) return [];
    return post.relatedDestinationSlugs
      .map((destinationSlug) => destinations.find((item) => item.slug === destinationSlug))
      .filter(Boolean)
      .slice(0, 3);
  }, [post]);

  const relatedArticles = useMemo(() => {
    if (!post) return [];
    const exact = post.relatedArticleSlugs
      .map((articleSlug) => blogPosts.find((item) => item.slug === articleSlug))
      .filter(Boolean);

    return (exact.length ? exact : blogPosts.filter((item) => item.category === post.category && item.slug !== post.slug)).slice(0, 3);
  }, [post]);

  if (!post) return <NotFoundPage />;

  return (
    <>
      <article>
        <header className="bg-[#FAFAF7] py-8">
          <div className="container-shell">
            <Breadcrumb
              items={[
                { label: "Home", path: "/" },
                { label: "Travel Tips", path: "/travel-tips" },
                { label: post.title },
              ]}
            />
            <div className="mt-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B6F47]">
                {post.category}
              </p>
              <h1 className="font-display mt-4 text-4xl leading-tight text-[#111827] md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#5f6673]">{post.excerpt}</p>
              <p className="mt-5 text-sm font-semibold text-[#6B7280]">
                {post.readTime} · {post.publishedAt} · {post.author}
              </p>
            </div>
          </div>
        </header>

        <img
          src={post.image}
          alt={post.title}
          className="h-[320px] w-full object-cover md:h-[520px]"
        />

        <div className="container-shell grid gap-10 py-14 lg:grid-cols-[minmax(0,760px)_1fr]">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-3xl text-[#111827]">Introduction</h2>
              <p className="mt-4 text-lg leading-8 text-[#374151]">
                {post.excerpt} Use this guide as a starting point, then compare relevant destinations and packages before sending a WhatsApp inquiry.
              </p>
            </section>
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-3xl text-[#111827]">{section.heading}</h2>
                <p className="mt-4 text-lg leading-8 text-[#374151]">{section.body}</p>
              </section>
            ))}
            <section className="rounded-lg border border-[#D7C9AB] bg-[#F7F0DF] p-6">
              <h2 className="font-display text-3xl text-[#111827]">Next Step</h2>
              <p className="mt-4 leading-7 text-[#374151]">
                Browse related destinations below or compare tour packages if you already know your preferred route.
              </p>
              <Link to="/packages" className="mt-5 inline-flex font-bold text-[#8B6F47] hover:text-[#111827]">
                Explore Magelang packages
              </Link>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-[#E5E7EB] bg-white p-6">
              <h2 className="font-display text-2xl text-[#111827]">Article Details</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-[#111827]">Category</dt>
                  <dd className="mt-1 text-[#6B7280]">{post.category}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#111827]">Reading Time</dt>
                  <dd className="mt-1 text-[#6B7280]">{post.readTime}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#111827]">Published</dt>
                  <dd className="mt-1 text-[#6B7280]">{post.publishedAt}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </article>

      {relatedDestinations.length ? (
        <section className="section-padding bg-[#EDF4EA]">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Related Destinations"
              title="Places Mentioned in This Topic"
              description="Continue from article inspiration to destination planning."
            />
            <div className="mt-10">
              <DestinationGrid destinations={relatedDestinations} />
            </div>
          </div>
        </section>
      ) : null}

      {relatedArticles.length ? (
        <section className="section-padding bg-[#FAFAF7]">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Related Articles"
              title="More Magelang Travel Guides"
              description="Read connected topics before planning your route."
            />
            <div className="mt-10">
              <BlogGrid posts={relatedArticles} />
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title="Need a Recommendation Based on This Guide?"
        description="Send your date, group size, and preferred travel style through WhatsApp."
        buttonLabel="Plan My Trip"
      />
    </>
  );
}
