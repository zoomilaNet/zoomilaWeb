import React from "react";
import {SellAdPublishTypeEnum} from "../../../api";

function ProjectCard(){
    return <div className="w-full h-auto md:w-4/5 lg:w-2/5 flex flex-col border border-black my-2">
        <div className="relative aspect-w-4 aspect-h-3">
            <div className="w-full h-full bg-no_image flex justify-center items-center"><img src="/image/Zoomila_Logo.svg" alt="آگهی بدون عکس"/></div>
        </div>
        <div className="w-full h-auto flex flex-col px-2">
            <div className=" flex flex-row justify-between items-center my-2 md:my-4 tracking-tight">
                <div className="flex flex-row items-center">
                    <h2 className="ml-2 font-iransansbold text-ads_title text-base md:text-2xl">ویلای 1000 متری کردان</h2>
                    <p className="text-gray_text text-xs md:text-base">در حال ساخت</p>
                </div>
            </div>
            <div className="my-1 text-xs md:text-base text-gray_text">منطقه چهارباغ (کردان جنوبی) ملک هزارمتری توسط شرکت البرز ویلا بامهندسین مجرب مطرح کشوری</div>
            <div className=" flex flex-row justify-between items-center text-sm md:text-lg my-2 md:my-4">

                    <button id="SMSButton" className="p-3 w-5/12 lg:p-4 text-base lg:text-2xl rounded ml-1 md:ml-3 text-white bg-green_accent">تماس</button>
                    <button id="CallButton" className="p-3 w-5/12 lg:p-4 text-base lg:text-2xl rounded text-white bg-hf_color">مشاهده کامل آگهی</button>

            </div>
        </div>
    </div>
}
export default ProjectCard