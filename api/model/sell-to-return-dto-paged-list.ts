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


import { SellToReturnDto } from './sell-to-return-dto';

/**
 * 
 * @export
 * @interface SellToReturnDtoPagedList
 */
export interface SellToReturnDtoPagedList {
    /**
     * 
     * @type {Array<SellToReturnDto>}
     * @memberof SellToReturnDtoPagedList
     */
    'data'?: Array<SellToReturnDto> | null;
    /**
     * 
     * @type {number}
     * @memberof SellToReturnDtoPagedList
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof SellToReturnDtoPagedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof SellToReturnDtoPagedList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof SellToReturnDtoPagedList
     */
    'totalCount'?: number;
}

