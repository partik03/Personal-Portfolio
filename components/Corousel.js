// import img from 'next/img';
import React, { useState } from 'react'
// import styles from '../styles/Corousel.module.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Navigation,Keyboard, Autoplay, Pagination} from "swiper";
const Corousel = () => {
    return (
        <>
         <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true ,enabled:true}}
        navigation={true}
        keyboard={{enabled:true}}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow,Navigation,Keyboard,Autoplay,Pagination]}
        className="mySwiper"
        style={{
        width: "100%",
         paddingTop: "1vh",
        paddingBottom: "1vh",}}
      >
        <SwiperSlide style={{ 
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "60vh",
        }}>
          <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_837079638.jpg" alt="5" />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        }}>
          <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_837079638.jpg" alt="6" />
        </SwiperSlide>
      </Swiper>
        </>
    )
  
}
export default Corousel