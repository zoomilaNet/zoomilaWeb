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



/**
 * 
 * @export
 * @interface ContractHistoryToReturnDto
 */
export interface ContractHistoryToReturnDto {
    /**
     * نام آژانس
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'agencyName'?: string | null;
    /**
     * نام بسته
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'packageName'?: string | null;
    /**
     * نوع قرارداد
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'type'?: ContractHistoryToReturnDtoTypeEnum;
    /**
     * توضیحات
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'description'?: string | null;
    /**
     * قیمت بسته
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'contractPrice'?: string | null;
    /**
     * مبلغ دریافتی
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'price'?: string | null;
    /**
     * تاریخ انقضا
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'expirationTime'?: string | null;
    /**
     * تاریخ لاگ
     * @type {string}
     * @memberof ContractHistoryToReturnDto
     */
    'logDt'?: string | null;
}

/**
    * @export
    * @enum {string}
    */
export enum ContractHistoryToReturnDtoTypeEnum {
    New = 'new',
    Promote = 'promote'
}


