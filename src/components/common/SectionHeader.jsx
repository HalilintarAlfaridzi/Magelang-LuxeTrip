export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const isCenter = align === "center";

  return (
    <div className={["max-w-3xl", isCenter ? "mx-auto text-center" : ""].join(" ")}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#8B6F47]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-[#111827] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#5f6673] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
