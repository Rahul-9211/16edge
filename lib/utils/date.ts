/**
 * Safely converts a date to ISO string
 * @param date - The date to convert
 * @returns ISO string or empty string if invalid
 */
export function toISODate(date: Date | string | null | undefined): string {
  if (!date) return '';
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return '';
    return dateObj.toISOString();
  } catch {
    return '';
  }
}

/**
 * Safely formats a date to locale string
 * @param date - The date to format
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string or empty string if invalid
 */
export function formatDate(
  date: Date | string | null | undefined,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
): string {
  if (!date) return '';
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return '';
    return dateObj.toLocaleDateString('en-US', options);
  } catch {
    return '';
  }
} 