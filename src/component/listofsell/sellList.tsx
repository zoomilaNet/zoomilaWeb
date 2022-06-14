import {SellAd} from "../../../api";
import AdvertiseCard from "../advertisecard/AdvertiseCard";
import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {CircularProgress} from "@mui/material";
import Pagination from "../pagination/pagination";
export default function SellList({sellData,totalPage,currentpage}:{sellData:SellAd[],totalPage:number,currentpage:number}){
    const [data,setData]=useState<SellAd[]>(sellData.slice(0,5));
    const [hasMore, setHasMore] = useState(true);
    const [lenght,setLenght]=useState(5)
    const getMorePost = () => {
        let tempData:SellAd[];
        setTimeout(()=>{
            if (data.length < sellData.length){
                tempData=data;
                tempData=tempData.concat(sellData.slice(lenght,lenght+5))
                setData(tempData)
                setLenght(lenght+5)
            }
            if(sellData.length == lenght+5|| sellData.length < lenght+5){
                setHasMore(false);
            }
        },1500)
    };
    return <div className="w-full">
        {currentpage<5?
            <InfiniteScroll className="w-full flex flex-col items-center"
                            dataLength={data.length}
                            next={getMorePost}
                            hasMore={hasMore}
                            loader={<CircularProgress color="inherit" size={20} className="w-full my-4"/>}
                            endMessage={<Pagination length={totalPage} currentPage={currentpage}></Pagination>}
            >
                {data?.map((item) => <AdvertiseCard dataSell={item as SellAd} key={item.sellId} />)}
            </InfiniteScroll>
            :
            <div className="w-full flex flex-col items-center">
                {sellData.map(item=><AdvertiseCard dataSell={item as SellAd} key={item.sellId}/>)}
                <Pagination length={totalPage} currentPage={currentpage}/>
            </div>
        }

    </div>
}