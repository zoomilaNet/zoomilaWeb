import React, { useState} from 'react';
import Image from "next/image";
import Loading from "../../public/lottie/loading.json";
import {Player} from "@lottiefiles/react-lottie-player";

function Slider({basePath, photos, photoSlug}: { basePath: string, photos: string[], photoSlug: string }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const [photoUrl, setPhotoUrl] = useState<string>(basePath + photos[0]);
    const [photoLoading,setPhotoLoading]=useState<boolean>(false);
    const nextSlide = () => {
        setPhotoLoading(true);
        if (slideIndex !== photos.length) {
            {
                setSlideIndex(slideIndex + 1)
            }
            {
                setPhotoUrl(basePath + photos[slideIndex]);
            }
            setPhotoLoading(false);
        } else if (slideIndex === photos.length) {
            {
                setSlideIndex(1)
            }
            {
                setPhotoUrl(basePath + photos[1]);
            }
            setPhotoLoading(false);
        }
    }
    const prevSlide = () => {
        setPhotoLoading(true);
        if (slideIndex !== 1) {
            {
                setSlideIndex(slideIndex - 1)
            }
            {
                setPhotoUrl(basePath + photos[slideIndex]);
            }
            setPhotoLoading(false);
        } else if (slideIndex === 1) {
            {
                setSlideIndex(photos.length)
            }
            {
                setPhotoUrl(basePath + photos[photos.length-1]);
            }
            setPhotoLoading(false);
        }
    }
    return <div className='container-slider'>
        <div className="slide">
            {photoLoading==true ? <Player autoplay={true} src={Loading} loop={true} style={{ width: '60px', height: '60px' }} background="white" className=" absolute top-1/2 bottom-1/2 right-1/2 left-1/2"/>:null}
            <Image src={photoUrl} alt={photoSlug} className="w-full h-full " loading="eager"
                                      layout="fill"/>
        </div>
        <button id={"RightArrow"+basePath}
                onClick={nextSlide}
                className="btn-slide next"
        >
            <img src='/image/rightarrow.svg' alt="جهت اسلایدر"/>
        </button>
        <button id={"LeftArrow"+basePath}
                onClick={prevSlide}
                className="btn-slide prev"
        >
            <img src='/image/leftarrow.svg' alt="جهت اسلایدر"/>
        </button>
        <div
            className='absolute right-0 top-0 px-1  h-6 flex flex-row justify-center items-center rounded-bl bg-black bg-opacity-60 text-white'>
            {slideIndex}/{photos.length}
            <img src='/image/Picture.svg' alt="adsimage" className="w-4 h-4 mr-2"/>
        </div>
    </div>
}

export default Slider