import React from 'react';
import './Navbar.css'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
const Navbar = () => {
    return (
        <div>
            {/* DeskLop Responsive */}
            <div className='parent-div'>
                <div className='div-left'>
                    <img className='img-size' src="https://i.ibb.co/fYD0w9g/logo2.png" alt="" />
                    <h1>Ostad</h1>
                    
                </div>
                <div className='div-right'>
                    <ul className='All-li'>
                        <li className='li-control'>
                           <span>সেট ইয়োর গোল</span> 
                           <MdKeyboardArrowDown className='icon-size'></MdKeyboardArrowDown></li>
                        <li>আপকামিং লাইভ ব্যাচ</li>
                        <li className='li-control'>
                            <img className='img-flag' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="" />
                            <span>ENGLISH</span> 
                            </li>
                        <li>
                            <button className='btn-login'>LOGIN</button>
                        </li>
                        
                        </ul>                    
                </div>
            </div>
            {/* Mobile Responsive */}
            <div className='parent-div-mobile'>
                <div className='div-left'>
                    <img className='img-size' src="https://i.ibb.co/fYD0w9g/logo2.png" alt="" />
                    <h1>Ostad</h1>
                    
                </div>
                <div className='div-right'>
                    <ul className='All-li'>
                    
                        <li>
                            <button className='btn-login'>LOGIN</button>
                        </li>
                        <li><RxHamburgerMenu></RxHamburgerMenu></li>
                        
                        </ul>                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;