import Image from 'next/image'
import React from 'react'

const ProductCard = ({ title, price, image_url }) => {
    return (
        <div className=' rounded-xl  py-2 px-4 cursor-pointer border sm:w-[20rem] sm:h-[24rem]'>
            <div className='h-[16rem] flex justify-center'>
                <Image src={image_url} width={200} height={200} alt={title} className='object-contain h-[250px] w-[300px]' />
            </div>

            <div className='mt-2 flex flex-col gap-1 font-bold'>
                <span>{title}</span>
                <span>Rs.{price}</span>
            </div>
        </div>
    )
}

export default ProductCard
