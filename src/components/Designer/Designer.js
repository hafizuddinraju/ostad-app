import React from 'react';
import './Designer.css'
import { ImPlay2 } from 'react-icons/im';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const Designer = () => {
    const data = [
        {
            id:1,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:2,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:3,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:4,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:5,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:6,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:7,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:8,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
        {
            id:9,
            img:"https://i.ibb.co/WH33YTP/Rectangle-186.png",
            p_Img:'https://i.ibb.co/SK3x1L6/Course-Image.png',
            name:'ক্যারিয়ার করুন ওয়েব ডিজাইনে'
        },
    ]
    return (
        <div className='Designer-parent'>
            <div className='header-img-text'>
                <img src="https://i.ibb.co/85r5KQf/image-17.png" alt="" />
                <h1>এক্সপার্টদের ক্যারিয়ার গাইডলাইন</h1>
            </div>
            <div className='slider-content-designer'>

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
                        <div className='div-design-text-parent'>
                    <img className='imag-designer-size' src={profile?.p_Img} alt="" />
                    <div className='div-design-text'>
                        <ImPlay2></ImPlay2>
                        <h4>{profile?.name}</h4>
                    </div>
                    <hr className='hr-designer' />
                    <div className='profile-text-design'>
                        <img className='profile-imag' src={profile?.img} alt="" />
                        <div>
                            <h3>Instructor name</h3>
                            <p>Expertise field name</p>
                        </div>
                    </div>
                </div>
                        
                    </SwiperSlide>)
                }
       
                </Swiper>
            </div>

                
            
        </div>
    );
};

export default Designer;