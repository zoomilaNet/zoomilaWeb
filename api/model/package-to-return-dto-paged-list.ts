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


import { PackageToReturnDto } from './package-to-return-dto';

/**
 * 
 * @export
 * @interface PackageToReturnDtoPagedList
 */
export interface PackageToReturnDtoPagedList {
    /**
     * 
     * @type {Array<PackageToReturnDto>}
     * @memberof PackageToReturnDtoPagedList
     */
    'data'?: Array<PackageToReturnDto> | null;
    /**
     * 
     * @type {number}
     * @memberof PackageToReturnDtoPagedList
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof PackageToReturnDtoPagedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PackageToReturnDtoPagedList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof PackageToReturnDtoPagedList
     */
    'totalCount'?: number;
}
