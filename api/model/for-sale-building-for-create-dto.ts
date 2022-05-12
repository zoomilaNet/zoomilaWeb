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


import { AddressForCreateDto } from './address-for-create-dto';
import { FacilityForCreateDto } from './facility-for-create-dto';
import { LandlordForCreateDto } from './landlord-for-create-dto';

/**
 * اطلاعات ساختمان جهت ثبت
 * @export
 * @interface ForSaleBuildingForCreateDto
 */
export interface ForSaleBuildingForCreateDto {
    /**
     * محله
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'neighbourhoodId'?: number;
    /**
     * (نوع ملک شامل  املاک مسکونی {خانه آپارتمان ویلا کلنگی} املاک تجاری {دفتر کار مغازه مطب} زمین و باغ {زمین مسکونی  زمین زراعی زمین تجاری باغ زمین ساحلی} صنعتی {انبار سوله کارگاه کارخانه
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'type'?: ForSaleBuildingForCreateDtoTypeEnum;
    /**
     * قیمت توافقی که حذف شده و به نوع معامله انتقال پیدا کرده در اپ جدید
     * @type {boolean}
     * @memberof ForSaleBuildingForCreateDto
     */
    'agreedPrice'?: boolean;
    /**
     * کاربری
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'use'?: ForSaleBuildingForCreateDtoUseEnum;
    /**
     * متراژ ملک
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'area'?: number;
    /**
     * نوع متراژ
     * @type {boolean}
     * @memberof ForSaleBuildingForCreateDto
     */
    'areaType'?: boolean;
    /**
     * زیر بنا
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'foundation'?: number | null;
    /**
     * نوع سند  شامل قطعی قولنامه رهنی وکالتی اوقافی مشاع سرقفلی در دست اقدام سایر
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'documentType'?: ForSaleBuildingForCreateDtoDocumentTypeEnum;
    /**
     * شرایط فروش
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'condition'?: ForSaleBuildingForCreateDtoConditionEnum;
    /**
     * موقعیت جغرافیایی شامل شمالی جنوبی شرقی غربی شمالی جنوبی شمالی غربی شمالی شرقی جنوبی غربی جنوبی شرقی شمالی جنوبی  غربی شمالی جنوبی شرقی
     * @type {Array<string>}
     * @memberof ForSaleBuildingForCreateDto
     */
    'direction'?: Array<string> | null;
    /**
     * سال ساخت از 1360 تا کنون
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'buildingAge'?: string | null;
    /**
     * تعداد اتاق
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'rooms'?: number | null;
    /**
     * تعداد طبقات شامل ساختمان بدون طبقه یک طبقه دو طبقه تا...... شصت طبقه
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'floors'?: number | null;
    /**
     * طبقه چندم زیر همکف طبقه اول طبقه دوم تا...... طبقه شصتم
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'floorLevel'?: number | null;
    /**
     * شماره واحد
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'unit'?: number | null;
    /**
     * تعداد واحد شامل در این طبقه تک واحدی دو واحدی سه واحدی چهار واحدی پنج واحدی شش واحد یا بیشتر
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'unitPerLevel'?: number | null;
    /**
     * لوکیشن حاوی lat , lan
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'coordinate'?: string | null;
    /**
     * rank
     * @type {number}
     * @memberof ForSaleBuildingForCreateDto
     */
    'ranking'?: number | null;
    /**
     * تاریخ تخلیه
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'availableDate'?: string | null;
    /**
     * آدرس ملک
     * @type {Array<AddressForCreateDto>}
     * @memberof ForSaleBuildingForCreateDto
     */
    'address'?: Array<AddressForCreateDto> | null;
    /**
     * 
     * @type {FacilityForCreateDto}
     * @memberof ForSaleBuildingForCreateDto
     */
    'facility'?: FacilityForCreateDto;
    /**
     * 
     * @type {LandlordForCreateDto}
     * @memberof ForSaleBuildingForCreateDto
     */
    'landlord'?: LandlordForCreateDto;
    /**
     * آدرس ویدیوی آگهی  https://www.aparat.com/v/UCj85
     * @type {string}
     * @memberof ForSaleBuildingForCreateDto
     */
    'video'?: string | null;
}

/**
    * @export
    * @enum {string}
    */
export enum ForSaleBuildingForCreateDtoTypeEnum {
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
export enum ForSaleBuildingForCreateDtoUseEnum {
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
export enum ForSaleBuildingForCreateDtoDocumentTypeEnum {
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
export enum ForSaleBuildingForCreateDtoConditionEnum {
    CashSales = 'CashSales',
    Changeable = 'Changeable',
    Leasing = 'Leasing',
    Presell = 'Presell',
    ParticipationInConstruction = 'ParticipationInConstruction'
}


