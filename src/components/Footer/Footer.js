import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-parent'>
            <div className='grid-footer'>
            <div>
                <img src="https://i.ibb.co/XpG4bxh/c4.png" alt="" />
                <p className='text-p-footer'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
                <div className='img--flex-footer'>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/nkjT8pR/image-12.png" alt="" />
                    </div>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/qmxxhqK/image-13.png" alt="" />
                    </div>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/sw7zmHC/image-14.png" alt="" />
                    </div>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/6JpWCjY/image-11.png" alt="" />
                    </div>

                </div>
            </div>
            <div>
                <p>জয়েন করুন এক্সপার্টদের টিমে</p>
                <p>ব্লগ</p>
            </div>
            <div>
                <p>Baridhara Road, Nadda,</p>
                <p>Gulshan-2, Dhaka-1212</p>
            </div>
            <div>
                <p>Terms & Conditions</p>
            </div>

            </div>
            {/* mobile responsive */}
            <div className='mobile-responsive'>
                <div className='logo-img-flex'>
                    <img className='img-logo-footer' src="https://i.ibb.co/fYD0w9g/logo2.png" alt="" />
                    <h2>Ostad</h2>
                </div>
                <p className='p-footer-text'>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
                <h4 className='g4-footer'>ডাউনলোড করুন ওস্তাদ অ্যাপ</h4>
                <img src="https://i.ibb.co/XpG4bxh/c4.png" alt="" />
                <p className='text-p-footer'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
                <div className='img--flex-footer'>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/nkjT8pR/image-12.png" alt="" />
                    </div>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/qmxxhqK/image-13.png" alt="" />
                    </div>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/sw7zmHC/image-14.png" alt="" />
                    </div>
                    <div className='img-footer-div'>
                        <img className='img-footer-img' src="https://i.ibb.co/6JpWCjY/image-11.png" alt="" />
                    </div>

                </div>
                <div className='test-footer'>

                <h5>কুইক লিঙ্ক</h5>
                <p>আপকামিং লাইভ ব্যাচ</p>
                <p>ফ্রি লাইভ ক্লাস</p>
                <p>লাইভ ওয়ার্কশপ</p>
                <p>জয়েন করুন এক্সপার্টদের টিমে</p>
                <p>ব্লগ</p>
                </div>
                <div className='test-footer'>

                <h5>যোগাযোগ</h5>
                <p>01781-611903</p>
                <p>support@ostad.app</p>
                <p>Ka-6/a, Navana Sylvania, Baridhara Road, </p>
                <p>Nadda, Gulshan-2, Dhaka-1212</p>
                
                </div>
                <div className='test-footer'>

                <h5>কোম্পানি</h5>
                <p>আমাদের সম্পর্কে</p>
                
                
                </div>
                
            </div>
            
            
        </div>
    );
};

export default Footer;