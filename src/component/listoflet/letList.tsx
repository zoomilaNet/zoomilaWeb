import {LetAd, SellAd} from "../../../api";
import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {CircularProgress} from "@mui/material";
import Pagination from "../pagination/pagination";

import LetAdvertiseCard from "../letAdsCard/LetAdvertiseCard";
export default function LetList({letData,totalPage,currentpage}:{letData:LetAd[],totalPage:number,currentpage:number}){
    const [data,setData]=useState<LetAd[]>(letData.slice(0,5));
    const [hasMore, setHasMore] = useState(true);
    const [lenght,setLenght]=useState(5)
    const getMorePost = () => {
        let tempData:LetAd[];
        setTimeout(()=>{
            if (data.length < letData.length){
                tempData=data;
                tempData=tempData.concat(letData.slice(lenght,lenght+5))
                setData(tempData)
                setLenght(lenght+5)
            }
            if(letData.length == lenght+5||letData.length < lenght+5){
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
                {data?.map((item) => <LetAdvertiseCard dataLet={item as LetAd} key={item.letId} />)}
            </InfiniteScroll>
            :
            <div className="w-full flex flex-col items-center">
                {letData.map(item=><LetAdvertiseCard dataLet={item as LetAd} key={item.letId}/>)}
                <Pagination length={totalPage} currentPage={currentpage}/>
            </div>
        }
    </div>
}