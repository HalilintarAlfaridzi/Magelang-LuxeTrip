import WhatsAppButton from "./WhatsAppButton.jsx";
import { whatsappMessages } from "../../utils/whatsapp.js";
import { assetPath } from "../../utils/assets.js";

export default function CTASection({
  title = "Ready to Plan Your Magelang Trip?",
  description = "Chat with Magelang LuxeTrip and get a curated travel recommendation for your family, group, or private trip.",
  buttonLabel = "Consult via WhatsApp",
  whatsappMessage = whatsappMessages.general,
  image = assetPath("images/magelang-sunrise.png"),
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#111827] py-16 text-white">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-32" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827] via-[#111827]/88 to-[#111827]/55" />
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E7C97F]">WhatsApp Consultation</p>
          <h2 className="font-display mt-3 text-3xl leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 md:text-lg">{description}</p>
        </div>
        <WhatsAppButton
          message={whatsappMessage}
          label={buttonLabel}
          variant="gold"
          className="md:min-w-56"
          fullWidth
        />
      </div>
    </section>
  );
}
