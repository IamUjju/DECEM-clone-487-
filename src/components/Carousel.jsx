import React ,{useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"


const Carousel = () => {

    const [currentIndex, setCurrentIndex] =useState(1);

    const slides = [
        {
            text:"Its my new go-to guilt-free tipple to unwind the gragrant notes of vanilla and ginger root won me over.",
        },
        {
            text:'Fantastic taste and slick design. Cant wait to try some of the cocktails.',
        }
        ,{
            text:'Such and anmazing brand and its fitting for all occasions without compormising on taste. Brillinat as a gift or a nightcap',
        },
        {
            text:'Looks gorgeous in my drinks cabinet and tastes amazing in a glass. What more do you want?!',
        },
    ]

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 
        slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }

    const nextSlide  = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0: currentIndex+1;
        setCurrentIndex(newIndex)
    }

    
  return (
     <div className="relative w-full max-w-[1400px] h-[200px] mx-auto py-16 px-4">
      <div className="flex items-center justify-center h-10 mt-8 text-4xl ">
          <p className='w-2/3 text-center'>{slides[currentIndex].text}</p>
      </div>

      <div className="absolute top-[50%] -translate-x-0 
      tanslate-y-[-50%] left-5 text-2xl rounded-full p-2
       bg-black text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 
      tanslate-y-[-50%] right-5 text-2xl rounded-full p-2
       bg-black text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  )
}

export default Carousel