import React from 'react'
import CardInfo from './Info'
import Image2 from '../asserts/image2.png'
import Image1 from '../asserts/image1.png'
import FAQ from './FAQ'
function body() {
  return (
    <>
    <div className='lg:px-[188px] md:px-[152px] sm:px-[40px] px-[20px]'>
    <CardInfo  
     text2="Learn More" text1="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
              texth="Web & Mobile App Development" imag={Image2} reverse={false}
    />
    <CardInfo text2="Learn More" text1="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
              texth="Digital Strategy Consulting" imag={Image1} reverse={true}
    />
    </div>
    <div className="flex justify-center items-center "> 
      <div className="lg:w-[864px] lg:h-[392px] md:w-[896px] md:h-[392px] sm:w-[686px] sm:h-[506px] w-[334px] h-[769px]"> 
      <p className='text-tx8 flex justify-center items-center text-PrimaryColor pb-7' >
      Frequently asked questions
      </p>
        <FAQ />
      </div>
    </div>
    </>
  )
}

export default body