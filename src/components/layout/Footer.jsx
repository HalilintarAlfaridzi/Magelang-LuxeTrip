import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import WhatsAppButton from "../common/WhatsAppButton.jsx";
import { whatsappMessages, WHATSAPP_NUMBER } from "../../utils/whatsapp.js";

const quickLinks = [
  ["Home", "/"],
  ["Destinations", "/destinations"],
  ["Tour Packages", "/packages"],
  ["Travel Tips", "/travel-tips"],
  ["FAQ", "/faq"],
];

const destinationLinks = [
  ["Borobudur Temple", "/destinations/borobudur-temple"],
  ["Punthuk Setumbu", "/destinations/punthuk-setumbu"],
  ["Nepal Van Java", "/destinations/nepal-van-java"],
  ["Ketep Pass", "/destinations/ketep-pass"],
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#C8A45D] font-display text-lg text-[#111827]">
              ML
            </span>
            <div>
              <p className="font-display text-2xl">Magelang LuxeTrip</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E7C97F]">Premium Local Travel</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/70">
            Discover Magelang with curated cultural, nature, family, student, and private travel experiences.
          </p>
          <WhatsAppButton
            message={whatsappMessages.general}
            label="Chat with Us"
            variant="gold"
            className="mt-6"
          />
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#E7C97F]">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-white/72">
            {quickLinks.map(([label, path]) => (
              <li key={path}>
                <Link className="hover:text-white" to={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#E7C97F]">Destinations</h2>
          <ul className="mt-5 space-y-3 text-white/72">
            {destinationLinks.map(([label, path]) => (
              <li key={path}>
                <Link className="hover:text-white" to={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#E7C97F]">Contact</h2>
          <ul className="mt-5 space-y-4 text-white/72">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#E7C97F]" />
              <span>+{WHATSAPP_NUMBER}</span>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#E7C97F]" />
              <span>hello@magelangluxetrip.example</span>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#E7C97F]" />
              <span>Magelang, Borobudur Area, and Central Java travel support</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Magelang LuxeTrip. Frontend portfolio project.</p>
          <p>No checkout, backend, database, or account system included.</p>
        </div>
      </div>
    </footer>
  );
}
