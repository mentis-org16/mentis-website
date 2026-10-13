export const WHATSAPP_NUMBER = "923009853541";

export const GENERAL_ENQUIRY_MESSAGE =
  "Assalam-o-Alaikum, I'm interested in working with Mentis AI. I'd like to discuss a project for my business.";

export const ASSISTANT_ENQUIRY_MESSAGE =
  "Assalam-o-Alaikum, I'm interested in having Mentis AI build an AI assistant for my organisation. Could we discuss the requirements and pricing?";

/** Build a WhatsApp click-to-chat link with an encoded, prefilled message. */
export function getWhatsAppHref(message: string): string {
  const query = new URLSearchParams({ text: message });
  return `https://wa.me/${WHATSAPP_NUMBER}?${query.toString()}`;
}
