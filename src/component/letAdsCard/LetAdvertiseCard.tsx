import { LetAd, LetAdPublishTypeEnum } from "../../../api";
import Image from "next/image";
import Slider from "../../slider/slider";
import Seperator from "../../../models/seperator";
import React from "react";
import AddDash from "../../../models/addDash";

function LetAdvertiseCard({ dataLet }: { dataLet: LetAd }) {
    let showSlider: any;
    showSlider = dataLet!.photos!.length == 0 ? <div className="w-full h-full bg-no_image flex justify-center items-center"><Image src="/image/Zoomila_Logo.svg" alt="آگهی بدون عکس" width="197px" height="51px" /></div> : <Slider basePath={dataLet!.photoPath as string} photos={dataLet!.photos as string[]} photoSlug={dataLet!.slug as string} />
    return <div className="w-full h-auto md:w-4/5 lg:container grid grid-rows-2 lg:flex lg:flex-row-reverse border border-black my-2">
        <div className="relative aspect-w-4 aspect-h-3 lg:aspect-w-3 lg:aspect-h-1 lg:w-1/2 row-start-1 ">
            <div>
                {showSlider}
            </div>
        </div>
        <div className="w-full lg:w-1/2 aspect-w-4 aspect-h-3 lg:aspect-w-3 lg:aspect-h-1 row-start-2 bg-white">
            <div className="flex flex-col items-start justify-between">
            <p className="flex items-center text-xs md:text-sm xl:text-base px-2">آگهی جدید</p>
                <div className="w-full my-1 md:my-2 xl:my-3 tracking-tight px-2">
                    <a href={"/trp-" + dataLet.letId + "/" + AddDash(dataLet.slug!)} className="col-span-4 flex flex-row items-center">
                        <h2 className="ml-2 font-iransansbold text-ads_title text-base md:text-2xl">{dataLet.slug}</h2>
                        <p className="text-gray_text text-xs md:text-base">{dataLet.cityName}</p>
                    </a>
                    
                </div>
                <div className="w-full flex flex-row items-center lg:mb-2 text-xs md:text-sm xl:text-lg px-2">
                    طبقه سوم/ دو واحدی
                </div>
                <div className="w-full flex flex-row items-center my-1 lg:mb-2 text-xs md:text-sm xl:text-lg px-2">
                    پارکینگ اختصاصی-آسانسور دارد
                </div>
                <div className="w-full flex flex-row items-center lg:mb-2 text-sm md:text-base xl:text-lg px-2">
                    <img src="/image/Location.svg" alt="icon" className="w-4 h-4" />
                    <p>آدرس </p>
                </div>
                <div className="my-1 lg:mb-2 text-xs md:text-base xl:text-lg text-gray_text px-2">توضیحات</div>
                <div className="w-full flex flex-row justify-between items-center text-sm md:text-lg my-2 md:my-4 lg:mb-2 px-2">
                    <div className="flex flex-row items-center">
                        <Image src={dataLet.agencyLogo == null ? "/image/aseman.png" : dataLet.agencyLogo} alt="agencylogo" width="60px" height="60px" className="border w-12 h-12 lg:w-16 lg:h-16 object-cover rounded ml-4" />
                        <p >{dataLet.agencyName == null ? "املاک آسمان" : dataLet.agencyName}</p>
                    </div>
                    <div>
                        {dataLet.publishType != LetAdPublishTypeEnum.Simple ? <span className={dataLet.publishType == LetAdPublishTypeEnum.Featured ? "bg-featured_ads_tag p-2 rounded ml-1 md:ml-3 text-black" : dataLet.publishType == LetAdPublishTypeEnum.Occasion ? "bg-featured_ads_tag p-2 rounded ml-1 md:ml-3 text-black" : "p-2 rounded ml-1 md:ml-3 text-black"}>{dataLet.publishType == LetAdPublishTypeEnum.Featured ? "فوری" : dataLet.publishType == LetAdPublishTypeEnum.Occasion ? "ویژه" : ""}</span> : null}
                        <button id={"SMSButton" + dataLet.letId} className="py-2  px-6 lg:px-12 text-sm lg:text-lg rounded ml-1 md:ml-3 text-white bg-green_accent">پیامک</button>
                        <button id={"CallButton" + dataLet.letId} className="py-2  px-6 lg:px-12 text-sm lg:text-lg rounded text-white bg-green_accent">تماس</button>
                    </div>
                </div>
                <div className={dataLet.publishType == LetAdPublishTypeEnum.Simple ? "bg-simple_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black" : dataLet.publishType != LetAdPublishTypeEnum.Featured ? "featured_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black" : "occasion_ads_tag w-full h-12 md:h-16 flex flex-row justify-between items-center px-2 text-black"}>
                    <div className="flex flex-row items-center text-base lg:text-lg">رهن: <p className="ml-4 font-semibold">{dataLet.deposit == "0" && dataLet.rent == "0" ? "توافقی" : Seperator(dataLet.deposit!) + " تومان"}</p>اجاره: <p className="font-semibold">{dataLet.deposit == "0" && dataLet.rent == "0" ? "توافقی" : Seperator(dataLet.rent!) + " تومان"}</p></div>
                </div>
            </div>
        </div>

    </div>
}
export default LetAdvertiseCard