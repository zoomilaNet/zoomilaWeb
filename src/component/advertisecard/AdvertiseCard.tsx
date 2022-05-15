import React from 'react';
import {LetAd, SellAd, SellAdPublishTypeEnum} from "../../../api";
import Slider from "../../slider/slider";
import Seperator from '../../../models/seperator';
import Image from "next/image";
import AddDash from "../../../models/addDash";
function AdvertiseCard({ dataSell}:{dataSell: SellAd }) {
    let showSlider:any;
         showSlider=dataSell!.photos!.length==0?<div className="w-full h-full bg-no_image flex justify-center items-center"><Image src="/image/Zoomila_Logo.svg" alt="آگهی بدون عکس" width="197px" height="51px"/></div>:<Slider basePath={dataSell!.photoPath as string} photos={dataSell!.photos as string[]} photoSlug={dataSell!.slug as string}/>
    return <a href={"/fsp-"+dataSell.sellId+"/"+AddDash(dataSell.slug!)} className="w-full h-auto md:w-4/5 lg:w-2/5 flex flex-col border border-black my-2">
        <div className="relative aspect-w-4 aspect-h-3">
            <div>
                {showSlider}
            </div>
        </div>
        <div className="w-full h-auto flex flex-col px-2 bg-white">
            <div className=" flex flex-row justify-between items-center my-2 md:my-4 tracking-tight">
                <div className="flex flex-row items-center">
                    <h2 className="ml-2 font-iransansbold text-ads_title text-base md:text-2xl">{dataSell.slug}</h2>
                    <p className="text-gray_text text-xs md:text-base">{dataSell.cityName}</p>
                </div>
                <p className="text-xs md:text-base">آگهی جدید</p>
            </div>
            <div className="flex flex-row items-center my-2 md:text-lg">
                <img src="/image/Location.svg" alt="icon" className="w-4 h-4"/>
                <p>آدرس </p>
            </div>
            <div className="my-1 text-xs md:text-base text-gray_text">توضیحات</div>
            <div className="flex flex-row justify-between items-center text-sm md:text-lg my-2 md:my-4">
                <div className="flex flex-row items-center">
                    <img src={dataSell.agencyLogo==null?"/image/aseman.png":dataSell.agencyLogo} alt="agencylogo"  className="border w-12 h-12 lg:w-20 lg:h-20 object-cover rounded ml-4"/>
                    <p >{dataSell.agencyName==null?"املاک آسمان":dataSell.agencyName}</p>
                </div>
                <div>
                    {dataSell.publishType!= SellAdPublishTypeEnum.Simple?<span className={dataSell.publishType== SellAdPublishTypeEnum.Featured?"bg-featured_ads_tag p-2 rounded ml-1 md:ml-3 text-black":dataSell.publishType== SellAdPublishTypeEnum.Occasion?"bg-featured_ads_tag p-2 rounded ml-1 md:ml-3 text-black":"p-2 rounded ml-1 md:ml-3 text-black"}>{dataSell.publishType== SellAdPublishTypeEnum.Featured?"فوری":dataSell.publishType== SellAdPublishTypeEnum.Occasion?"ویژه":""}</span>:null}
                    <button id={"SMSButton"+dataSell.sellId} className="p-3 lg:p-4 text-sm lg:text-lg rounded ml-1 md:ml-3 text-white bg-green_accent">پیامک</button>
                    <button id={"CallButton"+dataSell.sellId} className="p-3 lg:p-4 text-sm lg:text-lg rounded text-white bg-green_accent">تماس</button>
                </div>
            </div>
        </div>
        <div className={dataSell.publishType== SellAdPublishTypeEnum.Simple?"bg-simple_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black":dataSell.publishType!= SellAdPublishTypeEnum.Featured? "featured_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black":"occasion_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black"}>
            <div className="flex flex-row items-center text-xl">قیمت کل: <p className=" font-semibold mr-2"> {dataSell.price=="0"? "توافقی":Seperator( (dataSell.price)?.toString()!)+" تومان"}</p></div>
        </div>
    </a>
}
export default AdvertiseCard