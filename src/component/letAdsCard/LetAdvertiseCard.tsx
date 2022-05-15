import {LetAd, LetAdPublishTypeEnum} from "../../../api";
import Image from "next/image";
import Slider from "../../slider/slider";
import Seperator from "../../../models/seperator";
import React from "react";
import AddDash from "../../../models/addDash";

function LetAdvertiseCard({dataLet}:{dataLet:LetAd}){
    let showSlider:any;
        showSlider=dataLet!.photos!.length==0?<div className="w-full h-full bg-no_image flex justify-center items-center"><Image src="/image/Zoomila_Logo.svg" alt="آگهی بدون عکس" width="197px" height="51px"/></div>:<Slider basePath={dataLet!.photoPath as string} photos={dataLet!.photos as string[]} photoSlug={dataLet!.slug as string}/>
    return <a href={"/trp-"+dataLet.letId+"/"+AddDash(dataLet.slug!)} className="w-full h-auto md:w-4/5 lg:w-2/5 flex flex-col border border-black my-2">
        <div className="relative aspect-w-4 aspect-h-3">
            <div>
                {showSlider}
            </div>
        </div>
        <div className="w-full h-auto flex flex-col px-2 bg-white">
            <div className=" flex flex-row justify-between items-center my-2 md:my-4 tracking-tight">
                <div className="flex flex-row items-center">
                    <h2 className="ml-2 font-iransansbold text-ads_title text-base md:text-2xl">{dataLet.slug}</h2>
                    <p className="text-gray_text text-xs md:text-base">{dataLet.cityName}</p>
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
                    <Image src={dataLet.agencyLogo==null?"/image/aseman.png":dataLet.agencyLogo} alt="agencylogo" width="60px" height="60px" className="border rounded ml-1"/>
                    <p >{dataLet.agencyName==null?"املاک آسمان":dataLet.agencyName}</p>
                </div>
                <div>
                    {dataLet.publishType!= LetAdPublishTypeEnum.Simple?<span className={dataLet.publishType== LetAdPublishTypeEnum.Featured?"bg-featured_ads_tag p-2 rounded ml-1 md:ml-3 text-black":dataLet.publishType== LetAdPublishTypeEnum.Occasion?"bg-featured_ads_tag p-2 rounded ml-1 md:ml-3 text-black":"p-2 rounded ml-1 md:ml-3 text-black"}>{dataLet.publishType== LetAdPublishTypeEnum.Featured?"فوری":dataLet.publishType== LetAdPublishTypeEnum.Occasion?"ویژه":""}</span>:null}
                    <button id={"SMSButton"+dataLet.letId} className="p-3 lg:p-4 text-sm lg:text-lg rounded ml-1 md:ml-3 text-white bg-green_accent">پیامک</button>
                    <button id={"CallButton"+dataLet.letId} className="p-3 lg:p-4 text-sm lg:text-lg rounded text-white bg-green_accent">تماس</button>
                </div>
            </div>
        </div>
        <div className={dataLet.publishType== LetAdPublishTypeEnum.Simple?"bg-simple_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black":dataLet.publishType!= LetAdPublishTypeEnum.Featured? "featured_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black":"occasion_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black"}>
            <div className="flex flex-row items-center text-xl">رهن: <p className="ml-4 font-semibold">{dataLet.deposit=="0" && dataLet.rent=="0"? "توافقی":Seperator(dataLet.deposit!)+" تومان"}</p>اجاره: <p className="font-semibold">{dataLet.deposit=="0" && dataLet.rent =="0"? "توافقی": Seperator(dataLet.rent!)+" تومان"}</p></div>
        </div>
    </a>
}
export default LetAdvertiseCard