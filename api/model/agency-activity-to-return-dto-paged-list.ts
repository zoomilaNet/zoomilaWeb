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


import { AgencyActivityToReturnDto } from './agency-activity-to-return-dto';

/**
 * 
 * @export
 * @interface AgencyActivityToReturnDtoPagedList
 */
export interface AgencyActivityToReturnDtoPagedList {
    /**
     * 
     * @type {Array<AgencyActivityToReturnDto>}
     * @memberof AgencyActivityToReturnDtoPagedList
     */
    'data'?: Array<AgencyActivityToReturnDto> | null;
    /**
     * 
     * @type {number}
     * @memberof AgencyActivityToReturnDtoPagedList
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof AgencyActivityToReturnDtoPagedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof AgencyActivityToReturnDtoPagedList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof AgencyActivityToReturnDtoPagedList
     */
    'totalCount'?: number;
}

