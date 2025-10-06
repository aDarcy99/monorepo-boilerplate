/**
 * Formats a `Date` object into `DD-MM-YYYY` format.
 *
 * @param date - The date to format. Defaults to the current date.
 * @returns A string in the format `DD-MM-YYYY`.
 *
 * @example
 * formatDateToDMY(new Date('2025-06-04')); // "04-06-2025"
 */
export function formatDateToDMY(date = new Date()): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = parsedDate.getFullYear();
  return `${day}-${month}-${year}`;
}

/**
 * Formats a `Date` object into a long date string (e.g., "June 4, 2025").
 *
 * @param date - The date to format. Defaults to the current date.
 * @returns A human-readable date string.
 *
 * @example
 * formatDateToDateLong(new Date('2025-06-04')); // "June 4, 2025"
 */
export function formatDateToDateLong(date = new Date()): string {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return new Date(parsedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Calculates the number of full days passed between two dates.
 *
 * @param firstDate - The earlier date.
 * @param secondDate - The later date.
 * @returns The number of days between the two dates.
 *
 * @example
 * getDaysPassed(new Date('2025-06-01'), new Date('2025-06-04')); // 3
 */
export function getDaysPassed(firstDate: Date, secondDate: Date): number {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const diffInMilliseconds = secondDate.getTime() - firstDate.getTime();
  return Math.floor(diffInMilliseconds / millisecondsPerDay);
}

/**
 * Formats a Date object into a 24-hour time string ("HH:mm:ss").
 *
 * @param date - The date to format. Defaults to current date/time.
 * @returns A string in "HH:mm:ss" 24-hour format.
 *
 * @example
 * formatDateToTime24Hour(new Date('2025-06-02T21:16:59')); // "21:16:59"
 */
export function formatDateToTime24Hour(date: Date = new Date()): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  return parsedDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

/**
 * Extracts the ISO date (YYYY-MM-DD) from a date-time string.
 *
 * @param dateTimeString - The date-time string in "YYYY-MM-DD HH:mm:ss" format.
 * @returns The date portion in "YYYY-MM-DD" format.
 *
 * @example
 * formatStringToIsoDate("2025-06-02 21:16:59"); // "2025-06-02"
 */
export function formatStringToIsoDate(dateTimeString: string): string | null {
  const [datePart] = dateTimeString.split(" ");

  return datePart || null;
}

/**
 * Formats a `Date` object into `YYYY-MM-DD` format (suitable for input[type="date"]).
 *
 * @param date - The date to format. Defaults to the current date.
 * @returns A string in the format `YYYY-MM-DD`.
 *
 * @example
 * formatDateToIso(new Date('2025-06-04')); // "2025-06-04"
 */
export function formatDateToIso(date: Date = new Date()): string {
  const parsedDate = date instanceof Date ? date : new Date(date);
  return parsedDate.toISOString().slice(0, 10);
}

export default {
  getDaysPassed,
  formatDateToDMY,
  formatDateToDateLong,
  formatDateToTime24Hour,
  formatStringToIsoDate,
  formatDateToIso,
};
