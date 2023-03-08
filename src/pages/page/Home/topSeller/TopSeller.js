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
        <div className='my-40'>
            <h2 className="text-3xl  font-bold text-center my-4">Our Top Seller</h2>
            <p className='text-2xl text-center font-bold   my-8'>Here is a list of our top sellers. Last month's selected top sellers. We select each month's top rated sellers and put a poster with their picture on our website. If you want to see yourself on our website, provide all the information about your product. If you sell products and want to be seen on our website, you must be a top seller</p>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log('')}
                // onSlideChange={() => console.log('chnge' )}
                className='mt-10'
            >
                <SwiperSlide>
                    <img className="mask mask-circle" src={manone} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Naim hasan</p>
                    <p className='text-center font-bold  '>Bangladesh</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle" src={mantwo} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Abdullah</p>
                    <p className='text-center font-bold  '>Pakistan</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle" src={manthree} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Rayhan</p>
                    <p className='text-center font-bold  '>Bangladesh</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle" src={manfour} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Ramnath Sing</p>
                    <p className='text-center font-bold  '>India</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mask mask-circle" src={manfive} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>Tudo</p>
                    <p className='text-center font-bold  '>Nepal</p>
                </SwiperSlide>
                <SwiperSlide >
                    <img className="mask mask-circle" src={mansix} alt="" />
                    <SellerRatting></SellerRatting>
                    <p className='text-center font-bold text-2xl'>jacks</p>
                    <p className='text-center font-bold  '>Africa</p>
                </SwiperSlide>
                <p className='mt-10'>...</p>
            </Swiper>
        </div>

    );
};

export default TopSeller;