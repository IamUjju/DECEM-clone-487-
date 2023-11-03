import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RxDotFilled} from "react-icons/rx"

const Feed = () => {

  const [currentIndex, setCurrenIndex] = useState(0);

  const slides = [
    {
      url:"https://decemdrinks.com/cdn/shop/products/SpicedBlend_Serve_1024x1024.png?v=1659602678"
    },
    {
      url:"https://decemdrinks.com/cdn/shop/products/SpicedBlend_Front_1024x1024.png?v=1659602678"
    },
    {
      url:"https://decemdrinks.com/cdn/shop/products/SpicedBlend_Back_1024x1024.png?v=1659602678"
    }
  ]

  const goToSlide = (slideIndex) => {
    setCurrenIndex(slideIndex)
  }

  return (
    <div className="container mx-auto mt-16 pt-14">
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full lg:w-1/2 2xl:w-1/2 h-100 lg:ml-60 border-2  ">
          <img  className= " relative block mx-auto my-4 w-[308.6px] h-[562px] " 
          src={slides[currentIndex].url} alt="placeholder" />
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex)=>(
              <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                <RxDotFilled/>
              </div>
            ))}
          </div>
        </div>
        <div className=" p-4 rounded-lg lg:w-2/3 md:1">
          <div className="flex justify-between lg:mr-20 mb-4">
            <Link to="*" >LONDON DRY</Link>
            <Link to="*">SPICE BLEND</Link>
            <Link to="*">APERTIF</Link>
            <Link to="*">TRIO</Link>
          </div>
          <div className="border-t border-black my-2 mb-4"></div>
          <h1 className="text-2xl font-bold ">SPICED BLEND</h1>
          <h2 className="mb-4">made with Caribbean Rum</h2>
          <div className="flex justify-between gap-auto mb-4">
          <p className="text-lg mb-4">Blended In England</p>
          <p className="text-lg ">10%vol / 700ml</p>
          </div>
            <button className="w-full bg-black text-white rounded px-4 py-2 hover:bg-gray-900">Button</button>
            <Link className="w-full flex justify-center mt-2 mb-4" to="*" >FREE UK DELIVERY</Link>
            <div className="border-t border-black my-2"></div>
            <div className="flex justify-between">
              <h4>DESCRIPTION</h4>
              <p className="text-lg">+</p>
            </div>
             <div className="border-t border-black my-2"></div>
             <div className="flex justify-between">
              <h4>TASTE</h4>
              <p className="text-lg">-</p>
            </div>
            <p>Deep bonfire toffee, warming savoury spice, rounded honey sweetness, buttery caramel throughout with a hint of tropical fruit.</p>
            <div className="border-t border-black my-2"></div>
            <div className="flex justify-between">
              <h4>SERVE</h4>
              <p className="text-lg">+</p>
            </div>
            <div className="border-t border-black my-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Feed