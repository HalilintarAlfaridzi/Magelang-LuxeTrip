import { Link } from "react-router-dom";
import { CalendarDays, Clock } from "lucide-react";
import Button from "../common/Button.jsx";

export default function BlogCard({ post, featured = false }) {
  return (
    <article
      className={[
        "group surface-card overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1",
        featured ? "grid md:grid-cols-[1.05fr_0.95fr]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link to={`/travel-tips/${post.slug}`} className="block">
        <div className={["image-sheen bg-[#F7F0DF]", featured ? "h-full min-h-72" : "aspect-video"].join(" ")}>
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5 md:p-6">
        <span className="rounded-full bg-[#F7F0DF] px-3 py-1 text-xs font-bold text-[#8B6F47]">
          {post.category}
        </span>
        <h2 className={["mt-4 font-bold leading-snug text-[#111827]", featured ? "text-2xl md:text-3xl" : "text-xl"].join(" ")}>
          <Link to={`/travel-tips/${post.slug}`} className="hover:text-[#8B6F47]">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#5f6673] md:text-base md:leading-7">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#6B7280]">
          <span className="flex items-center gap-2">
            <Clock aria-hidden="true" className="h-4 w-4 text-[#C8A45D]" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="h-4 w-4 text-[#C8A45D]" />
            {post.publishedAt}
          </span>
        </div>
        <Button to={`/travel-tips/${post.slug}`} variant="secondary" className="mt-6" fullWidth={!featured}>
          Read Article
        </Button>
      </div>
    </article>
  );
}
