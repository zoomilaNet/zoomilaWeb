import { useState } from "react";

function Detail() {
    const a = false;
    const [showImage, setShowImage] = useState(a);
    const showMapHandler = () => {
        setShowImage(true);
    }
    //const markerIcon = new Leaflet.Icon({ iconUrl: "/image/maeker.svg", iconSize: [20, 20] });

    //let zoomilaMap = <div className="w-full h-40"> <MapContainer center={[51.505, 25.09]} zoom={10}> <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></TileLayer></MapContainer></div>
    return (
        <div className="w-screen h-screen">
            <header className="bg-hf_color w-screen h-14 lg:h-16 grid grid-cols-4 gap-4 px-4">
                <div className="flex justify-start items-center">
                    <img src="/image/menu.svg" alt="منو زومیلا" />
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <img src="/image/Zoomila_Logo.svg" alt="زومیلا" />
                </div>
                <div className="flex justify-end items-center">
                    <img src="/image/Filter.svg" alt="filter" />
                </div>
            </header>
            <main className="flex flex-col justify-start">
                <div className="w-screen h-auto flex flex-row justify-center px-4">
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full h-auto md:w-4/5 lg:w-2/5 flex flex-col border border-black my-2">
                            <div className="relative aspect-w-4 aspect-h-3 ">
                                <div>
                                    <img
                                        src="/image/sample.png"
                                        alt="zoomila"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full h-auto flex flex-col">
                                <div className=" flex flex-row justify-between items-center mt-4 tracking-tight px-2">
                                    <div className="flex flex-row items-center">
                                        <h2 className="ml-2 font-iransansbold  text-ads_title text-lg md:text-3xl">
                                            فروش آپارتمان 180 متری
                                        </h2>
                                        <p className="text-gray_text text-sm md:text-base">تهران</p>
                                    </div>
                                    <p className="text-xs md:text-base font-medium">آگهی جدید</p>
                                </div>

                                <div className="bg-gray-200 p-2 flex flex-row justify-between items-center my-6">
                                    <div>
                                        <span>قیمت کل :</span>
                                        <span className="font-semibold text-lg md:text-2xl mx-2">12,000,000,000</span>
                                        <span className="font-semibold text-lg md:text-2xl">تومان</span>
                                    </div>
                                    <span className="font-iransansbold">3 خوابه</span>
                                </div>

                                <div className="mx-2 text-sm md:text-lg">
                                    <div className="bg-gray-100 rounded w-full flex flex-row justify-between items-center px-2 py-3">
                                        <div className="flex flex-row items-center">
                                            <img
                                                src="/image/aseman.png"
                                                alt="agencelogo"
                                                className="border rounded ml-2 w-10 md:w-14"
                                            />
                                            <p>املاک آسمان</p>
                                        </div>
                                        <div className="font-iransansmedium">مشاهده آگهی های این آژانس</div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="mx-2 flex flex-row justify-between items-center text-sm md:text-lg font-semibold my-6 text-white">
                                        <button className="p-2 w-3/12 h-14 rounded bg-green_accent flex flex-row justify-center  items-center">
                                            <img src="/image/call.svg" alt="" width="18px" className="ml-2" />
                                            <p className="font-iransansmedium">تماس</p>
                                        </button>
                                        <button className="p-2 w-45% h-14 rounded bg-green_accent flex flex-row justify-center items-center">
                                            <img src="/image/share.svg" alt="" width="22px" className="ml-2" />
                                            <p className="text-sm font-iransansmedium md:text-lg">اشتراک گذاری آگهی</p>
                                        </button>
                                        <button className="p-2 w-3/12 h-14 rounded bg-green_accent flex flex-row justify-center items-center">
                                            <img src="/image/sms.svg" alt="" width="20px" className="ml-2" />
                                            <p className="font-iransansmedium">پیامک</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="px-2 flex flex-row items-start text-base">
                                    <img src="/image/Location.svg" alt="" />
                                    <span className="flex flex-row mr-1">
                                        <p>آدرس:</p>
                                        <p className="text-lg text-justify font-iransansbold mr-1">پونک شمالی، شهید ستاری شمالی به جنوب خیابان پیامبر غربی (روبروی پاساژ کوروش) خیابان جهاد اکبر کوچه یازدهم</p>
                                    </span>
                                </div>

                                <div className="px-2 my-6">
                                    <div className="rounded-t h-12 bg-hf_color text-white font-medium text-xl flex flex-col justify-center items-center"><p>مشخصات آگهی</p></div>
                                    <div className="rounded-b p-2 bg-gray-100 flex flex-col justify-start space-y-2">
                                        <span className="flex flex-row items-center"><p className="ml-1">نو ملک:</p><p className="font-semibold">آپارتمان</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">متراژ:</p><p className="font-semibold">80 متر</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">شرایط معامله:</p><p className="font-semibold">فروش نقدی</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">سال ساخت:</p><p className="font-semibold">1384</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">طبقه:</p><p className="font-semibold">4</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">کل طبقات شاختمان:</p><p className="font-semibold">4</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">تعداد واحد در هر طبقه:</p><p className="font-semibold">2</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">امتیاز سازه:</p><p className="font-semibold">95</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">نوع سند:</p><p className="font-semibold">تک برگ</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">زیربنا:</p><p className="font-semibold">90 متر</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">جهت ملک:</p><p className="font-semibold">شمالی</p></span>
                                        <span className="flex flex-row items-center"><p className="ml-1">وام:</p><p className="font-semibold">200,000,000</p></span>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className="rounded-t h-12 bg-hf_color text-white font-medium text-xl flex flex-col justify-center items-center"><p>امکانات</p></div>
                                    <div className="rounded-b p-2 bg-gray-100 grid grid-cols-2 gap-y-2 gap-x-3">
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">اعلام حریق</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">کف پوش سرامیک</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">گرمایش مرکزی</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">شوتینگ</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">راه جدا</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">استخر</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">دوربین مداربسته</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">پارکینگ</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">کابینت MDF</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">جکوزی</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">تراس</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">دوبلکس</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">آب</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">برق</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">گاز</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">تلفن</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">توالت فرنگی</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">توالت ایرانی</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">وان</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">کاغذ دیواری</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">درب ریموت</p></div>
                                        <div className="flex flex-row pr-2 items-start"><img src="/image/circle-check.svg" alt="" /><p className="font-medium mr-1">نمای سنگ</p></div>
                                    </div>
                                </div>

                                <div className="px-2 my-6">
                                    <p className="text-right leading-9 text-black"><p className="text-gray_text inline-block ml-1">توضیحات</p>
                                        نوساز / کلید نخورده / نما سنگ <br />
                                        آسانسور نفربر و باربر <br />
                                        سیستم اعلام حریق <br />
                                        راه پله استیل شده و تمام سنگ <br />
                                        طبقات دوم و پنجم <br />
                                        تراس کارآمد <br />
                                        پارکینگ و انباری اختصاصی و غیر مزاحم <br />
                                        راه پله اضطراری <br />
                                        دنج و آرام <br />
                                        قابلیت رهن تا 220 میلیون <br />
                                        پرده خور <br />
                                        سند شخصی <br />
                                        فروشنده واقعی <br />

                                    </p>
                                </div>

                                <div className="p-2">
                                    {showImage ? <p>show map in here</p> : <img src="/image/map.jpg" alt="" onClick={showMapHandler} />}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-hf_color w-screen h-20 flex justify-center items-center text-2xl text-white">
                فوتـر
            </footer>
        </div>
    );
}
export default Detail;
//<MapContainer className="w-full aspect-w-4 aspect-h-3 overflow-hidden" center={[34.78838477191029, 48.513294270074375]} zoom={2} scrollWheelZoom={true}> <TileLayer className="w-full h-full" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' /><Marker position={[34.78838477191029, 48.513294270074375]} icon={markerIcon}><Popup>zoomila</Popup></Marker></MapContainer>