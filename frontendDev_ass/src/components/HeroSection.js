import React from 'react'
import HeroImage from '../asserts/Hero Image.png'
import Custombutton from './custombutton'


function HeroSection() {
  return (
    <div className="relative">
      <div className="h-auto w-full overflow-hidden">
        <img
          className="object-cover md:h-[700px] sm:h-[448px] w-full"
          src={HeroImage}
          alt="We crush your competitors' goals and sales records"
        />
      </div>
      <div
        className="md:absolute md:top-[345px] sm:top-[448px] lg:left-[80px] md:left-[60px] flex-col  lg:w-[630px] md:w-[622px] md:h-[306px] sm:h-[258px] h-[294px] bg-gradient-to-r from-lg2 to-lg1 flex justify-center "
      >
        <p className="text-white sm:text-tx4 text-tx6 font-[inter] font-bold sm:pl-[40px] pl-[20px] pt-[24px] pr-[32px] pb-[90px] 
                        absolute ">
        We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <div className="absolute sm:left-[40px] md:bottom-[32px] md:top-[236px] sm:top-[636px] left-[20px] top-[400px] ">
          <Custombutton text="Get free consultation" />
        </div>
      </div>
     
    </div>
  )
}

export default HeroSection