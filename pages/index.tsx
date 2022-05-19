import Head from "next/head";
import React, { useEffect, useState } from "react";
import {CityDto, ClientsApi, CountryApi, SystemApi} from "../api";
import Touch from "../public/lottie/touch.json";
import { Player } from '@lottiefiles/react-lottie-player';
import { CircularProgress } from "@mui/material";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { checkCookies,getCookie } from "cookies-next";
import { changeCity } from "../store/reducer";
import AddDash from "../models/addDash";

export default function Home() {
  const city:CityDto = useSelector((state: RootStateOrAny) => state.search.citySelected);
  const dispatch=useDispatch();
  const neighbourhoods: number[] = useSelector((state: RootStateOrAny) => state.search.neighbourhoodSelected);
  const buildings: string[] = useSelector((state: RootStateOrAny) => state.search.buildingSelected)
  const [saleCountAds, setSaleCountAds] = useState<number>();              //state for keeping count of sale advertise
  const [rentCountAds, setRentCountAds] = useState<number>();              //state for keeping count of rent advertise
  const [listingSellURL,setListingSellURL]=useState<string>("");
  const [listingLetURL,setListingLetURL]=useState<string>("");
  const listingURLCreatorHandler=async (coockieCity?:string)=>{
    var tempUrlSell:string="/"+"خرید-فروش"+"/";
    var tempUrlLet:string="/"+"رهن-اجاره"+"/";
    if(buildings.length>0){
      const buildingType: SystemApi = new SystemApi();
      const buildingTypeLs = await buildingType.apiSystemResourceEnumEGet("BuildingType");
      let buildingSelected=buildingTypeLs.data.filter(item=>item.key==buildings[0])[0];
      tempUrlSell=tempUrlSell+AddDash(buildingSelected.value!.toString());
      tempUrlSell=tempUrlSell+"/";
      tempUrlLet=tempUrlLet+AddDash(buildingSelected.value!.toString());
      tempUrlLet=tempUrlLet+"/";
    }else{
      tempUrlSell=tempUrlSell+"املاک";
      tempUrlSell=tempUrlSell+"/";
      tempUrlLet=tempUrlLet+"املاک";
      tempUrlLet=tempUrlLet+"/";
    }

    if (neighbourhoods.length>0){
      if(city.name!=""){
      const countryApi:CountryApi=new CountryApi();
      var detailOfNeighbourhood=await countryApi.apiCountryNeighbourhoodNeighbourhoodIdGet(neighbourhoods[0]);
        tempUrlSell=tempUrlSell+  AddDash(detailOfNeighbourhood.data.name!.toString());
        tempUrlSell=tempUrlSell+"/";
        tempUrlLet=tempUrlLet+  AddDash(detailOfNeighbourhood.data.name!.toString());
        tempUrlLet=tempUrlLet+"/";
      }
    }

    if(coockieCity!=null && city.name==""){
      tempUrlSell=tempUrlSell+AddDash(coockieCity);
      tempUrlSell=tempUrlSell+"/";
      tempUrlLet=tempUrlLet+AddDash(coockieCity);
      tempUrlLet=tempUrlLet+"/";
    }else{
      if(city.name!=""||city.name!=null){
        tempUrlSell=tempUrlSell+AddDash(city.name!.toString());
        tempUrlSell=tempUrlSell+"/";
        tempUrlLet=tempUrlLet+AddDash(city.name!.toString());
        tempUrlLet=tempUrlLet+"/";
      }
    }
    if(neighbourhoods.length>1){
      tempUrlSell=tempUrlSell+"?"+"nbs"+"=";
      tempUrlLet=tempUrlLet+"?"+"nbs"+"=";
      neighbourhoods.map((item,index)=>{
        if(index!=0){
          if(index<neighbourhoods.length-1){
          tempUrlSell=tempUrlSell+item+"-";
            tempUrlLet=tempUrlLet+item+"-";
          }else{
            tempUrlSell=tempUrlSell+item;
            tempUrlLet=tempUrlLet+item;
          }
        }
      });
    }
    if(buildings.length>1){
      if (tempUrlSell.includes("?")){
        tempUrlSell=tempUrlSell+"&"+"blds"+"=";
      }
      else{
        tempUrlSell=tempUrlSell+"?"+"blds"+"=";
      }
      if (tempUrlLet.includes("?")){
        tempUrlLet=tempUrlLet+"&"+"blds"+"=";
      }
      else{
        tempUrlLet=tempUrlLet+"?"+"blds"+"=";
      }
      buildings.map((item,index)=>{
        if(index!=0){
          if(index<buildings.length-1){
            tempUrlSell=tempUrlSell+item+"-";
            tempUrlLet=tempUrlLet+item+"-";
          }else{
            tempUrlSell=tempUrlSell+item;
            tempUrlLet=tempUrlLet+item;
          }
        }
      });
    }
    {
      setListingSellURL(tempUrlSell);
      setListingLetURL(tempUrlLet)
    }
  };
  useEffect(() => {
    const loadTotalCountsAds = async () => {  
      if(checkCookies('cityid') && checkCookies('cityname') ){
        let cityCoockie:CityDto={};
        cityCoockie.id=Number(getCookie('cityid'));
        cityCoockie.name=getCookie('cityname')?.toString();
        dispatch(changeCity(cityCoockie));
     }                      //calculate count of sale and rent ads
      const adsCount: ClientsApi = new ClientsApi();
      let count;
      if (!(checkCookies('cityid') && checkCookies('cityname'))) {
        count = await adsCount.apiClientsAdsSellCountGet();
        count.status == 200 ? setSaleCountAds(count.data) : setSaleCountAds(-1);
        count = await adsCount.apiClientsAdsLetCountGet();
        count.status == 200 ? setRentCountAds(count.data) : setRentCountAds(-1);
      } else {
        count = await adsCount.apiClientsAdsSellGet(Number(getCookie('cityid')), neighbourhoods, buildings);
        count.status == 200 ? setSaleCountAds(count.data.totalCount) : setSaleCountAds(-1);
        count = await adsCount.apiClientsAdsLetGet(Number(getCookie('cityid')), neighbourhoods, buildings)
        count.status == 200 ? setRentCountAds(count.data.totalCount) : setRentCountAds(-1);
        listingURLCreatorHandler(getCookie('cityname')!.toString());
      }

    };
    loadTotalCountsAds();
  }, []);
  const calcuteAdsCount = async () => {
    setSaleCountAds(undefined);
    setRentCountAds(undefined);
    const adsCount: ClientsApi = new ClientsApi();
    var count;
    count = await adsCount.apiClientsAdsSellGet(city.id, neighbourhoods, buildings);
    count.status == 200 ? setSaleCountAds(count.data.totalCount) : setSaleCountAds(-1);
    count = await adsCount.apiClientsAdsLetGet(city.id,neighbourhoods,buildings)
    count.status == 200 ? setRentCountAds(count.data.totalCount) : setRentCountAds(-1);
  };

  const selectProvinceCityHandler = () => {                          //active city selector modal for select city
    calcuteAdsCount();
    listingURLCreatorHandler();
  };
  const selectCityNeighbourhoodHandler = () => {                             //show neighbourhoods selection modal
    calcuteAdsCount();
    listingURLCreatorHandler();
  };
  const selectBuildingType = () => {                                          //active building type modal for select building types for search
    calcuteAdsCount();
    listingURLCreatorHandler();
  }
  return <div className='static text-white text-xl md:text-2xl lg:text-2xl'>
    <Head>
      <meta name="robots" content="noindex"/>
      <title>بزرگترین سایت خرید و فروش، رهن و اجاره املاک در کشور | زومیلا</title>
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

    <main className="flex flex-col justify-start ">
      <div className="flex justify-center items-center mb-4 mt-2">
        <h1 className=" text-black font-medium text-lg sm:text-lg md:text-2xl lg:text-2xl">ملک مورد نظر خود را جستجو نمایید</h1>
      </div>
      <div className="w-screen h-auto flex flex-row justify-center">
        <div className="w-5 h-auto"></div>
        <div className="w-full h-auto md:w-4/5 lg:w-2/5">
          <div className="w-full h-auto flex flex-row justify-between">
            <div className="flex justify-center mb-4 w-full h-auto">
              <Link href='/cityofprovince'>
                <a onClick={selectProvinceCityHandler}
                  className="bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient w-full h-20 md:full flex flex-row items-center justify-between px-4 rounded-md">
                  <span className="flex flex-col items-start justify-center">
                    <p>شهر</p>
                  </span>
                  <span className="flex flex-row items-center h-8">
                    <span className="bg-green_accent h-full p-1 rounded ml-2 flex justify-center text-base">{city.name == "" || city.name == null ? "همه شهرها" : city.name}</span>
                    <span className="p-1 bg-arrow rounded h-full flex justify-center">
                      <img src="./image/left.svg" alt="انتخاب شهر" className="w-6 h-6" />
                    </span>
                  </span>
                </a></Link>
            </div>
          </div>
          <div className="w-full h-auto flex flex-row justify-center">
            <div className="flex justify-center mb-4 w-full h-auto">
              <Link href='/neighbourhoods'>
                <a onClick={selectCityNeighbourhoodHandler}
                  className="bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient w-full h-20 md:full flex flex-row items-center justify-between px-4 rounded-md">
                  <span className="flex flex-col items-start justify-center">
                    <p>محله</p>
                  </span>
                  <span className="flex flex-row items-center h-8">
                    <span className="bg-green_accent h-full py-1 px-2 rounded ml-2 flex justify-center text-base">{neighbourhoods.length > 0 ? neighbourhoods.length + " محله" : "همه محله ها"}</span>
                    <span className="p-1 bg-arrow rounded h-full flex justify-center">
                      <img src="./image/left.svg" alt="انتخاب محله" className="w-6 h-6" />
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex flex-row justify-center">
            <div className="flex justify-center mb-4 w-full h-auto">
              <Link href='/buildingtype'>
                <a onClick={selectBuildingType}
                  className="bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient w-full h-20 md:full flex flex-row items-center justify-between px-4 rounded-md">
                  <span className="flex flex-col items-start justify-center">
                    <p>نوع ملک</p>
                  </span>
                  <span className="flex flex-row items-center h-8">
                    <span className="bg-green_accent h-full py-1 px-2 rounded ml-2 flex justify-center text-base">{buildings.length > 0 ? buildings.length + " نوع" : "همه نوع"}</span>
                    <span className="p-1 bg-arrow rounded h-full flex justify-center">
                      <img src="./image/left.svg" alt="نوع ملک" className="w-6 h-6" />
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <a href={listingSellURL} className="w-full h-full">
              <div
                className={(saleCountAds || saleCountAds == 0)&&(rentCountAds || rentCountAds == 0)?"relative bg-gradient-to-b from-sale_up to-sale_down w-full h-20 md:w-full flex flex-row items-center justify-between px-2 rounded-md":"relative cursor-not-allowed bg-gray-500 w-full h-20 md:w-full flex flex-row items-center justify-between px-2 rounded-md"}>
                <p className="text-lg sm:text-lg font-bold">آگهی های فروش</p>
                <span className="absolute left-1/2 right-1/2 flex items-center">
                <Player autoplay={true} src={Touch} loop={true} style={{ width: '60px', height: '60px' }}  />
                </span>
                <span className="text-base sm:text-base">{saleCountAds || saleCountAds == 0 ? saleCountAds < 0 ? "مشکل در برقراری اتصال به سرور" : saleCountAds + " مورد" : <CircularProgress color="inherit" size={20} />}</span>
              </div></a>
          </div>
          <div className="flex justify-center mb-4">
            <a href={listingLetURL} className="w-full h-full">
              <div
                className={(rentCountAds || rentCountAds == 0)&&(saleCountAds || saleCountAds == 0)?"relative bg-gradient-to-b from-rent_up to-rent_down w-full h-20 md:full flex flex-row items-center justify-between px-2 rounded-md":"relative cursor-not-allowed bg-gray-500 w-full h-20 md:full flex flex-row items-center justify-between px-2 rounded-md"}>
                <p className="text-lg sm:text-lg font-bold">آگهی های اجاره</p><span className="absolute left-1/2 right-1/2 flex items-center">
                <Player autoplay={true} src={Touch} loop={true} style={{ width: '60px', height: '60px' }}  />
                </span>
                <span className="text-base sm:text-base">{rentCountAds || rentCountAds == 0 ? rentCountAds < 0 ? "مشکل در برقراری اتصال به سرور" : rentCountAds + " مورد" : <CircularProgress color="inherit" size={20} />}</span>
              </div></a>
          </div>
          <div className="flex justify-center mb-4">
            <a href={`https://www.zoomila.com/`} className="w-full h-full"><div
              className="bg-white w-full h-20 md:full flex flex-row items-center justify-center px-2 rounded-md">
              <p className="text-lg sm:text-lg font-bold text-black">همه آگهی های زومیلا</p>
            </div></a>
          </div>
          <div className="flex justify-center mb-4">
            <a href={`/projects`} className="w-full h-full"><div
              className="bg-white w-full h-20 md:full flex flex-row items-center justify-center px-2 rounded-md">
              <p className="text-lg sm:text-lg font-bold text-black">مشاهده پروژه ها</p>
            </div></a>
          </div>
          <div className="flex justify-center mb-4">
            <a href={`https://www.zoomila.com/blog/`} className="w-full h-full"><div
              className="bg-white w-full h-20 md:full flex flex-row items-center justify-center px-2 rounded-md">
              <p className="text-lg sm:text-lg font-bold text-black">وبلاگ زومیلا</p>
            </div></a>
          </div>
          <div className="flex flex-col space-y-2 justify-center mb-4 text-sm md:text-base text-black">
            <div className="w-full h-20 bg-gray-200 rounded-md flex justify-center items-center text-lg font-iransansbold lg:text-xl">خرید و فروش ویلا</div>
            <Link href="/"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در شمال</span></Link>
            <Link href="/خرید-فروش/ویلا/چمستان"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در چمستان</span></Link>
            <Link href="/خرید-فروش/ویلا/آمل"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در آمل</span></Link>
            <Link href="/خرید-فروش/ویلا/نوشهر"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در نوشهر</span></Link>
            <Link href="/خرید-فروش/ویلا/نور-مازندران"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در نور</span></Link>
            <Link href="/خرید-فروش/ویلا/محمود-آباد"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در محمودآباد</span></Link>
            <Link href="/خرید-فروش/ویلا/رامسر"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در رامسر</span></Link>
            <Link href="/خرید-فروش/ویلا/رویان/نور-مازندران"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در رویان</span></Link>
            <Link href="/خرید-فروش/ویلا/کردان/کرج"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در کردان</span></Link>
            <Link href="/خرید-فروش/ویلا/تهران"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در تهران</span></Link>
            <Link href="/خرید-فروش/ویلا/کرج"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در کرج</span></Link>
            <Link href="/خرید-فروش/ویلا/شهریار"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش ویلا در شهریار</span></Link>
            <div className="w-full h-20 bg-gray-200 rounded-md flex justify-center items-center text-lg font-iransansbold lg:text-xl">خرید و فروش آپارتمان</div>
            <Link href="/خرید-فروش/آپارتمان/تهران"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در تهران</span></Link>
            <Link href="/خرید-فروش/آپارتمان/همدان"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در همدان</span></Link>
            <Link href="/خرید-فروش/آپارتمان/کرج"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در کرج</span></Link>
            <Link href="/خرید-فروش/آپارتمان/پرند"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در پرند</span></Link>
            <Link href="/خرید-فروش/آپارتمان/یزد"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در یزد</span></Link>
            <Link href="/خرید-فروش/آپارتمان/تبریز"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در تبریز</span></Link>
            <Link href="/خرید-فروش/آپارتمان/اصفهان"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در اصفهان</span></Link>
            <Link href="/خرید-فروش/آپارتمان/شیراز"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در شیراز</span></Link>
            <Link href="/خرید-فروش/آپارتمان/قم"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در قم</span></Link>
            <Link href="/خرید-فروش/آپارتمان/كیش"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در کیش</span></Link>
            <Link href="/خرید-فروش/آپارتمان/ساری"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در ساری</span></Link>
            <Link href="/خرید-فروش/آپارتمان/مشهد"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">خرید و فروش آپارتمان در مشهد</span></Link>
            <div className="w-full h-20 bg-gray-200 rounded-md flex justify-center items-center text-lg font-iransansbold lg:text-xl">رهن و اجاره آپارتمان</div>
            <Link href="/رهن-اجاره/آپارتمان/تهران"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در تهران</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/تبریز"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در تبریز</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/یزد"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در یزد</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/همدان"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در همدان</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/ساری"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در ساری</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/پرند"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در پرند</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/کرج"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در کرج</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/مشهد"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در مشهد</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/اصفهان"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در اصفهان</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/شیراز"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در شیراز</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/رشت"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در رشت</span></Link>
            <Link href="/رهن-اجاره/آپارتمان/كیش"><span className="bg-white cursor-pointer w-full h-12 rounded-md flex justify-center items-center">رهن و اجاره آپارتمان در کیش</span></Link>
          </div>
        </div>
        <div className="w-5 h-auto"></div>
      </div>
    </main>

  </div>
}