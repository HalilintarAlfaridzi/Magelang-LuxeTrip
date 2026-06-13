import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, MapPinned, WalletCards } from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import CTASection from "../components/common/CTASection.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import WhatsAppButton from "../components/common/WhatsAppButton.jsx";
import PackageGrid from "../components/packages/PackageGrid.jsx";
import ItineraryTimeline from "../components/packages/ItineraryTimeline.jsx";
import { tourPackages } from "../data/packages.js";
import { setSeo } from "../utils/seo.js";
import NotFoundPage from "./NotFoundPage.jsx";

export default function PackageDetail() {
  const { slug } = useParams();
  const tourPackage = tourPackages.find((item) => item.slug === slug);

  useEffect(() => {
    if (tourPackage) {
      setSeo({
        title: `${tourPackage.title} | Magelang Tour Package`,
        description: tourPackage.shortDescription,
      });
    }
  }, [tourPackage]);

  const relatedPackages = useMemo(() => {
    if (!tourPackage) return [];
    return tourPackages
      .filter((item) => item.category === tourPackage.category && item.slug !== tourPackage.slug)
      .concat(tourPackages.filter((item) => item.category !== tourPackage.category && item.slug !== tourPackage.slug))
      .slice(0, 3);
  }, [tourPackage]);

  if (!tourPackage) return <NotFoundPage />;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#111827] text-white">
        <img
          src={tourPackage.image}
          alt={`${tourPackage.title} in Magelang`}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-48"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827] via-[#111827]/82 to-[#111827]/28" />
        <div className="container-shell py-8">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Packages", path: "/packages" },
              { label: tourPackage.title },
            ]}
          />
          <div className="max-w-3xl py-16 md:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E7C97F]">
              {tourPackage.category}
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight md:text-6xl">
              {tourPackage.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/82">{tourPackage.shortDescription}</p>
            <WhatsAppButton
              message={tourPackage.whatsappMessage}
              label="Book This Package via WhatsApp"
              variant="gold"
              className="mt-8"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_340px]">
          <article className="space-y-12">
            <section>
              <SectionHeader
                align="left"
                eyebrow="Package Summary"
                title="A Clear Starting Point for Your Inquiry"
                description="This package gives visitors enough information to decide whether the route fits their group before opening WhatsApp."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [CalendarDays, "Duration", tourPackage.duration],
                  [MapPinned, "Destinations", `${tourPackage.destinations.length} stops`],
                  [WalletCards, "Price", tourPackage.priceLabel],
                ].map(([Icon, label, value]) => (
                  <div key={label} className="rounded-lg border border-[#E5E7EB] bg-white p-5">
                    <Icon aria-hidden="true" className="h-5 w-5 text-[#8B6F47]" />
                    <p className="mt-3 text-sm font-bold text-[#111827]">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-[#6B7280]">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-[#111827]">Destinations Included</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {tourPackage.destinations.map((destination) => (
                  <Link
                    key={destination.slug}
                    to={`/destinations/${destination.slug}`}
                    className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 font-semibold text-[#111827] hover:border-[#C8A45D]"
                  >
                    {destination.title}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-[#111827]">Itinerary</h2>
              <div className="mt-6">
                <ItineraryTimeline itinerary={tourPackage.itinerary} />
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl text-[#111827]">Included</h2>
                <ul className="mt-5 space-y-3">
                  {tourPackage.included.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-3xl text-[#111827]">Excluded</h2>
                <ul className="mt-5 space-y-3">
                  {tourPackage.excluded.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-[#111827]">Terms and Notes</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {tourPackage.terms.map((term) => (
                  <p key={term} className="rounded-lg border border-[#D7C9AB] bg-[#F7F0DF] p-5 leading-7 text-[#374151]">
                    {term}
                  </p>
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-[#D7C9AB] bg-white p-6 shadow-xl shadow-[#111827]/8">
              <h2 className="font-display text-2xl text-[#111827]">Ask About Availability</h2>
              <p className="mt-3 leading-7 text-[#5f6673]">
                Share your date, group size, pickup area, and preferred pace through WhatsApp.
              </p>
              <div className="mt-5 space-y-3 text-sm text-[#4B5563]">
                <p><strong className="text-[#111827]">Category:</strong> {tourPackage.category}</p>
                <p><strong className="text-[#111827]">Duration:</strong> {tourPackage.duration}</p>
                <p><strong className="text-[#111827]">Price:</strong> {tourPackage.priceLabel}</p>
              </div>
              <WhatsAppButton
                message={tourPackage.whatsappMessage}
                label="Check Availability"
                fullWidth
                className="mt-6"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-[#EDF4EA]">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Related Packages"
            title="Other Routes Worth Comparing"
            description="Compare similar ideas before starting the WhatsApp consultation."
          />
          <div className="mt-10">
            <PackageGrid packages={relatedPackages} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Interested in ${tourPackage.title}?`}
        description="Ask about availability, group fit, pricing, and route adjustments through WhatsApp."
        buttonLabel="Book via WhatsApp"
        whatsappMessage={tourPackage.whatsappMessage}
        image={tourPackage.image}
      />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D7C9AB] bg-white p-3 md:hidden">
        <WhatsAppButton message={tourPackage.whatsappMessage} label="Book via WhatsApp" fullWidth />
      </div>
    </>
  );
}
