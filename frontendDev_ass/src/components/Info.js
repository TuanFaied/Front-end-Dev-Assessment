import React from 'react'
import Custombutton from './custombutton'

const Info = ({ text1,texth,text2,imag,reverse }) => {
  return (
    <div className={`flex sm:flex sm:items-center flex-col lg:mx-[188px] md:mx-[152px] lg:mb-[80px] lg:w-[1064px] lg:h-[414px] md:w-[896px] md:h-[346px] sm:w-[688px] sm:h-[275px] h-[572.8px] w-[335px]
    ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
                     >
      <div className=" overflow-hidden">
        <img
          className="object-cover lg:h-[414px] lg:w-[414px] md:h-[346px] md:w-[346px] sm:h-[275px] sm:w-[275px] h-[276px] w-[275px]"
          src={imag}
          alt="Web & Mobile App Development"
        />
      </div>
      
        <div className={`lg:w-[542px] md:w-[530px] sm:w-[393px] w-[335px] ${reverse ? "lg:pr-[108px] md:pr-[20px]":"lg:pl-[108px] md:pl-[20px]"} `} >
          <h1 className=" font-bold text-PrimaryColor">{texth}</h1>
          <p className="mt-5 text-tx ">{text1}</p>
          <div className='mt-5'>
          <Custombutton text={text2} />
          </div>
          
        </div>
      
    </div>
  )
}

export default Info