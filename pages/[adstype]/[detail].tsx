import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import Head from "next/head";
import { ClientsApi, LetAd, SellAd} from "../../api";
import cityOfProvince from "../../public/ProvincesAndCities.json";
import SellDetail from "../../src/component/sellDetail/SellDetail";
import RentDetail from "../../src/component/rentDetail/RentDetail";
export const getServerSideProps: GetServerSideProps = async (context) =>{
    let adsType:string=context.params!.adstype!.toString().slice(0,3);
    let adsCode:number=Number(context.params!.adstype!.toString().slice(4,context.params!.adstype!.toString().length));
    const fetchAdvertiseDetails:ClientsApi=new  ClientsApi();
    let data:any;
    let isSell:boolean=true;
    if(adsType=="fsp"){
        data=await fetchAdvertiseDetails.apiClientsAdsSellAdIdGet(adsCode);
        isSell=true;
    }else if(adsType=="trp"){
        data=await fetchAdvertiseDetails.apiClientsAdsLetAdIdGet(adsCode);
        isSell=false;
    }
    return {
        props:
            {
                sellData:isSell?data.data as SellAd:null,rentData:isSell?null:data.data as LetAd,isSell:isSell
            }
    }
}
function Detail({sellData,rentData,isSell}:{sellData:SellAd , rentData:LetAd,isSell:boolean}) {

    return (
        <div className="w-screen h-screen">
            <Head>
                <title>{isSell? sellData.slug:rentData.slug}</title>
            </Head>
            <header className="bg-hf_color w-screen h-14 lg:h-16 grid grid-cols-4 gap-4 px-4">
                <div className="flex justify-start items-center">
                    <img src="/image/menu.svg" alt="منو زومیلا" />
                </div>
                <a href={`/`} className="col-span-2 flex justify-center items-center">
                    <img src="/image/Zoomila_Logo.svg" alt="زومیلا" />
                </a>
                <div className="flex justify-end items-center">
                    <img src="/image/Filter.svg" alt="filter" />
                </div>
            </header>
            <main className="flex flex-col justify-start">
                <div className="w-screen h-auto flex flex-row justify-center px-4">
                    <div className="w-full flex flex-col items-center">
                        {isSell==true?<SellDetail data={sellData as SellAd}/>:<RentDetail data={rentData as LetAd}/>}
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Detail;