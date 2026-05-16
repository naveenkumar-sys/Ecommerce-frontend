import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const ProductCard = ({ ele }) => {
    return (
        <div>
            <img src={ele.images[1]} alt={ele.title} className='w-50 h-50  overflow-hidden mx-auto' />
            <h1 className='font-bold text-lg flex justify-center m-5'>{ele.title}</h1>
            <p className='font-light text-md line-clamp-1 m-3'>{ele.description}</p>
            <div className='flex justify-between'>
                <p className='font-bold text-md flex items-center gap-1'> <FaRupeeSign />  {ele.price}</p>
                <p className='font-bold text-md'>{ele.rating}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-gray-500 text-white rounded-md mt-3 cursor-pointer'>View More</button>
            </div>



        </div>
    );
};

export default ProductCard;