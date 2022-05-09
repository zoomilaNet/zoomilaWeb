import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react"
import { CityDto, CountryApi, NeighbourhoodDto } from "../../api"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { changeNeighbourhood } from "../../store/reducer";
import Head from "next/head";

function Neighbourhoods() {
    const dispatch = useDispatch();
    const city:CityDto = useSelector((state: RootStateOrAny) => state.search.citySelected);
    const neighbourhoods: number[] = useSelector((state: RootStateOrAny) => state.search.neighbourhoodSelected)
    const router = useRouter();
    const [neighbourhoodsForShow, setNeighbourhoodsForShow] = useState<NeighbourhoodDto[]>([]);   //state for keeping neighbourhood for show to users 
    const [neighbourhoodsList, setNeighbourhoodsList] = useState<NeighbourhoodDto[]>([]);         //state for search result, keeping basic neighbourhoods
    const [selectedNeighbourhood, setSelectedNeighbourhood] = useState<number[]>([])              //state for keeping selected neighbourhoods
    var selected: number[] = [];
    useEffect(() => {
        const loadNeighbourhoods = async () => {                              //fetch neighbourhoods of city which input to component 
            const country: CountryApi = new CountryApi();
            var neighbourhoodLs = await country.apiCountryNeighbourhoodsCityCityIdGet(city.id as number, 1, 500);
            setNeighbourhoodsList(neighbourhoodLs.data.data?.data!);
            setSelectedNeighbourhood([...neighbourhoods])
            if(neighbourhoods.length>0){
                let tempNeighbour:NeighbourhoodDto[]=neighbourhoodLs.data.data?.data!.filter(data=>neighbourhoods.includes(data.id as number)) as NeighbourhoodDto[]
                let tempList:NeighbourhoodDto[] = neighbourhoodLs.data.data?.data!.filter(data=>!neighbourhoods.includes(data.id as number)) as NeighbourhoodDto[]
                tempList.forEach(data=>tempNeighbour.push(data))
                setNeighbourhoodsForShow([...tempNeighbour])
            }else{
                setNeighbourhoodsForShow(neighbourhoodLs.data.data?.data!);
            }
        }
        loadNeighbourhoods();
    }, []);
    const selectNeibourhood = (neighbourId: number) => {                  //check being selected item for add or remove of selectedneighbourhoods list 
        if (selectedNeighbourhood.indexOf(neighbourId) < 0) {
            selected = [...selectedNeighbourhood];
            let findNeighbour = neighbourhoodsList.filter(data => data.id == neighbourId)[0];
            selected.push(findNeighbour.id!);
            setSelectedNeighbourhood([...selected]);
        } else if (selectedNeighbourhood.indexOf(neighbourId) > -1) {
            selected = [...selectedNeighbourhood];
            const index = selected.indexOf(neighbourId);
            selected.splice(index, 1);
            setSelectedNeighbourhood([...selected]);
        }
    };
    const searchNeighbourhoodHandler = (searchedText: string) => {  //this method for search witin neighbourhoods
        if (searchedText.length > 0) {
            setNeighbourhoodsForShow(neighbourhoodsList.filter(data => data.name?.includes(searchedText)));
        } else {
            setNeighbourhoodsForShow([...neighbourhoodsList]);
        }
    };
    const getSelected = (neighbourhoodId: number) => {                //check selectd item being in selectedneighbourhood list or not
        if (selectedNeighbourhood.some((x) => x === neighbourhoodId)) {
            return true;
        } else {
            return false;
        }
    };
    const getNeighbourhoodExit = () => {                    //empty chosen neighbourhoods which input to component and set new neighbourhoods chosen in that and exit from component 
        dispatch(changeNeighbourhood([...selectedNeighbourhood]))
        router.push('/');
    };
    const schema: string[] = ["relative h-0 bg-gradient-to-b from-upgreen_gradient to-downgreen_gradient col-span-1 flex justify-center items-center rounded-xl text-center px-2", "relative h-0 bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient col-span-1 flex justify-center items-center rounded-xl text-center px-2"];
    let parameter;
    parameter = neighbourhoodsForShow ? neighbourhoodsForShow.map((data) => <button id="squere" key={data.id} onClick={() => selectNeibourhood(data.id as number)} className={getSelected(data.id as number) ? schema[0] : schema[1]}><span className="absolute top-0 w-full h-full flex justify-center items-center">{data.name}</span></button>) : <CircularProgress />;
    return <div>
        <Head>
            <title>انتخاب محله</title>
            <meta name="robots" content="noindex"/>
        </Head>
        <main className="w-screen h-screen bg-gradient-to-b from-upgray_gradient via-with_gray to-downgray_gradient flex flex-col items-center">
        <div className="w-screen lg:w-2/5 h-full">
            <div className="flex flex-col  h-full w-full text-white">
                <div className="text-right text-hf_color h-auto text-lg font-semibold my-2 px-5">محله مورد نظر خود را جستجو و انتخاب کنید</div>
                <div className="mx-4 mb-1 flex flex-row items-center bg-white rounded">
                    <input type="text" placeholder="جستجوی محله" className="my-2 w-full h-10 text-black focus:outline-0 mr-1" onChange={(event) => searchNeighbourhoodHandler(event.target.value)} />
                    <img src="./image/search.svg" alt="search" className="w-6 h-6 ml-1" />
                </div>
                <div className=" px-4 py-4 mb-2 text-base overflow-y-scroll overflow-x-hidden md:text-xl h-full">
                    <div className="grid grid-cols-3 gap-2">
                        {parameter}
                    </div>
                </div>
                <div className="sticky bottom-0 w-full h-20 bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient px-4 py-3 flex justify-between"><button id="NeighbourhoodSubmit" onClick={getNeighbourhoodExit} className="bg-gradient-to-b from-upgreen_gradient to-downgreen_gradient w-full rounded-md">تایید</button></div>
            </div>
        </div></main>
        </div>
}
export default Neighbourhoods