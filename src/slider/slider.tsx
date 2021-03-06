import React, { useState} from 'react';
import Image from "next/image";



function Slider({basePath, photos, photoSlug}: { basePath: string, photos: string[], photoSlug: string }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [photoUrl, setPhotoUrl] = useState<string>(basePath + photos[0]);
    const [photoLoading,setPhotoLoading]=useState<boolean>(false);
    const nextSlide = () => {
        setPhotoLoading(true);
        if ((slideIndex+1) < photos.length) {

                setSlideIndex(slideIndex + 1)

                setPhotoUrl(basePath + photos[slideIndex+1]);

            setPhotoLoading(false);
        } else if ((slideIndex+1) === photos.length) {

                setSlideIndex(0);

                setPhotoUrl(basePath + photos[0]);

            setPhotoLoading(false);
        }
    }
    const prevSlide = () => {
        setPhotoLoading(true);
        if ((slideIndex-1) >= 0) {

                setSlideIndex(slideIndex - 1)

                setPhotoUrl(basePath + photos[(slideIndex-1)]);

            setPhotoLoading(false);
        } else if ((slideIndex-1) < 0) {

                setSlideIndex((photos.length-1))

                setPhotoUrl(basePath + photos[photos.length-1]);

            setPhotoLoading(false);
        }
    }
    return <div className='container-slider'>
        <div className="slide">
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
            {(slideIndex+1)}/{photos.length}
            <img src='/image/Picture.svg' alt="adsimage" className="w-4 h-4 mr-2"/>
        </div>
    </div>
}

export default Slider