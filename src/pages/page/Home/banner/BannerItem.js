import React from 'react';
 

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
        <div className='overlay  w-full '>
            <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className='absolute flex justify-center transform -translate-y-1/2 left-1/4 top-2/4 w-2/4'>
           <div>
           <h2 className='text-5xl font-bold text-emerald-50'>Wellcome To Our Website</h2>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur vel mollitia itaque totam, numquam dolor vitae quaerat, optio provident temporibus odio laborum voluptates delectus sapiente amet soluta repellat facere?</p>
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