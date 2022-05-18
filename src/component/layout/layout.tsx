import React, {useState} from "react";
import {Router, useRouter} from "next/router";
import Loading from "../loading/loading";
import Footer from "../footer/footer";
import Header from "../header/header";

function Layout({children}:{children:JSX.Element}){
    const [show,setShow]=useState(false);
    const router = useRouter();
    Router.events.on("routeChangeStart",(url)=>{setShow(true);});
    Router.events.on("routeChangeComplete",(url)=>{setShow(false)});
    if(router.pathname == "/cityofprovince" || (router.pathname == "/neighbourhoods") || router.pathname == "/buildingtype"){
        return <div >
            {show && <Loading/>}
            {children}
        </div>
    }else{
    return <div >
        <Header/>
        {show && <Loading/>}
        {children}
        <Footer/>
        </div>
    }
}
export default Layout