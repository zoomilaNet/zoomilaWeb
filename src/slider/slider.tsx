import {useEffect, useState} from 'react';
import Image from "next/image";

function Slider({basePath, photos, photoSlug}: { basePath: string, photos: string[], photoSlug: string }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const [photoUrl, setPhotoUrl] = useState<string>(basePath + photos[1]);
    const nextSlide = () => {
        if (slideIndex !== photos.length) {
            {
                setSlideIndex(slideIndex + 1)
            }
            {setPhotoUrl(basePath + photos[slideIndex])}

        } else if (slideIndex === photos.length) {
            {
                setSlideIndex(1)
            }
            {setPhotoUrl(basePath + photos[slideIndex])}

        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            {
                setSlideIndex(slideIndex - 1)
            }
            {setPhotoUrl(basePath + photos[slideIndex])}

        } else if (slideIndex === 1) {
            {
                setSlideIndex(photos.length)
            }
            {setPhotoUrl(basePath + photos[slideIndex])}

        }
    }
    return <div className='container-slider'>
        <div className="slide">{photoUrl != ""? <Image src={photoUrl} alt={photoSlug} className="w-full h-full" loading="eager"
                                      layout='fill'/>:null}</div>
        <button id="RightArrow"
                onClick={nextSlide}
                className="btn-slide next"
        >
            <img src='/image/rightarrow.svg' alt="جهت اسلایدر"/>
        </button>
        <button id="LeftArrow"
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