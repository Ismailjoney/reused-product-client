import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import manone from '../../../../assets/manone.jpg'
import mantwo from '../../../../assets/mantwo.jpg'
import manthree from '../../../../assets/manthree.jpg'
import manfour from '../../../../assets/manfour.jpg'
import manfive from '../../../../assets/manfive.jpg'
import mansix from '../../../../assets/mansix.jpg'
import SellerRatting from './SellerRatting';


const TopSeller = () => {
    return (
        <div className='mt-8  '>
            <h2 className="text-3xl  font-bold text-center my-8">Our Top Seller</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log('')}
                onSlideChange={() => console.log('chnge' )}
            >
                <SwiperSlide>
                    <img className="mask mask-circle"  src={manone} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Naim hasan</p>
                    <p className='text-center font-bold  '>Bangladesh</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle"  src={mantwo} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Abdullah</p>
                    <p className='text-center font-bold  '>Pakistan</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle"  src={manthree} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Rayhan</p>
                    <p className='text-center font-bold  '>Bangladesh</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle"  src={manfour} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Ramnath Sing</p>
                    <p className='text-center font-bold  '>India</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle"  src={manfive} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Tudo</p>
                    <p className='text-center font-bold  '>Nepal</p>
                </SwiperSlide>
                <SwiperSlide >
                    <img className="mask mask-circle"  src={mansix} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>jacks</p>
                    <p className='text-center font-bold  '>Africa</p>
                </SwiperSlide>
                <span className='mt-10'>...</span>
            </Swiper>
        </div>

    );
};

export default TopSeller;