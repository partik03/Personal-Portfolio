import {Splide,SplideSlide,SplideTrack} from "@splidejs/react-splide"
import Image from "next/image"
import '@splidejs/react-splide/css';
const Carousel = () => {
  return (
    <Splide className="flex items-center" hasTrack={false} aria-label="My Favorite Images"
    options={{
        rewind: true,
        perPage: 1,
        gap: '1rem',
        pagination: true,
        type: 'loop',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        resetProgress: true,
        width: '100%',
    }}
    >
        <SplideTrack>
  <SplideSlide className="w-full flex justify-center items-center">
   <Image src="/1.png" alt="Image 1"  height="600" width="1200"/>  
  </SplideSlide>
  <SplideSlide className="flex justify-center">
  <Image src="/2.png" alt="Image 2" height="600" width="1200"/>

  </SplideSlide>
  <SplideSlide className="flex justify-center">
  <Image src="/3.png" alt="Image3" height="300" width="600"/>

  </SplideSlide>
  </SplideTrack>
  <div className="splide__arrows">
    <button className="splide_arrow splide__arrow--prev" 
    >Prev</button>
    <button className="splide_arrow splide__arrow--next" 
    >Next</button>
  </div>
</Splide>
  )
}

export default Carousel