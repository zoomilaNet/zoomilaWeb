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
 * @interface AgencyMessageToReturnDto
 */
export interface AgencyMessageToReturnDto {
    /**
     * کد
     * @type {number}
     * @memberof AgencyMessageToReturnDto
     */
    'agencyMessageId'?: number;
    /**
     * کد پرسنل
     * @type {number}
     * @memberof AgencyMessageToReturnDto
     */
    'employeeId'?: number;
    /**
     * نام پرسنل
     * @type {string}
     * @memberof AgencyMessageToReturnDto
     */
    'employeeName'?: string | null;
    /**
     * تصویر پرسنل
     * @type {string}
     * @memberof AgencyMessageToReturnDto
     */
    'employeeProfilePicture'?: string | null;
    /**
     * عنوان
     * @type {string}
     * @memberof AgencyMessageToReturnDto
     */
    'title'?: string | null;
    /**
     * متن پیام
     * @type {string}
     * @memberof AgencyMessageToReturnDto
     */
    'content'?: string | null;
    /**
     * لینک
     * @type {string}
     * @memberof AgencyMessageToReturnDto
     */
    'link'?: string | null;
    /**
     * خوانده شده
     * @type {boolean}
     * @memberof AgencyMessageToReturnDto
     */
    'seen'?: boolean;
    /**
     * زمان ارسال پیام
     * @type {string}
     * @memberof AgencyMessageToReturnDto
     */
    'createdAt'?: string | null;
}

