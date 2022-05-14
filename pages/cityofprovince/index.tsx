
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { CityDto, CountryApi } from "../../api";
import province from "../../public/Province.json";
import cityOfProvince from "../../public/ProvincesAndCities.json";
import { changeCity, changeNeighbourhood } from "../../store/reducer";
import { setCookies } from "cookies-next";
import Head from "next/head";
function CityOfProvince() {
    const dispatch = useDispatch();
    const neighbourhoods: number[] = useSelector((state: RootStateOrAny) => state.search.neighbourhoodSelected);
    const [provinceSelect, setProvince] = useState<number>(0);                                         //state for keeping province selected
    const [citySelect, setCity] = useState<CityDto>({ id: 0, name: '' });              //state for keeping city selected
    const [cities, setCities] = useState<CityDto[]>([]);                                       //state for keeping cities list
    const [isCity, setiscity] = useState(false);                                               //state for detect province is selected or not
    const router = useRouter();
    useEffect(() => {
        let neighbourhoodLs = cityOfProvince.filter(data => data.ProvinceId == provinceSelect)
        let cityList: CityDto[] = [];
        neighbourhoodLs.forEach(data => cityList.push({ id: data.CityId, provinceId: data.ProvinceId, name: data.CityName }))
        setCities([...cityList!]);
    }, []);
    const selectProvinceHandler = (provinceId: number) => {                                      //this method set selected province to state and call getCityHandler method for fetch cities
        setProvince(provinceId);
        getCityHandler(provinceId);
    };
    const selectCityHandler = (city: CityDto) => {                                              //set selected city to state                              
        setCity(city);
    };
    const checkNeighbourhoodsBlongCity = async (neghbourId: number) => {       //when selected city changed clear neighbourhoods if not belong to city 
        const country: CountryApi = new CountryApi();
        let n = await country.apiCountryNeighbourhoodNeighbourhoodIdGet(neghbourId);
        if (n.data.cityId == citySelect.id) { return false } else { return true }
    }
    const getCityHandler = useCallback((pid: number) => {                                 //when province selected, this method fetch cities

        let cityLs = cityOfProvince.filter(data => data.ProvinceId == pid);
        let cityList: CityDto[] = [];
        cityLs.map(data => cityList.push({ id: data.CityId, provinceId: data.ProvinceId, name: data.CityName }))
        setCities([...cityList!]);
    }, []);
    const goToCityPageHandler = () => {                                                        //set isCity true for navigate to city selection
        setiscity(true)
    };
    const exitWithoutSelecting = () => {
        router.push('/');
    }
    const getCityExit = async () => {
        if (neighbourhoods.length > 0) {                                        //check neighbourhoods coockies and fetch that if being
            {
                if (await checkNeighbourhoodsBlongCity(neighbourhoods[0])) {
                    dispatch(changeNeighbourhood([]))
                }
            }
        }
        dispatch(changeCity(citySelect))                                                              //return selected city and exit of modal
        setCookies('cityname', citySelect.name)
        setCookies('cityid', citySelect.id)
        router.push('/');
    };
    const backToProvince = () => {                                                              //set isCity false for change selected province
        setiscity(false);
    };
    const schema: string[] = ["relative h-0 bg-gradient-to-b from-upgreen_gradient to-downgreen_gradient col-span-1 flex justify-center items-center rounded-xl text-center px-2", "relative h-0 bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient col-span-1 flex justify-center items-center rounded-xl text-center px-2"];
    let parameter;
    if (!isCity) {
        parameter = province.map(data => <button id="squere" onClick={() => selectProvinceHandler(data.id as number)} key={data.id} className={`${(data.id == provinceSelect) ? schema[0] : schema[1]}`}><span className="absolute top-0 w-full h-full flex justify-center items-center">{data.name}</span></button>);
    } else {
        parameter = cities.map(data => <button id="squere" onClick={() => selectCityHandler(data)} key={data.id} className={`${(data.id == citySelect.id) ? schema[0] : schema[1]}`}><span className="absolute top-0 w-full h-full flex justify-center items-center">{data.name}</span></button>);
    }
    return <div>
        <Head>
            <meta name="robots" content="noindex"/>
            <title>انتخاب شهر</title>
        </Head>
        <main className="w-screen h-screen la-module bg-gradient-to-b from-upgray_gradient via-with_gray to-downgray_gradient flex flex-col items-center ">
        <div className="w-screen h-full lg:w-2/5">
            <div className="flex flex-col  h-full w-full text-white">
                <div className="text-right text-hf_color h-auto text-lg font-semibold mt-4 px-5">{isCity ? "شهر مورد نظر خود را انتخاب کنید" : "استان مورد نظر خود را انتخاب کنید"}</div>
                <div className="px-4 py-4 mb-2 text-base overflow-y-scroll overflow-x-hidden md:text-xl h-full">
                    <div className="grid grid-cols-3 gap-2">
                        {parameter}
                    </div>
                </div>
                <div className="sticky bottom-0 w-full h-20 bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient px-4 py-3 flex justify-between">
                    <button id="BackInCity" className="bg-gradient-to-b from-upgreen_gradient to-downgreen_gradient w-49% rounded-md" onClick={isCity ? backToProvince : exitWithoutSelecting}>{isCity ? "تغییر استان" : "بازگشت"}</button>
                    <button id="CitySubmit" className="bg-gradient-to-b from-upgreen_gradient to-downgreen_gradient w-49% rounded-md" onClick={isCity ? getCityExit : goToCityPageHandler}>{isCity ? "تایید" : "ادامه"}</button>
                </div>
            </div>
        </div>
    </main>
    </div>
}
export default CityOfProvince