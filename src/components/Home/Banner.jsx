

import React, { useState, useEffect } from 'react'
import Fotter from './Fotter';

const Banner = () => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
    
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])

      const styles = {
        paperContainer: {
            // height: 512,
            height: screenSize.dynamicHeight/2,
            backgroundImage: 'url("assets/images/banner3.png")',
            backgroundRepeat:"no-repeat",
            // backgroundSize:"contain",
            width:screenSize.dynamicWidth/4,
            // width:313,
            backgroundSize: 'cover',
        },
    };
    
    const left = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
  
    const logo = <svg height="20px" width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play ml-1 text-xs  text-v5-green-100 group-hover:text-v5-green-400 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path></svg>
  return (
  
    <div className="container mt-8">
      <div className="grid grid-cols-2  px-28">
        <div className="container ml-16">
               <div className="container px-15 py-12 ml-10">
               <p className="text-5xl font-semibold leading-tight">
                  Learn Like You Would <br/> At India’s Top Tech Companies.
               </p>
               <p className="text-2xl font-light mt-6 text-gray-500">
                  Work-experience based learning programs for developers.
               </p>
               <div className="mt-7 text-gray-500">
                  <p className="text-lg ">
                    <strong>Build</strong> professional projects like the top 1% developers.
                  </p>
                  <p className="text-lg">
                    <strong>Master</strong> the latest full stack and backend tech with real work-ex.
                  </p>
                  <p className="text-lg">
                    <strong>Crack</strong> developer jobs at the best tech companies.
                  </p>
                </div>
                <div className="mt-7 inline-flex hover:underline hover:decoration-green-900 cursor-pointer">
                  <div className="rounded-full w-7 h-7    bg-green-600">
                    <div className="justify-items-center p-1">
                      {logo}
                    </div>
                
                  </div>
                  <a className="text-2xl ml-4 font-bold text-green-900">
                    Upskill with CWS
                  </a>
               </div>
               <div className="flex-1 ml-8 space-x-4 mt-4">
                    <a href="" className="text-center rounded-lg border-solid border-2 p-3 font-semibold text-xl border-black inline-flex items-center justify-items-center hover:border-green-900 hover:bg-green-900 hover:text-green-100 px-4 hover:drop-shadow-3xl  ">Explore Our Programs <span className='mt-1'>{left}</span></a>
                    <a href="" className="text-center rounded-lg border-solid border-2 p-3 font-semibold text-xl inline-flex items-center justify-items-center bg-black text-white px-2.9 drop-shadow-xl  hover:drop-shadow-3xl ">Apply For Free Trial,Now <span className='mt-1'>{left}</span> </a>
                    
               </div>
               </div>
               <div className="ml-10">
                <div className="rounded-lg bg-emerald-100 flex-inline grid grid-cols-5 gap-x-0">
                  <div className="text-center leading-none rounded-l-lg  border-2 p-1 border-r-black"><span className='font-bold text-2xl '>93%</span> <br /> <span className='text-sm text-gray-500'>placed within of gradutaion</span></div>
                  <div className="text-center leading-none border-2 border-r-black p-1"><span className='font-bold text-2xl'>11 LPA</span> <br /> <span className='text-sm text-gray-500'>placed within of gradutaion</span></div>
                  <div className="text-center leading-none border-2 border-r-black p-1"><span className='font-bold text-2xl'>22 LPA</span> <br /> <span className='text-sm text-gray-500'>placed within of gradutaion</span></div>
                  <div className="text-center leading-none border-2 border-r-black p-1"><span className='font-bold text-2xl'>240+</span> <br /> <span className='text-sm text-gray-500'>placed within of gradutaion</span></div>
                  <div className="text-center leading-none p-1 "><span className='font-bold text-2xl'>89%</span> <br /><span className='text-sm text-gray-500'>placed within of gradutaion</span></div>
                </div>
               </div>
          </div>
        <div className="container flex justify-center items-center mt-3  ml-4">
        <img src='assets/images/banner5.png'  alt="profile"  className=' py-4 ml-32   w-10  '/>
        
        <div className=" px-9  " style={styles.paperContainer}>
          {/* <img src='assets/images/banner4.png'   alt="profile"  className=' top-0   ml-28 py-2  w-4/5  '/> */}
        </div>
        </div>
      </div>


    </div>
        
    
  )
}

export default Banner