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


import { LetToReturnDto } from './let-to-return-dto';

/**
 * 
 * @export
 * @interface LetToReturnDtoPagedList
 */
export interface LetToReturnDtoPagedList {
    /**
     * 
     * @type {Array<LetToReturnDto>}
     * @memberof LetToReturnDtoPagedList
     */
    'data'?: Array<LetToReturnDto> | null;
    /**
     * 
     * @type {number}
     * @memberof LetToReturnDtoPagedList
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof LetToReturnDtoPagedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof LetToReturnDtoPagedList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof LetToReturnDtoPagedList
     */
    'totalCount'?: number;
}

