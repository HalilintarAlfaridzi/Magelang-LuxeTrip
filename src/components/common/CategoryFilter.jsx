export default function CategoryFilter({ categories, activeCategory, onChange, ariaLabel = "Filter category" }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0" aria-label={ariaLabel}>
      <div className="flex min-w-max gap-2">
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={[
                "focus-ring min-h-10 rounded-full border px-4 text-sm font-semibold transition",
                active
                  ? "border-[#111827] bg-[#111827] text-white"
                  : "border-[#D7C9AB] bg-white/80 text-[#374151] hover:border-[#C8A45D] hover:bg-[#F7F0DF]",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
