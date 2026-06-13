import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import Button from "../common/Button.jsx";
import WhatsAppButton from "../common/WhatsAppButton.jsx";
import { destinationCategories } from "../../data/categories.js";
import { whatsappMessages } from "../../utils/whatsapp.js";

export default function HeroSection() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (category !== "All") params.set("category", category);
    navigate(`/destinations${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#111827] text-white">
      <img
        src="/images/magelang-hero.png"
        alt="Borobudur-inspired Magelang temple landscape in warm morning light"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827]/96 via-[#111827]/74 to-[#111827]/20" />
      <div className="container-shell flex min-h-[78vh] flex-col justify-center py-16 md:min-h-[82vh]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E7C97F]">Premium Magelang Travel Agency</p>
          <h1 className="font-display mt-5 text-5xl leading-[0.98] md:text-7xl">Magelang LuxeTrip</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Discover Borobudur, cultural heritage, hidden gems, family attractions, and nature escapes with a locally curated premium travel experience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/packages" icon={ArrowRight}>
              Explore Packages
            </Button>
            <WhatsAppButton message={whatsappMessages.general} label="Chat on WhatsApp" variant="outline" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-3 rounded-lg border border-white/16 bg-white/12 p-3 backdrop-blur-md md:grid-cols-[1fr_240px_auto]"
        >
          <label className="relative block">
            <span className="sr-only">Search destinations</span>
            <Search aria-hidden="true" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B6F47]" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search destinations in Magelang..."
              className="focus-ring h-12 w-full rounded-lg border border-white/30 bg-white pl-11 pr-4 text-[#111827] placeholder:text-[#6B7280]"
            />
          </label>
          <label>
            <span className="sr-only">Choose category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="focus-ring h-12 w-full rounded-lg border border-white/30 bg-white px-4 text-[#111827]"
            >
              {destinationCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <Button type="submit" className="h-12" fullWidth>
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
