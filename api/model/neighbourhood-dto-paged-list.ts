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


import { NeighbourhoodDto } from './neighbourhood-dto';

/**
 * 
 * @export
 * @interface NeighbourhoodDtoPagedList
 */
export interface NeighbourhoodDtoPagedList {
    /**
     * 
     * @type {Array<NeighbourhoodDto>}
     * @memberof NeighbourhoodDtoPagedList
     */
    'data'?: Array<NeighbourhoodDto> | null;
    /**
     * 
     * @type {number}
     * @memberof NeighbourhoodDtoPagedList
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof NeighbourhoodDtoPagedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof NeighbourhoodDtoPagedList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof NeighbourhoodDtoPagedList
     */
    'totalCount'?: number;
}

