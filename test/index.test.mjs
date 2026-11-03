import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getTimezoneForAirport } from '../dist/index.js';

test('returns IANA timezone for known IATA codes', () => {
  assert.equal(getTimezoneForAirport('JFK'), 'America/New_York');
  assert.equal(getTimezoneForAirport('LHR'), 'Europe/London');
  assert.equal(getTimezoneForAirport('NRT'), 'Asia/Tokyo');
});

test('is case-insensitive and trims whitespace', () => {
  assert.equal(getTimezoneForAirport('lhr'), 'Europe/London');
  assert.equal(getTimezoneForAirport('  jfk '), 'America/New_York');
});

test('returns null for unknown, empty, or missing codes', () => {
  assert.equal(getTimezoneForAirport('XYZ'), null);
  assert.equal(getTimezoneForAirport(''), null);
  assert.equal(getTimezoneForAirport('   '), null);
  assert.equal(getTimezoneForAirport(null), null);
  assert.equal(getTimezoneForAirport(undefined), null);
});
