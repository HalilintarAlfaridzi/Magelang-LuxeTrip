import PackageCard from "./PackageCard.jsx";

export default function PackageGrid({ packages }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {packages.map((tourPackage) => (
        <PackageCard key={tourPackage.slug} tourPackage={tourPackage} />
      ))}
    </div>
  );
}
