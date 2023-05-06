import {
  Unit,
  Language,
  QueryType,
  InitialSettings,
} from './types';
import { SCHEME } from './helpers';

class BaseAPI {
  protected settings: InitialSettings;
  protected BASE_URL: string;

  constructor({
    host,
    units = 'imperial',
    language = 'en'
  }: InitialSettings) {
    this.settings = {
      host,
      units,
      language
    };
    this.BASE_URL = SCHEME + host + "/";
  }

  // ***
  // ***
  // Setters
  // ***
  // ***

  public setHost(host: string) {
    this.settings.host = host;
  }

  public setUnits(units: Unit) {
    this.settings.units = units;
  }

  public setLanguage(language: Language) {
    this.settings.language = language;
  }

  public clearSettings() {
    this.settings = {
      host: 'youNeedValidApiHost',
      units: 'imperial',
      language: 'en'
    };
  }

  // ***
  // ***
  // Getters
  // ***
  // ***

  public getAllSettings() {
    return this.settings;
  }

  // ***
  // ***
  // Private
  // ***
  // ***

  protected buildURL(queryType: QueryType, query: string) {
    const { BASE_URL, settings } = this;

    return `${BASE_URL + queryType}?${query}&units=${
      settings.units
    }&lang=${settings.language}`;
  }

}

export default BaseAPI;
