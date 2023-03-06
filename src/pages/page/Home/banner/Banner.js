import React from 'react';
import Img1 from '../../../../assets/Img1.jpg'
import Img2 from '../../../../assets/Img2.jpg'
import Img3 from '../../../../assets/Img3.jpg'
import BannerItem from './BannerItem';

const Banner = () => {

    const bannerData = [
        {
            image: Img1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image:Img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: Img3,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full py-2">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;