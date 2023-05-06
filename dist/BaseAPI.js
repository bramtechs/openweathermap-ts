"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var BaseAPI = /** @class */ (function () {
    function BaseAPI(_a) {
        var host = _a.host, _b = _a.units, units = _b === void 0 ? 'imperial' : _b, _c = _a.language, language = _c === void 0 ? 'en' : _c;
        this.settings = {
            host: host,
            units: units,
            language: language
        };
        this.BASE_URL = helpers_1.SCHEME + host;
    }
    // ***
    // ***
    // Setters
    // ***
    // ***
    BaseAPI.prototype.setHost = function (host) {
        this.settings.host = host;
    };
    BaseAPI.prototype.setUnits = function (units) {
        this.settings.units = units;
    };
    BaseAPI.prototype.setLanguage = function (language) {
        this.settings.language = language;
    };
    BaseAPI.prototype.clearSettings = function () {
        this.settings = {
            host: 'youNeedValidApiHost',
            units: 'imperial',
            language: 'en'
        };
    };
    // ***
    // ***
    // Getters
    // ***
    // ***
    BaseAPI.prototype.getAllSettings = function () {
        return this.settings;
    };
    // ***
    // ***
    // Private
    // ***
    // ***
    BaseAPI.prototype.buildURL = function (queryType, query) {
        var _a = this, BASE_URL = _a.BASE_URL, settings = _a.settings;
        return "".concat(BASE_URL + queryType, "?").concat(query, "&units=").concat(settings.units, "&lang=").concat(settings.language);
    };
    return BaseAPI;
}());
exports.default = BaseAPI;
