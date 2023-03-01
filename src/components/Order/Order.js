import React from 'react';
import './Order.css'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const Order = () => {
    const data=[
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        }
        
        
        
    ]
    return (
        <div className='order-parent'>
            <div className='order-control'>
            <div className="img-text-control-course">
        <img src="https://i.ibb.co/2vcCzpf/image-27.png" alt="" />
        <h1>ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন</h1>
      </div>
      <p className="text-p-course">
        স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
        বাটনে।
      </p>
      <div className='grid-order'>
        {
            data?.map(card =>{
                return(
                    <div key={card?.id} className='card-order'>
        <img className='img-size-order' src="https://i.ibb.co/QC6Zg1S/image-26.png" alt="" />
        <p className='text-order'>
            <span>March 3, 2022</span>
            <li>
5 min read</li>
        </p>
        <h4>IELTS Reading Test</h4>
        <p>IELTS Reading</p>
      </div>

                )
            })
        }

      </div>

      {/* mobile responsive */}
      <div className='mobile-order'>
      <Swiper
                    modules={[ Navigation, Autoplay]}
                    breakpoints={{
                        360:{
                            slidesPerView:1,
                            spaceBetween:30
                        },
                        768:{
                            slidesPerView:2,
                            spaceBetween:30
                        },
                        991:{
                            slidesPerView:3,
                            spaceBetween:30
                        },
                    }}
                    autoplay={{
                        delay:1500
                    }}
                    navigation
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    className="mySwiper"
                >

                {
                    data?.map((profile) => <SwiperSlide key={profile.id} >
                    
                    <div className='card-order'>
        <img className='img-size-order' src="https://i.ibb.co/QC6Zg1S/image-26.png" alt="" />
        <p className='text-order'>
            <span>March 3, 2022</span>
            <li>
5 min read</li>
        </p>
        <h4>IELTS Reading Test</h4>
        <p>IELTS Reading</p>
      </div>
                       
                        
                    </SwiperSlide>)
                }
       
                </Swiper>

      </div>
      

            </div>
            
        </div>
    );
};

export default Order;