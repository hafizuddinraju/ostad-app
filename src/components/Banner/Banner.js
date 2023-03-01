import React from 'react';
import './Banner.css'
import {BiCalendar} from 'react-icons/bi'
import {HiOutlineUserGroup, HiOutlineArrowRight} from 'react-icons/hi'
const Banner = () => {
    return (
        <div className='banner-parent'>
            
            <div className='div-control'>
           <div className='imag-div-top'>
            <img src="https://i.ibb.co/ysP7cfZ/logo3.png" alt="" />
           </div>
           <div className='content-div'>
            <h1>Tech and development</h1>
            <p className='text-p-set'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
            <div className='btn-control-bannder'>
                <div className='btn-banner' ><BiCalendar></BiCalendar> ৭টি লাইভ কোর্স</div>
                <div className='btn-banner1'><HiOutlineUserGroup></HiOutlineUserGroup> ১৪২৪৫ জন Ostad গ্র্যাজুয়েট</div>
            </div>
            <div className='btn-control-bannder1'>
                <div className='btn-banner-start' >
                   <span>Start Learning</span>  
                   <HiOutlineArrowRight></HiOutlineArrowRight>
                   </div>
                <div className='btn-banner-start-1'>assessment</div>
            </div>
           </div>
           </div>
           
        </div>
    );
};

export default Banner;