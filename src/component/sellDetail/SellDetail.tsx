import {SellAdDetail, SystemApi} from "../../../api";
import React, {useEffect, useState} from "react";
import cityOfProvince from "../../../public/ProvincesAndCities.json";
import Image from "next/image";
import Slider from "../../slider/slider";
import buildingTypeJson from "../../../public/BuildinType.json"
import dynamic from "next/dynamic";
import LatLngExtract from "../../../models/latlngextract";
export default function SellDetail({data}:{data:SellAdDetail}){
    const [showImage, setShowImage] = useState(false);
    const [provinceName,setProvinceName]=useState<string>("");
    const [buildingType,setBuildingType]=useState<string>("");
    const [conditionDeal,setConditionDeal]=useState<string>("");
    const [documentType,setDocumentType]=useState<string>("");
    const [parking,setParking]=useState<string>("");
    const [kitchenUnit,setKitchenUnit]=useState<string>("");
    const [flooring,setFlooring]=useState<string>("");
    const [heatingSystem,setHeatingSystem]=useState<string>("");
    const [direction,setDirection]=useState<string>("");
    const showMapHandler = () => {
        setShowImage(true);
    }
    const MapWithNoSSR = dynamic(() => import('../map/zoomilaMap'), {
        ssr: false,
    })
    useEffect(() => {
        cityOfProvince.map(item => {
            if (item.CityId == data.cityId) {
                setProvinceName(  item.ProvinceName.toString())
            }
        });
        buildingTypeJson.map(item=>{
            if (item.key == data.type) {
                setBuildingType(  item.value.toString())
            }
        });
        let tempDirection:string="";
        if(data.direction?.length!>0){
            data.direction?.map(item=>{tempDirection=item+" "+tempDirection})
            setDirection(tempDirection);
        }
        const loadingData=async()=> {
            const detailsEnums:SystemApi=new SystemApi();
            let detailsDataEnums=await detailsEnums.apiSystemResourceEnumEGet("ForSaleCondition");
            detailsDataEnums.data.map(item=>{if(item.key==data.condition){setConditionDeal(item.value!)}});
            detailsDataEnums=await detailsEnums.apiSystemResourceEnumEGet("BuildingDocumentType");
            detailsDataEnums.data.map(item=>{if(item.key==data.documentType){setDocumentType(item.value!)}});
            detailsDataEnums=await detailsEnums.apiSystemResourceEnumEGet("Parking");
            detailsDataEnums.data.map(item=> {if (item.key==data.facility?.parking) {setParking(item.value!)}});
            detailsDataEnums=await detailsEnums.apiSystemResourceEnumEGet("KitchenUnit");
            detailsDataEnums.data.map(item=>{if(item.key==data.facility?.kitchenUnit){setKitchenUnit(item.value!)}});
            detailsDataEnums=await detailsEnums.apiSystemResourceEnumEGet("Flooring");
            detailsDataEnums.data.map(item=>{if (item.key==data.facility?.flooring){setFlooring(item.value!)}});
            detailsDataEnums=await detailsEnums.apiSystemResourceEnumEGet("HeatingSystem");
            detailsDataEnums.data.map(item=>{if (item.key==data.facility?.heatingSystem){setHeatingSystem(item.value!)}})
        }
        loadingData();
    }, []);
    let showSlider:any;
    showSlider=data!.photos!.length==0?<div className="w-full h-full bg-no_image flex justify-center items-center"><Image src="/image/Zoomila_Logo.svg" alt="آگهی بدون عکس" width="197px" height="51px"/></div>:<Slider basePath={data!.photoPath as string} photos={data!.photos as string[]} photoSlug={data!.slug as string}/>
    return <div className="w-full h-auto md:w-4/5 lg:w-2/5 flex flex-col border border-black my-2">
        <div className="relative aspect-w-4 aspect-h-3 ">
            <div>
                {showSlider}
            </div>
        </div>
        <div className="w-full h-auto flex flex-col">
            <div className=" flex flex-row justify-between items-center mt-4 tracking-tight px-2">
                <div className="flex flex-row items-center">
                    <h2 className="ml-2 font-iransansbold  text-ads_title text-lg md:text-3xl">
                        {data.slug}
                    </h2>
                    <p className="text-gray_text text-sm md:text-base">{data.cityName}</p>
                </div>
                <p className="text-xs md:text-base font-medium">آگهی جدید</p>
            </div>

            <div className="bg-gray-200 p-2 flex flex-row justify-between items-center my-6">

                    <div>
                        <span>قیمت کل :</span>
                        <span className="font-semibold text-lg md:text-2xl mx-2">{data.price==0?"توافقی":data.price}</span>
                        {data.price==0?null:<span className="font-semibold text-lg md:text-2xl">تومان</span>}
                    </div>


                <span className="font-iransansbold">{data.rooms==0?"خواب ندارد":Number(data.rooms!)+" خوابه"}</span>
            </div>

            <div className="bg-gray-100 rounded mx-2 text-sm md:text-lg px-2 py-3">
                <div className=" w-full flex flex-row justify-between items-center ">
                    <div className="flex flex-row items-center">
                        <img
                            src={data.agencyLogo==null?"/image/aseman.png":data.agencyLogo}
                            alt="agencelogo"
                            className="border rounded ml-2 w-10 md:w-14"
                        />
                        <p>{data.agencyName==null||data.agencyName==""?"املاک آسمان":data.agencyName}</p>
                    </div>
                    <div className="font-iransansmedium">مشاهده آگهی های این آژانس</div>
                </div>
                <div className="mt-3">کد آگهی: {data.sellId}</div>
            </div>

            <div className="w-full">
                <div className="mx-2 flex flex-row justify-between items-center text-sm md:text-lg font-semibold my-6 text-white">
                    <button className="p-2 w-3/12 h-14 rounded bg-green_accent flex flex-row justify-center  items-center">
                        <img src="/image/call.svg" alt="" width="18px" className="ml-2" />
                        <p className="font-iransansmedium">تماس</p>
                    </button>
                    <button className="p-2 w-45% h-14 rounded bg-green_accent flex flex-row justify-center items-center">
                        <img src="/image/share.svg" alt="" width="22px" className="ml-2" />
                        <p className="text-sm font-iransansmedium md:text-lg">اشتراک گذاری آگهی</p>
                    </button>
                    <button className="p-2 w-3/12 h-14 rounded bg-green_accent flex flex-row justify-center items-center">
                        <img src="/image/sms.svg" alt="" width="20px" className="ml-2" />
                        <p className="font-iransansmedium">پیامک</p>
                    </button>
                </div>
            </div>

            <div className="px-2 flex flex-row items-start text-base">
                <img src="/image/Location.svg" alt="" />
                <span className="flex flex-row mr-1">
                                        <p>آدرس:</p>
                                        <span className="text-sm md:text-lg text-justify font-iransansbold mr-1 flex flex-row space-x-2"><p className="ml-2">استان:</p><p>{provinceName}</p><p>شهر: </p><p>{data.cityName}</p><p>محله: </p><p>{data.neighbourhoodName}</p></span>
                                    </span>
            </div>

            <div className="px-2 my-6">
                <div className="rounded-t h-12 bg-hf_color text-white font-medium text-xl flex flex-col justify-center items-center"><p>مشخصات آگهی</p></div>
                <div className="rounded-b p-2 bg-gray-100 flex flex-col justify-start space-y-2">
                    <span className="flex flex-row items-center"><p className="ml-1">نوع ملک:</p><p className="font-semibold">{buildingType}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">متراژ:</p><p className="font-semibold">{data.area==null?"-":data.area+" متر"}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">شرایط معامله:</p><p className="font-semibold">{conditionDeal}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">سال ساخت:</p><p className="font-semibold">{data.buildingAge==null?"-":data.buildingAge}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">طبقه:</p><p className="font-semibold">{data.floorLevel==0?"-":data.floorLevel}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">کل طبقات شاختمان:</p><p className="font-semibold">{data.floors==0?"-":data.floors}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">تعداد واحد در هر طبقه:</p><p className="font-semibold">{data.unit==0?"-":data.unit}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">امتیاز سازه:</p><p className="font-semibold">{data.ranking==0?"-":data.ranking}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">نوع سند:</p><p className="font-semibold">{documentType}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">زیربنا:</p><p className="font-semibold">{data.foundation==null?"-":data.foundation+" متر"}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">جهت ملک:</p><p className="font-semibold">{data.direction==null||data.direction.length==0?"-":direction}</p></span>
                    <span className="flex flex-row items-center"><p className="ml-1">وام:</p><p className="font-semibold">{data.facility?.loan==null?"ندارد":data.facility?.loan}</p></span>
                </div>
            </div>

            <div className="px-2">
                <div className="rounded-t h-12 bg-hf_color text-white font-medium text-xl flex flex-col justify-center items-center"><p>امکانات</p></div>
                <div className="rounded-b p-2 bg-gray-100 grid grid-cols-2 gap-y-2 gap-x-3">
                    {flooring!=""?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">کف پوش {flooring}</p></div>:null}
                    {heatingSystem!=""?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">{heatingSystem}</p></div>:null}
                    {data.facility?.separate?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">راه جدا</p></div>:null}
                    {data.facility?.yard?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">حیاط</p></div>:null}
                    {data.facility?.swimmingPool?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">استخر</p></div>:null}
                    {data.facility?.cctv?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">دوربین مداربسته</p></div>:null}
                    {data.facility?.securityDoor?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">درب ضد سرقت</p></div>:null}
                    {data.facility?.intruderAlarm?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">دزدگیر</p></div>:null}
                    {data.facility?.iphone?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">آیفون تصویری</p></div>:null}
                    {parking!=""?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">{parking=="ندارد"?"پارکینگ ندارد":parking}</p></div>:null}
                    {kitchenUnit!=""&&kitchenUnit!="ندارد"?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">کابینت {kitchenUnit}</p></div>:null}
                    {data.facility?.lobby?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">لابی</p></div>:null}
                    {data.facility?.jacuzzi?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">جکوزی</p></div>:null}
                    {data.facility?.sauna?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">سونا</p></div>:null}
                    {data.facility?.teras?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">تراس</p></div>:null}
                    {data.facility?.gym?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">سالن ورزشی</p></div>:null}
                    {data.facility?.fireAlarm? <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">اعلام حریق</p></div>:null}
                    {data.facility?.duplex?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">دوبلکس</p></div>:null}
                    {data.facility?.water?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">آب</p></div>:null}
                    {data.facility?.electricity?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">برق</p></div>:null}
                    {data.facility?.gas?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">گاز</p></div>:null}
                    {data.facility?.landLine?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">تلفن</p></div>:null}
                    {data.facility?.lightning?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">نورگیر</p></div>:null}
                    {data.facility?.fireplace?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">شومینه</p></div>:null}
                    {data.facility?.shooting?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">شوتینگ</p></div>:null}
                    {data.facility?.curtain?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">پرده</p></div>:null}
                    {data.facility?.toilet?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">توالت ایرانی</p></div>:null}
                    {data.facility?.toiletWc?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">توالت فرنگی</p></div>:null}
                    {data.facility?.bathroom?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">حمام</p></div>:null}
                    {data.facility?.bath?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">وان</p></div>:null}
                    {data.facility?.lift?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">آسانسور</p></div>:null}
                    {data.facility?.storage?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">انباری</p></div>:null}
                    {data.facility?.wallCupboard?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">کمد دیواری</p></div>:null}
                    {data.facility?.wallpaper?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">کاغذ دیواری</p></div>:null}
                    {data.facility?.remoteDoor?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">درب ریموت</p></div>:null}
                    {data.facility?.cooler?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">کولر</p></div>:null}
                    {data.facility?.fountain?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">آبنما</p></div>:null}
                    {data.facility?.penthouse?<div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt=""/><p
                        className="font-medium mr-1">پنت هاوس</p></div>:null}
                </div>
            </div>

            <div className="px-2 my-6">
                <div className="rounded-t h-12 bg-hf_color text-white font-medium text-xl flex flex-col justify-center items-center"><p>توضیحات</p></div>
                <div className="rounded-b p-2 bg-gray-100 grid grid-cols-2 gap-y-2 gap-x-3">
                    <p className="text-gray_text inline-block ml-1">{data.description}</p>
                </div>
            </div>

            <div className="p-2">
                {showImage? <MapWithNoSSR latlng={LatLngExtract(data.coordinate!)}/>:<img src="/image/map.jpg" alt="" className="w-full h-auto" onClick={showMapHandler}/> }
            </div>

        </div>
    </div>
}