import React from "react";
import {GetServerSideProps} from "next";
import {CityDto, ClientsApi, CountryApi, LetAd, NeighbourhoodDto, SellAd, SystemApi} from "../api";
import AdvertiseCard from "../src/component/advertisecard/AdvertiseCard";
import cityOfProvince from "../public/ProvincesAndCities.json";
import DeleteDash from "../models/deleteDash";
import Pagination from "../src/component/pagination/pagination";
export const getServerSideProps: GetServerSideProps = async (context) => {
    let path:string[]= context.params!.slug! as string[];
    const fetchAdvertiseList:ClientsApi=new  ClientsApi();
    let data:any;
    let cityId:number=107;
    let neighbourhood:number[]=[];
    let buildingTypeList:string[]=[];
    let currentPage:number=1;
    let listTitle:string="";
    let findCity:CityDto={};
    let enteredPathCity:string="";
    let isSellOrNot:boolean=true;
    let totalPageOfAds:number=0;

    const setCityInURL= ()=>{
        cityOfProvince.forEach(city=>{
            if( city.CityName===enteredPathCity){
                findCity.id=city.CityId as number;
                findCity.name=city.CityName as string;
            }
        });
        cityId=findCity.id as number;
    };
    if(path.length==3){
        enteredPathCity=DeleteDash(path[2].toString());
        setCityInURL();
    }else if (path.length==4){
        enteredPathCity=DeleteDash(path[3].toString());
        setCityInURL();
        let enteredPathNeighbourhood:string="";
        enteredPathNeighbourhood=DeleteDash(path[2].toString());
        let countriApi:CountryApi=new CountryApi();
        let neighbourhoodOfCity=await countriApi.apiCountryNeighbourhoodsCityCityIdGet(cityId,1,500);
        neighbourhoodOfCity.data.data?.data?.forEach(item=>{
            if(item.name==enteredPathNeighbourhood){
            neighbourhood[0]=(Number(item.id));
        }});
    }
    if(path[1]!="املاک"){
        const buildingType: SystemApi = new SystemApi();
        const buildingTypeLs = await buildingType.apiSystemResourceEnumEGet("BuildingType");
        let selectedtBuilding:string="";
        buildingTypeLs.data.map(item=>{
            if (item.value==DeleteDash(path[1])){
                selectedtBuilding=item.key!;
            }
        })
        buildingTypeList.push(selectedtBuilding)
    }
    if (context.query.page != null && Number(context.query.page)>1){
        currentPage=Number(context.query.page);
    }

if(findCity != null){
    cityId=findCity.id as number;
}
    if(path[0]==="خرید-فروش" ){
            data =await  fetchAdvertiseList.apiClientsAdsSellGet(cityId,neighbourhood,buildingTypeList,currentPage,20);
            isSellOrNot=true;
            totalPageOfAds=Number(data.data.totalPages);
        listTitle="خرید"+" "+"ملک"+" "+"در "+findCity.name;
    }else if(path[0]==="رهن-اجاره"){
            data=await  fetchAdvertiseList.apiClientsAdsLetGet(cityId,neighbourhood,buildingTypeList,currentPage,20);
        totalPageOfAds=Number(data.data.totalPages);
            isSellOrNot=false;
        listTitle="اجاره"+" "+"ملک"+" "+"در "+findCity.name;
    }else {
        data =await  fetchAdvertiseList.apiClientsAdsSellGet(107,[69],buildingTypeList,currentPage,20);
        totalPageOfAds=Number(data.data.totalPages);
        isSellOrNot=true;
        listTitle="خرید"+" "+"ملک"+" "+"در "+"تهران";
    }
    return {props:{sellData:isSellOrNot?data.data.data as SellAd[]:null,letData:isSellOrNot?null:data.data.data as LetAd[],isSellAds:isSellOrNot,title:listTitle as string,page:currentPage,totalPage:totalPageOfAds}};
}
export default function List({sellData,letData,isSellAds,title,page,totalPage}:{sellData?:SellAd[],letData?:LetAd[] ,isSellAds:boolean,title:string,page:number,totalPage:number}){
    return (
        <div>
            <header className='bg-hf_color w-screen h-14 lg:h-16 grid grid-cols-4 gap-4 px-4'>
                <div className="flex justify-start items-center"><img src="/image/menu.svg" alt="منو زومیلا" /></div>
                <div className="col-span-2 flex justify-center items-center"><img src="/image/Zoomila_Logo.svg" alt="زومیلا" /></div>
                <div className="flex justify-end items-center"><img src="/image/Filter.svg" alt="filter" /></div>
            </header>
            <main className="flex flex-col justify-start">
                <div className="w-screen h-auto flex flex-row justify-center px-4">
                    <div className="w-full flex flex-col items-center">
                        <h1 className="font-iransansbold text-xl my-6">{title}</h1>
                        {isSellAds?sellData?.map((item)=><AdvertiseCard dataSell={item} isSell={true} key={item.sellId}/>):letData?.map((item)=><AdvertiseCard dataLet={item} isSell={false} key={item.letId}/>)}
                        <Pagination  length={totalPage} currentPage={page}></Pagination>
                    </div>
                </div>
            </main>
            <footer className='bg-hf_color w-screen h-20 flex justify-center items-center text-2xl text-white'>فوتـر</footer>
        </div>
    );
}
