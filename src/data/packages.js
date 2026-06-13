import { assetPath } from "../utils/assets.js";

export const tourPackages = [
  {
    id: 1,
    slug: "borobudur-sunrise-experience",
    title: "Borobudur Sunrise Experience",
    category: "Premium Experiences",
    image: assetPath("images/magelang-hero.png"),
    duration: "1 Day",
    priceLabel: "Contact for price",
    shortDescription:
      "A refined early-morning cultural route with sunrise scenery, Borobudur area guidance, and flexible private pacing.",
    destinations: [
      { title: "Punthuk Setumbu", slug: "punthuk-setumbu" },
      { title: "Borobudur Temple", slug: "borobudur-temple" },
      { title: "Mendut Temple", slug: "mendut-temple" },
    ],
    itinerary: [
      { time: "04:00", activity: "Pickup from hotel or meeting point" },
      { time: "05:00", activity: "Sunrise experience near the Borobudur landscape" },
      { time: "07:00", activity: "Breakfast and local refreshment stop" },
      { time: "08:30", activity: "Guided visit around Borobudur Temple area" },
      { time: "11:30", activity: "Optional Mendut Temple stop or return transfer" },
    ],
    included: [
      "Private trip consultation",
      "Suggested itinerary",
      "Destination recommendation",
      "WhatsApp support",
    ],
    excluded: ["Entrance tickets", "Personal expenses", "Meals unless stated", "Travel insurance"],
    terms: [
      "Final price and availability are confirmed through WhatsApp.",
      "Itinerary can be adjusted based on visitor needs.",
      "This frontend demo does not process payment or booking data.",
    ],
    whatsappMessage:
      "Hello Magelang LuxeTrip, I want to ask about the Borobudur Sunrise Experience package.",
  },
  {
    id: 2,
    slug: "magelang-family-weekend-trip",
    title: "Magelang Family Weekend Trip",
    category: "Family Tours",
    image: assetPath("images/magelang-family.png"),
    duration: "2 Days 1 Night",
    priceLabel: "Contact for price",
    shortDescription:
      "A comfortable family route combining iconic scenery, easy attractions, culinary stops, and flexible travel time.",
    destinations: [
      { title: "Borobudur Temple", slug: "borobudur-temple" },
      { title: "Taman Kyai Langgeng", slug: "taman-kyai-langgeng" },
      { title: "Magelang Culinary Trail", slug: "magelang-culinary-trail" },
    ],
    itinerary: [
      { time: "Day 1 Morning", activity: "Arrival, hotel pickup, and Borobudur area visit" },
      { time: "Day 1 Afternoon", activity: "Relaxed culinary stop and family-friendly sightseeing" },
      { time: "Day 2 Morning", activity: "Taman Kyai Langgeng or nature viewpoint option" },
      { time: "Day 2 Afternoon", activity: "Souvenir stop and return transfer" },
    ],
    included: ["Family itinerary planning", "Destination recommendations", "WhatsApp support"],
    excluded: ["Hotel", "Entrance tickets", "Meals", "Personal expenses"],
    terms: [
      "Designed for flexible family pacing.",
      "Route can be adjusted for children, seniors, and mixed-age groups.",
    ],
    whatsappMessage:
      "Hello Magelang LuxeTrip, I want to ask about the Magelang Family Weekend Trip package.",
  },
  {
    id: 3,
    slug: "student-cultural-study-tour",
    title: "Student Cultural Study Tour",
    category: "Student Tours",
    image: assetPath("images/magelang-family.png"),
    duration: "1 Day",
    priceLabel: "Group quote via WhatsApp",
    shortDescription:
      "An educational route for school groups focused on culture, heritage interpretation, and structured movement.",
    destinations: [
      { title: "Borobudur Temple", slug: "borobudur-temple" },
      { title: "Mendut Temple", slug: "mendut-temple" },
    ],
    itinerary: [
      { time: "07:00", activity: "Group pickup and trip briefing" },
      { time: "09:00", activity: "Guided Borobudur cultural learning session" },
      { time: "12:00", activity: "Lunch break and group rest time" },
      { time: "13:30", activity: "Mendut Temple visit and reflection activity" },
      { time: "15:30", activity: "Return transfer" },
    ],
    included: ["Student-friendly planning", "Group route suggestion", "WhatsApp coordination"],
    excluded: ["Tickets", "Meals", "School permissions", "Travel insurance"],
    terms: [
      "Suitable for school, campus, and study groups.",
      "Group details are confirmed through WhatsApp consultation.",
    ],
    whatsappMessage:
      "Hello Magelang LuxeTrip, I want to ask about the Student Cultural Study Tour package.",
  },
  {
    id: 4,
    slug: "premium-nature-escape",
    title: "Premium Nature Escape",
    category: "Nature Tours",
    image: assetPath("images/magelang-sunrise.png"),
    duration: "1 Day",
    priceLabel: "Contact for price",
    shortDescription:
      "A scenic highland-focused day with sunrise views, mountain air, and relaxed private travel support.",
    destinations: [
      { title: "Punthuk Setumbu", slug: "punthuk-setumbu" },
      { title: "Ketep Pass", slug: "ketep-pass" },
      { title: "Silancur Highland", slug: "silancur-highland" },
    ],
    itinerary: [
      { time: "05:00", activity: "Sunrise viewpoint visit" },
      { time: "08:00", activity: "Breakfast and scenic transfer" },
      { time: "10:00", activity: "Ketep Pass mountain panorama" },
      { time: "13:00", activity: "Highland photo stop and relaxed nature time" },
      { time: "16:00", activity: "Return transfer" },
    ],
    included: ["Nature route planning", "Flexible timing", "WhatsApp support"],
    excluded: ["Tickets", "Meals", "Personal expenses", "Weather-related changes"],
    terms: ["Best views depend on weather.", "The itinerary can be softened for families."],
    whatsappMessage:
      "Hello Magelang LuxeTrip, I want to ask about the Premium Nature Escape package.",
  },
  {
    id: 5,
    slug: "hidden-gems-private-tour",
    title: "Hidden Gems Private Tour",
    category: "Premium Experiences",
    image: assetPath("images/magelang-village.png"),
    duration: "1 Day",
    priceLabel: "Private quote via WhatsApp",
    shortDescription:
      "A private route for travelers who want local scenery, village atmosphere, and quieter destinations.",
    destinations: [
      { title: "Nepal Van Java", slug: "nepal-van-java" },
      { title: "Silancur Highland", slug: "silancur-highland" },
    ],
    itinerary: [
      { time: "07:30", activity: "Pickup and route briefing" },
      { time: "09:30", activity: "Nepal Van Java village visit" },
      { time: "12:00", activity: "Lunch or local refreshment stop" },
      { time: "14:00", activity: "Silancur Highland scenic stop" },
      { time: "16:30", activity: "Return transfer" },
    ],
    included: ["Private itinerary consultation", "Destination curation", "WhatsApp support"],
    excluded: ["Entrance tickets", "Meals", "Personal expenses"],
    terms: ["Mountain road comfort should be considered.", "Best with clear-weather planning."],
    whatsappMessage:
      "Hello Magelang LuxeTrip, I want to ask about the Hidden Gems Private Tour package.",
  },
  {
    id: 6,
    slug: "corporate-cultural-retreat",
    title: "Corporate Cultural Retreat",
    category: "Corporate Trips",
    image: assetPath("images/magelang-hero.png"),
    duration: "Custom Duration",
    priceLabel: "Custom quote via WhatsApp",
    shortDescription:
      "A polished itinerary concept for company groups combining culture, local dining, and comfortable movement.",
    destinations: [
      { title: "Borobudur Temple", slug: "borobudur-temple" },
      { title: "Magelang Culinary Trail", slug: "magelang-culinary-trail" },
      { title: "Ketep Pass", slug: "ketep-pass" },
    ],
    itinerary: [
      { time: "Session 1", activity: "Group arrival and cultural destination visit" },
      { time: "Session 2", activity: "Curated local lunch or refreshment stop" },
      { time: "Session 3", activity: "Scenic nature stop or team photo session" },
      { time: "Session 4", activity: "Return transfer and optional souvenir stop" },
    ],
    included: ["Route consultation", "Group planning guide", "WhatsApp coordination"],
    excluded: ["Venue rental", "Tickets", "Meals", "Professional event production"],
    terms: ["Recommended for early group consultation.", "Final route depends on group size."],
    whatsappMessage:
      "Hello Magelang LuxeTrip, I want to ask about the Corporate Cultural Retreat package.",
  },
];
