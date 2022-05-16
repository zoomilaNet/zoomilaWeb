import ProjectCard from "../../src/component/projectcard/ProjectCard"
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Projects() {
    return <div>
        <Head>
            <title>خرید پروژه های ساختمانی | آماده فروش و در حال ساخت | زومیلا</title>
        </Head>
        <header className='bg-hf_color w-screen h-14 lg:h-16 grid grid-cols-4 gap-4 px-4'>
            <div className="flex justify-start items-center"><img src="/image/menu.svg" alt="منو زومیلا"
                                                                  className="w-6 h-6"/></div>
            <Link href={`./`}>
                <div className="col-span-2 flex justify-center items-center cursor-pointer"><img
                    src="/image/Zoomila_Logo.svg" alt="زومیلا" className="h-12 lg:h-14 w-52"/></div>
            </Link>
        </header>
        <main className="flex flex-col justify-start">
            <div className="w-screen h-auto flex flex-row justify-center px-4">
                <div className="w-full flex flex-col items-center">
                    <h1 className="font-iransansbold text-xl my-6">لیست پروژه های ساختمانی</h1>
                    <div
                        className="bg-gradient-to-b from-upnblue_gradient to-downnblue_gradient w-full h-20 my-2 md:w-4/5 lg:w-2/5 flex flex-row items-center justify-between px-4 rounded-md">
                        <span className="flex flex-col items-start justify-center text-white text-2xl">
                    <p>شهر</p>
                  </span>
                        <span className="flex flex-row items-center h-8">
                    <span
                        className="bg-upgreen_gradient h-full p-1 rounded ml-2 flex justify-center text-base">همه</span>
                    <span className="p-1 bg-arrow rounded h-full flex justify-center">
                      <img src="./image/left.svg" alt="انتخاب شهر" className="w-6 h-6"/>
                    </span>
                  </span>
                    </div>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
        </main>
    </div>
}