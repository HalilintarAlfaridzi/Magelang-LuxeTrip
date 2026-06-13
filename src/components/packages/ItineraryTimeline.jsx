export default function ItineraryTimeline({ itinerary }) {
  return (
    <ol className="space-y-5">
      {itinerary.map((item, index) => (
        <li key={`${item.time}-${index}`} className="grid grid-cols-[auto_1fr] gap-4">
          <div className="flex flex-col items-center">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#111827] text-sm font-bold text-[#E7C97F]">
              {index + 1}
            </span>
            {index < itinerary.length - 1 ? <span className="h-full w-px bg-[#D7C9AB]" /> : null}
          </div>
          <div className="rounded-lg border border-[#E5E7EB] bg-white p-4">
            <p className="text-sm font-bold text-[#8B6F47]">{item.time}</p>
            <p className="mt-1 leading-7 text-[#374151]">{item.activity}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
