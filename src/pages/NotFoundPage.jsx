import { useEffect } from "react";
import { Compass } from "lucide-react";
import Button from "../components/common/Button.jsx";
import WhatsAppButton from "../components/common/WhatsAppButton.jsx";
import { whatsappMessages } from "../utils/whatsapp.js";
import { setSeo } from "../utils/seo.js";

export default function NotFoundPage() {
  useEffect(() => {
    setSeo({
      title: "Page Not Found | Magelang LuxeTrip",
      description: "The page you are looking for may have been moved or does not exist.",
    });
  }, []);

  return (
    <section className="min-h-[70vh] bg-[#FAFAF7] py-20">
      <div className="container-shell flex flex-col items-center text-center">
        <span className="grid h-16 w-16 place-items-center rounded-lg bg-[#111827] text-[#E7C97F]">
          <Compass aria-hidden="true" className="h-8 w-8" />
        </span>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#8B6F47]">404</p>
        <h1 className="font-display mt-3 text-4xl text-[#111827] md:text-6xl">Page Not Found</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[#5f6673]">
          The page you are looking for may have been moved or does not exist.
        </p>
        <div className="mt-8 grid w-full max-w-xl gap-3 sm:grid-cols-3">
          <Button to="/" variant="dark" fullWidth>
            Back to Home
          </Button>
          <Button to="/destinations" variant="secondary" fullWidth>
            Destinations
          </Button>
          <WhatsAppButton
            message={whatsappMessages.general}
            label="WhatsApp"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
}
