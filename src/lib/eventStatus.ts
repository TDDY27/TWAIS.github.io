export type EventStatus = 'upcoming' | 'running' | 'past';

/**
 * Determine an event's status relative to today (start of day, local time).
 *
 * Upcoming  — event hasn't started yet        (today < startDate)
 * Running   — event is currently in progress  (startDate ≤ today ≤ endDate)
 * Past      — event has finished              (today > endDate, or today > startDate if no endDate)
 */
export function getEventStatus(
  startDate: Date,
  endDate: Date | undefined,
  today: Date,
): EventStatus {
  if (today < startDate) return 'upcoming';
  if (endDate && today <= endDate) return 'running';
  return 'past';
}

/** Returns true if an event should appear in the "active" list (not yet over). */
export function isActiveEvent(
  startDate: Date,
  endDate: Date | undefined,
  today: Date,
): boolean {
  return getEventStatus(startDate, endDate, today) !== 'past';
}

/** Normalise a Date to the start of the day in local time, so today's events aren't counted as past mid-day. */
export function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
