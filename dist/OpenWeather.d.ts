import { Unit, CountryCode, Language, QueryType, InitialSettings, Location, SetCurrentWeatherByCityName, GetByCityName, GetByCityId, GetByGeoCoordinates } from './types';
import BaseAPI from './BaseAPI';
import Geocoding from './geocoding/Geocoding';
declare class OpenWeather extends BaseAPI {
    protected location: Location;
    protected geocoding: Geocoding;
    constructor({ host, units, language }: InitialSettings);
    setHost(host: string): void;
    setUnits(units: Unit): void;
    setLanguage(language: Language): void;
    setCityName({ cityName, state, countryCode }: SetCurrentWeatherByCityName): void;
    setCityId(cityId: number): void;
    setGeoCoordinates(latitude: number, longitude: number): void;
    setZipCode(zipcode: string, countryCode?: CountryCode): void;
    clearSettings(): void;
    clearLocation(): void;
    getAllSettings(): InitialSettings;
    getAllLocations(): Location;
    /**
     * @summary Use the built-in API to get by city name (deprecated, but still useable)
     * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
     */
    builtInGetByCityName({ location, queryType }: GetByCityName): Promise<unknown>;
    /**
     * @summary Uses the Geocoding API to first get the coordinates of the city name, then uses the coordinates to get the weather data.
     */
    getByCityName({ location, queryType }: GetByCityName): Promise<unknown>;
    /**
     *
     * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
     */
    getByCityId({ cityId, queryType }: GetByCityId): Promise<unknown>;
    getByGeoCoordinates({ latitude, longitude, queryType }: GetByGeoCoordinates): Promise<unknown>;
    /**
   *
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
   */
    builtInGetByZipcode(zipcode: string, queryType: QueryType, countryCode?: CountryCode): Promise<unknown>;
    getByZipcode(zipcode: string, queryType: QueryType, countryCode?: CountryCode): Promise<unknown>;
}
export default OpenWeather;
