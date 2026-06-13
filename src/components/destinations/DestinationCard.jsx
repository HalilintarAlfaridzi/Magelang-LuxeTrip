import { Link } from "react-router-dom";
import { Clock, MapPin, Sparkles } from "lucide-react";
import Button from "../common/Button.jsx";

export default function DestinationCard({ destination }) {
  return (
    <article className="group surface-card overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1">
      <Link to={`/destinations/${destination.slug}`} className="block">
        <div className="image-sheen aspect-[4/3] bg-[#F7F0DF]">
          <img
            src={destination.image}
            alt={`${destination.title} in Magelang`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#F7F0DF] px-3 py-1 text-xs font-bold text-[#8B6F47]">
            {destination.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#6B7280]">
            <Clock aria-hidden="true" className="h-3.5 w-3.5" />
            {destination.duration}
          </span>
        </div>
        <h2 className="mt-4 text-xl font-bold leading-snug text-[#111827]">
          <Link to={`/destinations/${destination.slug}`} className="hover:text-[#8B6F47]">
            {destination.title}
          </Link>
        </h2>
        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#6B7280]">
          <MapPin aria-hidden="true" className="h-4 w-4 text-[#C8A45D]" />
          {destination.location}
        </p>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#5f6673]">
          {destination.shortDescription}
        </p>
        <ul className="mt-4 space-y-2">
          {destination.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-[#4B5563]">
              <Sparkles aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45D]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <Button to={`/destinations/${destination.slug}`} variant="secondary" fullWidth className="mt-5">
          View Details
        </Button>
      </div>
    </article>
  );
}
