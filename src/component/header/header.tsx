import React from "react";
import Link from "next/link";

export default function Header(){
    return <header className='bg-hf_color w-screen h-14 lg:h-16 grid grid-cols-4 gap-4 px-4'>
        <div className="flex justify-start items-center"><img src="/image/menu.svg" alt="منو زومیلا" className="w-6 h-6"/></div>
        <Link href={`/`}><div className="col-span-2 flex justify-center items-center cursor-pointer"><img src="/image/Zoomila_Logo.svg" alt="زومیلا" className="h-12 lg:h-14 w-52"/></div></Link>
    </header>
}