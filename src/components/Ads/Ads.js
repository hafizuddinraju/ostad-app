import React from 'react';
import './Ads.css'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const Ads = () => {
    const data2=[
        {
            id:1,
            img:'https://i.ibb.co/7y62M8Q/Frame-12523.png'
        },
        {
            id:2,
            img:'https://i.ibb.co/gZqT2rt/Frame-12525.png'
        },
        {
            id:3,
            img:'https://i.ibb.co/4sL4ShW/Frame-12524.png'
        },
        {
            id:4,
            img:'https://i.ibb.co/s2CY8Xr/Frame-12526.png'
        },
        {
            id:15,
            img:'https://i.ibb.co/s2CY8Xr/Frame-12526.png'
        },
        {
            id:25,
            img:'https://i.ibb.co/gZqT2rt/Frame-12525.png'
        },
        {
            id:35,
            img:'https://i.ibb.co/4sL4ShW/Frame-12524.png'
        },
        {
            id:55,
            img:'https://i.ibb.co/s2CY8Xr/Frame-12526.png'
        },
        {
            id:85,
            img:'https://i.ibb.co/7y62M8Q/Frame-12523.png'
        },
        {
            id:75,
            img:'https://i.ibb.co/s2CY8Xr/Frame-12526.png'
        },
        
        
        
    ]
    return (
        <div className='ads-parent'>
            <h3 className='ads-top-text'>Top companies trust Ostad</h3>
            <div className='slider-ads-info'>
            <Swiper
                    modules={[ Autoplay]}
                    breakpoints={{
                        360:{
                            slidesPerView:1,
                            spaceBetween:30
                        },
                        560:{
                            slidesPerView:3,
                            spaceBetween:30
                        },
                        
                        768:{
                            slidesPerView:4,
                            spaceBetween:30
                        },
                        991:{
                            slidesPerView:6,
                            spaceBetween:30
                        },
                    }}
                    autoplay={{
                        delay:1500
                    }}
                    
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    className="mySwiper"
                >

                {
                    data2?.map((profile) => <SwiperSlide key={profile.id} >
                     
               <div className='img-ads-control'>
                <img src={profile.img} alt="" />
               </div>
                       
                        
                    </SwiperSlide>)
                }
       
                </Swiper>

            </div>
            
        </div>
    );
};

export default Ads;