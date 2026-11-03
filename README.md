# @tourproapp/airport-timezone

IATA airport code to IANA timezone lookup. Zero dependencies, one function, ~70 airports covering major touring markets in North America, Europe, and Asia-Pacific.

Extracted from [TourPro](https://tourpro.app), tour management software for live music, where it powers local-time display on flight itineraries.

## Install

```bash
npm install @tourproapp/airport-timezone
```

## Usage

```ts
import { getTimezoneForAirport } from '@tourproapp/airport-timezone';

getTimezoneForAirport('JFK');  // 'America/New_York'
getTimezoneForAirport('lhr');  // 'Europe/London' (case-insensitive)
getTimezoneForAirport('XYZ');  // null (unknown codes are not an error)
```

Lookup returns `null` for unknown or empty codes so callers can fall back to city-level timezone data.

## Coverage

The map deliberately covers the airports that come up most on live-music tours rather than every airport on earth. If a code you need is missing, open an issue or PR - the map is a plain `Record<string, string>` and additions are welcome.

## Development

```bash
npm install
npm test   # builds + runs node:test suite
```

## Publishing

Publishing is manual for now. You need an npm account that belongs to the `@tourproapp` npm org, then:

```bash
npm login
npm publish --access public
```

`prepublishOnly` runs the build and test suite automatically.

## License

MIT
