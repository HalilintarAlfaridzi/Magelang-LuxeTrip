import { assetPath } from "../../utils/assets.js";

export default function PageHero({ eyebrow, title, description, image = assetPath("images/magelang-hero.png") }) {
  return (
    <header className="relative isolate overflow-hidden bg-[#111827] py-20 text-white md:py-24">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-[#111827]/20" />
      <div className="container-shell">
        {eyebrow ? (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#E7C97F]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
