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
 * @interface LetAd
 */
export interface LetAd {
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'letId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'deposit'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'rent'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'publishType'?: LetAdPublishTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'neighbourhoodId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'neibourhoodName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'buildingType'?: LetAdBuildingTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'area'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LetAd
     */
    'areaType'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'rooms'?: number;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'photoPath'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LetAd
     */
    'photos'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'publishedAt'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'cityId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'cityName'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'buildingId'?: number;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'trackingCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'slug'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'agencyId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'agencyName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'agencyLogo'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LetAd
     */
    'adviserId'?: number;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'adviserName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'createdAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LetAd
     */
    'link'?: string | null;
}

export const LetAdPublishTypeEnum = {
    Simple: 'simple',
    Occasion: 'occasion',
    Featured: 'featured'
} as const;

export type LetAdPublishTypeEnum = typeof LetAdPublishTypeEnum[keyof typeof LetAdPublishTypeEnum];
export const LetAdBuildingTypeEnum = {
    Apartment: 'Apartment',
    Home: 'Home',
    Villa: 'Villa',
    OldHouse: 'OldHouse',
    ResidentialLand: 'ResidentialLand',
    Garden: 'Garden',
    Office: 'Office',
    Shop: 'Shop',
    Clinic: 'Clinic',
    FarmLand: 'FarmLand',
    CommercialLand: 'CommercialLand',
    Store: 'Store',
    IndustrialShed: 'IndustrialShed',
    Workshop: 'Workshop',
    Factory: 'Factory',
    CoastalLand: 'CoastalLand'
} as const;

export type LetAdBuildingTypeEnum = typeof LetAdBuildingTypeEnum[keyof typeof LetAdBuildingTypeEnum];


