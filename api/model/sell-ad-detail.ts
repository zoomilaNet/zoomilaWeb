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
 * @interface SellAdDetail
 */
export interface SellAdDetail {
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'buildingId'?: number;
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'price'?: number;
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'trackingCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'slug'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'publishType'?: SellAdDetailPublishTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'cityId'?: number;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'cityName'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'neighbourhoodId'?: number;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'neighbourhoodName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'buildingType'?: SellAdDetailBuildingTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'area'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SellAdDetail
     */
    'areaType'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'rooms'?: number;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'photoPath'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SellAdDetail
     */
    'photos'?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof SellAdDetail
     */
    'agencyId'?: number;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'agencyName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'adviserName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'adviserPhone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'agencyPhone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'ranking'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'documentType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'floor'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'floorLevel'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'condition'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'buildingAge'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SellAdDetail
     */
    'keyFeatures'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'cordinate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SellAdDetail
     */
    'link'?: string | null;
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
export enum SellAdDetailBuildingTypeEnum {
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


