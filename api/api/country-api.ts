/* tslint:disable */
/* eslint-disable */
/**
 * ای پی آی زومیلا
 * راهنمای استفاده از رابط برنامه نویسی نرم افزار زومیلا
 *
 * The version of the OpenAPI document: v1
 * Contact: jzabihi1980@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CityDto } from '../model';
// @ts-ignore
import { CityDtoPagedListResultSET } from '../model';
// @ts-ignore
import { NeighbourhoodDto } from '../model';
// @ts-ignore
import { NeighbourhoodDtoPagedListResultSET } from '../model';
// @ts-ignore
import { ProvinceDto } from '../model';
// @ts-ignore
import { ProvinceDtoPagedListResultSET } from '../model';
/**
 * CountryApi - axios parameter creator
 * @export
 */
export const CountryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary لیست شهر های یک استان
         * @param {number} provinceId 
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryCitiesProvinceProvinceIdGet: async (provinceId: number, query?: string, currentPage?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'provinceId' is not null or undefined
            assertParamExists('apiCountryCitiesProvinceProvinceIdGet', 'provinceId', provinceId)
            const localVarPath = `/api/Country/Cities/Province/{provinceId}`
                .replace(`{${"provinceId"}}`, encodeURIComponent(String(provinceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (query !== undefined) {
                localVarQueryParameter['Query'] = query;
            }

            if (currentPage !== undefined) {
                localVarQueryParameter['CurrentPage'] = currentPage;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary شهر
         * @param {number} cityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryCityCityIdGet: async (cityId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cityId' is not null or undefined
            assertParamExists('apiCountryCityCityIdGet', 'cityId', cityId)
            const localVarPath = `/api/Country/City/{cityId}`
                .replace(`{${"cityId"}}`, encodeURIComponent(String(cityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary محله
         * @param {number} neighbourhoodId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryNeighbourhoodNeighbourhoodIdGet: async (neighbourhoodId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'neighbourhoodId' is not null or undefined
            assertParamExists('apiCountryNeighbourhoodNeighbourhoodIdGet', 'neighbourhoodId', neighbourhoodId)
            const localVarPath = `/api/Country/Neighbourhood/{neighbourhoodId}`
                .replace(`{${"neighbourhoodId"}}`, encodeURIComponent(String(neighbourhoodId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary لیست محلات یک شهر
         * @param {number} cityId 
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryNeighbourhoodsCityCityIdGet: async (cityId: number, query?: string, currentPage?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cityId' is not null or undefined
            assertParamExists('apiCountryNeighbourhoodsCityCityIdGet', 'cityId', cityId)
            const localVarPath = `/api/Country/Neighbourhoods/City/{cityId}`
                .replace(`{${"cityId"}}`, encodeURIComponent(String(cityId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (query !== undefined) {
                localVarQueryParameter['Query'] = query;
            }

            if (currentPage !== undefined) {
                localVarQueryParameter['CurrentPage'] = currentPage;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary استان
         * @param {number} provinceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryProvinceProvinceIdGet: async (provinceId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'provinceId' is not null or undefined
            assertParamExists('apiCountryProvinceProvinceIdGet', 'provinceId', provinceId)
            const localVarPath = `/api/Country/Province/{provinceId}`
                .replace(`{${"provinceId"}}`, encodeURIComponent(String(provinceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary لیست استانها
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryProvincesGet: async (query?: string, currentPage?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Country/Provinces`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (query !== undefined) {
                localVarQueryParameter['Query'] = query;
            }

            if (currentPage !== undefined) {
                localVarQueryParameter['CurrentPage'] = currentPage;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CountryApi - functional programming interface
 * @export
 */
export const CountryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CountryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary لیست شهر های یک استان
         * @param {number} provinceId 
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCountryCitiesProvinceProvinceIdGet(provinceId: number, query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CityDtoPagedListResultSET>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCountryCitiesProvinceProvinceIdGet(provinceId, query, currentPage, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary شهر
         * @param {number} cityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCountryCityCityIdGet(cityId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CityDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCountryCityCityIdGet(cityId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary محله
         * @param {number} neighbourhoodId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoodId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NeighbourhoodDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoodId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary لیست محلات یک شهر
         * @param {number} cityId 
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCountryNeighbourhoodsCityCityIdGet(cityId: number, query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NeighbourhoodDtoPagedListResultSET>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCountryNeighbourhoodsCityCityIdGet(cityId, query, currentPage, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary استان
         * @param {number} provinceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCountryProvinceProvinceIdGet(provinceId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProvinceDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCountryProvinceProvinceIdGet(provinceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary لیست استانها
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCountryProvincesGet(query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProvinceDtoPagedListResultSET>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCountryProvincesGet(query, currentPage, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CountryApi - factory interface
 * @export
 */
export const CountryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CountryApiFp(configuration)
    return {
        /**
         * 
         * @summary لیست شهر های یک استان
         * @param {number} provinceId 
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryCitiesProvinceProvinceIdGet(provinceId: number, query?: string, currentPage?: number, pageSize?: number, options?: any): AxiosPromise<CityDtoPagedListResultSET> {
            return localVarFp.apiCountryCitiesProvinceProvinceIdGet(provinceId, query, currentPage, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary شهر
         * @param {number} cityId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryCityCityIdGet(cityId: number, options?: any): AxiosPromise<CityDto> {
            return localVarFp.apiCountryCityCityIdGet(cityId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary محله
         * @param {number} neighbourhoodId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoodId: number, options?: any): AxiosPromise<NeighbourhoodDto> {
            return localVarFp.apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoodId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary لیست محلات یک شهر
         * @param {number} cityId 
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryNeighbourhoodsCityCityIdGet(cityId: number, query?: string, currentPage?: number, pageSize?: number, options?: any): AxiosPromise<NeighbourhoodDtoPagedListResultSET> {
            return localVarFp.apiCountryNeighbourhoodsCityCityIdGet(cityId, query, currentPage, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary استان
         * @param {number} provinceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryProvinceProvinceIdGet(provinceId: number, options?: any): AxiosPromise<ProvinceDto> {
            return localVarFp.apiCountryProvinceProvinceIdGet(provinceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary لیست استانها
         * @param {string} [query] 
         * @param {number} [currentPage] صفحه جاری
         * @param {number} [pageSize] تعداد رکورد در هر صفحه
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCountryProvincesGet(query?: string, currentPage?: number, pageSize?: number, options?: any): AxiosPromise<ProvinceDtoPagedListResultSET> {
            return localVarFp.apiCountryProvincesGet(query, currentPage, pageSize, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CountryApi - interface
 * @export
 * @interface CountryApi
 */
export interface CountryApiInterface {
    /**
     * 
     * @summary لیست شهر های یک استان
     * @param {number} provinceId 
     * @param {string} [query] 
     * @param {number} [currentPage] صفحه جاری
     * @param {number} [pageSize] تعداد رکورد در هر صفحه
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApiInterface
     */
    apiCountryCitiesProvinceProvinceIdGet(provinceId: number, query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig): AxiosPromise<CityDtoPagedListResultSET>;

    /**
     * 
     * @summary شهر
     * @param {number} cityId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApiInterface
     */
    apiCountryCityCityIdGet(cityId: number, options?: AxiosRequestConfig): AxiosPromise<CityDto>;

    /**
     * 
     * @summary محله
     * @param {number} neighbourhoodId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApiInterface
     */
    apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoodId: number, options?: AxiosRequestConfig): AxiosPromise<NeighbourhoodDto>;

    /**
     * 
     * @summary لیست محلات یک شهر
     * @param {number} cityId 
     * @param {string} [query] 
     * @param {number} [currentPage] صفحه جاری
     * @param {number} [pageSize] تعداد رکورد در هر صفحه
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApiInterface
     */
    apiCountryNeighbourhoodsCityCityIdGet(cityId: number, query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig): AxiosPromise<NeighbourhoodDtoPagedListResultSET>;

    /**
     * 
     * @summary استان
     * @param {number} provinceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApiInterface
     */
    apiCountryProvinceProvinceIdGet(provinceId: number, options?: AxiosRequestConfig): AxiosPromise<ProvinceDto>;

    /**
     * 
     * @summary لیست استانها
     * @param {string} [query] 
     * @param {number} [currentPage] صفحه جاری
     * @param {number} [pageSize] تعداد رکورد در هر صفحه
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApiInterface
     */
    apiCountryProvincesGet(query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig): AxiosPromise<ProvinceDtoPagedListResultSET>;

}

/**
 * CountryApi - object-oriented interface
 * @export
 * @class CountryApi
 * @extends {BaseAPI}
 */
export class CountryApi extends BaseAPI implements CountryApiInterface {
    /**
     * 
     * @summary لیست شهر های یک استان
     * @param {number} provinceId 
     * @param {string} [query] 
     * @param {number} [currentPage] صفحه جاری
     * @param {number} [pageSize] تعداد رکورد در هر صفحه
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    public apiCountryCitiesProvinceProvinceIdGet(provinceId: number, query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig) {
        return CountryApiFp(this.configuration).apiCountryCitiesProvinceProvinceIdGet(provinceId, query, currentPage, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary شهر
     * @param {number} cityId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    public apiCountryCityCityIdGet(cityId: number, options?: AxiosRequestConfig) {
        return CountryApiFp(this.configuration).apiCountryCityCityIdGet(cityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary محله
     * @param {number} neighbourhoodId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    public apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoodId: number, options?: AxiosRequestConfig) {
        return CountryApiFp(this.configuration).apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoodId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary لیست محلات یک شهر
     * @param {number} cityId 
     * @param {string} [query] 
     * @param {number} [currentPage] صفحه جاری
     * @param {number} [pageSize] تعداد رکورد در هر صفحه
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    public apiCountryNeighbourhoodsCityCityIdGet(cityId: number, query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig) {
        return CountryApiFp(this.configuration).apiCountryNeighbourhoodsCityCityIdGet(cityId, query, currentPage, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary استان
     * @param {number} provinceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    public apiCountryProvinceProvinceIdGet(provinceId: number, options?: AxiosRequestConfig) {
        return CountryApiFp(this.configuration).apiCountryProvinceProvinceIdGet(provinceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary لیست استانها
     * @param {string} [query] 
     * @param {number} [currentPage] صفحه جاری
     * @param {number} [pageSize] تعداد رکورد در هر صفحه
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountryApi
     */
    public apiCountryProvincesGet(query?: string, currentPage?: number, pageSize?: number, options?: AxiosRequestConfig) {
        return CountryApiFp(this.configuration).apiCountryProvincesGet(query, currentPage, pageSize, options).then((request) => request(this.axios, this.basePath));
    }
}
