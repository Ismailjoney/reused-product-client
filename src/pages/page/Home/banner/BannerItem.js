import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='overlay  w-full '>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className='absolute flex justify-center transform -translate-y-1/2 left-1/4 top-2/4 w-2/4'>
                <div>
                    <TypeAnimation
                        sequence={[
                            'Wellcome To Our Website', // Types 'One'
                            3000, // Waits 1s
                            () => {
                                // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        // style={{ fontSize: '3em' }}
                        className='text-1xl text-emerald-50 lg:font-bold lg:text-4xl'
                    />

                    <p className='mt-2  hidden  lg:block '>
                        Industry Trends
                        Get a comprehensive overview of your industry index on <span className='font-bold strong  '>BuyNow webpage</span></p>
                </div>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;