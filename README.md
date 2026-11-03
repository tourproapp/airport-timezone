# airport-timezone

IATA airport code to IANA timezone lookup. Zero dependencies, one function, ~70 airports covering major touring markets in North America, Europe, and Asia-Pacific.

Extracted from [TourPro](https://tourpro.app), tour management software for live music, where it powers local-time display on flight itineraries.

## Usage

```ts
import { getTimezoneForAirport } from './src/index';

getTimezoneForAirport('JFK');  // 'America/New_York'
getTimezoneForAirport('lhr');  // 'Europe/London' (case-insensitive)
getTimezoneForAirport('XYZ');  // null (unknown codes are not an error)
```

Lookup returns `null` for unknown or empty codes so callers can fall back to city-level timezone data.

## License

MIT
