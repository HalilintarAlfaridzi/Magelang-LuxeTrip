import { Link } from "react-router-dom";
import { CalendarDays, MapPinned, Users } from "lucide-react";
import Button from "../common/Button.jsx";
import WhatsAppButton from "../common/WhatsAppButton.jsx";

export default function PackageCard({ tourPackage }) {
  return (
    <article className="group surface-card overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1">
      <Link to={`/packages/${tourPackage.slug}`} className="block">
        <div className="image-sheen aspect-[4/3] bg-[#F7F0DF]">
          <img
            src={tourPackage.image}
            alt={`${tourPackage.title} tour package in Magelang`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-bold text-[#166534]">
          {tourPackage.category}
        </span>
        <h2 className="mt-4 text-xl font-bold leading-snug text-[#111827]">
          <Link to={`/packages/${tourPackage.slug}`} className="hover:text-[#8B6F47]">
            {tourPackage.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#5f6673]">
          {tourPackage.shortDescription}
        </p>
        <div className="mt-5 grid gap-3 text-sm text-[#4B5563]">
          <span className="flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="h-4 w-4 text-[#C8A45D]" />
            {tourPackage.duration}
          </span>
          <span className="flex items-center gap-2">
            <MapPinned aria-hidden="true" className="h-4 w-4 text-[#C8A45D]" />
            {tourPackage.destinations.length} destination{tourPackage.destinations.length > 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-2 font-bold text-[#111827]">
            <Users aria-hidden="true" className="h-4 w-4 text-[#C8A45D]" />
            {tourPackage.priceLabel}
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button to={`/packages/${tourPackage.slug}`} variant="secondary" fullWidth>
            View Package
          </Button>
          <WhatsAppButton
            message={tourPackage.whatsappMessage}
            label="Ask via WhatsApp"
            variant="outline"
            fullWidth
          />
        </div>
      </div>
    </article>
  );
}
