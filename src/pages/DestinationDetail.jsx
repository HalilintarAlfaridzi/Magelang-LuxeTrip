import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock, MapPin, SunMedium } from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import Button from "../components/common/Button.jsx";
import CTASection from "../components/common/CTASection.jsx";
import SectionHeader from "../components/common/SectionHeader.jsx";
import WhatsAppButton from "../components/common/WhatsAppButton.jsx";
import DestinationGrid from "../components/destinations/DestinationGrid.jsx";
import ImageGallery from "../components/destinations/ImageGallery.jsx";
import PackageGrid from "../components/packages/PackageGrid.jsx";
import { destinations } from "../data/destinations.js";
import { tourPackages } from "../data/packages.js";
import { setSeo } from "../utils/seo.js";
import NotFoundPage from "./NotFoundPage.jsx";

export default function DestinationDetail() {
  const { slug } = useParams();
  const destination = destinations.find((item) => item.slug === slug);

  useEffect(() => {
    if (destination) {
      setSeo({
        title: `${destination.title} Travel Guide | Magelang LuxeTrip`,
        description: destination.shortDescription,
      });
    }
  }, [destination]);

  const nearbyDestinations = useMemo(() => {
    if (!destination) return [];
    const fromSlugs = destination.nearbyDestinationSlugs
      .map((nearbySlug) => destinations.find((item) => item.slug === nearbySlug))
      .filter(Boolean);

    return fromSlugs.length
      ? fromSlugs.slice(0, 3)
      : destinations
          .filter((item) => item.category === destination.category && item.slug !== destination.slug)
          .slice(0, 3);
  }, [destination]);

  const relatedPackages = useMemo(() => {
    if (!destination) return [];
    const exact = destination.relatedPackageSlugs
      .map((packageSlug) => tourPackages.find((item) => item.slug === packageSlug))
      .filter(Boolean);

    const fallback = tourPackages.filter((item) =>
      item.destinations.some((place) => place.slug === destination.slug),
    );

    return (exact.length ? exact : fallback).slice(0, 3);
  }, [destination]);

  if (!destination) return <NotFoundPage />;

  return (
    <>
      <section className="bg-[#FAFAF7] pb-12">
        <div className="relative isolate overflow-hidden bg-[#111827] text-white">
          <img
            src={destination.image}
            alt={`${destination.title} in Magelang`}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827] via-[#111827]/78 to-[#111827]/20" />
          <div className="container-shell py-8">
            <Breadcrumb
              items={[
                { label: "Home", path: "/" },
                { label: "Destinations", path: "/destinations" },
                { label: destination.title },
              ]}
            />
            <div className="max-w-3xl py-16 md:py-24">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E7C97F]">
                {destination.category}
              </p>
              <h1 className="font-display mt-4 text-4xl leading-tight md:text-6xl">
                {destination.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-white/82">{destination.shortDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton message={destination.whatsappMessage} label="Ask About This Destination" variant="gold" />
                <Button to="/packages" variant="secondary">
                  See Related Packages
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-shell grid gap-10 pt-10 lg:grid-cols-[1fr_340px]">
          <article className="space-y-12">
            <section>
              <SectionHeader
                align="left"
                eyebrow="Overview"
                title={`Why Visit ${destination.title}?`}
                description={destination.description}
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [MapPin, "Location", destination.location],
                  [Clock, "Estimated Duration", destination.duration],
                  [SunMedium, "Best Time", destination.bestTime],
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
              <SectionHeader align="left" eyebrow="Gallery" title="A Visual Sense of the Trip" />
              <div className="mt-6">
                <ImageGallery images={destination.gallery} title={destination.title} />
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl text-[#111827]">Highlights</h2>
                <ul className="mt-5 space-y-3">
                  {destination.highlights.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-3xl text-[#111827]">Facilities</h2>
                <ul className="mt-5 space-y-3">
                  {destination.facilities.map((item) => (
                    <li key={item} className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-[#111827]">Travel Tips</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {destination.travelTips.map((tip) => (
                  <p key={tip} className="rounded-lg border border-[#D7C9AB] bg-[#F7F0DF] p-5 leading-7 text-[#374151]">
                    {tip}
                  </p>
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-[#D7C9AB] bg-white p-6 shadow-xl shadow-[#111827]/8">
              <h2 className="font-display text-2xl text-[#111827]">Plan This Visit</h2>
              <p className="mt-3 leading-7 text-[#5f6673]">
                Ask how to include {destination.title} in a family, student, private, or custom Magelang itinerary.
              </p>
              <div className="mt-5 space-y-3 text-sm text-[#4B5563]">
                <p><strong className="text-[#111827]">Category:</strong> {destination.category}</p>
                <p><strong className="text-[#111827]">Area:</strong> {destination.location}</p>
                <p><strong className="text-[#111827]">Duration:</strong> {destination.duration}</p>
              </div>
              <WhatsAppButton
                message={destination.whatsappMessage}
                label="Plan a Visit"
                fullWidth
                className="mt-6"
              />
            </div>
          </aside>
        </div>
      </section>

      {relatedPackages.length ? (
        <section className="section-padding bg-[#EDF4EA]">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Related Packages"
              title="Tour Packages That Fit This Destination"
              description="Use a package as a starting point, then ask for adjustments through WhatsApp."
            />
            <div className="mt-10">
              <PackageGrid packages={relatedPackages} />
            </div>
          </div>
        </section>
      ) : null}

      {nearbyDestinations.length ? (
        <section className="section-padding bg-[#FAFAF7]">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Nearby Ideas"
              title="Nearby Destinations to Consider"
              description="Combine nearby places for a more complete Magelang route."
            />
            <div className="mt-10">
              <DestinationGrid destinations={nearbyDestinations} />
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title={`Want to Include ${destination.title} in Your Trip?`}
        description="Send a WhatsApp message and get a curated recommendation based on your schedule, group size, and comfort needs."
        buttonLabel="Include This in My Trip"
        whatsappMessage={destination.whatsappMessage}
        image={destination.image}
      />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D7C9AB] bg-white p-3 md:hidden">
        <WhatsAppButton message={destination.whatsappMessage} label="Ask via WhatsApp" fullWidth />
      </div>
    </>
  );
}
