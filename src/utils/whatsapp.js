export const WHATSAPP_NUMBER = "6281234567890";

export function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    "Hello Magelang LuxeTrip, I want to ask about travel packages in Magelang.",
  family:
    "Hello Magelang LuxeTrip, I want to plan a family trip in Magelang. Can you recommend a suitable package?",
  student:
    "Hello Magelang LuxeTrip, I want to ask about student tour packages in Magelang.",
  custom:
    "Hello Magelang LuxeTrip, I want to request a custom tour itinerary in Magelang.",
};
