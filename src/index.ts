/**
 * IATA airport code to IANA timezone mapping.
 *
 * Extracted from TourPro (https://tourpro.app), where it drives local-time
 * display for flight itineraries. Covers the airports that come up most on
 * tours in North America, Europe, and Asia-Pacific.
 */

const AIRPORT_TIMEZONE_MAP: Record<string, string> = {
  // North America - US
  ATL: 'America/New_York',
  AUS: 'America/Chicago',
  BNA: 'America/Chicago',
  BOS: 'America/New_York',
  BWI: 'America/New_York',
  CLT: 'America/New_York',
  DCA: 'America/New_York',
  DEN: 'America/Denver',
  DFW: 'America/Chicago',
  DTW: 'America/Detroit',
  EWR: 'America/New_York',
  HNL: 'Pacific/Honolulu',
  IAD: 'America/New_York',
  IAH: 'America/Chicago',
  JFK: 'America/New_York',
  LAS: 'America/Los_Angeles',
  LAX: 'America/Los_Angeles',
  LGA: 'America/New_York',
  MCO: 'America/New_York',
  MIA: 'America/New_York',
  MSP: 'America/Chicago',
  ORD: 'America/Chicago',
  PDX: 'America/Los_Angeles',
  PHL: 'America/New_York',
  PHX: 'America/Phoenix',
  RDU: 'America/New_York',
  SAN: 'America/Los_Angeles',
  SEA: 'America/Los_Angeles',
  SFO: 'America/Los_Angeles',
  SLC: 'America/Denver',
  TPA: 'America/New_York',
  // North America - Canada & Mexico
  YUL: 'America/Toronto',
  YVR: 'America/Vancouver',
  YYZ: 'America/Toronto',
  CUN: 'America/Cancun',
  MEX: 'America/Mexico_City',
  // Europe
  AMS: 'Europe/Amsterdam',
  ARN: 'Europe/Stockholm',
  BCN: 'Europe/Madrid',
  CDG: 'Europe/Paris',
  CPH: 'Europe/Copenhagen',
  DUB: 'Europe/Dublin',
  EDI: 'Europe/London',
  FCO: 'Europe/Rome',
  FRA: 'Europe/Berlin',
  HEL: 'Europe/Helsinki',
  IST: 'Europe/Istanbul',
  LGW: 'Europe/London',
  LHR: 'Europe/London',
  LIS: 'Europe/Lisbon',
  MAD: 'Europe/Madrid',
  MUC: 'Europe/Berlin',
  OSL: 'Europe/Oslo',
  VIE: 'Europe/Vienna',
  ZRH: 'Europe/Zurich',
  // Asia-Pacific
  DXB: 'Asia/Dubai',
  GRU: 'America/Sao_Paulo',
  HKG: 'Asia/Hong_Kong',
  HND: 'Asia/Tokyo',
  ICN: 'Asia/Seoul',
  MEL: 'Australia/Melbourne',
  NRT: 'Asia/Tokyo',
  SIN: 'Asia/Singapore',
  SYD: 'Australia/Sydney',
};

export function getTimezoneForAirport(iataCode?: string | null): string | null {
  if (!iataCode) return null;
  const code = iataCode.trim().toUpperCase();
  if (!code) return null;
  return AIRPORT_TIMEZONE_MAP[code] || null;
}
