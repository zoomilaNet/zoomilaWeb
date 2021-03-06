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


import { ToRentBuildingForCreateDto } from './to-rent-building-for-create-dto';

/**
 * 
 * @export
 * @interface LetForCreateDto
 */
export interface LetForCreateDto {
    /**
     * رهن
     * @type {number}
     * @memberof LetForCreateDto
     */
    'deposit'?: number;
    /**
     * اجاره
     * @type {number}
     * @memberof LetForCreateDto
     */
    'rent'?: number;
    /**
     * توضیحات
     * @type {string}
     * @memberof LetForCreateDto
     */
    'description'?: string | null;
    /**
     * نکات کلیدی
     * @type {Array<string>}
     * @memberof LetForCreateDto
     */
    'keyFeatures'?: Array<string> | null;
    /**
     * نوع اگهی
     * @type {string}
     * @memberof LetForCreateDto
     */
    'publishType'?: LetForCreateDtoPublishTypeEnum;
    /**
     * 
     * @type {ToRentBuildingForCreateDto}
     * @memberof LetForCreateDto
     */
    'building'?: ToRentBuildingForCreateDto;
    /**
     * کد مشاور
     * @type {number}
     * @memberof LetForCreateDto
     */
    'adviserId'?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum LetForCreateDtoPublishTypeEnum {
    Simple = 'simple',
    Occasion = 'occasion',
    Featured = 'featured'
}


