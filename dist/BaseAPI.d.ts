import { Unit, Language, QueryType, InitialSettings } from './types';
declare class BaseAPI {
    protected settings: InitialSettings;
    protected BASE_URL: string;
    constructor({ host, units, language }: InitialSettings);
    setHost(host: string): void;
    setUnits(units: Unit): void;
    setLanguage(language: Language): void;
    clearSettings(): void;
    getAllSettings(): InitialSettings;
    protected buildURL(queryType: QueryType, query: string): string;
}
export default BaseAPI;
