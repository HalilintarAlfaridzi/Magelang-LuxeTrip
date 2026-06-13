import DestinationCard from "./DestinationCard.jsx";

export default function DestinationGrid({ destinations }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard key={destination.slug} destination={destination} />
      ))}
    </div>
  );
}
