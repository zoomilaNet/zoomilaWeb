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
 * @interface AgencyRes
 */
export interface AgencyRes {
    /**
     * کد آژانس
     * @type {number}
     * @memberof AgencyRes
     */
    'agencyId'?: number;
    /**
     * نام اژانس
     * @type {string}
     * @memberof AgencyRes
     */
    'agencyName'?: string | null;
    /**
     * کد استان
     * @type {number}
     * @memberof AgencyRes
     */
    'provinceId'?: number;
    /**
     * استان
     * @type {string}
     * @memberof AgencyRes
     */
    'province'?: string | null;
    /**
     * کد شهر
     * @type {number}
     * @memberof AgencyRes
     */
    'cityId'?: number;
    /**
     * شهر
     * @type {string}
     * @memberof AgencyRes
     */
    'city'?: string | null;
    /**
     * تلفن آژانس
     * @type {string}
     * @memberof AgencyRes
     */
    'agencyPhone'?: string | null;
    /**
     * لوگو آژانس
     * @type {string}
     * @memberof AgencyRes
     */
    'logo'?: string | null;
    /**
     * وضعیت
     * @type {string}
     * @memberof AgencyRes
     */
    'status'?: string | null;
    /**
     * تاییدیه آژانس
     * @type {boolean}
     * @memberof AgencyRes
     */
    'agencyIsVerified'?: boolean;
    /**
     * تاییدیه مدیر
     * @type {boolean}
     * @memberof AgencyRes
     */
    'ownerIsVerified'?: boolean;
    /**
     * کد قرارداد
     * @type {number}
     * @memberof AgencyRes
     */
    'contractId'?: number | null;
    /**
     * تاریخ انقضای قرارداد
     * @type {string}
     * @memberof AgencyRes
     */
    'contractExpirationDate'?: string | null;
    /**
     * تعداد مشاور
     * @type {number}
     * @memberof AgencyRes
     */
    'adviserCount'?: number;
    /**
     * تعداد گروه
     * @type {number}
     * @memberof AgencyRes
     */
    'groupCount'?: number;
    /**
     * تعداد آگهی فروش
     * @type {number}
     * @memberof AgencyRes
     */
    'forSaleCount'?: number;
    /**
     * تعداد آگهی اجاره
     * @type {number}
     * @memberof AgencyRes
     */
    'toRentCount'?: number;
    /**
     * تعداد درخواست شماره مشاور
     * @type {number}
     * @memberof AgencyRes
     */
    'adviserPhoneRequestCount'?: number;
    /**
     * تعداد درخواست شماره آژانس
     * @type {number}
     * @memberof AgencyRes
     */
    'agencyPhoneRequestCount'?: number;
    /**
     * کد رهگیری
     * @type {string}
     * @memberof AgencyRes
     */
    'trackingCode'?: string | null;
    /**
     * تاریخ ثبت نام
     * @type {string}
     * @memberof AgencyRes
     */
    'createdAt'?: string | null;
    /**
     * مالک آژانس
     * @type {number}
     * @memberof AgencyRes
     */
    'ownerId'?: number;
    /**
     * نام مالک
     * @type {string}
     * @memberof AgencyRes
     */
    'ownerName'?: string | null;
    /**
     * موبایل مالک
     * @type {string}
     * @memberof AgencyRes
     */
    'ownerMobile'?: string | null;
}

