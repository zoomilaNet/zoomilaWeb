import { CircularProgress } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { StringStringKeyValuePair, SystemApi } from "../../api";
import { changeBuildings } from "../../store/reducer";

function BuildingType() {
    const router = useRouter();
    const dispatch = useDispatch();
    const buildings: string[] = useSelector((state: RootStateOrAny) => state.search.buildingSelected)
    const [buildingTypeList, setBuildingTypeList] = useState<StringStringKeyValuePair[]>([]);             //state for keeping building types list
    const [buildingChosen, setBuildingChosen] = useState<string[]>([]);                                   //state for keeping chosen building 
    var selected: string[] = [];
    var url: string[] = [];
    useEffect(() => {
        const loadingBuildingType = async () => {                                                         //fetch building type list from api and save into state
            const buildingType: SystemApi = new SystemApi();
            const buildingTypeLs = await buildingType.apiSystemResourceEnumEGet("BuildingType");
            setBuildingTypeList(buildingTypeLs.data);
            setBuildingChosen([...buildings]);
        }
        loadingBuildingType();
        buildingTypeList.map(data => url.push("https://www.zoomila.com/resources/BuildingType/" + data.key + ".svg"))
    }, []);
    const selectBuildings = (buildingKey: string) => {                                                   //select or  unselect chosen item of building type  
        if (buildingChosen.indexOf(buildingKey) < 0) {
            selected = [...buildingChosen];
            let findNeighbour = buildingTypeList.filter(data => data.key == buildingKey)[0];
            selected.push(findNeighbour.key!);
            setBuildingChosen([...selected]);
        } else if (buildingChosen.indexOf(buildingKey) > -1) {
            selected = [...buildingChosen];
            const index = selected.indexOf(buildingKey);
            selected.splice(index, 1);
            setBuildingChosen([...selected]);
        }
    };
    const getSelected = (buildingKey: string) => {                                                       //checking selected item being in chosen state or not
        if (buildingChosen.some((x) => x === buildingKey)) {
            return true;
        } else {
            return false;
        }
    };
    const getNeighbourhoodExit = () => {                                                                //empty chosen building type which input to component and set new building type chosen in that and exit from component
        dispatch(changeBuildings([...buildingChosen]));
        router.push('/');
    };
    const schema: string[] = ["relative h-0 bg-gradient-to-b from-upgreen_gradient to-downgreen_gradient flex flex-col justify-center items-center rounded text-center px-2", "relative h-0 bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient flex flex-col justify-center items-center rounded text-center px-2"];
    let parameter;
    parameter = buildingTypeList ? buildingTypeList.map((data, index) => <button id="squere" key={data.key} onClick={() => selectBuildings(data.key as string)} className={getSelected(data.key as string) ? schema[0] : schema[1]}><div className="absolute top-0 w-full h-full flex flex-col justify-center items-center"><img src={"https://www.zoomila.com/resources/BuildingType/" + data.key + ".svg"} alt="icon" className="mb-3" /><p>{data.value}</p></div></button>) : <div className="bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient w-full h-10 "> <CircularProgress color="inherit" /></div>;

    return <div>
        <Head>
            <meta name="robots" content="noindex" />
            <title>انتخاب نوع ملک</title>
        </Head>
        <main className="w-screen h-screen bg-gradient-to-b from-upgray_gradient via-with_gray to-downgray_gradient flex flex-col items-center">
            <div className="w-screen lg:w-2/5 h-full">
                <div className="flex flex-col  h-full w-full text-white">
                    <div className="text-right text-hf_color text-lg h-auto font-semibold mt-4 px-5">نوع ملک مورد نظر خود را انتخاب کنید</div>
                    <div className=" px-4 py-4 mb-2 text-base overflow-y-scroll overflow-x-hidden md:text-xl h-full">
                        <div className="grid grid-cols-3 gap-2">
                            {parameter}
                        </div>
                    </div>
                    <div className="sticky bottom-0 w-full h-20 bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient px-4 py-3 flex justify-between"><button id="BuildingTypeSubmit" onClick={getNeighbourhoodExit} className="bg-gradient-to-b from-upgreen_gradient to-downgreen_gradient w-full rounded-md">تایید</button></div>
                </div>
            </div>
        </main>
    </div>
}
export default BuildingType