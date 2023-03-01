import React from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiFacebook } from 'react-icons/ci';
import './Com.css'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const Com = () => {
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
        }
        
        
    ]
    const data2=[
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
            id:15,
        },
        {
            id:25,
        },
        {
            id:35,
        },
        {
            id:45,
        },
        {
            id:55,
        },
        {
            id:6,
        }
        
        
    ]
    return (
        <div className='Com-parent'>
            <div className="img-text-control-course">
        <img src="https://i.ibb.co/5Mr44H6/image-24.png" alt="" />
        <h1>জয়েন করুন আমাদের কমিউনিটিতে</h1>
      </div>
      <p className="text-p-course">
        স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
        বাটনে।
      </p>
      <div className='gird-card-Com'>
        {
            data?.map(card=>{
                return(
                    <div key={card?.id} className='com-card-design'>
            <img className='imag-com' src="https://i.ibb.co/KL1h74k/Rectangle-207.png" alt="" />
            <div className='div-com'>
                <button className='btn-class-com'><HiOutlineUserGroup></HiOutlineUserGroup> 698 members</button>
                <h3>Flutter Developers Community @Bangladesh</h3>
                <button className='share-com-btn'>
                   <span>ফেসবুক গ্রুপে জয়েন করুন </span> <CiFacebook></CiFacebook>
                   </button>
            </div>
        </div>

                )
            })
        }
        

      </div>

      {/* mobile responsive */}
      <div className='mobile-responsive-com'>
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
                            slidesPerView:4,
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
                            <div key={profile?.id} className='com-card-design'>
            <img className='imag-com' src="https://i.ibb.co/KL1h74k/Rectangle-207.png" alt="" />
            <div className='div-com'>
                <button className='btn-class-com'><HiOutlineUserGroup></HiOutlineUserGroup> 698 members</button>
                <h3>Flutter Developers Community @Bangladesh</h3>
                <button className='share-com-btn'>
                   <span>ফেসবুক গ্রুপে জয়েন করুন </span> <CiFacebook></CiFacebook>
                   </button>
            </div>
        </div>
               
                       
                        
                    </SwiperSlide>)
                }
       
                </Swiper>

      </div>
     <div className='profile-com-show'>
     <div className="img-text-control-course">
        <img src="https://i.ibb.co/Qd4m3Qt/image-25.png" alt="" />
        <h1>ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন</h1>
      </div>
      <p className="text-p-course">
        স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
        বাটনে।
      </p>
      <div className='profile-card-info'>
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
                            slidesPerView:4,
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
                    data2?.map((profile) => <SwiperSlide key={profile.id} >
                            <div className='profile-card-com-design'>
        <img className='img-profile-com-size' src="https://i.ibb.co/khdB35P/Rectangle-196.png" alt="" />
        <div className='profile-info'>
            <h4>Kazi Ahad Islam (Erfan)</h4>
            <p>Country HR Manager, Amann Group</p>
            <div className='sp-icon-profile'>
                <img className='img-info-photo' src="https://i.ibb.co/QDj2mRd/Rectangle-196-1.png" alt="" />
                <img className='img-info-3' src="https://i.ibb.co/K6PFz3Z/Rectangle-196-2.png" alt="" />
                <img className='img-info-photo' src="https://i.ibb.co/QDj2mRd/Rectangle-196-1.png" alt="" />
            </div>

        </div>

      </div>
               
                       
                        
                    </SwiperSlide>)
                }
       
                </Swiper>

      </div>
      

     </div>
      
            
        </div>
    );
};

export default Com;