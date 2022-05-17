import React, {useState} from "react";

import {Router} from "next/router";
import Loading from "../loading/loading";
import Footer from "../footer/footer";


function Layout({children}:{children:JSX.Element}){
    const [show,setShow]=useState(false)
    Router.events.on("routeChangeStart",(url)=>{
            setShow(true);
        });
    Router.events.on("routeChangeComplete",(url)=>{setShow(false)});
    let loadingShow =<div className='absolute w-screen h-screen opacity-100 flex justify-center items-center'><img src="/image/Loading.gif" alt="zoomila" /></div>;

    return <div className="relative">
        {show && <Loading/>}
        {children}
        <Footer/>
        </div>
}
export default Layout