import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'

const MainBanner = () => {
    const slides=[
        {
          url:'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          url:'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          url:'https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },];
    
    
      const [currentIndex, setCurrentIndex]=useState(0);
    
      const prevSlide= () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex=isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide= () => {
        const isLastSLide = currentIndex === slides.length-1 ;
        const newIndex = isLastSLide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }
    
        return (
          <div id='main' className='max-w-[1400px] h-[700px] w-full mx-auto py-20 px-4 relative group'>
            <div 
              style={{backgroundImage:`url(${slides[currentIndex].url})`}}
              className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            </div>
    
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-gray-200 text-black cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
    
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-gray-200 text-black cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
    
            <div className='flex top-4 justify-center py-2'>
              {slides.map((slides, slideIndex) => (
                <div 
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl cursor-pointer'>
                  <RxDotFilled className={`${slideIndex === currentIndex ? "text-gray-700" : "text-slate-300 hover:text-gray-400"}`}/>
                </div>
              ))}
            </div>
    
          </div>
        )
}

export default MainBanner