import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../../utils/whatsapp.js";

const variants = {
  green: "bg-[#166534] text-white hover:bg-[#14532d]",
  dark: "bg-[#111827] text-white hover:bg-[#243047]",
  gold: "bg-[#C8A45D] text-[#111827] hover:bg-[#b79248]",
  outline:
    "border border-[#166534]/35 bg-white text-[#166534] hover:bg-[#ecfdf5]",
};

export default function WhatsAppButton({
  message,
  label = "Book via WhatsApp",
  variant = "green",
  fullWidth = false,
  className = "",
}) {
  return (
    <a
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      className={[
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition",
        variants[variant] || variants.green,
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span className="truncate">{label}</span>
    </a>
  );
}
