export const travelCategories = [
  {
    id: 1,
    title: "Cultural Heritage",
    slug: "cultural-heritage",
    icon: "Landmark",
    description: "Temples, stories, local traditions, and historical landmarks.",
  },
  {
    id: 2,
    title: "Nature",
    slug: "nature",
    icon: "Mountain",
    description: "Highlands, viewpoints, gardens, and refreshing outdoor escapes.",
  },
  {
    id: 3,
    title: "Family Attractions",
    slug: "family-attractions",
    icon: "Users",
    description: "Comfortable routes and destinations for parents and children.",
  },
  {
    id: 4,
    title: "Adventure",
    slug: "adventure",
    icon: "Compass",
    description: "Active outdoor experiences with scenic Magelang landscapes.",
  },
  {
    id: 5,
    title: "Hidden Gems",
    slug: "hidden-gems",
    icon: "Sparkles",
    description: "Less crowded places with local character and memorable views.",
  },
  {
    id: 6,
    title: "Educational Tourism",
    slug: "educational-tourism",
    icon: "BookOpen",
    description: "Learning-focused visits for students, schools, and groups.",
  },
  {
    id: 7,
    title: "Culinary Tourism",
    slug: "culinary-tourism",
    icon: "Utensils",
    description: "Local flavors, traditional snacks, and comfortable food stops.",
  },
];

export const destinationCategories = ["All", ...travelCategories.map((item) => item.title)];

export const packageCategories = [
  "All",
  "Family Tours",
  "Student Tours",
  "Cultural Tours",
  "Nature Tours",
  "Premium Experiences",
  "Corporate Trips",
];

export const blogCategories = [
  "All",
  "Travel Guide",
  "Family Travel",
  "Student Trip",
  "Cultural Tourism",
  "Nature Travel",
  "Food & Culinary",
  "Travel Preparation",
  "Photography Spots",
  "Budget Tips",
  "Premium Travel",
];
