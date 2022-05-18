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


import { AddressToReturnDto } from './address-to-return-dto';
import { ExistingFacilityDto } from './existing-facility-dto';
import { FacilityToReturnDto } from './facility-to-return-dto';

/**
 * 
 * @export
 * @interface SellAdDetail
 */
export interface SellAdDetail {
    /**
     * کد آگهی
     * @type {number}
     * @memberof SellAdDetail
     */
    'sellId'?: number;
    /**
     * کد آژانس
     * @type {number}
     * @memberof SellAdDetail
     */
    'agencyId'?: number;
    /**
     * نام آژانس
     * @type {string}
     * @memberof SellAdDetail
     */
    'agencyName'?: string | null;
    /**
     * شماره تماس مشاور
     * @type {string}
     * @memberof SellAdDetail
     */
    'adviserPhone'?: string | null;
    /**
     * شماره تماس آژانس
     * @type {string}
     * @memberof SellAdDetail
     */
    'agencyPhone'?: string | null;
    /**
     * لوگو آژانس
     * @type {string}
     * @memberof SellAdDetail
     */
    'agencyLogo'?: string | null;
    /**
     * نام مشاور
     * @type {string}
     * @memberof SellAdDetail
     */
    'adviserName'?: string | null;
    /**
     * کد مشاور
     * @type {number}
     * @memberof SellAdDetail
     */
    'adviserId'?: number;
    /**
     * توضیحات
     * @type {string}
     * @memberof SellAdDetail
     */
    'description'?: string | null;
    /**
     * امکانات کلیدی
     * @type {Array<string>}
     * @memberof SellAdDetail
     */
    'keyFeatures'?: Array<string> | null;
    /**
     * نوع انتشار
     * @type {string}
     * @memberof SellAdDetail
     */
    'publishType'?: SellAdDetailPublishTypeEnum;
    /**
     * قیمت
     * @type {number}
     * @memberof SellAdDetail
     */
    'price'?: number;
    /**
     * اسلاگ
     * @type {string}
     * @memberof SellAdDetail
     */
    'slug'?: string | null;
    /**
     * کد شهر
     * @type {number}
     * @memberof SellAdDetail
     */
    'cityId'?: number;
    /**
     * نام شهر
     * @type {string}
     * @memberof SellAdDetail
     */
    'cityName'?: string | null;
    /**
     * محله
     * @type {number}
     * @memberof SellAdDetail
     */
    'neighbourhoodId'?: number;
    /**
     * نام محله
     * @type {string}
     * @memberof SellAdDetail
     */
    'neighbourhoodName'?: string | null;
    /**
     * کد ساختمان
     * @type {number}
     * @memberof SellAdDetail
     */
    'buildingId'?: number;
    /**
     * نوع ساختمان
     * @type {string}
     * @memberof SellAdDetail
     */
    'type'?: SellAdDetailTypeEnum;
    /**
     * کاربری ساختمان
     * @type {string}
     * @memberof SellAdDetail
     */
    'use'?: SellAdDetailUseEnum;
    /**
     * کد پیگیری
     * @type {string}
     * @memberof SellAdDetail
     */
    'trackingCode'?: string | null;
    /**
     * متراژ ملک
     * @type {number}
     * @memberof SellAdDetail
     */
    'area'?: number;
    /**
     * نوع متراژ
     * @type {boolean}
     * @memberof SellAdDetail
     */
    'areaType'?: boolean;
    /**
     * زیر بنا
     * @type {number}
     * @memberof SellAdDetail
     */
    'foundation'?: number | null;
    /**
     * نوع سند
     * @type {string}
     * @memberof SellAdDetail
     */
    'documentType'?: SellAdDetailDocumentTypeEnum;
    /**
     * شرایط فروش
     * @type {string}
     * @memberof SellAdDetail
     */
    'condition'?: SellAdDetailConditionEnum;
    /**
     * موقعیت جغرافیایی
     * @type {Array<string>}
     * @memberof SellAdDetail
     */
    'direction'?: Array<string> | null;
    /**
     * سال ساخت از 1360 تا کنون
     * @type {string}
     * @memberof SellAdDetail
     */
    'buildingAge'?: string | null;
    /**
     * تعداد اتاق
     * @type {number}
     * @memberof SellAdDetail
     */
    'rooms'?: number;
    /**
     * تعداد طبقات شامل ساختمان بدون طبقه یک طبقه دو طبقه تا...... شصت طبقه
     * @type {number}
     * @memberof SellAdDetail
     */
    'floors'?: number;
    /**
     * طبقه چندم زیر همکف طبقه اول طبقه دوم تا...... طبقه شصتم
     * @type {number}
     * @memberof SellAdDetail
     */
    'floorLevel'?: number;
    /**
     * شماره واحد
     * @type {number}
     * @memberof SellAdDetail
     */
    'unit'?: number;
    /**
     * تعداد واحد شامل در این طبقه تک واحدی دو واحدی سه واحدی چهار واحدی پنج واحدی شش واحد یا بیشتر
     * @type {number}
     * @memberof SellAdDetail
     */
    'unitPerLevel'?: number;
    /**
     * لوکیشن حاوی lat , lon
     * @type {string}
     * @memberof SellAdDetail
     */
    'coordinate'?: string | null;
    /**
     * امتیاز سازه
     * @type {number}
     * @memberof SellAdDetail
     */
    'ranking'?: number;
    /**
     * تاریخ تخلیه
     * @type {string}
     * @memberof SellAdDetail
     */
    'availableDate'?: string | null;
    /**
     * 
     * @type {AddressToReturnDto}
     * @memberof SellAdDetail
     */
    'address'?: AddressToReturnDto;
    /**
     * 
     * @type {FacilityToReturnDto}
     * @memberof SellAdDetail
     */
    'facility'?: FacilityToReturnDto;
    /**
     * امکانات موجود
     * @type {Array<ExistingFacilityDto>}
     * @memberof SellAdDetail
     */
    'existingFacilities'?: Array<ExistingFacilityDto> | null;
    /**
     * آدرس فولدر عکس ها
     * @type {string}
     * @memberof SellAdDetail
     */
    'photoPath'?: string | null;
    /**
     * لیست عکسها
     * @type {Array<string>}
     * @memberof SellAdDetail
     */
    'photos'?: Array<string> | null;
    /**
     * آدرس ویدیوی آگهی  https://www.aparat.com/v/UCj85
     * @type {string}
     * @memberof SellAdDetail
     */
    'video'?: string | null;
    /**
     * ایجاد شده در
     * @type {string}
     * @memberof SellAdDetail
     */
    'createdAt'?: string | null;
    /**
     * ویرایش شده در
     * @type {string}
     * @memberof SellAdDetail
     */
    'updatedAt'?: string | null;
    /**
     * لینک آگهی
     * @type {string}
     * @memberof SellAdDetail
     */
    'link'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SellAdDetail
     */
    'agreedPrice'?: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum SellAdDetailPublishTypeEnum {
    Simple = 'simple',
    Occasion = 'occasion',
    Featured = 'featured'
}
/**
    * @export
    * @enum {string}
    */
export enum SellAdDetailTypeEnum {
    Apartment = 'Apartment',
    Home = 'Home',
    Villa = 'Villa',
    OldHouse = 'OldHouse',
    ResidentialLand = 'ResidentialLand',
    Garden = 'Garden',
    Office = 'Office',
    Shop = 'Shop',
    Clinic = 'Clinic',
    FarmLand = 'FarmLand',
    CommercialLand = 'CommercialLand',
    Store = 'Store',
    IndustrialShed = 'IndustrialShed',
    Workshop = 'Workshop',
    Factory = 'Factory',
    CoastalLand = 'CoastalLand'
}
/**
    * @export
    * @enum {string}
    */
export enum SellAdDetailUseEnum {
    Residential = 'Residential',
    Commercial = 'Commercial',
    LandAndGarden = 'LandAndGarden',
    Industrial = 'Industrial',
    ResidentialProperties = 'ResidentialProperties',
    Apartment = 'Apartment',
    Villa = 'Villa',
    Home = 'Home',
    ResidentialLand = 'ResidentialLand',
    Garden = 'Garden',
    OldHouse = 'OldHouse',
    Farm = 'Farm',
    CommercialLand = 'CommercialLand',
    Office = 'Office',
    Clinic = 'Clinic',
    Store = 'Store',
    Shop = 'Shop',
    IndustrialShed = 'IndustrialShed',
    Factory = 'Factory'
}
/**
    * @export
    * @enum {string}
    */
export enum SellAdDetailDocumentTypeEnum {
    WrittenPromise = 'WrittenPromise',
    Certain = 'Certain',
    Mortgage = 'Mortgage',
    Advocacy = 'Advocacy',
    Endowment = 'Endowment',
    Common = 'Common',
    RightOfBusiness = 'RightOfBusiness',
    Ongoing = 'Ongoing',
    Other = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum SellAdDetailConditionEnum {
    CashSales = 'CashSales',
    Changeable = 'Changeable',
    Leasing = 'Leasing',
    Presell = 'Presell',
    ParticipationInConstruction = 'ParticipationInConstruction'
}


