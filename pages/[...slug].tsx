import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { CityDto, ClientsApi, CountryApi, LetAd, SellAd, SystemApi } from "../api";
import DeleteDash from "../models/deleteDash";
import cityOfProvince from "../public/ProvincesAndCities.json";
import AdvertiseCard from "../src/component/advertisecard/AdvertiseCard";
import LetAdvertiseCard from "../src/component/letAdsCard/LetAdvertiseCard";
import Pagination from "../src/component/pagination/pagination";

export const getServerSideProps: GetServerSideProps = async (context) => {
    //await new Promise((resolve)=>setTimeout(resolve,1000));
    let path: string[] = context.params!.slug! as string[];
    const fetchAdvertiseList: ClientsApi = new ClientsApi();
    let data: any;
    let cityId: number = 107;
    let neighbourhood: number[] = [];
    let buildingTypeList: string[] = [];
    let currentPage: number = 1;
    let listTitle: string = "";
    let findCity: CityDto = {};
    let enteredPathCity: string = "";
    let isSellOrNot: boolean = true;
    let totalPageOfAds: number = 0;
    const setCityInURL = () => {
        cityOfProvince.forEach(city => {
            if (city.CityName === enteredPathCity) {
                findCity = { id: city.CityId, name: city.CityName } as CityDto;
                // findCity.id = city.CityId as number;
                // findCity.name = city.CityName as string;
            }
        });
        cityId = findCity.id!;
    };

    if (path.length == 3) {
        enteredPathCity = DeleteDash(path[2].toString());
        setCityInURL();
    } else if (path.length == 4) {
        enteredPathCity = DeleteDash(path[3].toString());
        setCityInURL();
        let enteredPathNeighbourhood: string = "";
        enteredPathNeighbourhood = DeleteDash(path[2].toString());
        let countriApi: CountryApi = new CountryApi();
        let neighbourhoodOfCity = await countriApi.apiCountryNeighbourhoodsCityCityIdGet(cityId, 1, 500);
        neighbourhoodOfCity.data.data?.data?.forEach(item => {
            if (item.name == enteredPathNeighbourhood) {
                neighbourhood[0] = (Number(item.id));
            }
        });
    }

    if (path[1] != "املاک") {
        const buildingType: SystemApi = new SystemApi();
        const buildingTypeLs = await buildingType.apiSystemResourceEnumEGet("BuildingType");
        let selectedtBuilding: string = "";
        buildingTypeLs.data.map(item => {
            if (item.value == DeleteDash(path[1])) {
                selectedtBuilding = item.key!;
            }
        })
        buildingTypeList.push(selectedtBuilding)
    }

    if (context.query.page != null && Number(context.query.page) > 1) {
        currentPage = Number(context.query.page);
    }

    if (context.query.nbs != null) {
        let nbsArray: string[] = context.query.nbs.toString().split("-");
        nbsArray.map(item => neighbourhood.push(Number(item)));
    }

    if (context.query.blds != null) {
        let buildingArray: string[] = context.query.blds.toString().split("-");
        buildingArray.map(item => buildingTypeList.push(item));
    }

    if (findCity != null) {
        cityId = findCity.id as number;
    }

    if (path[0] === "خرید-فروش") {
        data = await fetchAdvertiseList.apiClientsAdsSellGet(cityId, neighbourhood, buildingTypeList, currentPage, 15);
        isSellOrNot = true;
        totalPageOfAds = Number(data.data.totalPages);
        listTitle = "خرید" + " " + "ملک" + " " + "در " + findCity.name;
    } else if (path[0] === "رهن-اجاره") {
        data = await fetchAdvertiseList.apiClientsAdsLetGet(cityId, neighbourhood, buildingTypeList, currentPage, 15);
        totalPageOfAds = Number(data.data.totalPages);
        isSellOrNot = false;
        listTitle = "اجاره" + " " + "ملک" + " " + "در " + findCity.name;
    } else {
        data = await fetchAdvertiseList.apiClientsAdsSellGet(107, [69], buildingTypeList, currentPage, 15);
        totalPageOfAds = Number(data.data.totalPages);
        isSellOrNot = true;
        listTitle = "خرید" + " " + "ملک" + " " + "در " + "تهران";
    }

    return { props: { sellData: isSellOrNot ? data.data.data as SellAd[] : null, letData: isSellOrNot ? null : data.data.data as LetAd[], isSellAds: isSellOrNot, title: listTitle as string, page: currentPage, totalPage: totalPageOfAds } };
}

export default function List({ sellData, letData, isSellAds, title, page, totalPage }: { sellData?: SellAd[], letData?: LetAd[], isSellAds: boolean, title: string, page: number, totalPage: number }) {
    return (
        <div>
            <Head>
                <meta name="robots" content="noindex" />
                <title>{title}</title>
                <meta name="description" content="کامل ترین وب سایت املاک در ایران برای فروش و رهن واجاره با درج قیمت با به روزترین فایل ها به همراه عکس و فیلم" />
                <meta property="og:title" content="خرید، فروش، رهن و اجاره آپارتمان، خانه، ویلا، زمین و سایر املاک با درج قیمت ملک | زومیلا" />
                <meta property="og:description" content="زومیلا به روزترین سایت املاک ایران برای جستجوی آگهی های خرید خانه، اجاره خانه ،فروش آپارتمان،خرید مغازه ،اجاره ویلا ،خرید زمین، باغ و سایر املاک مسکونی، تجاری و اداری" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="zoomila" />
                <meta property="og:image" content="https://www.zoomila.com/images/logo/icon.png" />
                <meta property="og:url" content="https://www.zoomila.com/" />
                <meta property="og:local" content="fa" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content="زومیلا به روزترین سایت املاک ایران برای جستجوی آگهی های خرید خانه، اجاره خانه ،فروش آپارتمان،خرید مغازه ،اجاره ویلا ،خرید زمین، باغ و سایر املاک مسکونی، تجاری و اداری" />
                <meta name="twitter:site" content="@zoomilaofficial" />
                <meta name="twitter:title" content="خرید، فروش، رهن و اجاره آپارتمان، خانه، ویلا، زمین و سایر املاک با درج قیمت ملک | زومیلا" />
            </Head>
            <main className="flex flex-col justify-start">
                <div className="absolute top-4 left-4"><img src="/image/Filter.svg" alt="filter" className="w-8 h-8" /></div>
                <div className="w-screen h-auto flex flex-row justify-center px-4">
                    <div className="w-full flex flex-col items-center">
                        <h1 className="font-iransansbold text-xl mt-3 mb-1">{title}</h1>
                        {isSellAds ? sellData?.map((item) => <AdvertiseCard dataSell={item as SellAd} key={item.sellId} />) : letData?.map((item) => <LetAdvertiseCard dataLet={item as LetAd} key={item.letId} />)}
                        <Pagination length={totalPage} currentPage={page}></Pagination>
                    </div>
                </div>
            </main>
        </div>
    );
}
