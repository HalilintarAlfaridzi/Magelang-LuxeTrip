import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "../common/WhatsAppButton.jsx";
import { whatsappMessages } from "../../utils/whatsapp.js";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Packages", path: "/packages" },
  { label: "Travel Tips", path: "/travel-tips" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    [
      "rounded-lg px-3 py-2 text-sm font-semibold transition",
      isActive ? "bg-[#F7F0DF] text-[#111827]" : "text-[#4B5563] hover:bg-[#F7F0DF] hover:text-[#111827]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#FAFAF7]/92 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-5">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-lg" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#111827] font-display text-lg text-[#E7C97F]">
            ML
          </span>
          <span>
            <span className="block font-display text-xl leading-none text-[#111827]">Magelang</span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#8B6F47]">LuxeTrip</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton message={whatsappMessages.general} label="Book via WhatsApp" variant="dark" />
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D7C9AB] bg-white text-[#111827] lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#E5E7EB] bg-[#FAFAF7] lg:hidden">
          <nav className="container-shell grid gap-2 py-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <WhatsAppButton
              message={whatsappMessages.general}
              label="Book via WhatsApp"
              variant="green"
              fullWidth
              className="mt-2"
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
