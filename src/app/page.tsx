"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import Swal from 'sweetalert2'

function Page() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(125);
  const [topImageSrc, setTopImageSrc] = useState('/image-product-1-thumbnail.jpg');

  const handleIncrement = () => {
    setCount(count + 1);
    setPrice(price + 125);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(price - 125)
    }
  };
  const handleImageClick = (src: string) => {
    setTopImageSrc(src);
  };
  const addtocart = () => {
    Swal.fire({
      title: 'Sucessfully added to cart',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
  
  return (
    <div className='bg-white text-black lg:h-[100vh] h-auto md:h-[100vh]'>
      <nav className='flex items-center justify-around gap-[70px] p-[10px] border-b-gray-400 border-[1px]'>
        <ul className='md: flex lg:flex items-center justify-around gap-[20px] font-light'>
          <div><Image src="/logo.svg" width={100} height={100} alt="Logo image" /></div>
          <li className='md:flex lg:flex hidden'>Collections</li>
          <li className='md:flex lg:flex hidden'>Men</li>
          <li className='md:flex lg:flex hidden'>Women</li>
          <li className='md:flex lg:flex hidden'>About</li>
          <li className='md:flex lg:flex hidden'>Contact</li>
        </ul>
        <ul className='flex items-center justify-center gap-[20px]'>
          <Image className='h-[40px] w-[40px]' src="/icon-cart.svg" width={100} height={100} alt="cart" />
          <Image className='h-[50px] w-[50px]' src="/image-avatar.png" width={100} height={100} alt="prof" />
        </ul>
      </nav>
      <div className='md:flex-row flex lg:items-end items-start md:items-end justify-center lg:gap-[200px] gap-[100px] md:gap-[30px] p-[40px] lg:flex-row flex-col '>
        <section className='flex flex-col lg:gap-[15px] gap-[8px] md:flex-col'>
        <div>
        <Image className='rounded-md lg:h-[350px] lg:w-[380px] md:w-[1050px] md:h-[350px] max-sm:w-[400px] max-sm:h-[300px] lg:items-start md:items-center'   src={topImageSrc} width={100} height={100} alt="p1" />
        </div>
        <div className='flex items-center lg:gap-[20px] gap-[5px] md:flex-row md:gap-[10px]'>
        <Image className='cursor-pointer rounded-md hover:border-orange-500 border-[3px] lg:h-auto md:h-[60px] max-sm:h-[60px]' src="/image-product-1-thumbnail.jpg" width={80} height={80} alt="p1"  onClick={() => handleImageClick('/image-product-1-thumbnail.jpg')}/>
        <Image className='cursor-pointer rounded-md hover:border-orange-500 border-[3px] lg:h-auto md:h-[60px]  max-sm:h-[60px]'  src="/image-product-2-thumbnail.jpg" width={80} height={80} alt="p2"  onClick={() => handleImageClick('/image-product-2-thumbnail.jpg')}/>
        <Image className='cursor-pointer rounded-md hover:border-orange-500 border-[3px] lg:h-auto md:h-[60px]  max-sm:h-[60px]' src="/image-product-3-thumbnail.jpg" width={80} height={80} alt="p3"  onClick={() => handleImageClick('/image-product-3-thumbnail.jpg')}/>
        <Image className='cursor-pointer rounded-md hover:border-orange-500 border-[3px] lg:h-auto md:h-[60px]  max-sm:h-[60px]' src="/image-product-4-thumbnail.jpg" width={80} height={80} alt="p4"  onClick={() => handleImageClick('/image-product-4-thumbnail.jpg')}/>
        </div>
        </section>
        <div className='flex flex-col gap-[20px]'>
          <p>Sneaker Company</p>
          <div className='lg:w-[15vw] w-[60vw] text-[20px] font-bold'>Fall Limited Edition Sneakers</div>
          <p className='md:w-[50vw] lg:w-[30vw] w-[70vw]'>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
         <div className='flex flex-col  gap-[10px]'>
         <div className='flex items-center gap-[10px]'>
         <p className='font-extrabold'>${price}.00</p>
        <button className='text-white bg-black p-[1px] lg:w-[7vw] w-[14vw] rounded-lg'>50%</button>
         </div>
         <p className='text-gray-400'>$250.00</p>
         </div>
          <div className='flex items-center gap-[5px]'>
          <button className='flex items-center gap-[30px] bg-gray-300 p-[9px] rounded-md'>
          <Image onClick={handleDecrement}  className='h-[4px] w-[10px]' src="/icon-minus.svg" width={100} height={100} alt="minus" />
          {count}
             <Image onClick={handleIncrement } className='h-[10px] w-[10px]' src="/icon-plus.svg" width={100} height={100} alt="plus" />   
             </button>
          <button onClick={addtocart} className='flex items-center justify-center gap-[10px] bg-orange-500 p-[10px] lg:w-[15vw] sm:w-[40vw] md:w-[20vw] rounded-lg'><Image className='h-[20px] w-[20px]' src="/icon-cart.svg" width={100} height={100} alt="cart" /> Add to cart</button>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Page