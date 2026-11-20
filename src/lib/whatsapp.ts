export const WHATSAPP_PHONE = '919092220692';

export function createWhatsAppOrderLink(productName: string, quantity: number, totalPrice: number): string {
  const formattedPrice = totalPrice.toLocaleString('en-IN');
  const message = `Hi! I'd like to order:\n${productName} × ${quantity}\nTotal: ₹${formattedPrice}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppBookingLink(
  healerName: string,
  serviceName: string,
  dateStr: string,
  timeStr: string,
  price: string
): string {
  const message = `Hi! I'd like to confirm a booking with ${healerName}:\nService: ${serviceName}\nDate: ${dateStr}\nTime: ${timeStr}\nTotal: ${price}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
