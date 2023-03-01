import React from 'react';
import './Course.css'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {BiTime} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Workshop from '../Workshop/Workshop';
const Course = () => {
    const data=[
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        },
        {
            id:4,
        },
        {
            id:5,
        },
        {
            id:6,
        }
        
    ]
    return (
        <div className='Course-parent' >
            <div className='img-text-control-course'>

            <img src="https://i.ibb.co/TrXVdyL/image-16.png" alt="" />
            <h1>Ostad helps you in your career with</h1>
            </div>
            <p className='text-p-course'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
            <hr className='hr-course' />
            <div className='all-courses'>
                <div className='live-course'>
                    <img src="https://i.ibb.co/7vjTTpm/image-19.png" alt="" />
                    <h3>লাইভ কোর্সসমূহ</h3>
                </div>
                <div className='grid-card-course'>
                    {
                        data?.map(d =>{
                            return(
                                <div key={d.id}  className='card-parent-div-course'>
                    <img className='image-course-slide' src="https://i.ibb.co/SdFTkx6/image-1.png" alt="" />
                    <div className='course-btn-control1'>
                        <button className='btn-class-course1'>ব্যাচ ২৬</button>
                        <button className='btn-class-course2' > <HiOutlineUserGroup></HiOutlineUserGroup> ২০ টি সিট বাকি</button>
                        <button className='btn-class-course3'><BiTime></BiTime> ৫ দিন বাকি</button>
                    </div>
                    <div className='text-card-course-div-name'>

                    <h2>SolidWorks with Keyshot</h2>
                    </div>
                    <div className='card-footer-control'>
                        <div className='taka-discount'>
                            <h3 className='discount'>3000 TK</h3>
                            <hr className='hr-course-card' />
                            <h2>2000 TK</h2>
                        </div>
                        <div className='details-btn'>

                        <button className='btn-class-course4'>বিস্তারিত দেখি <BsArrowRight></BsArrowRight></button>
                        </div>

                    </div>
                </div>

                            )
                        })
                    }
                

                </div>
                {/* mobile responsive */}
                <div className='mobile-course-design'>
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
                         <div   className='card-parent-div-course'>
                    <img className='image-course-slide' src="https://i.ibb.co/SdFTkx6/image-1.png" alt="" />
                    <div className='course-btn-control1'>
                        <button className='btn-class-course1'>ব্যাচ ২৬</button>
                        <button className='btn-class-course2' > <HiOutlineUserGroup></HiOutlineUserGroup> ২০ টি সিট বাকি</button>
                        <button className='btn-class-course3'><BiTime></BiTime> ৫ দিন বাকি</button>
                    </div>
                    <div className='text-card-course-div-name'>

                    <h2>SolidWorks with Keyshot</h2>
                    </div>
                    <div className='card-footer-control'>
                        <div className='taka-discount'>
                            <h3 className='discount'>3000 TK</h3>
                            <hr className='hr-course-card' />
                            <h2>2000 TK</h2>
                        </div>
                        <div className='details-btn'>

                        <button className='btn-class-course4'>বিস্তারিত দেখি <BsArrowRight></BsArrowRight></button>
                        </div>

                    </div>
                </div>
                        
                        
                    </SwiperSlide>)
                }
       
                </Swiper>

                </div>
                

            </div>

            <Workshop></Workshop>
        </div>
    );
};

export default Course;