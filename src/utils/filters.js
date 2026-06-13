export function includesKeyword(value, keyword) {
  return String(value || "")
    .toLowerCase()
    .includes(keyword.trim().toLowerCase());
}

export function filterByCategory(items, category) {
  if (!category || category === "All") return items;
  return items.filter((item) => item.category === category);
}

export function sortDestinations(items, sortBy) {
  const sorted = [...items];

  if (sortBy === "Popular") {
    return sorted.sort((a, b) => b.popularity - a.popularity);
  }

  if (sortBy === "Name A-Z") {
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "Shortest Duration") {
    return sorted.sort((a, b) => a.estimatedDurationValue - b.estimatedDurationValue);
  }

  if (sortBy === "Longest Duration") {
    return sorted.sort((a, b) => b.estimatedDurationValue - a.estimatedDurationValue);
  }

  return sorted.sort((a, b) => b.recommended - a.recommended);
}

export function limit(items, count) {
  return items.slice(0, count);
}
