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


import { ProvinceDto } from './province-dto';

/**
 * 
 * @export
 * @interface ProvinceDtoPagedList
 */
export interface ProvinceDtoPagedList {
    /**
     * 
     * @type {Array<ProvinceDto>}
     * @memberof ProvinceDtoPagedList
     */
    'data'?: Array<ProvinceDto> | null;
    /**
     * 
     * @type {number}
     * @memberof ProvinceDtoPagedList
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProvinceDtoPagedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProvinceDtoPagedList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProvinceDtoPagedList
     */
    'totalCount'?: number;
}

