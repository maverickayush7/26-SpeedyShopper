// import React,{ useEffect, useState } from 'react'
// import { data1 } from './RowData'
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';



// const Row = () => {
  
//   //For making different slide length when screen is full sized or small sized
//   const [useBigSlide, setUseBigSlide] = useState(false);

//   useEffect(() => {
//     const smBreakpoint = 640; // Define the "sm" breakpoint width

//     // Function to check if the screen size is above "sm" breakpoint
//     const checkScreenSize = () => {
//       setUseBigSlide(window.innerWidth >= smBreakpoint);
//     };

//     // Initial check
//     checkScreenSize();

//     // Add a listener to update useBigSlide when the screen size changes
//     window.addEventListener('resize', checkScreenSize);

//     // Clean up the listener when the component unmounts
//     return () => {
//       window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);

//   const leftHandleClick = () => {
//     if (useBigSlide) {
//       slideLeftBig();
//     } else {
//       slideLeftSmall();
//     }
//   };

//   const rightHandleClick = () => {
//     if (useBigSlide) {
//       slideRightBig();
//     } else {
//       slideRightSmall();
//     }
//   };

//   const slideLeftBig=()=>{
//     var slider=document.getElementById('slider')
//     slider.scrollLeft=slider.scrollLeft-500
//   };

//   const slideRightBig=()=>{
//     var slider=document.getElementById('slider')
//     slider.scrollLeft=slider.scrollLeft+500
//   };

//   const slideLeftSmall=()=>{
//     var slider=document.getElementById('slider')
//     slider.scrollLeft=slider.scrollLeft-270
//   };

//   const slideRightSmall=()=>{
//     var slider=document.getElementById('slider')
//     slider.scrollLeft=slider.scrollLeft+270
//   };


//   return (
//     <>
//       <div id='work' className='sm:mx-[100px] relative flex items-center'>
//         <BsChevronCompactLeft className='rounded-full p-2 bg-gray-200 text-black cursor-pointer hover:scale-105 ease-in-out duration-200' onClick={leftHandleClick} size={30}/>
//         <div id="slider" className='w-full h-full rounded-lg overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
//             {data1.map((item)=>(
//               <img className='w-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt="/" />
//             ))}
//         </div>
//         <BsChevronCompactRight className='mx-5 rounded-full p-2 bg-gray-200 text-black cursor-pointer hover:scale-105 ease-in-out duration-200' onClick={rightHandleClick} size={30}/>
//       </div>
//     </>
//   )
// }

// export default Row