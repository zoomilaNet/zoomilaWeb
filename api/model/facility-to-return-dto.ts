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
 * @interface FacilityToReturnDto
 */
export interface FacilityToReturnDto {
    /**
     * کد امکانات
     * @type {number}
     * @memberof FacilityToReturnDto
     */
    'facilityId'?: number;
    /**
     * ایجاد شده در
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'createdAt'?: string | null;
    /**
     * ویرایش شده در
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'updatedAt'?: string | null;
    /**
     * حذف شده در
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'deletedAt'?: string | null;
    /**
     * پارکینگ
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'parking'?: FacilityToReturnDtoParkingEnum;
    /**
     * کابینت اشپزخانه
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'kitchenUnit'?: FacilityToReturnDtoKitchenUnitEnum;
    /**
     * کف پوش
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'flooring'?: FacilityToReturnDtoFlooringEnum;
    /**
     * سیستم گرمایشی
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'heatingSystem'?: FacilityToReturnDtoHeatingSystemEnum;
    /**
     * اسانسور دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'lift'?: boolean | null;
    /**
     * انباری دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'storage'?: boolean | null;
    /**
     * تراس دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'teras'?: boolean | null;
    /**
     * کمد دیواری دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'wallCupboard'?: boolean | null;
    /**
     * حیاط دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'yard'?: boolean | null;
    /**
     * راه جدا
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'separate'?: boolean | null;
    /**
     * آب دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'water'?: boolean | null;
    /**
     * برق دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'electricity'?: boolean | null;
    /**
     * گاز دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'gas'?: boolean | null;
    /**
     * خط تلفن دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'landLine'?: boolean | null;
    /**
     * کولر
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'cooler'?: boolean | null;
    /**
     * در ضد سرقت دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'securityDoor'?: boolean | null;
    /**
     * اعلام حریق دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'fireAlarm'?: boolean | null;
    /**
     * دوربین مدار بسته دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'cctv'?: boolean | null;
    /**
     * دزدگیر دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'intruderAlarm'?: boolean | null;
    /**
     * ایفون تصویری دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'iphone'?: boolean | null;
    /**
     * درب ریموتی دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'remoteDoor'?: boolean | null;
    /**
     * نورگیر دارد ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'lightning'?: boolean | null;
    /**
     * پرده دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'curtain'?: boolean | null;
    /**
     * کاغذ دیواری دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'wallpaper'?: boolean | null;
    /**
     * دست شویی دارد یا نه
     * @type {number}
     * @memberof FacilityToReturnDto
     */
    'toilet'?: number | null;
    /**
     * دستشویی فرنگی دارد یا نه
     * @type {number}
     * @memberof FacilityToReturnDto
     */
    'toiletWc'?: number | null;
    /**
     * حمام دارد یا ندارد
     * @type {number}
     * @memberof FacilityToReturnDto
     */
    'bathroom'?: number | null;
    /**
     * وان حمام دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'bath'?: boolean | null;
    /**
     * ابگرمکن
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'waterWarmer'?: boolean | null;
    /**
     * پکیج
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'package'?: boolean | null;
    /**
     * گرمایش مرکزی
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'centralHeating'?: boolean | null;
    /**
     * استخر دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'swimmingPool'?: boolean | null;
    /**
     * سونا دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'sauna'?: boolean | null;
    /**
     * جکوزی دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'jacuzzi'?: boolean | null;
    /**
     * سالن ورزشی دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'gym'?: boolean | null;
    /**
     * لابی دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'lobby'?: boolean | null;
    /**
     * دوبلکس است یا خیر که در مشخصات ملک در اپ جدید حذف شده بود
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'duplex'?: boolean | null;
    /**
     * شومینه دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'fireplace'?: boolean | null;
    /**
     * شوتینگ دارد یا نه
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'shooting'?: boolean | null;
    /**
     * آب نما دارد یا ندارد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'fountain'?: boolean | null;
    /**
     * پنت هوپس که در اپ جدید حذف شده و در نکات کلیدی می توان وارد کرد
     * @type {boolean}
     * @memberof FacilityToReturnDto
     */
    'penthouse'?: boolean | null;
    /**
     * وام دارد یا ندارد
     * @type {string}
     * @memberof FacilityToReturnDto
     */
    'loan'?: string | null;
}

/**
    * @export
    * @enum {string}
    */
export enum FacilityToReturnDtoParkingEnum {
    DoesNotHave = 'DoesNotHave',
    Exclusive = 'Exclusive',
    Annoying = 'Annoying',
    NoAnnoying = 'NoAnnoying'
}
/**
    * @export
    * @enum {string}
    */
export enum FacilityToReturnDtoKitchenUnitEnum {
    DoesNotHave = 'DoesNotHave',
    Mdf = 'MDF',
    Metal = 'Metal',
    Membrane = 'Membrane'
}
/**
    * @export
    * @enum {string}
    */
export enum FacilityToReturnDtoFlooringEnum {
    Stone = 'Stone',
    Parquet = 'Parquet',
    Ceramic = 'Ceramic',
    Carpet = 'Carpet',
    Mosaic = 'Mosaic'
}
/**
    * @export
    * @enum {string}
    */
export enum FacilityToReturnDtoHeatingSystemEnum {
    Package = 'Package',
    Heater = 'Heater',
    CentralHeating = 'CentralHeating',
    UnderFloorHeating = 'UnderFloorHeating',
    Radiator = 'Radiator',
    Split = 'Split'
}


