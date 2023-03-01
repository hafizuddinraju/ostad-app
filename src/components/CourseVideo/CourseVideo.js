import React from "react";
import { BiTime } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import "./CourseVideo.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const CourseVideo = () => {
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
            id:7,
        },
        {
            id:8,
        },
        {
            id:9,
        }
        
    ]
  return (
    <div className="Course-video-parent">
      <div className="img-text-control-course">
        <img src="https://i.ibb.co/ZVTM1Cv/image-22.png" alt="" />
        <h1>ফ্রি ভিডিও রিসোর্স</h1>
      </div>
      <p className="text-p-course">
        স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
        বাটনে।
      </p>
      <hr className="hr-course" />
     
     <div className="div-workshop-slider">
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
                        <div className="card-workshop-design">
        <img className="img-div-workshop" src="https://i.ibb.co/6spX5rm/c3.png" alt="" />
        <p>Language Learning</p>
        <h4>IELTS Listening: 15 Days Challenge</h4>
        <div className="time-workshop-parent">
            <div className="time-workshop">
                <BiTime></BiTime> 
                <span>60 min</span>
                </div>
            <div className="time-workshop">
                <AiOutlineCalendar></AiOutlineCalendar> 
                <span>30 March, 2022</span>
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

export default CourseVideo;
